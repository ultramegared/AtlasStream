/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: forgot-password.validator.ts
 * Path: backend/src/validators/auth/forgot-password.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Forgot password validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const forgotPasswordSchema = {

    body: z.object({

        email: z
            .email("Invalid email address.")
            .trim()
            .toLowerCase()

    })

};

export default forgotPasswordSchema;