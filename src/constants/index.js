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
  expressjs,
  tauri,
  orienteed,
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
  {
    id: "works",
    title: "أعمالي",
  },
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
    title: "تصميم متجاوب",
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
    title: "مساهم في مشروع Delevary",
    company_name: "Orienteed",
    icon: orienteed,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "هي بمثابة فرصة للاحتكاك في مشروع ضخم وذو هيكلة معقدة",
      "العمل على تطوير حلول توصيل مبتكرة وفعالة.",
      "المساهمة في تحسين تجربة المستخدم وواجهات التطبيق.",
      "التعاون مع فريق التطوير لتنفيذ ميزات جديدة.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "مصعب مطور محترف جداً، أنجز المشروع بكفاءة عالية وفي الوقت المحدد. أنصح بالعمل معه.",
    name: "أحمد محمد",
    designation: "مدير تقني",
    company: "شركة التقنية",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "تجربة رائعة في العمل مع مصعب، يفهم المتطلبات بسرعة ويقدم حلول إبداعية.",
    name: "سارة علي",
    designation: "مديرة مشاريع",
    company: "شركة الابتكار",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "موقعنا الإلكتروني أصبح أسرع وأكثر احترافية بفضل عمل مصعب المتميز.",
    name: "خالد حسن",
    designation: "المدير التنفيذي",
    company: "مؤسسة الأعمال",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

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
    src: "/Blogo.webp",
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

const ongoingProjects = [
  {
    id: "sc",
    image: sc,
    imageAvif: scAvif,
    imageWebp: scWebp,
    type: "web app",
    technologies: ["Next.js", "Tailwind"],
  },
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
  // skills,
};
