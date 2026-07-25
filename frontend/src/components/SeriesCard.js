// AtlasStream
// Designed & Developed by ultramegared

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function SeriesCard(series) {

  const language = getLanguage() || "es";
  const t = translations[language];

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
          📺 ${series.seasons} ${t.seasons || "Seasons"}
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