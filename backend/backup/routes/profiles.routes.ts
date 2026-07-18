import { Router } from "express";
import ProfilesController from "../controllers/ProfilesController";

const router = Router();

// Obtener perfiles
router.get("/", ProfilesController.getAllProfiles);
router.get("/:id", ProfilesController.getProfileById);

// Crear perfil
router.post("/", ProfilesController.createProfile);

// Actualizar perfil
router.put("/:id", ProfilesController.updateProfile);

// Actualización parcial
router.patch("/:id", ProfilesController.patchProfile);

// Eliminar perfil
router.delete("/:id", ProfilesController.deleteProfile);

// Cambiar avatar
router.patch("/:id/avatar", ProfilesController.updateAvatar);

// Configuración del perfil
router.patch("/:id/settings", ProfilesController.updateSettings);

// Bloqueo infantil
router.patch("/:id/parental-control", ProfilesController.updateParentalControl);

// Idioma
router.patch("/:id/language", ProfilesController.updateLanguage);

export default router;