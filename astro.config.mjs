// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// No integrations needed for our basic design system
	integrations: [],
	// Use external postcss.config.mjs file for PostCSS configuration
});
