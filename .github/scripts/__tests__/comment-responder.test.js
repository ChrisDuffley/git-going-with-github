const test = require('node:test');
const assert = require('node:assert/strict');

const { getAutoResponse } = require('../comment-responder.js');

test('returns help response for @bot help keyword', () => {
  const response = getAutoResponse('@bot help please', 'accesswatch');
  assert.ok(response);
  assert.match(response, /Hi @accesswatch!/);
  assert.match(response, /Working with Pull Requests/);
  assert.match(response, /@facilitator/);
});

test('returns merge conflict guidance when keyword is present', () => {
  const response = getAutoResponse('I hit a merge conflict', 'accesswatch');
  assert.ok(response);
  assert.match(response, /merge conflict/i);
  assert.match(response, /<<<<<<</);
  assert.match(response, /Mark as resolved/);
});

test('returns review-request guidance for review question', () => {
  const response = getAutoResponse('How do I request review on this PR?', 'accesswatch');
  assert.ok(response);
  assert.match(response, /To request a review/);
  assert.match(response, /Reviewers/);
});

test('returns null when no keyword matches', () => {
  const response = getAutoResponse('Looks good to me', 'accesswatch');
  assert.equal(response, null);
});
