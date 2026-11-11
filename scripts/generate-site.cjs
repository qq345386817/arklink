const fs = require('node:fs');
const path = require('node:path');

const outDir = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const domain = 'https://arklink.luopeike.com';
const appStore = 'https://apps.apple.com/app/id6773223162';
const email = 'cameoshell09@gmail.com';
const updated = '2026-11-11';
// Recheck the public App Store listing before changing this curated release fact.
const releaseVersion = '1.2.0';
const productName = 'ArkLink: Global Extremes';
const pages = ['index', 'gameplay', 'faq', 'help', 'support', 'privacy-policy'];
const contact = `<!--email_off--><a href="mailto:${email}">${email}</a><!--/email_off-->`;
const locales = [
  {
    dir: '', lang: 'en', label: 'English',
    nav: ['Home', 'Gameplay', 'FAQ', 'Help', 'Support', 'Privacy'],
    title: 'ArkLink: Global Extremes | Visual Novel & Climate Mystery',
    description: 'A free offline visual novel for iPhone and iPad. Investigate altered evidence, protect your family and explore branching choices in a fictional climate mystery.',
    subtitle: 'Global Extremes · A climate thriller visual novel',
    kicker: 'Disaster claims. Human consequences.',
    lead: 'Play Carter Li, a catastrophe claims actuary caught between a drought-stricken valley, altered evidence and his son’s medical access. Review the claim, question the data and decide what goes on the record.',
    download: 'Download Free on the App Store', secondary: 'Explore the gameplay',
    chips: ['Branching visual novel', 'Offline · No ads', 'English & 简体中文'],
    featureTitle: 'An interactive story about evidence and impossible choices',
    features: [
      ['Investigate a climate mystery', 'Read a near-future thriller through a disaster claims terminal. Compare evidence, challenge a denial or protect your family. Decisions echo in later scenes and route records.'],
      ['Archives, endings and another route', 'Follow main chapters, unlock side-story archives and discover different endings. Review your choices, then replay a chapter to see another side of the case.'],
      ['Free, offline and without ads', 'Play the bundled story without ads or a game account, in English or Simplified Chinese. Progress saves locally so you can leave and return later. Downloads and updates need a connection.'],
    ],
    previewLabel: `AVAILABLE NOW · VERSION ${releaseVersion}`, previewTitle: 'T-402: an action budget, with time to read',
    previewBody: 'The opening case starts with a 90-second action budget and two override permits, not a real-time reading countdown. Reading, opening logs, saving and resuming do not spend it. Version 1.2.0 also refreshes the reader, history and chapter navigation. Older first-chapter saves keep their original story mode until you replay the chapter.',
    previewFeatures: [
      ['Read freely, spend deliberately', 'Take your time with the story. Only charged choices spend the displayed resources; the 90 seconds are neither a playtime estimate nor a countdown while you read.'],
      ['Two override permits', 'Copy sensitive evidence, request a manual review to extend the window, or use an override to freeze automatic denial. You cannot protect everything with the same permit.'],
      ['Consequences, not advance answers', 'Your profile influences the effects of decisions. Resource costs are visible, but release builds do not preview every choice’s score changes or route outcome. Discover the consequences through play.'],
    ],
    storyTitle: 'One claim, two kinds of survival',
    storyBody: 'T-402 concerns the Tana Valley’s water access. Jack’s medical treatment depends on Carter’s professional clearance. The opening case puts a family’s breathing space and a community’s future on the same screen.',
    heroAlt: 'Carter Li holding the ArkLink claims terminal in a city affected by extreme weather',
    sceneAlt: 'ArkLink terminal showing catastrophe claim information and evidence',
    factsTitle: 'Game facts', facts: [['Game', productName], ['Genre', 'Branching visual novel / climate mystery / interactive fiction'], ['Platform', 'iPhone and iPad · iOS / iPadOS 15.1 or later'], ['Languages', 'English and Simplified Chinese'], ['Price and ads', 'Free to play · No ads'], ['Progress', 'Offline story · Local saves · No game account'], ['Story', 'Main chapters, unlockable side-story archives and different endings'], ['Replay', 'Chapter replay and recorded routes'], ['Current version', releaseVersion]],
    gameplayTitle: 'ArkLink Gameplay | Evidence, Decisions & T-402',
    gameplayDescription: 'How ArkLink’s branching choices, evidence checks, archives and chapter replay work. T-402 starts with a 90-second action budget; reading does not spend it.',
    gameplayHeading: 'How decisions work in ArkLink',
    gameplayIntro: 'ArkLink is a branching visual novel and fictional climate mystery, not a real-world insurance service. Read a disaster claim, compare evidence and choose between corporate orders, a community’s survival and your family’s medical access. Choices leave traces in later scenes and recorded routes.',
    mechanics: [
      ['The action budget is not a reading timer', 'A new first-chapter run starts with a 90-second action budget. Reading dialogue, checking the log, saving and resuming do not spend it. Charged operations show their cost before you choose. This is not the length of the story.'],
      ['Override permits create a trade-off', 'You have two permits in the first chapter. Some evidence copies and emergency actions consume one. Saving both copies can leave no permit for freezing denial later; routine actions remain available.'],
      ['Compare evidence before choosing', 'The T-402 cross-check places 179 days, a 180-day threshold and a 2.00mm reading beside a write timestamp eleven minutes ahead of the field upload. You choose whether to lock the timestamp, request a physical recheck or buy a review window.'],
      ['A profile shapes consequences, not a ready-made answer', 'Human-first, system-correction and evidence-leverage profiles influence the effects of your decisions. The released game shows operation costs, not advance score changes or route predictions on every choice. Read the evidence and discover what your decision leaves behind.'],
      ['The window can survive, freeze or expire', 'The first chapter’s receipt records time spent and permits left. A freeze or an expired review window is acknowledged in chapter two. Resource rules apply to this opening case, not every chapter.'],
      ['Sound is optional', 'Terminal sound effects default to off. An independent switch enables selection, message, authorisation, denial, archive-unlock and low-window cues. Reading remains possible with sound off.'],
      ['Follow routes and unlock archives', 'Progress through main chapters and discover side-story archives and different endings. Route records let you revisit the traces of completed decisions. No fixed playtime or ending count is promised here.'],
      ['Read at your own pace', 'Version 1.2.0 refreshes the reader and history layout. Scroll long messages or use the reader’s previous and next controls, review the log and return to the story. Reading and navigation do not spend the T-402 action budget.'],
      ['Save and replay', 'Progress, operation costs and pending choices save locally. Restart Chapter lets you explore another route while keeping discovered files and recorded outcomes; it is different from clearing all progress. Older chapter-one saves keep their original story mode until replayed. Saves do not promise cloud sync or cross-device transfer.'],
    ],
    faqTitle: 'ArkLink FAQ | Free Offline Visual Novel, Choices & Saves',
    faqDescription: 'Is ArkLink free? Can you play offline, replay chapters or read without a timer? Answers about languages, local saves, branching routes and the T-402 case.',
    faqHeading: 'Frequently asked questions',
    faq: [
      ['What kind of game is ArkLink?', 'ArkLink: Global Extremes is a branching visual novel and interactive fiction game with a fictional climate mystery. As catastrophe claims actuary Carter Li, investigate altered evidence and make difficult choices about a valley’s survival, your son’s medical access and corporate orders.'],
      ['Can I play offline?', 'Yes. After installation, the bundled story and local saves work offline. Downloading, updating and opening external support or store links require a connection.'],
      ['Is ArkLink free, and does it have ads?', 'ArkLink is free to play, with no ads. No game account is required; story progress is stored on your device. The download link opens the official App Store listing.'],
      ['Which platforms and languages are supported?', 'The official download linked here is for iPhone and iPad, with iOS or iPadOS 15.1 or later. English and Simplified Chinese are included. No Google Play download is listed on this site.'],
      ['Does reading spend the 90-second budget?', 'No. T-402 uses an action budget. It decreases only when you choose a charged operation. Taking time to read is free.'],
      ['What happens when override permits run out?', 'In the first chapter, costly emergency actions become unavailable with a reason shown. Standard sign-off remains available, so running out of permits does not trap the story.'],
      ['What is available in version 1.2.0?', 'Version 1.2.0 refreshes reading, history and chapter navigation. It also includes the T-402 action budget, override permits, profile abilities, evidence cross-checks and optional terminal sounds. With an older first-chapter save, replay the chapter to enable the action window.'],
      ['Can I explore different routes and endings?', 'Yes. Follow the main chapters, unlock side-story archives and discover different endings. Restart a chapter to try another choice; discovered files and recorded outcomes remain available. The site does not promise a particular ending count or total playtime.'],
      ['Can I transfer my save to another device?', 'Progress is stored locally. Cloud sync and cross-device transfer are not promised. Restart Chapter replays a chapter; Clear Progress deletes the local story record.'],
      ['Do choices show the result before I decide?', 'Charged operations show resource costs and unavailable actions explain why they are blocked. Release builds hide developer score-change and route previews. Discover the narrative consequences after making your decision.'],
      ['Are these real climate or insurance recommendations?', 'No. The setting and claims are fictional game content. They are not professional climate, medical, financial or insurance advice.'],
    ],
    helpTitle: 'ArkLink Help | Start, Resume, Replay & Sound Settings',
    helpDescription: 'Start or resume ArkLink, read long messages, review history, explore archives and replay chapters. Understand local saves, languages and optional terminal sounds.',
    helpHeading: 'Help and getting started',
    help: [
      ['Begin the story', 'Open ArkLink and use the main start action to enter the opening calibration and first case. Button wording may vary with the installed version and language.'],
      ['Continue your progress', 'Use the continue action or chapter menu. Story progress and route records are saved locally on the current device.'],
      ['Read at your own pace', 'Use the show-full-message control while dialogue appears. Scroll long messages or use the reader’s previous and next controls. Open the history to review earlier text. These reading actions do not spend the T-402 budget.'],
      ['Replay a chapter', 'Use Restart Chapter and confirm to try another route. Discovered files and recorded outcomes are retained; restarting the first chapter restores its action budget and permits. Cancel the confirmation to keep your current place.'],
      ['Explore archives and route records', 'Open the archive from the home screen to browse discovered files and unlocked side stories. Completed outcomes and route records let you revisit the consequences of earlier decisions. Locked content is discovered through story progress.'],
      ['Language', 'The app follows the device language where supported. Available story languages are English and Simplified Chinese.'],
      ['Sound settings', 'Use the menu or in-game sound switch. Sound defaults to off; the preference is stored independently of story progress.'],
      ['Clear progress carefully', 'Clear Progress deletes local story progress. Restart Chapter replays a chapter. These are different actions; read the confirmation before clearing.'],
      ['T-402 operating window', 'The Gameplay page explains the 90-second action budget and two override permits. Reading, opening logs, saving and resuming do not consume them. Older chapter-one saves keep their original story mode until you replay the chapter.'],
    ],
    supportTitle: 'ArkLink Support | Contact & Gameplay Assistance', supportDescription: 'Contact ArkLink support about gameplay, saves, language or technical issues. Include the installed version, device and affected chapter.', supportHeading: 'Support',
    support: [['Contact the developer', contact], ['Information that helps', 'Include your device model, system version, installed ArkLink version, affected chapter and a short description of the issue. Never send passwords or account credentials.'], ['Gameplay help', 'Read the help and FAQ for reading controls, archives, local saves and chapter replay. The Gameplay page explains the T-402 action budget, two override permits and compatibility with older saves.']],
    privacyTitle: 'ArkLink Privacy Policy | Local Saves & Data Use', privacyDescription: 'ArkLink privacy information covering local story saves and settings, optional notifications, no required game account, and developer contact.', privacyHeading: 'Privacy policy',
    privacy: [['Overview', 'ArkLink is a standalone visual novel. It does not require a game account to play.'], ['Personal information', 'The app does not ask for your name, contacts, photos, precise location or account credentials. Contacting support by email shares the information you choose to include with the developer.'], ['Local data', 'Story progress, route records and settings may be stored locally on your device. Sound preferences and the T-402 action budget are also saved locally.'], ['Notifications', 'If enabled, notifications are local in-game reminders. You can disable them in system settings.'], ['Analytics and tracking', 'ArkLink does not use third-party advertising trackers or track you across apps and websites.'], ['Microphone', 'Terminal sound effects are playback only. ArkLink does not record audio or request microphone access.'], ['Contact', contact]],
    effective: 'Policy updated: October 23, 2026', footer: 'ArkLink: Global Extremes · A fictional climate thriller.',
  },
  {
    dir: 'zh-Hans', lang: 'zh-Hans', label: '简体中文',
    nav: ['首页', '玩法', '常见问题', '帮助', '支持', '隐私'],
    title: 'ArkLink: 全球极端灾变｜气候悬疑视觉小说与分支选择',
    description: 'ArkLink 是一款免费无广告、支持离线游玩的气候悬疑视觉小说。扮演 Carter Li，在被篡改的证据、河谷生存与儿子的治疗权限之间抉择，探索分支路线、不同结局与支线档案。开篇 90 秒是行动预算，阅读不扣时间。支持 iPhone、iPad、英文与简体中文。',
    subtitle: 'Global Extremes · 气候悬疑互动小说', kicker: '灾难理赔。人命与账本。',
    lead: '你是巨灾理赔精算员 Carter Li。一边是面临拒赔的干旱河谷，一边是被篡改的证据，以及儿子的治疗权限。审阅理赔、核对数据、决定留下什么记录，让不同的人承担你的签字带来的代价。',
    download: '在 App Store 免费下载', secondary: '了解游戏玩法',
    chips: ['分支视觉小说', '离线 · 无广告', '英文与简体中文'],
    featureTitle: '围绕证据与艰难选择展开的互动故事',
    features: [['用选择调查气候谜案', '在近未来灾难理赔终端中阅读悬疑故事。保留证据、质疑拒赔，或优先保护家人。你的决定会进入路线记录，并在后续剧情中留下回声。'], ['支线档案、结局与另一条路线', '推进主线章节，解锁支线档案，探索不同结局。查看选择留下了什么痕迹，再重开章节，读到同一案件的另一面。'], ['免费无广告，离线继续故事', '内置英文与简体中文，无需游戏账号，支持离线游玩。本地保存进度，让你随时离开终端、之后继续。下载和更新需要联网。']],
    previewLabel: `现已上线 · ${releaseVersion} 版本`, previewTitle: 'T-402：行动有预算，阅读有余裕',
    previewBody: '开篇案件提供 90 秒行动预算与 2 次越权授权，不是实时阅读倒计时。阅读、打开日志、存档和继续游戏都不扣时间。1.2.0 也更新了阅读、历史记录与章节导航界面；旧首章存档保留原剧情模式，重开本章后启用行动窗口。',
    previewFeatures: [['慢慢阅读，谨慎操作', '阅读故事不扣预算，只有消耗资源的选项才会扣除已标明的成本。90 秒既不是整部故事的时长，也不是阅读时持续减少的倒计时。'], ['2 次越权授权', '复制敏感证据、申请人工复核延长窗口，或越权冻结自动拒赔。有限的授权无法同时保住所有东西。'], ['看见后果，而不是提前知道答案', '画像会影响选择的实际效果。资源成本可见，但正式版不会提前展示每个选项的积分变化与路线结果。决定留下什么，由剧情揭晓。']],
    storyTitle: '一笔理赔，两种生存', storyBody: 'T-402 关系塔纳河谷的净水；Jack 的治疗权限依赖 Carter 的职业职级。开篇把一个家庭的呼吸与一整个社区的明天，压进同一张屏幕。',
    heroAlt: 'Carter Li 手持 ArkLink 灾难理赔终端，身后的城市遭遇极端天气', sceneAlt: 'ArkLink 风险终端显示巨灾理赔资料与证据',
    factsTitle: '游戏信息', facts: [['名称', 'ArkLink: 全球极端灾变'], ['类型', '分支视觉小说 / 气候悬疑 / 互动小说'], ['平台', 'iPhone 与 iPad · iOS / iPadOS 15.1 或更新版本'], ['语言', '英文、简体中文'], ['价格与广告', '免费游玩 · 无广告'], ['进度', '离线剧情 · 本地存档 · 无需游戏账号'], ['故事', '主线章节、可解锁支线档案与不同结局'], ['重玩', '章节重开与路线记录'], ['当前版本', releaseVersion]],
    gameplayTitle: 'ArkLink 玩法｜分支选择、证据调查、路线与支线档案', gameplayDescription: '了解 ArkLink 气候悬疑视觉小说的分支选择、证据核验、支线档案与章节重玩。开篇 T-402 提供 90 秒行动预算和 2 次越权授权，阅读、日志、存档和继续游戏都不扣时间。', gameplayHeading: '你的选择如何改变 ArkLink',
    gameplayIntro: 'ArkLink 是一款分支视觉小说，讲述虚构的气候悬疑故事。阅读灾难理赔案件，对照证据，在企业命令、社区生存与家人的医疗权限之间选择。决定会在后续剧情与路线记录中留下痕迹；游戏中的理赔规则不是真实保险服务。',
    mechanics: [['行动预算不是阅读计时器', '首章新进度提供 90 秒行动预算。阅读对话、打开记录、存档和继续游戏都不扣时间；只有选定有时间成本的操作才会扣除对应预算，按钮会先标明成本。90 秒不是故事总时长。'], ['越权授权需要取舍', '首章提供 2 次授权。部分证据副本与紧急操作消耗 1 次；过早把授权花在两份副本上，后面就可能无法冻结拒赔。常规操作仍然开放。'], ['先对照证据，再做判断', 'T-402 会并排展示 179 天记录、180 天门槛、2.00mm 读数，以及比现场上传早 11 分钟的写入时间。你决定锁定时间戳、申请物理复检，还是争取复核窗口。'], ['画像影响后果，不替你提前作答', '活人优先、系统修正、证据筹码会影响选择的实际效果。正式版显示操作的资源成本，但不会在每个选项上提前给出积分变化或路线预测。先阅读证据，再发现决定留下的后果。'], ['窗口可以保留、冻结或耗尽', '首章结算记录时间与剩余授权。冻结拒赔或耗尽复核窗口的结果，会在第二章得到回应。行动预算是这个开篇案件的机制，并非每章都有限时资源。'], ['音效可以关闭', '终端音效默认关闭，可独立启用选择、消息、授权、拒赔、档案解锁与低时间提示音。关闭声音仍可完整阅读。'], ['推进路线，解锁支线档案', '推进主线章节，发现支线档案与不同结局。路线记录帮助你回看已经作出的决定，章节重开则让你尝试另一条分支。'], ['按自己的节奏阅读', '1.2.0 更新了阅读与历史记录布局。长消息可以滚动，也可使用阅读区的前后翻页控件；打开日志回看内容后，再继续剧情。阅读和导航不消耗 T-402 行动预算。'], ['存档与重玩', '剧情进度、操作成本和待完成的选择保存在本机。重开本章可以尝试另一条路线，并保留已发现档案和已记录结果，与清除全部进度不同。旧首章存档保留原剧情模式，重开后启用行动窗口；不承诺云同步或跨设备迁移。']],
    faqTitle: 'ArkLink 常见问题｜免费离线视觉小说、路线与本地存档', faqDescription: 'ArkLink 是否免费无广告？能否离线游玩、重开章节或慢慢阅读？了解英文与简体中文支持、本地存档、分支路线、不同结局，以及 T-402 行动预算。', faqHeading: '常见问题',
    faq: [['ArkLink 是什么类型的游戏？', 'ArkLink: 全球极端灾变是一款分支视觉小说与互动小说游戏，讲述虚构的气候悬疑故事。你扮演巨灾理赔精算员 Carter Li，调查被篡改的证据，在河谷生存、儿子的医疗权限与企业命令之间作出艰难选择。'], ['可以离线游玩吗？', '可以。安装后，内置剧情与本地存档支持离线使用。下载、更新和打开外部商店或支持链接需要联网。'], ['ArkLink 免费吗？有广告吗？', '游戏免费游玩，无广告，也无需游戏账号。剧情进度保存在当前设备，下载链接指向官方 App Store 页面。'], ['支持哪些平台和语言？', '官网提供 iPhone 与 iPad 的 App Store 下载，需要 iOS 或 iPadOS 15.1 或更新版本，内置英文和简体中文。本站没有提供 Google Play 下载链接。'], ['读文字会消耗 90 秒吗？', '不会。T-402 使用行动预算，只在选定需要消耗时间的操作后扣除。慢慢阅读不扣预算。'], ['越权授权用完会卡关吗？', '不会。首章机制会禁用需要额外授权的紧急操作，并显示原因；常规签收仍可执行。'], ['1.2.0 版本提供哪些内容？', '1.2.0 更新了阅读、历史记录与章节导航界面，也包含 T-402 行动预算、越权授权、画像能力、证据交叉核验与可选终端音效。如果继续的是旧首章存档，重开本章即可启用行动窗口。'], ['能探索不同路线和结局吗？', '可以。推进主线章节、解锁支线档案，探索不同结局；重开章节可尝试其他选择，并保留已发现档案与已记录结果。这里不承诺固定的结局数量或总游玩时长。'], ['存档可以迁移到其他设备吗？', '进度保存在本机，不承诺云同步或跨设备迁移。重开本章用于重玩章节；清除进度会删除本地剧情记录。'], ['选项会提前告诉我结果吗？', '消耗资源的操作会标明成本，无法执行的操作会说明原因。正式版隐藏开发用积分变化与路线预览，选择后的剧情会让你发现实际后果。'], ['游戏内容是真实理赔或气候建议吗？', '不是。剧情与案件属于虚构游戏内容，不构成专业气候、医疗、金融或保险建议。']],
    helpTitle: 'ArkLink 帮助｜阅读、历史记录、支线档案与章节重玩', helpDescription: '了解 ArkLink 如何开始或继续故事、阅读长消息、查看历史、探索支线档案与重开章节，以及本地存档、双语支持和可选终端音效。', helpHeading: '帮助与入门',
    help: [['开始故事', '打开 ArkLink，使用首页的主开始按钮进入开篇权限校准与第一笔案件。按钮名称可能随版本和语言有所不同。'], ['继续当前进度', '使用继续按钮或章节菜单。本机保存剧情进度与路线记录。'], ['按自己的节奏阅读', '逐字显示时，可使用立即显示全文控件；长消息可以滚动，也可使用阅读区的前后翻页控件。打开历史记录可回看先前文字。这些阅读操作不消耗 T-402 行动预算。'], ['重开章节', '选择重开本章并确认，可以尝试另一条路线，已发现档案和已记录结果会保留。重开首章会恢复行动预算与授权次数；取消确认则继续当前进度。'], ['探索档案与路线记录', '从首页打开档案，查看已发现文件与已解锁支线故事。已完成结果和路线记录可供回顾；尚未解锁的内容随剧情进展发现。'], ['语言', 'App 在支持范围内跟随系统语言，目前提供英文和简体中文剧情。'], ['音效开关', '使用首页或游戏内的音效开关，默认关闭。声音偏好独立于剧情进度保存。'], ['谨慎清除进度', '清除进度会删除本地剧情记录，重开本章则是重玩当前章节。请先阅读确认说明。'], ['T-402 行动窗口', '玩法页面介绍 90 秒行动预算与 2 次越权授权。阅读、日志、存档和继续游戏不扣预算；旧首章存档保留原剧情模式，重开本章后启用行动窗口。']],
    supportTitle: 'ArkLink 支持｜联系开发者与游戏问题反馈', supportDescription: '联系 ArkLink 开发者，反馈剧情、存档、语言与技术问题。请附上安装版本、设备与受影响章节，勿发送密码。', supportHeading: '用户支持', support: [['联系开发者', contact], ['反馈时请附上', '设备型号、系统版本、已安装的 ArkLink 版本、受影响章节与简短问题描述。不要发送密码或账号凭据。'], ['先查看玩法与帮助', '帮助和常见问题介绍阅读操作、档案、本地存档与章节重玩；玩法页面解释 T-402 行动预算、2 次越权授权和旧存档兼容方式。']],
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

const tokens = JSON.parse(fs.readFileSync(path.join(__dirname, '../design-system/tokens.json'), 'utf8'));
const variables = ['color', 'spacing', 'radius'].flatMap((family) => tokens[family].tokens.map((token) => `  --${token.name}: ${token.value};`));
variables.push(...Object.entries(tokens.type.families).map(([name, value]) => `  --font-${name}: ${value};`));
variables.push(...tokens.type.groups.flatMap((group) => group.styles.flatMap((style) => [
  `  --type-${style.name}-size: ${style.fontSize};`,
  `  --type-${style.name}-leading: ${style.lineHeight};`,
  `  --type-${style.name}-weight: ${style.fontWeight};`,
])));
write('style/tokens.css', `/* Generated by scripts/generate-site.cjs from design-system/tokens.json. */\n:root {\n${variables.join('\n')}\n}\n`);

const copy = (locale) => locale.lang === 'en' ? {
  genre: 'A BRANCHING VISUAL NOVEL · CLIMATE MYSTERY',
  heroLead: 'Altered evidence. Your son’s treatment. Who gets protected?',
  availability: 'Free on iPhone & iPad',
  reading: 'Reading is free. Your actions have a cost.',
  case: 'CASE FILE', time: 'ACTION BUDGET', permits: 'OVERRIDE PERMITS',
  storyLabel: '01 / THE STORY', mechanicsLabel: '02 / THE DECISIONS', screensLabel: '03 / INSIDE ARKLINK',
  screensTitle: 'A story told through the terminal.',
  screensIntro: 'Choose a profile, read the evidence and follow the consequences. App Store listing screenshots; the installed app’s layout may differ.',
  screens: ['Choose your profile', 'Review the case', 'See the consequence'],
  screenAlt: ['ArkLink profile calibration screen from the App Store listing', 'ArkLink T-402 case and choices screen from the App Store listing', 'ArkLink choice feedback screen from the App Store listing'],
  fullImage: 'Open full screenshot', factsLabel: 'THE DETAILS', faqLabel: 'BEFORE YOU PLAY',
  moreFaq: 'All questions', toc: 'On this page', menu: 'Menu', storeShort: 'Get the game',
  downloadTitle: 'The next signature is yours.', downloadBody: 'A free offline visual novel for readers of mystery thrillers and difficult moral choices. No ads. English and Simplified Chinese on iPhone and iPad.',
  storyAlt: 'ArkLink claims terminal overlooking a drought-stricken valley',
} : {
  genre: '分支视觉小说 · 气候悬疑',
  heroLead: '被篡改的证据。儿子的治疗权限。你会保护谁？',
  availability: 'iPhone 与 iPad 免费下载',
  reading: '阅读不扣时间，每次操作都有代价。',
  case: '案件档案', time: '行动预算', permits: '越权授权',
  storyLabel: '01 / 故事', mechanicsLabel: '02 / 决策', screensLabel: '03 / 游戏画面',
  screensTitle: '在终端里，读懂每一次选择。',
  screensIntro: '选择画像、阅读证据，再看见决定留下的后果。以下为 App Store 商店截图，已安装版本的界面布局可能有所不同。',
  screens: ['选择你的画像', '审阅当前案件', '看见选择的后果'],
  screenAlt: ['App Store 商店中的 ArkLink 画像校准界面', 'App Store 商店中的 ArkLink T-402 案件与选项界面', 'App Store 商店中的 ArkLink 选择后果界面'],
  fullImage: '查看完整截图', factsLabel: '游戏信息', faqLabel: '开始之前',
  moreFaq: '查看全部问题', toc: '本页目录', menu: '导航', storeShort: '免费下载',
  downloadTitle: '下一笔签名，由你写下。', downloadBody: '给喜欢悬疑故事与道德两难的读者：免费无广告的离线视觉小说，支持 iPhone、iPad、英文与简体中文。',
  storyAlt: 'ArkLink 理赔终端，窗外是干旱的河谷',
};
const sections = (items) => items.map(([heading, text], index) => `<section id="section-${index + 1}"><h2>${escape(heading)}</h2><p>${text}</p></section>`).join('\n');
const faqSections = (items) => items.map(([question, answer], index) => `<details class="faq-item" id="section-${index + 1}"><summary>${escape(question)}</summary><div><p>${escape(answer)}</p></div></details>`).join('\n');
const featureCards = (items) => `<div class="feature-grid">${items.map(([heading, text], index) => `<article class="feature"><span class="feature-number" aria-hidden="true">0${index + 1}</span><h3>${escape(heading)}</h3><p>${escape(text)}</p></article>`).join('')}</div>`;
const entity = (locale) => ({
  '@type': 'MobileApplication', '@id': `${domain}/#app`, name: productName,
  alternateName: 'ArkLink: 全球极端灾变', softwareVersion: releaseVersion,
  applicationCategory: 'GameApplication', operatingSystem: 'iOS, iPadOS',
  description: locale.description,
  isAccessibleForFree: true,
  featureList: locale.features.map(([heading]) => heading),
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
      ...(page === 'index' ? { mainEntity: { '@id': `${domain}/#app` } } : {}),
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
  <meta property="og:locale:alternate" content="${locale.lang === 'en' ? 'zh_CN' : 'en_US'}">
  <meta property="og:image" content="${domain}/images/social-preview.jpg">
  <meta property="og:image:alt" content="${escape(locale.heroAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escape(title)}">
  <meta name="twitter:description" content="${escape(description)}">
  <meta name="twitter:image" content="${domain}/images/social-preview.jpg">
${page === 'index' ? '  <meta name="apple-itunes-app" content="app-id=6773223162">\n' : ''}  <meta name="twitter:image:alt" content="${escape(locale.heroAlt)}">
  <link rel="canonical" href="${url(locale, page)}">
  ${locales.map((target) => `<link rel="alternate" hreflang="${target.lang}" href="${url(target, page)}">`).join('\n  ')}
  <link rel="alternate" hreflang="x-default" href="${url(locales[0], page)}">
  <link rel="alternate" type="text/markdown" href="${markdownPath(locale, page)}">
  <link rel="describedby" href="/llms.txt" type="text/plain">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
  <link rel="manifest" href="/favicon/site.webmanifest">
  <meta name="theme-color" content="#090d0b">
${page === 'index' ? '  <link rel="preload" as="image" href="/images/hero.jpg">\n' : ''}  <link rel="stylesheet" href="/style/tokens.css?v=20261024">
  <link rel="stylesheet" href="/style/base.css?v=20261024">
  <script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>
  <title>${escape(title)}</title>
</head>
<body><a class="skip-link" href="#main">${locale.lang === 'en' ? 'Skip to content' : '跳到正文'}</a>
<div class="page">
  <header class="site-header"><div class="container topbar"><a class="brand" href="${route(locale, 'index')}" aria-label="${productName}"><img src="/images/brand-mark.png" width="36" height="36" alt=""><span>ArkLink<small>GLOBAL EXTREMES</small></span></a>
    <nav class="nav desktop-nav" aria-label="${locale.lang === 'en' ? 'Main navigation' : '主导航'}">${['gameplay', 'faq', 'help'].map((name) => `<a href="${route(locale, name)}"${name === page ? ' aria-current="page"' : ''}>${locale.nav[pages.indexOf(name)]}</a>`).join('')}</nav>
    <div class="header-actions"><div class="language-links" aria-label="${locale.lang === 'en' ? 'Language' : '语言'}">${languageLinks}</div><a class="button primary header-download" href="${appStore}">${copy(locale).storeShort}</a></div>
    <details class="mobile-menu"><summary>${copy(locale).menu}</summary><nav aria-label="${locale.lang === 'en' ? 'Mobile navigation' : '移动导航'}">${pages.map((name, i) => `<a href="${route(locale, name)}"${name === page ? ' aria-current="page"' : ''}>${locale.nav[i]}</a>`).join('')}<div class="language-links">${languageLinks}</div><a class="text-link" href="${appStore}">${locale.download}</a></nav></details>
  </div></header>
  ${body}
  <footer class="site-footer"><div class="container footer-inner"><div><a class="footer-brand" href="${route(locale, 'index')}">ArkLink<span>Global Extremes</span></a><p>${locale.footer}</p></div><nav aria-label="${locale.lang === 'en' ? 'Footer navigation' : '页脚导航'}">${pages.slice(1).map((name, i) => `<a href="${route(locale, name)}">${locale.nav[i + 1]}</a>`).join('')}</nav></div></footer>
</div></body>
</html>
`;
};
const download = (locale, secondary = true) => `<div class="actions"><a class="button primary" href="${appStore}"><img class="store-icon" src="/images/app-store-icon.svg" width="20" height="20" alt="">${locale.download}</a>${secondary ? `<a class="button secondary" href="${route(locale, 'gameplay')}">${locale.secondary}<span aria-hidden="true">↗</span></a>` : ''}</div>`;
const facts = (locale) => `<section class="section facts-section"><div class="container"><p class="section-label">${copy(locale).factsLabel}</p><h2>${locale.factsTitle}</h2><dl class="facts">${locale.facts.map(([key, value]) => `<div><dt>${escape(key)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl></div></section>`;
const preview = (locale) => `<section class="section mechanics" id="next-update"><div class="container"><div class="section-heading"><div><p class="section-label">${copy(locale).mechanicsLabel}</p><h2>${locale.previewTitle}</h2></div><a class="text-link" href="${route(locale, 'gameplay')}">${locale.secondary} <span aria-hidden="true">↗</span></a></div><p class="release-label">${locale.previewLabel}</p><p class="section-intro">${locale.previewBody}</p><dl class="case-readout"><div><dt>${copy(locale).case}</dt><dd>T-402</dd></div><div><dt>${copy(locale).time}</dt><dd>90<span>${locale.lang === 'en' ? 'sec' : '秒'}</span></dd></div><div><dt>${copy(locale).permits}</dt><dd>02<span>${locale.lang === 'en' ? 'permits' : '次'}</span></dd></div></dl><p class="readout-note">${copy(locale).reading}</p>${featureCards(locale.previewFeatures)}</div></section>`;
const screenshots = (locale) => `<section class="section screenshot-section"><div class="container"><p class="section-label">${copy(locale).screensLabel}</p><div class="section-heading"><h2>${copy(locale).screensTitle}</h2><p>${copy(locale).screensIntro}</p></div><div class="screenshot-grid">${['profile', 'case', 'choice'].map((name, i) => `<figure><a href="/images/store-${name}.webp" target="_blank" rel="noopener" aria-label="${copy(locale).fullImage}: ${copy(locale).screens[i]}"><img src="/images/store-${name}.webp" alt="${copy(locale).screenAlt[i]}" width="638" height="1386" loading="lazy" decoding="async"></a><figcaption><span>0${i + 1}</span>${copy(locale).screens[i]}</figcaption></figure>`).join('')}</div></div></section>`;
const install = (locale) => `<section class="install-band"><div class="container install-inner"><div><p class="section-label">ARKLINK / GLOBAL EXTREMES</p><h2>${copy(locale).downloadTitle}</h2><p>${copy(locale).downloadBody}</p></div>${download(locale, false)}</div></section>`;
const strip = (text) => text.replace(/<!--.*?-->/g, '').replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, '[$2]($1)').replace(/<[^>]*>/g, '');
const mdSections = (items) => items.map(([heading, text]) => `## ${heading}\n\n${strip(text)}\n`).join('\n');

for (const locale of locales) {
  const homeBody = `<main id="main"><section class="hero"><img class="hero-art" src="/images/hero.jpg" alt="${escape(locale.heroAlt)}" width="1024" height="1536" fetchpriority="high" decoding="async"><div class="hero-scrim" aria-hidden="true"></div><div class="container hero-inner"><div class="hero-copy"><p class="section-label">${copy(locale).genre}</p><h1>ArkLink</h1><p class="hero-subtitle">Global Extremes</p><p class="hero-lead">${copy(locale).heroLead}</p>${download(locale)}<p class="hero-meta">${copy(locale).availability}<span aria-hidden="true"> / </span>${locale.lang === 'en' ? 'English + 简体中文' : '英文 + 简体中文'}</p></div><p class="hero-caption">${locale.lang === 'en' ? 'CARTER LI / CATASTROPHE CLAIMS' : 'CARTER LI / 巨灾理赔'}</p></div></section><div class="promise-strip"><div class="container">${locale.chips.map((chip) => `<span>${chip}</span>`).join('')}<a href="#next-update">T-402 <span aria-hidden="true">↓</span></a></div></div><section class="section story-section"><div class="container"><div class="story-grid"><div><p class="section-label">${copy(locale).storyLabel}</p><h2>${locale.storyTitle}</h2><p class="lead">${locale.lead}</p><p>${locale.storyBody}</p><a class="text-link" href="${route(locale, 'gameplay')}">${locale.secondary} <span aria-hidden="true">↗</span></a></div><figure class="story-figure"><img src="/images/denial-countdown.jpg" alt="${copy(locale).storyAlt}" width="1024" height="1536" loading="lazy" decoding="async"><figcaption>T-402 / ${locale.lang === 'en' ? 'TANA VALLEY' : '塔纳河谷'}</figcaption></figure></div>${featureCards(locale.features)}</div></section>${preview(locale)}${screenshots(locale)}${facts(locale)}<section class="section faq-section"><div class="container faq-grid"><div><p class="section-label">${copy(locale).faqLabel}</p><h2>${locale.faqHeading}</h2><a class="text-link" href="${route(locale, 'faq')}">${copy(locale).moreFaq} <span aria-hidden="true">↗</span></a></div><div>${faqSections(locale.faq.slice(0, 4))}</div></div></section>${install(locale)}</main>`;
  write(`${locale.dir ? `${locale.dir}/` : ''}index.html`, layout(locale, 'index', locale.title, locale.description, homeBody));
  write(`${locale.dir ? `${locale.dir}/` : ''}index.md`, `# ${locale.lang === 'en' ? productName : 'ArkLink: 全球极端灾变'}\n\n${locale.description}\n\n${locale.lead}\n\n${mdSections(locale.features)}\n## ${locale.previewLabel}\n\n${locale.previewBody}\n\n${mdSections(locale.previewFeatures)}\n${mdSections(locale.facts)}\n[${locale.download}](${appStore})\n\n[${locale.nav[2]}](${url(locale, 'faq')})\n\nCanonical: ${url(locale, 'index')}\n\nUpdated: ${updated}\n`);
  for (const page of pages.slice(1)) {
    const items = page === 'gameplay' ? locale.mechanics : locale[page === 'privacy-policy' ? 'privacy' : page];
    const key = page === 'privacy-policy' ? 'privacy' : page;
    const intro = page === 'gameplay' ? `<p class="lead">${locale.gameplayIntro}</p><aside class="release-note"><strong>${locale.previewLabel}</strong><p>${locale.previewBody}</p></aside>` : page === 'privacy-policy' ? `<p class="small">${locale.effective}</p>` : '';
    const body = `<main id="main"><div class="container article-layout"><aside class="article-sidebar"><a class="back-link" href="${route(locale, 'index')}"><span aria-hidden="true">←</span> ${locale.nav[0]}</a><p class="section-label">${copy(locale).toc}</p><nav aria-label="${copy(locale).toc}">${items.map(([heading], i) => `<a href="#section-${i + 1}">${escape(heading)}</a>`).join('')}</nav></aside><article class="article"><header class="article-header"><p class="section-label">ARKLINK / ${locale.nav[pages.indexOf(page)]}</p><h1 class="article-heading">${locale[`${key}Heading`]}</h1>${intro}</header>${page === 'faq' ? faqSections(items) : sections(items)}${page === 'gameplay' ? `<figure class="article-screenshot"><a href="/images/store-case.webp" target="_blank" rel="noopener" aria-label="${copy(locale).fullImage}"><img src="/images/store-case.webp" width="638" height="1386" alt="${copy(locale).screenAlt[1]}" loading="lazy"></a><figcaption>${copy(locale).screensIntro}</figcaption></figure>` : ''}</article></div>${install(locale)}</main>`;
    const prefix = locale.dir ? `${locale.dir}/` : '';
    write(`${prefix}${page}.html`, layout(locale, page, locale[`${key}Title`], locale[`${key}Description`], body, true));
    write(`${prefix}${page}.md`, `# ${locale[`${key}Heading`]}\n\n${page === 'gameplay' ? `${locale.previewLabel}\n\n${locale.gameplayIntro}\n\n${locale.previewBody}\n\n` : page === 'privacy-policy' ? `${locale.effective}\n\n` : ''}${mdSections(items)}\nCanonical: ${url(locale, page)}\n\nUpdated: ${updated}\n`);
  }
}

write('404.html', `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Page not found | ArkLink</title><link rel="stylesheet" href="/style/tokens.css?v=20261024"><link rel="stylesheet" href="/style/base.css?v=20261024"></head><body><div class="page"><main class="container narrow article"><h1 class="article-heading">Page not found / 页面未找到</h1><p>The requested page does not exist. / 请求的页面不存在。</p><div class="actions"><a class="button" href="/">English home</a><a class="button" href="/zh-Hans/">中文首页</a></div></main></div></body></html>\n`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /cdn-cgi/\nDisallow: /scripts/\nDisallow: /design-system/\n\nSitemap: ${domain}/sitemap.xml\n`);
// Both supported sitemap formats derive from one canonical URL set.
write('sitemap.txt', `${locales.flatMap((locale) => pages.map((page) => url(locale, page))).join('\n')}\n`);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${locales.flatMap((locale) => pages.map((page) => `  <url><loc>${url(locale, page)}</loc><lastmod>${updated}</lastmod>${locales.map((target) => `<xhtml:link rel="alternate" hreflang="${target.lang}" href="${url(target, page)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${url(locales[0], page)}"/></url>`)).join('\n')}\n</urlset>\n`);
write('llms.txt', `# ${productName}\n\n> A free offline branching visual novel and fictional climate mystery. Investigate altered evidence and choose between a community’s survival and your son’s medical access. / ArkLink: 全球极端灾变，免费无广告的离线分支视觉小说，在证据、河谷生存与儿子的治疗权限之间抉择。\n\n## Product facts\n\n- Official App Store app ID: 6773223162. The linked release is for iPhone and iPad, requiring iOS or iPadOS 15.1 or later. No Google Play download is listed here.\n- English and Simplified Chinese are included. Free to play, with no ads or required game account.\n- Play Carter Li, a catastrophe claims actuary, inside a near-future disaster claims terminal. Main chapters, unlockable side-story archives, different endings and recorded routes support chapter replay. No total playtime or fixed ending count is stated.\n- The opening T-402 case starts with a 90-second action budget and two override permits. This is not a real-time reading countdown or the length of the game. Reading, opening logs, saving and resuming do not spend it. Charged choices show costs; manual review can extend the window, and an override can freeze automatic denial. These resource rules do not apply to every chapter.\n- Progress saves locally. Restarting a chapter preserves discovered files and recorded outcomes; clearing progress deletes the local story record. Cloud sync and cross-device transfer are not promised.\n- Public version ${releaseVersion}, checked ${updated}, refreshes reading, history and chapter navigation. It includes T-402 mechanics, profile abilities and optional terminal sound effects. Older first-chapter saves keep their original story mode until replayed. Release builds hide developer score-change and route previews, not operation costs.\n- The story is fiction, not professional climate, medical, financial or insurance advice.\n\n## English\n\n- [Product overview](${domain}/index.md): identity, story, archives, endings, offline play, languages and current version.\n- [Gameplay and T-402 decisions](${domain}/gameplay.md): branching choices, evidence, action costs, permits, reading and replay.\n- [FAQ](${domain}/faq.md): free play, ads, reading budget, saves, routes and availability.\n- [Help](${domain}/help.md): reader controls, history, archives, local saves, chapter replay and sound.\n\n## 简体中文\n\n- [游戏概览](${domain}/zh-Hans/index.md): 视觉小说定位、故事、支线档案、不同结局、双语与当前版本。\n- [玩法与 T-402 决策](${domain}/zh-Hans/gameplay.md): 行动预算与越权授权、分支选择、证据核验、阅读和重玩。阅读不扣时间。\n- [常见问题](${domain}/zh-Hans/faq.md): 免费无广告、离线、本地存档、路线与平台支持。\n- [操作帮助](${domain}/zh-Hans/help.md): 阅读控件、历史记录、档案、继续游戏与章节重开。\n\n## Optional\n\n- [Official download](${appStore}): authoritative App Store listing for availability and compatibility.\n- [Support](${domain}/support.md): developer contact.\n- [Privacy policy](${domain}/privacy-policy.md): local data and optional notifications.\n- [中文支持](${domain}/zh-Hans/support.md): 联系开发者。\n- [中文隐私政策](${domain}/zh-Hans/privacy-policy.md): 本地数据与可选通知。\n\nUpdated: ${updated}\n`);
write('_headers', `/llms.txt\n  Content-Type: text/plain; charset=utf-8\n  X-Content-Type-Options: nosniff\n\n${locales.flatMap((locale) => pages.map((page) => `${markdownPath(locale, page)}\n  Content-Type: text/markdown; charset=utf-8\n  X-Robots-Tag: noindex\n  Link: <${url(locale, page)}>; rel="canonical"\n`)).join('\n')}\n/scripts/*\n  X-Robots-Tag: noindex\n\n/design-system/*\n  X-Robots-Tag: noindex\n\n/images/README.md\n  X-Robots-Tag: noindex\n\n/README.md\n  X-Robots-Tag: noindex\n\n/404\n  X-Robots-Tag: noindex\n`);
console.log(`Generated ${pages.length * locales.length} canonical pages, Markdown companions, sitemap, llms.txt and true-404 support in ${outDir}`);
