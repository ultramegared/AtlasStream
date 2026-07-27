/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: common.types.ts
 * Module: Types
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines common reusable types used
 * throughout the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Represents pagination parameters.
 */
export interface Pagination {
  /**
   * Current page number.
   */
  page: number;

  /**
   * Number of items per page.
   */
  limit: number;
}

/**
 * Represents a selectable option.
 */
export interface Option {
  /**
   * Option label.
   */
  label: string;

  /**
   * Option value.
   */
  value: string;
}

/**
 * Represents a nullable value.
 */
export type Nullable<T> = T | null;

/**
 * Represents an optional value.
 */
export type Optional<T> = T | undefined;

/**
 * Supported application languages.
 */
export type Language = "en" | "es";

/**
 * Common identifier type.
 */
export type Identifier = string;