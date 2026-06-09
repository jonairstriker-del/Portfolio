import { useState } from "react";
import { Layers, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/common/SectionHeader";
import ProjectCard from "../components/project/ProjectCard";
import AnimatedSection from "../components/common/AnimatedSection";
import { ALL_PROJECTS } from "../constants";

const CATEGORIES = [
  { key: "All",    label: "All Projects" },
  { key: "Design", label: "Design"       },
  { key: "Dev",    label: "Development"  },
  { key: "Video",  label: "Video"        },
];

const CATEGORY_TAGS = {
  Design: ["Figma", "UI/UX", "Picsart", "Brand Design", "Prototyping", "Mobile Design", "User Research"],
  Dev:    ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  Video:  ["CapCut", "Adobe Premiere Pro", "Motion Graphics"],
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) =>
          p.technologies.some((t) => CATEGORY_TAGS[active]?.includes(t))
        );

  return (
    <div className="pt-[68px]">
      <section className="section-padding container-max">

        {/* Page icon */}
        <AnimatedSection className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.22)" }}
          >
            <Layers size={30} style={{ color: "#a855f7" }} />
          </div>
        </AnimatedSection>

        <SectionHeader
          eyebrow="Portfolio"
          title="My Projects"
          subtitle="A showcase of design, development, and creative work that reflects my skills and growth."
        />

        {/* Filter tabs */}
        <AnimatedSection delay={0.15} className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={
                active === key
                  ? { background: "#7c3aed", color: "#fff", boxShadow: "0 0 16px rgba(124,58,237,0.4)" }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      color: "#94a3b8",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {label}
            </button>
          ))}
        </AnimatedSection>

        {/* Project grid — AnimatePresence for filter transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">No projects found in this category.</p>
        )}

        {/* CTA banner */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "rgba(124,58,237,0.06)",
              border: "1px solid rgba(124,58,237,0.18)",
            }}
          >
            <h3 className="text-white font-bold text-xl mb-3">More Coming Soon</h3>
            <p className="text-muted text-sm mb-7 max-w-sm mx-auto">
              I&apos;m constantly working on new projects. Check back soon or reach out to
              collaborate!
            </p>
            <a href="mailto:jonairpatani@email.com" className="btn-primary inline-flex">
              <Mail size={15} /> Let&apos;s Collaborate
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
