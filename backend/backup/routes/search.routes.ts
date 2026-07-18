import { Router } from "express";
import SearchController from "../controllers/SearchController";

const router = Router();

/* ============================================================
   Búsquedas
============================================================ */

// Búsqueda global
router.get("/", SearchController.search);

// Buscar por título
router.get("/title/:title", SearchController.searchByTitle);

// Buscar por actor
router.get("/actor/:actor", SearchController.searchByActor);

// Buscar por director
router.get("/director/:director", SearchController.searchByDirector);

// Buscar por género
router.get("/genre/:genreId", SearchController.searchByGenre);

// Buscar por categoría
router.get("/category/:categoryId", SearchController.searchByCategory);

// Buscar por estudio
router.get("/studio/:studioId", SearchController.searchByStudio);

// Buscar por país
router.get("/country/:countryId", SearchController.searchByCountry);

// Buscar por idioma
router.get("/language/:languageId", SearchController.searchByLanguage);

// Buscar por año de lanzamiento
router.get("/year/:year", SearchController.searchByYear);

// Obtener búsquedas populares
router.get("/trending", SearchController.getTrendingSearches);

// Obtener búsquedas recientes de un perfil
router.get(
  "/profile/:profileId/recent",
  SearchController.getRecentSearches
);

// Guardar una búsqueda
router.post("/history", SearchController.saveSearch);

// Eliminar historial de búsquedas
router.delete(
  "/profile/:profileId/history",
  SearchController.clearSearchHistory
);

export default router;