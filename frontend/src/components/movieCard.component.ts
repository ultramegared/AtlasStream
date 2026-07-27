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

import { TRANSLATIONS } from "../constants/translations.constants";
import { getLanguage } from "../utils/storage.utils";

interface Movie {
  id: string;
  title: string;
  poster?: string | null;
  rating: string | number;
  genre: string;
  duration: string;
  favorite?: boolean;
}

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
    <article class="movie-card">

      <div class="movie-poster">

        <button
          class="favorite-btn"
          data-id="${movie.id}"
          aria-label="Favorite"
        >
          ${movie.favorite ? "❤️" : "🤍"}
        </button>

        ${
          movie.poster
            ? `<img
                src="${movie.poster}"
                alt="${movie.title}"
                class="movie-poster-image"
              >`
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
          ⭐ ${movie.rating}
        </p>

        <p class="movie-genre">
          🎭 ${movie.genre}
        </p>

        <p class="movie-duration">
          ⏱️ ${movie.duration}
        </p>

      </div>

      <button
        class="menu-btn"
        data-page="player"
        data-id="${movie.id}"
      >
        ▶ ${t.playNow}
      </button>

    </article>
  `;
}