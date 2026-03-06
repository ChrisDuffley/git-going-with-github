#!/usr/bin/env node

/**
 * Learning Room PR Validation Script
 * Validates student pull requests and provides educational feedback
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Environment variables from GitHub Actions
const PR_NUMBER = process.env.PR_NUMBER;
const PR_TITLE = process.env.PR_TITLE || '';
const PR_BODY = process.env.PR_BODY || '';
const PR_AUTHOR = process.env.PR_AUTHOR || '';
const BASE_SHA = process.env.BASE_SHA;
const HEAD_SHA = process.env.HEAD_SHA;

// Validate required environment variables only in CLI mode.
if (require.main === module && (!PR_NUMBER || !PR_AUTHOR)) {
  console.error('Error: Missing required environment variables (PR_NUMBER, PR_AUTHOR)');
  process.exit(1);
}

const results = {
  passed: true,
  required: [],
  suggestions: [],
  accessibility: [],
  resources: []
};

const POOR_LINK_PATTERNS = [
  { pattern: /\[click here\]/gi, name: 'click here' },
  { pattern: /\[here\]/gi, name: 'here' },
  { pattern: /\[read more\]/gi, name: 'read more' },
  { pattern: /\[link\]/gi, name: 'link' },
  { pattern: /\[this\]/gi, name: 'this' }
];

/**
 * Extract all issue references from free text.
 */
function extractIssueReferences(text) {
  if (!text) return [];

  const references = new Set();
  const issueNumberMatches = text.match(/#(\d+)/g) || [];
  issueNumberMatches.forEach(match => {
    const number = Number(match.replace('#', ''));
    if (Number.isInteger(number) && number > 0) {
      references.add(number);
    }
  });

  const issueUrlMatches = text.match(/\/issues\/(\d+)/g) || [];
  issueUrlMatches.forEach(match => {
    const number = Number(match.replace('/issues/', ''));
    if (Number.isInteger(number) && number > 0) {
      references.add(number);
    }
  });

  return Array.from(references);
}

/**
 * Extract the issue number used in close/fix/resolve syntax.
 */
function extractClosingIssueReference(text) {
  if (!text) return null;
  const closingMatch = text.match(/(?:closes|fixes|resolves|fix|close|resolve)\s+#(\d+)/i);
  if (!closingMatch) return null;
  const issueNumber = Number(closingMatch[1]);
  return Number.isInteger(issueNumber) && issueNumber > 0 ? issueNumber : null;
}

/**
 * Fetch issue details via GitHub CLI.
 */
function getIssueDetails(issueNumber) {
  try {
    const issueJson = execSync(
      `gh issue view ${issueNumber} --json number,title,body,author,state,url`,
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
    );
    return JSON.parse(issueJson);
  } catch (error) {
    return null;
  }
}

/**
 * Evaluate Chapter 4 evidence checks from PR metadata.
 * This function is pure when provided with a deterministic getIssueDetailsFn.
 */
function evaluateChapter4Evidence({
  prTitle,
  prBody,
  prAuthor,
  getIssueDetailsFn,
  poorLinkPatterns = POOR_LINK_PATTERNS
}) {
  const evaluation = {
    passed: true,
    required: [],
    accessibility: [],
    resources: []
  };

  const closingIssueNumber = extractClosingIssueReference(`${prTitle || ''}\n${prBody || ''}`);
  if (!closingIssueNumber) {
    return evaluation;
  }

  const challengeIssue = getIssueDetailsFn(closingIssueNumber);
  if (!challengeIssue || !/chapter\s*4\./i.test(challengeIssue.title || '')) {
    return evaluation;
  }

  const chapterMatch = (challengeIssue.title || '').match(/chapter\s*4\.(\d+)/i);
  const chapterChallengeNumber = chapterMatch ? Number(chapterMatch[1]) : null;

  const allReferences = extractIssueReferences(`${prTitle || ''}\n${prBody || ''}`);
  const evidenceReferences = allReferences.filter(issueNumber => issueNumber !== closingIssueNumber);

  if (chapterChallengeNumber === 1) {
    const hasCreatedIssueReference = evidenceReferences.length > 0;
    evaluation.required.push({
      name: 'Chapter 4.1 Created Issue Reference',
      passed: hasCreatedIssueReference,
      message: hasCreatedIssueReference
        ? 'PR includes a reference to the issue you created for Challenge 4.1'
        : 'Chapter 4.1 requires a reference to the issue you created (for example, "Created issue #123")',
      help: hasCreatedIssueReference
        ? null
        : 'Add the issue number or URL of the issue you created to your PR description so the bot can verify your work.'
    });

    if (!hasCreatedIssueReference) {
      evaluation.passed = false;
      evaluation.resources.push({
        title: 'Writing Effective Issues',
        url: '../../docs/04-working-with-issues.md#what-makes-an-effective-issue'
      });
      return evaluation;
    }

    const createdIssue = getIssueDetailsFn(evidenceReferences[0]);
    const isCreatedIssueReachable = Boolean(createdIssue);
    const isCreatedIssueByAuthor =
      isCreatedIssueReachable &&
      createdIssue.author &&
      createdIssue.author.login &&
      (createdIssue.author.login || '').toLowerCase() === (prAuthor || '').toLowerCase();
    const hasReasonableTitle = isCreatedIssueReachable && (createdIssue.title || '').trim().length >= 12;
    const hasReasonableBody = isCreatedIssueReachable && (createdIssue.body || '').trim().length >= 80;

    evaluation.required.push({
      name: 'Chapter 4.1 Created Issue Quality',
      passed: isCreatedIssueReachable && isCreatedIssueByAuthor && hasReasonableTitle && hasReasonableBody,
      message: isCreatedIssueReachable && isCreatedIssueByAuthor && hasReasonableTitle && hasReasonableBody
        ? 'Created issue is accessible and has enough detail'
        : 'Created issue must be authored by you and include a clear title plus meaningful description',
      help: isCreatedIssueReachable && isCreatedIssueByAuthor && hasReasonableTitle && hasReasonableBody
        ? null
        : 'Ensure your created issue has a specific title (12+ chars) and a detailed body (80+ chars), then reference it in this PR.'
    });

    if (!(isCreatedIssueReachable && isCreatedIssueByAuthor && hasReasonableTitle && hasReasonableBody)) {
      evaluation.passed = false;
    }

    if (isCreatedIssueReachable) {
      poorLinkPatterns.forEach(({ pattern, name }) => {
        const matches = (createdIssue.body || '').match(pattern);
        if (matches) {
          evaluation.accessibility.push({
            type: 'warning',
            title: 'Chapter 4.1 Issue Link Text',
            message: `Your created issue contains non-descriptive link text ("${name}").`,
            file: `Issue #${createdIssue.number}`,
            fix: 'Use descriptive link text so screen reader users understand link purpose.'
          });
        }
      });
    }

    return evaluation;
  }

  const hasEvidenceReference = evidenceReferences.length > 0;
  evaluation.required.push({
    name: 'Chapter 4 Evidence Reference',
    passed: hasEvidenceReference,
    message: hasEvidenceReference
      ? 'PR includes issue evidence for Chapter 4 activity'
      : 'Include at least one issue reference in your PR body as evidence (issue URL or #number).',
    help: hasEvidenceReference
      ? null
      : 'For Chapter 4.2/4.3, reference the issue where you claimed work or asked a clarifying question.'
  });

  if (!hasEvidenceReference) {
    evaluation.passed = false;
  }

  return evaluation;
}

/**
 * Add Chapter 4-specific validation using issue evidence in PR description.
 */
function checkChapter4Evidence() {
  const evaluation = evaluateChapter4Evidence({
    prTitle: PR_TITLE,
    prBody: PR_BODY,
    prAuthor: PR_AUTHOR,
    getIssueDetailsFn: getIssueDetails,
    poorLinkPatterns: POOR_LINK_PATTERNS
  });

  if (!evaluation.passed) {
    results.passed = false;
  }

  results.required.push(...evaluation.required);
  results.accessibility.push(...evaluation.accessibility);
  results.resources.push(...evaluation.resources);
}

/**
 * Evaluate Chapter 5 evidence checks (PR workflow).
 * Chapter 5 focuses on opening a linked PR with proper changes.
 */
function evaluateChapter5Evidence({
  prTitle,
  prBody,
  getIssueDetailsFn,
  learningRoomFilesOnly = true
}) {
  const evaluation = {
    passed: true,
    required: [],
    accessibility: [],
    resources: []
  };

  const closingIssueNumber = extractClosingIssueReference(`${prTitle || ''}\n${prBody || ''}`);
  if (!closingIssueNumber) {
    return evaluation; // Chapter 5 validation only runs if issue is linked
  }

  const challengeIssue = getIssueDetailsFn(closingIssueNumber);
  if (!challengeIssue || !/chapter\s*5\./i.test(challengeIssue.title || '')) {
    return evaluation;
  }

  // Chapter 5 is already covered by core checks (issue reference, file location, description)
  // but we can add specific messaging
  evaluation.required.push({
    name: 'Chapter 5 PR Template',
    passed: prBody && prBody.trim().length >= 50,
    message: prBody && prBody.trim().length >= 50
      ? 'PR includes a detailed explanation'
      : 'Explain what you changed and why in the PR description',
    help: prBody && prBody.trim().length >= 50
      ? null
      : 'Use the PR template to explain your changes for the reviewer.'
  });

  if (!(prBody && prBody.trim().length >= 50)) {
    evaluation.passed = false;
    evaluation.resources.push({
      title: 'Working with Pull Requests',
      url: '../../docs/05-working-with-pull-requests.md'
    });
  }

  return evaluation;
}

/**
 * Evaluate Chapter 6 evidence checks (merge conflicts).
 * Chapter 6 focuses on resolving conflict markers and opening a linked PR.
 */
function evaluateChapter6Evidence({
  prTitle,
  prBody,
  getIssueDetailsFn
}) {
  const evaluation = {
    passed: true,
    required: [],
    accessibility: [],
    resources: []
  };

  const closingIssueNumber = extractClosingIssueReference(`${prTitle || ''}\n${prBody || ''}`);
  if (!closingIssueNumber) {
    return evaluation;
  }

  const challengeIssue = getIssueDetailsFn(closingIssueNumber);
  if (!challengeIssue || !/chapter\s*6\./i.test(challengeIssue.title || '')) {
    return evaluation;
  }

  // Chapter 6: Check if PR description indicates conflict resolution
  const hasConflictResolutionNote = prBody && 
    /conflict|markers?|resolved/i.test(prBody);

  evaluation.required.push({
    name: 'Chapter 6 Conflict Resolution',
    passed: hasConflictResolutionNote,
    message: hasConflictResolutionNote
      ? 'PR indicates conflict resolution work'
      : 'Mention in the PR that you resolved conflict markers',
    help: hasConflictResolutionNote
      ? null
      : 'Add a note like "Resolved conflict markers in [file]" to explain your work.'
  });

  if (!hasConflictResolutionNote) {
    evaluation.passed = false;
    evaluation.resources.push({
      title: 'Merge Conflicts Guide',
      url: '../../docs/06-merge-conflicts.md'
    });
  }

  return evaluation;
}

/**
 * Evaluate Chapter 11 evidence checks (Git & local workflow).
 * Chapter 11 focuses on local commits and push workflow.
 */
function evaluateChapter11Evidence({
  prTitle,
  prBody,
  getIssueDetailsFn
}) {
  const evaluation = {
    passed: true,
    required: [],
    accessibility: [],
    resources: []
  };

  const closingIssueNumber = extractClosingIssueReference(`${prTitle || ''}\n${prBody || ''}`);
  if (!closingIssueNumber) {
    return evaluation;
  }

  const challengeIssue = getIssueDetailsFn(closingIssueNumber);
  if (!challengeIssue || !/chapter\s*11\./i.test(challengeIssue.title || '')) {
    return evaluation;
  }

  // Chapter 11: Check if PR branch name exists and is descriptive
  const hasBranchInfo = prTitle && 
    (prTitle.includes('[') || prTitle.includes('chapter 11'));

  evaluation.required.push({
    name: 'Chapter 11 Local Git Workflow',
    passed: hasBranchInfo || (prBody && prBody.length >= 50),
    message: (hasBranchInfo || (prBody && prBody.length >= 50))
      ? 'PR shows work from local Git workflow'
      : 'Describe your commit and branch in the PR',
    help: (hasBranchInfo || (prBody && prBody.length >= 50))
      ? null
      : 'Mention the branch name and commit message to show you completed the local workflow.'
  });

  if (!(hasBranchInfo || (prBody && prBody.length >= 50))) {
    evaluation.passed = false;
    evaluation.resources.push({
      title: 'Git & Source Control in VS Code',
      url: '../../docs/11-git-source-control.md'
    });
  }

  return evaluation;
}

/**
 * Evaluate Chapter 15 evidence checks (template design).
 * Chapter 15 focuses on template analysis, remix, and creation.
 */
function evaluateChapter15Evidence({
  prTitle,
  prBody,
  getIssueDetailsFn
}) {
  const evaluation = {
    passed: true,
    required: [],
    accessibility: [],
    resources: []
  };

  const closingIssueNumber = extractClosingIssueReference(`${prTitle || ''}\n${prBody || ''}`);
  if (!closingIssueNumber) {
    return evaluation;
  }

  const challengeIssue = getIssueDetailsFn(closingIssueNumber);
  if (!challengeIssue || !/chapter\s*15\./i.test(challengeIssue.title || '')) {
    return evaluation;
  }

  // Chapter 15: Check if PR/issue mentions template-related work
  const templateKeywords = /template|yaml|remix|frontmatter|field|dropdown|validation/i;
  const hasTemplateKeywords = templateKeywords.test(prBody || '') || templateKeywords.test(prTitle || '');

  evaluation.required.push({
    name: 'Chapter 15 Template Work',
    passed: hasTemplateKeywords,
    message: hasTemplateKeywords
      ? 'PR shows template design work'
      : 'Describe your template work: analyze, remix, or create a template',
    help: hasTemplateKeywords
      ? null
      : 'Mention the template you analyzed, remixed, or created. Include YAML/field descriptions if applicable.'
  });

  if (!hasTemplateKeywords) {
    evaluation.passed = false;
    evaluation.resources.push({
      title: 'Issue Templates Guide',
      url: '../../docs/15-issue-templates.md'
    });
  }

  // Optional: Encourage YAML/Markdown structure mentions
  const hasStructureNote = /yaml|markdown|frontmatter|field|section/i.test(prBody || '');
  if (hasStructureNote) {
    evaluation.suggestions = evaluation.suggestions || [];
    evaluation.suggestions.push({
      message: 'Great! Your PR mentions template structure (YAML/Markdown).',
      help: 'This shows you understand the technical details of template design.'
    });
  }

  return evaluation;
}

/**
 * Add chapter-specific validation based on challenge issue.
 */
function checkChapterSpecificEvidence() {
  const closingIssueNumber = extractClosingIssueReference(`${PR_TITLE || ''}\n${PR_BODY || ''}`);
  if (!closingIssueNumber) {
    return;
  }

  const challengeIssue = getIssueDetails(closingIssueNumber);
  if (!challengeIssue) {
    return;
  }

  let evaluation;
  if (/chapter\s*5\./i.test(challengeIssue.title || '')) {
    evaluation = evaluateChapter5Evidence({
      prTitle: PR_TITLE,
      prBody: PR_BODY,
      getIssueDetailsFn: getIssueDetails
    });
  } else if (/chapter\s*6\./i.test(challengeIssue.title || '')) {
    evaluation = evaluateChapter6Evidence({
      prTitle: PR_TITLE,
      prBody: PR_BODY,
      getIssueDetailsFn: getIssueDetails
    });
  } else if (/chapter\s*11\./i.test(challengeIssue.title || '')) {
    evaluation = evaluateChapter11Evidence({
      prTitle: PR_TITLE,
      prBody: PR_BODY,
      getIssueDetailsFn: getIssueDetails
    });
  } else if (/chapter\s*15\./i.test(challengeIssue.title || '')) {
    evaluation = evaluateChapter15Evidence({
      prTitle: PR_TITLE,
      prBody: PR_BODY,
      getIssueDetailsFn: getIssueDetails
    });
  }

  if (evaluation) {
    if (!evaluation.passed) {
      results.passed = false;
    }
    results.required.push(...evaluation.required);
    results.accessibility.push(...evaluation.accessibility);
    if (evaluation.suggestions) {
      results.suggestions.push(...evaluation.suggestions);
    }
    results.resources.push(...evaluation.resources);
  }
}

/**
 * Check if PR has issue reference
 */
function checkIssueReference() {
  const hasIssueRef = Boolean(extractClosingIssueReference(PR_TITLE) || extractClosingIssueReference(PR_BODY));
  
  results.required.push({
    name: 'Issue Reference',
    passed: hasIssueRef,
    message: hasIssueRef 
      ? 'PR properly references an issue'
      : 'PR should reference the issue it addresses (e.g., "Closes #12")',
    help: hasIssueRef 
      ? null 
      : 'Add "Closes #XX" to your PR description to automatically close the issue when merged. Learn more: docs/04-working-with-issues.md'
  });
  
  if (!hasIssueRef) {
    results.passed = false;
    results.resources.push({
      title: 'Working with Issues',
      url: '../../docs/04-working-with-issues.md#linking-issues-to-prs'
    });
  }
}

/**
 * Check if PR description is meaningful
 */
function checkDescription() {
  const minLength = 50;
  const hasDescription = PR_BODY && PR_BODY.trim().length >= minLength;
  
  // Check for template usage
  const hasTemplateMarkers = PR_BODY && (
    PR_BODY.includes('## Description') ||
    PR_BODY.includes('## Changes Made') ||
    PR_BODY.includes('## Type of Change')
  );
  
  results.required.push({
    name: 'PR Description',
    passed: hasDescription,
    message: hasDescription
      ? 'PR has a detailed description'
      : `PR description should be at least ${minLength} characters and explain what changed and why`,
    help: hasDescription
      ? null
      : 'Use the PR template to structure your description. Explain what you changed, why you changed it, and how to test it.'
  });
  
  if (!hasDescription) {
    results.passed = false;
    results.resources.push({
      title: 'Writing Good PR Descriptions',
      url: '../../docs/05-working-with-pull-requests.md#writing-a-good-pr-description'
    });
  }
  
  if (hasTemplateMarkers) {
    results.suggestions.push({
      message: 'Great job using the PR template!',
      help: 'Templates help reviewers understand your changes quickly.'
    });
  }
}

/**
 * Get changed files in the PR
 */
function getChangedFiles() {
  try {
    // If SHA values are missing, fall back to listing all learning-room files
    if (!BASE_SHA || !HEAD_SHA) {
      console.warn('Warning: BASE_SHA or HEAD_SHA not available, checking learning-room directory');
      if (fs.existsSync('learning-room/docs')) {
        const files = fs.readdirSync('learning-room/docs', { recursive: true });
        return files.map(f => path.join('learning-room/docs', f)).filter(f => !fs.statSync(f).isDirectory());
      }
      return [];
    }
    
    const diff = execSync(`git diff --name-only ${BASE_SHA} ${HEAD_SHA}`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore']
    });
    return diff.trim().split('\n').filter(f => f);
  } catch (error) {
    console.error('Error getting changed files:', error.message);
    return [];
  }
}

/**
 * Check if changes are in learning-room
 */
function checkFileLocation() {
  const changedFiles = getChangedFiles();
  const learningRoomFiles = changedFiles.filter(f => f.startsWith('learning-room/'));
  
  const allInLearningRoom = changedFiles.length > 0 && 
    changedFiles.every(f => f.startsWith('learning-room/'));
  
  results.required.push({
    name: 'File Location',
    passed: allInLearningRoom,
    message: allInLearningRoom
      ? 'All changes are in the learning-room directory'
      : 'Changes should be in learning-room/ directory only',
    help: allInLearningRoom
      ? null
      : 'Student contributions should modify files in learning-room/docs/ only. Other directories are workshop infrastructure.'
  });
  
  if (!allInLearningRoom) {
    results.passed = false;
  }
  
  return learningRoomFiles;
}

/**
 * Validate Markdown files for accessibility
 */
function validateMarkdownAccessibility(filePath) {
  try {    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return;
    }
        const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Check heading hierarchy
    const headings = [];
    lines.forEach((line, index) => {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        headings.push({ level, text, line: index + 1 });
      }
    });
    
    // Detect heading skips
    for (let i = 1; i < headings.length; i++) {
      const prevLevel = headings[i - 1].level;
      const currLevel = headings[i].level;
      
      if (currLevel > prevLevel + 1) {
        results.accessibility.push({
          type: 'error',
          title: 'Heading Hierarchy Skip',
          message: `Heading jumps from H${prevLevel} to H${currLevel}. This breaks screen reader navigation.`,
          file: filePath,
          line: headings[i].line,
          fix: `Change "H${currLevel}" to "H${prevLevel + 1}" or add intermediate heading levels.`
        });
        results.passed = false;
      }
    }
    
    // Check for H1
    const hasH1 = headings.some(h => h.level === 1);
    if (!hasH1 && headings.length > 0) {
      results.accessibility.push({
        type: 'warning',
        title: 'Missing H1 Heading',
        message: 'Document should start with a level 1 heading (# Title)',
        file: filePath,
        fix: 'Add a level 1 heading at the start of the document.'
      });
    }
    
    // Check link text quality
    POOR_LINK_PATTERNS.forEach(({ pattern, name }) => {
      const matches = content.match(pattern);
      if (matches) {
        results.accessibility.push({
          type: 'warning',
          title: 'Non-Descriptive Link Text',
          message: `Found ${matches.length} instance(s) of "${name}" link text. Screen reader users can't tell where the link goes.`,
          file: filePath,
          fix: `Replace with descriptive text like "View keyboard shortcuts guide" or "Download the setup instructions".`
        });
        
        results.resources.push({
          title: 'Writing Accessible Link Text',
          url: '../../docs/07-culture-etiquette.md#writing-accessible-content'
        });
      }
    });
    
    // Check for [TODO] markers
    const todoPattern = /\[TODO\]/gi;
    const todoMatches = content.match(todoPattern);
    if (todoMatches) {
      results.accessibility.push({
        type: 'error',
        title: 'Incomplete Content',
        message: `Found ${todoMatches.length} [TODO] marker(s). These should be completed before submitting.`,
        file: filePath,
        fix: 'Complete all [TODO] sections with actual content.'
      });
      results.passed = false;
    }
    
    // Check for alt text on images
    const imagePattern = /!\[(.*?)\]\(.+?\)/g;
    let match;
    while ((match = imagePattern.exec(content)) !== null) {
      const altText = match[1];
      if (!altText || altText.trim() === '') {
        results.accessibility.push({
          type: 'error',
          title: 'Missing Image Alt Text',
          message: 'Images must have descriptive alt text for screen reader users.',
          file: filePath,
          fix: 'Add descriptive alt text: ![Description of image](image.png)'
        });
        results.passed = false;
      }
    }
    
    // Check for broken links (basic check)
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    while ((match = linkPattern.exec(content)) !== null) {
      const linkUrl = match[2];
      
      // Check for relative links to non-existent files
      if (!linkUrl.startsWith('http') && !linkUrl.startsWith('#')) {
        const linkPath = path.resolve(path.dirname(filePath), linkUrl);
        if (!fs.existsSync(linkPath.split('#')[0])) {
          results.accessibility.push({
            type: 'error',
            title: 'Broken Link',
            message: `Link points to non-existent file: ${linkUrl}`,
            file: filePath,
            fix: 'Verify the file path is correct or check if the file exists.'
          });
          results.passed = false;
        }
      }
    }
    
    // Check for good practices
    const hasCodeBlocks = /```/.test(content);
    if (hasCodeBlocks) {
      results.suggestions.push({
        message: 'Good use of code blocks for examples',
        help: 'Code blocks help both sighted and non-sighted users understand technical content.'
      });
    }
    
    const hasTables = /\|.*\|/.test(content);
    if (hasTables) {
      // Check if tables have headers
      const tableHeaderPattern = /\|[^\n]+\|\n\|[\s:-]+\|/;
      if (tableHeaderPattern.test(content)) {
        results.suggestions.push({
          message: 'Tables include proper headers',
          help: 'Screen readers announce table headers, helping users navigate data.'
        });
      } else {
        results.accessibility.push({
          type: 'warning',
          title: 'Table Missing Headers',
          message: 'Tables should have header rows for accessibility',
          file: filePath,
          fix: 'Add a header row with | Header 1 | Header 2 | followed by | --- | --- |'
        });
      }
    }
    
  } catch (error) {
    console.error(`Error validating ${filePath}:`, error.message);
  }
}

/**
 * Main validation function
 */
function validate() {
  console.log(`Validating PR #${PR_NUMBER} by @${PR_AUTHOR}`);
  
  try {
    // Run required checks
    checkIssueReference();
    checkChapter4Evidence();
    checkChapterSpecificEvidence();
    checkDescription();
    const changedFiles = checkFileLocation();
    
    // Validate each changed markdown file
    if (changedFiles && changedFiles.length > 0) {
      changedFiles.forEach(file => {
        if (file.endsWith('.md')) {
          console.log(`Validating ${file}...`);
          validateMarkdownAccessibility(file);
        }
      });
    } else {
      console.log('No markdown files changed in this PR');
    }
    
    // Add relevant resources based on checks
    if (results.accessibility.length > 0) {
      results.resources.push({
        title: 'Accessible Documentation Guide',
        url: '../../docs/07-culture-etiquette.md#writing-accessible-content'
      });
    }
    
    // Deduplicate resources
    results.resources = Array.from(
      new Map(results.resources.map(r => [r.url, r])).values()
    );
    
    // Write results to file for GitHub Actions
    fs.writeFileSync('validation-results.json', JSON.stringify(results, null, 2));
    
    console.log(`\nValidation complete:`);
    console.log(`  Passed: ${results.passed}`);
    console.log(`  Required checks: ${results.required.filter(r => r.passed).length}/${results.required.length}`);
    console.log(`  Accessibility issues: ${results.accessibility.filter(a => a.type === 'error').length}`);
    console.log(`  Suggestions: ${results.suggestions.length}`);
    
    // Always exit with success (validation results are recorded in JSON)
    process.exit(0);
  } catch (error) {
    console.error('Fatal error during validation:', error);
    // Write minimal results to allow workflow to continue
    fs.writeFileSync('validation-results.json', JSON.stringify({
      passed: false,
      required: [{
        name: 'Validation Script Error',
        passed: false,
        message: 'Validation script encountered an error',
        help: 'Please review the workflow logs for details'
      }],
      suggestions: [],
      accessibility: [],
      resources: []
    }, null, 2));
    process.exit(0);
  }
}

if (require.main === module) {
  // Run validation in CLI mode
  validate();
}

module.exports = {
  extractIssueReferences,
  extractClosingIssueReference,
  evaluateChapter4Evidence,
  evaluateChapter5Evidence,
  evaluateChapter6Evidence,
  evaluateChapter11Evidence,
  evaluateChapter15Evidence
};
