Use a catastrophe case file as the organizing idea: a human decision first, the evidence second, the system last. Lead with ArkLink, a short account of the stakes, and a direct App Store download. Write in the second person. Describe only released features; identify the operating window as an action budget, not a reading timer.

## Visual Foundations

Use `bg` for the main canvas, `surface` for alternating full-width sections and `text` for headings. Set supporting copy in `muted`; do not reduce its opacity. Keep `primary` for the download action, short terminal labels and active navigation. Its filled buttons must use `on-primary` text. Use `risk` sparingly for meaningful case numbers. Status always includes words, not colour alone.

Use the `sans` family for display and body, and `mono` for case identifiers and short metadata. Use `display` only for the ArkLink hero heading. Use `heading` for sections, `subheading` for individual ideas, and `body` for long reading. All letter spacing is zero. Mobile overrides are discrete breakpoints, not viewport-scaled text.

Use `space-10` between full-width sections, `space-3` for mobile insets and grid gaps, and `space-2` within related text. Buttons use `radius-sm`; screenshots and the original app mark may use `radius-md`. Do not put section cards inside other cards. Secondary controls use `control-border`; `border` is only a decorative separator. Focus rings use `primary-soft` on dark surfaces. All copy and buttons must satisfy WCAG AA contrast.

## Imagery And Identity

Use the original `images/app-icon.png` mark without redrawing it. Use Carter Li's existing `images/hero.jpg` artwork as a full-bleed cinematic background, with enough dark scrim for legible overlaid text and the face visible. The art is a fictional scene; label actual App Store screenshots separately. Never invent review scores, sales figures, awards or endorsements. Store screenshot sources are documented in `images/README.md`.

## Components

This static site has no JavaScript component library or global bundle. Its component families are semantic HTML with CSS: Brand, Action, SectionHeading, CaseReadout, ScreenshotFigure and Disclosure. Use native anchors for navigation and commands that open a URL; use native details/summary for FAQ. Keep all touch targets at least 44px high. Refer to the component guides for markup and states.

## Iconography

Use the supplied App Store icon for the existing download link and Lucide-compatible external arrow symbols only when needed; prefer text navigation to unexplained symbols. Do not use emoji as controls. Screenshot figures link directly to the full-size image and name the action in their accessible label.

## Consuming This System

`tokens.json` is the single source for website CSS variables. `scripts/generate-site.cjs` compiles those values into `style/tokens.css`; load it before `style/base.css`. System fonts intentionally avoid downloads. The design canvas installs a copy of `tokens.json`; its media slots are labelled placeholders because native asset import is unavailable in this session. Website production pages use the real local images.

Not synced: no runtime component bundle or font files exist in the source. The original translucent green surfaces and shadows are intentionally replaced by the documented neutral band layout rather than preserved as active tokens. Dedicated design-system card validation and asset import are unavailable; local structure, contrast and browser validation cover the delivered files.
