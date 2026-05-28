---
quick_id: 260529-5yo
slug: set-view-resume-cta-to-open-the-provided
status: complete
completed: 2026-05-28T22:48:49Z
commit: 88efdba
---

# Quick Task 260529-5yo Summary

**Wired the hero `View Resume` CTA to the provided Google Drive resume link.**

## Changes

- Replaced `profile.resumeUrl` in `src/constants/constants.js` with the provided Google Drive URL.
- Preserved the existing hero CTA behavior in `src/components/Hero/Hero.js`, which opens public resume URLs in a separate tab with `target="_blank"` and `rel="noopener noreferrer"`.

## Files Changed

- `src/constants/constants.js`

## Verification

- `rg "https://drive.google.com/file/d/1OJEBwtEi2GmPiqtw2Y-9HJsaa6Z0vk9O/view\\?usp=drivesdk" src/constants/constants.js` returned the configured URL.
- `rg "TODO_PUBLIC_RESUME_URL" src/constants/constants.js` returned no matches.
- `rg "target=\\{isPublicResume \\? '_blank' : undefined\\}|rel=\\{isPublicResume \\? 'noopener noreferrer' : undefined\\}" src/components/Hero/Hero.js` confirmed safe new-tab behavior remains.
- `NODE_OPTIONS=--openssl-legacy-provider npm run build` exited 0.

## Notes

- Build warnings were limited to existing Browserslist data and Google Fonts optimization under restricted network access.
