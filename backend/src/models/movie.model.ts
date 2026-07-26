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
 * Modelo que representa una película.
 * ----------------------------------------------------------------
 */

export interface Movie {
  id?: string;
  title: string;
  description: string;
  poster: string;
  backdrop: string;
  trailer?: string;
  videoUrl: string;
  category: string;
  duration: number;
  year: number;
  rating: number;
  featured: boolean;
  premium: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}