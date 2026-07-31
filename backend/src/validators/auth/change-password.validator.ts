/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: change-password.validator.ts
 * Path: backend/src/validators/auth/change-password.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Change password validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const changePasswordSchema = {

    body: z.object({

        currentPassword: z
            .string()
            .min(
                8,
                "Current password must be at least 8 characters."
            )
            .max(
                128,
                "Current password cannot exceed 128 characters."
            ),

        newPassword: z
            .string()
            .min(
                8,
                "New password must be at least 8 characters."
            )
            .max(
                128,
                "New password cannot exceed 128 characters."
            )
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#-]).+$/,
                "New password must contain uppercase, lowercase, number and special character."
            )

    }).refine(
        data => data.currentPassword !== data.newPassword,
        {
            message: "New password must be different from the current password.",
            path: ["newPassword"]
        }
    )

};

export default changePasswordSchema;