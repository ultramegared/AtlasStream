// frontend/src/controllers/profileController.ts
// AtlasStream
// Designed & Developed by ultramegared

import {
  getProfile,
  updateProfile,
} from "../../services/api/profileApi";

/**
 * Obtiene el perfil del usuario autenticado.
 */
export async function loadProfile() {
  try {
    return await getProfile();
  } catch (error: any) {
    throw new Error(
      error.message || "Unable to load profile."
    );
  }
}

/**
 * Actualiza el perfil del usuario autenticado.
 */
export async function saveProfile(data: any) {
  try {
    return await updateProfile(data);
  } catch (error: any) {
    throw new Error(
      error.message || "Unable to update profile."
    );
  }
}