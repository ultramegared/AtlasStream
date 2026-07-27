/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: auth.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides authentication services for user registration and
 * login using the AtlasStream backend API.
 * ----------------------------------------------------------------
 */

import { apiFetch } from "./apiFetch.service";

/**
 * Registers a new user.
 *
 * @param data Registration data.
 * @returns API response.
 */
export async function register<T = unknown>(
  data: unknown
): Promise<T> {
  return apiFetch<T>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/**
 * Authenticates an existing user.
 *
 * @param data Login credentials.
 * @returns API response.
 */
export async function login<T = unknown>(
  data: unknown
): Promise<T> {
  return apiFetch<T>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}