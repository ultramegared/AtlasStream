import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import { CONFIG } from "../constants/config";

export default function Login() {
  return `
    <section class="login-page">

      ${Button({
        id: "backHome",
        text: "← Inicio"
      })}

      ${Header(CONFIG.APP_NAME)}

      <p class="page-subtitle">
        Iniciar sesión
      </p>

      ${Input({
        id: "email",
        type: "email",
        placeholder: "Correo electrónico"
      })}

      ${Input({
        id: "password",
        type: "password",
        placeholder: "Contraseña"
      })}

      ${Button({
        id: "loginButton",
        text: "Iniciar sesión"
      })}

      <div id="loginMessage"></div>

      <hr>

      <p>
        ¿No tienes una cuenta?
      </p>

      ${Button({
        id: "registerButton",
        text: "Crear cuenta"
      })}

      <footer class="app-footer">
        <p>${CONFIG.DESIGNER}</p>
        <p>${CONFIG.COPYRIGHT}</p>
      </footer>

    </section>
  `;
}