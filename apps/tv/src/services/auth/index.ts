/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: index.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Barrel file for the authentication services.
 * Exposes the authentication service and related types
 * through a single entry point.
 * ----------------------------------------------------------------
 */

export { default as authService } from './AuthService';

export type {
  LoginRequest,
  LoginResponse,
} from './AuthService';