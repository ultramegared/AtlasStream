import { CONFIG } from "../constants/config";

export default function Home() {
  return `
    <main class="home">

      <header class="header">

        <h1>${CONFIG.APP_NAME}</h1>

        <div class="header-actions">

          <select id="languageSelector">
            ${CONFIG.SUPPORTED_LANGUAGES.map(
              (language) => `
                <option
                  value="${language.code}"
                  ${
                    language.code === CONFIG.DEFAULT_LANGUAGE
                      ? "selected"
                      : ""
                  }>
                  🌐 ${language.name}
                </option>
              `
            ).join("")}
          </select>

          <button id="loginBtn">
            Iniciar sesión
          </button>

        </div>

      </header>

      <section class="hero">

        <h2>Tu entretenimiento en un solo lugar</h2>

        <p>
          Miles de películas, series y TV en vivo.
        </p>

      </section>

      <section class="categories">

        <button class="menu-btn" data-page="movies">
          🎬 Películas
        </button>

        <button class="menu-btn" data-page="series">
          🎞 Series
        </button>

        <button class="menu-btn" data-page="livetv">
          📺 TV en Vivo
        </button>

        <button class="menu-btn" data-page="favorites">
          ❤️ Favoritos
        </button>

        <button class="menu-btn" data-page="profile">
          👤 Perfil
        </button>

      </section>

      <footer class="app-footer">
        <p>${CONFIG.DESIGNER}</p>
        <p>${CONFIG.COPYRIGHT}</p>
      </footer>

    </main>
  `;
}