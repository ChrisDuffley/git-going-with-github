#!/usr/bin/env python3
"""Batch-generate all podcast episodes using local Piper ONNX models.

Iterates every ep*.txt script in podcasts/scripts/ and writes WAVs
to podcasts/audio/.

Usage:
  python -m podcasts.tts.generate_all
  python -m podcasts.tts.generate_all --start 5 --end 10
"""
import sys
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent          # podcasts/
SCRIPTS_DIR = ROOT / 'scripts'


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Batch-generate all podcast episodes')
    parser.add_argument('--start', type=int, default=0, help='First episode number (inclusive)')
    parser.add_argument('--end', type=int, default=999, help='Last episode number (inclusive)')
    args = parser.parse_args()

    scripts = sorted(SCRIPTS_DIR.glob('ep*.txt'))
    if not scripts:
        print(f'No episode scripts found in {SCRIPTS_DIR}')
        sys.exit(1)

    # Filter to requested range
    def ep_num(p: Path) -> int:
        try:
            return int(p.stem.split('-')[0].replace('ep', ''))
        except ValueError:
            return -1

    scripts = [s for s in scripts if args.start <= ep_num(s) <= args.end]
    print(f'Found {len(scripts)} scripts to process (ep{args.start:02d}–ep{args.end:02d})')

    # Import the single-episode generator from our own package
    from podcasts.tts.generate_episode import generate_episode

    success = 0
    failed = []
    for s in scripts:
        try:
            result = generate_episode(s)
            if result:
                success += 1
            else:
                failed.append(s.name)
        except subprocess.CalledProcessError as e:
            print(f'  Piper failed for {s.name} (rc={getattr(e, "returncode", None)})')
            failed.append(s.name)
        except Exception as e:
            print(f'  Error processing {s.name}: {e}')
            failed.append(s.name)

    print(f'\nDone. {success}/{len(scripts)} episodes generated successfully.')
    if failed:
        print(f'Failed: {", ".join(failed)}')


if __name__ == '__main__':
    main()
