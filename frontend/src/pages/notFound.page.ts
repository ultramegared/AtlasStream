/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: notFound.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the 404 page displayed when
 * a requested route cannot be found.
 * ----------------------------------------------------------------
 */

import Header from "../components/header.component";
import Footer from "../components/footer.component";

import { CONFIG } from "../constants/config.constants";
import { ROUTES } from "../constants/routes.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the 404 page.
 *
 * @returns HTML string.
 */
export default function NotFound(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  return `
    <main class="notfound-page">

      ${Header()}

      <section class="notfound-container">

        <div class="empty-state">

          <div class="empty-icon">
            🚫
          </div>

          <h1 class="error-code">
            404
          </h1>

          <h2 class="page-title">
            ${t.pageNotFound}
          </h2>

          <p class="page-description">
            ${t.pageNotFoundDescription}
          </p>

          <div class="notfound-actions">

            <button
              class="menu-btn"
              data-page="${ROUTES.HOME}"
            >
              🏠 ${t.backHome}
            </button>

          </div>

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}