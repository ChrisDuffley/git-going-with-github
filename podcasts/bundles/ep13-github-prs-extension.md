# Git Going with GitHub - Audio Series

## Episode 13: The GitHub Pull Requests Extension

**Series:** Git Going with GitHub
**Episode:** 13 of 44
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

- Installing and signing in to the GitHub Pull Requests extension
- Viewing pull requests without leaving VS Code
- Creating a new pull request from VS Code
- Reviewing and commenting on pull requests
- Merging and managing PRs from the editor
- How this connects to the web-based PR workflow from Day 1

---

### Concept Coverage Checklist

Every concept below MUST be explained during the episode. Do not skip any.
When a concept is complex, use an analogy or real-world comparison to make it concrete.

- [ ] **What the GitHub Pull Requests and Issues extension does**
- [ ] **Installing the extension and signing in to GitHub**
- [ ] **The Pull Requests section in the sidebar**
- [ ] **Viewing a list of pull requests assigned to you or created by you**
- [ ] **Opening a pull request in the editor to read the diff**
- [ ] **Creating a new pull request from VS Code**
- [ ] **Setting the base branch and compare branch**
- [ ] **Writing the PR title and description from VS Code**
- [ ] **Reviewing a pull request: navigating changed files**
- [ ] **Adding inline comments on specific lines**
- [ ] **Submitting a review: approve, request changes, or comment**
- [ ] **Merging a pull request from VS Code**
- [ ] **The web alternative for each operation**
- [ ] **The gh CLI alternative for each operation**
- [ ] **How the VS Code PR workflow maps to the Day 1 web workflow**

### Prerequisites (briefly recap these)

Listeners may have heard these earlier episodes. Briefly remind them of:

- Episode 12: Git operations in VS Code
- Episode 6: Pull request lifecycle from the web

### Cross-Referenced Material

The following supplementary content is included after the primary source.
Reference it naturally when a concept would benefit from additional context,
but keep the main narrative focused on the primary chapter.

- Working with Pull Requests (web) - Ch 05

### Primary Source Material

# GitHub Pull Requests Extension
> **Listen to Episode 13:** [The GitHub Pull Requests Extension](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Managing Pull Requests from VS Code

> **Day 2, Block 2 Material**
>
> This guide covers the GitHub Pull Requests and Issues extension: viewing open PRs, checking out PR branches for local testing, reviewing PRs with screen reader-accessible tools, creating PRs directly from VS Code, using PR templates, and syncing PR status with GitHub.
>
> **Prerequisites:** [Working with Pull Requests](05-working-with-pull-requests.md), [Git & Source Control in VS Code](11-git-source-control.md)

> **Mac keyboard shortcuts:** Throughout this chapter, all `Ctrl+` shortcuts use `Cmd+` on Mac, and `Alt+` shortcuts use `Option+` on Mac. For example: `Ctrl+Shift+P` → `Cmd+Shift+P`, `Ctrl+Shift+G` → `Cmd+Shift+G`, `Alt+F2` → `Option+F2`. Context menus (`Shift+F10` on Windows) use `Ctrl+Return` on Mac.

---

## Table of Contents

1. [Installing the GitHub Pull Requests Extension](#1-installing-the-github-pull-requests-extension)
2. [Viewing Pull Requests](#2-viewing-pull-requests)
3. [Checking Out a Pull Request Branch](#3-checking-out-a-pull-request-branch)
4. [Reviewing Pull Requests in VS Code](#4-reviewing-pull-requests-in-vs-code)
5. [Creating a Pull Request from VS Code](#5-creating-a-pull-request-from-vs-code)
6. [Pull Request Description Templates](#6-pull-request-description-templates)
7. [Commenting and Requesting Changes](#7-commenting-and-requesting-changes)
8. [Merging Pull Requests](#8-merging-pull-requests)

---

## 1. Installing the GitHub Pull Requests Extension

The GitHub Pull Requests and Issues extension integrates GitHub's PR workflow directly into VS Code - no browser tab switching required.

### Installation Steps

**Method 1: Extensions Sidebar**

1. Open Extensions sidebar: `Ctrl+Shift+X` (Mac: `Cmd+Shift+X`)
2. Type "GitHub Pull Requests" in the search box
3. Find "GitHub Pull Requests and Issues" (publisher: GitHub)
4. Navigate to the extension in the results list
5. Press `Enter` to open the extension detail page
6. `Tab` to "Install" button → press `Enter`

**Method 2: Command Palette**

1. `Ctrl+Shift+P`
2. Type "install extensions"
3. Select "Extensions: Install Extensions"
4. Search for "GitHub Pull Requests"
5. Install "GitHub Pull Requests and Issues"

**Screen reader note:** The Extensions sidebar is a tree view. Use `Up/Down Arrow` to navigate, `Enter` to open an extension's detail page.

### Signing In to GitHub

After installation, VS Code prompts you to sign in:

1. A notification appears: "Sign in to GitHub to use Pull Requests"
2. Navigate to the notification (`Alt+N` / Mac: `Option+N`, or status bar navigation)
3. Select "Sign in"
4. VS Code opens your browser for GitHub OAuth authentication
5. Authorize VS Code in the browser
6. Return to VS Code - you're now signed in

**Verify sign-in:**
- Open Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
- Type "GitHub Pull Requests: Sign in"
- If already signed in, the option shows "Sign out" instead

### What the Extension Adds

After installation, you gain:

- **GitHub view in the Activity Bar** (sidebar icon that looks like the GitHub logo)
- **Pull Requests and Issues tree** in the Explorer
- **PR creation commands** in the Command Palette
- **Inline PR review features** in the editor
- **Issue linking** when writing commit messages

---

## 2. Viewing Pull Requests

### Opening the GitHub Pull Requests Panel

**Method 1: Activity Bar**

<details>
<summary>Visual / mouse users</summary>

Click the **GitHub logo icon** in the Activity Bar (the vertical strip of icons on the far left). It's usually the 5th or 6th icon. The GitHub Pull Requests panel opens.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. The Activity Bar is not always reachable by `Tab` from the editor
2. Use `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → type "GitHub Pull Requests: View Pull Request" or "Focus on Pull Requests View" → press `Enter`
3. Alternatively press `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`) to open Source Control, then `Tab` until you reach the Activity Bar icon strip

The GitHub view opens, showing:
- "Pull Requests"
- "Issues"

</details>

<details>
<summary>Web alternative (github.com)</summary>

View pull requests directly on GitHub without VS Code:

1. Navigate to the repository on GitHub.com
2. Click the **Pull requests** tab
3. Click any PR title to view its conversation, commits, and changed files
4. Use the **Files changed** tab to review diffs

See [Working with Pull Requests](05-working-with-pull-requests.md) for the full web-based PR workflow.

</details>

<details>
<summary>GitHub CLI (gh) alternative</summary>

View PRs from your terminal:

```bash
# List open PRs
gh pr list

# View a specific PR
gh pr view 42

# Open a PR in your browser
gh pr view 42 --web

# Filter PRs waiting for your review
gh pr list --search "review-requested:@me"
```

</details>

**Method 2: Explorer Section**

1. Open Explorer: `Ctrl+Shift+E` (Mac: `Cmd+Shift+E`)
2. Navigate with `Arrow` keys to find the "GitHub Pull Requests" section
3. Expand it with `Right Arrow`

### Pull Request Tree Structure

```
GitHub Pull Requests
├── My Pull Requests
│   ├── Assigned to Me
│   ├── Created by Me
│   ├── Waiting for my Review
│   └── All Open
├── [Repository Name]
│   ├── Local Pull Request Branches (checked out locally)
│   ├── All Open Pull Requests
│   └── All Closed Pull Requests
```

**Screen reader announcement example:**
"Pull Request #42: Add Timeline Guide, opened by jeffb, 2 days ago, 3 files changed"

### Filtering PR Lists

**By status:**
- "All Open" - every open PR
- "Assigned to Me" - PRs where you're an assignee
- "Waiting for my Review" - PRs where you're requested as reviewer
- "Draft" - PRs marked as work-in-progress

**By repository:**
The tree organizes PRs by repository. Expand a repo to see its PRs.

### Viewing PR Details

1. Navigate to a PR in the tree
2. Press `Enter`

A PR detail view opens in the editor area showing:
- PR title and number
- Author and creation date
- Status (Open, Merged, Closed)
- Description (full Markdown with inline rendering)
- Reviewers and their status (Approved, Requested Changes, Pending)
- Checks (CI status: passing, failing, pending)
- Files changed (clickable list)
- Comments timeline

**Screen reader experience:**
- The detail view is Markdown-rendered HTML
- Use standard screen reader reading commands (`Arrow` keys in NVDA/JAWS virtual mode)
- Headings mark each section ("Description", "Reviewers", "Files Changed", "Comments")
- Links are clickable with `Enter`

---

## 3. Checking Out a Pull Request Branch

**Checking out a PR** means downloading its branch to your local machine so you can test it, review it interactively, or add commits to it.

### Why Check Out a PR

- **Test functionality:** Run the code locally to verify it works
- **Review with full context:** See the changes in your editor with full file access
- **Make suggestions:** Add commits to someone else's PR (if you have write access)
- **Verify accessibility:** Test with your screen reader to ensure changes don't break navigation

### How to Check Out a PR

**Method 1: From the PR Detail View**

1. Open a PR (see Section 2)
2. In the PR detail view, navigate to "Checkout" button
3. Press `Enter`

VS Code:
- Downloads the branch
- Switches your local repository to that branch
- Opens the changed files in the editor

**Method 2: From the PR Tree**

1. Navigate to the PR in the GitHub Pull Requests tree
2. Press `Shift+F10` (Mac: `Ctrl+Return`) to open context menu
3. Select "Checkout Pull Request"

**Method 3: Command Palette**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "GitHub Pull Requests: Checkout"
3. Select "GitHub Pull Requests: Checkout Pull Request"
4. Choose the PR from the list

**Screen reader note:** After checkout, the bottom-left status bar shows the branch name (example: "jeffb/add-timeline-guide"). Your local files now match that branch.

### Returning to Your Original Branch

After reviewing:

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git checkout"
3. Select "Git: Checkout to..."
4. Choose your original branch (usually `main` or your feature branch)

---

## 4. Reviewing Pull Requests in VS Code

Once you've checked out a PR (or opened it in the detail view), you can review its changes fully within VS Code.

### Reading the Files Changed List

**In the PR detail view:**

1. Scroll down to "Files Changed" section
2. Each file is a link
3. Navigate with `Arrow` keys
4. Press `Enter` on a file to open its diff view

**Screen reader announcement:**
"docs/11-vscode-basics.md, 42 additions, 3 deletions"

### Understanding the Diff View

When you open a file from "Files Changed":

**Split view mode (default):**
- Left side: original file (before changes)
- Right side: modified file (after changes)
- Changed lines highlighted (added = green, removed = red)

**Inline view mode:**
- Single editor
- Removed lines shown with `-` prefix
- Added lines shown with `+` prefix

**To toggle between views:**
- Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Diff: Toggle Inline View"

### Screen Reader Diff Review with Accessible Diff Viewer

**Recommended workflow for screen reader users:**

1. Open a changed file from the PR detail view
2. Press `F7` to jump to the first diff hunk
3. Press `Alt+F2` (Mac: `Option+F2`) to open Accessible View
4. Read the hunk content:
   - Unchanged lines (for context)
   - Removed lines (prefixed with `-`)
   - Added lines (prefixed with `+`)
5. Press `Escape` to close Accessible View
6. Press `F7` to jump to the next hunk
7. Repeat until all hunks reviewed

**Example Accessible Diff output:**

```
Hunk 1 of 3 - lines 12 to 18
  Unchanged: ## VS Code Setup
- Removed: This guide covers VS Code basics.
+ Added: This guide covers VS Code basics and accessibility features.
  Unchanged:
  Unchanged: **Prerequisites:** Day 1 completion
```

**This structured reading is far superior to navigating the visual diff manually.**

> **VS Code October 2025 update:** Deleted lines (shown with the `-` prefix) are now fully selectable and copyable in the diff editor. Previously, deleted code could only be read, not selected. This is useful when you want to copy a deleted function signature, old variable name, or removed text for reference while writing your review comment.

### Flagging Issues During Review

As you review, note any problems:

1. Navigate to the specific line in the diff
2. Press `Shift+F10` (Mac: `Ctrl+Return`) for context menu
3. Select "Add Comment"
4. Type your comment in the input that appears
5. Choose "Single Comment" or "Start Review"

**Single Comment** posts immediately.  
**Start Review** saves your comments as a draft until you submit the full review (see Section 7).

---

## 5. Creating a Pull Request from VS Code

After you've pushed commits to a feature branch, you can create a PR without leaving VS Code.

### Prerequisites

1. You've created a branch (see [Git & Source Control: Branch Management](11-git-source-control.md#3-branch-management))
2. You've made commits
3. You've pushed the branch to GitHub (`Ctrl+Shift+P` / Mac: `Cmd+Shift+P` → "Git: Push")

### Creating the PR

**Method 1: Command Palette (Recommended)**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "GitHub Pull Requests: Create"
3. Select "GitHub Pull Requests: Create Pull Request"
4. A form opens in the editor

**Method 2: Source Control Panel**

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. After pushing, a "Create Pull Request" button appears
3. Press `Enter` on that button

**Method 3: GitHub Panel**

1. Open GitHub view (Activity Bar → GitHub icon)
2. Right-click your branch in the tree
3. Select "Create Pull Request"

### Filling Out the PR Form

The form has these fields:

**Title (required):**
- Auto-filled with your most recent commit message
- Edit to make it descriptive (example: "Add Timeline View documentation")

**Description (optional but recommended):**
- Explain what changed and why
- Reference the issue you're fixing: "Fixes #42"
- If a PR template exists, VS Code loads it here (see Section 6)
- **Copilot-assisted description:** An AI sparkle icon in the description toolbar lets you generate a description from your commits. When a PR template exists, Copilot fills in the template sections intelligently rather than replacing the template - it populates the checklist items and description sections with content derived from your changes.

**Base branch (target):**
- Usually `main` or `develop`
- This is the branch your changes will merge into

**Compare branch (source):**
- Your feature branch (auto-selected)
- This is the branch with your changes

**Reviewers (optional):**
- Select people to review your PR
- Navigate the list with `Arrow` keys

**Labels (optional):**
- Add labels like `documentation`, `accessibility`, `good-first-issue`

**Milestone (optional):**
- Link the PR to a project milestone

**Draft PR checkbox:**
- Check this if the PR is not ready for review yet
- Unchecked = "Ready for review"

**Screen reader navigation:**
- All fields are standard form inputs
- `Tab` to move between fields
- Use `Arrow` keys in dropdowns (reviewers, labels, milestones)

### Submitting the PR

1. Review all fields
2. `Tab` to "Create" button
3. Press `Enter`

VS Code creates the PR on GitHub and shows a success message. The PR link appears in the notification - click it to open the PR on GitHub, or open it in the GitHub Pull Requests panel.

<details>
<summary>Web alternative (github.com) - creating a PR</summary>

Create a PR from your browser after pushing your branch:

1. Navigate to the repository on GitHub
2. If you recently pushed, a yellow banner "Compare & pull request" appears - click it
3. Otherwise: click **Pull requests** tab, then **New pull request**, then select your branch
4. Fill in the title and description
5. Click **Create pull request**

See [Working with Pull Requests - Opening a PR](05-working-with-pull-requests.md#opening-a-pull-request) for detailed screen reader steps.

</details>

<details>
<summary>GitHub CLI (gh) alternative - creating a PR</summary>

```bash
# Interactive: prompts for title, body, base branch
gh pr create

# Inline: provide details directly
gh pr create --title "Add Timeline View documentation" --body "Fixes #42"

# Create as draft
gh pr create --draft

# Open the form in your browser
gh pr create --web
```

</details>

---

## 6. Pull Request Description Templates

Many repositories include a **PR template** - a Markdown file that pre-fills the PR description with a checklist or structure.

### Where Templates Are Stored

Common locations:
- `.github/pull_request_template.md` (root)
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/PULL_REQUEST_TEMPLATE/` (folder with multiple templates)
- `docs/pull_request_template.md`

When you create a PR in VS Code, the extension automatically loads the template into the description field.

### Example PR Template

```markdown
## Description
<!-- Briefly describe what this PR changes and why -->

## Related Issue
<!-- Link to the issue this PR fixes: Fixes #123 -->

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Accessibility improvement

## Testing
<!-- How did you test these changes? -->

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have tested with a screen reader (NVDA, JAWS, or VoiceOver)
- [ ] I have updated the documentation
- [ ] All new and existing tests pass
- [ ] I have linked this PR to the related issue

## Screenshots (if applicable)
<!-- Add screenshots or screen recordings -->
```

### Filling Out a Template

**Screen reader workflow:**

1. Create PR (Method 1-3 from Section 5)
2. The description field is pre-filled with the template
3. Navigate through the template with `Arrow` keys
4. Replace each `<!-- comment -->` with your content
5. Check checkboxes by typing `x` between the brackets: `- [x]`

**Keyboard tip:** Use `Ctrl+F` (Mac: `Cmd+F`) to jump to each `<!--` placeholder, fill it in, then `F3` to jump to the next one.

---

## 7. Commenting and Requesting Changes

When reviewing a PR, you can:
- Leave inline comments on specific lines
- Request changes before the PR can be merged
- Approve the PR
- Submit general feedback

### Adding an Inline Comment

1. Open a file from the PR's "Files Changed" list
2. Navigate to the line you want to comment on
3. Press `Shift+F10` (Mac: `Ctrl+Return`) to open context menu
4. Select "Add Comment"
5. Type your comment
6. Choose "Add Single Comment" (posts immediately) or "Start Review" (saves as a draft)

**Comment format tips:**
- Be specific: "This heading should be H3, not H2"
- Provide context: "Screen readers announce this as 'list with 1 item' - should be a paragraph instead"
- Suggest a fix: "Consider rewording to: 'Click the button to save'"

### Starting a Review

**If you have multiple comments to make, use "Start Review":**

1. Add your first inline comment → select "Start Review"
2. Continue adding comments to other lines
3. All comments are saved as drafts (not visible to others yet)

### Submitting Your Review

When you've reviewed all files:

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "GitHub Pull Requests: Submit Review"
3. Select "GitHub Pull Requests: Finish Review"
4. Choose review type:
   - **Comment** - general feedback, no approval decision
   - **Approve** - PR looks good, ready to merge
   - **Request Changes** - issues must be fixed before merging
5. Optionally add a summary comment
6. Press `Enter` to submit

**Screen reader note:** The review type selector is a radio button group. Use `Arrow` keys to choose, `Enter` to confirm.

### What Happens After Submission

- All your draft comments post to GitHub
- The PR author receives a notification
- Your review status appears on the PR (Approved / Changes Requested / Commented)
- If you requested changes, the PR cannot merge until you approve it

<details>
<summary>Web alternative (github.com) - reviewing</summary>

Review PRs directly on GitHub.com:

1. Open the PR and click the **Files changed** tab
2. Read through each file's diff
3. Click the blue **+** button on any line to add an inline comment
4. Choose **Start a review** to batch comments
5. Click **Review changes** (top right) to select Comment / Approve / Request changes
6. Click **Submit review**

See [Accessible Code Review](14-accessible-code-review.md) for detailed screen reader steps.

</details>

<details>
<summary>GitHub CLI (gh) alternative - reviewing</summary>

```bash
# View the PR diff in your terminal
gh pr diff 42

# Approve
gh pr review 42 --approve --body "Looks good."

# Request changes
gh pr review 42 --request-changes --body "Heading hierarchy needs fixing."

# Comment-only (no verdict)
gh pr review 42 --comment --body "A few suggestions."
```

**Note:** For inline comments on specific lines, use the web interface or VS Code.

</details>

---

## 8. Merging Pull Requests

**Who can merge:** Repository maintainers, or contributors with write access.

### Prerequisites for Merging

Before merging, verify:
1. All required reviews are approved
2. All CI checks pass (green checkmarks)
3. No merge conflicts exist
4. Branch is up to date with base branch (main)

**Changing the base branch:** If the PR was opened against the wrong base branch, you can change it from the PR detail view in VS Code. Scroll to the base branch field in the PR detail view and activate the dropdown to select a different target branch. This saves opening the PR on GitHub.com.

**Converting to/from draft:** You can also convert a ready PR back to a draft (or mark a draft as ready for review) directly from the PR detail view. Scroll to the Status section and use the context menu on the PR title or the "..." more actions button.

### Merging from VS Code

**Method 1: PR Detail View**

1. Open the PR in VS Code
2. Scroll to the bottom of the PR detail view
3. Find "Merge Pull Request" button
4. Press `Enter`
5. Choose merge type (see below)
6. Confirm

**Method 2: Command Palette**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "GitHub Pull Requests: Merge"
3. Select "GitHub Pull Requests: Merge Pull Request"
4. Choose the PR from the list
5. Select merge type
6. Confirm

### Merge Types

| Type | What It Does | When to Use |
|------|-------------|------------|
| **Merge Commit** | Creates a merge commit preserving all branch commits | Default for most projects; preserves full history |
| **Squash and Merge** | Combines all commits into one before merging | Cleans up messy commit history; common for feature branches |
| **Rebase and Merge** | Replays commits onto base branch without a merge commit | Creates linear history; requires clean commit messages |

**Screen reader note:** The merge type selector is a dropdown or radio group. Navigate with `Arrow` keys, confirm with `Enter`.

**Which merge type to use:**
- Check the repository's CONTRIBUTING.md for guidance
- If unsure, use **Merge Commit** (the default and safest option)

### After Merging

1. The PR closes automatically
2. The feature branch can be deleted (VS Code prompts: "Delete branch?")
3. Recommended: switch back to `main` and pull the merged changes

**Switching to main and pulling:**

```
Ctrl+Shift+P → "Git: Checkout to..." → select "main"
Ctrl+Shift+P → "Git: Pull"
```

*(Mac users: use `Cmd+Shift+P` instead of `Ctrl+Shift+P`)*

### Deleting the Feature Branch

After merging, the feature branch is no longer needed:

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git delete branch"
3. Select "Git: Delete Branch..."
4. Choose the merged branch

This deletes the branch locally. To delete it on GitHub too:

<details>
<summary>Web alternative (github.com) - merging</summary>

Merge a PR directly on GitHub.com:

1. Open the PR's **Conversation** tab
2. Scroll to the merge button at the bottom
3. Click the dropdown arrow to choose a merge strategy (Squash, Rebase, or Merge commit)
4. Click **Merge pull request**, then **Confirm merge**
5. Click **Delete branch** to clean up

</details>

<details>
<summary>GitHub CLI (gh) alternative - merging</summary>

```bash
# Merge with default strategy
gh pr merge 42

# Squash and merge, then delete the branch
gh pr merge 42 --squash --delete-branch

# Enable auto-merge (merges when checks pass)
gh pr merge 42 --auto --squash
```

</details>

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git push"
3. Select "Git: Push (delete remote branch)"

---

## Keyboard Shortcuts - GitHub Pull Requests Extension

| Action | Windows | Mac |
|--------|---------|-----|
| Open GitHub view | Activity Bar → GitHub icon → `Enter` | Activity Bar → GitHub icon → `Enter` |
| Create Pull Request | `Ctrl+Shift+P` → "GitHub Pull Requests: Create" | `Cmd+Shift+P` → "GitHub Pull Requests: Create" |
| Checkout PR | `Ctrl+Shift+P` → "GitHub Pull Requests: Checkout" | `Cmd+Shift+P` → "GitHub Pull Requests: Checkout" |
| Submit Review | `Ctrl+Shift+P` → "GitHub Pull Requests: Finish Review" | `Cmd+Shift+P` → "GitHub Pull Requests: Finish Review" |
| Merge PR | `Ctrl+Shift+P` → "GitHub Pull Requests: Merge" | `Cmd+Shift+P` → "GitHub Pull Requests: Merge" |
| Add inline comment | `Shift+F10` (in diff view) → "Add Comment" | `Ctrl+Return` (in diff view) → "Add Comment" |
| Navigate diff hunks | `F7` (next), `Shift+F7` (previous) | `F7` (next), `Shift+F7` (previous) |
| Accessible Diff Viewer | `Alt+F2` (in diff view) | `Option+F2` (in diff view) |

---

## Troubleshooting

### "No pull requests found"

**Issue:** The GitHub Pull Requests panel is empty.

**Solutions:**
1. Verify you're signed in: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "GitHub Pull Requests: Sign in"
2. Check you have a folder open containing a Git repository
3. Refresh the panel: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "GitHub Pull Requests: Refresh Pull Requests List"

### "Could not create pull request"

**Issue:** PR creation fails.

**Solutions:**
1. Verify you've pushed your branch: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Git: Push"
2. Check you have write access to the repository
3. Ensure your branch is ahead of the base branch (has new commits)

### "Authentication failed"

**Issue:** VS Code can't connect to GitHub.

**Solutions:**
1. Sign out and sign back in: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "GitHub Pull Requests: Sign out" → then sign in again
2. Check your GitHub Personal Access Token (see [Appendix D: Git Authentication](appendix-d-git-authentication.md))
3. Verify network connection

---

## Try It: Review a PR from VS Code

**Time:** 3 minutes | **What you need:** VS Code with GitHub Pull Requests extension installed and signed in

1. **Open the PR view** - Press `Ctrl+Shift+P` → type `Pull Requests: Focus on GitHub Pull Requests View` → `Enter`.
2. **Find a PR** - Navigate the tree with arrow keys. Expand a PR to see its changed files.
3. **Open a diff** - Press `Enter` on a changed file. The diff editor opens.
4. **Use the Accessible Diff Viewer** - Press `F7` to jump to the first change. Your screen reader announces what was added or removed. Press `F7` again to move to the next change.
5. **Leave a comment** - Position your cursor on a line you want to comment on, then press `Ctrl+Shift+P` → `Pull Request: Add Comment on Current Diff Line`. Type a brief, constructive comment and submit.

**You're done.** You just reviewed a pull request entirely from VS Code.

> **What success feels like:** You read a diff, heard the changes announced by your screen reader, and left feedback - all without opening a browser. This is how many developers review code every day.

---

*Next: [GitHub Copilot](13-github-copilot.md)*  
*Back: [Git & Source Control in VS Code](11-git-source-control.md)*  
*Related: [Working with Pull Requests](05-working-with-pull-requests.md) | [Issue Templates](15-issue-templates.md)*


---

### Supplementary: Working with Pull Requests (web) - Ch 05

# Working with Pull Requests
> **Listen to Episode 6:** [Working with Pull Requests](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Creating, Reviewing, and Merging Pull Requests with a Screen Reader

> Pull requests are where your work becomes a contribution. This guide takes you through the full pull request workflow - from opening one to participating in review - using only your keyboard and screen reader.
>
> **Screen reader note - New Files Changed Experience:** This guide uses GitHub's improved Files Changed experience, which adds proper ARIA landmark structure to the Files Changed tab, including the file tree and diff navigation. This feature may already be active for your account - it has been broadly rolled out and may no longer appear as a Feature Preview toggle at all.
>
> **To verify:** Activate the **User Menu** button (top-right of any GitHub page) → activate **"Feature preview"** → scan the list for **"New Files Changed Experience"**:
> - If listed and the toggle announces **"Pressed"** (or **"Disable"**) - already enabled, no action needed
> - If listed but **not Pressed** (or **"Enable"**) - activate the toggle to enable it
> - If not listed at all - the feature has graduated to the standard interface; it is active automatically
>
> Full step-by-step instructions with per-screen-reader commands are in [Pre-Workshop Setup, Step 4](00-pre-workshop-setup.md#step-4-check-github-feature-preview-settings).
>
> **Browse vs Focus Mode (NVDA):** Use **Browse Mode** (the default) for reading PR conversations, navigating headings, and reviewing diffs. Switch to **Focus Mode** (`NVDA+Space`) only when you need to type in comment boxes or search fields. Switch back to Browse Mode to resume navigation. Maximize your browser window for consistent landmark layout.

---

## What Is a Pull Request?

A pull request (PR) is a proposal to merge changes from one branch into another. When you have:
- Edited a file directly on GitHub (web editor)
- Made changes in your fork
- Made changes on a feature branch

...you open a PR to request that those changes be merged into the target branch (usually `main`).

A PR shows:
- **What** changed - a diff of every file
- **Why** it changed - your PR description
- **Conversation** - comments, reviews, and discussion
- **Status** - automated checks (CI/CD) and review status

> **Learning Room connection:** In the Learning Room repository, every hands-on contribution follows this pattern. For example, when you complete Challenge 3 (filling the `[TODO]` sections in `docs/welcome.md`), you open a PR that shows your added content as green `+` lines in the diff, your description explains which TODOs you completed and why, and the validation bot posts automated check results. The scenarios in this chapter use Learning Room files so you can follow along with real content.

---

## Navigating to Pull Requests

<details>
<summary>Visual / mouse users</summary>

Click the **Pull requests** tab in the repository navigation bar. The tab shows the count of open PRs. Click any PR title to open it.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. `D` → "Repository navigation" landmark
2. `K` to navigate tabs → "Pull requests, [N] open"
3. `Enter` to open

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. `VO+U` → Landmarks → navigate to "Repository navigation"
2. Quick Nav `K` or `VO+Right` to navigate tabs → "Pull requests"
3. `VO+Space` to open

</details>

### From a PR notification:
If you received a notification about a PR, follow the notification link directly to the PR page.

<details>
<summary>GitHub CLI (gh) alternative</summary>

List and view pull requests from your terminal:

```bash
# List open PRs
gh pr list

# Filter by review status
gh pr list --search "review-requested:@me"

# View a specific PR in the terminal
gh pr view 42

# Open a PR in your browser
gh pr view 42 --web
```

**Setup:** Install the GitHub CLI from [cli.github.com](https://cli.github.com) and authenticate with `gh auth login`. See [Appendix D](appendix-d-git-authentication.md) for details.

</details>

---

## The Pull Request List Page

The PR list works identically to the Issues list:
- `3` to navigate PR titles (they are h3 headings)
- `I` to navigate list items
- `F` or `E` / `Shift+E` to reach the search/filter field
- Filters work the same as Issues: `is:open`, `author:@me`, `review-requested:@me`, etc.

> **Screen reader note - PR list semantics:** The PR list does **not** have individual ARIA item containers with per-item semantics. To read a PR's full detail (title, author, labels, status), you must navigate sequentially with `Tab` or arrow keys through the elements for each item. Starting from a PR title link, `Tab` forward to find the author, labels, and review status for that same PR before moving to the next title.
>
> **Hovercards:** Hovercards appear when you hover over usernames and links in the PR list, adding extra verbosity. To reduce this noise: go to your GitHub Profile → Accessibility settings → disable "Show link previews" and similar hover triggers. This makes sequential navigation significantly less cluttered.

---

## Anatomy of a Pull Request Page

A PR page has three main tabs:

```
[PR title - h1]
[State badge: Open / Merged / Closed / Draft]
[Author, base ← compare, timestamp]

[ Conversation ] [ Commits ] [ Files changed ]
                                ↑ tab bar landmark

─── Conversation Tab ────────────────────────────────────────
[PR description - authored by opener]
[Status checks summary]
[Activity / review thread]
  [Review comment - h3]
  [Line comments - nested]
[Merge controls (for maintainers)]
[Comment box]

─── Commits Tab ─────────────────────────────────────────────
[List of commits, grouped by date - h3 for dates]
[Each commit as a list item with SHA, message, author]

─── Files Changed Tab ────────────────────────────────────────
[File filter search]
[File tree (left panel)]
[Diff for each file - each file is a heading]
[Line-level comment threads within diffs]
```

---

## Navigating the PR Tab Bar

The Conversation, Commits, and Files changed tabs are in a “Pull request navigation tabs” landmark.

<details>
<summary>Visual / mouse users</summary>

The three tabs - **Conversation**, **Commits**, and **Files changed** - appear just below the PR title. Click the tab you want. The active tab is underlined. The count on **Files changed** shows how many files were modified.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. Press `D` → navigate to “Pull request navigation tabs”
2. Press `←` or `→` arrow keys to move between tab options
3. Press `Enter` to activate a tab

</details>

<details>
<summary>Screen reader users (VoiceOver)</summary>

1. `VO+U` → Landmarks → “Pull request navigation tabs”
2. `VO+Right` to move between tabs
3. `VO+Space` to activate

</details>

Each tab link reads with its name and the count: "Files changed, 3 files changed."

---

## Reading the Conversation Tab

### PR Description

1. `2` → navigate to "Description" h2 heading
2. `↓` to read the description
3. Markdown renders as semantic HTML - headings, lists, code blocks are fully accessible

### Status Checks Section

Below the description, the status checks summary shows whether automated tests passed. Look for:
- “All checks have passed” / “Some checks failed” / “Checks pending”
- A “Show all checks” button or link

<details>
<summary>Visual / mouse users</summary>

Status checks appear as a coloured banner below the PR description - green tick for passed, red X for failed, yellow spinner for running. Click **Show all checks** to expand the full list. Click a check name to go to its run log.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. Press `H` or `2` to find the "Checks" or "Status checks" heading
2. Press `K` to navigate links for individual check names
3. Press `Enter` on a check to see its details

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. Quick Nav `H` or `VO+Cmd+H` to jump to the "Checks" or "Status checks" heading
2. Quick Nav `K` to navigate check name links
3. `VO+Space` on a check to see its details

</details>

See [GitHub Actions & Workflows](appendix-q-github-actions-workflows.md) for full guidance on reading status checks.

### Review Comments

Each review comment thread is an h3. Navigate with `3`:
- Hear the reviewer's username, timestamp, and their review verdict ("approved" or "requested changes")
- Then the body of their review comment
- Then any replies to that comment

To reply to a review comment:
```
Step 1: Navigate to the comment (3)
Step 2: Tab to "Reply…" link/button
Step 3: The reply text area appears - Focus Mode → type your reply
Step 4: Ctrl+Enter to submit
```

---

## Reading the Commits Tab

```
Step 1: Navigate to Commits tab (D → PR tabs → Enter)
Step 2: 3 to navigate date group headings ("Commits on April 20")
Step 3: I to navigate individual commits within a date group
Step 4: Each commit: SHA link, message, author, [Verified] badge if signed
Step 5: Enter on a commit to open its diff
```

---

## Reading the Files Changed Tab

This is the core of a code review. You will read diffs - the before/after state of every file that changed.

> **Note:** This guide uses GitHub's improved Files Changed experience. If your Files Changed tab doesn't match these steps, refer to the screen reader verification steps in the prerequisite callout at the top of this chapter - the feature may need to be enabled in Feature Preview, or it may already be active for your account with no action required.

### File Tree (left panel)

The file tree lists every changed file. Use it to jump directly to a specific file’s diff.

<details>
<summary>Visual / mouse users</summary>

The file tree panel is on the left side of the Files Changed tab. It lists every modified file. Click a filename to scroll the diff view to that file. You can collapse or expand folders by clicking the arrow. Type in the filter box at the top to narrow the file list.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. `D` → navigate to "File tree" region
2. `↑/↓` to navigate the file list
3. `Enter` to jump to that file's diff

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. `VO+U` → Landmarks → navigate to "File tree" region
2. `VO+Down` to move through the file list
3. `VO+Space` to jump to that file's diff

</details>

### The Diff for a File

Each changed file has:
- A **file heading** (its path, e.g., "src/index.html") - navigable with `3` or `H`
- A **stats line** ("24 additions, 6 deletions")
- The **diff content** - a table where each row is one line of code

**Lines in a diff are read as:**
- `+ Added line` - line that was added
- `- Removed line` - line that was removed
- `Context line` - unchanged line shown for context

### Navigating the diff with a screen reader

<details>
<summary>Visual / mouse users</summary>

Each file’s diff shows added lines in green and removed lines in red. Scroll the page to read through changes. Unchanged context lines are shown in white/grey. Collapse a file’s diff by clicking the arrow next to its filename heading. Use `Ctrl+F` (browser Find) to search for specific text within visible diffs.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. `T` to jump to the next diff table
2. Switch to Focus Mode: `Insert+Space` (NVDA) or `Insert+Z` (JAWS)
3. `↓` to move through lines one by one
4. `Ctrl+Alt+→` to read across columns (line number | change type | content)
5. The screen reader reads: “+  Add accessible name to submit button”

</details>

<details>
<summary>Screen reader users (VoiceOver)</summary>

1. `T` or `VO+U` → Tables → select the diff table
2. `VO+Shift+Down` to enter the table
3. `VO+Right/Left` for columns, `VO+Up/Down` for rows

</details>

### Placing an inline comment on a diff line

<details>
<summary>Visual / mouse users</summary>

Hover over any line in the diff - a blue `+` button appears on the left margin. Click it to open a comment box for that line. Type your comment, then click **Add single comment** (posts immediately) or **Start a review** (batches the comment with others). To select a range of lines, click and drag across the line numbers on the left.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. Navigate to the specific line in the diff (using the table navigation above)
2. While focused on that line, a comment button appears - press `Enter` or `Space` to activate it
3. A comment box opens below the line
4. Focus Mode → type your comment
5. `Tab` to **Add single comment** button (instant comment) OR **Start a review** (to batch comments)

**Multi-line comment:**
1. Focus the first line you want to comment on
2. Press `Shift+↓` to extend the selection to additional lines
3. A comment button appears - activate it
4. The comment applies to the full range of selected lines

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. Navigate to the specific line in the diff (using the table navigation above)
2. While focused on that line, `VO+Space` on the comment button that appears
3. A comment box opens below the line
4. `VO+Shift+Down` to interact with the text area, then type your comment
5. `VO+Shift+Up` to stop interacting, then `Tab` to **Add single comment** and `VO+Space`

**Multi-line comment:**
1. Focus the first line and `Shift+↓` to extend the selection
2. `VO+Space` on the comment button that appears
3. The comment applies to the full range of selected lines

</details>

### Viewing comments within the diff

Inline comments appear as expandable threads within the diff table. Navigate to them with `3` (they are h3 headings). Each thread shows the comment, any replies, and a "Reply" button.

---

## Opening a Pull Request

### From the web editor workflow (editing a file on GitHub)

1. You edited a file → GitHub showed a "Propose changes" form
2. You named your branch and activated "Propose changes"
3. GitHub redirected you to the "Open a pull request" page

### From a fork or feature branch

<details>
<summary>Visual / mouse users</summary>

1. Navigate to the repository on GitHub
2. If you recently pushed, a yellow banner “Compare & pull request” appears at the top - click it
3. If no banner appears: click the **Pull requests** tab → click the green **New pull request** button
4. Use the branch dropdowns to choose your **base** branch (what to merge into) and your **compare** branch (your changes)
5. Click **Create pull request**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. Navigate to the repository
2. A "Compare & pull request" banner may appear (if you recently pushed) - activate it
3. OR: Navigate to Pull Requests tab → "New pull request"
4. Choose your base branch (what to merge into) and compare branch (your changes)

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. Navigate to the repository
2. Check for a "Compare & pull request" banner - Quick Nav `B` to find and `VO+Space` to activate it
3. OR: navigate to Pull Requests tab (`VO+U` → Landmarks → Repository navigation) → Quick Nav `B` for "New pull request"
4. Use the branch dropdowns (`VO+Space` to open, arrow keys to select) to choose base and compare branches

</details>

### Filling out the PR form

**Title field:**
```
Step 1: F to navigate to the title field
Step 2: Focus Mode → type a descriptive title
Step 3: Good: "Add keyboard navigation for carousel component"
Step 4: Bad: "Fix bugs"
```

**Description field:**
```
Step 1: Tab to the body text area
Step 2: Focus Mode → type using the PR template (if provided)
```

If no template, use this structure:

```markdown
## Summary

What does this PR change and why?

## Changes

- Added `aria-label` to the search button
- Fixed keyboard trap in the modal dialog
- Replaced `<div>` with `<button>` for the dismiss control

## Related Issues

Closes #42

## Testing

- Tested with NVDA + Chrome on Windows 11
- Tested with VoiceOver + Safari on macOS Sonoma
- Keyboard-only navigation verified

## Screenshots / recordings

[Include if relevant - with descriptive alt text for any images]
```

> **Learning Room example:** In the Learning Room repository, a PR template is provided for you. Here is what a completed PR looks like for Challenge 3 (Complete Welcome Guide):
>
> ```markdown
> ## Description
>
> Completed three [TODO] sections in docs/welcome.md:
> - Added paragraph about contributors from all backgrounds
> - Added guidance on evaluating issues before starting
> - Added note about GitHub profile and portfolio impact
>
> ## Related Issue
>
> Closes #12
>
> ## Type of change
>
> - [x] Documentation update
>
> ## Accessibility checklist
>
> - [x] Heading levels follow a logical hierarchy
> - [x] Link text is descriptive (no "click here")
> - [x] No images added (or alt text provided)
> ```
>
> The `Closes #12` line tells GitHub to automatically close issue 12 when this PR merges. The validation bot checks that this line is present and that your description is at least 50 characters long.

**Setting a Draft PR:**
If your work is not finished, open as a Draft:
1. After filling in the form, find the dropdown arrow next to "Create pull request"
2. Select "Create draft pull request"
3. This signals to reviewers that it is not ready for formal review yet

### Draft Pull Requests - Full Lifecycle

A **draft pull request** is a PR explicitly marked as a work in progress. It is visible to the team, can receive comments, and runs CI - but is blocked from being merged until you mark it ready.

**When to use a draft:**
- You want to show your approach and get early feedback before finishing
- You need CI to run but don't want accidental merges
- You are working across multiple days and want your progress visible
- You want to pair with a collaborator on the work

**What a draft PR does differently:**
- The merge button is disabled - even an authorized maintainer cannot merge a draft
- The PR header shows a grey "Draft" badge instead of the green "Open" badge
- Reviewers are not auto-notified (no review requests are sent until ready)
- CI workflows still run normally

**Mark a draft ready for review:**
1. Open the PR
2. Navigate to the "Reviewers" sidebar or scroll to bottom of the Conversation tab
3. Find and activate the **"Ready for review"** button
4. The draft badge changes to "Open" and reviewers are notified

**Screen reader path:**
```
Scroll to bottom of Conversation tab
→ B to navigate buttons
→ "Ready for review" button → Enter
→ Confirmation: PR status changes to Open
```

**Convert an open PR to draft (after opening):**
1. In the right sidebar, find the "Reviewers" section
2. Look for the **"Convert to draft"** link (below the review status)
3. Confirm in the dialog - this removes merge eligibility until you mark it ready again

<details>
<summary>GitHub CLI (gh) alternative - draft PR lifecycle</summary>

Manage draft PRs from your terminal:

```bash
# Create a draft PR
gh pr create --draft --title "WIP: Add carousel keyboard nav"

# Mark a draft ready for review
gh pr ready 42

# Check PR status (shows draft state)
gh pr view 42

# List only draft PRs
gh pr list --draft
```

</details>

**Requesting reviewers:**
From the sidebar Reviewers section:
1. Navigate to "Reviewers" heading (`3` or `H`)
2. Activate the gear button
3. Type a username in the search field
4. Select from the dropdown
5. Escape to save

> **Why some reviews are requested automatically:** A file called `CODEOWNERS` in many repositories maps file paths to specific people or teams. When your PR touches a file covered by a CODEOWNERS rule, GitHub automatically adds those people as required reviewers - you'll see them appear in the Reviewers sidebar without you adding them. You cannot remove a CODEOWNERS-required reviewer. If a required reviewer hasn't responded, reach out to them directly or leave a comment on the PR.

---

## Submitting a Review

When you are asked to review a PR, you have three options:
- **Comment** - leave feedback without a verdict; does not block merging
- **Approve** - signal you are satisfied; often required before merge
- **Request changes** - indicate changes must be addressed; blocks merge until resolved

### Starting a review

On the Files Changed tab, when you add inline comments, choose "Start a review" instead of "Add single comment." This batches all your comments into one review submission.

### Completing and submitting a review

After adding your inline comments via “Start a review,” you must submit the review to notify the PR author. The review is pending until you submit it.

<details>
<summary>Visual / mouse users</summary>

1. Look for the **Finish your review** button in the top-right area of the Files Changed tab (it shows the number of pending comments)
2. Click it - a popover appears with a summary text area and three radio buttons: **Comment**, **Approve**, **Request changes**
3. Optionally type a summary comment
4. Select your verdict by clicking the radio button
5. Click **Submit review**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. Press `1` to go to the h1 (PR title)
2. Press `B` (or `Tab`) to navigate to the **“Submit review”** button and activate it (`Enter`/`Space`)
3. A “Submit review” dialog/panel appears
4. Switch to Focus Mode (`NVDA+Space`) if prompted to type
5. Optionally type a summary comment in the “markdown value” textbox
6. `Tab` to the “Review Event” radio group
7. Use `↑/↓` to select one of:
   - **Comment** - general feedback, does not block merge
   - **Approve** - you are satisfied; signals merge readiness
   - **Request changes** - must be addressed before merge
8. `Tab` to the “Submit review” button and press `Enter`

</details>
<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. Quick Nav `H` or `VO+Cmd+H` to navigate to the PR title (h1)
2. Quick Nav `B` or `Tab` to find the **"Submit review"** button → `VO+Space`
3. A "Submit review" dialog/panel appears
4. `VO+Shift+Down` to interact with the summary text area, type an optional comment
5. `VO+Shift+Up` to stop interacting, then `Tab` to the "Review Event" radio group
6. `VO+Left/Right` or arrow keys to select:
   - **Comment** - general feedback, does not block merge
   - **Approve** - you are satisfied; signals merge readiness
   - **Request changes** - must be addressed before merge
7. `Tab` to the "Submit review" button → `VO+Space`

</details>
> **Tip from accessibility.github.com:** If you submitted comments as "Add single comment" instead of "Start a review," each comment is already posted individually. The "Submit review" flow is only needed when you chose "Start a review" to batch comments together.

<details>
<summary>GitHub CLI (gh) alternative - reviewing a PR</summary>

Review a pull request from your terminal:

```bash
# View the PR diff in your terminal
gh pr diff 42

# Approve a PR
gh pr review 42 --approve

# Approve with a comment
gh pr review 42 --approve --body "Looks good - heading hierarchy is correct."

# Request changes
gh pr review 42 --request-changes --body "The alt text on line 34 needs to describe the image content."

# Leave a comment-only review (no verdict)
gh pr review 42 --comment --body "A few suggestions - see inline comments."
```

**Note:** `gh pr diff` outputs the full diff to your terminal, which a screen reader can read line by line. For inline comments on specific lines, use the web interface or VS Code.

</details>

### GitHub shortcuts for pull requests

These are the GitHub built-in shortcuts for PR pages. Enable Focus Mode first (NVDA: `NVDA+Space`, JAWS: `Insert+Z`) before using single-key shortcuts.

**On the PR list page:**

| Shortcut | Action |
|---|---|
| `G P` | Jump to the Pull Requests tab from anywhere in the repo |
| `C` | Create a new pull request |
| `Ctrl+/` (Win) or `Cmd+/` (Mac) | Focus the PR search bar |

**Shortcut note:** For `G P`, press `G`, release it, then press `P` (two sequential key presses, not simultaneous).

**On an open pull request:**

| Shortcut | Action |
|---|---|
| `?` | Show all shortcuts for this page |
| `Q` | Request a reviewer |
| `M` | Set a milestone |
| `L` | Apply a label |
| `A` | Set an assignee |
| `R` | Quote selected text in your reply |
| `Ctrl+Shift+P` | Toggle Write and Preview tabs in the comment box |
| `Ctrl+Enter` | Submit comment from inside the text area |

**On the Files Changed tab:**

| Shortcut | Action |
|---|---|
| `T` | Jump to the "Filter changed files" field |
| `C` | Open the commits dropdown to filter which commits are shown |
| `Ctrl+G` (Win) or `Cmd+G` (Mac) | Insert a code suggestion block around selected code |
| `Ctrl+Shift+Enter` (Win) or `Cmd+Shift+Enter` (Mac) | Submit a review comment |

For the full shortcut system, see [Screen Reader Cheat Sheet - GitHub Shortcuts section](appendix-b-screen-reader-cheatsheet.md#github-built-in-keyboard-shortcuts).

### Suggested Changes

A **suggested change** is a special form of inline review comment where the reviewer proposes exact replacement text. The PR author can apply the suggestion directly from GitHub - no copy-paste or separate commit needed.

**As a reviewer - inserting a suggestion:**
1. On the Files Changed tab, navigate to the line you want to propose a change for
2. Activate the **line comment button** for that line (the `+` that appears on hover, or Tab to navigate to it)
3. In the comment text area that opens, press `Ctrl+G` (Windows) or `Cmd+G` (Mac)
4. GitHub wraps a suggestion block around the current line content:
   ````
   ```suggestion
   the current line content here
   ```
   ````
5. Edit the text inside the suggestion block to show your proposed change
6. Add context above the block if helpful: "This makes the alt text more descriptive:"
7. Submit as part of your review ("Start a review" → batch with other comments)

**Screen reader note:** The suggestion block is plain Markdown text in the comment editor. Type it directly:
```
```suggestion
your proposed text here
```
```
(Three backticks, the word `suggestion`, Enter, your text, Enter, three backticks.)

**As an author - applying a suggestion:**
1. Open the PR Conversation or Files Changed tab
2. Navigate to the inline comment containing a suggestion (it shows a diff-style preview)
3. Find and activate the **"Apply suggestion"** button below the suggestion block
4. GitHub creates a commit automatically that applies the change - no file editing required
5. The conversation thread is marked as resolved

**Batching multiple suggestions into one commit:**
1. For each suggestion you want to apply, activate **"Add suggestion to batch"** instead of "Apply suggestion"
2. After selecting all suggestions, activate the **"Commit suggestions"** button that appears at the top
3. GitHub applies all batched suggestions in a single commit

**When to use suggestions vs. comments:**
- Use a suggestion when you know the exact text that would fix the issue
- Use a plain comment when the change requires judgment from the author (e.g., "this alt text isn't descriptive - can you describe what the image shows?")

1. After adding all your inline comments, navigate to the review summary button
2. On Files Changed tab: find the "Review changes" button (B to navigate buttons)
3. Press Enter to open the review dialog
4. A panel opens:
   - A summary text area for overall comments
   - Radio buttons for Comment / Approve / Request changes
5. Switch to Focus Mode → type your summary comment
6. Navigate to the radio buttons with arrow keys → select your verdict
7. Tab to "Submit review" button → Enter

---

## Understanding Merge Options (for Maintainers)

When a PR is approved and checks pass, a maintainer can merge it. The merge button section appears at the bottom of the Conversation tab.

```
Step 1: Navigate to the bottom of the Conversation tab
Step 2: Find "Merge pull request" button (or similar)
Step 3: A dropdown arrow next to the button offers strategy options:
   - Create a merge commit
   - Squash and merge
   - Rebase and merge
Step 4: Choose strategy → activate the button
Step 5: Confirm in the dialog that appears
```

<details>
<summary>GitHub CLI (gh) alternative - merging a PR</summary>

Merge a pull request from your terminal:

```bash
# Merge with default strategy (merge commit)
gh pr merge 42

# Squash and merge
gh pr merge 42 --squash

# Rebase and merge
gh pr merge 42 --rebase

# Delete the branch after merging
gh pr merge 42 --squash --delete-branch

# Enable auto-merge (merges when checks pass)
gh pr merge 42 --auto --squash
```

</details>

**After a PR is merged:**
- The PR status badge changes to "Merged" (purple)
- The source branch can be deleted - a "Delete branch" button appears
- Any linked issues with `Closes #N` in the description are automatically closed

---

## Auto-Merge - Merging When You Can't Wait Around

**Auto-merge** lets you pre-authorize a PR to merge automatically the moment all branch protection requirements are satisfied - required reviews approved, all status checks passing, and the branch up to date.

This is especially useful when:
- You've addressed all review comments and are waiting for CI to finish
- A maintainer has approved the PR but a required check is still running
- You're in a different time zone from the reviewers

### Enabling Auto-Merge on Your PR

```
1. Open your PR → scroll to the merge box at the bottom
2. Tab to the merge button dropdown arrow (next to "Merge pull request")
3. Select "Enable auto-merge"
4. Choose your merge strategy (squash, rebase, or merge commit)
5. Confirm in the dialog - the merge box now shows "Auto-merge enabled"
```

**Screen reader path:**
```
Conversation tab → End key → merge box region
Tab → dropdown button (announced as "Select merge method" or similar)
Enter → arrow keys through options → "Enable auto-merge" → Enter
Dialog: Tab → confirm button → Enter
```

**What happens next:**
- The PR merge box changes to show "Auto-merge enabled - merge will happen automatically"
- When the last required check passes (or last required review arrives), GitHub merges the PR silently
- You receive a notification: "Your PR was automatically merged"
- If a reviewer requests changes after auto-merge is enabled, auto-merge is automatically cancelled (a new approval is required before it re-enables)

### Cancelling Auto-Merge

```
Merge box → Tab → "Disable auto-merge" button → Enter
```

> **Note:** Auto-merge is only available if the repository administrator has enabled it in Settings → General. Many open source repos have it on; some do not.

---

## Practical Scenarios

### Scenario A: "I want to review an assigned PR"

**Example:** You are assigned to review a PR titled "Add missing NVDA shortcut to keyboard-shortcuts.md." The PR modifies `docs/keyboard-shortcuts.md` in the Learning Room repository and references Challenge 2.

```
1. Notifications → open the PR notification
2. D → PR tabs → Files changed tab
3. T → enter the first diff table → navigate lines with arrow keys
4. Check: does the new shortcut appear in the correct NVDA table? Is the table formatting preserved?
5. For each concern: activate the line comment button → type comment → Start a review
6. D → PR tabs → Conversation → scroll to bottom
7. B → "Review changes" button → type summary → select verdict → Submit review
```

### Scenario B: "I want to respond to review feedback on my PR"

**Example:** Your PR for Challenge 3 (Complete Welcome Guide) received a review comment: "The [TODO] about evaluating issues is good, but the paragraph could mention checking if the issue is already assigned." The validation bot also flagged a link text issue.

```
1. Open your PR (Notifications → PR link, or find it in PR list)
2. 3 to navigate review comments
3. For the reviewer's comment: read it → Tab to "Reply" → Focus Mode → type "Good point - I will add a sentence about checking assignees. Pushing a fix now."
4. For the bot's link text flag: fix the link in docs/welcome.md, commit, and push
5. When all addressed: Tab to "Re-request review" button → Enter
```

### Scenario C: "My PR has a merge conflict"

```
1. You will see a "This branch has conflicts that must be resolved" message near the bottom
2. Tab to "Resolve conflicts" button → GitHub opens a web conflict editor
3. The editor shows conflict markers - see Merge Conflicts guide (06-merge-conflicts.md)
4. Edit the file to resolve → Mark as resolved → Commit merge
```

---

## Common PR Mistakes to Avoid

| Mistake | Better Approach |
|---------|----------------|
| Opening a PR without an associated issue | Link to or create an issue first; comment "I'd like to work on this" |
| A vague title like "Fix things" | Be specific: "Fix missing alt text on homepage hero image" |
| Missing the PR template sections | Fill all sections - description, testing, related issues |
| Pushing many unrelated changes in one PR | One PR per logical change (smaller PRs get faster reviews) |
| Not testing your own changes | Test before requesting review |
| Not responding to reviewer comments | Acknowledge all comments, even if you disagree |

---

## Try It: Read a Real Pull Request

**Time:** 3 minutes | **What you need:** Browser, signed in to GitHub

Go to the Learning Room repository's Pull Requests tab and find any open or recently closed PR:

1. Navigate to Pull Requests (`G` then `P` in Focus Mode)
2. Open the first PR in the list (press `Enter` on its title)
3. **Read the description** - press `2` to jump to the first section heading, then arrow down to read. Look for: which file was changed (`docs/welcome.md`, `docs/keyboard-shortcuts.md`, or `docs/setup-guide.md`)? Which challenge was this PR solving? Does the description reference `Closes #XX`?
4. **Check the conversation** - press `3` to jump between comments. Read what the validation bot reported - did the bot find any accessibility issues like broken headings or non-descriptive links? How did the author respond?
5. **Look at the diff** - press `D` to the "Pull request tabs" landmark, then navigate to "Files changed" and press `Enter`. Press `H` to scan the changed file headings. If the PR touched `docs/welcome.md`, you should see `+` lines where the `[TODO]` sections were filled in. If it touched `docs/keyboard-shortcuts.md`, you should see new rows added to a shortcut table.

**You're done.** You just read a complete PR - description, conversation, and code changes.

> **What success feels like:** You followed a PR from description to diff using only headings and landmarks. The next time you open a PR - yours or someone else's - you'll know exactly where everything is.

---

> ### Day 2 Amplifier - Accessibility Agents: `@pr-review`
>
> **Review at least two pull requests manually before using any agent.** A review generated by `@pr-review` is only as useful as your ability to read, edit, and challenge it. The agent writes a first draft - you supply the context, the history, and the final judgment that no diff can contain.
>
> Once you have mastered manual pull request review:
> - **In VS Code** - `@pr-review review PR #N` generates line-numbered diffs with change maps, risk assessment, before/after snapshots, CI results, and suggested inline comments - a documented starting point for your own review, not a replacement for it
> - **In your repo** - Accessibility Agents' review capabilities work across every repository you have access to by default; fork `accessibility-agents` and those capabilities travel with your project from day one
> - **In the cloud** - GitHub Agentic Workflows can auto-generate PR descriptions, verify linked issues, and post accessibility impact summaries on a `pull_request` trigger - running the moment a PR is opened, whether or not anyone is watching
>
> *The agent documents the diff. You bring the context that no diff can contain.*

---

*Next: [Merge Conflicts](06-merge-conflicts.md)*
*Back: [Working with Issues](04-working-with-issues.md)*
*Related: [Accessible Code Review](14-accessible-code-review.md) | [Screen Reader Cheat Sheet](appendix-b-screen-reader-cheatsheet.md) | [Culture & Etiquette](07-culture-etiquette.md) | [GitHub Actions](appendix-q-github-actions-workflows.md)*
