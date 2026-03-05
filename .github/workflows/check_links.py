#!/usr/bin/env python3
"""
Link validation script for GitHub Actions workflow.
Checks for broken links in learning room markdown files.
"""

import re
import sys
from pathlib import Path

def check_links(directory):
    """Check for broken links in markdown files."""
    errors = []
    warnings = []
    
    md_files = Path(directory).glob('**/*.md')
    
    for file in md_files:
        content = file.read_text()
        
        # Find all markdown links: [text](url)
        links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', content)
        
        for text, url in links:
            # Skip external URLs (start with http)
            if url.startswith('http'):
                continue
            
            # Check local files
            target = (file.parent / url).resolve()
            
            # Check for common typos
            if url.startswith('htp'):
                errors.append({
                    'file': str(file),
                    'message': f'Typo in URL: "{url}" should be "https://..."',
                    'help_url': 'https://github.com/markdownlint/markdownlint/rules/MD001'
                })
            
            # Check if file exists
            elif not url.startswith('#') and not target.exists():
                warnings.append({
                    'file': str(file),
                    'message': f'Link to "{url}" - file may not exist'
                })
            
            # Check link text (WCAG 2.4.4)
            if text.lower() in ['click here', 'read more', 'learn more', 'here', 'link', 'more']:
                warnings.append({
                    'file': str(file),
                    'message': f'Link text "{text}" is not descriptive. Use descriptive text that explains where the link goes.',
                    'help_url': 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html'
                })
    
    return {'errors': errors, 'warnings': warnings}

if __name__ == '__main__':
    directory = sys.argv[1] if len(sys.argv) > 1 else '.'
    results = check_links(directory)
    
    import json
    with open('validation-results.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    # Print summary
    print(f"\n🔗 Link Check Results:")
    print(f"  Errors: {len(results['errors'])}")
    print(f"  Warnings: {len(results['warnings'])}")
    
    for err in results['errors']:
        print(f"\n❌ {err['file']}")
        print(f"   {err['message']}")
    
    for warn in results['warnings']:
        print(f"\n⚠️  {warn['file']}")
        print(f"   {warn['message']}")
