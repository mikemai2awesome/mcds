# Component Schema Documentation System

This project now uses a centralized schema-based approach for automatically generating component documentation, including props tables and nested interface definitions.

## Overview

Instead of manually defining props for each component documentation page, the system now:

1. **Centralized Schemas**: All component interfaces are defined in `src/schemas/component-schemas.ts`
2. **Auto-Generated Props Tables**: Props tables are automatically generated from these schemas
3. **Type Safety**: Full TypeScript support for component props and nested interfaces
4. **Consistency**: Ensures all documentation follows the same format and standards

## How It Works

### 1. Schema Definition

Each component has a schema defined in `src/schemas/component-schemas.ts`:

```typescript
export const componentSchemas: Record<string, ComponentSchema> = {
  Alert: {
    name: "Alert",
    description: "A component for displaying important information...",
    props: [
      {
        name: "type",
        type: '"info" | "success" | "warning" | "error"',
        default: '"info"',
        description: "The type of alert that determines its visual appearance",
        required: false,
      },
      // ... more props
    ],
  },
  // ... more components
};
```

### 2. Documentation Pages

Component documentation pages now only need to specify the component name:

```astro
---
import ComponentDoc from "../../components/ComponentDoc.astro";
---

<ComponentDoc
  componentName="Alert"
  usage={{
    dos: `<ul><li>Use for important messages</li></ul>`,
    donts: `<ul><li>Don't overuse alerts</li></ul>`,
  }}
  code={exampleCode}
>
  <!-- Component examples here -->
</ComponentDoc>
```

### 3. Automatic Generation

The `ComponentDoc` component automatically:
- Fetches the component schema by name
- Generates the props table with types, defaults, and descriptions
- Renders nested interface tables if they exist
- Provides consistent formatting and accessibility

## Benefits

### ✅ **Consistency**
- All component documentation follows the same format
- Props tables are standardized across all components
- Type information is consistently displayed

### ✅ **Maintainability**
- Single source of truth for component interfaces
- Easy to update props across all documentation
- Reduced duplication of prop definitions

### ✅ **Type Safety**
- Full TypeScript support for schemas
- Compile-time checking of component interfaces
- Auto-completion in IDEs

### ✅ **Reduced Errors**
- No more manual props table maintenance
- Automatic synchronization with actual component interfaces
- Consistent prop descriptions and types

## Schema Structure

### PropDefinition
```typescript
interface PropDefinition {
  name: string;           // Prop name
  type: string;           // TypeScript type as string
  default?: string;       // Default value (optional)
  description: string;    // Human-readable description
  required?: boolean;     // Whether prop is required
}
```

### NestedInterfaceDefinition
```typescript
interface NestedInterfaceDefinition {
  name: string;                    // Interface name (e.g., "FeedItem")
  props: PropDefinition[];         // Props for this interface
}
```

### ComponentSchema
```typescript
interface ComponentSchema {
  name: string;                               // Component name
  description: string;                        // Component description
  props: PropDefinition[];                    // Main component props
  nestedInterfaces?: NestedInterfaceDefinition[]; // Optional nested interfaces
}
```

## Adding New Components

To add documentation for a new component:

1. **Define the schema** in `src/schemas/component-schemas.ts`:
```typescript
MyNewComponent: {
  name: "MyNewComponent",
  description: "A new component that does amazing things",
  props: [
    {
      name: "title",
      type: "string", 
      description: "The title to display",
      required: true,
    },
    // ... more props
  ],
},
```

2. **Create the documentation page**:
```astro
---
import ComponentDoc from "../../components/ComponentDoc.astro";
import MyNewComponent from "../../components/MyNewComponent.astro";
---

<ComponentDoc
  componentName="MyNewComponent"
  usage={{
    dos: `<ul><li>Use when you need amazing things</li></ul>`,
    donts: `<ul><li>Don't use for boring things</li></ul>`,
  }}
>
  <MyNewComponent title="Example" />
</ComponentDoc>
```

## Migration from Manual Props

To migrate existing component documentation:

1. **Run the migration script**:
```bash
node update-component-docs.js
```

2. **Review the generated documentation** to ensure accuracy

3. **Update schemas as needed** if any props were missed or incorrectly defined

## Best Practices

### Schema Definitions
- Keep descriptions clear and concise
- Always specify whether props are required
- Include default values when applicable
- Use proper TypeScript types (e.g., `"string"`, `"boolean"`, `"number"`)
- For union types, use proper syntax (e.g., `'"info" | "success"'`)

### Nested Interfaces
- Use nested interfaces for complex prop types (arrays of objects, etc.)
- Name interfaces clearly (e.g., `FeedItem`, `TabData`)
- Document all properties within nested interfaces

### Documentation Pages
- Focus on usage patterns, accessibility, and examples
- Let the schema handle all prop documentation
- Keep examples realistic and helpful

## Examples

### Simple Component (Switch)
```typescript
Switch: {
  name: "Switch",
  description: "A toggle switch component for binary on/off states.",
  props: [
    {
      name: "label",
      type: "string",
      description: "Label text for the switch",
      required: true,
    },
    {
      name: "checked",
      type: "boolean",
      default: "false",
      description: "Whether the switch is checked by default",
      required: false,
    },
  ],
},
```

### Complex Component with Nested Interfaces (Feed)
```typescript
Feed: {
  name: "Feed",
  description: "A component for displaying a list of articles...",
  props: [
    {
      name: "items",
      type: "FeedItem[]",
      description: "Array of feed items to display",
      required: true,
    },
  ],
  nestedInterfaces: [
    {
      name: "FeedItem",
      props: [
        {
          name: "id",
          type: "string",
          description: "Unique identifier for the feed item",
          required: true,
        },
        {
          name: "title", 
          type: "string",
          description: "Title of the feed item",
          required: true,
        },
        // ... more props
      ],
    },
  ],
},
```

This system provides a robust, maintainable way to document components while ensuring consistency and reducing manual maintenance overhead. 