import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { label: "Home",         id: "home"         },
  { label: "About",        id: "about"        },
  { label: "Projects",     id: "projects"     },
  { label: "Certificates", id: "certificates" },
  { label: "Experience",   id: "experience"   },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 68; // navbar height
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");

  // Scroll blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const observers = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navBase = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const navBg   = scrolled
    ? "bg-charcoal/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
    : "bg-transparent";

  return (
    <nav className={`${navBase} ${navBg}`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo — scrolls to top */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-base shrink-0"
              style={{ background: "linear-gradient(135deg,#7c3aed,#5b21b6)", boxShadow: "0 0 8px rgba(124,58,237,0.3)" }}
            >
              J
            </div>
            <span className="font-bold text-[1.1rem] text-white group-hover:text-gradient transition-all duration-300">
              Jonair<span style={{ color: "#a855f7" }}>.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {SECTIONS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: active === id ? "#a855f7" : "rgba(217,217,217,0.55)" }}
                onMouseEnter={(e) => { if (active !== id) e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { if (active !== id) e.currentTarget.style.color = "rgba(217,217,217,0.55)"; }}
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{ background: "rgba(124,58,237,0.12)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
            <Link to="/resume" className="btn-primary ml-3 text-sm py-2 px-4">
              <FileText size={14} /> Resume
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-silver hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(15,15,15,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="container-max px-4 py-4 flex flex-col gap-1">
              {SECTIONS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => { scrollTo(id); setIsOpen(false); }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200"
                  style={{
                    color: active === id ? "#a855f7" : "rgba(217,217,217,0.55)",
                    background: active === id ? "rgba(124,58,237,0.10)" : "transparent",
                  }}
                >
                  {label}
                </button>
              ))}
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-3 justify-center"
              >
                <FileText size={14} /> View Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
