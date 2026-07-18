import { Router } from "express";
import SubscriptionsController from "../controllers/SubscriptionsController";

const router = Router();

/* ============================================================
   Suscripciones
============================================================ */

// Obtener todas las suscripciones
router.get("/", SubscriptionsController.getAllSubscriptions);

// Obtener la suscripción de un usuario
router.get(
  "/user/:userId",
  SubscriptionsController.getUserSubscription
);

// Obtener una suscripción por ID
router.get("/:id", SubscriptionsController.getSubscriptionById);

// Crear una nueva suscripción
router.post("/", SubscriptionsController.createSubscription);

// Actualizar una suscripción
router.put("/:id", SubscriptionsController.updateSubscription);

// Actualización parcial
router.patch("/:id", SubscriptionsController.patchSubscription);

// Cambiar de plan
router.patch("/:id/plan", SubscriptionsController.changePlan);

// Renovar suscripción
router.patch("/:id/renew", SubscriptionsController.renewSubscription);

// Cancelar suscripción
router.patch("/:id/cancel", SubscriptionsController.cancelSubscription);

// Reactivar suscripción
router.patch("/:id/reactivate", SubscriptionsController.reactivateSubscription);

// Verificar estado de la suscripción
router.get("/:id/status", SubscriptionsController.getSubscriptionStatus);

// Eliminar suscripción
router.delete("/:id", SubscriptionsController.deleteSubscription);

export default router;