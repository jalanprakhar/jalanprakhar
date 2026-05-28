# Phase 02: Resume-Driven Content Rebuild - Pattern Map

**Mapped:** 2026-05-29
**Purpose:** Existing code analogs the executor should read before changing Phase 2 files.

## Planned File Touches and Closest Analogs

| Planned file | Role in Phase 2 | Closest existing analog | Pattern to preserve | Pattern to replace |
|--------------|-----------------|-------------------------|---------------------|--------------------|
| `src/constants/constants.js` | Central resume-derived content source | Current Phase 1 `profile`, `navItems`, `profileLinks`, `heroCopy`, `heroSignals`, `heroMetrics`, and `shellSections` exports | Keep public profile/contact/link data centralized; keep resume URL as a TODO/fallback if no public URL exists. | Placeholder Phase 1 shell section copy and old student-era project proof as active content. |
| `src/pages/index.js` | Homepage composition | Current `Hero` plus generic `ShellSection` composition | Keep page as a small route-level composition under `Layout`; preserve anchors `experience`, `systems`, `skills`, `contact`. | Generic placeholder cards that cannot express timeline, system proof, skill taxonomy, and credentials. |
| `src/components/ProfileSections/ProfileSections.js` | New Phase 2 section rendering | `src/components/Hero/Hero.js`, current `ShellSection` in `src/pages/index.js` | Presentational React component maps centralized constants into semantic sections. | Hard-coded resume facts duplicated inside multiple components. |
| `src/components/ProfileSections/ProfileSectionsStyles.js` | New Phase 2 section layouts | `src/components/Hero/HeroStyles.js`, `src/styles/GlobalComponents/index.js`, `src/components/Footer/FooterStyles.js` | Adjacent styled-components file with named exports, theme colors, theme breakpoints, 8px card radius, stable responsive grids. | Nested cards, viewport-width typography, decorative blobs/orbs, large continuous animation. |
| `src/styles/GlobalComponents/index.js` | Optional shared primitives | Current `PageSection`, `SectionInner`, `SectionHeader`, `SectionHeading`, `SectionLead`, `ShellGrid`, `SectionCard` | Add only genuinely shared primitives needed by multiple Phase 2 sections. | Section-specific styling pushed into global primitives unnecessarily. |
| `src/components/Hero/Hero.js` | Optional hero copy/metric alignment | Current Phase 1 hero reading `heroCopy`, `heroMetrics`, `heroSignals`, and `profile` from constants | Prefer changing constants over changing the component when only copy/metrics change. | Local hard-coded resume details or local resume file paths. |
| `src/components/Header/Header.js` | Existing nav/profile shell | Current Phase 1 header | Continue reading `navItems`, `profile`, and `profileLinks` from constants; preserve safe external link attributes. | Reintroducing duplicated profile URLs or unsafe icon-only links. |
| `src/components/Footer/Footer.js` | Existing contact/footer shell | Current Phase 1 footer | Continue reading `profile` and `profileLinks` from constants; preserve centralized email/location. | Reintroducing phone number or hard-coded duplicated social URLs. |

## Data Flow

```text
src/constants/constants.js
  -> Header nav/social links
  -> Hero copy, CTA targets, signal pills, metrics
  -> ProfileSections experience timeline, systems proof, skill groups, credentials, contact copy
  -> Footer contact/social links

src/pages/index.js
  -> Layout
  -> Hero
  -> ExperienceSection
  -> SystemsSection
  -> SkillsSection
  -> CredentialsSection or compact credentials block
  -> ContactSection

src/themes/default.js + src/styles/GlobalComponents/index.js
  -> ProfileSectionsStyles
  -> section bands, cards, grids, metrics, and responsive behavior
```

## Concrete Existing Patterns

### Centralized Link Handling

- `src/components/Header/Header.js` uses `profileLinks` from constants and computes `target`/`rel` for external links.
- `src/components/Footer/Footer.js` uses the same `profileLinks` and `profile` source.
- Phase 2 contact content should extend this pattern rather than hard-code email, GitHub, or LinkedIn in new components.

### Hero Copy Through Constants

- `src/components/Hero/Hero.js` reads `heroCopy`, `heroMetrics`, `heroSignals`, and `profile`.
- Phase 2 can update hero support metrics by editing `src/constants/constants.js` without changing hero rendering.

### Styled-Components Layout

- `src/components/Hero/HeroStyles.js` uses theme colors, breakpoints, stable grids, and 8px radii.
- `src/styles/GlobalComponents/index.js` already exposes section wrappers and card primitives.
- New Phase 2 styles should use the same theme tokens and breakpoint pattern.

## Landmines

- The resume source includes a phone number. Do not copy it into public source or test strings.
- `profile.resumeUrl` currently uses `TODO_PUBLIC_RESUME_URL`; keep fallback behavior to `#contact` unless a stable public resume URL exists.
- `node_modules` is present now, but Node 22 needs `NODE_OPTIONS=--openssl-legacy-provider` for the old Next.js 10/Webpack build.
- Do not delete `Projects`, `Technologies`, `BackgrooundAnimation`, sample API, or lockfiles in Phase 2 unless needed for active homepage composition; Phase 3 owns cleanup.
- Do not add new packages. There is no package legitimacy need for Phase 2.

## Required Read-First Set for Executor

- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`
- `.planning/phases/02-resume-driven-content-rebuild/02-CONTEXT.md`
- `.planning/phases/02-resume-driven-content-rebuild/02-UI-SPEC.md`
- `.planning/phases/02-resume-driven-content-rebuild/02-RESEARCH.md`
- `.planning/phases/02-resume-driven-content-rebuild/02-PATTERNS.md`
- `/Users/ppjalan/Downloads/PRAKHAR.pdf`
- `src/constants/constants.js`
- `src/pages/index.js`
- `src/components/Hero/Hero.js`
- `src/components/Header/Header.js`
- `src/components/Footer/Footer.js`
- `src/styles/GlobalComponents/index.js`
- `src/themes/default.js`
