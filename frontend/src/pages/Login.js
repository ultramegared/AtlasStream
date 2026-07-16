export default function Login() {
  return `
    <section class="login-page">
      <h1>Iniciar sesión</h1>

      <input
        type="email"
        placeholder="Correo electrónico"
      />

      <input
        type="password"
        placeholder="Contraseña"
      />

      <button id="loginButton">
        Iniciar sesión
      </button>

      <p>
        ¿No tienes una cuenta?
      </p>

      <button id="registerButton">
        Crear cuenta
      </button>
    </section>
  `;
}