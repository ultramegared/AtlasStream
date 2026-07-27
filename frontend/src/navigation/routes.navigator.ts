/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: routes.navigator.ts
 * Module: Navigation
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Registers and resolves application pages
 * for client-side navigation.
 * ----------------------------------------------------------------
 */

import Home from "../pages/home.page";
import Login from "../pages/login.page";
import Register from "../pages/register.page";
import Movies from "../pages/movies.page";
import Series from "../pages/series.page";
import LiveTv from "../pages/livetv.page";
import Search from "../pages/search.page";
import Favorites from "../pages/favorites.page";
import Profile from "../pages/profile.page";
import Settings from "../pages/settings.page";
import Player from "../pages/player.page";
import NotFound from "../pages/not-found.page";

import { ROUTES } from "../constants/routes.constants";
import type { RouteName } from "../constants/routes.constants";

/**
 * Represents a page renderer.
 */
export type PageComponent = () => string;

/**
 * Registered application routes.
 */
const routes: Record<string, PageComponent> = {
  [ROUTES.HOME]: Home,
  [ROUTES.AUTH]: Login,
  [ROUTES.MOVIES]: Movies,
  [ROUTES.SERIES]: Series,
  [ROUTES.LIVETV]: LiveTv,
  [ROUTES.SEARCH]: Search,
  [ROUTES.FAVORITES]: Favorites,
  [ROUTES.PROFILE]: Profile,
  [ROUTES.SETTINGS]: Settings,
  [ROUTES.PLAYER]: Player,
};

/**
 * Returns the page associated with a route.
 *
 * @param route Route name.
 * @returns Page renderer.
 */
export function getPage(
  route: RouteName | string
): PageComponent {
  return routes[route] ?? NotFound;
}

/**
 * Determines whether a route exists.
 *
 * @param route Route name.
 * @returns True if the route exists.
 */
export function hasRoute(
  route: RouteName | string
): boolean {
  return route in routes;
}