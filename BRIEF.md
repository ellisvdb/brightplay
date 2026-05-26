# BrightPlay — Project Brief

> This document is the north star for the BrightPlay website. Save it as `BRIEF.md` in the project root. Paste it into any fresh Claude Code session before working on the site so the assistant has full context.
>
> **Version note (May 2026):** This revision replaces the rigid two-column layout direction with a flexible modular layout system, reduces the site to three pages, and adds a set of named design references. Read the Design Direction and Pages sections carefully — they changed substantially.

---

## What this site is

A small, mobile-first, hand-built website (plain HTML / CSS / JS, no framework, no WordPress) for **BrightPlay** — Ellis van den Boogaard's early childhood coaching practice based in San Diego. The site replaces a paid WordPress theme that was too dark, too clinical, too constrained. We are starting from scratch, owning the code, and architecting for a Dutch-language version later.

**Success = a stressed parent on a phone, with one eye available, lands on the site and within ~10 seconds feels:** *this person sees my kid, doesn't blame me, and there's something I can actually do.*

---

## About Ellis (the practitioner)

Ellis is an early childhood coaching specialist with **two masters degrees** — an MS Ed in Applied Behavior Analysis from Purdue and an MA in Art History, with a working scientist's background (infrared reflectography, X-ray analysis of artworks, and over two decades as a professional scientific editor). 14+ years working with children and families: family literacy intervention teacher at **Words Alive!** — San Diego-based 501(c)(3) nonprofit literacy advocacy organization, working at neighborhood houses and Early/Head Start with kids 18 months and up; BCBA-trainee and program supervisor at **TERI Inc.**, **Kyo**, and **Gateway Learning Group**, managing SDRC early intervention caseloads; and the architect of clinical documentation workflows across multiple programs.

**Clinical credentials and training:**

- **Evidence-based early intervention:** Project ImPACT CA (currently building national certification cases under Anna Dvortcsak), Early Start Denver Model (ESDM), PEERS® provider (from preschoolers to young adults); "picky eaters" and food sensitivity trainings
- **Diagnostic:** ADOS®-2 and ADOS®-2 Toddler (qualified administrator)
- **Attachment & somatic:** Theraplay Foundational + MIM (in progress under Kerri Garner's supervision, Phoenix); EFT International / Emotional Freedom Tapping (in progress under Jackie Viramontez, September 2026 target)
- **Trauma-informed lens:** Trauma Research Foundation Certificate Program in Traumatic Stress Studies (Bessel van der Kolk's program); this is the lineage that ties the rest together
- **Communication & coaching:** PECS-trained, Certified Special Needs Life Quality Coach, IBCCES Certified Autism Specialist
- **Linguistic:** Certified ESL and TESOL instructor (relevant for serving immigrant families and the eventual Dutch context)

Dutch citizen, bilingual Dutch/English. Strength-based, positive-reinforcement-oriented, self-described **FUNSTIGATOR**. The site should sound like her — warm, smart, not sugary, never clinical-for-its-own-sake.

**Site implication:** the About page names the headline credentials in plain parent-friendly language (e.g., *"trained in the gold-standard early autism diagnostic, the leading attachment-based intervention, and the major evidence-based parent coaching models"*). A "credentials in detail" section — expandable or footer-anchored — holds the receipts for the parents and the occasional pediatrician who want them. **The site never opens with a wall of acronyms.**

---

## Audience

### Primary

Parents and caregivers of children **0–5** (and up to ~10 for Theraplay) with developmental concerns or diagnoses — autism, Down syndrome, speech/language delays and non-speaking children, social-emotional and regulation difficulties, ADHD presentations, trauma-informed / ACE-related behaviors. Mostly mothers, but the site must read as warmly welcoming to dads, grandparents, non-binary and LGBTQ+ caregivers; quietly inclusive **by depicting, not by declaring.**

### The emotional reality

This parent has been told a lot of things. About what's wrong with their child. About what's wrong with *them*. About what they "should" be doing. They've tried the kitchen sink. They are exhausted, sleep-deprived worriers carrying a heavy load of guilt, shame, self-blame, and imposter feelings. Most are convinced they are messing up their child and are failing them simultaneously, even when nothing they have done deserves that weight. The site can **never imply there's a right way they're failing at.** The CAN-DO energy comes from "look what's possible from where you already are" — not "here's the program that will finally fix this."

### What they need from the site

- **A bone-deep conviction, fast, that they themselves can do this** — not *"maybe Ellis can help us"* but *"me, myself, and I can do this, and with Ellis at my back I will."* The site is built around the parent as protagonist of their child's story. Ellis is the steady hand, the nudge, the expertise — never the savior, never the hero. Every word, every image, every CTA should land on the parent's side of the table.
- Confidence that Ellis actually knows her stuff (credentials framed for parents, not peers)
- One low-friction next step: book a discovery call
- Useful San Diego resources, even for parents who aren't a fit — pointing them somewhere good is part of the work (lives within the site, see Pages)

### Not in scope for now

- A "for professionals" referrer page. Stay on the downlow for now.
- A Dutch version. Architect for it, ship in English.
- Premium positioning. We want right-fit families for certification hours, not premium payers who've already tried twelve people.

---

## Voice & tone

**Three adjectives:** optimistic, inspired, empowered → *ready to jump in with Ellis and their kiddo.*

**One more cue:** Ellis is a Dutch-American who walks in the SoCal rain without a coat because she misses Dutch rain. The copy should sound like that — **direct, embodied, alive.** No softening fluff. No *"we know this can be a difficult journey"* throat-clearing. The world is what it is; here's what's possible; let's go.

**Tests we apply to every line of copy and every design choice:**

1. **The zucchini-cake test** — real warmth, not performative cheer. No fake-sugar. Would a clear-eyed parent who bakes vegan zucchini cake with their kids find this honest? (And even picky eaters fall for it.)
2. **The judged-parent test** — does this line imply a "right way" they aren't doing? If yes, cut or rewrite.
3. **The welcome-by-depicting rule** — inclusivity shows up in images, names, examples. We do not announce it in copy.
4. **The one-eye-on-the-phone test** — can this be parsed by a parent with *one eye available*, while blocking two kids from beating each other up with one leg, while frying an egg for "dinner," all from their phone? If not, simplify.
5. **The "me, myself, and I can do it" test** — does this line make the parent the protagonist, with Ellis as the steady hand at their back? Or does it position Ellis as the holder of answers? Parent-first wins, every time.

---

## Design direction

### The big shift

The site is built from **flexible modular sections** — not a fixed template. Some sections are full-width single columns; some are two columns; some are **three columns** (the CDC "Learning Objectives" pattern: flat icon + short label + number, repeated three across). The layout adapts to the content, never the other way around. **Never lock the whole site into a two-column grid.**

### Overall aesthetic

Clean, contemporary, light, hopeful — and genuinely **playful**, in a grounded not-saccharine way. The blend we're after: the calm modular structure and clear iconography of the **CDC Watch Me Training** modules, warmed up with the **hand-drawn playfulness of Talking is Teaching** and the **bite-sized doable energy of Vroom**. Generous breathing room. Round images or rounded corners. Real warmth. Not slick, not corporate, not sterile-clinical.

### Named references (and what to take from each)

- **CDC Watch Me Training** (`cdc.gov/ncbddd/watchmetraining/module1.html` and `module3.html`) — take: full-width colored section bands; the three-column "Learning Objectives" rows with simple flat two-tone figure icons + short label + number badge; the circular "scroll down to begin" cue; clean modular section rhythm; optional sticky in-page section nav.
- **Talking is Teaching** (`talkingisteaching.org`) — take: playful hand-drawn display font for accent moments; speech-bubble motifs; simple flat warm character illustrations; "poster"-style graphic blocks. Their palette uses teal/mustard/coral — **we keep the warmth and the mustard, swap teal for sage, and use no pink.**
- **Vroom** (`vroom.org` / the Vroom app) — take: the feeling that guidance comes in small, colorful, doable pieces — micro-content cards, never a wall of instruction. Reinforces the not-another-thing-on-your-list promise.
- **Ellis's old WordPress hero** — take: the **parallax scrolling hero** (see below). Leave behind: the dark overlays, the rigid theme, the typos.

### The parallax hero (homepage)

The homepage hero is a full-viewport image (the mom-and-curly-toddler-blocks photo) with the headline, subtitle, and CTA overlaid. As the parent scrolls down, the hero text rises and scrolls up *over* an anchored-feeling image, and the next section emerges beneath. The effect makes a static page feel **dynamic and alive**. Claude Code picks the technical approach (sticky container, parallax transform, etc.) and must test mobile behavior carefully — some parallax techniques misbehave on mobile, and mobile is the priority.

### Layout system (for Claude Code)

- Build a small set of reusable section types: `full-width-band`, `one-column`, `two-column`, `three-column`, `hero-parallax`. Pages are assembled from these.
- Three-column sections collapse gracefully to one column on mobile.
- Full-width colored bands (sage, mustard, soft cream) separate and rhythm the page — used like the CDC orange/purple bands but in the BrightPlay palette.
- CSS custom properties for all colors, spacing, type. One shared stylesheet.

### Color

**Sage and soft greens** as the spine, echoing the Theraplay office. Warm off-whites and creams as base. **Mustard** as the warm accent for buttons, CTAs, highlights, and the mascot. Possibly one more soft warm secondary (clay/terracotta) — TBD. **Hard no: any pink, anywhere.** Colored full-width bands draw from sage / mustard / cream.

### Typography

A three-role system, to be finalized in collaboration:

1. **Headline serif** — distinctive but warm. Fraunces is the current frontrunner (also seen: Newsreader, Crimson Pro). For display headlines.
2. **Body sans** — clean, humanist, highly readable on phones. TBD. Not Inter, not Roboto, not Arial.
3. **Playful display accent** — a hand-drawn / friendly display font for select playful moments (speech-bubble text, section accents, poster-style callouts), à la Talking is Teaching. Used **sparingly** — seasoning, not the meal. TBD; may be unnecessary if Fraunces's softer optical settings carry enough personality.

### Imagery & illustration

- Round images or rounded corners for non-full-width photos
- Natural, candid, **home-taken-feeling** real photos — not glossy stock-handshake imagery
- Diverse abilities, ethnicities, sexes/genders, ages, races represented across the site
- Mom-and-curly-toddler-blocks image as the **homepage parallax hero**
- **Flat icon system** — simple, two-tone figure icons in the CDC style for three-column "what we do / how it works" rows
- **Speech bubbles and simple flat character illustrations** as a recurring playful motif
- **Kid-doodle accents** — light watermark, authentic-feeling child drawings (head-feet figures, family drawings, a beginner bike or kid-on-a-bike). Used sparingly. Alternative use: a *crowded wall pattern* of doodles as a super-faded transparent overlay on one section, the way a kid's bedroom wall fills with drawings over time.

### Mobile-first, non-negotiable

Designed for the phone first, desktop second. Every layout decision starts at a 375px viewport and grows up. Three-column sections collapse to one column. The parallax hero must be tested on mobile specifically.

---

## Pages

**Three pages for now.** The site is deliberately small. Content that might later become its own page currently folds into one of these three. The layout system is built so pages can split out later (Approach, Services, Resources) without a rebuild.

1. **Home** — the parallax hero (curly-toddler image, one-line promise, one CTA). Then, assembled from modular sections: a short "what BrightPlay is" block; a three-column "how it works / what we focus on" row (CDC-style icons); the modality through-line (presence → body-first → connection → play → learning); a quiet credentials strip in plain language; a testimonials section (placeholder — "Parent words coming soon"); a few useful San Diego / national resource links; and a soft closing CTA. **The "what" and "how" content lives here.**
2. **About** — Ellis's story, the why, the human. Training framed for parents, not peers. The **"Ellis & Kids" banner image** lives on this page. Warmth and personality. Some "how I work" content can also live here. Not a CV.
3. **Contact** — the discovery-call booking calendar (Calendly free tier embed), email, location note. For now, **other odds and ends park here** until they earn their own page.

---

## The modality through-line

This is the spine of the Approach content (which lives on Home and/or About) and the secret framing of the whole site:

> **Presence → body-first → connection → play → learning.**

It starts with being in the moment — really *in it* — with the kid, with each other. That's where the bonding and the healing happen, and that's the only soil in which the rest can grow. Everything downstream is doors into the same room: Theraplay regulates through rhythm and touch. EFT tapping regulates the nervous system directly. Project ImPACT and ESDM build joint engagement through play. PEERS scaffolds peer connection. They are **not separate services**.

**Why this matters more, not less, in the AI era:** all (early) childhood intervention is, fundamentally, about human-to-human connection — which in the AI-saturated reality already arriving will become exponentially more important, not less. A trustworthy adult patiently showing up, no matter what happened in the session before or the minute before. Easy-going, flexible, pivoting, encouraging, inspiring. The screen can't be that. We can.

### The won't-do / can't-do reframe

Most challenging behaviors are not *can't do* — they are *won't do*, and **usually for valid reasons.** The kid is dysregulated, overwhelmed, mistrusting, exhausted, hungry, scared. Once we address the conditions, the doing becomes possible. **More is said than done — but the doing is what counts.** This is a stance the site communicates without ever lecturing about it.

### The not-another-thing-on-your-list promise

A parent landing here should feel — immediately, in the gut — *this person will help me inside the chaos I already have, not add another to-do.* The site should never imply *"do these 12 things and your child will thrive."* It should imply *"we'll find the leverage already inside your existing day."* This is one of the strongest differentiators from every other coach and clinic out there. Hold it sacred.

---

## Image inventory

### Authentic, Ellis's own
- Magnifying-glass girl (DSSC student)
- Face-paint lion girl (DSSC student)
- Ellis-and-Max with mustaches and beret holding Max's painting
- Black mom + two boys with paper pig drawings (DSSC — confirm)
- "Ellis & Kids" banner (the minion-and-crafts banner from the old WP footer) — goes on the About page; Ellis will upload it to the project
- Brainy-brain mascot (logo asset)

### Stock or found, recut by Ellis
- Mom + curly toddler with blocks (homepage parallax hero)
- Toddler-with-balloon-hair + mom in orange hoodie
- Dad with laughing Down-syndrome toddler (circle crop, lovely)
- Two-moms feeding Asian toddler in high chair (from Pexels — needs the full-res original recovered via reverse image search)

### Gaps to fill later
- Authentic AAC moments
- More diverse abilities and ethnicities
- Possibly: real shots of Ellis working with families when comfortable / consented

---

## Logo

Current logo: brainy-brain mascot (cartoon brain with glasses and waving arms, transparent background). Wordmark not yet designed.

**Direction:** brain mascot on top, wordmark **curved underneath in a 1/3 arc that reads like a smile.** Capitalization undecided — `brightplay`, `BrightPlay`, or `brightPlay`. Font undecided. To be designed in a focused session.

Treat the brain as a recurring character, not a rigid logomark. It can wave from a footer, peek from a corner, hold a doodle. Light, playful, never the main event. The mascot was designed with arms specifically so she can pose — seasonal variants (summer sunglasses, winter hat, flower behind one ear, pumpkin in October) are part of the brand language. Subtle CSS animation on the homepage only: a tiny wave on load, a slow blink every several seconds. Restraint is the whole magic.

Color: **keep the mascot's current coloring as built (committed to git).** A shift toward mustard is a *possible* future revisit only if the final site context calls for it — not a to-do. The mascot stays as Ellis and Claude Code made it unless Ellis explicitly decides otherwise.

Name: TBD; *Bertie* is the current frontrunner. Naming can wait — the mascot doesn't need a name to start building.

---

## Tech stack & structure

- Plain HTML, CSS, JS — no framework, no build step (yet)
- Fully readable file structure: one HTML file per page, one shared CSS file (with CSS custom properties for theme), small JS only where needed (mobile nav, parallax hero, scroll reveal)
- Reusable modular section types (see Layout system above): `hero-parallax`, `full-width-band`, `one-column`, `two-column`, `three-column`
- Folder structure:
  ```
  /
  ├── index.html        (Home)
  ├── about.html
  ├── contact.html
  ├── /assets/
  │   ├── /css/styles.css
  │   ├── /js/main.js
  │   ├── /images/  (with /logo, /photos, /doodles, /icons subfolders)
  │   └── /fonts/   (if self-hosting)
  └── BRIEF.md
  ```
- Git-tracked from day one. Commit often.
- Architecture leaves room for an `/nl/` sibling directory later for the Dutch version. Content lives in clearly delimited sections to make translation copy-paste easy. Same flexibility lets Approach / Services / Resources split into their own pages later.
- Hosting target: Cloudflare Pages or Netlify free tier. Both push from Git.
- Booking: Calendly embed (free tier) on the contact page. Reevaluate for Cal.com later if open-source matters more than friction.
- **Out of scope for this site:** client portals, video hosting, voice-to-text notes, anything that touches PHI. Those live in a separate (future) `portal.brightplay.org` subdomain, built on a HIPAA-compliant SaaS like SimplePractice or Sessions Health — not custom code.

---

## Future / phase 2

- EFT International certification → September 2026 → add to Approach content
- PEERS for Preschoolers offerings (group)
- Parent events and workshops
- **Testimonial outreach to 3–5 past ABA families** — two-channel (Tally form + printed handout using the "Big Ask" banner image as header). Three questions: *what your child can do now, what you can do/feel differently as a parent, what another family should know.* Permission checkbox at the bottom. Site launches with a "Parent words coming soon" placeholder; testimonials populate as they come in.
- Splitting Approach / Services / Resources into their own pages as content grows
- Amsterdam: `/nl/` mirror of the site, Dutch-language content
- Possibly: a writing / blog section if Ellis wants a public voice
- Eventually: HIPAA-compliant client portal at `portal.brightplay.org` (rented, not built)

---

## Copy starters (Ellis's own lines, worth riffing on)

Phrases Ellis wrote, captured as voice samples and starting points — not final copy. Honest evaluation against the parent-as-protagonist framing:

| Line | Verdict |
|---|---|
| ***Play-based coaching that fits your day — and your way.*** | **Keep. Newly crafted, May 2026.** "Fits your day" delivers the not-another-thing promise; "and your way" delivers the parent-as-protagonist promise. The pause and the soft rhyme make it stick. Strong candidate for hero subtitle or secondary tagline. |
| *Play speaks louder than words.* | **Keep, and protect.** Riff on *actions speak louder than words.* Honors non-verbal and vocal-verbal kids. Quiet thesis for the whole practice. One of Ellis's strongest lines. |
| *Playful parents — Happy kids.* | **Keep.** Parent-first, clean rhythm, scannable on phone. Subtitle energy. |
| *You Are Capable Of So Much More Than You Can Imagine!* | Bones are right — names the parent as capable. Tighten — *"You can do more than you've been told"* lands harder, because it answers the specific judgment these parents carry. |
| *When Families Learn Effective Strategies, Communication Is Child's Play* | Pun lands ("child's play"). But the conditional structure (*when you learn X, then Y happens*) subtly positions Ellis as holder-of-knowledge, parent as learner. Old frame. Rework to put the parent in the driver's seat while keeping the pun. |
| *Early Childhood [Intervention] Coaching That Sparks Joy In Every Connection* | **Rework.** Drop *intervention* (per the note below) and drop *joy* (Marie Kondo "spark joy" baggage — still culturally heavy in 2026). **Keep *sparks*** as the verb — it ties to *bright* in BrightPlay, making the brand do the work. Direction: *"Sparks something bright."* / *"BrightPlay sparks."* / *"Sparking the bright in every connection."* The verb stays; the rest gets rebuilt. |

---

## A note on the word "intervention"

**Ellis's call: don't use the word *intervention* on the site at all.** The clinical/SEO argument for keeping it (parents searching for "early intervention" might find the site that way) is real, but loses to the more important argument: the word makes parents feel like they are being *intervened on*. It's the language of the system that has made them feel small. Use *coaching*, *support*, *play-based work*, *early childhood support* — language that puts the parent in the driver's seat. The page-title/SEO trade-off is consciously accepted.

---

## Working agreements with Claude

- **The brief is the boss.** When in doubt, re-read this document.
- **Apply the five tests** (zucchini-cake, judged-parent, welcome-by-depicting, one-eye-on-the-phone, "me-myself-and-I-can-do-it") to every meaningful decision.
- **Flexible sections, never a locked grid.** Build from the modular section types. Some content wants three columns; let it have them.
- **Commit often.** Every meaningful change → git commit with a clear message.
- **Show, don't tell.** When proposing a design direction, build it and let Ellis react to something real rather than describing it in the abstract.
- **Mobile first, always.**
- **Default to less.** Every section, every word, every animation has to earn its space.
