/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: login.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the user login page including
 * authentication form and navigation actions.
 * ----------------------------------------------------------------
 */

import Button from "../components/button.component";
import Footer from "../components/footer.component";
import Header from "../components/header.component";
import Input from "../components/input.component";

import { CONFIG } from "../constants/config.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the login page.
 *
 * @returns HTML string.
 */
export default function Login(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  return `
    <section class="login-page">

      ${Header()}

      ${Button({
        id: "backHome",
        text: t.backHome
      })}

      <h2 class="page-title">
        ${t.login}
      </h2>

      <p class="page-subtitle">
        ${t.heroDescription}
      </p>

      ${Input({
        id: "email",
        type: "email",
        placeholder: t.email
      })}

      ${Input({
        id: "password",
        type: "password",
        placeholder: t.password
      })}

      ${Button({
        id: "loginButton",
        text: t.login
      })}

      <div id="loginMessage"></div>

      <hr>

      <p>
        ${t.noAccount}
      </p>

      ${Button({
        id: "registerButton",
        text: t.createAccount
      })}

      ${Footer()}

    </section>
  `;
}