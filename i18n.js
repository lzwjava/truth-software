/* ==========================================================================
   智维软件 — bilingual (zh / en) support
   The page ships with Chinese as the source language. English strings live
   in the EN map below, keyed by the exact Chinese text found in index.html.
   Switching languages swaps text nodes and aria-labels in place, and the
   choice is persisted in localStorage.
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY = 'zhiwei-lang';

  // ---- English dictionary: exact Chinese source text -> English ---------- //
  const EN = {
    // Brand — 智维软件 is written as "Zhiwei Software" in English
    "智维软件": "Zhiwei Software",

    // Navigation
    "服务": "Services",
    "案例": "Case Studies",
    "客户": "Clients",
    "团队": "Team",
    "联系我们": "Contact Us",
    "主导航": "Main navigation",

    // Hero
    "软件开发 · 技术咨询 · 产品外包": "Software Development · Technical Consulting · Product Outsourcing",
    "把想法变成": "Turn ideas into",
    "可上线的产品": "shippable products",
    "智维软件是一支 AI 驱动的软件咨询团队，提供从产品设计、开发到上线运营的整体解决方案。": "Zhiwei Software is an AI-driven software consulting team, delivering end-to-end solutions from product design and development to launch and operations.",
    "微信小程序、iOS / Android 应用、Web 平台、H5 营销——都有成熟交付经验。": "WeChat mini-programs, iOS / Android apps, web platforms, and H5 campaigns — all with a proven record of delivery.",
    "获取项目报价": "Get a Project Quote",
    "查看案例 ↓": "View Case Studies ↓",
    "历史交付项目": "Projects Delivered",
    "人专业团队": "professional team members",
    "全平台覆盖 iOS / Android / Web / 小程序": "platforms covered: iOS / Android / Web / Mini Programs",

    // Services
    "我们能做什么": "What We Do",
    "既可以只做开发，也可以设计、开发、上线整体打包。": "Development only if that is what you need — or design, development, and launch bundled into one package.",
    "iOS / Android 应用开发": "iOS / Android App Development",
    "原生移动应用开发，覆盖电商、社区、工具、区块链等类型，最快 1 个月上线。": "Native mobile apps across e-commerce, community, tools, blockchain, and more — live in as little as one month.",
    "微信小程序开发": "WeChat Mini-Program Development",
    "官方节目小程序、拼团裂变、预订、词典工具等丰富小程序经验，两周即可交付。": "Experience with official show mini-programs, group-buying referrals, bookings, and dictionary tools — deliverable in two weeks.",
    "Web 平台与后台系统": "Web Platforms & Admin Systems",
    "数据标注平台、旅游大数据、管理后台、官网与白皮书站点等复杂 Web 系统。": "Complex web systems: data annotation platforms, tourism big data, admin dashboards, corporate sites, and whitepaper portals.",
    "H5 营销与增长活动": "H5 Marketing & Growth Campaigns",
    "裂变海报、趣味互动、礼包兑换等公众号 / 朋友圈刷屏级 H5，快速上线、效果可量化。": "Viral H5 campaigns for WeChat Official Accounts and Moments — referral posters, interactive games, gift redemptions — quick to launch with measurable results.",
    "后端架构与技术咨询": "Backend Architecture & Technical Consulting",
    "高并发直播答题、流媒体、Feed 流等复杂场景的后端架构设计与开发。": "Backend architecture and development for demanding scenarios such as high-concurrency live quizzes, streaming, and feed systems.",
    "产品与界面设计": "Product & Interface Design",
    "交互设计、UI 设计、品牌落地页设计，让产品既好用又好看。": "Interaction design, UI design, and branded landing pages that make products both useful and beautiful.",

    // Featured case studies
    "精选案例": "Featured Case Studies",
    "摘自《平方根科技案例集》—— 每个项目均标注角色与周期。": "Excerpted from the SquareRoot Tech case book — each project lists its role and timeline.",
    "全部": "All",
    "小程序": "Mini Programs",
    "按平台筛选案例": "Filter case studies by platform",
    "负责": "Role",
    "历时": "Timeline",
    "设计、开发": "Design & development",
    "设计、开发、上线": "Design, development & launch",
    "开发": "Development",
    "小程序开发": "Mini-program development",
    "开发、设计": "Development & design",
    "3 周": "3 weeks",
    "2 周": "2 weeks",
    "1 个月": "1 month",
    "2 个月": "2 months",
    "2.5 个月": "2.5 months",
    "1.5 个月": "1.5 months",
    "0.5 个月": "0.5 months",
    "3 个月": "3 months",

    // Case study cards
    "燃烧吧大脑": "Burning Brain",
    "江苏卫视《最强大脑 · 燃烧吧大脑》官方小程序，能力测试与世界榜。": "Official mini-program for Jiangsu TV's Super Brain: Burning Brain — capability tests and a global leaderboard.",
    "趣标注": "FunLabel",
    "人机协同的 AI 数据标注平台，支持检测 / 分类 / 矩形 / 多边形标注与任务众包。": "Human-in-the-loop AI data annotation platform supporting detection / classification / rectangle / polygon labeling and crowdsourced tasks.",
    "拼我 PingWorld": "PingWorld",
    "人才与时间共享平台，集中分发设计、法务、财税、开发等服务需求。": "Talent- and time-sharing platform that centrally distributes design, legal, finance, tax, and development service requests.",
    "电商平台，含拼单、砍价、抽奖、挖矿等营销玩法，iOS / Android 双端。": "E-commerce platform with group buying, price cuts, lotteries, and mining games, on both iOS and Android.",
    "律享": "LawShare",
    "律师接单平台：快速找律师，律师快速接单，含认证与订单争议流程。": "Lawyer marketplace: find a lawyer fast, lawyers take cases fast, with verification and order-dispute flows.",
    "区块链资产管理项目，含钱包、资产明细与游戏化任务体系。": "Blockchain asset management app with a wallet, asset details, and a gamified task system.",
    "小猿题库 · 游戏系列": "Yuantiku · Game Series",
    "为教育科技公司猿题库开发 7 款互动学习游戏，服务千万级用户产品。": "Developed 7 interactive learning games for ed-tech company YuantiKu, serving a product with tens of millions of users.",
    "粉笔万词王": "Fenbi Word Master",
    "背单词利器：四级 / 六级 / 考研词库，打卡学习与 PK 对战。": "Vocabulary booster: CET-4 / CET-6 / postgraduate exam word lists, check-in learning, and PK battles.",
    "汉语大词典": "Chinese Dictionary",
    "汉字、成语多维度查询：按结构、按词性、按首字母检索。": "Multi-dimensional lookup of Chinese characters and idioms — by structure, part of speech, and initial letter.",
    "寻厢记": "Room Finder",
    "餐厅预订小程序，信息齐全，支持包厢预订与订单管理。": "Restaurant booking mini-program with complete information, supporting private-room reservations and order management.",
    "几秒社区": "JiMiao Community",
    "分享与运动有关的一切：动态、话题、点赞评论的运动内容社区。": "A sports content community for sharing everything about exercise — posts, topics, likes, and comments.",
    "TogoCareer 拼课+": "TogoCareer Group Class+",
    "邀请好友成团、0 元拼课的课程分销裂变小程序。": "Course-distribution referral mini-program: invite friends to form a group and get classes for free.",
    "喔喔选装": "WoWo Renovation",
    "装修定制服务：精选商户、进度追踪、装修助手与红包裂变。": "Custom renovation services: curated merchants, progress tracking, a renovation assistant, and red-packet referrals.",
    "众誉旅游大数据": "Zhongyu Tourism Big Data",
    "汇集全国百万景区数据，好评率排名与大数据可视化展示。合作方：北京第二外国语学院。": "Aggregates data on a million attractions nationwide with rating rankings and big-data visualization. Partner: Beijing International Studies University.",
    "区块链教育项目官网与白皮书站点设计开发。": "Design and development of a blockchain education project's official website and whitepaper site.",
    "有趣的区块链互动游戏，全栈 Web 实现。": "A fun blockchain interactive game, built full-stack on the web.",
    "积分兑换平台": "Points Redemption Platform",
    "垂直领域创业公司的积分商城：买入、兑换、退款与订单体系。": "Points mall for a vertical-market startup: purchase, redemption, refunds, and orders.",
    "BISS 挖矿神器": "BISS Mining Tool",
    "数字资产挖矿与交易辅助工具，含邀请挖矿与排行榜。": "Digital-asset mining and trading assistant with referral mining and leaderboards.",
    "粉笔网 Kids 游戏": "Fenbi Kids Games",
    "儿童启蒙学习游戏 2 款，iOS / Android 双端开发。": "Two children's early-learning games, developed for both iOS and Android.",
    "拍照穿越大学 H5": "Time-Travel University H5",
    "上传照片即可\"穿越\"到未来大学的趣味合影 H5。": "Upload a photo and travel to your future university in this playful photo H5.",
    "开学解锁新发型 H5": "New Hairstyle for the New Term H5",
    "新学期新气象：上传照片生成换发型海报，社交分享裂变。": "New semester, new look: upload a photo to generate a hairstyle poster and share it socially.",
    "课程裂变 H5": "Course Referral H5",
    "分享海报邀请家长、成团免费领取课程的裂变增长工具。": "Growth tool: share a poster to invite parents, form a group, and claim a free course.",
    "礼包兑换 H5": "Gift Redemption H5",
    "公众号内输入兑换码领取礼包，含个性化海报生成。": "Enter a redemption code in an Official Account to claim a gift, including personalized poster generation.",

    // Clients
    "合作伙伴": "Partners",
    "从互联网一线教育公司，到创新团队与传统行业客户。": "From leading internet education companies to innovative startups and traditional-industry clients.",
    "猿题库 / 小猿搜题": "Yuantiku / Xiaoyuan Souti",
    "粉笔（蓝天 / 未来科技）": "Fenbi (Lantian / Future Technology)",
    "江苏卫视《最强大脑》": "Jiangsu TV's Super Brain",
    "北京第二外国语学院": "Beijing International Studies University",
    "千汇邦科技": "Qianhuibang Technology",
    "三耶科技": "Sanye Technology",
    "大叶互生传媒": "Daye Husheng Media",
    "热浪风风向科技": "Relang Fengfengxiang Technology",
    "旷智信息科技": "Kuangzhi Information Technology",
    "以及众多创业团队与个人客户": "plus many startup teams and individual clients",

    // Team
    "核心团队": "Core Team",
    "约 15 人的开发团队：前端、后端、iOS、Android、小程序工程师与 UI/UX 设计师。": "A team of about 15: front-end, back-end, iOS, Android, and mini-program engineers plus UI/UX designers.",
    "李智维": "Li Zhiwei",
    "创始人 / CEO": "Founder / CEO",
    "负责技术开发与架构、商务合作与重点项目管理。趣直播创始人，前 LeanCloud 工程师；曾参与星展银行 DBS、汇丰银行金融系统项目，重度 AI 原生实践者，12 年行业经验。": "Leads technical development and architecture, business development, and key project management. Founder of QuZhibo; former LeanCloud engineer; worked on financial systems projects for DBS and HSBC; heavy AI-native practitioner; 12 years of industry experience.",
    "小容": "Xiao Rong",
    "兼职团队": "Part-time Team",
    "来自国内大小厂等资深工程师": "Senior engineers from large & small firms across China",
    "按项目需要弹性加入的外部资深工程师网络：覆盖前后端、客户端、算法与设计，随时为交付团队扩容。": "An elastic network of senior engineers who join per project — covering front-end, back-end, mobile, algorithms and design to scale delivery teams on demand.",
    "前端负责人": "Front-end Lead",
    "负责前端架构与重点项目，服务小猿搜题、BitEDU 等客户，4 年行业经验。": "Leads front-end architecture and key projects for clients such as Xiaoyuan Souti and BitEDU; 4 years of industry experience.",

    // How we work
    "合作方式": "How We Work",
    "需求评估": "Requirement Assessment",
    "时间周期与投入人力根据具体需求工作量确定，先沟通清楚再报价。": "Timeline and staffing are set based on the actual scope of work; we align on the details before quoting.",
    "报价与合同": "Quote & Contract",
    "根据需求单独出具报价，双方确认合作后签署合同协议，流程规范透明。": "A tailored quote is issued for each project; once both sides confirm, we sign a contract — a standard, transparent process.",
    "维护与长期合作": "Maintenance & Long-term Partnership",
    "每次合作预留半个月项目维护期，支持长期合作与持续迭代。": "Every engagement includes a half-month maintenance period, with support for long-term cooperation and continuous iteration.",

    // Contact
    "聊聊你的项目": "Let's Talk About Your Project",
    "无论是一个想法、一份需求文档，还是已有产品需要重构——欢迎联系，我们会在 1 个工作日内回复。": "Whether it is an idea, a requirements document, or an existing product that needs a rebuild — get in touch and we will reply within one business day.",
    "微信与 WhatsApp 使用同一手机号。": "WeChat and WhatsApp use the same phone number.",

    // Footer
    "软件开发与技术咨询": "Software Development & Technical Consulting",

    // Navigation additions
    "AI 团队": "AI Team",
    "技术栈": "Tech Stack",
    "金融": "Finance",

    // Hero additions
    "软件开发 · 技术咨询 · AI 原生 · 产品外包": "Software Development · Technical Consulting · AI-Native · Product Outsourcing",
    "我们更是一支 AI 原生团队：日均消耗超过 10 亿 tokens，把大模型与智能体真正用进研发流程。": "We are also an AI-native team: over 1 billion tokens consumed every day, with LLMs and agents built deep into our engineering process.",
    "智维软件的前身是平方根科技——依托于趣智播知识直播分享社区成长起来的软件咨询公司，活跃于 2018 到 2019 年，于 2026 年重新开始运营。": "Zhiwei Software's predecessor was Square Root Technology — a software consulting company that grew out of the QuZhiBo knowledge live-streaming community, active from 2018 to 2019 and relaunched in 2026.",
    "10 亿+": "1B+",
    "日均 AI tokens 消耗": "AI tokens consumed per day",

    // Services additions
    "AI 应用与智能体开发": "AI Application & Agent Development",
    "对话机器人、RAG 知识库、工作流智能体与自动化脚本，把大模型能力接进你的业务系统。": "Chatbots, RAG knowledge bases, workflow agents, and automation scripts — wiring LLM capability into your business systems.",
    "金融系统开发": "Financial Systems Development",
    "银行交易、支付与账务系统的开发经验，来自星展 DBS、汇丰 HSBC 等金融项目，重视质量、安全与合规。": "Hands-on experience with banking transaction, payment, and accounting systems from DBS, HSBC, and other financial projects — quality, security, and compliance first.",
    "数据平台与可视化": "Data Platforms & Visualization",
    "数据标注平台、旅游大数据、报表与可视化看板等数据类系统建设。": "Data labeling platforms, tourism big data, reporting, and visualization dashboards.",

    // AI-native section
    "AI 原生团队，而不只是「用上 AI」": "An AI-Native Team, Not Just a Team That Uses AI",
    "需求分析、架构设计、编码、测试、文档与发布，全流程由 AI 深度参与。": "Requirement analysis, architecture, coding, testing, documentation, and release — every step is deeply AI-assisted.",
    "创始团队在大型银行项目中沉淀出一套可复用的 AI 工作流，如今应用到每一个交付项目中。": "A reusable AI workflow forged on large-scale banking projects, now applied to every engagement we deliver.",
    "定制 AI 智能体": "custom AI agents",
    "自建 GPU 工作站": "self-built GPU workstation",
    "小型模型训练": "small models trained",
    "AI / Agent 笔记": "AI / Agent notes",
    "可复用自动化脚本": "reusable automation scripts",
    "项目知识文档": "project knowledge docs",
    "大模型应用开发": "LLM Application Development",
    "对话机器人、RAG 知识库、内容生成与多模态应用，对接 OpenAI、Claude、DeepSeek、Gemini 等主流模型与 OpenRouter 聚合。": "Chatbots, RAG knowledge bases, content generation, and multimodal apps connected to OpenAI, Claude, DeepSeek, and Gemini models plus OpenRouter aggregation.",
    "智能体与流程自动化": "Agents & Workflow Automation",
    "编码、测试、文档与运维交给智能体执行：20+ 定制智能体、400+ 可复用脚本，覆盖企业级项目的日常工作流。": "Coding, testing, documentation, and ops run by agents: 20+ custom agents and 400+ reusable scripts covering day-to-day enterprise workflows.",
    "AI 原生工程实践": "AI-Native Engineering Practice",
    "面向 LLM 的扁平架构与上下文工程，代码、测试与文档同步产出；日均 10 亿+ tokens 用在需求到上线的每个环节。": "LLM-friendly flat architecture and context engineering; code, tests, and docs produced together — 1B+ tokens a day spent from requirements to release.",
    "常用 AI 工具与模型": "AI tools and models we use daily",

    // Tech stack section
    "覆盖各类主流、熟悉的开源技术与工具：从移动端、前端与后端，到数据库、大数据、云原生与 AI 工程。": "A broad range of mainstream, familiar open-source technologies and tools — from mobile, front-end, and back-end to databases, big data, cloud-native, and AI engineering.",
    "后端": "Back-end",
    "前端": "Front-end",
    "移动端": "Mobile",
    "数据库与缓存": "Databases & Caching",
    "消息与大数据": "Messaging & Big Data",
    "AI 与大模型": "AI & LLMs",
    "云与 DevOps": "Cloud & DevOps",
    "测试与质量": "Testing & Quality",
    "运维与监控": "Ops & Monitoring",

    // Finance / banking section
    "金融与银行项目经验": "Financial & Banking Project Experience",
    "创始团队曾深度参与星展银行 DBS、汇丰银行 HSBC 的金融系统项目，熟悉银行级的质量、安全与合规要求。": "Our founding team has worked deeply on financial systems projects for DBS and HSBC, and understands bank-grade quality, security, and compliance requirements.",
    "星展银行 DBS（新加坡）": "DBS Bank (Singapore)",
    "参与数字化银行的后端系统建设，涉及交易、账户与理财类产品服务，关注性能、稳定性与数据准确性。": "Back-end systems for digital banking: trading, accounts, and wealth products, with a focus on performance, stability, and data accuracy.",
    "领域": "Domain",
    "交易 / 账户 / 理财": "Trading / Accounts / Wealth",
    "技术": "Tech",
    "Java / Spring Cloud / 微服务": "Java / Spring Cloud / Microservices",
    "汇丰银行 HSBC（香港 / 全球）": "HSBC Bank (Hong Kong / Global)",
    "参与移动支付与企业财务系统的后端建设，覆盖支付、账务处理与财务数据流程，熟悉金融级发布与运维流程。": "Back-end systems for mobile payments and corporate finance: payment, accounting, and financial data flows, with bank-grade release and operations practices.",
    "支付 / 账务 / 财务系统": "Payments / Accounting / Finance Systems",
    "Java / Spring / 云原生": "Java / Spring / Cloud-Native",

    // Portfolio page + case sub-pages
    "首页": "Home",
    "案例作品集": "Portfolio",
    "每个项目都是真实交付，以下为各项目实际界面截图。 点击任意案例查看完整详情与多张界面预览。": "Every project below was truly delivered \u2014 these are the actual screens. Click any case for the full story and multiple screen previews.",
    "平台": "Platform",
    "合作方": "Partner",
    "查看案例 →": "View Case →",
    "查看全部案例作品集 →": "View the full portfolio →",
    "界面预览": "Screens",
    "小程序、Web": "Mini Program, Web",
    "小程序、H5": "Mini Program, H5",
    "面包屑": "Breadcrumbs",
    "上一个 / 下一个案例": "Previous / Next case",
    "北京粉笔蓝天科技有限公司": "Beijing Fenbi Lantian Technology Co., Ltd.",
    "三耶（北京）科技有限公司": "Sanye (Beijing) Technology Co., Ltd.",
    "北京大叶互生文化传媒有限责任公司": "Beijing Daye Husheng Culture Media Co., Ltd.",
    "北京旷智信息科技有限公司": "Beijing Kuangzhi Information Technology Co., Ltd.",
    "千汇邦（北京）科技有限公司": "Qianhuibang (Beijing) Technology Co., Ltd.",

    // Portfolio covers
    "拼单 · 砍价 · 挖矿": "Group-buy · price-cut · mining",
    "律师接单": "Legal marketplace",
    "背单词利器": "Vocabulary booster",
    "餐厅包厢预订": "Restaurant booking",
    "运动内容社区": "Sports community",
    "拼课裂变": "Course group-buy",
    "装修定制": "Renovation service",
    "百万景区大数据": "Tourism big data",
    "数字资产挖矿": "Crypto mining",
    "互动学习游戏": "Learning games",
    "儿童英语启蒙": "Kids English",

    // Portfolio / case one-liners
    "电商平台 · 拼单 / 砍价 / 抽奖 / 挖矿": "E-commerce · group-buy / price-cut / lottery / mining",
    "律师接单平台": "Find a lawyer, fast",
    "小程序 · 背单词利器": "Mini Program · vocabulary booster",
    "小程序 · 餐厅包厢预订": "Mini Program · private-room booking",
    "小程序 · 运动内容社区": "Mini Program · sports community",
    "小程序 · 课程拼团裂变": "Mini Program · course group-buying",
    "小程序 + Web · 装修定制服务": "Mini Program + Web · renovation service",
    "Web · 全国百万景区大数据": "Web · big data on millions of attractions",
    "小程序 + H5 · 数字资产挖矿": "Mini Program + H5 · digital-asset mining",
    "Web 互动学习游戏 · 3 款": "Web learning games · 3 titles",
    "App · 儿童英语启蒙游戏": "App · kids English learning",

    // New landing-page card
    "粉笔网 · 游戏系列": "Fenbi · Game Series",
    "为教育科技公司开发的互动学习游戏系列（3 款）：超市主题、边玩边学。": "A series of interactive learning games (3 titles) for an ed-tech company \u2014 supermarket-themed, learning through play.",
    "摘自《平方根科技案例集》—— 每个项目均标注角色与周期。点击封面可查看完整案例界面。": "From the SquareRoot Tech case book \u2014 each project lists its role and timeline. Click a cover for full screens.",

    // Case-page descriptions
    "电商 App，含拼单、砍价、签到、抽奖、挖矿等营销玩法，覆盖 iOS / Android 双端。包含完整的高保真设计稿与首页、发现、购物、我的等核心界面。": "An e-commerce app with group-buying, price-cut, check-in, lottery and mining mechanics on iOS & Android \u2014 hi-fi screens plus the home, discover, shopping and profile views.",
    "快速找律师、律师快速接单的撮合平台，含律师/用户端页面、认证流程与订单争议流程设计。": "A lawyer-matchmaking platform: find a lawyer fast, lawyers take cases fast \u2014 covering user & lawyer screens, verification, and order-dispute flows.",
    "背单词小程序：四级 / 六级 / 考研词库，支持制定学习计划、选择词表、学习模式、挑战模式与学习达成分享。": "A vocabulary mini-program with CET-4 / CET-6 / postgraduate word lists, learning plans, word-list selection, study modes, challenge mode and shareable progress.",
    "餐厅预订小程序：分类筛选、包厢详情、提交订单、订单列表与订单状态跟踪，信息齐全。": "A restaurant & private-room booking mini-program: category filtering, room detail, order submission, order list and status tracking.",
    "分享与运动有关的一切的内容社区：主页动态、专辑、标签、VOTE 投票、精选活动与个人中心。另含「几秒运动」主题活动页。": "A content community sharing everything about exercise: home feed, albums, tags, VOTE polls, featured events and profiles \u2014 plus the JiMiao Sports campaign page.",
    "邀请好友成团、0 元拼课的课程分销裂变小程序，包含拼团页与分享页。": "A course-distribution referral mini-program: invite friends to form a group and get classes for free, with group-buying and sharing screens.",
    "装修定制平台：找装修与地图模式、装修详情与进度追踪、设计师 / 公司详情、施工工艺、预约服务、邀请好友红包活动与装修订单管理。": "Custom renovation platform: find a contractor (with map mode), renovation details and progress tracking, designer & company profiles, craftsmanship, appointment booking, red-packet referrals and order management.",
    "汇集全国百万景区数据的旅游大数据平台：目的地搜索、单独目的地页、对比、评论、数据服务购买与大屏可视化展示。": "A tourism big-data platform aggregating data on a million destinations: search, destination pages, comparison, reviews, data-service purchases and big-screen display.",
    "数字资产挖矿与交易辅助工具：绑定手机号、激活额度、扫码入群、分享海报获客、算力排行榜等完整获客链路。": "A digital-asset mining & trading assistant: phone binding, quota activation, QR group invite, share-poster acquisition, and a mining leaderboard.",
    "为教育科技公司开发的互动学习游戏系列：以「超市」为主题的选购、结算、崩蛋等玩法，把背单词变成游戏。": "A series of interactive learning games for an ed-tech company \u2014 supermarket-themed shopping, checkout and egg-breaking mechanics that turn vocabulary learning into play.",
    "儿童启蒙英语学习游戏，覆盖 iOS / Android 双端。": "English-learning games for children, built for both iOS and Android."
  };

  const EN_TITLE = 'Zhiwei Software — Software Development & Technical Consulting';
  // Pages may provide a page-specific English title / description via these
  // hidden elements (used by portfolio.html and cases/*.html).
  const TITLE_EN_EL = document.getElementById('i18nTitleEn');
  const META_EN_EL = document.getElementById('i18nMetaEn');
  const EN_META = META_EN_EL && META_EN_EL.textContent.trim()
    ? META_EN_EL.textContent.trim()
    : 'Zhiwei Software provides product design, iOS/Android app, WeChat mini-program, web and H5 development consulting. An AI-native team consuming 1B+ tokens per day; 40+ delivered projects for clients including YuantiKu, Fenbi, and Jiangsu TV, plus financial project experience with DBS and HSBC.';

  // Longest key first so full sentences win over short labels like 开发.
  const KEYS = Object.keys(EN).sort((a, b) => b.length - a.length);

  function toEnglish(text) {
    let out = text;
    for (const key of KEYS) {
      if (out.indexOf(key) !== -1) out = out.split(key).join(EN[key]);
    }
    return out;
  }

  // ---- Collect translatable text nodes and aria-labels once -------------- //
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const el = node.parentElement;
      if (!el || el.closest('script, style')) return NodeFilter.FILTER_REJECT;
      return /[一-鿿]/.test(node.nodeValue)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    }
  });
  for (let n = walker.nextNode(); n; n = walker.nextNode()) textNodes.push(n);

  const ariaEls = [];
  document.querySelectorAll('[aria-label]').forEach(el => {
    if (/[一-鿿]/.test(el.getAttribute('aria-label'))) ariaEls.push(el);
  });

  // Original Chinese snapshot, so switching back always restores the source.
  const zhText = new Map(textNodes.map(n => [n, n.nodeValue]));
  const zhAria = new Map(ariaEls.map(el => [el, el.getAttribute('aria-label')]));

  const zhTitle = document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  const zhMeta = metaDesc ? metaDesc.content : '';

  // ---- Language switching ------------------------------------------------ //
  const toggle = document.getElementById('langToggle');

  function applyLang(lang) {
    const en = lang === 'en';

    document.documentElement.lang = en ? 'en' : 'zh-CN';

    textNodes.forEach(node => {
      const zh = zhText.get(node);
      node.nodeValue = en ? toEnglish(zh) : zh;
    });
    ariaEls.forEach(el => {
      const zh = zhAria.get(el);
      el.setAttribute('aria-label', en ? toEnglish(zh) : zh);
    });

    // Title / meta after text-node translation so per-page EN strings win.
    document.title = en
      ? (TITLE_EN_EL ? TITLE_EN_EL.textContent.trim() : EN_TITLE)
      : zhTitle;
    if (metaDesc) metaDesc.content = en
      ? (META_EN_EL ? META_EN_EL.textContent.trim() : EN_META)
      : zhMeta;

    if (toggle) {
      toggle.textContent = en ? '中' : 'EN';
      toggle.setAttribute('aria-label', en ? '切换为中文' : 'Switch to English');
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
  }

  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  const initial = saved === 'en' || saved === 'zh'
    ? saved
    : (navigator.language && navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en');

  applyLang(initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      applyLang(document.documentElement.lang === 'en' ? 'zh' : 'en');
    });
  }
})();
