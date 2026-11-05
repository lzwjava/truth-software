/* ==========================================================================
   求真软件（TruthSoft）— bilingual (zh / en) support
   The page ships with Chinese as the source language. English strings live
   in the EN map below, keyed by the exact Chinese text found in index.html.
   Switching languages swaps text nodes and aria-labels in place; a user-set
   choice is persisted in localStorage, while the browser default locale is
   used otherwise and is never written to storage.
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY = 'truth-lang';

  // ---- English dictionary: exact Chinese source text -> English ---------- //
  const EN = {
    // Brand — 求真软件 is written as "TruthSoft" in English
    "求真软件": "TruthSoft",

    // Navigation
    "服务": "Services",
    "案例": "Case Studies",
    "客户": "Clients",
    "团队": "Team",
    "联系我们": "Contact Us",
    "主导航": "Main navigation",

    // Hero
    "软件开发 · 技术咨询 · 产品外包": "Software Development · Technical Consulting · Product Outsourcing",
    "按 token 计费，随时协作——": "Priced by the token, collaborating anytime —",
    "你的长期技术合伙人，一起打造产品，探索求真": "your long-term technical partner — building products, exploring the truth together.",
    "求真软件是一支 AI 驱动的软件咨询团队：从产品设计到上线运营的整体方案，按 token 使用量计价，与客户一起追求产品工程上的真理。": "TruthSoft is an AI-driven consulting team: end-to-end solutions from product design to launch, priced by token usage, pursuing the truth of product engineering with our customers.",
    "小程序、iOS / Android、Web、H5 都有成熟交付经验；作为 AI 原生团队，为客户交付项目时，日均消耗 10 亿+ tokens。": "Proven delivery across mini-programs, iOS / Android, Web, and H5; as an AI-native team we consume 1B+ tokens a day when delivering for clients.",
    "我们遵循求真：先想明白问题，再如实说明能做到什么。": "We follow the truth: understand the problem first, then say honestly what we can do.",
    "前身为平方根科技，2018–2019 年运营，2026 年重启。": "Formerly Square Root Technology, active 2018–2019 and relaunched in 2026.",
    "获取项目报价": "Get a Project Quote",
    "查看案例 ↓": "View Case Studies ↓",
    "历史交付项目": "Projects Delivered",
    "人 · 过往平均 8 人": "person (current team) · past average 8",
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
    "每个项目均标注角色与周期。": "Each project lists its role and timeline.",
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
    "猿辅导": "Yuanfudao",
    "粉笔": "Fenbi",
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
    "团队当前 1 人，过往平均 8 人：前端、后端、iOS、Android、小程序工程师与 UI/UX 设计师。": "The team is currently 1 person, averaging 8 people in the past: front-end, back-end, iOS, Android, mini-program engineers, and UI/UX designers.",
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
    "根据需求单独出具报价，双方确认后签署合同——定价透明、无隐藏费用，账单清晰、可解释。": "A tailored quote for each project, confirmed before we sign — transparent pricing, no hidden fees, and invoices that are clear and explainable.",
    "维护与长期合作": "Maintenance & Long-term Partnership",
    "每次合作预留半个月项目维护期，支持长期合作与持续迭代。": "Every engagement includes a half-month maintenance period, with support for long-term cooperation and continuous iteration.",

    // Pricing — transparent token-based pricing
    "计价": "Pricing",
    "透明的 token 计价": "Transparent Per-Token Pricing",
    "我们按实际投入计价，而不是按工期或想象力计价。": "We price by actual work delivered — not by deadlines or imagination.",
    "计划是动态的：需要多少功能、做多少次调整，由你和产品反馈决定——每一点工作都按 token 用量计费，账单永远看得懂。": "The plan is dynamic: how many features and how many iterations you need is decided by you and by real product feedback — every bit of work is billed by tokens, and the invoice always makes sense.",
    "预购 $100（或等值人民币）": "$100 Preorder (or CNY equivalent)",
    "预存的使用额度：不设有效期、可随时全额退款，并可直接抵扣 token 用量。它代表双方都准备好一起持续打磨，而不是一次快进快出。": "A prepaid usage credit with no expiry: fully refundable at any time, and it applies directly to your token usage. It signals that both sides are ready to keep polishing together — not a quick in-and-out.",
    "按 token 计价 · 单价可商": "Per-Token Billing · Flexible Unit Price",
    "输入与输出按合计 token 数计费，缓存命中按半价。按项目特点在以下档位中选定单价，可与客户协商：": "Input and output are billed together; cached tokens are billed at half price. The unit price is selected from the tiers below based on the project and negotiated with the client:",
    "¥5 / 1 百万 tokens": "¥5 / 1M tokens",
    "¥10 / 1 百万 tokens": "¥10 / 1M tokens",
    "¥20 / 1 百万 tokens": "¥20 / 1M tokens",
    "具体单价结合项目规模、模型类型、算力与数据需求，与客户逐单沟通确定。": "The exact unit price is agreed on a per-project basis, taking into account project scope, model type, compute, and data requirements.",
    "动态计划，一起打磨": "A Dynamic Plan, Polished Together",
    "先做出能用的东西，再根据真实使用持续调整。": "Ship something usable first, then keep refining it based on real usage.",
    "不赶工期、不假装一次到位——功能范围和迭代节奏随需求演进，按用量实付实销。": "We don't rush deadlines or pretend to nail it in one shot — scope and iteration pace evolve with your needs, and you only pay for what you use.",
    "无隐藏费用，无令人意外的账单——预购金不设有效期，未使用部分可随时全额退款。": "No hidden fees, no surprise bills — the preorder has no expiry, and any unused portion can be fully refunded at any time.",
    "基础单价已包含模型、基础设施与支持成本；若上游价格重大变化，我们也会跟着变化，并且会说明。": "The base rate already covers model, infrastructure, and support costs; if upstream prices change significantly, our pricing will follow and we will explain the change.",

    // Contact
    "聊聊你的项目": "Let's Talk About Your Project",
    "无论是一个想法、一份需求文档，还是已有产品需要重构——欢迎联系，我们会在 1 个工作日内回复。": "Whether it is an idea, a requirements document, or an existing product that needs a rebuild — get in touch and we will reply within one business day.",
    "微信与 WhatsApp 使用同一手机号。": "WeChat and WhatsApp use the same phone number.",
    "办公地点：广州市增城区中新镇风光路": "Office: Fengguang Road, Zhongxin Town, Zengcheng District, Guangzhou",

    // Footer
    "软件开发与技术咨询": "Software Development & Technical Consulting",

    // Navigation additions
    "AI 团队": "AI Team",
    "AI 服务": "AI Services",
    "转型咨询": "AI Transformation",
    "技术栈": "Tech Stack",
    "金融": "Finance",

    // AI Transformation Consultancy (AI 转型咨询)
    "AI 转型咨询": "AI Transformation Consultancy",
    "AI Transformation Consultancy · 帮你想清楚，再动手": "AI Transformation Consultancy · We help you think clearly, then build",
    "不是先买模型、先写代码，而是先看懂你的业务：分析现状流程、数据、系统与痛点，": "We don't start by buying models or writing code — we start by understanding your business: analyzing your processes, data, systems, and pain points,",
    "找出 AI 真正能带来回报的场景，再沿着路线图一步步落地。": "to find where AI will actually pay off, then deliver it step by step along a clear roadmap.",
    "01 现状分析": "01 Current-State Analysis",
    "分析现状流程、数据与痛点": "Analyze Current Processes, Data & Pain Points",
    "梳理核心流程、数据来源与系统边界，定位「人在重复做事」的地方。": "Map core processes, data sources, and system boundaries to pinpoint where people are doing repetitive work.",
    "02 机会识别": "02 Opportunity Mapping",
    "找出 AI 真正能带来回报的场景": "Find Where AI Will Actually Pay Off",
    "判断哪些环节适合用 AI、哪些用传统逻辑就好——模型有延迟与成本，不是所有环节都该上 AI。": "Decide which steps suit AI and which are better left to plain logic — models have latency and cost, so not everything needs AI.",
    "03 落地路线图": "03 Delivery Roadmap",
    "沿着路线图一步步落地": "Deliver Step by Step Along the Roadmap",
    "小步试点、逐步扩展，每步都有交付物与验收标准，可验证、可回退。": "Pilot small, scale gradually, with deliverables and acceptance criteria at every step — verifiable and reversible.",
    "业务现状梳理": "Current-State Review",
    "分析核心流程、数据来源与系统边界，找到「人在重复做事」的地方。": "Analyze core processes, data sources, and system boundaries to find where people are doing repetitive work.",
    "用 AI 的边界": "Where AI Makes Sense",
    "判断哪些环节适合 AI、能带来回报，哪些用传统逻辑就好——模型有延迟与成本，不必事事上 AI。": "Decide which steps benefit from AI and which are fine with plain logic — models have latency and cost, so not everything needs AI.",
    "分阶段落地": "Phased Delivery",
    "小步试点、逐步扩展，每步都有交付物与验收标准，避免一次性大投入打水漂。": "Pilot small, scale gradually, with deliverables and acceptance criteria at every step — no big one-shot bet down the drain.",
    "转型咨询可以先于任何开发启动：通常 1–2 周交付现状分析与试点建议。": "Consultancy can start before any development: we typically deliver a current-state analysis and pilot recommendations within 1–2 weeks.",
    "后续的 AI 应用开发、智能体与系统集成，由我们的「AI 服务」团队无缝承接。": "Follow-up application development, agents, and system integration are then handled seamlessly by our AI Services team.",

    // TruthSoft identity — About / manifesto section
    "关于": "About",
    "随时协作 · 做值得做的事 · 打持久战": "Collaborate as we go · Build what matters · Play the long game",
    "我们信奉什么": "What We Believe",
    "求真软件不是「卖代码」或「卖 AI tokens」的公司。": "TruthSoft is not a company that sells code or AI tokens.",
    "我们追求对计算机科学、工程与业务的深入理解，": "We pursue a deep understanding of computer science, engineering, and business,",
    "构建值得存在的软件，服务真实的用户，并与愿意长期一起创造价值的人协作。": "build software that deserves to exist, serve real users, and collaborate with people who want to create real value over many years.",
    "求真 · 随时协作": "Truth First · Collaborate as We Go",
    "不是先想清楚再动手的瀑布式，而是随时协作、按 token 计费、边探索求真、边完善想法的探索式。": "Not a think-first waterfall — an exploratory mode of working: we collaborate as we go, priced per token, seeking truth while refining the idea.",
    "为真实用户而建": "Build for Real Users",
    "先解决我们自己的问题，再把工具带给真实用户，从实际使用的反馈中不断改进，而不是把写代码等同于创造价值。": "We start by solving problems we have ourselves, bring the tools to real users, and keep improving them through actual use — never confusing writing code with creating value.",
    "尊重已有的成果": "Respect What Exists",
    "好的开源方案，我们直接使用、贡献或帮客户落地。不为写代码而写代码，只为真正解决问题。": "When a good open-source solution already exists, we use it, contribute to it, or help customers adopt it. We write code to solve problems — not to maximize code.",
    "以年为单位思考": "Think in Years",
    "信任、技术深度、好产品与好关系都需要时间沉淀。以可持续的进步，取代表面上的快速成功。": "Trust, technical depth, good products, and strong relationships all take time. We value sustainable progress over the appearance of rapid success.",
    "把客户当作协作者": "Customers as Collaborators",
    "理解客户的问题，尊重他们的约束，诚实解释每个决定，选择符合其长期利益的做法。": "Understand customers' problems, respect their constraints, explain decisions honestly, and choose what serves their long-term interests.",
    "透明是产品的一部分": "Transparency Is Part of the Product",
    "清晰定价、可预期的成本、诚实的局限。靠真实价值赢得信任，而不是靠复杂性留住客户。": "Clear pricing, predictable costs, and honest limitations. We earn trust with real value, not by keeping customers dependent on complexity.",
    "快，是承诺": "Fast Is a Promise",
    "小步快跑、以周为单位交付、当天开工，不让客户空等。": "Move in small steps, deliver weekly, start the same day — never leave a customer waiting.",
    "好，是底线": "Good Is the Baseline",
    "清晰的代码、可持续的架构，交付的每一版都经得起上线与时间的检验。": "Clean code and sustainable architecture — every release survives launch and time.",
    "自动化与 AI 的杠杆": "Automation & AI Leverage",
    "用自动化与 AI 的杠杆，让「快」与「好」同时成立。": "We use automation and AI leverage so that fast and good hold at the same time.",
    "AI 的目标是放大个人与小型团队的能力——把重复的工作交给模型与智能体，": "AI should expand what individuals and small teams can do — give repetitive work to models and agents,",
    "把人的时间留给理解问题、设计系统与创造有价值的产品。": "and give people their time back for understanding problems, designing systems, and creating valuable products.",
    // Hero additions
    "软件开发 · 技术咨询 · AI 原生 · 产品外包": "Software Development · Technical Consulting · AI-Native · Product Outsourcing",
    "我们遵循求真：先想明白问题，再如实说明能做到什么。": "We follow the truth: understand the problem first, then say honestly what we can do.",
    "前身为平方根科技，2018–2019 年运营，2026 年重启。": "Formerly Square Root Technology, active 2018–2019 and relaunched in 2026.",
    "10 亿+": "1B+",
    "日均 AI tokens 消耗": "AI tokens consumed per day",

    // Services additions
    "AI 应用与智能体开发": "AI Application & Agent Development",
    "对话机器人、RAG 知识库、工作流智能体与自动化脚本，把大模型能力接进你的业务系统。": "Chatbots, RAG knowledge bases, workflow agents, and automation scripts — wiring LLM capability into your business systems.",
    "金融系统开发": "Financial Systems Development",
    "银行交易、支付与账务系统的开发经验，来自星展 DBS、汇丰 HSBC 等金融项目，重视质量、安全与合规。": "Hands-on experience with banking transaction, payment, and accounting systems from DBS, HSBC, and other financial projects — quality, security, and compliance first.",
    "数据平台与可视化": "Data Platforms & Visualization",
    "数据标注平台、旅游大数据、报表与可视化看板等数据类系统建设。": "Data labeling platforms, tourism big data, reporting, and visualization dashboards.",

    // AI services (置顶) additions
    "AI 应用与智能体开发": "AI Application & Agent Development",
    "对话机器人、RAG 知识库、工作流智能体与自动化脚本——把大模型能力接进你的业务系统。": "Chatbots, RAG knowledge bases, workflow agents, and automation scripts — wiring LLM capability into your business systems.",
    "对话机器人": "Chatbots",
    "客服、导购、内部门户等场景的智能对话机器人，对接 OpenAI、Claude、DeepSeek、Gemini 等主流模型。": "Intelligent conversational agents for customer service, sales, and internal portals, connected to OpenAI, Claude, DeepSeek, Gemini, and other leading models.",
    "RAG 知识库": "RAG Knowledge Bases",
    "基于私有文档与业务数据构建检索增强知识库，让问答引用真实来源、可控可追溯。": "Retrieval-augmented knowledge bases built on private documents and business data, with answers grounded in real, traceable sources.",
    "工作流智能体与自动化脚本": "Workflow Agents & Automation Scripts",
    "把重复流程交给智能体与脚本执行，编码、数据处理、运维、报表全链路自动化。": "Hand repetitive workflows to agents and scripts — automating coding, data processing, ops, and reporting end to end.",
    "个人 AI 工作站部署": "Personal AI Workstation Deployment",
    "自建 GPU 工作站与推理环境（vLLM、llama.cpp、Ollama），本地化、私有化部署大模型。": "Self-hosted GPU workstations and inference environments (vLLM, llama.cpp, Ollama) for local, private LLM deployment.",
    "小模型微调 · 训练 · 强化学习": "Small-Model Fine-Tuning · Training · RL",
    "基于开源模型微调、全量训练与 RLHF / 强化学习，打造适合你业务的专属小模型。": "Fine-tune, train, and apply RLHF / reinforcement learning to open-source models to build small models tailored to your business.",
    "机器学习 · 深度学习": "Machine Learning · Deep Learning",
    "从特征工程到模型训练与评估，落地分类、预测、推荐、视觉、NLP 等各类智能应用。": "From feature engineering to model training and evaluation — shipping classification, forecasting, recommendation, vision, and NLP applications.",
    "数据治理 · 数据脚本": "Data Governance · Data Scripts",
    "数据清洗、标准化、质量管控与自动化数据脚本，让数据规范、可信、随时可用。": "Data cleaning, standardization, quality control, and automation scripts that keep data well-governed, trustworthy, and ready to use.",
    "爬虫与数据采集": "Crawling & Data Collection",
    "定制网页 / 接口爬虫与数据采集管道，稳定高效地获取公开数据并结构化落库。": "Custom web / API crawlers and data collection pipelines that reliably harvest public data into structured storage.",
    "AI 接入业务系统": "AI Integration into Business Systems",
    "通过 API、MCP、智能体框架把大模型能力无缝嵌入你现有的业务系统与工作流。": "Embed LLM capability seamlessly into your existing business systems and workflows via APIs, MCP, and agent frameworks.",

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
    "查看项目 →": "View Project →",
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
    "最强大脑官方小程序": "Official Super Brain mini-program",
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
    "小程序 · 《最强大脑》官方互动": "Mini Program · official Super Brain interactivity",
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
    "每个项目均标注角色与周期。点击封面可查看完整案例界面。": "Each project lists its role and timeline. Click a cover for full screens.",
    "以上案例来自数年前，大部分已征得客户许可后在此展示。如有不妥，请联系我们。": "These cases are from a few years ago; we have obtained permission from clients for most of them to showcase here. If anything is inappropriate, please contact us.",

    // Case-page descriptions
    "江苏卫视《最强大脑 · 燃烧吧大脑》官方微信小程序：能力测评、竞技答题与世界排行榜，配合节目播出实现观众同步挑战互动。": "Official WeChat mini-program for Jiangsu TV's Super Brain: Burning Brain \u2014 capability tests, competitive quizzes, and a global leaderboard that lets viewers challenge along with the show.",
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
    "儿童启蒙英语学习游戏，覆盖 iOS / Android 双端。": "English-learning games for children, built for both iOS and Android.",

    // ---- Four business lines (reorganized site) ----
    "业务线": "Business Lines",
    "训练与推理": "Training & Inference",
    "AI 转型": "AI Transformation",
    "AI 应用": "AI Apps",
    "应用开发": "Development",
    "实验室": "Lab",
    "模型训练与推理 · AI 转型咨询 · AI 应用与智能体 · 一般应用开发": "Model Training & Inference · AI Transformation Consulting · AI Apps & Agents · General Development",
    "求真软件是一家 AI 原生软件公司，四条业务线：模型训练与推理、AI 转型咨询、AI 应用与智能体开发、一般应用开发。": "TruthSoft is an AI-native software company with four business lines: model training & inference, AI transformation consulting, AI application & agent development, and general application development.",
    "从最底层的模型训练到最终用户的应用，全部按 token 使用量计价——每一笔费用都看得懂，每一项能力都有案例或实验可查。": "From low-level model training to end-user applications, everything is priced by token usage — every charge is clear, and every capability can be verified by a case study or experiment.",
    "四条业务线背后是同一个求真团队：一个人运营的实验室从零训练 GPT-2、部署开源模型、搭建 52 GB 二手 GPU 集群；一支 AI 原生团队把日均 10 亿+ tokens 用在每个交付项目上。40+ 交付项目，服务过猿题库、粉笔、江苏卫视，创始团队过往并有星展 DBS、汇丰 HSBC 金融项目经验。": "One truth-first team behind all four lines: a one-person lab that pretrains GPT-2s from scratch and serves open models on a 52 GB second-hand GPU cluster; an AI-native team spending 1B+ tokens a day on every engagement. 40+ projects delivered for Yuanfudao, Fenbi, and Jiangsu TV, plus DBS and HSBC banking experience from the founding team's past.",
    "四条业务线": "Four Business Lines",
    "四条业务线，一个求真标准": "Four business lines, one truth-first standard",
    "从最底层的模型训练，到最终用户的应用开发——每一项能力都有案例或实验可查，每一行收费都看得懂。": "From low-level model training to end-user application development — every capability has a case study or experiment, and every charge is clear.",
    "模型训练与推理": "Model Training & Inference",
    "从零预训练小模型、微调对齐、推理部署与 GPU 算力——实验室每一轮实验都公开记录。": "Pretrain small models from scratch, fine-tune and align, serve inference, and build GPU compute — every lab run is recorded publicly.",
    "先看懂业务流程、数据与痛点，再规划 AI 真正能带来回报的路径；通常 1–2 周交付现状分析。": "Understand your processes, data, and pain points first, then map where AI actually pays off — typically delivering a current-state analysis within 1–2 weeks.",
    "对话机器人、RAG 知识库、工作流智能体与自动化脚本，把大模型能力接进你的业务系统。": "Chatbots, RAG knowledge bases, workflow agents, and automation scripts that wire LLM capability into your business systems.",
    "一般应用开发": "General Application Development",
    "iOS / Android 应用、微信小程序、Web 平台与后台系统、H5 营销与增长活动。": "iOS / Android apps, WeChat mini-programs, Web platforms & admin systems, and H5 marketing & growth campaigns.",
    "业务线 01": "Business Line 01",
    "业务线 02 · 帮你想清楚，再动手": "Business Line 02 · We help you think clearly, then build",
    "业务线 03": "Business Line 03",
    "业务线 04": "Business Line 04",
    "从最底层做起：从零预训练小型大语言模型、微调与对齐、开源模型推理部署、GPU 算力与工作站。": "We start at the bottom: pretrain small LLMs from scratch, fine-tune and align, serve open models, and build GPU compute.",
    "实验室（Truth Lab）每一轮训练、每一项推理基准都公开记录——「模型训练与推理」不是口号，是数字。": "Every lab run and every inference benchmark is recorded publicly — 'model training & inference' is not a slogan, it's numbers.",
    "小模型从零预训练": "Small-Model Pretraining from Scratch",
    "GPT-2 124M / 760M 从零开始，而非加载现成权重。FineWeb、OpenWebText、SEC 财报等真实语料；13 轮训练记录公开可查。": "GPT-2 124M / 760M from zero, not from a checkpoint. Real corpora — FineWeb, OpenWebText, SEC filings; 13 training runs on public record.",
    "微调 · LoRA · SFT · RLHF": "Fine-Tuning · LoRA · SFT · RLHF",
    "基于开源模型微调、全量训练与强化学习，用 trl + peft 打磨适合你业务的专属小模型。": "Fine-tune, train, and apply RL to open-source models with trl + peft to craft a small model tailored to your business.",
    "推理与部署": "Inference & Serving",
    "vLLM、SGLang、llama.cpp 搭建 OpenAI 兼容推理服务；量化策略（GGUF / GPTQ / AWQ / FP8）附真实延迟与吞吐基准。": "OpenAI-compatible serving with vLLM, SGLang, and llama.cpp; quantization strategies (GGUF / GPTQ / AWQ / FP8) backed by real latency and throughput benchmarks.",
    "GPU 工作站与算力": "GPU Workstations & Compute",
    "自建 GPU 工作站与推理环境，本地化、私有化部署大模型；52 GB 二手集群与 H200 / MI300X 云租用，成本与性能一起算。": "Self-hosted GPU workstations and inference environments for local, private deployment; a 52 GB second-hand cluster and H200 / MI300X cloud rentals, priced and benchmarked honestly.",
    "数据管线": "Data Pipelines",
    "FineWeb 分片下载、内存安全 parquet 提取、分词、token 预算与去重——训练前的脏活累活，交付干净可信的数据。": "Sharded FineWeb downloads, memory-safe parquet extraction, tokenization, token budgeting, and dedup — the dirty work before training, delivering clean data.",
    "公开的证据": "Public Evidence",
    "SEC-EDGAR-GPT：1.55B tokens · 8 小时 · val loss 2.28 · 全球银行内部 200+ 浏览；nano-vLLM prefill 506 tok/s。": "SEC-EDGAR-GPT: 1.55B tokens · 8h · val loss 2.28 · 200+ internal views at a global bank; nano-vLLM at 506 tok/s prefill.",
    "完整实验记录见下方「实验室」章节，训练日志与代码在 GitHub 公开。": "Full experiment records are in the Lab section below; training logs and code are public on GitHub.",
    "后端架构与高并发、产品与界面设计、数据平台与可视化等横向能力，见「技术栈」「金融与银行」「案例」章节。": "Horizontal capabilities — backend architecture, product & interface design, data platforms and visualization — are covered in the Tech Stack, Finance, and Case Studies sections.",

    // ---- Lab (Truth Lab) section ----
    "Truth Lab · 实验室 · Truth through compute": "Truth Lab · Laboratory · Truth through compute",
    "实验室：把「模型训练与推理」做成可查的证据": "The lab: making 'model training & inference' verifiable",
    "Truth Lab 是一个人运营的 AI 研究实验室：从零预训练小模型、部署开源模型、用二手部件搭建 GPU 工作站，": "Truth Lab is a one-person AI research lab: pretraining small models from scratch, serving open models, and building GPU workstations from used parts,",
    "并如实记录每一项实验——包括失败的。数字全部公开：GitHub 上的代码、Hugging Face 上的模型、训练日志里的数字。": "while honestly recording every experiment — including the failures. All the numbers are public: code on GitHub, models on Hugging Face, and figures in the training logs.",
    "我不是拥有一百名研究员的大型实验室。我只是一个会训练模型、会拆坏 GPU、会读 kernel 的工程师——并且会把实际发生了什么写下来，包括那些没有成功的部分。": "I'm not a lab with a hundred researchers. I'm one engineer who trains models, breaks GPUs, reads kernels — and writes down what actually happened, including the parts that didn't work.",
    "—— 李智维（Zhiwei Li），创始人兼唯一研究员": "— Zhiwei Li, founder & sole researcher",
    "CUDA 显存：三台自建工作站 + RTX 4070": "CUDA VRAM: three self-built workstations + RTX 4070",
    "13 次": "13",
    "从零训练的小型大语言模型": "small LLMs trained from scratch",
    "10 B": "10B",
    "过去一年消耗的 token": "tokens consumed in the past year",
    "12 年": "12yrs",
    "工程经验：9 年企业 · 3 年自由职业": "engineering experience: 9 years corporate · 3 freelance",
    "精选实验": "Selected Experiments",
    "可以亲手检验的工作，而非只能读到的宣传": "Work you can inspect, not just read about",
    "在一张 RTX 4070 上约 8 小时、从零训练 1.55B 个 SEC 财报 token 的 GPT-2（124M）。验证损失 2.28，部署为聊天机器人，在全球银行内部获得 200+ 浏览。": "A GPT-2 (124M) trained from scratch on 1.55B tokens of SEC filings in about 8 hours on a single RTX 4070. Converged at val loss 2.28 and deployed as a chatbot — 200+ internal views at a global bank.",
    "1.55B tokens · 8h · RTX 4070 · 3 天全流程": "1.55B tokens · 8h · RTX 4070 · 3 days end-to-end",
    "nanoGPT 分支 · 45 commits ↗": "nanoGPT fork — 45 commits ↗",
    "Karpathy 的 nanoGPT 扩展：FineWeb-Edu / OpenWebText / Wikipedia 数据管线、6 套按显存扩展的配置、逐行张量形状注释。": "Karpathy's nanoGPT extended with FineWeb-Edu / OpenWebText / Wikipedia pipelines, six VRAM-scaled training configs, and inline tensor-shape annotations.",
    "52 GB 家庭 AI 集群": "52 GB home AI cluster",
    "三台二手数据中心工作站——Tesla M40 12 GB、M40 24 GB、P100 16 GB——BIOS 考古式点亮，约 100 元每 GB 显存。": "Three second-hand datacenter workstations — Tesla M40 12 GB / 24 GB, P100 16 GB — revived via BIOS archaeology at about ¥100 per GB of VRAM.",
    "MoE 与推理系统（研究中）": "MoE & Serving Systems (in progress)",
    "端到端研读 DeepSeek-MoE、MegaBlocks、Tutel；追踪 router → FusedMoe → Triton grouped-GEMM；分页 KV 缓存、分块 prefill、CUDA graphs。": "Studying mixture-of-experts end to end — DeepSeek-MoE, MegaBlocks, Tutel; tracing router → FusedMoe → Triton grouped-GEMM, plus paged KV cache, chunked prefill, and CUDA graphs.",
    "zz · 数据处理工具箱 ↗": "zz — dataset utilities ↗",
    "可断点续传的 FineWeb 下载、内存安全 parquet 提取、分词、训练时长估算与日志分析。": "Resumable FineWeb downloads, memory-safe parquet extraction, tokenization, training-duration math, and log analysis.",
    "FluxReel · AMD 黑客松（获奖）↗": "FluxReel — AMD Hackathon (award) ↗",
    "一行主题 → 15 秒竖屏视频，图像生成跑在 AMD Radeon（ROCm）；AMD AI DevMaster 完赛奖（2026-07）。": "One-line topic → 15-second vertical video, image generation running on an AMD Radeon under ROCm. AMD AI DevMaster Hackathon Completion Award, 2026-07.",
    "训练记录": "Training Records",
    "从零预训练——13 轮真实记录": "Pretraining from scratch — 13 real runs",
    "模型": "Model",
    "框架": "Framework",
    "参数量": "Params",
    "硬件": "Hardware",
    "步数": "Steps",
    "状态": "Status",
    "已完成": "completed",
    "冒烟测试": "smoke test",
    "提前停止": "stopped early",
    "预训练完成": "pretrain done",
    "全部完成": "fully completed",
    "仅脚本": "scripts only",
    "硬件与算力": "Hardware & Compute",
    "这些训练跑在什么上面": "What these runs ran on",
    "家用工作站": "Home workstation",
    "NVIDIA RTX 4070 · 12 GB · 3 年": "NVIDIA RTX 4070 · 12 GB · 3 years",
    "云 · RunPod / DigitalOcean": "Cloud · RunPod / DigitalOcean",
    "NVIDIA H200 · 141 GB HBM3e · 3 个月": "NVIDIA H200 · 141 GB HBM3e · 3 months",
    "云 · AMD Developer Cloud": "Cloud · AMD Developer Cloud",
    "AMD MI300X · 192 GB HBM3 · 3 个月": "AMD MI300X · 192 GB HBM3 · 3 months",
    "家庭集群（2026）": "Home cluster (2026)",
    "博客": "Blog",
    "AI 作品集": "AI Portfolio",

    // ---- Founder path (team section) ----
    "创始人路径": "The founder's path",
    "从 NOIP 到 nanoGPT": "From NOIP to nanoGPT",
    "第一行代码 · 第一场比赛 · 第一个 App": "First code · first contest · first app",
    "2008 年开始编程；广东省 NOIP 2011 前 300 名、在线解约 1,000 道算法题；北林校园助手 App 被数千学生使用；2014 蓝桥杯一等奖。": "Started programming in 2008; top 300 in Guangdong NOIP 2011 with ~1,000 problems solved online; a campus-assistant app used by thousands; first prize in the 2014 Blue Bridge Cup.",
    "LeanCloud 与 SDK 时代": "The LeanCloud & SDK years",
    "LeanCloud 软件工程师：Objective-C / Java SDK，旗舰演示应用 LeanChat（iOS / Android）。": "Software engineer at LeanCloud: Objective-C and Java SDKs, plus the flagship demo app LeanChat for iOS / Android.",
    "创立平方根科技": "Founded Square Root Technology",
    "趣直播（知识直播：80 场讲座 · 3 万用户 · 数百万浏览）+ 软件咨询（50 个项目 · 约 300 万营收），含江苏卫视《最强大脑》小程序。": "Fun Live, a knowledge live-broadcast platform (80 lectures, 30K users, millions of views), plus a software consulting business (50 projects, ~¥3M revenue), including the Jiangsu TV 'Super Brain' mini-program.",
    "全栈自由职业": "Freelance full-stack",
    "ShowMeBug × 企业微信、贸易数据爬虫、LED 标牌官网；又刷了约 500 道算法题。": "ShowMeBug × WeCom, trade-data scraping, an LED-sign company site; about 500 more algorithm problems solved.",
    "银行后端外派（DBS / HSBC）": "Banking backends (DBS / HSBC)",
    "DBS 股票交易微服务（Avaloq、编辑距离搜索）；HSBC PayMe 自动充值与 AWS 迁移；Java / Spring Cloud 与银行级工程。": "Trading microservices at DBS (Avaloq, edit-distance search); HSBC PayMe auto top-up and AWS migration. Java, Spring Cloud, and bank-grade engineering.",
    "转折点 · 组装第一台 ML 工作站": "The turning point: a first ML workstation",
    "组装 RTX 4070 工作站，完成 DeepLearning.AI 机器学习与深度学习专项，复现约 30 个 ML 项目，开始认真做微调与预训练。": "Assembled the RTX 4070 workstation, finished the DeepLearning.AI ML and DL specializations, re-implemented ~30 ML projects, and started fine-tuning and pretraining small models in earnest.",
    "银行 AI 工程实践（HSBC）": "AI engineering at a bank (HSBC)",
    "20 个定制 AI 智能体、400 个可复用脚本、1,800 篇文档；企业编程助手使用量前 6%；AIPlayer 贡献奖；80 人技术演讲。": "20 custom AI agents, 400 reusable scripts, 1,800 docs; top 6% in enterprise coding-assistant usage; AIPlayer Contribution Award; a technical talk for 80 people.",
    "Truth Lab 与求真软件": "Truth Lab & TruthSoft",
    "训练 SEC-EDGAR-GPT、搭建 52 GB 二手 GPU 集群、消耗 10B token；重启求真软件四条业务线。": "Trained SEC-EDGAR-GPT, built a 52 GB second-hand GPU cluster, consumed 10B tokens; relaunched TruthSoft with four business lines.",

    // ---- Footer ----
    "求真软件 · 模型训练与推理 · AI 转型咨询 · AI 应用与智能体 · 一般应用开发": "TruthSoft · Model Training & Inference · AI Transformation · AI Apps & Agents · General Development",

    // ---- Works cards I (previously untranslated) ----
    "自研金融小模型：用 SEC EDGAR 年报（10-K）、季报（10-Q）与临时公告（8-K）语料，从零训练 GPT-2 124M 模型。": "Proprietary financial model trained from scratch on SEC EDGAR annual (10-K), quarterly (10-Q), and current (8-K) filings — a GPT-2 124M model.",
    "自研 · 从零训练": "Solo · from scratch",
    "8 小时训练 · 1.55B tokens": "8 hours of training · 1.55B tokens",
    "趣直播": "Fun Live",
    "自研知识直播平台：从直播、连麦互动到回放订阅，创始团队自研并运营的全栈产品。": "A self-built knowledge live-broadcast platform — live streaming, interaction, and replay subscriptions, built and operated full-stack by the founding team.",
    "自研 · 全栈": "Solo · full-stack",
    "在线运营 funlive.io": "Live at funlive.io"
  };

  const EN_TITLE = 'TruthSoft — Model Training & Inference · AI Transformation · AI Apps & Agents · Development';
  // Pages may provide a page-specific English title / description via these
  // hidden elements (used by portfolio.html and cases/*.html).
  const TITLE_EN_EL = document.getElementById('i18nTitleEn');
  const META_EN_EL = document.getElementById('i18nMetaEn');
  const EN_META = META_EN_EL && META_EN_EL.textContent.trim()
    ? META_EN_EL.textContent.trim()
    : 'TruthSoft provides product design, iOS/Android app, WeChat mini-program, web and H5 development consulting. An AI-native team consuming 1B+ tokens per day; 40+ delivered projects for clients including YuantiKu, Fenbi, and Jiangsu TV, plus financial project experience with DBS and HSBC.';

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

  function applyLang(lang, persist) {
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

    // Keep the theme toggle's aria-label in sync with the active language.
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      const dark = document.documentElement.dataset.theme === 'dark';
      themeBtn.setAttribute('aria-label', en
        ? (dark ? 'Switch to light mode' : 'Switch to dark mode')
        : (dark ? '切换浅色模式' : '切换深色模式'));
    }

    if (toggle) {
      toggle.textContent = en ? '中' : 'EN';
      toggle.setAttribute('aria-label', en ? '切换为中文' : 'Switch to English');
    }

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
    }
  }

  // Language selection: use the user's saved choice if they ever set one,
  // otherwise fall back to the browser's default locale. The browser default
  // is never written to localStorage — only an explicit user toggle persists.
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  const initial = saved === 'en' || saved === 'zh'
    ? saved
    : (navigator.language && navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en');

  applyLang(initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      applyLang(document.documentElement.lang === 'en' ? 'zh' : 'en', true);
    });
  }
})();
