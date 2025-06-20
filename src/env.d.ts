/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Environment variables
interface ImportMetaEnv {
  // Add your environment variables here
  // readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Global type declarations
declare namespace App {
  // Define your app-specific types here
  interface Locals {
    // Add properties that should be available in Astro.locals
  }
}

// Window extensions for client-side globals
interface Window {
  // Add any global window properties here
} 