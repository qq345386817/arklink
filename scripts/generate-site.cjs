const fs = require('node:fs');
const path = require('node:path');

const outDir = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const domain = 'https://arklink.luopeike.com';
const appStore = 'https://apps.apple.com/app/id6773223162';
const email = 'cameoshell09@gmail.com';
const updated = '2026-10-23';
const productName = 'ArkLink: Global Extremes';
const pages = ['index', 'gameplay', 'faq', 'help', 'support', 'privacy-policy'];
const contact = `<!--email_off--><a href="mailto:${email}">${email}</a><!--/email_off-->`;
const locales = [
  {
    dir: '', lang: 'en', label: 'English',
    nav: ['Home', 'Gameplay', 'FAQ', 'Help', 'Support', 'Privacy'],
    title: 'ArkLink: Global Extremes | Climate Thriller Visual Novel',
    description: 'A free, offline climate thriller visual novel about disaster claims, evidence and difficult choices. Explore branching routes and T-402 decisions with limited time and permits.',
    subtitle: 'Global Extremes · A climate thriller visual novel',
    kicker: 'Disaster claims. Human consequences.',
    lead: 'Play Carter Li, a catastrophe claims actuary and a father. Decide which evidence survives, whose treatment stays authorised, and who pays for a changing climate.',
    download: 'Download Free on the App Store', secondary: 'Explore the gameplay',
    chips: ['Branching story', 'Offline local saves', 'English & 简体中文'],
    featureTitle: 'An interactive story about evidence and impossible choices',
    features: [
      ['Disaster claims decisions', 'Review a near-future climate crisis through claims, medical access and corporate power. You sign the ledger; other people live with the result.'],
      ['Branching route records', 'Explore different decisions and return to recorded routes and discovered evidence. Replaying reveals another side of the same case.'],
      ['Offline, without an account', 'The story and saves are stored on your device. Installation and updates need a connection; playing the installed story does not require an account.'],
    ],
    previewLabel: 'AVAILABLE NOW · VERSION 1.1.0', previewTitle: 'T-402: decisions with a visible cost',
    previewBody: 'Version 1.1.0 includes an action budget, limited override permits, evidence cross-checks, persistent profile abilities and optional terminal sound effects. Start a new first-chapter run to use the T-402 operating window; older saves keep their original story mode until you replay the chapter.',
    previewFeatures: [
      ['90 seconds of action time', 'Reading takes no time. Deliberate operations spend a visible budget; a late standard sign-off stays available.'],
      ['Two override permits', 'Spend a limited permit to copy sensitive evidence, extend a review window or freeze default denial.'],
      ['Profile abilities and feedback', 'Human-first, system-correction and evidence-leverage profiles reinforce different decisions. See the consequence after each choice.'],
    ],
    storyTitle: 'One claim, two kinds of survival',
    storyBody: 'T-402 concerns the Tana Valley’s water access. Jack’s medical treatment depends on Carter’s professional clearance. The opening case puts a family’s breathing space and a community’s future on the same screen.',
    heroAlt: 'Carter Li holding the ArkLink claims terminal in a city affected by extreme weather',
    sceneAlt: 'ArkLink terminal showing catastrophe claim information and evidence',
    factsTitle: 'Game facts', facts: [['Game', productName], ['Genre', 'Interactive fiction / climate thriller visual novel'], ['Platform', 'iPhone and iPad · App Store'], ['Languages', 'English and Simplified Chinese'], ['Account', 'Not required for story play'], ['Progress', 'Local device saves']],
    gameplayTitle: 'ArkLink Gameplay | Evidence, Decisions & T-402',
    gameplayDescription: 'Explore ArkLink’s branching climate thriller, T-402 action budget, override permits, evidence cross-checks, profile abilities and optional sound effects. Available in version 1.1.0.',
    gameplayHeading: 'How decisions work in ArkLink',
    gameplayIntro: 'ArkLink is a story-led visual novel, not a real-world insurance service. You read the case, choose an action and follow the consequences. The T-402 mechanics below are available in version 1.1.0, alongside branching story play and local progress.',
    mechanics: [
      ['The decision budget is not a reading timer', 'A new first-chapter run starts with 90 seconds of action time. Reading dialogue, checking the log and resuming a save do not spend it. Operations show their cost before you choose.'],
      ['Override permits create a trade-off', 'You have two permits in the first chapter. Some evidence copies and emergency actions consume one. Saving both copies can leave no permit for freezing denial later; routine actions remain available.'],
      ['Compare evidence before choosing', 'The T-402 cross-check places 179 days, a 180-day threshold and a 2.00mm reading beside a write timestamp eleven minutes ahead of the field upload. You choose whether to lock the timestamp, request a physical recheck or buy a review window.'],
      ['A profile changes the effect of your choices', 'Human-first choices reduce public anger by an extra 2 when they already reduce it. System-correction choices add 2 company trust when they raise it. Evidence-leverage choices add 2 evidence strength when they raise it, subject to stat limits.'],
      ['The window can survive, freeze or expire', 'The first chapter’s receipt records time spent and permits left. A freeze or an expired review window is acknowledged in chapter two. Resource rules apply to this opening case, not every chapter.'],
      ['Sound is optional', 'Terminal sound effects default to off. An independent switch enables selection, message, authorisation, denial, archive-unlock and low-window cues. Reading remains possible with sound off.'],
      ['Save and replay', 'The game preserves action costs and the pending destination if play is interrupted. Older chapter-one saves keep their original story mode; replaying enables the operating window.'],
    ],
    faqTitle: 'ArkLink FAQ | Offline Play, Languages, Saves & New Gameplay',
    faqDescription: 'Answers about ArkLink offline play, iPhone and iPad availability, languages, local saves and the T-402 decision mechanics available in version 1.1.0.',
    faqHeading: 'Frequently asked questions',
    faq: [
      ['What kind of game is ArkLink?', 'ArkLink: Global Extremes is an interactive climate thriller visual novel. You play Carter Li, a catastrophe claims actuary, and make decisions about evidence, treatment access and corporate orders.'],
      ['Can I play offline?', 'Yes. After installation, the bundled story and local saves work offline. Downloading, updating and opening external support or store links require a connection.'],
      ['Do I need an account?', 'No account is required to play the story. Progress is saved on your device.'],
      ['Which platforms and languages are supported?', 'The public download linked here is the iPhone and iPad App Store app. It supports English and Simplified Chinese. This website does not advertise a Google Play release.'],
      ['Does reading spend the 90-second budget?', 'No. T-402 uses an action budget. It decreases only when you choose a charged operation. Taking time to read is free.'],
      ['What happens when override permits run out?', 'In the first chapter, costly emergency actions become unavailable with a reason shown. Standard sign-off remains available, so running out of permits does not trap the story.'],
      ['Are the T-402 mechanics available in the App Store app?', 'Yes. Version 1.1.0 includes the operating window, profile abilities, evidence cross-checks and optional terminal sound effects. Update the app if needed. To enable the operating window with an older chapter-one save, replay the chapter.'],
      ['Can I replay a route or transfer a save?', 'You can restart a chapter to explore another route. Saves are local; this website does not promise cloud sync or transfer between devices. Clearing progress removes the local story record.'],
      ['Are these real climate or insurance recommendations?', 'No. The setting and claims are fictional game content. They are not professional climate, medical, financial or insurance advice.'],
    ],
    helpTitle: 'ArkLink Help | Start, Resume, Replay & Sound Settings',
    helpDescription: 'Learn how to start and resume ArkLink, replay chapters, use local saves, follow device language and use the T-402 operating window and sound controls.',
    helpHeading: 'Help and getting started',
    help: [
      ['Begin the story', 'Open ArkLink and use the main start action to enter the opening calibration and first case. Button wording may vary with the installed version and language.'],
      ['Continue your progress', 'Use the continue action or chapter menu. Story progress and route records are saved locally on the current device.'],
      ['Read at your own pace', 'While dialogue is appearing, use the show-full-message control when available. Long messages and option lists can be scrolled.'],
      ['Replay a chapter', 'Use Restart Chapter to try a different route. Restarting the first chapter restores its action budget and permits.'],
      ['Language', 'The app follows the device language where supported. Available story languages are English and Simplified Chinese.'],
      ['Sound settings', 'Use the menu or in-game sound switch. Sound defaults to off; the preference is stored independently of story progress.'],
      ['Clear progress carefully', 'Clear Progress deletes local story progress. Restart Chapter replays a chapter. These are different actions; read the confirmation before clearing.'],
      ['T-402 operating window', 'The Gameplay page explains the action budget and override permits available in version 1.1.0. Older chapter-one saves keep their original story mode until you replay the chapter.'],
    ],
    supportTitle: 'ArkLink Support | Contact & Gameplay Assistance', supportDescription: 'Contact ArkLink support about gameplay, saves, language or technical issues. Include the installed version, device and affected chapter.', supportHeading: 'Support',
    support: [['Contact the developer', contact], ['Information that helps', 'Include your device model, system version, installed ArkLink version, affected chapter and a short description of the issue. Never send passwords or account credentials.'], ['Gameplay help', 'Read the help and FAQ before contacting support. The Gameplay page explains the T-402 mechanics available in version 1.1.0, including how older saves work.']],
    privacyTitle: 'ArkLink Privacy Policy | Local Saves & Data Use', privacyDescription: 'ArkLink privacy information covering local story saves and settings, optional notifications, no required game account, and developer contact.', privacyHeading: 'Privacy policy',
    privacy: [['Overview', 'ArkLink is a standalone visual novel. It does not require a game account to play.'], ['Personal information', 'The app does not ask for your name, contacts, photos, precise location or account credentials. Contacting support by email shares the information you choose to include with the developer.'], ['Local data', 'Story progress, route records and settings may be stored locally on your device. Sound preferences and the T-402 action budget are also saved locally.'], ['Notifications', 'If enabled, notifications are local in-game reminders. You can disable them in system settings.'], ['Analytics and tracking', 'ArkLink does not use third-party advertising trackers or track you across apps and websites.'], ['Microphone', 'Terminal sound effects are playback only. ArkLink does not record audio or request microphone access.'], ['Contact', contact]],
    effective: 'Policy updated: October 23, 2026', footer: 'ArkLink: Global Extremes · A fictional climate thriller.',
  },
  {
    dir: 'zh-Hans', lang: 'zh-Hans', label: '简体中文',
    nav: ['首页', '玩法', '常见问题', '帮助', '支持', '隐私'],
    title: 'ArkLink: Global Extremes｜气候悬疑互动小说',
    description: 'ArkLink 是一款免费离线气候悬疑互动小说。扮演巨灾理赔精算师，在证据、医疗权限与企业命令之间选择，探索分支路线与 T-402 行动预算、越权授权和证据核验。',
    subtitle: 'Global Extremes · 气候悬疑互动小说', kicker: '灾难理赔。人命与账本。',
    lead: '你是 Carter Li，一名巨灾理赔精算师，也是一位父亲。你决定哪些证据留下、谁保住治疗权限，以及谁为失控的气候付账。',
    download: '在 App Store 免费下载', secondary: '了解游戏玩法',
    chips: ['分支剧情', '离线本地存档', '英文与简体中文'],
    featureTitle: '围绕证据与艰难选择展开的互动故事',
    features: [['灾难理赔决策', '通过理赔、医疗权限与企业权力经历近未来气候危机。你签下账本，其他人承担结果。'], ['分支路线记录', '探索不同选择，回看已形成的路线与发现的档案。重玩同一案件，能看见另一面的代价。'], ['无需账号，离线阅读', '剧情与存档保存在当前设备。下载安装与更新需要联网，已安装的故事无需账号即可游玩。']],
    previewLabel: '现已上线 · 1.1.0 版本', previewTitle: 'T-402：每一次操作，都有看得见的成本',
    previewBody: '1.1.0 版本已加入行动预算、有限越权授权、证据交叉核验、持续生效的画像能力，以及可选终端音效。开启首章新进度即可使用 T-402 行动窗口；旧首章存档保留原剧情模式，重开本章后启用行动窗口。',
    previewFeatures: [['90 秒行动预算', '阅读不扣时间。主动操作会消耗标明的预算，窗口耗尽后仍可常规签收。'], ['2 次越权授权', '用有限授权复制敏感证据、延长复核窗口或冻结默认拒赔。'], ['画像能力与后果回显', '活人优先、系统修正、证据筹码强化不同路线；每次选择后，都能看到实际后果。']],
    storyTitle: '一笔理赔，两种生存', storyBody: 'T-402 关系塔纳河谷的净水；Jack 的治疗权限依赖 Carter 的职业职级。开篇把一个家庭的呼吸与一整个社区的明天，压进同一张屏幕。',
    heroAlt: 'Carter Li 手持 ArkLink 灾难理赔终端，身后的城市遭遇极端天气', sceneAlt: 'ArkLink 风险终端显示巨灾理赔资料与证据',
    factsTitle: '游戏信息', facts: [['名称', productName], ['类型', '气候悬疑互动小说 / 视觉小说'], ['平台', 'iPhone 与 iPad · App Store'], ['语言', '英文、简体中文'], ['账号', '剧情游玩无需账号'], ['进度', '当前设备本地存档']],
    gameplayTitle: 'ArkLink 玩法｜证据核验、分支选择与 T-402 行动窗口', gameplayDescription: '了解 ArkLink 分支剧情，以及 1.1.0 版本已上线的 90 秒行动预算、有限越权授权、证据交叉核验、画像能力与可选终端音效。阅读不消耗行动时间。', gameplayHeading: '你的选择如何改变 ArkLink',
    gameplayIntro: 'ArkLink 是以故事为核心的视觉小说。你阅读案件、选择操作，然后承担后果。下方介绍的 T-402 机制已在 1.1.0 版本上线，支持分支剧情与本地进度。游戏中的理赔规则不是真实保险服务。',
    mechanics: [['行动预算不是阅读计时器', '首章新进度提供 90 秒行动预算。阅读对话、打开记录、恢复存档都不扣时间；只有选定有时间成本的操作才会扣除对应预算，按钮会先标明成本。'], ['越权授权需要取舍', '首章提供 2 次授权。部分证据副本与紧急操作消耗 1 次；过早把授权花在两份副本上，后面就可能无法冻结拒赔。常规操作仍然开放。'], ['先对照证据，再做判断', 'T-402 会并排展示 179 天记录、180 天门槛、2.00mm 读数，以及比现场上传早 11 分钟的写入时间。你决定锁定时间戳、申请物理复检，还是争取复核窗口。'], ['画像会持续影响选择', '活人优先：原本降低灾民愤怒的选择额外降低 2 点。系统修正：原本提高公司信任的选择额外增加 2 点。证据筹码：原本提高证据强度的选择额外增加 2 点。数值仍受上下限约束。'], ['窗口可以保留、冻结或耗尽', '首章结算记录时间与剩余授权。冻结拒赔或耗尽复核窗口的结果，会在第二章得到回应。行动预算是这个开篇案件的机制，并非每章都有限时资源。'], ['音效可以关闭', '终端音效默认关闭，可独立启用选择、消息、授权、拒赔、档案解锁与低时间提示音。关闭声音仍可完整阅读。'], ['存档与重玩', '游戏保存操作成本与中断时的目标节点，恢复时不再次扣除资源。旧的首章存档保留原剧情模式，重开本章才启用行动窗口。']],
    faqTitle: 'ArkLink 常见问题｜离线游玩、语言、存档与新玩法', faqDescription: '解答 ArkLink 的离线游玩、iPhone 和 iPad 支持、语言、本地存档，以及 1.1.0 版本已上线的 T-402 行动预算与越权授权问题。', faqHeading: '常见问题',
    faq: [['ArkLink 是什么类型的游戏？', 'ArkLink: Global Extremes 是一款气候悬疑互动小说。你扮演巨灾理赔精算师 Carter Li，决定如何处理证据、医疗权限与企业命令。'], ['可以离线游玩吗？', '可以。安装后，内置剧情与本地存档支持离线使用。下载、更新和打开外部商店或支持链接需要联网。'], ['需要注册账号吗？', '剧情游玩无需注册账号。进度保存在当前设备。'], ['支持哪些平台和语言？', '本站公开下载链接对应 iPhone 与 iPad 的 App Store 应用，支持英文和简体中文。本站没有宣称已在 Google Play 上线。'], ['读文字会消耗 90 秒吗？', '不会。T-402 使用行动预算，只在选定需要消耗时间的操作后扣除。慢慢阅读不扣预算。'], ['越权授权用完会卡关吗？', '不会。首章机制会禁用需要额外授权的紧急操作，并显示原因；常规签收仍可执行。'], ['T-402 玩法已经在商店版上线了吗？', '是的。1.1.0 版本已包含行动窗口、画像能力、证据交叉核验和可选终端音效。请先更新 App；如果继续的是旧首章存档，重开本章即可启用行动窗口。'], ['能重玩路线或跨设备同步吗？', '可以重开章节探索其他路线。存档属于当前设备，官网不承诺云同步或跨设备迁移；清除进度会移除本地剧情记录。'], ['游戏内容是真实理赔或气候建议吗？', '不是。剧情与案件属于虚构游戏内容，不构成专业气候、医疗、金融或保险建议。']],
    helpTitle: 'ArkLink 帮助｜开始游戏、继续存档、重玩与音效', helpDescription: '了解 ArkLink 如何开始和继续游戏、重开章节、使用本地存档、跟随系统语言，以及使用 T-402 行动窗口与音效开关。', helpHeading: '帮助与入门',
    help: [['开始故事', '打开 ArkLink，使用首页的主开始按钮进入开篇权限校准与第一笔案件。按钮名称可能随版本和语言有所不同。'], ['继续当前进度', '使用继续按钮或章节菜单。本机保存剧情进度与路线记录。'], ['按自己的节奏阅读', '逐字显示时，可使用立即显示全文按钮（如果当前版本提供）；长消息和选项列表支持滚动。'], ['重开章节', '重开本章可尝试其他路线；重开首章会恢复行动预算与授权次数。'], ['语言', 'App 在支持范围内跟随系统语言，目前提供英文和简体中文剧情。'], ['音效开关', '使用首页或游戏内的音效开关，默认关闭。声音偏好独立于剧情进度保存。'], ['谨慎清除进度', '清除进度会删除本地剧情记录，重开本章则是重玩当前章节。请先阅读确认说明。'], ['T-402 行动窗口', '玩法页面介绍了 1.1.0 版本已上线的行动预算与越权授权。旧首章存档保留原剧情模式，重开本章后启用行动窗口。']],
    supportTitle: 'ArkLink 支持｜联系开发者与游戏问题反馈', supportDescription: '联系 ArkLink 开发者，反馈剧情、存档、语言与技术问题。请附上安装版本、设备与受影响章节，勿发送密码。', supportHeading: '用户支持', support: [['联系开发者', contact], ['反馈时请附上', '设备型号、系统版本、已安装的 ArkLink 版本、受影响章节与简短问题描述。不要发送密码或账号凭据。'], ['先查看玩法与帮助', '帮助和常见问题介绍基本操作；玩法页面介绍了 1.1.0 版本的 T-402 机制与旧存档兼容方式。']],
    privacyTitle: 'ArkLink 隐私政策｜本地存档与数据使用', privacyDescription: 'ArkLink 隐私说明：本地剧情存档与设置、可选通知、无需游戏账号以及开发者联系方式。', privacyHeading: '隐私政策', privacy: [['概览', 'ArkLink 是独立视觉小说游戏，剧情游玩无需游戏账号。'], ['个人信息', 'App 不要求姓名、通讯录、照片、精确位置或账号凭据。通过邮件联系支持时，你自愿提供的内容会发送给开发者。'], ['本地数据', '剧情进度、路线记录与设置可能保存在当前设备。音效偏好与 T-402 行动预算也保存在本机。'], ['通知', '允许后，通知只用于本地游戏提醒，可在系统设置中关闭。'], ['分析与追踪', 'ArkLink 不使用第三方广告追踪器，不会跨 App 或网站追踪你。'], ['麦克风', '终端提示音仅用于播放。ArkLink 不录音，也不会请求麦克风权限。'], ['联系', contact]], effective: '政策更新：2026 年 10 月 23 日', footer: 'ArkLink: Global Extremes · 虚构气候悬疑故事。',
  },
];

const escape = (text) => String(text).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const route = (locale, page) => `/${locale.dir ? `${locale.dir}/` : ''}${page === 'index' ? '' : page}`;
const url = (locale, page) => domain + route(locale, page);
const markdownPath = (locale, page) => `/${locale.dir ? `${locale.dir}/` : ''}${page}.md`;
const write = (file, text) => {
  const target = path.join(outDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== text) fs.writeFileSync(target, text);
};

const sections = (items) => items.map(([heading, text]) => `<section><h2>${escape(heading)}</h2><p>${text}</p></section>`).join('\n');
const featureCards = (items) => `<div class="feature-grid">${items.map(([heading, text]) => `<article class="feature"><h3>${escape(heading)}</h3><p>${escape(text)}</p></article>`).join('')}</div>`;
const entity = (locale) => ({
  '@type': 'MobileApplication', '@id': `${domain}/#app`, name: productName,
  applicationCategory: 'GameApplication', operatingSystem: 'iOS, iPadOS',
  description: locale.lang === 'en' ? 'An offline climate thriller visual novel about disaster claims, evidence and branching decisions.' : '围绕灾难理赔、证据与分支选择展开的离线气候悬疑互动小说。',
  url: domain, downloadUrl: appStore, installUrl: appStore, image: `${domain}/images/app-icon.png`,
  inLanguage: ['en', 'zh-Hans'], sameAs: [appStore],
});
const layout = (locale, page, title, description, body, narrow = false) => {
  const breadcrumb = page === 'index' ? [] : [{ '@type': 'BreadcrumbList', '@id': `${url(locale, page)}#breadcrumb`, itemListElement: [
    { '@type': 'ListItem', position: 1, name: locale.nav[0], item: url(locale, 'index') },
    { '@type': 'ListItem', position: 2, name: locale.nav[pages.indexOf(page)], item: url(locale, page) },
  ] }];
  const schema = { '@context': 'https://schema.org', '@graph': [
    entity(locale),
    { '@type': 'WebSite', '@id': `${domain}/#website`, name: productName, url: domain, inLanguage: ['en', 'zh-Hans'] },
    { '@type': 'WebPage', '@id': `${url(locale, page)}#page`, url: url(locale, page), name: title, description, inLanguage: locale.lang,
      isPartOf: { '@id': `${domain}/#website` }, about: { '@id': `${domain}/#app` }, dateModified: updated,
      ...(page === 'index' ? {} : { breadcrumb: { '@id': `${url(locale, page)}#breadcrumb` } }),
    }, ...breadcrumb,
  ] };
  const languageLinks = locales.map((target) => `<a href="${route(target, page)}" lang="${target.lang}" hreflang="${target.lang}"${target.lang === locale.lang ? ' aria-current="true"' : ''}>${target.label}</a>`).join('');
  return `<!DOCTYPE html>
<html lang="${locale.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escape(description)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta property="og:site_name" content="${productName}">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url(locale, page)}">
  <meta property="og:locale" content="${locale.lang === 'en' ? 'en_US' : 'zh_CN'}">
  <meta property="og:image" content="${domain}/images/social-preview.jpg">
  <meta property="og:image:alt" content="${escape(locale.heroAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escape(title)}">
  <meta name="twitter:description" content="${escape(description)}">
  <meta name="twitter:image" content="${domain}/images/social-preview.jpg">
  <link rel="canonical" href="${url(locale, page)}">
  ${locales.map((target) => `<link rel="alternate" hreflang="${target.lang}" href="${url(target, page)}">`).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${url(locales[0], page)}">
  <link rel="alternate" type="text/markdown" href="${markdownPath(locale, page)}">
  <link rel="describedby" href="/llms.txt" type="text/plain">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
  <link rel="manifest" href="/favicon/site.webmanifest">
  <meta name="theme-color" content="#1fff6d">
  <link rel="stylesheet" href="/style/base.css">
  <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>
  <title>${escape(title)}</title>
</head>
<body><a class="skip-link" href="#main">${locale.lang === 'en' ? 'Skip to content' : '跳到正文'}</a>
<div class="page"><div class="container${narrow ? ' narrow' : ''}">
  <header class="topbar"><a class="brand" href="${route(locale, 'index')}" aria-label="${productName}"><img src="/images/app-icon.png" width="38" height="38" alt=""><span>ArkLink</span></a>
    <nav class="nav" aria-label="${locale.lang === 'en' ? 'Main navigation' : '主导航'}">${pages.map((name, i) => `<a href="${route(locale, name)}"${name === page ? ' aria-current="page"' : ''}>${locale.nav[i]}</a>`).join('')}<span class="language-links">${languageLinks}</span></nav>
  </header>
  ${body}
  <footer class="footer">${locale.footer}</footer>
</div></div></body>
</html>
`;
};
const download = (locale) => `<div class="actions"><a class="button primary" href="${appStore}"><img class="store-icon" src="/images/app-store-icon.svg" width="20" height="20" alt="">${locale.download}</a><a class="button" href="${route(locale, 'gameplay')}">${locale.secondary}</a></div>`;
const facts = (locale) => `<section class="section"><h2>${locale.factsTitle}</h2><dl class="facts">${locale.facts.map(([key, value]) => `<div><dt>${escape(key)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl></section>`;
const preview = (locale) => `<section class="section preview" id="next-update"><p class="kicker">${locale.previewLabel}</p><h2>${locale.previewTitle}</h2><p>${locale.previewBody}</p>${featureCards(locale.previewFeatures)}<p><a class="text-link" href="${route(locale, 'gameplay')}">${locale.secondary} →</a></p></section>`;
const strip = (text) => text.replace(/<!--.*?-->/g, '').replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, '[$2]($1)').replace(/<[^>]*>/g, '');
const mdSections = (items) => items.map(([heading, text]) => `## ${heading}\n\n${strip(text)}\n`).join('\n');

for (const locale of locales) {
  const homeBody = `<main id="main"><section class="hero"><div class="hero-media"><img src="/images/hero.jpg" alt="${escape(locale.heroAlt)}" fetchpriority="high" decoding="async"><div class="terminal-card"><span>ARKLINK / CATASTROPHE CLAIMS</span><strong>T-402</strong></div></div><div class="hero-copy"><p class="kicker">${locale.kicker}</p><h1>ArkLink</h1><p class="subtitle">${locale.subtitle}</p><p class="lead">${locale.lead}</p><div class="chip-row">${locale.chips.map((chip) => `<span>${chip}</span>`).join('')}</div>${download(locale)}</div></section><section class="section"><h2>${locale.featureTitle}</h2>${featureCards(locale.features)}</section>${preview(locale)}<section class="section split"><div><h2>${locale.storyTitle}</h2><p>${locale.storyBody}</p></div><img class="story-image" src="/images/risk-terminal.jpg" alt="${escape(locale.sceneAlt)}" loading="lazy" decoding="async"></section>${facts(locale)}<section class="section"><h2>${locale.faqHeading}</h2>${sections(locale.faq.slice(0, 3))}<p><a class="text-link" href="${route(locale, 'faq')}">${locale.nav[2]} →</a></p></section></main>`;
  write(`${locale.dir ? `${locale.dir}/` : ''}index.html`, layout(locale, 'index', locale.title, locale.description, homeBody));
  write(`${locale.dir ? `${locale.dir}/` : ''}index.md`, `# ${productName}\n\n${locale.lead}\n\n${mdSections(locale.features)}\n## ${locale.previewLabel}\n\n${locale.previewBody}\n\n${mdSections(locale.previewFeatures)}\n${mdSections(locale.facts)}\n[${locale.download}](${appStore})\n\n[${locale.nav[2]}](${url(locale, 'faq')})\n\nUpdated: ${updated}\n`);
  for (const page of pages.slice(1)) {
    const items = page === 'gameplay' ? locale.mechanics : locale[page === 'privacy-policy' ? 'privacy' : page];
    const key = page === 'privacy-policy' ? 'privacy' : page;
    const intro = page === 'gameplay' ? `<p class="lead">${locale.gameplayIntro}</p><aside class="release-note"><strong>${locale.previewLabel}</strong><p>${locale.previewBody}</p></aside>` : page === 'privacy-policy' ? `<p class="small">${locale.effective}</p>` : '';
    const body = `<main id="main" class="article"><h1 class="article-heading">${locale[`${key}Heading`]}</h1>${intro}${sections(items)}<section class="section install-panel"><h2>${productName}</h2><p>${locale.lead}</p>${download(locale)}</section></main>`;
    const prefix = locale.dir ? `${locale.dir}/` : '';
    write(`${prefix}${page}.html`, layout(locale, page, locale[`${key}Title`], locale[`${key}Description`], body, true));
    write(`${prefix}${page}.md`, `# ${locale[`${key}Heading`]}\n\n${page === 'gameplay' ? `${locale.previewLabel}\n\n${locale.gameplayIntro}\n\n${locale.previewBody}\n\n` : ''}${mdSections(items)}\nCanonical: ${url(locale, page)}\n\nUpdated: ${updated}\n`);
  }
}

write('404.html', `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Page not found | ArkLink</title><link rel="stylesheet" href="/style/base.css"></head><body><div class="page"><main class="container narrow article"><h1 class="article-heading">Page not found / 页面未找到</h1><p>The requested page does not exist. / 请求的页面不存在。</p><div class="actions"><a class="button" href="/">English home</a><a class="button" href="/zh-Hans/">中文首页</a></div></main></div></body></html>\n`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /cdn-cgi/\nDisallow: /scripts/\n\nSitemap: ${domain}/sitemap.xml\n`);
// Both supported sitemap formats derive from one canonical URL set.
write('sitemap.txt', `${locales.flatMap((locale) => pages.map((page) => url(locale, page))).join('\n')}\n`);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${locales.flatMap((locale) => pages.map((page) => `  <url><loc>${url(locale, page)}</loc><lastmod>${updated}</lastmod>${locales.map((target) => `<xhtml:link rel="alternate" hreflang="${target.lang}" href="${url(target, page)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${url(locales[0], page)}"/></url>`)).join('\n')}\n</urlset>\n`);
write('llms.txt', `# ${productName}\n\n> A free, offline, story-led climate thriller visual novel about catastrophe claims, evidence, medical access and branching decisions. / 免费离线气候悬疑互动小说，以巨灾理赔、证据与分支选择为核心。\n\nArkLink is available as a free download on the App Store for iPhone and iPad. English and Simplified Chinese are supported. No game account is required. Saves are local; cloud sync is not promised.\n\nRelease status: version 1.1.0 includes the T-402 operating window, override permits, persistent profile abilities, evidence cross-checks and optional terminal sound effects described on the Gameplay page. A new first-chapter run enables the operating window; older chapter-one saves keep their original story mode until replayed. This is a fictional game, not an insurance service or professional advice.\n\n## English\n\n- [Product overview](${domain}/index.md): game identity, platform, languages and release status.\n- [Gameplay and T-402 decisions](${domain}/gameplay.md): a 90-second action budget, two override permits, evidence comparison, profile abilities and optional audio; reading is free.\n- [FAQ](${domain}/faq.md): offline play, saves and feature availability.\n- [Help](${domain}/help.md): start, continue, replay, operating-window and sound controls.\n\n## 简体中文\n\n- [游戏概览](${domain}/zh-Hans/index.md): 游戏类型、平台、语言与发布状态。\n- [玩法与 T-402 决策](${domain}/zh-Hans/gameplay.md): 行动预算、越权授权、证据核验与画像能力，已在 1.1.0 版本上线。\n- [常见问题](${domain}/zh-Hans/faq.md): 离线、存档与功能是否上线。\n- [操作帮助](${domain}/zh-Hans/help.md): 开始、继续、重玩、行动窗口与音效开关。\n\n## Optional\n\n- [Official download](${appStore}): free download for iPhone and iPad.\n- [Support](${domain}/support.md): developer contact.\n- [Privacy policy](${domain}/privacy-policy.md): local data and optional notifications.\n\nUpdated: ${updated}\n`);
write('_headers', `/llms.txt\n  Content-Type: text/plain; charset=utf-8\n  X-Content-Type-Options: nosniff\n\n${locales.flatMap((locale) => pages.map((page) => `${markdownPath(locale, page)}\n  Content-Type: text/markdown; charset=utf-8\n  X-Robots-Tag: noindex\n  Link: <${url(locale, page)}>; rel="canonical"\n`)).join('\n')}\n/scripts/*\n  X-Robots-Tag: noindex\n\n/README.md\n  X-Robots-Tag: noindex\n\n/404\n  X-Robots-Tag: noindex\n`);
console.log(`Generated ${pages.length * locales.length} canonical pages, Markdown companions, sitemap, llms.txt and true-404 support in ${outDir}`);
