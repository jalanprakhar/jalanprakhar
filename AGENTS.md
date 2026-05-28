<!-- GSD:project-start source:PROJECT.md -->
## Project

**Agentic AI Engineer Portfolio**

This is a full rebuild of Prakhar Jalan's existing Next.js portfolio, repositioning it from a college-era full-stack/student portfolio into a professional portfolio for an agentic AI engineer with around two years of industry experience. The site should speak primarily to hiring managers, senior engineers, AI platform teams, and recruiters evaluating fit for agentic AI, backend platform, reliability, and production LLM roles.

The new portfolio will use resume-driven content from `PRAKHAR.pdf` and the existing codebase as a starting point, but the UI, copy, sections, and visual language should be rebuilt around a more mature executive-polish direction with restrained AI cues.

**Core Value:** The portfolio must clearly communicate that Prakhar can build production-grade agentic AI systems with governance, reliability, orchestration, and high-concurrency backend depth.

### Constraints

- **Audience**: Primary audience is hiring managers, AI/platform teams, and recruiters — copy should make senior technical fit obvious quickly.
- **Visual direction**: Executive polish with restrained AI cues — avoid an overdone futuristic AI lab look.
- **Rewrite depth**: Full rebuild — preserve the repo as the starting point but do not preserve the current page structure unnecessarily.
- **Source material**: Resume content is authoritative for professional positioning and proof points.
- **Technical base**: Existing Next.js/React/styled-components code can be used as a starting point, but modernization may replace large parts of the current component structure.
- **Quality**: Rebuild should include build verification and at least a minimal quality gate before considering the site done.
- **Privacy**: Contact details from the resume may be used where appropriate, but the implementation should avoid exposing anything beyond intentional public portfolio content.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- JavaScript - Used for all application pages, components, styles, constants, and Next.js custom document/app files under `src/`.
- JSX - Used inside React component files such as `src/pages/index.js`, `src/components/Hero/Hero.js`, and `src/components/Projects/Projects.js`.
- CSS - Present as empty files in `src/styles.css` and `src/components/Hero/Hero.css`; active styling is implemented with styled-components.
- Markdown - Project README content lives in `README.md`.
## Runtime
- Node.js - Required by Next.js and npm scripts in `package.json`; no `.nvmrc` or `engines` field pins the project Node version.
- Browser - Primary runtime for the portfolio UI rendered by Next.js pages and React components.
- Next.js API runtime - `src/pages/api/hello.js` defines the default sample API route.
- npm - `package-lock.json` is present with lockfile version 2.
- Yarn - `yarn.lock` is also present.
- Lockfile: both npm and Yarn lockfiles are committed, so choose one package manager before dependency updates.
## Frameworks
- Next.js 10.2.3 - React framework, routing, build pipeline, API routes, and SSR entry points; declared in `package.json` and locked in `package-lock.json`.
- React 17.0.2 - Component rendering model; declared in `package.json` and locked in `package-lock.json`.
- React DOM 17.0.2 - Browser DOM renderer; declared in `package.json` and locked in `package-lock.json`.
- styled-components 5.3.0 - Main styling system for layout, components, theme access, and global styles in files such as `src/styles/theme.js`, `src/styles/globals.js`, and `src/styles/GlobalComponents/index.js`.
- styled-normalize 8.0.7 - CSS reset injected by `src/styles/globals.js`.
- Babel styled-components plugin - Enabled in `.babelrc` with `{ "ssr": true }` for server-side rendered styles.
- react-icons 4.2.0 - Icon source for social links, technology icons, and the portfolio mark in `src/components/Header/Header.js`, `src/components/Footer/Footer.js`, and `src/components/Technologies/Technologies.js`.
- Local static images - Project images and profile assets live under `public/images/`.
- Not detected. There are no test framework dependencies, no `test` npm script, and no `*.test.*` or `*.spec.*` files.
- `next dev` - Local development command from `package.json`.
- `next build` - Production build command from `package.json`.
- `next start` - Production server command from `package.json`.
## Key Dependencies
- `next` 10.2.3 - Owns routes in `src/pages/`, document rendering in `src/pages/_document.js`, and the production build.
- `react` 17.0.2 - Required by every component under `src/components/`, `src/layout/`, and `src/styles/GlobalComponents/`.
- `styled-components` 5.3.0 - Required by the complete component styling layer and by `src/pages/_document.js` for SSR style collection.
- `styled-normalize` 8.0.7 - Provides normalized browser baseline in `src/styles/globals.js`.
- `react-icons` 4.2.0 - Provides SVG icon components used directly in rendered UI.
## Configuration
- No `.env*` files were detected in the repo root during mapping.
- No runtime environment variables are referenced by `process.env` in `src/`.
- External profile, demo, social, and contact links are hard-coded in `src/constants/constants.js`, `src/components/Header/Header.js`, `src/components/Footer/Footer.js`, and `src/components/Hero/Hero.js`.
- `package.json` defines only `dev`, `build`, and `start` scripts.
- `.babelrc` uses the Next preset and enables the styled-components plugin with SSR support.
- `src/pages/_document.js` manually collects styled-components styles through `ServerStyleSheet`.
- No `next.config.js`, TypeScript config, ESLint config, Prettier config, or CI config was detected.
## Platform Requirements
- Install dependencies before running scripts; `node_modules` was absent during mapping, and `npm run build` failed with `next: command not found`.
- Use one lockfile consistently. The repo contains both `package-lock.json` and `yarn.lock`.
- Keep custom SSR style collection in `src/pages/_document.js` aligned with styled-components upgrades.
- Static/SSR Next.js hosting target is implied by the Next.js app structure and `next start`.
- Vercel is suggested by `public/vercel.svg` and `.gitignore` excluding `.vercel`, but no deployment config is committed.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- Use PascalCase for React component implementation files: `src/components/Header/Header.js`, `src/components/Hero/Hero.js`, `src/layout/Layout.js`.
- Use the `Styles.js` suffix for component-local styled-components: `src/components/Projects/ProjectsStyles.js`, `src/components/Footer/FooterStyles.js`.
- Use lower-case generic filenames for global modules: `src/styles/globals.js`, `src/themes/default.js`, `src/constants/constants.js`.
- Use PascalCase component names for React components: `Header`, `Hero`, `Projects`, `Technologies`, `Footer`, `Layout`.
- Use concise arrow functions for presentational components: `const Projects = () => (...)` in `src/components/Projects/Projects.js`.
- Use named exports when the component is consumed as a named layout primitive, as in `export const Layout` from `src/layout/Layout.js`.
- Use camelCase for function parameters and local values: `pageProps`, `initialProps`, `originalRenderPage`.
- Static arrays use lower-case plural names such as `projects` in `src/constants/constants.js`.
- Styled-component names are PascalCase nouns such as `SectionTitle`, `GridContainer`, `FooterWrapper`, and `SocialIcons`.
- Not applicable. The project does not use TypeScript or runtime prop type declarations.
## Code Style
- No formatter config was detected.
- Existing files mix semicolon and no-semicolon styles. For new code, match the surrounding file instead of applying repo-wide churn.
- JSX indentation is generally two spaces, but some files contain uneven indentation such as `src/components/Projects/Projects.js` and `src/layout/Layout.js`.
- No ESLint, Prettier, Biome, or custom lint config was detected.
- `package.json` does not define `lint`, `format`, or `test` scripts.
## Import Organization
- None detected. All local imports use relative paths such as `../../styles/GlobalComponents` and `../components/Header/Header`.
- Component files import named styled-components from adjacent `*Styles.js` files.
- Shared style primitives are imported from `src/styles/GlobalComponents/index.js`.
- The home page imports section components directly from `src/components/`.
## Error Handling
- The main UI has no data fetching or error boundaries.
- `src/pages/_document.js` uses a `try/finally` block to ensure `sheet.seal()` runs after styled-components SSR collection.
- `src/pages/api/hello.js` has only a success response and no method checks or error branch.
## Logging
- No `console.*` calls were found in `src/`.
- Do not introduce logging unless there is real runtime behavior to diagnose.
## Comments
- Comments are sparse. Existing comments include section markers in style files, a sample Next.js API comment in `src/pages/api/hello.js`, and commented-out project data in `src/constants/constants.js`.
- Prefer removing dead commented code rather than adding more comments for inactive features.
- Not used.
## Function Design
- Keep presentational components small and focused. Existing render components are mostly under 60 lines, except the static SVG in `src/components/BackgrooundAnimation/BackgroundAnimation.js`.
- Presentational components usually accept either no props or `props` forwarded to styled primitives, as in `src/styles/GlobalComponents/Button.js`.
- For new reusable components, prefer named props where the call site benefits from clarity.
- Components return JSX directly.
- Next.js API routes receive `(req, res)` and write to `res`, as in `src/pages/api/hello.js`.
## Module Design
- Default export for most React components: `Header`, `Hero`, `Projects`, `Technologies`, `Footer`, and `Theme`.
- Named export for layout component: `Layout`.
- Named exports for styled-components grouped in style modules.
- Named export for static data: `projects` from `src/constants/constants.js`.
- `src/styles/GlobalComponents/index.js` acts as a barrel for shared styled-components.
- No general component barrel exists under `src/components/`; components are imported by concrete file path.
## Styling Conventions
- Add component-specific CSS as styled-components in a sibling `*Styles.js` file.
- Use theme breakpoints from `src/themes/default.js` through `${props => props.theme.breakpoints.sm}` and related keys.
- Use theme colors and fonts for global/base styling where possible, following `src/styles/globals.js`.
- Existing responsive rules use `sm`, `md`, `lg`, and `xl` breakpoint strings from `src/themes/default.js`.
- For new section layouts, follow the `Section` primitive in `src/styles/GlobalComponents/index.js` and add component-specific media queries only where needed.
- Put repeated or list-style content in `src/constants/constants.js`.
- Avoid duplicating social/contact URLs across `src/components/Header/Header.js` and `src/components/Footer/Footer.js` in new work.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## System Overview
```text
```
## Component Responsibilities
| Component | Responsibility | File |
|-----------|----------------|------|
| App wrapper | Applies theme and global styles to every page | `src/pages/_app.js` |
| Custom document | Collects styled-components SSR output and loads Google Fonts | `src/pages/_document.js` |
| Home page | Composes the portfolio sections in page order | `src/pages/index.js` |
| Layout | Wraps page content with header, main content, and footer | `src/layout/Layout.js` |
| Header | Renders logo, section navigation, and social profile icons | `src/components/Header/Header.js` |
| Hero | Renders intro copy and resume CTA | `src/components/Hero/Hero.js` |
| BackgroundAnimation | Renders the animated SVG beside the hero | `src/components/BackgrooundAnimation/BackgroundAnimation.js` |
| Projects | Maps static project data into project cards | `src/components/Projects/Projects.js` |
| Technologies | Renders static skills/technology summary | `src/components/Technologies/Technologies.js` |
| Footer | Renders phone, email, slogan, and social links | `src/components/Footer/Footer.js` |
| Theme | Provides styled-components theme and global styles | `src/styles/theme.js` |
## Pattern Overview
- Page composition starts in `src/pages/index.js` and delegates to small presentational sections.
- Styles live beside components as `*Styles.js` modules and shared global primitives live in `src/styles/GlobalComponents/index.js`.
- Static content is centralized in `src/constants/constants.js` for project cards, while personal contact/social links are partly hard-coded in components.
- The app has no client-side data fetching, server-side props, persistent state, authentication, or database layer.
## Layers
- Purpose: Define public routes and application wrappers.
- Location: `src/pages/`
- Contains: `_app.js`, `_document.js`, `index.js`, and sample API route `api/hello.js`.
- Depends on: `next`, React, `styled-components`, and local components.
- Used by: Next.js runtime.
- Purpose: Provide stable header/footer structure around page content.
- Location: `src/layout/`
- Contains: `Layout.js` and `LayoutStyles.js`.
- Depends on: Header, Footer, and styled-components.
- Used by: `src/pages/index.js`.
- Purpose: Render visible homepage sections.
- Location: `src/components/`
- Contains: `Header/`, `Hero/`, `Projects/`, `Technologies/`, `Footer/`, and `BackgrooundAnimation/`.
- Depends on: shared styled-components primitives, theme breakpoints, static data, icons, and static images.
- Used by: `src/pages/index.js` and `src/layout/Layout.js`.
- Purpose: Provide global style reset, theme tokens, and reusable styled primitives.
- Location: `src/styles/` and `src/themes/`
- Contains: `src/styles/theme.js`, `src/styles/globals.js`, `src/styles/GlobalComponents/index.js`, `src/styles/GlobalComponents/Button.js`, and `src/themes/default.js`.
- Depends on: styled-components and styled-normalize.
- Used by: all component style modules.
- Purpose: Store portfolio project metadata and image assets.
- Location: `src/constants/constants.js` and `public/`
- Contains: project metadata, project images, favicon, and Vercel SVG.
- Depends on: no runtime modules.
- Used by: `src/components/Projects/Projects.js` and browser static asset serving.
## Data Flow
### Primary Page Render Path
### Styled-Components SSR Flow
- State is effectively static. There is no React state, context beyond `ThemeProvider`, Redux, SWR, React Query, or browser storage usage.
## Key Abstractions
- Purpose: Centralize fonts, colors, and responsive breakpoints.
- Examples: `src/styles/theme.js`, `src/themes/default.js`, `src/styles/globals.js`.
- Pattern: `ThemeProvider` with theme-driven styled-components interpolations.
- Purpose: Provide reusable responsive wrappers, text styles, dividers, buttons, and link icon containers.
- Examples: `src/styles/GlobalComponents/index.js`, `src/styles/GlobalComponents/Button.js`.
- Pattern: exported styled-components consumed by page sections.
- Purpose: Drive project card rendering from a static array.
- Examples: `src/constants/constants.js`, `src/components/Projects/Projects.js`.
- Pattern: `projects.map(...)` rendering with per-project `title`, `description`, `image`, `tags`, `source`, and `visit` fields.
- Purpose: Keep component-specific styled-components near each component.
- Examples: `src/components/Header/HeaderStyles.js`, `src/components/Projects/ProjectsStyles.js`, `src/components/Footer/FooterStyles.js`.
- Pattern: named styled-component exports imported by the adjacent component.
## Entry Points
- Location: `src/pages/index.js`
- Triggers: Browser request to `/`.
- Responsibilities: Compose the visible portfolio sections.
- Location: `src/pages/_app.js`
- Triggers: Every Next.js page render.
- Responsibilities: Apply theme and global CSS.
- Location: `src/pages/_document.js`
- Triggers: Server-side HTML document render.
- Responsibilities: SSR styled-components and include Google Fonts.
- Location: `src/pages/api/hello.js`
- Triggers: Browser or HTTP request to `/api/hello`.
- Responsibilities: Return `{ name: 'John Doe' }`; currently not connected to the UI.
## Architectural Constraints
- **Threading:** Single-threaded JavaScript runtime; no workers or background jobs detected.
- **Global state:** Theme tokens are module-level constants in `src/themes/default.js`; project data is a module-level array in `src/constants/constants.js`.
- **Circular imports:** No circular import chain was detected in the inspected import graph.
- **Routing:** Uses legacy Next.js `pages/` routing, not the App Router.
- **Styling:** SSR depends on `.babelrc` and `src/pages/_document.js` remaining compatible with styled-components 5.
- **Assets:** Project cards expect images under `public/images/` and reference them with root-relative paths like `/images/4.png`.
## Anti-Patterns
### Sample API Route Left In Place
### Misspelled Directory Name
### Mixed Content Placement
## Error Handling
- `src/pages/_document.js` uses `try/finally` around styled-components SSR and always calls `sheet.seal()`.
- `src/pages/api/hello.js` returns a successful JSON response only and has no error branch.
## Cross-Cutting Concerns
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
