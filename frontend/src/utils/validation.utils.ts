/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: validation.utils.ts
 * Module: Utils
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides reusable validation utilities for form inputs
 * throughout the AtlasStream frontend.
 * ----------------------------------------------------------------
 */

/**
 * Determines whether a string is empty or contains only whitespace.
 *
 * @param value Value to validate.
 * @returns True if the value is empty.
 */
export function isEmpty(value: string): boolean {
  return !value || value.trim() === "";
}

/**
 * Validates whether a string is a valid email address.
 *
 * @param email Email address.
 * @returns True if the email is valid.
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

/**
 * Validates that a string meets the minimum length.
 *
 * @param value String to validate.
 * @param length Minimum required length.
 * @returns True if the string meets the minimum length.
 */
export function hasMinLength(
  value: string,
  length: number
): boolean {
  return value.length >= length;
}

/**
 * Determines whether two passwords match.
 *
 * @param password Password.
 * @param confirmPassword Confirmation password.
 * @returns True if both passwords are identical.
 */
export function passwordsMatch(
  password: string,
  confirmPassword: string
): boolean {
  return password === confirmPassword;
}