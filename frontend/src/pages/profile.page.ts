/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: profile.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the user profile page displaying
 * account information and logout action.
 * ----------------------------------------------------------------
 */

import Button from "../components/button.component";
import Footer from "../components/footer.component";
import Header from "../components/header.component";

import { currentUser } from "../controllers/auth.controller";

import { CONFIG } from "../constants/config.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the profile page.
 *
 * @returns HTML string.
 */
export default function Profile(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  const user = currentUser();

  return `
    <main class="profile">

      ${Header()}

      <section class="profile-container">

        <h2 class="page-title">
          👤 ${t.profile}
        </h2>

        <div class="profile-card">

          <p>
            <strong>Username:</strong>
            ${user?.username ?? "No disponible"}
          </p>

          <p>
            <strong>Email:</strong>
            ${user?.email ?? "No disponible"}
          </p>

        </div>

        ${Button({
          id: "logoutButton",
          text: t.logout
        })}

      </section>

      ${Footer()}

    </main>
  `;
}