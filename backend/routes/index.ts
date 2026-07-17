import { Router } from "express";

import healthRoutes from "./health.routes";
import authRoutes from "./auth.routes";
import usersRoutes from "./users.routes";
import profilesRoutes from "./profiles.routes";
import contentRoutes from "./content.routes";
import categoriesRoutes from "./categories.routes";
import genresRoutes from "./genres.routes";
import favoritesRoutes from "./favorites.routes";
import historyRoutes from "./history.routes";
import continueWatchingRoutes from "./continueWatching.routes";
import subscriptionsRoutes from "./subscriptions.routes";
import devicesRoutes from "./devices.routes";
import reviewsRoutes from "./reviews.routes";
import searchRoutes from "./search.routes";
import notificationsRoutes from "./notifications.routes";
import adminRoutes from "./admin.routes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/profiles", profilesRoutes);
router.use("/content", contentRoutes);
router.use("/categories", categoriesRoutes);
router.use("/genres", genresRoutes);
router.use("/favorites", favoritesRoutes);
router.use("/history", historyRoutes);
router.use("/continue-watching", continueWatchingRoutes);
router.use("/subscriptions", subscriptionsRoutes);
router.use("/devices", devicesRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/search", searchRoutes);
router.use("/notifications", notificationsRoutes);
router.use("/admin", adminRoutes);

export default router;