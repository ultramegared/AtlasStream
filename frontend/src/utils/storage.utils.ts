/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: storage.utils.ts
 * Module: Utils
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides utility functions for managing application data
 * stored in the browser's local storage.
 * ----------------------------------------------------------------
 */

import { STORAGE } from "../constants/storage.constants";

/**
 * Saves the authentication token.
 *
 * @param token Authentication token.
 */
export function saveToken(token: string): void {
  localStorage.setItem(STORAGE.TOKEN, token);
}

/**
 * Retrieves the authentication token.
 *
 * @returns Authentication token or null.
 */
export function getToken(): string | null {
  return localStorage.getItem(STORAGE.TOKEN);
}

/**
 * Removes the authentication token.
 */
export function removeToken(): void {
  localStorage.removeItem(STORAGE.TOKEN);
}

/**
 * Saves the authenticated user.
 *
 * @param user User data.
 */
export function saveUser<T>(user: T): void {
  localStorage.setItem(STORAGE.USER, JSON.stringify(user));
}

/**
 * Retrieves the authenticated user.
 *
 * @returns User data or null.
 */
export function getUser<T>(): T | null {
  const user = localStorage.getItem(STORAGE.USER);

  return user ? (JSON.parse(user) as T) : null;
}

/**
 * Removes the authenticated user.
 */
export function removeUser(): void {
  localStorage.removeItem(STORAGE.USER);
}

/**
 * Saves the selected application language.
 *
 * @param language Language code.
 */
export function saveLanguage(language: string): void {
  localStorage.setItem(STORAGE.LANGUAGE, language);
}

/**
 * Retrieves the selected application language.
 *
 * @returns Language code or null.
 */
export function getLanguage(): string | null {
  return localStorage.getItem(STORAGE.LANGUAGE);
}

/**
 * Removes the selected application language.
 */
export function removeLanguage(): void {
  localStorage.removeItem(STORAGE.LANGUAGE);
}

/**
 * Clears the current user session.
 */
export function logout(): void {
  removeToken();
  removeUser();
}