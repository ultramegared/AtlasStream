/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: content.context.ts
 * Module: Context
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Defines the content context used
 * throughout the AtlasStream application.
 * ----------------------------------------------------------------
 */

import type { Movie } from "../models/movie.model";
import type { Series } from "../models/series.model";

/**
 * Represents the available application content.
 */
export interface ContentContext {
  /**
   * Available movies.
   */
  movies: Movie[];

  /**
   * Available TV series.
   */
  series: Series[];

  /**
   * Available live TV channels.
   *
   * TODO:
   * Replace `string` with a dedicated
   * LiveTV model when implemented.
   */
  liveTV: string[];
}

/**
 * Default content context.
 */
const contentContext: ContentContext = {
  movies: [],
  series: [],
  liveTV: []
};

export default contentContext;