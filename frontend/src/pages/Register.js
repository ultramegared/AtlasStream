import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  return `
    <section class="register-page">

      ${Button({
        id: "backToLogin",
        text: "← Volver"
      })}

      ${Header("Crear cuenta")}

      ${Input({
        id: "username",
        placeholder: "Nombre de usuario"
      })}

      ${Input({
        id: "firstName",
        placeholder: "Nombre"
      })}

      ${Input({
        id: "lastName",
        placeholder: "Apellido"
      })}

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
        id: "createAccountButton",
        text: "Crear cuenta"
      })}

      <div id="registerMessage"></div>

    </section>
  `;
}