# Artifact-first portfolio preview — 15 October 2026

Repository: `meobrien22/Peerless_Portfolio_Meghan`.
Base: `d28ef60d2e2f5c4f0a4f10dbc584a543405864b1`.
Review branch: `preview/artifact-first-portfolio`.

## Changes

- Preserved the exact existing hero headline, both paragraphs, service bullets, portrait, caption and callouts. No proposed headline replacement is applied.
- Reorganized the opening around the same portrait and actual slide previews. The first project image moves from 2,155px to 575px at a 1440px viewport; it is visible at 643px on a 390px phone viewport.
- Added Work navigation and a six-project grid. Each card identifies the business question, actual role and supported output, with separate case-study and slide/prototype/workshop destinations.
- Kept all original lower-page content, navy/gold branding, contact/résumé actions, attribution and confidentiality/concept labels. The $12B+ figure remains contract wins supported through proposal and storytelling work.
- Added two thumbnail captures from existing public reconstructed artifacts: the launch workspace and workshop decision map. No new client work or confidential material was introduced.
- Improved homepage keyboard skip-link focus.

## Verification

- `npm run build`: production compile, TypeScript and all 12 static pages passed.
- `PAGES_BASE_PATH=/Peerless_Portfolio_Meghan node scripts/prepare-pages.mjs`: prepared and tested the exact deployed subpath.
- Local Edge/Playwright checks at 1440, 768, 390 and 320 CSS pixels, plus 720px reflow: no whole-page horizontal overflow or broken images.
- Six case studies and two interactive destinations returned 200; relevant fragment targets exist.
- 103 internal anchors across exported pages, 24 distinct destinations: no missing local targets.
- All 128 catalog slide images returned 200. All four slide viewers opened, advanced and remained paused.
- Contact and résumé dialogs opened; existing email and LinkedIn destinations unchanged.
- Keyboard skip-link focus, visible outline, Escape close, focus return, Work/About anchors and mobile dialog fit checked. Reduced-motion preference exercised.
- Hero text segments compared to the original source; portrait file unchanged.
- No page JavaScript errors or failed local resource requests during verification.

Limits: checked in Edge Chromium, not Safari or a screen reader. The 720px check verifies reflow equivalent to a 1440px viewport at 200% zoom, rather than native browser zoom controls.

One incremental build encountered a transient Windows EPERM creating a generated `.next` directory. The same directory was writable on immediate recheck; subsequent complete builds passed without source, permission or security-setting changes.

## Publish only after approval

The existing `.github/workflows/pages.yml` publishes the prebuilt `site/` plus `public/` whenever `main` receives a push. Source-only changes are insufficient.

1. Review the local preview and approve it, including any later headline change separately.
2. Push `preview/artifact-first-portfolio` to the same origin repository and create a PR targeting `main`.
3. Merge the reviewed branch, including the source, assets and rebuilt `site/`. **The merge into main triggers publication.**
4. Confirm the `Publish portfolio` workflow succeeds and recheck the existing live URL.

No remote branch, pull request or deployment was created during this preview task. No Pages settings or workflow permissions were changed.
