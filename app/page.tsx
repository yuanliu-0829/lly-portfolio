'use client';

import { useState } from 'react';

type Language = 'zh' | 'en';
type CaseTab = 'scale' | 'conversion' | 'efficiency' | 'reach';

const content = {
  zh: {
    nav: ['关于', '案例', '能力', '联系'],
    role: '数字化营销经理 · 科技与 AI 新媒体运营',
    title: ['用真诚做内容，', '用数据看效果。'],
    intro: '我把复杂的技术讲简单，把内容、用户与增长连接起来。3 年私域增长与内容营销经验，正在向半导体、AI 与具身智能行业持续探索。',
    location: '北京 · 开放新机会',
    cta: '查看我的工作',
    proof: [['360万', '有效私域用户'], ['−60%', '人工咨询量'], ['+430%', '客单价提升']],
    featured: 'FEATURED CASE / 代表案例',
    caseTitle: '从 0 到 1，搭建企微私域增长系统',
    caseLead: '在中国移动北京公司打通 APP、小程序、公众号等 5 大获客入口，搭建覆盖拉新、转化、服务与质检的全链路运营体系。',
    caseLabels: ['用户规模', '转化增长', '运营效率', '项目覆盖'],
    caseNotes: {
      scale: ['有效用户体系', '从 0 搭建全链路企微私域体系', '5 大获客入口 · 30 天留存率 42%'],
      conversion: ['客单价提升 430%', '从 1.5 元增长至 8 元', '精准客群推送转化率达到 5%'],
      efficiency: ['AI 重构服务效率', '人工咨询量下降 60%', '质检覆盖率 15% → 100% · 回复时长 43 → 15 分钟'],
      reach: ['大型项目统筹', '校园迎新覆盖 90 所高校', '触达 16 万新生 · 年均线上销量 1.3 万张'],
    },
    workEyebrow: 'SELECTED WORK / 作品精选',
    workTitle: '我如何把策略变成结果',
    projects: [
      ['企微私域增长系统', '用户增长 · AI 运营', '360 万有效客户、42% 留存率与全链路服务体系。'],
      ['让复杂技术被看见', '科技内容 · 视频叙事', '从特斯拉车主故事到世界机器人大会，把技术现场转化为大众内容。'],
      ['从公域声量到私域转化', '整合营销 · KOL', '联动 20 位校园 KOL，获得 36 万+转评赞，精准获客 5000+。'],
    ],
    abilitiesEyebrow: 'CAPABILITIES / 核心能力',
    abilitiesTitle: '内容是入口，增长是结果',
    abilities: [
      ['科技内容策划', '把复杂功能与行业概念翻译成清晰、有传播力的内容。'],
      ['私域体系搭建', '从获客入口到留存、转化与服务的完整运营闭环。'],
      ['AI 运营实战', '把智能回复、质检与内容工作流嵌入实际业务。'],
      ['短视频全链路', '独立完成策划、脚本、拍摄、剪辑与封面设计。'],
      ['数据复盘增长', '围绕转化、客单价与获客成本持续优化策略。'],
      ['KOL 整合传播', '连接公域声量与私域沉淀，统筹传播矩阵。'],
      ['跨部门项目统筹', '协调产品、销售、物料、物流与客服完成复杂项目。'],
      ['英文内容能力', '英语专业八级，可支持海外行业研究与内容运营。'],
    ],
    aboutEyebrow: 'ABOUT CILA / 关于我',
    aboutTitle: '好的技术，值得被更多人看见。',
    aboutBody: ['你好，我是刘力源（Cila），一名数字化营销经理。过去 3 年，我在中国移动北京公司从 0 到 1 搭建企微私域体系，也曾在特斯拉运营百万级社交媒体矩阵、在字节跳动飞书服务 KA 客户。', '我每天关注 AI 与具身智能，也持续学习如何把新技术讲得更准确、更有吸引力。不要自我设限，永远学习，保持好奇心。'],
    socialTitle: '工作之外，我也在记录生活与科技现场。',
    socialStats: ['428 关注者', '5.3 万获赞与收藏'],
    resume: '下载完整个人简历',
    resumeNote: '教育经历、完整工作经历与技能详情 · PDF · 1 页',
    contactLabel: 'LET’S TALK / 联系我',
    contactTitle: '正在寻找科技与 AI 领域的新媒体运营机会，期待加入一个认真做产品、也认真理解用户的团队。',
    email: '发送邮件',
  },
  en: {
    nav: ['About', 'Cases', 'Skills', 'Contact'],
    role: 'Digital Marketing Manager · Tech & AI Content',
    title: ['Content with sincerity.', 'Growth with evidence.'],
    intro: 'I translate complex technology into stories people understand, connecting content, audiences and measurable growth. Three years in private-domain growth and content marketing, now exploring semiconductors, AI and embodied intelligence.',
    location: 'Beijing · Open to opportunities',
    cta: 'Explore my work',
    proof: [['3.6M', 'private-domain users'], ['−60%', 'manual inquiries'], ['+430%', 'average order value']],
    featured: 'FEATURED CASE',
    caseTitle: 'Building a WeCom growth system from zero to one',
    caseLead: 'At China Mobile Beijing, I connected five acquisition channels and built an end-to-end operating system spanning acquisition, conversion, service and quality assurance.',
    caseLabels: ['User scale', 'Conversion', 'Efficiency', 'Reach'],
    caseNotes: {
      scale: ['3.6M valid users', 'An end-to-end WeCom system built from zero', '5 acquisition channels · 42% 30-day retention'],
      conversion: ['Average order value +430%', 'From RMB 1.5 to RMB 8', '5% conversion on targeted audience pushes'],
      efficiency: ['AI-powered service operations', '60% fewer manual inquiries', 'QA coverage 15% → 100% · Reply time 43 → 15 min'],
      reach: ['Large-scale program delivery', 'Orientation program across 90 universities', '160K students reached · 13K annual online sales'],
    },
    workEyebrow: 'SELECTED WORK',
    workTitle: 'Turning strategy into outcomes',
    projects: [
      ['WeCom growth system', 'User growth · AI operations', '3.6M valid users, 42% retention and an end-to-end service system.'],
      ['Making complex tech visible', 'Tech content · Video storytelling', 'From Tesla owner stories to the World Robot Conference, turning technical scenes into human stories.'],
      ['From public reach to private conversion', 'Integrated marketing · KOL', 'A 20-KOL campus network generated 360K+ engagements and 5,000+ qualified users.'],
    ],
    abilitiesEyebrow: 'CAPABILITIES',
    abilitiesTitle: 'Content is the entry. Growth is the outcome.',
    abilities: [
      ['Tech content strategy', 'Translate complex products and concepts into clear, engaging stories.'],
      ['Private-domain systems', 'Build complete loops from acquisition to retention, conversion and service.'],
      ['Applied AI operations', 'Embed AI replies, quality assurance and content workflows into real operations.'],
      ['End-to-end video', 'Own planning, scripts, filming, editing and cover design.'],
      ['Data-led optimization', 'Improve strategy through conversion, AOV and acquisition-cost evidence.'],
      ['KOL campaigns', 'Connect public reach with private conversion through creator networks.'],
      ['Cross-functional delivery', 'Coordinate product, sales, creative, logistics and service teams.'],
      ['English content', 'TEM-8 certified; ready for global research and content operations.'],
    ],
    aboutEyebrow: 'ABOUT CILA',
    aboutTitle: 'Good technology deserves to be seen.',
    aboutBody: ['Hi, I’m Liu Liyuan (Cila), a digital marketing manager. Over the past three years, I built China Mobile Beijing’s WeCom ecosystem from scratch. Before that, I ran million-scale social channels at Tesla and supported key accounts at ByteDance Feishu.', 'I follow AI and embodied intelligence every day, always learning how to explain emerging technology with more accuracy and appeal. Stay curious, keep learning, and never self-limit.'],
    socialTitle: 'Outside work, I document life and technology in the field.',
    socialStats: ['428 followers', '53K likes & saves'],
    resume: 'Download full résumé',
    resumeNote: 'Education, full experience and skills · PDF · 1 page',
    contactLabel: 'LET’S TALK',
    contactTitle: 'I’m exploring content and social media opportunities in tech and AI, and looking for a team that cares equally about its product and its users.',
    email: 'Send an email',
  },
};

const tabKeys: CaseTab[] = ['scale', 'conversion', 'efficiency', 'reach'];
const projectImages = ['/profile-assets/wecom-growth.png', '/profile-assets/robot-story.png', '/profile-assets/content-network.png'];

function CaseVisual({ tab, lang }: { tab: CaseTab; lang: Language }) {
  if (tab === 'scale') return (
    <div className="scale-visual visual-panel">
      <div className="orbit" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <strong>{lang === 'zh' ? '360万' : '3.6M'}</strong><span>{lang === 'zh' ? '有效用户' : 'valid users'}</span>
      <p>{lang === 'zh' ? 'APP · 小程序 · 公众号 · 线下 · 活动' : 'APP · MINI APP · WECHAT · OFFLINE · CAMPAIGNS'}</p>
    </div>
  );
  if (tab === 'conversion') return (
    <div className="comparison-visual visual-panel">
      <div className="compare-row"><span>{lang === 'zh' ? '优化前' : 'BEFORE'}</span><i style={{ width: '18.75%' }} /><b>¥1.5</b></div>
      <div className="compare-row active"><span>{lang === 'zh' ? '优化后' : 'AFTER'}</span><i style={{ width: '100%' }} /><b>¥8</b></div>
      <div className="delta-pill">+430% AOV</div>
    </div>
  );
  if (tab === 'efficiency') return (
    <div className="efficiency-visual visual-panel">
      <div className="ring-chart"><strong>−60%</strong><span>{lang === 'zh' ? '人工咨询' : 'manual inquiries'}</span></div>
      <div className="efficiency-bars">
        <p><span>{lang === 'zh' ? '质检覆盖' : 'QA COVERAGE'}</span><b>15% → 100%</b></p>
        <p><span>{lang === 'zh' ? '回复时长' : 'REPLY TIME'}</span><b>43 → 15 min</b></p>
      </div>
    </div>
  );
  return (
    <div className="reach-visual visual-panel">
      {[['90', lang === 'zh' ? '所高校' : 'universities'], ['16万', lang === 'zh' ? '新生' : 'students'], ['1.3万', lang === 'zh' ? '年均销量' : 'annual sales']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>('zh');
  const [activeTab, setActiveTab] = useState<CaseTab>('scale');
  const t = content[lang];
  const note = t.caseNotes[activeTab];

  return (
    <main>
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Cila home">CILA<span>·</span></a>
        <nav aria-label="Primary navigation">{t.nav.map((item, index) => <a href={['#about', '#work', '#skills', '#contact'][index]} key={item}>{item}</a>)}</nav>
        <button className="lang-toggle" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} aria-label="切换中英文"><strong>{lang === 'zh' ? '中' : 'EN'}</strong><span>/</span>{lang === 'zh' ? 'EN' : '中'}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="role"><span />{t.role}</p>
          <h1>{t.title[0]}<br /><em>{t.title[1]}</em></h1>
          <p className="intro">{t.intro}</p>
          <div className="hero-actions"><a className="primary-button" href="#work">{t.cta}<span>↘</span></a><span className="availability">● {t.location}</span></div>
        </div>
        <figure className="portrait-wrap"><img src="/profile-assets/cila-portrait.jpg" alt="刘力源 Cila 的个人肖像" /><figcaption><span>01</span> CILA / LIU LIYUAN<br />DIGITAL MARKETING</figcaption></figure>
        <div className="signal-line" aria-hidden="true"><span>CONTENT</span><i /><span>DATA</span><i /><span>GROWTH</span></div>
      </section>

      <section className="proof-strip" aria-label="关键成果">{t.proof.map(([value, label]) => <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="case-study" id="work">
        <div className="section-intro"><p>{t.featured}</p><h2>{t.caseTitle}</h2><span>{t.caseLead}</span></div>
        <div className="case-image"><img src="/profile-assets/wecom-growth.png" alt="抽象呈现企微私域网络的蓝色透明装置" /><span>CASE 01 · WECOM GROWTH SYSTEM</span></div>
        <div className="case-dashboard" id="case-study">
          <div className="tablist" role="tablist" aria-label="案例数据维度">{tabKeys.map((key, index) => <button role="tab" aria-selected={activeTab === key} className={activeTab === key ? 'active' : ''} onClick={() => setActiveTab(key)} key={key}><span>0{index + 1}</span>{t.caseLabels[index]}</button>)}</div>
          <div className="dashboard-body">
            <div className="dashboard-note"><span>DATA VIEW / 0{tabKeys.indexOf(activeTab) + 1}</span><h3>{note[0]}</h3><strong>{note[1]}</strong><p>{note[2]}</p></div>
            <CaseVisual tab={activeTab} lang={lang} />
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="project-heading"><p>{t.workEyebrow}</p><h2>{t.workTitle}</h2></div>
        <div className="projects-grid">{t.projects.map((project, index) => <article className="project-card" key={project[0]}><div className="project-image"><img src={projectImages[index]} alt="" /><span>0{index + 1}</span></div><p>{project[1]}</p><h3>{project[0]}</h3><div className="project-foot"><p>{project[2]}</p><i>↗</i></div></article>)}</div>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-heading"><p>{t.abilitiesEyebrow}</p><h2>{t.abilitiesTitle}</h2></div>
        <div className="skills-list">{t.abilities.map(([title, description], index) => <details key={title} open={index === 0}><summary><span>0{index + 1}</span><strong>{title}</strong><i>+</i></summary><p>{description}</p></details>)}</div>
      </section>

      <section className="about-section" id="about">
        <div className="about-portrait"><img src="/profile-assets/cila-portrait.jpg" alt="Cila" /><div className="portrait-crop" aria-hidden="true" /></div>
        <div className="about-copy"><p>{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2>{t.aboutBody.map(paragraph => <span key={paragraph}>{paragraph}</span>)}</div>
      </section>

      <section className="social-section">
        <div className="social-copy"><p>XIAOHONGSHU / @源饱饱Cila</p><h2>{t.socialTitle}</h2><div>{t.socialStats.map(stat => <span key={stat}>{stat}</span>)}</div></div>
        <div className="social-aside">
          <div className="qr-card"><img src="/profile-assets/xiaohongshu-qr.jpg" alt="小红书账号源饱饱 Cila 的二维码" /><span>SCAN TO FOLLOW ↗</span></div>
          <a className="resume-card" href="/profile-assets/cila-resume.pdf" download>
            <div className="resume-preview"><img src="/profile-assets/resume-preview.jpg" alt="个人简历首页预览" /></div>
            <div className="resume-meta"><span>RÉSUMÉ / PDF</span><strong>{t.resume}</strong><p>{t.resumeNote}</p></div>
            <i aria-hidden="true">↓</i>
          </a>
        </div>
      </section>

      <footer id="contact"><p>{t.contactLabel}</p><h2>{t.contactTitle}</h2><a href="mailto:lly156156186292022@163.com"><span>{t.email}</span>lly156156186292022@163.com ↗</a><div><span>© 2026 CILA LIU</span><span>BEIJING · CHINA</span><span>STAY CURIOUS</span></div></footer>
    </main>
  );
}
