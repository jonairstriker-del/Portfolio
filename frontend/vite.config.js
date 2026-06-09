import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Ensure assets resolve correctly on Vercel (no subdirectory)
  base: "/",

  build: {
    // Raise the chunk-size warning threshold slightly — framer-motion is large
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching on CDN
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "router":       ["react-router-dom"],
          "motion":       ["framer-motion"],
          "icons":        ["lucide-react"],
        },
      },
    },
  },

  server: {
    port: 5173,
    // Open browser automatically when running locally
    // open: true,
  },
});
