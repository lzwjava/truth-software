# 求真软件（Truth Software）— Portfolio Website

A simple, dependency-free software consulting portfolio site. Single static page,
no build step, ready to host on GitHub Pages or any static host.

The page ships in Chinese and supports a full English version via the language
toggle in the navigation (`i18n.js` holds the English strings).

Content (services, case studies, team, engagement model) is adapted from the
case book *平方根科技案例集 (2018.10)*, which documents 24 delivered consulting
projects across WeChat Mini Programs, iOS/Android apps, Web platforms, and H5
campaigns, plus the company profile (~15-person team, 40+ historical projects).

The site also presents the modern side of the company:

- **AI Transformation Consultancy** (`#ai-transform`) — a business-first service: audit the current business (processes, data, systems, pain points), map where AI delivers real ROI, and deliver a phased adoption roadmap with cost/ROI modeling, team enablement, and governance — typically handing a current-state analysis to the client within 1–2 weeks, before any development.
- **About / philosophy** (`#about`) — the Truth Software manifesto distilled
  into six principles: think clearly first, build for real users, respect what
  already exists, think in years, treat customers as collaborators, and make
  transparency part of the product.
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
index.html         # landing page: services, AI team, tech stack, works, contact
portfolio.html     # portfolio gallery: every image-backed case, filterable
cases/             # one sub-page per case, with a full screenshot gallery
images/<case>/     # optimized screenshots (cover.jpg + img-NN.jpg per case)
style.css          # all styles, mobile-first, no framework
i18n.js            # zh/en dictionary + language toggle (all pages)
scripts/build_cases.py  # regenerates cases/*.html and portfolio.html from the CASES table
.nojekyll          # serve raw files on GitHub Pages
```

Case screenshots were exported from `/Users/lzwjava/Nutstore Files/平方根公司介绍文档`
(folders `图/`, `Serveral Project Designs/`, plus the case banners) and resized/compressed
into `images/`. The case copy is adapted from the `.sketch` case book
(*平方根项目介绍-1014更新.sketch*) and `平方根科技案例集-最新.pdf`.

To regenerate the generated pages after editing the `CASES` table:

```bash
python3 scripts/build_cases.py
```

The generated pages are committed so the site still has zero runtime build steps.

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
