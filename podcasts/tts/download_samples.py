#!/usr/bin/env python3
"""Download and synthesize samples for en_US Piper voices.

Fetches ONNX models and generates a short WAV sample for each en_US voice.
Skips voices that already have sample WAVs.

Usage:
  python -m podcasts.tts.download_samples
  python -m podcasts.tts.download_samples --voice en_US-hfc_female-medium
"""
import subprocess
import sys
import os
import time
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent          # podcasts/
MODELS_DIR = ROOT / 'tts' / 'models'
SAMPLES_DIR = ROOT / 'tts' / 'samples'
LOG = ROOT / 'logs' / 'piper_samples.log'


def _run(cmd, **kw):
    return subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, **kw)


def list_en_us_voices() -> list[str]:
    p = _run([sys.executable, '-m', 'piper.download_voices'])
    return [l.strip() for l in p.stdout.splitlines() if l.strip().startswith('en_US-')]


def download_voice(voice: str):
    return _run([sys.executable, '-m', 'piper.download_voices', voice,
                 '--download-dir', str(MODELS_DIR)])


def synthesize_sample(voice: str, model_path: Path) -> subprocess.CompletedProcess:
    text = f'Hello, this is a short sample for voice {voice}.'
    with tempfile.NamedTemporaryFile('w', delete=False, encoding='utf-8', suffix='.txt') as tf:
        tf.write(text)
        tf.flush()
        in_path = tf.name
    out_wav = SAMPLES_DIR / f'{voice}.wav'
    cmd = [sys.executable, '-m', 'piper', '-m', str(model_path),
           '-i', in_path, '-f', str(out_wav),
           '--data-dir', str(MODELS_DIR), '-s', '0', '--sentence-silence', '0.0']
    try:
        res = _run(cmd)
    finally:
        try:
            os.unlink(in_path)
        except Exception:
            pass
    return res


def find_model(voice: str) -> Path | None:
    p = MODELS_DIR / f'{voice}.onnx'
    if p.exists():
        return p
    for f in MODELS_DIR.glob(f'{voice}*.onnx'):
        return f
    return None


def _log(msg: str):
    ts = time.strftime('%Y-%m-%d %H:%M:%S')
    LOG.parent.mkdir(parents=True, exist_ok=True)
    with open(LOG, 'a', encoding='utf-8') as f:
        f.write(f'[{ts}] {msg}\n')


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Download Piper en_US voices and make samples')
    parser.add_argument('--voice', help='Download/synthesize a single voice')
    args = parser.parse_args()

    MODELS_DIR.mkdir(parents=True, exist_ok=True)
    SAMPLES_DIR.mkdir(parents=True, exist_ok=True)

    if args.voice:
        voices = [args.voice]
    else:
        voices = list_en_us_voices()

    _log(f'START batch — {len(voices)} voices')
    print(f'Processing {len(voices)} en_US voices')

    for voice in voices:
        sample = SAMPLES_DIR / f'{voice}.wav'
        if sample.exists():
            continue
        _log(f'DOWNLOAD {voice}')
        download_voice(voice)
        model = find_model(voice)
        if not model:
            _log(f'NO MODEL {voice}')
            continue
        _log(f'SYNTHESIZE {voice}')
        synthesize_sample(voice, model)
        if sample.exists():
            _log(f'OK {voice} — {sample.stat().st_size} bytes')
            print(f'  {voice} ✓')
        else:
            _log(f'FAIL {voice}')
            print(f'  {voice} ✗')

    _log('DONE')
    print('Done.')


if __name__ == '__main__':
    main()
