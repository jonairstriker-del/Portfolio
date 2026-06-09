import { useRef } from "react";
import { Printer, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PERSONAL_INFO,
  EDUCATION,
  SKILLS,
  SOFT_SKILLS,
  REFERENCES,
  ABOUT_ME,
} from "../constants";

/* ── Section heading ──────────────────────────────────────── */
function Section({ title, children }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <h2
          className="text-[11px] font-black uppercase tracking-[0.2em]"
          style={{ color: "#7c3aed" }}
        >
          {title}
        </h2>
        <div className="flex-1 h-px" style={{ background: "#7c3aed", opacity: 0.3 }} />
      </div>
      {children}
    </div>
  );
}

/* ── Skill bar ────────────────────────────────────────────── */
function SkillBar({ name, level }) {
  return (
    <div className="mb-2.5">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[11px] font-medium text-gray-700">{name}</span>
        <span className="text-[10px] text-gray-400">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, #7c3aed, #a855f7)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Main resume page ─────────────────────────────────────── */
export default function Resume() {
  const printRef = useRef(null);

  const handlePrint = () => window.print();

  return (
    <>
      {/* ── Screen controls (hidden on print) ── */}
      <div
        className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted hidden sm:block">
            Press <kbd className="px-1.5 py-0.5 rounded text-xs" style={{ background: "rgba(255,255,255,0.1)" }}>Ctrl+P</kbd> or click to save as PDF
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all"
            style={{ background: "#7c3aed", color: "#fff" }}
          >
            <Printer size={14} />
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── Resume sheet ── */}
      <div
        className="min-h-screen flex items-start justify-center py-20 px-4 no-print-bg"
        style={{ background: "#1a1a2e" }}
      >
        <div
          ref={printRef}
          id="resume-sheet"
          className="resume-sheet w-full max-w-[794px] bg-white shadow-2xl"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
        >

          {/* ══ HEADER ══════════════════════════════════════════ */}
          <div
            className="px-10 py-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #2d1060 50%, #1a0a2e 100%)" }}
          >
            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <h1
                className="text-3xl font-black tracking-tight mb-1"
                style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
              >
                {PERSONAL_INFO.name}
              </h1>
              <p
                className="text-sm font-medium mb-5"
                style={{ color: "#c084fc" }}
              >
                UI/UX Designer &nbsp;·&nbsp; Frontend Developer &nbsp;·&nbsp; Video Editor &nbsp;·&nbsp; Streamer
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {[
                  { label: PERSONAL_INFO.email },
                  { label: PERSONAL_INFO.phone },
                  { label: PERSONAL_INFO.location },
                  { label: `Born ${PERSONAL_INFO.birthday}` },
                  { label: "github.com/jonairpatani" },
                ].map(({ label }) => (
                  <span
                    key={label}
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ══ BODY — two-column ═══════════════════════════════ */}
          <div className="flex">

            {/* LEFT COLUMN — 38% */}
            <div
              className="w-[38%] px-7 py-7 space-y-0"
              style={{ background: "#fafafa", borderRight: "1px solid #f0f0f0" }}
            >

              {/* Skills */}
              <Section title="Technical Skills">
                {SKILLS.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </Section>

              {/* Tools */}
              <Section title="Tools & Software">
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {["Figma", "Canva", "CapCut", "ChatGPT", "VS Code", "OBS Studio", "React"].map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(124,58,237,0.08)",
                        color: "#7c3aed",
                        border: "1px solid rgba(124,58,237,0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Section>

              {/* Soft Skills */}
              <Section title="Other Skills">
                <ul className="space-y-1.5 mt-1">
                  {SOFT_SKILLS.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#7c3aed" }}
                      />
                      <span className="text-[11px] text-gray-600">{s}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Certifications */}
              <Section title="Certifications">
                <ul className="space-y-2 mt-1">
                  {[
                    { title: "UI/UX Design Fundamentals", org: "Coursera" },
                    { title: "Figma: Beginners to Advanced", org: "Udemy" },
                    { title: "Video Editing Masterclass", org: "YouTube" },
                    { title: "Responsive Web Design", org: "freeCodeCamp" },
                    { title: "Introduction to React", org: "Scrimba" },
                  ].map((c) => (
                    <li key={c.title}>
                      <p className="text-[11px] font-semibold text-gray-700 leading-tight">{c.title}</p>
                      <p className="text-[10px] text-gray-400">{c.org}</p>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>

            {/* RIGHT COLUMN — 62% */}
            <div className="flex-1 px-8 py-7">

              {/* Objective */}
              <Section title="Objective">
                <p className="text-[11.5px] text-gray-600 leading-relaxed">
                  {ABOUT_ME}
                </p>
              </Section>

              {/* Education */}
              <Section title="Educational Background">
                <div className="space-y-4">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0 mt-0.5"
                            style={{ background: "#7c3aed" }}
                          />
                          <p className="text-[11.5px] font-bold text-gray-800 leading-snug">
                            {edu.degree}
                          </p>
                        </div>
                        {edu.field && (
                          <p className="text-[10px] font-medium ml-3.5" style={{ color: "#7c3aed" }}>
                            {edu.field}
                          </p>
                        )}
                        <p className="text-[11px] text-gray-500 ml-3.5">{edu.school}</p>
                        <p className="text-[10px] text-gray-400 ml-3.5">{edu.location}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-semibold text-gray-500 whitespace-nowrap">
                          {edu.year}
                        </span>
                        {edu.status === "ongoing" && (
                          <div
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded-full mt-0.5 text-center"
                            style={{ background: "rgba(34,197,94,0.1)", color: "#16a34a" }}
                          >
                            Ongoing
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Experience */}
              <Section title="Experience">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-0.5"
                          style={{ background: "#7c3aed" }}
                        />
                        <p className="text-[11.5px] font-bold text-gray-800">
                          3rd Year Computer Science Student (Incoming 4th Year)
                        </p>
                      </div>
                      <p className="text-[11px] text-gray-500 ml-3.5">
                        Arellano University – Jose Abad Santos Campus
                      </p>
                      <ul className="mt-1.5 ml-3.5 space-y-1">
                        {[
                          "Pursuing BSCS — currently 3rd year, incoming 4th year (2023–Present).",
                          "Worked in production environments twice — gaining real-world professional exposure.",
                          "Self-directed learning in video editing, live streaming, and creative content.",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-gray-300 text-[11px] mt-0.5 shrink-0">–</span>
                            <span className="text-[11px] text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 whitespace-nowrap shrink-0">
                      2023 – Present
                    </span>
                  </div>
                </div>
              </Section>

              {/* References */}
              <Section title="Character References">
                <div className="space-y-3">
                  {REFERENCES.map((ref) => (
                    <div key={ref.name} className="flex items-start gap-2">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-black shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg,#7c3aed,#5b21b6)" }}
                      >
                        {ref.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-700 leading-tight">{ref.name}</p>
                        <p className="text-[10px] text-gray-500">{ref.role} — {ref.company}</p>
                        <p className="text-[10px] text-gray-400">{ref.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

            </div>
          </div>

          {/* ══ FOOTER ══════════════════════════════════════════ */}
          <div
            className="px-10 py-4 flex items-center justify-between"
            style={{ background: "#fafafa", borderTop: "1px solid #f0f0f0" }}
          >
            <p className="text-[10px] text-gray-400">
              I hereby certify that the facts contained in this résumé are true and complete to the best of my knowledge.
            </p>
            <p
              className="text-[11px] font-bold shrink-0 ml-4"
              style={{ color: "#7c3aed" }}
            >
              {PERSONAL_INFO.name}
            </p>
          </div>
        </div>
      </div>

      {/* ── Print styles ── injected inline so no extra CSS file needed ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        #resume-sheet { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; }

        @media print {
          .no-print { display: none !important; }
          .no-print-bg { background: white !important; padding: 0 !important; }
          #resume-sheet {
            box-shadow: none !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
          body { background: white !important; }
        }
      `}</style>
    </>
  );
}
