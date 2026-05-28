---
phase: 2
slug: resume-driven-content-rebuild
status: approved
shadcn_initialized: false
preset: none
created: 2026-05-29
approved: 2026-05-29
---

# Phase 2 - UI Design Contract

> Visual, interaction, and content presentation contract for Phase 2: Resume-Driven Content Rebuild.

---

## Phase Boundary

Phase 2 fills the approved Phase 1 executive portfolio shell with resume-derived professional content. The work should keep the Phase 1 visual system, navigation anchors, profile/contact architecture, and restrained agentic AI cues, then replace placeholder section content with substantive experience, systems, skills, achievements, education, and contact copy.

This phase does not introduce a blog, CMS, backend, case-study routes, heavy graph demos, package-manager cleanup, dead-code cleanup, or launch infrastructure. Phase 3 owns cleanup and launch readiness.

## Product Position

The page should read as a professional agentic AI engineering portfolio for hiring managers, AI/platform teams, senior engineers, and recruiters.

The visitor should understand:

1. Prakhar is currently positioned as an agentic AI engineer.
2. Oracle MTS-1 work is the strongest proof source.
3. The main proof is production systems: LangGraph/Python agentic harness work, deterministic workflows, governance, tool-call and cost control, incident triage, MTTR reduction, user satisfaction, and FastAPI control-plane impact.
4. Zolostays, Oracle internship, achievements, responsibilities, education, and skills support the professional story without making the page feel like a dense resume.

Tone must stay direct, technical, and measured. Avoid student-era language, generic AI hype, and over-polished marketing claims.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none |
| Preset | not applicable |
| Component library | none |
| Icon library | react-icons, existing package |
| Font | Space Grotesk for display and UI text; system sans fallback |

Implementation must continue using the local styled-components design system created in Phase 1. Do not add shadcn, Tailwind, Radix, Material UI, Framer Motion, or another UI framework in Phase 2.

### Component Philosophy

- Keep repeated content in centralized constants so copy, links, and metrics are not duplicated across sections.
- Prefer section-specific presentation components only when the generic shell cannot express the content clearly.
- Use cards for repeated role/system/skill/achievement items only; do not put cards inside cards.
- Use section bands and constrained inner content rather than floating page-level cards.
- Keep visual motifs restrained: trace lines, status labels, compact metrics, and control-plane language.
- Do not add visible instructional text explaining how to use the portfolio.

---

## Information Architecture

### Required Section Order

1. Hero / first viewport
2. Experience
3. Systems
4. Skills
5. Achievements, education, and responsibilities
6. Contact

If achievements, education, and responsibilities are folded into the Skills or Contact area for density, they must still be visually distinct and scannable.

### Navigation Anchors

Required anchors:

| Section | Anchor | Nav Label |
|---------|--------|-----------|
| Experience | `#experience` | Experience |
| Systems | `#systems` | Systems |
| Skills | `#skills` | Skills |
| Contact | `#contact` | Contact |

The header must remain compatible with these anchors. Header links must not point to removed IDs.

### Experience Section Contract

Experience is the primary content spine and must be ordered most recent to earlier:

1. Oracle - Member of Technical Staff - 1
2. Zolostays - Software Engineer Intern
3. Oracle - Project Intern

Oracle MTS-1 must receive the most visual weight. It may span a wider grid area or include more proof rows than the two earlier roles. Zolostays and Oracle Project Intern should be compact but still include quantified business impact.

Each experience item must include:

- Organization and role
- Timeframe if available from centralized content
- Location if available and useful
- Short system-oriented summary
- 2 to 4 impact points
- A compact stack or capability row

### Systems Section Contract

Systems should support the experience story rather than replace it. It should make the Oracle work easier to scan as production systems.

Required system cards:

| System | Required Proof |
|--------|----------------|
| Centralized agentic harness | Python, LangGraph, deterministic policy-driven workflows, governance, hallucination-risk mitigation, LLM tool-call control, cost control |
| DevOps incident triage agent | Tier-0 / OKE teams, 500+ Sev2 incidents, 30% MTTR reduction, 4.2/5 average user satisfaction |
| FastAPI control plane | agent management at scale, production safety guardrails, leadership-level operational control |

Use compact labels, metrics, and short paragraphs. Do not present these as demos, side projects, or speculative AI experiments.

### Skills Section Contract

Skills must be grouped into these four categories:

| Group | Required Skills |
|-------|-----------------|
| Agentic AI | Python, LangGraph, CrewAI, LLM orchestration, governance, tool-call control |
| Backend and Platform | Golang, FastAPI, Spring Boot, Java, SQL, Kafka, Redis, PostgreSQL |
| Cloud and DevOps | OCI, Docker, Kubernetes, Git, production operations |
| Fundamentals | C++, JavaScript, system design, DSA, operating systems |

Skills should look like a taxonomy, not a tag cloud. Use grouped lists or compact cards with stable spacing.

### Achievements, Education, and Responsibilities Contract

This content should be compact and credibility-oriented.

Required content:

- Q4 Champion at Oracle
- Winner of WebKriti 2023
- ICPC Gwalior-Pune 2020 regional rank 349
- OpenCode 2021 rank 13 out of 1000+
- Hack in the North core team
- Mentored 100+ students at Acciojob in DSA
- HackerEarth problem authoring
- IIIT Allahabad, B.Tech IT, CGPA 8.60

Use one concise section, rail, or grouped card set. This content must not visually compete with Oracle experience.

---

## Layout Contract

### Desktop

- Max content width stays 1120px to 1200px.
- Experience can use a timeline, role rail, or asymmetric grid, but the Oracle role must be the dominant item.
- Systems can use a three-card grid with equal-height cards.
- Skills can use four grouped cards or a two-by-two responsive grid.
- Achievements/education can use a compact list, two-column grid, or credibility rail.
- Contact should reuse centralized email, GitHub, LinkedIn, and location.

### Tablet

- Collapse dense grids to two columns.
- Keep Oracle readable without forcing long paragraphs into narrow cards.
- Keep metric rows stable and avoid reflow that makes cards jump in height on hover.

### Mobile

- Single-column flow.
- Role and system cards must have natural text wrapping.
- CTA buttons can stack at full width.
- No horizontal scrolling.
- No text may overlap trace/status visuals.
- Use content hierarchy rather than tiny labels to preserve readability.

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

Exceptions: none.

Spacing rules:

- Existing Phase 1 section padding can remain: 72px desktop, 56px tablet, 48px mobile.
- Role cards must use at least 20px mobile padding and 24px desktop padding.
- Skill chips or tags must use stable padding and must not change height on hover.
- Avoid dense resume-like bullet walls; group bullets into short proof rows.

---

## Typography

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Body | 16px | 400 | 1.65 |
| Small body | 15px | 400 | 1.6 |
| Label | 12px | 600-700 | 1.3 |
| Nav | 14px | 500 | 1.4 |
| Card Heading | 20px to 24px | 700 | 1.18 |
| Section Heading | 34px to 40px | 700-800 | 1.12 |
| Display | 64px desktop, 42px mobile | 750-800 | 1.02 desktop, 1.08 mobile |

Rules:

- Letter spacing must remain 0.
- Do not use viewport-width font scaling.
- Hero-scale type is reserved for `Prakhar Jalan`.
- Experience and systems cards must not use display-size typography.
- Long metrics and role titles must wrap naturally without overflowing cards or buttons.
- Prefer concise headings over dense multi-line titles.

---

## Color

Use the approved Phase 1 palette.

| Role | Value | Usage |
|------|-------|-------|
| Dominant (60%) | #F6F7F9 | Page background and broad section surfaces |
| Secondary (30%) | #151515 | Primary text, high-contrast footer band |
| Surface | #FFFFFF | Cards, nav background, content blocks |
| Muted Surface | #E7EAEE | Dividers, subtle rails, inactive traces |
| Muted Text | #5D6673 | Secondary copy, labels, metadata |
| Accent (10%) | #0F766E | CTAs, active trace nodes, selected status marks |
| Warm Signal | #B45309 | Sparse emphasis for impact metrics only |
| Destructive | #B42318 | Destructive actions only, unlikely in this phase |

Accent reserved for:

- Primary CTA
- Active section/status cue
- Selected trace node
- Focus states
- A small number of key Oracle system labels

Warm Signal reserved for:

- Quantified impact metrics such as `500+ Sev2`, `30% MTTR`, `4.2/5`, `$350/month`, `12%`

Color rules:

- Avoid one-note palettes.
- Do not introduce dominant purple, purple-blue gradients, beige/cream/tan, brown/orange, or dark blue/slate themes.
- Do not use gradient orbs, bokeh blobs, or decorative floating spheres.
- Maintain readable contrast for all card text and metadata.

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Primary CTA | View Resume |
| Resume fallback behavior | If `resumeUrl` is still `TODO_PUBLIC_RESUME_URL`, CTA routes to `#contact` and does not expose a local file path |
| Secondary CTA | See GitHub |
| Experience section eyebrow | Experience |
| Experience section heading | Professional systems, in reverse chronological order |
| Experience section lead | Resume-backed roles focused on agentic AI systems, backend platforms, and operational impact. |
| Systems section eyebrow | Systems |
| Systems section heading | Production agentic systems |
| Systems section lead | Selected Oracle systems showing orchestration, governance, incident triage, and control-plane reliability. |
| Skills section eyebrow | Skills |
| Skills section heading | Technical operating range |
| Skills section lead | Agentic AI, backend/platform, cloud/devops, and fundamentals grouped for quick scanning. |
| Contact section eyebrow | Contact |
| Contact section heading | Build the next production agent system |
| Contact section lead | Reach out through email, GitHub, or LinkedIn. Phone number is intentionally not published. |
| Empty state heading | Content unavailable |
| Empty state body | Use the contact links below if a public resume URL has not been configured yet. |
| Error state | Something did not load. Refresh the page or use the contact links below. |
| Destructive confirmation | Not applicable: Phase 2 has no destructive actions. |

Copy rules:

- Rewrite resume bullets into portfolio-native language.
- Keep metrics exact and resume-backed; do not invent new numbers.
- Do not expose the phone number from the resume.
- Do not ship a local filesystem resume path.
- Avoid phrases like `passionate`, `rockstar`, `ninja`, `AI wizard`, or `cutting-edge` unless tied to concrete proof.

---

## Interaction Contract

### Navigation

- Header links must continue mapping to `#experience`, `#systems`, `#skills`, and `#contact`.
- Header must not obscure anchored content.
- Hover and focus states must remain visible and restrained.

### CTAs and Links

- Resume CTA uses the centralized `profile.resumeUrl`.
- If no public resume URL exists, the CTA must route to `#contact` rather than a local file path.
- GitHub, LinkedIn, and external links must use `target="_blank"` with `rel="noopener noreferrer"`.
- Email links may use `mailto:`.
- No `tel:` links and no public phone number.
- Icon-only links, if added, must have accessible names.

### Motion

- Acceptable motion: small hover transitions, subtle trace/status pulse, and focus transitions.
- Avoid large continuous animations that compete with reading.
- Respect reduced-motion preferences for any new motion.

---

## Responsive and Accessibility Contract

- Semantic sections must use stable headings in document order.
- Experience cards should be articles or list items with readable role titles.
- Metrics must not be conveyed by color alone.
- Text must fit inside cards, buttons, chips, and labels at mobile widths.
- Buttons and links must have stable dimensions and focus-visible states.
- Profile/contact content must remain reachable without relying on hover.

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| shadcn official | none | not required |
| third-party registry | none | not allowed in Phase 2 |

Do not introduce registry blocks, UI kits, or third-party visual components in this phase.

---

## Implementation Alignment

Current codebase paths:

- Homepage composition: `src/pages/index.js`
- Shared content source: `src/constants/constants.js`
- Hero component: `src/components/Hero/Hero.js`
- Header component: `src/components/Header/Header.js`
- Footer component: `src/components/Footer/Footer.js`
- Shared primitives: `src/styles/GlobalComponents/index.js`
- Theme tokens: `src/themes/default.js`

Phase 2 implementation should expect edits to:

- `src/constants/constants.js`
- `src/pages/index.js`
- New or existing section components under `src/components/` if richer section-specific rendering is needed
- New adjacent `*Styles.js` files for any section-specific styled-components
- `src/styles/GlobalComponents/index.js` only for genuinely shared primitives

Do not make Phase 2 responsible for deleting old unused project components unless the active homepage requires it. Phase 3 owns dead-code cleanup.

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS

**Approval:** approved 2026-05-29
