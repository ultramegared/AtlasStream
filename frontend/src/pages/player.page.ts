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

import { loadPlayerContent } from "../controllers/player.controller";

import { CONFIG } from "../constants/config.constants";
import { ROUTES } from "../constants/routes.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the player page.
 *
 * @param id Content identifier.
 * @returns HTML string.
 */
export default async function Player(
  id: string
): Promise<string> {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  const content =
    await loadPlayerContent(id);

  if (!content) {
    return `
      <main class="player-page">

        ${Header(t.player)}

        <section class="player-container">

          <div class="empty-state">

            <h2>
              ${t.noContent}
            </h2>

          </div>

        </section>

        ${Footer()}

      </main>
    `;
  }

  return `
    <main class="player-page">

      ${Header(content.title)}

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
            playsinline
            width="100%"
            aria-label="${content.title}"
          >

            <source
              src="${content.videoUrl}"
              type="video/mp4"
            >

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

          <p>
            ⭐ ${content.rating.toFixed(1)}
          </p>

          <p>
            📅 ${content.year}
          </p>

          <p>
            ⏱️ ${content.duration} min
          </p>

        </div>

        <div class="player-actions">

          <button
            id="favoriteButton"
            class="menu-btn"
            data-id="${content.id}"
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