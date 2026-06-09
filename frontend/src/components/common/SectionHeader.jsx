import { motion } from "framer-motion";

/**
 * SectionHeader
 * @param {string}  eyebrow  — small label above the title
 * @param {string}  title    — main heading (supports inline JSX)
 * @param {string}  subtitle — optional supporting sentence
 * @param {boolean} centered — default true
 */
export default function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-3 px-3 py-1 rounded-full"
          style={{
            color: "#a855f7",
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        >
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-muted text-base sm:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
