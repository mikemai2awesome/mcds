import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";

export default defineConfig([
	// Base JavaScript configuration
	js.configs.recommended,
	
	// Apply to all JavaScript and TypeScript files
	{
		files: ["**/*.js", "**/*.mjs", "**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
			globals: {
				console: "readonly",
				process: "readonly",
				// Browser globals
				window: "readonly",
				document: "readonly",
				NodeListOf: "readonly",
				HTMLElement: "readonly",
				Element: "readonly",
				Event: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
		},
		rules: {
			// TypeScript specific rules
			"@typescript-eslint/no-unused-vars": ["error", { 
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			}],
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "warn",
			
			// General JavaScript/TypeScript rules
			"no-unused-vars": ["error", { 
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			}],
			"no-console": "warn",
			"no-debugger": "error",
			"prefer-const": "error",
			"no-var": "error",
			"eqeqeq": ["error", "always"],
			"curly": ["error", "all"],
			"brace-style": ["error", "1tbs"],
			"indent": ["error", 2],
			"quotes": ["error", "double"],
			"semi": ["error", "always"],
			"comma-dangle": ["error", "always-multiline"],
			"object-curly-spacing": ["error", "always"],
			"array-bracket-spacing": ["error", "never"],
		},
	},
	
	// Apply to Astro files
	...astro.configs.recommended,
	
	// Configuration files - more relaxed rules
	{
		files: ["*.config.js", "*.config.mjs", "*.config.ts", "check-css-format.js"],
		languageOptions: {
			globals: {
				process: "readonly",
				__dirname: "readonly",
				__filename: "readonly",
				module: "readonly",
				require: "readonly",
				exports: "readonly",
			},
		},
		rules: {
			"no-console": "off", // Allow console in config and utility files
			"indent": ["error", "tab"], // Use tabs for config files to match existing style
			"quotes": ["error", "double"],
		},
	},
	
	// Global ignores
	{
		ignores: [
			"dist/**",
			"node_modules/**",
			".astro/**",
			"public/**",
			"*.min.js",
			"coverage/**",
			".DS_Store",
		],
	},
]); 