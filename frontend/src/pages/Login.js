import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  return `
    <section class="login-page">

      ${Button({
        id: "backHome",
        text: "← Inicio"
      })}

      ${Header("Iniciar sesión")}

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

    </section>
  `;
}