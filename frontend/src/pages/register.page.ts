/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: register.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the user registration page including
 * account creation form and navigation actions.
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
 * Renders the registration page.
 *
 * @returns HTML string.
 */
export default function Register(): string {
  const language =
    getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  return `
    <section class="register-page">

      ${Header()}

      ${Button({
        id: "backToLogin",
        text: `← ${t.login}`
      })}

      <h2 class="page-title">
        ${t.createAccount}
      </h2>

      <p class="page-subtitle">
        ${t.heroDescription}
      </p>

      ${Input({
        id: "username",
        placeholder: "Username"
      })}

      ${Input({
        id: "firstName",
        placeholder: "First Name"
      })}

      ${Input({
        id: "lastName",
        placeholder: "Last Name"
      })}

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
        id: "createAccountButton",
        text: t.createAccount
      })}

      <div id="registerMessage"></div>

      ${Footer()}

    </section>
  `;
}