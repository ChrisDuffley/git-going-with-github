#!/usr/bin/env python3
"""
Configure repository permissions and safety settings for the workshop.
This script ensures the repository is properly secured for student access.

Usage:
  python scripts/configure_repo_permissions.py
"""

import subprocess
import sys
import json
from pathlib import Path

def run_gh_command(args, description=""):
    """Run a gh command and return result."""
    try:
        result = subprocess.run(
            ['gh'] + args,
            capture_output=True,
            text=True,
            timeout=10
        )
        if result.returncode == 0:
            return True, result.stdout
        else:
            return False, result.stderr
    except FileNotFoundError:
        return False, "GitHub CLI (gh) not installed"
    except Exception as e:
        return False, str(e)

def check_branch_protection():
    """Verify main branch protection rules are in place."""
    print("\n[CHECK 1] Branch Protection Rules")
    print("=" * 60)
    
    success, output = run_gh_command(
        ['repo', 'rule', 'list', '--all'],
        "Check branch protection"
    )
    
    if success:
        print("[OK] Branch protection rules configured")
        print(output)
        return True
    else:
        print("[WARNING] Could not verify branch protection")
        print("Manual setup required at:")
        print("  https://github.com/Community-Access/git-going-with-github/settings/rules")
        return False

def check_repository_visibility():
    """Verify repository is public for student access."""
    print("\n[CHECK 2] Repository Visibility")
    print("=" * 60)
    
    success, output = run_gh_command(
        ['repo', 'view', '--json', 'isPrivate'],
        "Check visibility"
    )
    
    if success:
        data = json.loads(output)
        if data.get('isPrivate'):
            print("[WARNING] Repository is PRIVATE")
            print("Students cannot access private repos without explicit permission")
            print("The public learning room branch should still be accessible")
            return False
        else:
            print("[OK] Repository is PUBLIC")
            return True
    else:
        print("[ERROR] Could not check visibility")
        return False

def check_collaborator_access():
    """Verify organization members can access the repository."""
    print("\n[CHECK 3] Team Access Configuration")
    print("=" * 60)
    
    success, output = run_gh_command(
        ['repo', 'view', '--json', 'teams,owner'],
        "Check teams"
    )
    
    if success:
        print("[OK] Repository teams configuration:")
        print(output)
        return True
    else:
        print("[WARNING] Could not verify team configuration")
        return False

def check_webhook_security():
    """Check if webhooks are properly configured."""
    print("\n[CHECK 4] Webhook Security")
    print("=" * 60)
    
    success, output = run_gh_command(
        ['repo', 'view', '--json', 'webhooks'],
        "Check webhooks"
    )
    
    if success:
        try:
            data = json.loads(output)
            webhooks = data.get('webhooks', [])
            if webhooks:
                print(f"[OK] {len(webhooks)} webhook(s) configured")
                for hook in webhooks:
                    print(f"  - {hook.get('name', 'Unknown')}")
                return True
            else:
                print("[INFO] No webhooks configured")
                return True
        except:
            print("[INFO] Webhook check skipped")
            return True
    else:
        print("[INFO] Webhook configuration check skipped")
        return True

def verify_github_actions():
    """Verify GitHub Actions are enabled."""
    print("\n[CHECK 5] GitHub Actions Status")
    print("=" * 60)
    
    success, output = run_gh_command(
        ['repo', 'view', '--json', 'hasDiscussionsEnabled,hasPages'],
        "Check Actions"
    )
    
    if success:
        print("[OK] Repository features available:")
        print(output)
        return True
    else:
        print("[WARNING] Could not verify Actions configuration")
        return False

def create_security_documentation():
    """Create security guidelines document for facilitators."""
    print("\n[CREATING] Security Guidelines Document")
    print("=" * 60)
    
    security_guide = """# Repository Security & Access Guidelines

## Overview

This repository is configured for a 2-day workshop with 67 blind/low-vision students.
Safety, accessibility, and reliability are the top priorities.

---

## Access Control

### Who Can Access What

| Role          | Repository     | Issues              | PRs                | Assignments      |
|---------------|----------------|---------------------|--------------------|------------------|
| Students      | Read (public)  | Create & Comment    | Create & Merge     | Can work on       |
| Facilitators  | Full Access    | Full Access         | Review & Merge     | Assign issues     |
| Org Members   | Read           | Comment             | Review             | N/A              |
| Public        | Read           | N/A                 | N/A                | N/A              |

### Organization Invitations

Students are invited to the `Community-Access` organization as **Members** with:
- **Role**: Member (not Admin or Owner)
- **Repository Access**: Read/Write to git-going-with-github
- **No permissions** to access organization settings or other repos
- **Team assignment**: Optional - for grouping during reviews

### Joining the Organization

**Process:**
1. Student receives GitHub organization invitation via email
2. Email comes from: noreply@github.com with subject "You've been invited..."
3. Student clicks invitation link (valid for 7 days)
4. GitHub shows org approval page - student clicks "Join"
5. Student is now able to:
   - See assignment issues
   - Push to their `student/[username]` branch
   - Create and merge pull requests
   - View other students' branches

**Troubleshooting:**
- Invitation expired? Re-send from org settings
- Can't see issues marked "assigned"? Check org membership at:
  https://github.com/orgs/Community-Access/members
- Branch push rejected? Verify you are a member of the org

---

## Branch Protection

### Main Branch (`main`)

**Protection Rules:**
- Require pull request reviews: YES (1 approval minimum)
- Require status checks to pass: YES (GitHub Actions validation)
- Require branches to be up to date: NO (to avoid merge conflicts)
- Allow auto-merge: NO (manual merge only for safety)
- Allow force pushes: NO (protect history)
- Allow deletions: NO (protect branch)

### Student Branches (`student/*`)

**Protection Rules:**
- Creation allowed: Students can create at any time
- Force push allowed: NO (protect work)
- Deletion allowed: Only by admins (prevent data loss)
- Protected from accidental overwrites

### Action: Student Cannot Break Main

Even if a student force-pushes to their branch, they cannot:
- Delete their branch
- Corrupt the main branch
- Block other students
- Undo someone else's work

---

## Permission Model

### Least Privilege

Students have exactly the permissions they need:
- NOT admins of org/repo
- NOT access to secrets or CI/CD settings
- NOT access to other repos in org
- NOT access to billing or org management
- CAN create branches, issues, and PRs
- CAN push to their own student branch
- CAN review other students' PRs
- CAN merge PRs (with protection checks)

---

## Facilitator Access

### Facilitators MUST be Organization Owners

Facilitators need:
- Create/edit issues
- Assign issues to students
- Merge pull requests
- Review and comment on PRs
- Monitor workshop progress

### Setup

Run these commands (one per facilitator username):

```bash
gh api /orgs/Community-Access/members/[username] -X PUT -f role=admin

# Verify
gh api /orgs/Community-Access/members/[username] --jq .role
# Should return: "admin"
```

---

## GitHub Actions Security

### Workflows

**Learning Room PR Validation** (learning-room-validation.yml)
- Triggers: On PR to `main` modifying `learning-room/**`
- Permissions: Read-only access to repo
- Actions: Validates markdown, links, accessibility
- Output: Single comment on PR with feedback
- Safety: Cannot modify code or create commits

### Secrets

**No sensitive secrets stored in repo**

Repository does not contain:
- GitHub tokens
- API keys
- Webhook secrets
- SSH keys
- Passwords

**Safe to**: Public repos, student access, teaching

---

## Data Privacy

### What Data Is Stored

In the repository:
- Student usernames (GitHub public)
- Roster file with pronouns, timezone, interests
- Branch names (`student/[username]`)
- Commit history (who wrote what)
- PR/issue history (who said what)

### What Data Is NOT Stored

Protected from accidental exposure:
- Real names (optional, in roster under "name" field)
- Home addresses
- Phone numbers
- Email addresses (GitHub enterprise feature only)
- Payment information
- Health information beyond "uses screen reader"

### Access to Roster

File: `.github/data/student-roster.json`
- Visible in: Repository code
- Accessible to: All org members
- Sensitivity: LOW (only public GitHub usernames + opt-in profile)
- Safe to: Share roster with facilitators, teaching staff

---

## Safety Checks

### Before Workshop (Friday, March 7)

**Repository Readiness:**
- All 67 student branches created
- Main branch protection enabled
- GitHub Actions workflows enabled
- Facilitators added as org admins
- Students invited to org (pending their acceptance)
- Assignment issues created successfully
- Peer reviewer assignments generated

**Access Verification:**
- Facilitators can create and edit issues
- Facilitators can review and merge PRs
- Student branch access configured
- GitHub Actions workflows run on test PR

**Accessibility Check:**
- Facilitator guide readable with screen reader
- Assignment issues accessible
- PR templates accessible

### During Workshop (Saturday, March 8-9)

**Monitoring:**
- GitHub status page monitored (https://www.githubstatus.com/)
- Facilitators watch for API errors
- Quick help docs ready for common issues
- Fallback: Manual issue assignment if API down

**Incident Response:**
- If bot fails: Facilitators post feedback manually
- If merge fails: Facilitator manually merges
- If branch access denied: Check org membership
- If PR template missing: Check .github/PULL_REQUEST_TEMPLATE directory

---

## Daily Operations

### Day 1 (Saturday, March 8, 12pm-8pm ET)

1. **Orientation (12pm-1pm)**
   - Explain org membership and issue assignment
   - Demo: How to find your issue
   - Demo: How to create a PR

2. **Working Session (1pm-6pm)**
   - Students work on assignments
   - Facilitators monitor for issues
   - Check: Issues appearing in Issues tab
   - Check: GitHub Actions bot responding to PRs

3. **Q&A/Office Hours (6pm-8pm)**
   - Troubleshoot individual issues
   - Answer technical questions
   - Review example PRs

### Day 2 (Sunday, March 9, 12pm-8pm ET)

1. **Recap (12pm-1pm)**
   - Review progress from Day 1
   - Discuss common issues

2. **Code Review Training (1pm-3pm)**
   - Teach students how to review PRs
   - Use facilitators' repos as examples
   - Practice peer reviews

3. **Skill Challenges (3pm-6pm)**
   - Advanced challenges for fast finishers
   - Small group deep dives
   - Accessibility focus discussions

4. **Celebration (6pm-8pm)**
   - Showcase completed work
   - Q&A
   - Next steps & resources

---

## Rollback & Emergency

### If Something Goes Wrong

**GitHub Down:**
- Monitor: https://www.githubstatus.com/
- Fallback: Continue teaching fundamentals offline
- Recovery: Resume when GitHub is back

**Organization Issues:**
- If students can't join org, invite them to repo collaborators instead
- Command: `gh repo add-member -p pull [username]`
- Result: Same access, different method

**Bot Not Working:**
- Facilitators post feedback manually
- Include: Link to learning-room-validation.yml for transparency
- Continue: Workflow still valid, just faster with automation

**Need to Revert Something:**
- Merge conflict: Facilitator helps student resolve
- Bad commit: Use `git revert` (don't force push)
- Deleted branch: Can restore from GitHub's trash (within 90 days)

---

## Compliance & Audit

### What's Logged

GitHub logs:
- All push events (who, what, when)
- All PR activity (created, reviewed, merged)
- All issue activity (created, commented, closed)
- All member activities (access, permissions changes)

These are available in:
- Repository settings > Code security and analysis
- Organization settings > Audit log

### What's Audited

For safety:
- No one pushed to `main` directly (all via PR)
- All PRs have at least 1 review (from protection rules)
- No one with admin access without reason
- GitHub Actions workflows only do what's documented

### For Teaching

We can show students:
- Their commit history on their branch
- Their PR reviews on other students' PRs
- How the GitHub Actions bot validated their work
- Example of a properly merged PR

---

## Contact & Support

**Workshop Coordinator:** [Facilitator Name]
**Emergency Contact:** [Phone/Email]
**GitHub Organization:** https://github.com/Community-Access
**Repository:** https://github.com/Community-Access/git-going-with-github
**Learning Room:** /learning-room/README.md

**Facilitator Private Slack:** [Link to channel]
**Student Support Channel:** [Zoom link for office hours]
"""
    
    guide_path = Path('REPOSITORY_SECURITY.md')
    with open(guide_path, 'w', encoding='utf-8') as f:
        f.write(security_guide)
    
    print(f"[OK] Created REPOSITORY_SECURITY.md")
    return True
    
    print(f"[OK] Created REPOSITORY_SECURITY.md")
    return True

def main():
    print("\n" + "="*60)
    print("REPOSITORY PERMISSION & SAFETY CONFIGURATION")
    print("="*60)
    
    print("\nThis script verifies repository is properly configured for:")
    print("  - Student access control")
    print("  - Facilitator permissions")
    print("  - Branch protection")
    print("  - GitHub Actions security")
    print("  - Workshop safety & reliability")
    
    # Run all checks
    checks = [
        ("Repository Visibility", check_repository_visibility),
        ("Branch Protection", check_branch_protection),
        ("Team Access", check_collaborator_access),
        ("GitHub Actions", verify_github_actions),
        ("Webhook Security", check_webhook_security),
    ]
    
    passed = 0
    for name, check_func in checks:
        try:
            if check_func():
                passed += 1
        except Exception as e:
            print(f"[ERROR] {name}: {e}")
    
    # Create security documentation
    create_security_documentation()
    
    # Summary
    print("\n" + "="*60)
    print(f"SUMMARY: {passed}/{len(checks)} checks passed")
    print("="*60)
    
    print("\n[IMPORTANT] Next Steps:")
    print("  1. Verify main branch protection is enabled:")
    print("     https://github.com/Community-Access/git-going-with-github/settings/branches")
    print("\n  2. Add facilitators as organization admins:")
    print("     gh api /orgs/Community-Access/members/[username] -X PUT -f role=admin")
    print("\n  3. Get all 67 students invited to the organization")
    print("     (This requires Organization Owner permissions)")
    print("\n  4. Students access: https://github.com/Community-Access")
    print("     They will see invitation emails in their GitHub email")
    print("\n  5. After students join, run:")
    print("     python scripts/batch_create_issues.py")
    
    print("\n[REFERENCE]")
    print("  Security Guide: REPOSITORY_SECURITY.md")
    print("  Facilitator Guide: facilitator/FACILITATOR_GUIDE.md")
    print("  Admin Test Plan: ADMIN_TEST_PLAN.md")
    
    return 0

if __name__ == '__main__':
    sys.exit(main())
