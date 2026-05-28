# Agentic AI Engineer Portfolio

## What This Is

This is a full rebuild of Prakhar Jalan's existing Next.js portfolio, repositioning it from a college-era full-stack/student portfolio into a professional portfolio for an agentic AI engineer with around two years of industry experience. The site should speak primarily to hiring managers, senior engineers, AI platform teams, and recruiters evaluating fit for agentic AI, backend platform, reliability, and production LLM roles.

The new portfolio will use resume-driven content from `PRAKHAR.pdf` and the existing codebase as a starting point, but the UI, copy, sections, and visual language should be rebuilt around a more mature executive-polish direction with restrained AI cues.

## Core Value

The portfolio must clearly communicate that Prakhar can build production-grade agentic AI systems with governance, reliability, orchestration, and high-concurrency backend depth.

## Requirements

### Validated

- ✓ Existing portfolio renders as a Next.js single-page site with header, hero, projects, technologies, and footer sections — existing
- ✓ Existing site uses React and styled-components with global theming and SSR style collection — existing
- ✓ Existing site includes social/profile links, project cards, and static image assets — existing
- ✓ Existing codebase has been mapped in `.planning/codebase/` and is ready for phased modernization — existing
- ✓ Phase 1 established the executive portfolio shell, first-viewport Agentic AI Engineer positioning, approved visual palette, responsive header/hero/section structure, and centralized shell content — Phase 1
- ✓ Phase 2 replaced the active homepage content with resume-derived professional experience, Oracle production agentic AI proof, grouped skills, compact credentials, and safe centralized contact data — Phase 2
- ✓ Phase 3 refined the active homepage into a dark agentic UI, fixed the Oracle MTS-1 blank-space issue with a narrative/proof split, and moved location out of contact cards into contact status text — Phase 3

### Active

- [x] Rebuild the portfolio content around current professional identity: IIIT Allahabad 2024 graduate, Oracle MTS-1, agentic AI systems, governance, reliability, LLM orchestration, FastAPI, Python, LangGraph, Go, and production backend systems — validated in Phase 2.
- [x] Replace student-era hero, technology, project, and footer content with resume-derived professional copy and stronger proof points — validated in Phases 1 and 2 for the active homepage.
- [x] Create a polished executive visual direction with restrained agentic AI cues: system traces, orchestration/control-plane language, reliability metrics, and high-signal technical storytelling without looking gimmicky — validated in Phases 1 and 2.
- [x] Present professional experience with quantified impact: centralized agentic harness platform, DevOps incident triage agent for 500+ Sev2 incidents, 30% MTTR reduction, 4.2/5 satisfaction, FastAPI control plane, Zolostays operational tooling, and Oracle data-labeling workflow work — validated in Phase 2.
- [x] Highlight skills in agentic AI and backend platforms: Python, Golang, FastAPI, LangGraph, CrewAI, Spring Boot, React, LLM orchestration, OCI, Docker, Kubernetes, Redis, PostgreSQL, Kafka, system design, and DSA — validated in Phase 2.
- [x] Modernize the UI structure and components enough that the final site feels intentionally redesigned, not just copy-edited — validated in Phases 1 and 2 for the active homepage.
- [x] Refine the active UI into a stronger dark-mode agentic portfolio, specifically fixing the Oracle MTS-1 card's excess blank space and making contact/location presentation feel intentional — validated in Phase 3.
- [ ] Fix current codebase concerns during the rebuild: stale/dead files, duplicated content placement, misspelled component directory, sample API route, accessibility gaps, external-link safety, and missing verification scripts.
- [ ] Make the site deployment-ready with a clear package-manager choice, build verification, and basic quality checks.

### Out of Scope

- Blog engine — useful later, but the first milestone should ship a focused professional portfolio.
- Authentication or account features — not relevant to a personal portfolio.
- Backend service or database — the portfolio can be static/content-driven unless a later phase adds dynamic content.
- Heavy futuristic AI lab visuals — user selected executive polish, so agentic cues should support credibility rather than dominate the page.
- Incremental content-only refresh — user selected a full rebuild.

## Context

The current site was built while Prakhar was in college. It presents a full-stack/student identity and has older project descriptions, visual language, and personal positioning. The new version should reflect that Prakhar is now a working professional who has transitioned into agentic AI engineering.

Resume source: `/Users/ppjalan/Downloads/PRAKHAR.pdf`.

Resume-derived positioning:
- Prakhar Jalan is based in Bangalore, India.
- IIIT Allahabad 2024 graduate in Information Technology with CGPA 8.60.
- Current role: Member of Technical Staff - 1 at Oracle, Bangalore, July 2024 to present.
- Professional focus: agentic AI systems with governance, reliability, deterministic policy-driven workflows, LLM tool-call control, cost control, and enterprise production safety.
- Backend strengths: high-concurrency systems in Go and Python, FastAPI, Spring Boot, SQL, Redis, PostgreSQL, Kafka, Docker, Kubernetes, OCI, and system design.
- Current Oracle work includes a centralized agentic harness platform using Python and LangGraph, a specialized DevOps agent used by Tier-0 teams to triage 500+ Sev2 incidents, and a high-performance control plane layer for managing agents at scale with guardrails.
- Prior experience includes Zolostays backend and operations tooling in Go, plus Oracle project internship work on Spring Boot REST APIs and Server Sent Events for batch data labeling.
- Achievements include Q4 Champion at Oracle, Winner of WebKriti 2023, ICPC Gwalior-Pune 2020 regional rank 349, and OpenCode 2021 rank 13 out of 1000+ participants.
- Responsibilities include Hack in the North core team, mentoring 100+ students at Acciojob in DSA, and authoring competitive programming problems on HackerEarth.

Existing codebase context:
- The app is a small Next.js 10.2.3 and React 17 portfolio using styled-components.
- The main route is `src/pages/index.js`.
- Current sections live under `src/components/`: `Header`, `Hero`, `Projects`, `Technologies`, `Footer`, and `BackgrooundAnimation`.
- Current content is spread across components and `src/constants/constants.js`.
- Codebase map documents are available under `.planning/codebase/` and should guide implementation.
- Existing concerns include old dependencies, both npm and Yarn lockfiles, no tests/lint scripts, empty CSS files, unused styled exports, misspelled `BackgrooundAnimation`, sample `/api/hello`, and accessibility/performance gaps.

## Constraints

- **Audience**: Primary audience is hiring managers, AI/platform teams, and recruiters — copy should make senior technical fit obvious quickly.
- **Visual direction**: Executive polish with restrained AI cues — avoid an overdone futuristic AI lab look.
- **Rewrite depth**: Full rebuild — preserve the repo as the starting point but do not preserve the current page structure unnecessarily.
- **Source material**: Resume content is authoritative for professional positioning and proof points.
- **Technical base**: Existing Next.js/React/styled-components code can be used as a starting point, but modernization may replace large parts of the current component structure.
- **Quality**: Rebuild should include build verification and at least a minimal quality gate before considering the site done.
- **Privacy**: Contact details from the resume may be used where appropriate, but the implementation should avoid exposing anything beyond intentional public portfolio content.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Target hiring managers and AI/platform teams first | The portfolio should convert professional evaluation, not just personal discovery | - Pending |
| Use executive polish with restrained agentic cues | The portfolio should feel credible and mature while still signaling agentic AI expertise | Phase 1 shell validated |
| Fully rebuild the portfolio | The current site reflects a college-era identity and is not just a copy refresh | Phase 1 shell rebuilt; Phase 2 content fill-in remains |
| Use the resume as primary content source | The resume captures current role, impact metrics, skills, and professional positioning | Phase 2 content validated |
| Prioritize dark agentic UI refinement before launch cleanup | Current light UI has too much whitespace in key cards and does not yet feel agentic enough | Phase 3 validated; quality/launch cleanup remains Phase 4 |
| Keep scope focused on a portfolio, not a product platform | Authentication, backend services, and dynamic systems do not support the core value for v1 | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check -> still the right priority?
3. Audit Out of Scope -> reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-29 after Phase 3 completion*
