/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: validate.ts
 * Path: backend/src/middleware/validate.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Request validation middleware using Zod.
 * ----------------------------------------------------------------
 */

import {
    NextFunction,
    Request,
    Response
} from "express";

import {
    AnyZodObject,
    ZodError
} from "zod";

import {
    ApiError,
    HTTP_STATUS
} from "@/utils";

interface ValidationSchemas {

    body?: AnyZodObject;

    params?: AnyZodObject;

    query?: AnyZodObject;

}

export default function validate(
    schemas: ValidationSchemas
) {

    return async (
        req: Request,
        _res: Response,
        next: NextFunction
    ): Promise<void> => {

        try {

            if (schemas.body) {

                req.body = await schemas.body.parseAsync(
                    req.body
                );

            }

            if (schemas.params) {

                req.params = await schemas.params.parseAsync(
                    req.params
                );

            }

            if (schemas.query) {

                req.query = await schemas.query.parseAsync(
                    req.query
                );

            }

            next();

        } catch (error) {

            if (error instanceof ZodError) {

                return next(
                    new ApiError(
                        HTTP_STATUS.BAD_REQUEST,
                        "VALIDATION_ERROR",
                        "Request validation failed.",
                        error.flatten()
                    )
                );

            }

            next(error);

        }

    };

}