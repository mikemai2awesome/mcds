// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Configure base path for subdirectory deployment (production only)
  base: import.meta.env.PROD ? "/mcds/" : "/",
  // Ensure trailing slash behavior for proper path concatenation
  trailingSlash: "always",
  
  // Performance optimizations
  build: {
    // Enable CSS code splitting - each page gets only the CSS it needs
    inlineStylesheets: "never",
    // Compress assets
    assets: "_assets",
  },
  
  // Optimize output
  output: "static",
  
  // Vite configuration for additional optimizations
  vite: {
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Optimize chunk sizes
      rollupOptions: {
        output: {
          // Separate vendor chunks for better caching
          manualChunks: {
            // Split large components into separate chunks if they become modules
          },
          // Optimize asset file names for caching
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) {
              return "_assets/[name]-[hash][extname]";
            }
            const info = assetInfo.name.split(".");
            const ext = info[info.length - 1];
            if (/\.(css)$/.test(assetInfo.name)) {
              return `_assets/css/[name]-[hash].${ext}`;
            }
            return `_assets/[name]-[hash].${ext}`;
          },
        },
      },
      // Minimize CSS
      cssMinify: true,
      // Enable minification
      minify: "esbuild",
      // Target modern browsers for smaller bundles
      target: "es2020",
    },
    // Optimize CSS processing
    css: {
      // Enable CSS preprocessing optimizations
      transformer: "postcss",
    },
  },
});
