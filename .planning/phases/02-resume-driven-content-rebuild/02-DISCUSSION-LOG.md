# Phase 2: Resume-Driven Content Rebuild - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-05-28T20:38:59Z
**Phase:** 2-Resume-Driven Content Rebuild
**Areas discussed:** Story hierarchy, Oracle proof depth, Supporting background, Skills and contact architecture

---

## Story Hierarchy

| Option | Description | Selected |
|--------|-------------|----------|
| Chronological experience | Lead with professional experience as the main content spine, ordered from current role to earlier roles. | ✓ |
| Systems-first proof | Make selected systems the primary section, with experience as supporting context. | |
| Hybrid | Put experience and systems at equal weight. | |

**User's choice:** Chronological experience.
**Notes:** User explicitly answered: "yes chronological experience." Interpreted as reverse-chronological professional timeline: Oracle MTS-1, Zolostays, Oracle Project Intern.

---

## Oracle Proof Depth

| Option | Description | Selected |
|--------|-------------|----------|
| Compact highlights only | Show only a few headline metrics and hide most technical detail. | |
| Full resume proof rewritten for portfolio | Include all resume-backed Oracle proof points, rewritten in polished portfolio language. | ✓ |
| Deep case-study detail | Expand Oracle systems into long-form case studies. | |

**User's choice:** Show everything on the resume in the agent's own way.
**Notes:** Phase 2 should include agentic harness, LangGraph, policy-driven workflows, governance, hallucination-risk mitigation, DevOps agent, 500+ Sev2 incidents, 30% MTTR reduction, 4.2/5 satisfaction, FastAPI control plane, LLM integrations, scale, and production safety guardrails.

---

## Supporting Background

| Option | Description | Selected |
|--------|-------------|----------|
| Keep all supporting details visible | Include Zolostays, internship, achievements, education, and responsibilities with clear but compact presentation. | |
| Minimal support | Keep supporting background very short and focus nearly everything on Oracle. | |
| The agent decides weighting | Let the agent choose exact density and placement to avoid a dense resume feel. | ✓ |

**User's choice:** The agent decides.
**Notes:** Use editorial restraint. Include Zolostays, Oracle internship, achievements, education, and responsibilities, but make them support the current agentic AI/backend story.

---

## Skills and Contact Architecture

| Option | Description | Selected |
|--------|-------------|----------|
| Keep phone public | Include phone from resume in contact section and footer. | |
| Remove phone from public site | Use email, GitHub, LinkedIn, and location only; avoid `tel:` links. | ✓ |
| Minimal contact only | Email only, no social profile emphasis. | |

**User's choice:** Remove phone number.
**Notes:** Skills should still be grouped around Agentic AI, backend/platform, cloud/devops, and fundamentals. Contact/social data should stay centralized.

---

## The Agent's Discretion

- Exact copywriting and layout density for the experience timeline.
- How strongly to separate Oracle "Experience" versus "Systems" proof points.
- How much space achievements, education, and responsibilities receive.
- Whether to create new section-specific components or extend the existing `ShellSection` pattern.

## Deferred Ideas

None.
