/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: useAsync.ts
 * Module: Hooks
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Hook for managing asynchronous operations.
 * Provides loading, error and data states with a
 * reusable execute function.
 * ----------------------------------------------------------------
 */

import { useCallback, useState } from 'react';

export interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface UseAsyncResult<T> extends UseAsyncState<T> {
  execute: (promise: Promise<T>) => Promise<T>;
  reset: () => void;
}

export const useAsync = <T>(): UseAsyncResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (promise: Promise<T>): Promise<T> => {
      setLoading(true);
      setError(null);

      try {
        const result = await promise;
        setData(result);

        return result;
      } catch (err) {
        const asyncError =
          err instanceof Error
            ? err
            : new Error('Unknown error');

        setError(asyncError);

        throw asyncError;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    execute,
    reset,
  };
};

export default useAsync;