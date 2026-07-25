// frontend/src/controllers/subscriptionController.ts
// AtlasStream
// Designed & Developed by ultramegared

import {
  getSubscriptions,
  subscribe,
} from "../../services/api/subscriptionApi";

/**
 * Obtiene todos los planes de suscripción.
 */
export async function loadSubscriptions() {
  try {
    return await getSubscriptions();
  } catch (error: any) {
    throw new Error(
      error.message || "Unable to load subscriptions."
    );
  }
}

/**
 * Suscribe al usuario autenticado a un plan.
 */
export async function subscribeToPlan(planId: string) {
  try {
    return await subscribe(planId);
  } catch (error: any) {
    throw new Error(
      error.message || "Unable to subscribe."
    );
  }
}