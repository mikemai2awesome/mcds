// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Configure base path for subdirectory deployment (production only)
  base: import.meta.env.PROD ? "/mcds/" : "/",
  // Ensure trailing slash behavior for proper path concatenation
  trailingSlash: "always",
}); 