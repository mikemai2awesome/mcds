export interface AlertProps {
  type?: "info" | "success" | "warning" | "error";
  dismissible?: boolean;
  id?: string;
}

export interface AccordionItem {
  id?: string;
  title?: string;
  heading?: string;
  content: string;
  open?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export interface ComboboxOption {
  id: string;
  label: string;
}

export interface ComboboxProps {
  id?: string;
  name?: string;
  label: string;
  options: ComboboxOption[];
  value?: string;
  required?: boolean;
  disabled?: boolean;
  autocomplete?: boolean;
}

export interface DialogProps {
  id: string;
  title: string;
}

export interface FeedItem {
  url: string | null | undefined;
  id: string;
  title: string;
  content: string;
  date: string;
  author?: string;
  image?: string;
  imageAlt?: string;
}

export interface FeedProps {
  items: FeedItem[];
  initialItems?: number;
  title?: string;
}

export interface PopupNavLink {
  label: string;
  href: string;
  description?: string;
  current?: boolean;
}

export interface PopupNavGroup {
  id?: string;
  title?: string;
  links: PopupNavLink[];
}

export interface PopupNavProps {
  label: string;
  groups: PopupNavGroup[];
}

export interface SwitchProps {
  label: string;
  id: string;
  name: string;
  checked?: boolean;
}

export interface TabsTab {
  id: string;
  label:string;
  content: string;
  default?: boolean;
}

export interface TabsProps {
  tabs: TabsTab[];
} 