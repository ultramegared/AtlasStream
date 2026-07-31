/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: asyncHandler.ts
 * Path: backend/src/utils/asyncHandler.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Wraps asynchronous Express route handlers and forwards errors
 * to the global error middleware.
 * ----------------------------------------------------------------
 */

import {
    NextFunction,
    Request,
    RequestHandler,
    Response
} from "express";

type AsyncRequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<unknown>;

export default function asyncHandler(
    handler: AsyncRequestHandler
): RequestHandler {

    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        Promise
            .resolve(handler(req, res, next))
            .catch(next);

    };

}