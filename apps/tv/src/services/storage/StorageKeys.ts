/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: StorageKeys.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Centralized storage keys used throughout the application.
 * Prevents duplicated string literals and ensures consistency
 * when reading and writing persistent data.
 * ----------------------------------------------------------------
 */

export const StorageKeys = Object.freeze({
  accessToken: '@AtlasStream/accessToken',
  refreshToken: '@AtlasStream/refreshToken',
  user: '@AtlasStream/user',
  language: '@AtlasStream/language',
  theme: '@AtlasStream/theme',
  settings: '@AtlasStream/settings',
} as const);

export type StorageKey =
  typeof StorageKeys[keyof typeof StorageKeys];

export default StorageKeys;