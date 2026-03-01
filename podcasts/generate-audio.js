#!/usr/bin/env node
/**
 * Podcast Audio Generator for Git Going with GitHub
 *
 * Converts two-host conversational scripts into MP3 audio using
 * Google Cloud Text-to-Speech with Journey voices.
 *
 * Zero external dependencies - uses Node.js built-in fetch().
 *
 * Prerequisites:
 *   1. A Google Cloud API key with Text-to-Speech API enabled
 *   2. Set GOOGLE_TTS_API_KEY environment variable
 *
 * Usage:
 *   node podcasts/generate-audio.js               # All script-ready episodes
 *   node podcasts/generate-audio.js 17             # Just episode 17
 *   node podcasts/generate-audio.js --dry-run      # Estimate cost, no API calls
 *   node podcasts/generate-audio.js --force        # Regenerate existing audio
 *   node podcasts/generate-audio.js --list-voices  # Show available Journey voices
 *
 * See podcasts/README.md for full setup instructions.
 */

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const API_KEY = process.env.GOOGLE_TTS_API_KEY;
const TTS_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';

const MANIFEST_PATH = path.join(__dirname, 'manifest.json');
const SCRIPTS_DIR = path.join(__dirname, 'scripts');
const AUDIO_DIR = path.join(__dirname, 'audio');

// Voice assignments - Journey voices are Google's most natural conversational voices
const VOICES = {
  ALEX: process.env.VOICE_ALEX || 'en-US-Journey-D',   // Male, warm, measured
  JAMIE: process.env.VOICE_JAMIE || 'en-US-Journey-F'   // Female, energetic, curious
};

// Audio settings
const SPEAKING_RATE = parseFloat(process.env.TTS_RATE || '0.95');  // Slightly slower for accessibility
const AUDIO_ENCODING = 'MP3';
const EFFECTS_PROFILE = 'headphone-class-device';

// TTS input limit (bytes) - leave headroom for SSML tags
const MAX_TEXT_BYTES = 4500;

// Rate limiting - Google default is 300 req/min
const REQUEST_DELAY_MS = 250;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function readManifest() {
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
}

function saveManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
}

/**
 * Parse a script file into ordered segments.
 * Returns: [{ speaker: 'ALEX'|'JAMIE'|'PAUSE', text: string }]
 */
function parseScript(scriptText) {
  const segments = [];
  let currentSpeaker = null;
  let currentLines = [];

  for (const line of scriptText.split('\n')) {
    const trimmed = line.trim();

    if (trimmed === '[PAUSE]') {
      // Flush current speaker
      if (currentSpeaker && currentLines.length) {
        segments.push({ speaker: currentSpeaker, text: currentLines.join(' ').trim() });
        currentLines = [];
      }
      segments.push({ speaker: 'PAUSE', text: '' });
      continue;
    }

    const match = trimmed.match(/^\[(ALEX|JAMIE)\]\s*(.*)/);
    if (match) {
      // Flush previous speaker
      if (currentSpeaker && currentLines.length) {
        segments.push({ speaker: currentSpeaker, text: currentLines.join(' ').trim() });
        currentLines = [];
      }
      currentSpeaker = match[1];
      if (match[2]) currentLines.push(match[2]);
      continue;
    }

    // Continuation line for current speaker
    if (trimmed && currentSpeaker) {
      currentLines.push(trimmed);
    }
  }

  // Flush final segment
  if (currentSpeaker && currentLines.length) {
    segments.push({ speaker: currentSpeaker, text: currentLines.join(' ').trim() });
  }

  return segments;
}

/**
 * Split text at sentence boundaries to stay under the TTS byte limit.
 */
function splitText(text, maxBytes = MAX_TEXT_BYTES) {
  if (Buffer.byteLength(text, 'utf-8') <= maxBytes) return [text];

  const chunks = [];
  let remaining = text;

  while (Buffer.byteLength(remaining, 'utf-8') > maxBytes) {
    // Find last sentence boundary within limit
    const candidate = remaining.slice(0, maxBytes);
    let splitIdx = candidate.lastIndexOf('. ');
    if (splitIdx < 100) splitIdx = candidate.lastIndexOf('! ');
    if (splitIdx < 100) splitIdx = candidate.lastIndexOf('? ');
    if (splitIdx < 100) splitIdx = candidate.lastIndexOf(', ');
    if (splitIdx < 100) splitIdx = maxBytes;  // Hard split as last resort

    chunks.push(remaining.slice(0, splitIdx + 1).trim());
    remaining = remaining.slice(splitIdx + 1).trim();
  }

  if (remaining) chunks.push(remaining);
  return chunks;
}

/**
 * Build SSML for a text chunk with optional leading pause.
 */
function buildSSML(text, pauseMs = 300) {
  // Escape XML special characters in the text
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  return `<speak><break time="${pauseMs}ms"/><prosody rate="${SPEAKING_RATE}">${escaped}</prosody></speak>`;
}

/**
 * Call Google Cloud TTS API for a single text chunk.
 * Returns: Buffer of MP3 audio content.
 */
async function synthesize(ssml, voiceName, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(`${TTS_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { ssml },
        voice: { languageCode: 'en-US', name: voiceName },
        audioConfig: {
          audioEncoding: AUDIO_ENCODING,
          speakingRate: 1.0,  // Rate is in SSML prosody, keep API at 1.0
          effectsProfileId: [EFFECTS_PROFILE]
        }
      })
    });

    if (res.status === 429) {
      const wait = Math.pow(2, attempt) * 3000;
      console.log(`      Rate limited. Waiting ${wait / 1000}s...`);
      await sleep(wait);
      continue;
    }

    if (!res.ok) {
      const body = await res.text();
      if (attempt < retries) {
        await sleep(1000 * attempt);
        continue;
      }
      throw new Error(`TTS API error ${res.status}: ${body}`);
    }

    const data = await res.json();
    if (!data.audioContent) {
      throw new Error('TTS API returned empty audioContent');
    }

    return Buffer.from(data.audioContent, 'base64');
  }
  throw new Error('All TTS retries exhausted');
}

/**
 * Generate a silent MP3 frame (roughly pauseMs of silence).
 * Uses a minimal valid MP3 frame with silence.
 */
function generateSilence(pauseMs) {
  // Instead of actual silence generation (which needs encoding),
  // we inject the pause via SSML <break> in the next spoken segment.
  // This function is a placeholder - pauses are handled by buildSSML.
  return Buffer.alloc(0);
}

/**
 * Process an entire episode: parse script, synthesize, concatenate, write MP3.
 */
async function generateEpisode(ep) {
  const scriptFile = `ep${String(ep.number).padStart(2, '0')}-${ep.slug}.txt`;
  const scriptPath = path.join(SCRIPTS_DIR, scriptFile);
  const audioFile = `ep${String(ep.number).padStart(2, '0')}-${ep.slug}.mp3`;
  const audioPath = path.join(AUDIO_DIR, audioFile);

  if (!fs.existsSync(scriptPath)) {
    console.log(`    Script not found: ${scriptFile}`);
    return false;
  }

  const scriptText = fs.readFileSync(scriptPath, 'utf-8');
  const rawSegments = parseScript(scriptText);

  if (rawSegments.length === 0) {
    console.log(`    No segments parsed from script`);
    return false;
  }

  // Merge PAUSE markers into the next segment's leading pause time
  const segments = [];
  let pendingPause = 300; // Default inter-speaker pause

  for (const seg of rawSegments) {
    if (seg.speaker === 'PAUSE') {
      pendingPause = 1500; // Topic transition pause
      continue;
    }
    segments.push({ ...seg, pauseMs: pendingPause });
    pendingPause = 300; // Reset to default
  }

  // Count total characters for cost estimate
  const totalChars = segments.reduce((sum, s) => sum + s.text.length, 0);
  console.log(`    ${segments.length} segments, ${totalChars.toLocaleString()} characters`);

  const audioBuffers = [];
  let segNum = 0;

  for (const seg of segments) {
    segNum++;
    const voiceName = VOICES[seg.speaker];
    const chunks = splitText(seg.text);

    for (let i = 0; i < chunks.length; i++) {
      const pauseMs = (i === 0) ? seg.pauseMs : 0;
      const ssml = buildSSML(chunks[i], pauseMs);

      const audio = await synthesize(ssml, voiceName);
      audioBuffers.push(audio);

      const label = chunks.length > 1 ? `${segNum}${String.fromCharCode(97 + i)}` : `${segNum}`;
      process.stdout.write(`\r    Segment ${label}/${segments.length} [${seg.speaker}] ${chunks[i].length} chars`);

      await sleep(REQUEST_DELAY_MS);
    }
  }

  process.stdout.write('\n');

  // Concatenate all MP3 buffers
  const finalAudio = Buffer.concat(audioBuffers);
  fs.writeFileSync(audioPath, finalAudio);

  const sizeMB = (finalAudio.length / (1024 * 1024)).toFixed(1);
  // Rough duration estimate: MP3 at ~128kbps = ~16KB/sec
  const durationSec = Math.round(finalAudio.length / 16000);
  const durationMin = Math.floor(durationSec / 60);
  const durationRemSec = durationSec % 60;

  console.log(`    Written: ${audioFile} (${sizeMB} MB, ~${durationMin}:${String(durationRemSec).padStart(2, '0')})`);
  return true;
}

/**
 * Compute cost estimate for dry-run mode.
 */
function dryRun(episodes) {
  let totalChars = 0;
  let count = 0;

  for (const ep of episodes) {
    const scriptFile = `ep${String(ep.number).padStart(2, '0')}-${ep.slug}.txt`;
    const scriptPath = path.join(SCRIPTS_DIR, scriptFile);

    if (!fs.existsSync(scriptPath)) {
      console.log(`  Episode ${ep.number}: ${ep.title} (no script - skip)`);
      continue;
    }

    const scriptText = fs.readFileSync(scriptPath, 'utf-8');
    const chars = scriptText.length;
    totalChars += chars;
    count++;
    console.log(`  Episode ${ep.number}: ${ep.title} (${chars.toLocaleString()} chars)`);
  }

  const costJourney = (totalChars / 1_000_000) * 30;
  console.log(`\n  Total: ${count} episodes, ${totalChars.toLocaleString()} characters`);
  console.log(`  Estimated cost (Journey voices): $${costJourney.toFixed(3)}`);
  console.log(`  Estimated TTS API calls: ~${Math.ceil(totalChars / MAX_TEXT_BYTES)}`);
}

/**
 * List available Journey voices via the TTS API.
 */
async function listVoices() {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/voices?key=${API_KEY}&languageCode=en-US`);
  if (!res.ok) throw new Error(`Voices API error: ${res.status}`);

  const data = await res.json();
  const journeyVoices = data.voices.filter(v => v.name.includes('Journey'));

  console.log('\nAvailable Journey voices (en-US):\n');
  console.log('  Voice Name               | Gender  | Sample Rate');
  console.log('  -------------------------|---------|------------');
  for (const v of journeyVoices) {
    const gender = v.ssmlGender.toLowerCase().padEnd(7);
    const rate = v.naturalSampleRateHertz;
    console.log(`  ${v.name.padEnd(25)} | ${gender} | ${rate} Hz`);
  }
  console.log(`\nCurrently configured:`);
  console.log(`  Alex  = ${VOICES.ALEX}`);
  console.log(`  Jamie = ${VOICES.JAMIE}`);
  console.log(`\nOverride with env vars: VOICE_ALEX, VOICE_JAMIE`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);

  // Handle --list-voices (needs API key)
  if (args.includes('--list-voices')) {
    if (!API_KEY) {
      console.error('Error: GOOGLE_TTS_API_KEY is not set.');
      process.exit(1);
    }
    await listVoices();
    return;
  }

  if (!API_KEY) {
    console.error('Error: GOOGLE_TTS_API_KEY environment variable is not set.');
    console.error('');
    console.error('Setup:');
    console.error('  1. Go to https://console.cloud.google.com/apis/credentials');
    console.error('  2. Create an API key with Text-to-Speech API access');
    console.error('  3. Set the environment variable:');
    console.error('     $env:GOOGLE_TTS_API_KEY = "your-key-here"   (PowerShell)');
    console.error('     export GOOGLE_TTS_API_KEY="your-key-here"   (bash)');
    process.exit(1);
  }

  const force = args.includes('--force');
  const isDryRun = args.includes('--dry-run');
  const episodeNums = args.filter(a => !a.startsWith('--')).map(Number).filter(n => !isNaN(n));

  const manifest = readManifest();
  fs.mkdirSync(AUDIO_DIR, { recursive: true });

  // Determine which episodes to process
  let episodes = manifest;
  if (episodeNums.length === 1) {
    episodes = manifest.filter(ep => ep.number === episodeNums[0]);
  } else if (episodeNums.length === 2) {
    const [start, end] = episodeNums;
    episodes = manifest.filter(ep => ep.number >= start && ep.number <= end);
  }

  if (!force) {
    episodes = episodes.filter(ep =>
      ep.status === 'script-ready' || ep.status === 'bundle-ready'
    );
  }

  if (episodes.length === 0) {
    console.log('No episodes to process.');
    console.log('Run generate-scripts.js first, or use --force to regenerate.');
    return;
  }

  // Dry run mode
  if (isDryRun) {
    console.log(`\nDry run - estimating cost for ${episodes.length} episodes:\n`);
    dryRun(episodes);
    return;
  }

  console.log(`\nGenerating audio for ${episodes.length} episode${episodes.length > 1 ? 's' : ''}`);
  console.log(`  Voices: Alex = ${VOICES.ALEX}, Jamie = ${VOICES.JAMIE}`);
  console.log(`  Rate: ${SPEAKING_RATE}x | Profile: ${EFFECTS_PROFILE}\n`);

  let generated = 0;
  let failed = 0;

  for (const ep of episodes) {
    const audioFile = `ep${String(ep.number).padStart(2, '0')}-${ep.slug}.mp3`;
    const audioPath = path.join(AUDIO_DIR, audioFile);

    if (!force && fs.existsSync(audioPath)) {
      console.log(`  Skip Episode ${ep.number}: ${ep.title} (audio exists, use --force)`);
      continue;
    }

    console.log(`  Episode ${ep.number}: ${ep.title}`);

    try {
      const ok = await generateEpisode(ep);
      if (ok) {
        const idx = manifest.findIndex(e => e.number === ep.number);
        if (idx >= 0) manifest[idx].status = 'audio-ready';
        generated++;
      } else {
        failed++;
      }
    } catch (err) {
      console.error(`    FAILED: ${err.message}`);
      failed++;
    }
  }

  saveManifest(manifest);
  console.log(`\nDone: ${generated} generated, ${failed} failed\n`);
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
