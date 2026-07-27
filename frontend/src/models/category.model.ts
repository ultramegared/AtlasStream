/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: category.model.ts
 * Module: Models
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   * Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the Category model used throughout
 * the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Represents a movie or series category.
 */
export interface Category {
  /**
   * Unique category identifier.
   */
  id: string;

  /**
   * Category name.
   */
  name: string;

  /**
   * Category image URL.
   */
  image?: string;

  /**
   * Optional category description.
   */
  description?: string;

  /**
   * Indicates whether the category
   * is currently active.
   */
  active?: boolean;

  /**
   * Creation date.
   */
  createdAt?: string;

  /**
   * Last update date.
   */
  updatedAt?: string;
}