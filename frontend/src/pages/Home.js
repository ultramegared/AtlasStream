export default function Home() {
  return `
    <main class="home">

      <header class="header">
        <h1>🎬 AtlasStream</h1>

        <button id="loginBtn">
          Iniciar sesión
        </button>
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

    </main>
  `;
}