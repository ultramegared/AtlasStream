import { Router } from "express";
import DevicesController from "../controllers/DevicesController";

const router = Router();

/* ============================================================
   Dispositivos
============================================================ */

// Obtener todos los dispositivos de un usuario
router.get("/user/:userId", DevicesController.getUserDevices);

// Obtener un dispositivo por ID
router.get("/:id", DevicesController.getDeviceById);

// Registrar un nuevo dispositivo
router.post("/", DevicesController.registerDevice);

// Actualizar información de un dispositivo
router.put("/:id", DevicesController.updateDevice);

// Actualización parcial
router.patch("/:id", DevicesController.patchDevice);

// Marcar dispositivo como confiable
router.patch("/:id/trusted", DevicesController.setTrustedDevice);

// Desvincular un dispositivo
router.delete("/:id", DevicesController.removeDevice);

// Desvincular todos los dispositivos de un usuario
router.delete(
  "/user/:userId",
  DevicesController.removeAllDevices
);

// Cerrar sesión en un dispositivo
router.post("/:id/logout", DevicesController.logoutDevice);

// Cerrar sesión en todos los dispositivos
router.post(
  "/user/:userId/logout-all",
  DevicesController.logoutAllDevices
);

export default router;