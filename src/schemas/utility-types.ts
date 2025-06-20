/**
 * Modern TypeScript utility types for better type safety and developer experience
 */

// Branded types for better type safety
export type Brand<T, K> = T & { readonly __brand: K };

// Strict object types
export type StrictRecord<K extends string | number | symbol, V> = Record<K, V>;

// Non-empty array type
export type NonEmptyArray<T> = [T, ...T[]];

// Optional properties with specific keys
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Required properties with specific keys
export type RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// Deep readonly for nested objects
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Extract function parameters
export type Parameters<T extends (..._args: any[]) => any> = T extends (..._args: infer P) => any ? P : never;

// Extract function return type
export type ReturnType<T extends (..._args: any[]) => any> = T extends (..._args: any[]) => infer R ? R : any;

// Conditional types for better type inference
export type If<C extends boolean, T, F> = C extends true ? T : F;

// Union to intersection type
export type UnionToIntersection<U> = (U extends any ? (_x: U) => void : never) extends (_x: infer I) => void ? I : never;

// Pretty print type for better IDE experience
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// Component props with HTML attributes
export type ComponentProps<T> = T & {
  readonly className?: string;
  readonly "data-testid"?: string;
};

// Event handler types
export type EventHandler<T = Event> = (_event: T) => void | Promise<void>;

// Async function type
export type AsyncFunction<T extends any[] = any[], R = any> = (..._args: T) => Promise<R>;

// Environment configuration
export type Environment = "development" | "production" | "test";

// API response wrapper
export type ApiResponse<T> = {
  readonly data: T;
  readonly success: true;
  readonly message?: string;
} | {
  readonly data: null;
  readonly success: false;
  readonly error: string;
  readonly message: string;
};

// Component state
export type ComponentState = "idle" | "loading" | "success" | "error";

// Theme configuration
export type ThemeMode = "light" | "dark" | "auto";

// Responsive breakpoints
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Form field types
export type FieldType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";

// Validation result
export type ValidationResult = {
  readonly valid: boolean;
  readonly errors: readonly string[];
};

// Configuration with defaults
export type WithDefaults<T, D> = T & {
  readonly [K in keyof D]: K extends keyof T ? T[K] : D[K];
}; 