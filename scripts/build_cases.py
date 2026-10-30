#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates the static case-study sub pages (cases/<slug>.html) and the
portfolio gallery page (portfolio.html) from the CASES table below.

Usage:  python3 scripts/build_cases.py
Output: cases/*.html, portfolio.html  (checked in; no runtime build step)
"""
import os

# ---------------------------------------------------------------------------
# Case data — one entry per project that has real screenshots.
# role/timeline/client strings are Chinese and translated by i18n.js on the page.
# ---------------------------------------------------------------------------
CASES = [
    dict(
        slug="burning-brain",
        name="燃烧吧大脑",
        platform="miniapp",
        tags=["小程序"],
        role="设计、开发",
        timeline="3 周",
        client="江苏卫视《最强大脑》",
        sub="小程序 · 《最强大脑》官方互动",
        desc="江苏卫视《最强大脑 · 燃烧吧大脑》官方微信小程序：能力测评、竞技答题与世界排行榜，配合节目播出实现观众同步挑战互动。",
        desc_en="Official WeChat mini-program for Jiangsu TV's Super Brain: Burning Brain \u2014 capability tests, competitive quizzes, and a global leaderboard that lets viewers challenge along with the show.",
        cover="最强大脑官方小程序",
        count=4,
    ),
    dict(
        slug="home-net",
        name="HomeNet",
        platform="app",
        tags=["App"],
        role="设计、开发",
        timeline="3 个月",
        client=None,
        sub="电商平台 · 拼单 / 砍价 / 抽奖 / 挖矿",
        desc="电商 App，含拼单、砍价、签到、抽奖、挖矿等营销玩法，覆盖 iOS / Android 双端。"
             "包含完整的高保真设计稿与首页、发现、购物、我的等核心界面。",
        desc_en="An e-commerce app with group-buying, price-cut, check-in, lottery and mining game "
                "mechanics, covering both iOS and Android — full hi-fi screens and core screens.",
        cover="拼单 · 砍价 · 挖矿",
        count=16,
    ),
    dict(
        slug="lawshare",
        name="律享",
        platform="app",
        tags=["App"],
        role="设计、开发",
        timeline="2.5 个月",
        client=None,
        sub="律师接单平台",
        desc="快速找律师、律师快速接单的撮合平台，含律师/用户端页面、认证流程与订单争议流程设计。",
        desc_en="A lawyer-matchmaking platform: find a lawyer fast, lawyers take cases fast — "
                "covering user & lawyer screens, verification, and order-dispute flows.",
        cover="律师接单",
        count=7,
    ),
    dict(
        slug="fenbi-word-master",
        name="粉笔万词王",
        platform="miniapp",
        tags=["小程序"],
        role="开发",
        timeline="1 个月",
        client="北京粉笔蓝天科技有限公司",
        sub="小程序 · 背单词利器",
        desc="背单词小程序：四级 / 六级 / 考研词库，支持制定学习计划、选择词表、学习模式、"
             "挑战模式与学习达成分享。",
        desc_en="A vocabulary mini-program with CET-4 / CET-6 / postgraduate word lists, learning "
                "plans, word-list selection, study modes, challenge mode and share-able progress.",
        cover="背单词利器",
        count=7,
    ),
    dict(
        slug="room-finder",
        name="寻厢记",
        platform="miniapp",
        tags=["小程序"],
        role="开发",
        timeline="1.5 个月",
        client="三耶（北京）科技有限公司",
        sub="小程序 · 餐厅包厢预订",
        desc="餐厅预订小程序：分类筛选、包厢详情、提交订单、订单列表与订单状态跟踪，信息齐全。",
        desc_en="A restaurant & private-room booking mini-program: category filtering, room detail, "
                "order submission, order list and status tracking.",
        cover="餐厅包厢预订",
        count=6,
    ),
    dict(
        slug="jimiao-community",
        name="几秒社区",
        platform="miniapp",
        tags=["小程序"],
        role="设计、开发",
        timeline="1.5 个月",
        client="北京大叶互生文化传媒有限责任公司",
        sub="小程序 · 运动内容社区",
        desc="分享与运动有关的一切的内容社区：主页动态、专辑、标签、VOTE 投票、精选活动与个人中心。"
             "另含「几秒运动」主题活动页。",
        desc_en="A sports-content community sharing everything about exercise: home feed, albums, "
                "tags, VOTE polls, featured events and profiles — plus the JiMiao Sports campaign page.",
        cover="运动内容社区",
        count=10,
    ),
    dict(
        slug="togo-career",
        name="TogoCareer 拼课+",
        platform="miniapp",
        tags=["小程序"],
        role="设计、开发",
        timeline="0.5 个月",
        client="北京旷智信息科技有限公司",
        sub="小程序 · 课程拼团裂变",
        desc="邀请好友成团、0 元拼课的课程分销裂变小程序，包含拼团页与分享页。",
        desc_en="A course-distribution referral mini-program: invite friends to form a group and get "
                "classes for free, with group-buying and sharing screens.",
        cover="拼课裂变",
        count=2,
    ),
    dict(
        slug="wowo-renovation",
        name="喔喔选装",
        platform="miniapp",
        tags=["小程序", "Web"],
        role="设计、开发",
        timeline="2 个月",
        client="千汇邦（北京）科技有限公司",
        sub="小程序 + Web · 装修定制服务",
        desc="装修定制平台：找装修与地图模式、装修详情与进度追踪、设计师 / 公司详情、施工工艺、"
             "预约服务、邀请好友红包活动与装修订单管理。",
        desc_en="Custom renovation service: find a contractor (with map mode), renovation details and "
                "progress tracking, designer & company profiles, craftsmanship, appointment booking, "
                "red-packet referrals and order management.",
        cover="装修定制",
        count=13,
    ),
    dict(
        slug="tourism-big-data",
        name="众誉旅游大数据",
        platform="web",
        tags=["Web"],
        role="设计、开发",
        timeline="1 个月",
        client="北京第二外国语学院",
        sub="Web · 全国百万景区大数据",
        desc="汇集全国百万景区数据的旅游大数据平台：目的地搜索、单独目的地页、对比、评论、"
             "数据服务购买与大屏可视化展示。",
        desc_en="A tourism big-data platform aggregating data on a million destinations: search, "
                "destination pages, comparison, reviews, data-service purchases and big-screen display.",
        cover="百万景区大数据",
        count=8,
    ),
    dict(
        slug="biss-mining",
        name="BISS 挖矿神器",
        platform="miniapp",
        tags=["小程序", "H5"],
        role="开发",
        timeline="1 个月",
        client=None,
        sub="小程序 + H5 · 数字资产挖矿",
        desc="数字资产挖矿与交易辅助工具：绑定手机号、激活额度、扫码入群、分享海报获客、"
             "算力排行榜等完整获客链路。",
        desc_en="A digital-asset mining & trading assistant: phone binding, quota activation, QR "
                "group invite, share-poster acquisition, and a mining leaderboard.",
        cover="数字资产挖矿",
        count=9,
    ),
    dict(
        slug="fenbi-game-series",
        name="粉笔网 · 游戏系列",
        platform="web",
        tags=["Web"],
        role="开发",
        timeline="—",
        client="北京粉笔蓝天科技有限公司",
        sub="Web 互动学习游戏 · 3 款",
        desc="为教育科技公司开发的互动学习游戏系列：以「超市」为主题的选购、结算、崩蛋等玩法，"
             "把背单词变成游戏。",
        desc_en="A series of interactive learning games for an ed-tech company — supermarket-themed "
                "shopping, checkout, and egg-breaking mechanics that turn vocabulary learning into play.",
        cover="互动学习游戏",
        count=2,
    ),
    dict(
        slug="fenbi-kids",
        name="粉笔网 Kids 游戏",
        platform="app",
        tags=["App"],
        role="开发",
        timeline="1 个月",
        client="北京粉笔蓝天科技有限公司",
        sub="App · 儿童英语启蒙游戏",
        desc="儿童启蒙英语学习游戏，覆盖 iOS / Android 双端。",
        desc_en="English-learning games for children, built for both iOS and Android.",
        cover="儿童英语启蒙",
        count=0,
    ),
]

PLATFORM_LABEL = {"miniapp": "小程序", "app": "App", "web": "Web", "h5": "H5"}

# ---------------------------------------------------------------------------
# Shared page chrome
# ---------------------------------------------------------------------------

NAV = """  <header class="nav">
    <div class="container nav__inner">
      <a href="{home}" class="nav__brand">
        <span class="nav__logo" aria-hidden="true"></span>
        求真软件
      </a>
      <nav class="nav__links" aria-label="主导航">
        <a href="{home}">首页</a>
        <a href="{portfolio}"{active_portfolio}>案例</a>
        <a href="mailto:lzwjava@gmail.com" class="nav__cta">联系我们</a>
        <button id="themeToggle" class="theme-toggle" type="button" aria-label="切换深色模式">🌙</button>
        <button id="langToggle" class="lang-toggle" type="button">EN</button>
      </nav>
    </div>
  </header>"""

FOOTER = """  <footer class="footer">
    <div class="container footer__inner">
      <p>© 2018–<span id="year">2026</span> 求真软件 · 软件开发与技术咨询</p>
    </div>
  </footer>
  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
  <script src="{theme}"></script>
  <script src="{i18n}"></script>
</body>
</html>"""

TAGS = {"小程序": '<span class="tag tag--miniapp">小程序</span>',
        "App": '<span class="tag tag--app">App</span>',
        "Web": '<span class="tag tag--web">Web</span>',
        "H5": '<span class="tag tag--h5">H5</span>'}


def meta_html(case):
    rows = []
    rows.append(f"<li><b>负责</b>{case['role']}</li>")
    rows.append(f"<li><b>历时</b>{case['timeline']}</li>")
    rows.append(f"<li><b>平台</b>{'、'.join(case['tags'])}</li>")
    if case["client"]:
        rows.append(f"<li><b>合作方</b>{case['client']}</li>")
    return "\n".join(rows)


def gallery_images(case):
    """Return list of (path, figcaption) for the case gallery."""
    out = []
    if case["count"]:
        for i in range(1, case["count"] + 1):
            out.append((f"../images/{case['slug']}/img-{i:02d}.jpg", None))
    else:
        out.append((f"../images/{case['slug']}/cover.jpg", None))
    return out


def case_file(case, prev, nxt, portfolio_relative="../portfolio.html"):
    imgs = gallery_images(case)
    fig = "\n".join(
        f'          <figure class="gallery__item"><img src="{src}" alt="{case["name"]} 截图" loading="lazy"></figure>'
        for src, _ in imgs
    )
    tags = " ".join(TAGS[t] for t in case["tags"])
    switch = ""
    if prev:
        switch += f'<a class="case-switch" href="{prev["slug"]}.html">← {prev["name"]}</a>'
    switch += '<span class="case-switch__spacer"></span>'
    if nxt:
        switch += f'<a class="case-switch case-switch--next" href="{nxt["slug"]}.html">{nxt["name"]} →</a>'

    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{case["name"]} — 求真软件案例</title>
  <meta name="description" content="{case["desc"]}">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%9B%B0%3C/text%3E%3C/svg%3E">
  <script>
    (function () {{
      try {{
        var t = localStorage.getItem('truth-theme');
        var dark = t === 'dark' || (t !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      }} catch (e) {{ document.documentElement.dataset.theme = 'light'; }}
    }})();
  </script>
  <link rel="stylesheet" href="../style.css">
</head>
<body>

{NAV.format(home="../index.html", portfolio=portfolio_relative, active_portfolio="")}

  <main class="case" id="top">
    <div class="container">

      <nav class="crumbs" aria-label="面包屑">
        <a href="../index.html">首页</a><span>/</span><a href="{portfolio_relative}">案例</a><span>/</span><b>{case["name"]}</b>
      </nav>

      <header class="case__head">
        <div class="case__head-left">
          <h1 class="case__title">{case["name"]}</h1>
          <p class="case__sub">{case["sub"]}</p>
          <div class="case__tags">{tags}</div>
          <ul class="work__meta case__meta">
{meta_html(case)}
          </ul>
        </div>
        <p class="case__desc">{case["desc"]}</p>
      </header>

      <section class="case__gallery">
        <h2 class="case__gallery-title">界面预览</h2>
        <div class="gallery">
{fig}
        </div>
      </section>

      <nav class="case__switch" aria-label="上一个 / 下一个案例">
{switch}
      </nav>

    </div>
  </main>

  <span id="i18nTitleEn" hidden>{case["name"]} — Case Study</span>
  <span id="i18nMetaEn" hidden>{case["desc_en"]}</span>

{FOOTER.format(i18n="../i18n.js", theme="../theme.js")}"""


def portfolio_file():
    cards = []
    for case in CASES:
        tags = " ".join(TAGS[t] for t in case["tags"])
        cards.append(f"""          <article class="card pcase" data-platform="{case['platform']}">
            <a class="pcase__thumb" href="cases/{case['slug']}.html">
              <img src="images/{case['slug']}/cover.jpg" alt="{case['name']} 封面" loading="lazy">
              <span class="pcase__cover-label">{case['cover']}</span>
            </a>
            <div class="pcase__body">
              <div class="pcase__head">
                <h3><a href="cases/{case['slug']}.html">{case['name']}</a></h3>
                <div class="pcase__tags">{tags}</div>
              </div>
              <p class="pcase__sub">{case['sub']}</p>
              <ul class="work__meta pcase__meta">
                <li><b>负责</b>{case['role']}</li>
                <li><b>历时</b>{case['timeline']}</li>
              </ul>
              <a class="pcase__link" href="cases/{case['slug']}.html">查看案例 →</a>
            </div>
          </article>""")
    cards_html = "\n".join(cards)

    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>案例作品集 — 求真软件</title>
  <meta name="description" content="求真软件案例作品集：小程序、App、Web 与 H5 项目真实界面截图，含 HomeNet、律享、粉笔万词王、寻厢记、几秒社区、喔喔选装、众誉旅游大数据等交付案例。">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%9B%B0%3C/text%3E%3C/svg%3E">
  <script>
    (function () {{
      try {{
        var t = localStorage.getItem('truth-theme');
        var dark = t === 'dark' || (t !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      }} catch (e) {{ document.documentElement.dataset.theme = 'light'; }}
    }})();
  </script>
  <link rel="stylesheet" href="style.css">
</head>
<body>

{NAV.format(home="index.html", portfolio="portfolio.html", active_portfolio=' class="is-active"')}

  <main id="top">

    <section class="hero hero--portfolio">
      <div class="container">
        <p class="hero__eyebrow">CASE STUDIES · 2018–2020</p>
        <h1 class="hero__title"><span class="grad-text">案例作品集</span></h1>
        <p class="hero__subtitle">每个项目都是真实交付，以下为各项目实际界面截图。 点击任意案例查看完整详情与多张界面预览。</p>
        <p class="section__note">以上案例来自数年前，大部分已征得客户许可后在此展示。如有不妥，请联系我们。</p>
      </div>
    </section>

    <section class="section section--alt" id="portfolio-grid">
      <div class="container">

        <div class="filters" role="group" aria-label="按平台筛选案例">
          <button class="filter is-active" data-filter="all">全部</button>
          <button class="filter" data-filter="miniapp">小程序</button>
          <button class="filter" data-filter="app">App</button>
          <button class="filter" data-filter="web">Web</button>
          <button class="filter" data-filter="h5">H5</button>
        </div>

        <div class="grid grid--3 pgrid">
{cards_html}
        </div>

      </div>
    </section>

  </main>

  <script>
    // Platform filter
    const filters = document.querySelectorAll('.filter');
    const items = document.querySelectorAll('.pcase');
    filters.forEach(btn => {{
      btn.addEventListener('click', () => {{
        filters.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const f = btn.dataset.filter;
        items.forEach(w => {{
          const match = f === 'all' || w.dataset.platform.split(' ').includes(f);
          w.style.display = match ? '' : 'none';
        }});
      }});
    }});
  </script>

  <span id="i18nTitleEn" hidden>Case Studies — Truth Software Portfolio</span>
  <span id="i18nMetaEn" hidden>Truth Software portfolio: real screens from delivered mini-programs, apps, and web platforms \u2014 HomeNet, LawShare, Fenbi Word Master, Room Finder, JiMiao Community, WoWo Renovation, Tourism Big Data, and more.</span>

{FOOTER.format(i18n="i18n.js", theme="theme.js")}"""


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    cases_dir = os.path.join(root, "cases")
    os.makedirs(cases_dir, exist_ok=True)

    for i, case in enumerate(CASES):
        prev = CASES[i - 1] if i > 0 else None
        nxt = CASES[i + 1] if i + 1 < len(CASES) else None
        path = os.path.join(cases_dir, f"{case['slug']}.html")
        with open(path, "w", encoding="utf-8") as f:
            f.write(case_file(case, prev, nxt))
        print("wrote", path)

    path = os.path.join(root, "portfolio.html")
    with open(path, "w", encoding="utf-8") as f:
        f.write(portfolio_file())
    print("wrote", path)


if __name__ == "__main__":
    main()