const test = require('node:test');
const assert = require('node:assert/strict');

const { buildValidationReportBody } = require('../validation-report.js');

/**
 * Mock GitHub API that tracks calls and can verify workflow behavior.
 */
class MockGitHubAPI {
  constructor() {
    this.comments = [];
    this.labels = [];
    this.statusChecks = [];
  }

  createComment(prNumber, body) {
    this.comments.push({ prNumber, body, action: 'create', timestamp: Date.now() });
    return Promise.resolve({ id: this.comments.length });
  }

  updateComment(commentId, body) {
    const comment = this.comments.find(c => c.id === commentId);
    if (comment) {
      comment.body = body;
      comment.action = 'update';
      comment.timestamp = Date.now();
    }
    return Promise.resolve({ id: commentId });
  }

  addLabels(prNumber, labels) {
    this.labels.push({ prNumber, labels, timestamp: Date.now() });
    return Promise.resolve({});
  }

  findBotComment(comments, issueNumber) {
    return comments.find(c => 
      c.user.type === 'Bot' && 
      c.body.includes('PR Validation Report')
    );
  }

  async postValidationComment(prNumber, validated, results) {
    const body = buildValidationReportBody(results);
    
    // Simulate finding existing bot comment (not found in fresh PR)
    const existingComment = null;
    
    if (existingComment) {
      await this.updateComment(existingComment.id, body);
    } else {
      await this.createComment(prNumber, body);
    }

    // Apply labels
    const labels = ['documentation'];
    if (!validated.passed) {
      labels.push('needs-work');
    }
    if (results.accessibility && results.accessibility.some(a => a.type === 'error')) {
      labels.push('accessibility');
    }
    
    await this.addLabels(prNumber, labels);
    
    return { success: true, commentCount: this.comments.length };
  }

  getLastComment() {
    return this.comments[this.comments.length - 1] || null;
  }

  getAllComments() {
    return this.comments;
  }
}

test('posts validation comment with passing results', async () => {
  const mockAPI = new MockGitHubAPI();
  const results = {
    passed: true,
    required: [
      { name: 'Issue Reference', passed: true },
      { name: 'PR Description', passed: true }
    ],
    suggestions: [],
    accessibility: [],
    resources: []
  };

  await mockAPI.postValidationComment(1, results, results);

  const lastComment = mockAPI.getLastComment();
  assert.ok(lastComment, 'Comment should be posted');
  assert.match(lastComment.body, /Validation Passed.*PASS/, 'Should show pass status');
  assert.equal(mockAPI.labels[0].labels.includes('documentation'), true, 'Should add documentation label');
  assert.equal(mockAPI.labels[0].labels.includes('needs-work'), false, 'Should not add needs-work for passing PR');
});

test('posts validation comment with failing results', async () => {
  const mockAPI = new MockGitHubAPI();
  const results = {
    passed: false,
    required: [
      { name: 'Issue Reference', passed: false, message: 'Missing issue link', help: 'Add Closes #XX' }
    ],
    suggestions: [],
    accessibility: [],
    resources: [{ title: 'PR Guide', url: 'https://example.com' }]
  };

  await mockAPI.postValidationComment(1, results, results);

  const lastComment = mockAPI.getLastComment();
  assert.ok(lastComment, 'Comment should be posted');
  assert.match(lastComment.body, /Validation Needs Attention.*ACTION REQUIRED/, 'Should show action-required status');
  assert.match(lastComment.body, /Missing issue link/, 'Should show failure message');
  assert.match(lastComment.body, /Add Closes #XX/, 'Should show help text');
  assert.equal(mockAPI.labels[0].labels.includes('needs-work'), true, 'Should add needs-work label');
});

test('posts validation comment with accessibility errors', async () => {
  const mockAPI = new MockGitHubAPI();
  const results = {
    passed: false,
    required: [],
    suggestions: [],
    accessibility: [
      {
        type: 'error',
        title: 'Missing alt text',
        message: 'Image has no alt text',
        file: 'docs/image.md',
        line: 15,
        fix: 'Add descriptive alt text'
      }
    ],
    resources: []
  };

  await mockAPI.postValidationComment(1, results, results);

  const lastComment = mockAPI.getLastComment();
  assert.match(lastComment.body, /Accessibility Analysis/, 'Should include accessibility section');
  assert.match(lastComment.body, /Missing alt text/, 'Should include accessibility error title');
  assert.match(lastComment.body, /docs\/image.md.*line 15/, 'Should include file and line');
  assert.match(lastComment.body, /Add descriptive alt text/, 'Should include fix guidance');
  assert.equal(mockAPI.labels[0].labels.includes('accessibility'), true, 'Should add accessibility label');
});

test('comment includes learning resources for guidance', async () => {
  const mockAPI = new MockGitHubAPI();
  const results = {
    passed: false,
    required: [
      { name: 'Issue Reference', passed: false, message: 'Missing issue' }
    ],
    suggestions: [
      { message: 'Consider adding test scenario', help: 'Tests help reviewers' }
    ],
    accessibility: [],
    resources: [
      { title: 'Working with Issues', url: '../../docs/04-working-with-issues.md' },
      { title: 'PR Guidelines', url: '../../docs/05-working-with-pull-requests.md' }
    ]
  };

  await mockAPI.postValidationComment(1, results, results);

  const lastComment = mockAPI.getLastComment();
  assert.match(lastComment.body, /Suggestions for Improvement/, 'Should include suggestions');
  assert.match(lastComment.body, /Consider adding test scenario/, 'Should show suggestion');
  assert.match(lastComment.body, /Learning Resources/, 'Should include resources section');
  assert.match(lastComment.body, /Working with Issues/, 'Should list first resource');
  assert.match(lastComment.body, /PR Guidelines/, 'Should list second resource');
});

test('validates markdown safety in comment body', async () => {
  const mockAPI = new MockGitHubAPI();
  const results = {
    passed: false,
    required: [
      { 
        name: 'Special Characters Test', 
        passed: false, 
        message: 'This has `code` and [link text](url) and **bold**'
      }
    ],
    suggestions: [],
    accessibility: [],
    resources: []
  };

  await mockAPI.postValidationComment(1, results, results);

  const lastComment = mockAPI.getLastComment();
  assert.ok(lastComment.body.includes('code'), 'Should preserve backticks');
  assert.ok(lastComment.body.includes('[link text]'), 'Should preserve markdown links');
  assert.ok(lastComment.body.includes('**bold**'), 'Should preserve bold markdown');
});

test('handles empty results gracefully', async () => {
  const mockAPI = new MockGitHubAPI();
  const results = {
    passed: true,
    required: [],
    suggestions: [],
    accessibility: [],
    resources: []
  };

  await mockAPI.postValidationComment(1, results, results);

  const lastComment = mockAPI.getLastComment();
  assert.ok(lastComment, 'Should post comment even with empty results');
  assert.match(lastComment.body, /Learning Resources/, 'Should still include sections');
  assert.match(lastComment.body, /Automated validation by Learning Room Bot/, 'Should include footer');
});
