import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  Code,
  Database,
  Heart,
  BookOpen,
  Globe2,
  Menu,
  X,
  FileText,
  Download,
} from "lucide-react";

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
        "I build financial frameworks that drive strategic business decisions. Currently transitioning 5+ years of complex audit and valuation experience into corporate finance, while building practical data and AI literacy through focused coursework.",
      heroTags: ["Corporate Finance", "CPA Exams Passed", "I/ENFP-T", "Data Enthusiast", "Espresso Lover ☕", "Python Learner ✦"],
      portraitBadge: "Boston light ✦",
      portraitCaption: "finance + data explorer",
      portraitCity: "Boston",
      cta: "See what I've done →",
      resumeCta: "Preview resume",
      resumeTitle: "Resume Snapshot",
      resumeSubtitle: "A polished PDF version of my 2026 resume is available here for quick review or download.",
      resumePreview: "Open PDF",
      resumeDownload: "Download PDF",
      resumeBullets: ["5+ years across audit, valuation, and financial instruments", "CPA exams passed, with corporate accounting and FP&A interests", "Boston-based, open to hybrid and remote conversations"],
      aboutTitle: "A bit about me",
      about1:
        "I'm a classically trained auditor — highly structured when the work calls for it, but curious and people-oriented in how I learn and collaborate. With 5+ years navigating complex financial instruments (ASC 815/820), I thrive on untangling messy data into clear narratives.",
      about2:
        "When I'm not reperforming NAV calculations or validating valuations, I'm learning Python and data tools step by step, watching cooking videos at midnight, or hunting for the perfect micro-batch espresso in Boston.",
      aboutTags: ["I/ENFP-T ✦", "Bilingual (ZH/EN)", "Data Modeling 📊", "Cooking 🍳"],
      currentTitle: "Currently into",
      currentItems: [
        "Passed the CPA exams and currently waiting for the State Board update.",
        "Learning the foundations of data through Google’s Coursera course “Foundations: Data, Data, Everywhere” and Anthropic Academy’s Claude 101, with a focus on building practical fluency step by step.",
        "Deep diving into Corporate FP&A best practices and strategic valuation.",
        "Obsessing over new recipes & cooking technique videos.",
        "Planning to explore hiking routes starting from the New England area.",
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
      heroTitle1: "财务框架搭建者。",
      heroTitle2: "数据探索者。",
      heroSubtitle: "→ 在审计的严谨性和数据分析的前瞻性之间寻找平衡",
      heroBody:
        "我擅长把复杂的财务信息梳理成能支持业务决策的分析框架。现在希望把 5 年多的复杂审计与估值经验延展到企业会计、FP&A 和财务分析方向，同时继续补足数据与 AI 工具的实践能力。",
      heroTags: ["企业财务", "CPA 考试已通过", "I/ENFP-T", "数据爱好者", "咖啡爱好者 ☕", "Python 学习中 ✦"],
      portraitBadge: "Boston 的光 ✦",
      portraitCaption: "财务 + 数据探索者",
      portraitCity: "Boston",
      cta: "查看我的经历 →",
      resumeCta: "预览简历",
      resumeTitle: "简历速览",
      resumeSubtitle: "这里放的是 2026 版 PDF 简历，可以直接在线预览，也可以下载保存。",
      resumePreview: "打开 PDF",
      resumeDownload: "下载 PDF",
      resumeBullets: ["5 年以上审计、估值和复杂金融工具相关经验", "已通过 CPA 考试，重点关注企业会计、FP&A 和财务分析方向", "目前在 Boston，欢迎远程或 hybrid 机会交流"],
      aboutTitle: "关于我",
      about1:
        "我接受过扎实的审计训练，做事注重结构和细节；同时也很享受和人协作、一起把问题想清楚的过程。过去 5 年多，我主要接触复杂金融工具（ASC 815/820）、估值和投资组合相关审计，喜欢把杂乱的信息整理成清楚、有判断依据的财务叙事。",
      about2:
        "工作之外，我在一步步学习 Python 和数据工具；也会半夜看做饭视频，或者在 Boston 寻找好喝的 espresso。",
      aboutTags: ["I/ENFP-T ✦", "中英双语", "数据建模 📊", "做饭 🍳"],
      currentTitle: "最近在关注",
      currentItems: [
        "已通过 CPA 考试，目前在等待 State Board 的更新。",
        "正在学习 Google Coursera 的 “Foundations: Data, Data, Everywhere” 和 Anthropic Academy 的 Claude 101，想用更系统的方式补足数据与 AI 工具的实操基础。",
        "持续了解 Corporate FP&A 的工作方式、预算预测逻辑和战略估值场景。",
        "研究新的食谱和烹饪技巧视频。",
        "计划从 New England 开始慢慢探索适合周末的徒步路线。",
      ],
      education: "教育背景",
      educationNote: "作为基础信息简要呈现，页面重点仍放在工作经历上。",
      resumeSectionNote: "给招聘方和 hiring manager 快速浏览用。",
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
      openItems: ["企业会计相关岗位", "基金会计 / Treasury 相关岗位", "FP&A 会计分析相关岗位"],
      availability: "正在开放新机会",
      availabilityBody:
        "正在积极关注企业会计、基金会计、Treasury 和 FP&A 相关机会。地点灵活，Boston 地区优先。",
      bostonTitle: "目前在 Boston",
      bostonBody: "现在主要在 Boston 地区，也很愿意了解 hybrid 或远程机会。欢迎聊财务、数据，也欢迎轻松约一杯咖啡。",
      footer: "Designed with warmth ✦ All rights reserved.",
    },
  }[language];

  const experienceData = {
    "ey-t3": {
      company: "Ernst & Young",
      team: "T3 - Financial Instruments Team",
      role: "Audit Senior",
      period: "Oct 2024 - Mar 2026",
      teamZh: "T3 - 金融工具团队",
      roleZh: "审计高级",
      periodZh: "2024年10月 - 2026年3月",
      location: "Boston, MA",
      highlights: [
        "Specialized in auditing complex financial instruments, pension portfolios, and derivatives under ASC 815 (Derivatives & Hedging).",
        "Evaluated internal risk management frameworks and internal controls, identifying design gaps and ensuring regulatory compliance.",
        "Provided advanced assurance and analytical insights for commercial banking, insurance, and high-growth technology clients.",
        "Streamlined audit tracking and budget metrics, enhancing execution transparency and resource efficiency.",
      ],
      highlightsZh: [
        "专注于复杂金融工具、养老金投资组合和衍生品相关审计，覆盖 ASC 815（Derivatives & Hedging）等准则要求。",
        "评估客户的风险管理框架和内部控制，识别控制设计缺口，并关注合规要求是否得到落实。",
        "为商业银行、保险和高成长科技客户提供审计支持与分析洞察。",
        "优化审计进度和预算跟踪方式，提高执行过程的透明度和资源使用效率。",
      ],
    },
    "ey-wam": {
      company: "Ernst & Young",
      team: "FSO - Wealth & Asset Management",
      role: "Audit Senior",
      period: "May 2022 - Oct 2024",
      teamZh: "FSO - 财富与资产管理",
      roleZh: "审计高级",
      periodZh: "2022年5月 - 2024年10月",
      location: "Boston, MA",
      highlights: [
        "Supervised and executed complete audit workflows for high-capital mutual funds and asset management portfolios.",
        "Reperformed and analyzed NAV calculations, with rigorous reconciliations of cash, positions, and complex market values.",
        "Identified and mitigated financial risks by designing substantive audit programs for high-exposure accounts.",
        "Cultivated exceptional client relationships, balancing strict audit rigor with responsive service delivery.",
      ],
      highlightsZh: [
        "负责并推进高资本规模共同基金和资产管理组合的完整审计流程。",
        "复核并分析 NAV 计算，重点核对现金、持仓和复杂市场价值。",
        "围绕高风险账户设计实质性审计程序，识别并应对潜在财务风险。",
        "维护高质量客户沟通，在审计严谨性和响应效率之间保持平衡。",
      ],
    },
    "malone-bailey": {
      company: "Malone Bailey, LLP",
      team: "Audit Practice",
      role: "Audit Associate",
      period: "July 2021 - Apr 2022",
      teamZh: "审计业务",
      roleZh: "审计助理",
      periodZh: "2021年7月 - 2022年4月",
      location: "Houston, TX",
      highlights: [
        "Conducted substantive audit testing and interim reviews of balance sheets, revenue cycles, and transactional integrity.",
        "Executed core field assignments aligned strictly with professional auditing standards, milestones, and firm methodologies.",
        "Synthesized technical workpapers to resolve accounting discrepancies, presenting analytical updates to directors.",
      ],
      highlightsZh: [
        "参与资产负债表、收入循环和交易完整性的实质性测试与期中复核。",
        "按照审计准则、项目节点和事务所方法论完成核心现场工作。",
        "整理技术性底稿并分析会计差异，向项目负责人汇报关键发现。",
      ],
    },
    "jackson-hewitt": {
      company: "Jackson Hewitt Accounting",
      team: "Liu Inc.",
      role: "Senior Accountant",
      period: "Oct 2018 - June 2021",
      teamZh: "Liu Inc.",
      roleZh: "高级会计",
      periodZh: "2018年10月 - 2021年6月",
      location: "Plymouth, MN",
      highlights: [
        "Managed daily general ledger accounting, periodic closings, complex bank reconciliations, and GAAP statement preparation.",
        "Conducted deep-dive financial analyses and researched specific tax treatments for early-stage startups and investment entities.",
        "Designed and implemented process improvements to automate general ledger flows, saving significant close-cycle hours.",
      ],
      highlightsZh: [
        "负责日常总账会计、周期性关账、银行调节和 GAAP 财务报表准备。",
        "开展财务分析，并为初创企业和投资主体研究特定税务处理。",
        "设计并落地流程改进，自动化部分总账处理，减少关账周期中的重复性工作。",
      ],
    },
  };

  const currentIcons = [BookOpen, Code, Database, Heart, Globe2];
  const activeExperience = experienceData[activeExp as keyof typeof experienceData];
  const expRole = isZh ? activeExperience.roleZh : activeExperience.role;
  const expTeam = isZh ? activeExperience.teamZh : activeExperience.team;
  const expHighlights = isZh ? activeExperience.highlightsZh : activeExperience.highlights;
  const resumeUrl = `${import.meta.env.BASE_URL}qinyan-luo-resume-2026-06-30.pdf`;

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
            <span className="text-[#9C5A6A] text-[11px] font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="text-lg">↳</span> {text.heroEyebrow}
            </span>
            <h1 className="font-serif-elegant text-6xl md:text-8xl font-normal leading-[1.1] text-[#332D2D] mb-6 tracking-tight">
              {text.heroTitle1}<br />
              <span className="text-[#9C5A6A] italic">{text.heroTitle2}</span>
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
              <div className="absolute -left-3 top-7 rounded-full border border-[#EAE5DE] bg-[#F9F6F0] px-3 py-1.5 text-[11px] font-medium text-[#9C5A6A] shadow-sm">{text.portraitBadge}</div>
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-serif-elegant italic text-[15px] text-[#332D2D]">{text.portraitCaption}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A09596]">{text.portraitCity}</span>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
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
          </div>
        </div>

        <div id="work" className="mb-12">
          <span className="text-[#9C5A6A] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5" /> {text.workEyebrow}</span>
          <h2 className="font-serif-elegant text-4xl md:text-5xl text-[#332D2D] mb-2">{text.workTitle}</h2>
          <p className="font-serif-elegant italic text-lg text-[#7D7371] mb-10">{text.workSubtitle}</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-[#EAE5DE] rounded-[32px] p-6 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible space-x-3 lg:space-x-0 lg:space-y-2 pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 border-[#F5F2EC]">
              {Object.keys(experienceData).map((key) => {
                const data = experienceData[key as keyof typeof experienceData];
                const isSelected = activeExp === key;
                return (
                  <div key={key} onMouseEnter={() => setActiveExp(key)} onClick={() => setActiveExp(key)} className={`cursor-pointer text-left p-4 rounded-2xl transition-all duration-300 shrink-0 lg:shrink w-64 lg:w-full border ${isSelected ? "bg-[#FDFBFA] border-[#EAE5DE] shadow-sm transform lg:translate-x-1" : "bg-transparent border-transparent hover:bg-[#F9F6F0]"}`}>
                    <span className={`block text-[11px] uppercase tracking-wider font-semibold ${isSelected ? "text-[#9C5A6A]" : "text-[#A09596]"}`}>{isZh ? data.periodZh : data.period}</span>
                    <span className={`block text-[15px] font-semibold mt-1.5 ${isSelected ? "text-[#332D2D]" : "text-[#7D7371]"}`}>{data.company}</span>
                    <span className="block text-[13px] text-[#A09596] mt-0.5">{isZh ? data.roleZh : data.role}</span>
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-8 bg-[#FDFBFA] border border-[#F5F2EC] rounded-[24px] p-8 min-h-[320px] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-[#F5F2EC] pb-5 mb-6">
                <div>
                  <h4 className="text-xl font-serif-elegant font-medium text-[#332D2D]">{expRole}</h4>
                  <p className="text-[14px] font-medium text-[#9C5A6A] mt-1">{activeExperience.company} <span className="text-[#A09596] font-normal">• {expTeam}</span></p>
                </div>
                <div className="mt-3 sm:mt-0 flex items-center gap-1.5 text-[12px] text-[#A09596] bg-white px-3 py-1.5 rounded-full border border-[#EAE5DE]"><MapPin className="w-3.5 h-3.5 text-[#9C5A6A]" /> {activeExperience.location}</div>
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
                <h3 className="font-serif-elegant text-2xl text-[#332D2D] mb-2">{text.education}</h3>
                <p className="text-[12px] text-[#A09596] leading-relaxed mb-5">{text.educationNote}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="rounded-[22px] border border-[#F5F2EC] bg-[#FDFBFA] p-5">
                    <h4 className="text-[14px] font-semibold text-[#332D2D]">University of Minnesota - Carlson School of Management</h4>
                    <p className="text-[13px] text-[#7D7371] mt-1">Master of Accountancy</p>
                    <span className="inline-flex mt-2 px-3 py-1 rounded-full bg-[#F9F6F0] text-[#7D7371] text-[11px] font-medium border border-[#EAE5DE]">May 2018 · Minneapolis</span>
                  </div>
                  <div className="rounded-[22px] border border-[#F5F2EC] bg-[#FDFBFA] p-5">
                    <h4 className="text-[14px] font-semibold text-[#332D2D]">University of Minnesota</h4>
                    <p className="text-[13px] text-[#7D7371] mt-1">B.S. Business in Accounting & Finance</p>
                    <span className="inline-flex mt-2 px-3 py-1 rounded-full bg-[#F9F6F0] text-[#7D7371] text-[11px] font-medium border border-[#EAE5DE]">Dec 2016 · Minneapolis</span>
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
                <h3 className="font-serif-elegant text-3xl text-[#332D2D] mb-3">{text.resumeTitle}</h3>
                <p className="text-[13px] text-[#7D7371] leading-relaxed max-w-xl">{text.resumeSubtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#9C5A6A] text-white text-[12px] font-semibold hover:bg-[#8A4E5C] transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" /> {text.resumePreview}
                </a>
                <a
                  href={resumeUrl}
                  download
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
              <div className="lg:col-span-8 overflow-hidden rounded-[22px] border border-[#EAE5DE] bg-[#FDFBFA] shadow-inner">
                <iframe
                  src={`${resumeUrl}#toolbar=0&navpanes=0`}
                  title="Qinyan Luo Resume PDF preview"
                  className="h-[520px] w-full bg-white"
                />
              </div>
            </div>
          </section>
        </div>

        <div id="projects" className="mb-24 mt-12">
          <div className="bg-white border border-[#EAE5DE] rounded-[32px] p-6 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="font-serif-elegant text-2xl text-[#332D2D] mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2"><span className="text-[#9C5A6A] font-sans text-lg">→</span> {text.projectsTitle}</div>
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
                <a href="https://linkedin.com/in/qinyan-luo" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-[#F5F2EC] rounded-2xl hover:border-[#EAE5DE] transition-colors group bg-[#FDFBFA]"><div className="w-10 h-10 rounded-xl bg-[#F9F6F0] text-[#7D7371] flex items-center justify-center shrink-0"><LinkedinIcon className="w-4 h-4" /></div><div><span className="block text-[10px] uppercase tracking-wider text-[#A09596] font-semibold mb-0.5">LinkedIn</span><span className="text-[13px] text-[#332D2D] font-medium group-hover:text-[#9C5A6A] transition-colors">linkedin.com/in/qinyan-luo</span></div></a>
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
                <div className="absolute inset-x-8 top-8 h-28 rounded-[24px] bg-[#F7EFEC] border border-[#E3D9D2] overflow-hidden">
                  <div className="absolute -left-8 top-12 h-8 w-72 rotate-[-9deg] rounded-full bg-[#C9DDDC]" />
                  <div className="absolute right-[-20px] top-0 h-24 w-24 rounded-full bg-[#D8E7E4]" />
                  <div className="absolute left-5 top-4 h-20 w-24 rounded-xl bg-[#DDEAE6]" />
                  <div className="absolute left-36 top-3 h-16 w-24 rounded-xl bg-[#DDEAE6]" />
                  <div className="absolute right-8 bottom-4 h-14 w-24 rounded-xl bg-[#DDEAE6]" />
                  <div className="absolute left-0 top-11 h-2 w-full rotate-[-10deg] bg-[#FFF9F3]" />
                  <div className="absolute left-16 top-0 h-32 w-2 rotate-[10deg] bg-[#FFF9F3]" />
                  <div className="absolute left-32 top-0 h-32 w-2 rotate-[-3deg] bg-[#FFF9F3]" />
                  <div className="absolute left-0 top-20 h-2 w-full rotate-[5deg] bg-[#FFF9F3]" />
                  <div className="absolute right-20 top-0 h-32 w-2 rotate-[15deg] bg-[#FFF9F3]" />
                  <span className="absolute left-12 top-8 h-3 w-3 rounded-full bg-[#9C5A6A] shadow-[0_0_0_6px_rgba(156,90,106,0.16)]" />
                  <span className="absolute left-8 top-8 text-[12px] text-[#8B6D71]">⌂</span>
                  <span className="absolute left-24 top-[72px] text-[11px] text-[#9C5A6A]">☕</span>
                  <span className="absolute right-24 top-8 text-[12px] text-[#8B6D71]">▣</span>
                  <span className="absolute right-14 bottom-8 text-[11px] text-[#9C5A6A]">✦</span>
                  <span className="absolute left-40 bottom-7 text-[10px] text-[#8B6D71]">♡</span>
                  <span className="absolute left-5 bottom-4 text-[10px] font-semibold uppercase tracking-wider text-[#7F7272]">Cambridge</span>
                  <span className="absolute left-32 top-[52px] text-[10px] font-semibold uppercase tracking-wider text-[#7F7272]">Charles</span>
                  <span className="absolute right-8 top-5 text-[10px] font-semibold uppercase tracking-wider text-[#7F7272]">Seaport</span>
                  <span className="absolute right-10 bottom-4 text-[10px] font-semibold uppercase tracking-wider text-[#7F7272]">Back Bay</span>
                </div>
                <div className="relative pt-36">
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
