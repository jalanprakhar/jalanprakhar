# Phase 02: Resume-Driven Content Rebuild - Research

**Researched:** 2026-05-29
**Mode:** Inline research because GSD subagents are not installed in this runtime.
**Scope:** Plan Phase 2 well using local project artifacts, codebase map, active source files, UI-SPEC, and `/Users/ppjalan/Downloads/PRAKHAR.pdf`.
**External research:** Not used. User instructed not to start MCP servers, and this phase needs no new library or external API.

## User Constraints

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

## Standard Stack

- Use the existing Next.js 10.2.3, React 17.0.2, styled-components 5.3.x, styled-normalize, and react-icons stack. [VERIFIED: package.json]
- Do not add dependencies for Phase 2. The content rebuild can be implemented with static constants, React components, and styled-components. [VERIFIED: src/constants/constants.js, src/pages/index.js, 02-UI-SPEC.md]
- Keep the legacy `pages/` router and current styled-components SSR wiring intact. [VERIFIED: src/pages/_app.js, src/pages/_document.js, .babelrc]
- The build environment currently uses Node `v22.22.0`; Next.js 10/Webpack requires `NODE_OPTIONS=--openssl-legacy-provider npm run build` for a successful production build in this repo. [VERIFIED: node -v, 01-01-SUMMARY.md]

## Resume Source Findings

- The resume confirms Prakhar Jalan is based in Bangalore, India, is an IIIT Allahabad 2024 B.Tech IT graduate with CGPA 8.60, and is currently Oracle MTS-1 from July 2024 to present. [VERIFIED: /Users/ppjalan/Downloads/PRAKHAR.pdf]
- Oracle MTS-1 content should include a centralized agentic harness platform using Python and LangGraph, deterministic policy-driven workflows, governance, hallucination-risk mitigation, LLM tool-call and cost control, a DevOps agent for Tier-0 / OKE teams, 500+ Sev2 incidents, 30% MTTR reduction, 4.2/5 satisfaction, and a FastAPI control plane for agent management and safety guardrails. [VERIFIED: /Users/ppjalan/Downloads/PRAKHAR.pdf]
- Zolostays content should include Golang backend work, Zolo Scholar lost-and-found, 500+ daily active users, Zo-Tag inventory management replacing third-party software, $350/month cost reduction, reduced tracking errors, and OPS workflow tooling improvements. [VERIFIED: /Users/ppjalan/Downloads/PRAKHAR.pdf]
- Oracle Project Intern content should include Spring Boot REST API, Server-Sent Events, batch data labeling, 12% manual annotation time reduction, improved review throughput, and reduced turnaround time. [VERIFIED: /Users/ppjalan/Downloads/PRAKHAR.pdf]
- The resume contains a phone number. Phase 2 must not copy that number into public source, UI text, links, or planning acceptance criteria. [VERIFIED: /Users/ppjalan/Downloads/PRAKHAR.pdf, D-18]

## Architecture Patterns

### Content Architecture

- Keep shared profile, contact, nav, CTA, hero, experience, systems, skills, achievements, education, and responsibility data in `src/constants/constants.js`. [VERIFIED: D-19, 02-UI-SPEC.md, CONVENTIONS.md]
- Replace Phase 1 placeholder `shellSections` content with structured exports such as `experienceItems`, `systemProofs`, `skillGroups`, `credentials`, and `contactHighlights`, or a similarly clear taxonomy. [VERIFIED: src/constants/constants.js, 02-UI-SPEC.md]
- Keep legacy `projects` export only for untouched old components if needed; Phase 2 homepage should not render it as current professional proof. [VERIFIED: D-04, Phase 3 cleanup scope]

### Rendering Pattern

- `src/pages/index.js` should remain a small composition module: import `Hero`, layout wrapper, constants or section components, then render Phase 2 sections in order. [VERIFIED: src/pages/index.js, STRUCTURE.md]
- Use a new section-specific component module when the generic `ShellSection` cannot represent timeline, system proof, skill taxonomy, and credentials cleanly. A practical target is `src/components/ProfileSections/ProfileSections.js` with adjacent `ProfileSectionsStyles.js`. [VERIFIED: CONVENTIONS.md, 02-UI-SPEC.md]
- Component-specific styled-components belong beside the component in `*Styles.js`; shared cross-section primitives belong in `src/styles/GlobalComponents/index.js` only when reused across sections. [VERIFIED: CONVENTIONS.md]

### Visual Pattern

- Preserve the Phase 1 palette, typography, spacing, card radius, restrained system cues, and anchor labels from `02-UI-SPEC.md`. [VERIFIED: 01-UI-SPEC.md, 02-UI-SPEC.md, src/themes/default.js]
- Experience should be the dominant content spine. Oracle MTS-1 should have the most visual weight; Zolostays and Oracle Project Intern should be compact but complete. [VERIFIED: D-01, D-02, D-03, 02-UI-SPEC.md]
- Systems should be a supporting proof section, not a substitute for experience. [VERIFIED: D-03, 02-UI-SPEC.md]

## Architectural Responsibility Map

| Tier | Owns | Phase 2 Responsibilities |
|------|------|--------------------------|
| Static content data | Resume-derived facts and public profile metadata | Define structured exports in `src/constants/constants.js`; omit phone and local resume path. |
| React page composition | Section order and anchor wiring | Compose `Hero`, `Experience`, `Systems`, `Skills`, and `Contact`/credential sections in `src/pages/index.js`. |
| React presentational components | Mapping content objects to semantic HTML | Render timeline/cards/lists from constants without hard-coded duplicated facts. |
| styled-components | Layout, responsive grids, typography, visual hierarchy | Implement section-specific grids, role cards, metric rails, skill groups, and mobile behavior. |
| Build/runtime | Next.js static page output | Verify with `NODE_OPTIONS=--openssl-legacy-provider npm run build`. |

## Recommended Plan Shape

Use one Phase 2 plan, matching ROADMAP.md:

1. Centralize resume-derived content in `src/constants/constants.js`.
2. Build richer Phase 2 sections and wire homepage composition.
3. Verify requirement coverage, privacy constraints, anchors, and build status.

This shape keeps work within a single-page static portfolio boundary and avoids Phase 3 cleanup work. [VERIFIED: ROADMAP.md, 02-CONTEXT.md, 02-UI-SPEC.md]

## Don't Hand-Roll

- Do not hand-roll a new design system or component library. Use styled-components and local primitives. [VERIFIED: 02-UI-SPEC.md]
- Do not implement a CMS, backend, API route, contact form, dynamic resume loader, or data fetcher in Phase 2. [VERIFIED: 02-CONTEXT.md, PROJECT.md]
- Do not add animation libraries or heavy graph/canvas demos for the systems story. [VERIFIED: 02-UI-SPEC.md]
- Do not add a public phone number, `tel:` links, or a local resume path. [VERIFIED: D-18, D-20]
- Do not delete old components as cleanup unless needed to remove them from active homepage composition; Phase 3 owns dead-code cleanup. [VERIFIED: ROADMAP.md, 02-CONTEXT.md]

## Common Pitfalls

- Copying resume bullets verbatim instead of rewriting them as portfolio-native system proof violates D-05. [VERIFIED: D-05]
- Rendering systems before experience, or making systems the primary spine, violates D-01 and D-03. [VERIFIED: D-01, D-03]
- Adding all achievements as large cards can overwhelm the Oracle story and violate D-11/D-15. [VERIFIED: D-11, D-15]
- Keeping Phase 1 placeholder `shellSections` text will fail POS-03 and CONT-01. [VERIFIED: REQUIREMENTS.md, src/constants/constants.js]
- Running plain `npm run build` on Node 22 can fail even when source code is valid. Use the legacy OpenSSL flag until Phase 3 resolves dependency modernization. [VERIFIED: 01-01-SUMMARY.md]

## Package Legitimacy Audit

| Package | Action | Provenance | Status |
|---------|--------|------------|--------|
| none | No package installs planned | Phase can use existing dependencies | PASS |

## Security Domain

- Trust boundaries are limited to static source content, local public assets, and outbound external links. There is no user input, backend, database, auth, or form submission in Phase 2. [VERIFIED: codebase map, 02-CONTEXT.md]
- Highest-risk item is information disclosure from copying resume-only private contact data into public app source. Mitigation: omit phone number, assert no `tel:` links, assert app source does not contain the local resume path. [VERIFIED: D-18, D-20]
- External GitHub/LinkedIn links already use `rel="noopener noreferrer"` in Phase 1 header/footer. If new external links are added, preserve that pattern. [VERIFIED: src/components/Header/Header.js, src/components/Footer/Footer.js]
- Content accuracy is a reputation/security-adjacent risk: do not invent metrics beyond the resume. Use the exact resume-backed values. [VERIFIED: /Users/ppjalan/Downloads/PRAKHAR.pdf]

## Verification Strategy

- Source assertions should check required resume facts in active source: `Oracle`, `LangGraph`, `500+`, `30%`, `4.2/5`, `FastAPI`, `Zolostays`, `$350/month`, `Spring Boot`, `12%`, `Q4 Champion`, `IIIT Allahabad`, and skill groups. [VERIFIED: REQUIREMENTS.md, 02-CONTEXT.md]
- Privacy assertions should check active app source for absence of `tel:`, the local resume path, and the resume phone number. The exact phone number should not be written into the plan text; use a pattern or manual source review. [VERIFIED: D-18, D-20]
- Anchor assertions should check `#experience`, `#systems`, `#skills`, and `#contact` remain present and rendered from the homepage. [VERIFIED: 02-UI-SPEC.md]
- Build verification should use `NODE_OPTIONS=--openssl-legacy-provider npm run build` under current Node 22. [VERIFIED: 01-01-SUMMARY.md]

## Open Questions (RESOLVED)

1. **Should Phase 2 use external UI or animation libraries?** RESOLVED: No. Use the existing styled-components stack and local primitives.
2. **Should the public site include the resume phone number?** RESOLVED: No. D-18 explicitly removes phone exposure.
3. **Should Phase 2 delete old project/dead components?** RESOLVED: No unless active homepage composition requires it. Phase 3 owns cleanup.
