/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: home.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the application home page including
 * featured sections and navigation shortcuts.
 * ----------------------------------------------------------------
 */

import Header from "../components/header.component";
import Footer from "../components/footer.component";

import { CONFIG } from "../constants/config.constants";
import { ROUTES } from "../constants/routes.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the home page.
 *
 * @returns HTML string.
 */
export default function Home(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  return `
    <main class="home">

      ${Header()}

      <section class="hero">

        <h2>${t.heroTitle}</h2>

        <p>
          ${t.heroDescription}
        </p>

      </section>

      <section class="categories">

        <button
          class="menu-btn"
          data-page="${ROUTES.MOVIES}"
        >
          🎬 ${t.movies}
        </button>

        <button
          class="menu-btn"
          data-page="${ROUTES.SERIES}"
        >
          🎞 ${t.series}
        </button>

        <button
          class="menu-btn"
          data-page="${ROUTES.LIVETV}"
        >
          📺 ${t.liveTv}
        </button>

        <button
          class="menu-btn"
          data-page="${ROUTES.FAVORITES}"
        >
          ❤️ ${t.favorites}
        </button>

        <button
          class="menu-btn"
          data-page="${ROUTES.PROFILE}"
        >
          👤 ${t.profile}
        </button>

      </section>

      <section class="actions">

        <button
          id="loginBtn"
        >
          ${t.login}
        </button>

      </section>

      ${Footer()}

    </main>
  `;
}