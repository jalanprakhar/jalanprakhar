---
last_mapped_commit: fc6c92df2b432b91d1520267e937d0b3ddb40d30
---
# Coding Conventions

**Analysis Date:** 2026-05-28

## Naming Patterns

**Files:**
- Use PascalCase for React component implementation files: `src/components/Header/Header.js`, `src/components/Hero/Hero.js`, `src/layout/Layout.js`.
- Use the `Styles.js` suffix for component-local styled-components: `src/components/Projects/ProjectsStyles.js`, `src/components/Footer/FooterStyles.js`.
- Use lower-case generic filenames for global modules: `src/styles/globals.js`, `src/themes/default.js`, `src/constants/constants.js`.

**Functions:**
- Use PascalCase component names for React components: `Header`, `Hero`, `Projects`, `Technologies`, `Footer`, `Layout`.
- Use concise arrow functions for presentational components: `const Projects = () => (...)` in `src/components/Projects/Projects.js`.
- Use named exports when the component is consumed as a named layout primitive, as in `export const Layout` from `src/layout/Layout.js`.

**Variables:**
- Use camelCase for function parameters and local values: `pageProps`, `initialProps`, `originalRenderPage`.
- Static arrays use lower-case plural names such as `projects` in `src/constants/constants.js`.
- Styled-component names are PascalCase nouns such as `SectionTitle`, `GridContainer`, `FooterWrapper`, and `SocialIcons`.

**Types:**
- Not applicable. The project does not use TypeScript or runtime prop type declarations.

## Code Style

**Formatting:**
- No formatter config was detected.
- Existing files mix semicolon and no-semicolon styles. For new code, match the surrounding file instead of applying repo-wide churn.
- JSX indentation is generally two spaces, but some files contain uneven indentation such as `src/components/Projects/Projects.js` and `src/layout/Layout.js`.

**Linting:**
- No ESLint, Prettier, Biome, or custom lint config was detected.
- `package.json` does not define `lint`, `format`, or `test` scripts.

## Import Organization

**Order:**
1. External packages first, for example `react`, `next/link`, and `react-icons/*`.
2. Blank line.
3. Local styled-components and local modules, for example `./HeaderStyles` or `../../styles/GlobalComponents`.

**Path Aliases:**
- None detected. All local imports use relative paths such as `../../styles/GlobalComponents` and `../components/Header/Header`.

**Patterns:**
- Component files import named styled-components from adjacent `*Styles.js` files.
- Shared style primitives are imported from `src/styles/GlobalComponents/index.js`.
- The home page imports section components directly from `src/components/`.

## Error Handling

**Patterns:**
- The main UI has no data fetching or error boundaries.
- `src/pages/_document.js` uses a `try/finally` block to ensure `sheet.seal()` runs after styled-components SSR collection.
- `src/pages/api/hello.js` has only a success response and no method checks or error branch.

## Logging

**Framework:** None detected.

**Patterns:**
- No `console.*` calls were found in `src/`.
- Do not introduce logging unless there is real runtime behavior to diagnose.

## Comments

**When to Comment:**
- Comments are sparse. Existing comments include section markers in style files, a sample Next.js API comment in `src/pages/api/hello.js`, and commented-out project data in `src/constants/constants.js`.
- Prefer removing dead commented code rather than adding more comments for inactive features.

**JSDoc/TSDoc:**
- Not used.

## Function Design

**Size:** 
- Keep presentational components small and focused. Existing render components are mostly under 60 lines, except the static SVG in `src/components/BackgrooundAnimation/BackgroundAnimation.js`.

**Parameters:**
- Presentational components usually accept either no props or `props` forwarded to styled primitives, as in `src/styles/GlobalComponents/Button.js`.
- For new reusable components, prefer named props where the call site benefits from clarity.

**Return Values:**
- Components return JSX directly.
- Next.js API routes receive `(req, res)` and write to `res`, as in `src/pages/api/hello.js`.

## Module Design

**Exports:**
- Default export for most React components: `Header`, `Hero`, `Projects`, `Technologies`, `Footer`, and `Theme`.
- Named export for layout component: `Layout`.
- Named exports for styled-components grouped in style modules.
- Named export for static data: `projects` from `src/constants/constants.js`.

**Barrel Files:**
- `src/styles/GlobalComponents/index.js` acts as a barrel for shared styled-components.
- No general component barrel exists under `src/components/`; components are imported by concrete file path.

## Styling Conventions

**Component Styles:**
- Add component-specific CSS as styled-components in a sibling `*Styles.js` file.
- Use theme breakpoints from `src/themes/default.js` through `${props => props.theme.breakpoints.sm}` and related keys.
- Use theme colors and fonts for global/base styling where possible, following `src/styles/globals.js`.

**Responsive Rules:**
- Existing responsive rules use `sm`, `md`, `lg`, and `xl` breakpoint strings from `src/themes/default.js`.
- For new section layouts, follow the `Section` primitive in `src/styles/GlobalComponents/index.js` and add component-specific media queries only where needed.

**Static Content:**
- Put repeated or list-style content in `src/constants/constants.js`.
- Avoid duplicating social/contact URLs across `src/components/Header/Header.js` and `src/components/Footer/Footer.js` in new work.

---

*Convention analysis: 2026-05-28*
