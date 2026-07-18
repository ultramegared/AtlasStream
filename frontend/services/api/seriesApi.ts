import { CONFIG } from "../../constants/config";

const API = CONFIG.API_URL;

export async function getSeries() {
  const response = await fetch(`${API}/series`);

  return response.json();
}

export async function getSeriesById(id: string) {
  const response = await fetch(`${API}/series/${id}`);

  return response.json();
}