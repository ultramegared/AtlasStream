/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: liveTv.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the live TV page displaying
 * available television channels.
 * ----------------------------------------------------------------
 */

import Header from "../components/header.component";
import Footer from "../components/footer.component";

import { CONFIG } from "../constants/config.constants";
import { ROUTES } from "../constants/routes.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the live TV page.
 *
 * @returns HTML string.
 */
export default function LiveTV(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  const channels: string[] = [
    "Noticias 24",
    "ESPN",
    "Discovery",
    "National Geographic",
    "Cartoon Network",
    "Canal Premium"
  ];

  return `
    <main class="livetv-page">

      ${Header()}

      <section class="livetv-container">

        <h2 class="page-title">
          📺 ${t.liveTv}
        </h2>

        <div class="movie-grid">

          ${channels
            .map(
              (channel) => `
                <div class="movie-card">

                  <div class="movie-poster">
                    📡
                  </div>

                  <h3 class="movie-title">
                    ${channel}
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

      </section>

      ${Footer()}

    </main>
  `;
}