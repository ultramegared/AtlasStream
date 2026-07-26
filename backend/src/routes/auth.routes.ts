/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Rutas de autenticación de usuarios.
 * Gestiona el registro e inicio de sesión.
 * ----------------------------------------------------------------
 */

import { Router } from "express";
import { login, register } from "../controllers/authController";

const router: Router = Router();

/**
 * ----------------------------------------------------------------
 * Authentication Routes
 * ----------------------------------------------------------------
 */

/**
 * Register a new user.
 */
router.post("/register", register);

/**
 * Authenticate an existing user.
 */
router.post("/login", login);

export default router;