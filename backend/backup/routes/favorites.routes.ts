import { Router } from "express";
import FavoritesController from "../controllers/FavoritesController";

const router = Router();

/* ============================================================
   Favoritos
============================================================ */

// Obtener favoritos de un perfil
router.get("/profile/:profileId", FavoritesController.getFavorites);

// Verificar si un contenido es favorito
router.get(
  "/profile/:profileId/content/:contentId",
  FavoritesController.isFavorite
);

// Agregar contenido a favoritos
router.post("/", FavoritesController.addFavorite);

// Eliminar contenido de favoritos
router.delete(
  "/profile/:profileId/content/:contentId",
  FavoritesController.removeFavorite
);

// Eliminar todos los favoritos del perfil
router.delete(
  "/profile/:profileId",
  FavoritesController.clearFavorites
);

// Obtener cantidad de favoritos
router.get(
  "/profile/:profileId/count",
  FavoritesController.getFavoritesCount
);

export default router;