const test = require('node:test');
const assert = require('node:assert/strict');

const {
  evaluateChapter5Evidence,
  evaluateChapter6Evidence,
  evaluateChapter11Evidence,
  evaluateChapter15Evidence
} = require('../validate-pr.js');

// Mock issue fetcher that returns different challenge issues
function createMockIssueDetails(chapter) {
  return function mockGetIssueDetails(issueNumber) {
    if (issueNumber === 100) {
      return {
        number: 100,
        title: `Chapter ${chapter} Challenge`,
        body: 'Test challenge',
        author: { login: 'student' },
        state: 'open'
      };
    }
    if (issueNumber === 200) {
      return {
        number: 200,
        title: `Chapter 4.1 Challenge`,
        body: 'Different chapter',
        author: { login: 'student' },
        state: 'open'
      };
    }
    return null;
  };
}

test('Chapter 5 passes with issue link and good description', () => {
  const evaluation = evaluateChapter5Evidence({
    prTitle: 'Fix welcome doc',
    prBody: 'Closes #100\n\nThis PR fixes the welcome documentation with a clear, detailed explanation of changes.',
    getIssueDetailsFn: createMockIssueDetails('5.')
  });

  assert.equal(evaluation.passed, true, 'Evaluation should pass');
  assert.match(evaluation.required[0].name, /Chapter 5/);
  assert.equal(evaluation.required[0].passed, true);
});

test('Chapter 5 fails with minimal description', () => {
  const evaluation = evaluateChapter5Evidence({
    prTitle: 'Fix',
    prBody: 'Closes #100\n\nFix.',
    getIssueDetailsFn: createMockIssueDetails('5.')
  });

  assert.equal(evaluation.passed, false, 'Evaluation should fail');
  assert.equal(evaluation.required[0].passed, false);
  assert.equal(evaluation.resources.length > 0, true, 'Should provide learning resource');
});

test('Chapter 5 ignores non-Chapter-5 issues', () => {
  const evaluation = evaluateChapter5Evidence({
    prTitle: 'Fix doc',
    prBody: 'Closes #200\n\nThis is a detailed change.',
    getIssueDetailsFn: createMockIssueDetails('5.')
  });

  assert.equal(evaluation.required.length, 0, 'Should not add checks for non-Chapter-5 issues');
  assert.equal(evaluation.passed, true, 'Should pass by default (not applicable)');
});

test('Chapter 5 ignores PR without issue link', () => {
  const evaluation = evaluateChapter5Evidence({
    prTitle: 'Fix doc',
    prBody: 'This PR has a detailed description but no issue link.',
    getIssueDetailsFn: createMockIssueDetails('5.')
  });

  assert.equal(evaluation.required.length, 0, 'Should not add checks when no issue is linked');
});

test('Chapter 6 passes with conflict resolution note', () => {
  const evaluation = evaluateChapter6Evidence({
    prTitle: 'Resolve conflicts',
    prBody: 'Closes #100\n\nResolved conflict markers in the practice file.',
    getIssueDetailsFn: createMockIssueDetails('6.')
  });

  assert.equal(evaluation.passed, true, 'Evaluation should pass');
  assert.match(evaluation.required[0].name, /Chapter 6/);
  assert.equal(evaluation.required[0].passed, true);
});

test('Chapter 6 fails without conflict resolution note', () => {
  const evaluation = evaluateChapter6Evidence({
    prTitle: 'Merge conflict fix',
    prBody: 'Closes #100\n\nFixed the file by editing content without mentioning what I did.',
    getIssueDetailsFn: createMockIssueDetails('6.')
  });

  assert.equal(evaluation.passed, false, 'Evaluation should fail');
  assert.equal(evaluation.required[0].passed, false);
});

test('Chapter 6 accepts "markers" keyword', () => {
  const evaluation = evaluateChapter6Evidence({
    prTitle: 'Fix file',
    prBody: 'Closes #100\n\nRemoved all conflict markers from the practice section.',
    getIssueDetailsFn: createMockIssueDetails('6.')
  });

  assert.equal(evaluation.passed, true, 'Should accept "markers" keyword');
  assert.equal(evaluation.required[0].passed, true);
});

test('Chapter 11 passes with descriptive branch info', () => {
  const evaluation = evaluateChapter11Evidence({
    prTitle: '[chapter-11] Add documentation edit',
    prBody: 'Closes #100\n\nThis PR shows my local Git workflow with a clean commit.',
    getIssueDetailsFn: createMockIssueDetails('11.')
  });

  assert.equal(evaluation.passed, true, 'Evaluation should pass');
  assert.match(evaluation.required[0].name, /Chapter 11/);
  assert.equal(evaluation.required[0].passed, true);
});

test('Chapter 11 passes with good description lacking branch info', () => {
  const evaluation = evaluateChapter11Evidence({
    prTitle: 'Add changes',
    prBody: 'Closes #100\n\nCreated a new branch locally and committed my changes with a clear message before pushing back to GitHub.',
    getIssueDetailsFn: createMockIssueDetails('11.')
  });

  assert.equal(evaluation.passed, true, 'Evaluation should pass with good description');
  assert.equal(evaluation.required[0].passed, true);
});

test('Chapter 11 fails without branch info and minimal description', () => {
  const evaluation = evaluateChapter11Evidence({
    prTitle: 'Fix',
    prBody: 'Closes #100\n\nDone.',
    getIssueDetailsFn: createMockIssueDetails('11.')
  });

  assert.equal(evaluation.passed, false, 'Evaluation should fail');
  assert.equal(evaluation.required[0].passed, false);
});

test('Chapter 11 ignores non-Chapter-11 issues', () => {
  const evaluation = evaluateChapter11Evidence({
    prTitle: '[branch-name] Good description here',
    prBody: 'Closes #200\n\nThis is Chapter 4, not 11.',
    getIssueDetailsFn: createMockIssueDetails('11.')
  });

  assert.equal(evaluation.required.length, 0, 'Should not add checks for non-Chapter-11 issues');
  assert.equal(evaluation.passed, true, 'Should pass by default (not applicable)');
});

test('Chapter 15 passes with template-related keywords', () => {
  const evaluation = evaluateChapter15Evidence({
    prTitle: 'Add custom bug report template',
    prBody: 'Closes #100\n\nRemixed the registration template YAML to create a bug report template.',
    getIssueDetailsFn: createMockIssueDetails('15.')
  });

  assert.equal(evaluation.passed, true, 'Evaluation should pass');
  assert.match(evaluation.required[0].name, /Chapter 15/);
  assert.equal(evaluation.required[0].passed, true);
});

test('Chapter 15 passes with multiple template keywords', () => {
  const evaluation = evaluateChapter15Evidence({
    prTitle: 'Create template',
    prBody: 'Closes #100\n\nAnalyzed the YAML frontmatter, remixed the field definitions, and created a new Markdown template.',
    getIssueDetailsFn: createMockIssueDetails('15.')
  });

  assert.equal(evaluation.passed, true, 'Should pass with multiple keywords');
  assert.equal(evaluation.required[0].passed, true);
});

test('Chapter 15 fails without template-related keywords', () => {
  const evaluation = evaluateChapter15Evidence({
    prTitle: 'Update docs',
    prBody: 'Closes #100\n\nUpdated some documentation files.',
    getIssueDetailsFn: createMockIssueDetails('15.')
  });

  assert.equal(evaluation.passed, false, 'Evaluation should fail');
  assert.equal(evaluation.required[0].passed, false);
  assert.equal(evaluation.resources.length > 0, true, 'Should provide learning resource');
});

test('Chapter 15 acknowledges YAML/structure mentions as suggestions', () => {
  const evaluation = evaluateChapter15Evidence({
    prTitle: 'Template remix',
    prBody: 'Closes #100\n\nRemixed the template and updated the YAML frontmatter with new fields.',
    getIssueDetailsFn: createMockIssueDetails('15.')
  });

  assert.equal(evaluation.passed, true, 'Should pass');
  assert.equal(evaluation.suggestions && evaluation.suggestions.length > 0, true, 'Should include suggestions');
});

test('Chapter 15 ignores non-Chapter-15 issues', () => {
  const evaluation = evaluateChapter15Evidence({
    prTitle: 'Template work',
    prBody: 'Closes #200\n\nRemixed template YAML frontmatter for new context.',
    getIssueDetailsFn: createMockIssueDetails('15.')
  });

  assert.equal(evaluation.required.length, 0, 'Should not add checks for non-Chapter-15 issues');
  assert.equal(evaluation.passed, true, 'Should pass by default (not applicable)');
});