/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: config.constants.ts
 * Module: Constants
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the global application configuration used throughout
 * the AtlasStream frontend.
 * ----------------------------------------------------------------
 */

export const CONFIG = {
  // Application Information
  APP_NAME: "AtlasStream",
  APP_ID: "atlasstream",

  // API
  API_URL: "https://api.magictouchdesigns.com/api",

  // Version
  VERSION: "1.0.0",

  // Premium Subscription
  PREMIUM_PRICE: 1.5,

  // Default Language
  DEFAULT_LANGUAGE: "es",

  // Supported Languages
  SUPPORTED_LANGUAGES: [
    {
      code: "es",
      name: "Español",
    },
    {
      code: "en",
      name: "English",
    },
  ],

  // Company / Developer
  COMPANY: "ultramegared",

  DESIGNER: "Designed & Developed by ultramegared",

  // Copyright
  COPYRIGHT: "© 2026 AtlasStream",
} as const;