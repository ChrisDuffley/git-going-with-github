const test = require('node:test');
const assert = require('node:assert/strict');

const { buildValidationReportBody } = require('../validation-report.js');

test('builds pass report with required sections', () => {
  const report = buildValidationReportBody(
    {
      passed: true,
      required: [{ name: 'Issue Reference', passed: true }],
      suggestions: [],
      accessibility: [],
      resources: [{ title: 'PR Guide', url: 'https://example.com/pr' }]
    },
    '2025-01-01T00:00:00.000Z'
  );

  assert.match(report, /\*\*Validation Passed\*\* \[PASS\]/);
  assert.match(report, /### Required Checks/);
  assert.match(report, /\*\*Issue Reference\*\*/);
  assert.match(report, /### Learning Resources/);
  assert.match(report, /\[PR Guide\]\(https:\/\/example.com\/pr\)/);
  assert.match(report, /Last updated: 2025-01-01T00:00:00.000Z/);
});

test('builds failure report with required check help and suggestions', () => {
  const report = buildValidationReportBody(
    {
      passed: false,
      required: [
        {
          name: 'Issue Reference',
          passed: false,
          message: 'Missing issue reference',
          help: 'Add Closes #123 to your PR body.'
        }
      ],
      suggestions: [
        {
          message: 'Consider adding screenshots for UI changes.',
          help: 'Screenshots help reviewers verify accessibility improvements.'
        }
      ],
      accessibility: [],
      resources: []
    },
    '2025-01-01T00:00:00.000Z'
  );

  assert.match(report, /\*\*Validation Needs Attention\*\* \[ACTION REQUIRED\]/);
  assert.match(report, /Missing issue reference/);
  assert.match(report, /Add Closes #123 to your PR body\./);
  assert.match(report, /### Suggestions for Improvement/);
  assert.match(report, /Consider adding screenshots for UI changes\./);
});

test('includes accessibility detail lines when present', () => {
  const report = buildValidationReportBody(
    {
      passed: false,
      required: [],
      suggestions: [],
      accessibility: [
        {
          title: 'Missing alt text',
          message: 'Image missing alt text.',
          file: 'docs/image.md',
          line: 42,
          fix: 'Add descriptive alt text.'
        }
      ],
      resources: []
    },
    '2025-01-01T00:00:00.000Z'
  );

  assert.match(report, /### Accessibility Analysis/);
  assert.match(report, /\*\*Missing alt text\*\*/);
  assert.match(report, /Image missing alt text\./);
  assert.match(report, /`docs\/image.md` \(line 42\)/);
  assert.match(report, /\*\*Fix:\*\* Add descriptive alt text\./);
});
