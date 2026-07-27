/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: home.controller.ts
 * Module: Controllers
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Controls the data flow between the Home page
 * and the Home service.
 * ----------------------------------------------------------------
 */

import { homeService } from "../services/home.service";
import type { Movie } from "../models/movie.model";
import type { Series } from "../models/series.model";

/**
 * Represents all content displayed on the Home page.
 */
export interface HomeData {
  /**
   * Hero carousel items.
   */
  hero: Movie[];

  /**
   * Trending movies.
   */
  trending: Movie[];

  /**
   * Popular movies.
   */
  movies: Movie[];

  /**
   * Popular TV series.
   */
  series: Series[];

  /**
   * Continue watching content.
   */
  continueWatching: Movie[];

  /**
   * Live TV channels.
   */
  liveChannels: string[];
}

/**
 * Home controller.
 */
export class HomeController {
  /**
   * Returns all data required by the Home page.
   */
  public getHomeData(): HomeData {
    return {
      hero: homeService.getHero(),
      trending: homeService.getTrending(),
      movies: homeService.getMovies(),
      series: homeService.getSeries(),
      continueWatching: homeService.getContinueWatching(),
      liveChannels: homeService.getLiveChannels()
    };
  }
}

/**
 * Singleton instance.
 */
export const homeController = new HomeController();