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
 * Rutas para la gestión de películas.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controllers/movieController";

import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

/**
 * ----------------------------------------------------------------
 * Movie Routes
 * ----------------------------------------------------------------
 */

// Obtener todas las películas
router.get("/", index);

// Obtener una película por ID
router.get("/:id", show);

// Crear una película (requiere autenticación)
router.post("/", authenticateToken, store);

// Actualizar una película (requiere autenticación)
router.put("/:id", authenticateToken, update);

// Eliminar una película (requiere autenticación)
router.delete("/:id", authenticateToken, destroy);

export default router;