# Git Going with GitHub - Audio Series

## Episode 14: GitHub Copilot

**Series:** Git Going with GitHub
**Episode:** 14 of 44
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

- What GitHub Copilot is and how it works
- Inline code suggestions and how to accept or dismiss them
- Copilot Chat: asking questions in natural language
- Effective prompting strategies for accessibility-focused work
- Custom instructions and how to tailor Copilot to your needs
- Copilot with screen readers: what works well and current limitations


### Concept Coverage Checklist

Every concept below MUST be explained during the episode. Do not skip any.
When a concept is complex, use an analogy or real-world comparison to make it concrete.

- [ ] **What GitHub Copilot is: an AI coding assistant**
- [ ] **How Copilot generates suggestions from context**
- [ ] **Inline code completions: how they appear and how to accept or dismiss**
- [ ] **Tab to accept, Escape to dismiss, Alt+] for next suggestion**
- [ ] **Copilot Chat: opening the chat panel**
- [ ] **Asking questions in natural language in the chat**
- [ ] **Chat participants: @workspace, @terminal, @vscode**
- [ ] **Slash commands in chat: /explain, /fix, /tests, /doc**
- [ ] **Effective prompting: being specific, providing context, iterating**
- [ ] **Custom instructions files: .github/copilot-instructions.md**
- [ ] **Prompt files: .github/prompts/*.prompt.md**
- [ ] **How Copilot interacts with screen readers: what works well**
- [ ] **Current Copilot limitations with accessibility**
- [ ] **The AI models available and how to switch between them**
- [ ] **Copilot for non-code tasks: writing docs, commit messages, PR descriptions**

### Prerequisites (briefly recap these)

Listeners may have heard these earlier episodes. Briefly remind them of:

- Episode 11: VS Code basics and the editor interface

### Cross-Referenced Material

The following supplementary content is included after the primary source.
Reference it naturally when a concept would benefit from additional context,
but keep the main narrative focused on the primary chapter.

- Copilot Reference - features, participants, commands
- Copilot AI Models - model comparison

### Primary Source Material

# GitHub Copilot
> **Listen to Episode 14:** [GitHub Copilot](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## AI-Powered Code Assistance in VS Code

> **Day 2, Block 2-3 Material**
>
> This guide covers GitHub Copilot: inline code suggestions, Copilot Chat (conversational assistance), custom instructions vs custom agents, effective prompting for non-code contributions, and using Accessible View to read AI-generated responses.
>
> **Prerequisites:** [VS Code Setup & Accessibility Basics](05-vscode-accessibility.md), [Git & Source Control in VS Code](11-git-source-control.md)

> **Mac keyboard shortcuts:** Throughout this chapter, all `Ctrl+` shortcuts use `Cmd+` on Mac, and `Alt+` shortcuts use `Option+` on Mac. Key equivalents: `Ctrl+Shift+I` → `Cmd+Shift+I` (Chat), `Ctrl+I` → `Cmd+I` (inline chat), `Alt+F2` → `Option+F2` (Accessible View), `Ctrl+/` → `Cmd+/` (insert suggestion). See the [Keyboard Shortcuts Reference](#8-keyboard-shortcuts-reference) at the end of this chapter for the complete list.


## Table of Contents

1. [What is GitHub Copilot](#1-what-is-github-copilot)
2. [Installing GitHub Copilot](#2-installing-github-copilot)
3. [Inline Suggestions - Ghost Text Completions](#3-inline-suggestions--ghost-text-completions)
4. [GitHub Copilot Chat - Conversational Assistance](#4-github-copilot-chat--conversational-assistance)
5. [Effective Prompting for Documentation Work](#5-effective-prompting-for-documentation-work)
6. [Custom Instructions vs Custom Agents](#6-custom-instructions-vs-custom-agents)
7. [Using Accessible View with Copilot Responses](#7-using-accessible-view-with-copilot-responses)
8. [Keyboard Shortcuts Reference](#8-keyboard-shortcuts-reference)


## 1. What is GitHub Copilot

GitHub Copilot is an AI pair programmer that suggests code and text completions as you type. It can:

- Complete lines of code or documentation
- Generate entire functions or sections of text from comments
- Answer questions about code in your workspace
- Explain complex code in plain language
- Draft documentation, issue responses, and commit messages
- Search for files and symbols across your workspace

**For this workshop:** Copilot helps with Markdown documentation, issue triage, PR descriptions, and commit messages - not just code.

**Copilot Free tier:** Available for all GitHub users. Provides access to inline suggestions and Copilot Chat with usage limits. No payment required for this workshop.

**Screen reader support:** Copilot is fully accessible with screen readers. Suggestions are announced via ARIA live regions, and Accessible View provides complete access to Chat responses.


## 2. Installing GitHub Copilot

### Installation Steps

1. Open Extensions sidebar: `Ctrl+Shift+X` (Mac: `Cmd+Shift+X`)
2. Search for "GitHub Copilot Chat"
3. Find **GitHub Copilot Chat** (publisher: GitHub)
4. Press `Enter` to open the extension detail page
5. `Tab` to "Install" button → press `Enter`
6. Wait for installation to complete

**One extension, all features:** GitHub Copilot Chat is now the single all-in-one extension. It provides inline code suggestions, the Chat panel (`Ctrl+Shift+I` / Mac: `Cmd+Shift+I`), inline chat (`Ctrl+I` / Mac: `Cmd+I`), and all agent features. The older separate "GitHub Copilot" extension has been deprecated.

### Signing In

After installation:

1. VS Code prompts: "Sign in to use GitHub Copilot"
2. Navigate to the notification or click the Copilot icon in the status bar
3. Select "Sign in to GitHub"
4. Your browser opens for GitHub authentication
5. Authorize the Copilot extension
6. Return to VS Code

**Verify activation:**
- Bottom-right status bar shows Copilot icon (looks like `><`)
- Icon should be active (not grayed out)
- If grayed out, click it to sign in

### Checking Subscription Status

**Command Palette:**
1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "Copilot: Check Status"
3. Select it to see your subscription tier (Free, Pro, Enterprise)

**Free tier includes:**
- Completions and multi-line suggestions
- Copilot Chat
- Limited monthly usage (usually sufficient for documentation work)


## 3. Inline Suggestions - Ghost Text Completions

Copilot suggests completions as you type, displayed as gray "ghost text" after your cursor. In screen reader mode, VS Code announces suggestions rather than showing them visually.

### How Inline Suggestions Work

**While typing:**
1. Copilot analyzes your context (file content, cursor position, nearby files)
2. Generates a suggestion
3. Presents the suggestion

<details>
<summary>Visual / mouse users</summary>

The suggestion appears as **gray "ghost text"** after your cursor - a preview of what Copilot thinks you want to type next. It's there but not inserted; press `Tab` to accept it or `Escape` to dismiss.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

Suggestions are **announced via ARIA live regions** - ghost text is not visually meaningful to you so VS Code reads it instead:
- **NVDA/JAWS:** "Suggestion available" (or reads the suggestion text, depending on verbosity settings)
- **VoiceOver:** Announces suggestions in accessible form

Press `Alt+F2` (Mac: `Option+F2`) to open the suggestion in **Accessible View** - this gives you the complete suggestion text in a static, fully readable panel without streaming.

</details>

### Accepting Suggestions

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept entire suggestion | `Tab` | `Tab` |
| Reject suggestion | `Escape` | `Escape` |
| Accept one word at a time | `Ctrl+Right Arrow` | `Cmd+Right Arrow` |
| Show next alternative suggestion | `Alt+]` | `Option+]` |
| Show previous alternative suggestion | `Alt+[` | `Option+[` |
| Open full suggestion list | `Ctrl+Enter` | `Cmd+Enter` |
| Open suggestion in Accessible View | `Alt+F2` | `Option+F2` |
| Insert suggestion from Accessible View at cursor | `Ctrl+/` | `Cmd+/` |

**Accepting word-by-word (`Ctrl+Right Arrow` / Mac: `Cmd+Right Arrow`) is particularly useful when:**
- The suggestion starts correctly but you want to finish differently
- You want to review the suggestion incrementally
- You're learning and want to see how Copilot structures responses

### Reading Suggestions with Screen Readers

> **Visual users:** If Copilot's ghost text is getting in the way, skip to "Disabling Inline Suggestions" below.

<details>
<summary>Screen reader users - tuning announcement verbosity</summary>

**If suggestions are announced too frequently or are intrusive:**

**NVDA:**
1. NVDA Menu → Preferences → Settings → Presentation
2. Find "Report dynamic content changes"
3. Reduce verbosity level or set specific delays

**JAWS:**
1. Settings Center → HTML/PDF/Accessibility
2. Adjust "Auto Forms Mode" and "ARIA Live Region" settings

**VoiceOver:**
1. VoiceOver Utility → Verbosity
2. Reduce "Announcements" level

**Alternative: Use Accessible View**
Press `Alt+F2` (Mac: `Option+F2`) when a suggestion appears to read it in the Accessible View (full text, no streaming).

</details>

### Prompting Through Comments

Copilot reads inline comments as instructions. For Markdown files:

```markdown
<!-- Write a step-by-step guide for screen reader users on how to create a GitHub issue -->
```

Type this comment, press `Enter`, and Copilot drafts content based on your instruction. You review, edit, and refine.

**Example prompts for this workshop:**

```markdown
<!-- Explain how to navigate the GitHub Issues list with NVDA -->

<!-- Create a checklist for accessible Markdown documentation -->

<!-- Write alt text for a screenshot showing the GitHub PR review interface -->

<!-- Draft a commit message for fixing heading hierarchy in GUIDE.md -->
```

### Disabling Inline Suggestions

If suggestions are distracting:

<details>
<summary>Visual / mouse users</summary>

**Temporarily (current language):**
- Click the Copilot icon in the status bar (bottom-right `><` icon)
- Select "Disable Completions for [language]"

**Permanently:**
- Open Settings: `Ctrl+,` (Mac: `Cmd+,`) → search "Copilot enable" → uncheck "Enable Inline Suggestions"

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

**Temporarily (current language):**
- `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → type "Copilot: Disable Completions" → press `Enter`
- Or navigate to the Copilot status bar item and activate it (depends on screen reader and focus)

**Permanently:**
- `Ctrl+,` (Mac: `Cmd+,`) → search "inline suggestions" → toggle off "GitHub Copilot: Enable Inline Completions"

</details>


## 4. GitHub Copilot Chat - Conversational Assistance

Copilot Chat is a full conversation interface where you ask questions, request explanations, and have content drafted.

### Opening Copilot Chat

**Primary panel:** `Ctrl+Shift+I` (Mac: `Cmd+Shift+I`)

Opens the Chat panel on the right side of VS Code.

**Inline chat (in-file):** `Ctrl+I` (Mac: `Cmd+I`)

Opens a chat prompt directly in the editor, anchored to your cursor. Results appear inline. Best for file-specific edits.

**Quick Chat (floating):** `Ctrl+Shift+Alt+I` (Windows) / `Cmd+Shift+Ctrl+I` (macOS)

Opens a floating chat dialog that doesn't take up sidebar space.

### Chat Modes

Copilot Chat has four modes, selected from a dropdown at the bottom of the Chat input area. Each mode changes how Copilot interprets your request and what it can do.

| Mode | How It Works | Best For |
|------|-------------|----------|
| **Ask** (default) | Conversational Q&A - Copilot explains, suggests, and answers but does not edit files directly | Questions, explanations, understanding unfamiliar code, reviewing content |
| **Edit** | You define a "working set" of files; Copilot proposes edits and shows a diff you approve or reject - nothing changes without your confirmation | Targeted, multi-file changes where you want full control |
| **Agent** | Copilot works autonomously - it decides which files to open, reads and writes code, and runs terminal commands to complete the task | Larger tasks where you want Copilot to drive end-to-end |
| **Plan** | Copilot produces a step-by-step implementation plan before writing any code; you review and approve the plan first | Complex features where you want to validate the approach before any changes are made |

**Switching modes:**
- The mode selector is a dropdown at the **bottom of the Chat input area**, just above the text field
- Tab through the toolbar at the bottom of Chat to find it, or click on the current mode name
- Screen reader users: the mode name is announced when you focus that control; press `Space` or `Enter` to open the dropdown, then `Arrow` keys to choose

**Recommended mode for beginners:** Start with **Ask** to learn how Copilot responds to your questions, then explore **Edit** mode for making changes with full visibility into what Copilot touches. **Agent** mode is powerful but works best once you're comfortable reviewing its output.

> **Note:** **Plan** mode was introduced in October 2025 (VS Code 1.106) and is available as a public preview. Plan mode lets you get an AI-generated implementation plan before any code is written - useful for understanding what a complex change will involve.

### Choosing a Model

Copilot gives you access to AI models from OpenAI, Anthropic (Claude), Google (Gemini), xAI (Grok), and others. The **model picker** is a button at the bottom of the Chat input area, next to the mode selector, showing the current model name (e.g., "Auto" or "Claude Sonnet 4.6").

**When "Auto" is selected** (the default), Copilot automatically chooses the best model for each request - lighter models for quick questions, more capable models for complex reasoning. Auto mode has been generally available since December 2025. You can override it whenever you want a specific model.

**Quick guidance:**
- **Free-tier users:** GPT-4.1 and GPT-5 mini are available at no cost and handle most everyday tasks well
- **Need deep reasoning/debugging?** Try Claude Sonnet 4.6 or GPT-5.2 (1× premium requests)
- **Running Agent mode?** GPT-5.1-Codex-Max or GPT-5.2-Codex are optimized for autonomous tasks
- **High cost to avoid unless needed:** Claude Opus 4.6 (3× cost) - powerful but reserve for the most demanding work

For the complete model comparison, strengths, weaknesses, and plan availability, see [Appendix X: GitHub Copilot AI Models Reference](appendix-x-copilot-models.md).

### Chat Interface Structure

**Panel layout (top to bottom):**

1. **Chat input field** (multi-line text area)
   - Type your prompt here
   - Press `Ctrl+Enter` (Mac: `Cmd+Enter`) or `Enter` to send

2. **Model selector dropdown**
   - Choose which AI model to use (GPT-4, Claude, etc.)
   - Some models better for code, others for prose

3. **Conversation history**
   - Shows your previous prompts and Copilot's responses
   - Navigate with `Up/Down Arrow`
   - Each message is a separate element

4. **Action buttons**
   - "Clear Chat" - start a new conversation
   - "View in Editor" - open response in a new file

### Screen Reader Navigation in Chat

**NVDA/JAWS:**
- Chat input is a web-based text field
- Switch to Forms Mode (`Enter` or automatic when focused)
- Type your prompt
- Press `Ctrl+Enter` to send
- Response appears in a live region (announced as it streams in)
- For complete reading: press `Alt+F2` for Accessible View

**VoiceOver:**
- `VO+Tab` to navigate to chat input
- `VO+Shift+Down` to interact
- Type prompt, `Return` to send
- `VO+Escape` to stop interacting
- Navigate down to response area
- For complete reading: `Alt+F2` for Accessible View

### What to Ask Copilot Chat

**For this workshop (non-coding examples):**

| Goal | Example Prompt |
|------|----------------|
| Understand a file | `Explain what @05-vscode-accessibility.md covers in plain language` |
| Improve documentation | `This section is unclear. Rewrite it for a first-time contributor using a screen reader: [paste text]` |
| Check tone | `Review this PR description for tone. Is it clear, respectful, and helpful? Suggest improvements.` |
| Draft content | `Write a section on keyboard navigation in VS Code for screen reader users` |
| Explain an error | `I got this error when trying to commit: [paste error]. What does it mean and how do I fix it?` |
| Generate alt text | `Write alt text for this image: [describe what's in the image]` |
| Create checklist | `Create an accessibility review checklist for Markdown documentation` |
| Review for accessibility | `Check this Markdown for accessibility issues: [paste content]` |

### Using @ Mentions in Chat

**@ symbols let you provide context to Copilot:**

| Mention | What It Does |
|---------|-------------|
| `@workspace` | Searches your entire workspace for context |
| `@filename.md` | References a specific file |
| `#file` | Lists files to select from |
| `#selection` | References your currently selected text |
| `#terminalLastCommand` | References the last terminal command and output |

**Example prompts with context:**

```
Explain what @README.md covers for a new contributor

Review #selection for accessibility issues

Search @workspace for all references to "screen reader mode"

What does this error mean? #terminalLastCommand
```

### Using Slash Commands

Type `/` in Copilot Chat to see available commands:

| Command | What It Does |
|---------|-------------|
| `/explain` | Explains selected code or text |
| `/fix` | Suggests fixes for problems in selected code |
| `/tests` | Generates tests (for code files) |
| `/help` | Shows all available commands |
| `/clear` | Clears chat history |
| `/savePrompt` | Saves the current chat conversation as a reusable `.prompt.md` file |

**Example:**
1. Select a block of complex Markdown
2. Open Chat: `Ctrl+Shift+I` (Mac: `Cmd+Shift+I`)
3. Type `/explain`
4. Copilot explains the structure and purpose


## 5. Effective Prompting for Documentation Work

Copilot works best with clear, specific prompts. The more context you provide, the better the response.

### Anatomy of a Good Prompt

**Bad prompt:**
```
Write about accessibility
```

**Good prompt:**
```
Write a 3-paragraph section explaining how screen reader users can navigate the VS Code Explorer sidebar. Include keyboard shortcuts for NVDA and JAWS. Assume the reader has never used VS Code before. Use clear headings and bullet points.
```

**What makes it good:**
1. **Specific scope:** "3-paragraph section"
2. **Clear topic:** "navigate the VS Code Explorer sidebar"
3. **Target audience:** "screen reader users" who "never used VS Code"
4. **Required details:** "keyboard shortcuts for NVDA and JAWS"
5. **Format guidance:** "headings and bullet points"

### Prompting Patterns for This Workshop

**Pattern 1: Contextual Rewrite**

```
This section is too technical for beginners. Rewrite it in plain language:

[paste existing text]

Target audience: Screen reader users trying VS Code for the first time
```

**Pattern 2: Generate with Constraints**

```
Write a step-by-step guide for creating a GitHub issue using only keyboard navigation. Include:
- NVDA screen reader announcements
- Exact keyboard shortcuts
- What to do if the form field is not announced correctly
Format as a numbered list
```

**Pattern 3: Review and Improve**

```
Review this PR description for:
1. Clarity for maintainers
2. Respect and positive tone
3. Whether it links to the related issue
4. If it explains WHY the change matters

Here's the description:
[paste your PR description]
```

**Pattern 4: Accessibility Audit**

```
Check this Markdown for accessibility problems:
- Heading hierarchy (H1 → H2 → H3, no skips)
- Link text (no "click here" or bare URLs)
- Alt text for images
- List structure

[paste Markdown content]
```

**Pattern 5: Draft from Outline**

```
Write a section based on this outline:

## Timeline View - File History
- What Timeline shows
- How to open it (keyboard)
- How screen readers announce each commit
- How to view a specific commit's changes

Write for screen reader users. Use H3 subheadings. Include a table for keyboard shortcuts.
```

### Iterating on Responses

Copilot's first response is a draft. Refine it:

**Follow-up prompts:**

```
Make it shorter - reduce to 5 bullet points

Add more detail about what NVDA announces at each step

Rewrite this in a more friendly tone

Add a "Common Mistakes" section at the end

Format this as a table instead of a bulleted list
```

Copilot remembers the conversation context - just say what to change.


## 6. Custom Instructions vs Custom Agents

Two distinct tools shape how Copilot behaves. Understanding the difference is critical for working with Accessibility Agents (see [Chapter 16: Accessibility Agents](16-accessibility-agents.md)).

### Custom Instructions

**File:** `.github/copilot-instructions.md`

**Purpose:** Always-on background guidance for every Copilot interaction.

**What they do:**
- Apply to all code suggestions automatically
- Set project-wide standards
- Influence tone and style
- Provide context about your project's conventions

**Example `.github/copilot-instructions.md`:**

```markdown
# Copilot Instructions for accessibility-agents

## Accessibility Standards
- Include semantic HTML elements in generated markup
- Add ARIA labels to interactive components when no visible text is present
- Ensure keyboard navigation patterns are implemented for custom widgets

## Documentation Style
- Write for screen reader users first
- Include keyboard shortcuts for NVDA, JAWS, and VoiceOver
- Use active voice and imperative mood ("Press Ctrl+G" not "You can press Ctrl+G")
- Structure content with clear headings (H2 for sections, H3 for subsections)

## Commit Message Format
- Follow conventional commits: `type: description`
- Types: feat, fix, docs, style, refactor, test, chore
- Reference issues: "Fixes #123"

## Tone
- Friendly but professional
- Direct and actionable
- Assume readers are competent but may be new to this specific tool
```

**When active:** Every time Copilot generates a suggestion (inline or in Chat)

**You never have to ask for these - Copilot simply follows them.**

### Custom Agents

**Files:** `.github/agents/[name].agent.md`

**Purpose:** On-demand, focused workflows that you deliberately invoke.

**What they do:**
- Perform specific, repeatable tasks
- Can access specific tools (GitHub API, file system, terminal)
- Generate structured output (reports, reviews, analysis)
- Execute multi-step workflows

**Example agent names:**
- `@daily-briefing` - Summarize repository activity
- `@issue-tracker` - Find and prioritize issues
- `@pr-review` - Generate PR review documentation
- `@analytics` - Team contribution metrics
- `@insiders-a11y-tracker` - Monitor accessibility changes

**When active:** Only when you type `@agent-name` in Copilot Chat

See [Chapter 16: Accessibility Agents](16-accessibility-agents.md) for complete agent documentation.

### Comparison Table

| Feature | Custom Instructions | Custom Agent |
|---|---|---|
| **When active** | Background - every interaction | On-demand - you type `@agent-name` |
| **Defined in** | `.github/copilot-instructions.md` | `.github/agents/[name].agent.md` |
| **Tool access** | Standard Copilot tools | Can restrict or grant specific permissions |
| **Best for** | Broad coding standards and preferences | Focused, repeatable, specialized tasks |
| **Requires invocation** | No - always on | Yes - explicit trigger |

### Using Both Together

**Custom instructions** ensure Copilot follows your accessibility standards on every suggestion.

**Custom agents** handle specific workflows like auditing, issue tracking, or automated remediation.

**Example workflow:**
1. Your `.github/copilot-instructions.md` says: "Always check heading hierarchy in Markdown"
2. You invoke `@insiders-a11y-tracker` to scan recent changes
3. The agent finds a heading skip (H1 → H3)
4. You ask Copilot Chat to fix it: "Fix the heading hierarchy in this file"
5. Copilot's fix follows your custom instructions (uses semantic HTML, adds ARIA where needed)

**Both work together - instructions guide every response, agents automate specific workflows.**


### Writing Accessibility-Focused Custom Instructions

> Source: [accessibility.github.com/documentation/guide/copilot-instructions/](https://accessibility.github.com/documentation/guide/copilot-instructions/)

Custom instructions can be set at three levels. Each level cascades to narrower scopes:

| Level | Where | Effect |
|-------|-------|--------|
| **Organization** | Copilot organization settings | Applies to all repositories in the org |
| **Repository** | `.github/copilot-instructions.md` | Overrides org instructions; applies to one repo |
| **Personal** | GitHub.com → Settings → Copilot → Instructions | Your own preferences; highest priority |

#### Do's - What Makes Instructions Effective

**Use normative language: MUST, MUST NOT, SHOULD, SHOULD NOT**

Most language models respond well to normative language. These terms reduce ambiguity and make rules clearly mandatory versus optional - the same approach WCAG itself uses:

```
## Keyboard Navigation
- Keyboard shortcuts SHOULD NOT override high-priority browser or OS shortcuts.
- A keyboard shortcut MUST use at most 4 simultaneous keys.
- All interactive components MUST be reachable by Tab key.
```

**Focus on team-specific standards, not generic principles**

Copilot already knows WCAG. Tell it what *your team* does specifically:

```
This application MUST conform to WCAG 2.2 Level AA.
DeprecatedButton SHOULD NOT be used; use NewAccessibleButton instead.
```

**Use lists and checklists to structure instructions**

Lists provide clear guardrails - Copilot follows them step by step:

```text
## Checklist for evaluating 1.3.1 Info and Relationships
- [ ] role="presentation" MUST NOT be applied to semantic elements.
- [ ] Error messages MUST be programmatically associated with inputs.
- [ ] Name-value pairs MUST NOT use headings; use <p>.
```

**Reference and enforce your design system**

Document which components to use and which are deprecated. Design systems evolve - keep instructions current:

```
Use AccessibleModal from @company/ui-kit@3.x.
LegacyDialog MUST NOT be used in any new code.
```

#### Don'ts - Common Instruction Mistakes

**Don't paste entire WCAG guidelines**

Copilot is already trained on WCAG. Pasting the full text wastes context space and dilutes your specific instructions. Instead, write concise, actionable rules that give *net-new* information: your team's specific practices, exceptions, and priorities.

**Don't reference external links**

By default, Copilot does not access external links in custom instructions - this is a deliberate security feature. A URL like `https://www.w3.org/WAI/WCAG21/` will not be fetched. Write the relevant rule directly.

**Don't reference private repositories**

Copilot cannot access private repository content from within custom instructions unless the content is already present in the active repo.

#### Additional Guidance

**Role-based prompting** - You can give Copilot a persona to shape how it responds:

```
As the lead accessibility expert on your team, your primary focus is ensuring
all UI is accessible by default, relying on semantic HTML before ARIA attributes.
```

Be specific about skills and responsibilities; avoid broad personas that may introduce unintended assumptions.

**Keep instructions concise.** There is no hard character limit, but overly long instructions reduce precision. Summarize the most important, actionable rules rather than listing every possible guideline.

**Contribute effective instructions** to [github.com/github/awesome-copilot](https://github.com/github/awesome-copilot) so others benefit from your organization's work.


## 7. Using Accessible View with Copilot Responses

Copilot Chat responses stream in token by token. This is visually nice but can fragment screen reader announcements. **Accessible View** provides complete, structured access to generated content.

### Why Use Accessible View for Copilot

**Without Accessible View:**
- Responses announced in fragments as tokens arrive
- Live region updates may interrupt or overlap
- Difficult to re-read specific parts
- Context can be lost in streaming

**With Accessible View (`Alt+F2` / Mac: `Option+F2`):**
- Full complete response in a readable pane
- Navigate with `Up/Down Arrow` at your own pace
- Code blocks properly formatted
- Headings and lists structured
- No interruptions or live region noise

### Recommended Workflow

**Every time you ask Copilot something:**

1. Type your prompt in Chat input
2. Press `Ctrl+Enter` (Mac: `Cmd+Enter`) to send
3. Press `Alt+F2` (Mac: `Option+F2`) to open Accessible View - you can open it immediately after sending, before the response finishes
4. Follow along as the response streams in the Accessible View in real-time
5. Read or re-read any section with `Arrow` keys
6. Press `Escape` to close Accessible View and return to Chat

> **VS Code December 2025 update:** The Accessible View now updates dynamically as responses stream in. You no longer need to wait for a response to finish before opening it - open `Alt+F2` right after sending and follow the response as it arrives.

**Benefits:**
- Follow responses live without waiting
- Navigate and re-read at your own pace
- Code blocks and lists are properly structured
- Headings are announced correctly

### Accessible View for Inline Suggestions

**When a suggestion appears:**

1. Don't accept it immediately
2. Press `Alt+F2` (Mac: `Option+F2`)
3. Accessible View shows: "Suggestion: [full text of the suggestion]"
4. Read it completely
5. To insert the suggestion at your cursor: press `Ctrl+/` (Mac: `Cmd+/`)
6. To close without inserting: press `Escape`, then `Tab` to accept or `Escape` to reject

**`Ctrl+/` (Mac: `Cmd+/`) inserts the suggestion directly from Accessible View** - you don’t need to close the view first and then press `Tab`. This is the recommended workflow for screen reader users.

**This is especially useful for multi-line suggestions where the ghost text is hard to review.**

### Code Blocks in Accessible View

When Copilot suggests code or Markdown:

**In Accessible View:**
- Code blocks are in `<pre>` elements
- Screen readers announce "code block" or "pre-formatted text"
- Each line is on its own line (not run together)
- Indentation is preserved

**NVDA/JAWS:** Use `Arrow` keys to read line by line. Use `Ctrl+Home` to jump to the start.

**VoiceOver:** Interact with the code block (`VO+Shift+Down`) to read each line with proper structure.


## 8. Keyboard Shortcuts Reference

### Copilot Inline Suggestions

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Accept suggestion | `Tab` | `Tab` |
| Reject suggestion | `Escape` | `Escape` |
| Accept word-by-word | `Ctrl+Right Arrow` | `Cmd+Right Arrow` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |
| Open suggestions list | `Ctrl+Enter` | `Cmd+Enter` |
| Open suggestion in Accessible View | `Alt+F2` | `Option+F2` |
| Insert suggestion from Accessible View | `Ctrl+/` | `Cmd+/` |

### Copilot Chat

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Open Chat panel | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| Inline chat (in-file) | `Ctrl+I` | `Cmd+I` |
| Quick chat (floating) | `Ctrl+Shift+Alt+I` | `Cmd+Shift+Ctrl+I` |
| Send message | `Ctrl+Enter` | `Cmd+Enter` |
| Clear chat | `Ctrl+L` | `Cmd+L` |

### Accessibility

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Open Accessible View | `Alt+F2` | `Option+F2` |
| Open Accessible Help | `Alt+H` | `Option+H` |
| Close Accessible View | `Escape` | `Escape` |

### VS Code General (Quick Reference)

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Go to file | `Ctrl+P` | `Cmd+P` |
| Find in file | `Ctrl+F` | `Cmd+F` |
| Settings | `Ctrl+,` | `Cmd+,` |
| Source Control | `Ctrl+Shift+G` | `Cmd+Shift+G` |
| Explorer | `Ctrl+Shift+E` | `Cmd+Shift+E` |
| Terminal | `Ctrl+Backtick` | `Ctrl+Backtick` |

**Complete keyboard reference:** See [Appendix M: VS Code Accessibility Reference](appendix-m-vscode-accessibility-reference.md)


## Troubleshooting

### Copilot Not Suggesting Anything

**Issue:** No suggestions appear as you type.

**Solutions:**
1. Check Copilot is active: status bar icon should not be grayed out
2. Click the Copilot icon → verify "Completions enabled"
3. Check subscription status: `Ctrl+Shift+P` → "Copilot: Check Status"
4. Restart VS Code
5. Sign out and sign back in: `Ctrl+Shift+P` → "Copilot: Sign Out"

### Suggestions Are Too Frequent/Distracting

**Issue:** Constant interruptions from suggestions.

**Solutions:**
1. Use word-by-word acceptance: `Ctrl+Right Arrow`
2. Reduce screen reader verbosity (see Section 3)
3. Use Accessible View (`Alt+F2`) to review suggestions without live announcements
4. Disable inline suggestions temporarily: Copilot icon → "Disable Completions"

### Chat Responses Not Announced

**Issue:** Screen reader silent when Copilot responds.

**Solutions:**
1. Wait for response to complete, then press `Alt+F2` for Accessible View
2. Check ARIA live region settings in your screen reader
3. Navigate manually to the response area with `Tab` or `Arrow` keys
4. Use Quick Chat (`Ctrl+Shift+Alt+I`) instead of panel chat

### "Copilot Subscription Required"

**Issue:** Extension installed but asks for subscription.

**Solutions:**
1. Sign in to GitHub: Copilot icon → "Sign in"
2. Verify GitHub account has Copilot access (free tier or paid)
3. Check [github.com/settings/copilot](https://github.com/settings/copilot) for subscription status
4. Free tier users: ensure you haven't exceeded monthly limits


## Try It: Your First Copilot Conversation

**Time:** 3 minutes | **What you need:** VS Code with Copilot Chat extension installed

1. **Open Copilot Chat** - Press `Ctrl+Shift+I` (Mac: `Cmd+Shift+I`). Your screen reader announces the chat panel.
2. **Ask a question** - Type: `What does the CONTRIBUTING.md file in this repository say about how to submit a pull request?` Press `Enter`.
3. **Read the response** - Press `Ctrl+Shift+A` to open the Accessible View if your screen reader doesn't read the response automatically. The response appears as plain text you can arrow through.
4. **Try a follow-up** - Type: `Summarize that in 3 bullet points` and press `Enter`. Copilot remembers the context from your first question.

**You're done.** You just had a conversation with an AI about your codebase.

> **What success feels like:** Copilot answered a real question about real files in your repository. You can use this same pattern to ask about code, documentation, or anything else in the project - and the Accessible View ensures you can always read the response.


*Next: [Accessible Code Review](14-accessible-code-review.md)*
*Back: [GitHub Pull Requests Extension](12-github-pull-requests-extension.md)*
*Related: [VS Code Setup & Accessibility Basics](05-vscode-accessibility.md) | [Appendix M: VS Code Accessibility Reference](appendix-m-vscode-accessibility-reference.md) | [Appendix W: GitHub Copilot Reference](appendix-w-github-copilot-reference.md) | [Appendix X: AI Models Reference](appendix-x-copilot-models.md)*



### Supplementary: Copilot Reference - features, participants, commands

# Appendix W: GitHub Copilot & Agentic Reference
> **Listen to Episode 40:** [GitHub Copilot - Complete Reference](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Keyboard Shortcuts, Chat, Screen Reader Workflow, Plugin Ecosystem, and GitHub Agentic Workflows

> Quick-reference card for GitHub Copilot in VS Code and the broader agentic ecosystem - plugins, MCP servers, and cloud-based automation. For the Copilot lesson, see [Chapter 13: GitHub Copilot](13-github-copilot.md). For Accessibility Agents specifically, see [Appendix V: Accessibility Agents Reference](appendix-v-accessibility-agents-reference.md).


## Table of Contents

1. [Keyboard Shortcuts](#1-keyboard-shortcuts)
2. [Chat Participants](#2-chat-participants)
3. [Chat Slash Commands](#3-chat-slash-commands)
4. [Chat Modes](#4-chat-modes)
5. [Custom Instructions - All Levels](#5-custom-instructions--all-levels)
6. [Accessible View Workflow](#6-accessible-view-workflow)
7. [Configuration Scope Reference](#7-configuration-scope-reference)
8. [Instruction Priority and Conflicts](#8-instruction-priority-and-conflicts)
9. [All File Types Quick Reference](#9-all-file-types-quick-reference)
10. [VS Code Settings Reference](#10-vs-code-settings-reference)
11. [Diagnostics and Troubleshooting](#11-diagnostics-and-troubleshooting)
12. [Screen Reader Workflow - Official Guide](#12-screen-reader-workflow--official-guide)
13. [awesome-copilot - Plugin Ecosystem](#13-awesome-copilot--plugin-ecosystem)
14. [GitHub Agentic Workflows - Agents in the Cloud](#14-github-agentic-workflows--agents-in-the-cloud)


## 1. Keyboard Shortcuts

### Inline Suggestions (Ghost Text)

| Action | Windows / Linux | macOS |
|--------|----------------|-------|
| Accept entire suggestion | `Tab` | `Tab` |
| Reject suggestion | `Escape` | `Escape` |
| Accept one word at a time | `Ctrl+Right Arrow` | `Cmd+Right Arrow` |
| Show next alternative suggestion | `Alt+]` | `Option+]` |
| Show previous alternative suggestion | `Alt+[` | `Option+[` |
| Open full suggestion list | `Ctrl+Enter` | `Cmd+Enter` |
| Open suggestion in Accessible View | `Alt+F2` | `Option+F2` |
| Insert suggestion from Accessible View at cursor | `Ctrl+/` | `Cmd+/` |

**Word-by-word acceptance (`Ctrl+Right Arrow`) is recommended for screen reader users** - it lets you review the suggestion incrementally before committing to it.

**Accessible View workflow for screen reader users:** Press `Alt+F2` when a suggestion appears to hear the full text without streaming noise, then press `Ctrl+/` to insert it directly from the Accessible View without closing the panel first.

### Copilot Chat

| Action | Windows / Linux | macOS |
|--------|----------------|-------|
| Open Chat panel | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| Open inline chat (in-file, at cursor) | `Ctrl+I` | `Cmd+I` |
| Open Quick Chat (floating dialog) | `Ctrl+Shift+Alt+I` | `Cmd+Shift+Ctrl+I` |
| Send message | `Ctrl+Enter` | `Cmd+Enter` |
| Clear chat history | `Ctrl+L` | `Cmd+L` |

### Accessibility

| Action | Windows / Linux | macOS |
|--------|----------------|-------|
| Open Accessible View | `Alt+F2` | `Option+F2` |
| Open Accessible Help | `Alt+H` | `Option+H` |
| Close Accessible View | `Escape` | `Escape` |

**Use Accessible View (`Alt+F2`) every time Copilot responds.** It provides the complete response in a readable pane - no streaming, no live region noise, proper heading structure.


## 2. Chat Participants

Type these in the Copilot Chat input to give Copilot context from a specific source.

### `@` Participants - Scope Context

| Participant | What It Does |
|-------------|-------------|
| `@workspace` | Searches your entire VS Code workspace for relevant context |
| `@github` | Accesses GitHub.com data - search issues, PRs, code across the platform |
| `@terminal` | Provides context from the VS Code integrated terminal |

**Example prompts:**

```
@workspace find all places where heading hierarchy is documented

@github search community-access/accessibility-agents for issues labeled accessibility

@terminal what did the last command output mean?
```

### `#` Variables - Specific Context

| Variable | What It Attaches |
|----------|-----------------|
| `#file` | Opens a file picker - attach any file from your workspace |
| `#selection` | Attaches your currently selected text |
| `#codebase` | Searches the full codebase for relevant snippets |
| `#terminalLastCommand` | Attaches the last terminal command and its output |

**Example prompts:**

```
Review #selection for heading hierarchy violations

Explain what #file does (then pick a file from the picker)

What does this error mean? #terminalLastCommand

Search #codebase for all screen reader navigation instructions
```


## 3. Chat Slash Commands

Type `/` in Copilot Chat to see the available built-in commands.

| Command | What It Does | Example |
|---------|-------------|---------|
| `/explain` | Explains the selected code or text in plain language | Select a complex block → `/explain` |
| `/fix` | Suggests fixes for problems in the selected code | Select broken code → `/fix` |
| `/tests` | Generates unit tests for the selected function (code files) | Select a function → `/tests` |
| `/doc` | Generates documentation (JSDoc, docstring) for parsed code | Select a function → `/doc` |
| `/new` | Scaffolds a new file or project structure | `/new React component for notifications` |
| `/help` | Shows all available Copilot commands and participants | `/help` |
| `/clear` | Clears the current chat history | `/clear` |

**Workspace management slash commands:**

| Command | What It Does | Example |
|---------|-------------|--------|
| `/init` | Analyzes your workspace and auto-generates a `.github/copilot-instructions.md` tailored to your project | `/init` |
| `/savePrompt` | Saves the current chat conversation as a reusable `.prompt.md` slash command file | After a useful exchange, type `/savePrompt` |

**Note:** These are Copilot's built-in chat slash commands. Accessibility Agents adds 28 additional workspace-level slash commands from `.github/prompts/` - see [Appendix V](appendix-v-accessibility-agents-reference.md) for the full list.

### Using Slash Commands for Documentation Work

```
Select a section of Markdown → /explain
→ Copilot explains the purpose and structure of that section

Select a complex code example → /explain
→ Copilot explains what the code does in plain language

Select a broken YAML template → /fix
→ Copilot suggests what is wrong and how to correct it
```


## 4. Chat Modes

Copilot Chat has four modes. Select the current mode from the dropdown at the bottom of the Chat input area.

| Mode | What It Does | Best For |
|------|-------------|----------|
| **Ask** | Conversational Q&A. Copilot explains, suggests, and answers but does not directly edit files. | Questions, explanations, discussion, exploring ideas |
| **Edit** | You define a working set of files; Copilot proposes edits as a diff that you approve or reject. | Targeted, controlled multi-file edits |
| **Agent** | Copilot works autonomously - it decides which files to touch, reads/writes code, runs terminal commands. | Larger end-to-end tasks |
| **Plan** | Copilot writes an implementation plan first; no code is written until you approve the plan. (Public preview) | Complex features where you want to validate the approach first |

**Screen reader note:** The mode selector is in the Chat panel toolbar at the bottom. Tab through the bottom of the Chat view to find it. The current mode name is its accessible label. Press `Space` or `Enter` to open the dropdown.

**Model selection** is a separate control, also at the bottom of the Chat input. See [Appendix X: AI Models Reference](appendix-x-copilot-models.md) for a complete guide to choosing models.


## 5. Custom Instructions - All Levels

GitHub Copilot supports multiple ways to provide custom instructions. They differ by scope, priority, trigger mechanism, and which tools recognize them. This section documents every supported approach.


### 4A. Always-On Instructions - `.github/copilot-instructions.md`

**What it is:** The primary VS Code Copilot instruction file. Content is automatically included in every chat request and inline suggestion context - you never need to invoke it.

**When to use:** Project-wide conventions everyone on the team should follow: coding standards, documentation style, commit message format, tone, accessibility requirements.

**Location:** `.github/copilot-instructions.md` (fixed path; workspace-level only)

**Format:** Plain Markdown - no frontmatter, no special syntax required.

```markdown
# Copilot Instructions for accessibility-agents

## Accessibility Standards
- Include semantic HTML elements in generated markup
- Never use color as the only indicator of meaning
- Ensure all interactive elements are keyboard accessible

## Documentation Style
- Write for screen reader users first
- Use active voice and imperative mood
- Never skip heading levels (H1 → H2 → H3 only)

## Commit Message Format
- Conventional commits: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Reference issues: "Fixes #123"

## Code Quality
- Prefer explicit over implicit
- Write self-documenting code; add comments only where logic is non-obvious
- Error handling must be intentional - no silent catch blocks
```

**Auto-generate with `/init`:**
1. Open Copilot Chat
2. Type `/init`
3. VS Code analyzes your workspace and generates a tailored `copilot-instructions.md`
4. Review and edit the result before committing


### 4B. Always-On Instructions - `AGENTS.md` (Multi-Tool / Monorepo)

**What it is:** An open standard instruction file recognized by multiple AI tools - GitHub Copilot, Claude Code, Gemini CLI, and others. Use this instead of `copilot-instructions.md` when you want one instruction file that works across all AI coding assistants.

**When to use:** Multi-tool teams, or when you want monorepo-level granularity where different subdirectories have different rules.

**Location:** `AGENTS.md` at the workspace root. For monorepos, also supported nested in subdirectories (closest file to the current directory wins).

```
repo-root/
  AGENTS.md               ← applies everywhere
  frontend/
    AGENTS.md             ← overrides root for frontend/ and below
  backend/
    AGENTS.md             ← overrides root for backend/ and below
```

**Enable nested files:** In VS Code settings, set `chat.useNestedAgentsMdFiles: true`.

**Enable/disable AGENTS.md:** Set `chat.useAgentsMdFile: true` (default: on).

**Format:** Identical to `copilot-instructions.md` - plain Markdown, no frontmatter.

**Rule:** Choose either `copilot-instructions.md` OR `AGENTS.md` for your project - not both.


### 4C. Always-On Instructions - `CLAUDE.md` (Cross-Tool Compatibility)

**What it is:** Instructions file originally from Claude Code that VS Code Copilot also recognizes. Useful when your team uses both.

**When to use:** Mixed AI tool environments where Claude Code and VS Code Copilot are both used. Uses the same format as the other always-on files.

**Supported locations:**

| File | Scope | Committed? |
|------|-------|-----------|
| `CLAUDE.md` (workspace root) | All requests in workspace | Yes |
| `.claude/CLAUDE.md` | All requests in workspace | Yes |
| `CLAUDE.local.md` (workspace root) | All requests; local only | No - gitignored |
| `~/.claude/CLAUDE.md` | All workspaces; user-level | Personal |

**Enable/disable:** Set `chat.useClaudeMdFile: true` (default: on).

**Claude Rules format** (for `.claude/rules/` and `~/.claude/rules/`):

Use `.instructions.md` files under `.claude/rules/` using `paths:` instead of `applyTo:` for glob matching:

```markdown
description: "Python coding standards"
paths: ["**/*.py"]

Follow PEP 8. Use type hints on all function signatures.
Write docstrings for all public functions and classes.
```


### 4D. Conditional / Scoped Instructions - `.instructions.md`

**What it is:** Instructions that apply only when specific file types or folders are involved in the chat. More targeted than always-on instructions.

**When to use:** Language-specific rules (Python style, TypeScript patterns), framework conventions, folder-specific standards (docs/, tests/, src/api/).

**Locations:**

| Scope | Location |
|-------|----------|
| Workspace | `.github/instructions/*.instructions.md` |
| Additional workspace folders | Configure with `chat.instructionsFilesLocations` |
| User / Personal | VS Code profile folder `*.instructions.md` |

**Frontmatter:**

```yaml
name: "Display Name"          # Optional - shown in UI and diagnostics; defaults to filename
description: "Use when..."    # Optional - enables on-demand matching; make keyword-rich
applyTo: "**/*.py"            # Optional glob - auto-attach when matching files are in context
```

**`applyTo` glob patterns:**

```yaml
applyTo: "**"                            # Always included (careful - applies to everything)
applyTo: "**/*.py"                       # All Python files
applyTo: "**/*.{ts,tsx}"                 # TypeScript and TSX
applyTo: "docs/**"                       # Everything under docs/
applyTo: ["src/**", "lib/**"]            # Multiple patterns - OR logic
applyTo: "**/*.test.{js,ts}"            # Test files only
applyTo: ".github/ISSUE_TEMPLATE/**"    # Issue template files only
```

**How files are triggered:**

| Discovery Mode | How It Works |
|---------------|-------------|
| **Automatic** (via `applyTo`) | Instruction loads automatically when a matching file is in the chat context |
| **On-demand** (via `description`) | Agent detects from the description that this instruction is relevant to the task |
| **Manual** | User selects "Add Context → Instructions" in the Chat panel |

**Example - test file conventions:**

```markdown
name: "Test File Standards"
description: "Use when writing, generating, or reviewing test files. Covers test structure, naming, and coverage expectations."
applyTo: "**/*.test.{js,ts}"

# Test Standards

- Use `describe`/`it` structure (not `test()` directly)
- Test names must describe behavior: "returns null when input is empty" not "test case 1"
- Each `it` tests exactly one behavior
- Include at least one edge case and one error case per function
- Avoid snapshot tests for logic; use explicit assertions
- Mock external dependencies; do not test third-party libraries
```

**Create an instructions file:**
- `Ctrl+Shift+P` → "Chat: New Instructions File" → choose scope (Workspace or User)
- Or create the file manually in `.github/instructions/`


### 4E. Organization-Level Instructions (GitHub Enterprise and Teams)

**What it is:** Organization administrators define custom instructions that apply to all repositories in the organization. Every team member automatically gets these instructions added to their Copilot context.

**Priority:** Lowest - workspace and user instructions both override these. However, they are additive - they are appended to, not replacing, other instructions.

**Requirements:**
- GitHub Enterprise or Teams plan with Copilot enabled
- Admin configures instructions in organization settings on GitHub.com
- Each user must enable discovery in VS Code:

```json
// User settings.json
{
  "github.copilot.chat.organizationInstructions.enabled": true
}
```

**Use for:** Organization-wide coding standards, security policies, legal disclaimers (open source license obligations), toolchain conventions.


### 4F. Settings-Based Instructions (Deprecated - Use Files Instead)

> **Note:** These settings-based instructions are deprecated and may be removed in a future VS Code release. For new work, use `copilot-instructions.md` or `.instructions.md` files.

VS Code settings can inject instructions for specific task types:

```json
// settings.json (workspace .vscode/settings.json or user settings)
{
  "github.copilot.chat.codeGeneration.instructions": [
    { "text": "Always add JSDoc comments to exported functions." },
    { "file": ".github/instructions/code-style.instructions.md" }
  ],
  "github.copilot.chat.testGeneration.instructions": [
    { "text": "Use describe/it structure. Include edge cases." }
  ],
  "github.copilot.chat.reviewSelection.instructions": [
    { "text": "Check for WCAG 2.2 Level AA compliance in HTML markup." }
  ],
  "github.copilot.chat.commitMessageGeneration.instructions": [
    { "text": "Use conventional commits: type(scope): description" }
  ]
}
```

Each setting accepts an array of `{ text: "..." }` (inline) or `{ file: "relative/path.md" }` (from file).


### 4G. Comparison - When to Use Each Approach

| Approach | Scope | Always-on? | Multi-tool? | Best For |
|----------|-------|------------|-------------|---------|
| `copilot-instructions.md` | Workspace | Yes | VS Code only | Primary project instructions |
| `AGENTS.md` | Workspace + monorepo | Yes | All AI tools | Multi-tool teams or large monorepos |
| `CLAUDE.md` | Workspace + user | Yes | Copilot + Claude | Claude Code compatibility |
| `.instructions.md` | Workspace or user | Conditional | VS Code only | Scoped rules for file types |
| Organization setting | All repos in org | Yes | GitHub Copilot | Org-wide policy |
| Settings-based | Workspace or user | Per-task | VS Code only | Deprecated - avoid for new work |


## 6. Accessible View Workflow

Copilot Chat responses stream in token by token, which can fragment screen reader announcements. **Accessible View** (`Alt+F2`) gives you a complete, static, properly structured version of the response.

### Recommended Workflow - Every Copilot Interaction

```
1. Open Copilot Chat: Ctrl+Shift+I
2. Type your prompt
3. Press Ctrl+Enter to send
4. Press Alt+F2 to open Accessible View (open immediately - no need to wait)
5. Follow as the response streams in the Accessible View in real-time
6. Read or re-read any part with Arrow keys at your own pace
7. Press Escape to close Accessible View
```

> **VS Code December 2025:** The Accessible View now streams dynamically. You can open it immediately after sending a prompt and follow the response as it arrives - no need to wait for the response to finish before pressing `Alt+F2`.

### Why Accessible View Is Better for Screen Reader Users

| Without Accessible View | With Accessible View (`Alt+F2`) |
|------------------------|--------------------------------|
| Responses announced in fragments as tokens arrive | Full, complete response in one readable pane |
| Live region updates may interrupt or overlap | No streaming, no live region noise |
| Difficult to re-read specific sections | Navigate with `Up/Down Arrow` at your own pace |
| Context can be lost in streaming | Full context preserved from start to finish |
| Code blocks may run together | Code blocks formatted as `<pre>` elements, line-by-line |

### Screen Reader Navigation in Accessible View

**NVDA / JAWS:**
- `Up/Down Arrow` - read line by line
- `Ctrl+Home` - jump to start
- `H` - navigate by headings (if response has sections)
- `Escape` - close Accessible View, return to Chat

**VoiceOver:**
- `VO+Shift+Down` - interact with the Accessible View content
- `Down Arrow` - read line by line
- `VO+Escape` - stop interacting
- `Escape` - close Accessible View

### Accessible View for Inline Suggestions

When a multi-line ghost text suggestion appears in the editor:

```
1. Do not accept immediately
2. Press Alt+F2
3. Accessible View shows: "Suggestion: [full text]"
4. Read the complete suggestion at your own pace
5. Press Escape to close
6. Press Tab to accept, or Escape to reject
```

This is especially important for multi-line suggestions where ghost text is hard to review incrementally.

### Accessible View for Code Blocks

- Code blocks appear inside `<pre>` elements in Accessible View
- Screen readers announce "code block" or "pre-formatted text" at the start
- Each line is on its own line (not run together)
- Indentation is preserved


## 7. Configuration Scope Reference

Every Copilot customization file lives at one of three scopes. VS Code **combines all** matching files from all scopes - it is additive, not winner-takes-all.

### Workspace (Repository) - Team-Shared

Files committed to your repository. Everyone who clones the repo gets them.

| File Type | Location |
|-----------|----------|
| Always-on instructions | `.github/copilot-instructions.md` |
| Always-on (multi-tool) | `AGENTS.md` (root), `<folder>/AGENTS.md` (nested) |
| Always-on (Claude compat) | `CLAUDE.md`, `.claude/CLAUDE.md` |
| Local only (not committed) | `CLAUDE.local.md`, `.claude/settings.local.json` |
| Scoped instructions | `.github/instructions/*.instructions.md` |
| Claude rules (scoped) | `.claude/rules/*.instructions.md` |
| Custom agents | `.github/agents/*.agent.md` |
| Prompts / slash commands | `.github/prompts/*.prompt.md` |
| Agent skills | `.github/skills/<name>/SKILL.md` |
| Hooks (team-shared) | `.github/hooks/*.json` |
| Claude hooks/settings | `.claude/settings.json` |
| Personal preferences | `.github/agents/preferences.md` (gitignored) |

### User / Personal - Follows You Across Workspaces

Files in your VS Code profile folder. Syncs with Settings Sync. Available in every workspace you open.

**Path on Windows:** `C:\Users\<you>\AppData\Roaming\Code - Insiders\User\prompts\`
**Path on macOS:** `~/Library/Application Support/Code - Insiders/User/prompts/`

| File Type | Location |
|-----------|----------|
| Instructions | `<profile>/prompts/*.instructions.md` |
| Agents | `<profile>/prompts/*.agent.md` |
| Prompts | `<profile>/prompts/*.prompt.md` |
| Claude instructions | `~/.claude/CLAUDE.md` |
| Claude rules | `~/.claude/rules/*.instructions.md` |
| Claude settings | `~/.claude/settings.json` |
| Agent skills | `~/.copilot/skills/<name>/`, `~/.agents/skills/<name>/`, `~/.claude/skills/<name>/` |

### Organization - GitHub-Configured (Enterprise/Teams)

Configured by administrators in GitHub organization settings. Automatically applied to all organization members.

- Enable discovery: `github.copilot.chat.organizationInstructions.enabled: true`
- Lowest priority - workspace and user instructions override when there is a conflict


## 8. Instruction Priority and Conflicts

When multiple instruction sources give conflicting guidance, VS Code uses this priority order:

```
1. Personal / User-level    - HIGHEST - overrides all others
2. Workspace / Repository   - middle priority
3. Organization-level       - LOWEST - overridden by workspace and user
```

**Important:** This priority applies to conflicts. All non-conflicting instructions from all scopes are combined and sent together. More instructions is not a problem - Copilot handles them additively.

### How Instructions Are Combined

Say you have:
- Organization: "Use British English spellings"
- Workspace: "Use TypeScript strict mode"
- User: "Use British English spellings - but use Z spellings (organize, not organise) for technical terms"

Result: Copilot follows TypeScript strict mode (from workspace), British English (from org), AND the Z-spelling override (from user, which overrides the org instruction on that specific point).

### Priority Within the Same Scope

Within a single scope (e.g., workspace), all matching instructions files are combined with no inherent priority. If two workspace-level `.instructions.md` files contradict each other, the behavior is undefined - avoid conflicting workspace instructions.


## 9. All File Types Quick Reference

| Purpose | File Name Pattern | Location | How It Activates |
|---------|------------------|----------|-----------------|
| Always-on instructions | `copilot-instructions.md` | `.github/` | Automatic - every request |
| Always-on (multi-tool) | `AGENTS.md` | Repo root or subfolders | Automatic - every request |
| Always-on (Claude compat) | `CLAUDE.md` | Repo root, `.claude/`, `~/.claude/` | Automatic - every request |
| Scoped instructions | `*.instructions.md` | `.github/instructions/`, profile folder | Auto (via `applyTo`) or on-demand |
| Claude scoped rules | `*.instructions.md` | `.claude/rules/`, `~/.claude/rules/` | Auto (via `paths:`) or on-demand |
| Custom agents | `*.agent.md` | `.github/agents/`, profile folder | `@agent-name` in Chat |
| Prompt / slash command | `*.prompt.md` | `.github/prompts/`, profile folder | `/command-name` in Chat |
| Agent skill | `SKILL.md` in named folder | `.github/skills/<name>/`, profile folder | `/skill-name` or auto on-demand |
| Lifecycle hook | `*.json` | `.github/hooks/`, `.claude/settings*.json` | Automatic at lifecycle events |
| Personal preferences | `preferences.md` | `.github/agents/` (gitignored) | Read by agents when mentioned |

**Create any new customization file:**
`Ctrl+Shift+P` → "Chat: New Instructions File" (or "New Prompt File", "New Agent File")


## 10. VS Code Settings Reference

All Copilot customization-related settings. Set in VS Code Settings (`Ctrl+,`) or `settings.json`.

### Core Instruction Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `chat.instructionsFilesLocations` | - | Array of additional folder paths to search for `*.instructions.md` files |
| `chat.useAgentsMdFile` | `true` | Enable/disable `AGENTS.md` recognition |
| `chat.useClaudeMdFile` | `true` | Enable/disable `CLAUDE.md`/`CLAUDE.local.md` recognition |
| `chat.useNestedAgentsMdFiles` | `false` | Enable subfolder `AGENTS.md` hierarchy for monorepos |
| `chat.includeApplyingInstructions` | `true` | Apply instructions files whose `applyTo` pattern matches current files |
| `chat.includeReferencedInstructions` | `true` | Apply instruction files referenced via Markdown links in chat |
| `chat.restoreLastPanelSession` | `true` | Restore the previous chat session when VS Code starts; set to `false` to always start with an empty Chat |
| `chat.useAgentSkills` | `false` | Enable Agent Skills (experimental) - allows `.github/skills/<name>/SKILL.md` bundles to be discovered and invoked |

### Organization Instructions

| Setting | Default | Description |
|---------|---------|-------------|
| `github.copilot.chat.organizationInstructions.enabled` | `false` | Enable discovery of organization-level custom instructions |

### Deprecated Task-Specific Instructions

> Prefer file-based instructions over these settings for new work.

| Setting | What It Augments |
|---------|-----------------|
| `github.copilot.chat.codeGeneration.instructions` | All code generation |
| `github.copilot.chat.testGeneration.instructions` | Test file generation |
| `github.copilot.chat.reviewSelection.instructions` | Code review via Chat |
| `github.copilot.chat.commitMessageGeneration.instructions` | Git commit messages |

Each accepts an array with items: `{ "text": "..." }` (inline) or `{ "file": "relative/path" }` (from file).

### Settings Sync

To sync your personal prompts, instructions, and agents across devices:

1. `Ctrl+Shift+P` → "Settings Sync: Turn On"
2. `Ctrl+Shift+P` → "Settings Sync: Configure"
3. Check **"Prompts and Instructions"**

Your personal `*.instructions.md`, `*.agent.md`, and `*.prompt.md` files will sync to all signed-in VS Code instances.


## 11. Diagnostics and Troubleshooting

### View All Loaded Customizations

To see which instruction files, agents, prompts, and skills are currently loaded - and check for errors:

1. **Configure Chat Gear:** Click the gear () icon in the Copilot Chat header → "Diagnostics"
2. **Right-click method:** Right-click in the Chat view → "Diagnostics"

The Diagnostics panel shows:
- All agents found and whether they loaded successfully
- All prompt/instruction files and their source (workspace vs user vs organization)
- All skills and their discovery status
- Any parse errors or invalid frontmatter

### Common Issues

**`copilot-instructions.md` not being followed:**
1. Confirm the file is at exactly `.github/copilot-instructions.md` (relative to workspace root)
2. Check the file is plain Markdown with no frontmatter syntax errors
3. Open Diagnostics to confirm it appears in the loaded files list
4. Some instructions work better with specific phrasing; use imperative mood ("Always use...")

**`.instructions.md` file not loading automatically:**
1. Verify `chat.includeApplyingInstructions` is not set to `false`
2. Check the `applyTo` glob - test with `"**"` temporarily to confirm the file loads at all
3. Confirm the file is in `.github/instructions/` or a folder listed in `chat.instructionsFilesLocations`
4. File extension must be `.instructions.md` exactly - not `.md`, not `.instruction.md`

**Custom agent (`@agent-name`) not appearing:**
1. File must be named `<agent-name>.agent.md` and placed in `.github/agents/`
2. Check YAML frontmatter for syntax errors - use a YAML validator
3. Confirm `user-invocable` is not set to `false` (which hides it from the picker)
4. Run `Ctrl+Shift+P` → "Reload Window" after any changes to agent files

**Slash command (`/command`) not appearing:**
1. File must be at `.github/prompts/<command-name>.prompt.md`
2. Extension must be `.prompt.md` exactly
3. Reload VS Code: `Ctrl+Shift+P` → "Reload Window"

**Instructions from different files conflicting:**
1. Open Diagnostics to see all loaded instruction files
2. Remove or edit conflicting instructions - they are not automatically de-duplicated
3. User-level instructions override workspace instructions for the same topic

**`chat.instructionsFilesLocations` not working:**
- Path must be a folder path, not a file path
- Use forward slashes or escaped backslashes
- Relative paths are relative to the workspace root


## Quick Reference Card

### Opening Copilot

| What | Windows / Linux | macOS |
|------|----------------|-------|
| Chat panel | `Ctrl+Shift+I` | `Cmd+Shift+I` |
| Inline chat (in file) | `Ctrl+I` | `Cmd+I` |
| Quick Chat (floating) | `Ctrl+Shift+Alt+I` | `Cmd+Shift+Ctrl+I` |

### Reading Copilot Responses

| What | How |
|------|-----|
| Complete response (streams live in Accessible View) | `Alt+F2` - open anytime, including while response is still generating |
| Close Accessible View | `Escape` |
| Read current inline suggestion | `Alt+F2` while ghost text is showing |

### Accepting/Rejecting Suggestions

| What | Windows / Linux | macOS |
|------|----------------|-------|
| Accept | `Tab` | `Tab` |
| Reject | `Escape` | `Escape` |
| Accept word by word (recommended) | `Ctrl+Right Arrow` | `Cmd+Right Arrow` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |
| Open full suggestion list | `Ctrl+Enter` | `Cmd+Enter` |
| Open suggestion in Accessible View | `Alt+F2` | `Option+F2` |
| Insert from Accessible View at cursor | `Ctrl+/` | `Cmd+/` |

### Instructions Management

| What | How |
|------|-----|
| Auto-generate instructions from workspace | Type `/init` in Chat |
| New instructions file | `Ctrl+Shift+P` → "Chat: New Instructions File" |
| New prompt/slash command file | `Ctrl+Shift+P` → "Chat: New Prompt File" |
| Configure instructions | `Ctrl+Shift+P` → "Chat: Configure Instructions" |
| View all loaded files and errors | Chat gear → Diagnostics |



## 12. Screen Reader Workflow - Official Guide

> Source: [accessibility.github.com/documentation/guide/github-copilot-vsc/](https://accessibility.github.com/documentation/guide/github-copilot-vsc/)
>
> **Contributors:** @mlama007, zersiax  |  **Community:** [GitHub Accessibility Discussions](https://github.com/orgs/community/discussions/categories/accessibility)

### Prerequisites

- VS Code with **GitHub Copilot Chat** extension installed
- A GitHub account with Copilot access (Free tier or paid)
- A screen reader (NVDA recommended for this guide)

### Step 1: Enable VS Code Screen Reader Mode

1. Press `Shift+Alt+F1` to toggle Screen Reader Accessibility Mode
2. Or use Command Palette: `Ctrl+Shift+P` → "Toggle Screen Reader Accessibility Mode"
3. VS Code announces: "Screen Reader Accessibility Mode enabled"

When Screen Reader Mode is on, VS Code changes how it announces suggestions (full text instead of streaming), adjusts live regions, and enables accessible navigation patterns throughout the editor.

### Step 2: Configure Accessibility Signals (Optional but Recommended)

1. Open Settings: `Ctrl+,`
2. Search "accessibility signals"
3. Enable the Copilot-specific signals:

| Signal Setting | What It Signals |
|-------------------|-----------------|
| `accessibility.signals.lineHasInlineSuggestion` | A suggestion is available on the current line |
| `accessibility.signals.chatRequestSent` | Your prompt has been sent |
| `accessibility.signals.chatResponsePending` | Copilot is generating a response |
| `accessibility.signals.chatResponseReceived` | Response is complete and ready to read |

Recommended JSON config for Copilot accessibility signals:

```json
{
  "accessibility.signals.lineHasInlineSuggestion": "on",
  "accessibility.signals.chatRequestSent": "on",
  "accessibility.signals.chatResponsePending": "auto",
  "accessibility.signals.chatResponseReceived": "on"
}
```

### Step 3: Official Shortcut Table (from accessibility.github.com)

This is the complete table of Copilot screen reader shortcuts as published by the GitHub Accessibility team:

| Action | Shortcut |
|--------|----------|
| Accept Inline Suggestion | `Tab` |
| Dismiss Inline Suggestion | `Escape` |
| Show next suggestion in Suggestions Panel | `Alt+]` |
| Show previous suggestion in Suggestions Panel | `Alt+[` |
| Open GitHub Copilot Suggestions (loads ~10 suggestions side by side) | `Ctrl+Enter` |
| Opens suggestion in Accessible View panel | `Alt+F2` |
| Inserts suggestion from Accessible View at cursor | `Ctrl+/` |
| Opens Inline Chat (in-file, at cursor) | `Ctrl+I` |
| Opens dedicated Chat view | `Ctrl+Shift+I` |

### Step 4: Recommended Workflow for Inline Suggestions

**The screen reader-optimized workflow for every inline suggestion:**

```
1. Type your code or documentation
2. Copilot generates a suggestion (audio cue sounds if enabled)
3. DO NOT press Tab immediately
4. Press Alt+F2 - Accessible View opens with the full suggestion text
5. Read the suggestion at your own pace with Arrow keys
6. Decision:
   a. Insert it: Press Ctrl+/ - suggestion is inserted at cursor position
   b. Skip it: Press Escape to close Accessible View, then Escape again to dismiss
   c. See alternatives: Close Accessible View, press Alt+] for next suggestion
```

This workflow avoids the streaming announcement problem (where suggestions are read out in fragments as tokens arrive) and gives you full, uninterrupted access to the suggestion text before committing.

### Step 5: Recommended Workflow for Chat Responses

```
1. Open Chat: Ctrl+Shift+I
2. Type your prompt, press Ctrl+Enter to send
3. Press Alt+F2 - Accessible View opens immediately; the response streams live into it
4. Navigate with Arrow keys - no streaming noise, follow along in real-time
5. Headings, code blocks, and lists are fully structured
6. Press Escape to close - focus returns to Chat input
```

### Reading the Suggestions Panel (Ctrl+Enter)

Pressing `Ctrl+Enter` opens a **Suggestions Panel** - a separate editor tab that shows up to 10 alternative suggestions simultaneously. This is useful when the default suggestion isn't quite right and you want to compare options.

```
1. Ctrl+Enter - opens "GitHub Copilot" editor tab
2. Screen Reader Mode is active: navigate with Browse Mode
3. H key to navigate headings (each suggestion may be under a heading)
4. Press Alt+F2 on a focused suggestion to read it in Accessible View
5. Tab to "Accept" button for a suggestion you want to use
6. Close the tab when done (Ctrl+W)
```

### Resources

| Resource | URL |
|----------|-----|
| VS Code Copilot Cheat Sheet | [code.visualstudio.com/docs/copilot/reference/copilot-vscode-features](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features) |
| VS Code Accessibility Features | [code.visualstudio.com/docs/editor/accessibility](https://code.visualstudio.com/docs/editor/accessibility) |
| GitHub Accessibility Discussions | [github.com/orgs/community/discussions/categories/accessibility](https://github.com/orgs/community/discussions/categories/accessibility) |
| Official screen reader guide | [accessibility.github.com/documentation/guide/github-copilot-vsc/](https://accessibility.github.com/documentation/guide/github-copilot-vsc/) |
| Optimizing Copilot with custom instructions (accessibility) | [accessibility.github.com/documentation/guide/copilot-instructions/](https://accessibility.github.com/documentation/guide/copilot-instructions/) |
| Getting started with custom agents for accessibility | [accessibility.github.com/documentation/guide/getting-started-with-agents/](https://accessibility.github.com/documentation/guide/getting-started-with-agents/) |


## 13. awesome-copilot - Plugin Ecosystem

**awesome-copilot** is a GitHub repository (`github/awesome-copilot`) - not a VS Code Marketplace extension. It is GitHub's curated ecosystem of Copilot plugins, prompts, instructions, agents, skills, and hooks that can be shared and discovered by anyone.

> **Stars:** 21.6k  |  **Forks:** 2.5k  |  **Contributors:** 247+  |  **Repository:** [github.com/github/awesome-copilot](https://github.com/github/awesome-copilot)

### Repository Structure

| Directory | Contents |
|-----------|----------|
| `prompts/` | Community-contributed `.prompt.md` slash command files |
| `instructions/` | Community-contributed `.instructions.md` guidance files |
| `agents/` | Community-contributed `.agent.md` agent definitions |
| `plugins/` | Community-contributed plugin packages (MCP and CLI) |
| `skills/` | Community-contributed `SKILL.md` bundles |
| `hooks/` | Community-contributed lifecycle hook `.json` configs |
| `cookbook/` | Worked examples and usage patterns |

**LLM discovery:** `https://github.github.io/awesome-copilot/llms.txt` - a machine-readable index of all available resources.


### The `/plugin` Command - Browse and Install from Chat

The easiest way to explore awesome-copilot from VS Code:

1. Open Copilot Chat (`Ctrl+Shift+I`)
2. Type `/plugin` and press `Enter`
3. Copilot Chat opens an interactive plugin marketplace browser
4. Browse plugins by category, read descriptions, and install with a single command

**Key plugins available via `/plugin`:**

| Plugin | What It Does |
|--------|-------------|
| **Awesome Copilot** | The meta-plugin - browse and install any resource from the full ecosystem |
| **Copilot SDK** | Official SDK for C#, Go, Node.js, and Python development patterns |
| **Partners** | 20+ partner agents from Azure, JetBrains, MongoDB, and others |


### CLI Plugin Installation

From any terminal with GitHub CLI (`gh`) installed:

```bash
# Browse the marketplace
gh copilot plugin marketplace list

# Add the awesome-copilot collection
gh copilot plugin marketplace add github/awesome-copilot

# Install a specific plugin
gh copilot plugin install @awesome-copilot/accessibility-toolkit

# List what you have installed
gh copilot plugin list
```


### MCP Server Integration (Docker required)

awesome-copilot also ships as an **MCP (Model Context Protocol) Server** - a Docker-based tool server that extends Copilot with additional capabilities beyond file-based customizations.

Install in VS Code by clicking the button at `https://aka.ms/awesome-copilot/mcp/vscode`, or add manually to `settings.json`:

```json
{
  "mcp": {
    "servers": {
      "awesome-copilot": {
        "type": "stdio",
        "command": "docker",
        "args": [
          "run", "-i", "--rm",
          "ghcr.io/github/awesome-copilot-mcp:latest"
        ]
      }
    }
  }
}
```

**Also available for:** VS Code Insiders and Visual Studio.

> **Screen reader note:** The install buttons on the awesome-copilot page are standard links. Navigate with `K` in Browse Mode to find them. Each is labeled with the target IDE.


### awesome-copilot vs. Accessibility Agents

| Feature | Accessibility Agents (`.github/agents/`) | awesome-copilot |
|---------|--------------------------------|----------------|
| **Scope** | Your repo and fork | Community-wide ecosystem |
| **Distribution** | Clone the repo; agents travel with it | Plugin marketplace - install on demand |
| **Customization** | Edit `.agent.md` files directly | Use as-is or fork and modify |
| **Storage** | Your version-controlled repository | GitHub-hosted public repository |
| **Best for** | Project-specific workflows | Reusable templates and cross-project tools |


## 14. GitHub Agentic Workflows - Agents in the Cloud

> **Status: Technical Preview** - GitHub Agentic Workflows entered technical preview on **February 13, 2026**. The feature is in early development and may change significantly. Use with careful human supervision. See the [official documentation](https://github.github.com/gh-aw/) and [source repository](https://github.com/github/gh-aw) (open source, MIT).

**GitHub Agentic Workflows** run AI coding agents as part of GitHub Actions pipelines - no VS Code, no local setup required. The key differentiator: you write automation goals in **plain Markdown**, and the `gh aw` CLI compiles them into standard GitHub Actions workflows. The AI agent interprets your natural language description and executes the task.

### What This Enables

| Workflow Category | Trigger | Example |
|------------------|---------|---------|
| Issue & PR Management | `issues: opened` | Auto-triage, label, and assign new issues |
| Continuous Documentation | `push` to main | Keep README and docs in sync with code changes |
| Metrics & Analytics | `schedule: daily` | Daily status report posted as a new issue |
| Quality & Testing | `pull_request` | CI failure analysis posted as PR comment |
| Continuous Improvement | `schedule: weekly` | Automated refactoring and code simplification PRs |
| Multi-Repository | `workflow_dispatch` | Sync features and track changes across repos |

Browse 50+ community-built workflows at [Peli's Agent Factory](https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/).

### How It Works

The `gh aw` CLI (a `gh` extension) compiles `.md` workflow files into `.lock.yml` GitHub Actions workflows:

```
.github/workflows/daily-report.md  ← you write this (Markdown + frontmatter)
        ↓  gh aw compile
.github/workflows/daily-report.lock.yml  ← generated, runs as standard GitHub Actions
```

The AI agent (GitHub Copilot, Claude, or OpenAI Codex) reads your repository context and the natural language instructions, then performs the task using the GitHub MCP Server and other available tools.

### Workflow Format - Markdown with Frontmatter

Unlike standard GitHub Actions (YAML), agentic workflows are Markdown files:

```markdown
on:
  schedule: daily
permissions:
  contents: read
  issues: read
  pull-requests: read
safe-outputs:
  create-issue:
    title-prefix: "[team-status] "
    labels: [report, daily-status]
    close-older-issues: true

## Daily Issues Report

Create an upbeat daily status report for the team as a GitHub issue.

## What to include

- Recent repository activity (issues, PRs, discussions, releases, code changes)
- Progress tracking, goal reminders and highlights
- Project status and recommendations
- Actionable next steps for maintainers
```

The body is natural language - describe what you want the AI agent to do. The frontmatter controls triggers, permissions, and what write operations are allowed.

### Key Frontmatter Properties

| Property | Purpose |
|----------|---------|
| `on: schedule: daily` | Runs once per day (also: `weekly`, `cron` expressions, `issues: opened`, `pull_request`) |
| `on: issue_comment: created` | Trigger from a comment command in an issue or PR |
| `on: workflow_dispatch` | Manual run via the Actions tab "Run workflow" button |
| `permissions:` | Read-only scopes by default - only request what you need |
| `safe-outputs:` | Pre-approved write operations (e.g., `create-issue`, `pr-comment`) - the security guardrail |

### Security Model - "Safe Outputs"

Workflows run **read-only by default** with sandboxed execution, network isolation, and SHA-pinned dependencies. Write operations require explicit declaration in `safe-outputs` - a set of pre-approved, sanitized GitHub operations. There is no arbitrary filesystem or API write access.

This means: the AI agent cannot push code, delete branches, or modify arbitrary files unless you explicitly declare those `safe-outputs` and they are on the approved list.

### Supported AI Engines

| Engine | Notes |
|--------|-------|
| GitHub Copilot CLI | Default engine |
| Claude (Anthropic) | Alternative engine |
| OpenAI Codex | Alternative engine |
| Custom agents | Bring your own coding agent |

### Getting Started with `gh aw`

```bash
# Install the CLI extension
gh extension install github/gh-aw

# Create a new workflow interactively (from github.com or VS Code also works)
gh aw create

# Compile your Markdown workflow to a GitHub Actions .lock.yml
gh aw compile .github/workflows/daily-report.md

# Commit both the .md and .lock.yml files - GitHub Actions runs the .lock.yml
```

### Monitoring Agentic Workflow Runs

1. Navigate to the **Actions** tab of your repository (`D` → Repository navigation → `K` to Actions)
2. Find the workflow by name (h3 headings, navigate with `3`)
3. Press `Enter` to open a specific run
4. Expand job steps to read the agent output log and any safe-outputs created

### Resources

| Resource | URL |
|----------|-----|
| Official documentation | `github.github.com/gh-aw/` |
| Source repository (open source) | `github.com/github/gh-aw` |
| Peli's Agent Factory (50+ examples) | `github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/` |
| Community feedback & discussion | `github.com/orgs/community/discussions/186451` |
| Changelog announcement (Feb 13, 2026) | `github.blog/changelog/2026-02-13-github-agentic-workflows-are-now-in-technical-preview` |

> **Relationship to Accessibility Agents:** Accessibility Agents agents (`.agent.md` files) are designed for interactive use inside VS Code. GitHub Agentic Workflows are a separate, cloud-native system that uses its own Markdown workflow format and the `gh aw` CLI - they are complementary tools, not the same mechanism. See [Appendix V](appendix-v-accessibility-agents-reference.md) for the full Accessibility Agents reference.


*Chapter: [GitHub Copilot](13-github-copilot.md)*
*Related: [Appendix V: Accessibility Agents Reference](appendix-v-accessibility-agents-reference.md) | [Appendix M: VS Code Accessibility Reference](appendix-m-vscode-accessibility-reference.md) | [Appendix X: AI Models Reference](appendix-x-copilot-models.md)*



### Supplementary: Copilot AI Models - model comparison

# Appendix X: GitHub Copilot AI Models Reference
> **Listen to Episode 41:** [Copilot AI Models](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.


<!-- TOC -->
- [Overview](#1-overview)
- [How to Choose a Model](#2-how-to-choose-a-model)
- [Complete Model Reference](#3-complete-model-reference)
- [Model Availability by Plan](#4-model-availability-by-plan)
- [Premium Requests and Cost Multipliers](#5-premium-requests-and-cost-multipliers)
- [Switching Models in VS Code](#6-switching-models-in-vs-code)
- [Auto Model Selection](#7-auto-model-selection)
- [Models Retiring Soon](#8-models-retiring-soon)
<!-- /TOC -->


## 1. Overview

GitHub Copilot offers access to AI models from multiple providers including OpenAI, Anthropic, Google, and xAI. The model you choose affects response quality, speed, and premium request consumption. Different models excel at different tasks - understanding these trade-offs helps you get better results.

**Models are updated frequently.** This appendix reflects the model landscape as of February 2026. For the latest additions and retirements, see the [GitHub Copilot changelog](https://github.blog/changelog/label/copilot/) and [GitHub's official supported models documentation](https://docs.github.com/en/copilot/reference/ai-models/supported-models).


## 2. How to Choose a Model

GitHub Docs organizes models by task. Match your task to the right model to get the best results without unnecessary premium request cost.

### General-Purpose Coding and Writing

For everyday tasks - code completions, explanations, refactoring, writing documentation.

| Model | Provider | Strengths | Cost |
|-------|----------|-----------|------|
| **GPT-4.1** | OpenAI | Fast, accurate code completions and explanations. Reliable default for most tasks. | Free |
| **GPT-5 mini** | OpenAI | Reliable for most coding and writing tasks. Fast and accurate across languages and frameworks. Also supports image input. | Free |
| **GPT-5.1-Codex** | OpenAI | Higher-quality code on complex engineering tasks like features, tests, debugging, refactors, and reviews - without requiring lengthy prompts. | 1× |
| **Grok Code Fast 1** | xAI | Specialized for coding. Performs well on code generation and debugging across multiple languages. | 0.25× |
| **Raptor mini** | OpenAI (fine-tuned) | Specialized for fast, accurate inline suggestions and explanations. Optimized for completions. | Free |

### Fast Help with Simple or Repetitive Tasks

For quick answers, boilerplate generation, renaming, or lightweight explanations where speed matters.

| Model | Provider | Strengths | Cost |
|-------|----------|-----------|------|
| **Claude Haiku 4.5** | Anthropic | Balances fast responses with quality output. Ideal for small tasks and lightweight code explanations. | 0.33× |
| **Gemini 3 Flash** | Google | Fast, reliable answers to lightweight coding questions. | 0.33× |
| **GPT-5.1-Codex-Mini** | OpenAI | Fast reasoning variant; quick answers on coding tasks. | 0.33× |

### Deep Reasoning and Debugging

For complex problems, architecture decisions, multi-file analysis, tricky bugs, and understanding unfamiliar codebases.

| Model | Provider | Strengths | Cost |
|-------|----------|-----------|------|
| **GPT-5 mini** | OpenAI | Deep reasoning with faster responses. Ideal for interactive sessions and step-by-step code analysis. | Free |
| **GPT-5.2** | OpenAI | Great at complex reasoning, code analysis, and technical decision-making. | 1× |
| **Claude Sonnet 4 / 4.5 / 4.6** | Anthropic | More reliable completions and smarter reasoning under pressure. Performance and practicality balanced for coding workflows; strong at complex problem-solving. | 1× |
| **Claude Opus 4.6** | Anthropic | Anthropic's most powerful model. Best for the most demanding complex problem-solving challenges and sophisticated reasoning. | 3× |
| **Gemini 2.5 Pro** | Google | Complex code generation, debugging, and research workflows. | 1× |
| **Gemini 3 Pro** | Google | Advanced reasoning across long contexts and scientific or technical analysis. Supports vision/image input. | 1× |
| **Goldeneye** | OpenAI (fine-tuned) | Complex problem-solving and sophisticated reasoning. Available for code completions and Copilot Free users only. | 1× |

### Agentic Software Development

For autonomous coding tasks in Agent mode - when Copilot writes code, runs terminal commands, and iterates without step-by-step guidance from you.

| Model | Provider | Strengths | Cost |
|-------|----------|-----------|------|
| **GPT-5.1-Codex-Max** | OpenAI | Best for agentic tasks. Recommended when using Copilot in Agent mode. | 1× |
| **GPT-5.2-Codex** | OpenAI | Best for agentic tasks. Strong autonomous reasoning and multi-step execution. | 1× |
| **GPT-5.3-Codex** | OpenAI | Newest Codex variant. Powerful agentic capabilities. | 1× |

### Working with Visuals

For tasks that involve images, screenshots, diagrams, or UI mockups - paste an image directly into the chat input.

| Model | Supports Images |
|-------|----------------|
| GPT-5 mini | Yes |
| Claude Sonnet 4 / 4.5 / 4.6 | Yes |
| Gemini 3 Pro | Yes |


## 3. Complete Model Reference

| Model | Status | Provider | Plans | Multiplier |
|-------|--------|----------|-------|-----------|
| GPT-4.1 | GA | OpenAI | Free, Pro, Pro+, Business, Enterprise | 0 (free) |
| GPT-5 mini | GA | OpenAI | Free, Pro, Pro+, Business, Enterprise | 0 (free) |
| Raptor mini | Preview | OpenAI (fine-tuned) | Free, Pro | 0 (free) |
| Goldeneye | GA | OpenAI (fine-tuned) | All plans (completions only) | 1× |
| Grok Code Fast 1 | GA | xAI | Pro, Pro+, Business, Enterprise | 0.25× |
| Claude Haiku 4.5 | GA | Anthropic | Pro, Pro+, Business, Enterprise | 0.33× |
| Gemini 3 Flash | GA | Google | Pro, Pro+, Business, Enterprise | 0.33× |
| GPT-5.1-Codex-Mini | GA | OpenAI | Pro, Pro+, Business, Enterprise | 0.33× |
| GPT-5.1-Codex | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.1-Codex-Max | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.1 | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.2 | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.2-Codex | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.3-Codex | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| Claude Sonnet 4 | GA | Anthropic | Pro, Pro+, Business, Enterprise | 1× |
| Claude Sonnet 4.5 | GA | Anthropic | Pro, Pro+, Business, Enterprise | 1× |
| Claude Sonnet 4.6 | GA | Anthropic | Pro, Pro+, Business, Enterprise | 1× |
| Gemini 2.5 Pro | GA | Google | Pro, Pro+, Business, Enterprise | 1× |
| Gemini 3 Pro | Preview | Google | Pro, Pro+, Business, Enterprise | 1× |
| Claude Opus 4.5 | Preview | Anthropic | Pro+, Business, Enterprise | 3× |
| Claude Opus 4.6 | GA | Anthropic | Pro+, Business, Enterprise | 3× |

> **Note:** Model availability changes frequently. Check [GitHub's supported models page](https://docs.github.com/en/copilot/reference/ai-models/supported-models) for the current list.


## 4. Model Availability by Plan

| Plan | Free Models Included | Paid Models Available | Monthly Premium Requests |
|------|---------------------|----------------------|--------------------------|
| **Copilot Free** | GPT-4.1, GPT-5 mini, Raptor mini | None | 50 (monthly) |
| **Copilot Pro** | All 0× models | Most (Pro+ models excluded) | 300 (monthly) |
| **Copilot Pro+** | All 0× models | All models | Unlimited |
| **Copilot Business** | All 0× models | Most | 300 per user (monthly) |
| **Copilot Enterprise** | All 0× models | All models | Unlimited |

Models marked with a premium multiplier consume premium requests proportionally. For example, Claude Opus 4.6 (3× multiplier) uses 3 premium requests per message. Free models (0× multiplier) never consume premium requests.


## 5. Premium Requests and Cost Multipliers

| Multiplier | Impact | Example Models |
|-----------|--------|----------------|
| **0 (free)** | Never consumes premium requests | GPT-4.1, GPT-5 mini, Raptor mini |
| **0.25×** | Very low cost | Grok Code Fast 1 |
| **0.33×** | Low cost | Claude Haiku 4.5, Gemini 3 Flash, GPT-5.1-Codex-Mini |
| **1×** | Standard | Claude Sonnet 4/4.5/4.6, GPT-5.1-Codex, GPT-5.2, Gemini 2.5 Pro, Codex variants |
| **3×** | High cost | Claude Opus 4.5, Claude Opus 4.6 |

**Tips for managing premium request usage:**

- Use **GPT-4.1** or **GPT-5 mini** (both free) for everyday questions, quick explanations, and simple completions - they're fast and capable
- Upgrade to **Claude Sonnet** or **GPT-5.2** (1×) only when the task genuinely requires deeper reasoning
- Save **Claude Opus** (3×) for the most demanding analyses - architecture decisions, complex debugging, sophisticated design review
- Use **Auto** mode (see below) and let Copilot allocate model selection intelligently


## 6. Switching Models in VS Code

### In the Chat Panel

1. Open the **Chat** panel (`Ctrl+Shift+I` / `Cmd+Shift+I`)
2. At the bottom of the chat input area, you'll see the current model name as a button (e.g., "Auto" or "Claude Sonnet 4.6")
3. Activate the model picker button - this opens a dropdown list of available models
4. Arrow through the list and press `Enter` to select a model
5. For screen reader users: the chat input will announce the newly selected model after switching

### In an Inline Chat Session

1. Open Inline Chat (`Ctrl+I` / `Cmd+I`)
2. The model picker appears in the inline chat toolbar
3. Same interaction: activate the model button to switch

### Keyboard Note for Screen Readers

In the Chat panel, the model picker button is near the **bottom** of the chat view. If you're having trouble locating it:

- Tab through the bottom toolbar of the chat panel
- Listen for the model name announced - it appears between the "Attach" button and the send button
- Press `Space` or `Enter` to open the picker


## 7. Auto Model Selection

**Auto mode** (the default) lets Copilot choose the best model based on the type of request. It became generally available on December 10, 2025.

**How Auto works:**
- For simple questions, Copilot routes to a faster, lighter model
- For complex code generation or debugging, Copilot upgrades to a more capable model automatically
- For agent tasks, Copilot selects an appropriate Codex model
- You can see which model was used after each response

**When to override Auto:**
- You specifically need a model with certain capabilities (e.g., vision input with Claude Sonnet 4)
- You're managing premium request quotas and want to control costs
- You've found a particular model gives better results for your specific workflow or domain
- You're doing agentic work and want to explicitly use GPT-5.1-Codex-Max or GPT-5.2-Codex

To switch back to Auto from a specific model, re-open the model picker and select **Auto** at the top of the list.


## 8. Models Retiring Soon

GitHub regularly updates the model roster. Older model versions are retired when newer equivalents are available. When a model is retired, Copilot stops sending requests to it and falls back to newer alternatives.

**Already retired (as of February 2026):**
- Claude Sonnet 3.5, Claude Sonnet 3.7
- Gemini 2.0 Flash
- o1-mini, o3, o3-mini, o4-mini
- Claude Opus 4.1
- GPT-5 (base), GPT-5-Codex

To stay current, watch the [GitHub Copilot changelog](https://github.blog/changelog/label/copilot/) - model additions and retirements are announced there.


## Related Resources

- [GitHub Docs: Comparing AI models](https://docs.github.com/en/copilot/reference/ai-models/model-comparison)
- [GitHub Docs: Supported AI models in Copilot](https://docs.github.com/en/copilot/reference/ai-models/supported-models)
- [GitHub Docs: Changing the model for Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat)
- [Appendix W: GitHub Copilot Reference](appendix-w-github-copilot-reference.md)
- [Chapter 13: GitHub Copilot](13-github-copilot.md)
