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

- Always use the Oxford (serial) comma in all site copy: "red, white, and blue".

## Planned page: Methods / ways to play (not built yet)
- One section per modality, each with a clear "Suited for:" line.
- Project ImPACT, Suited for: children whose social and communication skills are still unfolding (moved here from the homepage card, Nov 16).

- PLACEHOLDERS: the studio triptych uses two AI-generated mood images (PLACEHOLDER-ai-reading-nook.jpg, PLACEHOLDER-ai-library-wall.jpg). Replace with real studio photos before launch; never launch with them.

## Planned for the About page
- Colleague endorsements (2-3 short quotes with name and role, with permission) go on the About page, kept separate from the homepage family quotes.

- PREVIEW: the "Worth looking forward to." quotes section is visible for review but contains SAMPLE quotes. Re-hide it or replace with real, consented quotes before launch.

- FOOTER: identical on every page. Edit it in index.html only, then run: python3 tools/sync-footer.py

- CLOSING BAND (prefooter): edit in index.html; tools/sync-footer.py copies it to the pages listed in PREFOOTER_PHOTOS (each with its own photo). No band on contact, client portal, or legal pages. Reserved photos: close-family-feeding.jpg for the Project ImPACT section (daily routines), close-teacher-mouse-crafts.jpg for group programs (blur the Mickey shirt first), close-mom-girl-rideon.jpg spare (tall photo; too narrow for the band).
- LEGAL PAGES (privacy.html, client-rights.html, accessibility.html, terms.html, funding.html): drafted Nov 23 2026 from Ellis's Word drafts (built with legal2 generator); Ellis is reviewing. Peach-highlighted [brackets] (class legal__todo) = still needs her input (effective dates). Footer v4 (Nov 23): three stacked columns spread across the page (BrightPlay menu, Resources, Visit), signature centered on its own row, then the legal bar; edit in index.html and run tools/sync-footer.py.

- SPACING: every section (main > section) gets the same top/bottom padding from --section-gap in styles.css. Never add per-section margins or padding; declare any exception at the end of the "ONE SPACING RHYTHM" block with a reason.

- TRADEMARK SYMBOL (Ellis, Nov 22 2026): use ™ after BrightPlay on the site and in legal documents for now. Switch to ® ONLY after the US registration certificate actually issues (application published Nov 3 2026; opposition period ends Dec 3 2026; if the application is still intent-to-use, a Notice of Allowance and Statement of Use come first). When it registers, update the site, the Terms of Use trademark line, and all documents.
