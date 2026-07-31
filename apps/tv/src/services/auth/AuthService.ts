/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: AuthService.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Authentication service.
 * Provides methods for communicating with authentication
 * endpoints without handling token persistence.
 * ----------------------------------------------------------------
 */

import { apiClient } from '../api';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

class AuthService {
  public login(
    credentials: LoginRequest,
  ): Promise<LoginResponse> {
    return apiClient.post<LoginResponse>(
      '/auth/login',
      credentials,
    );
  }

  public logout(): Promise<void> {
    return apiClient.post<void>(
      '/auth/logout',
    );
  }

  public refreshToken(
    refreshToken: string,
  ): Promise<LoginResponse> {
    return apiClient.post<LoginResponse>(
      '/auth/refresh',
      {
        refreshToken,
      },
    );
  }
}

const authService = new AuthService();

export default authService;