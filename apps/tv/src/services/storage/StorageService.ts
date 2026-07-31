/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: StorageService.ts
 * Module: Services
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Storage abstraction service.
 * Defines a unified interface for persistent storage without
 * depending on a specific implementation.
 * ----------------------------------------------------------------
 */

import type { StorageKey } from './StorageKeys';

export interface StorageAdapter {
  getItem(key: StorageKey): Promise<string | null>;
  setItem(key: StorageKey, value: string): Promise<void>;
  removeItem(key: StorageKey): Promise<void>;
  clear(): Promise<void>;
}

class StorageService {
  private adapter: StorageAdapter | null = null;

  public configure(adapter: StorageAdapter): void {
    this.adapter = adapter;
  }

  private getAdapter(): StorageAdapter {
    if (this.adapter === null) {
      throw new Error(
        'Storage adapter has not been configured.',
      );
    }

    return this.adapter;
  }

  public getItem(
    key: StorageKey,
  ): Promise<string | null> {
    return this.getAdapter().getItem(key);
  }

  public setItem(
    key: StorageKey,
    value: string,
  ): Promise<void> {
    return this.getAdapter().setItem(key, value);
  }

  public removeItem(
    key: StorageKey,
  ): Promise<void> {
    return this.getAdapter().removeItem(key);
  }

  public clear(): Promise<void> {
    return this.getAdapter().clear();
  }
}

const storageService = new StorageService();

export default storageService;