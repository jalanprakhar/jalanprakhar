# Phase 2: Resume-Driven Content Rebuild - Context

**Gathered:** 2026-05-28T20:38:59Z
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 2 replaces the Phase 1 placeholder content with resume-derived professional content. It should keep the Phase 1 executive visual shell, then fill the page with current professional positioning, chronological experience, selected systems/proof points, skills, achievements, education, responsibilities, and contact architecture.

This phase clarifies content structure and editorial choices only. It does not add a blog, CMS, backend service, case-study pages, advanced graph demos, package cleanup, dependency upgrades, or launch-quality infrastructure work.

</domain>

<decisions>
## Implementation Decisions

### Story Hierarchy
- **D-01:** Use chronological professional experience as the primary content spine.
- **D-02:** Interpret "chronological experience" as a professional timeline/list ordered from most recent and strongest role to earlier experience: Oracle MTS-1, Zolostays Software Engineer Intern, Oracle Project Intern.
- **D-03:** Systems/proof content should support the experience story rather than replace it as the main section. The visitor should first understand where Prakhar worked and what he delivered, then see system-level proof points.
- **D-04:** The active page should no longer depend on old student-era project cards as proof of current fit. If legacy student projects remain in code before Phase 3 cleanup, Phase 2 should not render them as the main professional story.

### Oracle Proof Depth
- **D-05:** Show all resume-backed Oracle proof points, but rewrite them into polished portfolio language rather than copying resume bullets verbatim.
- **D-06:** Include the centralized agentic harness platform using Python and LangGraph, deterministic policy-driven workflows, governance, hallucination-risk mitigation, LLM tool-call control, and cost control.
- **D-07:** Include the specialized DevOps agent used by Tier-0 / OKE teams to triage 500+ Sev2 incidents, with 30% MTTR reduction and 4.2/5 average user satisfaction.
- **D-08:** Include the high-performance FastAPI control-plane layer for managing agents at scale with production safety guardrails and leadership-level operational control.
- **D-09:** Present Oracle work as production systems, not demos. Use compact impact metrics and system labels where helpful.

### Supporting Background
- **D-10:** The agent may choose the exact weighting for Zolostays, Oracle internship, achievements, education, and responsibilities.
- **D-11:** Supporting background should reinforce the agentic AI/backend platform story without making the page feel like a dense resume.
- **D-12:** Include Zolostays work: Golang lost-and-found backend integrated into Zolo Scholar app, 500+ daily active users, Zo-Tag inventory system replacing third-party software, $350/month cost reduction, reduced tracking errors, and OPS workflow tooling improvements.
- **D-13:** Include Oracle Project Internship work: Spring Boot REST API, Server-Sent Events for batch data labeling, 12% reduction in manual annotation time, improved review throughput, and reduced turnaround time.
- **D-14:** Include achievements and leadership/responsibilities, but keep them compact: Q4 Champion at Oracle, WebKriti 2023 winner, ICPC regional rank, OpenCode 2021 rank, Hack in the North core team, Acciojob DSA mentorship, and HackerEarth problem authoring.
- **D-15:** Include education, but it should not compete with professional experience. IIIT Allahabad should be present with B.Tech IT and CGPA; earlier education can be minimized or omitted if space becomes crowded.

### Skills and Contact Architecture
- **D-16:** Group skills around Agentic AI, backend/platform, cloud/devops, and fundamentals.
- **D-17:** Include resume-backed skills: Python, Golang, C++, Java, SQL, JavaScript, LangGraph, CrewAI, FastAPI, Spring Boot, React, LLM orchestration, OCI, Docker, Kubernetes, Git, Redis, PostgreSQL, Kafka, system design, DSA, and operating systems.
- **D-18:** Remove phone number from the public site. Do not expose `tel:` links or phone text.
- **D-19:** Contact should use centralized email, GitHub, LinkedIn, and location. Keep contact/social data in constants so header, footer, hero CTA, and contact shell reuse the same source.
- **D-20:** Resume CTA should still avoid local filesystem paths. If no stable public resume URL exists, keep a centralized TODO or route to contact rather than shipping a broken local path.

### The Agent's Discretion
- The agent may decide exact section component boundaries and whether to keep Phase 2 content in `src/constants/constants.js` or split it into additional content objects in the same file, as long as the data stays centralized.
- The agent may choose exact copywriting, metric presentation, card/timeline density, and whether the Systems section mirrors Oracle systems or broader "selected systems" proof points.
- The agent may decide how much of achievements, education, and responsibilities appears in full cards versus compact lists.
- The agent may adjust hero support copy or metrics if needed to align with the final resume-derived page, but it must preserve the Phase 1 identity and visual direction.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project and Scope
- `.planning/PROJECT.md` — Project positioning, resume-derived source facts, audience, constraints, and active requirements.
- `.planning/REQUIREMENTS.md` — Phase 2 requirements: `POS-03`, `EXP-01`, `EXP-02`, `EXP-03`, `CONT-01`, `CONT-02`, `CONT-03`.
- `.planning/ROADMAP.md` — Phase 2 goal, success criteria, and planned single-plan scope.
- `.planning/STATE.md` — Current state showing Phase 1 complete and Phase 2 ready to plan.

### Prior Phase Artifacts
- `.planning/phases/01-executive-portfolio-shell/01-CONTEXT.md` — Locked Phase 1 shell decisions: photo, resume CTA handling, and skeleton anchors.
- `.planning/phases/01-executive-portfolio-shell/01-VERIFICATION.md` — Confirms Phase 1 shell, anchors, constants, and visual direction passed verification.
- `.planning/phases/01-executive-portfolio-shell/01-SECURITY.md` — Confirms Phase 1 security expectations, including no phone exposure and no local resume path.

### Resume Source
- `/Users/ppjalan/Downloads/PRAKHAR.pdf` — Authoritative resume source for roles, metrics, skills, achievements, education, and responsibilities. Do not expose the phone number from this source on the public site.

### Codebase Map
- `.planning/codebase/CONVENTIONS.md` — Existing component naming, styled-components, static-content, and import conventions.
- `.planning/codebase/STRUCTURE.md` — Current homepage, layout, constants, component, and static asset locations.
- `.planning/codebase/STACK.md` — Next.js 10, React 17, styled-components, package-manager, and build context.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/constants/constants.js`: Current single source for Phase 1 profile, navigation, links, hero copy, metrics, shell sections, and legacy project data. Phase 2 should centralize resume-derived content here or in closely related exported constants.
- `src/pages/index.js`: Renders `Hero` plus `ShellSection` for `experience`, `systems`, `skills`, and `contact`. Phase 2 can replace generic `ShellSection` rendering with richer section-specific components if needed.
- `src/components/Hero/Hero.js`: Already renders the first-viewport identity, CTAs, profile image, metrics, and credibility signals. Phase 2 may refine content but should not undo Phase 1 positioning.
- `src/components/Header/Header.js` and `src/components/Footer/Footer.js`: Already consume centralized profile/link constants and should remain aligned with any content/contact changes.
- `src/styles/GlobalComponents/index.js`: Provides `PageSection`, `SectionInner`, `SectionHeader`, `SectionHeading`, `SectionLead`, `ShellGrid`, `SectionCard`, CTA links, and supporting card text primitives.

### Established Patterns
- Styling is styled-components with adjacent `*Styles.js` files for component-specific layouts.
- Shared cross-section primitives live in `src/styles/GlobalComponents/index.js`.
- Static/repeated content should be centralized in `src/constants/constants.js`.
- Local imports use relative paths; no path aliases are configured.
- Phase 1 intentionally kept content placeholders. Phase 2 should replace those placeholders with substantive resume-derived content.

### Integration Points
- Section anchors must remain compatible with header nav: `#experience`, `#systems`, `#skills`, `#contact`.
- Contact/social/resume metadata should continue flowing from centralized constants into hero, header, footer, and contact shell.
- The active homepage should avoid rendering `Projects`, `Technologies`, or `BackgrooundAnimation` as the dominant experience.
- Phase 3 owns dead-code cleanup, package-manager choice, sample API cleanup, and build-system modernization.

</code_context>

<specifics>
## Specific Ideas

- Make the Experience section chronological/reverse-chronological and let it carry the main narrative.
- Show the full resume story, but rewrite it into portfolio-native language with concise proof points, metrics, and system labels.
- Make Oracle MTS-1 the strongest section because it directly proves current agentic AI engineering fit.
- Keep supporting material compact so achievements, education, and responsibilities add credibility without overwhelming the main professional story.
- Remove phone number from the public site and avoid `tel:` links.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 2 scope.

</deferred>

---

*Phase: 2-Resume-Driven Content Rebuild*
*Context gathered: 2026-05-28T20:38:59Z*
