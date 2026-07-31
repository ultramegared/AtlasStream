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
 * Barrel file for the API services.
 * Exposes the API client and configuration through
 * a single entry point.
 * ----------------------------------------------------------------
 */

export { default as apiClient } from './ApiClient';
export { default as ApiConfig } from './ApiConfig';

export type {
  ApiConfiguration,
} from './ApiConfig';

export type {
  RequestOptions,
} from './ApiClient';