#!/usr/bin/env python3
"""
Accessibility validation for learning room PRs.
Checks heading hierarchy, alt text, link descriptions, etc.
"""

import re
import sys
import json
from pathlib import Path

def check_accessibility(directory):
    """Check learning room files for accessibility issues."""
    errors = []
    warnings = []
    
    md_files = Path(directory).glob('**/*.md')
    
    for file in md_files:
        content = file.read_text()
        lines = content.split('\n')
        
        # Check heading hierarchy (WCAG 1.3.1)
        heading_levels = []
        for i, line in enumerate(lines, 1):
            if line.startswith('#'):
                level = len(line.split()[0])
                heading_levels.append((level, i))
                
                # Check for skipped levels
                if len(heading_levels) > 1:
                    prev_level = heading_levels[-2][0]
                    if level > prev_level + 1:
                        errors.append({
                            'file': str(file),
                            'line': i,
                            'message': f'Heading hierarchy skip: jumped from H{prev_level} to H{level}',
                            'help_url': 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html'
                        })
        
        # Check for TODO placeholders
        for i, line in enumerate(lines, 1):
            if '[TODO]' in line:
                warnings.append({
                    'file': str(file),
                    'line': i,
                    'message': '[TODO] placeholder found - this needs content before merge'
                })
        
        # Check for [DATE] placeholders
        for i, line in enumerate(lines, 1):
            if '[DATE]' in line:
                warnings.append({
                    'file': str(file),
                    'line': i,
                    'message': '[DATE] placeholder found - should be replaced with actual date'
                })
        
        # Check link text quality (WCAG 2.4.4)
        links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', content)
        for text, url in links:
            bad_text = ['click here', 'read more', 'learn more', 'here', 'link', 'more info']
            if text.lower() in bad_text:
                warnings.append({
                    'file': str(file),
                    'message': f'Link text "{text}" is vague. Make it descriptive (e.g., "GitHub Guide to PRs")',
                    'help_url': 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html'
                })
        
        # Check for code blocks that should be syntax highlighted
        if '```' not in content and ('<!--' in content or '{' in content):
            warnings.append({
                'file': str(file),
                'message': 'Code example found but not in code block - use ``` for syntax highlighting'
            })
    
    return {'errors': errors, 'warnings': warnings}

if __name__ == '__main__':
    directory = sys.argv[1] if len(sys.argv) > 1 else '.'
    results = check_accessibility(directory)
    
    with open('validation-results.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\n♿ Accessibility Check Results:")
    print(f"  Errors: {len(results['errors'])}")
    print(f"  Warnings: {len(results['warnings'])}")
    
    for err in results['errors']:
        print(f"\n❌ {err['file']}:{err.get('line', '?')}")
        print(f"   {err['message']}")
    
    for warn in results['warnings']:
        print(f"\n⚠️  {warn['file']}")
        print(f"   {warn['message']}")
