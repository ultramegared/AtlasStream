// frontend/services/api/profileApi.ts
// AtlasStream
// Designed & Developed by ultramegared

import { apiFetch } from "./api";

/**
 * Obtiene el perfil del usuario autenticado.
 */
export async function getProfile() {
  return apiFetch("/profile");
}

/**
 * Actualiza el perfil del usuario autenticado.
 */
export async function updateProfile(data: any) {
  return apiFetch("/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}