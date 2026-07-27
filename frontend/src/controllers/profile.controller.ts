/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: profile.controller.ts
 * Module: Controllers
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Handles user profile operations by coordinating
 * frontend services and preparing data for the UI.
 * ----------------------------------------------------------------
 */

import {
  getProfile,
  updateProfile
} from "../services/profile.service";

/**
 * Loads the authenticated user's profile.
 *
 * @returns User profile.
 */
export async function loadProfile<T = unknown>(): Promise<T> {
  try {
    return await getProfile<T>();
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unable to load profile."
    );
  }
}

/**
 * Updates the authenticated user's profile.
 *
 * @param data Updated profile information.
 * @returns Updated profile.
 */
export async function saveProfile<T = unknown>(
  data: unknown
): Promise<T> {
  try {
    return await updateProfile<T>(data);
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unable to update profile."
    );
  }
}