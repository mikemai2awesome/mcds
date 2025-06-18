# Contributing to MCDS

Thank you for your interest in contributing to MCDS! We welcome contributions from everyone, whether you're fixing bugs, adding features, improving documentation, or enhancing accessibility.

## 🎯 Our Mission

MCDS is committed to building accessible, semantic, and beautiful web components. Every contribution should align with our core principles:

- **Accessibility First** - WCAG 2.2 Level AA compliance
- **Semantic HTML** - Meaningful markup foundation
- **Progressive Enhancement** - Works without JavaScript, enhanced with it
- **Modern CSS** - Logical properties, cascade layers, relative units
- **Typography Excellence** - Inspired by Matthew Carter's typefaces

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- A modern text editor with ESLint support

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/yourusername/mcds.git
   cd mcds
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use our issue templates** for bugs and feature requests
3. **Provide clear reproduction steps** for bugs
4. **Include accessibility considerations** in feature requests

### Submitting Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit with descriptive messages**
   ```bash
   git commit -m "feat: add keyboard navigation to carousel component"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🎨 Code Standards

### HTML Guidelines

- **Use semantic HTML elements** (`<nav>`, `<main>`, `<section>`, etc.)
- **Include proper ARIA attributes** when semantic HTML isn't sufficient
- **Ensure keyboard navigation** for all interactive elements
- **Test with screen readers** (NVDA, JAWS, VoiceOver)
- **Validate HTML** using [W3C Validator](https://validator.w3.org/)

### CSS Guidelines

- **Use logical properties** (`inline-start` instead of `left`)
- **Organize with cascade layers** (`@layer config`, `@layer components`, etc.)
- **Use relative units** (`em`, `rem`, `ch`, `ex`, `vi`, `vb`)
- **Follow our CSS architecture**:
  ```css
  @layer config     /* CSS custom properties */
  @layer resets     /* CSS resets */
  @layer elements   /* Base element styling */
  @layer components /* Component styles */
  @layer utilities  /* Utility classes */
  ```
- **Include reduced motion support**:
  ```css
  @media (prefers-reduced-motion: no-preference) {
    /* Animations and transitions here */
  }
  ```

### JavaScript Guidelines

- **Use vanilla JavaScript** (no frameworks)
- **Progressive enhancement** - components work without JS
- **Use `defer` attribute** on script tags
- **Follow ESLint rules** configured in the project
- **Handle keyboard events** for accessibility
- **Manage focus properly** in interactive components

### TypeScript Guidelines

- **Define component schemas** in `src/schemas/component-schemas.ts`
- **Use proper type definitions** for all props
- **Include JSDoc comments** for complex types
- **Follow our schema structure**:
  ```typescript
  interface ComponentSchema {
    name: string;
    description: string;
    props: PropDefinition[];
    nestedInterfaces?: NestedInterfaceDefinition[];
  }
  ```

## ♿ Accessibility Requirements

All contributions must meet WCAG 2.2 Level AA standards:

### Required Testing

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Use arrow keys for composite widgets
   - Test Escape key functionality
   - Verify focus indicators are visible

2. **Screen Reader Testing**
   - Test with NVDA (Windows), JAWS (Windows), or VoiceOver (macOS)
   - Ensure all content is announced properly
   - Verify ARIA labels and descriptions
   - Test landmark navigation

3. **Color and Contrast**
   - Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - Ensure 4.5:1 contrast ratio for normal text
   - Ensure 3:1 contrast ratio for large text and UI elements
   - Don't rely solely on color to convey information

4. **Motion and Animation**
   - Respect `prefers-reduced-motion` setting
   - Provide alternatives to auto-playing content
   - Ensure animations don't trigger seizures

### ARIA Patterns

Follow W3C ARIA Authoring Practices Guide patterns:

- **[Alert](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)** for status messages
- **[Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)** for searchable selects
- **[Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)** for tabbed interfaces
- **[Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)** for modals

## 📦 Component Development

### Adding New Components

1. **Create the component file** in `src/components/`
2. **Define the component schema** in `src/schemas/component-schemas.ts`
3. **Create documentation page** in `src/pages/components/`
4. **Add usage examples** and accessibility notes
5. **Include keyboard interaction documentation**

### Component Structure

```astro
---
// Component props interface
interface Props {
  // Define props here
}

const { ...props } = Astro.props;
---

<!-- Semantic HTML structure -->
<div class="component-name" role="appropriate-role">
  <!-- Component content -->
</div>

<style>
@layer components {
  .component-name {
    /* Component styles using logical properties */
  }
}
</style>

<script defer>
// Progressive enhancement JavaScript
// Always check if elements exist before manipulating
</script>
```

### Documentation Requirements

Each component must include:

- **Description** of the component's purpose
- **Props table** (auto-generated from schema)
- **Usage examples** with code samples
- **Accessibility notes** including ARIA patterns
- **Keyboard navigation** documentation
- **Do's and Don'ts** for proper usage

## 🧪 Testing

### Manual Testing

1. **Functionality testing** - All features work as expected
2. **Accessibility testing** - Keyboard and screen reader testing
3. **Cross-browser testing** - Chrome, Firefox, Safari, Edge
4. **Responsive testing** - Various screen sizes
5. **Performance testing** - Check for performance regressions

### Automated Testing

```bash
# Lint JavaScript/TypeScript
npm run lint

# Check for linting errors (CI/CD)
npm run lint:check

# Format CSS
npm run format:css

# Build project
npm run build
```

## 📋 Pull Request Checklist

Before submitting a PR, ensure:

- [ ] **Code follows our style guidelines**
- [ ] **All tests pass** (`npm run lint`, `npm run build`)
- [ ] **Accessibility requirements met** (WCAG 2.2 Level AA)
- [ ] **Documentation updated** for new features
- [ ] **Component schema defined** (if adding new component)
- [ ] **Keyboard navigation tested**
- [ ] **Screen reader tested**
- [ ] **Cross-browser compatibility verified**
- [ ] **Performance impact considered**
- [ ] **Commit messages are descriptive**

## 🎨 Design Tokens

When working with design tokens:

- **Use CSS custom properties** defined in `@layer config`
- **Follow our naming conventions**:
  - `--gutter` for spacing
  - `--stack` for vertical rhythm
  - `--pt-*` for typography scale
  - `--font-*` for font families
- **Maintain consistency** with existing token usage
- **Consider responsive scaling** using `clamp()`

## 📞 Getting Help

- **💬 Discussions** - For questions and general discussion
- **🐛 Issues** - For bug reports and feature requests
- **📧 Email** - For sensitive security issues

## 🏆 Recognition

Contributors will be recognized in:

- **CHANGELOG.md** for significant contributions
- **README.md** acknowledgments section
- **GitHub contributors** page

## 📄 License

By contributing to MCDS, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make the web more accessible! 🌟 