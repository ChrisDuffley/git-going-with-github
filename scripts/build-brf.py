#!/usr/bin/env python3
"""
Convert plain text to BRF (Braille Ready Format) using liblouis.
No TTS required — this is pure text-to-braille-dots translation.

Usage: python3 build-brf.py input.txt output.brf
"""
import sys
import louis

# NABCC (North American Braille Computer Code) lookup table.
# Maps 6-dot braille cell bitmask (0-63) to ASCII character.
# bit 0=dot1, bit1=dot2, bit2=dot3, bit3=dot4, bit4=dot5, bit5=dot6
NABCC = " A1B'K2L@CIF/MSP\"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)="


def unicode_braille_to_brf(text):
    """Convert Unicode braille characters (U+2800-U+283F) to NABCC ASCII."""
    out = []
    for ch in text:
        code = ord(ch)
        if 0x2800 <= code <= 0x283F:
            out.append(NABCC[code - 0x2800])
        elif code < 128:
            out.append(ch)
        else:
            out.append(" ")
    return "".join(out)


def main():
    input_file = sys.argv[1] if len(sys.argv) > 1 else "/tmp/book.txt"
    output_file = sys.argv[2] if len(sys.argv) > 2 else "output.brf"

    # Use custom UEB table with corrected contractions
    import os
    script_dir = os.path.dirname(os.path.abspath(__file__))
    custom_table = os.path.join(script_dir, "tables", "en-ueb-g2-custom.ctb")
    
    with open(input_file, encoding="utf-8", errors="replace") as f:
        lines = f.read().split("\n")

    brf_lines = []
    for line in lines:
        if line.strip():
            try:
                braille = louis.translateString([custom_table], line)
                brf_lines.append(unicode_braille_to_brf(braille))
            except Exception:
                brf_lines.append(line[:80])
        else:
            brf_lines.append("")

    output = "\n".join(brf_lines)
    with open(output_file, "w", encoding="ascii", errors="replace") as f:
        f.write(output)

    print(f"BRF written: {len(output):,} bytes, {len(brf_lines):,} lines")


if __name__ == "__main__":
    main()
