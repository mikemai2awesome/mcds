# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial public release preparation
- Comprehensive README with installation and usage instructions
- Contributing guidelines with accessibility requirements
- Component schema system for consistent documentation

## [0.0.1] - 2025-01-XX

### Added
- **Core Components**
  - Alert component with multiple types (info, success, warning, error)
  - Accordion component with keyboard navigation and ARIA support
  - Combobox component with autocomplete and search functionality
  - Dialog component using native HTML dialog element
  - Feed component with infinite scroll capability
  - PopupNav component for multi-level navigation
  - Switch component for toggle controls
  - Tabs component with manual activation

- **Design System Foundation**
  - MCSS-based typography system inspired by Matthew Carter fonts
  - CSS cascade layers for organized styling (@layer config, resets, elements, components, utilities)
  - Responsive design tokens using clamp() for fluid scaling
  - Dark/light theme support with system preference detection

- **Accessibility Features**
  - WCAG 2.2 Level AA compliance across all components
  - Comprehensive keyboard navigation support
  - Screen reader compatibility with proper ARIA attributes
  - Focus management and visible focus indicators
  - Reduced motion support for animations

- **Developer Experience**
  - TypeScript support with comprehensive type definitions
  - ESLint configuration with accessibility-focused rules
  - Automated CSS formatting and linting
  - Component schema system for auto-generated documentation
  - Progressive enhancement with vanilla JavaScript

- **Documentation**
  - Interactive component showcase with live examples
  - Comprehensive props documentation auto-generated from schemas
  - Accessibility testing guidelines
  - Usage examples and best practices
  - Keyboard interaction documentation

### Technical Specifications
- **Framework**: Astro 5.1.5 for static site generation
- **Languages**: TypeScript, modern CSS, vanilla JavaScript
- **Styling**: CSS cascade layers, logical properties, relative units
- **Accessibility**: WCAG 2.2 Level AA, semantic HTML foundation
- **Browser Support**: Modern browsers with progressive enhancement
- **Node.js**: Requires Node.js 18+

### Architecture
- **CSS Organization**: Layered architecture with config, resets, elements, components, and utilities
- **JavaScript**: Progressive enhancement with defer attribute, no framework dependencies
- **Typography**: Fluid type scale with Matthew Carter-inspired font selections
- **Component System**: Schema-driven documentation with TypeScript support

[Unreleased]: https://github.com/yourusername/mcds/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/yourusername/mcds/releases/tag/v0.0.1 