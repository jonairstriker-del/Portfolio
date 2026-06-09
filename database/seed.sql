-- ================================================================
-- Jonair Patani Portfolio — Seed Data
-- Run this AFTER schema.sql
-- ================================================================

-- ----------------------------------------------------------------
-- Projects
-- ----------------------------------------------------------------
INSERT INTO projects (title, description, image_url, github_url, live_url, technologies, is_featured) VALUES
(
  'Portfolio Website',
  'A modern dark-themed personal portfolio built with React, Vite, and Tailwind CSS. Features glassmorphism design, smooth animations with Framer Motion, and a fully responsive layout.',
  NULL,
  'https://github.com/jonairpatani',
  'https://jonairpatani.dev',
  '["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Supabase"]',
  true
),
(
  'UI/UX Case Study',
  'Comprehensive UI/UX design case study showcasing end-to-end design process including user research, wireframing, high-fidelity prototyping, and usability testing insights.',
  NULL,
  NULL,
  '#',
  '["Figma", "UI/UX", "Prototyping", "User Research"]',
  true
),
(
  'Social Media Branding',
  'Complete brand identity design project including logo design, color palette, typography system, and a library of social media content templates for a lifestyle brand.',
  NULL,
  NULL,
  NULL,
  '["Figma", "Picsart", "Brand Design", "Typography"]',
  false
),
(
  'Video Production Reel',
  'Creative video editing showcase combining motion graphics, color grading, and dynamic storytelling techniques for social media and promotional content creation.',
  NULL,
  NULL,
  '#',
  '["Adobe Premiere Pro", "CapCut", "Motion Graphics", "Color Grading"]',
  true
),
(
  'Mobile App UI Design',
  'High-fidelity mobile UI design for a productivity application featuring a dark theme, intuitive navigation patterns, micro-interactions, and an accessible component library.',
  NULL,
  NULL,
  NULL,
  '["Figma", "UI/UX", "Mobile Design", "Prototyping"]',
  false
);

-- ----------------------------------------------------------------
-- Certificates
-- ----------------------------------------------------------------
INSERT INTO certificates (title, issuer, issued_date) VALUES
('UI/UX Design Fundamentals',    'Coursera',             '2023-06-01'),
('Figma for Beginners to Advanced', 'Udemy',             '2023-08-01'),
('Video Editing Masterclass',    'YouTube / Self-study', '2023-03-01'),
('Responsive Web Design',        'freeCodeCamp',         '2023-10-01'),
('Introduction to React',        'Scrimba',              '2023-12-01');

-- ----------------------------------------------------------------
-- Experiences
-- ----------------------------------------------------------------
INSERT INTO experiences (company, position, description, start_date, end_date, type) VALUES
(
  'Freelance',
  'UI/UX Designer & Creative Editor',
  'Designing user interfaces and editing creative video content for various clients. Specializing in modern, clean designs and engaging social media productions. Delivered 10+ design projects and 20+ video edits.',
  '2023-01-01',
  NULL,
  'freelance'
),
(
  'Student Organization',
  'Design Lead',
  'Led the design team for the university organization. Responsible for creating visual materials, social media graphics, event branding, and maintaining a consistent visual identity across all communications.',
  '2022-06-01',
  '2023-06-01',
  'academic'
);

-- ----------------------------------------------------------------
-- Skills
-- ----------------------------------------------------------------
INSERT INTO skills (name, level, category, sort_order) VALUES
('UI/UX Design',         85, 'design',   1),
('Figma',                90, 'design',   2),
('Prototyping',          80, 'design',   3),
('Video Editing',        80, 'editing',  4),
('Adobe Premiere Pro',   75, 'editing',  5),
('CapCut',               85, 'editing',  6),
('React',                65, 'dev',      7),
('Tailwind CSS',         70, 'dev',      8);
