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
  original_title?: string;

  slug: string;

  overview: string;
  tagline?: string;

  poster_url: string;
  backdrop_url: string;
  logo_url?: string;

  trailer_url?: string;

  first_air_date?: Date;
  last_air_date?: Date;

  imdb_rating?: number;
  atlas_rating?: number;

  maturity_rating?: string;

  popularity?: number;
  views?: number;

  featured: boolean;
  trending: boolean;
  recommended: boolean;
  premium: boolean;

  is_active: boolean;

  created_at?: Date;
  updated_at?: Date;
}