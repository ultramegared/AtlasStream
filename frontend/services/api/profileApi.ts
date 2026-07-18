import { CONFIG } from "../../constants/config";

const API = CONFIG.API_URL;

export async function getProfile(token: string) {
  const response = await fetch(`${API}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

export async function updateProfile(token: string, data: any) {
  const response = await fetch(`${API}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return response.json();
}