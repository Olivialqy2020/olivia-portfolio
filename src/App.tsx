import React, { lazy, Suspense, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  Code,
  BookOpen,
  Globe2,
  Menu,
  X,
  FileText,
  Download,
  Music,
  FlaskConical,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

const BostonMap = lazy(() => import("./BostonMap"));

export default function App() {
  const [activeExp, setActiveExp] = useState("ey-t3");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const isZh = language === "zh";

  const SparkleIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill={color} className={`${className} inline-block align-middle`}>
      <path d="M12 2C12 7.5 14.5 12 20 12C14.5 12 12 16.5 12 22C12 16.5 9.5 12 4 12C9.5 12 12 7.5 12 2Z" />
    </svg>
  );

  const LinkedinIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.84v2.05h.05c.54-1.02 1.85-2.1 3.8-2.1 4.06 0 4.81 2.67 4.81 6.14V23h-4v-7.88c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23H8V8z" />
    </svg>
  );

  const GithubIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.24 3.35.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.16c.98 0 1.96.13 2.88.39 2.19-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.03c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );

  const text = {
    en: {
      nav: ["Hello", "About", "Work", "Contact"],
      sayHello: "Say Hello",
      heroEyebrow: "HI, I'M OLIVIA",
      heroTitle1: "Financial Builder.",
      heroTitle2: "Data Explorer.",
      heroSubtitle: "→ finding balance between audit rigor & analytical foresight",
      heroBody:
        "I'm a Massachusetts-licensed CPA with 5+ years of accounting and audit experience, including nearly four years at EY across asset management and financial instruments. I'm bringing that experience into corporate accounting and finance, while continuing to build practical data and AI skills.",
      heroTags: ["Corporate Finance", "Licensed CPA", "I/ENFP-T", "Data Enthusiast", "Espresso Lover ☕", "Python Learner ✦"],
      portraitBadge: "Boston light ✦",
      portraitCaption: "finance + data explorer",
      portraitCity: "Boston",
      cta: "See what I've done →",
      resumeCta: "Preview resume",
      resumeTitle: "Resume Snapshot",
      resumeSubtitle: "A polished PDF version of my 2026 resume is available here for quick review or download.",
      resumePreview: "Open Preview",
      resumeDownload: "Download PDF",
      resumeBullets: ["Massachusetts-licensed CPA with 5+ years in accounting and audit", "Financial reporting, reconciliations, internal controls, and investment valuation", "Boston-based, open to hybrid and remote conversations"],
      aboutTitle: "A bit about me",
      about1:
        "I'm a Massachusetts-licensed CPA with a foundation in both hands-on accounting and audit. Across 5+ years, I've worked on reconciliations, journal entries, close support, financial reporting review, and internal controls, with nearly four years at EY focused on asset management and financial instruments (ASC 815/820). I enjoy bringing structure to complex information and working with people to resolve the details.",
      about2:
        "Outside work, I'm exploring AI and automation tools through small projects inspired by my gardening hobby and experimenting with vibe coding online. I'm also a classical music enthusiast; I played in school orchestras through high school and college, and I have a soft spot for Baroque, classical repertoire, and many other forms of music.",
      aboutTags: ["I/ENFP-T ✦", "Bilingual (ZH/EN)", "Data Modeling 📊", "Classical Music ♫", "Cooking 🍳"],
      currentTitle: "Currently into",
      licenseTitle: "Licensed CPA · Massachusetts",
      licenseCaption: "A milestone in my accounting journey · October 2026",
      licenseAlt: "Qinyan Luo's framed Massachusetts CPA certificate",
      currentItems: [
        "Licensed as a CPA in Massachusetts, with a continued focus on accounting and financial reporting.",
        "Completed Claude 101 and LinkedIn’s Foundations of Treasury Management; currently reviewing ASC 820/815 and continuing through Claude’s broader course series.",
        "Planning to explore hiking routes starting from the New England area.",
        "Listening broadly to the Boston Symphony Orchestra and concerts from ensembles around the area.",
      ],
      education: "Education",
      educationNote: "Academic foundation, kept light so the work experience stays center stage.",
      resumeSectionNote: "Quick preview for recruiters and hiring managers.",
      workEyebrow: "WHERE I'VE WORKED",
      workTitle: "Professional Journey",
      workSubtitle: "audit • valuation • financial instruments — hover to explore",
      projectsTitle: "The Innovation Lab",
      projectsBadge: "↑ currently building this!",
      selfTaught: "Self-Taught",
      upskilling: "Upskilling",
      inProgress: "In Progress",
      projectOneTitle: "Financial Automation with Python",
      projectOneBody: "Building practical scripts to clean financial datasets, organize recurring reporting tasks, and reduce manual Excel overhead step by step.",
      projectOneTags: ["Python", "Pandas"],
      projectTwoTitle: "Vibe Coding & GitHub Exploring",
      projectTwoBody: "Recently obsessed with vibe coding and browsing GitHub for interesting topics, playful tools, and small ideas worth learning from.",
      projectTwoTags: ["Vibe Coding", "GitHub Discovery"],
      contactTitle: "Say Hello",
      contactSubtitle: "I love meeting new people",
      contactLead1: "Building something",
      contactLead2: "meaningful with data?",
      contactBody:
        "Whether you're hiring for a corporate finance role, need someone to bridge traditional accounting with modern analytics, or just want to chat about espresso beans — I'd love to hear from you.",
      dropLine: "↓ drop me a line",
      emailLabel: "Email",
      phoneLabel: "Phone",
      openTo: "Open to",
      openItems: ["Corporate Accounting Roles", "Fund Accounting/Treasury Positions", "FP&A Accounting Positions"],
      availability: "Open to opportunities",
      availabilityBody:
        "Actively exploring corporate finance roles across analytics, strategy, and treasury. Location flexible (Boston area preferred). Let's chat!",
      bostonTitle: "Boston-based",
      bostonBody: "Currently based in the Boston area, with a soft spot for hybrid roles, finance conversations, and thoughtful coffee chats.",
      footer: "Designed with warmth ✦ All rights reserved.",
    },
    zh: {
      nav: ["你好", "关于", "经历", "联系"],
      sayHello: "联系我",
      heroEyebrow: "你好，我是 OLIVIA",
      heroTitle1: "财务框架搭建者",
      heroTitle2: "数据探索者",
      heroSubtitle: "→ 在审计的严谨性和数据分析的前瞻性之间寻找平衡",
      heroBody:
        "我持有马萨诸塞州注册会计师（CPA）执照，有 5 年以上会计与审计经验，其中近四年在安永从事资产管理和金融工具相关审计。现在希望将这些经验运用到企业会计与财务工作中，同时继续提升数据分析与 AI 工具的实践能力。",
      heroTags: ["企业财务", "美国 CPA 持证", "I/ENFP-T", "数据爱好者", "咖啡爱好者 ☕", "Python 学习中 ✦"],
      portraitBadge: "",
      portraitCaption: "财务 + 数据探索者",
      portraitCity: "波士顿",
      cta: "查看我的经历 →",
      resumeCta: "预览简历",
      resumeTitle: "简历速览",
      resumeSubtitle: "这里放的是 2026 版 PDF 简历，可以直接在线预览，也可以下载保存。",
      resumePreview: "打开预览",
      resumeDownload: "下载 PDF",
      resumeBullets: ["马萨诸塞州注册会计师，拥有 5 年以上会计与审计经验", "熟悉财务报告、账户核对、内部控制及投资估值", "目前在波士顿，欢迎远程或混合办公机会交流"],
      aboutTitle: "关于我",
      about1:
        "我持有马萨诸塞州注册会计师（CPA）执照，既有日常账务处理经验，也接受过扎实的审计训练。过去 5 年多，我的工作涵盖账户核对、会计分录、结账支持、财务报告复核和内部控制；其中近四年在安永，主要从事资产管理及金融工具相关审计（ASC 815/820）。我做事注重结构和细节，也很享受与人协作，把复杂问题逐一理清的过程。",
      about2:
        "工作之外，我正在探索 AI 和自动化工具，围绕自己的园艺爱好做一些小项目，也会尝试用 vibe coding 实现一些线上小创意。我也是古典音乐发烧友，高中和大学都在学校交响乐团，尤其喜欢巴洛克音乐、古典音乐，也愿意探索各种音乐形式。",
      aboutTags: ["I/ENFP-T ✦", "中英双语", "数据建模 📊", "古典音乐 ♫", "做饭 🍳"],
      currentTitle: "最近在关注",
      licenseTitle: "马萨诸塞州注册会计师",
      licenseCaption: "会计职业路上的一个里程碑 · 2026年10月",
      licenseAlt: "Qinyan Luo 的马萨诸塞州注册会计师执照照片",
      currentItems: [
        "已取得马萨诸塞州注册会计师（CPA）执照，持续深耕会计与财务报告领域。",
        "已完成 Claude 101 和 LinkedIn 的 Foundations of Treasury Management；目前在继续复习 ASC 820/815，并持续学习 Claude 名下的一系列课程。",
        "计划从北美新英格兰地区开始慢慢探索适合周末的徒步路线。",
        "目前在广泛听波士顿交响乐团，以及周边各种乐团的演出。",
      ],
      education: "教育背景",
      educationNote: "作为基础信息简要呈现，页面重点仍放在工作经历上。",
      resumeSectionNote: "给招聘方和招聘经理快速浏览用。",
      workEyebrow: "工作经历",
      workTitle: "职业经历",
      workSubtitle: "审计 • 估值 • 金融工具 — 悬停查看详情",
      projectsTitle: "创新实验室",
      projectsBadge: "↑ 正在建设中",
      selfTaught: "自学中",
      upskilling: "能力补充",
      inProgress: "进行中",
      projectOneTitle: "用 Python 做财务自动化",
      projectOneBody: "正在尝试用小脚本清理财务数据、整理周期性报表任务，慢慢减少重复性的 Excel 手工操作。",
      projectOneTags: ["Python", "Pandas"],
      projectTwoTitle: "Vibe Coding 和 GitHub 探索",
      projectTwoBody: "最近很喜欢 vibe coding，也会在 GitHub 上找各种感兴趣的话题、小工具和可以借鉴的灵感。",
      projectTwoTags: ["Vibe Coding", "GitHub 探索"],
      contactTitle: "联系我",
      contactSubtitle: "我喜欢认识新朋友",
      contactLead1: "如果你正在搭建",
      contactLead2: "和数据有关的财务工作流",
      contactBody:
        "如果你正在招聘企业会计、基金会计、Treasury 或 FP&A 相关岗位，或者需要一个能连接传统会计与数据分析背景的人，我都很愿意交流。想聊 espresso beans 也欢迎。",
      dropLine: "↓ 欢迎联系我",
      emailLabel: "邮箱",
      phoneLabel: "电话",
      openTo: "感兴趣方向",
      openItems: ["企业会计相关岗位", "基金会计 / 财资相关岗位", "企业财务规划与分析相关岗位"],
      availability: "正在开放新机会",
      availabilityBody:
        "正在积极关注企业会计、基金会计、财资和企业财务规划与分析相关机会。地点灵活，波士顿地区优先。",
      bostonTitle: "目前在波士顿",
      bostonBody: "现在主要在波士顿地区，也很愿意了解混合办公或远程机会。欢迎聊财务、数据，也欢迎轻松约一杯咖啡。",
      footer: "Designed with warmth ✦ All rights reserved.",
    },
  }[language];

  const experienceData = {
    "ey-t3": {
      company: "Ernst & Young",
      companyZh: "安永",
      team: "Transactional and Technical Topics “T3” - Financial Instruments Team",
      role: "Audit Senior",
      period: "Oct 2024 - Mar 2026",
      teamZh: "交易与技术专题团队 - 金融衍生品组",
      roleZh: "高级审计师",
      periodZh: "2024年10月 - 2026年3月",
      location: "Boston, MA",
      locationZh: "波士顿，MA",
      highlights: [
        "Audited complex financial instruments and investment accounts, including derivatives and trading, available-for-sale (AFS), and held-to-maturity (HTM) debt securities; evaluated documentation, presentation, and disclosures under Derivatives and Hedging (ASC 815) and Fair Value Measurement (ASC 820).",
        "Assessed valuation risk across investment portfolios, considering security characteristics, holding periods, and underlying assets to identify higher-risk holdings requiring additional audit procedures.",
        "Reviewed valuation specialists' methodologies and key pricing inputs to assess whether independent fair value estimates supported client-reported values.",
        "Tested SOX and other internal controls and risk-management frameworks, identified control gaps, and aligned audit procedures with regulatory and PCAOB standards.",
        "Led day-to-day audit execution across clients and EY delivery teams in multiple locations, reviewed workpapers, resolved audit issues, and maintained quality standards.",
        "Managed Financial Instruments team audit budgets, hour forecasts, staffing, and peak-season workload planning with managers and senior managers.",
      ],
      highlightsZh: [
        "审计复杂金融工具及投资账户，涵盖衍生品，以及交易性、可供出售和持有至到期债务证券；依据《衍生工具与套期保值》（ASC 815）及《公允价值计量》（ASC 820）评估支持文件、报表列报和附注披露。",
        "结合证券特征、持有期限和底层资产构成，评估投资组合的估值风险，识别需要追加审计程序的高风险持仓。",
        "复核估值专家采用的方法和关键定价参数，判断独立估算的公允价值能否支持客户报告的估值。",
        "测试《萨班斯—奥克斯利法案》（SOX）相关内控、其他内部控制及风险管理机制，识别控制缺口，并确保审计程序符合监管要求和美国公众公司会计监督委员会（PCAOB）标准。",
        "协调客户及安永各地交付团队，推进日常审计工作、复核底稿并解决审计问题，把控项目质量。",
        "与经理及高级经理共同管理金融衍生品组的审计预算、工时预测、人员配置和忙季工作安排。",
      ],
    },
    "ey-wam": {
      company: "Ernst & Young",
      companyZh: "安永",
      team: "FSO - Wealth & Asset Management",
      role: "Audit Senior (promoted from Audit Staff)",
      period: "May 2022 - Oct 2024",
      teamZh: "金融服务业务部 - 财富与资产管理",
      roleZh: "高级审计师（由审计助理晋升）",
      periodZh: "2022年5月 - 2024年10月",
      location: "Boston, MA",
      locationZh: "波士顿，MA",
      highlights: [
        "Progressed from Audit Staff supporting a 100+ fund program to Audit Senior in-charge for approximately 20 mutual funds within a 50+ fund program; coordinated concurrent workstreams, reviewed staff work, and resolved open items across reporting deadlines.",
        "Reviewed third-party administrator-prepared NAV packages and financial statement schedules; recalculated net asset value and reconciled cash, investment positions, and market values, investigating discrepancies and open items.",
        "Tested custody, pricing, and related financial statement disclosures for investment holdings, including selected settled and unsettled term-loan positions.",
        "Performed audit procedures over mutual fund subscriptions, redemptions, distributions, and SEC reporting.",
      ],
      highlightsZh: [
        "从参与百余只基金项目的审计助理晋升为高级审计师，在涵盖 50 余只基金的项目中具体负责约 20 只共同基金；统筹并行任务、复核团队工作，并在各报告截止日前解决待办事项。",
        "复核第三方基金行政管理机构编制的净资产值报表及财务报表明细，重新计算基金净资产值，核对现金、投资持仓和市值，并跟进差异及未结事项。",
        "对投资持仓执行托管、定价和相关报表披露测试，涵盖部分已交割及未交割的定期贷款持仓。",
        "对共同基金的申购、赎回、收益分配及美国证券交易委员会（SEC）申报执行审计程序。",
      ],
    },
    "malone-bailey": {
      company: "MaloneBailey, LLP",
      companyZh: "美博咨询",
      team: "Audit Practice",
      role: "Audit Associate",
      period: "July 2021 - Apr 2022",
      teamZh: "审计业务",
      roleZh: "审计助理",
      periodZh: "2021年7月 - 2022年4月",
      location: "Houston, TX",
      locationZh: "休斯顿，TX",
      highlights: [
        "Performed audit and interim review procedures, evaluating transactions, records, and supporting documentation to assess fair presentation of financial statements.",
        "Executed audit procedures within professional standards, timelines, and budgets; worked with senior team members to resolve issues and provide client status updates.",
      ],
      highlightsZh: [
        "执行审计和期中复核程序，评估交易、记录及支持性文件，以判断财务报表是否公允列报。",
        "在专业准则、项目时间表和预算要求内完成审计程序，与资深同事共同解决问题，并向客户更新进展。",
      ],
    },
    "jackson-hewitt": {
      company: "Liu Inc. CPA",
      companyZh: "Liu Inc. CPA",
      team: "Liu Inc. CPA",
      role: "Senior Accountant",
      period: "Oct 2018 - June 2021",
      teamZh: "Liu Inc. CPA",
      roleZh: "高级会计师",
      periodZh: "2018年10月 - 2021年6月",
      location: "Plymouth, MN",
      locationZh: "普利茅斯，MN",
      highlights: [
        "Managed day-to-day accounting for one company using QuickBooks Online, including accounts payable and receivable, bank reconciliations, adjusting journal entries, and month-end and year-end close support.",
        "Prepared routine financial reports, researched accounting and tax matters for startups and investments, and supervised and trained junior staff on client accounting and reconciliation procedures.",
      ],
      highlightsZh: [
        "使用 QuickBooks Online 负责一家公司的日常账务，涵盖应付与应收账款、银行对账、调整分录，以及月末和年末结账支持。",
        "编制日常财务报告，研究初创企业及投资相关的会计与税务问题，并指导、培训初级员工处理客户账务和账户核对工作。",
      ],
    },
  };

  const currentIcons = [BookOpen, Code, Globe2, Music];
  const activeExperience = experienceData[activeExp as keyof typeof experienceData];
  const expCompany = isZh ? activeExperience.companyZh : activeExperience.company;
  const expRole = isZh ? activeExperience.roleZh : activeExperience.role;
  const expTeam = isZh ? activeExperience.teamZh : activeExperience.team;
  const expHighlights = isZh ? activeExperience.highlightsZh : activeExperience.highlights;
  const expLocation = isZh ? activeExperience.locationZh : activeExperience.location;
  const resumeUrl = `${import.meta.env.BASE_URL}Olivia-Resume.pdf?v=20261022`;
  const resumePreviewUrl = `${import.meta.env.BASE_URL}resume-preview/olivia-resume.png?v=20261022`;

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#332D2D] font-sans antialiased selection:bg-[#EAE5DE] selection:text-[#9C5A6A] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        html { scroll-behavior: smooth; }
        .font-serif-elegant { font-family: 'Cormorant Garamond', serif; }
        .font-sans-round { font-family: 'Plus Jakarta Sans', sans-serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #F9F6F0; }
        ::-webkit-scrollbar-thumb { background: #EAE5DE; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #D5CFC6; }
      `}</style>

      <header className="w-full pt-8 pb-4 px-6 md:px-12 max-w-6xl mx-auto flex items-center justify-between sticky top-0 bg-[#F9F6F0]/90 backdrop-blur-sm z-50">
        <div className="flex items-center space-x-1 cursor-pointer">
          <span className="font-serif-elegant text-2xl text-[#5A504E]">Olivia</span>
          <SparkleIcon className="w-4 h-4 text-[#9C5A6A] -mt-2" color="#9C5A6A" />
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-[13px] font-medium text-[#7D7371]">
          <a href="#hello" className="hover:text-[#332D2D] transition-colors">{text.nav[0]}</a>
          <a href="#about" className="hover:text-[#332D2D] transition-colors">{text.nav[1]}</a>
          <a href="#work" className="hover:text-[#332D2D] transition-colors">{text.nav[2]}</a>
          <a href="#contact" className="hover:text-[#332D2D] transition-colors">{text.nav[3]}</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-full bg-[#EFEAE2] p-1 border border-[#EAE5DE] text-[11px] font-semibold text-[#7D7371]">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-full transition-all ${language === "en" ? "bg-white text-[#9C5A6A] shadow-sm" : "hover:text-[#332D2D]"}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-1.5 rounded-full transition-all ${language === "zh" ? "bg-white text-[#9C5A6A] shadow-sm" : "hover:text-[#332D2D]"}`}
            >
              中文
            </button>
          </div>
          <a href="mailto:olivia.lqy2020@gmail.com" className="hidden md:inline-flex font-sans-round text-[13px] font-medium px-5 py-2.5 rounded-full bg-[#9C5A6A] text-white hover:bg-[#8A4E5C] transition-all duration-300 shadow-sm">
            {text.sayHello}
          </a>
          <button className="md:hidden text-[#5A504E]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#F9F6F0] pt-24 px-6 flex flex-col space-y-6 text-xl font-serif-elegant">
          <div className="flex items-center gap-2 text-sm font-sans-round">
            <button onClick={() => setLanguage("en")} className={`px-4 py-2 rounded-full border ${language === "en" ? "bg-white text-[#9C5A6A] border-[#EAE5DE]" : "border-[#EAE5DE]"}`}>English</button>
            <button onClick={() => setLanguage("zh")} className={`px-4 py-2 rounded-full border ${language === "zh" ? "bg-white text-[#9C5A6A] border-[#EAE5DE]" : "border-[#EAE5DE]"}`}>中文</button>
          </div>
          <a href="#hello" onClick={() => setIsMobileMenuOpen(false)}>{text.nav[0]}</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{text.nav[1]}</a>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>{text.nav[2]}</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{text.nav[3]}</a>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20 font-sans-round">
        <div id="hello" className="mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="max-w-4xl lg:max-w-3xl">
            <span className={`text-[#9C5A6A] font-bold uppercase mb-6 flex items-center gap-2 ${isZh ? "text-[14px] md:text-[15px] tracking-[0.16em]" : "text-[11px] tracking-[0.2em]"}`}>
              <span className="text-lg">↳</span> {text.heroEyebrow}
            </span>
            <h1 className={`${isZh ? "font-sans-round text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.18] tracking-normal" : "font-serif-elegant text-6xl md:text-8xl font-normal leading-[1.1] tracking-tight"} text-[#332D2D] mb-6`}>
              <span className={isZh ? "whitespace-nowrap" : ""}>{text.heroTitle1}</span><br />
              <span className={`${isZh ? "font-normal" : "italic"} text-[#9C5A6A]`}>{text.heroTitle2}</span>
            </h1>
            <p className="font-serif-elegant italic text-xl md:text-2xl text-[#7D7371] mb-8">{text.heroSubtitle}</p>
            <p className="text-[15px] text-[#5A504E] leading-relaxed max-w-2xl mb-10">{text.heroBody}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              {text.heroTags.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full bg-[#EFEAE2] text-[#5A504E] text-[12px] font-medium border border-[#EAE5DE]">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#work" className="px-6 py-3.5 rounded-full bg-[#332D2D] text-white text-[13px] font-medium hover:bg-[#1A1717] transition-all flex items-center gap-2 shadow-md">{text.cta}</a>
              <a href="#resume" className="px-6 py-3.5 rounded-full bg-white text-[#5A504E] text-[13px] font-medium hover:text-[#9C5A6A] transition-all flex items-center gap-2 shadow-sm border border-[#EAE5DE]"><FileText className="w-4 h-4" /> {text.resumeCta}</a>
            </div>
          </div>
          <div className="w-full max-w-[340px] lg:w-[340px] mx-auto lg:mx-0 lg:mt-6 shrink-0">
            <div className="relative rotate-[1deg] rounded-[32px] border border-[#EAE5DE] bg-white p-3 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-[#F4EBEF]">
                <img
                  src={`${import.meta.env.BASE_URL}olivia-portrait.jpeg`}
                  alt="Olivia Luo by the water in Boston"
                  className="h-full w-full object-cover object-[52%_36%] saturate-[0.92] contrast-[0.96]"
                />
              </div>
              {text.portraitBadge && <div className="absolute -left-3 top-7 rounded-full border border-[#EAE5DE] bg-[#F9F6F0] px-3 py-1.5 text-[11px] font-medium text-[#9C5A6A] shadow-sm">{text.portraitBadge}</div>}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-serif-elegant italic text-[15px] text-[#332D2D]">{text.portraitCaption}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A09596]">{text.portraitCity}</span>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 mb-24">
          <div className="bg-white border border-[#EAE5DE] rounded-[32px] p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="font-serif-elegant text-2xl text-[#332D2D] mb-6 flex items-center gap-2"><span className="text-[#9C5A6A] font-sans text-lg">↳</span> {text.aboutTitle}</h3>
            <p className="text-[14px] text-[#5A504E] leading-[1.8] mb-6">{text.about1}</p>
            <p className="text-[14px] text-[#5A504E] leading-[1.8] mb-8">{text.about2}</p>
            <div className="flex flex-wrap gap-2.5">
              {text.aboutTags.map((tag, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-full bg-[#F9F6F0] text-[#7D7371] text-[11px] font-medium border border-[#EAE5DE]">{tag}</span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#EAE5DE] rounded-[32px] p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="font-serif-elegant text-2xl text-[#332D2D] mb-8 flex items-center gap-2"><span className="text-[#9C5A6A] font-sans text-lg">→</span> {text.currentTitle}</h3>
            <ul className="space-y-6">
              {text.currentItems.map((item, i) => {
                const Icon = currentIcons[i];
                return (
                  <li key={i} className="flex items-start gap-4">
                    <Icon className="w-5 h-5 text-[#7D7371] mt-0.5 shrink-0" />
                    <span className="text-[14px] text-[#5A504E] leading-relaxed">{item}</span>
                  </li>
                );
              })}
            </ul>
            <figure className="mt-7 border-t border-[#EAE5DE] pt-6">
              <img
                src={`${import.meta.env.BASE_URL}cpa-certificate.jpg`}
                alt={text.licenseAlt}
                width={1200}
                height={1033}
                loading="lazy"
                className="block w-full max-w-[360px] mx-auto h-auto rounded-lg"
              />
              <figcaption className="mt-4 flex items-start gap-2.5">
                <BadgeCheck className="w-5 h-5 text-[#9C5A6A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-medium text-[#5A504E]">{text.licenseTitle}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#A09596]">{text.licenseCaption}</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <div id="work" className="mb-12">
          <span className="text-[#9C5A6A] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5" /> {text.workEyebrow}</span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl text-[#332D2D] mb-2 flex items-center gap-3">{text.workTitle}<BriefcaseBusiness className="w-6 h-6 text-[#9C5A6A]" /></h2>
          <p className="font-serif-elegant italic text-lg text-[#7D7371] mb-10">{text.workSubtitle}</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-[#EAE5DE] rounded-[32px] p-6 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-3 lg:space-x-0 lg:space-y-2 pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 border-[#F5F2EC]">
              {Object.keys(experienceData).map((key) => {
                const data = experienceData[key as keyof typeof experienceData];
                const isSelected = activeExp === key;
                return (
                  <div key={key} onMouseEnter={() => setActiveExp(key)} onClick={() => setActiveExp(key)} className={`cursor-pointer text-left p-4 rounded-2xl transition-all duration-300 shrink-0 lg:shrink w-64 lg:w-full border ${isSelected ? "bg-[#FDFBFA] border-[#EAE5DE] shadow-sm transform lg:translate-x-1" : "bg-transparent border-transparent hover:bg-[#F9F6F0]"}`}>
                    <span className={`block text-[11px] uppercase tracking-wider font-semibold ${isSelected ? "text-[#9C5A6A]" : "text-[#A09596]"}`}>{isZh ? data.periodZh : data.period}</span>
                    <span className={`block text-[15px] font-semibold mt-1.5 ${isSelected ? "text-[#332D2D]" : "text-[#7D7371]"}`}>{isZh ? data.companyZh : data.company}</span>
                    <span className="block text-[13px] text-[#A09596] mt-0.5">{isZh ? data.roleZh : data.role}</span>
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-8 bg-[#FDFBFA] border border-[#F5F2EC] rounded-[24px] p-8 min-h-[320px] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-[#F5F2EC] pb-5 mb-6">
                <div>
                  <h4 className="text-xl font-serif-elegant font-medium text-[#332D2D]">{expRole}</h4>
                  <p className="text-[14px] font-medium text-[#9C5A6A] mt-1">{expCompany} <span className="text-[#A09596] font-normal">• {expTeam}</span></p>
                </div>
                <div className="mt-3 sm:mt-0 flex items-center gap-1.5 text-[12px] text-[#A09596] bg-white px-3 py-1.5 rounded-full border border-[#EAE5DE]"><MapPin className="w-3.5 h-3.5 text-[#9C5A6A]" /> {expLocation}</div>
              </div>
              <ul className="space-y-4">
                {expHighlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 transition-opacity duration-300"><CheckCircle2 className="w-4 h-4 text-[#9C5A6A]/80 mt-0.5 shrink-0" /><span className="text-[14px] text-[#5A504E] leading-[1.7]">{bullet}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10 space-y-6">
          <section className="bg-white border border-[#EAE5DE] rounded-[28px] p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#F4EBEF] text-[#9C5A6A] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="w-full">
                <h3 className="font-serif-elegant text-2xl text-[#332D2D] mb-2 flex items-center gap-2">{text.education}<BookOpen className="w-4 h-4 text-[#9C5A6A]" /></h3>
                <p className="text-[12px] text-[#A09596] leading-relaxed mb-5">{text.educationNote}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="rounded-[22px] border border-[#F5F2EC] bg-[#FDFBFA] p-5">
                    <h4 className="text-[14px] font-semibold text-[#332D2D]">{isZh ? "明尼苏达大学卡尔森商学院" : "University of Minnesota - Carlson School of Management"}</h4>
                    <p className="text-[13px] text-[#7D7371] mt-1">{isZh ? "会计学硕士" : "Master of Accountancy"}</p>
                    <span className="inline-flex mt-2 px-3 py-1 rounded-full bg-[#F9F6F0] text-[#7D7371] text-[11px] font-medium border border-[#EAE5DE]">{isZh ? "2018年5月 · 明尼阿波利斯" : "May 2018 · Minneapolis"}</span>
                  </div>
                  <div className="rounded-[22px] border border-[#F5F2EC] bg-[#FDFBFA] p-5">
                    <h4 className="text-[14px] font-semibold text-[#332D2D]">{isZh ? "明尼苏达大学卡尔森商学院" : "University of Minnesota - Carlson School of Management"}</h4>
                    <p className="text-[13px] text-[#7D7371] mt-1">{isZh ? "会计学和金融学学士学位" : "B.S. Business in Accounting & Finance"}</p>
                    <span className="inline-flex mt-2 px-3 py-1 rounded-full bg-[#F9F6F0] text-[#7D7371] text-[11px] font-medium border border-[#EAE5DE]">{isZh ? "2016年12月 · 明尼阿波利斯" : "Dec 2016 · Minneapolis"}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="resume" className="bg-white border border-[#EAE5DE] rounded-[28px] p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-[#9C5A6A]" />
                  <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#9C5A6A]">{text.resumeSectionNote}</span>
                </div>
                <h3 className="font-serif-elegant text-3xl text-[#332D2D] mb-3 flex items-center gap-2">{text.resumeTitle}<FileText className="w-5 h-5 text-[#9C5A6A]" /></h3>
                <p className="text-[13px] text-[#7D7371] leading-relaxed max-w-xl">{text.resumeSubtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={resumePreviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#9C5A6A] text-white text-[12px] font-semibold hover:bg-[#8A4E5C] transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" /> {text.resumePreview}
                </a>
                <a
                  href={resumeUrl}
                  download="Olivia Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F9F6F0] text-[#7D7371] text-[12px] font-semibold border border-[#EAE5DE] hover:text-[#9C5A6A] hover:border-[#D9CCC4] transition-colors"
                >
                  <Download className="w-4 h-4" /> {text.resumeDownload}
                </a>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-4 rounded-[22px] border border-[#F5F2EC] bg-[#FDFBFA] p-5">
                <ul className="space-y-4">
                  {text.resumeBullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px] text-[#5A504E] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#9C5A6A] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={resumePreviewUrl}
                target="_blank"
                rel="noreferrer"
                className="lg:col-span-8 block overflow-hidden rounded-[22px] border border-[#EAE5DE] bg-[#FDFBFA] shadow-inner transition-transform hover:-translate-y-0.5"
                aria-label="Open Qinyan Luo resume PDF"
              >
                <img
                  src={resumePreviewUrl}
                  alt="Qinyan Luo resume preview"
                  className="h-[520px] w-full object-contain bg-white"
                />
              </a>
            </div>
          </section>
        </div>

        <div id="projects" className="mb-24 mt-12">
          <div className="bg-white border border-[#EAE5DE] rounded-[32px] p-6 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="font-serif-elegant text-2xl text-[#332D2D] mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2"><span className="text-[#9C5A6A] font-sans text-lg">→</span> {text.projectsTitle}<FlaskConical className="w-5 h-5 text-[#9C5A6A]" /></div>
              <span className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-[#F4EBEF] text-[#9C5A6A] text-[11px] font-bold uppercase tracking-wider">{text.projectsBadge}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FDFBFA] border border-[#F5F2EC] rounded-[24px] p-8 hover:border-[#EAE5DE] transition-colors group shadow-sm">
                <div className="flex items-center gap-2 mb-4"><span className="px-3 py-1 rounded-full border border-[#EAE5DE] text-[#7D7371] text-[11px] font-medium bg-white">{text.selfTaught}</span><span className="px-3 py-1 rounded-full bg-[#F9F6F0] text-[#5A504E] text-[11px] font-medium flex items-center gap-1 border border-[#EAE5DE]">{text.inProgress} ✦</span></div>
                <h4 className="font-serif-elegant text-2xl text-[#332D2D] mb-3">{text.projectOneTitle}</h4>
                <p className="text-[13px] text-[#5A504E] leading-[1.7] mb-6">{text.projectOneBody}</p>
                <div className="flex flex-wrap gap-2">{text.projectOneTags.map((tag) => <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-[#F5F2EC] text-[#7D7371] text-[11px]">{tag}</span>)}</div>
              </div>
              <div className="bg-[#FDFBFA] border border-[#F5F2EC] rounded-[24px] p-8 hover:border-[#EAE5DE] transition-colors group shadow-sm">
                <div className="flex items-center gap-2 mb-4"><span className="px-3 py-1 rounded-full border border-[#EAE5DE] text-[#7D7371] text-[11px] font-medium bg-white">{text.upskilling}</span><span className="px-3 py-1 rounded-full bg-[#F9F6F0] text-[#5A504E] text-[11px] font-medium flex items-center gap-1 border border-[#EAE5DE]">{text.inProgress} ✦</span></div>
                <h4 className="font-serif-elegant text-2xl text-[#332D2D] mb-3">{text.projectTwoTitle}</h4>
                <p className="text-[13px] text-[#5A504E] leading-[1.7] mb-6">{text.projectTwoBody}</p>
                <div className="flex flex-wrap gap-2">{text.projectTwoTags.map((tag) => <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-[#F5F2EC] text-[#7D7371] text-[11px]">{tag}</span>)}</div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="mb-12">
          <h2 className="font-serif-elegant text-5xl md:text-6xl text-[#332D2D] mb-2 flex items-center gap-3">{text.contactTitle} <SparkleIcon className="w-8 h-8 text-[#332D2D]" /></h2>
          <p className="font-serif-elegant italic text-lg text-[#9C5A6A] mb-10">{text.contactSubtitle}</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-6 bg-white border border-[#EAE5DE] rounded-[32px] p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden">
              <h3 className="font-serif-elegant text-3xl text-[#332D2D] mb-2">{text.contactLead1}</h3>
              <h3 className="font-serif-elegant italic text-3xl text-[#9C5A6A] mb-6">{text.contactLead2}</h3>
              <p className="text-[14px] text-[#5A504E] leading-[1.7] mb-8 max-w-md">{text.contactBody}</p>
              <span className="text-[#9C5A6A] text-[12px] font-serif-elegant italic block mb-4 flex items-center gap-2">{text.dropLine}</span>
              <div className="space-y-3 mb-8">
                <a href="mailto:olivia.lqy2020@gmail.com" className="flex items-center gap-4 p-4 border border-[#F5F2EC] rounded-2xl hover:border-[#EAE5DE] transition-colors group bg-[#FDFBFA]"><div className="w-10 h-10 rounded-xl bg-[#F4EBEF] text-[#9C5A6A] flex items-center justify-center shrink-0"><Mail className="w-4 h-4" /></div><div><span className="block text-[10px] uppercase tracking-wider text-[#A09596] font-semibold mb-0.5">{text.emailLabel}</span><span className="text-[13px] text-[#332D2D] font-medium group-hover:text-[#9C5A6A] transition-colors">olivia.lqy2020@gmail.com</span></div></a>
                <a href="tel:+16513637924" className="flex items-center gap-4 p-4 border border-[#F5F2EC] rounded-2xl hover:border-[#EAE5DE] transition-colors group bg-[#FDFBFA]"><div className="w-10 h-10 rounded-xl bg-[#F9F6F0] text-[#9C5A6A] flex items-center justify-center shrink-0"><Phone className="w-4 h-4" /></div><div><span className="block text-[10px] uppercase tracking-wider text-[#A09596] font-semibold mb-0.5">{text.phoneLabel}</span><span className="text-[13px] text-[#332D2D] font-medium group-hover:text-[#9C5A6A] transition-colors">651-363-7924</span></div></a>
                <a href="https://www.linkedin.com/in/qinyan-luo-olivia" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-[#F5F2EC] rounded-2xl hover:border-[#EAE5DE] transition-colors group bg-[#FDFBFA]"><div className="w-10 h-10 rounded-xl bg-[#F9F6F0] text-[#7D7371] flex items-center justify-center shrink-0"><LinkedinIcon className="w-4 h-4" /></div><div><span className="block text-[10px] uppercase tracking-wider text-[#A09596] font-semibold mb-0.5">LinkedIn</span><span className="text-[13px] text-[#332D2D] font-medium group-hover:text-[#9C5A6A] transition-colors">linkedin.com/in/qinyan-luo-olivia</span></div></a>
                <a href="https://github.com/Olivialqy2020" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-[#F5F2EC] rounded-2xl hover:border-[#EAE5DE] transition-colors group bg-[#FDFBFA]"><div className="w-10 h-10 rounded-xl bg-[#F4EBEF] text-[#7D7371] flex items-center justify-center shrink-0"><GithubIcon className="w-4 h-4" /></div><div><span className="block text-[10px] uppercase tracking-wider text-[#A09596] font-semibold mb-0.5">GitHub</span><span className="text-[13px] text-[#332D2D] font-medium group-hover:text-[#9C5A6A] transition-colors">github.com/Olivialqy2020</span></div></a>
              </div>
              <a href="mailto:olivia.lqy2020@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#9C5A6A] text-white text-[13px] font-medium hover:bg-[#8A4E5C] transition-all shadow-md">{text.sayHello} →</a>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white border border-[#EAE5DE] rounded-[32px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <h3 className="font-serif-elegant text-xl text-[#332D2D] mb-6 flex items-center gap-2"><span className="text-[#9C5A6A] font-sans text-lg">→</span> {text.openTo}</h3>
                <ul className="space-y-4">{text.openItems.map((item, i) => <li key={i} className="flex items-center gap-3 text-[14px] text-[#5A504E]"><SparkleIcon className="w-4 h-4 text-[#9C5A6A]" /> {item}</li>)}</ul>
              </div>
              <div className="bg-white border border-[#EAE5DE] rounded-[32px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-3 mb-3"><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span></span><span className="font-serif-elegant italic text-lg text-[#332D2D]">{text.availability}</span></div>
                <p className="text-[13px] text-[#7D7371] leading-relaxed">{text.availabilityBody}</p>
              </div>
              <div className="bg-white border border-[#EAE5DE] rounded-[32px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden relative">
                <div className="relative h-[230px] sm:h-[250px] rounded-2xl bg-[#F3EEEB] border border-[#E3D9D2] overflow-hidden mb-6">
                  <Suspense fallback={null}>
                    <BostonMap label={isZh ? "波士顿地区地图" : "Boston area map"} />
                  </Suspense>
                  <a
                    href="https://www.openstreetmap.org/#map=13/42.360/-71.065"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute z-10 top-3 left-3 inline-flex items-center gap-2 bg-[#FFFDFC]/95 border border-[#E3D9D2] rounded-lg px-3 py-2 text-[12px] text-[#5A504E] shadow-sm hover:text-[#9C5A6A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9C5A6A]"
                    aria-label={isZh ? "打开波士顿地区地图（新窗口）" : "Open Boston area map in a new tab"}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#9C5A6A]" /><span>Boston area</span><ArrowRight className="w-3.5 h-3.5 text-[#9C5A6A]" />
                  </a>
                </div>
                <div className="relative">
                  <h3 className="font-serif-elegant text-xl text-[#332D2D] mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-[#9C5A6A]" /> {text.bostonTitle}</h3>
                  <p className="text-[13px] text-[#7D7371] leading-relaxed">{text.bostonBody}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-[#EAE5DE] py-8 text-center bg-[#F9F6F0]"><p className="text-[12px] text-[#A09596] font-medium tracking-wide">&copy; {new Date().getFullYear()} Olivia Luo. {text.footer}</p></footer>
    </div>
  );
}
