const STYLES = {
  default: {
    background: "rgba(255,255,255,0.05)",
    color: "#d1d5db",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  purple: {
    background: "rgba(124,58,237,0.12)",
    color: "#c084fc",
    border: "1px solid rgba(124,58,237,0.22)",
  },
  green: {
    background: "rgba(34,197,94,0.10)",
    color: "#22c55e",
    border: "1px solid rgba(34,197,94,0.22)",
  },
  outline: {
    background: "transparent",
    color: "#a855f7",
    border: "1px solid rgba(124,58,237,0.4)",
  },
};

export default function Badge({ children, variant = "default" }) {
  return (
    <span
      className="inline-block text-xs font-medium px-2.5 py-1 rounded-md"
      style={STYLES[variant] ?? STYLES.default}
    >
      {children}
    </span>
  );
}
