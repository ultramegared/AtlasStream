import { currentUser } from "../controllers/authController";

export default function Profile() {
  const user = currentUser();

  return `
    <main class="profile">

      <h1>👤 Mi Perfil</h1>

      <p><strong>Usuario:</strong> ${user?.username ?? "No disponible"}</p>

      <p><strong>Correo:</strong> ${user?.email ?? "No disponible"}</p>

      <button id="logoutButton">
        Cerrar sesión
      </button>

      <footer class="app-footer">
        <p>Designed & Developed by ultramegared</p>
        <p>© 2026 AtlasStream</p>
      </footer>

    </main>
  `;
}