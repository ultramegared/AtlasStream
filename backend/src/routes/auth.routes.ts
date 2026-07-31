/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: auth.routes.ts
 * Path: backend/src/routes/auth.routes.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Authentication routes.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import authController from "@/controllers/auth.controller";

import {
    authenticate,
    validate
} from "@/middleware";

import {
    changePasswordSchema,
    loginSchema,
    registerSchema
} from "@/validators/auth.validator";

const router = Router();

router.post(
    "/login",
    validate(loginSchema),
    authController.login
);

router.post(
    "/register",
    validate(registerSchema),
    authController.register
);

router.patch(
    "/change-password",
    authenticate,
    validate(changePasswordSchema),
    authController.changePassword
);

export default router;