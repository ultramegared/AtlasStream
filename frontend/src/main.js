import "./style.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import LiveTV from "./pages/LiveTV";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

import {
  loginUser,
  registerUser
} from "./controllers/authController";

const app = document.getElementById("app");

const routes = {
  home: Home,
  login: Login,
  register: Register,
  movies: Movies,
  series: Series,
  livetv: LiveTV,
  search: Search,
  favorites: Favorites,
  profile: Profile,
  settings: Settings,
  player: Player,
};

async function handleLogin() {

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  if (!email || !password) {
    message.innerHTML = "Completa todos los campos.";
    return;
  }

  try {

    await loginUser({
      email,
      password,
    });

    render("home");

  } catch (error) {

    message.innerHTML =
      error.message || "No fue posible iniciar sesión.";

  }

}

async function handleRegister() {

  const username = document.getElementById("username").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const message = document.getElementById("registerMessage");

  if (!username || !email || !password) {

    message.innerHTML = "Completa los campos obligatorios.";
    return;

  }

  try {

    await registerUser({

      username,
      firstName,
      lastName,
      email,
      password,
      profileImage: null,

    });

    alert("Cuenta creada correctamente.");

    render("login");

  } catch (error) {

    message.innerHTML =
      error.message || "No fue posible crear la cuenta.";

  }

}

function render(page = "home") {

  const view = routes[page] || NotFound;

  app.innerHTML = view();

  document.querySelectorAll(".menu-btn").forEach((button) => {

    button.addEventListener("click", () => {

      render(button.dataset.page);

    });

  });

  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {

    loginBtn.addEventListener("click", () => {

      render("login");

    });

  }

  const registerBtn = document.getElementById("registerButton");

  if (registerBtn) {

    registerBtn.addEventListener("click", () => {

      render("register");

    });

  }

  const backToLogin = document.getElementById("backToLogin");

  if (backToLogin) {

    backToLogin.addEventListener("click", () => {

      render("login");

    });

  }

  const backHome = document.getElementById("backHome");

  if (backHome) {

    backHome.addEventListener("click", () => {

      render("home");

    });

  }

  const loginButton = document.getElementById("loginButton");

  if (loginButton) {

    loginButton.addEventListener("click", handleLogin);

  }

  const createAccountButton = document.getElementById("createAccountButton");

  if (createAccountButton) {

    createAccountButton.addEventListener("click", handleRegister);

  }

}

window.render = render;

render();