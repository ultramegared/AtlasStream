// frontend/src/pages/Login.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

import { translations } from "../../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Login() {

  const language = getLanguage() || "es";
  const t = translations[language];

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