import "./style.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import LiveTV from "./pages/LiveTV";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

const app = document.getElementById("app");

const routes = {
  home: Home,
  login: Login,
  movies: Movies,
  series: Series,
  livetv: LiveTV,
  search: Search,
  favorites: Favorites,
  profile: Profile,
  settings: Settings,
  player: Player
};

function render(page) {
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
}

render("home");