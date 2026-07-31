/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: useFocus.ts
 * Module: Hooks
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Hook for managing focus state on TV components.
 * Centralizes focus and blur handling for Android TV
 * and tvOS compatible components.
 * ----------------------------------------------------------------
 */

import { useCallback, useState } from 'react';

export interface UseFocusOptions {
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface UseFocusResult {
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export const useFocus = (
  options: UseFocusOptions = {},
): UseFocusResult => {
  const { onFocus, onBlur } = options;

  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur?.();
  }, [onBlur]);

  return {
    focused,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };
};

export default useFocus;