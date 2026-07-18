import { CONFIG } from "../../constants/config";

const API = CONFIG.API_URL;

export async function getMovies() {
  const response = await fetch(`${API}/movies`);

  return response.json();
}

export async function getMovieById(id: string) {
  const response = await fetch(`${API}/movies/${id}`);

  return response.json();
}