import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Download, Video, Bot, Image,
  Film, Code, Pen, Sparkles, Radio,
} from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import AnimatedSection from "../components/common/AnimatedSection";
import ProjectCard from "../components/project/ProjectCard";
import SkillCard from "../components/common/SkillCard";
import { getToolIcon } from "../components/common/ToolIcon";
import { FEATURED_PROJECTS, SKILLS, TOOLS, STATS } from "../constants";

// ─── Avatar images (place these files in public/images/) ──────
const AVATARS = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
];

const ICON_MAP = { Pen, Video, Bot, Image, Film, Code, Radio };

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Avatar slideshow ─────────────────────────────────────────
function AvatarSlideshow() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({}); // track which images loaded OK

  // Switch every 2 seconds
  useEffect(() => {
    const t = setInterval(
      () => setCurrent((i) => (i + 1) % AVATARS.length),
      2000
    );
    return () => clearInterval(t);
  }, []);

  const allFailed = AVATARS.every((_, i) => loaded[i] === false);

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">

      {/* Outer animated glow ring */}
      <div
        className="absolute inset-0 rounded-full animate-glow-pulse pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Photo frame */}
      <div
        className="absolute inset-4 rounded-full overflow-hidden flex items-center justify-center"
        style={{
          border: "2px solid rgba(124,58,237,0.5)",
          boxShadow: "0 0 40px rgba(124,58,237,0.3), inset 0 0 30px rgba(124,58,237,0.08)",
          background: "#000",
        }}
      >
        {allFailed ? (
          /* Fallback monogram when no images found */
          <div className="w-full h-full flex flex-col items-center justify-center select-none">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
              style={{ background: "rgba(124,58,237,0.2)" }}
            >
              <span className="text-5xl font-black text-gradient">J</span>
            </div>
            <p className="text-xs" style={{ color: "rgba(217,217,217,0.4)" }}>
              Jonair Patani
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={AVATARS[current]}
              alt={`Jonair Patani — photo ${current + 1}`}
              className="w-full h-full object-contain object-center"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              onError={() => setLoaded((prev) => ({ ...prev, [current]: false }))}
              onLoad={() => setLoaded((prev) => ({ ...prev, [current]: true }))}
            />
          </AnimatePresence>
        )}
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {AVATARS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show photo ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:      i === current ? 20 : 6,
              height:     6,
              background: i === current
                ? "linear-gradient(90deg,#7c3aed,#a855f7)"
                : "rgba(255,255,255,0.22)",
            }}
          />
        ))}
      </div>

      {/* Floating tags */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute -top-2 -right-6 glass px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-1.5 whitespace-nowrap"
      >
        🎨 UI/UX Design
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
        className="absolute -bottom-2 -left-6 glass px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-1.5 whitespace-nowrap"
      >
        🎬 Video Editing
      </motion.div>

      <motion.div
        animate={{ x: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        className="absolute top-1/2 -left-14 -translate-y-1/2 glass px-3 py-1.5 rounded-full text-xs text-white whitespace-nowrap"
      >
        ✨ Figma
      </motion.div>

      <motion.div
        animate={{ x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
        className="absolute top-1/3 -right-14 glass px-3 py-1.5 rounded-full text-xs text-white whitespace-nowrap flex items-center gap-1.5"
      >
        🔴 Streaming
      </motion.div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="pt-[68px]">

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="section-padding container-max min-h-[calc(100vh-68px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">

          {/* ── Text side ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Status pill */}
            <motion.div variants={fadeUp} className="flex">
              <span
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full"
                style={{
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  color: "rgba(217,217,217,0.8)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.12] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Jonair Patani</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl font-semibold leading-snug"
              style={{ color: "#c084fc" }}
            >
              Aspiring UI/UX Designer, Frontend Developer, Video Editor &amp; Streamer
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-muted leading-relaxed max-w-[500px]">
              Computer Science student passionate about creating user-friendly digital
              experiences, visual design, and content editing. Building skills through
              continuous learning and practical projects.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <Link to="/projects" className="btn-primary">
                View My Work <ArrowRight size={15} />
              </Link>
              <a href="/resume/Jonair-Patani-Resume.pdf" download="Jonair-Patani-Resume.pdf" className="btn-outline">
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid gap-4 pt-4"
              style={{ gridTemplateColumns: `repeat(${STATS.length}, minmax(0,1fr))` }}
            >
              {STATS.map((s) => (
                <div key={s.label} className="glass-card p-3 text-center">
                  <div className="text-2xl font-black text-gradient mb-0.5">{s.value}</div>
                  <div className="text-muted text-[11px] leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Avatar side ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end pb-12"
          >
            <AvatarSlideshow />
          </motion.div>
        </div>
      </section>

      {/* ══ SKILLS ═════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="My Skills"
          title="What I Bring to the Table"
          subtitle="Design, editing, and development skills built through daily practice and real projects."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </section>

      {/* ══ TOOLS ══════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="Toolbox"
          title="Tools I Use"
          subtitle="The software and platforms I rely on daily to bring ideas to life."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TOOLS.map((tool, i) => {
            const Icon = getToolIcon(tool.name);
            return (
              <AnimatedSection key={tool.name} delay={i * 0.05}>
                <div
                  className="glass-card p-5 flex flex-col items-center gap-3 cursor-default group h-full"
                  style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(124,58,237,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Icon size={44} />
                  </div>
                  <div className="text-center">
                    <p className="text-white text-xs font-semibold leading-tight">{tool.name}</p>
                    <p className="text-muted text-[11px] mt-0.5">{tool.category}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ══ FEATURED PROJECTS ══════════════════════════════════ */}
      <section className="section-padding container-max">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeader eyebrow="Portfolio" title="Featured Projects" centered={false} />
          <Link
            to="/projects"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "#a855f7", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a855f7")}
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/projects" className="btn-outline">View All Projects</Link>
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════════ */}
      <section className="section-padding container-max pb-24">
        <AnimatedSection>
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center"
            style={{
              background: "linear-gradient(135deg,rgba(124,58,237,0.18) 0%,rgba(91,33,182,0.10) 100%)",
              border: "1px solid rgba(124,58,237,0.25)",
              boxShadow: "0 0 60px rgba(124,58,237,0.2)",
            }}
          >
            <div aria-hidden className="absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle,#7c3aed,transparent)", filter: "blur(40px)" }} />
            <div aria-hidden className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle,#5b21b6,transparent)", filter: "blur(40px)" }} />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}>
                <Sparkles size={22} style={{ color: "#c084fc" }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-muted max-w-md mx-auto mb-8 leading-relaxed">
                Have a project in mind or want to connect? I&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:jonairstriker@gmail.com" className="btn-primary">
                  Get in Touch <ArrowRight size={15} />
                </a>
                <a href="/resume/Jonair-Patani-Resume.pdf" download="Jonair-Patani-Resume.pdf" className="btn-outline">
                  <Download size={15} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
