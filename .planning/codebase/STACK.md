---
last_mapped_commit: fc6c92df2b432b91d1520267e937d0b3ddb40d30
---
# Technology Stack

**Analysis Date:** 2026-05-28

## Languages

**Primary:**
- JavaScript - Used for all application pages, components, styles, constants, and Next.js custom document/app files under `src/`.
- JSX - Used inside React component files such as `src/pages/index.js`, `src/components/Hero/Hero.js`, and `src/components/Projects/Projects.js`.

**Secondary:**
- CSS - Present as empty files in `src/styles.css` and `src/components/Hero/Hero.css`; active styling is implemented with styled-components.
- Markdown - Project README content lives in `README.md`.

## Runtime

**Environment:**
- Node.js - Required by Next.js and npm scripts in `package.json`; no `.nvmrc` or `engines` field pins the project Node version.
- Browser - Primary runtime for the portfolio UI rendered by Next.js pages and React components.
- Next.js API runtime - `src/pages/api/hello.js` defines the default sample API route.

**Package Manager:**
- npm - `package-lock.json` is present with lockfile version 2.
- Yarn - `yarn.lock` is also present.
- Lockfile: both npm and Yarn lockfiles are committed, so choose one package manager before dependency updates.

## Frameworks

**Core:**
- Next.js 10.2.3 - React framework, routing, build pipeline, API routes, and SSR entry points; declared in `package.json` and locked in `package-lock.json`.
- React 17.0.2 - Component rendering model; declared in `package.json` and locked in `package-lock.json`.
- React DOM 17.0.2 - Browser DOM renderer; declared in `package.json` and locked in `package-lock.json`.

**Styling:**
- styled-components 5.3.0 - Main styling system for layout, components, theme access, and global styles in files such as `src/styles/theme.js`, `src/styles/globals.js`, and `src/styles/GlobalComponents/index.js`.
- styled-normalize 8.0.7 - CSS reset injected by `src/styles/globals.js`.
- Babel styled-components plugin - Enabled in `.babelrc` with `{ "ssr": true }` for server-side rendered styles.

**UI Assets:**
- react-icons 4.2.0 - Icon source for social links, technology icons, and the portfolio mark in `src/components/Header/Header.js`, `src/components/Footer/Footer.js`, and `src/components/Technologies/Technologies.js`.
- Local static images - Project images and profile assets live under `public/images/`.

**Testing:**
- Not detected. There are no test framework dependencies, no `test` npm script, and no `*.test.*` or `*.spec.*` files.

**Build/Dev:**
- `next dev` - Local development command from `package.json`.
- `next build` - Production build command from `package.json`.
- `next start` - Production server command from `package.json`.

## Key Dependencies

**Critical:**
- `next` 10.2.3 - Owns routes in `src/pages/`, document rendering in `src/pages/_document.js`, and the production build.
- `react` 17.0.2 - Required by every component under `src/components/`, `src/layout/`, and `src/styles/GlobalComponents/`.
- `styled-components` 5.3.0 - Required by the complete component styling layer and by `src/pages/_document.js` for SSR style collection.

**Infrastructure:**
- `styled-normalize` 8.0.7 - Provides normalized browser baseline in `src/styles/globals.js`.
- `react-icons` 4.2.0 - Provides SVG icon components used directly in rendered UI.

## Configuration

**Environment:**
- No `.env*` files were detected in the repo root during mapping.
- No runtime environment variables are referenced by `process.env` in `src/`.
- External profile, demo, social, and contact links are hard-coded in `src/constants/constants.js`, `src/components/Header/Header.js`, `src/components/Footer/Footer.js`, and `src/components/Hero/Hero.js`.

**Build:**
- `package.json` defines only `dev`, `build`, and `start` scripts.
- `.babelrc` uses the Next preset and enables the styled-components plugin with SSR support.
- `src/pages/_document.js` manually collects styled-components styles through `ServerStyleSheet`.
- No `next.config.js`, TypeScript config, ESLint config, Prettier config, or CI config was detected.

## Platform Requirements

**Development:**
- Install dependencies before running scripts; `node_modules` was absent during mapping, and `npm run build` failed with `next: command not found`.
- Use one lockfile consistently. The repo contains both `package-lock.json` and `yarn.lock`.
- Keep custom SSR style collection in `src/pages/_document.js` aligned with styled-components upgrades.

**Production:**
- Static/SSR Next.js hosting target is implied by the Next.js app structure and `next start`.
- Vercel is suggested by `public/vercel.svg` and `.gitignore` excluding `.vercel`, but no deployment config is committed.

---

*Stack analysis: 2026-05-28*
