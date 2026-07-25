// AtlasStream
// Designed & Developed by ultramegared

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function MovieCard(movie) {
  const language = getLanguage() || "es";
  const t = translations[language];

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