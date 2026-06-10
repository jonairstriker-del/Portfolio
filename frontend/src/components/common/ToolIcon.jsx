/**
 * Custom branded SVG icons for tools.
 * Each icon is hand-crafted as an inline SVG to match the tool's
 * visual identity while fitting the dark glassmorphism palette.
 */

/* ── Figma ───────────────────────────────────────────────────── */
export function FigmaIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="2" width="5" height="5" rx="1.5" fill="#F24E1E" />
      <rect x="11" y="2" width="5" height="5" rx="1.5" fill="#FF7262" />
      <rect x="5" y="8.5" width="5" height="5" rx="1.5" fill="#A259FF" />
      <rect x="5" y="15" width="5" height="5" rx="1.5" fill="#0ACF83" />
      <circle cx="13.5" cy="11" r="2.5" fill="#1ABCFE" />
    </svg>
  );
}

/* ── Canva ───────────────────────────────────────────────────── */
export function CanvaIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#7D2AE7" />
      <circle cx="12" cy="12" r="10" fill="url(#canva-grad)" />
      <defs>
        <radialGradient id="canva-grad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6D28D9" />
        </radialGradient>
      </defs>
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="900" fill="white" fontFamily="sans-serif">C</text>
    </svg>
  );
}

/* ── CapCut ──────────────────────────────────────────────────── */
export function CapCutIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#000" />
      {/* Scissors blade top */}
      <path d="M5 7 L13 12 L5 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Scissors blade bottom — smaller */}
      <path d="M19 9.5 L13 12 L19 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Center dot */}
      <circle cx="13" cy="12" r="1.2" fill="white" />
    </svg>
  );
}

/* ── ChatGPT / OpenAI ────────────────────────────────────────── */
export function ChatGPTIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#10a37f" />
      {/* OpenAI-style spiral knot — simplified */}
      <path
        d="M12 5.5 C8.5 5.5 6 8 6 11.5 C6 13.2 6.7 14.7 7.8 15.8 C7.3 16.8 7.1 17.8 7.5 18.5 C8.2 18.5 9.2 18.1 10 17.3 C10.6 17.5 11.3 17.6 12 17.6 C15.5 17.6 18 15.1 18 11.5 C18 8 15.5 5.5 12 5.5Z"
        fill="white"
        opacity="0.9"
      />
      <circle cx="12" cy="11.5" r="2.5" fill="#10a37f" />
    </svg>
  );
}

/* ── VS Code ─────────────────────────────────────────────────── */
export function VSCodeIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#0078D7" />
      {/* < > brackets */}
      <path d="M7 8.5 L4 12 L7 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M17 8.5 L20 12 L17 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* / slash */}
      <path d="M14 7 L10 17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ── OBS Studio ──────────────────────────────────────────────── */
export function OBSIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#1A1A2E" />
      {/* Outer ring */}
      <circle cx="12" cy="12" r="7" stroke="#6B4EFF" strokeWidth="1.5" fill="none" />
      {/* Inner ring */}
      <circle cx="12" cy="12" r="4" stroke="#9B7DFF" strokeWidth="1.5" fill="none" />
      {/* Center dot — live indicator */}
      <circle cx="12" cy="12" r="1.8" fill="#FF3B30" />
      {/* Record dot highlight */}
      <circle cx="12" cy="12" r="0.8" fill="#FF6B6B" />
    </svg>
  );
}

/* ── React ───────────────────────────────────────────────────── */
export function ReactIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#0D1117" />
      {/* Electron orbit 1 */}
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      {/* Electron orbit 2 — rotated 60° */}
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"
        transform="rotate(60 12 12)" />
      {/* Electron orbit 3 — rotated 120° */}
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" fill="none"
        transform="rotate(120 12 12)" />
      {/* Nucleus */}
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

/* ── Picsart ─────────────────────────────────────────────────── */
export function PicsartIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rounded square bg — Picsart signature coral-red */}
      <rect width="24" height="24" rx="7" fill="url(#pa-bg)" />
      <defs>
        <linearGradient id="pa-bg" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#FF3A6E" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
      {/* Picsart "P" letterform — thick left stem + bowl */}
      <path d="M7 5.5 L7 18.5" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
      {/* Bowl of the P */}
      <path d="M7 5.5 Q14.5 5.5 14.5 9.5 Q14.5 13.5 7 13.5"
        stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Small accent dot */}
      <circle cx="17.5" cy="17.5" r="1.8" fill="white" opacity="0.9" />
    </svg>
  );
}

/* ── Pixellab ────────────────────────────────────────────────── */
export function PixellabIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Dark bg with indigo tint */}
      <rect width="24" height="24" rx="7" fill="url(#pl-bg)" />
      <defs>
        <linearGradient id="pl-bg" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#1a1035" />
          <stop offset="100%" stopColor="#2d1b69" />
        </linearGradient>
      </defs>
      {/* Pixel grid — 3×3 with gaps, top-left missing for "L" shape */}
      {/* Row 1 */}
      <rect x="4"    y="4"    width="4.5" height="4.5" rx="1" fill="#a78bfa" />
      <rect x="9.75" y="4"    width="4.5" height="4.5" rx="1" fill="#7c3aed" />
      {/* Row 2 */}
      <rect x="4"    y="9.75" width="4.5" height="4.5" rx="1" fill="#7c3aed" />
      <rect x="9.75" y="9.75" width="4.5" height="4.5" rx="1" fill="#c4b5fd" />
      <rect x="15.5" y="9.75" width="4.5" height="4.5" rx="1" fill="#a78bfa" opacity="0.6" />
      {/* Row 3 */}
      <rect x="4"    y="15.5" width="4.5" height="4.5" rx="1" fill="#c4b5fd" />
      <rect x="9.75" y="15.5" width="4.5" height="4.5" rx="1" fill="#a78bfa" />
      <rect x="15.5" y="15.5" width="4.5" height="4.5" rx="1" fill="#7c3aed" />
    </svg>
  );
}

/* ── Default fallback ────────────────────────────────────────── */
export function DefaultToolIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="rgba(124,58,237,0.3)" />
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="#c084fc" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="2" fill="#c084fc" />
    </svg>
  );
}

/* ── Map: tool name → component ─────────────────────────────── */
const TOOL_ICON_MAP = {
  "Figma":    FigmaIcon,
  "Canva":    CanvaIcon,
  "Picsart":  PicsartIcon,
  "Pixellab": PixellabIcon,
  "CapCut":   CapCutIcon,
  "ChatGPT":  ChatGPTIcon,
  "VS Code":  VSCodeIcon,
  "OBS":      OBSIcon,
  "React":    ReactIcon,
};

export function getToolIcon(toolName) {
  return TOOL_ICON_MAP[toolName] ?? DefaultToolIcon;
}
