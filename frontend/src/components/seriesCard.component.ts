/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: seriesCard.component.ts
 * Module: Components
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders a reusable series card displaying
 * series information and available actions.
 * ----------------------------------------------------------------
 */

import { CONFIG } from "../constants/config.constants";
import { TRANSLATIONS } from "../constants/translations.constants";
import { getLanguage } from "../utils/storage.utils";

interface Series {
  id: string;
  title: string;
  poster?: string | null;
  rating: string | number;
  genre: string;
  seasons: number;
  favorite?: boolean;
}

/**
 * Creates a series card component.
 *
 * @param series Series data.
 * @returns HTML string.
 */
export default function SeriesCard(
  series: Series
): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  return `
    <article class="movie-card">

      <div class="movie-poster">

        <button
          class="favorite-btn"
          data-id="${series.id}"
          aria-label="Favorite"
        >
          ${series.favorite ? "❤️" : "🤍"}
        </button>

        ${
          series.poster
            ? `
              <img
                src="${series.poster}"
                alt="${series.title}"
                class="movie-poster-image"
              >
            `
            : `
              <div class="movie-poster-placeholder">
                📺
              </div>
            `
        }

      </div>

      <div class="movie-info">

        <h3 class="movie-title">
          ${series.title}
        </h3>

        <p class="movie-rating">
          ⭐ ${series.rating}
        </p>

        <p class="movie-genre">
          🎭 ${series.genre}
        </p>

        <p class="movie-duration">
          📺 ${series.seasons} ${t.seasons}
        </p>

      </div>

      <button
        class="menu-btn"
        data-page="player"
        data-id="${series.id}"
      >
        ▶ ${t.playNow}
      </button>

    </article>
  `;
}