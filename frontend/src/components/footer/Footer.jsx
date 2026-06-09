import { Link } from "react-router-dom";
import { Heart, ExternalLink, Mail } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from "../../constants";

function SocialBadge({ type, label }) {
  const map = { github: "GH", linkedin: "in", facebook: "FB" };
  return (
    <span className="text-xs font-bold leading-none" aria-label={label}>
      {map[type] ?? <ExternalLink size={12} />}
    </span>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(5,5,5,0.6)", backdropFilter: "blur(12px)" }}
    >
      <div className="container-max section-padding py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-base"
                style={{ background: "linear-gradient(135deg,#7c3aed,#5b21b6)" }}
              >
                J
              </div>
              <span className="font-bold text-lg text-white">
                Jonair<span style={{ color: "#a855f7" }}>.</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Aspiring UI/UX Designer, Frontend Developer &amp; Video Editor — building skills one project at a time.
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#a855f7" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a855f7")}
            >
              <Mail size={14} />
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Connect
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted hover:text-white transition-all duration-200"
                  style={{ transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <SocialBadge type={social.icon} label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p>© {new Date().getFullYear()} Jonair Patani. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <Heart size={12} style={{ color: "#7c3aed", fill: "#7c3aed" }} />{" "}
            in the Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
