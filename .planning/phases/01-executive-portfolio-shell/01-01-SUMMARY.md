---
phase: 01-executive-portfolio-shell
plan: "01"
subsystem: ui
tags:
  - nextjs
  - react
  - styled-components
  - portfolio
requires: []
provides:
  - Executive portfolio visual system using the approved Phase 1 palette and typography.
  - First-viewport hero positioning for Prakhar Jalan as an Agentic AI Engineer.
  - Responsive shell sections for Experience, Systems, Skills, and Contact.
  - Centralized Phase 1 profile, link, navigation, hero, and shell-section content.
affects:
  - phase-02-resume-driven-content-rebuild
  - phase-03-quality-and-launch-readiness
tech-stack:
  added: []
  patterns:
    - Centralized portfolio shell content in `src/constants/constants.js`.
    - Reusable styled-components primitives for sections, CTAs, signal pills, and shell cards.
    - Safe external link handling through centralized profile link metadata.
key-files:
  created:
    - .planning/phases/01-executive-portfolio-shell/01-01-SUMMARY.md
  modified:
    - src/themes/default.js
    - src/styles/globals.js
    - src/styles/GlobalComponents/index.js
    - src/layout/Layout.js
    - src/layout/LayoutStyles.js
    - src/constants/constants.js
    - src/components/Header/Header.js
    - src/components/Header/HeaderStyles.js
    - src/components/Hero/Hero.js
    - src/components/Hero/HeroStyles.js
    - src/components/Footer/Footer.js
    - src/components/Footer/FooterStyles.js
    - src/pages/index.js
key-decisions:
  - Keep the resume link centralized as `TODO_PUBLIC_RESUME_URL` until a stable public URL exists; avoid local filesystem paths in app code.
  - Keep detailed resume-derived experience content for Phase 2 and use polished structural placeholders in Phase 1.
  - Record Node 22 plus Next 10 build behavior as launch-readiness debt for Phase 3.
patterns-established:
  - Executive light UI shell with restrained system/control-plane cues.
  - Header, hero, shell sections, and footer consume shared profile/link/nav constants.
  - Phase shell sections render from metadata rather than hard-coded repeated markup.
requirements-completed:
  - POS-01
  - POS-02
  - DES-01
  - DES-02
  - DES-03
duration: 14 min
completed: 2026-05-28
---

# Phase 01 Plan 01: Executive Portfolio Shell Summary

**Executive agentic AI portfolio shell with new visual tokens, first-viewport positioning, profile-photo hero, and responsive section scaffolding.**

## Performance

- **Duration:** 14 min
- **Started:** 2026-05-28T20:01:09Z
- **Completed:** 2026-05-28T20:15:29Z
- **Tasks:** 6
- **Files modified:** 13 source files

## Accomplishments

- Replaced the old dark/neon visual foundation with the approved executive palette, Space Grotesk typography, shared section primitives, focus styling, and reduced-motion handling.
- Centralized Phase 1 profile, navigation, hero copy, profile links, metrics, and shell-section data.
- Rebuilt the header, footer, hero, and homepage composition around the new professional positioning.
- Added polished Experience, Systems, Skills, and Contact shells without inventing Phase 2 resume details.
- Completed the required code review gate and fixed a responsive header anchoring issue.

## Task Commits

1. **Task 1: Replace global visual tokens** - `4dadfa0`
2. **Task 2: Centralize shell content** - `f05a10a`
3. **Task 3: Rebuild navigation and footer** - `ba63e21`
4. **Task 4: Build executive hero system** - `2be680f`
5. **Task 5: Replace homepage shell sections** - `a6ee199`
6. **Review fix: Anchor responsive header actions** - `5e2dfdb`

**Code review report:** `37507e2`

## Files Created/Modified

- `src/themes/default.js` - Phase 1 colors, spacing, typography, and breakpoint tokens.
- `src/styles/globals.js` - Light global page styling, focus states, and reduced-motion rule.
- `src/styles/GlobalComponents/index.js` - Shared section, CTA, card, and signal primitives.
- `src/layout/Layout.js` - Semantic app shell with `main-content`.
- `src/layout/LayoutStyles.js` - Full-width page wrapper.
- `src/constants/constants.js` - Centralized profile, nav, links, hero, metrics, and shell sections.
- `src/components/Header/Header.js` - Constant-driven header navigation and profile actions.
- `src/components/Header/HeaderStyles.js` - Sticky responsive header styles.
- `src/components/Hero/Hero.js` - Executive first viewport with profile photo, CTAs, metrics, and system cues.
- `src/components/Hero/HeroStyles.js` - Responsive hero layout and restrained trace/photo/status styling.
- `src/components/Footer/Footer.js` - Constant-driven footer/contact shell.
- `src/components/Footer/FooterStyles.js` - Responsive footer layout.
- `src/pages/index.js` - Phase 1 homepage composition.

## Decisions Made

- Resume CTA remains visible but falls back to `#contact` while `profile.resumeUrl` is `TODO_PUBLIC_RESUME_URL`; no local resume path is present in app code.
- Phase 1 intentionally uses structural placeholders for resume-heavy content so Phase 2 can fill Oracle, Zolostays, achievements, and skills from the resume.
- Node 22 build support requires `NODE_OPTIONS=--openssl-legacy-provider` with this Next.js 10/Webpack dependency tree; the default build failure is recorded for Phase 3.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Responsive header actions were not anchored to the header wrapper**
- **Found during:** Code review gate after Task 6
- **Issue:** `SocialLinks` switches to `position: absolute` on tablet/mobile, but `NavInner` lacked a positioning context.
- **Fix:** Added `position: relative` to `NavInner`.
- **Files modified:** `src/components/Header/HeaderStyles.js`
- **Verification:** `NODE_OPTIONS=--openssl-legacy-provider npm run build` passed after the fix.
- **Committed in:** `5e2dfdb`

---

**Total deviations:** 1 auto-fixed bug.
**Impact on plan:** No scope expansion; the fix supports the planned responsive header behavior.

## Verification Results

- `rg "#F6F7F9|#151515|#0F766E|#B45309" src/themes/default.js src/styles/globals.js src/styles/GlobalComponents/index.js` passed.
- `rg "Prakhar Jalan|Agentic AI Engineer|Building production-grade AI systems|View Resume|See GitHub|Production systems, not demos" src/components/Hero src/constants/constants.js` passed.
- `rg "/Users/ppjalan/Downloads/PRAKHAR.pdf" src` returned no matches.
- `rg "BackgrooundAnimation|Projects|Technologies" src/pages/index.js` returned no matches.
- `rg "id=\"experience\"|id=\"systems\"|id=\"skills\"|id=\"contact\"|Systems content coming next" src/pages/index.js src/components src/constants/constants.js` passed.
- `npm run build` failed under Node 22.22.0 with `ERR_OSSL_EVP_UNSUPPORTED`, consistent with the old Next.js/Webpack dependency tree.
- `NODE_OPTIONS=--openssl-legacy-provider npm run build` passed.
- `curl -I http://127.0.0.1:3000` returned `HTTP/1.1 200 OK` when run with sandbox escalation against the restarted local dev server.
- Headless Chrome desktop screenshot at 1440x1100 rendered the hero, profile image, header, CTAs, metrics, and visible next-section hint without server errors.
- Headless Chrome mobile/tablet screenshot at 500x1200 rendered wrapped navigation, stacked CTAs, signal pills, and the inspectable profile image without clipped text.

## Issues Encountered

- `node_modules` was missing at the start of verification. `npm ci` succeeded after sandbox escalation.
- `npm ci` reported 23 vulnerabilities in the existing dependency tree. This is recorded as Phase 3 dependency debt; no dependency policy changes were made in Phase 1.
- The default build command fails on Node 22 without `NODE_OPTIONS=--openssl-legacy-provider`.
- The first dev-server screenshot hit a stale `.next` chunk error after a production build had run while `next dev` was still alive. Restarting the dev server cleared the generated-cache issue; clean desktop and mobile/tablet screenshots then rendered successfully.

## User Setup Required

None for Phase 1. Before launch, replace `TODO_PUBLIC_RESUME_URL` in `src/constants/constants.js` with a stable public resume URL.

## Next Phase Readiness

Phase 2 can now replace shell placeholders with resume-derived experience, systems, skills, achievements, and contact copy. The shell, anchors, constants, and first-viewport positioning are ready for content fill-in.

## Self-Check: PASSED

All Phase 1 source assertions passed, the legacy OpenSSL build passed after the review fix, and the restarted local dev server returned `200 OK` with clean desktop and mobile/tablet screenshots.

---
*Phase: 01-executive-portfolio-shell*
*Completed: 2026-05-28*
