#!/usr/bin/env python3
"""Generate SVG diagram images from ASCII art for wiki rendering."""
import html
import os

CHAR_W = 8.8
LINE_H = 22
PAD_X = 24
PAD_Y = 20
BG = "#161b22"
FG = "#e6edf3"
BORDER = "#30363d"
RADIUS = 8
FONT = "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace"

diagrams = {}

diagrams["learning-room-tree"] = [
    "learning-room (SHARED)",
    "\u251c\u2500\u2500 main branch (protected)",
    "\u251c\u2500\u2500 Student A\u2019s PR #12 (open, assigned to Student B for review)",
    "\u251c\u2500\u2500 Student B\u2019s PR #13 (open, assigned to Student C for review)",
    "\u251c\u2500\u2500 Student C\u2019s PR #14 (open, assigned to Student A for review)",
    "\u251c\u2500\u2500 Student A\u2019s PR #11 (merged, closed)",
    "\u2514\u2500\u2500 [More PRs as students contribute]",
]

diagrams["repo-page-layout-01"] = [
    "+----------------------------------------------------------+",
    '|  GLOBAL NAVIGATION (landmark: "Navigation Menu")         |',
    "|  [GitHub] [Search] [Copilot] [PRs] [Issues] [Bell] [You]|",
    "+----------------------------------------------------------+",
    '|  REPOSITORY TABS (landmark: "Repository navigation")     |',
    "|  [Code] [Issues 12] [Pull requests 3] [Actions] [...]   |",
    "+----------------------------------------------------------+",
    "|  REPOSITORY HEADER                                        |",
    "|  owner / repo-name  (this is the H1 heading)             |",
    "|  [Star 42]  [Watch]  [Fork 8]                             |",
    "+-----------------------------+----------------------------+",
    "|  FILE AREA                  |  SIDEBAR                   |",
    "|  Branch: [main v]           |  About                     |",
    "|  [Go to file]  [Code v]     |  Description text          |",
    "|                             |  Topics: accessibility     |",
    "|  FILE TABLE (landmark)      |  Releases: 3               |",
    "|  .github/     3 days ago    |  Contributors: 5           |",
    "|  docs/        2 days ago    |  Languages: Markdown 100%  |",
    "|  README.md    yesterday     |                            |",
    "+-----------------------------+----------------------------+",
    '|  README (landmark: "Repository files navigation")         |',
    "|  # Rendered README content here                           |",
    "|  ...                                                      |",
    "+----------------------------------------------------------+",
    "|  FOOTER                                                   |",
    "+----------------------------------------------------------+",
]

diagrams["repo-page-layout-02"] = [
    "\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510",
    "\u2502  Navigation bar (GitHub global nav)                \u2502",
    "\u2502  avatar menu | Notifications | search               \u2502",
    "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
    "\u2502  Repository header                                  \u2502",
    "\u2502  owner / repo-name  (h1)                            \u2502",
    "\u2502  [Star] [Watch] [Fork] buttons                      \u2502",
    "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
    "\u2502  Repository navigation tabs (landmark)              \u2502",
    "\u2502  < Code > Issues  Pull requests  Actions  etc.      \u2502",
    "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
    "\u2502  File tree / code panel     \u2502  Sidebar              \u2502",
    "\u2502  Branch selector            \u2502  About section        \u2502",
    "\u2502  Files table (t:table)      \u2502  Topics               \u2502",
    "\u2502  Last commit message         \u2502  Releases             \u2502",
    "\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524",
    "\u2502  README.md (rendered)                               \u2502",
    "\u2502  (a separate landmark region)                       \u2502",
    "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518",
]

diagrams["pr-tree"] = [
    "GitHub Pull Requests",
    "\u251c\u2500\u2500 My Pull Requests",
    "\u2502   \u251c\u2500\u2500 Assigned to Me",
    "\u2502   \u251c\u2500\u2500 Created by Me",
    "\u2502   \u251c\u2500\u2500 Waiting for my Review",
    "\u2502   \u2514\u2500\u2500 All Open",
    "\u251c\u2500\u2500 [Repository Name]",
    "\u2502   \u251c\u2500\u2500 Local Pull Request Branches (checked out locally)",
    "\u2502   \u251c\u2500\u2500 All Open Pull Requests",
    "\u2502   \u2514\u2500\u2500 All Closed Pull Requests",
]

diagrams["template-folder-tree"] = [
    "your-repo/",
    "\u2514\u2500\u2500 .github/",
    "    \u251c\u2500\u2500 ISSUE_TEMPLATE/",
    "    \u2502   \u251c\u2500\u2500 bug_report.md         \u2190 Markdown template",
    "    \u2502   \u251c\u2500\u2500 feature_request.md    \u2190 Markdown template",
    "    \u2502   \u251c\u2500\u2500 accessibility-bug.yml \u2190 YAML form template",
    "    \u2502   \u2514\u2500\u2500 config.yml            \u2190 Template chooser configuration",
    "    \u2514\u2500\u2500 pull_request_template.md  \u2190 PR template (singular)",
]

diagrams["workflow-folder-tree"] = [
    "your-repository/",
    "\u2514\u2500\u2500 .github/",
    "    \u2514\u2500\u2500 workflows/",
    "        \u251c\u2500\u2500 ci.yml              \u2190 Runs tests on every push/PR",
    "        \u251c\u2500\u2500 lint.yml            \u2190 Checks code style",
    "        \u251c\u2500\u2500 a11y-scan.yml       \u2190 Accessibility scanning",
    "        \u2514\u2500\u2500 deploy.yml          \u2190 Deploys the site when code merges to main",
]

diagrams["diff-viewer-tree"] = [
    "Accessible Diff Viewer",
    "\u251c\u2500\u2500 Header (file path, change summary)",
    "\u251c\u2500\u2500 Hunk 1 of N",
    "\u2502   \u251c\u2500\u2500 Hunk location (line range)",
    "\u2502   \u251c\u2500\u2500 Unchanged lines (context)",
    "\u2502   \u251c\u2500\u2500 Modified/Added/Removed lines (with prefix)",
    "\u2502   \u2514\u2500\u2500 More unchanged lines (context)",
    "\u251c\u2500\u2500 Hunk 2 of N",
    "\u2502   \u2514\u2500\u2500 ...",
    "\u2514\u2500\u2500 Footer (totals: X additions, Y deletions)",
]


def generate_svg(lines):
    max_len = max(len(line) for line in lines)
    w = int(max_len * CHAR_W + 2 * PAD_X)
    h = int(len(lines) * LINE_H + 2 * PAD_Y)

    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">',
        f'  <rect width="{w}" height="{h}" fill="{BG}" stroke="{BORDER}" stroke-width="1" rx="{RADIUS}"/>',
    ]
    for i, line in enumerate(lines):
        x = PAD_X
        y = PAD_Y + (i + 1) * LINE_H - 5
        escaped = html.escape(line)
        parts.append(
            f'  <text x="{x}" y="{y}" fill="{FG}" '
            f'font-family="{FONT}" font-size="14" '
            f'xml:space="preserve">{escaped}</text>'
        )
    parts.append("</svg>")
    return "\n".join(parts) + "\n"


out_dir = os.path.join(os.path.dirname(__file__), "..", "docs", "images")
os.makedirs(out_dir, exist_ok=True)

for name, lines in diagrams.items():
    svg = generate_svg(lines)
    path = os.path.join(out_dir, f"{name}.svg")
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"Created {path}")

print(f"\nDone: {len(diagrams)} SVGs generated.")
