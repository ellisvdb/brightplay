#!/usr/bin/env python3
"""Keep the shared parts of the site identical on every page.

Edit the FOOTER and the CLOSING BAND (prefooter) in index.html only, then run:
    python3 tools/sync-footer.py

- Footer: copied to every page.
- Closing band: copied to the pages listed in PREFOOTER_PHOTOS, each with
  its own photo. Pages not listed (contact, client portal, legal pages)
  get no closing band.
"""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent

PREFOOTER_PHOTOS = {
    "about.html": ("assets/images/photos/close-grandma-handstack.jpg",
                   "A laughing grandmother and grandson stacking their hands together", 1536, 608),
    "approach.html": ("assets/images/photos/close-mom-baby-bubbles-band.jpg",
                      "A delighted toddler reaches for soap bubbles while his smiling mother holds him on her lap", 1024, 405),
}

foot_pat = re.compile(r'[ \t]*<!-- shell:footer.*?</footer>\n(?:[ \t]*<!-- /shell:footer -->\n)?', re.S)
pre_pat = re.compile(r'[ \t]*<!-- shell:prefooter.*?<!-- /shell:prefooter -->\n', re.S)

index = (root / "index.html").read_text()
footer = foot_pat.search(index).group(0)
prefooter = pre_pat.search(index).group(0)

for page in sorted(root.glob("*.html")):
    if page.name == "index.html":
        continue
    s = page.read_text()
    m = foot_pat.search(s)
    if not m:
        print("skipped (no footer):", page.name); continue
    s = s[:m.start()] + footer + s[m.end():]
    s = pre_pat.sub("", s)
    if page.name in PREFOOTER_PHOTOS:
        src, alt, w, h = PREFOOTER_PHOTOS[page.name]
        block = re.sub(r'<img src="[^"]*"\s+alt="[^"]*"\s+width="\d+" height="\d+"',
                       f'<img src="{src}"\n             alt="{alt}"\n             width="{w}" height="{h}"', prefooter, count=1)
        s = s.replace("  </main>", block + "  </main>", 1)
    page.write_text(s)
    print("synced:", page.name, "(with closing band)" if page.name in PREFOOTER_PHOTOS else "")
