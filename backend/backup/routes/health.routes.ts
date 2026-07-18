import { Router } from "express";
import HealthController from "../controllers/HealthController";

const router = Router();

/* ============================================================
   Health Check
============================================================ */

// Estado general de la API
router.get("/", HealthController.getHealth);

// Estado de la base de datos
router.get("/database", HealthController.getDatabaseStatus);

// Estado del almacenamiento
router.get("/storage", HealthController.getStorageStatus);

// Estado de la caché
router.get("/cache", HealthController.getCacheStatus);

// Estado de servicios externos
router.get("/services", HealthController.getServicesStatus);

// Información de la aplicación
router.get("/info", HealthController.getApplicationInfo);

// Estado completo del sistema
router.get("/ready", HealthController.getReadiness);

// Verificación de disponibilidad
router.get("/live", HealthController.getLiveness);

export default router;