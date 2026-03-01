# Git Going with GitHub - Audio Series

## Episode 1: Pre-Workshop Setup

**Series:** Git Going with GitHub
**Episode:** 1 of 44
**Audience:** Blind and low-vision developers learning GitHub and open source
**Estimated length:** 10-12 min

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

- Creating a GitHub account and enabling two-factor authentication
- Installing Git and configuring your identity
- Setting up VS Code with accessibility features
- Configuring your screen reader for GitHub navigation
- Verifying everything works before Day 1

---

### Concept Coverage Checklist

Every concept below MUST be explained during the episode. Do not skip any.
When a concept is complex, use an analogy or real-world comparison to make it concrete.

- [ ] **Creating a GitHub account and choosing a username**
- [ ] **Two-factor authentication: what it is and why it is required**
- [ ] **What Git is versus what GitHub is - the distinction**
- [ ] **Installing Git on Windows, macOS, and Linux**
- [ ] **Configuring git identity: user.name and user.email**
- [ ] **What VS Code is and why it is the recommended editor**
- [ ] **Installing VS Code and enabling screen reader mode**
- [ ] **The github.dev alternative for browser-based editing**
- [ ] **Verifying your setup works end to end**

### Cross-Referenced Material

The following supplementary content is included after the primary source.
Reference it naturally when a concept would benefit from additional context,
but keep the main narrative focused on the primary chapter.

- Git Authentication (tokens, SSH, credential storage)

### Primary Source Material

# Pre-Workshop Setup - GIT Going with GitHub
> **Listen to Episode 1:** [Pre-Workshop Setup](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## Everything You Need Before Day 1 Begins

> **A [Community Access](https://community-access.org) workshop.**
>
> **Please complete this guide at least one day before the workshop.** If you run into any issues, [file an issue](https://github.com/community-access/git-going-with-github/issues) so we can help - we want Day 1 to start with everyone ready to go, not troubleshooting.

---

## Table of Contents

1. [What You Will Need](#what-you-will-need)
2. [Step 1 - Create Your GitHub Account](#step-1-create-your-github-account)
3. [Step 2 - Configure GitHub Accessibility Settings](#step-2-configure-github-accessibility-settings)
4. [Step 3 - Configure Your Profile](#step-3-configure-your-profile)
5. [Step 4 - Check GitHub Feature Preview Settings](#step-4-check-github-feature-preview-settings)
6. [Step 5 - Set Up Your Screen Reader and Browser](#step-5-set-up-your-screen-reader-browser)
7. [Step 6 - Install Git and Visual Studio Code](#step-6-install-git-and-visual-studio-code)
8. [Step 7 - Configure Git Identity](#step-7-configure-git-identity)
9. [Step 8 - Install VS Code Extensions](#step-8-install-vs-code-extensions)
10. [Step 9 - Verification Checklist](#step-9-verification-checklist)
11. [Other GitHub Access Methods (Reference Only)](#other-github-access-methods-reference-only)
12. [Getting Help Before the Event](#getting-help-before-the-event)

---

## What You Will Need

### Hardware
- A computer running Windows or macOS
- A reliable internet connection
- Headphones (recommended - screen reader audio during group sessions)

### Software - Day 1
- A modern web browser: **Chrome** or **Firefox** recommended
  - Both have strong compatibility with GitHub's interface and screen readers
  - Edge is also acceptable on Windows
  - Safari is the recommended browser on macOS with VoiceOver
- A screen reader (see options below)
- A GitHub account (free tier is fine)

### Software - Required Before the Workshop
- **Git** - [Download Git](https://git-scm.com/downloads) (Windows/Linux) or Xcode Command Line Tools (macOS)
- **Visual Studio Code** (free) - [download here](https://code.visualstudio.com/)
- **GitHub Copilot Chat** extension for VS Code - installed from within VS Code (this single extension provides both inline suggestions and Chat)
- A GitHub Copilot subscription or Free tier access (Copilot Free is available to all GitHub users)

### Screen Reader Options

You only need **one** of these. Use whichever you are most comfortable with.

| Screen Reader | Platform | Cost | Download |
|---------------|----------|------|----------|
| **NVDA** (NonVisual Desktop Access) | Windows | Free | [Download NVDA](https://www.nvaccess.org/download/) |
| **JAWS** (Job Access With Speech) | Windows | Paid (trial available) | [Download JAWS](https://www.freedomscientific.com/products/software/jaws/) |
| **VoiceOver** | macOS / iOS | Built-in (free) | Included with macOS - press `Cmd+F5` to activate |

> **Note:** All workshop exercises are designed to work with any of these screen readers. Where specific key commands differ, we will note all three. You are not disadvantaged by using any particular screen reader.

---

## Step 1 - Create Your GitHub Account

If you already have a GitHub account, skip to [Step 2](#step-2-configure-github-accessibility-settings).

> **Before you begin:** Have your email address and a chosen password ready. The signup form is a single-page form with several fields - your screen reader will encounter a verification puzzle partway through (see note below).

### Create an account

1. Open your browser and navigate to **https://github.com/signup**
2. The page loads with focus on the first field: **"Enter your email address"**
   - Type your email address and press `Tab` or activate **Continue**
3. The next field is **"Create a password"**
   - Choose a password of at least 8 characters (15+ recommended). Press `Tab` or **Continue**
4. The next field is **"Enter a username"**
   - Your username appears on every issue, PR, and comment you make. Guidelines:
     - Use lowercase letters, numbers, and hyphens only
     - Keep it professional - it represents you in the open source community
     - GitHub will tell you immediately if the name is taken
   - Press `Tab` or **Continue**
5. The next question asks whether you want to receive product updates by email
   - Press `Tab` to reach the **"y"** or **"n"** options and press `Enter`, or type `y` or `n` directly
6. **Human verification step**

   <details>
   <summary>Visual / mouse users</summary>

   GitHub presents a visual CAPTCHA puzzle to verify you are human. Follow the on-screen prompts - typically clicking images that match a category, or checking a box. If the puzzle does not load, try refreshing the page.

   </details>

   <details>
   <summary>Screen reader users</summary>

   GitHub's visual CAPTCHA is a known accessibility barrier. After the CAPTCHA appears:
   - Look for a button or link labeled **"Audio"** or **"Try an audio challenge"** - an audio CAPTCHA alternative may be available
   - If no audio option appears, or if neither challenge is accessible, contact the workshop organizer before the event - they can assist with account verification
   - If you complete an audio challenge, you will hear words or digits to type into a text field

   </details>

7. Activate the **Create account** button
8. GitHub sends a **launch code** (a short numeric code) to your email inbox
   - Check your email, copy the code, return to the browser, and type it into the verification field
   - If you don't receive it within a few minutes, check your spam folder
9. You will land on a "Welcome to GitHub" personalization page - you can skip it or answer the questions; it does not affect your account functionality

### Verify your email address

GitHub also sends a **separate** email verification link after account creation. Check your inbox for an email from GitHub with subject "Please verify your email address" and activate the link inside it. Some GitHub features (including creating repositories) require a verified email.

### Enable two-factor authentication (2FA): detailed guidance and workshop policy

Two-factor authentication (2FA) adds a second verification step each time you sign in, protecting your account if your password is compromised. For this workshop we strongly recommend enabling 2FA. See the **Workshop policy** below for allowed alternatives if you cannot enable 2FA before the event.

Quick steps to enable 2FA

1. Open https://github.com/settings/security while signed in.
2. Under **Two-factor authentication**, choose **Enable** and follow the prompts.
3. Choose one of the second-factor methods (recommended order):
    - **Authenticator app** (recommended): Microsoft Authenticator, Google Authenticator, Authy — generates time-based 6-digit codes.
    - **Security key / passkey** (most secure): hardware security keys (YubiKey, etc.) or platform passkeys (biometric device credentials).
    - **SMS / text message** (least preferred): can be used if other options are unavailable.

Detailed setup notes

- Authenticator app (recommended):
   - Visual users: scan the QR code with your authenticator app and enter the 6-digit code shown.
   - Screen reader users: choose the link labeled **"enter this text code"** or **"can't scan the barcode?"** to reveal the secret (a 32-character key). Use the authenticator app's manual/key-entry option to add the account.

- Security key / passkey:
   - Follow the on-screen prompts to register a hardware key or platform passkey. These are highly recommended for long-term security and are supported by modern browsers and devices.

- SMS / text message:
   - Enter your phone number and verify the code sent via text. Use only if authenticator apps or keys are unavailable.

Recovery and backup

- After enabling 2FA, GitHub will display **recovery (single-use) codes**. Immediately copy, download, or securely store these codes (password manager or physically secure location). They are the only fallback if you lose your second-factor device.
- Consider registering more than one second-factor method (e.g., authenticator app + a hardware key) to avoid account lockout.

Using Git with 2FA: HTTPS vs SSH, and Personal Access Tokens (PATs)

When 2FA is enabled, your GitHub account password cannot be used for HTTPS Git operations. You must use one of these alternatives to push/pull to repositories:

- SSH keys (recommended for git push/pull):
   1. Generate an SSH key on your machine (replace email):

       ```bash
       ssh-keygen -t ed25519 -C "your-email@example.com"
       # or for older systems: ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
       ```
   2. Copy the public key (`~/.ssh/id_ed25519.pub`) and add it at https://github.com/settings/keys → **New SSH key**.
   3. Test the connection: `ssh -T git@github.com` (first-time prompts about known hosts are expected).

   - SSH continues to work regardless of whether 2FA is enabled.

- Personal Access Token (PAT) for HTTPS Git or tools that ask for a password:
   1. Create a PAT at https://github.com/settings/tokens → **Generate new token**.
   2. For normal repo push/pull access, grant **repo** scope (check only what you need). If you need workflow or packages access, add those scopes explicitly.
   3. Use the PAT instead of your password when prompted by Git over HTTPS. In GUI tools (VS Code, GitHub Desktop), paste the PAT where the password is requested or configure the credential helper to store it.

   - Short-lived tokens and fine-grained tokens: GitHub supports fine-grained tokens which are preferred for scoped access. If your tooling supports them, use fine-grained tokens with only the required repository permissions.

Tool-specific tips

- VS Code (Git): When the extension prompts for credentials, choose the web-based sign-in or paste a PAT when prompted for a password. The GitHub authentication extension will walk you through a browser sign-in that supports 2FA.
- GitHub Desktop: use web authentication which supports 2FA, or provide a PAT if requested.

Workshop policy (copy-ready)

For this workshop we strongly recommend participants enable 2FA. If you cannot enable 2FA before the event, you may still participate if you complete one of the following before Day 1:

- Add a verified SSH key to your GitHub account and use SSH for Git operations, or
- Create a Personal Access Token (PAT) with the `repo` scope and use it for HTTPS Git authentication.

If none of these options are possible, contact the workshop organizers at the email or issue link in this guide so we can make accommodations. We cannot grant organization-level repository access to accounts that lack any second-factor or equivalent (SSH/PAT) protections without explicit organizer approval.

Copy-ready paragraph for `CONTRIBUTING.md` / registration forms

> Security: We strongly recommend enabling Two-Factor Authentication (2FA) on your GitHub account. If you cannot enable 2FA, add an SSH key or create a Personal Access Token (PAT) with `repo` scope before contributing. If you need help, contact the workshop organizers.

---

## Step 2 - Configure GitHub Accessibility Settings

These settings make GitHub significantly more usable with a screen reader. **Do not skip this section** - one setting in particular (hovercards) adds significant noise to every page if left on.

### Navigate to Accessibility Settings

The fastest path for everyone: navigate directly to **[GitHub Accessibility Settings](https://github.com/settings/accessibility)** while signed in.

If you prefer to navigate through the interface:

<details>
<summary>Visual / mouse users</summary>

1. Click your **profile picture** (avatar) in the top-right corner of any GitHub page
2. A dropdown menu appears - click **Settings**
3. On the Settings page, scroll the **left sidebar** and click **Accessibility**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. On any GitHub page, switch to Browse Mode if you are not already in it (`NVDA+Space` / JAWS virtual cursor should be on by default in browsers)
2. Press `B` repeatedly until you hear **"Open user navigation menu, button"** (top-right of the page) and press `Enter`
3. Navigate the menu with `↓` or `K` until you hear **"Settings"** and press `Enter`
4. On the Settings page, press `D` to move through landmark regions until you reach the left sidebar navigation
5. Press `K` or `↓` to navigate through sidebar links until you hear **"Accessibility"** and press `Enter`

</details>

<details>
<summary>Screen reader users (VoiceOver on macOS)</summary>

1. Press `VO+U` to open the Rotor, arrow to Buttons, find **"Open user navigation menu"** and press `Enter`
2. Press `VO+Down Arrow` to find **"Settings"** and press `VO+Space`
3. On Settings, press `VO+U`, go to Links, find **"Accessibility"** and press `Enter`

</details>

### Settings to configure

Work through each setting below. All are on the [Accessibility settings page](https://github.com/settings/accessibility) unless noted.

#### 1. Disable Hovercards (highest priority)

> **Do this first.** Hovercards are the most disruptive default setting for screen reader users on GitHub. When enabled, every link announces its hover keyboard shortcut (`H`) as you navigate past it, dramatically slowing page reading.

<details>
<summary>Visual / mouse users</summary>

On the Accessibility settings page, look for a checkbox or toggle labeled **"Link previews"** or **"Hovercards"**. If it is turned on, click it to turn it off. The change saves automatically.

</details>

<details>
<summary>Screen reader users</summary>

1. On the Accessibility settings page, switch to Browse Mode if not already active
2. Press `F` or `X` to jump through form controls until you hear **"Link previews"** or **"Hovercards"**
3. If it is announced as **checked** or **on**, press `Space` to turn it off
4. The change saves automatically - no Submit button required

</details>

#### 2. Enable Link Underlines

<details>
<summary>Visual / mouse users</summary>

Find the **Link underlines** checkbox or toggle and turn it on. This adds underlines to all links on GitHub, making them distinguishable without relying on colour alone.

</details>

<details>
<summary>Screen reader users</summary>

1. Press `F` or `X` to navigate form controls until you hear **"Link underlines"**
2. If it is announced as **unchecked**, press `Space` to enable it
3. The change saves automatically

</details>

#### 3. Character Key Shortcuts

1. Find **"Character key shortcuts"**
2. Single-key shortcuts (`H` for next heading, `I` for next issue, etc.) speed up navigation but **can conflict with screen reader quick-navigation keys**
   - If your screen reader uses letters for navigation in Browse Mode (NVDA, JAWS), GitHub's single-key shortcuts are suppressed when Browse Mode is active, so conflicts are rare in practice
   - If you notice unexpected behavior, return here and turn them off
3. Leave at the default unless you have a reason to change it

#### 4. Set Your Theme (Appearance Settings)

Theme is on a separate page: [GitHub Appearance Settings](https://github.com/settings/appearance)

1. Navigate to that page
2. Find the **"Theme mode"** or **"Theme"** section
3. Options available:
   - **Light default** - standard white background
   - **Dark default** - dark background, easier on some eyes
   - **High contrast light** - maximum contrast, recommended for low vision
   - **High contrast dark** - maximum contrast on dark background
   - **Colorblind** variants - Protanopia, Deuteranopia, Tritanopia
4. Select your preferred theme and activate **Save** if prompted (some changes apply immediately)

---

## Step 3 - Configure Your Profile

Your GitHub profile is your public identity in the open source community. Setting it up properly helps maintainers know who you are.

### Update your profile

1. Navigate to [Settings → Public profile](https://github.com/settings/profile)
2. Fill in:
   - **Name** - your real name or display name (not the same as your username)
   - **Bio** - a short description (e.g., "Accessibility advocate and open source contributor")
   - **Location** - optional but builds trust in the community
   - **Website or social links** - optional
   - **Pronouns** - GitHub supports adding pronouns to your profile

### Add a profile picture (optional)

A profile picture humanizes your contributions. It can be a photo or any image. If you prefer not to use a photo, GitHub generates a default avatar based on your username.

### Set your notification email

1. Navigate to [Settings → Notifications](https://github.com/settings/notifications)
2. Add a **custom routing** email if you want GitHub notifications to go to a different address than your account email

---

## Step 4 - Check GitHub Feature Preview Settings

GitHub continuously rolls out improvements to its interface. Some enhancements start as opt-in Feature Previews before becoming the standard experience. Two features matter most for screen reader users working through this workshop:

- **New Issues Experience** - improves heading hierarchy, ARIA landmark structure, and live-region announcements on the Issues pages
- **New Files Changed Experience** - adds proper landmark structure, an accessible file tree, and better keyboard navigation to the Files Changed tab in Pull Requests

Both have been broadly rolled out and may already be active on your account. Check before the workshop begins.

### How to Check and Enable Feature Previews

> Source: [accessibility.github.com/documentation/guide/issues/](https://accessibility.github.com/documentation/guide/issues/) and [accessibility.github.com/documentation/guide/pull-requests/](https://accessibility.github.com/documentation/guide/pull-requests/)

<details>
<summary>Visual / mouse users</summary>

1. Sign in to GitHub and go to any page
2. Click your **profile picture** (avatar) in the top-right corner
3. In the dropdown menu, click **Feature preview**
4. A panel opens on the right side of the screen listing available features
5. Click on **New Issues Experience** to expand its details
6. If an **Enable** button appears, click it. If you see **Disable**, the feature is already active - no action needed.
7. Return to the feature list and repeat for **New Files Changed Experience**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

**NVDA or JAWS (Windows):**

1. Sign into GitHub and open any page
2. Switch to Browse Mode if not already active (`NVDA+Space` / JAWS virtual cursor)
3. Press `H` or `Shift+H` to navigate to the **"Navigation Menu"** heading, or press `D` to navigate landmark regions to the navigation section
4. Press `B` to jump to buttons, navigating until you hear **"Open user navigation menu, button"** - this button is in the top-right corner of the page
5. Press `Enter` to activate it - a dropdown menu opens
6. Press `↓` or `K` to move through the menu items until you hear **"Feature preview"**
7. Press `Enter` to select it - the Feature Preview panel opens
8. Navigate through the list of features with `↓` or `I` (list item navigation)
9. When you reach **"New Issues Experience"**, press `Enter` or `Space` to select it - its detail panel expands
10. Press `Tab` to move to the end of the feature detail section, where you will find either:
    - An **"Enable"** button - press `Enter` to enable the feature
    - A **"Disable"** button - the feature is already enabled; no action needed
11. Go back and repeat steps 9-10 for **"New Files Changed Experience"**

</details>

<details>
<summary>Screen reader users (VoiceOver on macOS)</summary>

1. Sign into GitHub and open any page
2. Press `VO+U` to open the Rotor and navigate to the Buttons list
3. Find **"Open user navigation menu"** and press `Enter` to activate it
4. Use `VO+Down Arrow` to navigate the dropdown until you hear **"Feature preview"**
5. Press `VO+Space` to activate it - the Feature Preview panel opens
6. Use `VO+Down Arrow` or `VO+Right Arrow` to navigate through the feature list
7. When you reach **"New Issues Experience"**, press `VO+Space` to select it
8. Press `Tab` to move to the end of the feature detail section
9. If you hear **"Enable"**, press `VO+Space` to activate it. If you hear **"Disable"**, it is already on.
10. Repeat for **"New Files Changed Experience"**

</details>

### What "Not Listed" Means

If you open Feature Preview and neither **"New Issues Experience"** nor **"New Files Changed Experience"** appears in the list at all - that is good news. It means both features have **graduated to the standard GitHub interface** and are active automatically for every user. No action needed.

### What Each Feature Enables

| Feature | What it improves for screen reader users |
|---------|------------------------------------------|
| **New Issues Experience** | Issues list uses proper `<ul>` list structure. Issue titles are h3 headings. ARIA live regions announce filter result updates. Toolbar uses arrow key navigation. Close issue via `Ctrl+Shift+Enter` from the comment box. |
| **New Files Changed Experience** | Files Changed tab includes a navigable file tree region. Diffs are structured as tables with row/column navigation. Filter changed files field is reachable with `E`. Inline comment mode activates with `Enter` on a focused diff line. |

> **Why this matters:** Without these features enabled, the keyboard and screen reader workflows described throughout this workshop will not match what you see on screen. Enabling them before you begin ensures everything works as documented.

---

## Step 5 - Set Up Your Screen Reader & Browser

### NVDA (Windows)

**Install NVDA** if you haven't already:
1. Download from [the NVDA download page](https://www.nvaccess.org/download/)
2. Run the installer - you can install to your computer or run portably
3. After launch, NVDA speaks "NVDA started" when running

**Configure NVDA for web browsing:**
1. Open NVDA Menu (`NVDA+N`)
2. Go to **Preferences → Settings → Browse Mode**
3. Enable "Use screen layout" - this helps with GitHub's landmark navigation
4. Under **Document Formatting**, disable announcements you find too verbose

**Recommended NVDA voice settings:**
- Rate: 60-75% (fast enough to be efficient, slow enough to be clear)
- Punctuation: "Most" (reads important symbols like `#` and `@` without reading every period)

**Your NVDA key:** By default it is `Insert`. It can also be set to `Caps Lock` in NVDA preferences if that is more comfortable.

---

### JAWS (Windows)

**If using a trial:** JAWS runs in 40-minute sessions without a license. Restart it if you need more time.

**Configure JAWS for web browsing:**
1. Open JAWS Settings Center: `Insert+F2 → Settings Center`
2. Ensure "Virtual cursor" is active for web browsing
3. In Chrome or Firefox, JAWS should automatically activate Virtual/Browse mode

**Recommended JAWS settings for GitHub:**
- Verbosity → Links: Read link text only (disable "opens in new window" if too verbose)
- Verbosity → Punctuation: "Most" for same reason as NVDA

**Your JAWS key:** `Insert` (or `Caps Lock` if using laptop layout)

---

### VoiceOver (macOS)

**Activate VoiceOver:** `Command+F5` toggles VoiceOver on and off.

**Essential VoiceOver setup for web:**
1. Open VoiceOver Utility: `VO+F8`
2. Go to **Web** category → **Web Rotor**
3. Ensure these are checked: Headings, Landmarks, Links, Buttons, Form Controls, Tables
4. **Recommended browser:** Safari (best VoiceOver integration on macOS)
5. Firefox on macOS also has good VoiceOver support

**Your VoiceOver modifier key:** `VO` = `Control+Option` by default.

**Turn on Quick Nav for fast navigation:**
- Press `Left Arrow + Right Arrow` simultaneously to toggle Quick Nav
- With Quick Nav on: `H` = next heading, `L` = next link, `B` = next button (same as NVDA/JAWS browse mode keys)

---

### Browser Recommendations Summary

| Browser | Windows | macOS | Notes |
|---------|---------|-------|-------|
| **Chrome** | Recommended | Good | Best with NVDA and JAWS |
| **Firefox** | Recommended | Good | Excellent accessibility support on all platforms |
| **Edge** | Acceptable | Acceptable | Chromium-based; works well |
| **Safari** | Not available | Recommended | Best for VoiceOver on macOS |

**Before the workshop:** Open GitHub.com in your chosen browser with your screen reader running and confirm you can navigate the page using heading keys.

---

## Step 6 - Install Git and Visual Studio Code

### Install Git First

> **VS Code does not install Git.** It detects whether Git is already on your system. If Git is missing, the Source Control panel will display a warning, and all `git` commands in the terminal will fail. Install Git before installing VS Code.

**Windows:**
1. Download the Git for Windows installer from [Git for Windows download page](https://git-scm.com/download/win)
2. Run the installer - default options are correct for most users
3. On the "Adjusting your PATH environment" screen, keep the default: **"Git from the command line and also from 3rd-party software"**
4. Complete the installer and restart any open terminals

**Verify installation (Windows):**
1. Open PowerShell or Command Prompt
2. Type `git --version` and press `Enter`
3. You should see a version number such as `git version 2.47.0.windows.2` - any version is fine

**macOS:**
Git is often already present via Xcode Command Line Tools. To check:
1. Open Terminal (`Cmd+Space` → type "Terminal")
2. Type `git --version` and press `Enter`
3. If Git is not installed, macOS will automatically prompt you to install Xcode Command Line Tools - follow the prompt and wait for it to complete
4. Alternatively, install directly from [Git for macOS download page](https://git-scm.com/download/mac) or via Homebrew: `brew install git`

**Screen reader note (Windows terminal verification):**
- PowerShell is accessible with all screen readers via Browse Mode or Forms Mode
- Type `git --version`, press `Enter`, then press `↑` to re-read the output line

Once Git is installed, you will configure your Git identity in Step 7 after VS Code is set up.

---

### Install Visual Studio Code

Visual Studio Code (VS Code) is the development environment used throughout this workshop. It is free, open source, and has excellent built-in accessibility support.

### Download and install

1. Navigate to [code.visualstudio.com](https://code.visualstudio.com/)
2. Select the download link for your operating system
3. Run the installer with default options
4. Launch VS Code when the installer finishes

### Enable Screen Reader Mode in VS Code

> **Do this before anything else in VS Code.** Screen Reader Mode changes how the editor renders content - without it, your screen reader may receive incomplete or fragmented output from the editor, diff views, and Copilot Chat.

VS Code may detect your screen reader automatically when it first opens and ask if you want to enable this mode. If it does:
1. Listen for the dialog - it will say something like "A screen reader is detected. Would you like to enable Screen Reader Optimized mode?"
2. Press `Enter` to accept, or `Tab` to the **Enable** button and press `Space`

If VS Code did **not** prompt you automatically, enable it manually:

**Option A - Keyboard shortcut:**
1. Press `Shift+Alt+F1`
2. VS Code toggles Screen Reader Optimized mode immediately

**Option B - Command Palette:**
1. Press `Ctrl+Shift+P` to open the Command Palette
   - Your screen reader will announce "Type to filter" or the palette input field
2. Type: `screen reader` - the list filters as you type
3. Arrow down to **"Accessibility: Toggle Screen Reader Accessibility Mode"**
4. Press `Enter`

**How to confirm it is on:**
1. Press `Ctrl+Shift+P` to open the Command Palette again
2. Type: `screen reader optimized`
3. If the status bar at the bottom of the window is accessible to you, it will read **"Screen Reader Optimized"**
4. Alternatively: go to **File → Preferences → Settings** (`Ctrl+,`), type `screenReaderOptimized` in the search box, and verify the checkbox is ticked

**What Screen Reader Mode changes:**
- The editor renders as a plain text region your screen reader can navigate linearly with arrow keys
- Audio cues are enabled for inline suggestions, errors, warnings, and folder expand/collapse
- Diffs are presented as readable before/after text instead of a visual side-by-side view
- The Copilot Chat response panel reads as a structured document

> **Screen reader note:** Once Screen Reader Mode is on, you navigate the editor with `Up` and `Down Arrow` to move line by line. Press `Enter` to open a folded section. Press `Escape` to leave the editor and move focus back to the activity bar or panels.

### VS Code keyboard basics (we will cover these fully in the workshop)

| Action | Shortcut |
|--------|----------|
| Open Command Palette | `Ctrl+Shift+P` |
| Open file | `Ctrl+P` |
| Open terminal | `` Ctrl+` `` (backtick) |
| Focus Explorer panel | `Ctrl+Shift+E` |
| Focus editor | `Ctrl+1` |

---

## Step 7 - Configure Git Identity

Now that Git is installed, tell it who you are. Git embeds your name and email in every commit you make, and this affects how your contributions appear in project history.

### Configure in VS Code

1. Open **Visual Studio Code**
2. Open the integrated terminal:
   - Menu: **Terminal → New Terminal**
   - Keyboard: `` Ctrl+` `` (Windows) or `` Cmd+` `` (Mac)
3. Type the following commands, replacing with your information:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

**What to use:**
- **user.name:** Your real name or the name you want shown on commits (e.g., "Jane Smith")
- **user.email:** The email address associated with your GitHub account (must match exactly)

**Screen reader note:** The terminal in VS Code is accessible with all major screen readers. Press `` Ctrl+` `` to move focus to the terminal, type your commands, and press `Enter`.

### Why This Matters

If Git isn't configured, it will either:
- Use a default name like "Unknown" (looks unprofessional in project history)
- Refuse to create commits with an error message

### Verify Your Configuration

Run this command to see your current settings:

```bash
git config --global --list
```

You should see:
```
user.name=Your Name
user.email=your-email@example.com
```

### Using the Correct Email

Use the same email you registered with GitHub. If you're concerned about privacy, GitHub offers a no-reply email you can use: `username@users.noreply.github.com` - find it in [Settings → Emails](https://github.com/settings/emails).

---

## Step 8 - Install VS Code Extensions

This workshop uses two VS Code extensions. Both are published by GitHub and are free. Install them in the order shown below.

---

### Sign in to GitHub in VS Code first

Both extensions require you to be signed into GitHub. Do this once and both will be authenticated.

1. Open VS Code
2. Press `Ctrl+Shift+P` to open the Command Palette
3. Type: `sign in` and arrow down to **"GitHub: Sign in"** - press `Enter`
   - Your default web browser will open to a GitHub authentication page
4. In the browser, confirm your GitHub account when prompted and select **Authorize Visual Studio Code**
5. Switch back to VS Code - your browser may ask you to confirm opening VS Code; select **Open** or **Allow**
6. You should hear VS Code announce a notification, and the accounts icon in the Activity Bar will show your GitHub username

> **Screen reader note:** The authentication happens in your browser. After authorizing, your browser will show a page saying "You can close this tab and return to VS Code." Switch back to VS Code with `Alt+Tab` (Windows) or `Cmd+Tab` (macOS).

---

### Extension 1 - GitHub Copilot Chat

This single extension provides both inline code completions and the conversational Chat panel. It is used throughout the second half of the workshop.

**Install:**
1. Press `Ctrl+Shift+X` to open the Extensions panel
   - Your screen reader will announce "Extensions" and place focus in the search box
2. Type: `GitHub Copilot Chat`
   - The list updates as you type
3. Press `Tab` to move from the search box into the results list
4. Arrow down through the results. Look for **"GitHub Copilot Chat"** with publisher **"GitHub"**
   - There are similar-named extensions from other publishers - verify the publisher is "GitHub" before installing
5. Press `Enter` to open the extension details page
6. Press `Tab` to find the **Install** button, then press `Enter` or `Space`
7. Wait for installation to complete - VS Code will announce "Extension installed" or similar

**Verify it is working:**
1. Press `Ctrl+Shift+I` to open the Copilot Chat panel
   - Your screen reader should announce the chat input field
2. Type: `Hello, are you there?` and press `Enter`
3. A response will appear in the chat history above the input field
4. Navigate up with `Shift+Tab` or `Up Arrow` to read the response
5. If you see an error about signing in, press `Ctrl+Shift+P` and run **"GitHub: Sign in"** again

**Verify inline completions:**
1. Press `Ctrl+N` to create a new untitled file
2. Press `Ctrl+Shift+P`, type `change language`, and select **"Change Language Mode"** - choose **Python** or **JavaScript**
3. Start typing a function name such as `function greet` (JavaScript) or `def greet` (Python)
4. Pause for 1-2 seconds - Copilot will suggest a completion in grey ghost text
5. Press `Tab` to accept it, or `Esc` to dismiss
6. If no suggestions appear: confirm Copilot icon shows in the status bar and that you are signed in

---

### Extension 2 - GitHub Pull Requests

This extension lets you review and manage pull requests without leaving VS Code. It is used in the code review chapters.

**Install:**
1. Press `Ctrl+Shift+X` to open the Extensions panel
2. Type: `GitHub Pull Requests`
3. Press `Tab` to move into the results list
4. Arrow down to find **"GitHub Pull Requests"** with publisher **"GitHub"**
   - This extension was formerly named "GitHub Pull Requests and Issues" - either name is correct
5. Press `Enter` to open the details page
6. Press `Tab` to the **Install** button and press `Enter` or `Space`
7. VS Code will announce when installation is complete

**Verify it is working:**
1. Press `Ctrl+Shift+P` and type: `GitHub Pull Requests: Sign in`
   - If you are already signed in from the earlier step, this command may not appear - that means you are already authenticated
2. To confirm the extension loaded: press `Ctrl+Shift+P`, type `GitHub Pull Requests: Focus on Pull Requests View`
   - The Pull Requests panel should open in the sidebar
   - If your repository has open pull requests, they will appear here

> **Screen reader note:** The Pull Requests panel is a tree view. Navigate it with `Up` and `Down Arrow`. Press `Enter` or `Right Arrow` to expand a node.

---

### Copilot Free tier

Copilot Free is available to all GitHub users at no cost. It includes:
- Limited inline code completions per month
- Limited Copilot Chat messages per month

For this workshop, Free tier is sufficient. If you want unlimited access, paid plans are available at [GitHub Copilot pricing](https://github.com/features/copilot#pricing).

---

## Step 9 - Verification Checklist

Work through this checklist before Day 1. Check off each item:

```
Pre-Workshop Checklist

GITHUB ACCOUNT
[ ] GitHub account created and email verified
[ ] Two-factor authentication enabled
[ ] Profile name, bio set

GITHUB SETTINGS
[ ] Accessibility settings page visited
[ ] Hovercards / link previews turned OFF
[ ] Theme set to your preferred option
[ ] Confirmed modern GitHub Issues and Pull Request experience is working (see Step 4 - may already be active or enabled via Feature preview)

BROWSER & SCREEN READER
[ ] Screen reader installed and working (NVDA / JAWS / VoiceOver)
[ ] Browser chosen: Chrome, Firefox, Edge (Windows) or Safari (macOS)
[ ] Navigated to github.com with screen reader - page announces headings and landmarks
[ ] Can navigate the GitHub homepage using heading keys (H) without a mouse

GIT & VS CODE (required before the workshop)
[ ] Git installed and verified (run git --version in a terminal)
[ ] Git identity configured (git config --global user.name and user.email)
[ ] Visual Studio Code installed
[ ] Screen Reader Mode enabled in VS Code (Shift+Alt+F1 or Command Palette)
[ ] Signed into GitHub in VS Code
[ ] GitHub Copilot Chat extension installed (publisher: GitHub)
[ ] Copilot Chat responds in the Chat panel (Ctrl+Shift+I)
[ ] Copilot inline suggestions appear when typing in a file
[ ] GitHub Pull Requests extension installed (publisher: GitHub)
[ ] Pull Requests panel opens (Ctrl+Shift+P → "Focus on Pull Requests View")
```

---

## Other GitHub Access Methods (Reference Only)

This workshop focuses entirely on GitHub.com in the browser and VS Code. However, you should be aware that other ways to work with GitHub exist. We list them here for your reference - we will not be teaching these in depth.

### GitHub Desktop

A graphical desktop application for managing repositories, branches, and commits without using the command line.

- Download: [desktop.github.com](https://desktop.github.com/)
- Provides a visual interface for cloning, committing, pushing, and creating PRs
- Has some screen reader support, though the web interface is generally more accessible
- A good option for those who prefer a visual GUI over the command line

### GitHub CLI (`gh`)

A command-line tool that lets you perform nearly any GitHub action directly from your terminal.

```bash
# Examples (reference only - not covered in this workshop)
gh repo clone owner/repo
gh issue create
gh pr create
gh pr review
gh pr merge
```

- Download: [cli.github.com](https://cli.github.com/)
- Excellent for automation and scripting
- Very accessible - terminal/command-line interfaces work well with screen readers
- Full documentation: [cli.github.com/manual](https://cli.github.com/manual/)

### GitHub Copilot CLI (`gh copilot`)

An extension to the GitHub CLI that brings Copilot assistance to the terminal. You can ask it to explain or suggest shell commands in plain English.

```bash
# Reference examples only
gh copilot suggest "how do I undo my last commit"
gh copilot explain "git rebase -i HEAD~3"
```

- Install: `gh extension install github/gh-copilot`
- Documentation: [docs.github.com/en/copilot/github-copilot-in-the-cli](https://docs.github.com/en/copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli)
- Particularly useful for users who prefer a terminal workflow

### Git (the version control system itself)

GitHub is a platform built on top of **Git**, which is the underlying version control system. Git runs locally on your computer via a terminal.

We are not covering Git commands in this workshop. If you want to learn Git, these are excellent starting points:

- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Pro Git book (free)](https://git-scm.com/book/en/v2)
- [GitHub Skills: Introduction to GitHub](https://github.com/skills/introduction-to-github)

---

## Getting Help Before the Event

If you cannot complete any step in this guide before the workshop:

1. **File an issue** - [community-access/git-going-with-github](https://github.com/community-access/git-going-with-github/issues) - we will help you get set up
2. **File an issue in this repository** - describe exactly what step you are on and what is not working
3. **Join the GitHub Accessibility Discussions** - [GitHub Community Accessibility Discussions](https://github.com/orgs/community/discussions/categories/accessibility) - the community is helpful and welcoming

You will not be left behind. Every setup issue we can solve before Day 1 means more time for learning on the day.

---

*Next: [Understanding GitHub's Web Structure](01-understanding-github-web-structure.md)*
*Back: [README](../README.md)*


---

### Supplementary: Git Authentication (tokens, SSH, credential storage)

# Appendix D: Git Authentication
> **Listen to Episode 21:** [Git Authentication](../PODCASTS.md) - a conversational audio overview of this chapter. Listen before reading to preview the concepts, or after to reinforce what you learned.

## SSH Keys & Personal Access Tokens

> **Audience:** This appendix is for contributors who need to configure Git authentication for push access. If you're working entirely through the GitHub web interface or GitHub Desktop, you can skip this. If you're using VS Code with Git command line, this becomes relevant when you want to push commits to your fork.

---

## When You Need Authentication

GitHub requires authentication when you:
- **Push** commits to a repository
- **Clone** a private repository
- **Access** organization repositories with specific permissions

You do **not** need authentication to:
- Clone public repositories
- View public repositories on GitHub.com
- Read issues and pull requests

---

## Two Authentication Methods

### Personal Access Token (PAT)

A Personal Access Token is a password-like string you generate on GitHub and use instead of your account password when Git asks for credentials.

**Pros:**
- Works on all operating systems
- Easy to set up for screen reader users (no command line required)
- Can be scoped to specific permissions
- Easy to revoke if compromised

**Cons:**
- You have to store it securely
- Expires after a set time (you must regenerate)

### SSH Keys

SSH uses public-key cryptography. You generate a key pair on your computer (public + private), upload the public key to GitHub, and Git uses the private key to prove your identity.

**Pros:**
- Once set up, works automatically (no password prompts)
- More secure than tokens
- Never expires

**Cons:**
- Requires command-line setup (less accessible for some screen reader users)
- Slightly more complex initial configuration

---

## Creating a Personal Access Token (Recommended for This Workshop)

**Why this method:** It's screen reader accessible through the GitHub web interface, and you can complete it without command-line Git configuration.

### Step 1: Generate the Token

1. Navigate to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Select **"Tokens (classic)"** from the left sidebar
3. Activate **"Generate new token"** → Select **"Generate new token (classic)"**
4. Give it a descriptive name in the **Note** field: "Workshop Laptop Token"
5. Set expiration: **30 days** or **60 days** (recommended for temporary workshop use)
6. Select scopes:
   - **`repo`** - Full control of private repositories (includes public repo access)
   - **`workflow`** - Update GitHub Actions workflows (if you'll work with Actions)
7. Scroll down and activate **"Generate token"**
8. **CRITICAL:** Copy the token immediately - you cannot see it again

**Screen reader note:** The token appears as a long string in a text field. Select all (`Ctrl+A`), copy (`Ctrl+C`), and paste it into a secure note or password manager.

### Step 2: Store It Securely

**Options:**
- **Password manager** (1Password, Bitwarden, LastPass) - best option
- **Encrypted note** in your operating system's secure notes
- **Plain text file** in an encrypted folder (temporary only)

**Do not:**
- Paste it into a document you sync to cloud storage unencrypted
- Email it to yourself
- Save it in a public GitHub file

### Step 3: Use It

The next time Git asks for your password (when you push, pull from a private repo, or clone a private repo):

```
Username: [your-github-username]
Password: [paste-your-PAT-here]
```

**Windows Git Credential Manager:** Windows will remember this token automatically after your first use. You only paste it once.

**macOS Keychain:** macOS will offer to save it to Keychain. Select "Always Allow."

**Linux:** You can configure Git to cache credentials:
```bash
git config --global credential.helper cache
```

---

## Setting Up SSH Keys (Alternative Method)

If you prefer SSH and are comfortable with terminal commands:

### Step 1: Check If You Already Have a Key

```bash
ls -al ~/.ssh
```

Look for files named `id_rsa.pub`, `id_ed25519.pub`, or similar. If you see these, you already have a key.

### Step 2: Generate a New SSH Key

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

When prompted:
- Press `Enter` to accept the default file location
- Enter a passphrase (optional but recommended)

**Screen reader note:** Git will print output showing where the key was saved. It generates two files: `id_ed25519` (private) and `id_ed25519.pub` (public).

### Step 3: Copy Your Public Key

**Windows (PowerShell):**
```powershell
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```

**macOS:**
```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

**Linux:**
```bash
cat ~/.ssh/id_ed25519.pub
# Manually select and copy the output
```

### Step 4: Add to GitHub

1. Navigate to [github.com/settings/keys](https://github.com/settings/keys)
2. Select **"New SSH key"**
3. **Title:** "Workshop Laptop SSH Key"
4. **Key type:** Authentication Key
5. **Key:** Paste your public key (should start with `ssh-ed25519` or `ssh-rsa`)
6. Select **"Add SSH key"**
7. Confirm with your password or 2FA code

### Step 5: Test the Connection

```bash
ssh -T git@github.com
```

You should see: `Hi username! You've successfully authenticated...`

### Step 6: Use SSH URLs

When cloning or adding remotes, use SSH URLs instead of HTTPS:

```
# SSH format:
git@github.com:owner/repo.git

# Instead of HTTPS:
https://github.com/owner/repo.git
```

---

## Switching Between HTTPS and SSH

If you cloned with HTTPS but want to use SSH (or vice versa), update the remote:

**Check your current remote:**
```bash
git remote -v
```

**Switch to SSH:**
```bash
git remote set-url origin git@github.com:your-username/repo.git
```

**Switch to HTTPS:**
```bash
git remote set-url origin https://github.com/your-username/repo.git
```

---

## Troubleshooting

### "Authentication failed" when pushing

**Problem:** Your token expired or is incorrect.

**Solution:**
- Generate a new PAT
- Clear your credential cache (Windows: Credential Manager; macOS: Keychain; Linux: `git credential-cache exit`)
- Try pushing again - Git will ask for credentials

### "Permission denied (publickey)"

**Problem:** SSH key not properly set up.

**Solution:**
- Verify your key is added to GitHub: [github.com/settings/keys](https://github.com/settings/keys)
- Check SSH agent is running: `ssh-add -l`
- Add your key to the agent: `ssh-add ~/.ssh/id_ed25519`

### "Host key verification failed"

**Problem:** SSH doesn't recognize GitHub's host key.

**Solution:**
```bash
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

---

## Security Best Practices

1. **Never share your private key or PAT** - treat them like passwords
2. **Use scoped PATs** - only grant the minimum permissions needed
3. **Set expiration dates** on PATs - regenerate periodically
4. **Use a passphrase** on SSH keys - adds another layer of security
5. **Revoke old tokens** when you're done with a project or device
6. **Don't commit tokens or keys to Git** - use `.gitignore` for config files

---

## Commit Signing - Verified Badges and Vigilant Mode

When you push commits to GitHub, each commit shows a small badge: **Verified** or **Unverified**. This badge tells anyone viewing the commit history whether the commit was cryptographically signed - proving it came from you and was not tampered with.

### Why It Matters

Open source maintainers increasingly require signed commits before merging. Some repositories enforce this with branch protection rules. If you contribute to `accessibility-agents` and your commits show "Unverified," a maintainer may ask you to sign them before the PR can be merged.

### Two Methods for Signing Commits

#### SSH Signing (simpler - reuses your existing SSH key)

If you already have an SSH key set up for authentication, you can use it for signing too.

**Step 1: Configure Git to use SSH for signing:**
```bash
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519.pub
git config --global commit.gpgsign true
```

**Step 2: Add your SSH key as a signing key on GitHub:**
1. Navigate to [github.com/settings/ssh](https://github.com/settings/ssh)
2. Select **"New SSH key"**
3. Change **"Key type"** to **"Signing Key"** (not Authentication Key)
4. Paste your public key and save

Your commits now show the **Verified** badge in GitHub's commit history.

#### GPG Signing (traditional method)

**Step 1: Generate a GPG key:**
```bash
gpg --full-generate-key
# Choose: RSA and RSA, 4096 bits, never expires
# Enter your GitHub email address when prompted
```

**Step 2: Find your key ID:**
```bash
gpg --list-secret-keys --keyid-format=long
# Output includes: sec   rsa4096/XXXXXXXXXXXXXXXX
# The X's are your key ID
```

**Step 3: Export the public key:**
```bash
gpg --armor --export YOUR_KEY_ID
# Copies the block starting with -----BEGIN PGP PUBLIC KEY BLOCK-----
```

**Step 4: Add to GitHub:**
1. Navigate to [github.com/settings/gpg-keys](https://github.com/settings/gpg-keys)
2. Select **"New GPG key"** → paste the exported public key

**Step 5: Configure Git to sign all commits:**
```bash
git config --global user.signingkey YOUR_KEY_ID
git config --global commit.gpgsign true
```

### Vigilant Mode

GitHub has an optional setting called **Vigilant Mode** (in Settings → SSH and GPG Keys → Vigilant mode). When enabled, GitHub marks **all** commits from your account as "Unverified" unless they are signed - even commits that were previously shown without a badge.

**Why some maintainers enable Vigilant Mode:**
- It makes tampered or spoofed commits immediately obvious
- It signals that the repository cares about commit provenance

**What you see as a contributor:**
- Every unsigned commit you push will show a yellow "Unverified" badge
- This is a visual signal - commits can still be pushed, but maintainers may block the merge

**To read verification badges with a screen reader:**
- Navigate to the repository's commit history (Code tab → Commits link)
- Each commit row contains either "Verified" or "Unverified" as a badge element
- NVDA/JAWS: the badge is inside the commit row; use `↓` to read through each row and the badge text is read inline
- VoiceOver: use `VO+Right` through the commit row; the badge is read as a button with the text "Verified" (clicking it shows the certificate)

**Workshop recommendation:** SSH signing is simpler to set up than GPG and reuses your existing key. If you have 10 minutes, configure it before Day 2 - every commit you push to accessibility-agents will show as Verified.

---

## For This Workshop

**Recommended approach:**
1. Generate a Personal Access Token with 30-day expiration
2. Scope: `repo` and `workflow`
3. Store it in your password manager
4. Use it when VS Code or Git asks for a password

SSH keys are great for long-term use, but PATs are faster to set up and more accessible for screen reader users during a time-constrained workshop.

---

*Return to: [Pre-Workshop Setup](00-pre-workshop-setup.md) | [Resources](appendix-u-resources.md)*
