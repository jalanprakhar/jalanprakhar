---
last_mapped_commit: fc6c92df2b432b91d1520267e937d0b3ddb40d30
---
# Codebase Structure

**Analysis Date:** 2026-05-28

## Directory Layout

```text
jalanprakhar/
├── .babelrc                         # Next/Babel configuration for styled-components SSR
├── .gitignore                       # Ignored dependency, build, env, and platform files
├── README.md                        # Profile README content and GitHub stats images
├── package.json                     # Scripts and runtime dependencies
├── package-lock.json                # npm dependency lockfile
├── yarn.lock                        # Yarn dependency lockfile
├── public/                          # Static assets served from the site root
│   ├── favicon.ico
│   ├── vercel.svg
│   └── images/                      # Project/profile images
└── src/
    ├── pages/                       # Next.js routes and wrappers
    ├── components/                  # Portfolio UI sections and their styles
    ├── layout/                      # Header/main/footer page shell
    ├── styles/                      # Global styles and shared styled primitives
    ├── themes/                      # Theme token object
    └── constants/                   # Static project data
```

## Directory Purposes

**`src/pages/`:**
- Purpose: Next.js route and render lifecycle files.
- Contains: `index.js`, `_app.js`, `_document.js`, and `api/hello.js`.
- Key files: `src/pages/index.js`, `src/pages/_app.js`, `src/pages/_document.js`.

**`src/components/`:**
- Purpose: Homepage sections and section-specific styled-components.
- Contains: `Header/`, `Hero/`, `Projects/`, `Technologies/`, `Footer/`, and `BackgrooundAnimation/`.
- Key files: `src/components/Projects/Projects.js`, `src/components/Header/Header.js`, `src/components/Footer/Footer.js`.

**`src/layout/`:**
- Purpose: Reusable page shell.
- Contains: `Layout.js` and `LayoutStyles.js`.
- Key files: `src/layout/Layout.js`.

**`src/styles/`:**
- Purpose: Global CSS, theme provider wrapper, reusable styled-components, and shared button wrapper.
- Contains: `theme.js`, `globals.js`, `GlobalComponents/index.js`, `GlobalComponents/Button.js`, and an empty `styles.css`.
- Key files: `src/styles/theme.js`, `src/styles/globals.js`, `src/styles/GlobalComponents/index.js`.

**`src/themes/`:**
- Purpose: Theme token object for styled-components.
- Contains: `default.js`.
- Key files: `src/themes/default.js`.

**`src/constants/`:**
- Purpose: Static portfolio project metadata.
- Contains: `constants.js`.
- Key files: `src/constants/constants.js`.

**`public/`:**
- Purpose: Static files served by Next.js.
- Contains: favicon, Vercel SVG, and images used by project cards or future UI.
- Key files: `public/images/1.png`, `public/images/2.png`, `public/images/3.png`, `public/images/4.png`.

## Key File Locations

**Entry Points:**
- `src/pages/index.js`: Homepage route composition.
- `src/pages/_app.js`: App-wide theme wrapper.
- `src/pages/_document.js`: Server-side styled-components collection and font link.
- `src/pages/api/hello.js`: Sample API route.

**Configuration:**
- `package.json`: npm scripts and dependencies.
- `package-lock.json`: npm lockfile.
- `yarn.lock`: Yarn lockfile.
- `.babelrc`: Babel preset and styled-components SSR plugin.
- `.gitignore`: build, dependency, env, and platform ignores.

**Core Logic:**
- `src/constants/constants.js`: Project card data source.
- `src/layout/Layout.js`: Structural shell.
- `src/styles/theme.js`: Theme provider composition.
- `src/styles/globals.js`: Global CSS reset and base body styles.
- `src/styles/GlobalComponents/index.js`: Shared responsive section and button primitives.

**Testing:**
- Not detected. There are no test directories, test files, or test config files.

## Naming Conventions

**Files:**
- Component implementation files use PascalCase directory and filename pairs such as `src/components/Header/Header.js`.
- Component style files use the `ComponentStyles.js` suffix such as `src/components/Footer/FooterStyles.js`.
- Shared styled-components are exported from `src/styles/GlobalComponents/index.js`.
- Static config/data modules use lower-case or generic names such as `src/themes/default.js` and `src/constants/constants.js`.

**Directories:**
- Component directories use PascalCase names such as `src/components/Projects/`.
- `src/components/BackgrooundAnimation/` is misspelled and should be treated carefully because it is imported by that exact path.
- Next.js reserves route structure under `src/pages/`.

## Where to Add New Code

**New Homepage Section:**
- Primary code: create `src/components/<SectionName>/<SectionName>.js`.
- Styles: create `src/components/<SectionName>/<SectionName>Styles.js`.
- Composition: import and render the section from `src/pages/index.js`.
- Shared section wrappers: reuse `Section`, `SectionTitle`, `SectionText`, and `SectionDivider` from `src/styles/GlobalComponents/index.js`.

**New Project Card Data:**
- Add items to the `projects` array in `src/constants/constants.js`.
- Add any local image assets under `public/images/`.
- Keep image paths root-relative, for example `/images/new-project.png`.

**New Layout Element:**
- Primary code: update `src/layout/Layout.js`.
- Styles: update `src/layout/LayoutStyles.js`.
- Header or footer-specific behavior belongs in `src/components/Header/` or `src/components/Footer/`.

**New Route:**
- Add a page file under `src/pages/`.
- Use `src/pages/index.js` as the page composition pattern.
- Wrap content through `Layout` when the route should include the existing header and footer.

**New API Endpoint:**
- Add a route under `src/pages/api/`.
- Replace or remove `src/pages/api/hello.js` if the sample endpoint is not needed.

**New Theme Token:**
- Add token values in `src/themes/default.js`.
- Consume them through styled-components interpolations like `${props => props.theme.colors.background1}`.

**New Shared Primitive:**
- Add reusable styled-components to `src/styles/GlobalComponents/index.js` only when they are used across multiple sections.
- Keep section-only styled-components in the relevant `*Styles.js` file.

**Utilities:**
- Shared helpers: create a dedicated `src/utils/` directory if real reusable logic is introduced; no utility directory exists currently.

## Special Directories

**`.planning/codebase/`:**
- Purpose: GSD-generated codebase map documents.
- Generated: Yes.
- Committed: Intended to be committed as planning documentation.

**`.codex/`:**
- Purpose: Local Codex/GSD runtime configuration and installed workflow files.
- Generated: Yes.
- Committed: Currently untracked in git status; avoid including unrelated runtime files in product commits unless intentionally versioned.

**`.cursor/`:**
- Purpose: Local Cursor/GSD metadata.
- Generated: Yes.
- Committed: Currently untracked in git status; avoid including unrelated runtime files in product commits unless intentionally versioned.

**`public/images/`:**
- Purpose: Static portfolio images.
- Generated: No.
- Committed: Yes.

**`node_modules/`:**
- Purpose: Installed dependencies.
- Generated: Yes.
- Committed: No; ignored by `.gitignore`.

**`.next/`:**
- Purpose: Next.js build output.
- Generated: Yes.
- Committed: No; ignored by `.gitignore`.

---

*Structure analysis: 2026-05-28*
