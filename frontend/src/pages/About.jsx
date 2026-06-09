import { motion } from "framer-motion";
import {
  Palette, Video, Target, Lightbulb,
  Users, Zap, GraduationCap, Quote,
  MapPin, Mail, Phone, User,
  Search, Layout, Brush, RefreshCw, Radio,
} from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import AnimatedSection from "../components/common/AnimatedSection";
import SkillCard from "../components/common/SkillCard";
import {
  SKILLS, SOFT_SKILLS, EDUCATION,
  ABOUT_ME, PERSONAL_INFO, REFERENCES,
} from "../constants";

const TRAITS = [
  { Icon: Palette,   label: "UI/UX Design",    desc: "Creating interfaces that delight and engage users"              },
  { Icon: Video,     label: "Video Editing",    desc: "Crafting visual stories that captivate audiences"               },
  { Icon: Radio,     label: "Streaming",        desc: "Live streaming content and connecting with communities online"  },
  { Icon: Target,    label: "Goal-Oriented",    desc: "Committed to overcoming challenges and achieving goals"         },
];

const PROCESS = [
  { step: "01", Icon: Search,    title: "Research",  desc: "Understand user needs and project goals."          },
  { step: "02", Icon: Layout,    title: "Wireframe", desc: "Create low-fidelity layouts and structure."        },
  { step: "03", Icon: Brush,     title: "Design",    desc: "Build modern and user-friendly interfaces."        },
  { step: "04", Icon: RefreshCw, title: "Iterate",   desc: "Refine designs based on feedback."                },
];

export default function About() {
  return (
    <div className="pt-[68px]">

      {/* ══ HERO — objective + traits ══════════════════════════ */}
      <section className="section-padding container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Bio / Objective */}
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

            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Dedicated &amp;{" "}
              <span className="text-gradient">Determined Creator</span>
            </h1>

            <p className="leading-relaxed mb-8" style={{ color: "rgba(217,217,217,0.82)" }}>
              {ABOUT_ME}
            </p>

            {/* Contact tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { Icon: Mail,   value: PERSONAL_INFO.email    },
                { Icon: Phone,  value: PERSONAL_INFO.phone    },
                { Icon: MapPin, value: PERSONAL_INFO.location },
                { Icon: User,   value: `Born ${PERSONAL_INFO.birthday}` },
              ].map(({ Icon, value }) => (
                <div key={value} className="flex items-center gap-3 glass-card px-4 py-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(124,58,237,0.14)" }}
                  >
                    <Icon size={13} style={{ color: "#a855f7" }} />
                  </div>
                  <span className="text-sm text-muted break-all">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trait cards */}
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

      {/* ══ EDUCATION ══════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="Background"
          title="Educational Background"
          centered={false}
        />
        <div className="space-y-4">
          {EDUCATION.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div
                className="glass-card p-6 flex flex-wrap items-start justify-between gap-4"
                style={{ transition: "border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <div className="flex gap-4 items-start min-w-0">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
                  >
                    <GraduationCap size={20} style={{ color: "#a855f7" }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold leading-snug">{edu.degree}</h3>
                    {edu.field && (
                      <p className="text-xs mt-0.5 font-medium" style={{ color: "#c084fc" }}>
                        {edu.field}
                      </p>
                    )}
                    <p className="text-sm mt-1 font-medium" style={{ color: "#a855f7" }}>{edu.school}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <MapPin size={11} className="text-muted shrink-0" />
                      <p className="text-muted text-xs">{edu.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span
                    className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap"
                    style={{ color: "#94a3b8", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {edu.year}
                  </span>
                  {edu.status === "ongoing" && (
                    <span
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ color: "#22c55e", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}
                    >
                      Ongoing
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ══ SKILLS ════════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills &amp; Proficiency"
          subtitle="Current skill levels across design, editing, and development."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </section>

      {/* ══ SOFT SKILLS ════════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="Other Skills"
          title="Soft Skills"
          subtitle="Personal qualities I bring to every team and project."
        />
        <AnimatedSection className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {SOFT_SKILLS.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.06 }}
              className="glass-card px-5 py-2.5 text-sm font-medium text-white cursor-default select-none"
              style={{ transition: "border-color 0.25s, box-shadow 0.25s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
                e.currentTarget.style.boxShadow = "0 0 12px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {skill}
            </motion.span>
          ))}
        </AnimatedSection>
      </section>

      {/* ══ DESIGN PROCESS ════════════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="Workflow"
          title="My Design Process"
          subtitle="A structured, user-centered approach to creating meaningful and effective designs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map(({ step, Icon, title, desc }, i) => (
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
                <div className="text-5xl font-black mb-4" style={{ color: "rgba(124,58,237,0.18)" }}>
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

      {/* ══ CHARACTER REFERENCES ══════════════════════════════ */}
      <section className="section-padding container-max">
        <SectionHeader
          eyebrow="References"
          title="Character References"
          subtitle="People who can speak to my character, work ethic, and abilities."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REFERENCES.map((ref, i) => (
            <AnimatedSection key={ref.name} delay={i * 0.1}>
              <div
                className="glass-card p-6 h-full"
                style={{ transition: "border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                {/* Avatar initial */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-base shrink-0"
                    style={{ background: "linear-gradient(135deg,#7c3aed,#5b21b6)" }}
                  >
                    {ref.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm leading-tight">{ref.name}</h3>
                    <p className="text-xs mt-0.5" style={{ color: "#a855f7" }}>{ref.role}</p>
                  </div>
                </div>

                <p className="text-muted text-xs font-medium mb-1">{ref.company}</p>
                <p className="text-muted text-xs leading-relaxed mb-3">{ref.address}</p>

                <a
                  href={`tel:${ref.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs"
                  style={{ color: "#a855f7", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#a855f7")}
                >
                  <Phone size={11} />
                  {ref.phone}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ══ PHILOSOPHY QUOTE ══════════════════════════════════ */}
      <section className="section-padding container-max pb-24">
        <AnimatedSection>
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-14"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
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
                My Objective
              </span>
              <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-relaxed mb-6">
                &ldquo;I approach every task with{" "}
                <span className="text-gradient">discipline and a strong work ethic</span>,
                eager to expand my skills and grow professionally.&rdquo;
              </blockquote>
              <p className="text-muted leading-relaxed max-w-2xl">
                I hereby certify that the facts contained in this portfolio are true
                and complete to the best of my knowledge.
                &nbsp;— <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
