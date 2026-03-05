# Podcast Audio Pipeline

This directory contains the complete pipeline for producing the Git Going with GitHub companion audio series: 44 episodes of two-host conversational content designed for blind and low-vision developers.

## Pipeline Overview

```
build-bundles.js     Generate source bundles from chapter content
        |
        v
  bundles/*.md       One bundle per episode (production prompt + source material)
        |
        v
  scripts/*.txt      Conversational scripts with [ALEX]/[JAMIE]/[PAUSE] markers
        |
        v
  tts/               Local Piper neural TTS (ONNX models, pronunciation lexicon)
        |
        v
  audio/*.wav        Final WAV files (gitignored - hosted on GitHub Releases)
        |
        v
generate-site.js     Build PODCASTS.md player page and RSS feed from manifest
```

Audio is generated locally using [Piper](https://github.com/rhasspy/piper) neural text-to-speech. No cloud APIs, no API keys, no billing. Runs entirely on your machine.

## Directory Structure

```
podcasts/
  README.md             This guide
  build-bundles.js      Generates source bundles + manifest.json
  generate-site.js      Generates PODCASTS.md and feed.xml from manifest.json
  manifest.json         Episode manifest (metadata, status tracking)
  feed.xml              RSS 2.0 podcast feed (auto-generated)
  bundles/              44 generated episode source bundles
  scripts/              Two-host scripts (committed, reviewable)
  audio/                WAV files after generation (not in git)
  tts/                  Python TTS package
    __init__.py         Package init
    generate_episode.py Single episode generator
    generate_all.py     Batch generator for all episodes
    download_samples.py Voice sample downloader
    lexicon.txt         Pronunciation dictionary for technical terms
    models/             Piper ONNX voice models
    samples/            Voice sample WAVs
```

## Prerequisites

- Python 3.10 or later
- Piper TTS: `pip install piper-tts`
- Node.js 18 or later (for bundle/site generation only)

## Quick Start

### 1. Install Piper

```bash
pip install piper-tts
```

### 2. Download voice models (if not already present)

```bash
python -m podcasts.tts.download_samples
```

This downloads en_US Piper ONNX models to `podcasts/tts/models/`.

### 3. Generate all episodes

```bash
python -m podcasts.tts.generate_all
```

Or generate a single episode:

```bash
python -m podcasts.tts.generate_episode ep00-welcome
python -m podcasts.tts.generate_episode ep05-pull-requests
```

Or a range:

```bash
python -m podcasts.tts.generate_all --start 0 --end 10
```

### 4. Build player page and RSS feed

```bash
npm run build:podcast-site
```

## Voice Configuration

The default voices are:

| Host  | Piper Model              | Character | Description |
|-------|--------------------------|-----------|-------------|
| Alex  | en_US-hfc_male-medium    | Lead host, experienced, warm | Male, measured delivery |
| Jamie | en_US-hfc_female-medium  | Co-host, curious, energetic | Female, asks great questions |

26 en_US voice models are included. Listen to samples in `podcasts/tts/samples/` to try different voices.

To change voices, edit the `MALE_MODEL` and `FEMALE_MODEL` paths in `podcasts/tts/generate_episode.py`.

## Pronunciation Lexicon

The file `podcasts/tts/lexicon.txt` contains pronunciation overrides for technical terms, acronyms, and jargon. The lexicon is applied as text substitution before Piper synthesizes each segment.

Format: one entry per line, tab-separated `WORD<tab>REPLACEMENT`. Lines starting with `#` are comments.

Example entries:

```
WCAG    W-Cag
NVDA    N V D A
GitHub  Git Hub
JSON    Jason
```

Add new entries when Piper mispronounces a word. The lexicon is loaded once per run and uses word-boundary matching so entries like `GUI` do not affect words like "guidelines".

Piper uses espeak-ng for phonemization. For precise control, you can also use espeak-ng phoneme syntax directly in the script text: `[[...]]` for inline phoneme overrides.

## Manifest Status Flow

Each episode in manifest.json progresses through these statuses:

```
bundle-ready  -->  script-ready  -->  audio-ready  -->  published
(build-bundles)    (scripts/)         (tts/)            (GitHub Release)
```

## All npm Scripts

| Command | What It Does |
|---------|-------------|
| `npm run build:podcast-bundles` | Generate source bundles from chapters |
| `npm run build:podcast-audio` | Generate audio with local Piper TTS |
| `npm run build:podcast-site` | Build player page and RSS feed |
| `npm run build:podcasts` | Bundles + site |
| `npm run build` | Full build: podcasts + HTML site |

## Publishing Audio

Audio files are hosted on GitHub Releases (not in the repository, they are gitignored).

1. Generate all audio: `python -m podcasts.tts.generate_all`
2. Create a GitHub Release tagged `podcasts`
3. Upload the WAV files from `podcasts/audio/` as release assets
4. The RSS feed already points to release asset URLs
5. Update manifest status to `published` and rebuild the site

## Updating Episodes

When chapter content changes:

1. `npm run build:podcast-bundles` to regenerate bundles
2. Edit the script in `podcasts/scripts/` if the content changed
3. `python -m podcasts.tts.generate_episode <slug>` to regenerate audio
4. `npm run build:podcast-site` to update the player page and RSS feed
5. Upload new audio to the GitHub Release
6. Commit and push

## Troubleshooting

### Piper command not found

Ensure Piper TTS is installed:

```bash
pip install piper-tts
python -m piper --help
```

### Model not found

Download models first:

```bash
python -m podcasts.tts.download_samples
```

Or download specific models manually:

```bash
python -m piper.download_voices en_US-hfc_male-medium --download-dir podcasts/tts/models
python -m piper.download_voices en_US-hfc_female-medium --download-dir podcasts/tts/models
```

### Mispronounced word

Add an entry to `podcasts/tts/lexicon.txt` with the correct pronunciation and regenerate the episode.

### "Rate limited" messages

Both APIs have generous free-tier limits. If you hit rate limits:

- The scripts automatically retry with exponential backoff
- Process smaller batches: `node podcasts/generate-audio.js 0 10`

### Script quality issues

If Gemini produces scripts that miss concepts or have formatting issues:

- Try a different model: `$env:GEMINI_MODEL = "gemini-2.0-pro"`
- Edit the script manually in `podcasts/scripts/` before generating audio
- Re-run with `--force` for that episode

### Audio sounds robotic or unnatural

- Confirm Journey voices are selected: `--list-voices`
- Try a slower rate: `$env:TTS_RATE = "0.90"`
- Journey voices sound best at rates between 0.85 and 1.0

## Cost Summary

| Step | API | Cost | Total for 44 episodes |
|------|-----|------|-----------------------|
| Script generation | Gemini 2.0 Flash | Free tier (15 RPM) | $0.00 |
| Audio synthesis | Cloud TTS Journey | $0.03 / 1M chars | approximately $0.02-0.05 |
| **Total** | | | **Under $0.10** |
