import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, FileText, Sparkles,
  Palette, Video, Radio, Target,
  GraduationCap, MapPin, Mail, Phone, User,
  Search, Layout, Brush, RefreshCw,
  BookOpen, Award, Layers, ExternalLink, GitBranch,
  CheckCircle, Calendar, Play,
} from "lucide-react";

import SectionHeader    from "../components/common/SectionHeader";
import AnimatedSection  from "../components/common/AnimatedSection";
import SkillCard        from "../components/common/SkillCard";
import Badge            from "../components/common/Badge";
import { getToolIcon }  from "../components/common/ToolIcon";

import {
  FEATURED_PROJECTS, ALL_PROJECTS, SKILLS, TOOLS, STATS,
  PERSONAL_INFO, ABOUT_ME, EDUCATION, SOFT_SKILLS,
  EXPERIENCES, CERTIFICATES, SOCIAL_LINKS, PLATFORMS,
} from "../constants";

// ── Avatar slideshow ────────────────────────────────────────────
const AVATARS = ["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"];

function AvatarSlideshow() {
  const [current, setCurrent] = useState(0);
  const [loaded,  setLoaded]  = useState({});

  useEffect(() => {
    const t = setInterval(() => setCurrent((i) => (i + 1) % AVATARS.length), 2000);
    return () => clearInterval(t);
  }, []);

  const allFailed = AVATARS.every((_, i) => loaded[i] === false);

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
      <div className="absolute inset-0 rounded-full animate-glow-pulse pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(124,58,237,0.3) 0%,transparent 70%)" }} />

      <div className="absolute inset-4 rounded-full overflow-hidden flex items-center justify-center"
        style={{ border: "2px solid rgba(124,58,237,0.5)", boxShadow: "0 0 40px rgba(124,58,237,0.3)", background: "#000" }}>
        {allFailed ? (
          <div className="flex flex-col items-center justify-center select-none">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
              style={{ background: "rgba(124,58,237,0.2)" }}>
              <span className="text-5xl font-black text-gradient">J</span>
            </div>
            <p className="text-xs" style={{ color: "rgba(217,217,217,0.4)" }}>{PERSONAL_INFO.name}</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.img key={current} src={AVATARS[current]} alt={`Jonair — photo ${current + 1}`}
              className="w-full h-full object-contain object-center"
              initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              onError={() => setLoaded((p) => ({ ...p, [current]: false }))}
              onLoad={() => setLoaded((p) => ({ ...p, [current]: true }))} />
          </AnimatePresence>
        )}
      </div>

      {/* Dots */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {AVATARS.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Photo ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{ width: i === current ? 20 : 6, height: 6,
              background: i === current ? "linear-gradient(90deg,#7c3aed,#a855f7)" : "rgba(255,255,255,0.22)" }} />
        ))}
      </div>

      {/* Floating tags */}
      <motion.div animate={{ y: [0,-10,0] }} transition={{ repeat:Infinity, duration:3, ease:"easeInOut" }}
        className="absolute -top-2 -right-6 glass px-3 py-1.5 rounded-full text-xs text-white whitespace-nowrap">
        🎨 UI/UX Design
      </motion.div>
      <motion.div animate={{ y: [0,10,0] }} transition={{ repeat:Infinity, duration:3.6, ease:"easeInOut" }}
        className="absolute -bottom-2 -left-6 glass px-3 py-1.5 rounded-full text-xs text-white whitespace-nowrap">
        🎬 Video Editing
      </motion.div>
      <motion.div animate={{ x: [0,-8,0] }} transition={{ repeat:Infinity, duration:4.2, ease:"easeInOut" }}
        className="absolute top-1/2 -left-14 -translate-y-1/2 glass px-3 py-1.5 rounded-full text-xs text-white whitespace-nowrap">
        ✨ Figma
      </motion.div>
      <motion.div animate={{ x: [0,8,0] }} transition={{ repeat:Infinity, duration:3.8, ease:"easeInOut" }}
        className="absolute top-1/3 -right-14 glass px-3 py-1.5 rounded-full text-xs text-white whitespace-nowrap">
        🔴 Streaming
      </motion.div>
    </div>
  );
}

// ── Project card (inline, no router links needed) ───────────────
function ProjectCard({ project, index = 0 }) {
  const { title, description, technologies = [], github_url, live_url, image_url } = project;
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
      style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(124,58,237,0.4)"; e.currentTarget.style.boxShadow="0 0 24px rgba(124,58,237,0.18)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow="none"; }}>
      <div className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1a1a1a 0%,#0f0f0f 100%)" }}>
        {image_url
          ? <img src={image_url} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          : <div className="flex flex-col items-center gap-3 text-muted">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background:"rgba(124,58,237,0.15)" }}>
                <Layers size={26} style={{ color:"#c084fc" }} />
              </div>
              <span className="text-xs opacity-60">Project Preview</span>
            </div>}
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-white font-bold text-lg group-hover:text-gradient transition-all duration-300">{title}</h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-3 flex-1">{description}</p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((t) => <Badge key={t} variant="purple">{t}</Badge>)}
          </div>
        )}
        <div className="flex items-center gap-4 pt-1">
          {live_url && <a href={live_url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium" style={{ color:"#a855f7" }}>
            <ExternalLink size={13} /> Live Demo</a>}
          {github_url && <a href={github_url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors">
            <GitBranch size={13} /> GitHub</a>}
          {!live_url && !github_url && <span className="text-xs text-muted italic">Coming soon</span>}
        </div>
      </div>
    </motion.article>
  );
}

// ── Certificate card (inline) ───────────────────────────────────
function CertCard({ certificate, index = 0 }) {
  const { title, issuer, issued_date, image_url } = certificate;
  const fmtDate = issued_date
    ? new Date(issued_date).toLocaleDateString("en-US", { year:"numeric", month:"long" }) : null;
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.42, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden group flex flex-col"
      style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(124,58,237,0.4)"; e.currentTarget.style.boxShadow="0 0 20px rgba(124,58,237,0.15)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow="none"; }}>
      <div className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,rgba(91,33,182,0.2) 0%,#1a1a1a 100%)" }}>
        {image_url
          ? <img src={image_url} alt={title} className="w-full h-full object-cover" />
          : <motion.div whileHover={{ rotate:10, scale:1.05 }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background:"linear-gradient(135deg,#7c3aed,#5b21b6)", boxShadow:"0 0 20px rgba(124,58,237,0.35)" }}>
              <Award size={28} color="#fff" />
            </motion.div>}
        <div className="absolute top-3 right-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background:"rgba(34,197,94,0.15)", border:"1px solid rgba(34,197,94,0.3)" }}>
            <CheckCircle size={13} style={{ color:"#22c55e" }} />
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-gradient transition-all duration-300">{title}</h3>
        <p className="text-sm font-medium" style={{ color:"#a855f7" }}>{issuer}</p>
        {fmtDate && <div className="flex items-center gap-1.5 mt-auto pt-2">
          <Calendar size={11} className="text-muted" />
          <span className="text-muted text-xs">{fmtDate}</span>
        </div>}
      </div>
    </motion.article>
  );
}

// ── Experience card (inline) ────────────────────────────────────
function ExpCard({ experience, index = 0, isLast = false }) {
  const { company, title: expTitle, position, description, period, start_date, end_date, type = "work", isCurrent } = experience;
  const displayTitle = expTitle ?? position ?? "";
  const isNow = isCurrent ?? !end_date;
  const accent = type === "academic" ? "#22c55e" : "#a855f7";
  const IconEl = type === "academic" ? BookOpen : Target;
  const displayPeriod = period ?? (start_date
    ? `${new Date(start_date).toLocaleDateString("en-US",{year:"numeric",month:"short"})} — ${isNow ? "Present" : new Date(end_date).toLocaleDateString("en-US",{year:"numeric",month:"short"})}`
    : "");

  return (
    <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true, margin:"-40px" }} transition={{ duration:0.5, delay:index*0.12 }}
      className="flex gap-5">
      <div className="flex flex-col items-center pt-1 shrink-0">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.22)", color:accent }}>
          <IconEl size={17} />
        </div>
        {!isLast && <div className="timeline-line" />}
      </div>
      <div className="glass-card p-6 mb-6 flex-1 min-w-0"
        style={{ borderColor:"rgba(255,255,255,0.08)", transition:"border-color 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor="rgba(124,58,237,0.35)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor="rgba(255,255,255,0.08)")}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-bold text-base">{displayTitle}</h3>
            <p className="text-sm font-medium mt-0.5" style={{ color:"#a855f7" }}>{company}</p>
          </div>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={isNow
              ? { color:"#22c55e", background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.25)" }
              : { color:"#94a3b8", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }}>
            {isNow ? "Current" : "Past"}
          </span>
        </div>
        {displayPeriod && (
          <div className="flex items-center gap-1.5 text-muted text-xs mb-4">
            <Calendar size={11} /><span>{displayPeriod}</span>
          </div>
        )}
        <p className="text-sm leading-relaxed" style={{ color:"rgba(217,217,217,0.7)" }}>{description}</p>
      </div>
    </motion.div>
  );
}

// ══ TRAITS + PROCESS ═══════════════════════════════════════════
const TRAITS = [
  { Icon: Palette, label: "UI/UX Design",    desc: "Creating interfaces that delight and engage users"             },
  { Icon: Video,   label: "Video Editing",   desc: "Crafting visual stories that captivate audiences"              },
  { Icon: Radio,   label: "Streaming",       desc: "Live streaming content and connecting with communities online" },
  { Icon: Target,  label: "Goal-Oriented",   desc: "Committed to overcoming challenges and achieving goals"        },
];
const PROCESS = [
  { step: "01", Icon: Search,    title: "Research",  desc: "Understand user needs and project goals."       },
  { step: "02", Icon: Layout,    title: "Wireframe", desc: "Create low-fidelity layouts and structure."     },
  { step: "03", Icon: Brush,     title: "Design",    desc: "Build modern and user-friendly interfaces."     },
  { step: "04", Icon: RefreshCw, title: "Iterate",   desc: "Refine designs based on feedback."              },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

// ══ MAIN PAGE ══════════════════════════════════════════════════
export default function LandingPage() {
  const [projFilter, setProjFilter] = useState("All");
  const [certFilter, setCertFilter] = useState("all");

  const PROJ_TAGS = {
    Design: ["Figma","UI/UX","Picsart","Brand Design","Prototyping","Mobile Design","User Research","Canva","Graphic Design"],
    Dev:    ["React","Vite","Tailwind CSS","Framer Motion"],
    Video:  ["CapCut","Adobe Premiere Pro","Motion Graphics"],
  };
  const filteredProjs = projFilter === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.technologies.some((t) => PROJ_TAGS[projFilter]?.includes(t)));

  const uniqueIssuers = ["all", ...new Set(CERTIFICATES.map((c) => c.issuer))];
  const filteredCerts = certFilter === "all"
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.issuer === certFilter);

  const currentExp = EXPERIENCES.filter((e) => e.isCurrent || !e.end_date);
  const pastExp    = EXPERIENCES.filter((e) => !e.isCurrent && !!e.end_date);

  return (
    <div>

      {/* ══ HOME ══════════════════════════════════════════════ */}
      <section id="home" className="pt-[68px] section-padding container-max min-h-[calc(100vh-68px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">

          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">
            <motion.div variants={fadeUp} className="flex">
              <span className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full"
                style={{ background:"rgba(34,197,94,0.08)", border:"1px solid rgba(34,197,94,0.2)", color:"rgba(217,217,217,0.8)" }}>
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.12] tracking-tight">
              Hi, I&apos;m <span className="text-gradient">Jonair Patani</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl font-semibold" style={{ color:"#c084fc" }}>
              Aspiring UI/UX Designer, Frontend Developer, Video Editor &amp; Streamer
            </motion.p>

            <motion.p variants={fadeUp} className="text-muted leading-relaxed max-w-[500px]">
              Computer Science student passionate about creating user-friendly digital experiences,
              visual design, and content editing. Building skills through continuous learning and practical projects.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior:"smooth", block:"start" }); }}
                className="btn-primary">
                View My Work <ArrowRight size={15} />
              </a>
              <Link to="/resume" className="btn-outline">
                <FileText size={15} /> View Resume
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-4 pt-4"
              style={{ gridTemplateColumns: `repeat(${STATS.length}, minmax(0,1fr))` }}>
              {STATS.map((s) => (
                <div key={s.label} className="glass-card p-3 text-center">
                  <div className="text-2xl font-black text-gradient mb-0.5">{s.value}</div>
                  <div className="text-muted text-[11px] leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity:0, scale:0.88 }} animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.85, delay:0.25, ease:[0.22,1,0.36,1] }}
            className="flex justify-center lg:justify-end pb-12">
            <AvatarSlideshow />
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════════════════ */}
      <section id="about" className="section-padding container-max">

        <SectionHeader eyebrow="About Me" title={<>Dedicated &amp; <span className="text-gradient">Determined Creator</span></>}
          subtitle="Computer Science student with real-world production experience, passionate about design, editing, and streaming." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-16">
          <AnimatedSection>
            <p className="leading-relaxed mb-8" style={{ color:"rgba(217,217,217,0.82)" }}>{ABOUT_ME}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { Icon: Mail,   value: PERSONAL_INFO.email    },
                { Icon: Phone,  value: PERSONAL_INFO.phone    },
                { Icon: MapPin, value: PERSONAL_INFO.location },
                { Icon: User,   value: `Born ${PERSONAL_INFO.birthday}` },
              ].map(({ Icon, value }) => (
                <div key={value} className="flex items-center gap-3 glass-card px-4 py-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background:"rgba(124,58,237,0.14)" }}>
                    <Icon size={13} style={{ color:"#a855f7" }} />
                  </div>
                  <span className="text-sm text-muted break-all">{value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4">
            {TRAITS.map(({ Icon, label, desc }, i) => (
              <AnimatedSection key={label} delay={i * 0.1}>
                <div className="glass-card p-5 group h-full"
                  style={{ transition:"border-color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor="rgba(124,58,237,0.35)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor="rgba(255,255,255,0.08)")}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ background:"rgba(124,58,237,0.12)" }}>
                    <Icon size={19} style={{ color:"#a855f7" }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                  <p className="text-muted text-xs leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* ── What I Do — Platforms ── */}
        <div className="mb-16">
          <SectionHeader eyebrow="What I Do" title="My Platforms & Channels"
            subtitle="Places where I create content, stream live, and share my creative work with the world." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PLATFORMS.map((platform, i) => (
              <AnimatedSection key={platform.id} delay={i * 0.12}>
                <div
                  className="glass-card overflow-hidden group"
                  style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${platform.color}55`;
                    e.currentTarget.style.boxShadow   = `0 0 28px ${platform.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow   = "none";
                  }}
                >
                  {/* ── Designed thumbnail banner (no image file needed) ── */}
                  {platform.icon === "yt" ? (
                    /* YouTube banner */
                    <div className="relative h-52 overflow-hidden select-none"
                      style={{ background: "linear-gradient(160deg,#1a0000 0%,#2d0000 40%,#1a0000 100%)" }}>

                      {/* Noise texture grid */}
                      <div className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(255,255,255,0.5) 30px,rgba(255,255,255,0.5) 31px),repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(255,255,255,0.5) 30px,rgba(255,255,255,0.5) 31px)" }} />

                      {/* Big YT play icon watermark */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <svg viewBox="0 0 90 63" width="180" fill="#FF0000">
                          <path d="M88.1 9.9C87 5.9 83.9 2.8 79.9 1.7 72.9 0 45 0 45 0S17.1 0 10.1 1.7C6.1 2.8 3 5.9 1.9 9.9 0 16.9 0 31.5 0 31.5s0 14.6 1.9 21.6C3 57.1 6.1 60.2 10.1 61.3 17.1 63 45 63 45 63s27.9 0 34.9-1.7c4-1.1 7.1-4.2 8.2-8.2C90 46.1 90 31.5 90 31.5s0-14.6-1.9-21.6z"/>
                          <polygon points="36,45 59,31.5 36,18" fill="white"/>
                        </svg>
                      </div>

                      {/* "STRIKER" title text in center */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <div className="flex items-center gap-3">
                          {/* Channel avatar circle */}
                          <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white"
                            style={{ background: "linear-gradient(135deg,#FF0000,#8B0000)", border: "2px solid rgba(255,0,0,0.4)", boxShadow: "0 0 20px rgba(255,0,0,0.4)" }}>
                            S
                          </div>
                          <div>
                            <p className="text-white font-black text-2xl tracking-wider" style={{ textShadow: "0 0 20px rgba(255,0,0,0.6)" }}>
                              STRIKER
                            </p>
                            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                              @STRIKER20030 · 453 subscribers
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-16"
                        style={{ background: "linear-gradient(to top,rgba(5,0,0,0.95),transparent)" }} />

                      {/* Mini video thumbnails strip at bottom */}
                      <div className="absolute bottom-2 left-0 right-0 flex gap-1.5 px-3 opacity-40">
                        {["#1a1a2e","#16213e","#0f3460","#533483","#2c1810"].map((c, i) => (
                          <div key={i} className="flex-1 h-10 rounded-sm" style={{ background: c }} />
                        ))}
                      </div>

                      {/* Platform badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,0,0,0.3)" }}>
                        <Play size={11} style={{ color: "#FF0000", fill: "#FF0000" }} />
                        <span className="text-xs font-bold text-white">YouTube — STRIKER</span>
                      </div>

                      {/* External link */}
                      <a href={platform.url} target="_blank" rel="noopener noreferrer"
                        className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#FF0000")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
                        aria-label="Visit YouTube channel">
                        <ExternalLink size={13} className="text-white" />
                      </a>

                      {/* Handle */}
                      <div className="absolute bottom-3 left-4">
                        <p className="text-sm font-semibold text-white">{platform.handle}</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(217,217,217,0.5)" }}>
                          Joined {platform.joined}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* TikTok banner */
                    <div className="relative h-52 overflow-hidden select-none"
                      style={{ background: "linear-gradient(160deg,#000000 0%,#0a0a0a 40%,#001a1a 100%)" }}>

                      {/* Animated scan-line effect */}
                      <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(105,201,208,1) 2px,rgba(105,201,208,1) 3px)" }} />

                      {/* TikTok logo mark */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-8">
                        <svg viewBox="0 0 50 56" width="120" fill="none">
                          <path d="M49.9 13.4a14.9 14.9 0 01-9-3 14.9 14.9 0 01-5.5-11.4h-9.6v38.5a6.1 6.1 0 11-4.4-5.9V22a15.7 15.7 0 00-2 0 15.9 15.9 0 100 31.9 15.9 15.9 0 0015.9-15.9V19.5a24.4 24.4 0 0014.6 4.8V13.4z"
                            fill="#69C9D0" opacity="0.15"/>
                        </svg>
                      </div>

                      {/* Profile grid mock */}
                      <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-0.5 opacity-20">
                        {["#1a1a2e","#16213e","#533483","#0f3460","#2c1810","#1a0a2e"].map((c, i) => (
                          <div key={i} className="rounded-sm" style={{ background: c }} />
                        ))}
                      </div>

                      {/* Center profile */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                        style={{ background: "linear-gradient(135deg,rgba(0,0,0,0.7),rgba(0,26,26,0.7))" }}>
                        <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white"
                          style={{ background: "linear-gradient(135deg,#69C9D0,#EE1D52)", border: "2px solid rgba(105,201,208,0.5)", boxShadow: "0 0 20px rgba(105,201,208,0.3)" }}>
                          S
                        </div>
                        <div className="text-center">
                          <p className="text-white font-black text-lg tracking-wide" style={{ textShadow: "0 0 16px rgba(105,201,208,0.5)" }}>
                            ×STRIKER×
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: "rgba(105,201,208,0.7)" }}>
                            @striker.only
                          </p>
                        </div>
                      </div>

                      {/* Bottom gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-16"
                        style={{ background: "linear-gradient(to top,rgba(0,5,5,0.95),transparent)" }} />

                      {/* Platform badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(105,201,208,0.3)" }}>
                        <Radio size={11} style={{ color: "#69C9D0" }} />
                        <span className="text-xs font-bold text-white">TikTok — ×STRIKER×</span>
                      </div>

                      {/* External link */}
                      <a href={platform.url} target="_blank" rel="noopener noreferrer"
                        className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#69C9D0")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
                        aria-label="Visit TikTok profile">
                        <ExternalLink size={13} className="text-white" />
                      </a>

                      {/* Handle */}
                      <div className="absolute bottom-3 left-4">
                        <p className="text-sm font-semibold text-white">{platform.handle}</p>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="text-xs" style={{ color: "rgba(105,201,208,0.7)" }}>156 followers</span>
                          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                          <span className="text-xs" style={{ color: "rgba(217,217,217,0.5)" }}>2.2K likes</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Stats row */}
                    <div className="flex flex-wrap gap-3">
                      {platform.stats.map((s) => (
                        <div key={s.label} className="flex flex-col items-center px-4 py-2.5 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                          <span className="text-lg font-black text-gradient">{s.value}</span>
                          <span className="text-[10px] text-muted mt-0.5">{s.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(217,217,217,0.75)" }}>
                      {platform.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {platform.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md"
                          style={{
                            background: `${platform.color}14`,
                            color:      platform.color,
                            border:     `1px solid ${platform.color}30`,
                          }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <SectionHeader eyebrow="Background" title="Educational Background" centered={false} />        <div className="space-y-4 mb-16">
          {EDUCATION.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-card p-6 flex flex-wrap items-start justify-between gap-4"
                style={{ transition:"border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor="rgba(124,58,237,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor="rgba(255,255,255,0.08)")}>
                <div className="flex gap-4 items-start min-w-0">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.2)" }}>
                    <GraduationCap size={20} style={{ color:"#a855f7" }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold leading-snug">{edu.degree}</h3>
                    {edu.field && <p className="text-xs mt-0.5 font-medium" style={{ color:"#c084fc" }}>{edu.field}</p>}
                    <p className="text-sm mt-1 font-medium" style={{ color:"#a855f7" }}>{edu.school}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <MapPin size={11} className="text-muted shrink-0" />
                      <p className="text-muted text-xs">{edu.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
                    style={{ color:"#94a3b8", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }}>
                    {edu.year}
                  </span>
                  {edu.status === "ongoing" && (
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ color:"#22c55e", background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.25)" }}>
                      Ongoing
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Skills */}
        <SectionHeader eyebrow="Expertise" title="Skills &amp; Proficiency" subtitle="Current skill levels across design, editing, and development." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {SKILLS.map((skill, i) => <SkillCard key={skill.name} skill={skill} index={i} />)}
        </div>

        {/* Soft Skills */}
        <SectionHeader eyebrow="Other Skills" title="Soft Skills" subtitle="Personal qualities I bring to every team and project." />
        <AnimatedSection className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-16">
          {SOFT_SKILLS.map((skill, i) => (
            <motion.span key={skill}
              initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }} transition={{ delay: i * 0.07 }} whileHover={{ scale:1.06 }}
              className="glass-card px-5 py-2.5 text-sm font-medium text-white cursor-default select-none"
              style={{ transition:"border-color 0.25s, box-shadow 0.25s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(124,58,237,0.5)"; e.currentTarget.style.boxShadow="0 0 12px rgba(124,58,237,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow="none"; }}>
              {skill}
            </motion.span>
          ))}
        </AnimatedSection>

        {/* Tools — flat grid, two rows of 6 */}
        <SectionHeader eyebrow="Toolbox" title="Tools I Use" subtitle="The software and platforms I rely on daily." />
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {TOOLS.map((tool, i) => {
              const Icon = getToolIcon(tool.name);
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default group"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "border-color 0.25s, box-shadow 0.25s, background 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.45)";
                    e.currentTarget.style.boxShadow   = "0 0 20px rgba(124,58,237,0.18)";
                    e.currentTarget.style.background  = "rgba(124,58,237,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.boxShadow   = "none";
                    e.currentTarget.style.background  = "rgba(255,255,255,0.04)";
                  }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon size={56} />
                  </div>
                  {/* Label */}
                  <div className="text-center">
                    <p className="text-white text-xs font-semibold leading-snug">{tool.name}</p>
                    <p className="text-muted text-[10px] mt-0.5">{tool.category}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Design Process */}
        <div className="mt-16">
          <SectionHeader eyebrow="Workflow" title="My Design Process" subtitle="A structured, user-centered approach to creating meaningful designs." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map(({ step, Icon, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="glass-card p-7 text-center group h-full"
                  style={{ transition:"border-color 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(124,58,237,0.4)"; e.currentTarget.style.boxShadow="0 0 20px rgba(124,58,237,0.12)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow="none"; }}>
                  <div className="text-5xl font-black mb-4" style={{ color:"rgba(124,58,237,0.18)" }}>{step}</div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ background:"rgba(124,58,237,0.12)" }}>
                    <Icon size={22} style={{ color:"#a855f7" }} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══════════════════════════════════════════ */}
      <section id="projects" className="section-padding container-max">
        <AnimatedSection className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.22)" }}>
            <Layers size={30} style={{ color:"#a855f7" }} />
          </div>
        </AnimatedSection>
        <SectionHeader eyebrow="Portfolio" title="My Projects"
          subtitle="A showcase of design, development, and creative work that reflects my skills and growth." />

        <AnimatedSection delay={0.15} className="flex flex-wrap justify-center gap-2 mb-12">
          {["All","Design","Dev","Video"].map((cat) => (
            <button key={cat} onClick={() => setProjFilter(cat)}
              className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={projFilter === cat
                ? { background:"#7c3aed", color:"#fff", boxShadow:"0 0 16px rgba(124,58,237,0.4)" }
                : { background:"rgba(255,255,255,0.04)", color:"#94a3b8", border:"1px solid rgba(255,255,255,0.08)" }}>
              {cat === "All" ? "All Projects" : cat}
            </button>
          ))}
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div key={projFilter}
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
            transition={{ duration:0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjs.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ══ CERTIFICATES ══════════════════════════════════════ */}
      <section id="certificates" className="section-padding container-max">
        <AnimatedSection className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.22)" }}>
            <Award size={30} style={{ color:"#a855f7" }} />
          </div>
        </AnimatedSection>
        <SectionHeader eyebrow="Achievements" title="Certificates &amp; Credentials"
          subtitle="Certifications and learning achievements that reflect my commitment to continuous growth." />

        {uniqueIssuers.length > 2 && (
          <AnimatedSection delay={0.15} className="flex flex-wrap justify-center gap-2 mb-12">
            {uniqueIssuers.map((issuer) => (
              <button key={issuer} onClick={() => setCertFilter(issuer)}
                className="px-4 py-1.5 rounded-xl text-sm font-medium capitalize transition-all duration-200"
                style={certFilter === issuer
                  ? { background:"#7c3aed", color:"#fff", boxShadow:"0 0 14px rgba(124,58,237,0.4)" }
                  : { background:"rgba(255,255,255,0.04)", color:"#94a3b8", border:"1px solid rgba(255,255,255,0.08)" }}>
                {issuer}
              </button>
            ))}
          </AnimatedSection>
        )}

        <AnimatePresence mode="wait">
          <motion.div key={certFilter}
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
            transition={{ duration:0.28 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredCerts.map((cert, i) => <CertCard key={cert.id} certificate={cert} index={i} />)}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection delay={0.35} className="mt-16">
          <div className="rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)" }}>
            {[
              { label:"Total Certificates", value: CERTIFICATES.length },
              { label:"Learning Platforms", value: new Set(CERTIFICATES.map((c) => c.issuer)).size },
              { label:"Skills Covered",     value: "8+" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-4xl font-black text-gradient mb-2">{value}</div>
                <div className="text-muted text-sm">{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ══ EXPERIENCE ════════════════════════════════════════ */}
      <section id="experience" className="section-padding container-max">
        <AnimatedSection className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.22)" }}>
            <BookOpen size={30} style={{ color:"#a855f7" }} />
          </div>
        </AnimatedSection>
        <SectionHeader eyebrow="Career" title="Experience &amp; Journey"
          subtitle="My academic journey and the path I'm building toward a career in design and technology." />

        {currentExp.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background:"#22c55e", boxShadow:"0 0 6px #22c55e" }} />
              <h3 className="text-white font-semibold text-base">Current</h3>
            </div>
            {currentExp.map((exp, i) => (
              <ExpCard key={exp.id} experience={exp} index={i} isLast={i === currentExp.length - 1 && pastExp.length === 0} />
            ))}
          </div>
        )}

        {pastExp.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background:"#94a3b8" }} />
              <h3 className="text-white font-semibold text-base">Past</h3>
            </div>
            {pastExp.map((exp, i) => (
              <ExpCard key={exp.id} experience={exp} index={i} isLast={i === pastExp.length - 1} />
            ))}
          </div>
        )}
      </section>

      {/* ══ CONTACT CTA ═══════════════════════════════════════ */}
      <section className="section-padding container-max pb-24">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center"
            style={{ background:"linear-gradient(135deg,rgba(124,58,237,0.18) 0%,rgba(91,33,182,0.10) 100%)",
              border:"1px solid rgba(124,58,237,0.25)", boxShadow:"0 0 60px rgba(124,58,237,0.2)" }}>
            <div aria-hidden className="absolute -top-16 -left-16 w-48 h-48 rounded-full opacity-30"
              style={{ background:"radial-gradient(circle,#7c3aed,transparent)", filter:"blur(40px)" }} />
            <div aria-hidden className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20"
              style={{ background:"radial-gradient(circle,#5b21b6,transparent)", filter:"blur(40px)" }} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{ background:"rgba(124,58,237,0.2)", border:"1px solid rgba(124,58,237,0.3)" }}>
                <Sparkles size={22} style={{ color:"#c084fc" }} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
              <p className="text-muted max-w-md mx-auto mb-8 leading-relaxed">
                Have a project in mind or want to connect? I&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-primary">
                  Get in Touch <ArrowRight size={15} />
                </a>
                <Link to="/resume" className="btn-outline">
                  <FileText size={15} /> View Resume
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
