#!/usr/bin/env python3
"""Copy the site footer from index.html into every other page, so the footer
is identical everywhere. Edit the footer in index.html only, then run:
    python3 tools/sync-footer.py
"""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
pat = re.compile(r'[ \t]*<!-- shell:footer.*?</footer>\n(?:[ \t]*<!-- /shell:footer -->\n)?', re.S)
master = pat.search((root / "index.html").read_text())
assert master, "no footer found in index.html"
block = master.group(0)
if "<!-- /shell:footer -->" not in block:
    block += "  <!-- /shell:footer -->\n"
for page in sorted(root.glob("*.html")):
    if page.name == "index.html":
        continue
    s = page.read_text()
    m = pat.search(s)
    if not m:
        print("skipped (no footer):", page.name); continue
    page.write_text(s[:m.start()] + block + s[m.end():])
    print("footer synced:", page.name)
