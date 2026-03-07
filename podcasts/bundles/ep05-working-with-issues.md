# Git Going with GitHub - Audio Series

## Episode 5: Working with Issues

**Series:** Git Going with GitHub
**Episode:** 5 of 44
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

- What issues are and why they matter in open source projects
- How to find, read, filter, and search for issues
- Filing a new issue with a clear title and description
- Participating in issue discussions with comments and reactions
- Managing issues: assigning, labeling, closing, reopening
- How issues connect to pull requests and project planning


### Concept Coverage Checklist

Every concept below MUST be explained during the episode. Do not skip any.
When a concept is complex, use an analogy or real-world comparison to make it concrete.

- [ ] **What an issue is: a unit of work, bug report, or feature request**
- [ ] **The Issues tab: list view, filters, and search**
- [ ] **Issue anatomy: title, body (markdown), labels, assignees, milestone**
- [ ] **Filtering issues: by label, author, assignee, milestone, open/closed**
- [ ] **Using the search bar with qualifiers like is:open label:bug**
- [ ] **Reading an issue: the timeline of comments, events, and references**
- [ ] **Filing a new issue: writing a clear title and descriptive body**
- [ ] **Using markdown in issue bodies: code blocks, lists, task lists, links**
- [ ] **Commenting on issues: adding context, asking questions, reacting**
- [ ] **Reactions (emoji) as lightweight feedback**
- [ ] **Referencing issues from other issues or pull requests with #number**
- [ ] **Assigning an issue to yourself or someone else**
- [ ] **Applying and removing labels**
- [ ] **Closing an issue and what closed means**
- [ ] **Reopening a closed issue**
- [ ] **The connection between issues and pull requests**
- [ ] **Using gh issue commands from the terminal as an alternative**

### Prerequisites (briefly recap these)

Listeners may have heard these earlier episodes. Briefly remind them of:

- Episode 3: Repository tabs and navigation

### Cross-Referenced Material

The following supplementary content is included after the primary source.
Reference it naturally when a concept would benefit from additional context,
but keep the main narrative focused on the primary chapter.

- Labels, Milestones, Projects - issue organization

### Primary Source Material

# Working with Issues
> **Listen to Episode 5:** [Working with Issues](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Filing, Managing, and Participating in GitHub Issues

> Issues are where open source collaboration begins. This guide covers everything from finding the right issue to file a perfect bug report - all with your keyboard and screen reader.
>
> **Screen reader note - New Issues Experience:** This guide uses GitHub's improved Issues experience, which provides better ARIA landmark structure and live-region announcements for screen readers. This feature may already be active for your account - it has been broadly rolled out and may no longer appear as a Feature Preview toggle at all.
>
> **To verify:** Activate the **User Menu** button (top-right of any GitHub page) → activate **"Feature preview"** → scan the list for **"New Issues Experience"**:
> - If listed and the toggle announces **"Pressed"** (or **"Disable"**) - already enabled, no action needed
> - If listed but **not Pressed** (or **"Enable"**) - activate the toggle to enable it
> - If not listed at all - the feature has graduated to the standard interface; it is active automatically
>
> Full step-by-step instructions with per-screen-reader commands are in [Pre-Workshop Setup, Step 4](00-pre-workshop-setup.md#step-4-check-github-feature-preview-settings).
>
> **Browse vs Focus Mode (NVDA):** Toggle between modes with `NVDA+Space` (NVDA key = `Insert` or `Caps Lock`). Use **Browse Mode** (the default) for reading lists, headings, and issue content. Switch to **Focus Mode** when typing in text fields and search boxes. Use `NVDA+F7` at any time to open a list of all headings, links, form fields, buttons, and landmarks on the page - this is your orientation tool.


## What Is a GitHub Issue?

An issue is a discussion thread attached to a repository. Issues are used for:

- **Bug reports** - "This feature doesn't work when using a screen reader"
- **Feature requests** - "It would help if the submit button had an accessible label"
- **Questions** - "How do I configure X for Y use case?"
- **Tasks** - "Update the README with screen reader instructions"
- **Accessibility reports** - "The infinite scroll carousel is not keyboard accessible"

Every issue has a **number** (`#42`), a **state** (Open or Closed), a **title**, a **description**, and a **comment thread**. Issues are public by default on public repositories.

> **Learning Room connection:** In the `learning-room` repo, every challenge from `docs/CHALLENGES.md` becomes an issue. For example, Challenge 1 ("Fix Broken Link") is filed as an issue pointing to `docs/welcome.md`, describing the broken link and linking to the challenge success criteria. When you open a PR to fix it, you reference the issue with `Closes #XX` to automatically close it on merge.


## Navigating to the Issues List

### From a repository page

<details>
<summary>Visual / mouse users</summary>

Click the **Issues** tab in the repository navigation bar below the repository name. The tab shows the open issue count (e.g., “Issues · 14”).

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. Press `D` to navigate to the "Repository navigation" landmark
2. Press `K` or `Tab` to move through the tab links
3. Find "Issues" - it will be announced with the count: "Issues, 14 open"
4. Press `Enter` to open the Issues tab

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. `VO+U` → Landmarks → navigate to "Repository navigation"
2. `VO+Right` or Quick Nav `K` to move through tab links
3. Find "Issues" - VoiceOver announces the count: "Issues 14"
4. `VO+Space` to activate the Issues tab

</details>

<details>
<summary>GitHub CLI (gh) alternative</summary>

List open issues directly from your terminal:

```bash
gh issue list
```

Filter by label, assignee, or state:

```bash
gh issue list --label "good first issue"
gh issue list --assignee @me
gh issue list --state closed
```

**Setup:** Install the GitHub CLI from [cli.github.com](https://cli.github.com) and authenticate with `gh auth login`. See [Appendix D](appendix-d-git-authentication.md) for details.

</details>

### Direct URL

Navigate directly: `https://github.com/[owner]/[repo]/issues`


## The Issues List Page

### Page structure

```
[Search / filter bar]          ← controls at the top
[State tabs: Open | Closed]    ← filter by status
[Issues list]                  ← each issue is one list item or heading
[Pagination]                   ← at the bottom
```

### How to read the issue list

<details>
<summary>Visual / mouse users</summary>

The issues list shows each issue as a row with its title, labels, number, assignee avatars, and comment count. Closed issues show a purple merged/closed badge. Click any issue title to open it. Use the **Open** and **Closed** toggle links above the list to switch between states.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. Press `D` to reach the “Search Results List” landmark
2. Press `3` (h3) to navigate by issue titles - each issue title is an h3 link
3. Press `I` to move between list items if you want more detail per item
4. Press `Enter` on a title to open that issue

</details>

<details>
<summary>Screen reader users (VoiceOver)</summary>

1. `VO+U` → Landmarks → navigate to “Search Results List”
2. `VO+Down` to read through items
3. `H` (with Quick Nav on) or `VO+U` → Headings to jump by issue title

</details>

### What is announced per issue

When you navigate to an issue in the list, your screen reader will announce (in some order):
- Issue title (as a link)
- Issue number (`#42`)
- Labels (e.g., "bug, good first issue")
- Who opened it and when ("Opened 3 days ago by username")
- Number of comments ("5 comments")


## Filtering and Searching Issues

Filtering lets you narrow the list to find the right issue quickly.

### Using the search/filter bar

1. Press `F` or `E` to jump to the filter input field (or navigate from the landmark)
2. Switch to Focus Mode (`NVDA+Space` / `Insert+Z`) if not already in it
3. Type your filter or search query
4. Press `Enter` to apply

**Useful filter queries:**
```
is:open label:"good first issue"    ← great for finding your first contribution
is:open label:accessibility         ← accessibility-related open issues
is:open assignee:@me                ← issues assigned to you
is:open no:assignee                 ← unassigned issues
is:open author:@me                  ← issues you filed
mentions:@me                        ← where you were @mentioned
is:open is:unread                   ← issues with unread activity
```

### Using the filter buttons

Above the issue list, there is an **actions toolbar** with filter buttons for Labels, Milestones, Assignees, etc.

<details>
<summary>Visual / mouse users</summary>

The filter bar sits above the issue list. Click **Label**, **Milestone**, or **Assignee** to open a dropdown, select the values you want, then click anywhere outside to close. The issue list updates immediately.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. Press `Tab` from the search bar (or `Shift+Tab` from the issue list) to reach the actions toolbar
2. Press `←/→` to move between toolbar options (Label, Milestone, Assignee, Sort)
3. Press `Enter` to open the selected dropdown
4. Use `↑/↓` to navigate options in the dropdown
5. Press `Enter` or `Space` to select
6. Press `Escape` to close (filter applies immediately)

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. `Tab` forward from the search bar to reach the filter buttons, or use Quick Nav to find them
2. `VO+Left/Right` to move between Label, Milestone, Assignee, Sort buttons
3. `VO+Space` to open the selected dropdown
4. `VO+Down` or arrow keys to navigate the dropdown options
5. `VO+Space` to select/deselect
6. `Escape` to close (filter applies immediately)

</details>

<details>
<summary>GitHub CLI (gh) alternative - filtering</summary>

Filter issues by label, milestone, or assignee without navigating dropdown menus:

```bash
# Filter by label
gh issue list --label "accessibility"

# Combine filters
gh issue list --label "good first issue" --assignee @me

# Filter by milestone
gh issue list --milestone "Hackathon Day 1"

# Search with keywords
gh issue list --search "screen reader"
```

</details>

### Open vs Closed filter

The two state links "Open" and "Closed" appear near the top of the issue list. Press `K` to navigate links until you find them, or look for them as buttons near the search bar.


## Reading an Issue

### Landing on an issue page

When you open an issue, the page structure is:

```
[Issue title - h1]
[Open/Closed status badge]
[Author, timestamp, comment count]
─────────────────────────────────
[Issue description - Main content]   ← the original post
[Labels, Assignees sidebar - h3s]
─────────────────────────────────
[Activity / Timeline]                ← comments and events
  [First comment - h3]
  [Second comment - h3]
  ...
─────────────────────────────────
[Add a comment - landmark]
[Comment text area]
[Close issue / Submit button]
```

### Quick navigation

| Goal | Key |
|------|-----|
| Hear the issue title | `1` |
| Jump to description | `2` (first h2 is usually "Description") |
| Jump to Activity section | `2` → next h2 is "Activity" |
| Navigate between comments | `3` (each comment is h3) |
| Jump to comment box | `D` → "Add a comment" landmark |
| Navigate labels/assignees | `H` or `3` in the sidebar |

### Reading the issue description

1. Press `2` to reach the "Description" heading
2. Press `↓` to read the content line by line, OR
3. Use `NVDA+↓` (NVDA say all) to have it read continuously

> **Browse Mode recommended:** The issue detail page is primarily text-based. Stay in **Browse Mode** (not Focus Mode) for reading - it gives you full heading (`H`), section (`D`), and link (`K`) navigation throughout the page. Only switch to Focus Mode when you need to type in a comment box.

Markdown in the description renders as proper HTML: headings become actual headings, bullets become lists, code blocks become `<code>` elements with the text "code block" announced.

<details>
<summary>GitHub CLI (gh) alternative - reading an issue</summary>

View an issue's full content in your terminal:

```bash
# View issue in terminal (renders Markdown)
gh issue view 42

# Open the issue in your browser instead
gh issue view 42 --web

# View just the comments
gh issue view 42 --comments
```

The terminal output includes the title, state, labels, assignees, body, and comments. Markdown renders as plain text - headings use `#` symbols, lists use `-`, and code blocks are preserved.

</details>

### Reading comments and activity

Each comment in the thread is marked as an h3. Navigate between them with `3`.

Each comment announces:
- Commenter's username
- Timestamp ("2 days ago")
- Body text
- Reactions (if any - announced as a button with an emoji and count)
- A "Reply" link

Other timeline events (label added, PR linked, issue closed) appear between comments in the activity stream. They are typically announced as text paragraphs.


## Leaving a Comment

### Step-by-step

<details>
<summary>Visual / mouse users</summary>

1. Scroll to the bottom of the issue page
2. Click in the **Leave a comment** text area
3. Type your comment (Markdown is supported - use the toolbar buttons above the text for bold, italic, code, etc.)
4. Optionally click **Preview** to see how it will render
5. Click the green **Comment** button to post

To close the issue while commenting: click the arrow on the **Close issue** button and choose **Close with comment**.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. Navigate to the comment box: `D` → "Add a comment" landmark, or press `E` or `F` to focus the text area
2. Enter Focus Mode: NVDA: `Insert+Space` | JAWS: `Insert+Z`
3. Type your comment (plain text or Markdown)
4. To preview: `Tab` to the **Preview** button, press `Enter`; then `Tab` back to **Write** to continue editing
5. Submit: press `Ctrl+Enter` from inside the text area, OR press `Escape` → `Tab` to the **Comment** button → `Enter`

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. Navigate to the comment box: `VO+U` → Landmarks → "Add a comment", or Quick Nav `F` to jump to the text area
2. Interact with the text area: `VO+Shift+Down`
3. Type your comment (plain text or Markdown)
4. To preview: `VO+Shift+Up` to stop interacting, then `Tab` to the **Preview** button and `VO+Space`
5. Submit: press `Cmd+Return` from inside the text area, OR `VO+Shift+Up` → `Tab` to the **Comment** button → `VO+Space`

</details>

<details>
<summary>GitHub CLI (gh) alternative - commenting</summary>

Leave a comment from your terminal:

```bash
# Interactive: opens your default editor ($EDITOR) to write the comment
gh issue comment 42

# Inline: provide the comment text directly
gh issue comment 42 --body "Thanks for reporting this. I can reproduce the issue with NVDA + Chrome."
```

</details>

### Markdown formatting while typing

These keyboard shortcuts work inside the text area (Focus Mode):

| Shortcut | Result |
|----------|--------|
| `Ctrl+B` | **Bold text** |
| `Ctrl+I` | *Italic text* |
| `Ctrl+E` | `Code span` |
| `Ctrl+K` | [Link text](URL) dialog |
| `Ctrl+Shift+.` | > Blockquote |
| `Ctrl+Shift+L` | - Bullet list |
| `Ctrl+Shift+7` | 1. Numbered list |

### GitHub shortcuts for the Issues pages

These are the GitHub built-in shortcuts for working with issues. Enable Focus Mode first (NVDA: `NVDA+Space`, JAWS: `Insert+Z`) before using single-key shortcuts.

**On the Issues list page:**

| Shortcut | Action |
|---|---|
| `?` | Show all shortcuts for this page |
| `G I` | Jump to the Issues tab from anywhere in the repo |
| `C` | Create a new issue |

**Shortcut note:** For `G I`, press `G`, release it, then press `I` (two sequential key presses, not simultaneous).
| `Ctrl+/` (Win) or `Cmd+/` (Mac) | Focus the issues search and filter bar |
| `U` | Filter by author |
| `L` | Filter by or edit labels |
| `M` | Filter by or edit milestones |
| `A` | Filter by or edit assignee |
| `O` or `Enter` | Open the selected issue |

**On an open issue:**

| Shortcut | Action |
|---|---|
| `M` | Set a milestone |
| `L` | Apply a label |
| `A` | Set an assignee |
| `X` | Link a related issue from the same repository |
| `R` | Quote selected text in your reply (select text first) |
| `Ctrl+Shift+P` (Win) or `Cmd+Shift+P` (Mac) | Toggle Write and Preview tabs |
| `Ctrl+Enter` | Submit comment from inside the text area |

> **`R` to quote is a power move:** Select any text in a comment while in Browse Mode (`Shift+Arrow` to select), then press `R`. GitHub puts the quoted text in the comment box as a Markdown blockquote. Much faster than typing `> ` manually.

For the full shortcut system, see [Screen Reader Cheat Sheet - GitHub Shortcuts section](appendix-b-screen-reader-cheatsheet.md#github-built-in-keyboard-shortcuts).

1. Navigate to your comment (`3` to jump to comments)
2. Find the "..." (ellipsis) menu button near your comment
3. Press `Enter` on "Edit" from that menu
4. The comment turns into a text area - switch to Focus Mode
5. Make your changes
6. Tab to "Update comment" button → Enter


## Filing a New Issue

### Navigating to New Issue

<details>
<summary>Visual / mouse users</summary>

From the Issues list page, click the green **New issue** button in the top-right of the issue list. If the repository has templates, a template picker page appears - click **Get started** next to the template that fits your needs, or click **Open a blank issue** to skip templates.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

From the Issues list:
1. Press `K` to navigate links and find the "New issue" button/link
2. Press `Enter`
3. If a template picker appears: press `3` to navigate template names, read the description below each, then press `Enter` on "Get started" for the right template - or find "Open a blank issue." link if no template fits

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

From the Issues list:
1. Quick Nav `B` or `VO+U` → Buttons to find the "New issue" button
2. `VO+Space` to activate it
3. If a template picker appears: Quick Nav `H` or `VO+Cmd+H` to navigate template names, then `VO+Space` on "Get started" for the right template - or Quick Nav `K` to find the "Open a blank issue" link

</details>

### Filling Out the Issue Form

The issue form has these fields (order may vary depending on the template):

**Title field:**
1. Find the Title input field (`F` or by landmark)
2. Focus Mode → type a clear, specific title
3. Good title: "Screen reader announces wrong element count on Issues list with 50+ items"
4. Bad title: "Bug with screen reader"

**Description / Body field:**
1. Tab to the body text area
2. Focus Mode → type using the Markdown template provided
3. If no template, use this structure:

```markdown
## What happened

Describe what you observed.

## What I expected

Describe what should have happened.

## How to reproduce

1. Step one
2. Step two
3. Step three

## Environment

- Screen reader: [NVDA 2025.3.3 / JAWS 2026 / VoiceOver macOS Sonoma]
- Browser: [Chrome 124 / Firefox 125 / Safari 17]
- OS: [Windows 11 / macOS 14]
- GitHub interface: [Modern experience (default since Jan 2026) / Classic experience]

## Additional context

Any other information, screenshots (with alt text), or links.
```

**Assigning labels from the sidebar:**

While the form is open, the sidebar has dropdowns for Labels, Assignees, and Milestone.

<details>
<summary>Visual / mouse users</summary>

In the right sidebar, click the gear icon () next to **Labels**. A dropdown opens - click a label to select it. Click outside to close. Repeat for **Assignees** and **Milestone**.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. `Tab` away from the text area (or press `Escape` to leave Focus Mode)
2. Navigate to the sidebar - press `H` to find "Labels" heading
3. Press `Enter` on the Labels gear/button
4. Dropdown opens → `↑/↓` to navigate labels
5. `Enter` to select/deselect
6. `Escape` to close (selections save automatically)

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. `VO+Shift+Up` to stop interacting with the text area
2. `VO+U` → Headings to find the "Labels" heading in the sidebar
3. `VO+Space` on the Labels gear/button to open the dropdown
4. `VO+Down` or arrow keys to navigate labels
5. `VO+Space` to select/deselect
6. `Escape` to close (selections save automatically)

</details>

**Submitting the issue:**
1. Tab to "Submit new issue" button
2. Press `Enter`

<details>
<summary>GitHub CLI (gh) alternative - filing a new issue</summary>

Create an issue from your terminal:

```bash
# Interactive: prompts for title, body, labels, and assignees
gh issue create

# Inline: provide everything on the command line
gh issue create --title "Screen reader announces wrong count on Issues list" \
  --body "## What happened\n\nThe count says 14 but only 12 issues are visible." \
  --label "bug,accessibility" \
  --assignee @me

# Use a template (if the repo has issue templates)
gh issue create --template "bug_report.md"
```

The interactive mode walks you step-by-step through title, body (opens your editor), labels, and assignees - fully usable from a terminal with a screen reader.

</details>


## Cross-Referencing Issues

Linking issues and PRs to each other creates a trail of context that helps everyone understand the project's history.

### Closing keywords in PR descriptions or issue comments

When you type these phrases in a PR description or comment (followed by an issue number), GitHub creates a connection:

| Keyword | Effect on merge |
|---------|----------------|
| `Closes #42` | Closes issue #42 when the PR merges |
| `Fixes #42` | Same - typically for bugs |
| `Resolves #42` | Same - general use |
| `refs #42` | Creates a reference without auto-closing |
| `cc @username` | Notifies the person |

### Mentioning another issue in a comment

Simply type `#` followed by a number anywhere in a comment body. GitHub autocompletes with a dropdown of matching issues and PRs:

```
Step 1: Type # in the comment box (Focus Mode)
Step 2: A dropdown appears with issues and PRs
Step 3: ↑/↓ to navigate, or type more numbers to filter
Step 4: Enter to insert the reference
```

### Cross-repo references

`owner/repo#42` - references issue #42 in a different repository.


## Sub-Issues - Parent and Child Relationships

**Sub-issues** (released 2025) let you nest issues inside a parent issue to break large work into tracked pieces. A "parent" issue contains a list of child issues; each child is a full issue with its own discussion, labels, and assignees.

### When to Use Sub-Issues

| Use case | Example |
|----------|---------|
| Large feature broken down | Parent: "Redesign navigation"; Children: "Keyboard nav," "Screen reader nav," "Mobile nav" |
| Epic tracking | Parent: "WCAG 2.1 AA compliance"; Children: one issue per failing criterion |
| Release milestone | Parent: "v2.0 release"; Children: every required PR/fix |

### Creating a Sub-Issue

From any open issue:

```
1. Open the parent issue page
2. Scroll to (or H-navigate to) the "Sub-issues" section in the issue body/sidebar
3. Tab to "Add sub-issue" button → Enter
4. Type the issue number or title to search
5. Select the issue from the dropdown → Enter to link
   Or: select "Create new issue" to create and link in one step
```

**Screen reader note:** The sub-issues section is announced as a region. After linking, the child issue appears as a list item with a checkbox showing its open/closed state. Tab through to read each child's title and status.

### Reading Sub-Issues on a Parent Issue

```
H → "Sub-issues" heading
↓ → list of linked child issues
Each item: [checkbox state] [issue title] [#number] [open/closed badge]
Tab → "Add sub-issue" button (if you have write access)
```

**Progress indicator:** The parent issue shows a completion bar (e.g., "3 of 7 completed") based on how many child issues are closed. Screen readers announce this as a progress region.

### Viewing a Child Issue's Parent

Every child issue shows a "Parent issue" link near the top of the page (above the description). Navigate with `H` or links (`K`) to find it.

### Sub-Issues vs. Task Lists

| Feature | Task list checkboxes | Sub-issues |
|---------|---------------------|------------|
| Location | Issue description (Markdown) | Sidebar/section (structured data) |
| Each item is | Text line + checkbox | A full GitHub issue |
| Tracked in Projects | No (checkbox only) | Yes (each child tracks independently) |
| Cross-repo | No | Yes |
| Best for | Quick checklists in one issue | Multi-issue work tracking |

> **Workshop tip:** If you are working on a feature that requires multiple PRs or involves several team members, ask the maintainer to create a parent issue. You can then claim individual child issues without one person owning the whole feature.


## Managing Issues (for Maintainers and Triagers)

### Closing an issue

<details>
<summary>Visual / mouse users</summary>

Scroll to the bottom of the issue page. Click the **Close issue** button next to the comment box. Optionally type a closing comment first. If you want to record a reason, click the dropdown arrow on the button and choose **Close as completed** or **Close as not planned**.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS - Windows)</summary>

1. **Keyboard shortcut (fastest):** Navigate to the comment text area (`D` → "Add a comment" landmark), switch to Focus Mode, then press `Ctrl+Shift+Enter` to close the issue
2. **Button approach:** `Tab` to the "Close issue" button (at the bottom of the page, near the comment box) and press `Enter`
3. Optionally leave a closing comment first

</details>

<details>
<summary>Screen reader users (VoiceOver - macOS)</summary>

1. **Keyboard shortcut (fastest):** `VO+U` → Landmarks → "Add a comment", interact with the text area (`VO+Shift+Down`), then press `Cmd+Shift+Return` to close the issue
2. **Button approach:** Quick Nav `B` or `Tab` to find the "Close issue" button, then `VO+Space`
3. Optionally leave a closing comment first

</details>

<details>
<summary>GitHub CLI (gh) alternative - closing and reopening</summary>

Close or reopen an issue from your terminal:

```bash
# Close an issue
gh issue close 42

# Close with a reason
gh issue close 42 --reason "completed"
gh issue close 42 --reason "not planned"

# Close with a comment
gh issue close 42 --comment "Fixed in PR #45."

# Reopen a closed issue
gh issue reopen 42
```

</details>

### Reopening a closed issue
If an issue is Closed, the "Close issue" button becomes "Reopen issue" - navigate and activate to reopen.

### Assigning an issue
From the issue sidebar:
1. Navigate to "Assignees" heading (`3` or `H`)
2. Activate the gear/plus button
3. Type a username in the search field
4. Select from the dropdown

<details>
<summary>GitHub CLI (gh) alternative - assigning and labeling</summary>

Manage assignments and labels from your terminal:

```bash
# Assign yourself
gh issue edit 42 --add-assignee @me

# Add labels
gh issue edit 42 --add-label "accessibility,in progress"

# Remove a label
gh issue edit 42 --remove-label "needs triage"

# Set a milestone
gh issue edit 42 --milestone "Hackathon Day 1"
```

</details>

### Changing labels
From the issue sidebar:
1. Navigate to "Labels" heading
2. Activate the gear button
3. Select/deselect labels from the dropdown
4. Press Escape to save

### Transferring or deleting an issue
Available from the "..." (ellipsis) button at the top of the issue - navigate buttons with `B` to find it.


## The "good first issue" Label - Your Entry Point

When looking for your first open source contribution:

1. Navigate to any project's Issues tab
2. Filter by label: type `is:open label:"good first issue"` in the search
3. Read through issues until you find one in your area of interest
4. Comment on the issue: "Hi, I'd like to work on this. Can I be assigned?"
5. Wait for a maintainer to respond and assign you before starting work

**Remember:** It's respectful to ask before starting. Maintainers juggle many discussions and need to know who is working on what to avoid duplicated effort.


## Accessibility-Specific Issue Writing Tips

When filing accessibility bugs, these details help maintainers reproduce and fix the problem:

1. **Screen reader and version** - "NVDA 2025.3.3" not just "screen reader"
2. **OS and version** - "Windows 11 22H2"
3. **Browser and version** - "Chrome 124.0.6367.82"
4. **GitHub interface** - "Modern experience (default since Jan 2026)" or "Classic experience (opted out)"
5. **What was announced** - quote the exact text your screen reader spoke
6. **What should have been announced** - describe the expected behavior
7. **ARIA issue if known** - e.g., "The button has no accessible name"
8. **Steps to reproduce** - numbered, step-by-step
9. **Frequency** - "This happens every time" vs "intermittent"

**Example of a well-filed accessibility issue:**

```
Title: Issues list does not announce label filtering results to screen readers

## What happened
When I apply a label filter on the Issues list using the Labels dropdown,
the filtered list updates visually but NVDA does not announce that the
results changed or how many items are now shown.

## What I expected
After filtering, the screen reader should announce something like
"14 issues open, filtered by label: accessibility" or a live region
update indicating the results changed.

## How to reproduce
1. Navigate to any repo's Issues tab
2. Press B to navigate to the "Label" filter button
3. Press Enter to open the dropdown
4. Select the "accessibility" label
5. Press Escape to close
6. Notice: no announcement that filtering has been applied

## Environment
- Screen reader: NVDA 2025.3.3 (with NVDA+Chrome)
- Browser: Chrome 124.0.6367.82
- OS: Windows 11 22H2
- GitHub interface: Modern experience (default since Jan 2026)

## Additional context
JAWS 2026 also does not announce. VoiceOver on macOS Sonoma with
Safari 17 does announce "List updated" when filtering is applied,
so the macOS behavior appears correct.
```


## Try It: File Your First Issue

**Time:** 3 minutes | **What you need:** Browser, signed in to GitHub

Go to the Learning Room repository and file a real issue:

1. Navigate to the Issues tab (press `G` then `I` in Focus Mode)
2. Find and activate the "New issue" button (`K` to links, or `Tab` to it)
3. In the title field, type: **"Introduce myself - [Your Name]"**
4. In the description, write 2-3 sentences: who you are, what screen reader you use, and one thing you're hoping to learn today
5. Press `Ctrl+Enter` to submit (or Tab to the Submit button and press `Enter`)

**You're done.** You just filed your first GitHub issue. Go read someone else's introduction and leave a friendly comment - press `3` to jump between issue titles on the Issues list.

> **What success feels like:** Your issue is live. Other participants can see it. You just contributed to a real repository - and it took less than three minutes.


> ### Day 2 Amplifier - Accessibility Agents: `@issue-tracker`
>
> **File, read, comment on, and triage real issues manually before using any agent.** If you have not done the triage work yourself - reading descriptions, assigning labels, identifying duplicates - you cannot evaluate whether an agent's priority scoring is correct. The skill must exist before the amplifier is useful.
>
> Once you have mastered manual issue management:
> - **In VS Code** - `@issue-tracker find open issues labeled good-first-issue` searches cross-repository with community sentiment scoring, release-awareness prioritization, and batch-reply capability across every repo you have access to
> - **In your repo** - The issue templates in `accessibility-agents/.github/ISSUE_TEMPLATE/` structure both human filing and automated triage; fork `accessibility-agents` and that structure travels into any project you lead
> - **In the cloud** - GitHub Agentic Workflows triage new issues the moment they are opened: applying labels, posting first-response comments, adding to Project boards - the same triage actions you practiced manually today, running at scale
>
> *Today you are the triage engine. On Day 2, you understand the engine well enough to direct it.*


*Next: [Working with Pull Requests](05-working-with-pull-requests.md)*
*Back: [The Learning Room](03-the-learning-room.md)*
*Related: [Issue Templates Guide](15-issue-templates.md) | [Labels & Milestones](08-labels-milestones-projects.md) | [Culture & Etiquette](07-culture-etiquette.md)*



### Supplementary: Labels, Milestones, Projects - issue organization

# Appendix I: GitHub Projects Deep Dive
> **Listen to Episode 26:** [GitHub Projects Deep Dive](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Boards, Tables, Roadmaps, Automations, and Accessible Navigation

> GitHub Projects is GitHub's built-in project management system. It connects issues and pull requests from one or more repositories into a living, filterable view that your whole team can see and act on. This appendix covers everything beyond the basics introduced in [Chapter 08: Labels, Milestones, and Projects](08-labels-milestones-projects.md).


## Table of Contents

1. [Projects v2: What Changed](#1-projects-v2-what-changed)
2. [Creating a Project](#2-creating-a-project)
3. [The Three Layouts in Depth](#3-the-three-layouts-in-depth)
4. [Custom Fields](#4-custom-fields)
5. [Adding and Managing Items](#5-adding-and-managing-items)
6. [Built-In Automations](#6-built-in-automations)
7. [Iterations (Sprints)](#7-iterations-sprints)
8. [Views and Filters](#8-views-and-filters)
9. [Cross-Repository Projects](#9-cross-repository-projects)
10. [Screen Reader Navigation Reference](#10-screen-reader-navigation-reference)
11. [Accessibility Agents: `/project-status`](#11-accessibility-agents-project-status)
12. [Exercises](#12-exercises)


## 1. Projects v2: What Changed

GitHub has two generations of project tooling. The current generation - called **Projects (v2)** - is what you'll find on any repository or organization page today.

| Feature | Classic Projects (v1) | Projects v2 (current) |
|---|---|---|
| Layouts | Kanban board only | Board, Table, Roadmap |
| Custom fields | None | Text, Number, Date, Select, Iteration |
| Automations | None built-in | Native GitHub Actions integration |
| Cross-repo | No | Yes |
| Filtering | Limited | Full field/label/assignee/status queries |
| API | Limited | Full GraphQL support |

If you see "Projects (Beta)" references in older documentation, those referred to the early rollout of v2. It is now stable and the default.


## 2. Creating a Project

Projects can be created at the **organization level** (shared across all repos in an org) or at the **repository level** (scoped to one repo).

### Create from an Organization

1. Navigate to your organization page (`github.com/your-org`)
2. Select the **Projects** tab
3. Activate **"New project"** button
4. Choose a template (blank table, blank board, feature release, etc.) or start empty
5. Give the project a name and select **"Create project"**

### Create from a Repository

1. Navigate to any repository
2. Select the **Projects** tab
3. Activate **"Link a project"** or **"New project"**
4. Follow the same template/name flow

### Screen Reader: Project Creation

```
1. Navigate to org or repo Projects tab
   → Tab to the green "New project" button → Enter
2. Template modal opens
   → Arrow keys to browse template cards
   → Enter to select a template
3. Name field: type your project name
4. "Create project" button: Tab → Enter
5. You land on the new empty project
```


## 3. The Three Layouts in Depth

### Table View

The default layout. A spreadsheet-style grid where each row is an issue, PR, or draft item. Columns are fields (Title, Status, Assignee, Labels, Priority, custom fields you create).

**What it's best for:** Bulk editing, sorting, filtering, seeing many items at once with their field values.

**Keyboard navigation:**
```
T                     → Jump to table
↑/↓                   → Move between rows
←/→                   → Move between columns
Enter                 → Open item detail panel (right sidebar)
Escape                → Close detail panel
Space (on a cell)     → Edit that cell's value
F2 (on title cell)    → Edit title inline
```

**Screen reader output per row:**
> "Fix keyboard trap in modal dialog | Status: In Progress | Assignee: alice | Priority: High | Labels: bug, accessibility"

### Board View

Kanban-style columns. Each column represents a status value. Cards can be dragged between columns (or updated via keyboard by editing the Status field).

**What it's best for:** Visual workflow tracking, seeing WIP (work in progress), standup-style status reviews.

**Screen reader note:** Drag-and-drop is not keyboard accessible. Change a card's column by opening it and editing the Status field instead.

**Keyboard navigation:**
```
Tab                   → Move between columns and cards
Enter (on a card)     → Open item detail panel
B                     → Jump to board regions (if heading navigation)
Within a card:
  Enter               → Open panel
  Space               → Toggle selection (for bulk moves)
```

**Change a card's column without dragging:**
1. `Enter` to open the card
2. Navigate to the **Status** field in the right panel
3. Activate the Status dropdown
4. Select the new column value
5. `Escape` to close

### Roadmap View

A horizontal timeline. Items appear as bars spanning their start/due dates. Iterations and milestones can be visualized against real calendar time.

**What it's best for:** Release planning, sprint capacity planning, communicating timelines to stakeholders.

**Screen reader note:** Roadmap is chart-based. The underlying data is still fully accessible via the Table view - treat Roadmap as a visual summary, and use Table for all editing.

**Setting dates:**
- Add a **Date** custom field (e.g., "Start Date", "Due Date") or use a **Milestone** field
- Items without dates appear in the ungrouped section


## 4. Custom Fields

This is one of Projects v2's most powerful features. You can add fields beyond the GitHub defaults (Title, Assignee, Labels, Milestone, Repository).

### Field Types

| Type | Use Case | Example |
|---|---|---|
| **Text** | Free-form notes | "Acceptance criteria", "Design link" |
| **Number** | Story points, estimates | "Points: 3" |
| **Date** | Deadlines, start dates | "Due: 2025-06-15" |
| **Single select** | Priority, size, type | Priority: P0 / P1 / P2 |
| **Iteration** | Sprint/cycle tracking | See Section 7 |

### Creating a Custom Field

From any project view:
1. In Table view, scroll right to the `+` button at the end of the column header row
2. Activate the `+` button
3. Select a field type
4. Name the field and configure options (for select fields, type each option, press Enter to add more)
5. Confirm - the field appears as a new column

**Screen reader path:**
```
Tab to "+" column header button → Enter
→ Field type menu opens → ↑/↓ to choose type → Enter
→ Name field: type field name
→ For "Single select": type option names, Tab/Enter between options
→ "Save" button → Enter
```

### Editing a Field Value on an Item

1. In Table view, navigate to the cell where the field intersects the row
2. `Enter` or `Space` to activate the editor
3. Type value (text/number) or select from dropdown (single select)
4. `Enter` or `Tab` to confirm


## 5. Adding and Managing Items

### Add an Existing Issue or PR

From any project view:
1. Activate the **"+ Add item"** button at the bottom of a table/column
2. Type `#` to trigger the issue/PR search
3. Type a keyword or issue number
4. Select the item - it's added to the project
5. The issue/PR is now tracked in the project; it still lives in its repository

**Tip:** The issue itself will now show which projects it belongs to in its sidebar.

### Add a Draft Issue

Draft issues live only inside the project (not in any repository) until you promote them.

1. Activate **"+ Add item"**
2. Type the title directly (no `#`)
3. Press `Enter` - a draft row appears
4. Open the draft → **"Convert to issue"** button → select the repository

**When to use drafts:** Capturing ideas during planning before you're ready to commit them to a repo.

### Promote a Draft to an Issue

1. Open the draft item (`Enter` on the row)
2. Activate **"Convert to issue"** in the panel
3. Select the target repository from the dropdown
4. Confirm - the draft becomes a real issue in that repo

### Bulk Edit Items

In Table view:
1. Check the checkbox on each row (first column, `Space` to toggle)
2. A bulk action bar appears at the top
3. Options: change Status, assign label, change assignee, archive, delete


## 6. Built-In Automations

Projects v2 has native automation rules - no GitHub Actions YAML required.

### Accessing Automations

From a project:
1. Select the `...` menu (project overflow) in the top-right
2. Select **"Workflows"**
3. You'll see a list of built-in automation rules you can enable/disable

### Available Built-In Workflows

| Workflow | What It Does |
|---|---|
| **Item added to project** | When an item is manually added, set its Status to a chosen value |
| **Item reopened** | When an issue/PR is reopened, change its Status (e.g., back to "In Progress") |
| **Item closed** | When an issue/PR is closed, set Status to "Done" automatically |
| **Pull request merged** | When a PR is merged, set its Status to "Done" |
| **Auto-add to project** | Items matching a filter (by label, type, repo) are automatically added to the project |

### Setting Up Auto-Add

This is the most powerful workflow for maintainers:

1. In **Workflows**, select **"Auto-add to project"**
2. Toggle it **On**
3. Configure the filter: e.g., `label:accessibility is:issue` adds any new issue with the accessibility label automatically
4. Save

Now any matching issue in linked repos is added to your project the moment it's filed - no manual triage step required.

### GitHub Actions Integration

For more complex automations, Projects v2 has a full GraphQL API and works with GitHub Actions. Example use cases:
- Auto-assign items based on repository when added
- Set due dates based on linked milestone
- Send Slack notifications when high-priority items are added

See [Appendix Q: GitHub Actions and Workflows](appendix-q-github-actions-workflows.md) for the foundation, and the [GitHub documentation on automating projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project) for advanced patterns.


## 7. Iterations (Sprints)

An **iteration** field lets you group work into time-boxed cycles - sprints, weeks, or any cadence you choose.

### Creating an Iteration Field

1. Add a new field (the `+` column button in Table view)
2. Select **"Iteration"** as the field type
3. Name it (e.g., "Sprint")
4. Set the iteration duration (1 week, 2 weeks, custom)
5. GitHub automatically generates current and upcoming iterations

### Using Iterations

- Each item can be assigned to an iteration via the Iteration field
- In Board view, you can group by iteration to see a sprint board
- In Roadmap view, iterations appear as blocks on the timeline
- **Burndown:** No built-in burndown chart, but the Insights charts (see below) can show progress

### Iteration Insights

From any project:
1. Select the **Insights** tab (the bar chart icon)
2. Select **"Current iteration"**
3. See: items by status, completion rate, items added vs closed over time


## 8. Views and Filters

A **view** is a saved configuration of layout + filters + grouping + sort. You can have many views on one project, each showing a different slice of the data.

### Creating a View

1. Activate the **"+ New view"** button in the view tab bar
2. Choose layout (Table, Board, Roadmap)
3. Configure filters, grouping, sort
4. The view saves automatically with a default name - rename by clicking/activating the tab label

### Filter Syntax

The filter bar accepts a query language similar to GitHub's issue search:

| Query | Meaning |
|---|---|
| `status:In Progress` | Show only items with that Status value |
| `assignee:@me` | Show only items assigned to you |
| `label:accessibility` | Items with the accessibility label |
| `milestone:"v2.0"` | Items in a specific milestone |
| `no:assignee` | Items with no assignee |
| `is:pr` | Only pull requests |
| `is:issue` | Only issues |
| `repo:owner/name` | Items from a specific repo (cross-repo projects) |

Combine filters: `assignee:@me status:"In Progress"` shows your in-progress work.

### Grouping

In Table or Board view, you can group rows:
1. Select **"Group by"** in the view configuration menu
2. Choose any field: Status, Assignee, Priority, Iteration, Label, Repository
3. Items are collapsible into group sections

### Sorting

Multiple sort levels are supported. Primary sort → secondary sort:
- Priority ascending, then due date ascending


## 9. Cross-Repository Projects

A single project can track issues and PRs from **multiple repositories** - including repos in different organizations (if you have access).

### Add a Repository to a Project

1. In project settings (the `...` overflow menu → **"Settings"**)
2. Select **"Manage access"** → **"Add repository"**
3. Search and select additional repositories
4. Items from those repos can now be added to the project

### Using the Repository Field

When a project spans multiple repos, the **"Repository"** field lets you see - and filter by - which repo each item belongs to:

```
Filter: repo:community-access/accessibility-agents
→ Show only accessibility-agents issues in this cross-repo project
```

**Common use case:** An organization project tracking all accessibility bugs across every repo, labeled `accessibility`, with Auto-add enabled.


## 10. Screen Reader Navigation Reference

### Project Home Page (list of projects)

```
3 → Jump to project titles (they are h3 links)
Enter → Open a project
```

### Inside a Project - General

```
Tab → Move between interactive elements (view tabs, filters, fields, buttons)
F6 → Cycle between major panels (header, view tabs, content area)
/ → Focus the filter bar (if supported; otherwise Tab to reach it)
```

### Table View

```
T or Region → Jump to the table data region
↑/↓ → Navigate rows
←/→ → Navigate columns within a row
Enter → Open item detail panel
Space → Toggle row selection
Escape → Close detail panel or cancel edit
F2 → Edit a title cell if focused
```

**NVDA note:** Use Browse mode (NVDA+Space to toggle) to read all cell content, then App mode (NVDA+Space again) for interactive editing. NVDA announces cell content as you navigate with arrow keys.

**JAWS note:** Use JAWS cursor (JAWS+P) to read grid cell content. For interactive editing, press Enter to enter application mode in the table.

**VoiceOver note:** Use VO+Shift+↓ to interact with the table. VO+←/→ moves between cells. Press VO+Space to activate a cell for editing.

### Board View

```
Tab → Move between cards and column headers
Enter (on card) → Open detail panel
The "Status" field in the panel → Change the card's column
```

### Detail Panel (right sidebar, any view)

```
Tab → Move between fields
Enter/Space → Activate a field editor
Select dropdowns → ↑/↓ to navigate options, Enter to select
Escape → Close the dropdown or the panel
```

### Filter Bar

```
Click/Tab to filter bar → type query → Enter to apply
Backspace → Remove last filter token
Escape → Clear focus from filter bar
```


## 11. Accessibility Agents: `/project-status`

The **`/project-status`** command from Accessibility Agents gives you a live project board overview directly in VS Code Copilot Chat, without opening a browser.

### What It Shows

```
/project-status community-access/accessibility-agents
```

- Items per column (Todo, In Progress, Done, etc.) with assignees and average age
- Blocked items (labeled "blocked" or flagged with a field value)
- Stale items - in the same column for 7+ days with no activity
- Unassigned items in active columns
- Team member workload (anyone with 5+ items in progress)
- Sprint/iteration progress if an Iteration field is configured

### Example Output

```
GitHub Project: Accessibility Agents Roadmap (3 active views)

Column Breakdown:
┌─────────────┬───────┬──────────────────┬─────────┬──────────────┐
│ Column      │ Items │ Assignees        │ Avg Age │ Stale (7d+) │
├─────────────┼───────┼──────────────────┼─────────┼──────────────┤
│ To Do       │   8   │ @alice(3),@bob(2) │ 5 days  │     1       │
│ In Progress │   4   │ @charlie(2)       │ 3 days  │     0       │
│ In Review   │   2   │ --               │ 2 days  │     0       │
│ Done        │  23   │ --               │  --     │    --       │
└─────────────┴───────┴──────────────────┴─────────┴──────────────┘

Attention Items:
  Stale: "Update screen reader navigation guide" - In Review for 9 days, no activity
  Unassigned: "Triage accessibility bug backlog" in In Progress

After the overview: "Want to see a specific column or check a team member's workload?"
```

### When to Use It

- During standup: quick status snapshot without leaving VS Code
- Before filing a new issue: see if it's already tracked
- During sprint planning: identify stale and blocked items before the next cycle
- After a weekend: catch up on what moved while you were away


## 12. Exercises

### Exercise 1: Create a Personal Tracking Project

1. Create a new project at the organization level: name it "My Workshop Contributions"
2. Add the **Board** layout
3. Add a custom **Priority** field with options: P0, P1, P2
4. Add your fork of `accessibility-agents` as a linked repository
5. Add any open issue you've filed to the project

### Exercise 2: Set Up Automation

1. In your project's **Workflows**, enable **"Item closed"** → Status: Done
2. File a test issue in your fork
3. Close that issue
4. Verify it moved to "Done" automatically in the project board

### Exercise 3: Create a Sprint View

1. Add an **Iteration** field named "Sprint" with 2-week iterations
2. Assign your existing project items to the current sprint
3. Switch to **Roadmap** view - observe the items on the timeline
4. Check **Insights** to see the current iteration burndown

### Exercise 4: Cross-Repo Project (Advanced)

1. Create a cross-repo project connected to two of your repositories
2. Add the **Repository** field to the Table view
3. Create a view filtered to `is:issue label:accessibility`
4. Set up Auto-add: any issue with the `accessibility` label in those repos goes to this project automatically


> **From Chapter 08:** For the introductory coverage of Labels, Milestones, and Projects including screen reader basics for getting started, see [Chapter 08: Labels, Milestones, and Projects](08-labels-milestones-projects.md).

*Return to: [Resources](appendix-u-resources.md) | [Glossary](appendix-a-glossary.md)*
