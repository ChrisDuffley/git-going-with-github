# Podcast Audio Pipeline

This directory contains the complete pipeline for producing the Git Going with GitHub companion audio series: 44 episodes of two-host conversational content designed for blind and low-vision developers.

## Pipeline Overview

```
build-bundles.js     Generate source bundles from chapter content
        |
        v
  bundles/*.md       One bundle per episode (production prompt + source material)
        |
        v                                               OR
        |---> NotebookLM (manual)                       |
        |     Upload bundle, generate, export MP3       |
        |                                               |
        v                                               v
generate-scripts.js  Convert bundles into two-host scripts using Google Gemini
        |
        v
  scripts/*.txt      Conversational scripts with [ALEX]/[JAMIE]/[PAUSE] markers
        |
        v
generate-audio.js    Voice scripts with Google Cloud TTS Journey voices
        |
        v
  audio/*.mp3        Final MP3 files (gitignored - hosted on GitHub Releases)
        |
        v
generate-site.js     Build PODCASTS.md player page and RSS feed from manifest
```

Two production paths:

- **NotebookLM** (manual): Upload a bundle, get a conversational podcast with zero setup. Great for quick iteration.
- **Google TTS** (automated): Gemini generates scripts, Journey voices synthesize audio. Fully scriptable, reproducible, under $0.10 for all 44 episodes.

## Directory Structure

```
podcasts/
  README.md             This guide
  build-bundles.js      Generates source bundles + manifest.json
  generate-scripts.js   Converts bundles to two-host scripts via Gemini
  generate-audio.js     Voices scripts with Google Cloud TTS Journey voices
  generate-site.js      Generates PODCASTS.md and feed.xml from manifest.json
  manifest.json         Episode manifest (metadata, status tracking)
  feed.xml              RSS 2.0 podcast feed (auto-generated)
  bundles/              44 generated episode source bundles
  scripts/              Generated two-host scripts (committed, reviewable)
  audio/                MP3 files after generation (not in git)
```

## Prerequisites

- Node.js 18 or later (the scripts use built-in `fetch()` - zero npm packages needed)
- A Google account (free tier works for both APIs)

---

## Path A: NotebookLM (Manual)

No API keys needed. Best for quick one-off generation or when you want NotebookLM's conversational AI.

### 1. Generate bundles

```bash
npm run build:podcast-bundles
```

### 2. Create episodes in NotebookLM

1. Open [NotebookLM](https://notebooklm.google.com) and sign in.
2. Select "New notebook".
3. Name it: "Ep 00 - Welcome to Git Going with GitHub".
4. Select "Add source", then "Upload" and choose `podcasts/bundles/ep00-welcome.md`.
5. Wait for indexing (a few seconds).
6. In the Studio panel, select "Generate" under Audio Overview.
7. Listen to the preview. Add a notebook note to adjust focus if needed and regenerate.
8. Download the MP3 and save as `podcasts/audio/ep00-welcome.mp3`.

Repeat for each episode.

### Batch production tips

- Work in tiers: Day 1 core (episodes 0-10), Day 2 core (11-17), appendices (18-43).
- Keep notebooks around - you can regenerate when source chapters change.
- Listen for visual language ("you will see") and missing checklist concepts.

---

## Path B: Google TTS with Journey Voices (Automated)

Fully automated, reproducible, and costs under a dime for all 44 episodes.

### Step 1: Create a Google Cloud Project

1. Open [Google Cloud Console](https://console.cloud.google.com/)
2. Select "Create Project" from the project dropdown at the top
3. Name it something like "git-going-podcasts"
4. Note the project ID

If you already have a Google Cloud project, you can reuse it.

### Step 2: Get a Gemini API Key (for script generation)

This key powers the Gemini model that converts bundles into two-host conversational scripts.

1. Open [Google AI Studio](https://aistudio.google.com/apikey)
2. Select "Create API key"
3. Choose your Cloud project from Step 1
4. Copy the key

Cost: Free tier gives 15 requests per minute and 1 million tokens per minute. All 44 episodes fit within this.

### Step 3: Enable Text-to-Speech API and Create a Key

This key powers the Journey voices that read your scripts aloud.

1. Open the [Text-to-Speech API page](https://console.cloud.google.com/apis/library/texttospeech.googleapis.com) in Cloud Console
2. Select "Enable"
3. Open [API Credentials](https://console.cloud.google.com/apis/credentials)
4. Select "Create Credentials" then "API key"
5. (Recommended) Select "Edit API key", then under "API restrictions" choose "Restrict key" and select only "Cloud Text-to-Speech API"
6. Copy the key

Cost: Journey voices cost $0.03 per million characters. All 44 episodes total roughly 800,000 characters, so the entire series costs about $0.02 to $0.05.

### Step 4: Set Environment Variables

PowerShell (current session):

```powershell
$env:GEMINI_API_KEY = "your-gemini-key-here"
$env:GOOGLE_TTS_API_KEY = "your-tts-key-here"
```

PowerShell (persistent - add to your profile):

```powershell
[Environment]::SetEnvironmentVariable('GEMINI_API_KEY', 'your-gemini-key-here', 'User')
[Environment]::SetEnvironmentVariable('GOOGLE_TTS_API_KEY', 'your-tts-key-here', 'User')
```

Bash / macOS / Linux:

```bash
export GEMINI_API_KEY="your-gemini-key-here"
export GOOGLE_TTS_API_KEY="your-tts-key-here"
```

### Step 5: Generate Scripts

```bash
npm run build:podcast-scripts
```

This sends each bundle to Gemini and produces conversational two-host scripts in `podcasts/scripts/`. Scripts are committed to the repo so you can review and edit them before voicing.

Single episode: `node podcasts/generate-scripts.js 17`

Episode range: `node podcasts/generate-scripts.js 0 10`

### Step 6: Generate Audio

```bash
npm run build:podcast-audio
```

This voices each script with Journey voices and writes MP3 files to `podcasts/audio/`.

Dry run (cost estimate, no API calls): `node podcasts/generate-audio.js --dry-run`

Single episode: `node podcasts/generate-audio.js 17`

### Step 7: Build Player Page and RSS Feed

```bash
npm run build:podcast-site
```

---

## Voice Configuration

The default voices are:

| Host  | Voice Name       | Character | Description |
|-------|------------------|-----------|-------------|
| Alex  | en-US-Journey-D  | Lead host, experienced, warm | Male, measured delivery, calm with dry humor |
| Jamie | en-US-Journey-F  | Co-host, curious, energetic | Female, asks great questions, shares analogies |

Journey voices are Google's most natural-sounding voices, designed specifically for long-form conversational content.

### Override voices

```powershell
$env:VOICE_ALEX = "en-US-Journey-O"
$env:VOICE_JAMIE = "en-US-Journey-D"
```

List all available Journey voices: `node podcasts/generate-audio.js --list-voices`

### Adjust speaking rate

Default is 0.95 (slightly slower than normal) for comfortable listening.

```powershell
$env:TTS_RATE = "0.90"    # Even slower - great for complex topics
$env:TTS_RATE = "1.0"     # Normal speed
```

## Manifest Status Flow

Each episode in manifest.json progresses through these statuses:

```
bundle-ready  -->  script-ready  -->  audio-ready  -->  published
(build-bundles)    (gen-scripts)      (gen-audio)       (GitHub Release)
```

Scripts only process episodes matching their expected input status, unless `--force` is used.

## All npm Scripts

| Command | What It Does |
|---------|-------------|
| `npm run build:podcast-bundles` | Generate source bundles from chapters |
| `npm run build:podcast-scripts` | Generate conversational scripts via Gemini |
| `npm run build:podcast-audio` | Voice scripts with Journey voices |
| `npm run build:podcast-site` | Build player page and RSS feed |
| `npm run build:podcasts` | Bundles + site (original pipeline) |
| `npm run build` | Full build: podcasts + HTML site |

## Publishing Audio

Audio files are hosted on GitHub Releases (not in the repository - they are gitignored).

1. Generate all audio: `npm run build:podcast-audio`
2. Create a GitHub Release tagged `podcasts`
3. Upload the MP3 files from `podcasts/audio/` as release assets
4. The RSS feed already points to release asset URLs
5. Update manifest status to `published` and rebuild the site

Students subscribe via RSS:

```
https://community-access.org/git-going-with-github/podcasts/feed.xml
```

Or stream from the [Podcasts page](../PODCASTS.md).

## Updating Episodes

When chapter content changes:

1. `npm run build:podcast-bundles` to regenerate bundles
2. `node podcasts/generate-scripts.js --force [episode]` to regenerate scripts
3. `node podcasts/generate-audio.js --force [episode]` to regenerate audio
4. `npm run build:podcast-site` to update the player page and RSS feed
5. Upload new MP3 to the GitHub Release
6. Commit and push

## Troubleshooting

### "GEMINI_API_KEY is not set"

Verify the environment variable is set in your current shell:

```powershell
$env:GEMINI_API_KEY    # Should print your key
```

### "TTS API error 403"

The Text-to-Speech API is not enabled in your project, or your API key does not have access:

1. Verify the API is enabled at [Cloud Console APIs](https://console.cloud.google.com/apis/library/texttospeech.googleapis.com)
2. Check that your API key is not restricted to a different API

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
