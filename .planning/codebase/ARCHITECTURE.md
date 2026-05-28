---
last_mapped_commit: fc6c92df2b432b91d1520267e937d0b3ddb40d30
---
<!-- refreshed: 2026-05-28 -->
# Architecture

**Analysis Date:** 2026-05-28

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                       Next.js Pages                         │
├──────────────────┬──────────────────┬───────────────────────┤
│   App Wrapper    │   Document SSR   │      Home Page        │
│ `src/pages/_app.js` │ `src/pages/_document.js` │ `src/pages/index.js` │
└────────┬─────────┴────────┬─────────┴──────────┬────────────┘
         │                  │                     │
         ▼                  ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   React Component Layer                      │
│ `src/layout/`, `src/components/`, `src/styles/GlobalComponents/` │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│               Static Content, Theme, and Assets              │
│ `src/constants/constants.js`, `src/themes/default.js`, `public/images/` │
└─────────────────────────────────────────────────────────────┘
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

**Overall:** Static portfolio frontend using Next.js page routing, React presentational components, and styled-components.

**Key Characteristics:**
- Page composition starts in `src/pages/index.js` and delegates to small presentational sections.
- Styles live beside components as `*Styles.js` modules and shared global primitives live in `src/styles/GlobalComponents/index.js`.
- Static content is centralized in `src/constants/constants.js` for project cards, while personal contact/social links are partly hard-coded in components.
- The app has no client-side data fetching, server-side props, persistent state, authentication, or database layer.

## Layers

**Next.js Routing Layer:**
- Purpose: Define public routes and application wrappers.
- Location: `src/pages/`
- Contains: `_app.js`, `_document.js`, `index.js`, and sample API route `api/hello.js`.
- Depends on: `next`, React, `styled-components`, and local components.
- Used by: Next.js runtime.

**Layout Layer:**
- Purpose: Provide stable header/footer structure around page content.
- Location: `src/layout/`
- Contains: `Layout.js` and `LayoutStyles.js`.
- Depends on: Header, Footer, and styled-components.
- Used by: `src/pages/index.js`.

**Section Component Layer:**
- Purpose: Render visible homepage sections.
- Location: `src/components/`
- Contains: `Header/`, `Hero/`, `Projects/`, `Technologies/`, `Footer/`, and `BackgrooundAnimation/`.
- Depends on: shared styled-components primitives, theme breakpoints, static data, icons, and static images.
- Used by: `src/pages/index.js` and `src/layout/Layout.js`.

**Design System Layer:**
- Purpose: Provide global style reset, theme tokens, and reusable styled primitives.
- Location: `src/styles/` and `src/themes/`
- Contains: `src/styles/theme.js`, `src/styles/globals.js`, `src/styles/GlobalComponents/index.js`, `src/styles/GlobalComponents/Button.js`, and `src/themes/default.js`.
- Depends on: styled-components and styled-normalize.
- Used by: all component style modules.

**Static Data and Assets Layer:**
- Purpose: Store portfolio project metadata and image assets.
- Location: `src/constants/constants.js` and `public/`
- Contains: project metadata, project images, favicon, and Vercel SVG.
- Depends on: no runtime modules.
- Used by: `src/components/Projects/Projects.js` and browser static asset serving.

## Data Flow

### Primary Page Render Path

1. Next.js invokes `src/pages/_app.js` for page rendering.
2. `_app.js` wraps the active page in `Theme` from `src/styles/theme.js`.
3. `Theme` applies `ThemeProvider` with tokens from `src/themes/default.js` and injects `GlobalStyles` from `src/styles/globals.js`.
4. Next.js renders `src/pages/index.js`.
5. `index.js` renders `Layout`, then composes `Hero`, `BackgroundAnimation`, `Projects`, and `Technologies`.
6. `Projects` reads `projects` from `src/constants/constants.js` and maps each item into a card with image, tags, demo link, and source link.
7. `Layout` adds `Header` before page content and `Footer` after page content.

### Styled-Components SSR Flow

1. Next.js invokes `MyDocument.getInitialProps` in `src/pages/_document.js`.
2. A `ServerStyleSheet` wraps page rendering through `sheet.collectStyles(<App {...props} />)`.
3. Initial document styles and `sheet.getStyleElement()` are returned together.
4. `sheet.seal()` runs in `finally` to clean up the server-side sheet.

**State Management:**
- State is effectively static. There is no React state, context beyond `ThemeProvider`, Redux, SWR, React Query, or browser storage usage.

## Key Abstractions

**Theme:**
- Purpose: Centralize fonts, colors, and responsive breakpoints.
- Examples: `src/styles/theme.js`, `src/themes/default.js`, `src/styles/globals.js`.
- Pattern: `ThemeProvider` with theme-driven styled-components interpolations.

**Shared Section Primitives:**
- Purpose: Provide reusable responsive wrappers, text styles, dividers, buttons, and link icon containers.
- Examples: `src/styles/GlobalComponents/index.js`, `src/styles/GlobalComponents/Button.js`.
- Pattern: exported styled-components consumed by page sections.

**Static Project Model:**
- Purpose: Drive project card rendering from a static array.
- Examples: `src/constants/constants.js`, `src/components/Projects/Projects.js`.
- Pattern: `projects.map(...)` rendering with per-project `title`, `description`, `image`, `tags`, `source`, and `visit` fields.

**Component Style Modules:**
- Purpose: Keep component-specific styled-components near each component.
- Examples: `src/components/Header/HeaderStyles.js`, `src/components/Projects/ProjectsStyles.js`, `src/components/Footer/FooterStyles.js`.
- Pattern: named styled-component exports imported by the adjacent component.

## Entry Points

**Homepage:**
- Location: `src/pages/index.js`
- Triggers: Browser request to `/`.
- Responsibilities: Compose the visible portfolio sections.

**App Wrapper:**
- Location: `src/pages/_app.js`
- Triggers: Every Next.js page render.
- Responsibilities: Apply theme and global CSS.

**Custom Document:**
- Location: `src/pages/_document.js`
- Triggers: Server-side HTML document render.
- Responsibilities: SSR styled-components and include Google Fonts.

**Sample API Route:**
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

**What happens:** `src/pages/api/hello.js` exposes the default Next.js sample response.
**Why it's wrong:** It adds an unused public endpoint that does not represent portfolio behavior.
**Do this instead:** Remove the route if no API is needed, or replace it with a real endpoint and document it in `src/pages/api/`.

### Misspelled Directory Name

**What happens:** The background animation component lives under `src/components/BackgrooundAnimation/`.
**Why it's wrong:** The misspelling is now part of the import path in `src/pages/index.js` and makes future file discovery error-prone.
**Do this instead:** Rename the directory to `src/components/BackgroundAnimation/` and update imports in `src/pages/index.js` in the same change.

### Mixed Content Placement

**What happens:** Project data lives in `src/constants/constants.js`, but contact/social links are duplicated in `src/components/Header/Header.js` and `src/components/Footer/Footer.js`.
**Why it's wrong:** Updating a profile URL requires checking multiple component files.
**Do this instead:** Keep repeated social/contact metadata in a shared constants module such as `src/constants/constants.js`.

## Error Handling

**Strategy:** Not applicable for the main UI because there is no data fetching or mutation path.

**Patterns:**
- `src/pages/_document.js` uses `try/finally` around styled-components SSR and always calls `sheet.seal()`.
- `src/pages/api/hello.js` returns a successful JSON response only and has no error branch.

## Cross-Cutting Concerns

**Logging:** No logging framework or console logging detected.
**Validation:** No form, schema, or input validation detected.
**Authentication:** None detected.
**Responsive Design:** Implemented through theme breakpoints from `src/themes/default.js` and media queries in styled-components.
**Accessibility:** Anchor and semantic HTML usage is mixed; icon-only social links in `src/components/Header/Header.js` and `src/components/Footer/Footer.js` do not provide accessible labels.

---

*Architecture analysis: 2026-05-28*
