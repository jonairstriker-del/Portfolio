/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050505",
        charcoal: "#0F0F0F",
        graphite: "#1A1A1A",
        // Flat purple tokens — no nested DEFAULT to avoid @apply issues
        violet: "#7C3AED",
        "violet-deep": "#5B21B6",
        "violet-light": "#A855F7",
        "violet-soft": "#C084FC",
        silver: "#D9D9D9",
        "neon-green": "#22C55E",
        surface: "#1E293B",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "float-slow": "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,58,237,0.25)" },
          "50%":       { boxShadow: "0 0 50px rgba(124,58,237,0.55)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
