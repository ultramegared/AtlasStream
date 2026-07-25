// frontend/src/pages/Settings.js

import Header from "../components/Header";
import Footer from "../components/Footer";

import { translations } from "../../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Settings() {

  const language = getLanguage() || "es";
  const t = translations[language];

  return `
    <main class="settings">

      ${Header()}

      <section class="settings-container">

        <h2 class="page-title">
          ⚙ ${t.settings}
        </h2>

        <div class="settings-card">

          <div class="setting-item">
            <h3>🌐 ${t.language}</h3>
            <p>
              Selecciona el idioma desde el menú superior.
            </p>
          </div>

          <div class="setting-item">
            <h3>🎨 Tema</h3>
            <p>
              Próximamente disponible.
            </p>
          </div>

          <div class="setting-item">
            <h3>🔔 Notificaciones</h3>
            <p>
              Próximamente disponible.
            </p>
          </div>

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}