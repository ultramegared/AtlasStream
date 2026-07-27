/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: movieCard.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders a reusable movie card displaying
 * movie information and available actions.
 * ----------------------------------------------------------------
 */

import type { Movie } from "../models/movie.model";

import { TRANSLATIONS } from "../constants/translations.constants";
import { getLanguage } from "../utils/storage.utils";

/**
 * Creates a movie card component.
 *
 * @param movie Movie data.
 * @returns HTML string.
 */
export default function MovieCard(
  movie: Movie
): string {
  const language = getLanguage() ?? "es";

  const t = TRANSLATIONS[language];

  return `
    <article
      class="movie-card"
      data-id="${movie.id}"
    >

      <div class="movie-poster">

        <button
          class="favorite-btn"
          data-id="${movie.id}"
          aria-label="Favorite"
        >
          🤍
        </button>

        ${
          movie.poster
            ? `
              <img
                src="${movie.poster}"
                alt="${movie.title}"
                class="movie-poster-image"
                loading="lazy"
              >
            `
            : `
              <div class="movie-poster-placeholder">
                🎬
              </div>
            `
        }

      </div>

      <div class="movie-info">

        <h3 class="movie-title">
          ${movie.title}
        </h3>

        <p class="movie-rating">
          ⭐ ${movie.rating.toFixed(1)}
        </p>

        <p class="movie-duration">
          ⏱️ ${movie.duration} min
        </p>

        <p class="movie-year">
          📅 ${movie.year}
        </p>

      </div>

      <button
        class="menu-btn"
        data-page="Player"
        data-id="${movie.id}"
      >
        ▶ ${t.playNow}
      </button>

    </article>
  `;
}