---
phase: 3
slug: dark-agentic-ui-refinement
status: approved
shadcn_initialized: false
preset: none
created: 2026-05-29
approved: 2026-05-29
---

# Phase 3 - UI Design Contract

> Visual, interaction, and content presentation contract for Phase 3: Dark Agentic UI Refinement.

---

## Phase Boundary

Phase 3 turns the active single-page portfolio from the Phase 2 light executive shell into a darker, denser, more agentic portfolio interface. The work must make the page feel like a cinematic AI-system surface while directly fixing two weak spots identified by the user:

1. The Oracle MTS-1 card currently has too much blank space.
2. The location card in Contact feels awkward and should not be a standalone card.

This phase owns the dark visual system, neural graph motif, hero/key-panel styling, Oracle experience layout, supporting-role timeline, and contact/location treatment. Phase 4 still owns launch cleanup, dead/sample code removal, package-manager lockfile decisions, broader accessibility/external-link sweeps, and build/quality script setup.

## Product Position

The page should read as the portfolio of a working Agentic AI Engineer who builds governed production systems, not as a college portfolio and not as a generic AI landing page.

The visitor should understand:

1. Prakhar is currently an Agentic AI Engineer with production Oracle MTS-1 work.
2. The strongest proof is agent orchestration, LangGraph/Python harness work, DevOps incident triage, FastAPI control-plane design, governance, and guardrails.
3. The dark system aesthetic supports credibility and scanning; it must not overpower content.
4. Earlier roles are important but secondary to Oracle MTS-1.

Tone must stay direct, technical, enterprise-agentic, and measured. Avoid generic AI hype, student-era language, purple-heavy futurism, and decorative "AI lab" styling.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none |
| Preset | not applicable |
| Component library | none |
| Icon library | react-icons, existing package |
| Font | Space Grotesk for display and UI text; system sans fallback |
| Styling | styled-components 5, existing adjacent `*Styles.js` pattern |

Do not add shadcn, Tailwind, Radix, Material UI, Framer Motion, animation libraries, canvas libraries, or graph visualization packages for Phase 3.

### Component Philosophy

- Use the existing styled-components design system and adjacent style files.
- Keep repeated resume/profile/contact data centralized in `src/constants/constants.js`.
- Use cards only for repeated items, proof panels, and contact channels; do not nest cards inside cards.
- Build a controlled neural graph language through CSS backgrounds, trace rails, border treatments, compact node/line motifs, and proof-panel rhythm.
- Do not add visible instructional text explaining the interface or keyboard shortcuts.
- Use profile photo `/images/profile.jpeg` as the human visual asset; do not replace it with abstract AI art.

---

## Information Architecture

### Required Section Order

1. Hero / first viewport
2. Experience
3. Systems
4. Skills
5. Achievements, education, and responsibilities
6. Contact

### Navigation Anchors

| Section | Anchor | Nav Label |
|---------|--------|-----------|
| Experience | `#experience` | Experience |
| Systems | `#systems` | Systems |
| Skills | `#skills` | Skills |
| Contact | `#contact` | Contact |

Header links must remain compatible with those anchors.

### Hero Contract

The hero must become the first clear dark agentic signal.

Required properties:

- Dark charcoal page background.
- Controlled neural graph field visible enough to establish the AI-system metaphor.
- Profile photo remains present and inspectable.
- CTA row remains practical: resume routes to public URL only when available, otherwise `#contact`; GitHub opens safely.
- Hero metrics remain compact and resume-backed.
- Graph/status elements must not overlap text on desktop or mobile.

### Experience Contract

Oracle MTS-1 is the primary proof object. It must use a split layout:

| Area | Content |
|------|---------|
| Left narrative | Current role, Oracle company/role/time/location, short system story, selected impact bullets, stack chips |
| Right proof | Dense metric/proof panels for LangGraph, 500+ Sev2 incidents, 30% MTTR, 4.2/5 satisfaction, FastAPI, governance, and guardrails |

Oracle must stay visually dominant but must not rely on a tall single card with empty lower space. Remove the `grid-row: span 2` / `min-height: 420px` featured-card pattern that caused blank space.

Zolostays and Oracle Project Intern must sit below Oracle as a compact chronological timeline. They remain visible and resume-backed, but they should not compete with the current Oracle role.

### Systems, Skills, and Credentials Contract

- Systems keep supporting Oracle proof and may adopt the same dark panel language.
- Skills remain grouped as Agentic AI, Backend and Platform, Cloud and DevOps, and Fundamentals.
- Credentials remain compact and should not visually compete with Experience.
- All section headings must use content hierarchy, not oversized marketing composition.

### Contact Contract

Contact cards must be actionable channels:

1. Email
2. GitHub
3. LinkedIn

Location must move into the contact heading/intro/status line, for example `Based in Bangalore, India`. Location must not be a standalone card.

Privacy constraints:

- No phone number.
- No `tel:`.
- No local resume path such as `/Users/ppjalan/Downloads/PRAKHAR.pdf`.

---

## Layout Contract

### Desktop

- Max content width stays 1120px to 1200px.
- Hero uses a two-column content/photo-system composition with a controlled graph background.
- Oracle experience uses a two-column split inside one dominant section: narrative left and proof grid right.
- Supporting roles render as compact timeline rows/cards below Oracle.
- Contact grid uses three equal actionable cards.

### Tablet

- Hero and Oracle split collapse to one column.
- Proof panels use two columns only when enough width exists.
- Supporting timeline stays compact without squeezing long text into narrow columns.

### Mobile

- Single-column flow.
- CTA buttons can stack full width.
- Contact channel cards stack.
- Graph/background elements must remain behind content and must not create horizontal scroll.
- Long email, URL, role title, and metric text must wrap without clipping.

---

## Spacing Scale

Declared values must remain multiples of 4:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps, inline separators |
| sm | 8px | Compact metadata gaps, tag gaps |
| md | 16px | Default component padding and text rhythm |
| lg | 24px | Card padding, role header groups |
| xl | 32px | Section header to content gap |
| 2xl | 48px | Major section breaks on mobile/tablet |
| 3xl | 64px | Major section breaks on desktop |
| 4xl | 96px | Reserved for hero/major top-level breathing room |

Spacing rules:

- Cards and proof panels use 20px mobile padding and 24px desktop padding.
- Oracle split must reduce empty space through content-driven height, not forced min-height.
- Avoid large empty vertical gaps in Oracle proof area and contact.
- Stable dimensions must prevent hover states from shifting layout.

---

## Typography

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Body | 16px | 400 | 1.65 |
| Small body | 15px | 400 | 1.6 |
| Label | 12px | 650-800 | 1.3 |
| Nav | 14px | 600 | 1.4 |
| Card Heading | 20px to 24px | 700-800 | 1.18 |
| Section Heading | 34px to 40px | 700-800 | 1.12 |
| Display | 64px desktop, 42px mobile | 750-800 | 1.02 desktop, 1.08 mobile |

Rules:

- Letter spacing must remain 0.
- Do not use viewport-width font scaling.
- Hero-scale type is reserved for `Prakhar Jalan`.
- Metrics and proof panels should use compact headings, not display type.
- Long technical phrases must wrap naturally.

---

## Color

Approved Phase 3 signal language:

| Role | Target | Usage |
|------|--------|-------|
| Dominant | Dark charcoal, near-black green-black | Page background and broad surfaces |
| Surface | Dark raised charcoal / deep teal-black | Cards, header, hero photo frame, contact panels |
| Muted Surface | Dark grid lines and rails | Dividers, neural graph lines, inactive traces |
| Text | Soft off-white / pale cyan-white | Primary copy |
| Muted Text | Desaturated blue-green gray | Secondary copy, metadata |
| Accent | Teal/cyan | CTAs, graph traces, focus states, active nodes |
| Warm Signal | Sparse amber | Impact metrics and high-signal proof values only |
| Destructive | Red | Destructive actions only, unlikely in this phase |

Suggested concrete palette:

| Token | Value |
|-------|-------|
| page | `#071012` |
| surface | `#0D171A` |
| surfaceElevated | `#102126` |
| mutedSurface | `#183238` |
| text | `#E8F7F6` |
| mutedText | `#93A9AA` |
| accent | `#18CFC3` |
| cyan | `#22D3EE` |
| warmSignal | `#F59E0B` |
| border | `rgba(125, 242, 230, 0.18)` |
| softBorder | `rgba(125, 242, 230, 0.10)` |

Color rules:

- Avoid purple and purple-blue gradients.
- Avoid beige/cream/tan, brown/orange, and dark blue/slate dominance.
- Amber is for metrics/proof, not broad backgrounds.
- No decorative orbs, bokeh blobs, or floating spheres.

---

## Motion

- Existing subtle pulse can remain for active nodes.
- Motion must stop under `prefers-reduced-motion: reduce`.
- Do not introduce large continuous animation, parallax, canvas animation, or moving graph fields in Phase 3.

---

## Six-Dimension UI Check

| Dimension | Contract |
|-----------|----------|
| Visual coherence | Dark charcoal + teal/cyan + sparse amber reads as one system, without one-note color treatment. |
| Hierarchy | Oracle MTS-1 dominates through split layout and proof density; earlier roles are compact timeline items. |
| Responsiveness | Desktop/tablet/mobile avoid overlap, horizontal scroll, clipped text, and excessive blank areas. |
| Accessibility basics | Maintain focus-visible styles, sufficient contrast, semantic sections, image alt text, and safe external links where touched. |
| Content fidelity | All Phase 2 resume-backed facts remain intact; no phone, `tel:`, or local resume path is introduced. |
| Implementation fit | Use existing Next.js, React, styled-components, react-icons, constants, and local style patterns only. |

## Verification Expectations

- Source checks confirm the dark palette tokens exist in `src/themes/default.js`.
- Source checks confirm `grid-row: span 2` and `min-height: 420px` no longer drive the Oracle card.
- Source checks confirm Oracle proof panels include `LangGraph`, `500+`, `30%`, `4.2/5`, `FastAPI`, `Governance`, and `Guardrails`.
- Source checks confirm `contactHighlights` excludes Location while `profile.location` appears in contact intro/status copy.
- Source checks confirm no `tel:` or `/Users/ppjalan/Downloads/PRAKHAR.pdf` appears in `src`.
- `NODE_OPTIONS=--openssl-legacy-provider npm run build` exits 0.

---

*Phase: 3-Dark Agentic UI Refinement*
*UI contract approved: 2026-05-29*
