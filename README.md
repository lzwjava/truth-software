# 智维软件 — Portfolio Website

A simple, dependency-free software consulting portfolio site. Single static page,
no build step, ready to host on GitHub Pages or any static host.

The page ships in Chinese and supports a full English version via the language
toggle in the navigation (`i18n.js` holds the English strings).

Content (services, case studies, team, engagement model) is adapted from the
case book *平方根科技案例集 (2018.10)*, which documents 24 delivered consulting
projects across WeChat Mini Programs, iOS/Android apps, Web platforms, and H5
campaigns, plus the company profile (~15-person team, 40+ historical projects).

The site also presents the modern side of the company:

- **AI-native team** (dark band section `#ai`) — 1B+ tokens consumed per day,
  20+ custom agents, 400+ reusable automation scripts, 1,800+ knowledge-base
  docs, plus the AI tools and models used daily (Claude Code, Copilot,
  OpenRouter, vLLM, llama.cpp, ...).
- **Tech stack** (`#stack`) — grouped chips covering back-end, front-end,
  mobile, databases, messaging/big data, AI/LLM, cloud & DevOps, testing, and
  ops/monitoring, built from familiar open-source technologies.
- **Financial & banking experience** (`#finance`) — high-level, privacy-safe
  cards for DBS and HSBC (no project names, screenshots, or internal data).

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

- [x] Real contact details in `index.html` (`#contact`): `lzwjava@gmail.com`,
      `+86 132 6163 0925` (phone / WeChat / WhatsApp), GitHub `@lzwjava`.
- [ ] Review client/partner names for publication consent.
