#!/usr/bin/env python3
import json
from datetime import datetime
from pathlib import Path

roster_path = Path('.github/data/student-roster.json')
with open(roster_path, 'r') as f:
    roster = json.load(f)

# Check if already exists
existing = [s for s in roster['students'] if s['username'] == 'beckyk102125']
if existing:
    print('Student beckyk102125 already in roster')
else:
    # Add new student
    new_student = {
        'username': 'beckyk102125',
        'name': 'beckyk102125',
        'pronouns': 'they/them',
        'timezone': 'Unknown',
        'screenReader': True,
        'screenReaderType': 'Unknown',
        'interests': ['accessibility', 'open-source'],
        'joinedDate': datetime.now().strftime('%Y-%m-%d'),
        'mergedPRs': 0,
        'currentLevel': 'Beginner',
        'badges': [],
        'assignedIssue': None
    }
    
    roster['students'].append(new_student)
    roster['students'].sort(key=lambda s: s['username'].lower())
    
    with open(roster_path, 'w') as f:
        json.dump(roster, f, indent=2)
    
    print('Added beckyk102125 to roster')

print(f'Total students: {len(roster["students"])}')
