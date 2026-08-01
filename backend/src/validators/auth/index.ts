/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: index.ts
 * Path: backend/src/validators/auth/index.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Centralized exports for authentication validation schemas.
 * ----------------------------------------------------------------
 */

export { default as loginSchema } from "./login.validator";
export { default as registerSchema } from "./register.validator";
export { default as changePasswordSchema } from "./change-password.validator";
export { default as refreshTokenSchema } from "./refresh-token.validator";
export { default as forgotPasswordSchema } from "./forgot-password.validator";
export { default as resetPasswordSchema } from "./reset-password.validator";