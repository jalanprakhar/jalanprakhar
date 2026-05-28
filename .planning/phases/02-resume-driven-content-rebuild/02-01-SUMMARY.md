---
phase: 02-resume-driven-content-rebuild
plan: 01
subsystem: ui-content
tags: [nextjs, react, styled-components, portfolio, agentic-ai]
requires:
  - phase: 01-executive-portfolio-shell
    provides: executive visual shell, hero structure, navigation anchors, and centralized profile constants
provides:
  - Resume-derived professional homepage content
  - Reverse-chronological experience section
  - Production systems proof section
  - Grouped skills, compact credentials, and safe contact section
affects: [homepage, profile-content, phase-03-quality-launch-readiness]
tech-stack:
  added: []
  patterns:
    - Centralized resume content in constants
    - Section-specific styled-components fed by constants
key-files:
  created:
    - src/components/ProfileSections/ProfileSections.js
    - src/components/ProfileSections/ProfileSectionsStyles.js
  modified:
    - src/constants/constants.js
    - src/pages/index.js
key-decisions:
  - "Kept resume/contact data centralized in src/constants/constants.js for header, hero, footer, and contact reuse."
  - "Made Oracle MTS-1 the dominant reverse-chronological experience item and used systems cards as supporting proof."
  - "Kept the resume CTA centralized with TODO_PUBLIC_RESUME_URL fallback to #contact rather than shipping a local PDF path."
patterns-established:
  - "Resume-backed section data maps from constants instead of duplicating content inside page components."
  - "Professional proof is split into experience spine, systems proof, skill taxonomy, credentials, and contact."
requirements-completed: [POS-03, EXP-01, EXP-02, EXP-03, CONT-01, CONT-02, CONT-03]
duration: 10 min
completed: 2026-05-28
---

# Phase 2 Plan 1: Resume-Driven Content Rebuild Summary

**Resume-backed agentic AI portfolio content with Oracle production systems, grouped skills, compact credentials, and centralized safe contact data**

## Performance

- **Duration:** 10 min
- **Started:** 2026-05-28T20:58:08Z
- **Completed:** 2026-05-28T21:08:03Z
- **Tasks:** 3 completed
- **Files modified:** 5

## Accomplishments

- Rebuilt the active homepage content around current agentic AI engineering work instead of the old student-era project story.
- Added reverse-chronological experience, selected production systems, skill groups, credentials, and contact sections.
- Preserved centralized profile/contact data and verified that no phone link or local resume PDF path is exposed in `src`.

## Task Commits

| Task | Commit | Notes |
|------|--------|-------|
| Task 1: Centralize resume-derived professional content | `d5d0748` | Added `experienceItems`, `systemProofs`, `skillGroups`, `credentials`, and `contactHighlights` in constants. |
| Task 2: Build resume-driven homepage sections | `c787673` | Added `ProfileSections` components/styles and updated homepage composition. |
| Task 3: Verify coverage, privacy, build status, and summary | pending | This summary records the completed verification results. |

## Files Created/Modified

- `src/constants/constants.js` - Centralized resume-derived profile, hero, experience, systems, skills, credentials, and contact content.
- `src/components/ProfileSections/ProfileSections.js` - Renders experience, systems, skills, credentials, and contact sections from constants.
- `src/components/ProfileSections/ProfileSectionsStyles.js` - Adds responsive Phase 2 section layouts with 8px cards and stable grids.
- `src/pages/index.js` - Composes `Hero`, `ExperienceSection`, `SystemsSection`, `SkillsSection`, `CredentialsSection`, and `ContactSection`.
- `.planning/phases/02-resume-driven-content-rebuild/02-01-SUMMARY.md` - Records execution outcome and verification evidence.

## Verification

| Check | Result | Evidence |
|-------|--------|----------|
| Required resume content appears in active source | PASS | `rg "Oracle|LangGraph|500\\+|30%|4\\.2/5|FastAPI|Zolostays|\\$350/month|Spring Boot|12%|Q4 Champion|IIIT Allahabad|Agentic AI|Backend and Platform|Cloud and DevOps|Fundamentals" src/constants/constants.js src/components/ProfileSections src/pages/index.js` returned matches. |
| Public phone/local resume privacy | PASS | `rg "tel:|/Users/ppjalan/Downloads/PRAKHAR.pdf" src` returned no matches. |
| Phase 2 section anchors | PASS | `rg "id=\"experience\"|id=\"systems\"|id=\"skills\"|id=\"credentials\"|id=\"contact\"" src/pages/index.js src/components/ProfileSections` found all anchors. |
| Old student-era homepage proof disabled | PASS | `rg "Projects|Technologies|BackgrooundAnimation" src/pages/index.js` returned no matches. |
| Production build | PASS | `NODE_OPTIONS=--openssl-legacy-provider npm run build` exited 0. Warnings were limited to stale Browserslist data and skipped Google Fonts optimization under restricted network access. |
| Local route smoke test | PASS | Dev server returned `HTTP/1.1 200 OK` for `http://127.0.0.1:3000`, and server-rendered HTML contained the new Phase 2 sections. |

## Requirement Coverage

- **POS-03:** Active homepage content is rewritten from resume-derived professional facts in `constants.js` and rendered through Phase 2 sections.
- **EXP-01:** Oracle MTS-1 content includes Python, LangGraph, deterministic policy workflows, governance, hallucination-risk mitigation, tool-call control, cost control, DevOps triage, 500+ Sev2 incidents, 30% MTTR reduction, 4.2/5 satisfaction, and FastAPI control-plane impact.
- **EXP-02:** Zolostays and Oracle Project Intern experience include 500+ DAU, Zo-Tag, $350/month savings, Golang, Spring Boot, Server-Sent Events, and 12% annotation-time reduction.
- **EXP-03:** Achievements, responsibilities, and IIIT Allahabad education are present in compact credentials columns.
- **CONT-01:** Homepage renders hero, experience, systems, skills, credentials, and contact sections.
- **CONT-02:** Skills are grouped as Agentic AI, Backend and Platform, Cloud and DevOps, and Fundamentals.
- **CONT-03:** Profile, social, resume, and contact data remain centralized in `src/constants/constants.js`.

## Decision Coverage

- **D-01 to D-04:** Experience is the primary reverse-chronological spine; systems support the story; old `Projects`, `Technologies`, and `BackgrooundAnimation` are not active homepage proof.
- **D-05 to D-09:** Oracle proof points are rewritten in portfolio language and presented as production systems.
- **D-10 to D-15:** Supporting roles, achievements, responsibilities, and education reinforce the agentic AI/backend story without overtaking Oracle experience.
- **D-16 to D-17:** Required skills are present in the four locked skill groups.
- **D-18 to D-20:** Phone number and `tel:` links are absent, no local PDF path is shipped, and resume/contact behavior remains centralized.

## Decisions Made

- Kept all Phase 2 content in `src/constants/constants.js` because the existing app already uses that file as the profile/content source of truth.
- Kept legacy project exports available for Phase 3 cleanup, but removed them from active homepage composition.
- Used a contact fallback for the resume CTA while `profile.resumeUrl` remains `TODO_PUBLIC_RESUME_URL`.

## Deviations from Plan

None - plan executed exactly as written.

**Total deviations:** 0 auto-fixed.
**Impact on plan:** No scope changes.

## Issues Encountered

- The initial sandboxed dev server listen failed with `EPERM`; rerunning the dev server on `127.0.0.1` with approval succeeded.
- Browser screenshot verification was not run because the available browser tooling was MCP-backed and MCP servers were explicitly disallowed. Verification used build plus local HTTP smoke test instead.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Phase 2 content is ready for Phase 3 quality and launch readiness. Phase 3 can now remove stale/dead code, clean sample artifacts, choose one package manager lockfile, and add quality checks without changing the professional content model.

## Self-Check: PASSED

All planned tasks, acceptance criteria, privacy checks, build checks, and requirement mappings passed.

---
*Phase: 02-resume-driven-content-rebuild*
*Completed: 2026-05-28*
