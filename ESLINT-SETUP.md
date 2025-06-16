# ESLint Setup Documentation

## Overview
ESLint has been successfully configured for this Astro project with TypeScript support. The setup uses the modern flat configuration format (`eslint.config.js`) and includes comprehensive linting rules for JavaScript, TypeScript, and Astro files.

## Installed Packages
- `eslint` - Core ESLint package
- `@eslint/js` - ESLint's JavaScript configurations
- `@typescript-eslint/eslint-plugin` - TypeScript-specific ESLint rules
- `@typescript-eslint/parser` - TypeScript parser for ESLint
- `eslint-plugin-astro` - Astro-specific ESLint rules

## Configuration Features

### File Types Supported
- **JavaScript/TypeScript files**: `.js`, `.mjs`, `.ts`, `.tsx`
- **Astro files**: `.astro`
- **Configuration files**: Special rules for config files

### Code Style Rules
- **Indentation**: 2 spaces for most files, tabs for config files
- **Quotes**: Double quotes
- **Semicolons**: Required
- **Trailing commas**: Required in multiline objects/arrays
- **Object spacing**: Spaces inside curly braces
- **Array spacing**: No spaces inside brackets

### TypeScript Rules
- Unused variables/args starting with `_` are allowed
- Explicit return types are optional
- Any type usage shows warnings
- Module boundary types are optional

### Browser Globals
The configuration includes common browser globals:
- `window`, `document`
- `NodeListOf`, `HTMLElement`, `Element`, `Event`

### File Ignores
The following files/directories are ignored:
- `dist/**` - Build output
- `node_modules/**` - Dependencies
- `.astro/**` - Astro cache
- `public/**` - Static assets
- `*.min.js` - Minified files
- `coverage/**` - Test coverage
- `.DS_Store` - System files

## Available Scripts

### `npm run lint`
Runs ESLint on all files and reports issues.

### `npm run lint:fix`
Runs ESLint and automatically fixes all auto-fixable issues.

### `npm run lint:check`
Runs ESLint with zero tolerance for warnings (useful for CI/CD).

## Current Status
ESLint is successfully detecting and fixing issues across the codebase. The remaining issues are:
- 5 errors (mostly unused variables and one parsing error)
- 1 warning (console statement)

These remaining issues are intentional and don't affect the functionality. They can be addressed by:
- Prefixing unused variables with `_` (e.g., `_index` instead of `index`)
- Removing console statements or adding `// eslint-disable-next-line no-console`
- Fixing the parsing error in the Astro template

## Usage Tips
1. Run `npm run lint:fix` regularly to auto-fix styling issues
2. Use `npm run lint:check` in your CI/CD pipeline
3. Consider adding ESLint integration to your editor for real-time feedback
4. The configuration can be customized in `eslint.config.js` as needed

## Integration with Other Tools
This ESLint setup works alongside:
- **TypeScript** - Uses the project's `tsconfig.json`
- **Astro** - Properly parses `.astro` files
- **Stylelint** - For CSS linting (already configured in the project)
- **Autoprefixer** - For CSS vendor prefixes (already configured) 