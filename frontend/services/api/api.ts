// frontend/services/api/api.ts
// AtlasStream
// Designed & Developed by ultramegared

import { CONFIG } from "../../src/constants/config";
import { getToken } from "../../src/utils/storage";

const API_URL = CONFIG.API_URL;

/**
 * Headers por defecto para las peticiones HTTP.
 */
function getHeaders(): HeadersInit {
  const token = getToken();

  return {
    "Content-Type": "application/json",
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
  };
}

/**
 * Cliente HTTP base.
 */
export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || "Request failed."
    );
  }

  return data;
}