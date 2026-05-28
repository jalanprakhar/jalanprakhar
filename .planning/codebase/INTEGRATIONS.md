---
last_mapped_commit: fc6c92df2b432b91d1520267e937d0b3ddb40d30
---
# External Integrations

**Analysis Date:** 2026-05-28

## APIs & External Services

**Fonts:**
- Google Fonts - Loads the Space Grotesk font family from `src/pages/_document.js`.
  - SDK/Client: browser `<link>` tag.
  - Auth: none.

**Portfolio Links:**
- GitHub profile and repositories - Social links and project source links appear in `src/components/Header/Header.js`, `src/components/Footer/Footer.js`, and `src/constants/constants.js`.
  - SDK/Client: plain anchor tags.
  - Auth: none.
- LinkedIn profile - Social links appear in `src/components/Header/Header.js` and `src/components/Footer/Footer.js`.
  - SDK/Client: plain anchor tags.
  - Auth: none.
- CodeChef and Codeforces profiles - Competitive programming links appear in `src/components/Header/Header.js` and `src/components/Footer/Footer.js`.
  - SDK/Client: plain anchor tags.
  - Auth: none.
- Google Drive resume link - Resume CTA points to a shared Google Drive document in `src/components/Hero/Hero.js`.
  - SDK/Client: plain anchor tag.
  - Auth: none in application code.

**Hosted Demo Links:**
- Heroku app demo - `https://codevv.herokuapp.com/` is referenced in `src/constants/constants.js`.
- Firebase Hosting demo - `https://dojo-4315d.web.app/` is referenced in `src/constants/constants.js`.
- Netlify demos - `https://quirky-poitras-07cdb2.netlify.app/` and `https://awesome-ptolemy-053acc.netlify.app/` are referenced in `src/constants/constants.js`.
- These are outgoing navigation targets only; the app does not call their APIs.

**README Badges and Dynamic Images:**
- GitHub stats, GitHub streak, top languages, and activity graph images are embedded in `README.md`.
- These integrations affect repository rendering, not the Next.js runtime.

## Data Storage

**Databases:**
- Not detected.
  - Connection: not applicable.
  - Client: not applicable.

**File Storage:**
- Local static assets under `public/images/`.
- Public static assets under `public/favicon.ico` and `public/vercel.svg`.
- External resume file hosted on Google Drive and linked from `src/components/Hero/Hero.js`.

**Caching:**
- Not detected in application code.
- Browser and hosting-layer caching may apply to static assets, but no app-specific cache implementation exists.

## Authentication & Identity

**Auth Provider:**
- Not detected.
  - Implementation: no login, session, cookie, token, or identity provider code is present.

## Monitoring & Observability

**Error Tracking:**
- None detected. There is no Sentry, LogRocket, analytics, or similar client in `package.json` or `src/`.

**Logs:**
- No application logging pattern was detected.
- No `console.*` calls were found in `src/`.

## CI/CD & Deployment

**Hosting:**
- Vercel is implied by `public/vercel.svg` and `.gitignore` excluding `.vercel`, but there is no committed Vercel project configuration.
- Next.js can also be hosted anywhere that supports `next build` and `next start`.

**CI Pipeline:**
- None detected. There is no `.github/workflows/`, CI config, or test/build workflow file in the scanned project files.

## Environment Configuration

**Required env vars:**
- None detected.

**Secrets location:**
- No committed secret files were detected.
- `.gitignore` excludes local env files such as `.env.local`, `.env.development.local`, `.env.test.local`, and `.env.production.local`.

## Webhooks & Callbacks

**Incoming:**
- `src/pages/api/hello.js` exposes the sample Next.js API endpoint at `/api/hello`.
- No webhook-specific endpoints were detected.

**Outgoing:**
- None detected. The app uses outbound links, not programmatic outgoing webhooks or API callbacks.

---

*Integration audit: 2026-05-28*
