import { motion } from "framer-motion";
import { Briefcase, BookOpen, Calendar } from "lucide-react";
import Badge from "../common/Badge";

const TYPE_CONFIG = {
  freelance: { Icon: Briefcase, accent: "#a855f7", label: "Freelance" },
  academic:  { Icon: BookOpen,  accent: "#22c55e", label: "Academic"  },
  work:      { Icon: Briefcase, accent: "#c084fc", label: "Work"      },
};

function fmtDate(d) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export default function ExperienceCard({ experience, index = 0, isLast = false }) {
  const { company, position, description, start_date, end_date, type = "work" } = experience;
  const { Icon, accent } = TYPE_CONFIG[type] ?? TYPE_CONFIG.work;
  const isCurrent = !end_date;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex gap-5"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center pt-1 shrink-0">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.22)",
            color: accent,
          }}
        >
          <Icon size={17} />
        </div>
        {!isLast && (
          <div className="timeline-line" />
        )}
      </div>

      {/* Card */}
      <div
        className="glass-card p-6 mb-6 flex-1 min-w-0 transition-all duration-300"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-bold text-base">{position}</h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: "#a855f7" }}>
              {company}
            </p>
          </div>
          <Badge variant={isCurrent ? "green" : "default"}>
            {isCurrent ? "Current" : "Past"}
          </Badge>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1.5 text-muted text-xs mb-4">
          <Calendar size={11} />
          <span>{fmtDate(start_date)} — {isCurrent ? "Present" : fmtDate(end_date)}</span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "rgba(217,217,217,0.7)" }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
