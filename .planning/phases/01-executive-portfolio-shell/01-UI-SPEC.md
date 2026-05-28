---
phase: 1
slug: executive-portfolio-shell
status: approved
shadcn_initialized: false
preset: none
created: 2026-05-29
approved: 2026-05-29
---

# Phase 1 - UI Design Contract

> Visual and interaction contract for Phase 1: Executive Portfolio Shell.

---

## Phase Boundary

Phase 1 establishes the portfolio shell, first viewport, visual system, and responsive page structure. It does not need to complete every resume-derived content section; detailed experience, skills, achievements, and final content architecture belong to Phase 2.

## Product Position

The first viewport must make the viewer understand three things quickly:

1. This is Prakhar Jalan.
2. He is an agentic AI engineer.
3. His credibility is production systems: governance, reliability, orchestration, control planes, incident triage, and backend depth.

The experience should feel like an executive-quality engineering portfolio, not a student portfolio, startup landing page, or futuristic AI lab.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none |
| Preset | not applicable |
| Component library | none |
| Icon library | react-icons, existing package |
| Font | Space Grotesk for display and UI text; system sans fallback |

Implementation stays aligned with the existing Next.js and styled-components stack unless a later phase explicitly modernizes the app framework.

### Component Philosophy

- Build a small local design system through styled-components rather than introducing a UI kit.
- Use reusable primitives for page width, section spacing, eyebrow labels, CTA buttons, metric rows, and navigation links.
- Use icons only where they clarify a concept: GitHub, LinkedIn, mail, external link, reliability/status, orchestration nodes.
- Do not use decorative cards nested inside other cards.
- Do not add visible instructional text explaining how to use the site.

---

## Layout Contract

### First Viewport

The first viewport must be person-led and direct.

Required elements:
- H1: `Prakhar Jalan`
- Role line: `Agentic AI Engineer`
- Supporting line: communicate production-grade AI systems, governance, reliability, orchestration, and high-concurrency backend depth.
- Primary CTA: resume or contact action.
- Secondary CTA: GitHub or LinkedIn.
- A restrained system cue area: examples include trace lines, compact runtime metrics, orchestration nodes, or a control-plane status strip.

Do not make the hero a generic marketing hero. Do not make the main content sit inside a large decorative card. Do not use a split hero where the right side is just a framed card preview.

### Page Shell

Desktop structure:
- Sticky or visually stable top navigation.
- Max content width: 1120px to 1200px.
- First viewport min-height: 78vh to 88vh so the next section is hinted below the fold.
- Use section bands or unframed layouts, not stacked floating cards.

Mobile structure:
- Single-column flow.
- Navigation collapses to compact horizontal links or a simple top bar.
- Hero must preserve the H1, role line, CTA row, and at least one credibility cue without overlap.
- Avoid viewport-width font scaling.

### Section Order for Phase 1 Shell

Phase 1 should create structure for:
1. Hero / first viewport
2. Credibility signal strip
3. Placeholder shell for experience/systems
4. Placeholder shell for skills or technical focus
5. Contact/footer shell

Phase 2 fills detailed resume content into these sections.

---

## Spacing Scale

Declared values (must be multiples of 4):

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps, inline separators |
| sm | 8px | Compact element spacing, nav item gap |
| md | 16px | Default component padding and text rhythm |
| lg | 24px | Hero CTA gap, section internal group gap |
| xl | 32px | Layout columns, section clusters |
| 2xl | 48px | Major section breaks on mobile/tablet |
| 3xl | 64px | Major section breaks on desktop |
| 4xl | 96px | First viewport vertical breathing room on desktop |

Exceptions: none.

Spacing rules:
- Buttons and fixed-format UI elements must have stable height and min-width constraints.
- Metric/status strips must not resize when text changes; use fixed row height or stable grid tracks.
- Keep mobile section padding at 20px or 24px, not less.

---

## Typography

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Body | 16px | 400 | 1.65 |
| Label | 12px | 600 | 1.3 |
| Nav | 14px | 500 | 1.4 |
| Heading | 32px | 700 | 1.15 |
| Section Heading | 40px | 700 | 1.12 |
| Display | 64px | 750-800 | 1.02 |

Mobile typography:
- Body: 15px to 16px, line-height 1.6.
- Heading: 28px to 32px.
- Display: 40px to 44px.

Rules:
- Letter spacing must remain 0.
- Do not use viewport-width font scaling.
- Hero-scale type is reserved for `Prakhar Jalan` only.
- Compact panels, metric rows, nav, and status labels must use smaller type.
- Long role or impact statements must wrap naturally and never overflow buttons or panels.

---

## Color

| Role | Value | Usage |
|------|-------|-------|
| Dominant (60%) | #F6F7F9 | Page background and broad section surfaces |
| Secondary (30%) | #151515 | Primary text, high-contrast hero text, footer band |
| Surface | #FFFFFF | Local surfaces, nav background, content blocks |
| Muted Surface | #E7EAEE | Dividers, subtle status rails, inactive traces |
| Muted Text | #5D6673 | Secondary copy, labels, metadata |
| Accent (10%) | #0F766E | CTAs, active trace nodes, selected status marks |
| Warm Signal | #B45309 | Sparse emphasis for impact metrics only |
| Destructive | #B42318 | Destructive actions only, unlikely in this phase |

Accent reserved for:
- Primary CTA
- Active orchestration/status cue
- One or two impact metrics
- Focus states

Color rules:
- Avoid a one-note palette.
- Avoid dominant purple, purple-blue gradients, beige/cream/tan, brown/orange, or dark blue/slate themes.
- Use gradients only as subtle line or trace accents, not as the page background or hero foundation.
- Maintain readable contrast on all text.

---

## Visual Motifs

Use restrained "agentic systems" cues:
- Thin trace lines
- Small orchestration nodes
- Runtime/status labels
- Control-plane vocabulary
- Compact reliability metrics

Do not use:
- Gradient orbs, bokeh blobs, or decorative floating spheres
- Generic robot imagery
- Stock AI brain imagery
- Heavy neon cyberpunk styling
- Large animated SVG background as the primary visual language

If a person image is used, it must be inspectable and professional. Existing `public/images/profile.jpeg` may be evaluated, but do not force it into Phase 1 if the quality or tone undermines the executive direction.

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Primary CTA | View Resume |
| Secondary CTA | See GitHub |
| Hero H1 | Prakhar Jalan |
| Hero role | Agentic AI Engineer |
| Hero support | Building production-grade AI systems with governance, reliability, orchestration, and backend depth. |
| Credibility label | Production systems, not demos |
| Empty state heading | Systems content coming next |
| Empty state body | This section is reserved for resume-derived experience and impact metrics in Phase 2. |
| Error state | Something did not load. Refresh the page or use the contact links below. |
| Destructive confirmation | Not applicable: Phase 1 has no destructive actions. |

Tone:
- Direct, specific, professional.
- Prefer measurable impact over adjectives.
- Avoid "passionate", "rockstar", "ninja", and generic AI hype.
- Use concrete language: `agentic harness`, `policy-driven workflows`, `LLM orchestration`, `guardrails`, `incident triage`, `control plane`.

---

## Interaction Contract

### Navigation

- Top navigation links should map to section anchors.
- Link labels should be short: `Experience`, `Systems`, `Skills`, `Contact`.
- Active/hover states should be visible but restrained.
- Header must not obscure anchored content.

### CTAs

- Primary CTA opens or downloads the resume.
- Secondary CTA opens GitHub or LinkedIn.
- External links must include safe attributes in implementation.
- Icon-only links must have accessible labels in implementation.

### Motion

- Motion should be subtle and status-like.
- Acceptable: trace pulse, small node activation, nav hover, CTA transition.
- Avoid continuous large background animation that competes with reading.
- Respect reduced-motion preferences in implementation.

---

## Responsive Contract

Desktop:
- Use a two-zone hero only if both zones feel integrated into one composition, not text on one side and a decorative card on the other.
- Keep first viewport scannable in under five seconds.
- Show 2-3 credibility metrics or signal chips without turning the hero into a dashboard.

Tablet:
- Collapse layout to a clean stacked composition.
- Preserve CTA row and credibility strip.

Mobile:
- Use a single-column hero.
- CTAs can stack if needed.
- Avoid tiny social icons without labels.
- No text may overlap visual motifs.
- System cue area can reduce to a compact status strip.

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| shadcn official | none | not required |
| third-party registry | none | not allowed in Phase 1 |

Do not introduce shadcn, Tailwind, Radix, or another component system in Phase 1 without an explicit planning decision.

---

## Implementation Alignment

Current codebase paths:
- Homepage composition: `src/pages/index.js`
- App wrapper: `src/pages/_app.js`
- Theme wrapper: `src/styles/theme.js`
- Global styles: `src/styles/globals.js`
- Theme tokens: `src/themes/default.js`
- Shared primitives: `src/styles/GlobalComponents/index.js`
- Existing section components: `src/components/`

Phase 1 implementation should expect significant edits to:
- `src/pages/index.js`
- `src/layout/Layout.js`
- `src/layout/LayoutStyles.js`
- `src/styles/globals.js`
- `src/themes/default.js`
- `src/styles/GlobalComponents/index.js`
- Relevant component files under `src/components/`

Do not spend Phase 1 effort on detailed experience copy beyond what is needed to validate the first viewport and shell. Phase 2 owns detailed content.

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS

**Approval:** approved 2026-05-29
