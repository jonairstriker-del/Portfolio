# Jonair Patani — Portfolio Website

Personal portfolio website for Jonair Patani, UI/UX Designer & Creative Editor.

Built with **React + Vite + Tailwind CSS + Framer Motion** — fully static, no backend required.

---

## Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Framework  | React 18 + Vite 5                       |
| Styling    | Tailwind CSS 3 + custom glassmorphism   |
| Animations | Framer Motion 12                        |
| Routing    | React Router DOM 7                      |
| Icons      | Lucide React                            |
| Deployment | Vercel (static)                         |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:5173
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── certificate/   CertificateCard
│   ├── common/        SectionHeader, AnimatedSection, Badge, SkillCard
│   ├── experience/    ExperienceCard
│   ├── footer/        Footer
│   ├── navbar/        Navbar
│   └── project/       ProjectCard
├── constants/
│   └── index.js       ← All static data (projects, skills, etc.)
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Certificates.jsx
│   └── Experience.jsx
└── routes/
    └── AppRoutes.jsx

public/
└── resume.pdf   ← Replace with your actual resume before deploying
```

---

## Updating Content

All site content lives in **`src/constants/index.js`**. Edit that file to update:

- Navigation links
- Skills and proficiency levels
- Tools section
- Projects (featured + full list)
- Certificates
- Work experience
- Social links and stats

---

## Resume

Place your resume PDF at **`public/resume.pdf`** before deploying.  
The "Download Resume" button links directly to `/resume.pdf`.

---

## Deploying to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo
3. Vercel auto-detects Vite — no settings needed
4. Click **Deploy**

The included `vercel.json` handles SPA routing so direct URL navigation works correctly.

---

## Deploying to GitHub Pages (alternative)

```bash
npm run build
# Then push the dist/ folder to the gh-pages branch
```

> Set `base: "/repo-name/"` in `vite.config.js` if hosting under a subdirectory.
