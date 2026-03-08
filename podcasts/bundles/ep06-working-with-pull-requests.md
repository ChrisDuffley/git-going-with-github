# Git Going with GitHub - Audio Series

## Episode 6: Working with Pull Requests

**Series:** Git Going with GitHub
**Episode:** 6 of 44
**Audience:** Blind and low-vision developers learning GitHub and open source
**Estimated length:** 15-18 min


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

- What a pull request is and how it differs from an issue
- The lifecycle: draft, open, review, approve, merge
- Creating a pull request from a fork or branch
- Reviewing someone else's pull request
- Understanding merge options: merge commit, squash, rebase
- Draft pull requests and when to use them


### Concept Coverage Checklist

Every concept below MUST be explained during the episode. Do not skip any.
When a concept is complex, use an analogy or real-world comparison to make it concrete.

- [ ] **What a pull request is: a proposal to merge changes from one branch into another**
- [ ] **The difference between an issue and a pull request**
- [ ] **PR anatomy: title, body, commits, files changed, reviewers, labels**
- [ ] **Creating a pull request from a fork (cross-repository)**
- [ ] **Creating a pull request from a branch (same repository)**
- [ ] **Writing a good PR description: what changed, why, and how to test**
- [ ] **The PR timeline: comments, reviews, status checks, merge**
- [ ] **Requesting a review from someone**
- [ ] **Reviewing a pull request: reading the diff**
- [ ] **What additions (green/+) and deletions (red/-) mean in a diff**
- [ ] **Leaving inline comments on specific lines**
- [ ] **Submitting a review: approve, request changes, or comment**
- [ ] **Status checks and what they mean for merging**
- [ ] **Merge options: merge commit, squash and merge, rebase and merge**
- [ ] **When to use each merge strategy**
- [ ] **Draft pull requests: signaling work in progress**
- [ ] **Converting a draft to ready for review**
- [ ] **Using gh pr commands from the terminal as an alternative**

### Prerequisites (briefly recap these)

Listeners may have heard these earlier episodes. Briefly remind them of:

- Episode 5: Issues and how they connect to PRs
- Episode 3: Branches and what they are for

### Cross-Referenced Material

The following supplementary content is included after the primary source.
Reference it naturally when a concept would benefit from additional context,
but keep the main narrative focused on the primary chapter.

- Accessible Code Review - diff navigation and review habits

### Primary Source Material

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


## The Pull Request List Page

The PR list works identically to the Issues list:
- `3` to navigate PR titles (they are h3 headings)
- `I` to navigate list items
- `F` or `E` / `Shift+E` to reach the search/filter field
- Filters work the same as Issues: `is:open`, `author:@me`, `review-requested:@me`, etc.

> **Screen reader note - PR list semantics:** The PR list does **not** have individual ARIA item containers with per-item semantics. To read a PR's full detail (title, author, labels, status), you must navigate sequentially with `Tab` or arrow keys through the elements for each item. Starting from a PR title link, `Tab` forward to find the author, labels, and review status for that same PR before moving to the next title.
>
> **Hovercards:** Hovercards appear when you hover over usernames and links in the PR list, adding extra verbosity. To reduce this noise: go to your GitHub Profile → Accessibility settings → disable "Show link previews" and similar hover triggers. This makes sequential navigation significantly less cluttered.


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


## Reading the Commits Tab

```
Step 1: Navigate to Commits tab (D → PR tabs → Enter)
Step 2: 3 to navigate date group headings ("Commits on April 20")
Step 3: I to navigate individual commits within a date group
Step 4: Each commit: SHA link, message, author, [Verified] badge if signed
Step 5: Enter on a commit to open its diff
```


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
3. The editor shows conflict markers - see Merge Conflicts guide (07-merge-conflicts.md)
4. Edit the file to resolve → Mark as resolved → Commit merge
```


## Common PR Mistakes to Avoid

| Mistake | Better Approach |
|---------|----------------|
| Opening a PR without an associated issue | Link to or create an issue first; comment "I'd like to work on this" |
| A vague title like "Fix things" | Be specific: "Fix missing alt text on homepage hero image" |
| Missing the PR template sections | Fill all sections - description, testing, related issues |
| Pushing many unrelated changes in one PR | One PR per logical change (smaller PRs get faster reviews) |
| Not testing your own changes | Test before requesting review |
| Not responding to reviewer comments | Acknowledge all comments, even if you disagree |


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


*Next: [Merge Conflicts](07-merge-conflicts.md)*
*Back: [Working with Issues](04-working-with-issues.md)*
*Related: [Accessible Code Review](14-accessible-code-review.md) | [Screen Reader Cheat Sheet](appendix-b-screen-reader-cheatsheet.md) | [Culture & Etiquette](08-culture-etiquette.md) | [GitHub Actions](appendix-q-github-actions-workflows.md)*



### Supplementary: Accessible Code Review - diff navigation and review habits

# Accessible Code Review
> **Listen to Episode 15:** [Accessible Code Review](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Conducting Pull Request Reviews with a Screen Reader

> This guide is focused entirely on the **reviewer experience** - navigating diffs, reading changes, leaving comments, and submitting a review - using only your keyboard and screen reader. For the full pull request lifecycle (opening PRs, merge options, conflict resolution), see [Working with Pull Requests](06-working-with-pull-requests.md).
>
> **Learning Room connection:** The exercises in this chapter use files from the Learning Room repository. You will review PRs that modify `docs/keyboard-shortcuts.md` (shortcut tables with intentional errors), `docs/setup-guide.md` (broken links and incomplete steps), and `docs/welcome.md` (`[TODO]` sections to complete). These are the same files you work on during the Day 1 contribution sprint.


## Prerequisites Checklist

**Before starting this chapter, verify you have completed:**

- [ ] Chapter 6: [Working with Pull Requests](06-working-with-pull-requests.md) - Understand PR structure, diffs, and comment workflows
- [ ] Chapter 13: [GitHub Copilot](13-github-copilot.md) - VS Code installed and configured
- [ ] Screen Reader Setup - NVDA, JAWS, or VoiceOver installed and ready to use
- [ ] Access to at least one pull request to review (your own fork or a practice repo)

**Estimated time for this chapter:** 1 hour (including exercises)


## Two Environments for Code Review

You can review pull requests in two places - each with different strengths:

| Environment | Best For | Key Accessibility Feature |
|-------------|----------|--------------------------|
| GitHub web (browser) | Quick reviews, inline comments on any machine | New Files Changed Experience + keyboard navigation |
| VS Code | Deep reviews, large diffs, local context | Accessible Diff Viewer (`F7`) |

Both environments give you full keyboard and screen reader access. Your choice depends on context, not accessibility.

<details>
<summary>GitHub CLI (gh) alternative - review from your terminal</summary>

The GitHub CLI offers a third path for reviewing PRs - especially useful for reading diffs and submitting verdicts:

```bash
# View the full PR diff in your terminal
gh pr diff 42

# View PR details (description, status, checks)
gh pr view 42

# Checkout the PR branch locally for testing
gh pr checkout 42

# Approve the PR
gh pr review 42 --approve --body "Heading hierarchy looks correct. LGTM."

# Request changes
gh pr review 42 --request-changes --body "The alt text on line 34 needs to describe the image."

# Leave a comment-only review
gh pr review 42 --comment --body "A few observations - see details below."
```

**Best for:** Quickly reading diffs, approving/rejecting PRs, and checking out branches for local testing. For inline comments on specific lines, use the web interface or VS Code.

</details>


## Part 1 - Reviewing on GitHub.com

### Good News: Modern Interface is Default

As of January 2026, GitHub's improved Files Changed experience is enabled by default. The instructions below assume you have the modern interface (which you do).

If the interface seems different from what's described here, clear your browser cache and reload the page.


### Step 1: Reach the Files Changed Tab

From any pull request page:

<details>
<summary>Visual / mouse users</summary>

Click the **Files changed** tab at the top of the PR page. The tab label shows the number of changed files (e.g., "Files changed 4").

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Press D → navigate to "Pull request navigation tabs" landmark
Press → or Tab → find "Files changed" link → Enter
```

The tab label announces the number of changed files: *"Files changed, 4 files changed"*

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

```
VO+U → Landmarks → navigate to "Pull request navigation tabs"
VO+Right or Quick Nav K → find "Files changed" link → VO+Space
```

VoiceOver announces the number of changed files: *"Files changed, 4 files changed"*

</details>


### Step 2: Use the File Tree to Orient Yourself

The file tree panel lists every changed file. Before reading any diff, scan this list to understand the scope of the PR.

<details>
<summary>Visual / mouse users</summary>

The file tree is the left panel on the Files Changed page. Each file shows its name and a `+N / -N` badge (lines added/removed). Click any filename to scroll directly to its diff.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Press D → navigate to "File tree" region
Press ↓ to move through files
Each file reads: "[filename] - [N additions, N deletions]"
Press Enter on a file to scroll its diff into view
```

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

```
VO+U → Landmarks → navigate to "File tree" region
VO+Down to move through files
Each file reads: "[filename] - [N additions, N deletions]"
VO+Space on a file to scroll its diff into view
```

</details>

**What to listen for / look for:**
- How many files changed?
- Which areas of the codebase are affected?
- Are there unexpected files (generated files, lock files, configuration changes)?


### Step 3: Navigate Between File Diffs

Each changed file in the main area is an `h3` heading containing the filename.

<details>
<summary>Visual / mouse users</summary>

Scroll through the page or click a filename in the file tree on the left. Collapsed files can be expanded by clicking the file header.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Press 3 to jump file-by-file through the diff
Listen for: "learning-room/docs/keyboard-shortcuts.md - collapsed" or "expanded"
Press Enter or Space to expand a collapsed file
```

If a diff is very long, the file tree is usually faster than pressing `3` repeatedly.

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

```
Quick Nav H or VO+Cmd+H to jump file-by-file through the diff
Listen for: "learning-room/docs/keyboard-shortcuts.md - collapsed" or "expanded"
VO+Space to expand a collapsed file
```

If a diff is very long, the file tree is usually faster than using heading navigation.

</details>


### Step 4: Read a Diff

Each file's diff is a table. Every row is one line of code.

<details>
<summary>Visual / mouse users</summary>

- **Green highlighted lines** (with a `+`) = lines added
- **Red highlighted lines** (with a `-`) = lines removed
- **Plain/white lines** = unchanged context
- Use `Ctrl+F` to search within the page for specific text in the diff

</details>

<details>
<summary>Screen reader users - NVDA</summary>

```
Press T to jump to the diff table → Insert+Space (Focus Mode)
Press ↓ to move through lines one at a time
Press Ctrl+Alt+→ to read across columns: [line number] | [change type] | [code content]
```

</details>

<details>
<summary>Screen reader users - JAWS</summary>

```
Press T to jump to the diff table → Insert+Z (Virtual PC Cursor off)
Press ↓ to move through lines
Press Ctrl+Alt+→ for column-by-column reading
```

</details>

<details>
<summary>Screen reader users - VoiceOver (macOS)</summary>

```
Press T or VO+U → Tables → select the diff table
VO+Shift+↓ to enter the table
VO+→/← to navigate columns, VO+↑/↓ to navigate rows
```

</details>

**What each line announces / shows:**
- Added lines: `"+ [code content]"` - or announced as "inserted"
- Removed lines: `"- [code content]"` - or announced as "deleted"
- Context lines: code without a `+` or `-`

**Tip:** If the code on a line is very long, the screen reader will read the full line. For minified or generated files, consider collapsing the file in the tree and skipping it.


### Step 5: Place an Inline Comment

When you have a specific observation about a particular line, place an inline comment directly on it.

<details>
<summary>Visual / mouse users</summary>

1. Hover your mouse over a line in the diff - a **blue `+`** (comment) button appears on the left
2. Click it to open the inline comment box
3. Type your comment
4. Click **"Start a review"** (not "Add single comment" - see note below)

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Step 1: Navigate to the target line in the diff table (see Step 4)
Step 2: While focused on that line, press Tab → look for a comment button
Step 3: Alternatively: press B to navigate buttons → look for "Add a comment to this line"
Step 4: Press Enter to open the inline comment box
Step 5: Insert+Space (NVDA) or Insert+Z (JAWS) → switch to Focus Mode
Step 6: Type your comment
Step 7: Tab to "Start a review" button (not "Add single comment" - see note below)
Step 8: Press Enter
```

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

```
Step 1: Navigate to the target line in the diff table (see Step 4)
Step 2: While focused on that line, Tab → look for a comment button
Step 3: Alternatively: Quick Nav B → look for "Add a comment to this line"
Step 4: VO+Space to open the inline comment box
Step 5: VO+Shift+Down to interact with the text area
Step 6: Type your comment
Step 7: VO+Shift+Up to stop interacting → Tab to "Start a review" button
Step 8: VO+Space
```

</details>

> **Why "Start a review" instead of "Add single comment":** A single comment posts immediately and sends a notification for each one. "Start a review" batches all your comments and sends one notification when you submit - far less disruptive for the author.

**Placing a multi-line comment:**

<details>
<summary>Visual / mouse users</summary>

Click and drag across multiple line numbers in the diff gutter to select a range. A comment button appears for the selected range.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Step 1: Navigate to the first line of the range
Step 2: Press Shift+↓ to extend selection to additional lines
Step 3: A comment button appears for the selected range
Step 4: Proceed as above
```

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

```
Step 1: Navigate to the first line of the range
Step 2: Shift+↓ to extend selection to additional lines
Step 3: A comment button appears for the selected range
Step 4: VO+Space to activate, then proceed as above
```

</details>


### Step 6: Read Existing Comments and Threads

Inline comments from other reviewers appear as `h3` headings within the diff table. Each thread shows: reviewer username, comment body, replies, a "Reply" link and resolution button.

<details>
<summary>Visual / mouse users</summary>

Comments appear inline within the diff as collapsible cards. Click **"Reply…"** to add to a thread. Click **"Resolve conversation"** to mark a thread done (requires write access).

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

Navigate them with `3` (jump to `h3` headings in the diff).

To add to a thread:
```
Step 1: Navigate to the thread heading (3)
Step 2: Tab to "Reply…" link
Step 3: Enter → text area appears → Focus Mode → type reply
Step 4: Ctrl+Enter to submit the reply
```

To mark a thread as resolved (if you have write access):
```
Tab to the "Resolve conversation" button → Enter
```

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

Navigate with Quick Nav `H` or `VO+Cmd+H` (jump to headings in the diff).

To add to a thread:
```
Step 1: Quick Nav H to navigate to the thread heading
Step 2: Tab to "Reply…" link
Step 3: VO+Space → text area appears → VO+Shift+Down → type reply
Step 4: Cmd+Return to submit the reply
```

To mark a thread as resolved (if you have write access):
```
Tab to the "Resolve conversation" button → VO+Space
```

</details>


### Step 7: Submit Your Review

After adding all inline comments:

<details>
<summary>Visual / mouse users</summary>

1. Click the **"Review changes"** button (top-right of the Files Changed page or bottom of the PR)
2. A dialog opens with a summary text area and three radio buttons: Comment / Approve / Request changes
3. Optionally type an overall summary in the text area
4. Select your verdict
5. Click **"Submit review"**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Step 1: Press D → navigate to "Pull request navigation tabs"
Step 2: Press ← to return to the Conversation tab → Enter
Step 3: Scroll to the bottom (End key, or ↓ repeatedly)
Step 4: Alternatively: press B repeatedly → find "Review changes" button
Step 5: Press Enter to open the review summary dialog
Step 6: Focus Mode → type your overall comment
Step 7: Tab to the radio button group → ↑/↓ to select a verdict
Step 8: Tab to "Submit review" button → Enter
```

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

```
Step 1: VO+U → Landmarks → navigate to "Pull request navigation tabs"
Step 2: VO+Left to return to the Conversation tab → VO+Space
Step 3: VO+End or VO+Down to reach the bottom of the page
Step 4: Alternatively: Quick Nav B → find "Review changes" button
Step 5: VO+Space to open the review summary dialog
Step 6: VO+Shift+Down → type your overall comment
Step 7: VO+Shift+Up → Tab to the radio button group → VO+Left/Right to select a verdict
Step 8: Tab to "Submit review" button → VO+Space
```

</details>

**Verdicts and their meaning:**

| Verdict | When to use |
|---------|-------------|
| Comment | You have observations but no strong position; does not block merge |
| Approve | You've reviewed and are satisfied; signals readiness to merge |
| Request changes | Changes are needed before this should merge; blocks merge |


### Step 8: Re-request Review (for Authors)

After you address review comments on your own PR:

<details>
<summary>Visual / mouse users</summary>

Look in the right sidebar for the **Reviewers** section. Click the **re-request icon** (circular arrows) next to the reviewer's name to notify them that you've pushed changes.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Step 1: From your PR's Conversation tab, find the reviewer's name in the sidebar (3 → "Reviewers" heading)
Step 2: Activate the refresh/re-request icon next to their name
Step 3: This re-notifies the reviewer that you've made changes
```

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

```
Step 1: From your PR's Conversation tab, Quick Nav H or VO+Cmd+H to find the "Reviewers" heading in the sidebar
Step 2: Tab or Quick Nav B to find the re-request icon ("Re-request review") next to the reviewer's name
Step 3: VO+Space to activate - this re-notifies the reviewer that you've made changes
```

</details>


## Part 2 - Reviewing in VS Code with the Accessible Diff Viewer

When you check out a branch locally, VS Code's diff editor offers the **Accessible Diff Viewer** - a purpose-built, line-by-line reading mode designed specifically for screen readers.

### Opening a Diff in VS Code

If you have the GitHub Pull Requests extension:
1. Open the GitHub Pull Requests view (Explorer sidebar or Ctrl+Shift+P → "GitHub Pull Requests: View Pull Request")
2. Find the PR and open it - changed files appear in the file tree
3. Navigate to any file in the tree and press `Enter` to open its diff view

Without the extension, any `git diff` operation also opens the diff editor.

### Using the Accessible Diff Viewer (`F7`)

From any open diff editor:

```
Press F7 → Accessible Diff Viewer opens as a panel below the diff
```

The Accessible Diff Viewer reads each change as a structured block:

```
"Changed lines 14 to 14 in docs/keyboard-shortcuts.md
[Change 1 of 3]

Removed:
    #### NVDA Single-Key Navigation

Added:
    ### NVDA Single-Key Navigation"
```

This example is from a real Learning Room scenario: a contributor fixing the heading hierarchy in `docs/keyboard-shortcuts.md` by changing a level-4 heading to level-3, which is exactly what you look for when reviewing Challenge 2 PRs.

**Navigation:**
- `F7` - jump to next change (next hunk)
- `Shift+F7` - jump to previous change
- `Alt+F2` - open VS Code's Accessible View for additional context on the current item
- `Escape` - close the Accessible Diff Viewer

**What makes this better than the raw diff editor:**
- Each change is announced as a discrete unit with clear "Removed:" and "Added:" labels
- You hear the change number of total changes ("Change 3 of 12")
- No table navigation required - purpose-built for sequential listening
- Works with all three major screen readers without any special configuration

### Placing Comments in VS Code (GitHub PR Extension)

From the diff editor with the GitHub PR extension:
```
Step 1: In the diff gutter, navigate to the line you want to comment on
Step 2: Ctrl+Shift+P → "GitHub Pull Requests: Add Comment"
Step 3: Or press Shift+F10 (Windows) or Control+Return (macOS) on the line → context menu → "GitHub Pull Requests: Add Comment"
Step 4: A text area opens - type your comment
Step 5: Submit from the inline UI
```

Comments placed in VS Code sync to GitHub - they appear in the PR's Files Changed tab and the author receives the same notification.


## Code Review Structure and Content

### The Anatomy of a Useful Review Comment

A comment that helps the author is:
1. **Specific** - link to the exact line and name the pattern you see
2. **Educational** - say *why* something matters, not just what to change
3. **Graduated** - signal whether this is blocking, or a preference

**Blocking example (reviewing a PR for `docs/keyboard-shortcuts.md`):**
> "The heading on line 34 uses `####` (level 4) directly after `##` (level 2), skipping heading level 3. Screen reader users who navigate by heading level will miss any content between those two levels. Please change `####` to `###` before this merges."

**Non-blocking (nit) example (reviewing a PR for `docs/welcome.md`):**
> "nit: The link text in the 'Getting Help' section reads 'click here for more information.' Screen reader users who navigate links out of context will hear only 'click here' with no destination. Consider 'See the accessibility setup guide' instead. Not blocking."

**Question example (reviewing a PR for `docs/setup-guide.md`):**
> "The PR description says this fixes broken links in the setup guide, but the link on line 12 still points to `/docs/old-setup`. Am I reading the diff correctly, or was this link intentionally left? Happy to re-review once I understand."

### Prefixes That Set Expectations

Using shorthand prefixes helps authors parse many comments quickly:

| Prefix | Meaning |
|--------|---------|
| `nit:` | Non-blocking stylistic preference |
| `question:` | Genuine question; not blocking |
| `suggestion:` | Alternative to consider; take it or leave it |
| `important:` | Should be addressed; may block |
| `blocking:` | Must be addressed before merge |
| `praise:` | Positive callout - works well, good pattern |

### How Many Comments Is Too Many?

There is no hard limit, but quantity without prioritization is noise. If you have 15 comments, make clear which 2-3 are blocking. Authors can then focus energy on what matters most and address preferences in follow-up PRs.


## Keyboard Reference

### GitHub Web Review

| Action | Key |
|--------|-----|
| Navigate to Files Changed tab | `D` → PR tabs landmark → `→` → `Enter` |
| Jump between file diffs | `3` |
| Navigate diff lines (NVDA/JAWS) | Focus Mode + `↓` |
| Read across diff columns | `Ctrl+Alt+→` |
| Open inline comment box | Line focused → `B` → comment button |
| Submit entire review | `D` → Conversation → `B` → "Review changes" |
| Navigate existing threads | `3` |
| Reply to a thread | `3` → thread → `Tab` → "Reply" → `Enter` |

### VS Code Accessible Diff Viewer

| Action | Key |
|--------|-----|
| Open Accessible Diff Viewer | `F7` |
| Next change (hunk) | `F7` |
| Previous change (hunk) | `Shift+F7` |
| Open Accessible View | `Alt+F2` |
| Accessible Help (any widget) | `Alt+H` |
| Close Accessible Diff Viewer | `Escape` |


## Common Review Scenarios

### "I want to verify the PR only changes what it claims"

**Example:** A PR says "Challenge 2: Add NVDA shortcut" but the file tree shows changes to both `docs/keyboard-shortcuts.md` and `docs/welcome.md`.

```
1. File tree → count the files, read the names
2. 3 → navigate each file heading → listen to the stats line (N additions, N deletions)
3. For keyboard-shortcuts.md: T → Focus Mode → ↓ through lines → verify the new shortcut row
4. For welcome.md: check if the change is related → if unrelated, leave a comment on the first line
```

### "I want to find all changes to one specific section"

**Example:** A PR for Challenge 3 modified `docs/welcome.md`. You want to verify the `[TODO]` in the "Who Can Contribute?" section was filled in correctly.

```
1. In VS Code: open docs/welcome.md → Ctrl+G → jump to the "Who Can Contribute?" section
2. F7 → Accessible Diff Viewer → listen for changes near that heading
3. Or on GitHub: file tree → expand welcome.md → T → navigate the diff table to the [TODO] line
```

### "I agreed but then the author made more changes - did anything new appear?"

```
1. Go to the Commits tab (D → PR tabs → "Commits" → Enter)
2. 3 to navigate commits - find any commits after your last review
3. Press `Enter` on the commit to see only what changed in that push (not the full diff)
```

### "A reviewer left a comment I don't understand"

```
1. Read the full thread (3 → navigate to the thread heading)
2. Tab to the "Reply" button
3. Ask: "Can you clarify what change you're suggesting? I want to understand before I act on this."
4. Or: reference a specific line in your reply using the line number
```


## Exercises

These exercises use the files in `learning-room/docs/` in this repository. All examples involve documentation changes - no code required.


### Exercise A - Complete a Web Review

**Scenario:** A contributor has submitted a pull request titled "Add screen reader tips to the setup guide." The PR modifies `learning-room/docs/setup-guide.md`. Your job is to review it before it merges.

**What You'll Learn:** How to use screen reader heading navigation to spot accessibility issues in a GitHub PR diff.


#### Step 1: Navigate to the Pull Request

**What to do:**
1. Open GitHub in your browser and navigate to the workshop repository (`github.com/[your-fork]/[workshop-repo]` or `community-access/accessibility-agents`)
2. Click the **Pull Requests** tab (top navigation)
3. Look for a PR titled "Add screen reader tips to the setup guide" - click it to open
4. You should now see the PR page with sections: Conversation, Commits, Files Changed

**How to know you're in the right place:**
- The PR title is visible at the top
- You see a description box with text about what this PR does
- You see tabs labeled "Conversation," "Commits," "Files Changed"

**If you can't find the PR:**
- Use `Ctrl+F` to search the PR list for "screen reader tips"
- Or ask in the workshop Slack - someone can share the exact URL


#### Step 2: Read the PR Description

**What to do:**
1. You are currently on the **Conversation** tab
2. Read the PR description (the text immediately under the PR title)
3. Look for: "What does this PR change?" and "Why does it change it?"
4. **With screen reader:** Navigate to the description with `D` (NVDA) or press `Ctrl+Option+Up` (VoiceOver) to find main landmarks, then read the content region

**What to look for:**
- Does the PR author explain what file changed? (should mention `setup-guide.md`)
- Does it explain why? (should mention "improve accessibility" or "add tips")
- Is it clear enough that a reviewer can understand the goal without reading the diff?

**What success looks like:**
- You can answer: "This PR adds [specific content] to [specific file] because [clear reason]"
- Example: "This PR adds screen reader usage tips to the setup guide because new users need accessibility guidance"


#### Step 3: Navigate to "Files Changed"

**What to do:**
1. Click the **Files Changed** tab (top of the PR page, to the right of "Commits")
2. You are now viewing the diff
3. **With keyboard (all screen readers):** Press `T` to jump to the diff table. The page focuses on the file comparison area.

**What you should see:**
- A section showing the file name `setup-guide.md` with a small badge showing "+20 −0" (20 lines added, 0 lines removed)
- Below it, the diff with removed lines (preceded by `−`) and added lines (preceded by `+`)

**If you see multiple files:**
- Scroll up to see if there are other files. For this exercise, only `setup-guide.md` should be changed.
- If you see other files, confirm they are not modified (the badge should show "+0 −0" or no changes)


#### Step 4: Activate Focus Mode for Better Diff Reading

**What to do:**
1. Look for a button labeled "Focus Mode" or an icon (usually at the top right of the diff area)
2. **With keyboard:** Press `F` to toggle Focus Mode (may need to be in the diff area first)
3. **With mouse:** Click the Focus Mode button/icon

**What happens in Focus Mode:**
- The page simplifies: sidebars disappear
- Only the diff is visible - easier for screen reader navigation and less cognitive load
- The diff is now the main content area

**With screen reader (once in Focus Mode):**
- NVDA/JAWS: Press `T` to jump to the diff table
- VoiceOver: Navigate with `VO+Right Arrow` to find the table/content region
- Read through the changes: `↓` arrow moves to each line


#### Step 5: Find the Heading Hierarchy Issue

**What to do:**
1. **Read through the entire diff** line by line. Pay special attention to lines starting with `#`
2. You are looking for: a line with `####` (four hashes, heading level 4) that comes *directly after* a `##` (two hashes, heading level 2)
3. When you find it, **note the exact line number** shown in the diff

**Example of what you're looking for:**
```
  ## Setup Basics          ← Heading level 2
  ...several lines...
  #### Advanced Tips       ← Heading level 4 (skipped level 3!)
```

**Why this matters:**
- Screen reader users navigate documents by heading level: `1` → `2` → `3` → `4`
- A skip from `##` to `####` breaks that navigation
- When a user presses "jump to heading level 3," they'll find none, wondering if content is missing

**What success looks like:**
- You found the line with `####` that violates hierarchy
- You can say the line number and what heading text appears there
- You understand *why* this is an accessibility problem


#### Step 6: Place a Blocking Review Comment on the Heading

**What to do:**
1. Find the diff line with the problematic `####` heading
2. **Hover your mouse over the line number** on the left side of that line (or if using keyboard, navigate to that line in the table)
3. A button should appear (or press the Add Comment hotkey - usually `C` in GitHub)
4. Click it or press `Enter` to open a comment box

**In the comment box:**
1. Type: `blocking:` (tells reviewers this stops the PR from merging)
2. Press Space, then explain:
   ```
   Heading hierarchy violation. This heading uses #### (level 4) directly 
   after ## (level 2), skipping level 3. Screen reader users navigating 
   by heading level will miss this section. Change to ### (level 3).
   ```
3. Click the **Comment** button (or press `Ctrl+Enter` for keyboard submit)

**What happens next:**
- Your comment appears in the thread under that line
- The PR author sees it and can make the fix

**If the comment button doesn't appear:**
- Make sure you're hovering over the *line number* area (left side of the line)
- Try refreshing the page and trying again
- Or use the "Add a reply" field at the bottom of the PR and mention the line number manually


#### Step 7: Find the Link Text Issue

**What to do:**
1. **Continue reading the diff** (from where you left off)
2. Look for a line containing link text that reads `"click here"` or `"click here for more information"`
3. **Note the line number**

**Why this matters:**
- Screen reader users can ask their reader to "list all links on this page" - they hear only the link text
- If the text is "click here," they have no context about where it goes
- Descriptive link text is WCAG 2.4.4 (Link Purpose)

**What success looks like:**
- You found a link with non-descriptive text
- You can explain why "click here" is bad and what would be better


#### Step 8: Place a Comment on the Link

**What to do:**
1. Find the line in the diff with the problematic link
2. Hover over the line number and click to open a comment box (or press `C`)
3. Type:
   ```
   nit: Link text "click here" is not descriptive. Screen reader users 
   who list links won't know the context. Suggest: "Read the accessibility 
   checklist" or another descriptive phrase.
   ```
4. Click **Comment** or press `Ctrl+Enter`

**Note:** `nit:` means "nice-to-have improvement" (not blocking, but good to fix)


#### Step 9: Submit Your Review

**What to do:**
1. Look for a button labeled **"Review changes"** (usually at the top right of the page or bottom of comments)
2. Click it (or navigate with keyboard and press `Enter`)
3. A dialog appears with options:
   - **Comment** - provide feedback but don't block (for minor notes)
   - **Approve** - the PR is ready to merge
   - **Request changes** - this PR cannot merge until changes are made

**For this exercise:**
1. Select **"Request changes"** (you found two things to fix)
2. In the summary field, write: `Found 2 accessibility issues that must be fixed before merging.`
3. Click **"Submit review"**

**What happens:**
- Your review is submitted
- The PR author gets a notification
- The PR shows your review with the two comments
- GitHub blocks merging until the author responds to or fixes the changes

**What success looks like:**
- You see your review appear on the PR page
- It shows 2 comments you made
- The PR status shows "Changes requested"


#### Reflect on This Exercise

After submitting, answer:
1. **Did heading-level navigation help?** When you were looking for the `####` issue, was it easier to navigate by heading level (`1`-`6`) than to scan every line?
2. **Would you have caught this without the exercise prompt?** If you were a real reviewer not specifically looking for heading issues, would the diff have been obvious?
3. **Why does screen reader navigation matter?** In one sentence, explain why a screen reader user's ability to jump through heading levels is important for this document.

Keep your answers - you'll need them for Chapter 16's Accessibility Agents exercise to compare manual review with agent-assisted review.


### Exercise B - Use the VS Code Accessible Diff Viewer

**Scenario:** Review the same pull request from Exercise A, this time entirely in VS Code. You'll compare the browser experience with the VS Code experience.

**What You'll Learn:** How the VS Code Accessible Diff Viewer announces changes differently than the browser diff, and when each environment is most useful.


#### Prerequisites

Before starting:
- VS Code must be installed on your machine
- The GitHub Pull Requests extension must be installed (see [Chapter 12](12-github-pull-requests-extension.md) for installation)
- You must be signed into GitHub from VS Code (use `Ctrl+Shift+P` → "GitHub: Sign in")


#### Step 1: Open the GitHub Pull Requests Extension

**What to do:**
1. Open VS Code
2. **With keyboard (all screen readers):** Press `Ctrl+Shift+X` to open the Extensions sidebar
   - **With mouse:** Click the Extensions icon on the left sidebar (looks like four squares)
3. Search for "GitHub Pull Requests"
4. If it's not installed, click **Install**
5. If it is installed, click **GitHub Pull Requests** to view its details

**What you should see:**
- The extension is listed as active
- It mentions: "Review and manage GitHub pull requests and issues"


#### Step 2: Open the Pull Requests Sidebar

**What to do:**
1. Look for a **GitHub-themed icon** on the left sidebar (circle with octocat logo) - click it
   - **With keyboard:** The icon may not be keyboard-reachable directly; instead go to Step 3
2. A sidebar appears showing open pull requests on repositories you have access to
3. **Find the PR titled "Add screen reader tips to the setup guide"** - it should appear in a list
4. Click it to open

**What happens:**
- VS Code opens a new editor tab for this PR
- Below the PR title, you see a "Changes" section listing modified files
- You should see `setup-guide.md` in the changes list

**If you can't find the PR:**
- Use `Ctrl+Shift+P` → search `GitHub Pull Requests: Open Pull Request`
- Paste the PR URL: `https://github.com/[owner]/[repo]/pull/[number]`
- Press Enter


#### Step 3: View the File Changes

**What to do:**
1. In the **Changes** section, locate `setup-guide.md`
2. Click on the filename to open it

**What happens:**
- A diff editor opens showing two columns:
  - **Left:** the original file (before changes)
  - **Right:** the new file (after changes)
- Different colors show added (green), removed (red), and modified (blue) lines
- The file name appears at the top: `setup-guide.md`

**With screen reader:**
- NVDA/JAWS: The editor announces "Diff Editor - setup-guide.md"
- Use `Ctrl+Home` to jump to the start of the diff
- Use `Ctrl+End` to jump to the end


#### Step 4: Access the Accessible Diff Viewer

**What to do:**
1. **With keyboard:** Press `F7` to open the Accessible Diff Viewer
   - **With mouse:** Look for a button or menu option labeled "Accessible View" or "Open Accessible Diff"
   - If no button is visible, try `Alt+F2` (VS Code Accessible View toggle)

**What happens:**
- A new panel opens at the bottom of VS Code
- The panel announces each change one at a time
- Changes appear in text format with labels: "Added: " and "Removed: "
- The panel is read-only (you read the changes, you don't edit here)

**If the Accessible Diff Viewer doesn't open:**
- Make sure the diff editor is active (click in the diff area first)
- Try `Ctrl+Shift+P` → search `Open Accessible Diff`
- If available, select it


#### Step 5: Listen to and Understand the First Change

**What to do:**
1. The first change is automatically announced when you open the Accessible Diff Viewer
2. **Let your screen reader read it completely** - don't interrupt
3. Write down the exact text announced:
   ```
   Removed: [write what the viewer said]
   Added: [write what the viewer said]
   ```
4. Press the **Down arrow** to move to the next change

**What to expect (example):**
```
Removed: ## Old Heading
Added: ## New Heading with More Details
```

**With screen reader:**
- NVDA/JAWS: The Accessible Diff Viewer announces "Removed:" and "Added:" labels, followed by the line content
- VoiceOver: The announcement may be similar; listen for "removed" and "added" keywords


#### Step 6: Find the Heading Hierarchy Issue

**What to do:**
1. Continue pressing **Down arrow** to move through changes
2. Listen carefully for a change involving headings (lines starting with `#`)
3. Specifically, listen for: "Added: ####" (four hashes)
4. When you hear this, **stop and write it down:**
   ```
   Line number: [if available]
   Removed: [what was removed, if anything]
   Added: [the four-hash heading]
   Context: [is there a ## heading just before this?]
   ```

**Why listen for this?**
- Four hashes (`####`) indicate a level 4 heading
- In the diff, you're looking for it appearing after a level 2 heading (`##`)
- This creates the hierarchy skip you caught in Exercise A

**What success looks like:**
- You found the explanation in the Accessible Diff Viewer's format
- You can explain: "The added line with `####` directly follows a `##`, skipping level 3"
- The Accessible Diff Viewer made this *pattern* clearer than scanning raw `+` characters


#### Step 7: Locate the Heading Line and Add an Inline Comment

**What to do:**
1. Once you identified the problematic heading in the Accessible Diff Viewer, **close the Accessible Diff Viewer** (press `F7` again or `Alt+F2`)
2. You're back in the regular Diff Editor
3. **Find the line with the problematic `####` heading:**
   - Use `Ctrl+F` to open Find
   - Search for `####` to locate it quickly
   - Press `Enter` to jump to it
4. Close Find (`Escape`)
5. Place your cursor on that line
6. **Right-click** and select "Add Comment" or press the **Comment icon** that appears on the left margin
   - **With keyboard:** The comment button may appear on the current line; navigate to it and press `Enter`

**What happens:**
- A comment box opens
- You can type your comment


#### Step 8: Write Your Accessible Diff Comment

**What to do:**
1. In the comment box, type:
   ```
   blocking: Heading hierarchy violation. The Accessible Diff Viewer 
   clearly showed this #### heading appearing directly after ##, skipping 
   level 3. Screen reader users navigating by heading level will miss this 
   content. Change to ###.
   ```
2. Press `Ctrl+Enter` or click **Comment** to submit

**Why mention the Accessible Diff Viewer?**
- It shows that the tool *itself* helps you see the issue
- It documents how you caught the problem (useful for learning)


#### Step 9: Create a GitHub Pull Request Comment

**Special Section: Comparing Tools**

Now you've reviewed the same PR in:
1. **Browser (Exercise A):** You spot-checked line numbers manually
2. **VS Code (Exercise B):** The Diff Editor plus Accessible Diff Viewer announced changes

**What to do:**
1. Go to GitHub in your browser and open the same PR
2. Scroll to the bottom and leave a comment in the Conversation tab:

```
I've now reviewed this PR in both the browser and VS Code. Here's 
what I found:

**Browser review:** I had to manually navigate with heading commands 
and scan for the skip visually. Found 2 issues.

**VS Code + Accessible Diff Viewer:** The Accessible Diff Viewer 
announced changes in a linear format, making it easier to follow 
the story of what changed without scanning back and forth.

**My conclusion:** [Choose one]
- The browser method was clearer for me
- VS Code was clearer for me
- Both have strengths; I'd use each for different purposes
  - Browser best for: [specific reason]
  - VS Code best for: [specific reason]
```

3. Click **Comment**


#### Reflect on This Exercise

After completing Steps 1-9, answer:
1. **Announcement clarity:** Did the "Added:" and "Removed:" labels from the Accessible Diff Viewer help you follow changes faster than reading `+` and `−` prefixes in the browser?
2. **Navigation pattern:** Which tool required less back-and-forth clicking/tabbing to understand each change?
3. **When would you use each?** In one sentence: describe a type of PR where you'd prefer to use each tool.

**Record your answers.** In Chapter 16, you'll compare these manual reviews with the `@pr-review` agent's suggested changes.


### Exercise C - Compare and Reflect

**Your Mission:** Synthesize what you learned from the manual code reviews (Exercises A & B) and document your findings.

**What You'll Learn:** Which tools work best for different scenarios, and how your manual review skills prepare you to use AI agents effectively.


#### Step 1: Gather Your Data

Before writing your reflection, collect all the information you gathered:

**From Exercise A (Browser Review):**
- Which line number had the heading hierarchy skip?
- Which line number had the link text issue?
- How many steps did it take to find each issue?
- Did you use screen reader commands or visual scanning more?

**From Exercise B (VS Code Review):**
- What did the Accessible Diff Viewer announce for the heading change?
- Was the announcement clearer than the browser's `+` and `−` format?
- Did you need to switch between the Accessible Diff Viewer and the regular editor?
- How many steps to find the problem?

**Write these down** (in a text editor, on paper, or mentally) - you'll reference them in Steps 2-4.


#### Step 2: Navigate to the PR and Leave Your Reflection Comment

**What to do:**
1. Go to GitHub in your browser
2. Open the same PR ("Add screen reader tips to the setup guide")
3. Scroll to the **Conversation** tab
4. Scroll all the way down to the comment box at the bottom (labeled "Leave a comment" or "Add a comment")
5. Click in the comment box

**What you should see:**
- A text editing area with formatting options (Bold, Italic, Link, etc.)
- A **Comment** button below the text area


#### Step 3: Write Your Comparison

**What to do:**
Type your response to these three questions. Be specific - reference exact tools, steps, and what you discovered:

**Question 1: Environment Preference**
```
After reviewing this PR in both environments, my preferred tool was:
[Browser / VS Code / Both equally]

Why: [1-2 sentences explaining your choice]

Example: "I preferred VS Code because the Accessible Diff Viewer 
separated changes into 'Added:' and 'Removed:', making it obvious 
what the new content was. In the browser, I had to mentally filter 
the + and − characters."
```

**Question 2: Strengths of Each Environment**
```
Browser made this easier: [One specific task, e.g., "Finding the PR URL"] 
because [Why]

VS Code made this easier: [One specific task, e.g., "Following the diff linearly"] 
because [Why]

Example Browser: "Finding context about *why* the change was made, 
because all the discussion is in one place"

Example VS Code: "The Accessible Diff Viewer announcing changes sequentially 
meant I didn't miss anything by accidentally scrolling past it"
```

**Question 3: Real-World Impact**
```
For someone reading the published document (not the diff), the heading 
skip matters because: [1-2 sentences]

Example: "A screen reader user pressing the '3' key to navigate to level-3 
headings will find none, and might think the document skipped a section. 
This breaks the information hierarchy."
```

**Full template to copy into the comment box:**

```
## Code Review Reflection - Browser vs VS Code

After reviewing this PR using both the browser and VS Code environments, 
here's what I found:

### Environment Preference

My preferred tool was: **[Browser / VS Code]**

Why: [1-2 sentences]

### Specific Strengths

**Browser made this easier:**
- Task: [specific thing]
- Why: [explanation]

**VS Code made this easier:**
- Task: [specific thing]
- Why: [explanation]

### Real-World Impact

The heading hierarchy skip in the published document matters because: 
[1-2 sentences about why screen reader users would be affected]
```


#### Step 4: Review Your Comment

**What to do:**
1. Before submitting, **re-read your comment** using your screen reader or by reading aloud
2. Ask yourself:
   - Is it clear which tool I preferred?
   - Did I explain *why* with concrete examples?
   - Am I describing the real-world impact accurately?
   - Would someone else reading this understand how I caught the issue?
3. Make any corrections needed
4. **Do not submit yet** - continue to Step 5


#### Step 5: Submit Your Reflection

**What to do:**
1. Locate the **Comment** button at the bottom right of the comment box
2. **With keyboard:** Press `Tab` until the Comment button is focused, then `Enter`
3. **With mouse:** Click the **Comment** button
4. Your comment is submitted and appears on the PR page

**What happens:**
- Your comment is now visible on the PR
- Other reviewers can see your comparison
- You have completed the three-part exercise series

**What success looks like:**
- Your comment appears on the PR thread
- It includes all three reflections
- The PR author and other reviewers can see your thought process


#### Step 6: Checkpoint - Validate Your Learning

Before moving forward, verify you understand:

1. **Heading Hierarchy:** Can you explain in one sentence why a `##` → `####` skip breaks screen reader navigation?
   - *Expected answer:* Something like "Screen readers let users navigate by heading level (pressing 3 jumps to H3), so skipping a level makes users think content is missing."

2. **Tool Strengths:** For each tool you used, name one task it made easier.
   - *Expected answer:* e.g., "Browser: finding context in discussions. VS Code: linear reading of changes."

3. **Real-World Testing:** How would you test the heading issue in the *published* document (not the PR diff)?
   - *Expected answer:* Something like "Open the document in a browser, use screen reader heading navigation, and confirm I can reach all levels (H2, H3, H4)."

If you can answer all three, you're ready for the next chapter.


### What Comes Next

Your manual code review skills - identifying heading issues, catching link text problems, understanding screen reader navigation - are the **foundation** for understanding automated review.

In **Chapter 16 (Accessibility Agents)**, you'll use the `@pr-review` agent to generate a *draft* review of this same PR. The agent will:
- Suggest changes automatically
- Identify accessibility issues
- Create a review checklist

**But** - and this is critical - the agent's suggestions will only make sense *because you already know what to look for*. You'll be able to:
- Verify the agent didn't miss anything
- Add context the agent can't see
- Decide whether the agent's suggestions are correct

That's the power of "manual skill first, agent second." You're building that skill right now.


> ### Day 2 Amplifier - Accessibility Agents: `@pr-review`
>
> **Review at least two pull requests manually - using the techniques in this guide - before running `@pr-review`.** The agent generates a first-draft review: a line-numbered diff map, risk assessment, before/after snapshots, and suggested inline comments. Your job as reviewer is to read that draft, correct it, enrich it with context the diff cannot contain, and decide what is actually worth saying to the author.
>
> Once you have that manual foundation:
> - **In VS Code** - `@pr-review review PR #N` produces a structured, annotated review draft
> - **In your repo** - Accessibility Agents' review capabilities work in any repository you can access; fork `accessibility-agents` and those capabilities travel with your project
> - **In the cloud** - GitHub Agentic Workflows can auto-post PR summaries and accessibility impact assessments the moment a PR is opened, without anyone being online
>
> *The Accessible Diff Viewer teaches you to hear changes. The agent drafts the notes. You bring the judgment.*


*Next: [Issue Templates](15-issue-templates.md)*
*Back: [GitHub Copilot](13-github-copilot.md)*
*Related: [Screen Reader Cheat Sheet](appendix-b-screen-reader-cheatsheet.md) | [Merge Conflicts](07-merge-conflicts.md) | [Git & Source Control in VS Code](11-git-source-control.md)*
