import { motion } from "framer-motion";
import { Palette, Video, Target, Lightbulb, Users, Zap, GraduationCap, Quote } from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import AnimatedSection from "../components/common/AnimatedSection";
import SkillCard from "../components/common/SkillCard";
import { SKILLS } from "../constants";

const TRAITS = [
  { Icon: Palette,   label: "UI/UX Design",     desc: "Creating interfaces that delight and engage users"         },
  { Icon: Video,     label: "Video Editing",     desc: "Crafting visual stories that captivate audiences"          },
  { Icon: Target,    label: "Goal-Oriented",     desc: "Focused on delivering results that exceed expectations"    },
  { Icon: Lightbulb, label: "Creative Thinker",  desc: "Bringing unique perspectives to every design challenge"   },
];

const PROCESS = [
  { step: "01", title: "Research",  Icon: Users,   desc: "Understanding user needs and business goals through deep research." },
  { step: "02", title: "Ideate",    Icon: Lightbulb, desc: "Brainstorming creative solutions and exploring multiple directions." },
  { step: "03", title: "Design",    Icon: Palette, desc: "Building wireframes, prototypes, and high-fidelity designs in Figma." },
  { step: "04", title: "Iterate",   Icon: Zap,     desc: "Refining through feedback until the design truly works." },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science",
    field: "Information Technology / Related Field",
    school: "University / College",
    year: "2021 — Present",
    status: "ongoing",
  },
];

export default function About() {
  return (
    <div className="pt-[68px]">

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-4 px-3 py-1 rounded-full"
              style={{ color: "#a855f7", background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              About Me
            </span>

            <h1 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight">
              Passionate Creator &amp;{" "}
              <span className="text-gradient">Visual Storyteller</span>
            </h1>

            {[
              `Hi, I'm Jonair Patani — an aspiring UI/UX Designer and Creative Editor based in the Philippines. I have a deep passion for crafting visually appealing and user-friendly digital experiences that leave a lasting impression.`,
              `My journey started with a curiosity for design and storytelling. Over time I've developed skills in UI/UX design using Figma, video editing with Adobe Premiere Pro and CapCut, and front-end development with React and Tailwind CSS.`,
              `I believe great design solves real problems while looking beautiful. Every project I take on, I pour creativity and attention to detail into delivering work that exceeds expectations.`,
            ].map((para, i) => (
              <p
                key={i}
                className="leading-relaxed mb-5 last:mb-0"
                style={{ color: i < 2 ? "rgba(217,217,217,0.85)" : "#94a3b8" }}
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Right — trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {TRAITS.map(({ Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="glass-card p-5 group"
                style={{ transition: "border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(124,58,237,0.12)" }}
                >
                  <Icon size={19} style={{ color: "#a855f7" }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{label}</h3>
                <p className="text-muted text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EDUCATION
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader eyebrow="Background" title="Education" centered={false} />
        <div className="space-y-4">
          {EDUCATION.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className="glass-card p-6 flex flex-wrap items-start justify-between gap-4"
                style={{ transition: "border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <GraduationCap size={20} style={{ color: "#a855f7" }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{edu.degree}</h3>
                    <p className="text-sm mt-0.5" style={{ color: "#c084fc" }}>{edu.field}</p>
                    <p className="text-muted text-sm mt-1">{edu.school}</p>
                  </div>
                </div>
                <span
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    color: "#94a3b8",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {edu.year}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DESIGN PROCESS
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="Workflow"
          title="My Design Process"
          subtitle="A structured, user-centered approach to creating meaningful and effective designs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map(({ step, title, Icon, desc }, i) => (
            <AnimatedSection key={step} delay={i * 0.1}>
              <div
                className="glass-card p-7 text-center group h-full"
                style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="text-5xl font-black mb-4"
                  style={{ color: "rgba(124,58,237,0.18)" }}
                >
                  {step}
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(124,58,237,0.12)" }}
                >
                  <Icon size={22} style={{ color: "#a855f7" }} />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills &amp; Proficiency"
          subtitle="An honest breakdown of my current skill levels across design, editing, and development."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PHILOSOPHY QUOTE
      ══════════════════════════════════════════════════════════ */}
      <section className="section-padding container-max pb-24">
        <AnimatedSection>
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-14"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* bg glow */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle,#7c3aed,transparent)", filter: "blur(60px)" }}
            />

            <div className="relative max-w-3xl">
              <Quote size={40} style={{ color: "rgba(124,58,237,0.4)", marginBottom: "1.5rem" }} />
              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-5 px-3 py-1 rounded-full"
                style={{ color: "#a855f7", background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
              >
                Design Philosophy
              </span>
              <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-relaxed mb-6">
                "Good design is not just about how it looks —&nbsp;it&apos;s about how it{" "}
                <span className="text-gradient">feels and functions</span>."
              </blockquote>
              <p className="text-muted leading-relaxed max-w-2xl">
                I approach every project with the user at the center. My goal is to bridge
                the gap between functionality and beauty — creating work that is not only
                visually stunning but also intuitive, accessible, and purposeful.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
