# BrightPlay — Build Brief (v4, June 2026) · MONOCHROME

**Status:** This supersedes v3. Strategy, voice, and audience are unchanged. v4 folds in four things decided in design partnership since v3: (1) the locked **Polaroid photo treatment** + corner rule, (2) the **no-stars testimonial** rule, (3) the **Gloria Hallelujah** caption face, and (4) **verbatim-copy tagging** so the build never swaps Ellis's real words for generic placeholder.

Design is optimized for smartphone viewing and fast (re)load — most parents meet BrightPlay while scrolling on their phone in a sporadic free moment. The index must be visually attractive, communicate compassion and can-do connection, and entice a free call because the parent overwhelmingly feels: **"This could be me!"**

This is a visual-design-first pass. Most body copy is placeholder; Ellis refines wording later. Build the structure, slot real text in after.

---

## How to read the copy tags in this brief

These three markers tell the build (and any design/code pass) exactly how to treat each piece of text. **Respect them literally.**

- **`[COPY]` … `[/COPY]`** — Ellis's exact words. Place as written. **Never paraphrase, shorten, or "improve" these.** If a spot needs a design decision (e.g. line breaks), keep the words and only adjust layout.
- **`[PLACEHOLDER]` … `[/PLACEHOLDER]`** — a generic stand-in. Fill or refine later; safe to draft something reasonable in the meantime.
- **`[INTENT: …]`** — direction for copy still to be written. Write *to* this; it is not final wording.

---

## 0. North star (unchanged)

The **parent is the protagonist.** A parent lands here tired, often at midnight, after a hard day or a hard evaluation, and should feel in the gut: *this person will help me inside the chaos I already have — not add another thing to my list.* Professional, trustworthy, hopeful, warm, a little playful can-do attitude. Never clinical, never preschool. Strong. Empowering. Confidence-building for parents and children alike. Warmth and joy come from real parent-child photos and small accents, not from loud color.

**Sacred rules:**

- **Not-another-thing-on-your-list.** Never imply "do these 12 things." Imply [COPY]we find the leverage already inside your day[/COPY].
- **Won't-do vs can't-do reframe.** Most hard behavior is *won't*, for valid reasons (dysregulated, overwhelmed, scared). Address the conditions, the doing follows. **These exact words do not go on the page.** Always read copy from the perspective of a parent already feeling like a bad parent — carrying guilt, escape, denial, copious stress, sleeplessness, hopelessness.
- **No peer-play claims as a core service.** Not making friendships. BrightPlay offers Theraplay / Project ImPACT / early intervention. (PEERS® is a separate offering for preschoolers to young-adult coaching — listed, not centered.)

---

## 1. Visual system

### Base — near-monochrome, warm off-white

- One warm off-white as the page background everywhere. Not too soft, not too hard; optimizes contrast with the white inside floating boxes and with BrightPlay's brand colors (lighter/darker teal, golden mustard, terracotta/clay) so the site looks inviting, fresh, and popping without many color accents. No colored bands.
- A second tone, only a few percent deeper, for alternating sections — the shift should be subliminal: the eye glides past it, the brain registers "not flat." Think TwoFold. If you can consciously see a band, it's too strong.
- **Hard constraints on the base:** no beige, no warm/cream bleed, no hint of pink, red, or orange hue in the background or its alt-tone. The off-white must read clean and cool-neutral-warm — never sandy. It must contrast cleanly with teal, golden mustard, and clay.
- **Suggested starting values** (tune against real images later):
  - `--color-bg: #F7F6F2` (warm off-white, the 95%)
  - `--color-bg-alt: #F3F2EE` (subliminal alt-tone — ~2–3% deeper, same hue)
  - `--color-surface: #FFFFFF` (floating boxes)

### Structure comes from floating boxes, not bands

The visual rhythm is created by white **rounded** boxes with soft shadows that appear to float above the off-white — carousels, info cards, the modality grid, the FAQ, the self-writing boxes (inspired by Claude Design Beta and TwoFold). Shadow does the work color used to. Generous whitespace ("bladspiegel" — open, calm, empty-feeling).

### Accent colors (role hierarchy)

- **Teal** `--color-primary: #2C8079`, **deep** `--color-primary-deep: #1C5854` — the brand color. Hover states, the moving nav underline, links, active states, hovered cursor accents, structural marks, **the Polaroid hover ring.**
- **Golden mustard** `--color-accent: #E5BF59` — CTA buttons and highlights. The one "click me" color.
- **Clay / terracotta** `--color-accent-soft: #D68B73` — a whisper only. Tiny dots, rare single accents. Never a surface.
- **Charcoal text** `--color-text: #2C3135`, soft `#3A3F40`. No very light-gray body text. TwoFold goes very pale-gray on copy; we do not — parents read tired, in the dark. Body text stays dark and legible. Where TwoFold uses ultra-light gray, BrightPlay uses a **medium-light** tone: distinct enough to be noticed, easy to read in the dark by tired eyes (never very pale). Lightest gray only for tiny meta labels.

### Type (locked)

- **Headlines (H1–H3):** Newsreader, weight 500 (medium, never bold). *(Taste rule, not a technical lock — weight 500 holds the calm-editorial register; 700 reads loud/commercial. Newsreader is a variable font, so heavier weights cost nothing to load if ever wanted; for a single hero line, test 600 before 700.)*
- **Body:** Atkinson Hyperlegible Next (fallback: Atkinson Hyperlegible).
- **Speech-bubble / poster accent:** Patrick Hand — speech bubbles, one poster word. Tight leash.
- **Polaroid captions:** Gloria Hallelujah — handwritten texture on photo captions **only.** Distinct lane from Patrick Hand: Patrick Hand = speech bubbles/poster; Gloria Hallelujah = photo captions. Two hands, never overlapping roles. (See **Photos: the Polaroid treatment** below.)
- **Logo wordmark:** existing serif, unchanged.

### Photos: the Polaroid treatment (depicted physical object)

All small, in-content (non-full-width) photos render as **Polaroids.** A Polaroid is a *depicted physical object*, not a UI box — this is why it follows different corner rules, and the contrast is intentional: a sharp photo resting on the soft, rounded digital surface reads as a real, kept memory. It also signals "real-world person, sleeves rolled up" over "make-believe, magic-wand promises."

**Corner rule (resolve any ambiguity by slot):**
- **Rounded corners** — all UI and text containers: floating boxes, buttons, inputs, cards, the modality grid, FAQ, self-writing boxes.
- **Sharp / square corners (0–1px)** — Polaroids only.
- **No frame at all** — full-bleed / full-width images (hero, full-bleed overlays, closing image). These bleed edge-to-edge; they are neither rounded boxes nor Polaroids.

**Locked Polaroid geometry** (mirrors a real Polaroid; all proportions key off one width variable so they hold at any zoom/viewport):
- Square photo window, sharp corners.
- Thin, **equal** top and side borders (~4.5% of width).
- **Fat bottom strip** (~24% of width), with its own fixed height — *not* produced by the caption text, so it can never collapse.
- Caption sits **low** in the bottom strip.
- Soft, teal-tinted shadow underneath; on hover, the photo straightens, lifts, and gains a teal ring ("pops out of the row").

**Caption rules:**
- Font: Gloria Hallelujah (handwritten). Captions are **texture, not copy** — keep to 1–3 words.
- Bilingual captions encouraged, to do double duty as warmth and a quiet signal of the multilingual, multi-community, two-country practice. Examples: [COPY]¡Burbujas![/COPY] / [COPY]Bellenblazen![/COPY] / [COPY]Bubbles![/COPY] / [COPY]Tag, you're it![/COPY]

**Dosage:**
- Scatter sparingly, on **real photos only**, never full-width.
- Don't repeat the same Polaroid layout every time photos appear — vary count/placement; avoid "two Polaroids every time."
- **Duct tape:** one deliberate moment only (About-page hero is the natural home), never the system.

**Canonical implementation:** `brightplay-polaroid-component.html` — use as-is. Single size knob `--bp-pol-width`; everything else (borders, strip, caption size) derives from it via `calc()`. Keyboard-accessible, respects reduced-motion.

**Polaroid orientation:** square is the default. One exception is locked: the bubbles photo (`polaroid-bubbles-play.jpg`) is **portrait** — its composition is taller than wide, so it uses a portrait window. The component supports this by setting the photo aspect-ratio; everything else (sharp corners, fat bottom strip, caption) is unchanged.

### Full-bleed discipline

The index uses **exactly two** full-bleed (frameless, edge-to-edge) image moments. Everything else that's a photo is a Polaroid. This keeps the page calm, fast on mobile, and stops it reading like a slideshow.

1. **Hero** — full-height, top of Home only (mom + curly toddler, blocks).
2. **Closing band** — a wide cropped *band* (not full-height) that repeats before the footer on every page **except Contact** (the recurring sign-off; dad + sons reading).

The former mid-page balloons full-bleed is **removed** from Home (relocated to the Approach page as a static element). Any other non-hero photo is a Polaroid, or — if a big image is truly wanted — a cropped *band*, never another full-height full-bleed.

### Mascot — Bertie (locked, do not recolor)

- Bertie replaces the TwoFold logo, pushed to the far-left edge of the frame with small padding.
- Bertie may cameo elsewhere — floating near a section, and in the footer (animated waving).
- Bertie's coloring is committed and never changes.

### Mobile-first, non-negotiable

Every layout starts at 375px and grows up. Three/four-column rows collapse to one. Nav must not wrap awkwardly on a phone. The parallax hero must be tested on mobile specifically.

---

## 2. Pages (now four)

1. **Home** — the index described in detail below.
2. **About** — Ellis's story, the human, training framed for parents not peers. Not a CV.
3. **Approach** — (new, 4th nav item, sits before Contact) — the modalities / protocols, explained via an interactive "template-selection"-style tile grid (archetypal modality image + word beneath, teal cursor on hover; see Claude Design Beta and the Polaroid carousel, contrasting teal + uplifting image-deck hover selection), each clicking through to detail. Working name "Approach."
4. **Contact** — discovery-call booking (Calendly free embed), email, office location.

**Nav order:** Home · About · Approach · Contact — pushed to the far right of the frame, equal padding to Bertie on the left. Must hold on mobile without wrapping.

---

## 3. Home / index — section by section

Numbers in (parentheses) map to Ellis's TwoFold walkthrough notes. TwoFold is visual inspiration only — rebuild every pattern clean and minimal in BrightPlay's own system; do not copy its code.

### Nav (1–4)

- No promo banner above the nav.
- Bertie far left (small padding). Nav links far right (equal padding).
- Hover-following underline: a teal stripe that moves to follow the cursor across nav items (replaces a fixed active-state line). *(Fancy — Phase 3.)*

### Hero (6) — KEEP

- The existing parallax-reveal hero: mom + curly-haired toddler, blocks (the edited version with the blue mat removed). File: `assets/images/photos/hero-mom-toddler-blocks.jpg` — already in the repo, correctly positioned; **do not replace.** Content slides up over the fixed image. Mobile-safe.
- Text overlay + one golden-mustard CTA: [COPY]Let's chat[/COPY] (or [COPY]Book a discovery call[/COPY]).
- Tagline for the overlay: [COPY]Where play does the heavy lifting[/COPY] *(locked tagline from the branding sessions — confirm placement; Bertie-barbell visual is its extensible asset.)*
- *(Fancy, Phase 3: a light "shine" sweep rolling across the CTA to draw the eye.)*

### Parallax reveal block (8)

- After the hero, the **WHAT THIS IS** content. Heading: [COPY]Not another thing on your list[/COPY]. Sub-copy: [COPY]Steady, playful support that fits the day you already have. With someone who sees your kid clearly, and won't make you feel you're doing it wrong.[/COPY]
- Second image (dad + child playing / hugging). Text more centered, 3-column middle layout. This is the panel that pulls up over its image — the first copy parents read after landing. Visually appealing, active, inspiring copy + photo.

### Scrolling recommendation carousel (9)

- A horizontal auto-scrolling marquee of parent recommendations that pauses, and the hovered card lifts slightly on cursor-over. Floating white rounded shadowed cards. Content: [PLACEHOLDER]Parent words coming soon[/PLACEHOLDER] for now. (See the TwoFold recommendations carousel.)
- **No star ratings on-site.** (Already skipped from TwoFold — see §3 closing list.) Stars on one's own site carry no credible signal and import an Amazon/Yelp register that clashes with a warm, relationship-based practice. Trust comes from **specificity**, not a number.
- Each card = a real parent's words + attribution: **first name, relationship, and community** (e.g. "Mom of a 3-year-old, Pacific Beach" / "Early Head Start parent"). Specific + attributed beats rated + anonymous.
- Any aggregate **rating** signal lives **off-site**, where it can't be curated: link a Google Business profile — "See all reviews on Google →". That's the honest place for stars.
- **Consent + child privacy:** collect explicit written consent for each testimonial; first name of the parent is fine, but do not name or pinpoint a specific child's diagnosis or situation. That care is itself part of the trustworthy signal.
- Professional references (other clinicians, teachers) are a separate, credible category — peer endorsement reads as trustworthy on its own, no stars needed.

### Full-bleed image + overlay (10) — REMOVED FROM INDEX

- **Decision:** the index carries only **two** full-bleed moments (see "Full-bleed discipline" in §1). This mid-page balloons full-bleed is **cut from Home** to avoid full-bleed overload and keep the page calm and light on mobile.
- The balloons image relocates to the **Approach page** as a static element (placement TBD — square Polaroid or wide band, decide when building Approach). Now in hand: `approach-balloons.jpg`.

### Section heading (11)

- Replace TwoFold's "Built for how clinicians actually work" with a parent-facing H1 + subtitle. [PLACEHOLDER]Ellis writes final[/PLACEHOLDER].

### Three-column feature grid (12) — teal & mustard, not orange

- **Column A** — [COPY]Multiple ways to connect[/COPY] / [COPY]Book a session[/COPY]. Dynamic option tiles: Office (apartment/office-building icon), In-home (house-with-door icon), Community (library/park-sign icon), Live video (video-camera icon), Uploaded recording (cloud-with-up-arrow icon).
- **Column B** — [COPY]Family benefits[/COPY] / [PLACEHOLDER]subtitle TBD[/PLACEHOLDER] [INTENT: something about the fun in functional communication]. Keep the rounded-square icon tiles, five of them, evenly spaced, centered text in two lines each (for symmetry):
  - parent+kid+speech-bubble → [COPY]reduced frustration[/COPY] *([INTENT: revisit toward strength-based wording])*
  - toothbrush+sparkle → [COPY]easier routines[/COPY]
  - teddy bear inside a home frame → [COPY]safer home[/COPY]
  - parent+two-kids-hug → [COPY]stronger bonds[/COPY]
  - backpack → [COPY]enhanced independence[/COPY]
- **Column C** — [COPY]Personalized sessions[/COPY] / [COPY]Prioritizing your time. Your choice. Your voice.[/COPY] Family icon TBD; placeholder for now. Keep the lettered-block element, all teal (not orange); letters are placeholders. *(EFT tapping note to be woven in here later.)*

### Two-image offset block (16)

- Above the "Why families" block: **two or three Polaroids** (sharp corners — see Polaroid treatment), one left, one right, set slightly diagonally (not on the same horizontal line). Suggested: mom + boy outside on the roller-cart laughing (left); an action-play photo with a child using an AAC device (right); if a third reads well *and* there's enough white space, a grandparent playing/laughing with a child.
- *(Polaroid dosage applies: don't make every photo-moment an identical pair — vary it.)*

### "What we create together" — modality flip-box (13)

- H1 [COPY]What we create together[/COPY] with **together** in brand teal; subtitle [COPY]Services we provide.[/COPY] A floating white rounded box with an auto-flipping horizontal overlay (teal or mustard, not dark) that moves a stripe under each item for its dwell time. Items + icons:
  1. **Early Start** — baby-carriage/stroller icon
  2. **Project ImPACT** — single continuous-stroke parent-arch → child-arch with two dot heads (adult bending protectively over the little one, like a mother hen spreading her wings)
  3. **Theraplay** — floating-bubbles icon
  4. **Play groups** — handprint-ring icon (2–3 overlapping tiny paint handprints)
  5. *(last)* — three-people-arms-out icon (placeholder; uniform style later)
- Specialty floating-bubble tags (keep word, maybe italic): [COPY]Family-centered, Play-based, Trauma-informed, Attachment-enhancing, Behavior Regulation, Communication-building, Independence[/COPY].
- Tagline below (medium-dark, legible, not pale). Two options Ellis wrote — keep both for selection:
  - [COPY]Engaging the body in play is essential for neurodevelopmental support and family bond.[/COPY]
  - [COPY]Full-body play facilitates family bond and neurodevelopmental regulation for caregivers and kids alike.[/COPY]
  - [INTENT: "facilitate" may read a touch upscale — pick whichever lands warmer, or blend.]

### Self-writing boxes (input → published)

- Keep the self-typing box pattern. Content TBD (likely a family's session-1 presentation → Project ImPACT exit). [PLACEHOLDER]fill with copy that fits the header[/PLACEHOLDER].

### Steps strip (sections 01–03 style)

- Light horizontal-stripe numbered steps, drop the leading zeros, teal numerals + dark bold labels: [COPY]1 Free chat · 2 Intake · 3 12–24 sessions · 4 Wrap-up · 5 Graduate / Extend[/COPY].

### "Why families choose BrightPlay" (14)

- Keep the four white-box layout. Replace "clinicians" → "Families." Tiles: [COPY]Strength-based, Collaborative, Honest, Effective[/COPY] (rest placeholder). Button in brand colors: [COPY]Book free chat[/COPY].

### "Your data, our responsibility" + FAQ (18)

- Keep the FAQ accordion look. Image: boy with Down syndrome in the vintage helmet, in a Polaroid. Maybe 2 images — switch it up; don't show two Polaroids every time. Drop the HIPAA/HITRUST badges.
- H-line: [COPY]Your data, our responsibility[/COPY].
- FAQ items — Ellis's own draft questions (placeholder wording she edits later; keep her phrasing as the starting point, don't replace with generic). Left column top→bottom, then right column:
  1. [COPY]Is BrightPlay HIPAA compliant?[/COPY]
  2. [COPY]Do you provide a BAA?[/COPY] [INTENT: yes — may receive/share PHI from San Diego Regional Center (SDRC) or pediatrician.]
  3. [COPY]Does BrightPlay share PHI with 3rd parties?[/COPY] [INTENT: depending on program, yes — e.g. healthcare provider / SDRC reports.]
  4. [COPY]Are session recordings stored?[/COPY] [INTENT: yes, depending on protocol; only with your approval, for progress reports and supervision.]
  5. [COPY]Where is my data stored?[/COPY]
  6. [COPY]Is my data used for training?[/COPY] [INTENT: leave AI out of the answer.]
- Answers are placeholders Ellis finalizes later. Match the medium-dark, legible font (not pale gray).
- Security-details link in brand colors with an arrow.
- **[FLAG — verify before publishing:** Your own FAQ answers say BrightPlay will *receive and share PHI* (BAA, SDRC/provider reports, stored recordings). So "HIPAA-compliant" is a load-bearing claim, not marketing dressing — and the right move is to make the compliance genuinely real (signed BAAs in place, compliant storage for any recordings/PHI, documented data location) *before* the claim goes live, rather than to soften the wording. Handling PHI is exactly the point at which the storage question stops being optional. Not legal advice — but this one's worth getting right with someone who is.**]**

### Closing band (16/22) — the recurring sign-off (full-bleed #2)

- A **wide, broad band** (cropped letterbox strip, not full-height) of the dad reading with his three sons, de-brightened (not blurred), with a text box over it. [INTENT: getting time back at the end of your days, to connect and enjoy each other — [COPY]it's the moments that count, not the milestones[/COPY].]
- **This is a recurring element:** it sits right before the footer and **repeats on every page EXCEPT Contact** (Contact's job is the Calendly embed + signup form; a big image competes there). It becomes the site's signature sign-off — every page lands the same warm way.
- Treatment: full-bleed band (no frame), broad strip. This is one of the **only two** full-bleed moments site-wide.
- *Note:* `close-dad-reading-sons.jpg` is the current pick; Ellis prefers an African American example eventually — the full-bleed set is the part still skewing white, so this is the priority swap.

### Footer (17–18) — Amazon-style vertical columns

See TwoFold's footer; build exactly that pattern.

- **Column 1:** Bertie + BrightPlay, blurb [PLACEHOLDER]fill with best-fit approach text for now; our technology is HIPAA-compliant[/PLACEHOLDER] *(same HIPAA flag as above applies)*, button [COPY]Let's talk →[/COPY].
- **Column 2 — Services:** [COPY]Office, In-Home, Community, Video Calls, Asynchronous[/COPY]. Then, after white space — **Partners:** [COPY]For Individuals, For Caregivers, For Groups[/COPY].
- **Column 3 — Specialties:** [COPY]Early Start, Project ImPACT, Theraplay, Play Groups, PEERS®, Emotional Freedom Tapping[/COPY] (balance column weights; if the last is too long, write [COPY]EFT[/COPY]).
- **Column 4 — Resources:** [COPY]Blog, Newsletter sign up[/COPY] [INTENT: needs to be a form; could live under the Contact page] + 4 links (local / CDC — [PLACEHOLDER]fill[/PLACEHOLDER]). No underlines under any links (see TwoFold/Amazon). Second header **Help:** [COPY]CDC Milestones, SDRC link, teen crisis line, NAMI[/COPY], a women's-shelter / community resource.
- **Bottom bar:** rule + © + year + [COPY]by WonderlandWebDesign[/COPY] · [COPY]info@brightplay.org[/COPY] (not underlined) · Privacy Policy · *(Terms of Service commented out for now).*

**Skipped from TwoFold:** the "free for a week" banner (1), the **review-stars bubble (5)**, the "used by over / company logos" strip (8), the FAQ telehealth block (16). The Premium Quality block (15) is parked for possible reuse on the Approach page, not Home.

---

## 4. Phased build plan (crash-safe)

Recent crashing is almost certainly the dense, half-built canvas straining the renderer. The cure is building in small bites, not all 18 sections at once. Ellis re-uploads images at the start of Phase 1 (they live in her uploads, not in Claude's memory between sessions).

- **Phase 1 — the spine (build first):** nav (Bertie left, links right) · parallax-reveal hero (curly-toddler image) · the "not another thing on your list" reveal block · the recommendation carousel. Get the monochrome base, the floating-box look, the type, and the hero feeling right before anything else.
- **Phase 2 — the body:** three/four-column feature grid (12) · two-image or three-Polaroid offset blocks · "what we create together" flip-box · steps strip · "why families" · FAQ · all full-page images with overlay + text, including the closing image · footer.
- **Phase 3 — the fancy (add last, scaffolded):** hover-following nav underline · CTA shine sweep · auto-flipping overlay stripe. Nice-to-haves and the most likely to misbehave, so they go on at the end, one at a time. *(Likely after the other pages — About, Approach, Contact — are built first.)*

Approach page is built after Home Phase 1–2 land, reusing the same components.

---

## 5. Image slots (re-upload at build time)

Labeled placeholders until the real files are dropped in. Ellis re-uploads.

| Slot | Treatment |
|---|---|
| HERO: edited mom + curly-haired toddler, blocks (blue mat removed) | Full-bleed (no frame) |
| Dad + child playing/hugging (parallax reveal block) | Full-bleed (no frame) |
| Mom + kid, balloons (full-bleed overlay block) | Full-bleed (no frame) |
| Mom + boy on roller-cart, laughing (offset pair, left) | **Polaroid** (sharp) |
| Child using AAC device, action play (offset pair, right) | **Polaroid** (sharp) |
| Boy with Down syndrome, vintage helmet (data/FAQ block) | **Polaroid** (sharp) |
| Dad reading with three sons (closing full-bleed) | Full-bleed (no frame) — diversify the set later |
| Modality archetype images for the Approach tiles (uniform style, TBD) | Tile art (per Approach pattern) |
| A grandparent playing with a kid | **Polaroid** (sharp) |
| A bubbles play image | **Polaroid** (sharp) — caption candidate [COPY]¡Burbujas![/COPY] |
| Kids running outside | **Polaroid** (sharp) — caption candidate [COPY]Tag, you're it![/COPY] (Gloria Hallelujah) |

**Rule of thumb:** all non-full-width photos = Polaroids (sharp); all full-width photos = full-bleed (no frame); all UI/text boxes = rounded. All real photos: candid, home-feeling, diverse across ability / ethnicity / age / family shape — explicitly LGBTQ-friendly and visibly so. Final background values and color scheme get tuned against the chosen images.
