#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked, Renderer } = require('marked');
const hljs = require('highlight.js');
const chokidar = require('chokidar');

// Configure marked with syntax highlighting via custom renderer (marked v11+)
const renderer = new Renderer();
renderer.code = function(code, infostring, escaped) {
  const lang = (infostring || '').match(/^\S*/)?.[0] || null;
  const language = lang && hljs.getLanguage(lang) ? lang : null;
  let highlighted;
  try {
    highlighted = language
      ? hljs.highlight(code, { language }).value
      : hljs.highlightAuto(code).value;
  } catch (err) {
    highlighted = code;
  }
  const cls = language ? ` class="hljs language-${language}"` : ' class="hljs"';
  return `<pre><code${cls}>${highlighted}</code></pre>\n`;
};

// Add scope="col" to all <th> elements for WCAG 1.3.1
renderer.tablecell = function(content, flags) {
  const tag = flags.header ? 'th' : 'td';
  const align = flags.align ? ` style="text-align:${flags.align}"` : '';
  const scope = flags.header ? ' scope="col"' : '';
  return `<${tag}${align}${scope}>${content}</${tag}>\n`;
};

marked.setOptions({
  breaks: false,
  gfm: true,
  renderer
});

// HTML template with accessibility features
const htmlTemplate = (content, title, relativePath) => {
  const depth = relativePath.split('/').length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : './';
  const isHome = relativePath === 'index.html';
  const isRegister = relativePath === 'REGISTER.html';
  const siteName = 'GIT Going with GitHub';
  const titleContainsSiteName = title === siteName || title.includes(siteName);
  const pageTitle = isHome || titleContainsSiteName ? title : `${title} - ${siteName}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="GIT Going with GitHub - A two-day accessible open source workshop by Community Access">
  <title>${pageTitle}</title>
  <link rel="stylesheet" href="${prefix}styles/github-markdown.css">
  <link rel="stylesheet" href="${prefix}styles/highlight.css">
  <link rel="stylesheet" href="${prefix}styles/custom.css">
  <style>
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }
    @media (max-width: 767px) {
      .markdown-body {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    ${isHome
      ? '<span aria-current="page">Home</span>'
      : `<a href="${prefix}index.html">Home</a> <span aria-hidden="true">›</span> <span aria-current="page">${title}</span>`
    }
  </nav>
  <main id="main-content" class="markdown-body">
    ${content}
  </main>
  <footer role="contentinfo" class="site-footer">
    <p><strong>GIT Going with GitHub</strong> - A workshop by <a href="https://community-access.github.io">Community Access</a></p>
    <p><a href="https://github.com/community-access/git-going-with-github">View on GitHub</a> · <a href="https://community-access.github.io">community-access.github.io</a></p>
  </footer>
  ${(isHome || isRegister) ? `<script>
(function() {
  var url = 'https://api.github.com/search/issues?q=repo:community-access/git-going-with-github+label:registration+is:issue+is:open';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Accept', 'application/vnd.github+json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      try {
        var count = JSON.parse(xhr.responseText).total_count;
        var els = document.querySelectorAll('[id^="registration-count"]');
        for (var i = 0; i < els.length; i++) {
          els[i].textContent = count;
        }
      } catch (e) {}
    }
  };
  xhr.onerror = function() {};
  xhr.send();
})();
</script>` : ''}</body>
</html>`;
};

// Create output directory structure
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Convert markdown file to HTML
function convertMarkdownFile(mdPath, outputDir) {
  try {
    const content = fs.readFileSync(mdPath, 'utf-8');
    let htmlContent = marked.parse(content);
    
    // Add aria-label to GFM task list checkboxes (WCAG 1.3.1 / 4.1.2)
    htmlContent = htmlContent.replace(
      /<input disabled="" type="checkbox"(?: checked="")?>\s*([^<]+)/g,
      (match, label) => {
        const trimmed = label.trim();
        return match.replace('<input ', `<input aria-label="${trimmed.replace(/"/g, '&quot;')}" `);
      }
    );
    
    // Determine output path
    const relativePath = path.relative(process.cwd(), mdPath);
    let outputPath = path.join(outputDir, relativePath.replace(/\.md$/, '.html'));
    
    // ANNOUNCEMENT.md becomes the site front page (index.html)
    // README.md at the root becomes README.html (repo documentation)
    if (path.basename(mdPath) === 'ANNOUNCEMENT.md' && path.dirname(relativePath) === '.') {
      outputPath = path.join(outputDir, 'index.html');
    } else if (path.basename(mdPath) === 'README.md' && path.dirname(relativePath) !== '.') {
      // Sub-folder READMEs still become index.html in their directory
      const dir = path.dirname(outputPath);
      outputPath = path.join(dir, 'index.html');
    }
    
    // Extract title from first heading or filename
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : path.basename(mdPath, '.md');
    
    // Get relative path for template
    const relativeFromOutput = path.relative(outputDir, outputPath);
    
    // Create full HTML
    const html = htmlTemplate(htmlContent, title, relativeFromOutput);
    
    // Ensure output directory exists
    ensureDir(path.dirname(outputPath));
    
    // Write HTML file
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`✓ Converted: ${relativePath} → ${path.relative(process.cwd(), outputPath)}`);
    
    return outputPath;
  } catch (error) {
    console.error(`✗ Error converting ${mdPath}:`, error.message);
    return null;
  }
}

// Find all markdown files
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .git, and html output directory
      if (!['node_modules', '.git', '.github', 'html'].includes(file)) {
        findMarkdownFiles(filePath, fileList);
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Copy CSS files
function setupStyles(outputDir) {
  const stylesDir = path.join(outputDir, 'styles');
  ensureDir(stylesDir);
  
  // Copy github-markdown-css
  const githubCss = require.resolve('github-markdown-css');
  fs.copyFileSync(githubCss, path.join(stylesDir, 'github-markdown.css'));
  
  // Copy highlight.js CSS (GitHub theme)
  const highlightCss = path.join(require.resolve('highlight.js'), '../../styles/github.css');
  fs.copyFileSync(highlightCss, path.join(stylesDir, 'highlight.css'));
  
  // Create custom CSS for additional accessibility and styling
  const customCss = `
/* Custom styles for GitHub Learning Room HTML documentation */

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
  line-height: 1.6;
  background-color: #ffffff;
  color: #24292f;
}

.breadcrumb {
  max-width: 980px;
  margin: 0 auto;
  padding: 1rem 45px 0;
  font-size: 0.875rem;
  color: #57606a;
}

.breadcrumb a {
  color: #0969da;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

/* Improve focus visibility for keyboard navigation */
a:focus-visible,
button:focus-visible,
summary:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid #0969da;
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #0969da;
  color: #ffffff;
  padding: 8px 16px;
  z-index: 100;
  text-decoration: none;
  font-weight: 600;
  border-radius: 0 0 4px 0;
}

.skip-link:focus {
  top: 0;
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  body {
    background-color: #000000;
    color: #ffffff;
  }
  .markdown-body {
    color: #ffffff;
  }
  .markdown-body a {
    color: #6db3f2;
    text-decoration: underline;
  }
  .markdown-body blockquote {
    border-left-color: #ffffff;
    color: #ffffff;
  }
  .markdown-body table,
  .markdown-body table th,
  .markdown-body table td {
    border-color: #ffffff;
  }
  .markdown-body table th {
    background-color: #1a1a1a;
  }
  .markdown-body code,
  .markdown-body pre {
    background-color: #1a1a1a;
    border-color: #ffffff;
  }
  .markdown-body hr {
    background-color: #ffffff;
  }
  .breadcrumb {
    color: #ffffff;
  }
  .breadcrumb a {
    color: #6db3f2;
  }
  .site-footer {
    border-color: #ffffff;
    color: #ffffff;
  }
  .site-footer a {
    color: #6db3f2;
  }
  .skip-link {
    background: #ffffff;
    color: #000000;
  }
  a:focus-visible,
  button:focus-visible,
  summary:focus-visible {
    outline-color: #ffffff;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0d1117;
    color: #e6edf3;
  }
  .markdown-body {
    color: #e6edf3;
  }
  .breadcrumb {
    color: #9ca3af;
  }
  .breadcrumb a {
    color: #58a6ff;
  }
  .site-footer {
    border-color: #30363d;
    color: #9ca3af;
  }
  .site-footer a {
    color: #58a6ff;
  }
  a:focus-visible,
  button:focus-visible,
  summary:focus-visible {
    outline-color: #58a6ff;
  }
  .skip-link {
    background: #58a6ff;
    color: #0d1117;
  }
  .skip-link:focus {
    outline-color: #e6edf3;
  }
}

/* Ensure tables are responsive */
.markdown-body table {
  display: block;
  overflow-x: auto;
  max-width: 100%;
  white-space: normal;
}

/* details/summary styling for collapsible blocks */
.markdown-body details {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin: 0.75rem 0;
}

.markdown-body details[open] {
  padding-bottom: 0.75rem;
}

.markdown-body summary {
  cursor: pointer;
  font-weight: 600;
  padding: 0.25rem 0;
  user-select: none;
  list-style: none;
}

.markdown-body summary::-webkit-details-marker {
  display: none;
}

.markdown-body summary::before {
  content: '▶ ';
  font-size: 0.75em;
  vertical-align: middle;
}

.markdown-body details[open] > summary::before {
  content: '▼ ';
}

/* Site footer */
.site-footer {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  border-top: 1px solid var(--borderColor-default, #d0d7de);
  color: #57606a;
  font-size: 0.875rem;
}

.site-footer a {
  color: #0969da;
  text-decoration: none;
}

.site-footer a:hover {
  text-decoration: underline;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Print styles */
@media print {
  .breadcrumb,
  footer,
  .skip-link {
    display: none;
  }
  .markdown-body details {
    border: none;
    padding: 0;
  }
  .markdown-body details > * {
    display: block;
  }
  .markdown-body summary::before {
    display: none;
  }
}
`;
  
  fs.writeFileSync(path.join(stylesDir, 'custom.css'), customCss, 'utf-8');
  console.log('✓ CSS files copied');
}

// Build all HTML files
function buildAll() {
  console.log('Starting HTML build...\n');
  
  const outputDir = path.join(process.cwd(), 'html');
  
  // Setup styles
  setupStyles(outputDir);
  
  // Find and convert all markdown files
  const markdownFiles = findMarkdownFiles(process.cwd());
  console.log(`\nFound ${markdownFiles.length} markdown files\n`);
  
  let convertedCount = 0;
  markdownFiles.forEach(mdPath => {
    if (convertMarkdownFile(mdPath, outputDir)) {
      convertedCount++;
    }
  });
  
  console.log(`\n✓ Build complete! Converted ${convertedCount}/${markdownFiles.length} files`);
  console.log(`Output directory: ${outputDir}`);
}

// Watch mode
function watchMode() {
  const outputDir = path.join(process.cwd(), 'html');
  
  console.log('Starting watch mode... (Press Ctrl+C to stop)\n');
  
  // Initial build
  buildAll();
  
  // Watch for changes
  const watcher = chokidar.watch('**/*.md', {
    ignored: /(^|[\/\\])\..|(node_modules|html)/,
    persistent: true,
    ignoreInitial: true
  });
  
  watcher
    .on('add', mdPath => {
      console.log(`\nFile added: ${mdPath}`);
      convertMarkdownFile(mdPath, outputDir);
    })
    .on('change', mdPath => {
      console.log(`\nFile changed: ${mdPath}`);
      convertMarkdownFile(mdPath, outputDir);
    })
    .on('unlink', mdPath => {
      console.log(`\nFile removed: ${mdPath}`);
      const htmlPath = path.join(outputDir, mdPath.replace(/\.md$/, '.html'));
      if (fs.existsSync(htmlPath)) {
        fs.unlinkSync(htmlPath);
        console.log(`✓ Removed: ${htmlPath}`);
      }
    });
}

// Main execution
const args = process.argv.slice(2);
if (args.includes('--watch') || args.includes('-w')) {
  watchMode();
} else {
  buildAll();
}
