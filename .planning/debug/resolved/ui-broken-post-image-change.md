---
status: resolved
trigger: "ui is broken right now.. post my image change"
created: 2026-05-29T00:00:00+05:30
updated: 2026-05-29T03:52:53+05:30
---

# Debug Session: UI Broken Post Image Change

## Symptoms

- expected_behavior: Replacing `public/images/profile.jpeg` should not distort, stretch, or over-expand the homepage hero layout.
- actual_behavior: User reports the UI is broken after changing the profile image.
- error_messages: None reported.
- timeline: Started after replacing `public/images/profile.jpeg`.
- reproduction: Load the homepage with the new profile image.

## Current Focus

- hypothesis: The new portrait image is taller than the previous image and is escaping the intended hero frame because `PhotoFrame` uses `min-height` without a definite height.
- test: Compare image dimensions and inspect hero image/frame CSS.
- expecting: If true, the current image has a taller aspect ratio and the hero frame/image CSS allows intrinsic image height to affect layout.
- next_action: Resolved; hero frame now has stable responsive dimensions and the image is constrained with absolute positioning/object-fit.

## Evidence

- timestamp: 2026-05-29T00:00:00+05:30
  observation: `public/images/profile.jpeg` is modified in git status.
- timestamp: 2026-05-29T00:00:00+05:30
  observation: New image dimensions are 654x1280; previous committed image dimensions were 668x1002.
- timestamp: 2026-05-29T00:00:00+05:30
  observation: `PhotoFrame` uses `min-height: 520px` and the child `ProfileImage` uses `height: 100%; min-height: inherit;`, leaving the replaced image able to drive layout height when percentage height resolves against an indefinite parent.

## Eliminated

- hypothesis: A source compile error is the primary break.
  reason: No source file is dirty besides the image at session start; build verification still needs to be rerun after the CSS fix.

## Resolution

- root_cause: The new profile image is a much taller portrait (654x1280 vs the previous 668x1002), and the hero frame used `min-height` with an image child that could still contribute intrinsic height. That let the profile image expand the hero visual grid after replacement.
- fix: Changed `PhotoFrame` in `src/components/Hero/HeroStyles.js` from `min-height` to a definite responsive `height: clamp(...)` with `aspect-ratio: 3 / 4`, and changed `ProfileImage` to `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;`.
- verification: `NODE_OPTIONS=--openssl-legacy-provider npm run build` passed; `curl -I http://127.0.0.1:3000` returned `HTTP/1.1 200 OK`; generated SSR CSS includes the new frame/image constraints.
- files_changed:
  - `src/components/Hero/HeroStyles.js`
  - `.planning/debug/ui-broken-post-image-change.md`
