import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle } from "lucide-react";

export default function CertificateCard({ certificate, index = 0 }) {
  const { title, issuer, issued_date, image_url } = certificate;

  const formattedDate = issued_date
    ? new Date(issued_date).toLocaleDateString("en-US", { year: "numeric", month: "long" })
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.42, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden group flex flex-col"
      style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Preview area */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,rgba(91,33,182,0.2) 0%,#1a1a1a 100%)" }}
      >
        {image_url ? (
          <img src={image_url} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-3">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#5b21b6)",
                boxShadow: "0 0 20px rgba(124,58,237,0.35)",
              }}
            >
              <Award size={28} color="#fff" />
            </motion.div>
          </div>
        )}

        {/* Verified badge */}
        <div className="absolute top-3 right-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}
          >
            <CheckCircle size={13} style={{ color: "#22c55e" }} />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm font-medium" style={{ color: "#a855f7" }}>
          {issuer}
        </p>
        {formattedDate && (
          <div className="flex items-center gap-1.5 mt-auto pt-2">
            <Calendar size={11} className="text-muted" />
            <span className="text-muted text-xs">{formattedDate}</span>
          </div>
        )}
      </div>
    </motion.article>
  );
}
