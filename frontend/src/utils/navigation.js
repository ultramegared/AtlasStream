// frontend/src/utils/navigation.js

export function navigate(render, page) {
  render(page);
}

export function goHome(render) {
  render("home");
}

export function goLogin(render) {
  render("login");
}

export function goRegister(render) {
  render("register");
}

export function goProfile(render) {
  render("profile");
}

export function goMovies(render) {
  render("movies");
}

export function goSeries(render) {
  render("series");
}

export function goLiveTV(render) {
  render("livetv");
}

export function goFavorites(render) {
  render("favorites");
}

export function goSearch(render) {
  render("search");
}

export function goSettings(render) {
  render("settings");
}

export function goPlayer(render) {
  render("player");
}