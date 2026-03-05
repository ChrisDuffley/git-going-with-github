#!/usr/bin/env python3
"""
Add a new student to the roster and invite all students to the GitHub organization.
Usage: python scripts/add_student_and_invite.py <github_username>
"""

import json
import subprocess
import sys
from datetime import datetime
from pathlib import Path

def add_student_to_roster(username):
    """Add a new student to the roster if not already present."""
    roster_path = Path('.github/data/student-roster.json')
    
    with open(roster_path, 'r') as f:
        roster = json.load(f)
    
    # Check if student already exists
    existing = [s for s in roster['students'] if s['username'].lower() == username.lower()]
    if existing:
        print(f"[INFO] Student {username} already exists in roster")
        return False
    
    # Create new student entry
    new_student = {
        "username": username,
        "name": username,
        "pronouns": "they/them",
        "timezone": "Unknown",
        "screenReader": True,
        "screenReaderType": "Unknown",
        "interests": ["accessibility", "open-source"],
        "joinedDate": datetime.now().strftime("%Y-%m-%d"),
        "mergedPRs": 0,
        "currentLevel": "Beginner",
        "badges": [],
        "assignedIssue": None
    }
    
    roster['students'].append(new_student)
    
    # Sort students by username for consistency
    roster['students'].sort(key=lambda s: s['username'].lower())
    
    # Save updated roster
    with open(roster_path, 'w') as f:
        json.dump(roster, f, indent=2)
    
    print(f"[OK] Added {username} to roster (total: {len(roster['students'])} students)")
    return True

def invite_all_students_to_org(org_name="Community-Access"):
    """Invite all students in roster to the GitHub organization."""
    roster_path = Path('.github/data/student-roster.json')
    
    with open(roster_path, 'r') as f:
        roster = json.load(f)
    
    students = roster['students']
    total = len(students)
    
    print(f"\n[START] Inviting {total} students to {org_name} organization...")
    print("=" * 60)
    
    invited = 0
    failed = 0
    already_member = 0
    
    for idx, student in enumerate(students, 1):
        username = student['username']
        
        # Try to invite the user to the org
        cmd = f'gh api orgs/{org_name}/invitations --input - -H "Accept: application/vnd.github+json"'
        
        # Use the web API to invite
        try:
            # First check if user is already a member
            check_result = subprocess.run(
                f'gh api orgs/{org_name}/members/{username}',
                shell=True,
                capture_output=True,
                text=True,
                timeout=5
            )
            
            if check_result.returncode == 0:
                print(f"[{idx:02d}/{total}] @{username:30s} [MEMBER] Already in org")
                already_member += 1
                continue
            
            # Send invitation
            invite_data = f'{{"invitee_id": 0, "invitee_login": "{username}", "role": "member", "teams": []}}'
            
            result = subprocess.run(
                f'gh api orgs/{org_name}/invitations --input - -H "Accept: application/vnd.github+json" <<< \'{{"invitee_login": "{username}", "role": "member"}}\'',
                shell=True,
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if result.returncode == 0 or 'invitation was sent' in result.stdout.lower():
                print(f"[{idx:02d}/{total}] @{username:30s} [INVITE SENT]")
                invited += 1
            elif 'already' in result.stderr.lower() or 'member' in result.stderr.lower():
                print(f"[{idx:02d}/{total}] @{username:30s} [MEMBER] Already in org")
                already_member += 1
            else:
                print(f"[{idx:02d}/{total}] @{username:30s} [FAIL] {result.stderr.strip()[:40]}")
                failed += 1
                
        except subprocess.TimeoutExpired:
            print(f"[{idx:02d}/{total}] @{username:30s} [TIMEOUT]")
            failed += 1
        except Exception as e:
            print(f"[{idx:02d}/{total}] @{username:30s} [ERROR] {str(e)[:40]}")
            failed += 1
    
    print("=" * 60)
    print(f"[RESULTS] Invited: {invited} | Already Members: {already_member} | Failed: {failed} | Total: {total}")
    
    if failed > 0:
        print(f"\n[WARNING] {failed} invitations failed. Check network and permissions.")
        print(f"[TIP] You may need to use GitHub web UI for manual invitations.")
        print(f"[URL] https://github.com/orgs/{org_name}/people")

def create_student_branch(username):
    """Create a git branch for the student if it doesn't exist."""
    try:
        result = subprocess.run(
            f'git branch student/{username}',
            shell=True,
            capture_output=True,
            text=True,
            timeout=5
        )
        
        if result.returncode == 0:
            # Push the new branch
            subprocess.run(
                f'git push origin student/{username}',
                shell=True,
                capture_output=True,
                text=True,
                timeout=10
            )
            return True
        elif 'already exists' in result.stderr:
            return False  # Branch already exists
        else:
            print(f"[WARN] Could not create branch for {username}: {result.stderr}")
            return False
    except Exception as e:
        print(f"[WARN] Error creating branch: {e}")
        return False

def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/add_student_and_invite.py <github_username> [--no-branch]")
        print("\nExamples:")
        print("  python scripts/add_student_and_invite.py beckyk102125")
        print("  python scripts/add_student_and_invite.py beckyk102125 --no-branch")
        sys.exit(1)
    
    username = sys.argv[1]
    create_branch = '--no-branch' not in sys.argv
    
    print(f"\n[STEP 1] Adding {username} to student roster...")
    added = add_student_to_roster(username)
    
    if create_branch and added:
        print(f"\n[STEP 2] Creating git branch for {username}...")
        if create_student_branch(username):
            print(f"[OK] Created and pushed student/{username} branch")
        else:
            print(f"[INFO] Branch may already exist, skipping")
    
    print(f"\n[STEP 3] Inviting all students to organization...")
    invite_all_students_to_org()
    
    print("\n[COMPLETE] Student addition and organization invitations finished!")
    print("\n[NEXT STEPS]:")
    print("  1. Students will receive GitHub invitations via email")
    print("  2. They must click the email link to accept the invitation")
    print("  3. Once joined, they can access assignment issues")
    print("  4. Run: python scripts/batch_create_issues.py (once students join)")

if __name__ == '__main__':
    main()
