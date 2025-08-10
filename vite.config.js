import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: "./dist/stats.html",
      open: true, // Automatically open stats after build
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2015", // Ensure compatibility with older browsers
    minify: "esbuild", // Faster minification
    sourcemap: true, // Enable sourcemaps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          vendor: ["axios", "react-router-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Increase chunk size warning limit
  },
  define: {
    "process.env": {}, // Polyfill process.env if needed
  },
});
