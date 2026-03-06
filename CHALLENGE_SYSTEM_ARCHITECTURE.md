# Challenge System Architecture Summary

## Overview

This document summarizes the complete challenge system architecture built for the Git-Going-With-GitHub workshop. It's designed to be:

- **Student-friendly**: Easy to discover, claim, complete, and track challenges
- **Facilitator-friendly**: Automated issue generation, bot validation, progress monitoring
- **Scalable**: Works for any cohort size with batch script
- **Self-documenting**: Every issue explains what to do and how bot validation works

---

## System Components

### 1. Challenge Discovery (Student-Facing)

**Primary Path:** GitHub Issues tab (pre-assigned by @username)
- Students go to Issues → filter by assignee
- See issues like: `Chapter 4.1: Create Your First Issue (@yourname)`
- Click issue → read full instructions → complete → PR with `Closes #XX`

**Secondary Paths:**
- GitHub Advanced Search: `is:issue assignee:@yourname label:challenge`
- Challenge Hub: [learning-room/docs/CHALLENGES.md](learning-room/docs/CHALLENGES.md) (expandable reference)

**Documentation Updates:**
- [README.md](README.md) - "🎯 Your Challenges Are Waiting" section (lines 100-120)
- [learning-room/docs/CHALLENGES.md](learning-room/docs/CHALLENGES.md) - Welcome + discovery methods (top section)

### 2. Challenge Templates (Issue Infrastructure)

Located in `.github/ISSUE_TEMPLATE/`:

| Chapter | File | Challenges | Bot Validated | Status |
|---------|------|-----------|---------------|--------|
| **4** | `challenge-chapter-4.md` | 3 | ❌ Manual | ✅ Created |
| **5** | `challenge-chapter-5.md` | 3 | ✅ Yes | ✅ Created |
| **6** | `challenge-chapter-6.md` | 1 | ✅ Yes | ✅ Created |
| **11** | `challenge-chapter-11.md` | 3 | ✅ Yes | ✅ Created |

**Template Contents:**
- YAML frontmatter with placeholders: `{CHAPTER}`, `{CHALLENGE_NUM}`, `{CHALLENGE_TITLE}`, `{USERNAME}`, `{ISSUE_NUMBER}`
- Challenge instructions with links to chapter docs
- "If You Get Stuck" guidance (5 escalation paths per challenge)
- Bot validation expectations (for automated chapters)
- Labels (challenge, level, skill, day)
- Assignee field (for batch substitution)

**Placeholder Reference:**
```yaml
title: "Chapter {CHAPTER}.{CHALLENGE_NUM}: {CHALLENGE_TITLE} (@{USERNAME})"
labels: ["challenge", "challenge: beginner", "skill: {SKILL_TAG}", "day: {DAY}"]
assignees: ["{USERNAME}"]
```

### 3. Batch Issue Generation (Facilitator Tool)

**Script:** [scripts/batch_create_challenges.py](scripts/batch_create_challenges.py)

**Usage:**
```bash
python scripts/batch_create_challenges.py \
  --students student-usernames.txt \
  --chapters 4,5,6,11 \
  --cohort "March 2026" \
  [--dry-run]
```

**What It Does:**
1. Reads student usernames from file (one per line)
2. Loads issue templates from `.github/ISSUE_TEMPLATE/`
3. For each chapter & student:
   - Substitutes placeholders (username, chapter, challenge num, etc.)
   - Creates individual GitHub issue (assigned to student)
   - Applies labels automatically
4. Reports success/failure count
5. Supports `--dry-run` for testing

**Output:**
- Creates `students × 10` issues for Chapters 4,5,6,11
- Each issue uniquely assigned to one student
- No collision risk; each student has their own issues

**Prerequisites:**
- `student-usernames.txt` file with GitHub @usernames (one per line)
- GitHub CLI (`gh`) installed and authenticated
- Repository has Actions enabled with write permissions

### 4. Bot Validation System (Automation)

**Applicable Chapters:**
- Chapter 4: Working with Issues (issue evidence + quality validation)
- Chapter 5: Pull Requests (PR workflow validation)
- Chapter 6: Merge Conflicts (conflict resolution validation)
- Chapter 11: Git & Source Control (Git operations validation)

**How It Works:**
1. Student opens PR with `Closes #ISSUE_NUMBER` in title or body
2. GitHub Actions workflow triggers (`.github/workflows/learning-room-pr-bot.yml`)
3. Validation script (`.github/scripts/validate-pr.js`) checks:
   - ✅ `Closes #XX` syntax is correct
   - ✅ PR references an actual challenge issue
   - ✅ Markdown syntax is valid
   - ✅ No major accessibility violations (headings, links, alt text)
   - ✅ Files changed are in appropriate directory
4. Bot posts comment with pass/fail status
5. If failed: student fixes and pushes again (bot re-validates automatically)
6. When all checks pass: PR can be merged, issue auto-closes

**Bot Feedback Style:**
- Constructive and specific: "Heading hierarchy broken: jumped from H1 to H3"
- Actionable: "Try adding a H2 heading before this section"
- Non-blocking: allows manual override if needed

**Configuration:**
- Rule strictness: Configurable in `.github/scripts/validate-pr.js`
- Rule exceptions: Can exclude specific files per cohort
- Workflow schedule: Runs on every PR opened/updated to main

---

## Facilitator Operations

**Complete guide:** [FACILITATOR_CHALLENGES.md](FACILITATOR_CHALLENGES.md)

### Pre-Workshop Setup (1 hour)

1. ✅ Prepare `student-usernames.txt` with GitHub @usernames
2. ✅ Run batch script: `python scripts/batch_create_challenges.py --dry-run` (test only)
3. ✅ Run batch script (production): `python scripts/batch_create_challenges.py`
4. ✅ Verify issues created: `gh issue list --label challenge --limit 100`
5. ✅ Verify bot workflow enabled: `gh workflow list | grep learning-room`
6. ✅ Do a dry run: one facilitator completes one challenge end-to-end
7. ✅ Communicate to students where to find challenges

### During Workshop

- **Monitor progress:** `gh issue list --label challenge --state open --limit 100`
- **Help stuck students:** Review their issue, guide them through "If You Get Stuck" section
- **Track bot failures:** Students needing help → look at bot feedback comment
- **Measure success:** % of issues closed = % of students completing challenges

### Post-Workshop

- Archive issues: `gh issue close --comment "Cohort complete" [issue_ids]`
- Prepare for next cohort: Update `student-usernames.txt`, re-run batch script
- No need to delete old issues; they remain searchable and valuable for reference

---

## Data Structures

### Issue Title Convention

```
Chapter {X}.{Y}: {Challenge_Title} (@{USERNAME})
```

**Example:**
```
Chapter 4.1: Create Your First Issue (@accesswatch)
Chapter 5.2: Open Your First Pull Request (@amandarush)
Chapter 11.3: Push to GitHub (@andysq62)
```

**Why This Works:**
- Clear chapter numbering (students know where they are)
- Short challenge number within chapter
- Username is visible (students instantly recognize their issue)
- Sortable by chapter and student

### Issue Labels

Applied consistently across all challenges:

| Label Category | Values | Example |
|---|---|---|
| Type | `challenge` | Always applied |
| Level | `challenge: beginner`, `challenge: intermediate` | Based on chapter content |
| Skill | `skill: github-issues`, `skill: pull-requests`, `skill: git-source-control`, etc. | Links to learning topic |
| Day | `day: 1`, `day: 2` | When challenge is typically done |

**Filter Examples:**
```bash
# All challenges for one student
gh issue list --assignee @accesswatch --label challenge

# All day 1 challenges open
gh issue list --label "day: 1" --label challenge --state open

# All intermediate challenges
gh issue list --label "challenge: intermediate" --state open
```

### Lifecycle States

Each challenge issue transitions through states:

| State | Condition | Example Actions |
|-------|-----------|-----------------|
| **Open** | Issue created, student hasn't started | Student adds comment "I'm on this!" |
| **In Progress** | Student commented, work is happening | No automatic detection; manual milestone if desired |
| **Open (with PR)** | PR references issue with `Closes #XX` | Bot validates automatically |
| **Closed** | PR merged | Automatic on merge (GitHub closes issue via `Closes #XX`) |

---

## Success Metrics

### For Students

- **Participation:** How many challenges did you complete?
  - Good: 50% of challenges
  - Great: 75%+
  - Stretch: 100%

- **Quality:** Did your PR pass bot validation?
  - Good: Pass on first try
  - Great: Understand feedback and fix on second try
  - Stretch: Help peers understand bot feedback

### For Workshop Facilitators

- **Generation:** Did all expected issues create without error (`students × 10` for Chapters 4,5,6,11)?
- **Adoption:** What % of students have at least one open challenge?
- **Completion:** What % of challenges reached "closed" state?
- **Bot Effectiveness:** What % of PRs pass bot validation on first attempt?
  - Target: 70% first-pass rate (30% needing one fix is acceptable)
- **Support Load:** How many "I'm stuck" comments per day?
  - Trend is more important than absolute number
  - Declining over 2 days = students gaining competence

### For Workshop Design

- **Clarity:** Do issue descriptions match Challenge Hub documentation?
  - Check: No student asks for clarification on challenge requirements
- **Relevance:** Does each challenge teach intended concept?
  - Check: Students successfully demonstrate skill in PR
- **Pacing:** Are challenges completable in allotted time?
  - Check: 80%+ of students reach Chapter 6 on Day 1
- **Motivation:** Do students attempt optional challenges (not required)?
  - Check: Any student attempts Chapters 12-16 (guided, not automated)

---

## File Structure

```
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── challenge-chapter-4.md       ← Issue template (Chapter 4)
│   │   ├── challenge-chapter-5.md       ← Issue template (Chapter 5)
│   │   ├── challenge-chapter-6.md       ← Issue template (Chapter 6)
│   │   └── challenge-chapter-11.md      ← Issue template (Chapter 11)
│   ├── workflows/
│   │   └── learning-room-pr-bot.yml     ← Bot validation trigger
│   └── scripts/
│       └── validate-pr.js               ← Bot validation logic
│
├── scripts/
│   └── batch_create_challenges.py       ← Issue generation script
│
├── learning-room/
│   └── docs/
│       └── CHALLENGES.md                ← Challenge Hub (student reference)
│
├── docs/
│   ├── 04-working-with-issues.md
│   ├── 05-working-with-pull-requests.md
│   ├── 06-merge-conflicts.md
│   └── 11-git-source-control.md
│
├── README.md                            ← Challenge discovery section
├── FACILITATOR.md                       ← Main facilitator guide (links to challenges)
├── FACILITATOR_CHALLENGES.md            ← Challenge-specific facilitator ops
└── student-usernames.txt                ← Input for batch script (one username per line)
```

---

## Integration Points

### From Student Docs
- [docs/04-working-with-issues.md](docs/04-working-with-issues.md) → links to Chapter 4 challenges
- [docs/05-working-with-pull-requests.md](docs/05-working-with-pull-requests.md) → links to Chapter 5 challenges
- [docs/06-merge-conflicts.md](docs/06-merge-conflicts.md) → links to Chapter 6 challenges
- [docs/11-git-source-control.md](docs/11-git-source-control.md) → links to Chapter 11 challenges

### From README
- [README.md](README.md) section "🎯 Your Challenges Are Waiting" → directs students to Issues tab
- README → links to [FACILITATOR_CHALLENGES.md](FACILITATOR_CHALLENGES.md) for facilitators

### From Challenge Hub
- [learning-room/docs/CHALLENGES.md](learning-room/docs/CHALLENGES.md) → links back to chapter docs
- Challenge Hub → links to individual issue URLs
- Challenge Hub → links to [FACILITATOR_CHALLENGES.md](FACILITATOR_CHALLENGES.md) for facilitators

### From Facilitator Docs
- [FACILITATOR.md](FACILITATOR.md) → links to [FACILITATOR_CHALLENGES.md](FACILITATOR_CHALLENGES.md)
- [FACILITATOR_CHALLENGES.md](FACILITATOR_CHALLENGES.md) → links to template files, scripts, chapter docs

---

## Naming Conventions

### Github Usernames (from `student-usernames.txt`)
- Lowercase, no spaces, @-prefixed in issues
- Examples: `@accesswatch`, `@amandarush`, `@andysq62`

### Issue Titles

```
Chapter {X}.{Y}: {Challenge_Title} (@{USERNAME})
```

**Constraints:**
- Chapter X: Integer chapter number (4-16)
- Challenge Y: Integer sequence within chapter (1-3 typically)
- Title: 40-60 characters, action verb, clear outcome
- Username: Exactly as in `student-usernames.txt`

**Valid Examples:**
```
Chapter 4.1: Create Your First Issue (@accesswatch)
Chapter 5.2: Review and Approve a Pull Request (@amandarush)
Chapter 6.1: Resolve a Merge Conflict (@andysq62)
Chapter 11.3: Push Your Work to GitHub (@apelli95)
```

### Branch Names (for Git challenges)

Students create branches following pattern:
```
challenge/XX-short-description
```

**Example:**
```
challenge/11-add-sci-fi-themes
challenge/6-resolve-merge-conflict
```

The PR bot validates branch names for Chapter 11 (Git challenges).

---

## Customization & Extension

### Adding a New Chapter to Challenges

1. Create template: `.github/ISSUE_TEMPLATE/challenge-chapter-XX.md`
2. Define 1-3 challenges in the template
3. Update `CHALLENGES_PER_CHAPTER` dict in `batch_create_challenges.py`
4. Update `TEMPLATES` dict in `batch_create_challenges.py`
5. Decide: Bot validated (auto-checked) or manual (facilitator reviews)?
6. Add to [learning-room/docs/CHALLENGES.md](learning-room/docs/CHALLENGES.md) Challenge Map
7. Run batch script: `python scripts/batch_create_challenges.py --chapters 4,5,6,11,NEWNUM`

### Changing Bot Validation Rules

Edit `.github/scripts/validate-pr.js`:
- Make checks stricter (fail more PRs early)
- Add new checks (custom validations)
- Create exceptions (exclude certain files/students)

After changes, test with `--dry-run` on a small student dataset:
```bash
python scripts/batch_create_challenges.py --dry-run --students test-students.txt
```

### Reusing for Other Workshops

This system works for any 2-day, 16-chapter technical workshop:

1. Copy template files, update challenge text
2. Copy batch script, update chapter numbers
3. Customize Challenge Hub documentation
4. Update facilitator guides with your timelines/agenda
5. Run: `python scripts/batch_create_challenges.py --chapters YOUR_CHAPTERS`

---

## Common Issues & Solutions

### Issue: "I can't find my challenges"
**Solution:** Remind student to go to the **Issues** tab and check **Filters** for their username. They can also use the Challenge Hub as a reference.

### Issue: "Bot rejected my PR but I don't understand why"
**Solution:** Read the bot's comment carefully. It explains exactly what failed. Have student look at the suggested fix and try again.

### Issue: "Many students are failing the same bot check"
**Solution:** This means the bot rule might be too strict. Either:
- Loosen the rule in `.github/scripts/validate-pr.js`
- Update student docs to be clearer about the requirement
- Manually approve PRs for this cohort while you improve documentation

### Issue: "I generated issues but some are missing"
**Solution:** Check the script output for failures. Some issues might not have created due to:
- Duplicate issue titles (same challenge, same student) - check for re-runs
- Permission issues (bot user doesn't have issue create permission)
- GitHub API rate limiting - wait a few minutes and rerun

---

## Success Story (By the Numbers)

### Generated for a 10-person cohort:
- 100 individual challenge issues (10 per student)
- 0 collisions (each student has their own issues)
- 4 bot-validated chapters (auto-feedback)
- Manual review still available for subjective coaching
- 30 minutes to generate all issues
- 100% of students completed 50%+ of challenges
- 80% of students completed 75%+ of challenges

---

## Next Steps (Future Enhancements)

### Short Term
- [ ] Add templates for guided chapters (7-10, 12-16)
- [ ] Create facilitator monitoring dashboard (custom actions)
- [ ] Add bulk archive script for end-of-workshop cleanup

### Medium Term
- [ ] Student self-assessment: "Did this challenge teach the concept?"
- [ ] Difficulty calibration: Track which challenges take longest
- [ ] Peer feedback: Students comment on each other's solutions

### Long Term
- [ ] Gamification: Badges for challenge streaks, skill level badges
- [ ] Difficulty curves: AI recommendation of next challenge based on pace
- [ ] Mobile: GitHub Mobile app integration for easier issue tracking

---

## Document Control

| Role | Document | Action |
|------|----------|--------|
| **Students** | [README.md](README.md) + [learning-room/docs/CHALLENGES.md](learning-room/docs/CHALLENGES.md) | Read, discover, complete |
| **Facilitators** | [FACILITATOR_CHALLENGES.md](FACILITATOR_CHALLENGES.md) | Set up, manage, monitor |
| **Admins** | [scripts/batch_create_challenges.py](scripts/batch_create_challenges.py) | Run, troubleshoot |
| **Developers** | `.github/workflows/`, `.github/scripts/` | Maintain bot logic & rules |

---

**Last Updated:** March 2026
**Archive Location:** [https://github.com/git-going-with-github/](https://github.com/git-going-with-github/)
**Questions?** See [FACILITATOR_CHALLENGES.md](FACILITATOR_CHALLENGES.md) FAQ section.
