/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: profile.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides profile-related services for retrieving and updating
 * the authenticated user's profile through the AtlasStream
 * backend API.
 * ----------------------------------------------------------------
 */

import { apiFetch } from "./apiFetch.service";

/**
 * Retrieves the authenticated user's profile.
 *
 * @returns User profile information.
 */
export async function getProfile<T = unknown>(): Promise<T> {
  return apiFetch<T>("/profile");
}

/**
 * Updates the authenticated user's profile.
 *
 * @param data Profile data to update.
 * @returns Updated profile information.
 */
export async function updateProfile<T = unknown>(
  data: unknown
): Promise<T> {
  return apiFetch<T>("/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}