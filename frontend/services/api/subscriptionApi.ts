import { CONFIG } from "../../constants/config";

const API = CONFIG.API_URL;

export async function getSubscriptions() {
  const response = await fetch(`${API}/subscriptions`);

  return response.json();
}

export async function subscribe(token: string, planId: string) {
  const response = await fetch(`${API}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      planId,
    }),
  });

  return response.json();
}