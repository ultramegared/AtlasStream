import { Router } from "express";
import ContentController from "../controllers/ContentController";

const router = Router();

/* ============================================================
   Catálogo
============================================================ */

router.get("/", ContentController.getAllContent);
router.get("/:id", ContentController.getContentById);

/* ============================================================
   Tipos de contenido
============================================================ */

router.get("/movies/all", ContentController.getMovies);
router.get("/series/all", ContentController.getSeries);
router.get("/live-tv/all", ContentController.getLiveTV);
router.get("/cartoons/all", ContentController.getCartoons);

/* ============================================================
   Destacados
============================================================ */

router.get("/featured", ContentController.getFeatured);
router.get("/trending", ContentController.getTrending);
router.get("/popular", ContentController.getPopular);
router.get("/recommended", ContentController.getRecommended);
router.get("/new-releases", ContentController.getNewReleases);

/* ============================================================
   Filtros
============================================================ */

router.get("/category/:categoryId", ContentController.getByCategory);
router.get("/genre/:genreId", ContentController.getByGenre);
router.get("/language/:languageId", ContentController.getByLanguage);
router.get("/country/:countryId", ContentController.getByCountry);
router.get("/studio/:studioId", ContentController.getByStudio);
router.get("/director/:directorId", ContentController.getByDirector);
router.get("/actor/:actorId", ContentController.getByActor);

/* ============================================================
   Temporadas y episodios
============================================================ */

router.get("/:id/seasons", ContentController.getSeasons);
router.get("/:id/seasons/:seasonId", ContentController.getSeason);
router.get("/:id/seasons/:seasonId/episodes", ContentController.getEpisodes);
router.get("/:id/seasons/:seasonId/episodes/:episodeId", ContentController.getEpisode);

/* ============================================================
   Administración
============================================================ */

router.post("/", ContentController.createContent);
router.put("/:id", ContentController.updateContent);
router.patch("/:id", ContentController.patchContent);
router.delete("/:id", ContentController.deleteContent);

export default router;