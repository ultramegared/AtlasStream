import { Router } from "express";
import NotificationsController from "../controllers/NotificationsController";

const router = Router();

/* ============================================================
   Notificaciones
============================================================ */

// Obtener todas las notificaciones de un perfil
router.get(
  "/profile/:profileId",
  NotificationsController.getProfileNotifications
);

// Obtener una notificación por ID
router.get(
  "/:id",
  NotificationsController.getNotificationById
);

// Crear una notificación
router.post(
  "/",
  NotificationsController.createNotification
);

// Actualizar una notificación
router.put(
  "/:id",
  NotificationsController.updateNotification
);

// Actualización parcial
router.patch(
  "/:id",
  NotificationsController.patchNotification
);

// Marcar una notificación como leída
router.patch(
  "/:id/read",
  NotificationsController.markAsRead
);

// Marcar todas como leídas
router.patch(
  "/profile/:profileId/read-all",
  NotificationsController.markAllAsRead
);

// Obtener cantidad de notificaciones no leídas
router.get(
  "/profile/:profileId/unread-count",
  NotificationsController.getUnreadCount
);

// Eliminar una notificación
router.delete(
  "/:id",
  NotificationsController.deleteNotification
);

// Eliminar todas las notificaciones de un perfil
router.delete(
  "/profile/:profileId",
  NotificationsController.clearNotifications
);

export default router;