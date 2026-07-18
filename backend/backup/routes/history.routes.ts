import { Router } from "express";
import HistoryController from "../controllers/HistoryController";

const router = Router();

/* ============================================================
   Historial de reproducción
============================================================ */

// Obtener historial de un perfil
router.get("/profile/:profileId", HistoryController.getHistory);

// Obtener un registro del historial
router.get("/:id", HistoryController.getHistoryById);

// Registrar una reproducción
router.post("/", HistoryController.createHistory);

// Actualizar progreso de reproducción
router.patch("/:id/progress", HistoryController.updateProgress);

// Marcar contenido como terminado
router.patch("/:id/completed", HistoryController.markAsCompleted);

// Eliminar un elemento del historial
router.delete("/:id", HistoryController.deleteHistory);

// Borrar todo el historial de un perfil
router.delete(
  "/profile/:profileId",
  HistoryController.clearHistory
);

// Obtener reproducciones recientes
router.get(
  "/profile/:profileId/recent",
  HistoryController.getRecentHistory
);

// Obtener contenido más visto
router.get(
  "/profile/:profileId/most-watched",
  HistoryController.getMostWatched
);

export default router;