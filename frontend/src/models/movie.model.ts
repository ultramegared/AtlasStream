/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: movie.model.ts
 * Module: Models
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the Movie model used throughout
 * the AtlasStream application.
 * ----------------------------------------------------------------
 */

/**
 * Represents a movie.
 */
export interface Movie {
  /**
   * Unique movie identifier.
   */
  id: string;

  /**
   * Movie title.
   */
  title: string;

  /**
   * Movie synopsis.
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
   * Trailer URL.
   */
  trailer?: string;

  /**
   * Video stream URL.
   */
  videoUrl: string;

  /**
   * Category identifier.
   */
  categoryId: string;

  /**
   * Duration in minutes.
   */
  duration: number;

  /**
   * Release year.
   */
  year: number;

  /**
   * Average rating.
   */
  rating: number;

  /**
   * Indicates whether the movie is featured.
   */
  featured: boolean;

  /**
   * Indicates whether the movie requires a premium subscription.
   */
  premium: boolean;

  /**
   * Creation date.
   */
  createdAt?: string;
}