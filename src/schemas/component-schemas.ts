export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

export interface NestedInterfaceDefinition {
  name: string;
  props: PropDefinition[];
}

export interface ComponentSchema {
  name: string;
  description: string;
  props: PropDefinition[];
  nestedInterfaces?: NestedInterfaceDefinition[];
}

export const componentSchemas: Record<string, ComponentSchema> = {
  Alert: {
    name: "Alert",
    description: "A component for displaying important information to users with optional dismissible functionality.",
    props: [
      {
        name: "type",
        type: "\"info\" | \"success\" | \"warning\" | \"error\"",
        default: "\"info\"",
        description: "The type of alert that determines its visual appearance and emoji",
        required: false,
      },
      {
        name: "dismissible",
        type: "boolean",
        default: "false",
        description: "Whether the alert can be dismissed by the user",
        required: false,
      },
      {
        name: "id",
        type: "string",
        description: "Unique identifier for the alert. If not provided, a random ID will be generated",
        required: false,
      },
    ],
  },
  
  Feed: {
    name: "Feed",
    description: "A component for displaying a list of articles or updates in a feed format with infinite scroll capability.",
    props: [
      {
        name: "items",
        type: "FeedItem[]",
        description: "Array of feed items to display",
        required: true,
      },
      {
        name: "initialItems",
        type: "number",
        default: "3",
        description: "Number of items to display initially before loading more",
        required: false,
      },
      {
        name: "title",
        type: "string",
        default: "\"Updates Feed\"",
        description: "Title for the feed, used as aria-label",
        required: false,
      },
    ],
    nestedInterfaces: [
      {
        name: "FeedItem",
        props: [
          {
            name: "url",
            type: "string | URL | null | undefined",
            description: "URL for the feed item link",
            required: false,
          },
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
          {
            name: "content",
            type: "string",
            description: "HTML content of the feed item",
            required: true,
          },
          {
            name: "date",
            type: "string",
            description: "Date of the feed item",
            required: true,
          },
          {
            name: "author",
            type: "string",
            description: "Author of the feed item",
            required: false,
          },
          {
            name: "image",
            type: "string",
            description: "URL of the feed item image",
            required: false,
          },
          {
            name: "imageAlt",
            type: "string",
            description: "Alt text for the feed item image",
            required: false,
          },
        ],
      },
    ],
  },

  Accordion: {
    name: "Accordion",
    description: "A component for creating collapsible sections with titles and content.",
    props: [
      {
        name: "items",
        type: "AccordionItem[]",
        description: "Array of accordion items to display",
        required: true,
      },
      {
        name: "allowMultiple",
        type: "boolean",
        default: "false",
        description: "Whether multiple accordion items can be open at the same time",
        required: false,
      },
    ],
    nestedInterfaces: [
      {
        name: "AccordionItem",
        props: [
          {
            name: "id",
            type: "string",
            description: "Unique identifier for the accordion item. If not provided, will be auto-generated",
            required: false,
          },
          {
            name: "title",
            type: "string",
            description: "Title text for the accordion item (preferred over heading)",
            required: false,
          },
          {
            name: "heading",
            type: "string",
            description: "Heading text for the accordion item (deprecated, use title instead)",
            required: false,
          },
          {
            name: "content",
            type: "string",
            description: "HTML content of the accordion item",
            required: true,
          },
          {
            name: "open",
            type: "boolean",
            description: "Whether the accordion item should be open by default",
            required: false,
          },
        ],
      },
    ],
  },

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
        name: "id",
        type: "string",
        description: "Unique identifier for the switch input",
        required: true,
      },
      {
        name: "name",
        type: "string",
        description: "Name attribute for the switch input",
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

  PopupNav: {
    name: "PopupNav",
    description: "A navigation component that displays a popup menu with grouped links.",
    props: [
      {
        name: "label",
        type: "string",
        description: "Label for the popup navigation trigger button",
        required: true,
      },
      {
        name: "groups",
        type: "Group[]",
        description: "Array of link groups to display in the popup",
        required: true,
      },
    ],
    nestedInterfaces: [
      {
        name: "Group",
        props: [
          {
            name: "id",
            type: "string",
            description: "Unique identifier for the group. Auto-generated if title is provided",
            required: false,
          },
          {
            name: "title",
            type: "string",
            description: "Optional title for the group of links",
            required: false,
          },
          {
            name: "links",
            type: "Link[]",
            description: "Array of links in this group",
            required: true,
          },
        ],
      },
      {
        name: "Link",
        props: [
          {
            name: "label",
            type: "string",
            description: "Text label for the link",
            required: true,
          },
          {
            name: "href",
            type: "string",
            description: "URL for the link",
            required: true,
          },
          {
            name: "description",
            type: "string",
            description: "Optional description text for the link",
            required: false,
          },
          {
            name: "current",
            type: "boolean",
            description: "Whether this link represents the current page",
            required: false,
          },
        ],
      },
    ],
  },

  Tabs: {
    name: "Tabs",
    description: "A tabbed interface component for organizing content into multiple panels.",
    props: [
      {
        name: "tabs",
        type: "Tab[]",
        description: "Array of tabs to display",
        required: true,
      },
    ],
    nestedInterfaces: [
      {
        name: "Tab",
        props: [
          {
            name: "id",
            type: "string",
            description: "Unique identifier for the tab",
            required: true,
          },
          {
            name: "label",
            type: "string",
            description: "Label text displayed on the tab",
            required: true,
          },
          {
            name: "content",
            type: "string",
            description: "HTML content for the tab panel",
            required: true,
          },
          {
            name: "default",
            type: "boolean",
            description: "Whether this tab should be the default active tab. If no tab is marked as default, the first tab will be selected",
            required: false,
          },
        ],
      },
    ],
  },

  Dialog: {
    name: "Dialog",
    description: "A modal dialog component for displaying content that requires user attention.",
    props: [
      {
        name: "id",
        type: "string",
        description: "Unique identifier for the dialog",
        required: true,
      },
      {
        name: "title",
        type: "string",
        description: "Title text displayed in the dialog header",
        required: true,
      },
    ],
  },

  Combobox: {
    name: "Combobox",
    description: "A combobox component that combines a text input with a dropdown list of options.",
    props: [
      {
        name: "id",
        type: "string",
        description: "Unique identifier for the combobox. Auto-generated if not provided",
        required: false,
      },
      {
        name: "name",
        type: "string",
        description: "Name attribute for the input. Defaults to id if not provided",
        required: false,
      },
      {
        name: "label",
        type: "string",
        description: "Label text for the combobox",
        required: true,
      },
      {
        name: "options",
        type: "Option[]",
        description: "Array of options available for selection",
        required: true,
      },
      {
        name: "value",
        type: "string",
        default: "\"\"",
        description: "Initial value for the combobox input",
        required: false,
      },
      {
        name: "required",
        type: "boolean",
        default: "false",
        description: "Whether the combobox is required",
        required: false,
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Whether the combobox is disabled",
        required: false,
      },
      {
        name: "autocomplete",
        type: "boolean",
        default: "false",
        description: "Whether to enable autocomplete functionality",
        required: false,
      },
    ],
    nestedInterfaces: [
      {
        name: "Option",
        props: [
          {
            name: "id",
            type: "string",
            description: "Unique identifier for the option",
            required: true,
          },
          {
            name: "label",
            type: "string",
            description: "Display text for the option",
            required: true,
          },
        ],
      },
    ],
  },
}; 