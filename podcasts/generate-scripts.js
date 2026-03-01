#!/usr/bin/env node
/**
 * Podcast Script Generator for Git Going with GitHub
 *
 * Converts NotebookLM-style bundles into two-host conversational scripts
 * using Google Gemini. Output scripts use [ALEX]/[JAMIE]/[PAUSE] markers
 * ready for generate-audio.js.
 *
 * Zero external dependencies - uses Node.js built-in fetch().
 *
 * Prerequisites:
 *   1. A Google API key with Generative Language API enabled
 *   2. Set GEMINI_API_KEY environment variable
 *
 * Usage:
 *   node podcasts/generate-scripts.js              # All bundle-ready episodes
 *   node podcasts/generate-scripts.js 17            # Just episode 17
 *   node podcasts/generate-scripts.js --force       # Regenerate all scripts
 *   node podcasts/generate-scripts.js --force 0 5   # Regenerate episodes 0-5
 *
 * See podcasts/README.md for full setup instructions.
 */

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const MANIFEST_PATH = path.join(__dirname, 'manifest.json');
const BUNDLES_DIR = path.join(__dirname, 'bundles');
const SCRIPTS_DIR = path.join(__dirname, 'scripts');

// ---------------------------------------------------------------------------
// System prompt - this is the creative engine
// ---------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are writing a podcast script for "Git Going with GitHub," an audio learning series designed for blind and low-vision developers learning GitHub and open source collaboration.

HOSTS:
- Alex: The experienced, warm lead host. Guides the discussion, explains concepts clearly, shares personal anecdotes from teaching accessibility. Has a calm, measured delivery with occasional dry humor.
- Jamie: The curious, energetic co-host. Asks the questions the audience is thinking, proposes creative analogies, celebrates "aha moments," and occasionally makes self-deprecating jokes about their own learning journey. Jamie learned GitHub just two years ago and remembers what it felt like to start.

FORMAT (critical - the audio engine parses these markers exactly):
- Each speaker turn MUST start on its own line with exactly [ALEX] or [JAMIE]
- Insert [PAUSE] on its own line between major topic transitions (these become 1.5-second silences)
- No stage directions, no parenthetical notes, no asterisks, no markdown formatting
- Plain conversational text only - write it exactly as it should be spoken aloud

CONTENT REQUIREMENTS:
1. EVERY concept in the "Concept Coverage Checklist" section MUST be discussed during the episode. Missing even one concept is unacceptable. If there is no checklist, cover all major concepts from the source material.
2. Weave concepts naturally into conversation - do not simply list facts or read definitions.
3. Include at least one memorable analogy or real-world comparison for each major concept.
4. Define every technical term the first time a host uses it, conversationally:
   "So a pull request - and I love that name because you are literally requesting that someone pull your changes into their project..."
5. Use accessible language throughout:
   - "Navigate to" not "look at" or "you will see"
   - "The section called" not "click on"
   - "Open" not "go to" for links and pages
   - Spell out keyboard shortcuts: "Control plus Shift plus P" not "Ctrl+Shift+P"
   - Never reference colors, visual layout, or spatial position on screen
6. When something might feel intimidating, normalize it:
   Jamie: "OK that sounds like a lot of steps."
   Alex: "It does! But here is the thing - you have already done most of this on Day 1. Same workflow, just with VS Code handling the heavy lifting."
7. Target 2800-3500 words (approximately 17-21 minutes at a comfortable pace).
8. Begin with a warm intro that names the episode number, title, and previews topics.
9. End with 3-5 concrete takeaways and a tease of what the next episode covers.
10. If there is a Prerequisites section, briefly remind listeners of those concepts.

QUALITY BAR:
- This should sound like a podcast you would actually enjoy listening to
- Vary sentence length and rhythm - short punchy lines mixed with longer explanations
- Let Jamie interrupt Alex occasionally with genuine questions
- Include moments of real enthusiasm: "Oh that is clever!" or "I wish I had known that when I started"
- Be specific - reference actual GitHub features, shortcuts, and screen reader behaviors by name
- Never be generic or hand-wavy - every statement should teach something concrete`;

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
 * Call Gemini API to generate a conversational script from a bundle.
 */
async function callGemini(bundleContent, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ parts: [{ text: bundleContent }] }],
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: 0.85
        }
      })
    });

    if (res.status === 429) {
      const wait = Math.pow(2, attempt) * 5000;
      console.log(`    Rate limited. Waiting ${wait / 1000}s before retry ${attempt}/${retries}...`);
      await sleep(wait);
      continue;
    }

    if (!res.ok) {
      const body = await res.text();
      if (attempt < retries) {
        console.log(`    API error (${res.status}). Retry ${attempt}/${retries}...`);
        await sleep(2000 * attempt);
        continue;
      }
      throw new Error(`Gemini API error ${res.status}: ${body}`);
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error('Gemini returned empty response');
    }
    return text;
  }
  throw new Error('All retries exhausted');
}

/**
 * Validate that the script has proper speaker markers and reasonable length.
 */
function validateScript(script) {
  const issues = [];
  const alexCount = (script.match(/^\[ALEX\]/gm) || []).length;
  const jamieCount = (script.match(/^\[JAMIE\]/gm) || []).length;
  const wordCount = script.split(/\s+/).length;

  if (alexCount === 0) issues.push('No [ALEX] markers found');
  if (jamieCount === 0) issues.push('No [JAMIE] markers found');
  if (alexCount + jamieCount < 10) issues.push(`Only ${alexCount + jamieCount} speaker turns (expected 30+)`);
  if (wordCount < 1500) issues.push(`Only ${wordCount} words (expected 2800+)`);
  if (wordCount > 5000) issues.push(`${wordCount} words is very long (expected max ~3500)`);

  return { valid: issues.length === 0, issues, alexCount, jamieCount, wordCount };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!GEMINI_API_KEY) {
    console.error('Error: GEMINI_API_KEY environment variable is not set.');
    console.error('Get a free API key at https://aistudio.google.com/apikey');
    process.exit(1);
  }

  // Parse CLI args
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const episodeNums = args.filter(a => !a.startsWith('--')).map(Number).filter(n => !isNaN(n));

  const manifest = readManifest();
  fs.mkdirSync(SCRIPTS_DIR, { recursive: true });

  // Determine which episodes to process
  let episodes = manifest;
  if (episodeNums.length === 1) {
    episodes = manifest.filter(ep => ep.number === episodeNums[0]);
  } else if (episodeNums.length === 2) {
    const [start, end] = episodeNums;
    episodes = manifest.filter(ep => ep.number >= start && ep.number <= end);
  }

  if (!force) {
    episodes = episodes.filter(ep => ep.status === 'bundle-ready');
  }

  if (episodes.length === 0) {
    console.log('No episodes to process. Use --force to regenerate existing scripts.');
    return;
  }

  console.log(`\nGenerating scripts for ${episodes.length} episode${episodes.length > 1 ? 's' : ''} using ${MODEL}\n`);

  let generated = 0;
  let failed = 0;

  for (const ep of episodes) {
    const bundlePath = path.join(BUNDLES_DIR, ep.bundle);
    const scriptFile = `ep${String(ep.number).padStart(2, '0')}-${ep.slug}.txt`;
    const scriptPath = path.join(SCRIPTS_DIR, scriptFile);

    if (!force && fs.existsSync(scriptPath)) {
      console.log(`  Skip Episode ${ep.number}: ${ep.title} (script exists, use --force to regenerate)`);
      continue;
    }

    if (!fs.existsSync(bundlePath)) {
      console.log(`  Skip Episode ${ep.number}: ${ep.title} (bundle not found: ${ep.bundle})`);
      failed++;
      continue;
    }

    console.log(`  Episode ${ep.number}: ${ep.title}`);
    const bundleContent = fs.readFileSync(bundlePath, 'utf-8');

    try {
      const script = await callGemini(bundleContent);
      const validation = validateScript(script);

      if (validation.issues.length > 0) {
        console.log(`    Warnings: ${validation.issues.join('; ')}`);
      }

      console.log(`    ${validation.wordCount} words, ${validation.alexCount} Alex turns, ${validation.jamieCount} Jamie turns`);

      fs.writeFileSync(scriptPath, script, 'utf-8');
      console.log(`    Written: ${scriptFile}`);

      // Update manifest status
      const idx = manifest.findIndex(e => e.number === ep.number);
      if (idx >= 0) manifest[idx].status = 'script-ready';

      generated++;

      // Brief pause between API calls to be respectful of rate limits
      if (episodes.indexOf(ep) < episodes.length - 1) {
        await sleep(2000);
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
