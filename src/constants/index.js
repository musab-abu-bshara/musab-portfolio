import {
  mobile,
  backend,
  creator,
  web,
  // Import optimized versions
  mobileAvif,
  backendAvif,
  creatorAvif,
  webAvif,
  mobileWebp,
  backendWebp,
  creatorWebp,
  webWebp,
  javascript,
  rust,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  bootstrap,
  sass,
  materialui,
  less,
  jest,
  nestjs,
  nodejs,
  java,
  nextjs,
  Cypress,
  typescript,
  expressjs,
  tauri,
  orienteed,
  jaffal,
  najah,
  grids,
  thuraa,
  dashboard,
  villages,
  kasper,
  elzero,
  leon,
  // Import optimized project images
  thuraaAvif,
  dashboardAvif,
  villagesAvif,
  kasperAvif,
  elzeroAvif,
  leonAvif,
  thuraaWebp,
  dashboardWebp,
  villagesWebp,
  kasperWebp,
  elzeroWebp,
  leonWebp,
  sc,
  kh,
  md,
  g,
  ft,
  ls,
  // Import optimized ongoing images
  scAvif,
  khAvif,
  mdAvif,
  gAvif,
  ftAvif,
  lsAvif,
  scWebp,
  khWebp,
  mdWebp,
  gWebp,
  ftWebp,
  lsWebp,
  threejs,
  logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "من أنا",
  },
  {
    id: "experience",
    title: "خبرتي",
  },
  // "Works" section is hidden for now (see App.jsx). Restore this link with it.
  // {
  //   id: "works",
  //   title: "أعمالي",
  // },
  {
    id: "ongoing",
    title: "مشاريع حالية",
  },
  {
    id: "contact",
    title: "تواصل معي",
  },
];

const services = [
  {
    title: "تطوير مواقع الويب",
    icon: web,
    iconAvif: webAvif,
    iconWebp: webWebp,
  },
  {
    title: "تطوير واجهات برمجية",
    icon: backend,
    iconAvif: backendAvif,
    iconWebp: backendWebp,
  },
  {
    title: "اختبار برمجيات",
    icon: creator,
    iconAvif: creatorAvif,
    iconWebp: creatorWebp,
  },
  {
    title: "تطبيقات سطح المكتب",
    icon: mobile,
    iconAvif: mobileAvif,
    iconWebp: mobileWebp,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "rust",
    icon: rust,
  },
  {
    name: "++C",
    icon: cpp,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "tauri",
    icon: tauri,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "materialui",
    icon: materialui,
  },
  {
    name: "less",
    icon: less,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Cypress",
    icon: Cypress,
  },
];

const experiences = [
  {
    title: "هندسة الحاسوب",
    company_name: "جامعة النجاح الوطنية",
    icon: najah,
    iconBg: "#383E56",
    date: "2021 - 2025",
    points: [
      "تخرجت في جامعة النجاح الوطنية، تخصص هندسة الحاسوب.",
      "اكتسبت خلالها مهارات متقدمة في البرمجة وتطوير البرمجيات.",
      "تعلمت أساسيات هندسة البرمجيات وبناء الأنظمة.",
      "شاركت في مشاريع تخرج عملية وتطبيقية.",
    ],
  },
  {
    title: "تدريب تطوير واجهات المستخدم",
    company_name: "Grids Apps",
    icon: grids,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "تدربت في شركة Grids Apps في مسار تطوير واجهات المستخدم.",
      "طبقت ما تعلمته في مشاريع عملية واقعية.",
      "عملت مع فرق متعددة التخصصات لبناء تطبيقات ويب حديثة.",
      "ساهمت في تطوير واجهات مستخدم متجاوبة باستخدام React و Next.js.",
    ],
  },
  {
    title: "منصب مختبر برمجيات QA",
    company_name: "Jaffal Group",
    icon: jaffal,
    iconBg: "#383E56",
    date: "فبراير 2026 - حتى الآن",
    points: [
      "العمل على ضمان جودة المنتج البرمجي الذي تقدمه الشركة من خلال manual testing.",
      "العمل على بناء بيئة automation testing متكاملة باستخدام Cypress.",
      "تسهيل عمل أفراد الفريق من خلال تقديم تقارير واضحة ومفصلة بخصوص bugs.",
      "تطبيق اختبارات امان تضمن حماية المنتج البرمجي من عمليات الاحتيال.",
    ],
  },
];

// Real testimonials only. Add entries here when real references are available.
const testimonials = [];

const projects = [
  {
    name: "منصة ذرى",
    description:
      "منصة شاملة لإدارة ونشر الدورات التدريبية. طورت واجهات التفاعل بين المستخدمين والدورات والشركات والمدربين، بالإضافة إلى إدارة الملفات الشخصية.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: thuraa,
    imageAvif: thuraaAvif,
    imageWebp: thuraaWebp,
    source_code_link: "https://thuraa.com",
  },
  {
    name: "موقع القرى الفلسطينية",
    description:
      "نظام لإدارة معلومات القرى وعرض الإحصائيات التفاعلية باستخدام Chart.js. يوفر تحليلات بصرية شاملة لبيانات القرى والسكان.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "charts",
        color: "blue-text-gradient",
      },
    ],
    image: villages,
    imageAvif: villagesAvif,
    imageWebp: villagesWebp,
    source_code_link: "https://musab-abu-bshara.github.io/villages/",
  },
  {
    name: "قالب موقع Elzero",
    description:
      "تطبيق ويب من صفحة واحدة (SPA) يمثل نموذجاً لموقع شركة حديث. تصميم احترافي ومتجاوب مع واجهة مستخدم متطورة وتجربة استخدام ممتازة.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "SPA",
        color: "pink-text-gradient",
      },
    ],
    image: elzero,
    imageAvif: elzeroAvif,
    imageWebp: elzeroWebp,
    source_code_link: "https://musab-abu-bshara.github.io/Elzero-Dashboard/",
  },
  {
    name: "قالب لوحة تحكم احترافية",
    description:
      "لوحة تحكم شخصية متطورة لإدارة المشاريع والبيانات. واجهة بديهية مع إحصائيات تفاعلية ونظام إدارة شامل للمحتوى.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "management",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    imageAvif: dashboardAvif,
    imageWebp: dashboardWebp,
    source_code_link: "https://musab-abu-bshara.github.io/Elzero_Template_3/",
  },
  {
    name: "قالب Kasper",
    description:
      "موقع شخصي لمصور فوتوغرافي مصمم كتطبيق من صفحة واحدة. عرض أنيق للأعمال مع معرض صور تفاعلي وتصميم بصري جذاب.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "SPA",
        color: "pink-text-gradient",
      },
    ],
    image: kasper,
    imageAvif: kasperAvif,
    imageWebp: kasperWebp,
    source_code_link: "https://musab-abu-bshara.github.io/Kasper_Template_2/",
  },
  {
    name: "قالب Leon",
    description:
      "موقع شخصي بسيط وأنيق مصمم كتطبيق من صفحة واحدة. تصميم نظيف ومتجاوب مع تركيز على تجربة المستخدم والبساطة.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "SPA",
        color: "pink-text-gradient",
      },
    ],
    image: leon,
    imageAvif: leonAvif,
    imageWebp: leonWebp,
    source_code_link: "https://musab-abu-bshara.github.io/Leon_Template_1/",
  },
];

// Footer data
const footerData = {
  logo: {
    src: logo,
    alt: "مصعب أبوبشارة",
  },
  social: [
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/musab-abu-bshara-5518b6316/",
      icon: "fa-brands fa-linkedin-in",
      label: "LinkedIn",
    },
    {
      id: "github",
      href: "https://github.com/musab-abu-bshara",
      icon: "fa-brands fa-github",
      label: "GitHub",
    },
    {
      id: "youtube",
      href: "https://youtu.be/u_KvA48EHzw",
      icon: "fa-brands fa-youtube",
      label: "YouTube",
    },
  ],
  personal: [
    {
      id: "location",
      icon: "fa-solid fa-location-dot",
      text: "فلسطين, الضفة الغربية, طوباس",
    },
    {
      id: "hours",
      icon: "fa-regular fa-clock",
      text: "ساعات العمل: من 7:00 إلى 15:00",
    },
    {
      id: "phone",
      icon: "fas fa-phone-volume fa-fw",
      text: "+970 595 568 335",
      isPhone: true,
    },
  ],
  copyright: "© 2026 جميع الحقوق محفوظة – مصعب أبوبشارة",
};

const flagshipSaaS = {
  badge: "مشروع سري · قريب من الإطلاق",
  title: "منصة SaaS متعددة المستأجرين (Multi-tenant) — بنيتها من الصفر",
  summary:
    "منصة SaaS كاملة عملت عليها لمدة 12 شهراً تقريباً، وتوليت فيها كل مراحل دورة حياة البرمجيات بنفسي: المتطلبات، التصميم، الواجهات، الباك إند، الاختبار، النشر والتشغيل. تفاصيل المنتج سرية حتى موعد الإطلاق، لكن هذه هي الخبرات الهندسية التي بنيتها فيه.",
  stats: [
    { label: "مدة العمل", value: "12 شهراً" },
    { label: "البيئات", value: "Staging + Production" },
    { label: "البنية", value: "Multi-tenant" },
    { label: "الحالة", value: "قريب من الإطلاق" },
  ],
  highlights: [
    {
      title: "بنية Multi-tenant",
      text: "نطاق فرعي (subdomain) لكل عميل مع لوحة تحكم رئيسية للمنصة، وعزل كامل لبيانات كل عميل عن غيره، مع مجموعة اختبارات خاصة تثبت هذا العزل.",
    },
    {
      title: "دورة حياة كاملة (SDLC)",
      text: "من كتابة المتطلبات والتذاكر، إلى خطة تقنية، إلى التنفيذ، ثم حالات اختبار واضحة، ثم النشر والمتابعة بعد الإطلاق.",
    },
    {
      title: "النشر والتشغيل (DevOps)",
      text: "خادم VPS أديره بنفسي، ونطاقان منفصلان لبيئتي staging و production، ونشر تلقائي عبر CI/CD، و Nginx و PM2.",
    },
    {
      title: "الجودة والاختبار",
      text: "اختبارات وحدة، ومجموعة اختبارات API تعمل تلقائياً في CI، و mutation checks للتأكد أن كل اختبار يكشف الخطأ فعلاً.",
    },
    {
      title: "الأمان وحماية البيانات",
      text: "مصادقة JWT مرتبطة بكل عميل، وصلاحيات حسب الدور، ورفض أي وصول بين العملاء، و migrations مضبوطة لقاعدة البيانات.",
    },
    {
      title: "الأداء وسهولة الاستخدام",
      text: "تصميم mobile-first يعمل على شاشة 390px، ودعم RTL، وحالات تحميل وخطأ في كل شاشة، وتخصيص الهوية (الألوان والشعار) لكل عميل.",
    },
    {
      title: "تطوير AI-native",
      text: "أستخدم Claude كمساعد هندسي بطريقة منظمة: تذكرة، ثم خطة، ثم تنفيذ، ثم مراجعة واختبار كل تغيير قبل اعتماده.",
    },
  ],
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind",
    "TanStack Query",
    "NestJS",
    "PostgreSQL",
    "TypeORM",
    "REST API",
    "Jest",
    "CI/CD",
    "Nginx",
  ],
  note: "يسعدني شرح البنية والقرارات التقنية بالتفصيل في المقابلة.",
};

const ongoingProjects = [
  {
    id: "kh",
    image: kh,
    imageAvif: khAvif,
    imageWebp: khWebp,
    type: "web app",
    technologies: ["React.js", "Tailwind"],
  },
  {
    id: "md",
    image: md,
    imageAvif: mdAvif,
    imageWebp: mdWebp,
    type: "desktop app",
    technologies: ["Tauri", "React"],
  },
  {
    id: "g",
    image: g,
    imageAvif: gAvif,
    imageWebp: gWebp,
    type: "web app",
    technologies: ["HTML", "Bootstrap"],
  },
  {
    id: "ft",
    image: ft,
    imageAvif: ftAvif,
    imageWebp: ftWebp,
    type: "web app",
    technologies: ["HTML", "Tailwind"],
  },
  {
    id: "ls",
    image: ls,
    imageAvif: lsAvif,
    imageWebp: lsWebp,
    type: "desktop app",
    technologies: ["Tauri", "React"],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  footerData,
  ongoingProjects,
  flagshipSaaS,
  // skills,
};
