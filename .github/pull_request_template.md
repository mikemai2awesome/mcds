## 📋 Pull Request Description

### 🎯 What does this PR do?
Brief description of the changes in this pull request.

### 🔗 Related Issues
Fixes #(issue number)
Closes #(issue number)
Related to #(issue number)

## 🧪 Testing

### ✅ Manual Testing Completed
- [ ] **Functionality testing** - All features work as expected
- [ ] **Keyboard navigation** - Tab through all interactive elements
- [ ] **Screen reader testing** - Tested with [NVDA/JAWS/VoiceOver]
- [ ] **Cross-browser testing** - Chrome, Firefox, Safari, Edge
- [ ] **Responsive testing** - Various screen sizes
- [ ] **Dark/light theme testing** - Both themes work correctly

### ♿ Accessibility Testing
- [ ] **WCAG 2.2 Level AA conformance** verified
- [ ] **Focus indicators** are visible and appropriate
- [ ] **ARIA attributes** are correct and necessary
- [ ] **Semantic HTML** structure is maintained
- [ ] **Color contrast** meets 4.5:1 ratio (normal text) or 3:1 (large text/UI)
- [ ] **Reduced motion** preferences are respected

### 🔧 Automated Testing
- [ ] `npm run lint` passes
- [ ] `npm run lint:check` passes
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors

## 📝 Code Quality

### 📏 Code Standards
- [ ] **HTML**: Uses semantic elements with proper ARIA when needed
- [ ] **CSS**: Uses logical properties, cascade layers, and relative units
- [ ] **JavaScript**: Progressive enhancement with vanilla JS
- [ ] **TypeScript**: Proper type definitions and component schemas

### 📚 Documentation
- [ ] **Component schema** updated (if adding/modifying components)
- [ ] **Props documentation** is accurate
- [ ] **Usage examples** provided
- [ ] **Accessibility notes** included
- [ ] **Keyboard interactions** documented

## 🎨 Design System Compliance

- [ ] **Typography**: Follows Matthew Carter-inspired principles
- [ ] **Design tokens**: Uses existing CSS custom properties
- [ ] **Responsive design**: Works across all screen sizes
- [ ] **Theme support**: Compatible with dark/light themes
- [ ] **CSS architecture**: Follows layer organization (config, resets, elements, components, utilities)

## 📱 Browser Compatibility

Tested and working in:
- [ ] Chrome (latest)
- [ ] Firefox (latest) 
- [ ] Safari (latest)
- [ ] Edge (latest)

## 🔄 Type of Change

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI change
- [ ] ♿ Accessibility improvement
- [ ] 🔧 Refactoring (no functional changes)
- [ ] ⚡ Performance improvement

## 📸 Screenshots/Videos

If applicable, add screenshots or videos showing the changes:

### Before
[Screenshot/video of before state]

### After  
[Screenshot/video of after state]

## 📋 Checklist

### Required for all PRs
- [ ] **Self-review completed** - I have reviewed my own code
- [ ] **Code follows style guidelines** - Matches project conventions
- [ ] **Comments added** - Complex code sections are commented
- [ ] **No console statements** - Removed debug logs
- [ ] **Git history is clean** - Squashed commits if necessary

### For new components
- [ ] **Component schema defined** in `src/schemas/component-schemas.ts`
- [ ] **Documentation page created** in `src/pages/components/`
- [ ] **Usage examples provided** with accessibility notes
- [ ] **Props table auto-generated** from schema

### For bug fixes
- [ ] **Root cause identified** and documented
- [ ] **Edge cases considered** and tested
- [ ] **Regression testing completed**

## 💬 Additional Notes

Any additional information, concerns, or questions about this PR:

---

By submitting this pull request, I confirm that:
- [ ] I have read and agree to the [Contributing Guidelines](CONTRIBUTING.md)
- [ ] My code follows the accessibility standards outlined in the guidelines
- [ ] I have tested this change thoroughly
- [ ] I understand this contribution will be licensed under the MIT License 