# Phase 03: Dark Agentic UI Refinement - Pattern Map

**Mapped:** 2026-05-29
**Purpose:** Existing code analogs the executor should read before changing Phase 3 files.

## Planned File Touches and Closest Analogs

| Planned file | Role in Phase 3 | Closest existing analog | Pattern to preserve | Pattern to replace |
|--------------|-----------------|-------------------------|---------------------|--------------------|
| `src/themes/default.js` | Dark semantic palette source | Current Phase 1/2 theme tokens | Keep semantic token names and compatibility keys so existing components continue reading `theme.colors.*`. | Light palette values that keep the active page in the old executive-shell mode. |
| `src/styles/globals.js` | Global page background, text, focus, selection, reduced motion | Current global style using theme tokens | Keep normalize, reduced-motion handling, focus-visible outline, and `overflow-x: hidden`. | Light selection/focus colors that do not fit the new dark agentic palette. |
| `src/styles/GlobalComponents/index.js` | Shared section, CTA, pill, and card primitives | Existing `PageSection`, `SectionInner`, `SectionHeading`, `PrimaryLink`, `SecondaryLink`, `SignalPill` | Preserve max widths, spacing scale, 8px radii, and breakpoint patterns. | Light backgrounds, white cards, low-contrast dark-on-light assumptions. |
| `src/components/Header/HeaderStyles.js` | Sticky dark navigation shell | Current Header styled-components | Preserve centralized nav/profile links, safe social link behavior, and responsive wrap. | Light translucent header and white social icon backgrounds. |
| `src/components/Footer/FooterStyles.js` | Dark footer integration | Current footer already uses dark `theme.colors.text` | Preserve footer grid and social link patterns. | Hardcoded old dark/text assumptions if they clash with new theme tokens. |
| `src/components/Hero/Hero.js` | First viewport content composition | Current hero reading `heroCopy`, `heroMetrics`, `heroSignals`, and `profile` | Preserve centralized data, profile image, CTA safety, and metric mapping. | If needed, add only small structural hooks for graph/status styling; do not hard-code resume facts here. |
| `src/components/Hero/HeroStyles.js` | Controlled neural graph hero | Current grid background, trace rail, animated node, photo frame, status bar, metric grid | Reuse the existing system-visual idiom and breakpoint structure. | Light grid/photo frame styling and low-intensity graph cues. |
| `src/constants/constants.js` | Oracle proof panels and contact data | Current `experienceItems`, `systemProofs`, `contactHighlights`, and `profile.location` | Keep resume facts centralized; keep no phone and no local resume path. | Location as a `contactHighlights` card; implicit Oracle proof that is hard to lay out densely. |
| `src/components/ProfileSections/ProfileSections.js` | Experience and contact structure | Current Phase 2 presentational mapping components | Preserve semantic sections and centralized constants mapping. | Uniform role-card mapping for Oracle plus supporting roles; contact card grid containing Location. |
| `src/components/ProfileSections/ProfileSectionsStyles.js` | Dark section panels, Oracle split, supporting timeline, contact grid | Current role card, metric list, system card, skill card, contact card styles | Preserve adjacent styled-components, 8px radii, theme breakpoints, natural wrapping, and no nested cards. | `min-height: 420px`, `grid-row: span 2`, four-column contact grid with Location card. |

## Data Flow

```text
src/themes/default.js
  -> globals, shared section primitives, header/footer, hero, profile sections

src/constants/constants.js
  -> Header nav/social links
  -> Hero copy, CTA targets, signals, metrics
  -> ProfileSections Oracle proof panels, supporting timeline, systems, skills, credentials, contact channels
  -> Footer email/location/social links

src/pages/index.js
  -> Layout
  -> Hero
  -> ExperienceSection
  -> SystemsSection
  -> SkillsSection
  -> CredentialsSection
  -> ContactSection
```

## Concrete Existing Patterns

### Theme Token Usage

- `src/styles/globals.js` already reads `theme.colors.page`, `theme.colors.text`, and `theme.colors.accent`.
- `src/styles/GlobalComponents/index.js`, `HeroStyles.js`, `ProfileSectionsStyles.js`, `HeaderStyles.js`, and `FooterStyles.js` already read theme tokens.
- Phase 3 should update semantic tokens first and only introduce local rgba/gradient values where graph-specific visuals need them.

### Centralized Profile and Contact Data

- `src/components/Header/Header.js` and `src/components/Footer/Footer.js` read `profile`, `profileLinks`, and `navItems` from constants.
- `src/components/ProfileSections/ProfileSections.js` reads `contactHighlights`.
- Phase 3 should keep that architecture, remove only the Location contact card, and render `profile.location` directly in the contact section.

### Hero System Visual

- `HeroStyles.js` already has `TraceRail`, `Node`, `PhotoFrame`, `StatusBar`, `MetricGrid`, `MetricItem`, `MetricLabel`, and `MetricValue`.
- The dark neural graph should build on those elements rather than adding a separate graph component or dependency.

### Profile Sections

- `ProfileSections.js` currently exports section components and keeps `src/pages/index.js` simple.
- Phase 3 should keep this module boundary and update the Experience and Contact internals in place.
- `ProfileSectionsStyles.js` already contains reusable `MetricList`, `ImpactList`, `StackList`, `RoleHeader`, `RoleMeta`, and `MetaRow` pieces. These can be reused inside the new Oracle narrative and compact supporting timeline.

## Landmines

- The user specifically objected to blank space in the Oracle MTS-1 card. Removing only colors will not fix this.
- `RoleCard:first-child { grid-row: span 2; }` and `min-height: 420px` must not remain as the Oracle layout mechanism.
- `contactHighlights` currently includes `{ label: 'Location', title: profile.location }`; that object must be removed so Location is not rendered as a card.
- Do not use the local resume PDF path or phone number in source or plan checks.
- Do not start MCP servers or use subagents; this runtime does not have GSD agents installed and the user asked not to start MCP servers.
- Do not add packages. `node_modules` exists, but the legacy Next.js 10 build needs `NODE_OPTIONS=--openssl-legacy-provider`.

## Required Read-First Set for Executor

- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`
- `.planning/phases/02-resume-driven-content-rebuild/02-CONTEXT.md`
- `.planning/phases/02-resume-driven-content-rebuild/02-01-SUMMARY.md`
- `.planning/phases/03-dark-agentic-ui-refinement/03-CONTEXT.md`
- `.planning/phases/03-dark-agentic-ui-refinement/03-UI-SPEC.md`
- `.planning/phases/03-dark-agentic-ui-refinement/03-RESEARCH.md`
- `.planning/phases/03-dark-agentic-ui-refinement/03-PATTERNS.md`
- `src/themes/default.js`
- `src/styles/globals.js`
- `src/styles/GlobalComponents/index.js`
- `src/components/Header/Header.js`
- `src/components/Header/HeaderStyles.js`
- `src/components/Footer/Footer.js`
- `src/components/Footer/FooterStyles.js`
- `src/components/Hero/Hero.js`
- `src/components/Hero/HeroStyles.js`
- `src/constants/constants.js`
- `src/components/ProfileSections/ProfileSections.js`
- `src/components/ProfileSections/ProfileSectionsStyles.js`
- `src/pages/index.js`
