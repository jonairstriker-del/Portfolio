// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",         path: "/" },
  { label: "About",        path: "/about" },
  { label: "Projects",     path: "/projects" },
  { label: "Certificates", path: "/certificates" },
  { label: "Experience",   path: "/experience" },
];

// ─── Skills ───────────────────────────────────────────────────
export const SKILLS = [
  { name: "UI/UX Design",       level: 85, category: "design"  },
  { name: "Figma",               level: 90, category: "design"  },
  { name: "Prototyping",         level: 82, category: "design"  },
  { name: "Video Editing",       level: 80, category: "editing" },
  { name: "Adobe Premiere Pro",  level: 75, category: "editing" },
  { name: "CapCut",              level: 88, category: "editing" },
  { name: "React",               level: 65, category: "dev"     },
  { name: "Tailwind CSS",        level: 72, category: "dev"     },
];

// ─── Tools ────────────────────────────────────────────────────
export const TOOLS = [
  { name: "Figma",              icon: "Pen",      category: "Design"   },
  { name: "CapCut",             icon: "Video",    category: "Editing"  },
  { name: "Adobe Premiere",     icon: "Film",     category: "Editing"  },
  { name: "Picsart",            icon: "Image",    category: "Design"   },
  { name: "ChatGPT",            icon: "Bot",      category: "AI"       },
  { name: "VS Code",            icon: "Code",     category: "Dev"      },
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
    live_url: null,
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
    technologies: ["CapCut", "Adobe Premiere Pro", "Motion Graphics"],
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
      "Complete brand identity system including logo design, color palette, typography rules, and a full set of social media post templates.",
    technologies: ["Figma", "Picsart", "Brand Design"],
    image_url: null,
    github_url: null,
    live_url: null,
  },
  {
    id: "5",
    title: "Mobile App UI Design",
    description:
      "High-fidelity mobile UI for a productivity app — dark glassmorphism theme, intuitive navigation, micro-interactions, and a documented component library.",
    technologies: ["Figma", "UI/UX", "Mobile Design"],
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

// ─── Experience ───────────────────────────────────────────────
export const EXPERIENCES = [
  {
    id: "1",
    company: "Freelance",
    position: "UI/UX Designer & Creative Editor",
    description:
      "Designing user interfaces and editing creative video content for clients. Delivering 10+ design projects and 20+ video productions across lifestyle, e-commerce, and personal branding.",
    start_date: "2023-01-01",
    end_date: null,
    type: "freelance",
  },
  {
    id: "2",
    company: "Student Organization",
    position: "Design Lead",
    description:
      "Led the visual identity and content team for a university organization. Created event posters, social media graphics, and branded materials used across digital and print channels.",
    start_date: "2022-06-01",
    end_date: "2023-06-01",
    type: "academic",
  },
];

// ─── Social links ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub",    url: "https://github.com/jonairpatani",    icon: "github"    },
  { label: "LinkedIn",  url: "https://linkedin.com/in/jonairpatani", icon: "linkedin"  },
  { label: "Instagram", url: "https://instagram.com/jonairpatani",  icon: "instagram" },
];

// ─── Stats ────────────────────────────────────────────────────
export const STATS = [
  { label: "Projects Completed", value: "15+"  },
  { label: "Certificates Earned", value: "5+"  },
  { label: "Tools Mastered",     value: "6+"   },
  { label: "Years of Practice",  value: "2+"   },
];
