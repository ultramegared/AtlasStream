import { Router } from "express";
import ContinueWatchingController from "../controllers/ContinueWatchingController";

const router = Router();

/* ============================================================
   Continuar viendo
============================================================ */

// Obtener lista "Continuar viendo" de un perfil
router.get(
  "/profile/:profileId",
  ContinueWatchingController.getContinueWatching
);

// Obtener un contenido específico
router.get(
  "/profile/:profileId/content/:contentId",
  ContinueWatchingController.getContinueWatchingItem
);

// Agregar un contenido a "Continuar viendo"
router.post(
  "/",
  ContinueWatchingController.createContinueWatching
);

// Actualizar el progreso de reproducción
router.patch(
  "/:id/progress",
  ContinueWatchingController.updateProgress
);

// Marcar contenido como finalizado
router.patch(
  "/:id/completed",
  ContinueWatchingController.markAsCompleted
);

// Eliminar un contenido de "Continuar viendo"
router.delete(
  "/:id",
  ContinueWatchingController.deleteContinueWatching
);

// Limpiar toda la lista de un perfil
router.delete(
  "/profile/:profileId",
  ContinueWatchingController.clearContinueWatching
);

// Reordenar la lista según la última reproducción
router.patch(
  "/profile/:profileId/reorder",
  ContinueWatchingController.reorderContinueWatching
);

export default router;