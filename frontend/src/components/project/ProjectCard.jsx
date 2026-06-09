import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Layers } from "lucide-react";
import Badge from "../common/Badge";

export default function ProjectCard({ project, index = 0 }) {
  const {
    title,
    description,
    technologies = [],
    github_url,
    live_url,
    image_url,
  } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
      style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)";
        e.currentTarget.style.boxShadow = "0 0 24px rgba(124,58,237,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1a1a1a 0%,#0f0f0f 100%)" }}
      >
        {image_url ? (
          <img
            src={image_url}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-muted">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.15)" }}
            >
              <Layers size={26} style={{ color: "#c084fc" }} />
            </div>
            <span className="text-xs opacity-60">Project Preview</span>
          </div>
        )}

        {/* Hover gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)" }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-white font-bold text-lg leading-snug group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>

        <p className="text-muted text-sm leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <Badge key={tech} variant="purple">{tech}</Badge>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 pt-1">
          {live_url && (
            <a
              href={live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: "#a855f7" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a855f7")}
              aria-label={`Live demo: ${title}`}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
          {github_url && (
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors duration-200"
              aria-label={`GitHub: ${title}`}
            >
              <GitBranch size={13} /> GitHub
            </a>
          )}
          {!live_url && !github_url && (
            <span className="text-xs text-muted italic">Coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
