// frontend/src/controllers/authController.js

import { login, register } from "../../services/api/authApi";
import {
  saveToken,
  saveUser,
  logout,
  getToken,
  getUser
} from "../utils/storage";

export async function loginUser(credentials) {
  const response = await login(credentials);

  if (!response.success) {
    throw new Error(response.message);
  }

  saveToken(response.data.token);
  saveUser(response.data.user);

  return response.data.user;
}

export async function registerUser(userData) {
  const response = await register(userData);

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}

export function logoutUser() {
  logout();
}

export function isAuthenticated() {
  return !!getToken();
}

export function currentUser() {
  return getUser();
}