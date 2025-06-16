// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Custom Astro integration to generate depth-aware relative asset paths
 * This ensures CSS and other assets work correctly when opening HTML files
 * directly in browsers (file:// protocol) without a server.
 */
function relativeAssetsIntegration() {
	return {
		name: 'relative-assets',
		hooks: {
			'astro:build:done': async (/** @type {any} */ { dir, pages }) => {
				const fs = await import('fs');
				const path = await import('path');
				
				// Process each HTML file to convert absolute asset paths to relative ones
				for (const page of pages) {
					const htmlFilePath = path.join(dir.pathname, page.pathname, 'index.html');
					
					try {
						if (fs.existsSync(htmlFilePath)) {
							let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
							
							// Calculate directory depth to determine correct relative path
							const pathSegments = page.pathname.split('/').filter((/** @type {string} */ segment) => segment !== '');
							const directoryDepth = pathSegments.length;
							const relativePathPrefix = directoryDepth > 0 ? '../'.repeat(directoryDepth) : './';
							
							// Replace absolute asset paths with depth-aware relative paths
							htmlContent = htmlContent
								.replace(
									/href="\/_astro\//g,
									`href="${relativePathPrefix}_astro/`
								)
								.replace(
									/src="\/_astro\//g,
									`src="${relativePathPrefix}_astro/`
								);
							
							fs.writeFileSync(htmlFilePath, htmlContent);
						}
					} catch (error) {
						console.warn(`Failed to process ${htmlFilePath}:`, error);
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
