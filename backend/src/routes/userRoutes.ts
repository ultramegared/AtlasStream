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
  profile,
  update,
  password,
} from "../controllers/userController";

import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

/**
 * ----------------------------------------------------------------
 * User Routes
 * ----------------------------------------------------------------
 */

// Obtener perfil del usuario autenticado
router.get("/profile", authenticateToken, profile);

// Actualizar perfil del usuario autenticado
router.put("/profile", authenticateToken, update);

// Cambiar contraseña del usuario autenticado
router.put("/password", authenticateToken, password);

export default router;