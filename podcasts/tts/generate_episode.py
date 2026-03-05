#!/usr/bin/env python3
"""Generate a single podcast episode using local Piper ONNX models.

Produces per-segment WAVs (including silence for pauses) inside
  podcasts/audio/segments/<slug>/
along with a manifest.json compatible with the Node.js build pipeline.
Then concatenates them into one episode WAV at
  podcasts/audio/<slug>.wav

Usage:
  python -m podcasts.tts.generate_episode                         # ep00 default
  python -m podcasts.tts.generate_episode ep05-pull-requests      # by slug
  python -m podcasts.tts.generate_episode --script path/to/file.txt
"""
import hashlib
import json
import os
import sys
import wave
import subprocess
import tempfile
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent          # podcasts/
SCRIPTS_DIR = ROOT / 'scripts'
AUDIO_DIR = ROOT / 'audio'
SEGMENTS_DIR = AUDIO_DIR / 'segments'
MODELS_DIR = ROOT / 'tts' / 'models'
LEXICON_PATH = Path(__file__).resolve().parent / 'lexicon.txt'

SAMPLE_RATE = 24000
CHANNELS = 1
SAMPWIDTH = 2  # 16-bit

PAUSE_SECONDS = 1.5
LENGTH_SCALE = 1.1    # >1.0 = slower speech; 1.0 = default speed

MALE_MODEL = MODELS_DIR / 'en_US-hfc_male-medium.onnx'
FEMALE_MODEL = MODELS_DIR / 'en_US-hfc_female-medium.onnx'

# ---------------------------------------------------------------------------
# Lexicon loader
# ---------------------------------------------------------------------------
_lexicon = None

def load_lexicon(path: Path = LEXICON_PATH) -> list[tuple[re.Pattern, str]]:
    """Load the pronunciation lexicon and return compiled (pattern, replacement) pairs."""
    global _lexicon
    if _lexicon is not None:
        return _lexicon
    entries: list[tuple[re.Pattern, str]] = []
    if not path.exists():
        _lexicon = entries
        return entries
    for line in path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        parts = line.split('\t', 1)
        if len(parts) != 2:
            continue
        word, replacement = parts
        # Build a word-boundary regex; escape the original word for special chars
        escaped = re.escape(word)
        pattern = re.compile(r'\b' + escaped + r'\b', re.IGNORECASE)
        entries.append((pattern, replacement))
    _lexicon = entries
    return entries


def apply_lexicon(text: str) -> str:
    """Apply pronunciation substitutions from the lexicon."""
    lex = load_lexicon()
    for pattern, replacement in lex:
        text = pattern.sub(replacement, text)
    return text


# ---------------------------------------------------------------------------
# Script parser
# ---------------------------------------------------------------------------

def parse_script(text: str) -> list[dict]:
    segments: list[dict] = []
    current = None
    buf: list[str] = []
    for line in text.splitlines():
        t = line.strip()
        if not t:
            continue
        if t == '[ALEX]':
            if current and buf:
                segments.append({'speaker': current, 'text': ' '.join(buf)})
            current = 'ALEX'
            buf = []
        elif t == '[JAMIE]':
            if current and buf:
                segments.append({'speaker': current, 'text': ' '.join(buf)})
            current = 'JAMIE'
            buf = []
        elif t == '[PAUSE]':
            if current and buf:
                segments.append({'speaker': current, 'text': ' '.join(buf)})
                buf = []
            segments.append({'speaker': 'PAUSE', 'text': ''})
        else:
            buf.append(t)
    if current and buf:
        segments.append({'speaker': current, 'text': ' '.join(buf)})
    return segments


# ---------------------------------------------------------------------------
# Text cleanup
# ---------------------------------------------------------------------------

def safe_text(s: str) -> str:
    """Replace smart quotes and em-dashes with ASCII equivalents."""
    return (s
            .replace('\u2019', "'")
            .replace('\u2018', "'")
            .replace('\u2014', '-')
            .replace('\u2013', '-')
            .replace('\u201c', '"')
            .replace('\u201d', '"'))


# ---------------------------------------------------------------------------
# Piper synthesis
# ---------------------------------------------------------------------------

def call_piper(model_path: Path, text: str, out_wav: Path):
    with tempfile.NamedTemporaryFile('w', delete=False, encoding='utf-8', suffix='.txt') as tf:
        tf.write(text)
        tf.flush()
        in_path = tf.name
    cmd = [
        sys.executable, '-m', 'piper',
        '-m', str(model_path),
        '-i', in_path,
        '-f', str(out_wav),
        '--data-dir', str(MODELS_DIR),
        '-s', '0',
        '--length-scale', str(LENGTH_SCALE),
        '--sentence-silence', '0.0',
    ]
    try:
        subprocess.check_call(cmd)
    finally:
        try:
            os.unlink(in_path)
        except Exception:
            pass


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def read_wav_pcm(wav_path: Path) -> tuple[bytes, wave._wave_params]:
    """Read a WAV and return (raw PCM bytes, params)."""
    with wave.open(str(wav_path), 'rb') as w:
        params = w.getparams()
        frames = w.readframes(w.getnframes())
    return frames, params


def write_wav(path: Path, pcm: bytes):
    """Write raw PCM bytes as a 16-bit mono 24 kHz WAV."""
    with wave.open(str(path), 'wb') as w:
        w.setnchannels(CHANNELS)
        w.setsampwidth(SAMPWIDTH)
        w.setframerate(SAMPLE_RATE)
        w.writeframes(pcm)


def generate_silence(seconds: float) -> bytes:
    """Return silent PCM bytes for the given duration."""
    nframes = int(SAMPLE_RATE * seconds)
    return b'\x00' * (SAMPWIDTH * CHANNELS * nframes)


# ---------------------------------------------------------------------------
# Episode generation — writes segments to folders + manifest + concatenated WAV
# ---------------------------------------------------------------------------

def generate_episode(script_path: Path, out_path: Path | None = None) -> Path | None:
    """Synthesize all segments and write them to an episode folder.

    Creates:
      podcasts/audio/segments/<slug>/seg001-alex.wav   (or -jamie, -pause)
      podcasts/audio/segments/<slug>/manifest.json
      podcasts/audio/<slug>.wav                        (concatenated)

    Returns the concatenated WAV path on success, or None on failure.
    """
    slug = script_path.stem
    text = script_path.read_text(encoding='utf-8')
    segments = parse_script(text)
    print(f'Processing {script_path.name}: {len(segments)} segments')

    # Create episode segment directory
    seg_dir = SEGMENTS_DIR / slug
    seg_dir.mkdir(parents=True, exist_ok=True)
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    manifest: list[dict] = []
    pcm_parts: list[bytes] = []

    for idx, seg in enumerate(segments, start=1):
        seq_str = f'{idx:03d}'
        speaker = seg['speaker']

        if speaker == 'PAUSE':
            filename = f'seg{seq_str}-pause.wav'
            seg_wav = seg_dir / filename
            pcm = generate_silence(PAUSE_SECONDS)
            write_wav(seg_wav, pcm)
            duration = PAUSE_SECONDS
            print(f'  [{idx}/{len(segments)}] PAUSE {duration}s -> {filename}')
            manifest.append({
                'seq': idx,
                'speaker': 'PAUSE',
                'text': '',
                'filename': filename,
                'status': 'pause',
                'duration': duration,
                'sha256': sha256_bytes(pcm),
            })
            pcm_parts.append(pcm)
            continue

        # Speech segment
        raw_text = safe_text(seg['text'])
        processed_text = apply_lexicon(raw_text)
        model = MALE_MODEL if speaker == 'ALEX' else FEMALE_MODEL

        if not model.exists():
            print(f'  Model not found: {model} — skipping episode')
            return None

        filename = f'seg{seq_str}-{speaker.lower()}.wav'
        seg_wav = seg_dir / filename
        print(f'  [{idx}/{len(segments)}] {speaker}: "{raw_text[:60]}..." -> {filename}')

        call_piper(model, processed_text, seg_wav)

        # Read back the PCM for manifest metadata and concatenation
        pcm, params = read_wav_pcm(seg_wav)
        duration = round(len(pcm) / (SAMPLE_RATE * SAMPWIDTH * CHANNELS), 3)

        manifest.append({
            'seq': idx,
            'speaker': speaker,
            'text': seg['text'],
            'filename': filename,
            'status': 'synthesized',
            'duration': duration,
            'sha256': sha256_bytes(pcm),
        })
        pcm_parts.append(pcm)

    if not pcm_parts:
        print(f'  No audio generated for {script_path.name}')
        return None

    # Write manifest.json
    manifest_path = seg_dir / 'manifest.json'
    manifest_path.write_text(json.dumps(manifest, indent=2), encoding='utf-8')
    print(f'  Wrote manifest: {manifest_path} ({len(manifest)} entries)')

    # Write concatenated episode WAV
    out_ep = out_path or (AUDIO_DIR / f'{slug}.wav')
    all_pcm = b''.join(pcm_parts)
    write_wav(out_ep, all_pcm)

    size_mb = out_ep.stat().st_size / 1024 / 1024
    total_dur = round(len(all_pcm) / (SAMPLE_RATE * SAMPWIDTH * CHANNELS), 1)
    print(f'  Wrote episode: {out_ep} ({size_mb:.2f} MB, {total_dur}s)')
    return out_ep


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    import argparse
    parser = argparse.ArgumentParser(description='Generate a podcast episode with Piper TTS')
    parser.add_argument('slug', nargs='?', default='ep00-welcome',
                        help='Episode slug (e.g. ep05-pull-requests)')
    parser.add_argument('--script', type=Path, help='Path to script file (overrides slug)')
    args = parser.parse_args()

    if args.script:
        script_path = args.script
    else:
        script_path = SCRIPTS_DIR / f'{args.slug}.txt'

    if not script_path.exists():
        print(f'Script not found: {script_path}')
        sys.exit(1)

    result = generate_episode(script_path)
    if not result:
        sys.exit(1)


if __name__ == '__main__':
    main()
