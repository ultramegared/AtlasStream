/**
 * ------------------------------------------------------------
 * Project     : AtlasStream
 * File        : AuthMetadata.ts
 * Path        : backend/src/models/AuthMetadata.ts
 * Author      : ultramegared
 * Language    : TypeScript
 * Description : Authentication metadata domain models and
 *               contracts used by the Auth module.
 * ------------------------------------------------------------
 */

/**
 * Geographic location metadata.
 */
export interface AuthLocationMetadata {
  country: string | null;
  countryCode: string | null;
  region: string | null;
  city: string | null;
  latitude: number | null;
  longitude: number | null;
}

/**
 * Client application metadata.
 */
export interface AuthApplicationMetadata {
  applicationName: string;
  applicationVersion: string;
  platform: string;
  language: string;
  timezone: string;
}

/**
 * Request metadata.
 */
export interface AuthRequestMetadata {
  requestId: string;
 