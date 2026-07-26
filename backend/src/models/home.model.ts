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
 * Modelos utilizados por el módulo Home.
 * ----------------------------------------------------------------
 */

import { Movie } from "./movie.model";
import { Series } from "./series.model";

export interface ContinueWatching {
  id: string;
  type: "movie" | "episode";
  title: string;
  poster_url: string;
  progress: number;
  duration: number;
}

export interface LiveChannel {
  id: string;
  name: string;
  logo: string;
  streamUrl: string;
  isLive: boolean;
}

export interface HomeResponse {
  hero: Movie[];
  trending: Movie[];
  continueWatching: ContinueWatching[];
  movies: Movie[];
  series: Series[];
  liveChannels: LiveChannel[];
}