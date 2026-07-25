// frontend/src/pages/Favorites.js

import Header from "../components/Header";
import Footer from "../components/Footer";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Favorites() {

  const language = getLanguage() || "es";
  const t = translations[language];

  const favorites = [];

  return `
    <main class="favorites-page">

      ${Header()}

      <section class="favorites-container">

        <h2 class="page-title">
          ❤️ ${t.favorites}
        </h2>

        ${
          favorites.length === 0
            ? `
              <div class="empty-state">

                <div class="empty-icon">
                  ❤️
                </div>

                <h3>
                  ${t.favorites}
                </h3>

                <p>
                  Aún no has agregado contenido a tus favoritos.
                </p>

              </div>
            `
            : `
              <div class="movie-grid">

                ${favorites
                  .map(
                    (item) => `
                      <div class="movie-card">

                        <div class="movie-poster">
                          🎬
                        </div>

                        <h3 class="movie-title">
                          ${item.title}
                        </h3>

                        <button
                          class="menu-btn"
                          data-page="player"
                        >
                          ▶ ${t.playNow}
                        </button>

                      </div>
                    `
                  )
                  .join("")}

              </div>
            `
        }

      </section>

      ${Footer()}

    </main>
  `;
}