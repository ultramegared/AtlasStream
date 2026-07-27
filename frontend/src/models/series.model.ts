/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: series.model.ts
 * Module: Models
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the Series model used throughout
 * the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Represents a TV series.
 */
export interface Series {
  /**
   * Unique series identifier.
   */
  id: string;

  /**
   * Series title.
   */
  title: string;

  /**
   * Series synopsis.
   */
  description: string;

  /**
   * Poster image URL.
   */
  poster: string;

  /**
   * Backdrop image URL.
   */
  backdrop: string;

  /**
   * Total number of seasons.
   */
  seasons: number;

  /**
   * Total number of episodes.
   */
  episodes: number;

  /**
   * Category identifier.
   */
  categoryId: string;

  /**
   * Average rating.
   */
  rating: number;

  /**
   * Indicates whether the series requires
   * a premium subscription.
   */
  premium: boolean;

  /**
   * Creation date.
   */
  createdAt?: string;
}