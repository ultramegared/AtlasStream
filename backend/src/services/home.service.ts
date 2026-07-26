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
 * Servicio para la gestión del Home.
 * ----------------------------------------------------------------
 */

import { HomeResponse } from "../models/home.model";

import {
  getFeaturedMovies,
  getTrendingMovies,
  getLatestMovies,
} from "./movie.service";

import { getLatestSeries } from "./series.service";

/**
 * Obtiene el contenido principal del Home.
 */
export async function getHome(): Promise<HomeResponse> {

  const [
    hero,
    trending,
    movies,
    series,
  ] = await Promise.all([
    getFeaturedMovies(),
    getTrendingMovies(),
    getLatestMovies(),
    getLatestSeries(),
  ]);

  /**
   * Se implementará cuando exista el módulo Continue Watching.
   */
  const continueWatching: any[] = [];

  /**
   * Se implementará cuando exista el módulo Live TV.
   */
  const liveChannels: any[] = [];

  return {
    hero,
    trending,
    continueWatching,
    movies,
    series,
    liveChannels,
  };
}