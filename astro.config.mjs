// @ts-check
import { defineConfig } from 'astro/config';

// Custom Astro integration to generate depth-aware relative asset paths
function relativeAssetsIntegration() {
	return {
		name: 'relative-assets',
		hooks: {
			'astro:build:done': async (/** @type {any} */ { dir, pages }) => {
				const fs = await import('fs');
				const path = await import('path');
				
				// Process each HTML file
				for (const page of pages) {
					const filePath = path.join(dir.pathname, page.pathname, 'index.html');
					
					try {
						if (fs.existsSync(filePath)) {
							let content = fs.readFileSync(filePath, 'utf-8');
							
							// Calculate the depth of the current file
							const depth = page.pathname.split('/').filter((/** @type {string} */ segment) => segment !== '').length;
							const relativePath = depth > 0 ? '../'.repeat(depth) : './';
							
							// Replace absolute asset paths with relative ones
							content = content.replace(
								/href="\/_astro\//g,
								`href="${relativePath}_astro/`
							).replace(
								/src="\/_astro\//g,
								`src="${relativePath}_astro/`
							);
							
							fs.writeFileSync(filePath, content);
						}
					} catch (error) {
						console.warn(`Failed to process ${filePath}:`, error);
					}
				}
			}
		}
	};
}

// https://astro.build/config
export default defineConfig({
	// Add our custom integration for relative asset paths
	integrations: [relativeAssetsIntegration()],
	// Use external postcss.config.mjs file for PostCSS configuration
});
