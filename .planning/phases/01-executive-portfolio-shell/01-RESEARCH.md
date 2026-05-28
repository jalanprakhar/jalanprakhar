# Phase 01: Executive Portfolio Shell - Research

**Researched:** 2026-05-29
**Domain:** Next.js/styled-components portfolio shell redesign
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Use a large profile photo in the hero.
- **D-02:** The photo treatment must still support the executive, systems-oriented direction. It should not make the page feel like a college/student portfolio or generic personal landing page.
- **D-03:** The photo should integrate with the system/control-plane visual language rather than sitting in an unrelated decorative card.
- **D-04:** The primary `View Resume` CTA should use a stable online resume link.
- **D-05:** Do not hard-code the local `/Users/ppjalan/Downloads/PRAKHAR.pdf` path in app code.
- **D-06:** If the public resume URL is not available during implementation, create a clear content constant/TODO for the URL rather than wiring a broken or local-only link.
- **D-07:** Phase 1 should scaffold polished skeleton sections for `Experience`, `Systems`, `Skills`, and `Contact`.
- **D-08:** These shells should look production-ready and intentional, but detailed resume-derived content remains Phase 2 scope.
- **D-09:** Skeleton sections should preserve the first-viewport promise and provide credible structure without fake detailed content.

### the agent's Discretion
- Component boundaries and file splits may change as long as the app stays within the existing Next.js pages router and styled-components stack.
- The profile photo treatment may be circular, rectangular, or framed by trace/status details if it remains professional and inspectable.
- Phase 1 placeholder copy may be temporary if it is clearly structural and does not pretend to be final experience content.

### Deferred Ideas (OUT OF SCOPE)
- Detailed resume-derived experience, systems, skills, achievements, and contact content belong to Phase 2.
- Dead code removal, package manager selection, accessibility cleanup, and verification script additions belong to Phase 3 unless needed to avoid introducing regressions.
</user_constraints>

<architectural_responsibility_map>
## Architectural Responsibility Map

Single-tier static portfolio application - Phase 1 capabilities reside in the browser/client render layer, with Next.js only providing the existing page route, app wrapper, document wrapper, and static asset serving.

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Executive visual system | Browser/Client | Static assets | Theme tokens, global CSS, and styled-components own the visible language. |
| First-viewport positioning | Browser/Client | Static content | The hero copy, CTA labels, and credibility cues are static and must render immediately. |
| Profile photo integration | Browser/Client | Static assets | `public/images/profile.jpeg` is served statically and styled in the hero. |
| Section shell anchors | Browser/Client | Next.js page route | Internal anchors are rendered in the homepage and navigated by the header. |
| Resume/GitHub links | Browser/Client | External web | Links are static outbound anchors and must use safe attributes. |
</architectural_responsibility_map>

<research_summary>
## Summary

Phase 1 is a design-system and composition rebuild inside a small legacy Next.js 10 / React 17 / styled-components 5 app. The safest standard approach is to keep the existing framework and SSR styling path intact, replace the old dark gradient/student visual primitives, and rebuild the homepage around a single professional shell rather than introducing new dependencies or changing routing.

The UI-SPEC already defines the target palette, typography, section order, copy constraints, and interaction expectations. Implementation should therefore focus on concrete local artifacts: theme tokens, global body styles, shared section/CTA primitives, layout/header/footer shell, hero system/photo composition, and four polished placeholder sections.

**Primary recommendation:** Create one focused implementation plan that rewrites the homepage shell in place using styled-components, centralizes Phase 1 links/content constants, and verifies the result with source assertions plus a build attempt when dependencies are installed.
</research_summary>

<standard_stack>
## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 10.2.3 | Pages router, app/document wrappers, build command | Existing app framework; replacing it is unnecessary for Phase 1. |
| React | 17.0.2 | Component rendering | Existing component model. |
| styled-components | 5.3.x | Theme, global styles, local component CSS | Existing styling system and SSR integration. |
| styled-normalize | 8.0.7 | Browser CSS reset | Already injected in `src/styles/globals.js`. |
| react-icons | 4.2.0 | GitHub, LinkedIn, mail/status icons | Existing icon dependency; avoids adding a UI kit. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| None added | n/a | Phase 1 dependency control | Keep the shell rebuild source-only and avoid dependency/network work. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| styled-components primitives | Tailwind/shadcn/Radix | Violates UI-SPEC and adds dependency/routing churn. |
| Static anchors | Client-side menu state | Unneeded for a single-page static shell. |
| Existing animated SVG | New 3D/AI animation library | Adds gimmick risk and performance overhead outside the executive direction. |

**Installation:** No new packages are required for Phase 1.
</standard_stack>

<architecture_patterns>
## Architecture Patterns

### System Architecture Diagram

```text
Visitor request
  -> Next.js pages route `/`
  -> ThemeProvider + GlobalStyles
  -> Layout shell
  -> Header anchors + main page sections + footer
  -> Static assets and outbound profile/resume links
```

### Recommended Project Structure

```text
src/
├── pages/index.js                         # Homepage composition
├── layout/Layout.js                       # Header/main/footer wrapper
├── layout/LayoutStyles.js                 # Full-width page shell
├── styles/
│   ├── globals.js                         # Light executive base styles
│   ├── GlobalComponents/index.js          # Shared section/button primitives
│   └── theme.js                           # Existing ThemeProvider wrapper
├── themes/default.js                      # UI-SPEC tokens
├── constants/constants.js                 # Shared profile, nav, and Phase 1 shell data
└── components/
    ├── Header/                            # Stable top nav
    ├── Hero/                              # First viewport + profile photo + system cues
    └── Footer/                            # Contact/footer shell
```

### Pattern 1: Theme-Driven Local Design System
**What:** Move UI-SPEC colors, spacing, typography, and breakpoints into `src/themes/default.js`, then consume them through shared styled primitives and component style modules.
**When to use:** Any broad visual rebuild in the current app because styled-components already reads theme tokens everywhere.
**Execution note:** Preserve `ThemeProvider` and `_document.js`; do not change SSR setup in Phase 1.

### Pattern 2: Homepage Composition as Source of Truth
**What:** Keep `src/pages/index.js` as the ordered list of visible sections and render anchors for `experience`, `systems`, `skills`, and `contact`.
**When to use:** Single-page portfolio shell with no data fetching.
**Execution note:** Replace `Projects` and `Technologies` in the Phase 1 composition with polished shell sections; Phase 2 can fill or rename components with detailed content.

### Pattern 3: Centralized Link and Shell Data
**What:** Store repeated outbound URLs, nav items, CTA labels, and placeholder section metadata in `src/constants/constants.js`.
**When to use:** Header, hero, footer, and skeleton sections share labels or URLs.
**Execution note:** Set `resumeUrl` to a clear TODO placeholder until the stable public resume URL is provided; never use `/Users/ppjalan/Downloads/PRAKHAR.pdf`.

### Anti-Patterns to Avoid
- **Adding a component library:** Phase 1 needs a small local design system, not a dependency migration.
- **Keeping the old dark neon/purple visual shell:** It conflicts with `DES-01` and `DES-02`.
- **Faking detailed experience content:** Placeholder section shells are acceptable; detailed resume storytelling is Phase 2.
- **Hard-coding local resume paths:** This violates `D-05` and leaks local filesystem details.
</architecture_patterns>

<dont_hand_roll>
## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| UI component library | Custom framework or registry import | styled-components primitives | Existing app already has a styling stack. |
| Router/navigation system | Client state for active sections | Anchor links | Static single page does not need routing complexity. |
| Image pipeline | Custom asset loader | Static `/images/profile.jpeg` reference | Existing Next.js version and public assets are enough for Phase 1. |
| Animation engine | Continuous canvas/3D background | CSS trace/status cues | UI-SPEC calls for restrained system signals. |
</dont_hand_roll>

<common_pitfalls>
## Common Pitfalls

### Pitfall 1: Visual Rebuild Still Looks Like a Restyle
**What goes wrong:** Old `Projects`, `Technologies`, dark background, and gradient button primitives remain dominant.
**Why it happens:** Reusing existing sections without changing composition.
**How to avoid:** Make `src/pages/index.js` render the new hero and shell sections directly or through new components, and replace global/shared primitives with the UI-SPEC palette.
**Warning signs:** H1 below old "Full-Stack Developer" role, purple/blue gradient dividers, `Projects`/`Technologies` still first-class in Phase 1.

### Pitfall 2: Resume CTA Is Broken or Local-Only
**What goes wrong:** The CTA points to `/Users/ppjalan/Downloads/PRAKHAR.pdf` or an unavailable local file.
**Why it happens:** Treating the provided source PDF path as a public asset.
**How to avoid:** Use a centralized `resumeUrl` constant with a clear TODO if no stable online URL is available.
**Warning signs:** App code contains `/Users/` or `Downloads/PRAKHAR.pdf`.

### Pitfall 3: Profile Photo Feels Detached
**What goes wrong:** The profile image is placed in a generic card that competes with the executive systems direction.
**Why it happens:** Treating the hero as a generic split landing page.
**How to avoid:** Integrate photo with small status labels, trace rails, and a restrained control-plane frame; keep it inspectable and professional.
**Warning signs:** Large decorative card, unrelated background animation, or photo hidden behind effects.

### Pitfall 4: Mobile Text and Buttons Overflow
**What goes wrong:** Display type, CTA labels, and status chips exceed their containers.
**Why it happens:** Old primitives use large rem values and viewport-insensitive grids.
**How to avoid:** Use fixed responsive font sizes from UI-SPEC, stable button min-heights, wrapping CTA rows, and single-column mobile layout.
**Warning signs:** Horizontal scroll, clipped CTA text, overlapping hero/photo/status sections.
</common_pitfalls>

<verification_guidance>
## Verification Guidance

Recommended checks after implementation:
- Source assertion: `src/pages/index.js` no longer imports `BackgrooundAnimation`, `Projects`, or `Technologies` as dominant Phase 1 sections.
- Source assertion: app code contains `Prakhar Jalan`, `Agentic AI Engineer`, `View Resume`, `See GitHub`, and section anchors for `experience`, `systems`, `skills`, and `contact`.
- Source assertion: app code does not contain `/Users/ppjalan/Downloads/PRAKHAR.pdf`.
- Source assertion: theme/global styles contain the UI-SPEC color tokens `#F6F7F9`, `#151515`, `#0F766E`, and `#B45309`.
- Build check: run `npm run build` only after dependencies are installed. If `node_modules` is absent, record `next: command not found` as an environment/dependency blocker, not an application failure.
- Visual check: run the local dev server and inspect desktop and mobile widths if dependencies are available.
</verification_guidance>

<open_questions>
## Open Questions

1. **Stable online resume URL**
   - What we know: Phase 1 must expose `View Resume`.
   - What's unclear: The public URL was not provided.
   - Recommendation: Add `resumeUrl` as a centralized content constant with a TODO placeholder; executor must not hard-code the local PDF path.

2. **Profile photo final fit**
   - What we know: `public/images/profile.jpeg` exists, is a 668x1002 portrait JPEG, and is small enough for a hero image.
   - What's unclear: Whether the visual tone is ideal without inspecting the rendered page.
   - Recommendation: Use the asset in Phase 1 and verify in-browser; if it undermines the executive direction, keep the frame but reduce prominence or request a replacement in Phase 2.
</open_questions>

<sources>
## Sources

### Primary (HIGH confidence)
- `.planning/phases/01-executive-portfolio-shell/01-UI-SPEC.md` - locked visual, layout, copy, responsive, and interaction contract.
- `.planning/phases/01-executive-portfolio-shell/01-CONTEXT.md` - locked user decisions and phase boundary.
- `.planning/REQUIREMENTS.md` - Phase 1 requirements and v1 traceability.
- `.planning/ROADMAP.md` - Phase 1 goal, success criteria, and plan count.
- `.planning/codebase/*.md` - local codebase map for stack, structure, conventions, concerns, and architecture.
- Existing source files under `src/` - current implementation patterns and integration points.

### Secondary (MEDIUM confidence)
- Existing package manifests - dependency versions and scripts.

### Tertiary (LOW confidence - needs validation)
- None.
</sources>

<metadata>
## Metadata

**Research scope:**
- Core technology: Next.js pages router, React 17, styled-components 5.
- Ecosystem: existing local dependencies only.
- Patterns: theme-driven visual system, static homepage composition, centralized content constants.
- Pitfalls: visual carryover, resume URL leakage, detached photo treatment, mobile overflow.

**Confidence breakdown:**
- Standard stack: HIGH - directly observed in `package.json` and codebase map.
- Architecture: HIGH - static page structure is small and mapped.
- Pitfalls: HIGH - derived from current source and UI-SPEC constraints.
- Code examples: MEDIUM - no external docs fetched; implementation will use existing local patterns.

**Research date:** 2026-05-29
**Valid until:** 2026-06-28 for this stable local stack, unless dependencies are upgraded before execution.
</metadata>

---

*Phase: 01-executive-portfolio-shell*
*Research completed: 2026-05-29*
*Ready for planning: yes*
