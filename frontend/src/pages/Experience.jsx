import { Briefcase, TrendingUp, Star, Clock } from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import ExperienceCard from "../components/experience/ExperienceCard";
import AnimatedSection from "../components/common/AnimatedSection";
import { EXPERIENCES } from "../constants";

export default function Experience() {
  const current = EXPERIENCES.filter((e) => !e.end_date);
  const past    = EXPERIENCES.filter((e) => !!e.end_date);

  const stats = [
    { Icon: TrendingUp, label: "Roles Total",     value: `${EXPERIENCES.length}+` },
    { Icon: Star,       label: "Active Now",       value: current.length           },
    { Icon: Clock,      label: "Years Practice",   value: "2+"                     },
  ];

  return (
    <div className="pt-[68px]">
      <section className="section-padding container-max">

        {/* Page icon */}
        <AnimatedSection className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.22)" }}
          >
            <Briefcase size={30} style={{ color: "#a855f7" }} />
          </div>
        </AnimatedSection>

        <SectionHeader
          eyebrow="Career"
          title="Experience &amp; Journey"
          subtitle="A timeline of professional growth, freelance work, and academic involvement."
        />

        {/* Current roles */}
        {current.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
              />
              <h3 className="text-white font-semibold text-base">Current Roles</h3>
            </div>
            {current.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={i}
                isLast={i === current.length - 1 && past.length === 0}
              />
            ))}
          </div>
        )}

        {/* Past experience */}
        {past.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "#94a3b8" }}
              />
              <h3 className="text-white font-semibold text-base">Past Experience</h3>
            </div>
            {past.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={i}
                isLast={i === past.length - 1}
              />
            ))}
          </div>
        )}

        {/* Stats */}
        <AnimatedSection delay={0.3} className="mt-8">
          <div
            className="rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {stats.map(({ Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.12)" }}
                >
                  <Icon size={18} style={{ color: "#a855f7" }} />
                </div>
                <div className="text-4xl font-black text-gradient">{value}</div>
                <div className="text-muted text-sm">{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
