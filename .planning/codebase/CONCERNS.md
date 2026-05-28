---
last_mapped_commit: fc6c92df2b432b91d1520267e937d0b3ddb40d30
---
# Codebase Concerns

**Analysis Date:** 2026-05-28

## Tech Debt

**Dependency age and framework version:**
- Issue: The app is pinned to `next` 10.2.3, `react` 17.0.2, and `styled-components` 5.3.0 in `package.json` and `package-lock.json`.
- Files: `package.json`, `package-lock.json`, `yarn.lock`, `.babelrc`, `src/pages/_document.js`.
- Impact: Framework upgrades may require coordinated changes to styled-components SSR, routing assumptions, and lockfiles.
- Fix approach: Upgrade in a dedicated dependency modernization phase, run a local build, and verify styled-components SSR output.

**Two package manager lockfiles:**
- Issue: Both `package-lock.json` and `yarn.lock` are present.
- Files: `package-lock.json`, `yarn.lock`, `package.json`.
- Impact: npm and Yarn can resolve different dependency trees, causing inconsistent installs across machines.
- Fix approach: Choose npm or Yarn, delete the unused lockfile, and document the chosen install command.

**No linting, formatting, or test scripts:**
- Issue: `package.json` only defines `dev`, `build`, and `start`.
- Files: `package.json`, `src/`.
- Impact: Formatting drift and regressions are easy to introduce because there is no automated quality gate.
- Fix approach: Add a minimal lint/build/test baseline appropriate for a small Next.js app.

**Dead or unused files and exports:**
- Issue: Empty CSS files and unused styled-components/exports are present.
- Files: `src/styles.css`, `src/components/Hero/Hero.css`, `src/styles/GlobalComponents/index.js`, `src/components/Header/HeaderStyles.js`, `src/components/Projects/ProjectsStyles.js`, `src/components/Technologies/TechnologiesStyles.js`.
- Impact: Future edits may target inactive files or preserve dead components unnecessarily.
- Fix approach: Remove empty CSS files and unused styled exports after confirming no external import path depends on them.

**Misspelled component directory:**
- Issue: The background animation directory is named `BackgrooundAnimation`.
- Files: `src/components/BackgrooundAnimation/BackgroundAnimation.js`, `src/pages/index.js`.
- Impact: The typo makes navigation and future imports error-prone.
- Fix approach: Rename to `src/components/BackgroundAnimation/` and update the import in `src/pages/index.js`.

## Known Bugs

**Build cannot run without installed dependencies:**
- Symptoms: `npm run build` fails with `sh: next: command not found` when `node_modules` is absent.
- Files: `package.json`, `package-lock.json`, `yarn.lock`.
- Trigger: Run `npm run build` before dependency installation.
- Workaround: Install dependencies with the chosen package manager, then rerun `npm run build`.

**Invalid short hex color in SVG fill:**
- Symptoms: One animated ellipse uses `fill="#46737"` in the background SVG.
- Files: `src/components/BackgrooundAnimation/BackgroundAnimation.js`.
- Trigger: Browser parses the SVG fill value.
- Workaround: Replace with a valid color such as `#F46737` if that was intended.

**Duplicate project IDs:**
- Symptoms: Multiple project objects use `id: 0`.
- Files: `src/constants/constants.js`.
- Trigger: Code begins using `id` as a React key, URL slug, or lookup key.
- Workaround: Assign unique IDs before using `id` for identity. Current rendering uses array index as key.

## Security Considerations

**External link tabnabbing:**
- Risk: The resume link opens a new tab without `rel="noopener noreferrer"`.
- Files: `src/components/Hero/Hero.js`.
- Current mitigation: None detected.
- Recommendations: Add `rel="noopener noreferrer"` to every external link that uses `target="_blank"`.

**Public personal contact details:**
- Risk: Phone number and email are hard-coded and rendered publicly.
- Files: `src/components/Footer/Footer.js`.
- Current mitigation: None; this may be intentional for a portfolio.
- Recommendations: Confirm the exposure is intended. If not, replace with a contact form or less direct contact channel.

**Sample API endpoint exposure:**
- Risk: `/api/hello` exposes an unused public endpoint.
- Files: `src/pages/api/hello.js`.
- Current mitigation: It returns only sample static data.
- Recommendations: Remove it if this app does not need API routes.

## Performance Bottlenecks

**Large static images served directly:**
- Problem: Several images in `public/images/` are large, including files near or above 1 MB.
- Files: `public/images/2.png`, `public/images/3.png`, `public/images/projects.jpeg`, `src/components/Projects/Projects.js`.
- Cause: Project cards render plain `<img>` tags without Next.js image optimization.
- Improvement path: Compress assets and consider `next/image` if upgrading Next.js behavior is acceptable for this app.

**Large inline SVG component:**
- Problem: `BackgroundAnimation` is a 364-line React component with a large inline SVG and repeated animations.
- Files: `src/components/BackgrooundAnimation/BackgroundAnimation.js`.
- Cause: SVG markup is embedded directly in the component.
- Improvement path: Keep as-is for precise animation control, or move static SVG data into a dedicated asset/component and test render performance.

## Fragile Areas

**Styled-components SSR setup:**
- Files: `.babelrc`, `src/pages/_document.js`, `src/styles/theme.js`.
- Why fragile: SSR relies on both the Babel plugin and a custom `ServerStyleSheet` document implementation.
- Safe modification: Change styled-components, Babel, or Next.js versions in one branch and verify with a production build.
- Test coverage: No automated tests or build verification currently enforced.

**Responsive layout primitives:**
- Files: `src/styles/GlobalComponents/index.js`, `src/themes/default.js`, `src/components/Header/HeaderStyles.js`, `src/components/Projects/ProjectsStyles.js`.
- Why fragile: Many visual behaviors depend on prop-driven CSS and breakpoint strings.
- Safe modification: Check desktop and mobile viewports after changing shared primitives.
- Test coverage: No visual, component, or E2E coverage.

**Static project rendering:**
- Files: `src/constants/constants.js`, `src/components/Projects/Projects.js`, `public/images/`.
- Why fragile: Project cards assume every item has `image`, `tags`, `source`, and `visit`; there is no fallback for missing fields.
- Safe modification: Keep project object shape consistent or add fallback rendering before adding incomplete projects.
- Test coverage: No component tests.

## Scaling Limits

**Static content management:**
- Current capacity: Four projects are defined in `src/constants/constants.js`.
- Limit: As portfolio content grows, editing long arrays and duplicated links in component files becomes brittle.
- Scaling path: Move repeated contact/social/project data into structured constants or content files and add validation.

**Single-page composition:**
- Current capacity: Homepage sections are composed directly in `src/pages/index.js`.
- Limit: Additional pages or richer sections will make the page module and shared style primitives harder to reason about.
- Scaling path: Add route-specific page files under `src/pages/` and keep each section self-contained under `src/components/`.

## Dependencies at Risk

**Next.js 10.2.3:**
- Risk: Old framework major with older routing/build assumptions.
- Impact: Upgrades may affect `src/pages/_document.js`, `.babelrc`, and image optimization options.
- Migration plan: Upgrade in increments, verify `next build`, and consider whether to stay on `pages/` routing or migrate later.

**styled-components 5.3.0:**
- Risk: SSR integration is custom and version-sensitive.
- Impact: Incorrect SSR setup can cause missing or duplicated styles.
- Migration plan: Keep `.babelrc` and `src/pages/_document.js` changes together during any styled-components upgrade.

## Missing Critical Features

**Automated regression check:**
- Problem: There is no committed test, lint, format, or CI workflow.
- Blocks: Safe refactors, dependency upgrades, and responsive UI changes.

**Accessible labels for icon-only links:**
- Problem: Social profile links render icons without text labels.
- Blocks: Screen reader users from identifying link destinations reliably.

**Centralized contact/social metadata:**
- Problem: Header and footer duplicate social URLs.
- Blocks: Single-source updates for profile links.

## Test Coverage Gaps

**Homepage render path:**
- What's not tested: `src/pages/index.js` composing `Layout`, `Hero`, `Projects`, and `Technologies`.
- Files: `src/pages/index.js`, `src/layout/Layout.js`, `src/components/*`.
- Risk: Section changes can silently remove content or anchors.
- Priority: High.

**Project card mapping:**
- What's not tested: Rendering every project in `projects`, tags, images, demo links, and source links.
- Files: `src/constants/constants.js`, `src/components/Projects/Projects.js`.
- Risk: Broken portfolio links or missing images.
- Priority: High.

**Styled-components SSR:**
- What's not tested: Server-rendered styles from `src/pages/_document.js`.
- Files: `.babelrc`, `src/pages/_document.js`, `src/styles/theme.js`.
- Risk: Flash of unstyled content or missing styles after dependency changes.
- Priority: Medium.

**Header/footer links:**
- What's not tested: Internal anchors, social links, email link, and phone link.
- Files: `src/components/Header/Header.js`, `src/components/Footer/Footer.js`.
- Risk: Broken navigation or stale contact information.
- Priority: Medium.

---

*Concerns audit: 2026-05-28*
