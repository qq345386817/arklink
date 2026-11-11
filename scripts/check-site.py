#!/usr/bin/env python3
"""Validate the static site's navigation, SEO contracts and design tokens."""
import json
import re
from datetime import date
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
DOMAIN = "https://arklink.luopeike.com"


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

    def select(self, tag, **attrs):
        return [a for t, a in self.tags if t == tag and all(a.get(k) == v for k, v in attrs.items())]


def target_for(route):
    relative = unquote(route).lstrip("/")
    candidates = [ROOT / relative, ROOT / (relative + ".html"), ROOT / relative / "index.html"]
    return next((p for p in candidates if p.is_file() and p.resolve().is_relative_to(ROOT)), None)


urls = (ROOT / "sitemap.txt").read_text().splitlines()
assert len(urls) == len(set(urls)) == 12, "Expected 12 unique canonical URLs"
xml = ET.parse(ROOT / "sitemap.xml")
assert [n.text for n in xml.findall(".//{*}loc")] == urls, "Sitemap formats disagree"
modified = {n.find("{*}loc").text: n.find("{*}lastmod").text for n in xml.getroot()}
assert all(date.fromisoformat(value) for value in modified.values()), "Invalid sitemap dates"
stale = re.compile(r"研发中|开发中|新版本预告|\bupcoming\b|\bin development\b|\b1\.1\.0\b", re.I)
app_id = DOMAIN + "/#app"
store = "https://apps.apple.com/app/id6773223162"
app_versions = set()

for url in urls:
    file = target_for(urlparse(url).path)
    assert file, f"Missing canonical page: {url}"
    text = file.read_text()
    page = Page(text)
    assert len(page.select("h1")) == 1, f"One H1 required: {file}"
    assert page.select("link", rel="canonical") == [{"rel": "canonical", "href": url}], f"Incorrect canonical: {file}"
    assert not any("noindex" in a.get("content", "") for a in page.select("meta", name="robots")), f"Noindex canonical: {file}"
    alternates = {a.get("hreflang") for a in page.select("link", rel="alternate")}
    assert {"en", "zh-Hans", "x-default"} <= alternates, f"Missing language alternatives: {file}"
    route = urlparse(url).path
    english_route = route.removeprefix("/zh-Hans") or "/"
    expected_alternates = {"en": DOMAIN + english_route, "zh-Hans": DOMAIN + "/zh-Hans" + english_route,
                           "x-default": DOMAIN + english_route}
    actual_alternates = {a["hreflang"]: a["href"] for a in page.select("link", rel="alternate") if "hreflang" in a}
    assert actual_alternates == expected_alternates, f"Incorrect hreflang targets: {file}"
    title = unescape(re.search(r"<title>(.*?)</title>", text).group(1))
    assert 15 <= len(title) <= 80, f"Invalid page title: {file}"
    description = page.select("meta", name="description")
    assert len(description) == 1 and 40 <= len(description[0]["content"]) <= 170, f"Invalid description: {file}"
    for attribute, key in (("property", "og:description"), ("name", "twitter:description")):
        assert page.select("meta", **{attribute: key})[0]["content"] == description[0]["content"], f"Social description drift: {file}"
    assert page.select("meta", property="og:title")[0]["content"] == title
    assert page.select("meta", name="twitter:title")[0]["content"] == title
    assert page.select("meta", property="og:url")[0]["content"] == url, f"Social URL drift: {file}"
    assert page.select("meta", property="og:locale:alternate"), f"Missing social alternate locale: {file}"
    assert not stale.search(text), f"Stale development status: {file}"
    ids = [a["id"] for _, a in page.tags if "id" in a]
    assert len(ids) == len(set(ids)), f"Duplicate IDs: {file}"
    for tag, attrs in page.tags:
        if tag == "img":
            assert "alt" in attrs and "width" in attrs and "height" in attrs, f"Image metadata missing: {file}"
        for attr in ("href", "src"):
            link = attrs.get(attr, "")
            parsed = urlparse(link)
            if parsed.scheme or not link:
                continue
            if parsed.path:
                route = parsed.path if parsed.path.startswith("/") else str(file.relative_to(ROOT).parent / parsed.path)
                target = target_for(route)
                assert target, f"Broken asset/link {link}: {file}"
                if parsed.fragment and target.suffix == ".html":
                    target_ids = [a.get("id") for _, a in Page(target.read_text()).tags]
                    assert parsed.fragment in target_ids, f"Missing linked anchor {link}: {file}"
            elif parsed.fragment:
                assert parsed.fragment in ids, f"Missing local anchor {link}: {file}"
    schema = re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, re.S)
    assert schema, f"Missing JSON-LD: {file}"
    for value in schema:
        graph = json.loads(value)["@graph"]
        assert not any("aggregateRating" in item or "review" in item for item in graph), f"Unsupported review markup: {file}"
        app = next(item for item in graph if item["@id"] == app_id)
        web_page = next(item for item in graph if item["@type"] == "WebPage")
        assert app["name"] == "ArkLink: Global Extremes" and app["alternateName"] == "ArkLink: 全球极端灾变"
        assert app["downloadUrl"] == app["installUrl"] == store
        assert app["operatingSystem"] == "iOS, iPadOS" and app["inLanguage"] == ["en", "zh-Hans"]
        assert app["isAccessibleForFree"] is True and len(app["featureList"]) == 3
        app_versions.add(app["softwareVersion"])
        assert web_page["url"] == url and web_page["dateModified"] == modified[url], f"Page/sitemap drift: {file}"
        assert web_page["description"] == description[0]["content"] and web_page["about"] == {"@id": app_id}
        if file.name == "index.html":
            assert web_page["mainEntity"] == {"@id": app_id}
            assert all(f"<h3>{feature}</h3>" in text for feature in app["featureList"]), f"Invisible feature markup: {file}"
            assert f"<dd>{app['softwareVersion']}</dd>" in text, f"Invisible release version: {file}"
            assert page.select("meta", name="apple-itunes-app") == [{"name": "apple-itunes-app", "content": "app-id=6773223162"}]
    markdown = file.with_suffix(".md").read_text()
    assert not stale.search(markdown), f"Stale Markdown: {file}"
    assert f"Canonical: {url}" in markdown, f"Missing Markdown canonical: {file}"
    if file.name == "faq.html":
        for answer in re.findall(r'<div><p>(.*?)</p></div>', text):
            assert answer in markdown, f"FAQ/Markdown content drift: {file}"
    print("PASS", urlparse(url).path)

assert len(app_versions) == 1, "Release version differs between pages"
guide = (ROOT / "llms.txt").read_text()
assert not stale.search(guide), "Stale agent guide"
assert next(iter(app_versions)) in guide and "90-second action budget" in guide
assert "not a real-time reading countdown" in guide and "Cloud sync and cross-device transfer are not promised" in guide
for link in re.findall(r"\]\((https://[^)]+)\)", guide):
    if link.startswith(DOMAIN + "/"):
        assert target_for(urlparse(link).path), f"Broken agent guide link: {link}"

not_found = Page((ROOT / "404.html").read_text())
assert any("noindex" in a.get("content", "") for a in not_found.select("meta", name="robots")), "404 must be noindex"
for css in ("/style/tokens.css", "/style/base.css"):
    assert any(a.get("href", "").startswith(css) for a in not_found.select("link")), f"404 missing {css}"

tokens = json.loads((ROOT / "design-system/tokens.json").read_text())
all_tokens = [t for family in ("color", "spacing", "radius") for t in tokens[family]["tokens"]]
names = [t["name"] for t in all_tokens]
assert len(names) == len(set(names)), "Duplicate token names"
assert all(t["usage"] and re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9_.-]{0,63}", t["name"]) for t in all_tokens)
css = (ROOT / "style/tokens.css").read_text()
for token in all_tokens:
    assert f'--{token["name"]}: {token["value"]};' in css, f"CSS/token drift: {token['name']}"
declared = set(re.findall(r"--([\w-]+)\s*:", css))
used = set(re.findall(r"var\(--([\w-]+)\)", (ROOT / "style/base.css").read_text()))
assert used <= declared, f"Undefined CSS variables: {used - declared}"
colours = {t["name"]: t["value"] for t in tokens["color"]["tokens"]}


def luminance(value):
    rgb = [int(value[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    linear = [v / 12.92 if v <= .04045 else ((v + .055) / 1.055) ** 2.4 for v in rgb]
    return sum(v * w for v, w in zip(linear, (.2126, .7152, .0722)))


for front, back, minimum in [
    ("text", "bg", 4.5), ("text", "surface", 4.5), ("text", "surface-strong", 4.5),
    ("muted", "bg", 4.5), ("muted", "surface", 4.5), ("primary-soft", "surface", 4.5),
    ("risk", "surface", 4.5), ("on-primary", "primary", 4.5),
    ("on-paper", "paper", 4.5), ("muted-on-paper", "paper", 4.5),
    ("control-border", "surface", 3), ("primary-soft", "surface-strong", 3),
]:
    a, b = sorted((luminance(colours[front]), luminance(colours[back])))
    ratio = (b + .05) / (a + .05)
    assert ratio >= minimum, f"Contrast failure: {front}/{back} = {ratio:.2f}"

assert json.loads((ROOT / "design-system/design-system.json").read_text())["createdOnFiles"]["v"] == 1
for folder in (ROOT / "design-system/components").iterdir():
    assert (folder / "preview.html").is_file(), f"Missing component preview: {folder}"
    if folder.name != "Cover":
        assert (folder / "README.md").is_file(), f"Missing component guide: {folder}"
print("PASS SEO, local links, anchors, image metadata, JSON-LD, 404 styles, design-system structure and WCAG AA token contrast")
