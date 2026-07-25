// frontend/src/pages/Player.js

import Header from "../components/Header";
import Footer from "../components/Footer";

import { translations } from "../../constants/translations";
import { getLanguage } from "../utils/storage";

export default function Player() {
  const language = getLanguage() || "es";
  const t = translations[language];

  // Temporal.
  // Más adelante estos datos vendrán desde la API.
  const content = {
    title: "Avatar",
    description: t.playerDescription,
    type: "movie",
    source: "",
  };

  return `
    <main class="player-page">

      ${Header()}

      <section class="player-container">

        <h2 class="page-title">
          ▶ ${content.title}
        </h2>

        <div class="video-container">

          <video
            id="videoPlayer"
            class="video-player"
            controls
            preload="metadata"
            width="100%"
          >
            ${
              content.source
                ? `
                  <source
                    src="${content.source}"
                    type="video/mp4"
                  >
                `
                : ""
            }

            ${t.videoNotSupported}
          </video>

        </div>

        <div class="player-info">

          <h3>
            ${content.title}
          </h3>

          <p>
            ${content.description}
          </p>

        </div>

        <div class="player-actions">

          <button
            id="favoriteButton"
            class="menu-btn"
          >
            ❤️ ${t.favorites}
          </button>

          <button
            id="backButton"
            class="menu-btn"
            data-page="home"
          >
            ← ${t.backHome}
          </button>

        </div>

      </section>

      ${Footer()}

    </main>
  `;
}