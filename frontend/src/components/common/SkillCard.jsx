import { motion } from "framer-motion";

const CATEGORY_COLOR = {
  design:  "#a855f7",
  editing: "#c084fc",
  dev:     "#7c3aed",
};

export default function SkillCard({ skill, index = 0 }) {
  const { name, level, category } = skill;
  const accent = CATEGORY_COLOR[category] ?? "#a855f7";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="glass-card p-5 group transition-all duration-300"
      style={{ "--accent": accent }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-white text-sm font-semibold">{name}</span>
        <span className="text-xs font-bold tabular-nums" style={{ color: accent }}>
          {level}%
        </span>
      </div>

      {/* Bar track */}
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          style={{ background: `linear-gradient(90deg, #7c3aed, ${accent})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.06 + 0.25, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
