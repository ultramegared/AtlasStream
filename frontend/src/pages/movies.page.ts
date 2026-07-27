/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: movies.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the movies page displaying the
 * available movie catalog.
 * ----------------------------------------------------------------
 */

import Footer from "../components/footer.component";
import Header from "../components/header.component";
import MovieCard from "../components/movieCard.component";

import { loadMovies } from "../controllers/movie.controller";

import { CONFIG } from "../constants/config.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the movies page.
 *
 * @returns HTML string.
 */
export default async function Movies(): Promise<string> {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  const movies = await loadMovies();

  return `
    <main class="movies-page">

      ${Header()}

      <section class="movies-container">

        <h2 class="page-title">
          🎬 ${t.movies}
        </h2>

        <div class="movie-grid">

          ${
            movies.length > 0
              ? movies.map(MovieCard).join("")
              : `
                <div class="empty-state">
                  <p>${t.noMovies ?? "No movies available."}</p>
                </div>
              `
          }

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}