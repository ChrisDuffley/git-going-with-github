#!/usr/bin/env node
/**
 * Podcast Site Generator for Git Going with GitHub
 *
 * Reads podcasts/manifest.json and generates:
 *   1. PODCASTS.md   - Player page with HTML5 audio for every episode
 *   2. podcasts/feed.xml - RSS 2.0 podcast feed (iTunes-compatible)
 *
 * Usage: node podcasts/generate-site.js
 *
 * The manifest is produced by build-bundles.js. To update episode status
 * (e.g. mark an episode as published), edit manifest.json directly and
 * re-run this script.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MANIFEST_PATH = path.join(__dirname, 'manifest.json');
const PODCASTS_MD = path.join(ROOT, 'PODCASTS.md');
const FEED_XML = path.join(__dirname, 'feed.xml');

const REPO_URL = 'https://github.com/Community-Access/git-going-with-github';
const SITE_URL = 'https://community-access.org/git-going-with-github';
const AUDIO_BASE = `${REPO_URL}/releases/download/podcasts`;

// ---------------------------------------------------------------------------
// Episode grouping (for the player page)
// ---------------------------------------------------------------------------

const DAY1_RANGE = [0, 10];   // Episodes 0-10
const DAY2_RANGE = [11, 17];  // Episodes 11-17
// 18+ are appendices

function groupLabel(num) {
  if (num <= DAY1_RANGE[1]) return 'day1';
  if (num <= DAY2_RANGE[1]) return 'day2';
  return 'appendix';
}

// Map episode number to chapter/appendix source label
function sourceLabel(ep) {
  if (ep.number === 0) return '[Course Guide](docs/course-guide.md)';
  if (ep.number <= 17) {
    const chNum = ep.number - 1;
    const src = ep.sources[0];
    return `[Chapter ${chNum}: ${ep.title}](docs/${src})`;
  }
  const src = ep.sources[0];
  // Extract appendix letter from filename
  const match = src.match(/appendix-([a-z])-/);
  const letter = match ? match[1].toUpperCase() : '';
  return `[Appendix ${letter}: ${ep.title}](docs/${src})`;
}

// ---------------------------------------------------------------------------
// Generate PODCASTS.md
// ---------------------------------------------------------------------------

function generatePlayerPage(manifest) {
  const lines = [];

  lines.push('# Podcasts');
  lines.push('');
  lines.push('## Git Going with GitHub - Audio Series');
  lines.push('');
  lines.push('Listen to companion audio episodes for every chapter and appendix in this workshop. Each episode is a conversational overview that previews or reviews the key concepts - perfect for learning on the go or reducing screen reader fatigue.');
  lines.push('');
  lines.push(`**Subscribe:** Add the [podcast RSS feed](${SITE_URL}/podcasts/feed.xml) to your preferred podcast app - Apple Podcasts, Spotify, Overcast, or any RSS reader.`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## How to Use These Episodes');
  lines.push('');
  lines.push('- **Before a chapter:** Listen to preview the concepts. You will know what to expect before diving into the exercises.');
  lines.push('- **After a chapter:** Listen to reinforce what you learned and catch anything you missed.');
  lines.push('- **On the go:** Episodes are 8-18 minutes each. Listen during commutes, walks, or breaks.');
  lines.push('');
  lines.push('---');
  lines.push('');

  let currentGroup = null;

  for (const ep of manifest) {
    const group = groupLabel(ep.number);

    // Section headers
    if (group !== currentGroup) {
      currentGroup = group;
      if (group === 'day1') {
        lines.push('## Day 1: GitHub Foundations');
      } else if (group === 'day2') {
        lines.push('## Day 2: VS Code and Accessibility Agents');
      } else {
        lines.push('## Appendices');
      }
      lines.push('');
    }

    const pad = String(ep.number).padStart(2, '0');
    const audioUrl = `${AUDIO_BASE}/ep${pad}-${ep.slug}.mp3`;

    lines.push(`### Episode ${ep.number}: ${ep.title}`);
    lines.push('');
    lines.push(ep.description);
    lines.push('');
    lines.push(`Based on: ${sourceLabel(ep)}`);
    lines.push('');
    lines.push('<audio controls preload="none">');
    lines.push(`  <source src="${audioUrl}" type="audio/mpeg">`);
    lines.push(`  Your browser does not support the audio element. <a href="${audioUrl}">Download Episode ${ep.number} (MP3)</a>`);
    lines.push('</audio>');
    lines.push('');
    lines.push(`[Download Episode ${ep.number} (MP3)](${audioUrl})`);
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  // Footer
  lines.push('## Production');
  lines.push('');
  lines.push('These episodes are generated using [Google NotebookLM](https://notebooklm.google.com/) Audio Overviews. Each episode is produced from the workshop chapter content combined with episode-specific production prompts that ensure concept coverage, accessible language, and screen reader-friendly descriptions.');
  lines.push('');
  lines.push('Source bundles and production documentation are in the [podcasts/](podcasts/) directory.');
  lines.push('');

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Generate RSS 2.0 feed (podcasts/feed.xml)
// ---------------------------------------------------------------------------

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRssFeed(manifest) {
  const now = new Date().toUTCString();

  const items = manifest.map(ep => {
    const pad = String(ep.number).padStart(2, '0');
    const audioUrl = `${AUDIO_BASE}/ep${pad}-${ep.slug}.mp3`;
    const episodeUrl = `${SITE_URL}/PODCASTS.html`;

    return `    <item>
      <title>${escapeXml(`Episode ${ep.number}: ${ep.title}`)}</title>
      <description>${escapeXml(ep.description)}</description>
      <link>${episodeUrl}</link>
      <guid isPermaLink="false">git-going-ep${pad}</guid>
      <pubDate>${now}</pubDate>
      <enclosure url="${audioUrl}" type="audio/mpeg" length="0" />
      <itunes:episode>${ep.number + 1}</itunes:episode>
      <itunes:title>${escapeXml(ep.title)}</itunes:title>
      <itunes:summary>${escapeXml(ep.description)}</itunes:summary>
      <itunes:duration>${ep.duration || '10:00'}</itunes:duration>
      <itunes:explicit>false</itunes:explicit>
    </item>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:itunes="http://www.itunes.apple.com/dtds/podcast-1.0.dtd"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Git Going with GitHub - Audio Series</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/podcasts/feed.xml" rel="self" type="application/rss+xml" />
    <description>Companion audio episodes for the Git Going with GitHub workshop. Conversational overviews of every chapter and appendix, designed for blind and low-vision developers learning GitHub and open source collaboration.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <itunes:author>Community Access</itunes:author>
    <itunes:summary>44 companion audio episodes for the Git Going with GitHub workshop - a two-day course teaching blind and low-vision developers to collaborate on GitHub using screen readers, VS Code, and accessibility agents.</itunes:summary>
    <itunes:owner>
      <itunes:name>Community Access</itunes:name>
    </itunes:owner>
    <itunes:explicit>false</itunes:explicit>
    <itunes:category text="Technology" />
    <itunes:category text="Education">
      <itunes:category text="How To" />
    </itunes:category>
    <itunes:type>serial</itunes:type>
${items.join('\n')}
  </channel>
</rss>
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error('Error: manifest.json not found. Run build-bundles.js first.');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  console.log(`Read manifest: ${manifest.length} episodes`);

  // Generate PODCASTS.md
  const playerPage = generatePlayerPage(manifest);
  fs.writeFileSync(PODCASTS_MD, playerPage, 'utf-8');
  console.log(`Generated: ${PODCASTS_MD}`);

  // Generate RSS feed
  const feed = generateRssFeed(manifest);
  fs.writeFileSync(FEED_XML, feed, 'utf-8');
  console.log(`Generated: ${FEED_XML}`);

  console.log('\nPodcast site generation complete.');
}

main();
