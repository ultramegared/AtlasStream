/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: api.types.ts
 * Module: Types
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the API types used throughout
 * the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Represents a generic API response.
 *
 * @template T Response payload type.
 */
export interface ApiResponse<T> {
  /**
   * Indicates whether the request
   * completed successfully.
   */
  success: boolean;

  /**
   * Response message.
   */
  message: string;

  /**
   * Response payload.
   */
  data: T;

  /**
   * Optional HTTP status code.
   */
  status?: number;

  /**
   * Optional timestamp.
   */
  timestamp?: string;
}