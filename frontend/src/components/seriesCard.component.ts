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

import type { Series } from "../models/series.model";

import { CONFIG } from "../constants/config.constants";
import { ROUTES } from "../constants/routes.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

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
    <article
      class="series-card"
      data-id="${series.id}"
    >

      <div class="series-poster">

        <button
          class="favorite-btn"
          data-id="${series.id}"
          aria-label="Favorite"
        >
          🤍
        </button>

        ${
          series.poster
            ? `
              <img
                src="${series.poster}"
                alt="${series.title}"
                class="series-poster-image"
                loading="lazy"
              >
            `
            : `
              <div class="series-poster-placeholder">
                📺
              </div>
            `
        }

      </div>

      <div class="series-info">

        <h3 class="series-title">
          ${series.title}
        </h3>

        <p class="series-rating">
          ⭐ ${series.rating.toFixed(1)}
        </p>

        <p class="series-seasons">
          📺 ${series.seasons}
        </p>

        <p class="series-episodes">
          🎞 ${series.episodes}
        </p>

      </div>

      <button
        class="menu-btn"
        data-page="${ROUTES.PLAYER}"
        data-id="${series.id}"
      >
        ▶ ${t.playNow}
      </button>

    </article>
  `;
}