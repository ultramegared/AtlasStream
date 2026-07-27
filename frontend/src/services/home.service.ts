/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: home.service.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides all data required by the Home page.
 * Mock data is used during development and can
 * later be replaced by API requests.
 * ----------------------------------------------------------------
 */

import type { Movie } from "../models/movie.model";
import type { Series } from "../models/series.model";

/**
 * Home service.
 */
export class HomeService {
  /**
   * Featured movies displayed in the Hero carousel.
   */
  private readonly heroMovies: Movie[] = [];

  /**
   * Trending movies.
   */
  private readonly trendingMovies: Movie[] = [];

  /**
   * Popular movies.
   */
  private readonly popularMovies: Movie[] = [];

  /**
   * Popular TV series.
   */
  private readonly popularSeries: Series[] = [];

  /**
   * Continue watching list.
   */
  private readonly continueWatching: Movie[] = [];

  /**
   * Returns five random hero items.
   */
  public getHero(): Movie[] {
    return [...this.heroMovies]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
  }

  /**
   * Returns trending movies.
   */
  public getTrending(): Movie[] {
    return this.trendingMovies;
  }

  /**
   * Returns popular movies.
   */
  public getMovies(): Movie[] {
    return this.popularMovies;
  }

  /**
   * Returns popular series.
   */
  public getSeries(): Series[] {
    return this.popularSeries;
  }

  /**
   * Returns continue watching items.
   */
  public getContinueWatching(): Movie[] {
    return this.continueWatching;
  }

  /**
   * Returns live TV channels.
   * Temporary placeholder until Live TV model exists.
   */
  public getLiveChannels(): string[] {
    return [
      "Atlas Sports",
      "Atlas Movies",
      "Atlas Series",
      "Atlas Kids",
      "Atlas News"
    ];
  }
}

/**
 * Singleton instance.
 */
export const homeService = new HomeService();