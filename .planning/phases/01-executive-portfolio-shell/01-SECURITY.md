---
phase: "01"
slug: executive-portfolio-shell
status: verified
threats_open: 0
asvs_level: 1
created: 2026-05-28T20:32:50Z
updated: 2026-05-28T20:32:50Z
register_authored_at_plan_time: true
---

# Phase 01 — Security

> Per-phase security contract: threat register, accepted risks, and audit trail.

---

## Trust Boundaries

| Boundary | Description | Data Crossing |
|----------|-------------|---------------|
| Static portfolio code and assets | Repository-owned source and `public/` assets are trusted build inputs for this static portfolio shell. | Public UI content and image assets. |
| Outbound profile/resume/social links | Header, hero, footer, and contact-shell links leave the portfolio for GitHub, LinkedIn, email, or future resume hosting. | Public profile/contact metadata. |
| Public contact details | Email and location are intentionally public only where centralized constants expose them. | Public email address and city/country. |
| No backend/user-input surface | Phase 1 introduces no backend, database, auth, user-generated content, or form submission. | None in Phase 1. |

---

## Threat Register

| Threat ID | Category | Component | Disposition | Mitigation | Status |
|-----------|----------|-----------|-------------|------------|--------|
| TM-01 | Information Disclosure | `View Resume` CTA | mitigate | `src/constants/constants.js` centralizes `profile.resumeUrl` as `TODO_PUBLIC_RESUME_URL`; `src/components/Hero/Hero.js` detects TODO URLs and routes the CTA to `#contact` instead of a local file. `rg "/Users/ppjalan/Downloads/PRAKHAR.pdf" src` returned no matches. | closed |
| TM-02 | Spoofing / Tampering | External links | mitigate | Header, footer, and resume-ready hero links use `target="_blank"` only with `rel="noopener noreferrer"`. Profile link destinations are centralized in `profileLinks`. | closed |
| TM-03 | Information Disclosure | Contact/footer shell | accept with control | Public email/location/profile data is centralized in `src/constants/constants.js` and reused by header/footer/contact shell. No `tel:` links or phone numbers are exposed in active Phase 1 source. | closed |
| TM-04 | Denial of Service | Visual effects | mitigate | Active hero/status cues are CSS-only styled-components. The only active animation is a small pulse keyframe, and global CSS includes a `prefers-reduced-motion: reduce` rule. The old SVG background component remains in the repo but is not imported by `src/pages/index.js`. | closed |

*Status: open · closed*
*Disposition: mitigate (implementation required) · accept (documented risk) · transfer (third-party)*

---

## Accepted Risks Log

| Risk ID | Threat Ref | Rationale | Accepted By | Date |
|---------|------------|-----------|-------------|------|
| AR-01 | TM-03 | The portfolio intentionally publishes email, city/country, GitHub, and LinkedIn so recruiters and AI/platform teams can contact Prakhar. Exposure is controlled by centralized constants and excludes phone/private local paths. | Phase 1 plan | 2026-05-28 |

---

## Evidence

| Check | Result |
|-------|--------|
| `rg "/Users/ppjalan/Downloads/PRAKHAR.pdf" src` | No matches. |
| `rg "resumeUrl|TODO_PUBLIC_RESUME_URL|isPublicResume" src/constants/constants.js src/components/Hero/Hero.js` | Resume URL is centralized and TODO-aware. |
| `rg "target=|rel=|noopener noreferrer|aria-label" src/components/Header/Header.js src/components/Footer/Footer.js src/constants/constants.js` | External profile links use safe attributes and icon links have accessible labels. |
| `rg "phone|tel:" src/constants/constants.js src/components/Header/Header.js src/components/Footer/Footer.js src/pages/index.js` | No phone or `tel:` exposure in active shell files. |
| `rg "prefers-reduced-motion|keyframes|animation|canvas|requestAnimationFrame|setInterval" src/styles/globals.js src/components/Hero/HeroStyles.js src/pages/index.js src/components src/styles` | Active animation is CSS-only and covered by reduced-motion global handling; no active canvas or timer-driven animation was introduced. |

---

## Security Audit Trail

| Audit Date | Threats Total | Closed | Open | Run By |
|------------|---------------|--------|------|--------|
| 2026-05-28 | 4 | 4 | 0 | inline Codex security audit |

---

## Sign-Off

- [x] All threats have a disposition (mitigate / accept / transfer)
- [x] Accepted risks documented in Accepted Risks Log
- [x] `threats_open: 0` confirmed
- [x] `status: verified` set in frontmatter

**Approval:** verified 2026-05-28
