/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: favorites.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the user's favorites page displaying
 * saved content or an empty state when no
 * favorites are available.
 * ----------------------------------------------------------------
 */

import Footer from "../components/footer.component";
import Header from "../components/header.component";

import { CONFIG } from "../constants/config.constants";
import { ROUTES } from "../constants/routes.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

interface FavoriteItem {
  title: string;
}

/**
 * Renders the favorites page.
 *
 * @returns HTML string.
 */
export default function Favorites(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  const favorites: FavoriteItem[] = [];

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
                          data-page="${ROUTES.PLAYER}"
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