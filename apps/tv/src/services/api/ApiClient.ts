/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: ApiClient.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Centralized HTTP client for AtlasStream.
 * Provides reusable methods for performing HTTP requests
 * and centralized response/error handling.
 * ----------------------------------------------------------------
 */

import ApiConfig from './ApiConfig';

export interface RequestOptions extends RequestInit {
  headers?: HeadersInit;
}

class ApiClient {
  private readonly baseURL = ApiConfig.baseURL;

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {},
  ): Promise<T> {
    const response = await fetch(
      `${this.baseURL}${endpoint}`,
      {
        ...options,
        headers: {
          ...ApiConfig.headers,
          ...(options.headers ?? {}),
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} ${response.statusText}`,
      );
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await response.json()) as T;
  }

  public get<T>(
    endpoint: string,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  public post<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  }

  public put<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  }

  public patch<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  }

  public delete<T>(
    endpoint: string,
    options?: RequestOptions,
  ): Promise<T> {
    return this.request(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }
}

const apiClient = new ApiClient();

export default apiClient;