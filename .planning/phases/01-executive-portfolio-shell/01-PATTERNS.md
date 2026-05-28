# Phase 01: Executive Portfolio Shell - Pattern Map

**Mapped:** 2026-05-29
**Purpose:** Existing code analogs the executor should read before changing Phase 1 files.

## Planned File Touches and Closest Analogs

| Planned file | Role in Phase 1 | Closest existing analog | Pattern to preserve | Pattern to replace |
|--------------|-----------------|-------------------------|---------------------|--------------------|
| `src/pages/index.js` | Homepage section composition | Current `src/pages/index.js` | Page remains a small composition module wrapped by `Layout`. | Old `Hero + BgAnimation + Projects + Technologies` order. |
| `src/layout/Layout.js` | Header/main/footer shell | Current `src/layout/Layout.js` | `Layout` remains a named export and receives `children`. | Narrow max-width wrapper that constrains the whole page. |
| `src/layout/LayoutStyles.js` | Page shell styling | Current `Container` styled div | Keep one exported `Container`. | `max-width: 1280px` on the outermost app shell. |
| `src/themes/default.js` | Theme tokens | Current default theme object | Keep `fonts`, `colors`, and `breakpoints` object shape. | Old dark palette and sparse token names. |
| `src/styles/globals.js` | Reset/base document styles | Current `GlobalStyles` | Keep `styled-normalize`, global box sizing, smooth scroll. | Dark body background and 62.5% rem scale if it fights UI-SPEC sizes. |
| `src/styles/GlobalComponents/index.js` | Shared section/button primitives | Current exported styled-components | Keep shared primitives for repeated section layout. | Neon gradients, oversized type, old `ButtonBack/ButtonFront` dominance. |
| `src/constants/constants.js` | Shared static portfolio metadata | Current `projects` export | Static list data belongs here when shared. | Duplicated social/contact/resume URLs across components. |
| `src/components/Header/Header.js` | Stable top nav | Current header component | Component imports local `HeaderStyles` and returns simple JSX. | Student links, icon-only profile links without labels, old nav labels. |
| `src/components/Header/HeaderStyles.js` | Header visual system | Current header styled-components | Adjacent `*Styles.js` named exports. | 5-column grid and large `3rem` social icons. |
| `src/components/Hero/Hero.js` | First viewport, CTAs, profile photo | Current hero component | Hero-specific JSX in `Hero.js`, style details in `HeroStyles.js`. | Student-era copy, local/raw resume link, old button primitive. |
| `src/components/Hero/HeroStyles.js` | Hero visual composition | Current `LeftSection` | Hero-specific styled-components live beside the component. | One-column copy-only hero and detached background animation. |
| `src/components/Footer/Footer.js` | Contact/footer shell | Current footer component | Footer stays a dedicated component under `components/Footer`. | Duplicated links and old slogan. |
| `src/components/Footer/FooterStyles.js` | Footer band styling | Current footer styled-components | Named styled export module. | Tiny mobile text and dark-gradient-era colors. |

## Data Flow

```text
constants.js
  -> Header nav/social links
  -> Hero CTAs and shell copy
  -> Footer contact/social links

default.js + globals.js
  -> styled-components ThemeProvider
  -> GlobalComponents primitives
  -> Header/Hero/Footer styles

index.js
  -> Layout
  -> Hero
  -> Phase 1 shell sections for Experience, Systems, Skills, Contact
```

## Concrete Existing Patterns

### Theme Provider
- `src/pages/_app.js` already wraps pages in `Theme`.
- `src/styles/theme.js` already provides `ThemeProvider` and `GlobalStyles`.
- Phase 1 should not change this wiring.

### Component Style Modules
- Components import named styles from sibling files, for example `Header.js` -> `HeaderStyles.js`.
- Keep this convention for the Phase 1 rebuild.

### Static Assets
- Existing public assets are referenced with root-relative paths such as `/images/4.png`.
- Use `/images/profile.jpeg` for the profile photo if the executor keeps the existing asset.

## Landmines

- `src/components/BackgrooundAnimation/` is misspelled and imported by the current homepage. Phase 1 can stop importing it without deleting or renaming it; Phase 3 owns cleanup.
- `node_modules` is absent in the mapped environment, so `npm run build` may fail before dependencies are installed.
- Both `package-lock.json` and `yarn.lock` exist. Phase 1 should not resolve package-manager policy unless execution requires dependency installation.
- Current header/footer external links have no `rel="noopener noreferrer"` or accessible labels. Phase 1 should not introduce new unsafe links even though full accessibility cleanup is Phase 3.
- The public resume URL is unknown. The executor must centralize a TODO constant rather than use a local path.

## Required Read-First Set for Executor

- `.planning/phases/01-executive-portfolio-shell/01-UI-SPEC.md`
- `.planning/phases/01-executive-portfolio-shell/01-CONTEXT.md`
- `.planning/phases/01-executive-portfolio-shell/01-RESEARCH.md`
- `src/pages/index.js`
- `src/layout/Layout.js`
- `src/layout/LayoutStyles.js`
- `src/themes/default.js`
- `src/styles/globals.js`
- `src/styles/GlobalComponents/index.js`
- `src/constants/constants.js`
- `src/components/Header/Header.js`
- `src/components/Header/HeaderStyles.js`
- `src/components/Hero/Hero.js`
- `src/components/Hero/HeroStyles.js`
- `src/components/Footer/Footer.js`
- `src/components/Footer/FooterStyles.js`
