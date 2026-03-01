# Podcast Production Guide

## Git Going with GitHub - Audio Series

This directory contains everything needed to produce the **Git Going with GitHub** audio series using Google NotebookLM.

## Directory Structure

```
podcasts/
  README.md             This guide
  build-bundles.js      Generates NotebookLM source bundles + manifest.json
  generate-site.js      Generates PODCASTS.md and feed.xml from manifest.json
  manifest.json         Episode manifest (metadata, status tracking)
  feed.xml              RSS 2.0 podcast feed (auto-generated)
  bundles/              44 generated episode source bundles for NotebookLM
  audio/                MP3 files after export from NotebookLM (not in git)
```

## Quick Start

### 1. Generate bundles + manifest

```bash
node podcasts/build-bundles.js
```

This reads every chapter and appendix from `docs/`, combines each with:
- Episode-specific production prompt with tone/style direction
- Concept coverage checklist (ensures every key idea is explained)
- Cross-referenced supplementary content from related chapters
- Prerequisite recaps from earlier episodes

Output: 44 bundle files in `podcasts/bundles/` and `podcasts/manifest.json`.

### 2. Generate player page + RSS feed

```bash
node podcasts/generate-site.js
```

Reads `manifest.json` and generates:
- `PODCASTS.md` (root) - HTML5 audio player page for all 44 episodes
- `podcasts/feed.xml` - RSS 2.0 feed with iTunes podcast namespace

### 3. Do both at once

```bash
npm run build:podcasts
```

Or build everything (podcasts + HTML site):

```bash
npm run build
```

### 4. Create episodes in NotebookLM

1. Open [NotebookLM](https://notebooklm.google.com) and sign in.
2. Click **New notebook**.
3. Name it: `Ep 00 - Welcome to Git Going with GitHub`.
4. Click **Add source**, then **Upload** and select `podcasts/bundles/ep00-welcome.md`.
5. Wait for the source to be indexed (a few seconds).
6. In the **Studio** panel on the right, click **Generate** under Audio Overview.
7. NotebookLM generates a two-host podcast conversation (takes 2-5 minutes).
8. Listen to the preview. If you want to adjust focus, add a **Notebook note** with guidance like: "Spend more time on the two-day structure and less on individual chapters" and regenerate.
9. When satisfied, click the download button (down arrow icon) to export the MP3.
10. Save the MP3 as `podcasts/audio/ep00-welcome.mp3`.

Repeat for each episode.

### 5. Batch production tips

- **Work in tiers.** Start with Tier 1 (episodes 0-10, the Day 1 core), then Tier 2 (episodes 11-17, the Day 2 core), then Tier 3 (episodes 18-43, appendices).
- **Keep notebooks.** Do not delete the NotebookLM notebooks. You can regenerate episodes when source chapters are updated.
- **Regenerate after updates.** Run `npm run build:podcasts` whenever chapter content changes, then re-upload the updated bundle to the corresponding NotebookLM notebook and regenerate.
- **Review for accuracy.** NotebookLM's audio is AI-generated. Listen for:
  - Incorrect terminology or pronunciation
  - Visual language ("you will see" instead of "navigate to")
  - Missing concepts from the checklist in the bundle prompt
  - Overly long tangents that dilute the episode focus
- **Custom prompting.** If an episode needs adjustments, add notes to the NotebookLM notebook. Examples:
  - "Focus on the screen reader workflow, not the visual interface"
  - "Explain what a merge conflict marker looks like when read aloud"
  - "The audience are professional adults, not beginners in general"

## Concept Coverage

Each episode bundle includes an explicit **Concept Coverage Checklist** in the production prompt. This tells NotebookLM exactly which ideas must be explained. After generating an episode, listen through and verify every checklist item was addressed.

If NotebookLM skips a concept:
1. Add a notebook note: "Make sure to explain [concept] in detail"
2. Regenerate the Audio Overview
3. Verify the concept is now covered

Episodes also include **cross-references** to related chapters and **prerequisite recaps** so the hosts can naturally bridge concepts across episodes.

## Hosting

MP3 files are hosted as GitHub Release assets. After generating an MP3:

1. Do not commit MP3 files to the repo (they are in `.gitignore`).
2. Create a GitHub Release (or update an existing one) and attach the MP3 as a release asset.
3. Run `npm run build:podcasts` to regenerate the RSS feed and player page.
4. Commit the updated `feed.xml`, `manifest.json`, and `PODCASTS.md` and push.

Students can subscribe to the RSS feed in any podcast app:

```
https://community-access.org/git-going-with-github/podcasts/feed.xml
```

Or stream episodes from the [Podcasts page](../PODCASTS.md).

## Updating Episodes

When chapter content changes:

1. Run `npm run build:podcasts` to regenerate bundles, manifest, feed, and player page.
2. Open the corresponding NotebookLM notebook.
3. Delete the old source and upload the new bundle file.
4. Regenerate the Audio Overview.
5. Export the new MP3 and update the GitHub Release asset.
6. Commit and push.
