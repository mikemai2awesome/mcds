// Base types for better type safety
export type ComponentId = string & { readonly __brand: unique symbol };
export type ComponentSize = "small" | "medium" | "large";
export type ComponentVariant = "primary" | "secondary" | "tertiary";

export interface AlertProps {
  readonly type?: "info" | "success" | "warning" | "error";
  readonly dismissible?: boolean;
  readonly id?: string;
}

export interface AccordionItem {
  readonly id?: string;
  readonly title?: string;
  readonly heading?: string;
  readonly content: string;
  readonly open?: boolean;
}

export interface AccordionProps {
  readonly items: readonly AccordionItem[];
  readonly allowMultiple?: boolean;
}

export interface ComboboxOption {
  readonly id: string;
  readonly label: string;
  readonly value?: string;
  readonly disabled?: boolean;
}

export interface ComboboxProps {
  readonly id?: string;
  readonly name?: string;
  readonly label: string;
  readonly options: readonly ComboboxOption[];
  readonly value?: string;
  readonly required?: boolean;
  readonly disabled?: boolean;
  readonly autocomplete?: boolean;
  readonly placeholder?: string;
}

export interface DialogProps {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly size?: ComponentSize;
}

export interface FeedItem {
  readonly url: string | null | undefined;
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly date: string;
  readonly author?: string;
  readonly image?: string;
  readonly imageAlt?: string;
}

export interface FeedProps {
  readonly items: readonly FeedItem[];
  readonly initialItems?: number;
  readonly title?: string;
  readonly loadMoreText?: string;
}

export interface PopupNavLink {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
  readonly current?: boolean;
  readonly external?: boolean;
}

export interface PopupNavGroup {
  readonly id?: string;
  readonly title?: string;
  readonly links: readonly PopupNavLink[];
}

export interface PopupNavProps {
  readonly label: string;
  readonly groups: readonly PopupNavGroup[];
  readonly position?: "left" | "right" | "center";
}

export interface SwitchProps {
  readonly label: string;
  readonly id: string;
  readonly name: string;
  readonly checked?: boolean;
  readonly disabled?: boolean;
  readonly size?: ComponentSize;
}

export interface TabsTab {
  readonly id: string;
  readonly label: string;
  readonly content: string;
  readonly default?: boolean;
  readonly disabled?: boolean;
}

export interface TabsProps {
  readonly tabs: readonly TabsTab[];
  readonly orientation?: "horizontal" | "vertical";
} 