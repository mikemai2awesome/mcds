# MCDS: Minimal design system inspired by Matthew Carter fonts.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-FF5D01.svg)](https://astro.build/)

A minimal, accessible component library that prioritizes semantic HTML, accessibility, and elegant typography inspired by Matthew Carter's typefaces. Built as an extension of [MCSS](https://mikemai.net/mcss) with modern CSS techniques and progressive enhancement.

## ✨ Features

- **🎯 Accessibility First**: WCAG 2.2 Level AA conformant with comprehensive screen reader support
- **🎨 Typography-Focused**: Beautiful typography inspired by Matthew Carter's typefaces
- **📱 Modern CSS**: Logical properties, cascade layers, relative units, and progressive enhancement
- **🚀 Performance**: Lightweight with minimal JavaScript footprint
- **🔧 Developer Experience**: TypeScript support, comprehensive documentation, and automated testing
- **♿ Semantic HTML**: Built on semantic HTML foundation with progressive JavaScript enhancement

## 🏗️ Built With

- **[Astro](https://astro.build/)** - Static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[MCSS](https://mikemai.net/mcss)** - Foundational CSS framework
- **Vanilla JavaScript** - Progressive enhancement
- **Modern CSS** - Cascade layers, logical properties, relative units

## 📦 Components

- **Alert** - Status and feedback messages
- **Accordion** - Collapsible content sections with keyboard navigation
- **Combobox** - Searchable select inputs with autocomplete
- **Dialog** - Modal dialogs and popups
- **Feed** - Infinite scroll content feed
- **PopupNav** - Multi-level navigation with popup menus
- **Switch** - Toggle controls for binary states
- **Tabs** - Tabbed content interface

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mikemai2awesome/mcds.git
   cd mcds
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the component library

## 💻 Usage

### Basic Component Import

```astro
---
import Alert from "path/to/components/Alert.astro";
---

<Alert type="success"> Operation completed successfully! </Alert>
```

### Component with Props

```astro
---
import Accordion from "path/to/components/Accordion.astro";

const accordionItems = [
  {
    id: "section1",
    title: "Accessibility Features",
    content: "<p>This design system follows WCAG 2.2...</p>",
    open: true,
  },
];
---

<Accordion items={accordionItems} allowMultiple={false} />
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run lint:css` - Lint CSS files with Stylelint
- `npm run lint:css:fix` - Fix CSS linting issues automatically
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are properly formatted
- `npm run type-check` - Run TypeScript type checking
- `npm run type-check:watch` - Run TypeScript type checking in watch mode
- `npm run ci` - Run all checks (format, type-check, lint, build)

## 📚 Documentation

Each component includes comprehensive documentation with:

- **Props API** - All available properties and their types
- **Usage Examples** - Real-world implementation examples
- **Accessibility Notes** - WCAG conformance details
- **Keyboard Navigation** - Supported keyboard interactions

Visit the [component documentation](src/pages/components/) for detailed guides.

## 🎨 Design Philosophy

MCDS follows these core principles:

1. **Accessibility First** - Every component meets WCAG 2.2 Level AA standards
2. **Semantic Foundation** - Built on meaningful HTML elements
3. **Progressive Enhancement** - Works without JavaScript, enhanced with it
4. **Typography Excellence** - Inspired by Matthew Carter's timeless typefaces
5. **Minimal Footprint** - Lightweight and performant
6. **Modern CSS** - Leverages latest CSS features for maintainable code

## 🏗️ Architecture

### CSS Organization

The project uses CSS cascade layers for organized styling:

```css
@layer config     /* CSS custom properties and configuration */
@layer resets     /* CSS resets and normalization */
@layer elements   /* Base element styling */
@layer components /* Component-specific styles */
@layer utilities; /* Utility classes */
```

### Component Schema System

Components use a centralized schema system for consistent documentation:

- **Type Safety** - Full TypeScript support for all component props
- **Auto-Generated Docs** - Props tables generated from schemas
- **Consistency** - Standardized documentation format
- **Maintainability** - Single source of truth for component interfaces

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Matthew Carter](https://en.wikipedia.org/wiki/Matthew_Carter)** - Typography inspiration
- **[MCSS](https://mikemai.net/mcss)** - Foundational CSS framework
- **[Astro](https://astro.build/)** - Amazing static site generator
- **[W3C WAI](https://www.w3.org/WAI/)** - Accessibility guidelines and patterns

## 📞 Support

- 📖 [Documentation](src/pages/components/)
- 🐛 [Issue Tracker](https://github.com/mikemai2awesome/mcds/issues)
- 💬 [Discussions](https://github.com/mikemai2awesome/mcds/discussions)

---

<p align="center">
  Made with ❤️ for accessible web experiences
</p>
