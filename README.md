# ArkLink Website

Static website for `https://arklink.luopeike.com`.

The source of truth is `scripts/generate-site.cjs`, committed in this standalone repository.
Run `node scripts/generate-site.cjs` to rebuild, or pass an output directory for validation.
The parent game's legacy generator delegates to this script.

Pages:

- `index.html`
- `help.html`
- `support.html`
- `privacy-policy.html`
- `gameplay.html` (upcoming-feature preview)
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
signal. Do not add invented ratings, worldwide pricing or unreleased features as
current features to structured data or summaries.

The T-402 gameplay upgrade is explicitly marked as in development. Change this
status only after the matching app build is publicly available. Current regional
pricing belongs to the App Store listing. `updated` in the generator is the actual
content-modification date, not the regeneration date.

Public support links use Cloudflare's `email_off` markers so email obfuscation does
not introduce `/cdn-cgi/l/email-protection` links for search engines. `/cdn-cgi/` is
not site content and is excluded in robots.txt; its historical 404 is not a missing
game page. Normal HTML-to-clean redirects and referral-query canonical exclusions
are also expected, not URLs that all need to be indexed.

`sitemap.txt` is a plain-text fallback generated from the exact same canonical URL
set as `sitemap.xml`. It can be submitted in Search Console when diagnosing XML
sitemap processing; it is not a separate content index.
