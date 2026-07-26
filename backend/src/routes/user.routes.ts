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
 * Rutas para la gestión del perfil de usuario.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import {
  password,
  profile,
  update,
} from "../controllers/user.controller";

import { authenticateToken } from "../middleware/auth.middleware";

const router: Router = Router();

/**
 * ----------------------------------------------------------------
 * User Routes
 * ----------------------------------------------------------------
 */

/**
 * Get the authenticated user's profile.
 */
router.get("/profile", authenticateToken, profile);

/**
 * Update the authenticated user's profile.
 */
router.put("/profile", authenticateToken, update);

/**
 * Change the authenticated user's password.
 */
router.put("/password", authenticateToken, password);

export default router;