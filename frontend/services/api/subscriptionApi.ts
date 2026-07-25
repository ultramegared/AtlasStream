// frontend/services/api/subscriptionApi.ts
// AtlasStream
// Designed & Developed by ultramegared

import { apiFetch } from "./api";

/**
 * Obtiene los planes de suscripción disponibles.
 */
export async function getSubscriptions() {
  return apiFetch("/subscriptions");
}

/**
 * Suscribe al usuario autenticado a un plan.
 */
export async function subscribe(planId: string) {
  return apiFetch("/subscriptions", {
    method: "POST",
    body: JSON.stringify({
      planId,
    }),
  });
}