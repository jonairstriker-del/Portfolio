import { useState } from "react";
import { Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../components/common/SectionHeader";
import CertificateCard from "../components/certificate/CertificateCard";
import AnimatedSection from "../components/common/AnimatedSection";
import { CERTIFICATES } from "../constants";

export default function Certificates() {
  const [filter, setFilter] = useState("all");

  const uniqueIssuers = ["all", ...new Set(CERTIFICATES.map((c) => c.issuer))];

  const filtered =
    filter === "all"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.issuer === filter);

  const stats = [
    { label: "Total Certificates",   value: CERTIFICATES.length },
    { label: "Learning Platforms",   value: new Set(CERTIFICATES.map((c) => c.issuer)).size },
    { label: "Skills Covered",       value: "8+" },
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
            <Award size={30} style={{ color: "#a855f7" }} />
          </div>
        </AnimatedSection>

        <SectionHeader
          eyebrow="Achievements"
          title="Certificates &amp; Credentials"
          subtitle="Certifications and learning achievements that reflect my commitment to continuous growth."
        />

        {/* Filter pills */}
        {uniqueIssuers.length > 2 && (
          <AnimatedSection delay={0.15} className="flex flex-wrap justify-center gap-2 mb-12">
            {uniqueIssuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setFilter(issuer)}
                className="px-4 py-1.5 rounded-xl text-sm font-medium capitalize transition-all duration-200"
                style={
                  filter === issuer
                    ? { background: "#7c3aed", color: "#fff", boxShadow: "0 0 14px rgba(124,58,237,0.4)" }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        color: "#94a3b8",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {issuer}
              </button>
            ))}
          </AnimatedSection>
        )}

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((cert, i) => (
              <CertificateCard key={cert.id} certificate={cert} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">No certificates found.</p>
        )}

        {/* Stats bar */}
        <AnimatedSection delay={0.35} className="mt-16">
          <div
            className="rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {stats.map(({ label, value }) => (
              <div key={label}>
                <div className="text-4xl font-black text-gradient mb-2">{value}</div>
                <div className="text-muted text-sm">{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
