import { Router } from "express";
import AdminController from "../controllers/AdminController";

const router = Router();

/* ============================================================
   Dashboard
============================================================ */

// Panel principal
router.get("/dashboard", AdminController.getDashboard);

// Estadísticas generales
router.get("/statistics", AdminController.getStatistics);

// Estado del sistema
router.get("/system/status", AdminController.getSystemStatus);

/* ============================================================
   Usuarios
============================================================ */

router.get("/users", AdminController.getUsers);
router.get("/users/:id", AdminController.getUserById);
router.patch("/users/:id/status", AdminController.changeUserStatus);
router.patch("/users/:id/role", AdminController.changeUserRole);
router.delete("/users/:id", AdminController.deleteUser);

/* ============================================================
   Contenido
============================================================ */

router.get("/content", AdminController.getContent);
router.post("/content", AdminController.createContent);
router.put("/content/:id", AdminController.updateContent);
router.delete("/content/:id", AdminController.deleteContent);

/* ============================================================
   Reportes
============================================================ */

router.get("/reports", AdminController.getReports);
router.get("/reports/reviews", AdminController.getReportedReviews);

/* ============================================================
   Suscripciones
============================================================ */

router.get("/subscriptions", AdminController.getSubscriptions);
router.get("/subscriptions/statistics", AdminController.getSubscriptionStatistics);

/* ============================================================
   Notificaciones
============================================================ */

router.post("/notifications", AdminController.sendNotification);
router.post("/notifications/broadcast", AdminController.broadcastNotification);

/* ============================================================
   Configuración
============================================================ */

router.get("/settings", AdminController.getSettings);
router.put("/settings", AdminController.updateSettings);

/* ============================================================
   Auditoría
============================================================ */

router.get("/logs", AdminController.getSystemLogs);

export default router;