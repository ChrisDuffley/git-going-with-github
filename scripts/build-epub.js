#!/usr/bin/env node
/**
 * Build EPUB from docs/ markdown files using Pandoc.
 * Outputs: epub/git-going-with-github.epub
 *
 * Preprocessing steps before pandoc:
 *  1. Strip podcast callout blockquotes (contain PODCASTS.md links)
 *  2. Rewrite internal docs .md links to heading-based #anchors
 *  3. Remove or rewrite links to files outside docs/ (DAY1_AGENDA, README, etc.)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const EPUB_OUT = path.join(ROOT, 'epub', 'git-going-with-github.epub');
const DOCX_OUT = path.join(ROOT, 'epub', 'git-going-with-github.docx');
const METADATA = path.join(ROOT, 'epub', 'metadata.yaml');
const EPUB_CSS = path.join(ROOT, 'epub', 'epub.css');
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'epub-'));

// Ordered file list: course-guide first, then 00-16, then appendices a-z
function getDocFiles() {
  const all = fs.readdirSync(DOCS)
    .filter(f => f.endsWith('.md'))
    .sort();

  const courseGuide = all.filter(f => f === 'course-guide.md');
  const chapters = all.filter(f => /^\d{2}-/.test(f));
  const appendices = all.filter(f => f.startsWith('appendix-'));
  const rest = all.filter(f =>
    !courseGuide.includes(f) &&
    !chapters.includes(f) &&
    !appendices.includes(f)
  );

  return [...courseGuide, ...chapters, ...appendices, ...rest]
    .map(f => path.join(DOCS, f));
}

// Build a map of doc filename -> heading anchor for cross-chapter links
// e.g. "04-working-with-issues.md" -> "#working-with-issues"
function buildAnchorMap(files) {
  const map = {};
  for (const f of files) {
    const basename = path.basename(f);
    const content = fs.readFileSync(f, 'utf-8');
    const h1 = content.match(/^#\s+(.+)$/m);
    if (h1) {
      // Convert heading to pandoc anchor: lowercase, spaces to hyphens, strip non-word chars
      const anchor = h1[1]
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      map[basename] = '#' + anchor;
    }
  }
  return map;
}

// Preprocess a single markdown file
function preprocess(content, anchorMap) {
  // 1. Remove podcast callout blockquotes
  //    Pattern: > **Listen to Episode N:** ... line(s)
  content = content.replace(/^>[ \t]*\*\*Listen to Episode[^\n]*\n/gm, '');

  // 2. Rewrite internal docs cross-links: [text](04-working-with-issues.md) -> [text](#anchor)
  //    Also handles anchors: [text](04-working-with-issues.md#section) -> [text](#section)
  content = content.replace(
    /\[([^\]]+)\]\(([^)]+\.md)(#[^)]*)?\)/g,
    (match, text, mdFile, anchor) => {
      // Strip any leading path components to get just the basename
      const basename = path.basename(mdFile);

      // If it's a docs/ internal file we know about, rewrite the link
      if (anchorMap[basename]) {
        const target = anchor || anchorMap[basename];
        return `[${text}](${target})`;
      }

      // External docs (DAY1_AGENDA, README, learning-room, etc.) — keep text, remove link
      return text;
    }
  );

  return content;
}

const files = getDocFiles();
const anchorMap = buildAnchorMap(files);

console.log(`Building EPUB from ${files.length} files...\n`);
files.forEach(f => console.log(' ', path.relative(ROOT, f)));

// Write preprocessed files to tmp dir
const tmpFiles = files.map(f => {
  const content = fs.readFileSync(f, 'utf-8');
  const cleaned = preprocess(content, anchorMap);
  const tmpPath = path.join(TMP, path.basename(f));
  fs.writeFileSync(tmpPath, cleaned, 'utf-8');
  return tmpPath;
});

const fileArgs = tmpFiles.map(f => `"${f}"`).join(' ');

// --- EPUB ---
const epubCmd = [
  'pandoc',
  '--from markdown+smart',
  '--to epub3',
  `--output "${EPUB_OUT}"`,
  `--metadata-file "${METADATA}"`,
  `--css "${EPUB_CSS}"`,
  '--toc',
  '--toc-depth=2',
  '--split-level=1',
  '--highlight-style=tango',
  '--wrap=none',
  fileArgs
].join(' \\\n  ');

console.log('\nRunning pandoc (EPUB)...\n');
try {
  execSync(epubCmd, { stdio: 'inherit', cwd: ROOT });
  const size = (fs.statSync(EPUB_OUT).size / 1024).toFixed(1);
  console.log(`\nEPUB written: epub/git-going-with-github.epub (${size} KB)`);
} catch (err) {
  console.error('\nPandoc EPUB failed. Is pandoc installed? Run: brew install pandoc');
  process.exit(1);
}

// --- Word (.docx) ---
const docxCmd = [
  'pandoc',
  '--from markdown+smart',
  '--to docx',
  `--output "${DOCX_OUT}"`,
  `--metadata-file "${METADATA}"`,
  '--toc',
  '--toc-depth=2',
  '--wrap=none',
  fileArgs
].join(' \\\n  ');

console.log('\nRunning pandoc (Word)...\n');
try {
  execSync(docxCmd, { stdio: 'inherit', cwd: ROOT });
  const size = (fs.statSync(DOCX_OUT).size / 1024).toFixed(1);
  console.log(`\nWord written: epub/git-going-with-github.docx (${size} KB)`);
} catch (err) {
  console.error('\nPandoc Word failed.');
  process.exit(1);
} finally {
  fs.rmSync(TMP, { recursive: true, force: true });
}
