/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: main.ts
 * Module: Core
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Application entry point responsible for
 * routing, page rendering and global events.
 * ----------------------------------------------------------------
 */

import "./style.css";

import Home from "./pages/home.page";
import Login from "./pages/login.page";
import Register from "./pages/register.page";
import Movies from "./pages/movies.page";
import Series from "./pages/series.page";
import LiveTV from "./pages/liveTv.page";
import Search from "./pages/search.page";
import Favorites from "./pages/favorites.page";
import Profile from "./pages/profile.page";
import Settings from "./pages/settings.page";
import Player from "./pages/player.page";
import NotFound from "./pages/notFound.page";

import {
  loginUser,
  registerUser
} from "./controllers/auth.controller";

import { ROUTES } from "./constants/routes.constants";
import { CONFIG } from "./constants/config.constants";

import {
  getLanguage,
  saveLanguage
} from "./utils/storage.utils";

type PageRenderer = () => string | Promise<string>;

const app = document.getElementById("app") as HTMLElement;

const routes: Record<string, PageRenderer> = {
  [ROUTES.HOME]: Home,
  [ROUTES.LOGIN]: Login,
  [ROUTES.REGISTER]: Register,
  [ROUTES.MOVIES]: Movies,
  [ROUTES.SERIES]: Series,
  [ROUTES.LIVETV]: LiveTV,
  [ROUTES.SEARCH]: Search,
  [ROUTES.FAVORITES]: Favorites,
  [ROUTES.PROFILE]: Profile,
  [ROUTES.SETTINGS]: Settings,
  [ROUTES.PLAYER]: Player
};

async function handleLogin(): Promise<void> {
  const email = (
    document.getElementById("email") as HTMLInputElement
  ).value.trim();

  const password = (
    document.getElementById("password") as HTMLInputElement
  ).value;

  const message =
    document.getElementById("loginMessage") as HTMLElement;

  if (!email || !password) {
    message.textContent = "Completa todos los campos.";
    return;
  }

  try {
    await loginUser({
      email,
      password
    });

    render(ROUTES.HOME);
  } catch (error) {
    message.textContent =
      error instanceof Error
        ? error.message
        : "No fue posible iniciar sesión.";
  }
}

async function handleRegister(): Promise<void> {
  const username = (
    document.getElementById("username") as HTMLInputElement
  ).value.trim();

  const firstName = (
    document.getElementById("firstName") as HTMLInputElement
  ).value.trim();

  const lastName = (
    document.getElementById("lastName") as HTMLInputElement
  ).value.trim();

  const email = (
    document.getElementById("email") as HTMLInputElement
  ).value.trim();

  const password = (
    document.getElementById("password") as HTMLInputElement
  ).value;

  const message =
    document.getElementById("registerMessage") as HTMLElement;

  if (!username || !email || !password) {
    message.textContent =
      "Completa los campos obligatorios.";
    return;
  }

  try {
    await registerUser({
      username,
      firstName,
      lastName,
      email,
      password,
      profileImage: null
    });

    alert("Cuenta creada correctamente.");

    render(ROUTES.LOGIN);
  } catch (error) {
    message.textContent =
      error instanceof Error
        ? error.message
        : "No fue posible crear la cuenta.";
  }
}

async function render(
  page: string = ROUTES.HOME
): Promise<void> {
  const view = routes[page] ?? NotFound;

  app.innerHTML = await view();

  document
    .querySelectorAll<HTMLElement>(".menu-btn")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const target =
          button.dataset.page ?? ROUTES.HOME;

        render(target);
      });
    });

  document
    .getElementById("loginBtn")
    ?.addEventListener("click", () =>
      render(ROUTES.LOGIN)
    );

  document
    .getElementById("registerButton")
    ?.addEventListener("click", () =>
      render(ROUTES.REGISTER)
    );

  document
    .getElementById("backToLogin")
    ?.addEventListener("click", () =>
      render(ROUTES.LOGIN)
    );

  document
    .getElementById("backHome")
    ?.addEventListener("click", () =>
      render(ROUTES.HOME)
    );

  document
    .getElementById("loginButton")
    ?.addEventListener("click", handleLogin);

  document
    .getElementById("createAccountButton")
    ?.addEventListener("click", handleRegister);

  const languageSelector =
    document.getElementById(
      "languageSelector"
    ) as HTMLSelectElement | null;

  if (languageSelector) {
    languageSelector.value =
      getLanguage() ?? CONFIG.DEFAULT_LANGUAGE;

    languageSelector.addEventListener("change", (event) => {
      const target =
        event.target as HTMLSelectElement;

      saveLanguage(target.value);

      render(page);
    });
  }
}

declare global {
  interface Window {
    render: (page?: string) => Promise<void>;
  }
}

window.render = render;

render();