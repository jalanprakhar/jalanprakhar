# Phase 01: Executive Portfolio Shell - Context

**Gathered:** 2026-05-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 delivers the professional portfolio shell: first viewport positioning, visual system, responsive layout, hero/nav/footer structure, and polished skeleton sections for the later resume-driven content. It must make the site feel like a credible agentic AI engineer portfolio before Phase 2 fills in detailed experience, systems, skills, achievements, and contact content.

This phase clarifies HOW the shell should behave and feel. It does not expand scope into detailed resume copy, blog content, backend services, or deep case-study pages.

</domain>

<decisions>
## Implementation Decisions

### Personal Presence
- **D-01:** Use a large profile photo in the hero.
- **D-02:** The photo treatment must still support the executive, systems-oriented direction. It should not make the page feel like a college/student portfolio or generic personal landing page.
- **D-03:** The photo should integrate with the system/control-plane visual language rather than sitting in an unrelated decorative card.

### CTA Behavior
- **D-04:** The primary `View Resume` CTA should use a stable online resume link.
- **D-05:** Do not hard-code the local `/Users/ppjalan/Downloads/PRAKHAR.pdf` path in app code.
- **D-06:** If the public resume URL is not available during implementation, create a clear content constant/TODO for the URL rather than wiring a broken or local-only link.

### Future Section Shells
- **D-07:** Phase 1 should scaffold polished skeleton sections for `Experience`, `Systems`, `Skills`, and `Contact`.
- **D-08:** These shells should look production-ready and intentional, but detailed resume-derived content remains Phase 2 scope.
- **D-09:** Skeleton sections should preserve the first-viewport promise and provide credible structure without fake detailed content.

### the agent's Discretion
- The planner may choose exact component boundaries and file splits as long as they follow the existing Next.js/styled-components structure and the UI-SPEC.
- The planner may choose whether the profile photo is circular, rectangular, or framed by trace/status details, provided it remains professional and inspectable.
- The planner may choose placeholder copy for Phase 1 skeleton sections if it is clearly temporary and does not pretend to be final experience content.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project and Scope
- `.planning/PROJECT.md` — Project positioning, core value, constraints, and resume-derived context.
- `.planning/REQUIREMENTS.md` — Phase 1 requirements: `POS-01`, `POS-02`, `DES-01`, `DES-02`, `DES-03`.
- `.planning/ROADMAP.md` — Phase 1 goal, success criteria, requirement mapping, and plan count.
- `.planning/STATE.md` — Current project state and initialization decisions.

### Phase Design Contract
- `.planning/phases/01-executive-portfolio-shell/01-UI-SPEC.md` — Locked visual system, layout contract, color, typography, copywriting, responsive, and interaction constraints for Phase 1.

### Codebase Map
- `.planning/codebase/CONVENTIONS.md` — Existing component, styled-components, import, and static content conventions.
- `.planning/codebase/STRUCTURE.md` — Where homepage, layout, theme, global styles, components, and constants live.
- `.planning/codebase/STACK.md` — Current Next.js 10, React 17, styled-components, and package-manager context.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/pages/index.js`: Current homepage composition point; Phase 1 shell should connect here.
- `src/layout/Layout.js` and `src/layout/LayoutStyles.js`: Existing page shell wrapper with header/main/footer.
- `src/styles/theme.js`, `src/styles/globals.js`, and `src/themes/default.js`: Existing theme/global-style path to update for Phase 1 visual system.
- `src/styles/GlobalComponents/index.js`: Existing shared styled-component primitives; can be replaced or simplified into the new local design system.
- `src/components/Header/Header.js` and `src/components/Footer/Footer.js`: Existing nav/contact/social areas that Phase 1 may rebuild.
- `public/images/profile.jpeg`: Existing profile image asset to evaluate for large hero photo use.

### Established Patterns
- Styling is implemented with styled-components, not CSS modules or a component library.
- Component-specific styles usually live in adjacent `*Styles.js` files.
- Static content currently lives partly in components and partly in `src/constants/constants.js`; new reusable profile/resume/social data should avoid further duplication.
- Local imports use relative paths; no path aliases are configured.

### Integration Points
- Homepage shell connects through `src/pages/index.js`.
- App-wide visual tokens connect through `src/styles/theme.js`, `src/styles/globals.js`, and `src/themes/default.js`.
- Navigation links should map to section anchors that Phase 1 creates for `Experience`, `Systems`, `Skills`, and `Contact`.
- External CTA/social links must be implemented safely in later code: no local filesystem paths, and external links need safe attributes and accessible labels.

</code_context>

<specifics>
## Specific Ideas

- Use a large profile photo while preserving a polished systems-engineering identity.
- Use a public online resume link for `View Resume`; do not ship a local Downloads path.
- Build polished skeleton sections for `Experience`, `Systems`, `Skills`, and `Contact` in Phase 1 so the site already feels intentionally redesigned before Phase 2 fills detailed content.
- Keep the UI-SPEC's restrained system cues: trace lines, orchestration nodes, runtime/status labels, control-plane vocabulary, and compact reliability metrics.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-Executive Portfolio Shell*
*Context gathered: 2026-05-29*
