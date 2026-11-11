# ArkLink Website

Static website for `https://arklink.luopeike.com`.

The source of truth is `scripts/generate-site.cjs`, committed in this standalone repository.
Run `node scripts/generate-site.cjs` to rebuild, or pass an output directory for validation.
The parent game's legacy generator delegates to this script.

The website uses the **ArkLink Field Notes** design system. Read
`design-system/README.md` before changing the design. Its `tokens.json` generates
`style/tokens.css`; edit the tokens, not that generated stylesheet. `style/base.css`
contains responsive layout and component states. There is no client-side framework
or JavaScript dependency for navigation and FAQ disclosures.

Run `python3 scripts/check-site.py` after regenerating to check canonical URLs,
language alternatives, links, anchors, images, JSON-LD, tokens and colour contrast.
Artwork and the App Store screenshot sources are documented in `images/README.md`.

Pages:

- `index.html`
- `help.html`
- `support.html`
- `privacy-policy.html`
- `gameplay.html` (T-402 gameplay guide)
- `faq.html`
- `zh-Hans/index.html`
- `zh-Hans/help.html`
- `zh-Hans/support.html`
- `zh-Hans/privacy-policy.html`
- `zh-Hans/gameplay.html`
- `zh-Hans/faq.html`

The App Store CTA points to app ID `6773223162`.

## SEO and GEO

Cloudflare Pages redirects HTML filenames to clean URLs. Canonical URLs, hreflang,
navigation and sitemap therefore use `/`, `/help`, `/gameplay`, etc. HTML files
remain the deployment artifacts. Real unknown paths return 404 through `404.html`;
do not remove it, because doing so enables Pages' default SPA fallback.

`llms.txt` links to generated Markdown companions. Markdown pages are excluded
from Google indexing using `_headers`, while the corresponding HTML pages remain
indexable. The file is a content guide for supporting agents, not a Google ranking
signal. Do not add invented ratings or unreleased features as
current features to structured data or summaries.

The public US App Store listing was checked on November 11, 2026: version 1.2.0,
free, with iOS / iPadOS 15.1 as the minimum system version. Version 1.2.0 refreshes
the reader, history and chapter navigation. T-402 operating resources, evidence
cross-checks, profile abilities and optional terminal sounds are also included.
Older chapter-one saves retain their original story mode until the chapter is replayed.
Keep release-status statements aligned with the publicly available app. The app is a free
download; keep both language CTAs and product summaries consistent. `updated` is the actual
content-modification date, not the regeneration date.

The November 11 copy update follows `../fastlane/ASO_OPTIMIZATION.md` and the local
App Store descriptions, with feature checks against `../engine/caseOperations.ts`,
`../store/gameStore.ts` and `../App.tsx`. The parent metadata remains local; updating
this website does not upload App Store metadata. Lead with branching visual novel,
choices and climate mystery; distinguish the 90-second **action budget** from
reading time, total playtime and a live countdown. Include side-story archives,
different endings, route records, replay and local saves without inventing counts.
Release choices show resource costs but hide developer score and route previews.

JSON-LD, visible product facts and Markdown companions derive from the same copy.
Keep the curated `releaseVersion` current only after checking the public listing.
No review ratings, aggregate scores, FAQ rich-result promises or SEO growth claims
are fabricated. Google requires no special AI schema or AI text files for AI search
eligibility: https://developers.google.com/search/docs/appearance/ai-features.
`llms.txt` is a convenience index, not a guarantee of citation or indexing.
Existing App Store screenshots remain labelled as listing images rather than
newly captured 1.2.0 interface screenshots; see `images/README.md`.

Public support links use Cloudflare's `email_off` markers so email obfuscation does
not introduce `/cdn-cgi/l/email-protection` links for search engines. `/cdn-cgi/` is
not site content and is excluded in robots.txt; its historical 404 is not a missing
game page. Normal HTML-to-clean redirects and referral-query canonical exclusions
are also expected, not URLs that all need to be indexed.

`sitemap.txt` is a plain-text fallback generated from the exact same canonical URL
set as `sitemap.xml`. It can be submitted in Search Console when diagnosing XML
sitemap processing; it is not a separate content index.
