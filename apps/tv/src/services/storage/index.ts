/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: index.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Barrel file for storage services.
 * Exposes the storage service, storage keys and related types
 * through a single entry point.
 * ----------------------------------------------------------------
 */

export { default as storageService } from './StorageService';
export { default as StorageKeys } from './StorageKeys';

export type {
  StorageAdapter,
} from './StorageService';

export type {
  StorageKey,
} from './StorageKeys';