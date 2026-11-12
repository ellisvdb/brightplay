# BrightPlay website: notes for Claude

Static site (plain HTML/CSS/JS, no build step). Preview locally with
`python3 -m http.server 8888` and open http://localhost:8888.

## Open task: swap in the new logo (requested by Ellis, Oct 28 2026)

The new, temporary "golden spark" logo (serif BrightPlay, gold spark as the
dot of the i) should replace the current header logo for now.

- Source (Ellis's original): `assets/BrightPlay_Golden Spark Logo_noRadius.png`
- Ready-made files in `assets/images/logo/`:
  - `brightplay-logo-golden-spark.png`: transparent, dark letters. USE THIS in
    the header (the header background is cream, so a JPG would show a white box).
  - `brightplay-logo-golden-spark-for-dark.png`: transparent, cream letters, for
    dark backgrounds.
  - `brightplay-logo-golden-spark.jpg`: white background, for documents and email.
- Where: the header `<img class="brand__logo" ...>` in index.html, about.html,
  contact.html and client.html (currently `brightplay-logo-header.svg`).
  Image is 1906 x 569 px; at the current 52px header height it is about 174px wide,
  so update the width/height attributes (for example width="174" height="52").
- The old SVG logo had a one-time "light on" animation, and index.html replays it
  after the intro (search for `#lit`). With a PNG that replay is harmless but does
  nothing; it can stay or be removed.
- Keep Bertie in the footer only. Keep the spark favicon as is.
- This logo is temporary: Ellis plans a later version where the t's crossbar
  connects to the bottom of the P's belly.

## House rules for copy
- US English spelling. No em-dashes. Never use the phrase "young children".
- Theraplay wording: "based on Theraplay® principles" (Ellis is under supervision,
  not yet certified), with the Theraplay Institute service-mark footnote.
- No HIPAA/BAA claims until her tools are actually set up for it.

- Never delete photos or the three-polaroid section (content:offset, below "What working together can look like") from the homepage. Ellis may change the photos and captions inside the polaroids, and may prune text boxes, but the polaroid section stays unless she explicitly says to remove it.
