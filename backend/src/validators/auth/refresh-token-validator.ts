/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: refresh-token.validator.ts
 * Path: backend/src/validators/auth/refresh-token.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Refresh token validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const refreshTokenSchema = {

    body: z.object({

        refreshToken: z
            .string()
            .trim()
            .min(
                1,
                "Refresh token is required."
            )

    })

};

export default refreshTokenSchema;