# Phase 03: Dark Agentic UI Refinement - Research

**Researched:** 2026-05-29
**Mode:** Inline research because GSD subagents are not installed in this runtime.
**Scope:** Plan Phase 3 well using local project artifacts, Phase 3 context, active source files, prior phase outputs, and the generated UI-SPEC.
**External research:** Not used. The user instructed not to start MCP servers, and this phase needs no new library, web data, or external API.

## User Constraints

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
- **D-11:** Show location in the contact intro or status line, for example `Based in Bangalore, India` near the contact heading/lead. Keep contact cards focused on actionable channels such as email, GitHub, and LinkedIn.
- **D-12:** Contact/social data must remain centralized and safe. No phone number, no `tel:` link, and no local resume PDF path should be introduced.

## Standard Stack

- Use the existing Next.js 10.2.3, React 17.0.2, styled-components 5.3.x, styled-normalize, and react-icons stack. [VERIFIED: `package.json`]
- Do not add dependencies for Phase 3. The dark neural-system visual treatment can be implemented with theme tokens, CSS gradients/lines/nodes, React component structure, and styled-components. [VERIFIED: `03-UI-SPEC.md`, `src/components/Hero/HeroStyles.js`]
- Keep the existing `pages/` router and styled-components SSR setup intact. [VERIFIED: `src/pages/index.js`, `src/pages/_app.js`, `src/pages/_document.js`]
- The build environment uses modern Node with a legacy Next/Webpack stack; use `NODE_OPTIONS=--openssl-legacy-provider npm run build` for production build verification. [VERIFIED: prior Phase 1/2 summaries]

## Current Implementation Findings

### Theme and Global Shell

- `src/themes/default.js` still contains the Phase 1/2 light palette: `#F6F7F9` page, `#FFFFFF` surface, `#151515` text, `#0F766E` accent, and `#B45309` warm signal.
- `src/styles/globals.js` reads `theme.colors.page`, `theme.colors.text`, and `theme.colors.accent`; it can carry the dark mode globally after tokens are updated.
- `src/styles/GlobalComponents/index.js` owns `PageSection`, `SectionInner`, section headings/leads, `SignalPill`, `PrimaryLink`, and `SecondaryLink`. Updating these primitives will spread the dark system across most sections.
- `src/components/Header/HeaderStyles.js` and `src/components/Footer/FooterStyles.js` use theme tokens and only need dark-token integration, not structural rewrites.

### Hero

- `src/components/Hero/HeroStyles.js` already has a grid background, trace rail, animated node, status bar, metric grid, and profile photo frame. These are strong analogs for a controlled neural graph system.
- The current hero background is light and grid-based. Phase 3 should retain the grid/trace concept but retune it to dark charcoal, teal/cyan traces, and restrained graph fields.
- The profile image already exists and should stay as the primary visual asset. No generated image or external asset is needed.

### Experience

- `src/components/ProfileSections/ProfileSections.js` currently maps every `experienceItems` entry through the same `RoleCard`.
- `src/components/ProfileSections/ProfileSectionsStyles.js` applies `min-height: ${({ featured }) => featured ? '420px' : 'auto'};` and `RoleCard:first-child { grid-row: span 2; }`. This is the direct source of the Oracle MTS-1 blank-space issue.
- The correct Phase 3 fix is structural, not just color: split the first Oracle item out from the supporting roles, render Oracle as a narrative + proof layout, and render remaining roles as compact timeline items below.
- `src/constants/constants.js` already contains all required Oracle facts, but adding an explicit `proofPanels` array to the Oracle item will make the dense proof grid deterministic and easy to verify.

### Contact

- `src/constants/constants.js` currently includes `Location` as the fourth `contactHighlights` item.
- `src/components/ProfileSections/ProfileSections.js` maps `contactHighlights` directly into cards, so removing Location from that array and rendering `profile.location` in contact intro/status copy will satisfy D-10 and D-11.
- `ContactGrid` currently uses four columns. It should become three columns for Email, GitHub, and LinkedIn.

## Architecture Patterns

### Theme-First Dark Mode

- Update `src/themes/default.js` first so component styles can continue using semantic tokens instead of many one-off hex values.
- Keep legacy compatibility keys (`primary1`, `background1`, `accent1`, `button`, `background2`) mapped to new dark tokens so older untouched components do not break.
- Add optional semantic tokens only if they reduce hard-coding, such as `surfaceElevated`, `cyan`, `graphLine`, and `glow`.

### Controlled Neural Graph

- Use CSS backgrounds, borders, trace rails, tiny nodes, and line overlays; avoid canvas, SVG illustration rewrites, animation libraries, or heavy graph engines.
- Keep graph visuals behind content or inside key panels. Do not put graph decoration over text.
- Keep motion minimal and covered by the existing `prefers-reduced-motion` global rule.

### Oracle Split Pattern

- In `ProfileSections.js`, derive:
  - `const [featuredExperience, ...supportingExperiences] = experienceItems`
  - Render `OracleFeature` for `featuredExperience`.
  - Render `SupportingTimeline` for the rest.
- In `constants.js`, add `proofPanels` to the Oracle item with exact labels/values for `LangGraph`, `500+ Sev2`, `30% MTTR`, `4.2/5`, `FastAPI`, `Governance`, and `Guardrails`.
- In styles, replace `ExperienceGrid`/`RoleCard` dependence with a feature split plus timeline. Existing `RoleHeader`, `MetricList`, `ImpactList`, and `StackList` can be reused or adapted.

### Contact Status Pattern

- Keep `profile.location` centralized.
- Remove the Location object from `contactHighlights`.
- Add a small contact status line near the heading: `Based in ${profile.location}`.
- Keep cards actionable and external links safe with `target="_blank"` and `rel="noopener noreferrer"` for GitHub and LinkedIn.

## Recommended Plan Shape

Use the single plan already listed in ROADMAP.md:

1. Establish the dark theme foundation across semantic tokens, global styles, shared sections, header, and footer.
2. Convert the hero into a controlled neural graph system surface while preserving profile photo, CTAs, metrics, and mobile safety.
3. Redesign the experience section with Oracle split narrative + proof panels and compact supporting timeline.
4. Move location into the contact intro/status line, keep only actionable contact cards, then verify source assertions and build.

This matches Phase 3 scope and avoids pulling Phase 4 cleanup work forward.

## Don't Hand-Roll

- Do not add a graph visualization library, animation library, canvas runtime, or new component framework.
- Do not create a landing page or separate route.
- Do not delete old `Projects`, `Technologies`, `BackgrooundAnimation`, sample API files, lockfiles, or dead code unless a touched active UI file has a direct defect. Phase 4 owns cleanup.
- Do not add a contact form, backend, CMS, API route, or dynamic resume loader.
- Do not expose phone number, `tel:`, or `/Users/ppjalan/Downloads/PRAKHAR.pdf`.

## Common Pitfalls

- Only darkening colors without changing Oracle layout will fail DARK-02 and D-06 through D-08.
- Retaining `grid-row: span 2` or `min-height: 420px` on the featured role will likely preserve the blank-space complaint.
- Moving location to footer only would not satisfy the explicit contact intro/status-line direction.
- Overusing amber in borders/backgrounds will violate D-04; amber belongs on metrics and proof values.
- A full-screen or heavily animated graph field would violate D-03 and D-05.
- Dark blue/slate or purple-heavy styling would violate the UI-SPEC color constraints.

## Package Legitimacy Audit

| Package | Action | Provenance | Status |
|---------|--------|------------|--------|
| none | No package installs planned | Phase can use existing dependencies | PASS |

## Security Domain

- Trust boundaries are static source content, local public assets, and outbound external links.
- Primary risk is information disclosure by reintroducing phone text, `tel:`, or local resume paths while editing centralized constants/contact.
- External links should continue using the existing safe `target`/`rel` pattern.
- No user input, backend, database, auth, or form submission exists in this phase.

## Verification Strategy

- Dark theme assertions should check the new dark palette tokens in `src/themes/default.js`.
- Oracle layout assertions should check for the new split/proof identifiers and absence of `grid-row: span 2` and `min-height: 420px`.
- Oracle proof assertions should check `LangGraph`, `500+`, `30%`, `4.2/5`, `FastAPI`, `Governance`, and `Guardrails` in active source.
- Contact assertions should check that `contactHighlights` no longer contains Location while `profile.location` appears in the contact intro/status.
- Privacy assertions should check `rg "tel:|/Users/ppjalan/Downloads/PRAKHAR.pdf" src` returns no matches.
- Build verification should use `NODE_OPTIONS=--openssl-legacy-provider npm run build`.

## Open Questions (RESOLVED)

1. **Should Phase 3 use a generated image or graph library?** RESOLVED: No. Use existing profile photo and CSS/styled-components graph language.
2. **Should supporting roles stay visible?** RESOLVED: Yes. Render them chronologically as a compact timeline below Oracle.
3. **Should location remain as a contact card?** RESOLVED: No. Move it into the contact intro/status line.
4. **Should Phase 3 include launch cleanup?** RESOLVED: No. Phase 4 owns cleanup and launch readiness.
