/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: player.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the media player page for
 * streaming movies and TV series.
 * ----------------------------------------------------------------
 */

import Header from "../components/header.component";
import Footer from "../components/footer.component";

import { CONFIG } from "../constants/config.constants";
import { ROUTES } from "../constants/routes.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

interface PlayerContent {
  title: string;
  description: string;
  type: "movie" | "series" | "liveTv";
  source: string;
}

/**
 * Renders the player page.
 *
 * @returns HTML string.
 */
export default function Player(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  // Temporary.
  // Later this information will come
  // from the API.
  const content: PlayerContent = {
    title: "Avatar",
    description: t.playerDescription,
    type: "movie",
    source: ""
  };

  return `
    <main class="player-page">

      ${Header()}

      <section class="player-container">

        <h2 class="page-title">
          ▶ ${content.title}
        </h2>

        <div class="video-container">

          <video
            id="videoPlayer"
            class="video-player"
            controls
            preload="metadata"
            width="100%"
          >

            ${
              content.source
                ? `
                  <source
                    src="${content.source}"
                    type="video/mp4"
                  >
                `
                : ""
            }

            ${t.videoNotSupported}

          </video>

        </div>

        <div class="player-info">

          <h3>
            ${content.title}
          </h3>

          <p>
            ${content.description}
          </p>

        </div>

        <div class="player-actions">

          <button
            id="favoriteButton"
            class="menu-btn"
          >
            ❤️ ${t.favorites}
          </button>

          <button
            id="backButton"
            class="menu-btn"
            data-page="${ROUTES.HOME}"
          >
            ← ${t.backHome}
          </button>

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}