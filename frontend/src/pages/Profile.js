// frontend/src/pages/Profile.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import { currentUser } from "../controllers/authController";

import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Profile() {

  const language = getLanguage() || "es";
  const t = translations[language];

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