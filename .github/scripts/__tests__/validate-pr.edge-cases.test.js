const test = require('node:test');
const assert = require('node:assert/strict');

const {
  extractIssueReferences,
  extractClosingIssueReference
} = require('../validate-pr.js');

test('PR scenario: student forgets issue link entirely', () => {
  const prTitle = 'Fix typo in welcome doc';
  const prBody = 'This PR fixes a small typo in the welcome.md file. The word "recieve" is corrected to "receive".';

  const closingRef = extractClosingIssueReference(`${prTitle}\n${prBody}`);
  assert.equal(closingRef, null, 'Should not find issue reference');
});

test('PR scenario: student adds issue reference in title (first-time mistake)', () => {
  const prTitle = 'Fix typo in welcome doc (Issue #42)';
  const prBody = 'This is a small fix for a typo.';

  // Note: Current validator doesn't look for #123 in title, only Closes #123
  const closingRef = extractClosingIssueReference(`${prTitle}\n${prBody}`);
  assert.equal(closingRef, null, 'Should not find closing reference (not using Closes keyword)');
  
  // But extractIssueReferences should find it
  const refs = extractIssueReferences(`${prTitle}\n${prBody}`);
  assert.deepEqual(refs, [42], 'Should find #42 in title');
});

test('PR scenario: multiple issue references, one with Closes keyword', () => {
  const prTitle = 'Update docs and fix formatting';
  const prBody = 'Closes #100\nRelated to #101 and #102. This PR addresses the main issue (#100) and also cleans up related doc issues.';

  const closingRef = extractClosingIssueReference(`${prTitle}\n${prBody}`);
  assert.equal(closingRef, 100, 'Should extract the Closes reference');
  
  const allRefs = extractIssueReferences(`${prTitle}\n${prBody}`);
  assert.deepEqual(allRefs.sort((a, b) => a - b), [100, 101, 102], 'Should find all references');
});

test('PR scenario: student uses git URL format instead of issue number', () => {
  const prTitle = 'Fix documentation';
  const prBody = 'Closes #50\n\nThis PR closes the documentation issue. Issue details at /issues/50.';

  const closingRef = extractClosingIssueReference(`${prTitle}\n${prBody}`);
  assert.equal(closingRef, 50, 'Should extract issue number from "Closes #50" format');
  
  // Note: /issues/50 format in closing statement won't work—validator requires "Closes #50"
  // This teaches students the proper syntax
  const prBodyNoSpace = 'Closes /issues/50';
  const refNoSpace = extractClosingIssueReference(prBodyNoSpace);
  assert.equal(refNoSpace, null, 'Should not extract from "Closes /issues/50"—must use "Closes #50"');
});

test('PR scenario: typo in closing keyword (common mistake)', () => {
  const variants = [
    { text: 'Close #50', expected: 50 },     // Missing 's' - also works
    { text: 'Closes#50', expected: null },   // No space - validator rejects (strict)
    { text: 'Closes  #50', expected: 50 },   // Extra space - regex handles \s+
    { text: 'CLOSES #50', expected: 50 },    // Uppercase - case insensitive
    { text: 'Fixes #50', expected: 50 },     // Different keyword - also supported
  ];

  variants.forEach(variant => {
    const ref = extractClosingIssueReference(variant.text);
    assert.equal(ref, variant.expected, `Should handle: "${variant.text}"`);
  });
});

test('PR scenario: invalid issue numbers are excluded', () => {
  const prBody = 'This mentions #0, #-5, and #100 (valid ones).';

  const refs = extractIssueReferences(prBody);
  assert.deepEqual(refs, [100], 'Should exclude #0 and negative numbers, keep #100');
});

test('PR scenario: issue numbers in code blocks are still extracted', () => {
  const prBody = `
Closes #100

\`\`\`
# Related issues: #101, #102
\`\`\`

Also mentioned in #103.
`;

  const refs = extractIssueReferences(prBody);
  assert.deepEqual(refs.sort((a, b) => a - b), [100, 101, 102, 103], 'Should extract all issue references including from code');
});

test('PR scenario: URLs with /issues/ in them', () => {
  const prBody = `
Closes /issues/75

Here's the GitHub link: https://github.com/org/repo/issues/76

And this one: https://github.com/org/repo/issues/77?q=test
`;

  const refs = extractIssueReferences(prBody);
  const sorted = refs.sort((a, b) => a - b);
  assert.ok(sorted.includes(75), 'Should find /issues/75');
  assert.ok(sorted.includes(76), 'Should find issue 76 from URL');
  assert.ok(sorted.includes(77), 'Should find issue 77 from URL with query params');
});

test('PR scenario: repeated issue references', () => {
  const prBody = `
Closes #50

This fixes issue #50 and relates to #50 again.
`;

  const refs = extractIssueReferences(prBody);
  assert.deepEqual(refs, [50], 'Should deduplicate #50');
});

test('PR scenario: very long PR description with many references', () => {
  const parts = [];
  for (let i = 1; i <= 10; i++) {
    parts.push(`Issue #${i} is related.`);
  }
  const prBody = parts.join('\n');

  const refs = extractIssueReferences(prBody);
  assert.equal(refs.length, 10, 'Should extract all 10 issues');
  assert.deepEqual(refs.sort((a, b) => a - b), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('PR scenario: empty or whitespace PR body', () => {
  const testCases = [
    { title: '', body: '' },
    { title: 'Fix', body: '   ' },
    { title: 'Fix', body: null },
  ];

  testCases.forEach(tc => {
    const closingRef = extractClosingIssueReference(`${tc.title || ''}\n${tc.body || ''}`);
    assert.equal(closingRef, null, 'Should handle empty/null gracefully');
  });
});

test('PR scenario: case insensitivity in closing keywords', () => {
  const keywords = ['closes', 'Closes', 'CLOSES', 'cLoSeS'];
  
  keywords.forEach(keyword => {
    const ref = extractClosingIssueReference(`${keyword} #50`);
    assert.equal(ref, 50, `Should handle: "${keyword}"`);
  });
});
