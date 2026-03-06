const test = require('node:test');
const assert = require('node:assert/strict');

const {
  extractIssueReferences,
  extractClosingIssueReference,
  evaluateChapter4Evidence
} = require('../validate-pr.js');

test('extractIssueReferences supports #number and /issues/number formats', () => {
  const refs = extractIssueReferences('Closes #42. Evidence: https://github.com/org/repo/issues/101 and #42');
  assert.deepEqual(refs.sort((a, b) => a - b), [42, 101]);
});

test('extractClosingIssueReference detects closing syntax', () => {
  assert.equal(extractClosingIssueReference('This PR closes #88'), 88);
  assert.equal(extractClosingIssueReference('No closing reference here'), null);
});

test('Chapter 4.1 fails when no created issue evidence is provided', () => {
  const issueMap = {
    68: {
      number: 68,
      title: 'Chapter 4.1: Create Your First Issue (@accesswatch)',
      body: 'Challenge body',
      author: { login: 'accesswatch' }
    }
  };

  const result = evaluateChapter4Evidence({
    prTitle: 'Chapter 4.1 submission',
    prBody: 'Closes #68',
    prAuthor: 'accesswatch',
    getIssueDetailsFn: number => issueMap[number] || null
  });

  assert.equal(result.passed, false);
  assert.equal(result.required.length, 1);
  assert.equal(result.required[0].name, 'Chapter 4.1 Created Issue Reference');
  assert.equal(result.required[0].passed, false);
});

test('Chapter 4.1 passes with valid authored evidence issue', () => {
  const richBody =
    'This issue describes a specific documentation problem, why it matters, and what outcome is expected for contributors.';

  const issueMap = {
    68: {
      number: 68,
      title: 'Chapter 4.1: Create Your First Issue (@accesswatch)',
      body: 'Challenge body',
      author: { login: 'accesswatch' }
    },
    120: {
      number: 120,
      title: 'Clarify bot validation timing for Chapter 4 students',
      body: richBody,
      author: { login: 'accesswatch' }
    }
  };

  const result = evaluateChapter4Evidence({
    prTitle: 'Chapter 4.1 submission',
    prBody: 'Closes #68\nCreated issue #120',
    prAuthor: 'accesswatch',
    getIssueDetailsFn: number => issueMap[number] || null
  });

  assert.equal(result.passed, true);
  assert.equal(result.required.length, 2);
  assert.equal(result.required[0].passed, true);
  assert.equal(result.required[1].passed, true);
});

test('Chapter 4.1 fails when evidence issue is authored by someone else', () => {
  const issueMap = {
    68: {
      number: 68,
      title: 'Chapter 4.1: Create Your First Issue (@accesswatch)',
      body: 'Challenge body',
      author: { login: 'accesswatch' }
    },
    121: {
      number: 121,
      title: 'Improve chapter title clarity for navigation',
      body: 'This description has enough detail to meet the minimum length requirement for validation checks.',
      author: { login: 'different-user' }
    }
  };

  const result = evaluateChapter4Evidence({
    prTitle: 'Chapter 4.1 submission',
    prBody: 'Closes #68\nCreated issue #121',
    prAuthor: 'accesswatch',
    getIssueDetailsFn: number => issueMap[number] || null
  });

  assert.equal(result.passed, false);
  assert.equal(result.required[1].name, 'Chapter 4.1 Created Issue Quality');
  assert.equal(result.required[1].passed, false);
});

test('Chapter 4.2/4.3 requires at least one evidence reference', () => {
  const issueMap = {
    75: {
      number: 75,
      title: 'Chapter 4.2: Claim a Challenge Issue (@accesswatch)',
      body: 'Challenge body',
      author: { login: 'accesswatch' }
    }
  };

  const noEvidence = evaluateChapter4Evidence({
    prTitle: 'Chapter 4.2 submission',
    prBody: 'Closes #75',
    prAuthor: 'accesswatch',
    getIssueDetailsFn: number => issueMap[number] || null
  });

  assert.equal(noEvidence.passed, false);
  assert.equal(noEvidence.required[0].name, 'Chapter 4 Evidence Reference');
  assert.equal(noEvidence.required[0].passed, false);

  const withEvidence = evaluateChapter4Evidence({
    prTitle: 'Chapter 4.2 submission',
    prBody: 'Closes #75\nEvidence: commented on #122',
    prAuthor: 'accesswatch',
    getIssueDetailsFn: number => issueMap[number] || null
  });

  assert.equal(withEvidence.passed, true);
  assert.equal(withEvidence.required[0].passed, true);
});
