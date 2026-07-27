/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: api.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides the base API configuration and default HTTP headers
 * used throughout the AtlasStream frontend.
 * ----------------------------------------------------------------
 */

import { CONFIG } from "../constants/config.constants";
import { getToken } from "../utils/storage.utils";

/**
 * Base URL for all API requests.
 */
export const API_URL = CONFIG.API_URL;

/**
 * Returns the default HTTP headers used by the API client.
 *
 * @returns Default request headers.
 */
export function getHeaders(): HeadersInit {
  const token = getToken();

  return {
    "Content-Type": "application/json",
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
  };
}