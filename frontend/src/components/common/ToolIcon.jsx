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
      {/* Black rounded square — matches real CapCut icon */}
      <rect width="24" height="24" rx="5.5" fill="#000000" />
      {/*
        Real CapCut logo: two rounded rectangles overlapping (hourglass/bowtie)
        with a diagonal slash cutting across the center.
        Top-left rect
      */}
      <rect x="4.5" y="4.5" width="7.5" height="7.5" rx="2.2" fill="white" />
      {/* Bottom-right rect */}
      <rect x="12" y="12" width="7.5" height="7.5" rx="2.2" fill="white" />
      {/* Diagonal slash — cutting top-right to bottom-left through center */}
      <path d="M18 4.5 L6 19.5" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
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
      <defs>
        <linearGradient id="pa-bg" x1="0" y1="0" x2="24" y2="24">
          {/* Real Picsart gradient: hot pink → purple → cyan */}
          <stop offset="0%"   stopColor="#FF00CC" />
          <stop offset="50%"  stopColor="#7B2FFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
      {/* Rounded square — real Picsart shape */}
      <rect width="24" height="24" rx="6" fill="url(#pa-bg)" />
      {/* Real Picsart logo: lowercase "p" with open circle + descending stem */}
      {/* The circle (open — stroke only, no fill) */}
      <circle cx="13.2" cy="9.8" r="3.6" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Vertical stem — left side of the p, extends from top of circle down past bottom */}
      <line x1="9.6" y1="6.2" x2="9.6" y2="18.8"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Pixellab ────────────────────────────────────────────────── */
export function PixellabIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Real Pixellab icon: blue circle with double-stroke "P" and long shadow */}
      <circle cx="12" cy="12" r="12" fill="#3AABDB" />
      {/* Long diagonal shadow of the P (darker blue, offset down-right) */}
      <path d="M10 7 L10 21 Q15 21 16.5 18 L10.5 12.5 Q16 12 16 9.5 Q16 7 10 7Z"
        fill="rgba(0,60,100,0.25)" />
      {/* Double-stroke P — left vertical bar */}
      <line x1="8.5" y1="5.5" x2="8.5" y2="18.5"
        stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* Double-stroke P — second vertical bar (inner) */}
      <line x1="11.5" y1="5.5" x2="11.5" y2="18.5"
        stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* P bowl — outer arc connecting both stems */}
      <path d="M8.5 5.5 Q18.5 5.5 18.5 11 Q18.5 16.5 8.5 16.5"
        stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ── TikTok LIVE Studio ──────────────────────────────────────── */
export function TikTokIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Coral-red rounded square — matches the real TikTok LIVE Studio icon */}
      <rect width="24" height="24" rx="6" fill="#EE1D52" />

      {/* TikTok musical note logo — white
          The shape is a stylised eighth note:
          - a vertical stem on the right
          - a flag curling to the right at the top
          - a filled oval (note head) at the bottom-left
          Path traced to match the real TikTok logomark proportions */}
      <path
        d="
          M15.2 4.5
          C15.2 4.5 15.6 7.1 18.2 7.8
          L18.2 10.4
          C18.2 10.4 16.1 10.3 14.6 9.1
          L14.6 15.3
          C14.6 18.1 12.3 20.4 9.5 20.4
          C6.7 20.4 4.4 18.1 4.4 15.3
          C4.4 12.5 6.7 10.2 9.5 10.2
          C9.9 10.2 10.3 10.3 10.6 10.4
          L10.6 13.1
          C10.3 13.0 9.9 12.9 9.5 12.9
          C8.2 12.9 7.1 14.0 7.1 15.3
          C7.1 16.6 8.2 17.7 9.5 17.7
          C10.8 17.7 11.9 16.6 11.9 15.3
          L11.9 4.5
          Z
        "
        fill="white"
      />
    </svg>
  );
}

/* ── Adobe Premiere Pro ──────────────────────────────────────── */
export function AdobePremierIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Deep purple background — Premiere's exact brand color */}
      <rect width="24" height="24" rx="5" fill="#00005B" />
      <rect width="24" height="24" rx="5" fill="url(#pr-bg)" opacity="0.6" />
      <defs>
        <linearGradient id="pr-bg" x1="0" y1="0" x2="0" y2="24">
          <stop offset="0%" stopColor="#9999FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00005B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* "Pr" text — Adobe's actual Premiere abbreviation */}
      <text
        x="4" y="17"
        fontSize="13" fontWeight="900" fill="#9999FF"
        fontFamily="'Arial Black', Arial, sans-serif"
        letterSpacing="-0.5"
      >Pr</text>
    </svg>
  );
}

/* ── Adobe Photoshop ─────────────────────────────────────────── */
export function AdobePhotoshopIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Deep blue background — Photoshop's exact brand color */}
      <rect width="24" height="24" rx="5" fill="#001E36" />
      <rect width="24" height="24" rx="5" fill="url(#ps-bg)" opacity="0.6" />
      <defs>
        <linearGradient id="ps-bg" x1="0" y1="0" x2="0" y2="24">
          <stop offset="0%" stopColor="#31A8FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#001E36" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* "Ps" text — Adobe's actual Photoshop abbreviation */}
      <text
        x="3.5" y="17"
        fontSize="13" fontWeight="900" fill="#31A8FF"
        fontFamily="'Arial Black', Arial, sans-serif"
        letterSpacing="-0.5"
      >Ps</text>
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
  "Figma":           FigmaIcon,
  "Canva":           CanvaIcon,
  "Picsart":         PicsartIcon,
  "Pixellab":        PixellabIcon,
  "Adobe Photoshop": AdobePhotoshopIcon,
  "CapCut":          CapCutIcon,
  "Adobe Premiere":  AdobePremierIcon,
  "ChatGPT":         ChatGPTIcon,
  "VS Code":         VSCodeIcon,
  "TikTok LIVE":     TikTokIcon,
  "OBS":             OBSIcon,
  "React":           ReactIcon,
};

export function getToolIcon(toolName) {
  return TOOL_ICON_MAP[toolName] ?? DefaultToolIcon;
}
