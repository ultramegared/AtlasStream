// frontend/src/controllers/authController.js
// AtlasStream
// Designed & Developed by ultramegared

import { login, register } from "../../services/api/authApi";

import {
  saveToken,
  saveUser,
  logout,
  getToken,
  getUser
} from "../utils/storage";

/**
 * Inicia sesión.
 */
export async function loginUser(credentials) {
  try {
    const response = await login(credentials);

    if (!response || !response.success) {
      throw new Error(
        response?.message || "Login failed."
      );
    }

    saveToken(response.data.token);
    saveUser(response.data.user);

    return response.data.user;

  } catch (error) {
    throw new Error(
      error.message || "Unexpected login error."
    );
  }
}

/**
 * Registra un nuevo usuario.
 */
export async function registerUser(userData) {
  try {
    const response = await register(userData);

    if (!response || !response.success) {
      throw new Error(
        response?.message || "Registration failed."
      );
    }

    return response.data;

  } catch (error) {
    throw new Error(
      error.message || "Unexpected registration error."
    );
  }
}

/**
 * Cierra la sesión actual.
 */
export function logoutUser() {
  logout();
}

/**
 * Verifica si existe un token.
 */
export function isAuthenticated() {
  return Boolean(getToken());
}

/**
 * Obtiene el usuario almacenado.
 */
export function currentUser() {
  return getUser();
}