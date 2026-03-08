# Git & Source Control in VS Code
>
> **Listen to Episode 12:** [Git and Source Control in VS Code](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Managing Repositories, Branches, and Changes Accessibly

> **Day 2, Block 1-2 Material**
>
> This guide covers all Git operations in VS Code: cloning repositories, navigating the Source Control panel with screen readers, branch management, staging changes (including individual lines), push/pull operations, viewing file history with Timeline, resolving merge conflicts, and stash management.
>
> **Prerequisites:** [VS Code Setup & Accessibility Basics](10-vscode-basics.md), [Working with Pull Requests](05-working-with-pull-requests.md), [Merge Conflicts](06-merge-conflicts.md)
>
> **Mac keyboard shortcuts:** Throughout this chapter, all `Ctrl+` shortcuts use `Cmd+` on Mac, and `Alt+` shortcuts use `Option+`. Common equivalents: `Ctrl+Shift+G` → `Cmd+Shift+G`, `Ctrl+Shift+P` → `Cmd+Shift+P`, `Ctrl+Enter` → `Cmd+Enter`, `Ctrl+S` → `Cmd+S`.


## Workshop Recommendation (Chapter 11)

Chapter 11 is the first **local Git workflow chapter** with hands-on repository management.

- **Challenge count:** 3
- **Time per challenge:** under 10 minutes each
- **Evidence:** PR metadata, branch names, and committed changes
- **Pattern:** clone, branch, edit, commit, push, PR

### Chapter 11 Challenge Set

1. **Clone the sci-fi themes repository** - clone `vscode-sci-fi-themes` to your local machine using VS Code.
2. **Create a branch and make one commit** - create a named branch, edit a theme file, stage, write a clear commit message, and commit locally.
3. **Push and open a linked PR** - push your branch and open a PR that references your challenge issue.

### Challenge 11.1 Step-by-Step: Clone the Sci-Fi Themes Repository

**Goal:** Get a local copy of the `vscode-sci-fi-themes` repository on your machine using VS Code.

**Where you are working:** VS Code desktop (or github.dev if you cannot install desktop VS Code).

This repo contains custom Copilot Chat loading phrases from three sci-fi universes (Star Trek, Hitchhiker's Guide, and Star Wars). Cloning it gives you a fun, real codebase to explore while learning Git.

1. Open VS Code. If no folder is open, you should see the Welcome tab.
2. Open the Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`).
3. Type `git clone` and select **Git: Clone**.
4. VS Code asks for a repository URL. Paste: `https://github.com/Community-Access/vscode-sci-fi-themes.git`
5. Press `Enter`.
6. A file browser dialog opens asking where to save the clone. Choose a folder you can find easily (for example, `Documents` or `Desktop`). Press **Select as Repository Destination**.
7. VS Code clones the repository. When it finishes, a notification appears asking "Would you like to open the cloned repository?" Activate **Open**.
8. Verify the clone worked: press `Ctrl+Shift+E` (Mac: `Cmd+Shift+E`) to open Explorer. Your screen reader should announce the file tree with files like `README.md`, `CLONE-THIS-REPO.md`, and a `themes/` folder containing three JSON files.

**Screen reader tip:** After step 6, VS Code shows a progress notification. NVDA reads this automatically. If you hear nothing for 30 seconds, open the Command Palette and run `Notifications: Focus Notification Toast` to check status.

**You are done when:** The `vscode-sci-fi-themes` folder is open in VS Code and you can see the `themes/` folder with its three JSON files (star-trek, hitchhikers, star-wars) in the Explorer panel.

### Challenge 11.2 Step-by-Step: Create a Branch and Commit

**Goal:** Create a properly named branch, edit a theme file, stage the change, and commit with a clear message.

**Where you are working:** VS Code with the cloned `vscode-sci-fi-themes` repository open.

1. Open the Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`).
2. Type `git create branch` and select **Git: Create Branch...**
3. VS Code asks for a branch name. Type: `chapter11/yourname-issueXX` (replace `yourname` with your GitHub username and `XX` with your Chapter 11.2 challenge issue number). Press `Enter`.
4. The status bar at the bottom of VS Code now shows your new branch name instead of `main`. Your screen reader announces the branch name when you focus the status bar.
5. Open the Explorer (`Ctrl+Shift+E`) and navigate to the `themes/` folder. Open any theme file (for example, `star-trek-settings.json`).
6. Make one small, meaningful edit. For example, add a new thinking phrase to the array, fix a typo, or improve a description. Save the file with `Ctrl+S` (Mac: `Cmd+S`).
7. Open the Source Control panel: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`). Your screen reader announces "Source Control" and shows your changed file under "Changes."
8. Navigate to your changed file in the Changes list. Press `Enter` or activate the `+` (Stage Changes) button next to the filename. The file moves from "Changes" to "Staged Changes."
9. Move focus to the **Message** input box at the top of the Source Control panel. Type a clear commit message, for example: `feat: add new thinking phrase to Star Trek theme`
10. Press `Ctrl+Enter` (Mac: `Cmd+Enter`) to commit. The staged changes disappear, which means your commit succeeded.

**Screen reader tip:** In the Source Control panel, use arrow keys to navigate between changed files. Each file announces its name and change status (modified, added, deleted). The `+` button is announced as "Stage Changes" when you Tab to it.

**You are done when:** Your commit appears in the Source Control panel's history (no more staged or unstaged changes visible) and the status bar still shows your branch name.

### Challenge 11.3 Step-by-Step: Push and Open a Linked PR

**Goal:** Push your branch to GitHub and open a PR that references your challenge issue.

**Where you are working:** VS Code (for the push) and GitHub.com (for the PR).

1. Open the Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`).
2. Type `git push` and select **Git: Push**. If VS Code asks to publish the branch (because it is new), confirm by selecting **OK** or **Publish Branch**.
3. Wait for the push to complete. VS Code shows a progress notification. When done, the sync indicator in the status bar should show no pending changes.
4. Open your browser and navigate to `https://github.com/Community-Access/vscode-sci-fi-themes`.
5. GitHub usually shows a yellow banner: "yourname recently pushed to chapter11/yourname-issueXX." Activate the **Compare & pull request** button in that banner.
6. If you do not see the banner, activate the **Pull requests** tab, then activate **New pull request**. Set the base branch to `main` and the compare branch to your `chapter11/yourname-issueXX` branch.
7. In the PR title, write a descriptive title (for example: "Add new thinking phrase to Star Trek theme").
8. In the PR description, type `Closes Community-Access/learning-room#XX` (replace `XX` with your Chapter 11.3 challenge issue number). This cross-repo reference tells GitHub to automatically close that issue in the learning-room when this PR is merged.
9. Activate the **Create pull request** button.

**Screen reader tip:** The "Compare & pull request" banner is a standard link element near the top of the repository page. If your screen reader does not find it, use the heading navigation to jump to the Pull Requests tab instead.

**Cross-repo linking:** Because your challenge issue lives in `learning-room` but your PR is in `vscode-sci-fi-themes`, you use the full format `Closes Community-Access/learning-room#XX` instead of just `Closes #XX`. GitHub resolves cross-repo references automatically.

**You are done when:** Your PR appears on the Pull requests tab of `vscode-sci-fi-themes`, shows your branch name, and the description contains the cross-repo reference to your challenge issue.

### Completing Chapter 11: Submit Your Evidence

Open your **assigned Chapter 11.3 challenge issue** in the `learning-room` repo and post a completion comment:

```text
Chapter 11 completed:
- Repository cloned: vscode-sci-fi-themes
- Branch name: chapter11/[yourname]-[issueXX]
- Commit message: [your commit message]
- PR number: Community-Access/vscode-sci-fi-themes#[your PR number]
- PR links to issue: yes (Closes Community-Access/learning-room#XX in description)
```

Close your Chapter 11 challenge issues (11.1, 11.2, 11.3) when your PR is open.

### Expected Outcomes

- Student can clone a repository using VS Code Command Palette.
- Student can create a named branch following the workshop naming convention.
- Student can navigate the Source Control panel, stage files, and commit with a descriptive message.
- Student can push a branch and open a PR with cross-repo issue linking.

### If You Get Stuck

1. Command Palette does not open? Confirm you are in VS Code (not the browser) and press `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`).
2. Source Control panel is empty? You may not have saved your file yet. Press `Ctrl+S` to save, then check again.
3. Push fails with authentication error? Open Command Palette, run `Git: Fetch` to test your connection. If it fails, run `GitHub: Sign In` from Command Palette.
4. Branch name wrong? Open Command Palette, run `Git: Rename Branch...` to fix it before pushing.
5. Cannot find the "Compare & pull request" banner on GitHub? Navigate to Pull requests tab and create the PR manually (step 6 above).
6. Cross-repo link not working? Make sure the format is exactly `Closes Community-Access/learning-room#XX` with no extra spaces. The org/repo prefix is required when linking across repositories.
7. Ask facilitator to verify your clone location, branch name, and help with one push.

> **Continue learning:** The GitHub Skills course [Introduction to Git](https://github.com/skills/introduction-to-git) walks through commits, branches, and merges in an interactive, self-paced format. See [Appendix Z](appendix-z-github-skills-catalog.md) for the full catalog.

### Learning Moment

Local Git operations give you full control and immediate feedback. You can see your changes, review them, and fix mistakes before they reach GitHub. The clone-branch-edit-commit-push-PR cycle you just completed is the daily workflow of every open source contributor. And now your Copilot Chat has custom sci-fi loading phrases as a bonus.

### Learning Pattern Used in This Chapter

1. Clone once to get a local copy of the project.
2. Branch before editing (never work directly on `main`).
3. Make small, focused edits with clear commit messages.
4. Push and open a PR that links to an issue for traceability.
5. Verify each step before moving to the next.


## Table of Contents

1. [Cloning a Repository in VS Code](#1-cloning-a-repository-in-vs-code)
2. [The Source Control Panel - Complete Walkthrough](#2-the-source-control-panel---complete-walkthrough)
3. [Branch Management](#3-branch-management)
4. [Staging Changes - Files, Lines, and Chunks](#4-staging-changes---files-lines-and-chunks)
5. [Committing with Screen Readers](#5-committing-with-screen-readers)
6. [Push and Pull Operations](#6-push-and-pull-operations)
7. [Discarding Changes](#7-discarding-changes)
8. [Timeline View - File History and Blame](#8-timeline-view---file-history-and-blame)
9. [Resolving Merge Conflicts in VS Code](#9-resolving-merge-conflicts-in-vs-code)
10. [Stash Management](#10-stash-management)
11. [Emergency Recovery - git reflog](#10b-emergency-recovery---git-reflog)
12. [Alternative Git Interfaces](#11-alternative-git-interfaces)


## 1. Cloning a Repository in VS Code

### Three ways to clone a repository

### Method 1: Command Palette (Recommended for Screen Readers)

1. Open Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git clone"
3. Select "Git: Clone"
4. Paste the repository URL (example: `https://github.com/community-access/accessibility-agents.git`)
5. Press `Enter`
6. Choose a local folder where the repository should be cloned
7. VS Code asks: "Would you like to open the cloned repository?" - select "Open"

#### Screen reader navigation

- The Command Palette is a searchable list - type to filter, `Up/Down Arrow` to navigate results
- The folder picker is a standard file dialog - navigate with `Arrow` keys, `Enter` to select

### Method 2: Start Page Clone Button

1. Open VS Code (no folder open)
2. The Start page appears
3. Navigate to "Clone Git Repository" button - press `Enter`
4. Paste repository URL → `Enter`
5. Choose destination folder
6. Open when prompted

**Screen reader note:** The Start page is keyboard-accessible. `Tab` to navigate between "New File," "Open Folder," and "Clone Repository" buttons.

### Method 3: From GitHub.com

1. On any GitHub repository page, click the green "Code" button
2. Copy the HTTPS URL (recommended) or SSH URL
3. Open VS Code → `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Git: Clone"
4. Paste URL → `Enter`
5. Choose destination → Open

**Why HTTPS over SSH for this workshop:** HTTPS works immediately with no setup. SSH requires key generation and configuration (see [Appendix D: Git Authentication](appendix-d-git-authentication.md) for SSH setup).

### Try It Now: Clone the Sci-Fi Themes Repo 

To make your first clone meaningful and fun, try cloning the **VS Code Sci-Fi Thinking Phrases** repository:

**Repository URL:** `https://github.com/community-access/vscode-sci-fi-themes.git`

This repo contains custom loading phrases for GitHub Copilot Chat from three sci-fi universes:
- **Star Trek** — Engage warp drive and run diagnostics
- **The Hitchhiker's Guide** — Consult the Infinite Improbability Drive
- **Star Wars** — Read the ripples in the Force

#### Why Clone This?

-  It's a real, working repository with multiple files to explore
-  You'll see a practical use of cloning (customizing your personal VS Code setup)
-  After cloning, you can pick a theme and apply it to your `settings.json`
-  When you open Copilot Chat, you'll see your custom phrases appear! 

#### Quick Start

1. Clone: `Ctrl+Shift+P` → "Git: Clone" → paste URL above → `Enter`
2. Choose a destination folder and open when prompted
3. Navigate to the `themes/` folder and pick a `.json` file (star-trek, hitchhikers, or star-wars)
4. Copy the `chat.agent.thinking.phrases` setting into your VS Code `settings.json`
5. Reload VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"
6. Open Copilot Chat (`Ctrl+Shift+I`) and ask a question—watch your custom phrases appear!

See `CLONE-THIS-REPO.md` in that repo for full instructions.

<details>
<summary>Web alternative (github.com)</summary>

If you prefer not to clone locally, you can work entirely on GitHub.com:

1. Navigate to the repository on GitHub
2. Click any file to view it, then click the **pencil icon** (Edit) to modify it directly in the browser
3. GitHub automatically creates a branch and commit for your edit
4. When you save, GitHub prompts you to open a pull request

This approach requires no local tools - just a browser. It works well for documentation changes and small edits. For larger changes, cloning to VS Code gives you a full editor with multi-file editing, Git staging, and the Accessible Diff Viewer.

</details>

<details>
<summary>GitHub CLI (gh) alternative</summary>

Clone a repository with one command:

```bash
# Clone using owner/name (no URL needed)
gh repo clone community-access/vscode-sci-fi-themes

# Clone and cd into the folder
gh repo clone community-access/vscode-sci-fi-themes && cd vscode-sci-fi-themes

# Open the cloned repo in VS Code
gh repo clone community-access/vscode-sci-fi-themes && code vscode-sci-fi-themes
```

</details>


## 2. The Source Control Panel - Complete Walkthrough

The Source Control panel (`Ctrl+Shift+G` - Mac: `Cmd+Shift+G`) is where all Git operations happen in VS Code. This section provides a complete screen reader walkthrough of every interactive element.

### Opening the Source Control Panel

**Shortcut:** `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)

#### What opens

- A sidebar panel on the left side of VS Code
- Focus lands on the first interactive element (usually the commit message input or the first changed file)

#### Panel structure from top to bottom

1. **Source Control title bar** (heading level 2)
   - Branch name displayed (example: "main" or "feature/add-documentation")
   - View/More Actions button (three dots menu)

2. **Commit message input** (multi-line text field)
   - Type your commit message here
   - Announced as "Source Control Input, edit, multi-line"

3. **Commit button** (or "Publish Branch" if this is a new branch)
   - Shortcut: `Ctrl+Enter` (Mac: `Cmd+Enter`) when focused in the message input

4. **Changes section** (collapsible tree)
   - Lists all modified files not yet staged
   - Announced as "Changes, expanded" or "Changes, collapsed"
   - Count shown (example: "Changes 3")

5. **Staged Changes section** (collapsible tree)
   - Lists files staged for commit
   - Empty if nothing staged yet
   - Announced as "Staged Changes, expanded"

6. **Merge Changes section** (appears only during a merge)
   - Lists files with conflicts
   - See Section 9 for conflict resolution workflow

### Screen Reader Navigation in the Source Control Panel

#### NVDA/JAWS

- The panel is a web-based tree view
- Use `Up/Down Arrow` to navigate between items
- Use `Right Arrow` to expand a section (Changes, Staged Changes)
- Use `Left Arrow` to collapse a section
- Use `Enter` to open a file diff
- Use `Space` to stage/unstage a file (when focused on a file item)

#### VoiceOver

- Navigate with `VO+Arrow` keys
- `VO+Space` to activate (open diff or stage/unstage)
- The panel is announced as a "group" containing lists

**Key point:** The Source Control panel is **not** a standard file tree. It's a specialized Git status view. Each changed file is an interactive item with a context menu.

### What Each File Shows

When a file appears in the Changes or Staged Changes list, VS Code shows a status letter:

| Letter | Meaning |
| --------  | ---------  |
| M | Modified - file exists and was changed |
| A | Added - new file, not in Git yet |
| D | Deleted - file was removed |
| R | Renamed - file was moved or renamed |
| U | Untracked - file exists but Git is ignoring it |
| C | Conflict - file has merge conflicts (see Section 9) |

**Screen reader announcement:** "docs/GUIDE.md, Modified" or "README.md, Added"

### Context Menu Actions (Right-Click or Shift+F10)

When focused on any file in the Source Control panel:

| Action | What It Does |
| --------  | -------------  |
| Open File | Opens the file in the editor (same as `Enter`) |
| Open Changes | Opens side-by-side diff view (same as `Enter`) |
| Stage Changes | Moves file from Changes → Staged Changes |
| Unstage Changes | Moves file from Staged Changes → Changes |
| Discard Changes | **Dangerous** - deletes your local edits, restores file to last commit |
| Stage Selected Ranges | Stage only specific lines (see Section 4) |
| Revert Selected Ranges | Discard changes to specific lines only |

**Screen reader tip:** Use `Shift+F10` to open the context menu. Navigate options with `Up/Down Arrow`. Press `Enter` to select.


## 3. Branch Management

Branches are how you organize work in Git. Every repository starts with a `main` or `master` branch. You create new branches for features, bug fixes, or experiments.

### Viewing the Current Branch

#### Where it's shown

1. Bottom-left corner of VS Code (status bar) - visual users see it immediately
2. Source Control panel title bar
3. Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Git: Show Git Output"

#### Keyboard access to status bar

- The status bar is not in the standard keyboard navigation flow
- Use the Command Palette for branch operations instead

> **Visual users:** You can also click the branch name in the bottom-left status bar to open the branch picker directly.

### Creating a New Branch

#### Command Palette method (recommended)

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git create branch"
3. Select "Git: Create Branch..."
4. Type the new branch name (example: `feature/improve-docs`)
5. Press `Enter`

VS Code:

- Creates the branch
- Switches to it automatically
- Your working files stay exactly as they were

#### Naming conventions

- Use lowercase with hyphens: `feature/add-timeline-guide`
- Avoid spaces and special characters
- Be descriptive: `fix/heading-hierarchy` not `fix1`

<details>
<summary>Web alternative (github.com) - branch management</summary>

Create and switch branches without leaving your browser:

1. On the repository page, click the **branch dropdown** (shows "main" by default)
2. Type a new branch name in the search field
3. Click **"Create branch: your-branch-name from main"**
4. GitHub switches to the new branch immediately
5. Any file edits you make in the browser will be on this branch

To switch between branches, click the branch dropdown and select the branch you want.

</details>

<details>
<summary>Git CLI alternative - branch management</summary>

Manage branches from your terminal:

```bash
# Create and switch to a new branch
git checkout -b feature/improve-docs

# List all branches
git branch -a

# Switch to an existing branch
git checkout main

# Delete a branch (after merging)
git branch -d feature/improve-docs
```

</details>

### Switching Between Branches

#### Command Palette method

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git checkout"
3. Select "Git: Checkout to..."
4. A list of all branches appears
5. `Up/Down Arrow` to navigate
6. `Enter` to switch

**Screen reader announcement:** "Branch: main" or "Branch: feature/add-timeline-guide"

#### What happens when you switch

- VS Code saves your current files
- Loads the files from the other branch
- If you have uncommitted changes, Git may block the switch (see "Stashing" in Section 10)

### Deleting a Branch

#### After your PR is merged, you can delete the branch

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git delete branch"
3. Select "Git: Delete Branch..."
4. Choose the branch to delete from the list
5. Confirm

**Note:** You cannot delete the branch you're currently on. Switch to `main` first.

### Viewing All Branches

**Command:** `Ctrl+Shift+P` → "Git: Show Git Output" → Branch list appears

**Alternative:** Use the integrated terminal:

```bash
git branch          # Local branches only
git branch -a       # All branches (including remote)
```


## 4. Staging Changes - Files, Lines, and Chunks

Git has a two-step commit process:

1. **Stage** the changes you want to include
2. **Commit** those staged changes

This lets you commit only part of your work, leaving the rest for a later commit.

### Staging an Entire File

<details>
<summary>Visual / mouse users</summary>

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Hover over a file in the "Changes" list - a **+** icon appears to its right
3. Click the **+** to stage that file
4. Or right-click a file → "Stage Changes"

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Navigate to the file in the "Changes" list
3. Press `Ctrl+Enter` (Mac: `Cmd+Enter`) to stage immediately

#### Alternative (keyboard shortcut)

- Focus the file → press `Space`

#### Alternative (context menu)

- Focus the file → press `Shift+F10` (Mac: `Ctrl+Return`) → select "Stage Changes"

</details>

#### What happens

- The file moves from "Changes" → "Staged Changes"
- A green "A" or "M" indicator appears

### Staging Multiple Files at Once

1. `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`) to open Source Control
2. Navigate to the "Changes" section heading
3. Press `Shift+F10` (Mac: `Ctrl+Return`) to open context menu on the section itself
4. Select "Stage All Changes"

All modified files move to "Staged Changes."

### Staging Individual Lines or Chunks

**This is one of Git's most powerful features:** You can stage only specific lines of a file, leaving other changes unstaged.

#### Workflow

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Navigate to a file in "Changes"
3. Press `Enter` to open the diff view
4. The diff shows your changes side-by-side or inline
5. Navigate to a changed line (use `Arrow` keys or `F7` for next hunk)
6. Press `Shift+F10` (Mac: `Ctrl+Return`) to open context menu
7. Select "Stage Selected Lines"

**Result:** Only those lines are staged. The rest of the file remains in "Changes."

#### Use case for this workshop

- You fixed a typo and added a new section in the same file
- You want to commit the typo fix separately from the new content
- Stage only the typo fix lines, commit them with message "fix: typo in heading"
- Then stage the new section, commit with message "docs: add Timeline View guide"

**Screen reader tip:** In the diff view, press `Alt+H` to see Accessible Help for diff-specific keyboard shortcuts.

<details>
<summary>Web alternative (github.com) - editing files</summary>

On GitHub.com, there is no staging step. When you edit a file in the browser:

1. Click the **pencil icon** on any file to open the web editor
2. Make your changes
3. Click **"Commit changes"** - GitHub creates the commit directly
4. Choose to commit to the current branch or create a new branch and PR

This is the simplest workflow if you are making a focused change to one file. For multi-file changes, VS Code's staging system gives you more control.

</details>

<details>
<summary>Git CLI alternative - staging</summary>

Stage files from your terminal:

```bash
# Stage a specific file
git add docs/GUIDE.md

# Stage all changes
git add .

# Stage specific lines interactively
git add -p docs/GUIDE.md
# Git shows each change hunk and asks: stage this? (y/n/s/e)

# Unstage a file
git restore --staged docs/GUIDE.md

# Check what is staged vs unstaged
git status
```

</details>

### Unstaging Files

#### Reverse the process

1. Focus the file in "Staged Changes"
2. Press `Ctrl+Enter` (Mac: `Cmd+Enter`) or `Space`
3. File moves back to "Changes"


## 5. Committing with Screen Readers

### The Commit Workflow

#### Standard process

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Stage changes (see Section 4)
3. Focus the commit message input (usually `Tab` or `Shift+Tab` to reach it)
4. Type your commit message
5. Press `Ctrl+Enter` (Mac: `Cmd+Enter`) to commit

#### Screen reader experience

#### NVDA/JAWS

- The commit input is announced as "Source Control Input, edit, multi-line"
- You're automatically in Forms Mode - just start typing
- The input expands as you type (supports multi-line messages)
- Press `Ctrl+Enter` (Mac: `Cmd+Enter`) to commit (not `Enter`, which adds a new line)

#### VoiceOver

- `VO+Tab` to navigate to the input
- `VO+Shift+Down` to interact
- Type your message
- `Ctrl+Enter` to commit
- `VO+Shift+Up` to stop interacting

### Writing Good Commit Messages

See [Culture & Etiquette: Writing Good Commit Messages](07-culture-etiquette.md#writing-good-commit-messages) for format guidance.

#### Quick reference

```text
fix: correct heading hierarchy in GUIDE.md

Fixes #42
```

#### Format

- First line: type + colon + short summary (50 characters max)
- Blank line
- Optional body: detailed explanation
- Optional footer: "Fixes #123" to link to issue

**Common types:** `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`

<details>
<summary>Git CLI alternative - committing</summary>

Commit from your terminal:

```bash
# Commit staged changes with a message
git commit -m "fix: correct heading hierarchy in GUIDE.md"

# Commit with a multi-line message (opens your editor)
git commit

# Stage all tracked files and commit in one step
git commit -am "docs: update screen reader instructions"
```

</details>

### What Happens After Commit

- The "Staged Changes" section clears
- Your changes are now part of Git history
- The commit exists locally only - you must **push** to send it to GitHub (see Section 6)


## 6. Push and Pull Operations

**Push** sends your local commits to GitHub.  
**Pull** downloads new commits from GitHub to your local repository.

### Pushing Your Commits to GitHub

#### After committing locally

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Look for the "Publish Branch" button (if this is a new branch) or "Sync Changes" button
3. Press `Enter` on that button

#### Alternative: Command Palette

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git push"
3. Select "Git: Push"
4. VS Code pushes your commits to GitHub

#### Screen reader feedback

- NVDA/JAWS: Status bar announces "Pushing..." then "Pushed successfully" or an error message
- Check the Source Control panel for any error messages (they appear as banner notifications)

<details>
<summary>Git CLI alternative - push and pull</summary>

Push and pull from your terminal:

```bash
# Push commits to GitHub
git push

# Push a new branch for the first time
git push -u origin feature/improve-docs

# Pull changes from GitHub
git pull

# Fetch without merging (see what changed first)
git fetch
git log HEAD..origin/main --oneline
```

</details>

<details>
<summary>Web alternative (github.com) - push and pull</summary>

On GitHub.com, there is no push/pull step - your commits are saved directly to GitHub when you use the web editor. If you edited on a branch, your changes are already on GitHub. Simply open a pull request from that branch.

If your branch is behind `main`, look for the **"Update branch"** button on your PR page to pull in the latest changes.

</details>

## What to do if push fails

- **Error: "No upstream branch"** → You need to publish the branch first (Command Palette → "Git: Publish Branch")
- **Error: "Permission denied"** → Check your authentication (see [Appendix D: Git Authentication](appendix-d-git-authentication.md))
- **Error: "Rejected - non-fast-forward"** → Someone else pushed changes; you need to pull first

### Pulling Changes from GitHub

#### When to pull

- Before you start work each day
- When GitHub shows your branch is behind the remote
- When preparing to merge a PR

#### How to pull

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git pull"
3. Select "Git: Pull"
4. VS Code fetches and merges remote changes

**If there are conflicts:** See Section 9.

#### Auto-fetch setting

- VS Code can check for remote changes automatically every few minutes
- Enable: Settings (`Ctrl+,` - Mac: `Cmd+,`) → search "git autofetch" → set to `true`


## Syncing Your Fork with the Upstream Repository

When you fork a repository and the original (upstream) repository receives new commits, your fork gets out of date. Keeping your fork current prevents merge conflicts and ensures you're working with the latest code.

### The GitHub "Sync fork" Button (Quickest Method)

For straightforward updates, GitHub has a built-in sync button:

1. Navigate to your fork on GitHub
2. On the repository page, look for the **"This branch is N commits behind owner/repo:main"** notice
3. Activate the **"Sync fork"** button next to it
4. GitHub automatically merges upstream changes into your fork's default branch
5. Then pull those changes to your local clone: `Git: Pull` from the Command Palette

#### Screen reader path

```text
On your fork's main page:
→ H or 3 to find the sync notice heading
→ Tab to "Sync fork" button → Enter
→ "Update branch" in the dialog → Enter
```

**Limitation:** The GitHub sync button only syncs the default branch. For other branches, use the git method below.

### Adding the Upstream Remote (One-Time Setup)

To sync locally using git, you first configure the upstream remote. This only needs to be done once per clone.

```text
Step 1: Open the terminal in VS Code: Ctrl+` (backtick)
Step 2: Check your current remotes:
  git remote -v
  → You should see "origin" pointing to YOUR fork
Step 3: Add the upstream remote:
  git remote add upstream https://github.com/ORIGINAL-OWNER/ORIGINAL-REPO.git
Step 4: Verify:
  git remote -v
  → You should now see both "origin" (your fork) and "upstream" (original)
```

#### Example for Accessibility Agents

```bash
git remote add upstream https://github.com/community-access/accessibility-agents.git
```

### Fetching and Merging Upstream Changes

Once your upstream remote is configured:

```bash
# 1. Fetch all updates from upstream (does not change your files yet)
git fetch upstream

# 2. Make sure you are on your default branch
git checkout main

# 3. Merge upstream changes into your local branch
git merge upstream/main

# 4. Push the updated branch to your fork on GitHub
git push origin main
```

## Via VS Code Command Palette

```text
Ctrl+Shift+P → "Git: Fetch" → select "upstream"
Ctrl+Shift+P → "Git: Merge Branch" → select "upstream/main"
Ctrl+Shift+P → "Git: Push"
```

### When Conflicts Occur During Sync

If you've made changes to the same files the upstream has changed, merge conflicts can occur during sync. The same conflict resolution flow applies - see Section 9 of this chapter.

**Best practice:** Always sync before starting new work on a fork. A quick `git fetch upstream` at the start of each session prevents conflicts from accumulating.


## 7. Discarding Changes

**Discarding = permanently deleting your local edits.** The file reverts to the state of the last commit. This is **irreversible.**

### When to Discard

- You made experimental changes and they didn't work
- You want to start over from the last commit
- You accidentally edited the wrong file

### How to Discard Changes

#### Single file

1. Open Source Control: `Ctrl+Shift+G`
2. Navigate to the file in "Changes"
3. Press `Shift+F10` for context menu
4. Select "Discard Changes"
5. Confirm in the warning dialog (VS Code will ask "Are you sure?")

#### All changes

1. `Ctrl+Shift+G`
2. Navigate to the "Changes" section heading
3. `Shift+F10` for context menu
4. Select "Discard All Changes"
5. Confirm (this affects every modified file)

**Screen reader warning:** VS Code shows a modal confirmation dialog. Navigate with `Tab`, select "Discard" or "Cancel" with `Enter`.

### Safer Alternative: Stash Instead of Discard

If you're not sure whether you'll need these changes later, use **stash** (Section 10) instead of discard. Stash saves your changes temporarily without committing them.

### Deleting a File from the Repository (Git Delete / git rm)

**Git Delete** removes a file from both your working directory AND Git's tracking. This is different from discarding changes - it permanently removes the file from the repository history going forward.

#### How to use

1. Open the file you want to remove in the editor
2. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
3. Type "Git: Delete"
4. Confirm the deletion

The file is staged for deletion - you still need to commit to record the removal.

#### When to use Git Delete vs. just deleting the file

- Simply deleting a file from Explorer leaves it as an "untracked deletion" in Git
- Using `Git: Delete` (git rm) stages the deletion in one step
- Use `git rm` when you want to track the file removal as part of your next commit


## 8. Timeline View - File History and Blame

The **Timeline view** shows the Git history of the currently open file: every commit that touched this file, who made it, and when.

### Opening Timeline View

#### Method 1: Explorer Sidebar

1. Open Explorer: `Ctrl+Shift+E`
2. At the bottom of the Explorer, there's a "Timeline" section
3. `Tab` or `Arrow` to navigate into Timeline
4. The list shows all commits affecting the currently open file

#### Method 2: Command Palette

1. Open a file in the editor
2. `Ctrl+Shift+P`
3. Type "timeline"
4. Select "View: Show Timeline"

### What Timeline Shows

For each commit entry:

- **Commit message** (first line)
- **Author name**
- **Relative time** (example: "3 days ago" or "2 hours ago")
- **Commit hash** (short form, like `a3f2b9c`)

**Screen reader announcement:** "docs: add Timeline Guide, Jeff, 2 days ago"

### Viewing a Commit's Changes

1. Navigate to a commit in the Timeline list
2. Press `Enter`
3. A diff view opens showing what changed in that specific commit

This is incredibly useful for understanding:

- When a particular line was added
- Why a section was removed
- What the file looked like at any point in history

### Git Blame - Line-by-Line History

**Git Blame** shows who last modified each line of the file.

#### How to access

1. Open a file in the editor
2. `Ctrl+Shift+P`
3. Type "git blame"
4. Select "Git: Toggle Blame"

#### What appears

- Inline annotations next to every line (visually)
- Hover over a line to see commit details

#### For screen reader users

- The inline blame annotations can add noise
- Use **Timeline view instead** to see recent changes to the whole file
- Use `Ctrl+F` to search the Timeline list for a specific author or date

**Useful blame settings** (add to `.vscode/settings.json` or user Settings):

| Setting | Default | What It Does |
| ---------  | ---------  | -------------  |
| `git.blame.ignoreWhitespace` | `false` | When `true`, whitespace-only changes (reformatting) are excluded from blame - useful when code was reformatted without logic changes |
| `git.blame.editorDecoration.disableHover` | `false` | When `true`, disables the hover tooltip on blame annotations - reduces screen reader noise if you find the blame decorations intrusive |


## 9. Resolving Merge Conflicts in VS Code

Merge conflicts happen when two people edit the same lines of a file. Git can't decide which version to keep, so it asks you to choose.

**Prerequisite:** Read [Merge Conflicts](06-merge-conflicts.md) for the underlying concepts. This section covers the VS Code-specific workflow.

### How VS Code Displays Conflicts

When you open a file with conflicts, you see something like:

```markdown
<<<<<<< HEAD
## Timeline View - File History
=======
## Timeline View - Git History and Blame
>>>>>>> feature/improve-timeline-guide
```

**VS Code adds buttons above each conflict** (visually):

- "Accept Current Change" (keeps HEAD version)
- "Accept Incoming Change" (keeps the other branch's version)
- "Accept Both Changes" (keeps both, one after the other)
- "Compare Changes" (opens side-by-side diff)

### Screen Reader Workflow for Resolving Conflicts

**The buttons are NOT accessible via keyboard.** Use this method instead:

1. **Identify the conflict markers:**
   - `<<<<<<<` marks the start
   - `=======` separates the two versions
   - `>>>>>>>` marks the end

2. **Read both versions:**
   - The section between `<<<<<<<` and `=======` is **your current branch** (HEAD)
   - The section between `=======` and `>>>>>>>` is **the incoming branch** (the branch you're merging)

3. **Decide what to keep:**
   - Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Delete the version you don't want
   - Or rewrite the section combining both versions
   - Save the file

4. **Stage the resolved file:**
   - `Ctrl+Shift+G` to open Source Control
   - The file appears in "Merge Changes" section
   - Stage it (presses `Ctrl+Enter` or `Space`)

5. **Commit the merge:**
   - Type commit message (or keep the auto-generated one: "Merge branch 'feature/...' into main")
   - `Ctrl+Enter` (Mac: `Cmd+Enter`) to commit

### Using Accessible Diff for Conflict Review

**Better approach:** Use the Accessible Diff Viewer (`F7`) to navigate conflict hunks systematically.

1. Open the conflicted file
2. Press `F7` to jump to the first conflict hunk
3. Press `Alt+F2` to open Accessible View
4. Read both versions clearly
5. Press `Escape` to return to editor
6. Manually edit to resolve
7. Press `F7` to jump to the next conflict
8. Repeat until all conflicts resolved

#### This gives you structured, hunk-by-hunk navigation instead of searching for markers manually

### Aborting a Merge

If you want to cancel the merge and go back to before you started:

1. `Ctrl+Shift+P`
2. Type "git abort"
3. Select "Git: Abort Merge"

Everything returns to the pre-merge state.


## 10. Stash Management

**Stash** temporarily saves your uncommitted changes so you can switch branches or pull updates without committing half-finished work.

### When to Use Stash

- You need to switch branches but have uncommitted changes
- You want to pull updates from GitHub but have local edits
- You want to save experimental work without committing it

### Creating a Stash

#### Method 1: Command Palette

1. `Ctrl+Shift+P`
2. Type "git stash"
3. Select "Git: Stash"
4. Optionally type a stash message (helps you remember what's in it)

#### What happens

- Your uncommitted changes disappear from the editor
- The files revert to the last commit
- Your changes are saved in a hidden Git stash
- You can now switch branches or pull safely

### Viewing Stashes

#### Command Palette

1. `Ctrl+Shift+P`
2. Type "git stash list"
3. Select "Git: Show Stash"

#### Alternative: Integrated Terminal

```bash
git stash list
```

Output looks like:

```text
stash@{0}: WIP on feature/docs: add Timeline guide
stash@{1}: WIP on main: fix typo
```

### Applying a Stash

#### To restore your stashed changes

1. `Ctrl+Shift+P`
2. Type "git stash apply"
3. Select "Git: Apply Latest Stash"

#### Or to apply a specific stash

1. `Ctrl+Shift+P`
2. Type "git stash pop"
3. Select "Git: Pop Stash..."
4. Choose which stash from the list

#### Difference between Apply and Pop

- **Apply**: restores changes and keeps the stash (you can apply it again later)
- **Pop**: restores changes and deletes the stash

### Dropping a Stash

If you no longer need what's in a stash:

1. `Ctrl+Shift+P`
2. Type "git stash drop"
3. Select "Git: Drop Stash..."
4. Choose which stash to delete


## 10b. Emergency Recovery - git reflog

`git reflog` is the safety net you reach for when something goes seriously wrong: an accidental hard reset, a lost branch, a rebase that destroyed commits you needed. It is the most underused recovery tool in Git.

**What reflog records:** Every time the `HEAD` pointer moves - from commits, resets, rebases, checkouts, merges - Git quietly records it in the reflog. These entries are kept for 90 days by default.

### When to Use Reflog

| Scenario | What happened | Reflog solution |
| ----------  | --------------  | ------------------  |
| Deleted a branch by mistake | `git branch -D feature/x` | Find the last commit SHA from reflog → recreate branch |
| `git reset --hard` lost commits | Moved HEAD to older commit | Find the SHA before the reset → reset back to it |
| Rebase went wrong | Commits appear lost | Find pre-rebase HEAD → reset to it |
| Accidentally force-pushed | Local history destroyed | Find the SHA from reflog → restore |

### Reading the Reflog in VS Code Terminal

```bash
git reflog
```

Output looks like:

```text
abc1234 HEAD@{0}: commit: Fix typo in README
bcd2345 HEAD@{1}: reset: moving to HEAD~1
cde3456 HEAD@{2}: commit: Add accessibility section
def4567 HEAD@{3}: checkout: moving from main to feature/docs
```

Each line: `<SHA> HEAD@{N}: <what happened>`

**Screen reader tip:** Run this in the integrated terminal (`Ctrl+Backtick`). The output is plain text - read line by line with ↓. You are looking for the SHA just before the action that caused the problem.

### Recovering Lost Commits

#### If you need to restore a commit that has been lost

```bash
# Step 1 - Find the last good commit SHA in reflog
git reflog

# Step 2 - Preview what that commit looked like
git show abc1234

# Step 3a - Create a new branch at that point (safest)
git branch recovery/my-lost-work abc1234

# Step 3b - OR reset the current branch to that point
git reset --hard abc1234
```

> **Use `git branch` over `git reset --hard` when recovering** - creating a branch is non-destructive; you keep both the current state and the recovered state, then decide which to keep.

### Recovering a Deleted Branch

```bash
# Find the last commit on the deleted branch
git reflog | grep 'feature/deleted-branch-name'

# Recreate the branch at that SHA
git checkout -b feature/deleted-branch-name abc1234
```

### Why Reflog Is Local-Only

Reflog records are stored in your local `.git/` directory and are **not pushed to GitHub**. If your entire local clone is destroyed (hard drive failure, `rm -rf`), reflog cannot help - but GitHub retains the pushed commits in the remote history.

**Workshop tip:** If you run a reset or rebase during the workshop and lose something, immediately run `git reflog` before doing anything else. The recovery window is open as long as you haven't run `git gc`.


## 11. Alternative Git Interfaces

VS Code's Source Control panel is one way to use Git. These alternatives exist for different workflows.

### GitHub Desktop

- **Graphical Git client**
- Download: [desktop.github.com](https://desktop.github.com)
- Strengths: Visual diff review, simpler branch management for beginners
- Screen reader support: Partial - keyboard navigation works for core flows but some visual-only elements exist

### GitHub CLI (`gh`)

- **Command-line interface for GitHub operations**
- Install: `winget install GitHub.cli` (Windows) or `brew install gh` (macOS)
- Strengths: Fast, scriptable, plain-text output (predictable for screen readers)

#### Common commands

```bash
gh repo clone owner/repo       # Clone a repository
gh issue list                  # List issues
gh pr create                   # Create a PR interactively
gh pr list                     # List your PRs
gh pr view 14                  # Read PR #14
```

See [Culture & Etiquette](07-culture-etiquette.md) for more `gh` examples.

### Git CLI (Terminal)

- **The standard Git command-line interface**
- Included with VS Code (integrated terminal: `Ctrl+Backtick`)

#### Common commands

```bash
git status                     # Show modified files
git add .                      # Stage all changes
git commit -m "message"        # Commit with message
git push                       # Push to GitHub
git pull                       # Pull from GitHub
git log                        # View commit history
```

**Screen reader tip:** Terminal output is plain text - more predictable than GUI elements for some operations.


## VS Code Keyboard Shortcuts - Git Operations Quick Reference

| Action | Shortcut |
| --------  | ----------  |
| Open Source Control | `Ctrl+Shift+G` |
| Stage file | `Ctrl+Enter` (on file in Changes) |
| Unstage file | `Ctrl+Enter` (on file in Staged Changes) |
| Commit | `Ctrl+Enter` (in message input) |
| View file diff | `Enter` (on file in Source Control) |
| Next diff hunk | `F7` |
| Previous diff hunk | `Shift+F7` |
| Open Accessible Diff Viewer | `Alt+F2` (in diff view) |
| Accessible Help | `Alt+H` (in any panel) |
| Open Timeline view | `Ctrl+Shift+E` → navigate to Timeline section |
| Integrated terminal | `Ctrl+Backtick` |
| Delete file from repo (git rm) | `Ctrl+Shift+P` → "Git: Delete" |


## Try It: Clone, Branch, Commit

**Time:** 5 minutes | **What you need:** VS Code with Git configured

Do the complete Git workflow once, start to finish:

1. **Clone** - Press `Ctrl+Shift+P`, type `Git: Clone`, press `Enter`. Paste `https://github.com/Community-Access/vscode-sci-fi-themes.git` and choose a folder. VS Code opens the repo.
2. **Create a branch** - Click the branch name in the status bar (bottom left) or press `Ctrl+Shift+P` → `Git: Create Branch`. Name it `chapter11/your-name`.
3. **Make a change** - Open a theme file in the `themes/` folder (for example, `star-trek-settings.json`). Add a new thinking phrase to the array.
4. **Stage** - Press `Ctrl+Shift+G` to open Source Control. Navigate to your changed file and press `Enter` to stage it (or use the `+` button).
5. **Commit** - Tab to the message input, type `feat: add new thinking phrase`, press `Ctrl+Enter`.
6. **Push** - Press `Ctrl+Shift+P` → `Git: Push`.

**You're done.** You just completed the full Git cycle: clone → branch → edit → stage → commit → push.

> **What success feels like:** Your change is on GitHub. You can verify by visiting the repository and switching to your branch. Every future contribution follows this same six-step pattern. And your Copilot Chat now has a custom sci-fi loading phrase you wrote.


*Next: [GitHub Pull Requests Extension](12-github-pull-requests-extension.md)*  
*Back: [VS Code Setup & Accessibility Basics](10-vscode-basics.md)*  
*Related: [Merge Conflicts](06-merge-conflicts.md) | [Culture & Etiquette](07-culture-etiquette.md)*
