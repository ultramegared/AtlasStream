/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: useDebounce.ts
 * Module: Hooks
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Hook that debounces a changing value.
 * Useful for delaying expensive operations such as
 * searches, filtering and API requests.
 * ----------------------------------------------------------------
 */

import { useEffect, useState } from 'react';

export const useDebounce = <T>(
  value: T,
  delay = 300,
): T => {
  const [debouncedValue, setDebouncedValue] =
    useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;