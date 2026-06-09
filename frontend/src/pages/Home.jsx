import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Video, Bot, Image, Film, Code, Pen, Sparkles } from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import AnimatedSection from "../components/common/AnimatedSection";
import ProjectCard from "../components/project/ProjectCard";
import SkillCard from "../components/common/SkillCard";
import { FEATURED_PROJECTS, SKILLS, TOOLS, STATS } from "../constants";

const ICON_MAP = { Pen, Video, Bot, Image, Film, Code };

/* ── Stagger helper ─────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <div className="pt-[68px]">

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max min-h-[calc(100vh-68px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">

          {/* Text side */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Status pill */}
            <motion.div variants={item} className="flex">
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

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.12] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Jonair Patani</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl font-semibold"
              style={{ color: "#c084fc" }}
            >
              UI/UX Designer &amp; Creative Editor
            </motion.p>

            <motion.p variants={item} className="text-muted leading-relaxed max-w-[480px]">
              Crafting beautiful digital experiences through thoughtful design and creative
              storytelling. I combine aesthetics with usability to build memorable
              interfaces and compelling visual content.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              <Link to="/projects" className="btn-primary">
                View My Work <ArrowRight size={15} />
              </Link>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass-card p-3 text-center">
                  <div className="text-2xl font-black text-gradient mb-0.5">{s.value}</div>
                  <div className="text-muted text-[11px] leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-glow-pulse"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)" }}
              />

              {/* Avatar circle */}
              <div
                className="absolute inset-5 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#5b21b6 0%,#1a1a1a 100%)",
                  border: "1px solid rgba(124,58,237,0.35)",
                }}
              >
                <div className="text-center select-none">
                  <div
                    className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-2"
                    style={{ background: "rgba(124,58,237,0.2)" }}
                  >
                    <span className="text-5xl font-black text-gradient">J</span>
                  </div>
                  <p className="text-xs" style={{ color: "rgba(217,217,217,0.45)" }}>
                    Jonair Patani
                  </p>
                </div>
              </div>

              {/* Floating tag — top right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-3 -right-4 glass px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-1.5"
              >
                🎨 UI/UX Design
              </motion.div>

              {/* Floating tag — bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-4 glass px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-1.5"
              >
                🎬 Video Editing
              </motion.div>

              {/* Floating tag — left */}
              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="absolute top-1/2 -left-10 -translate-y-1/2 glass px-3 py-1.5 rounded-full text-xs text-white"
              >
                ✨ Figma
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="My Skills"
          title="What I Bring to the Table"
          subtitle="A blend of design thinking, creative editing, and front-end development skills."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TOOLS
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="Toolbox"
          title="Tools I Use"
          subtitle="The software and platforms I rely on daily to bring ideas to life."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TOOLS.map((tool, i) => {
            const Icon = ICON_MAP[tool.icon];
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
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "rgba(124,58,237,0.12)" }}
                  >
                    {Icon && <Icon size={20} style={{ color: "#c084fc" }} />}
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

      {/* ══════════════════════════════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Projects"
            centered={false}
          />
          <Link
            to="/projects"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: "#a855f7" }}
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

      {/* ══════════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════════ */}
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
            {/* Decorative blobs */}
            <div
              aria-hidden
              className="absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle,#7c3aed,transparent)", filter: "blur(40px)" }}
            />
            <div
              aria-hidden
              className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle,#5b21b6,transparent)", filter: "blur(40px)" }}
            />

            <div className="relative z-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
              >
                <Sparkles size={22} style={{ color: "#c084fc" }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-muted max-w-md mx-auto mb-8 leading-relaxed">
                Have a project in mind or want to connect? I&apos;d love to hear
                from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:jonairpatani@email.com" className="btn-primary">
                  Get in Touch <ArrowRight size={15} />
                </a>
                <a href="/resume.pdf" download className="btn-outline">
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
