# Phase 3: Dark Agentic UI Refinement - Context

**Gathered:** 2026-05-28T21:39:58Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 3 refines the active portfolio UI after Phase 2 content completion. It must make the homepage feel like a polished dark-mode, cinematic agentic AI system while fixing the specific weak spots the user called out: the Oracle MTS-1 card has too much blank space, and the contact/location presentation feels awkward.

This phase changes visual system, layout density, graph/system cues, section rhythm, Oracle role presentation, supporting-role layout, and contact/location treatment. It does not do launch cleanup, package-manager selection, dead-code removal, sample API cleanup, accessibility sweep beyond what the touched UI requires, or quality script setup; those moved to Phase 4.

</domain>

<decisions>
## Implementation Decisions

### Dark Agentic Visual Direction
- **D-01:** Rework the active homepage into a cinematic AI-system interface rather than the current light executive shell.
- **D-02:** Use a neural graph system as the dominant metaphor. The UI should feel like an intelligent orchestration/runtime surface, not a generic dark SaaS page.
- **D-03:** Keep the graph motif controlled: visible in the hero and key panels, but never so heavy that it competes with content legibility.
- **D-04:** Use a dark charcoal base with teal/cyan graph traces and sparse amber accents. Amber should be reserved for impact metrics and high-signal proof points.
- **D-05:** Preserve the professional, enterprise-agentic tone. The dark treatment can be more cinematic, but it must not become gimmicky, purple-heavy, one-note, or overdone futuristic AI-lab styling.

### Oracle MTS-1 Experience Layout
- **D-06:** Replace the current featured Oracle MTS-1 card layout with a split narrative + metrics structure.
- **D-07:** The Oracle section should use story left, metrics/proof right: the left side explains the current role, agentic harness, and system narrative; the right side contains dense metric/proof panels for LangGraph, 500+ Sev2, 30% MTTR, 4.2/5 satisfaction, FastAPI, governance, and control-plane guardrails.
- **D-08:** The Oracle MTS-1 presentation must remain visually dominant but should not rely on a tall single card with empty lower space. Density, rhythm, and hierarchy matter more than card size.
- **D-09:** Zolostays and Oracle Project Intern should sit below Oracle as a compact timeline. They remain visible and chronological, but clearly secondary to the current Oracle role.

### Contact and Location Treatment
- **D-10:** Remove location from the contact card grid. It should not appear as a standalone location card.
- **D-11:** Show location in the contact intro or status line, for example "Based in Bangalore, India" near the contact heading/lead. Keep contact cards focused on actionable channels such as email, GitHub, and LinkedIn.
- **D-12:** Contact/social data must remain centralized and safe. No phone number, no `tel:` link, and no local resume PDF path should be introduced.

### the agent's Discretion
- The agent may choose the exact graph implementation technique in CSS/styled-components as long as it stays performant and does not require new dependencies.
- The agent may choose exact section-by-section dark styling and spacing, provided desktop and mobile avoid excessive blank space, clipped text, horizontal scroll, and incoherent overlap.
- The agent may adjust hero/status/metric copy presentation to fit the dark neural-system direction, but must preserve Phase 2 resume-backed facts and the current professional content hierarchy.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project and Requirements
- `.planning/PROJECT.md` — Project positioning, active priority, constraints, and user decision to prioritize dark agentic UI refinement before launch cleanup.
- `.planning/REQUIREMENTS.md` — Phase 3 `DARK-01` through `DARK-04` requirements and Phase 4 boundary for deferred cleanup work.
- `.planning/ROADMAP.md` — Phase 3 goal, success criteria, and Phase 4 deferral.
- `.planning/STATE.md` — Current GSD state and roadmap evolution note.

### Prior Phase Decisions
- `.planning/phases/01-executive-portfolio-shell/01-CONTEXT.md` — Locked hero/photo/resume CTA decisions and prior visual shell intent.
- `.planning/phases/02-resume-driven-content-rebuild/02-CONTEXT.md` — Locked content hierarchy, Oracle proof depth, skill/contact architecture, and privacy constraints.
- `.planning/phases/02-resume-driven-content-rebuild/02-01-SUMMARY.md` — What Phase 2 actually shipped and verified.
- `.planning/phases/02-resume-driven-content-rebuild/02-VERIFICATION.md` — Verified Phase 2 content coverage and known deferred items.

### Active Implementation Files
- `src/themes/default.js` — Theme tokens currently define the light palette and should be updated or expanded for the dark neural-system direction.
- `src/styles/globals.js` — Body background, text, selection, focus, and reduced-motion rules.
- `src/styles/GlobalComponents/index.js` — Shared section wrappers, CTA links, and signal pills used across active homepage sections.
- `src/components/Hero/Hero.js` and `src/components/Hero/HeroStyles.js` — First viewport, profile photo, graph/status cues, CTAs, signals, and metrics.
- `src/components/ProfileSections/ProfileSections.js` and `src/components/ProfileSections/ProfileSectionsStyles.js` — Experience, systems, skills, credentials, contact sections, including the Oracle card and contact/location grid.
- `src/constants/constants.js` — Centralized resume facts, contact metadata, metrics, and profile links.
- `src/components/Header/Header.js`, `src/components/Header/HeaderStyles.js`, `src/components/Footer/Footer.js`, and `src/components/Footer/FooterStyles.js` — Header/footer dark-theme integration points.

### Codebase Maps
- `.planning/codebase/CONVENTIONS.md` — Local component/style/file conventions for styled-components work.
- `.planning/codebase/STRUCTURE.md` — Homepage, theme, layout, and component file locations.
- `.planning/codebase/STACK.md` — Next.js 10, React 17, styled-components 5, and no new test/build tooling expectation for this phase.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/themes/default.js`: Current light palette is centralized. Phase 3 can change tokens to dark charcoal, teal/cyan, sparse amber, and dark surfaces rather than hard-coding every component.
- `src/styles/GlobalComponents/index.js`: `PageSection`, `SectionInner`, section headings/leads, signal pills, and CTA links are shared primitives. Updating these can carry the dark visual system across most sections.
- `src/components/Hero/HeroStyles.js`: Already has a grid background, trace rail, status bar, metric grid, and animated node. These are strong starting points for a controlled neural graph hero.
- `src/components/ProfileSections/ProfileSections.js`: Experience currently maps all roles into `RoleCard`. It can special-case the first Oracle role into a split narrative + metrics layout while keeping Zolostays and internship in a compact timeline.
- `src/components/ProfileSections/ProfileSectionsStyles.js`: Current `RoleCard` uses `min-height: 420px` and `grid-row: span 2` for the featured role, which contributes to the blank-space problem.
- `src/constants/constants.js`: Contact and location are centralized in `profile` and `contactHighlights`. Location can be removed from `contactHighlights` cards while still shown via `profile.location` in the contact intro/status line.

### Established Patterns
- Styling is styled-components with adjacent `*Styles.js` files.
- Static/repeated content stays in `src/constants/constants.js`.
- Local imports use relative paths; no path aliases are configured.
- Cards use 8px radii; maintain that unless the existing design system requires otherwise.
- No new libraries should be needed for this visual refinement.

### Integration Points
- `src/pages/index.js` composes `Hero`, `ExperienceSection`, `SystemsSection`, `SkillsSection`, `CredentialsSection`, and `ContactSection`; the section order should remain unless planning finds a concrete layout reason.
- Header navigation anchors remain `#experience`, `#systems`, `#skills`, and `#contact`.
- Contact/social/resume behavior stays centralized through `profile`, `profileLinks`, and contact data constants.
- Phase 4 owns dead code, lockfile, API sample, and quality script work; do not burn Phase 3 scope on those unless a touched UI file has a direct defect.

</code_context>

<specifics>
## Specific Ideas

- Make the portfolio feel like a controlled neural graph/runtime interface: dark charcoal base, visible teal/cyan graph traces in hero/key panels, sparse amber metrics.
- The Oracle section should not be a giant card. It should read like a split system brief: narrative on the left, dense proof/metric/control-plane panels on the right.
- Supporting roles should become a compact timeline under Oracle.
- Contact should present location as part of the intro/status line and keep cards to direct action channels.
- Desktop and mobile need visual QA for blank space, clipped text, overlap, and graph/content balance.

</specifics>

<deferred>
## Deferred Ideas

- Phase 4 retains quality and launch readiness: dead/sample code cleanup, accessibility/link safety sweep, package manager selection, and build/quality scripts.
- v2 still owns blog/writing, CMS/content backend, deep case-study pages, and advanced AI graph demos as separate future capabilities.

</deferred>

---

*Phase: 3-Dark Agentic UI Refinement*
*Context gathered: 2026-05-28T21:39:58Z*
