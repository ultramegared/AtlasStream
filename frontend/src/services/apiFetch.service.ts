/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: apiFetch.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides the generic HTTP client used to communicate with the
 * AtlasStream backend API.
 * ----------------------------------------------------------------
 */

import { API_URL, getHeaders } from "./api.service";

/**
 * Executes an HTTP request against the AtlasStream API.
 *
 * @param endpoint API endpoint.
 * @param options Fetch request options.
 * @returns Parsed JSON response.
 */
export async function apiFetch<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Request failed.");
  }

  return data as T;
}