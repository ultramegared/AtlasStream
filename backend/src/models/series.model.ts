/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Modelo que representa una serie.
 * ----------------------------------------------------------------
 */

export interface Series {
  id?: string;
  title: string;
  description: string;
  poster: string;
  backdrop: string;
  seasons: number;
  episodes: number;
  category: string;
  rating: number;
  premium: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}