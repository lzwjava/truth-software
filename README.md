# Zhiwei Software — Portfolio Website

A simple, dependency-free software consulting portfolio site. Single static page,
no build step, ready to host on GitHub Pages or any static host.

Content (services, case studies, team, engagement model) is adapted from the
case book *平方根科技案例集 (2018.10)*, which documents 24 delivered consulting
projects across WeChat Mini Programs, iOS/Android apps, Web platforms, and H5
campaigns, plus the company profile (~15-person team, 40+ historical projects).

## Structure

```
index.html   # entire site: markup + small inline script (filter, year)
style.css    # all styles, mobile-first, no framework
.nojekyll    # serve raw files on GitHub Pages
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push to `main` on `github.com/lzwjava/zhiwei-software`.
2. Repo → Settings → Pages → Source: `Deploy from a branch` → `main` / root.
3. The site appears at `https://lzwjava.github.io/zhiwei-software/`.

## Before launch

- [ ] Replace the placeholder contact email `contact@zhiwei.software` in
      `index.html` (`#contact` section) with the real consulting email.
- [ ] Review client/partner names and reference prices for publication consent.
