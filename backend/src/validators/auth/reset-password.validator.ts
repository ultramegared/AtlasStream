/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: reset-password.validator.ts
 * Path: backend/src/validators/auth/reset-password.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Reset password validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const resetPasswordSchema = {

    body: z.object({

        token: z
            .string()
            .trim()
            .min(
                1,
                "Reset token is required."
            ),

        password: z
            .string()
            .min(
                8,
                "Password must be at least 8 characters."
            )
            .max(
                128,
                "Password cannot exceed 128 characters."
            )
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#-]).+$/,
                "Password must contain uppercase, lowercase, number and special character."
            )

    })

};

export default resetPasswordSchema;