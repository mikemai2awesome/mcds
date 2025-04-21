import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const INDENT_SIZE = 2;
const REQUIRE_FINAL_NEWLINE = true;
const FIX_ISSUES = true; // Set to true to automatically fix formatting issues

// Find all CSS files
const cssFiles = globSync('src/**/*.css', { cwd: __dirname, ignore: ['node_modules/**'] });

let hasErrors = false;

// Process each file
cssFiles.forEach((filePath) => {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Check for final newline
  let modified = false;
  if (REQUIRE_FINAL_NEWLINE && !content.endsWith('\n')) {
    console.error(`Error: Missing final newline in ${filePath}`);
    hasErrors = true;

    if (FIX_ISSUES) {
      // Fix: Add newline
      content += '\n';
      modified = true;
      console.log(`Fixed: Added final newline to ${filePath}`);
      fs.writeFileSync(fullPath, content);
    }
  }

  // Simple formatter to ensure consistent indentation
  if (FIX_ISSUES) {
    // Apply a very simple but reliable indentation fix
    const formattedContent = formatCSS(content);
    if (formattedContent !== content) {
      fs.writeFileSync(fullPath, formattedContent);
      console.log(`Formatted indentation in ${filePath}`);
      modified = true;
    }
  }

  if (modified) {
    hasErrors = true;
  }
});

function formatCSS(css) {
  // Normalize line endings
  css = css.replace(/\r\n/g, '\n');

  const lines = css.split('\n');
  const result = [];
  let indentLevel = 0;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    if (line === '') {
      // Preserve empty lines
      result.push('');
      continue;
    }

    // Adjust indent level based on braces
    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;

    // If the line starts with a closing brace, decrease indent before adding
    if (line.startsWith('}')) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    // Add the line with the current indent level
    result.push(' '.repeat(indentLevel * INDENT_SIZE) + line);

    // Adjust indent level for the next line
    indentLevel += openBraces;

    // If line has both opening and closing braces, adjust accordingly
    if (closeBraces > 0 && !line.startsWith('}')) {
      indentLevel = Math.max(0, indentLevel - closeBraces);
    }
  }

  return result.join('\n');
}

if (!hasErrors) {
  console.log('All CSS files are properly formatted!');
} else if (FIX_ISSUES) {
  console.log('Some CSS files had formatting issues and were fixed.');
} else {
  console.log('Some CSS files have formatting issues. Run with FIX_ISSUES=true to fix them.');
}
