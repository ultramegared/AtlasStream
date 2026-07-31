/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: ApiConfig.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Centralized configuration for AtlasStream API requests.
 * Defines the base URL, request timeout and default headers
 * used by the HTTP client.
 * ----------------------------------------------------------------
 */

export interface ApiConfiguration {
  baseURL: string;
  timeout: number;
  headers: Readonly<Record<string, string>>;
}

export const ApiConfig: Readonly<ApiConfiguration> = {
  baseURL: 'https://api.atlasstream.com',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default ApiConfig;