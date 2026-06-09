// ─── Personal Info ────────────────────────────────────────────
export const PERSONAL_INFO = {
  name:        "Jonair A. Patani",
  title:       "Aspiring UI/UX Designer, Frontend Developer, Video Editor & Streamer",
  email:       "jonairstriker@gmail.com",
  phone:       "09510062828",
  location:    "0860 J. Gabriel St, Baclaran, Parañaque City",
  birthday:    "July 26, 2003",
  facebook:    "Jonair Patani",
};

// ─── Resume ───────────────────────────────────────────────────
export const RESUME_PATH     = "/resume/Jonair-Patani-Resume.pdf";
export const RESUME_FILENAME = "Jonair-Patani-Resume.pdf";

// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",         path: "/" },
  { label: "About",        path: "/about" },
  { label: "Projects",     path: "/projects" },
  { label: "Certificates", path: "/certificates" },
  { label: "Experience",   path: "/experience" },
];

// ─── Hero content ─────────────────────────────────────────────
export const HERO_CONTENT = {
  greeting:    "Hello, I'm",
  name:        "Jonair Patani",
  title:       "Aspiring UI/UX Designer, Frontend Developer, Video Editor & Streamer",
  description:
    "A dedicated Computer Science student passionate about design, content creation, and live streaming. Committed to overcoming challenges and growing professionally through continuous learning and creative work.",
};

// ─── Objective / About ────────────────────────────────────────
export const ABOUT_ME =
  "I am a dedicated and determined college student committed to overcoming challenges and achieving my goals. I have hands-on experience working in production environments twice — gaining real-world exposure to professional workflows, team collaboration, and delivering output under pressure. I approach every task with discipline and a strong work ethic, eager to expand my skills across design, editing, development, and live streaming.";

// ─── Education ────────────────────────────────────────────────
export const EDUCATION = [
  {
    school:   "Arellano University – Jose Abad Santos Campus",
    degree:   "Bachelor of Science in Computer Science",
    field:    "1st Year College",
    year:     "2023 – 2024",
    location: "3058 Taft Avenue, Pasay City",
    status:   "ongoing",
  },
  {
    school:   "Arellano University – Jose Abad Santos Campus",
    degree:   "Information and Communication Technology",
    field:    "Senior High School",
    year:     "2019 – 2023",
    location: "3058 Taft Avenue, Pasay City",
    status:   "completed",
  },
  {
    school:   "Baclaran Parañaque National High School",
    degree:   "Junior High School",
    field:    "",
    year:     "2017 – 2020",
    location: "1702 Dimasalang Ext. Baclaran, Parañaque City",
    status:   "completed",
  },
  {
    school:   "Baclaran Elementary School Unit 2",
    degree:   "Elementary Education",
    field:    "",
    year:     "2010 – 2016",
    location: "Santiago St. Parañaque City",
    status:   "completed",
  },
];

// ─── Skills (with progress bars) ─────────────────────────────
export const SKILLS = [
  { name: "UI/UX Design",   level: 75, category: "design"  },
  { name: "Figma",          level: 70, category: "design"  },
  { name: "Canva",          level: 85, category: "design"  },
  { name: "CapCut",         level: 90, category: "editing" },
  { name: "Video Editing",  level: 80, category: "editing" },
  { name: "React",          level: 60, category: "dev"     },
];

// ─── Soft Skills (tag cloud) ──────────────────────────────────
export const SOFT_SKILLS = [
  "Time Management",
  "Patience",
  "Editing",
  "Adaptability",
  "Good Listener",
  "Live Streaming",
];

// ─── Tools ────────────────────────────────────────────────────
export const TOOLS = [
  { name: "Figma",    icon: "Pen",   category: "Design"     },
  { name: "Canva",    icon: "Image", category: "Design"     },
  { name: "CapCut",   icon: "Video", category: "Editing"    },
  { name: "ChatGPT",  icon: "Bot",   category: "AI"         },
  { name: "VS Code",  icon: "Code",  category: "Dev"        },
  { name: "OBS",      icon: "Radio", category: "Streaming"  },
];

// ─── Experience ───────────────────────────────────────────────
export const EXPERIENCES = [
  {
    id:          "1",
    title:       "Computer Science Student",
    company:     "Arellano University – Jose Abad Santos Campus",
    period:      "2023 – Present",
    description: "Currently pursuing a Bachelor of Science in Computer Science. Building skills in UI/UX Design, Frontend Development, and Video Editing through coursework and self-directed learning.",
    type:        "academic",
    isCurrent:   true,
    end_date:    null,
  },
];

// ─── Character References ─────────────────────────────────────
export const REFERENCES = [
  {
    name:     "Jhon Michael T. Gadia",
    role:     "3rd Year College Student",
    company:  "Philippine College of Criminology",
    address:  "641 Sales Street, Sta. Cruz, Manila",
    phone:    "0951-897-9304",
  },
  {
    name:     "Ricojhan Dagohoy",
    role:     "Senior Crew Dining",
    company:  "Jollibee",
    address:  "2064 Santiago St. Baclaran, Parañaque City",
    phone:    "0916-547-2253",
  },
  {
    name:     "Sean Vrien Edis",
    role:     "Benefits Administrator",
    company:  "Conduent",
    address:  "49 5 de Junio St, Naia, Pasay City",
    phone:    "0915-601-3585",
  },
];

// ─── Stats ────────────────────────────────────────────────────
export const STATS = [
  { label: "Projects",     value: "3+"    },
  { label: "Design Tools", value: "4+"    },
  { label: "Learning",     value: "Daily" },
];

// ─── Projects ─────────────────────────────────────────────────
export const FEATURED_PROJECTS = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern dark-themed portfolio built with React, Vite, and Tailwind CSS. Features glassmorphism UI, Framer Motion animations, and a clean component-driven architecture.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image_url: null,
    github_url: "https://github.com/jonairpatani",
    live_url: "https://portfolio-pied-six-58.vercel.app",
  },
  {
    id: "2",
    title: "UI/UX Case Study",
    description:
      "End-to-end UI/UX case study covering user research, information architecture, wireframing, and high-fidelity prototyping. Focused on mobile-first design patterns.",
    technologies: ["Figma", "UI/UX", "Prototyping", "User Research"],
    image_url: null,
    github_url: null,
    live_url: null,
  },
  {
    id: "3",
    title: "Video Production Reel",
    description:
      "Creative video editing project combining motion graphics, dynamic cuts, color grading, and storytelling techniques for social media content.",
    technologies: ["CapCut", "Motion Graphics"],
    image_url: null,
    github_url: null,
    live_url: null,
  },
];

export const ALL_PROJECTS = [
  ...FEATURED_PROJECTS,
  {
    id: "4",
    title: "Social Media Branding",
    description:
      "Complete brand identity system including logo design, color palette, typography rules, and social media post templates.",
    technologies: ["Canva", "Graphic Design"],
    image_url: null,
    github_url: null,
    live_url: null,
  },
];

// ─── Certificates ─────────────────────────────────────────────
export const CERTIFICATES = [
  {
    id: "1",
    title: "UI/UX Design Fundamentals",
    issuer: "Coursera",
    issued_date: "2023-06-01",
    image_url: null,
  },
  {
    id: "2",
    title: "Figma: Beginners to Advanced",
    issuer: "Udemy",
    issued_date: "2023-08-01",
    image_url: null,
  },
  {
    id: "3",
    title: "Video Editing Masterclass",
    issuer: "YouTube",
    issued_date: "2023-03-01",
    image_url: null,
  },
  {
    id: "4",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issued_date: "2023-10-01",
    image_url: null,
  },
  {
    id: "5",
    title: "Introduction to React",
    issuer: "Scrimba",
    issued_date: "2023-12-01",
    image_url: null,
  },
];

// ─── Social Links ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub",    url: "https://github.com/jonairpatani",      icon: "github"    },
  { label: "LinkedIn",  url: "https://linkedin.com/in/jonairpatani", icon: "linkedin"  },
  { label: "Facebook",  url: "https://facebook.com/jonairpatani",    icon: "facebook"  },
];
