// frontend/src/pages/Register.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Register() {

  const language = getLanguage() || "es";
  const t = translations[language];

  return `
    <section class="register-page">

      ${Header()}

      ${Button({
        id: "backToLogin",
        text: "← ${t.login}"
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