#!/usr/bin/env python3
"""
Invite all students in the roster to the Community-Access GitHub organization.
This script uses the GitHub CLI (gh) to send invitations.

Usage:
  python scripts/invite_students.py
"""

import json
import subprocess
import sys
import time
from pathlib import Path

def get_students():
    """Load all students from the roster."""
    roster_path = Path('.github/data/student-roster.json')
    with open(roster_path, 'r') as f:
        roster = json.load(f)
    return roster['students']

def invite_student_to_org(username, org_name="Community-Access"):
    """Invite a single student to the GitHub organization using gh CLI."""
    try:
        # Use gh CLI to invite user to organization
        # Command: gh api /orgs/{org}/invitations -f invitee_login={username} -f role=member
        cmd = [
            'gh', 'api',
            f'/orgs/{org_name}/invitations',
            '-f', f'invitee_login={username}',
            '-f', 'role=member'
        ]
        
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=10
        )
        
        if result.returncode == 0:
            return True, "invited"
        elif 'Member' in result.stderr or 'member' in result.stderr:
            return True, "already_member"
        elif 'not found' in result.stderr.lower():
            return False, "user_not_found"
        else:
            return False, result.stderr[:100]
            
    except subprocess.TimeoutExpired:
        return False, "timeout"
    except FileNotFoundError:
        return False, "gh_cli_not_found"
    except Exception as e:
        return False, str(e)[:100]

def main():
    org_name = "Community-Access"
    
    # Check gh CLI is available
    try:
        result = subprocess.run(['gh', '--version'], capture_output=True, timeout=5)
        if result.returncode != 0:
            print(f"[ERROR] GitHub CLI (gh) not available. Install from: https://cli.github.com")
            sys.exit(1)
    except FileNotFoundError:
        print(f"[ERROR] GitHub CLI (gh) not found. Install from: https://cli.github.com")
        sys.exit(1)
    
    # Check authentication
    try:
        result = subprocess.run(['gh', 'auth', 'status'], capture_output=True, text=True, timeout=5)
        if result.returncode != 0:
            print(f"[ERROR] Not authenticated with gh CLI. Run: gh auth login")
            sys.exit(1)
        print(f"[OK] Authenticated with GitHub CLI")
    except Exception as e:
        print(f"[ERROR] Auth check failed: {e}")
        sys.exit(1)
    
    # Load students
    students = get_students()
    total = len(students)
    
    print(f"\n{'='*70}")
    print(f"INVITING {total} STUDENTS TO {org_name.upper()} ORGANIZATION")
    print(f"{'='*70}\n")
    
    invited = 0
    already_members = 0
    failed = []
    
    for idx, student in enumerate(students, 1):
        username = student['username']
        
        # Invite the student
        success, status = invite_student_to_org(username, org_name)
        
        if success:
            if status == "already_member":
                print(f"[{idx:02d}/{total}] @{username:30s} [MEMBER]  Already in organization")
                already_members += 1
            else:
                print(f"[{idx:02d}/{total}] @{username:30s} [OK]      Invitation sent")
                invited += 1
        else:
            print(f"[{idx:02d}/{total}] @{username:30s} [FAIL]    {status}")
            failed.append((username, status))
        
        # Rate limiting - small delay between invitations
        if idx < total:
            time.sleep(0.2)
    
    print(f"\n{'='*70}")
    print(f"RESULTS:")
    print(f"  Invitations sent:  {invited}")
    print(f"  Already members:   {already_members}")
    print(f"  Failed:            {len(failed)}")
    print(f"  Total processed:   {total}")
    print(f"{'='*70}\n")
    
    if failed:
        print("[WARNING] The following students had issues:\n")
        for username, error in failed:
            print(f"  @{username:30s} - {error}")
        print()
    
    if invited + already_members == total:
        print("[SUCCESS] All students are either invited or already members!")
        print("\n[NEXT STEPS]:")
        print("  1. Students will receive GitHub organization invitations via email")
        print("  2. They must click the link in the email to accept (valid for 7 days)")
        print("  3. After students join, run:")
        print("     python scripts/batch_create_issues.py")
        print("  4. This will create and assign one issue per student")
        print()
        return 0
    else:
        print(f"[WARNING] {len(failed)} students could not be invited. Check them manually.")
        print(f"[URL] https://github.com/orgs/{org_name}/people")
        return 1

if __name__ == '__main__':
    sys.exit(main())
