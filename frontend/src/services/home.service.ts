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
 * Provides all data required by the Home page
 * using the AtlasStream API.
 * ----------------------------------------------------------------
 */

import type { Movie } from "../models/movie.model";
import type { Series } from "../models/series.model";

import { getMovies } from "./movie.service";
import { getSeries } from "./series.service";

/**
 * Home service.
 */
export class HomeService {
  /**
   * Returns featured movies displayed
   * in the Hero carousel.
   */
  public async getHero(): Promise<Movie[]> {
    const movies = await this.getMovies();

    return movies
      .filter((movie) => movie.featured)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
  }

  /**
   * Returns trending movies.
   */
  public async getTrending(): Promise<Movie[]> {
    const movies = await this.getMovies();

    return [...movies]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 12);
  }

  /**
   * Returns popular movies.
   */
  public async getMovies(): Promise<Movie[]> {
    try {
      return await getMovies<Movie>();
    } catch (error) {
      console.error("[HomeService:getMovies]", error);

      return [];
    }
  }

  /**
   * Returns popular series.
   */
  public async getSeries(): Promise<Series[]> {
    try {
      return await getSeries<Series[]>();
    } catch (error) {
      console.error("[HomeService:getSeries]", error);

      return [];
    }
  }

  /**
   * Returns continue watching items.
   *
   * Placeholder until watch history exists.
   */
  public async getContinueWatching(): Promise<Movie[]> {
    return [];
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