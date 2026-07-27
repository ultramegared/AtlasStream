/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: response.types.ts
 * Module: Types
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines common response types used
 * throughout the AtlasStream application.
 * ----------------------------------------------------------------
 */

import type { ApiResponse } from "./api.types";

/**
 * Represents an API error response.
 */
export interface ErrorResponse {
  /**
   * Indicates that the request failed.
   */
  success: false;

  /**
   * Error message.
   */
  message: string;

  /**
   * Optional error code.
   */
  code?: string;

  /**
   * Optional validation or field errors.
   */
  errors?: Record<string, string>;
}

/**
 * Represents a paginated API response.
 *
 * @template T Response payload type.
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  /**
   * Current page.
   */
  page: number;

  /**
   * Items per page.
   */
  limit: number;

  /**
   * Total number of items.
   */
  total: number;

  /**
   * Total number of pages.
   */
  totalPages: number;
}