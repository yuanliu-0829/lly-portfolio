'use client';

import { useEffect, useState } from 'react';

type Language = 'zh' | 'en';
type CaseTab = 'scale' | 'conversion' | 'efficiency' | 'reach';

const content = {
  zh: {
    nav: ['关于我', '案例', '作品', '能力', '联系'],
    role: '数字化营销经理 · 科技与 AI 新媒体运营',
    title: ['用真诚做内容，', '用数据看效果。'],
    intro: '我把复杂的技术讲简单，把内容、用户与增长连接起来。3 年私域增长与内容营销经验，正在向半导体、AI 与具身智能行业持续探索。',
    location: '北京 · 寻找新机会',
    cta: '了解我的工作经历',
    proof: [['360万', '有效私域用户'], ['−60%', '人工咨询量'], ['+430%', '客单价提升']],
    featured: 'FEATURED CASE / 代表案例',
    caseTitle: '从 0 到 1，搭建企微私域增长系统',
    caseLead: '在中国移动北京公司打通 APP、小程序、公众号等 5 大获客入口，搭建覆盖拉新、转化、服务与质检的全链路运营体系。',
    caseLabels: ['用户规模', '转化增长', 'AI 运营', '大型项目'],
    caseNotes: {
      scale: ['有效用户体系', '从 0 搭建全链路企微私域体系', '5 大获客入口 · 最高 30 天留存率 62%'],
      conversion: ['把流量转成业务结果', '客单价从 1.5 元增长至 8 元', '精准推送、活动运营与成本控制共同驱动转化'],
      efficiency: ['AI 重构服务效率', '从自动应答到会话质检的运营闭环', '减少重复咨询，同时提高服务覆盖与执行质量'],
      reach: ['动感地带演唱会企微宣发', '统筹从活动传播到企业微信获客的完整链路', '负责裂变机制、内容触达、企微承接与成本复盘'],
    },
    workEyebrow: 'SELECTED WORK / 作品精选',
    workTitle: '我如何把策略变成结果',
    projects: [
      ['把增长做成系统，而不是一次活动', 'METHOD 01 / 增长系统化', '先统一有效用户口径，再打通入口、标签、触达、服务和复盘，让每次增长动作都能进入同一套运营闭环。', '入口盘点 → 用户分层 → 触达脚本 → 服务承接 → 数据复盘'],
      ['把复杂技术翻译成用户愿意理解的内容', 'METHOD 02 / 技术内容翻译', '先理解产品机制和技术事实，再寻找用户问题与人物故事；同一信息根据公众号、短视频和海外内容重新组织表达。', '技术拆解 → 用户洞察 → 叙事切口 → 渠道适配 → 内容复盘'],
      ['用节奏与接口，推动复杂项目落地', 'METHOD 03 / 项目交付', '把目标拆成关键节点、责任人与交付物，用风险清单和固定复盘节奏串联政策、页面、内容、物流、客服与传播资源。', '目标拆解 → 责任对齐 → 节点管理 → 风险预案 → 结果复盘'],
    ],
    abilitiesEyebrow: 'CAPABILITIES / 核心能力',
    abilitiesTitle: '内容是入口，增长是结果',
    writingEyebrow: 'PUBLISHED WORK / 内容作品',
    writingTitle: '既能讲清技术，也能讲好故事',
    writingIntro: '从英文行业编辑、品牌车主故事到科技现场视频，我关注的不只是信息准确，也关心内容如何被人理解和记住。',
    writingRole: ['英文选题与编辑', '车主采访与品牌故事撰写', '选题、出镜、拍摄与剪辑'],
    writingDesc: ['发表于世界互联网大会海外官网，讨论数字化如何推动文化创意产业发展。', '以云南攀枝戛村为现场，记录新能源科技、乡村发展与人的真实连接。', '深入带逛 2026 世界机器人大会，把复杂的前沿技术转化为现场化、可理解的视频内容。'],
    readOriginal: '阅读英文原文 ↗',
    archivedExcerpt: '查看作品留存节选 ↗',
    watchVideo: '前往小红书观看 ↗',
    portfolioExcerpt: '查看详细内容 ↗',
    abilities: [
      ['科技内容策划', '运营特斯拉百万级双微一抖矩阵，月均产出 30+ 篇文案、篇均阅读 1 万+；“大山里的特斯拉村”获点赞 2 万+。'],
      ['私域体系搭建', '打通 APP、小程序、公众号等 5 大获客入口，累计沉淀 359.7 万有效用户，最高 30 天留存率 62%。'],
      ['AI 运营实战', '上线 7×24 小时智能应答与 AI 会话质检，使人工咨询量下降 60%，质检覆盖率从 15% 提升至 100%。'],
      ['短视频全链路', '独立完成世界机器人大会视频的选题、脚本、出镜、拍摄、剪辑与封面，单人闭环产出科技现场内容。'],
      ['数据复盘增长', '将客单价从 1.5 元提升至 8 元、精准推送转化率做到 5%，并把演唱会裂变获客成本控制在 4 元/人。'],
      ['KOL 整合传播', '联动 20 位校园 KOL 搭建传播矩阵，获得 36 万+ 转评赞，沉淀 5000+ 精准企微用户。'],
      ['跨部门项目统筹', '统筹近 90 所高校迎新项目，协调政策、页面、物料、物流与客服，触达 16 万+ 新生。'],
      ['英文内容能力', '英语专业八级，曾为中国日报负责英文选题与编辑，作品发表于世界互联网大会海外官网。'],
    ],
    aboutEyebrow: 'ABOUT CILA / 关于我',
    aboutTitle: '好的技术，值得被更多人看见。',
    aboutBody: ['你好，我是刘力源（Cila），一名数字化营销经理。过去 3 年，我在中国移动北京公司从 0 到 1 搭建企微私域体系，也曾在特斯拉运营百万级社交媒体矩阵、在字节跳动飞书服务 KA 客户。', '我每天关注 AI 与具身智能，也持续学习如何把新技术讲得更准确、更有吸引力。不要自我设限，永远学习，保持好奇心。'],
    socialTitle: '工作之外，我也在记录生活与科技现场。',
    socialStats: ['428 关注者', '5.3 万获赞与收藏'],
    resume: '邮件索取完整个人简历',
    resumeNote: '为保护个人信息，完整简历将通过邮件单独发送',
    contactLabel: 'LET’S TALK / 联系我',
    contactTitle: '正在寻找科技与 AI 领域的新媒体运营机会，期待加入一个认真做产品、也认真理解用户的团队。',
    email: '发送邮件',
  },
  en: {
    nav: ['About', 'Cases', 'Work', 'Skills', 'Contact'],
    role: 'Digital Marketing Manager · Tech & AI Content',
    title: ['Content with sincerity.', 'Growth with evidence.'],
    intro: 'I translate complex technology into stories people understand, connecting content, audiences and measurable growth. Three years in private-domain growth and content marketing, now exploring semiconductors, AI and embodied intelligence.',
    location: 'Beijing · Seeking new opportunities',
    cta: 'Explore my experience',
    proof: [['3.6M', 'private-domain users'], ['−60%', 'manual inquiries'], ['+430%', 'average order value']],
    featured: 'FEATURED CASE',
    caseTitle: 'Building a WeCom growth system from zero to one',
    caseLead: 'At China Mobile Beijing, I connected five acquisition channels and built an end-to-end operating system spanning acquisition, conversion, service and quality assurance.',
    caseLabels: ['User scale', 'Conversion', 'AI operations', 'Programs'],
    caseNotes: {
      scale: ['3.6M valid users', 'An end-to-end WeCom system built from zero', '5 acquisition channels · peak 30-day retention of 62%'],
      conversion: ['Turning traffic into outcomes', 'Average order value grew from RMB 1.5 to RMB 8', 'Targeted messaging, campaign design and cost control worked together'],
      efficiency: ['AI-powered service operations', 'From automated replies to conversation QA', 'Reducing repetitive work while improving coverage and execution'],
      reach: ['M-Zone concert WeCom campaign', 'Leading the journey from event promotion to WeCom acquisition', 'Referral design, campaign messaging, WeCom capture and cost review'],
    },
    workEyebrow: 'SELECTED WORK',
    workTitle: 'Turning strategy into outcomes',
    projects: [
      ['Build growth as a system, not a one-off campaign', 'METHOD 01 / GROWTH SYSTEM', 'Define the valid-user metric first, then connect acquisition, tagging, messaging, service and review into one repeatable operating loop.', 'Channel audit → segmentation → scripts → service → review'],
      ['Translate complex technology into stories people choose to understand', 'METHOD 02 / TECH TRANSLATION', 'Start with the product mechanism and technical truth, then find the user problem and human story; reshape the same facts for articles, video and global channels.', 'Technical analysis → audience insight → narrative angle → channel adaptation → review'],
      ['Use cadence and interfaces to deliver complex programs', 'METHOD 03 / PROGRAM DELIVERY', 'Break goals into milestones, owners and deliverables; connect policy, pages, content, logistics, service and distribution through risk lists and fixed review rhythms.', 'Goal breakdown → ownership → milestones → risk plan → review'],
    ],
    abilitiesEyebrow: 'CAPABILITIES',
    abilitiesTitle: 'Content is the entry. Growth is the outcome.',
    writingEyebrow: 'PUBLISHED WORK',
    writingTitle: 'Making technology clear — and stories memorable',
    writingIntro: 'From English industry editing and brand storytelling to field video, I care about both factual precision and how an idea stays with its audience.',
    writingRole: ['English commissioning & editing', 'Owner interview & brand storytelling', 'Concept, on-camera presenting, filming & editing'],
    writingDesc: ['Published on the World Internet Conference international site, exploring how digitalization advances cultural and creative industries.', 'A field story from Panzhiga Village, connecting clean technology, rural development and lived experience.', 'An in-depth tour of the 2026 World Robot Conference, translating frontier technologies into accessible field reporting.'],
    readOriginal: 'Read the article ↗',
    archivedExcerpt: 'View archived excerpt ↗',
    watchVideo: 'Watch on Xiaohongshu ↗',
    portfolioExcerpt: 'View full story ↗',
    abilities: [
      ['Tech content strategy', 'Ran Tesla’s million-scale social matrix, producing 30+ pieces monthly with 10K+ average reads; one owner story earned 20K+ likes.'],
      ['Private-domain systems', 'Connected five acquisition channels and grew the system to 3.597M valid users with peak 30-day retention of 62%.'],
      ['Applied AI operations', 'Launched 24/7 AI replies and conversation QA, cutting manual inquiries by 60% and expanding QA coverage from 15% to 100%.'],
      ['End-to-end video', 'Independently planned, presented, filmed, edited and packaged an on-site World Robot Conference video.'],
      ['Data-led optimization', 'Raised AOV from RMB 1.5 to RMB 8, achieved 5% targeted-push conversion and held campaign CAC to RMB 4.'],
      ['KOL campaigns', 'Coordinated 20 campus KOLs, generating 360K+ engagements and converting 5,000+ qualified WeCom users.'],
      ['Cross-functional delivery', 'Led orientation delivery across nearly 90 universities, coordinating policy, pages, assets, logistics and service for 160K+ students.'],
      ['English content', 'TEM-8 certified; commissioned and edited English reporting published by the World Internet Conference international site.'],
    ],
    aboutEyebrow: 'ABOUT CILA',
    aboutTitle: 'Good technology deserves to be seen.',
    aboutBody: ['Hi, I’m Liu Liyuan (Cila), a digital marketing manager. Over the past three years, I built China Mobile Beijing’s WeCom ecosystem from scratch. Before that, I ran million-scale social channels at Tesla and supported key accounts at ByteDance Feishu.', 'I follow AI and embodied intelligence every day, always learning how to explain emerging technology with more accuracy and appeal. Stay curious, keep learning, and never self-limit.'],
    socialTitle: 'Outside work, I document life and technology in the field.',
    socialStats: ['428 followers', '53K likes & saves'],
    resume: 'Request my full résumé',
    resumeNote: 'To protect personal information, the full résumé is shared individually by email',
    contactLabel: 'LET’S TALK',
    contactTitle: 'I’m exploring content and social media opportunities in tech and AI, and looking for a team that cares equally about its product and its users.',
    email: 'Send an email',
  },
};

const tabKeys: CaseTab[] = ['scale', 'conversion', 'efficiency', 'reach'];
const projectImages = ['/profile-assets/method-growth-system.png', '/profile-assets/method-tech-translation.png', '/profile-assets/method-program-delivery.png'];
const wicStoryParagraphs = [
  'A new pattern of cultural and creative industry based on technology has been vigorously developed in recent years.',
  "Implementing digital culture industry and accelerating development of new types of cultural enterprises, business patterns and consumption models are included in China's 14th Five-Year Plan (2021-25).",
  'For small- and medium-sized cultural enterprises, it is almost a must to follow the trend of digital industrialization and industrial digitalization and to promote application of emerging information technologies in production, dissemination and consumption of cultural and creative products.',
  'Using digital tools to increase the creativity and influence of traditional techniques in the internet age has become promising.',
  'In response to the new trend, quite a number of emerging intangible cultural heritage brands have risen up in recent years and a new generation of inheritors is getting online to develop markets for traditional crafts.',
  'For example, “Ru Shan Ming”, a new intangible cultural heritage brand focusing on Chinese Ru porcelain, was established in 2017. It has gained nearly 200,000 fans.',
  "Li Keming is the founder of the brand. He returned to his hometown Ruzhou in Central China's Henan Province after graduation and learned the skills of making Ru porcelain from his parents, making him an inheritor of the traditional craft.",
  'He integrated creative design into traditional Ru porcelain products and brought them online through crowdfunding and livestreaming.',
  "The “Chuan Yue” comb brand, created by Guo Suixi, is an integration of tradition and fashion. Guo returned to her hometown Changzhou in East China's Jiangsu Province after six years of work in Japan.",
  'She said that more and more young people are falling in love with traditional intangible heritage culture and that she uses livestreaming to promote her products.',
  'Thanks to e-commerce platforms, more and more emerging intangible cultural heritage brands have gone popular and have created a trend of Chinese fads developing among young people.',
];
const teslaStorySections = [
  {
    title: '',
    paragraphs: [
      '云南一处群山脚下，山高谷低，有 10 多个自然村落，各村落沿山谷分散而居。攀枝戛村，便坐落在这里。',
      '这里，有世界目前最高的观光电梯；这里，有灯光秀助兴的篝火晚会；这里，有朴实的村民，也有前瞻的科技；这里，还有 30 多辆特斯拉……',
    ],
  },
  {
    title: '绿水青山才是真正的金山银山',
    paragraphs: [
      '故事要从一个特殊的人说起：蔡哥。12 岁，蔡哥就随父亲出川，在外一待就是 20 年。蔡哥对于老家的印象，只剩下一张泛黄的老照片，但他心中总是放不下故乡的那一抹绿色。直到 2015 年，北盘江大桥落建，让老家与外界的路联通，这燃起了蔡哥回乡创业的热血。',
      '蔡哥刚刚回到村庄时，村子还在致富的路上奋力前行。当选村干部后，蔡哥四处考察，全面了解村中优势资源，与领导和专家共同研讨后，最终决定发展乡村旅游，以此作为攀枝戛村未来长足发展的产业根基。经过规划、招商、开发……昔日闭塞的小村庄，逐渐成为景色秀丽的度假区。',
    ],
  },
  {
    title: '把好的产品分享给别人，是一件快乐的事！',
    paragraphs: [
      '一次偶然的机会，蔡哥驾驶朋友的特斯拉前往成都、重庆、西双版纳等地。沿途随处可见的特斯拉超级充电桩，让蔡哥赞叹电动车的补能便捷；经济又贴心的用车体验，让他决定购入一辆特斯拉 Model 3。',
      '亲身体验过之后，蔡哥开始向身边几乎每一位朋友推荐特斯拉。在他看来，将好的东西分享给朋友，是一件很快乐的事情。',
      '然而，作为新兴科技产品，电动汽车最初没有立刻获得攀枝戛村村民的欢迎。为让村民们更加熟悉特斯拉，蔡哥会主动介绍电动汽车，带朋友在山路上体验驾驶，介绍官方置换服务，也向孩子们展示特斯拉的灯光秀功能。',
      '成功“种草”后，蔡哥陪同乡亲们共同前往提车，并热心地帮助他们熟悉电动汽车，还专门组建了村内车友群，一起分享日常用车的技巧和趣事。',
      '在村民口口相传的引荐下，攀枝戛村共有 30 多台特斯拉，加上下定的，总计有 40 多台。人们也打趣地将攀枝戛村称为“特斯拉村”。',
    ],
  },
  {
    title: '特斯拉嘛，就是我们村的气氛组！',
    paragraphs: [
      '在乡村旅游发展之初，由于村内客房数量不多，常常无法满足越来越大的客流量。当客房不够时，村民会将自己的特斯拉开过来，打开露营模式，为旅客搭建起舒适的温馨驿站。久而久之，“特斯拉主题民宿”成了攀枝戛村的特色旅游项目。',
      '蔡哥也希望借此契机让攀枝戛村走出深山，带领村民们共同致富。于是，他开始着手打造以“特斯拉”为主题的酒店和露营基地，吸引媒体前来一探究竟。报道提升了村子的整体形象，也为攀枝戛村打响了知名度。',
      '蔡哥说：“现在的攀枝戛村，只是个开始。选择了特斯拉，就是选择了可持续发展。我们村的发展理念，也是保护绿水青山，造福子孙后代。”',
      '以自然为纸，科技为笔，云南攀枝戛村描绘了一幅乡村与科技和谐融汇而成的美丽图景，让人们心生对未来的无限憧憬。',
    ],
  },
];

const growthData = [
  { period: '2023 Q3', total: 998374, added: null, retention: null, eventZh: '盘点存量企微用户，明确累计有效用户口径，建立增长基线。', eventEn: 'Audited existing WeCom users, defined the valid-user metric and established the baseline.' },
  { period: '2023 Q4', total: 1008373, added: 9999, retention: null, eventZh: '持续推进分公司企微日常运营，验证规模化用户沉淀路径。', eventEn: 'Continued branch-level operations and validated the path to scalable user accumulation.' },
  { period: '2024 Q1', total: 1047463, added: 39090, retention: null, keyEvent: true, eventZh: '梳理并优化各分公司账号运营；搭建产品营销话术、模板，并定期培训运营人员。', eventEn: 'Optimized branch accounts, built product scripts and templates, and trained operators regularly.' },
  { period: '2024 Q2', total: 1063453, added: 15990, retention: null, eventZh: '将话术模板与培训机制投入常态运营，推动分公司执行标准落地。', eventEn: 'Embedded scripts and training into routine operations and standardized branch execution.' },
  { period: '2024 Q3', total: 1083726, added: 20273, retention: null, eventZh: '围绕既有获客入口持续运营，优化用户承接与服务流程。', eventEn: 'Sustained acquisition channels while refining user onboarding and service flows.' },
  { period: '2024 Q4', total: 1134087, added: 50361, retention: null, eventZh: '复盘增长节奏与用户需求，为服务导向的运营策略调整做准备。', eventEn: 'Reviewed growth and user needs to prepare for a service-led operating strategy.' },
  { period: '2025 Q1', total: 1203840, added: 69753, retention: null, eventZh: '持续扩充有效用户并梳理服务场景，为托管平台上线积累需求。', eventEn: 'Expanded valid users and mapped service scenarios ahead of the managed platform launch.' },
  { period: '2025 Q2', total: 1324734, added: 120894, retention: null, keyEvent: true, eventZh: '将运营目标调整为客户服务；上线运营托管平台，提高集中运营效率。', eventEn: 'Shifted the objective toward service and launched a managed platform for centralized operations.' },
  { period: '2025 Q3', total: 1488208, added: 163474, retention: null, eventZh: '依托托管平台推进集中化运营，新增用户规模进一步加速。', eventEn: 'Scaled centralized operations through the managed platform, accelerating user growth.' },
  { period: '2025 Q4', total: 1826533, added: 338325, retention: null, keyEvent: true, eventZh: '开发上线企业微信智能获客码；全面梳理并完善客户标签体系。', eventEn: 'Launched smart acquisition codes and comprehensively rebuilt the customer-tag system.' },
  { period: '2026 Q1', total: 2367149, added: 540616, retention: 43, keyEvent: true, eventZh: '制定企微运营规范；在内外部全渠道部署获客点位；搭建企微自有小程序。', eventEn: 'Set operating standards, deployed acquisition points across internal and external channels, and built a dedicated mini program.' },
  { period: '2026 Q2', total: 2967570, added: 600421, retention: 57, keyEvent: true, eventZh: '上线 AI 会话质检与 AI 智能体；搭建客户全生命周期 SOP；组建集中运营团队。', eventEn: 'Launched AI conversation QA and agents, built lifecycle SOPs, and formed a centralized team.' },
  { period: '2026-08-25', total: 3597487, added: 629917, retention: 62, keyEvent: true, eventZh: '在线下校园迎新中嵌入添加企微流程；开发更多获客活动，最高 30 天留存率达到 62%。', eventEn: 'Embedded WeCom acquisition into campus orientation and expanded acquisition campaigns, reaching 62% peak 30-day retention.' },
];

function GrowthTrend({ lang }: { lang: Language }) {
  const [selected, setSelected] = useState(growthData.length - 1);
  const point = growthData[selected];
  const coords = growthData.map((item, index) => ({ x: 4 + index * 7.67, y: 92 - (item.total / 3597487) * 78 }));
  const polyline = coords.map(({ x, y }) => `${x},${y}`).join(' ');
  const format = (value: number) => lang === 'zh' ? `${(value / 10000).toFixed(value >= 1000000 ? 1 : 0)}万` : `${(value / 1000000).toFixed(2)}M`;

  return (
    <div className="trend-visual visual-panel">
      <div className="trend-chart">
        <div className="trend-axis"><span>4M</span><span>2M</span><span>0</span></div>
        <div className="trend-plot" aria-label={lang === 'zh' ? '累计有效用户增长趋势' : 'Cumulative valid-user growth'}>
          <div className="trend-canvas">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="14" x2="100" y2="14" /><line x1="0" y1="53" x2="100" y2="53" /><line x1="0" y1="92" x2="100" y2="92" />
              <polyline points={polyline} />
            </svg>
            {coords.map(({ x, y }, index) => <button key={growthData[index].period} style={{ left: `${x}%`, top: `${y}%` }} className={`${selected === index ? 'active ' : ''}${growthData[index].keyEvent ? 'key-event' : ''}`.trim()} onClick={() => setSelected(index)} aria-label={`${growthData[index].period}: ${format(growthData[index].total)}`} />)}
          </div>
          <div className="trend-xlabels"><span>2023 Q3</span><span>2025 Q1</span><span>2026 Q1</span><span>08.25</span></div>
        </div>
      </div>
      <p className="trend-hint">↗ {lang === 'zh' ? '点击曲线节点，了解各阶段数据与运营动作' : 'Select a point to explore the data and operational action'}</p>
      <div className="trend-detail">
        <span>{point.period} · {selected === growthData.length - 1 ? (lang === 'zh' ? '截至当日实际值' : 'actual as of this date') : (lang === 'zh' ? '季度末' : 'quarter end')}</span>
        <strong>{format(point.total)}</strong>
        <div><p>{lang === 'zh' ? '累计有效用户' : 'CUMULATIVE USERS'}</p>{point.added && <p>{lang === 'zh' ? `当期新增 ${format(point.added)}` : `NEW ${format(point.added)}`}</p>}{point.retention && <p>{lang === 'zh' ? `30天留存 ${point.retention}%` : `30-DAY RETENTION ${point.retention}%`}</p>}</div>
        {(point.eventZh || point.eventEn) && <small>● {lang === 'zh' ? point.eventZh : point.eventEn}</small>}
      </div>
    </div>
  );
}

function CaseVisual({ tab, lang }: { tab: CaseTab; lang: Language }) {
  if (tab === 'scale') return <GrowthTrend lang={lang} />;
  if (tab === 'conversion') return (
    <div className="metric-visual visual-panel">
      {[
        ['¥1.5 → ¥8', lang === 'zh' ? '客单价' : 'AVERAGE ORDER VALUE'],
        ['+430%', lang === 'zh' ? '客单价增幅' : 'AOV UPLIFT'],
        ['5%', lang === 'zh' ? '精准推送转化率' : 'TARGETED PUSH CVR'],
        ['7 类 / 10 系列', lang === 'zh' ? '营销活动体系' : 'CAMPAIGN SYSTEM'],
        ['37 万', lang === 'zh' ? '明星活动单场获客' : 'TOP CAMPAIGN ACQUISITION'],
        ['¥4–6', lang === 'zh' ? '重点项目单客成本' : 'KEY CAMPAIGN CAC'],
      ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  );
  if (tab === 'efficiency') return (
    <div className="metric-visual visual-panel ai-metrics">
      {[
        ['−60%', lang === 'zh' ? '人工咨询量' : 'MANUAL INQUIRIES'],
        ['15% → 100%', lang === 'zh' ? '会话质检覆盖率' : 'QA COVERAGE'],
        ['43 → 15 min', lang === 'zh' ? '平均回复时长' : 'REPLY TIME'],
        ['7×24h', lang === 'zh' ? '简单问题自动应答' : 'AUTOMATED ANSWERS'],
        [lang === 'zh' ? '实时推荐' : 'LIVE', lang === 'zh' ? '产品营销话术' : 'SALES SCRIPT SUGGESTIONS'],
        [lang === 'zh' ? '自动转人工' : 'HANDOFF', lang === 'zh' ? '复杂问题承接' : 'COMPLEX CASE ROUTING'],
      ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  );
  return (
    <div className="metric-visual visual-panel reach-metrics">
      {[
        ['90', lang === 'zh' ? '所高校' : 'UNIVERSITIES'],
        ['16 万+', lang === 'zh' ? '触达新生' : 'STUDENTS REACHED'],
        ['1.3 万', lang === 'zh' ? '年均线上销量' : 'ANNUAL ONLINE SALES'],
        ['2 万', lang === 'zh' ? '新增私域用户' : 'NEW PRIVATE USERS'],
        ['20', lang === 'zh' ? '校园 KOL' : 'CAMPUS KOLS'],
        ['36 万+', lang === 'zh' ? '全网转评赞' : 'ENGAGEMENTS'],
        ['5000+', lang === 'zh' ? '精准企微用户' : 'QUALIFIED WECOM USERS'],
        ['¥4', lang === 'zh' ? '单客获客成本' : 'CAC PER USER'],
      ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>('zh');
  const [activeTab, setActiveTab] = useState<CaseTab>('scale');
  const [showWicStory, setShowWicStory] = useState(false);
  const [showTeslaStory, setShowTeslaStory] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const t = content[lang];
  const note = t.caseNotes[activeTab];
  const lifecycleStages = lang === 'zh' ? [
    ['获客进入', 'APP、小程序、公众号等 5 大入口与智能获客码'],
    ['识别分层', '重构客户标签体系，统一有效用户口径'],
    ['激活培育', '生命周期 SOP、运营话术与标准化模板'],
    ['转化承接', '精准推送与系列活动，已确认转化率 5%'],
    ['服务响应', '7×24 小时智能应答，复杂问题自动转人工'],
    ['质量复盘', 'AI 会话质检覆盖率由 15% 提升至 100%'],
  ] : [
    ['Acquire', 'Five entry points across app, mini program and official accounts, plus smart acquisition codes'],
    ['Identify', 'A rebuilt tagging system and one valid-user definition'],
    ['Nurture', 'Lifecycle SOPs, operating scripts and standardized templates'],
    ['Convert', 'Targeted messaging and campaign series with a confirmed 5% conversion rate'],
    ['Serve', '24/7 automated answers with handoff for complex cases'],
    ['Improve', 'AI conversation QA coverage expanded from 15% to 100%'],
  ];
  const operatingModel = lang === 'zh' ? [
    ['目标与节奏', '统一经营目标与事项优先级，用固定节奏管理服务、活动和复盘'],
    ['标准与授权', '沉淀账号规范、SOP、话术和模板，明确一线执行与升级处理边界'],
    ['任务集中分发', '在同一运营平台承接获客、服务与活动任务，减少重复沟通和分散协作'],
    ['质量闭环', '用 AI 质检发现共性问题，再回到培训、话术和流程迭代'],
  ] : [
    ['Goals & cadence', 'One set of priorities and a fixed cadence for service, campaigns and review'],
    ['Standards & ownership', 'Shared SOPs, scripts and templates with clear execution and escalation boundaries'],
    ['Central task routing', 'Acquisition, service and campaign work enter one operating surface, reducing duplicated coordination'],
    ['Quality loop', 'AI QA identifies recurring issues and feeds them back into training, scripts and workflow design'],
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * .28, 240);
      const work = document.getElementById('work')?.offsetTop ?? Infinity;
      const writing = document.getElementById('writing')?.offsetTop ?? Infinity;
      const skills = document.getElementById('skills')?.offsetTop ?? Infinity;
      const about = document.getElementById('about')?.offsetTop ?? Infinity;
      const contact = document.getElementById('contact')?.offsetTop ?? Infinity;
      const next = marker < work ? 'about' : marker < writing ? 'work' : marker < skills ? 'writing' : marker < about ? 'skills' : marker < contact ? 'about' : 'contact';
      setActiveSection(current => current === next ? current : next);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <main>
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Cila home">CILA<span>·</span></a>
        <nav aria-label="Primary navigation">{t.nav.map((item, index) => {
          const target = ['about', 'work', 'writing', 'skills', 'contact'][index];
          return <a href={`#${target}`} className={activeSection === target ? 'active' : ''} aria-current={activeSection === target ? 'location' : undefined} key={item}>{item}</a>;
        })}</nav>
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

      <section className="case-study" id="work">
        <div className="section-intro"><p>{t.featured}</p><h2>{t.caseTitle}</h2><span>{t.caseLead}</span></div>
        <div className="case-dashboard" id="case-study">
          <div className="tablist" role="tablist" aria-label="案例数据维度">{tabKeys.map((key, index) => <button role="tab" aria-selected={activeTab === key} className={activeTab === key ? 'active' : ''} onClick={() => setActiveTab(key)} key={key}><span>0{index + 1}</span>{t.caseLabels[index]}</button>)}</div>
          <div className="dashboard-body">
            <div className="dashboard-note"><span>DATA VIEW / 0{tabKeys.indexOf(activeTab) + 1}</span><h3>{note[0]}</h3><strong>{note[1]}</strong><p>{note[2]}</p></div>
            <CaseVisual tab={activeTab} lang={lang} />
          </div>
        </div>
        <div className="case-deep-dive">
          <article className="lifecycle-card">
            <div className="deep-dive-heading"><p>{lang === 'zh' ? 'LIFECYCLE SOP / 客户生命周期' : 'LIFECYCLE SOP'}</p><h3>{lang === 'zh' ? '把新增用户变成可持续运营的关系' : 'Turning acquisition into an operating relationship'}</h3><span>{lang === 'zh' ? '从进入企微到服务复盘，用同一套标准连接增长、转化与体验。' : 'One operating standard connects acquisition, conversion, service and learning.'}</span></div>
            <div className="lifecycle-flow">{lifecycleStages.map(([title, description], index) => <div key={title}><span>0{index + 1}</span><strong>{title}</strong><p>{description}</p></div>)}</div>
          </article>

          <article className="operations-card">
            <div className="deep-dive-heading"><p>{lang === 'zh' ? 'TEAM OPERATING MODEL / 团队管理模式' : 'TEAM OPERATING MODEL'}</p><h3>{lang === 'zh' ? '集中团队的四层管理机制' : 'A four-layer model for centralized operations'}</h3><span>{lang === 'zh' ? '统一目标、工作流、标准和质量反馈，让有限团队把精力集中在高价值判断与复杂问题处理上。' : 'Shared goals, workflows, standards and quality feedback keep a lean team focused on judgment and complex cases.'}</span></div>
            <div className="operations-grid">{operatingModel.map(([title, description]) => <div key={title}><strong>{title}</strong><p>{description}</p></div>)}</div>
          </article>

          <article className="concert-card">
            <div className="concert-copy"><p>M-ZONE LIVE / {lang === 'zh' ? '动感地带演唱会' : 'M-ZONE CONCERT'}</p><h3>{lang === 'zh' ? '用裂变机制把演唱会热度沉淀为私域用户' : 'Turning concert attention into private-domain users'}</h3><span>{lang === 'zh' ? '我把项目拆成“传播—裂变—企微承接—复盘”四段，将活动内容、用户路径与成本目标放进同一套运营链路。' : 'I connected promotion, referral, WeCom capture and review into one operating journey, aligning content, user flow and acquisition cost.'}</span></div>
            <div className="concert-actions">
              {(lang === 'zh' ? [
                ['01', '设计公私域转化链路', '围绕郑州动感地带演唱会 IP，将校园内容扩散、用户互动和企业微信沉淀串成一条转化路径。'],
                ['02', '组织校园 KOL 矩阵', '联动 20 位校园 KOL 形成传播矩阵，以多账号协同扩大演唱会内容在目标学生群体中的覆盖。'],
                ['03', '承接企微精准用户', '把 KOL 带来的公域关注导向企业微信，在活动传播过程中沉淀 5000+ 精准企微用户。'],
                ['04', '用三类指标联合复盘', '同时检查 36 万+ 转评赞、5000+ 精准用户和 4 元/人获客成本，验证声量是否真正转成私域资产。'],
              ] : [
                ['01', 'Design the public-to-private path', 'Connect campus content distribution, audience interaction and WeCom capture around the Zhengzhou M-Zone concert IP.'],
                ['02', 'Coordinate a campus KOL matrix', 'Bring 20 campus KOLs into one distribution matrix to expand reach among target student communities.'],
                ['03', 'Capture qualified WeCom users', 'Move public-platform attention into WeCom and retain more than 5,000 qualified users during the campaign.'],
                ['04', 'Review three outcome layers', 'Evaluate 360K+ engagements, 5,000+ qualified users and RMB 4 CAC together to test whether reach became a private-domain asset.'],
              ]).map(([step, title, description]) => <div key={step}><i>{step}</i><strong>{title}</strong><p>{description}</p></div>)}
            </div>
          </article>
        </div>
      </section>

      <section className="projects-section">
        <div className="project-heading"><p>{t.workEyebrow}</p><h2>{t.workTitle}</h2></div>
        <div className="projects-grid">{t.projects.map((project, index) => <article className="project-card" key={project[0]}><div className="project-image"><img src={projectImages[index]} alt="" /><span>0{index + 1}</span></div><p>{project[1]}</p><h3>{project[0]}</h3><p className="project-summary">{project[2]}</p><strong className="project-process">{project[3]}</strong></article>)}</div>
      </section>

      <section className="writing-section" id="writing">
        <div className="writing-heading"><p>{t.writingEyebrow}</p><h2>{t.writingTitle}</h2><span>{t.writingIntro}</span></div>
        <div className="writing-grid">
          <button className="writing-card" type="button" onClick={() => setShowWicStory(true)}>
            <div className="writing-text-preview" lang="en"><b>EN</b><p>A new pattern of cultural and creative industry based on technology has been vigorously developed in recent years.</p></div>
            <div className="writing-copy"><span>WORLD INTERNET CONFERENCE · 2021</span><h3>Digitalization Boosts Development of Cultural, Creative Industry</h3><p>{t.writingRole[0]}</p><small>{t.writingDesc[0]}</small><i>{t.archivedExcerpt}</i></div>
          </button>
          <button className="writing-card tesla-work" type="button" onClick={() => setShowTeslaStory(true)}>
            <div className="writing-image"><img src="/profile-assets/tesla-village-editorial.png" alt="大山里的特斯拉村彩色文章封面" /><b>ZH</b></div>
            <div className="writing-copy"><span>TESLA / TSPACE · 2022</span><h3>{lang === 'zh' ? '大山里的“特斯拉村”' : 'The “Tesla Village” in the Mountains'}</h3><p>{t.writingRole[1]}</p><small>{t.writingDesc[1]}</small><i>{t.portfolioExcerpt}</i></div>
          </button>
          <a className="writing-card video-work" href="https://xhslink.cn/o/9cXjO92cfpm" target="_blank" rel="noreferrer">
            <div className="writing-image"><img src="/profile-assets/robot-video-cover.webp" alt="2026 世界机器人大会视频真实封面" /><b>▶</b></div>
            <div className="writing-copy"><span>XIAOHONGSHU · 2026</span><h3>{lang === 'zh' ? '2026 世界机器人大会深入带逛' : 'Inside the 2026 World Robot Conference'}</h3><p>{t.writingRole[2]}</p><small>{t.writingDesc[2]}</small><i>{t.watchVideo}</i></div>
          </a>
        </div>
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
          <a className="qr-card" href="/profile-assets/xiaohongshu-qr.jpg" target="_blank" rel="noreferrer" aria-label="打开小红书二维码原图">
            <div className="qr-code-zoom"><img src="/profile-assets/xiaohongshu-qr.jpg" alt="小红书账号源饱饱 Cila 的二维码" /></div>
            <strong>@源饱饱Cila</strong><span>{lang === 'zh' ? '长按识别或使用手机扫码' : 'PRESS AND HOLD OR SCAN'}</span>
          </a>
          <a className="resume-card" href={`mailto:lly156156186292022@163.com?subject=${encodeURIComponent(lang === 'zh' ? '索取刘力源 Cila 的完整简历' : 'Request for Cila Liu’s full résumé')}`}>
            <div className="resume-document-mock" aria-hidden="true"><strong>CILA LIU</strong><i /><i /><i /><i /><i /><span>RÉSUMÉ</span></div>
            <div className="resume-meta"><span>RÉSUMÉ / PDF</span><strong>{t.resume}</strong><p>{t.resumeNote}</p></div>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <footer id="contact"><p>{t.contactLabel}</p><h2>{t.contactTitle}</h2><div className="contact-links"><a href="mailto:lly156156186292022@163.com"><span>{t.email}</span>lly156156186292022@163.com ↗</a></div><div className="footer-meta"><span>© 2026 CILA LIU</span><span>BEIJING · CHINA</span><span>STAY CURIOUS</span></div></footer>

      <a className="back-to-top" href="#top" aria-label={lang === 'zh' ? '回到顶部' : 'Back to top'}><span>↑</span>{lang === 'zh' ? '顶部' : 'TOP'}</a>

      {showWicStory && <div className="story-modal" role="dialog" aria-modal="true" aria-label={lang === 'zh' ? '中国日报英文作品留存节选' : 'Archived China Daily article excerpt'} tabIndex={-1} onKeyDown={(event) => event.key === 'Escape' && setShowWicStory(false)} onClick={() => setShowWicStory(false)}>
        <div className="story-sheet" onClick={(event) => event.stopPropagation()}>
          <button className="story-close" type="button" onClick={() => setShowWicStory(false)}>{lang === 'zh' ? '关闭' : 'Close'} ×</button>
          <p>CHINA DAILY / WORLD INTERNET CONFERENCE · 2021</p>
          <h2>Digitalization Boosts Development of Cultural, Creative Industry</h2>
          <span>{lang === 'zh' ? '英文选题与编辑 · 作品集留存节选（原发布页当前无法稳定访问）' : 'English commissioning and editing · archived portfolio excerpt (the original page is currently unavailable)'}</span>
          <article className="story-text" lang="en">{wicStoryParagraphs.slice(0, 3).map(paragraph => <p key={paragraph}>{paragraph}</p>)}<h3>Emerging intangible heritage cultural brands</h3>{wicStoryParagraphs.slice(3).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</article>
        </div>
      </div>}

      {showTeslaStory && <div className="story-modal" role="dialog" aria-modal="true" aria-label={lang === 'zh' ? '大山里的特斯拉村详细内容' : 'Tesla Village full story'} tabIndex={-1} onKeyDown={(event) => event.key === 'Escape' && setShowTeslaStory(false)} onClick={() => setShowTeslaStory(false)}>
        <div className="story-sheet" onClick={(event) => event.stopPropagation()}>
          <button className="story-close" type="button" onClick={() => setShowTeslaStory(false)}>{lang === 'zh' ? '关闭' : 'Close'} ×</button>
          <p>TESLA / TSPACE · 2022</p>
          <h2>{lang === 'zh' ? '大山里的“特斯拉村”' : 'The “Tesla Village” in the Mountains'}</h2>
          <span>{lang === 'zh' ? '车主采访、品牌故事撰写 · 作品集文本节选' : 'Owner interview and brand storytelling · portfolio text excerpt'}</span>
          <article className="story-text">{teslaStorySections.map(section => <section key={section.title || 'opening'}>{section.title && <h3>{section.title}</h3>}{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</article>
        </div>
      </div>}
    </main>
  );
}
