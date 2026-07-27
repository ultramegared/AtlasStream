/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: auth.controller.ts
 * Module: Controllers
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Handles authentication operations by coordinating
 * frontend services and local storage utilities.
 * ----------------------------------------------------------------
 */

import { login, register } from "../services/auth.service";

import {
  saveToken,
  saveUser,
  logout,
  getToken,
  getUser
} from "../utils/storage.utils";

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

/**
 * Authenticates a user.
 *
 * @param credentials Login credentials.
 * @returns Authenticated user.
 */
export async function loginUser<T = unknown>(
  credentials: unknown
): Promise<T> {
  try {
    const response =
      await login<ApiResponse<{ token: string; user: T }>>(
        credentials
      );

    if (!response?.success) {
      throw new Error(
        response?.message ?? "Login failed."
      );
    }

    saveToken(response.data.token);
    saveUser(response.data.user);

    return response.data.user;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unexpected login error."
    );
  }
}

/**
 * Registers a new user.
 *
 * @param userData User registration data.
 * @returns Registration response.
 */
export async function registerUser<T = unknown>(
  userData: unknown
): Promise<T> {
  try {
    const response =
      await register<ApiResponse<T>>(userData);

    if (!response?.success) {
      throw new Error(
        response?.message ?? "Registration failed."
      );
    }

    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Unexpected registration error."
    );
  }
}

/**
 * Logs out the current user.
 */
export function logoutUser(): void {
  logout();
}

/**
 * Determines whether a user is authenticated.
 *
 * @returns True if a token exists.
 */
export function isAuthenticated(): boolean {
  return Boolean(getToken());
}

/**
 * Retrieves the currently stored user.
 *
 * @returns Stored user or null.
 */
export function currentUser<T = unknown>(): T | null {
  return getUser<T>();
}