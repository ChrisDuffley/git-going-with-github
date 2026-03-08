# VS Code Setup & Accessibility Basics
>
> **Listen to Episode 11:** [VS Code Setup and Accessibility](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Your Accessible Development Environment - The Foundation

> **Day 2, Block 1 Material**
>
> This chapter is the bridge between GitHub's browser interface (Day 1) and real contribution work in VS Code (Day 2). You will learn how to launch VS Code, sign in to your GitHub account, verify GitHub Copilot is active, configure screen reader mode, navigate every major surface area, and master the accessibility tools that make VS Code one of the most accessible code editors available.
>
> **Prerequisites:** Complete Day 1 walkthrough of GitHub's browser interface before working through VS Code material.


## Workshop Recommendation (Chapter 5)

For this workshop, Chapter 5 is a **guided setup chapter** with a lightweight completion challenge.

- **Challenge count:** 1 guided walkthrough
- **Automation check:** none - setup state is local/account-level and cannot be validated by the Learning Room PR bot
- **Evidence:** structured completion comment on your assigned challenge issue
- **Pattern:** open, configure, navigate, verify

### Chapter 5 Challenge Set

1. **VS Code accessibility baseline** - open VS Code (github.dev or desktop), enable screen reader mode, sign in to GitHub, verify Copilot status, and navigate core surfaces.

### Challenge 5.1 Step-by-Step: VS Code Accessibility Baseline

**Goal:** Confirm you can access VS Code (github.dev or desktop), enable screen reader support, sign in to GitHub, check Copilot status, and perform core navigation.

**Where you are working:** github.dev (VS Code in the browser) or desktop VS Code if you installed it in Block 0.

**Estimated time:** 10-15 minutes.

1. Open the `learning-room` repository on GitHub.com.
2. Press `.` (the period key) on your keyboard. This launches **github.dev** - a full VS Code editor running in your browser. Wait a few seconds for it to load.
3. Enable screen reader mode:
   - **Windows (NVDA/JAWS):** Press `Shift+Alt+F1`. You should hear an announcement confirming screen reader mode is on.
   - **Mac (VoiceOver):** Screen reader mode is usually already optimized. If navigation feels wrong, open Command Palette (`Cmd+Shift+P`) and run `Toggle Screen Reader Accessibility Mode`.
4. Open the **Explorer** panel with `Ctrl+Shift+E` (Mac: `Cmd+Shift+E`). Your screen reader should announce the file tree.
5. Navigate to and open `README.md` from the file tree. Use arrow keys to move through files and `Enter` to open.
6. Open the **outline/symbols** view with `Ctrl+Shift+O` (Mac: `Cmd+Shift+O`). This shows all headings and sections in the current file - a key navigation tool for screen reader users.
7. Open the **Command Palette** with `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`). Type any command name (for example, `Toggle Word Wrap`) and press `Enter` to run it. Press `Escape` to close without running.
8. Check the **Accounts** button in the Activity Bar (bottom-left of the sidebar). If you are signed in, your screen reader announces your GitHub username. If not, activate it and sign in with GitHub.
9. Check the **Status Bar** at the bottom of the window. Tab or arrow through it to find GitHub Copilot status. If Copilot is active, you hear an indicator showing it is ready.

**You are done when:** You have successfully opened github.dev, enabled screen reader mode, signed in to GitHub, confirmed Copilot status, opened a file, viewed its outline, and run a command from the Command Palette.

### Completing Chapter 5: Submit Your Evidence

Return to GitHub.com, open your **assigned Chapter 5 challenge issue**, and post a completion comment:

```text
Chapter 5 completed:
- Opened github.dev: yes / no
- Screen reader mode enabled: yes / no
- Signed in to GitHub: yes / no
- Copilot status checked: yes / no
- Opened file in Explorer: yes / no
- Opened outline/symbols: yes / no
- Opened Command Palette: yes / no
```

If any step was "no," add a note explaining where you got stuck so the facilitator can help. Close your Chapter 5 challenge issue when done.

### Expected Outcomes

- Student can launch and navigate github.dev or desktop VS Code.
- Student can enable screen reader mode and hear navigation announcements.
- Student has signed in to GitHub and can see their account status.
- Student has verified GitHub Copilot is active (or knows it requires desktop VS Code).
- Student can open core navigation surfaces (Explorer, Outline, Command Palette).
- Student is ready for VS Code-based contribution chapters (6-16).

### If You Get Stuck

1. Nothing happens when you press `.`? Make sure you are on the repository's main page (not inside an issue or PR). The `.` shortcut only works on repository code pages.
2. Screen reader mode toggle did not announce anything? Open Command Palette (`Ctrl+Shift+P`) and type `Screen Reader` to find the toggle manually.
3. Explorer panel is empty? VS Code may still be loading the repository. Wait 5-10 seconds and press `Ctrl+Shift+E` again.
4. On Mac with VoiceOver, navigation feels wrong? Run `Toggle Screen Reader Accessibility Mode` from Command Palette. VoiceOver sometimes needs the explicit toggle.
5. Cannot find the Accounts button? Open Command Palette and type `Accounts` to manage sign-in from there.
6. Copilot not showing in the status bar? github.dev does not support Copilot - you need desktop VS Code or a Codespace.
7. Shortcut not working? Use Command Palette as a fallback for any action - type what you want to do and VS Code will find the command.
8. Ask facilitator for a side-by-side demo and repeat the same steps.

### Learning Moment

Tool setup is part of contribution skill. A stable, accessible editor reduces stress and increases contribution quality. The surfaces you just tested - github.dev launch, screen reader mode, GitHub sign-in, Copilot status, Explorer, Outline, and Command Palette - are the foundation for everything in Day 2.

### Learning Pattern Used in This Chapter

1. Open the tool in the simplest way possible (`.` key for github.dev).
2. Sign in and verify your identity and tools are ready (Accounts, Copilot).
3. Configure accessibility before doing any work (screen reader mode first).
4. Verify each navigation surface works with your assistive technology.
5. Record what worked and what didn't (evidence comment).


## Table of Contents

1. [Why VS Code for Open Source Contribution](#1-why-vs-code-for-open-source-contribution)
2. [The Bridge: github.dev - VS Code in Your Browser](#2-the-bridge-githubdev---vs-code-in-your-browser)
3. [Screen Reader Mode in VS Code](#3-screen-reader-mode-in-vs-code)
4. [The VS Code Interface Tour](#4-the-vs-code-interface-tour)
5. [The Accounts Button and GitHub Sign-In](#5-the-accounts-button-and-github-sign-in)
6. [Verifying GitHub Copilot Status](#6-verifying-github-copilot-status)
7. [The Status Bar](#7-the-status-bar)
8. [The Menu Bar](#8-the-menu-bar)
9. [Settings Sync](#9-settings-sync)
10. [The Settings Editor](#10-the-settings-editor)
11. [The Keyboard Shortcuts Editor](#11-the-keyboard-shortcuts-editor)
12. [Essential Keyboard Navigation and Find/Filter](#12-essential-keyboard-navigation-and-findfilter)
13. [The Problems Panel](#13-the-problems-panel)
14. [The Terminal](#14-the-terminal)
15. [Copilot Chat Window](#15-copilot-chat-window)
16. [Accessible Help, Accessible View, and Accessible Diff](#16-accessible-help-accessible-view-and-accessible-diff)
17. [Accessibility Signals](#17-accessibility-signals)
18. [Git Operations Inside VS Code](#18-git-operations-inside-vs-code)


---

## 1. Why VS Code for Open Source Contribution

GitHub's browser interface is excellent for reviewing, discussing, and triaging. VS Code is where you create. The difference:

| Task | Browser | VS Code |
| --- | --- | --- |
| Navigate a repository | Excellent | Explorer sidebar |
| Read issues and PRs | Excellent | GitHub PR extension |
| Comment on a PR | Excellent | GitHub PR extension |
| Edit a file | Web editor | Full text editor with Copilot |
| Review a diff | Files Changed tab | Three-way merge view with navigation |
| Get AI help while writing | Not available | Copilot inline + Chat |
| Run Accessibility Agents | Not available | Copilot Chat with agent files |
| See errors in your contribution | After push | Real-time as you type |

For Markdown contributions (which is most of what `accessibility-agents` needs), VS Code gives you Copilot assistance, live preview, and the same Git workflow - with less tab switching and with agents available on every file you open.


---

## 2. The Bridge: github.dev - VS Code in Your Browser

### Before you install anything: try VS Code right now in your browser

GitHub provides a web-based version of VS Code called **github.dev**. It runs entirely in your browser with zero installation. The keyboard shortcuts, screen reader mode, and editor experience are identical to the desktop app.

### How to Access github.dev

#### Method 1: The Period Key Shortcut (Fastest)

From any GitHub repository page:

1. Press `.` (period key - just the period, no modifier keys)
2. The page transforms into VS Code
3. You are now editing in github.dev
4. The URL changes to `github.dev/owner/repo`
5. Screen reader mode works exactly as it does in desktop VS Code (toggle with `Shift+Alt+F1`)

#### Where it works

- Repository home pages
- File view pages
- Pull request pages
- Any branch or commit view

**Screen reader note:** The period key shortcut is a single keypress - no modifier keys. It is GitHub's universal "open this in VS Code" command.

**Alternative: Press `>` (Shift+Period)** to open github.dev in a **new tab**. This preserves your GitHub page and is the preferred method when you want to keep both interfaces open.

#### Method 2: Direct URL

Change the domain in any GitHub URL:

- `github.com/owner/repo` becomes `github.dev/owner/repo`
- Works for any branch, file, or commit URL

#### Method 3: From the Repository Page

<details>
<summary>Visual / mouse users</summary>

1. Click the green **Code** button on any repository page
2. In the dropdown, click **Open with github.dev**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. Navigate to the Code button (press `B` or `Tab` until you hear "Code, button" or similar)
2. Press `Enter` to open the dropdown menu
3. Press `Down Arrow` to reach "Open with github.dev"
4. Press `Enter`

</details>


### What You Get in github.dev

Everything in the list below works **exactly like desktop VS Code**:

- **Full text editor with syntax highlighting**
- **All VS Code keyboard shortcuts** (see [Keyboard Reference](13-github-copilot.md#8-keyboard-shortcuts-reference))
- **Screen reader mode** (`Shift+Alt+F1` to activate - Mac: `Shift+Option+F1`)
- **File Explorer** (`Ctrl+Shift+E` - Mac: `Cmd+Shift+E`) - browse the entire repository
- **Search across files** (`Ctrl+Shift+F` - Mac: `Cmd+Shift+F`)
- **Source Control (Git)** (`Ctrl+Shift+G` - Mac: `Cmd+Shift+G`) - stage, commit, push changes
- **Markdown preview** (`Ctrl+Shift+V` - Mac: `Cmd+Shift+V`)
- **Command Palette** (`Ctrl+Shift+P` - Mac: `Cmd+Shift+P`) - access every VS Code command
- **Go to File** (`Ctrl+P` - Mac: `Cmd+P`) - instant file picker
- **Go to Symbol** (`Ctrl+Shift+O` - Mac: `Cmd+Shift+O`) - navigate by headings in Markdown
- **Multiple editor tabs and split view**
- **Settings sync** - if you sign in, your VS Code settings apply here too


### What github.dev Does NOT Have

- **No terminal** - cannot run shell commands, npm, git CLI
- **No GitHub Copilot** - Copilot requires the desktop app or a Codespace
- **No Accessibility Agents** - agents rely on extensions that need desktop VS Code
- **No extension installation** - extensions are disabled in github.dev
- **No debugger** - debugging requires a local environment
- **No live server or preview** - except Markdown preview, which does work

These limitations are why **desktop VS Code exists**. github.dev is for quick edits and reading code. Desktop is for Copilot, agents, terminal workflows, and full development.


### Why github.dev Matters for This Workshop

**It is the bridge.** You spend Day 1 in the GitHub browser interface. You spend Day 2 in desktop VS Code. github.dev sits in between:

- Same keyboard shortcuts as desktop VS Code (you learn them once)
- Same screen reader mode (you configure it once)
- Same file navigation patterns (Explorer, `Ctrl+P` / Mac: `Cmd+P`, `Ctrl+Shift+O` / Mac: `Cmd+Shift+O`)
- But accessible instantly from any GitHub page with one keystroke

#### Use github.dev when

- You want to edit a file quickly without switching apps
- You are on a machine where you cannot install software
- You want to browse code with VS Code navigation (symbols, search, split view)
- You are reviewing a PR and want to see the full file context

#### Use desktop VS Code when

- You need Copilot inline suggestions
- You want to run Accessibility Agents
- You are making multi-file changes that benefit from AI assistance
- You need a terminal for git commands or running scripts


### Screen Reader Experience in github.dev

#### Activate screen reader mode immediately

1. Press `.` on any GitHub repository to open github.dev
2. Press `Shift+Alt+F1` (Mac: `Shift+Option+F1`) to enable screen reader mode
3. VS Code announces "Screen reader optimized"

#### What changes

- Focus behavior adjusts for keyboard navigation
- Code suggestions are announced via ARIA live regions
- Error messages are announced when you navigate to them
- Inline decorations are suppressed to reduce noise

#### Navigation

- Use `Ctrl+Shift+E` to open the Explorer (file tree)
- Use `Up/Down Arrow` to navigate files
- Press `Enter` on a file to open it in the editor
- The editor behaves like a standard text area - your screen reader's reading commands work normally

#### NVDA/JAWS users

- You remain in Browse/Virtual mode for the overall interface
- When focus enters the editor text area, you are automatically in Forms/Focus mode
- All standard cursor movement works: `Home`, `End`, `Ctrl+Home`, `Ctrl+End`, `Ctrl+F` to find

#### VoiceOver users

- Quick Nav OFF when inside the editor (`Left Arrow + Right Arrow` to toggle)
- Use `VO+Shift+Down` to interact with the editor area
- Standard text navigation (`Control+A` for line start, `Control+E` for line end, etc.)


### Try It Right Now

Before reading the rest of this guide:

1. Open [github.com/community-access/learning-room](https://github.com/community-access/learning-room) in your browser
2. Press `.` (period key)
3. github.dev opens
4. Press `Shift+Alt+F1` (Mac: `Shift+Option+F1`) to enable screen reader mode
5. Press `Ctrl+Shift+E` (Mac: `Cmd+Shift+E`) to open the Explorer
6. Navigate to `README.md` and press `Enter`
7. Press `Ctrl+Home` (Mac: `Cmd+Up`) to go to the top of the file
8. Press `Ctrl+Shift+O` (Mac: `Cmd+Shift+O`) to see the outline (all headings)
9. Close the tab when done

**You just used VS Code.** The desktop version in the rest of this guide is the same experience - with Copilot, agents, and a terminal added.


---

## 3. Screen Reader Mode in VS Code

> **Who needs this section?** If you use NVDA, JAWS, VoiceOver, or another screen reader, read this section before continuing. If you are not using a screen reader, you can skip to [Section 4](#4-the-vs-code-interface-tour) - VS Code works fully without enabling this mode.

VS Code has built-in accessibility support designed for screen reader users. It changes how focus moves, how announcements work, and how navigation behaves.

### Activating Screen Reader Mode

| Method | Steps |
| --- | --- |
| Keyboard shortcut | `Shift+Alt+F1` (Windows) / `Shift+Option+F1` (Mac) |
| Command Palette | `Ctrl+Shift+P` (Windows) / `Cmd+Shift+P` (Mac) then type "screen reader" then select "Toggle Screen Reader Accessibility Mode" |
| Auto-detection | VS Code detects NVDA and JAWS automatically on Windows; VoiceOver on macOS |

#### Verify it is active

Open Settings (`Ctrl+,` - Mac: `Cmd+,`) then search for `accessibility support` then confirm it shows `on` (not `auto`).

### What Changes in Screen Reader Mode

| Area | Normal Mode | Screen Reader Mode |
| --- | --- | --- |
| Suggestions list | Popup overlay | Announced via ARIA live region |
| Diff navigation | Visual highlighting | Announces "Added" / "Removed" before line content |
| Error indicators | Red underlines | Announced on focus |
| Inline decorations | Displayed visually | Suppressed to reduce noise |
| Tab completion | Visual ghost text | Announced as suggestion |

### NVDA-Specific Settings for VS Code

VS Code uses a web-based renderer. Configure NVDA for best results:

1. Open NVDA Menu then Preferences then Settings then Browse Mode
2. Set "Maximum length of text on a single line" to `10000` (prevents truncation in long lines)
3. Under Object Presentation: set "Report tooltip delay" to `off`
4. Recommended: use **NVDA + Google Chrome** for the integrated browser panels

### JAWS-Specific Settings for VS Code

1. JAWS should detect VS Code automatically and switch to PC Cursor mode for the editor
2. If the editor feels unresponsive, press `Insert+Z` to toggle virtual cursor off
3. For the integrated terminal: use `Insert+Z` to enter forms/PC mode, then interact with the terminal

### VoiceOver-Specific Settings for VS Code (macOS)

1. Open VS Code then `Shift+Alt+F1` (Mac: `Shift+Option+F1`) to confirm screen reader mode
2. In VoiceOver Utility: Verbosity then set "Punctuation" to "All" for reading code
3. Use Quick Nav OFF (`Left+Right Arrow`) when inside the editor - standard cursor navigation is more predictable
4. Use `VO+Shift+Down` to interact with the editor, `VO+Shift+Up` to stop interacting


---

## 4. The VS Code Interface Tour

Before diving into individual features, here is how VS Code is organized. Every area is reachable by keyboard.

### The Five Major Regions

```text
+----------------------------------------------------------+
|  Menu Bar (File, Edit, View, Go, Run, Terminal, Help)    |
+------+---------------------------------------------------+
|      |                                                    |
| A    |  Editor Area                                       |
| c    |  (your files open here)                            |
| t    |                                                    |
| i    |                                                    |
| v    |                                                    |
| i    +---------------------------------------------------+
| t    |                                                    |
| y    |  Panel (Terminal, Problems, Output, Debug Console) |
|      |                                                    |
| B    +---------------------------------------------------+
| a    |  Status Bar (line, column, language, Git branch,   |
| r    |   Copilot status, encoding, notifications)         |
+------+---------------------------------------------------+
```

### Navigating Between Regions

| Region | Keyboard Shortcut | What You Hear (Screen Reader) |
| --- | --- | --- |
| Activity Bar icons | `Ctrl+Shift+E` / `G` / `F` / `X` / etc. | "Explorer", "Source Control", etc. |
| Sidebar content | Follows activity bar selection | Tree view or list content |
| Editor area | `Ctrl+1` (first editor group) | File name and cursor position |
| Panel | `Ctrl+Backtick` (terminal) or `Ctrl+Shift+M` (problems) | Panel name announcement |
| Status Bar | `F6` cycles through regions | Status bar items read left to right |

**Key insight:** Press `F6` repeatedly to cycle focus through the major regions: Sidebar, Editor, Panel, Status Bar, and back. This is the universal "where am I, take me somewhere else" key in VS Code.

### Learning Cards: Finding Your Way Around VS Code

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

- **F6** is your best friend - it cycles through regions and your screen reader announces each one
- **Ctrl+Shift+P** (Command Palette) is your safety net - type any action name and VS Code finds it
- **Alt+H** (Accessible Help) tells you what shortcuts work in your current context
- Use **Ctrl+Shift+E** for Explorer, **Ctrl+Shift+G** for Source Control, **Ctrl+Shift+F** for Search
- The editor text area acts like a standard text field - all your screen reader reading commands work

</details>

<details>
<summary>Low vision users</summary>

- **Ctrl+=** / **Ctrl+-** to zoom the entire VS Code window (all UI elements scale)
- **Ctrl+,** then search `editor.fontSize` to set a comfortable default editor font size
- **Ctrl+,** then search `window.zoomLevel` to set a persistent zoom level
- High Contrast themes: **Ctrl+K Ctrl+T** then choose "High Contrast" or "High Contrast Light"
- **Ctrl+,** then search `minimap` - set `editor.minimap.enabled` to `false` to remove the small code overview that may be hard to see
- **Ctrl+B** toggles the sidebar to give the editor more space

</details>

<details>
<summary>Sighted users</summary>

- Click icons in the Activity Bar (left edge) to switch sidebar views
- The bottom Panel shows Terminal, Problems, Output, and Debug Console
- Drag panel borders to resize regions or double-click to collapse them
- **Ctrl+B** toggles the sidebar for a wider editor area
- **Ctrl+J** toggles the bottom Panel
- **Ctrl+Shift+P** opens the Command Palette - the universal search for any action

</details>


---

## 5. The Accounts Button and GitHub Sign-In

The **Accounts** button sits at the bottom of the Activity Bar (the vertical icon strip on the left side of VS Code). It manages your authentication with GitHub, Microsoft, and other services.

### Why Sign In Matters

- **GitHub Copilot** requires an active GitHub sign-in to function
- **Settings Sync** requires sign-in to synchronize your preferences across machines
- **GitHub Pull Requests extension** needs authentication to create and review PRs from VS Code
- Your GitHub identity appears in commits you make from VS Code

### Signing In

#### From the Accounts Button

1. Press `F6` until you hear the Activity Bar, then arrow down to the **Accounts** button (it is at the very bottom of the bar)
2. Press `Enter` to open the Accounts menu
3. Select **"Sign in with GitHub to use GitHub Copilot"** (or a similar prompt)
4. A browser window opens for GitHub OAuth authorization
5. Authorize VS Code, then return to the editor
6. Your screen reader announces your GitHub username in the Accounts button

#### From the Command Palette

1. Press `Ctrl+Shift+P` then type `sign in`
2. Select **"GitHub: Sign In"**
3. Complete the browser OAuth flow and return to VS Code

### Verifying You Are Signed In

- **Accounts button:** Press `F6` to reach the Activity Bar, arrow down to Accounts. A screen reader announces your username.
- **Command Palette:** `Ctrl+Shift+P` then type `GitHub Copilot: Status`. If Copilot shows ready, you are signed in.
- **Status Bar:** Look for (or hear) the Copilot icon in the status bar at the bottom of the window.

### Learning Cards: GitHub Sign-In

<details>
<summary>Screen reader users</summary>

- Press `F6` to cycle to the Activity Bar, then `Down Arrow` to the bottom to find the Accounts button
- After signing in, the Accounts button label changes from "Accounts" to your GitHub username
- If browser OAuth does not redirect back automatically, check for a "paste this code" dialog in VS Code - type the code displayed in your browser

</details>

<details>
<summary>Low vision users</summary>

- The Accounts icon is the person silhouette at the bottom of the leftmost icon column
- After sign-in, a small dot or badge appears on the icon indicating active session
- If the icon is hard to see, use **Ctrl+Shift+P** and type `Accounts` to manage sign-in from the Command Palette

</details>

<details>
<summary>Sighted users</summary>

- Click the person icon at the bottom of the Activity Bar
- A dropdown menu shows your sign-in status and available accounts
- After sign-in, the icon changes to show your GitHub avatar

</details>


---

## 6. Verifying GitHub Copilot Status

GitHub Copilot is your AI pair programmer. Before starting any contribution work, confirm it is active and responding.

### Where to Check Copilot Status

#### Status Bar Indicator

The Copilot icon appears in the **Status Bar** at the bottom-right of the VS Code window.

| Icon State | Meaning |
| --- | --- |
| Copilot icon (normal) | Copilot is active and ready |
| Copilot icon with warning triangle | Copilot has a configuration issue |
| Copilot icon with slash-through | Copilot is disabled for this file type |
| No Copilot icon | Extension not installed or not signed in |

#### Command Palette Check

1. Press `Ctrl+Shift+P`
2. Type `GitHub Copilot: Status`
3. The output shows whether Copilot is signed in, active, or has errors

#### Quick Test

1. Open any `.md` file in the editor
2. Start typing a sentence (for example, `## Getting Started with`)
3. If Copilot is active, a gray ghost-text suggestion appears after a brief pause
4. Press `Tab` to accept or `Escape` to dismiss

### Troubleshooting Copilot

| Problem | Solution |
| --- | --- |
| No Copilot icon in status bar | Install the GitHub Copilot extension: `Ctrl+Shift+X` then search `GitHub Copilot` then install |
| Icon shows warning | Open Output panel (`Ctrl+Shift+U`), select "GitHub Copilot" from the dropdown, read the error |
| "Not signed in" | Sign in to GitHub (Section 5 above) |
| Copilot not suggesting | Check that Copilot is not disabled for the file type: `Ctrl+Shift+P` then `GitHub Copilot: Toggle` |
| Works on desktop but not github.dev | Expected behavior. github.dev does not support Copilot. Use desktop VS Code or a Codespace. |

### Learning Cards: Copilot Status

<details>
<summary>Screen reader users</summary>

- The Copilot status bar item is announced when you Tab through the status bar
- After sign-in, press `Ctrl+Shift+P` then type `Copilot Status` - the announcement tells you the full state
- When Copilot generates a suggestion, NVDA and JAWS announce it as ghost text; press `Tab` to accept
- Press `Alt+F2` (Accessible View) to read the full Copilot suggestion in a clean text view

</details>

<details>
<summary>Low vision users</summary>

- The Copilot icon is a small two-petal/sparkle icon near the right side of the Status Bar
- Copilot suggestions appear as dimmed gray text ahead of your cursor - increase editor contrast or zoom level if they are hard to see
- Use a High Contrast theme for clearer distinction between your text and Copilot ghost text

</details>

<details>
<summary>Sighted users</summary>

- Look for the Copilot sparkle icon in the bottom-right Status Bar
- Gray ghost text after your cursor means Copilot is generating a suggestion
- Click the Copilot icon for a quick status menu showing enabled/disabled state

</details>


---

## 7. The Status Bar

The **Status Bar** is the thin strip at the bottom of the VS Code window. It provides real-time information about your workspace, file, and active tools.

### What the Status Bar Contains (Left to Right)

| Item | What It Shows | How to Interact |
| --- | --- | --- |
| Git branch | Current branch name (e.g., `main`) | Click or press to switch branches |
| Sync status | Pending push/pull count | Click to sync (push/pull) |
| Errors and warnings | Error/warning count in workspace | Click opens Problems panel (`Ctrl+Shift+M`) |
| Line and column | Cursor position (e.g., `Ln 42, Col 8`) | Click opens Go to Line (`Ctrl+G`) |
| Indentation | Spaces or tabs and count | Click to change indent settings |
| Encoding | File encoding (e.g., `UTF-8`) | Click to change encoding |
| End of line | `LF` or `CRLF` | Click to change line endings |
| Language mode | File type (e.g., `Markdown`) | Click to change language |
| Copilot status | GitHub Copilot state | Click for Copilot menu |
| Notification bell | Unread notifications | Click to view notifications |

### Navigating the Status Bar with a Keyboard

1. Press `F6` until your screen reader announces the Status Bar
2. Use `Tab` to move between items from left to right
3. Press `Enter` on any item to activate it (open a picker, toggle a setting, etc.)
4. Press `Escape` to return to the editor

### Learning Cards: Status Bar

<details>
<summary>Screen reader users</summary>

- Press `F6` repeatedly until you hear "Status Bar" - then `Tab` through items
- Each item is announced with its current value (e.g., "Ln 42, Col 8" or "main branch")
- The errors/warnings item announces the count - press `Enter` to jump to the Problems panel
- After reviewing, press `Escape` then `Ctrl+1` to return to the editor

</details>

<details>
<summary>Low vision users</summary>

- The Status Bar text is small by default - use `Ctrl+=` to zoom the entire window
- Different-colored sections help identify areas: left side (Git/sync), center (position), right side (Copilot/language)
- Status Bar background color changes in certain contexts (e.g., debugging turns it orange, no folder is purple)

</details>

<details>
<summary>Sighted users</summary>

- Click any Status Bar item to interact with it
- The colored background indicates context: blue (normal workspace), purple (no folder open), orange (debugging)
- Hover over items for tooltips with additional detail

</details>


---

## 8. The Menu Bar

The **Menu Bar** runs along the top of the VS Code window and provides structured access to every command category.

### Menu Bar Structure

| Menu | Key Contents |
| --- | --- |
| **File** | New File, Open Folder, Save, Auto Save, Preferences (Settings, Keyboard Shortcuts, Extensions) |
| **Edit** | Undo, Redo, Cut, Copy, Paste, Find, Replace |
| **Selection** | Select All, Expand Selection, Add Cursor |
| **View** | Explorer, Search, Source Control, Extensions, Terminal, Problems, Command Palette, Appearance (zoom, sidebar, panel toggles) |
| **Go** | Go to File, Go to Symbol, Go to Line, Go to Definition, Back/Forward navigation |
| **Run** | Start Debugging, Run Without Debugging, Add Configuration |
| **Terminal** | New Terminal, Split Terminal, Run Active File, Run Selected Text |
| **Help** | Welcome, Documentation, Keyboard Shortcuts Reference, Accessibility Help |

### Accessing the Menu Bar

| Method | Steps |
| --- | --- |
| Keyboard (Windows/Linux) | Press `Alt` or `F10` to focus the menu bar, then use arrow keys |
| Keyboard (Mac) | `Ctrl+F2` or use the system menu bar |
| Command Palette | `Ctrl+Shift+P` gives access to all the same commands without the menu |

### Learning Cards: Menu Bar

<details>
<summary>Screen reader users</summary>

- Press `F10` (or `Alt`) to enter the Menu Bar. Your screen reader announces "File" menu
- Use `Left/Right Arrow` to move between menus (File, Edit, View, Go, Run, Terminal, Help)
- Press `Enter` or `Down Arrow` to open a menu and browse items
- Each menu item includes its keyboard shortcut in the announcement (e.g., "New File, Ctrl+N")
- Press `Escape` to close and return to the editor

</details>

<details>
<summary>Low vision users</summary>

- The Menu Bar respects your zoom level - increase window zoom for larger text
- Menu items show keyboard shortcuts on the right side of each entry
- Use the Help menu to access "Keyboard Shortcuts Reference" for a printable cheat sheet

</details>

<details>
<summary>Sighted users</summary>

- Click any menu name to open its dropdown
- Keyboard shortcuts are displayed to the right of each menu item
- The View menu controls which panels and sidebars are visible

</details>


---

## 9. Settings Sync

**Settings Sync** synchronizes your VS Code configuration across multiple machines and between desktop VS Code and github.dev. When you sign in and enable sync, your settings, keyboard shortcuts, extensions, UI state, and profiles travel with you.

### What Gets Synced

| Category | Examples |
| --- | --- |
| Settings | `editor.fontSize`, `editor.accessibilitySupport`, color theme, zoom level |
| Keyboard Shortcuts | All custom keybindings |
| Extensions | Installed extensions list |
| UI State | Sidebar position, panel visibility, recent files |
| Profiles | Named collections of settings for different workflows |

### Enabling Settings Sync

1. Open the **Accounts** button (Activity Bar, bottom-left) or press `Ctrl+Shift+P` then type `Settings Sync: Turn On`
2. Sign in with your GitHub account (or Microsoft account)
3. Select which categories to sync (recommended: sync everything)
4. VS Code syncs immediately and on every subsequent change

### Conflict Resolution

If settings differ between machines, VS Code shows a merge editor where you choose which version to keep. This is similar to a Git merge conflict but for settings.

### Learning Cards: Settings Sync

<details>
<summary>Screen reader users</summary>

- After enabling sync, all your accessibility settings (screen reader mode, accessibility signals, minimap disabled) apply on every machine
- Changes sync automatically in the background - no manual action needed after initial setup
- If a conflict occurs, VS Code opens a merge editor that is navigable with standard diff commands (F7 / Shift+F7)

</details>

<details>
<summary>Low vision users</summary>

- Your zoom level, font size, and High Contrast theme sync across machines
- After initial setup on one machine, every other VS Code instance immediately gets the same visual configuration
- Use Profiles to maintain separate configurations (e.g., "Presentation" profile with extra-large fonts)

</details>

<details>
<summary>Sighted users</summary>

- The sync status appears as a circular arrow icon in the Activity Bar (bottom-left, near Accounts)
- Conflicts and sync status are shown via notification banners
- Use `Ctrl+Shift+P` then "Settings Sync: Show Synced Data" to review what was synchronized

</details>


---

## 10. The Settings Editor

The Settings Editor is where you customize VS Code. There are two views: the graphical settings UI and the raw `settings.json` file.

### Opening the Settings Editor

| Method | Shortcut |
| --- | --- |
| Graphical Settings UI | `Ctrl+,` (Mac: `Cmd+,`) |
| JSON Settings file | `Ctrl+Shift+P` then type "Open User Settings (JSON)" |

### Navigating the Settings Editor

The graphical Settings UI has a **search box** at the top. Type any keyword and the settings list filters instantly.

#### Special Search Filters

| Filter | What It Shows |
| --- | --- |
| `@modified` | Only settings you have changed from their defaults |
| `@tag:accessibility` | All accessibility-related settings |
| `@tag:advanced` | Advanced, less commonly used settings |
| `@tag:experimental` | Experimental features not yet enabled by default |
| `@ext:github.copilot` | Settings for the GitHub Copilot extension |

### Key Accessibility Settings to Configure

```json
{
  "editor.accessibilitySupport": "on",
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  "editor.renderWhitespace": "none",
  "editor.fontSize": 16,
  "accessibility.signals.lineHasError": "on",
  "accessibility.signals.taskCompleted": "on",
  "accessibility.signals.chatResponseReceived": "on"
}
```

### Learning Cards: Settings Editor

<details>
<summary>Screen reader users</summary>

- Press `Ctrl+,` to open Settings. Focus lands in the search box - start typing immediately
- Type `@tag:accessibility` to see all accessibility settings grouped together
- Each setting is a form control (checkbox, dropdown, or text input) - use standard form navigation
- For direct JSON editing: `Ctrl+Shift+P` then "Open User Settings (JSON)" - this gives you a standard text editor

</details>

<details>
<summary>Low vision users</summary>

- Search for `editor.fontSize` to set your preferred font size for the code editor
- Search for `window.zoomLevel` to set the overall window zoom (affects all UI)
- Search for `theme` to switch to High Contrast or High Contrast Light themes
- The gear icon has a checkmark for modified settings, making it easy to spot what you have changed

</details>

<details>
<summary>Sighted users</summary>

- Click the gear icon in the bottom-left corner, then select "Settings"
- Use the search box to filter thousands of settings down to what you need
- The "Modified" indicator (blue bar) shows which settings you have customized
- Use the tabs at the top to switch between User settings (global) and Workspace settings (per-project)

</details>


---

## 11. The Keyboard Shortcuts Editor

The Keyboard Shortcuts Editor lets you view, search, and customize every keyboard shortcut in VS Code.

### Opening the Keyboard Shortcuts Editor

| Method | Shortcut |
| --- | --- |
| Graphical editor | `Ctrl+K Ctrl+S` |
| JSON editor | `Ctrl+Shift+P` then type "Open Keyboard Shortcuts (JSON)" |
| From Menu Bar | File then Preferences then Keyboard Shortcuts |

### Searching for Shortcuts

The editor has a search box that supports:

- **Command name:** Type `toggle terminal` to find the terminal toggle shortcut
- **Keystroke recording:** Click the keyboard icon (or press the record keys button) to record a key combination and find what it does
- **When clause:** Find shortcuts that only apply in specific contexts

### Customizing a Shortcut

1. Find the command in the list
2. Double-click the keybinding column (or press `Enter` on the row, then `Enter` again on the keybinding)
3. Press your desired key combination
4. Press `Enter` to confirm

### Learning Cards: Keyboard Shortcuts Editor

<details>
<summary>Screen reader users</summary>

- Press `Ctrl+K Ctrl+S` to open the Keyboard Shortcuts Editor. Focus lands in the search box.
- The results list is a table. Each row announces: Command name, Keybinding, When clause, and Source.
- Navigate rows with `Up/Down Arrow`. Press `Enter` to edit a keybinding.
- Tip: search for `accessibility` to find all accessibility-related shortcuts at once.

</details>

<details>
<summary>Low vision users</summary>

- The shortcut editor is a searchable, sortable table - zoom in as needed
- The Source column shows whether a shortcut is from Default, User, or an Extension
- Use the record keys feature to check what any key combination currently does

</details>

<details>
<summary>Sighted users</summary>

- Press `Ctrl+K Ctrl+S` to open the visual editor
- Click the keyboard icon in the search bar to record a keystroke and find its binding
- Right-click any row for options to change, remove, or reset a keybinding

</details>


---

## 12. Essential Keyboard Navigation and Find/Filter

### Panels and Areas

> **Mac users:** Substitute `Cmd` for `Ctrl` and `Option` for `Alt` in all shortcuts below.

| Area | Shortcut (Windows) | What Gets Focus |
| --- | --- | --- |
| Explorer (file tree) | `Ctrl+Shift+E` | Folder/file list |
| Search | `Ctrl+Shift+F` | Search input |
| Source Control (Git) | `Ctrl+Shift+G` | Changes list |
| Extensions | `Ctrl+Shift+X` | Extensions list |
| Terminal | `` Ctrl+` `` | Terminal input |
| Copilot Chat | `Ctrl+Shift+I` | Chat input |
| Command Palette | `Ctrl+Shift+P` | Command search input |
| Editor | `Ctrl+1` | Active editor file |
| Problems panel | `Ctrl+Shift+M` | List of all errors and warnings |

### Within the Editor

| Action | Shortcut |
| --- | --- |
| Go to beginning of file | `Ctrl+Home` |
| Go to end of file | `Ctrl+End` |
| Go to line N | `Ctrl+G` then type line number |
| Go to line and column | `Ctrl+G` then type `N:C` (e.g., `10:5`) |
| Go to symbol (heading in Markdown) | `Ctrl+Shift+O` |
| Go to definition | `F12` |
| Find in file | `Ctrl+F` |
| Next find result | `F3` |
| Previous find result | `Shift+F3` |
| Next error or warning | `F8` |
| Previous error or warning | `Shift+F8` |
| Open file by name | `Ctrl+P` then type filename |
| Toggle word wrap | `Alt+Z` |
| Toggle Tab focus mode | `Ctrl+M` (makes Tab move focus instead of indenting) |
| Increase/decrease font size | `Ctrl+=` / `Ctrl+-` |
| Breadcrumb navigation | `Ctrl+Shift+;` then arrow keys to navigate path segments |

### Find in Current File (`Ctrl+F`)

When the Find widget opens, three toggle buttons refine what matches:

| Toggle | Shortcut | What It Does |
| --- | --- | --- |
| Match Case | `Alt+C` | Limits results to exact uppercase/lowercase |
| Match Whole Word | `Alt+W` | Matches full words only, not substrings |
| Use Regular Expression | `Alt+R` | Enables regex patterns in the search box |

#### Screen reader interactions inside the Find widget

- Toggles are announced as checkboxes - press `Space` to toggle each one
- Match count is announced as you type (example: `3 of 12 matches`)
- `F3` / `Shift+F3` move through matches while the widget stays open
- `Escape` closes the widget and returns focus to your last cursor position

**Replace (`Ctrl+H`):** Opens the Find widget with a second input for the replacement text.

- `Ctrl+Shift+1` - replace the current match
- `Ctrl+Alt+Enter` - replace all matches at once

### Global Search Across the Workspace (`Ctrl+Shift+F`)

The global Search panel has a rich filtering system - all keyboard-accessible:

| Action | How |
| --- | --- |
| Open global search | `Ctrl+Shift+F` |
| Search input | Focus lands here automatically - type your query |
| Toggle case / word / regex | `Alt+C`, `Alt+W`, `Alt+R` (same as Find) |
| Include files filter | `Tab` to "files to include" field then type glob patterns |
| Exclude files filter | `Tab` to "files to exclude" field then type glob patterns |
| Collapse all results | `Ctrl+Shift+J` |
| Open a result | Navigate the result tree with `Up/Down Arrow` then `Enter` to open |

#### Glob pattern examples for this workshop

```text
docs/*.md          - all Markdown files in the docs folder
*.agent.md         - all agent definition files
.github/**         - everything inside the .github folder
!node_modules/**   - exclude node_modules folder
```

### Type-to-Filter in Tree Views

In the **Explorer** file tree and the **Source Control** changes list, type characters to narrow visible items:

1. Focus the Explorer (`Ctrl+Shift+E`)
2. Start typing a filename - a filter input appears at the bottom of the tree
3. The tree instantly narrows to matching files
4. Press `Escape` to clear the filter and restore full view

### Go to Symbol with Inline Filtering (`Ctrl+Shift+O`)

In any Markdown file, `Ctrl+Shift+O` opens a symbol picker populated by every heading. Type to narrow the list, then press `Enter` to jump.

### Explorer (File Tree) Navigation

| Action | Key |
| --- | --- |
| Navigate items | `Up/Down Arrow` |
| Expand folder | `Right Arrow` |
| Collapse folder | `Left Arrow` |
| Open file | `Enter` |
| Rename file | `F2` |
| Delete file | `Delete` |
| New file | `Ctrl+N` (then save with `Ctrl+S`) |


---

## 13. The Problems Panel

The **Problems panel** (`Ctrl+Shift+M`) shows all errors, warnings, and informational messages from linters, compilers, and extensions for every open file in your workspace.

### Opening the Problems Panel

- **Keyboard:** `Ctrl+Shift+M`
- **Status Bar:** Click the errors/warnings count (bottom-left of window)
- **Menu Bar:** View then Problems
- **From the editor:** Press `F8` to jump to the next problem (cycles through errors in the current file)

### Navigating Problems

| Action | Shortcut |
| --- | --- |
| Open Problems panel | `Ctrl+Shift+M` |
| Next problem in editor | `F8` |
| Previous problem in editor | `Shift+F8` |
| Filter problems | Type in the filter box at the top of the panel |
| Jump to problem source | `Enter` on a problem row |

### Understanding Problem Entries

Each entry shows:

- **Severity icon:** Error (red circle with X), Warning (yellow triangle), Info (blue circle with i)
- **Message:** Description of the problem
- **Source:** Which tool reported it (e.g., "markdownlint", "eslint", "Pylance")
- **File and line:** Where the problem is located

### Learning Cards: Problems Panel

<details>
<summary>Screen reader users</summary>

- Press `Ctrl+Shift+M` to focus the Problems panel. Your screen reader announces the total count.
- Each problem is read as: severity, message, source, file name, and line number
- Press `Enter` on any problem to jump directly to that line in the editor
- Use `F8` / `Shift+F8` from inside the editor to cycle through problems without opening the panel
- The status bar errors/warnings count updates in real time and is announced when you Tab to it

</details>

<details>
<summary>Low vision users</summary>

- Problems are color-coded: red for errors, yellow for warnings, blue for info
- The errors/warnings count in the Status Bar gives a quick overview
- Click any problem to jump to the exact file and line
- Filter the panel by typing keywords to reduce visual noise

</details>

<details>
<summary>Sighted users</summary>

- The Problems panel is in the bottom Panel area alongside Terminal and Output
- Red squiggly underlines in the editor correspond to problems in this panel
- Click any problem to navigate to its location
- Use the filter and severity toggles to focus on what matters

</details>


---

## 14. The Terminal

VS Code includes a fully featured integrated terminal. You can run shell commands, Git operations, and scripts without leaving the editor.

### Opening and Managing Terminals

| Action | Shortcut |
| --- | --- |
| Toggle terminal | `` Ctrl+` `` (backtick) |
| New terminal | `` Ctrl+Shift+` `` |
| Split terminal | `Ctrl+Shift+5` |
| Next terminal | Focus terminal then `Ctrl+PageDown` |
| Previous terminal | Focus terminal then `Ctrl+PageUp` |
| Kill terminal | Type `exit` or use the trash icon |

### Terminal Shell Integration

VS Code's shell integration enhances the terminal with:

- **Command decoration marks** - visual indicators showing where each command started and whether it succeeded or failed
- **Run recent command** (`Ctrl+R` in terminal) - VS Code's quick pick of your recent commands, searchable by name
- **Terminal IntelliSense** (`Ctrl+Space`) - completion suggestions for shell commands, file paths, and arguments

Enable Terminal IntelliSense: Settings (`Ctrl+,`) then search `terminal.integrated.suggest.enabled` then set to `on`.

### Terminal Accessibility

| Feature | How to Access |
| --- | --- |
| Accessible Help in terminal | `Alt+H` while terminal is focused |
| Navigate terminal output lines | `` Alt+Ctrl+PageUp `` / `` Alt+Ctrl+PageDown `` |
| Select terminal output | `Shift+Arrow keys` while in the terminal |
| Minimum contrast ratio | Settings then search `terminal.integrated.minimumContrastRatio` (default: 4.5 for WCAG AA) |

### Learning Cards: Terminal

<details>
<summary>Screen reader users</summary>

- Press `` Ctrl+` `` to toggle the terminal. Your screen reader announces "Terminal" and the shell prompt.
- The terminal acts like a standard text input - type commands and press `Enter`
- Press `Alt+H` while in the terminal for a full list of terminal-specific keyboard shortcuts
- Use `Ctrl+R` to open the "Run Recent Command" picker - a searchable list of your recent commands
- Terminal Navigation Mode: Commands for moving between lines help when reviewing output with a screen reader.

</details>

<details>
<summary>Low vision users</summary>

- VS Code enforces a minimum contrast ratio (4.5:1 by default) for terminal text
- Increase terminal font size: Settings then search `terminal.integrated.fontSize`
- Terminal themes inherit from your VS Code color theme - High Contrast themes apply here too
- Use `Ctrl+=` / `Ctrl+-` to zoom the entire window including the terminal

</details>

<details>
<summary>Sighted users</summary>

- The terminal appears in the bottom Panel - drag the top border to resize
- Click the `+` icon to create new terminals, the split icon to split, the trash icon to close
- Right-click in the terminal for copy/paste and other context menu options
- Multiple terminal tabs let you keep different shells open simultaneously

</details>


---

## 15. Copilot Chat Window

The **Copilot Chat** window (`Ctrl+Shift+I`) is your conversational AI assistant within VS Code. It can answer questions, generate code, explain code, fix problems, and help with documentation.

### Opening Copilot Chat

| Method | Shortcut |
| --- | --- |
| Chat view (sidebar) | `Ctrl+Shift+I` |
| Inline chat (in editor) | `Ctrl+I` |
| Quick chat (floating) | `Ctrl+Shift+Alt+L` |
| Command Palette | `Ctrl+Shift+P` then type `Chat: Open` |

### Chat Modes

| Mode | What It Does |
| --- | --- |
| **Ask** | Question-answer mode - explain code, answer questions, generate snippets |
| **Edit** | Multi-file editing mode - Copilot proposes edits across your workspace |
| **Agent** | Autonomous mode - Copilot can run terminal commands, create files, and perform complex tasks |

Switch modes using the mode picker at the top of the Chat view, or use keyboard shortcuts:
- `workbench.action.chat.openAsk` - Ask mode
- `workbench.action.chat.openEdit` - Edit mode
- `workbench.action.chat.openAgent` - Agent mode

### Using Chat Participants

Type `@` in the chat input to see available participants:

- **@workspace** - Ask questions about your entire codebase
- **@vscode** - Ask about VS Code settings and features
- **@terminal** - Run commands or explain terminal output

### Learning Cards: Copilot Chat

<details>
<summary>Screen reader users</summary>

- Press `Ctrl+Shift+I` to open Chat. Focus lands in the text input - start typing your question.
- After submitting, wait for the response to complete (audio cue plays if `accessibility.signals.chatResponseReceived` is on)
- Press `Alt+F2` (Accessible View) to read the complete response in a clean, navigable text view
- Navigate response content with `Up/Down Arrow` in the Accessible View
- Press `Escape` to return to the chat input for follow-up questions

</details>

<details>
<summary>Low vision users</summary>

- The Chat view appears in the sidebar and respects your zoom level and font settings
- Copilot responses include syntax-highlighted code blocks
- Use `Ctrl+I` for inline chat that appears right where your cursor is in the editor
- Resize the Chat panel by dragging its border for a comfortable reading width

</details>

<details>
<summary>Sighted users</summary>

- Click the Copilot icon in the sidebar or use `Ctrl+Shift+I`
- Code blocks in responses have a "Copy" button and an "Insert at Cursor" button
- The mode picker at the top lets you switch between Ask, Edit, and Agent modes
- Use `@workspace` to ask questions about your specific project context

</details>


---

## 16. Accessible Help, Accessible View, and Accessible Diff

VS Code has a family of purpose-built accessibility features that give screen reader users complete, structured access to content that is otherwise conveyed visually or through dynamic regions. These three are the most important to know before working with Copilot and diffs.


### 16.1 Accessible Help - Context-Aware Keyboard Guide

Every interactive area of VS Code - the editor, the terminal, the diff view, the Copilot Chat panel - has its own keyboard commands. **Accessible Help** surfaces those commands in a plain-text, fully readable dialog, tailored to exactly where your focus is right now.

#### How to open Accessible Help

| Context | Shortcut |
| --- | --- |
| Inside the editor | `Alt+H` |
| Inside the terminal | `Alt+H` |
| Inside a diff view | `Alt+H` |
| Inside Copilot Chat | `Alt+H` |
| Any VS Code widget | `Alt+H` |

The dialog is announced with a heading and a complete list of keyboard shortcuts for that specific widget. Navigate with `Up/Down Arrow`. Press `Escape` to dismiss and return focus to where you were.

**Why this matters:** You do not need to memorize every shortcut in every panel. Open Accessible Help in any unfamiliar area and VS Code will tell you exactly what you can do there. It is the built-in answer to "what can I press from here?"

#### Example output when pressing `Alt+H` in the editor

```text
Accessible Help: Editor

Press F8 to jump to the next error or warning.
Press Shift+F8 to jump to the previous error or warning.
Press Ctrl+Shift+M to open the Problems panel.
Press F12 to go to a definition.
Press Alt+F12 to peek a definition inline.
Press Ctrl+Shift+O to go to a symbol in this file.
Press Alt+F2 to open the Accessible View.
Press Alt+H to view this help content again.
```

Use Accessible Help as your first action whenever you land somewhere new in VS Code.


### 16.2 Accessible View - Reading Dynamic and Streamed Content

**Accessible View** (`Alt+F2`) gives screen reader users a clean, static, fully readable version of content that is otherwise presented dynamically, in tooltips, or in streaming form.

#### How to open Accessible View

| Shortcut | When to Use |
| --- | --- |
| `Alt+F2` | Open Accessible View for the currently focused element |
| `Escape` | Close Accessible View and return to the editor |

#### What Accessible View provides

| Content Type | Without Accessible View | With Accessible View (`Alt+F2`) |
| --- | --- | --- |
| Copilot Chat response | Fragmented - announced as tokens stream in | Full complete response, read sequentially with Arrow keys |
| Inline Copilot suggestion | Ghost text - may not be announced | Announced as "Suggestion: [full text]" |
| Hover documentation | Popup tooltip - announced only briefly | Full content, fully navigable with Arrow keys |
| Error / warning details | On-focus message only | Full error text, error code, and suggested fix |
| Terminal output | May be truncated by live region limits | Full output in review mode with scroll |
| Notification banners | Announced once and dismissed | Persistent readable content until you close it |

#### Recommended workflow for Copilot Chat

1. Type your prompt in the Chat input
2. Wait for the response to finish (NVDA: live region announcements stop; JAWS: typing indicator disappears; VoiceOver: busy state clears)
3. Press `Alt+F2` - Accessible View opens with the complete response
4. Navigate with `Up/Down Arrow` through the response
5. Press `Escape` to return to the chat input

#### Recommended workflow for hover documentation

1. Navigate to a symbol or link with keyboard
2. Press `Ctrl+K I` to trigger hover programmatically (no mouse needed)
3. Press `Alt+F2` to open Accessible View with the full hover content
4. Press `Escape` to dismiss


### 16.3 Accessible Diff Viewer - Reading Changes Without Visual Scanning

When you open a file diff - in Source Control, in the GitHub PR extension, or during a merge conflict - VS Code normally shows it as a side-by-side or inline visual view. For screen reader users, tracking which lines changed and how can be difficult without a structured reading mode.

**The Accessible Diff Viewer** presents the same diff as a plain, navigable list of changed lines - organized by hunk, labeled by change type (added, removed, unchanged), with the line number announced for each line.

#### How to open the Accessible Diff Viewer

| Shortcut | What Happens |
| --- | --- |
| `F7` | Move to the next diff hunk (from within the diff editor) |
| `Shift+F7` | Move to the previous diff hunk |
| Command Palette | `Ctrl+Shift+P` then type "Open Accessible Diff Viewer" |

#### What the Accessible Diff Viewer announces

For each hunk (a block of related changes), the viewer announces:

- The hunk number and total hunk count (`Hunk 2 of 5`)
- The line range affected
- Each line, prefixed with its change type:

```text
Hunk 1 of 3 - lines 12 to 18
  Unchanged: ## Screen Reader Cheat Sheet
- Line removed: > Quick reference for NVDA users.
+ Line added: > Quick reference for NVDA, JAWS, and VoiceOver users.
  Unchanged:
  Unchanged: Use this document during the workshop.
```

This gives you the complete picture of what changed, in reading order, without visual diff scanning.

#### Practical uses during this workshop

- **Before approving a PR:** Open the diff then `F7` to enter the first hunk then navigate each change then `F7` for next hunk then repeat until all hunks reviewed
- **During a merge conflict:** The conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) appear as lines in the viewer - you can read both conflicting versions before deciding which to keep
- **After Copilot generates an edit:** Open the diff (`Ctrl+Shift+G` then navigate to the changed file then `Enter`) then review exactly what Copilot changed vs. what was there before

#### Audio cues for diffs

With `accessibility.signals.diffLineInserted` and `accessibility.signals.diffLineDeleted` both set to `on` in Settings, VS Code plays a distinct tone when your cursor moves over an added line (higher pitched) or a removed line (lower pitched). You receive change-type information through sound before the line text is announced.


---

## 17. Accessibility Signals

VS Code communicates editor state through **Accessibility Signals** -- non-verbal cues that tell you what is happening as you move through code, run commands, and interact with Copilot. Signals replaced the older "Audio Cues" system (deprecated since VS Code 1.85) and are significantly more powerful.

> **Official documentation:** [VS Code Accessibility -- Accessibility Signals](https://code.visualstudio.com/docs/configure/accessibility/accessibility#_accessibility-signals)

### How Signals Work: The Dual-Channel Architecture

Every accessibility signal has **two independent channels** that you control separately:

| Channel | What It Does | Who Benefits |
| --- | --- | --- |
| **Sound** | Plays a short audio tone | Everyone -- sighted users, low vision users, and screen reader users all benefit from audio feedback |
| **Announcement** | Sends a status message that screen readers and braille displays announce | Primarily screen reader and braille users |

Each channel accepts one of these values:

| Value | Meaning |
| --- | --- |
| `"on"` | Always enabled regardless of screen reader state |
| `"off"` | Always disabled |
| `"auto"` | Enabled only when VS Code detects a screen reader (default for most announcement channels) |
| `"userGesture"` | Enabled only when the user explicitly triggers the action (used by Save and Format signals to avoid noise from auto-save) |

This means you can enable sounds for everyone while keeping announcements on `auto` so they only fire when a screen reader is attached. Or you can turn on announcements without sounds. Full independent control.

### Discovering Signals: The Two Essential Commands

VS Code provides two commands that let you **browse every available signal, hear what each one sounds like, and toggle them on or off** without editing settings.json:

| Command (Command Palette `Ctrl+Shift+P`) | What It Does |
| --- | --- |
| **Help: List Signal Sounds** | Opens a picker listing every signal sound. As you arrow through the list, each sound plays so you can hear it. Press `Enter` to toggle the selected signal on or off. |
| **Help: List Signal Announcements** | Same experience for announcement messages. Arrow through the list to hear the announcement text read by your screen reader, then toggle. |

These are the fastest way to configure signals. You do not need to memorize setting names.

<details>
<summary>Screen reader users</summary>

The **Help: List Signal Announcements** command is especially valuable. It lists every announcement message VS Code can send to your screen reader. Arrow through the list -- your screen reader reads each announcement label. Press `Enter` to toggle. This is faster than searching through Settings and ensures you hear the exact phrasing VS Code will use.

</details>

<details>
<summary>Low vision users</summary>

Even if you do not use a screen reader, signal sounds add a valuable audio layer. When you land on an error line, a distinct error tone plays before you even read the squiggly underline. When a terminal command finishes, a completion chime saves you from watching the terminal. Open **Help: List Signal Sounds** to preview and enable the ones that help your workflow.

</details>

<details>
<summary>Sighted users</summary>

Signal sounds are not just for accessibility -- they improve any workflow. Enable `taskCompleted` and `taskFailed` to know when builds finish while you are reading documentation in another tab. Enable `chatResponseReceived` to hear when Copilot finishes generating while you work in a different file. Open **Help: List Signal Sounds** to hear what each one sounds like.

</details>

### Volume Control

Control signal volume independently from your system volume:

| Setting | Range | Default | Purpose |
| --- | --- | --- | --- |
| `accessibility.signalOptions.volume` | 0 -- 100 | 50 | Master volume for all accessibility signal sounds |

Set this in Settings (`Ctrl+,`) by searching "signal volume" or add it to `settings.json`:

```json
{
  "accessibility.signalOptions.volume": 70
}
```

### Complete Signal Reference

VS Code registers **30+ accessibility signals** organized into categories. The tables below list every signal, its setting key, the sound it plays, and whether it supports announcements.

#### Editor Signals

These fire when your cursor moves to a line or position with a specific marker:

| Setting Key | Fires When | Sound | Announcement |
| --- | --- | --- | --- |
| `accessibility.signals.lineHasError` | Cursor moves to a line containing an error | Error tone | "Error on Line" |
| `accessibility.signals.lineHasWarning` | Cursor moves to a line containing a warning | Warning tone (lower pitch) | "Warning on Line" |
| `accessibility.signals.positionHasError` | Cursor moves to the exact position of an error | Error tone | "Error" |
| `accessibility.signals.positionHasWarning` | Cursor moves to the exact position of a warning | Warning tone | "Warning" |
| `accessibility.signals.lineHasFoldedArea` | Cursor moves to a line with a collapsed/folded region | Folded area tone | "Folded" |
| `accessibility.signals.lineHasBreakpoint` | Cursor moves to a line with a breakpoint | Break tone | "Breakpoint" |
| `accessibility.signals.lineHasInlineSuggestion` | Cursor moves to a line with a Copilot ghost text suggestion | Quick fix tone | -- |
| `accessibility.signals.nextEditSuggestion` | Next Edit Suggestion appears on the line | Next edit tone | "Next Edit Suggestion" |
| `accessibility.signals.noInlayHints` | Cursor is on a line with no inlay hints | Error tone | "No Inlay Hints" |

> **Line vs Position signals:** The `lineHasError` signal fires once when your cursor enters the line. The `positionHasError` signal fires when the cursor reaches the exact character where the error starts. Both can be enabled simultaneously for layered feedback.

#### Diff Signals

These fire when navigating changes in the diff editor or reviewing pull requests:

| Setting Key | Fires When | Sound |
| --- | --- | --- |
| `accessibility.signals.diffLineInserted` | Cursor moves over an added (green) line | Inserted tone (higher pitch) |
| `accessibility.signals.diffLineDeleted` | Cursor moves over a removed (red) line | Deleted tone (lower pitch) |
| `accessibility.signals.diffLineModified` | Cursor moves over a modified line | Modified tone |

These are critical for pull request review. You hear the type of change before reading the content.

#### Terminal Signals

| Setting Key | Fires When | Sound | Announcement |
| --- | --- | --- | --- |
| `accessibility.signals.terminalBell` | Terminal sends a bell character | Bell tone | -- |
| `accessibility.signals.terminalQuickFix` | Terminal detects a quick fix suggestion | Quick fix tone | "Quick Fix" |
| `accessibility.signals.terminalCommandSucceeded` | A terminal command exits successfully | Command succeeded tone | -- |
| `accessibility.signals.taskCompleted` | A VS Code Task finishes successfully | Task completed tone | -- |
| `accessibility.signals.taskFailed` | A VS Code Task exits with an error | Task failed tone | -- |

> **Workshop tip:** Enable `taskCompleted` and `taskFailed` immediately. When you run `git push` or `npm test` in the terminal, you hear whether it succeeded without switching back to the terminal panel.

#### Chat and Copilot Signals

| Setting Key | Fires When | Sound | Announcement |
| --- | --- | --- | --- |
| `accessibility.signals.chatRequestSent` | You send a message to Copilot Chat | Request sent tone | -- |
| `accessibility.signals.chatResponsePending` | Copilot is generating a response (loops) | Progress tone | -- |
| `accessibility.signals.chatResponseReceived` | Copilot finishes generating | One of 4 random response tones | -- |
| `accessibility.signals.chatEditModifiedFile` | Copilot Edits modifies a file in your workspace | Modified file tone | -- |
| `accessibility.signals.chatUserActionRequired` | Copilot needs you to take an action (accept/reject) | Action required tone | -- |
| `accessibility.signals.editsKept` | You accept Copilot's suggested edits | Edits kept tone | -- |
| `accessibility.signals.editsUndone` | You reject/undo Copilot's suggested edits | Edits undone tone | -- |

> **Why four response sounds?** `chatResponseReceived` plays a randomly chosen variant each time (responseReceived1 through responseReceived4). This prevents habituation -- your brain stays alert to the signal instead of filtering it out after hearing the same sound repeatedly. This is an intentional accessibility design pattern.

#### Debug Signals

| Setting Key | Fires When | Sound | Announcement |
| --- | --- | --- | --- |
| `accessibility.signals.onDebugBreak` | Debugger stops on a breakpoint | Break tone | "Breakpoint" |

#### Editor Action Signals

These fire on user-triggered actions and use the `"userGesture"` value to distinguish manual saves from auto-saves:

| Setting Key | Fires When | Sound |
| --- | --- | --- |
| `accessibility.signals.save` | File is saved | Save tone |
| `accessibility.signals.format` | File is formatted | Format tone |
| `accessibility.signals.clear` | Terminal or output is cleared | Clear tone |

Set these to `"userGesture"` rather than `"on"` if auto-save is enabled, to avoid a sound on every keystroke pause:

```json
{
  "accessibility.signals.save": {
    "sound": "userGesture",
    "announcement": "off"
  }
}
```

#### Voice Signals

| Setting Key | Fires When | Sound |
| --- | --- | --- |
| `accessibility.signals.voiceRecordingStarted` | Voice dictation begins | Recording started tone |
| `accessibility.signals.voiceRecordingStopped` | Voice dictation ends | Recording stopped tone |

#### Code Action Signals

| Setting Key | Fires When | Sound |
| --- | --- | --- |
| `accessibility.signals.codeActionTriggered` | A code action (quick fix, refactor) is triggered | Code action triggered tone |
| `accessibility.signals.codeActionApplied` | A code action is applied to the code | Code action applied tone |

### Debounce Settings for Position Signals

When you hold an arrow key and your cursor moves rapidly through lines, position-based signals (error/warning at position) could fire dozens of times per second. VS Code debounces these by default:

| Setting | Default | Purpose |
| --- | --- | --- |
| `accessibility.signalOptions.debouncePositionChanges` | `true` | Enable position signal debouncing |
| `accessibility.signalOptions.experimental.delays.errorAtPosition` | `{ sound: 300, announcement: 3000 }` | Millisecond delay before error-at-position fires |
| `accessibility.signalOptions.experimental.delays.warningAtPosition` | `{ sound: 300, announcement: 3000 }` | Millisecond delay before warning-at-position fires |
| `accessibility.signalOptions.experimental.delays.general` | `{ sound: 300, announcement: 3000 }` | Default delay for all other position-based signals |

The announcement delay is intentionally longer (3 seconds) because screen reader interruptions are more disruptive than brief sounds.

### Recommended Workshop Profile

Add this to your VS Code `settings.json` (`Ctrl+Shift+P` then "Preferences: Open User Settings (JSON)"):

```json
{
  "editor.accessibilitySupport": "on",

  "accessibility.signalOptions.volume": 70,

  "accessibility.signals.lineHasError": {
    "sound": "on",
    "announcement": "auto"
  },
  "accessibility.signals.lineHasWarning": {
    "sound": "on",
    "announcement": "auto"
  },
  "accessibility.signals.lineHasFoldedArea": {
    "sound": "on",
    "announcement": "auto"
  },
  "accessibility.signals.lineHasBreakpoint": {
    "sound": "on",
    "announcement": "auto"
  },
  "accessibility.signals.taskCompleted": {
    "sound": "on",
    "announcement": "auto"
  },
  "accessibility.signals.taskFailed": {
    "sound": "on",
    "announcement": "auto"
  },
  "accessibility.signals.terminalCommandSucceeded": {
    "sound": "on",
    "announcement": "off"
  },
  "accessibility.signals.chatResponseReceived": {
    "sound": "on",
    "announcement": "auto"
  },
  "accessibility.signals.diffLineInserted": {
    "sound": "on",
    "announcement": "off"
  },
  "accessibility.signals.diffLineDeleted": {
    "sound": "on",
    "announcement": "off"
  },
  "accessibility.signals.save": {
    "sound": "userGesture",
    "announcement": "off"
  },

  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "none",
  "editor.wordWrap": "on"
}
```

This profile enables core sounds for everyone and sets announcements to `auto` so they activate only when a screen reader is detected. The `save` signal uses `userGesture` to avoid noise from auto-save. Diff signals are sound-only because rapid line navigation with announcements would overwhelm a screen reader.

<details>
<summary>Screen reader users</summary>

Focus on announcements more than sounds. Set the signals you care about most to `"announcement": "on"` (not just `"auto"`) to guarantee they fire even if VS Code does not detect your screen reader. The most valuable announcements for this workshop are:

- `lineHasError` -- "Error on Line" as you navigate code
- `taskCompleted` / `taskFailed` -- know when git operations finish
- `chatResponseReceived` -- know when Copilot is done responding
- `lineHasBreakpoint` -- confirm breakpoint placement during debugging

Use **Help: List Signal Announcements** (`Ctrl+Shift+P` then type "List Signal Announcements") to hear and toggle each one.

</details>

<details>
<summary>Low vision users</summary>

Sounds give you status confirmation without needing to find and read small visual indicators. The most impactful signals:

- `lineHasError` + `lineHasWarning` -- hear errors as you navigate instead of scanning for red/yellow squiggles
- `diffLineInserted` + `diffLineDeleted` -- hear change types in pull request diffs before reading the color coding
- `taskCompleted` + `taskFailed` -- audio confirmation when terminal commands finish
- `chatResponseReceived` -- know when Copilot is done while you read other content

Raise the volume with `accessibility.signalOptions.volume` (try 80 or 90) if your system volume competes with screen magnification software audio.

</details>

<details>
<summary>Sighted users</summary>

Do not skip this section because you can see the screen. Signal sounds make you faster:

- **Build notifications:** Enable `taskCompleted` and `taskFailed`. Start a build, switch to writing code, hear the chime when it finishes.
- **Copilot flow:** Enable `chatResponseReceived`. Ask Copilot a question, continue editing, hear the response tone.
- **Error awareness:** Enable `lineHasError`. As you type, you hear immediately when you introduce a syntax error without glancing at the Problems panel.
- **Code review:** Enable diff signals. Arrow through a PR diff and hear inserted/deleted/modified tones. Your eyes stay on the code while your ears track the change type.

Start with **Help: List Signal Sounds** to preview each tone and build your personal selection.

</details>

### Migrating from Legacy Audio Cues

If you previously configured the older `audioCues.*` settings (deprecated since VS Code 1.85), VS Code automatically maps them to the new `accessibility.signals.*` namespace. However, the new settings offer the dual sound/announcement structure that the old settings did not have. Review your configured signals using **Help: List Signal Sounds** and **Help: List Signal Announcements** to take advantage of the new independent controls.

**Note:** `minimap.enabled: false` in the recommended profile removes the visual minimap that adds no value for screen reader users and can cause some accessibility tools to announce additional regions.


---

## 18. Git Operations Inside VS Code

This section previews the key Git operations you will perform inside VS Code. [Chapter 6 (Git & Source Control)](11-git-source-control.md) covers each in full detail with step-by-step walkthroughs. This is your orientation.

### Cloning a Repository

**What it does:** Downloads a complete copy of a GitHub repository to your local machine.

| Method | Steps |
| --- | --- |
| Command Palette | `Ctrl+Shift+P` then type `Git: Clone` then paste the repository URL then choose a local folder |
| Terminal | `` Ctrl+` `` then type `git clone https://github.com/owner/repo.git` |
| Source Control view | If no folder is open, the Source Control view shows a "Clone Repository" button |

**Screen reader tip:** After cloning, VS Code asks "Would you like to open the cloned repository?" Press `Enter` to open it immediately.

### Forking a Repository

**What it does:** Creates your own copy of someone else's repository under your GitHub account.

Forking happens on GitHub.com, not inside VS Code. After forking:

1. Go to your fork on GitHub.com (`github.com/your-username/repo`)
2. Clone your fork using the steps above
3. VS Code's Git extension automatically tracks your fork as the `origin` remote

### Pulling Changes

**What it does:** Downloads and applies new commits from the remote repository to your local copy.

| Method | Steps |
| --- | --- |
| Command Palette | `Ctrl+Shift+P` then type `Git: Pull` |
| Status Bar | Click the sync icon (circular arrows) in the Status Bar |
| Terminal | `` Ctrl+` `` then type `git pull` |
| Source Control view | Click the "..." menu then Pull |

### Fetching Changes

**What it does:** Checks for new commits on the remote without applying them. Fetch is "look but do not touch."

| Method | Steps |
| --- | --- |
| Command Palette | `Ctrl+Shift+P` then type `Git: Fetch` |
| Terminal | `` Ctrl+` `` then type `git fetch` |

After fetching, the Status Bar shows if you are behind the remote (e.g., "0 up, 3 down" means 3 commits to pull).

### Pushing Changes

**What it does:** Uploads your local commits to the remote repository.

| Method | Steps |
| --- | --- |
| Command Palette | `Ctrl+Shift+P` then type `Git: Push` |
| Status Bar | Click the sync icon |
| Terminal | `` Ctrl+` `` then type `git push` |
| Source Control view | Click the "..." menu then Push |

### Branching

**What it does:** Creates an isolated workspace for your changes without affecting the main branch.

| Method | Steps |
| --- | --- |
| Command Palette | `Ctrl+Shift+P` then type `Git: Create Branch` then enter branch name |
| Status Bar | Click the branch name (bottom-left) then select "Create new branch" |
| Terminal | `` Ctrl+` `` then type `git checkout -b branch-name` |

### Staging and Committing

**What it does:** Staging selects which changes to include. Committing saves them as a permanent snapshot.

1. Open Source Control (`Ctrl+Shift+G`)
2. Navigate the changes list with `Up/Down Arrow`
3. Press `Enter` on a file to see the diff
4. Press `+` (or use the stage button) to stage a file
5. Move to the commit message input at the top
6. Type your commit message
7. Press `Ctrl+Enter` to commit

### Learning Cards: Git in VS Code

<details>
<summary>Screen reader users</summary>

- **Source Control view** (`Ctrl+Shift+G`): Your screen reader announces the number of changed files. Navigate with `Up/Down Arrow`.
- **Staging:** With a file focused in the changes list, press the stage button (announced as "Stage Changes"). Or open Command Palette and type `Git: Stage`.
- **Committing:** The commit message input is at the top of the Source Control view. Type your message and press `Ctrl+Enter`.
- **Branch switching:** The current branch name is in the Status Bar. Click or `Enter` on it for a branch picker. Your screen reader announces each branch name.
- **Sync status:** The Status Bar shows upload/download arrow counts. Tab to it to hear "0 pending uploads, 2 pending downloads" style announcements.

</details>

<details>
<summary>Low vision users</summary>

- Source Control view uses colored indicators: green `+` for new files, yellow `M` for modified, red `D` for deleted
- The diff editor shows added lines with a green background and removed lines with a red background
- Use the minimap gutter in the diff view to see the overall pattern of changes
- Branch name in the Status Bar is always visible - the font respects your zoom level

</details>

<details>
<summary>Sighted users</summary>

- Click the Source Control icon (branch/fork icon) in the Activity Bar
- Click `+` next to files to stage them, or click the `+` on the "Changes" header to stage all
- Type your commit message in the text box at the top and click the checkmark to commit
- The branch name in the bottom-left Status Bar is clickable for branch switching

</details>


---

*Next: [Working with Pull Requests](06-working-with-pull-requests.md)*
*Back: [Working with Issues](04-working-with-issues.md)*
*Related: [Git & Source Control in VS Code](11-git-source-control.md) | [GitHub Pull Requests Extension](12-github-pull-requests-extension.md) | [GitHub Copilot](13-github-copilot.md) | [Screen Reader Cheat Sheet](appendix-b-screen-reader-cheatsheet.md) | [VS Code Accessibility Reference](appendix-m-vscode-accessibility-reference.md)*
