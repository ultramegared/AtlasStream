import { Router } from "express";
import GenresController from "../controllers/GenresController";

const router = Router();

/* ============================================================
   Géneros
============================================================ */

// Obtener todos los géneros
router.get("/", GenresController.getAllGenres);

// Obtener un género por ID
router.get("/:id", GenresController.getGenreById);

// Obtener contenido de un género
router.get("/:id/content", GenresController.getGenreContent);

// Crear género
router.post("/", GenresController.createGenre);

// Actualizar género
router.put("/:id", GenresController.updateGenre);

// Actualización parcial
router.patch("/:id", GenresController.patchGenre);

// Activar o desactivar género
router.patch("/:id/status", GenresController.changeGenreStatus);

// Eliminar género
router.delete("/:id", GenresController.deleteGenre);

export default router;