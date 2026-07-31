/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: auth.controller.ts
 * Path: backend/src/controllers/auth.controller.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Authentication controller.
 * ----------------------------------------------------------------
 */

import {
    Request,
    Response
} from "express";

import authService from "@/services/auth.service";

import {
    asyncHandler,
    HTTP_STATUS,
    success
} from "@/utils";

class AuthController {

    public login = asyncHandler(
        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const result = await authService.login(
                req.body
            );

            success(
                res,
                result,
                "Login successful.",
                HTTP_STATUS.OK
            );

        }
    );

    public register = asyncHandler(
        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            const result = await authService.register(
                req.body
            );

            success(
                res,
                result,
                "Registration successful.",
                HTTP_STATUS.CREATED
            );

        }
    );

    public changePassword = asyncHandler(
        async (
            req: Request,
            res: Response
        ): Promise<void> => {

            await authService.changePassword(

                req.user!.id,

                req.body.currentPassword,

                req.body.newPassword

            );

            success(

                res,

                null,

                "Password updated successfully.",

                HTTP_STATUS.OK

            );

        }
    );

}

export default new AuthController();