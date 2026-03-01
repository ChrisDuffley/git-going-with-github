# Git Going with GitHub - Audio Series

## Episode 37: Contributing to Open Source

**Series:** Git Going with GitHub
**Episode:** 37 of 44
**Audience:** Blind and low-vision developers learning GitHub and open source
**Estimated length:** 12-15 min

---

### Audio Production Direction

Generate a conversational two-host podcast episode about this topic.
The audience is blind and low-vision developers attending a two-day workshop on GitHub.

**Tone and style:**

- Welcoming and encouraging - many listeners are encountering these concepts for the first time
- Use spatial and structural descriptions, not visual references
- Say "navigate to" or "move to the section called" instead of "look for" or "you will see"
- Define technical terms on first use - do not assume familiarity with programming jargon
- Focus on deep conceptual understanding - explain WHY, not just HOW
- Share practical tips, common mistakes, and real-world context
- When describing keyboard shortcuts, say the full key names: "Control plus Shift plus P" not "Ctrl+Shift+P"
- Keep the conversation natural - two hosts discussing the topic, not reading a script
- Include at least one real-world analogy per major concept
- End with a brief summary of key takeaways and what comes next

**Episode focus:**

- Finding your first issue: good first issue, help wanted labels
- Scoping a contribution: what counts as a contribution
- The fork, branch, commit, PR workflow end to end
- Writing pull request descriptions that maintainers appreciate
- Building a sustainable contribution habit after the workshop

---

### Concept Coverage Checklist

Every concept below MUST be explained during the episode. Do not skip any.
When a concept is complex, use an analogy or real-world comparison to make it concrete.

- [ ] **What counts as a contribution: code, docs, tests, reviews, issues**
- [ ] **Finding your first issue: good first issue and help wanted labels**
- [ ] **Evaluating a project: activity, responsiveness, Code of Conduct**
- [ ] **The contribution workflow: fork, clone, branch, commit, push, PR**
- [ ] **Reading CONTRIBUTING.md: every project has different expectations**
- [ ] **Scoping your contribution: start small, pick one thing**
- [ ] **Writing a PR description that maintainers will appreciate**
- [ ] **Responding to review feedback on your contribution**
- [ ] **Building a sustainable contribution habit after the workshop**
- [ ] **The GitHub Skills modules for continued structured learning**
- [ ] **Finding communities that welcome new contributors**

### Cross-Referenced Material

The following supplementary content is included after the primary source.
Reference it naturally when a concept would benefit from additional context,
but keep the main narrative focused on the primary chapter.

- GitHub Skills Catalog - continued learning

### Primary Source Material

# Appendix T: Contributing to Open Source
> **Listen to Episode 37:** [Contributing to Open Source](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## A Guide for First-Time Contributors

> You do not need to be a professional developer to contribute to open source. Documentation, accessibility improvements, and bug reports are among the most valuable contributions any project can receive.

---

## Table of Contents

1. [What Is Open Source?](#1-what-is-open-source)
2. [Who Can Contribute?](#2-who-can-contribute)
3. [What Makes a Good First Contribution?](#3-what-makes-a-good-first-contribution)
4. [Finding Something to Work On](#4-finding-something-to-work-on)
5. [Reading an Issue Before You Start](#5-reading-an-issue-before-you-start)
6. [Making Your Contribution](#6-making-your-contribution)
7. [Getting Help](#7-getting-help)
8. [After Your Contribution Is Merged](#8-after-your-contribution-is-merged)
9. [Building a Contribution Habit](#9-building-a-contribution-habit)

---

## 1. What Is Open Source?

Open source software is software whose source code is publicly available. Anyone can read it, use it, and - in most cases - contribute to it. Contributions can include:

- Fixing bugs in the software
- Writing or improving documentation
- Filing bug reports that help maintainers understand problems
- Reviewing other people's changes and leaving thoughtful feedback
- Translating content into other languages
- Improving accessibility - adding alt text, fixing heading structure, testing with screen readers

The projects that power much of today's web infrastructure - operating systems, programming languages, screen readers, and developer tools - are maintained by contributors who started exactly where you are now.

---

## 2. Who Can Contribute?

Contributors come from all backgrounds, skill levels, and countries. A first contribution could be fixing a typo, adding a missing full stop, or filing a bug report that saves a maintainer hours of debugging.

Assistive technology users bring a perspective that most sighted, mouse-first developers cannot - you notice when heading structure is broken, when a button has no accessible name, or when a form cannot be completed with a keyboard. These are real, high-value contributions that improve projects for everyone.

You do not need permission to start. If a repository's issues are public, you can file a bug or suggest an improvement today.

---

## 3. What Makes a Good First Contribution?

A good first contribution is:

- **Specific** - it addresses one problem clearly, not a general "this could be better"
- **Scoped** - it does not try to fix everything at once; one PR, one problem
- **Described** - the PR or issue explains what changed and why, not just what
- **Tested** - for documentation, this means reading it aloud with your screen reader before submitting; for code, it means verifying the fix works

**Signs a contribution is too large for a first attempt:**
- The PR touches more than three or four files
- You need to understand the entire codebase to make the change
- The issue has been open for a long time with many comments suggesting it is complex

Start small. A well-executed small contribution is far more valuable than a large contribution that cannot be merged because it is out of scope.

---

## 4. Finding Something to Work On

Most open source projects label issues that are suitable for new contributors. Look for:

| Label | Meaning |
|-------|---------|
| `good first issue` | Explicitly recommended for first-time contributors |
| `first-timers-only` | Reserved for people making their first contribution to this project |
| `help wanted` | Maintainers are actively looking for someone to pick this up |
| `beginner` or `easy` | Lower complexity than average |
| `documentation` | No coding required - writing or editing docs |
| `accessibility` | Directly relevant to AT users; high-value work |

**How to search:** On any GitHub repository, go to Issues → filter by label. Or use GitHub's global search: `label:"good first issue" is:open language:markdown` to find documentation issues across all public repositories.

---

## 5. Reading an Issue Before You Start

Before commenting "I'll take this" on an issue, ask yourself:

- **Is the description clear enough to act on?** If you are not sure what the problem is, ask a clarifying question before starting work.
- **Is anyone else already working on it?** Look for recent comments from others saying they are working on it, or an open PR that references this issue. If a PR exists, it may already be in review.
- **Is the issue in scope for me?** A documentation task does not require programming knowledge. A bug fix in compiled code may require understanding the codebase.
- **How old is the issue?** Very old issues (2+ years) may be stale or no longer relevant. You can ask the maintainer if it is still valid before investing time.

If the issue looks right for you, comment briefly to let the team know you are working on it: "I'd like to work on this. I'll open a draft PR shortly." This prevents duplicate work.

---

## 6. Making Your Contribution

### The Basic Workflow

1. **Fork the repository** - creates your own copy on GitHub
2. **Clone your fork** to your computer (or open a Codespace - see [Appendix N](appendix-n-github-codespaces.md))
3. **Create a branch** - name it something descriptive: `fix/broken-link-setup-guide`
4. **Make your change** - edit the file, save, verify
5. **Commit with a clear message** - "Fix broken link in setup-guide.md line 34"
6. **Push to your fork**
7. **Open a pull request** from your branch to the original repository's default branch
8. **Respond to review feedback** - maintainers may ask for changes; this is normal and not a rejection

### Writing a Good PR Description

A PR description should answer:
- **What** did you change?
- **Why** was the change needed?
- **How** did you verify it works?

Example:
> Fixed a broken link on line 34 of `setup-guide.md`. The link pointed to `/docs/old-setup` which no longer exists. Updated it to `/docs/00-pre-workshop-setup.md`, verified the target file exists and the anchor is correct.

This gives the reviewer everything they need to approve quickly.

---

## 7. Getting Help

It is always acceptable to ask a question on an issue or pull request. Good questions:

- **Are specific:** "I'm trying to fix the broken link on line 24 of `setup-guide.md`. The link currently points to `/docs/old-setup`. Where should it point?"
- **Show what you tried:** "I searched the repository for the correct URL but couldn't find a file at that path."
- **Are polite:** Assume good intent from maintainers, even if they are slow to respond. Maintainers are often volunteers with day jobs.

If you opened a PR and are waiting for a review, it is appropriate to leave one polite follow-up comment after a week or two. Start with: "Hi, just checking in on this PR when you have a moment."

---

## 8. After Your Contribution Is Merged

When your pull request is merged:

- Your name appears in the project's **commit history permanently** - it cannot be removed
- The issue you fixed is closed
- You are officially listed as a **contributor** to this project, visible on the repository's Contributors page

This matters for your GitHub profile. Each merged contribution demonstrates real-world collaboration with a project team: you scoped a problem, communicated with maintainers, addressed feedback, and saw the work through. That record is visible to anyone who views your profile.

Over time, a series of contributions builds a portfolio that shows how you work - not just what you can do in isolation.

---

## 9. Building a Contribution Habit

The hardest part of open source contribution is starting. Once you have one merged PR, the next is easier - you know the workflow, you have proof it is possible, and you have already navigated the social dynamics of working with a maintainer.

**Practical habits:**

- **Keep a list** of projects you use and like. These are natural candidates for contributions because you already understand what they do.
- **File bug reports** when you encounter problems, even if you cannot fix them yourself. A clear, reproducible bug report is a real contribution.
- **Review other PRs.** Even as a new contributor, you can leave useful feedback: "Does this change affect screen reader users?" or "The example in the PR description is missing a step."
- **Set a low bar.** A contribution does not need to be impressive. A fixed typo merged into a project used by thousands of people is more valuable than a perfect contribution never submitted.

---

*Return to: [Resources](appendix-u-resources.md) | [Appendix A - Glossary](appendix-a-glossary.md)*


---

### Supplementary: GitHub Skills Catalog - continued learning

# Appendix Z: GitHub Skills - Complete Course Catalog
> **Listen to Episode 43:** [GitHub Skills - Complete Course Catalog](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.


GitHub Skills is GitHub's free, self-paced interactive learning platform. Every course runs entirely inside GitHub - no external site, no separate login, no video. You copy a course repository to your own account, and an automated bot named Mona teaches you through real issues and pull requests.

This appendix catalogs every available GitHub Skills module, organized into learning paths that build on the skills you practiced in this workshop. Use it as a roadmap for continued learning after Day 2.

---

## How GitHub Skills Works

Each course follows the same pattern:

1. Navigate to the course URL and select "Start course"
2. GitHub copies the course repository to your account
3. Mona (GitHub's automated learning bot) opens an issue with Step 1 instructions within 20 seconds
4. You complete the task described in the issue (create a branch, edit a file, open a PR)
5. Mona detects your action, validates it, and posts the next step as a comment or new issue
6. Repeat until Mona closes the final issue with a completion message

All interaction happens through GitHub's standard interface. The screen reader navigation skills from this workshop - heading navigation, landmark jumping, issue and PR workflows - apply directly.

For detailed screen reader navigation instructions, see [Appendix U Section 3 (GitHub Skills)](appendix-u-resources.md).

---

## Courses Used in This Workshop

These three modules are integrated into the Day 1 agenda. You complete them during the workshop with facilitator guidance.

The following table lists the three GitHub Skills modules used during Day 1, with their workshop block and what each teaches.

| Module | Workshop Block | What Mona Teaches | Link |
|--------|---------------|-------------------|------|
| **Introduction to GitHub** | Day 1, Blocks 1-3 | Branches, commits, pull requests, merge | [Start course](https://github.com/skills/introduction-to-github) |
| **Communicate Using Markdown** | Day 1, Block 3 | Headings, emphasis, links, code blocks, task lists, tables | [Start course](https://github.com/skills/communicate-using-markdown) |
| **Review Pull Requests** | Day 1, Block 4 | Assign reviewers, leave comments, suggest changes, approve, merge | [Start course](https://github.com/skills/review-pull-requests) |

If you did not finish these during the workshop, complete them first before moving to the paths below.

---

## Learning Paths

The remaining courses are organized into six learning paths. Each path builds on skills from this workshop and progresses from introductory to advanced. You do not need to complete every path - choose the ones that match your goals.

### Path 1: Git Fundamentals

Deepen your understanding of Git version control beyond what the workshop covered.

The following table lists Git fundamentals courses in recommended order.

| Order | Module | Duration | Prerequisite | What You Learn | Link |
|-------|--------|----------|-------------|----------------|------|
| 1 | **Introduction to Git** | Less than 1 hour | None | Git CLI and VS Code - branches, commits, and merges using command line | [Start course](https://github.com/skills/introduction-to-git) |
| 2 | **Resolve Merge Conflicts** | Less than 30 min | Introduction to GitHub | Why conflicts happen, reading conflict markers, resolving in the web editor | [Start course](https://github.com/skills/resolve-merge-conflicts) |
| 3 | **Change Commit History** | Less than 1 hour | Introduction to Git | Amend commits, interactive rebase, squash, and reorder history | [Start course](https://github.com/skills/change-commit-history) |

**Workshop connection:** Day 1, Block 5 introduced merge conflicts in the learning room. Path 1 gives you deep practice with Git's conflict resolution and history tools.

---

### Path 2: GitHub Collaboration

Learn the collaboration features that power open source projects and team workflows.

The following table lists GitHub collaboration courses in recommended order.

| Order | Module | Duration | Prerequisite | What You Learn | Link |
|-------|--------|----------|-------------|----------------|------|
| 1 | **Introduction to Repository Management** | Less than 1 hour | Introduction to GitHub | Branch protection, issue templates, labels, milestones, and contributor-friendly settings | [Start course](https://github.com/skills/introduction-to-repository-management) |
| 2 | **Connect the Dots** | Less than 30 min | Introduction to GitHub | Cross-referencing issues and PRs, linking work across your repository | [Start course](https://github.com/skills/connect-the-dots) |
| 3 | **GitHub Pages** | Less than 1 hour | Introduction to GitHub | Deploy a site from your repository using GitHub Pages | [Start course](https://github.com/skills/github-pages) |
| 4 | **Release-Based Workflow** | Less than 1 hour | Introduction to GitHub | Create releases, tag versions, and manage a release-based workflow | [Start course](https://github.com/skills/release-based-workflow) |

**Workshop connection:** Day 1, Block 6 covered labels, milestones, and notifications. Path 2 extends those skills into full repository management and publishing.

---

### Path 3: GitHub Actions and Automation

Build automated workflows that test, build, and deploy your projects.

The following table lists GitHub Actions courses in recommended order.

| Order | Module | Duration | Prerequisite | What You Learn | Link |
|-------|--------|----------|-------------|----------------|------|
| 1 | **Hello GitHub Actions** | Less than 30 min | Introduction to GitHub | Workflow files, triggers, jobs, steps, and your first automated run | [Start course](https://github.com/skills/hello-github-actions) |
| 2 | **Test with Actions** | Less than 1 hour | Hello GitHub Actions | Continuous integration (CI) - run tests automatically on every push and PR | [Start course](https://github.com/skills/test-with-actions) |
| 3 | **Reusable Workflows** | Less than 1 hour | Hello GitHub Actions | Create shared workflows, call them from other repos, use matrix strategies | [Start course](https://github.com/skills/reusable-workflows) |
| 4 | **Write JavaScript Actions** | Less than 1 hour | Hello GitHub Actions | Build custom actions with JavaScript - action.yml metadata, inputs, outputs | [Start course](https://github.com/skills/write-javascript-actions) |
| 5 | **Publish Docker Images** | Less than 1 hour | Hello GitHub Actions | Build Docker containers and publish to GitHub Packages using Actions | [Start course](https://github.com/skills/publish-docker-images) |
| 6 | **Deploy to Azure** | Less than 1 hour | Hello GitHub Actions | Create deployment workflows for Azure using GitHub Actions | [Start course](https://github.com/skills/deploy-to-azure) |
| 7 | **AI in Actions** | Less than 1 hour | Hello GitHub Actions | Integrate AI models from GitHub Models into your Actions workflows | [Start course](https://github.com/skills/ai-in-actions) |
| 8 | **Create AI-Powered Actions** | Less than 1 hour | Write JavaScript Actions | Build intelligent JavaScript-based Actions that use GitHub Models | [Start course](https://github.com/skills/create-ai-powered-actions) |

**Workshop connection:** Day 2 introduced GitHub Actions through the accessibility agents workflows. Path 3 teaches you to build your own automation from scratch.

---

### Path 4: GitHub Copilot

Master AI-assisted development with GitHub Copilot across editors, CLI, and GitHub itself.

The following table lists GitHub Copilot courses in recommended order.

| Order | Module | Duration | Prerequisite | What You Learn | Link |
|-------|--------|----------|-------------|----------------|------|
| 1 | **Getting Started with GitHub Copilot** | Less than 1 hour | None | Code completion, Copilot Chat, debugging assistance, and your first AI-assisted project | [Start course](https://github.com/skills/getting-started-with-github-copilot) |
| 2 | **Build Applications with Copilot Agent Mode** | Less than 1 hour | Getting Started with Copilot | Use Copilot's agent mode to build multi-file applications from natural language | [Start course](https://github.com/skills/build-applications-w-copilot-agent-mode) |
| 3 | **Copilot Code Review** | Less than 30 min | Getting Started with Copilot | Use Copilot to review pull requests, catch quality issues, and improve code before merging | [Start course](https://github.com/skills/copilot-code-review) |
| 4 | **Customize Your GitHub Copilot Experience** | Less than 1 hour | Getting Started with Copilot | Custom instructions, prompt files, and chat modes for your specific workflows | [Start course](https://github.com/skills/customize-your-github-copilot-experience) |
| 5 | **Expand Your Team with Copilot** | Less than 1 hour | Getting Started with Copilot | Copilot coding agent - assign issues directly to Copilot on GitHub, no editor needed | [Start course](https://github.com/skills/expand-your-team-with-copilot) |
| 6 | **Integrate MCP with Copilot** | Less than 1 hour | Customize Your Copilot Experience | Connect MCP servers to Copilot for external tool access and custom capabilities | [Start course](https://github.com/skills/integrate-mcp-with-copilot) |
| 7 | **Scale Institutional Knowledge Using Copilot Spaces** | Less than 1 hour | Getting Started with Copilot | Organize project knowledge into Copilot Spaces for team-wide context sharing | [Start course](https://github.com/skills/scale-institutional-knowledge-using-copilot-spaces) |
| 8 | **Create Applications with the Copilot CLI** | Less than 1 hour | Getting Started with Copilot | Use Copilot in the terminal to manage issues and build applications from the command line | [Start course](https://github.com/skills/create-applications-with-the-copilot-cli) |
| 9 | **Your First Extension for GitHub Copilot** | Less than 1 hour | Getting Started with Copilot | Build a Copilot extension that teaches Copilot about your industry, terminology, and processes | [Start course](https://github.com/skills/your-first-extension-for-github-copilot) |
| 10 | **Modernize Your Legacy Code with GitHub Copilot** | Less than 2 hours | Build Applications with Agent Mode | Use Copilot to modernize a legacy COBOL accounting system to Node.js | [Start course](https://github.com/skills/modernize-your-legacy-code-with-github-copilot) |

**Workshop connection:** Day 2, Blocks 2-4 used Copilot for contributions and code review. Path 4 expands from basic chat to agent mode, MCP integration, CLI usage, and extension building.

---

### Path 5: Security

Learn to identify vulnerabilities, scan for secrets, and secure your supply chain.

The following table lists security courses in recommended order.

| Order | Module | Duration | Prerequisite | What You Learn | Link |
|-------|--------|----------|-------------|----------------|------|
| 1 | **Secure Code Game** | 1-2 hours | Basic coding knowledge | Find and fix real security vulnerabilities in an interactive, gamified format | [Start course](https://github.com/skills/secure-code-game) |
| 2 | **Introduction to Secret Scanning** | Less than 30 min | Introduction to GitHub | Enable secret scanning, detect leaked credentials, and prevent secrets from being committed | [Start course](https://github.com/skills/introduction-to-secret-scanning) |
| 3 | **Secure Repository Supply Chain** | Less than 1 hour | Introduction to GitHub | Understand dependencies, find vulnerabilities with Dependabot, and patch them | [Start course](https://github.com/skills/secure-repository-supply-chain) |
| 4 | **Introduction to CodeQL** | Less than 1 hour | Introduction to GitHub | Enable code scanning with CodeQL to find security issues automatically | [Start course](https://github.com/skills/introduction-to-codeql) |
| 5 | **Configure CodeQL Language Matrix** | Less than 30 min | Introduction to CodeQL | Simplify code scanning workflows with CodeQL language matrices for multi-language repos | [Start course](https://github.com/skills/configure-codeql-language-matrix) |

**Workshop connection:** Appendix L covers GitHub security features conceptually. Path 5 gives you hands-on practice enabling and using each one.

---

### Path 6: Cloud and Migration

Deploy to the cloud and migrate existing projects to GitHub.

The following table lists cloud and migration courses in recommended order.

| Order | Module | Duration | Prerequisite | What You Learn | Link |
|-------|--------|----------|-------------|----------------|------|
| 1 | **Code with Codespaces** | Less than 1 hour | Introduction to GitHub | Create and configure cloud development environments with GitHub Codespaces | [Start course](https://github.com/skills/code-with-codespaces) |
| 2 | **Migrate ADO Repository** | Less than 1 hour | Introduction to Git | Create a sample Azure DevOps project and migrate it to GitHub using the CLI | [Start course](https://github.com/skills/migrate-ado-repository) |
| 3 | **Idea to App with Spark** | Less than 1 hour | None | Turn ideas into web applications by describing them in natural language - no coding required | [Start course](https://github.com/skills/idea-to-app-with-spark) |

**Workshop connection:** Appendix N covers Codespaces conceptually. Path 6, course 1 gives you the hands-on setup experience.

---

## Quick Reference - All 36 Courses

The following table alphabetically lists every GitHub Skills course with its category and link for quick lookup.

| Module | Category | Link |
|--------|----------|------|
| AI in Actions | Actions | [Start course](https://github.com/skills/ai-in-actions) |
| Build Applications with Copilot Agent Mode | Copilot | [Start course](https://github.com/skills/build-applications-w-copilot-agent-mode) |
| Change Commit History | Git | [Start course](https://github.com/skills/change-commit-history) |
| Code with Codespaces | Cloud | [Start course](https://github.com/skills/code-with-codespaces) |
| Communicate Using Markdown | Workshop | [Start course](https://github.com/skills/communicate-using-markdown) |
| Configure CodeQL Language Matrix | Security | [Start course](https://github.com/skills/configure-codeql-language-matrix) |
| Connect the Dots | Collaboration | [Start course](https://github.com/skills/connect-the-dots) |
| Copilot Code Review | Copilot | [Start course](https://github.com/skills/copilot-code-review) |
| Create AI-Powered Actions | Actions | [Start course](https://github.com/skills/create-ai-powered-actions) |
| Create Applications with the Copilot CLI | Copilot | [Start course](https://github.com/skills/create-applications-with-the-copilot-cli) |
| Customize Your GitHub Copilot Experience | Copilot | [Start course](https://github.com/skills/customize-your-github-copilot-experience) |
| Deploy to Azure | Actions | [Start course](https://github.com/skills/deploy-to-azure) |
| Expand Your Team with Copilot | Copilot | [Start course](https://github.com/skills/expand-your-team-with-copilot) |
| Getting Started with GitHub Copilot | Copilot | [Start course](https://github.com/skills/getting-started-with-github-copilot) |
| GitHub Pages | Collaboration | [Start course](https://github.com/skills/github-pages) |
| Hello GitHub Actions | Actions | [Start course](https://github.com/skills/hello-github-actions) |
| Idea to App with Spark | Cloud | [Start course](https://github.com/skills/idea-to-app-with-spark) |
| Integrate MCP with Copilot | Copilot | [Start course](https://github.com/skills/integrate-mcp-with-copilot) |
| Introduction to CodeQL | Security | [Start course](https://github.com/skills/introduction-to-codeql) |
| Introduction to Git | Git | [Start course](https://github.com/skills/introduction-to-git) |
| Introduction to GitHub | Workshop | [Start course](https://github.com/skills/introduction-to-github) |
| Introduction to Repository Management | Collaboration | [Start course](https://github.com/skills/introduction-to-repository-management) |
| Introduction to Secret Scanning | Security | [Start course](https://github.com/skills/introduction-to-secret-scanning) |
| Migrate ADO Repository | Cloud | [Start course](https://github.com/skills/migrate-ado-repository) |
| Modernize Your Legacy Code with GitHub Copilot | Copilot | [Start course](https://github.com/skills/modernize-your-legacy-code-with-github-copilot) |
| Publish Docker Images | Actions | [Start course](https://github.com/skills/publish-docker-images) |
| Release-Based Workflow | Collaboration | [Start course](https://github.com/skills/release-based-workflow) |
| Resolve Merge Conflicts | Git | [Start course](https://github.com/skills/resolve-merge-conflicts) |
| Reusable Workflows | Actions | [Start course](https://github.com/skills/reusable-workflows) |
| Review Pull Requests | Workshop | [Start course](https://github.com/skills/review-pull-requests) |
| Scale Institutional Knowledge Using Copilot Spaces | Copilot | [Start course](https://github.com/skills/scale-institutional-knowledge-using-copilot-spaces) |
| Secure Code Game | Security | [Start course](https://github.com/skills/secure-code-game) |
| Secure Repository Supply Chain | Security | [Start course](https://github.com/skills/secure-repository-supply-chain) |
| Test with Actions | Actions | [Start course](https://github.com/skills/test-with-actions) |
| Write JavaScript Actions | Actions | [Start course](https://github.com/skills/write-javascript-actions) |
| Your First Extension for GitHub Copilot | Copilot | [Start course](https://github.com/skills/your-first-extension-for-github-copilot) |

---

## Integrating GitHub Skills into Your Learning Journey

### During the Workshop

Three courses are woven into Day 1. You set each one up during the block where it appears, work through Mona's steps alongside the learning room exercises, and finish before moving to the next block. No preparation is required beyond having a GitHub account.

### After the Workshop - Recommended Next Steps

1. **Finish any incomplete workshop courses first.** If Introduction to GitHub, Communicate Using Markdown, or Review Pull Requests are still in progress, complete them before starting new modules.

2. **Pick one path that matches your next goal:**
   - Want to contribute to open source? Start with Path 2 (Collaboration).
   - Want to automate your workflow? Start with Path 3 (Actions).
   - Want to code faster with AI? Start with Path 4 (Copilot).
   - Want to secure your projects? Start with Path 5 (Security).

3. **Work through one course at a time.** Each course takes 30-60 minutes. Spreading them across multiple days helps with retention.

4. **Use the workshop materials as reference.** When a GitHub Skills course asks you to create a branch or open a PR, the chapter guides from this workshop describe the same operations with screen reader instructions.

### Tracking Your Progress

GitHub Skills does not have a central dashboard for tracking completions. Use these strategies instead:

- **GitHub profile:** Completed courses appear as repositories in your account. Pin your favorites to your profile.
- **Repository list:** Filter your repositories by the "skills-" prefix to see all courses you have started.
- **Mona's final message:** When you finish a course, Mona posts a completion message in the final issue. Bookmark it.
- **This checklist:** Copy the list below into a personal note or issue to track which courses you have completed.

### Personal Completion Checklist

Copy this list into your own notes to track progress:

```
Workshop Courses
- [ ] Introduction to GitHub
- [ ] Communicate Using Markdown
- [ ] Review Pull Requests

Path 1: Git Fundamentals
- [ ] Introduction to Git
- [ ] Resolve Merge Conflicts
- [ ] Change Commit History

Path 2: GitHub Collaboration
- [ ] Introduction to Repository Management
- [ ] Connect the Dots
- [ ] GitHub Pages
- [ ] Release-Based Workflow

Path 3: GitHub Actions and Automation
- [ ] Hello GitHub Actions
- [ ] Test with Actions
- [ ] Reusable Workflows
- [ ] Write JavaScript Actions
- [ ] Publish Docker Images
- [ ] Deploy to Azure
- [ ] AI in Actions
- [ ] Create AI-Powered Actions

Path 4: GitHub Copilot
- [ ] Getting Started with GitHub Copilot
- [ ] Build Applications with Copilot Agent Mode
- [ ] Copilot Code Review
- [ ] Customize Your GitHub Copilot Experience
- [ ] Expand Your Team with Copilot
- [ ] Integrate MCP with Copilot
- [ ] Scale Institutional Knowledge Using Copilot Spaces
- [ ] Create Applications with the Copilot CLI
- [ ] Your First Extension for GitHub Copilot
- [ ] Modernize Your Legacy Code with GitHub Copilot

Path 5: Security
- [ ] Secure Code Game
- [ ] Introduction to Secret Scanning
- [ ] Secure Repository Supply Chain
- [ ] Introduction to CodeQL
- [ ] Configure CodeQL Language Matrix

Path 6: Cloud and Migration
- [ ] Code with Codespaces
- [ ] Migrate ADO Repository
- [ ] Idea to App with Spark
```

---

## Additional Resources

- [GitHub Skills homepage](https://skills.github.com/) - browse all courses with descriptions
- [GitHub Skills organization](https://github.com/skills) - view all course repositories directly
- [GitHub Skills Discussions](https://github.com/orgs/skills/discussions) - ask questions and share feedback with the GitHub Skills community
- [Skills Exercise Creator](https://github.com/skills/exercise-creator) - build your own GitHub Skills courses using Copilot

---

*Last updated: March 2026*
