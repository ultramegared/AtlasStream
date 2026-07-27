/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: settings.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the application settings page
 * including language, theme and notification
 * preferences.
 * ----------------------------------------------------------------
 */

import Header from "../components/header.component";
import Footer from "../components/footer.component";

import { CONFIG } from "../constants/config.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the settings page.
 *
 * @returns HTML string.
 */
export default function Settings(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  return `
    <main class="settings-page">

      ${Header()}

      <section class="settings-container">

        <h2 class="page-title">
          ⚙️ ${t.settings}
        </h2>

        <div class="settings-card">

          <div class="setting-item">

            <h3>
              🌐 ${t.language}
            </h3>

            <p>
              ${language === "es"
                ? "Selecciona el idioma desde el menú superior."
                : "Select the language from the top menu."}
            </p>

          </div>

          <div class="setting-item">

            <h3>
              🎨 ${t.theme}
            </h3>

            <p>
              ${t.availableSoon}
            </p>

          </div>

          <div class="setting-item">

            <h3>
              🔔 ${t.notifications}
            </h3>

            <p>
              ${t.availableSoon}
            </p>

          </div>

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}