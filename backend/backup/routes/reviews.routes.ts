import { Router } from "express";
import ReviewsController from "../controllers/ReviewsController";

const router = Router();

/* ============================================================
   Reseñas y Calificaciones
============================================================ */

// Obtener todas las reseñas de un contenido
router.get(
  "/content/:contentId",
  ReviewsController.getContentReviews
);

// Obtener una reseña por ID
router.get("/:id", ReviewsController.getReviewById);

// Obtener las reseñas de un perfil
router.get(
  "/profile/:profileId",
  ReviewsController.getProfileReviews
);

// Crear una reseña
router.post("/", ReviewsController.createReview);

// Actualizar una reseña
router.put("/:id", ReviewsController.updateReview);

// Actualización parcial
router.patch("/:id", ReviewsController.patchReview);

// Eliminar una reseña
router.delete("/:id", ReviewsController.deleteReview);

// Obtener la calificación promedio de un contenido
router.get(
  "/content/:contentId/rating",
  ReviewsController.getAverageRating
);

// Reportar una reseña
router.post(
  "/:id/report",
  ReviewsController.reportReview
);

export default router;