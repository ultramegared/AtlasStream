// frontend/src/pages/Home.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import { translations } from "../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Home() {
  const language = getLanguage() || "es";
  const t = translations[language];

  return `
    <main class="home">

      ${Header()}

      <section class="hero">

        <h2>${t.heroTitle}</h2>

        <p>
          ${t.heroDescription}
        </p>

      </section>

      <section class="categories">

        <button
          class="menu-btn"
          data-page="movies"
        >
          🎬 ${t.movies}
        </button>

        <button
          class="menu-btn"
          data-page="series"
        >
          🎞 ${t.series}
        </button>

        <button
          class="menu-btn"
          data-page="livetv"
        >
          📺 ${t.liveTv}
        </button>

        <button
          class="menu-btn"
          data-page="favorites"
        >
          ❤️ ${t.favorites}
        </button>

        <button
          class="menu-btn"
          data-page="profile"
        >
          👤 ${t.profile}
        </button>

      </section>

      <section class="actions">

        <button
          id="loginBtn"
        >
          ${t.login}
        </button>

      </section>

      ${Footer()}

    </main>
  `;
}