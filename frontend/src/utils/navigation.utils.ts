/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: navigation.utils.ts
 * Module: Utils
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Provides navigation utility functions used throughout
 * the AtlasStream frontend.
 * ----------------------------------------------------------------
 */

import { ROUTES } from "../constants/routes.constants";

type RenderFunction = (page: string) => void;

/**
 * Navigates to the specified page.
 *
 * @param render Application render function.
 * @param page Route name.
 */
export function navigate(
  render: RenderFunction,
  page: string
): void {
  render(page);
}

/**
 * Navigates to the Home page.
 */
export function goHome(render: RenderFunction): void {
  render(ROUTES.HOME);
}

/**
 * Navigates to the Login page.
 */
export function goLogin(render: RenderFunction): void {
  render(ROUTES.AUTH);
}

/**
 * Navigates to the Register page.
 */
export function goRegister(render: RenderFunction): void {
  render(ROUTES.AUTH);
}

/**
 * Navigates to the Profile page.
 */
export function goProfile(render: RenderFunction): void {
  render(ROUTES.PROFILE);
}

/**
 * Navigates to the Movies page.
 */
export function goMovies(render: RenderFunction): void {
  render(ROUTES.MOVIES);
}

/**
 * Navigates to the Series page.
 */
export function goSeries(render: RenderFunction): void {
  render(ROUTES.SERIES);
}

/**
 * Navigates to the Live TV page.
 */
export function goLiveTV(render: RenderFunction): void {
  render(ROUTES.LIVETV);
}

/**
 * Navigates to the Favorites page.
 */
export function goFavorites(render: RenderFunction): void {
  render(ROUTES.FAVORITES);
}

/**
 * Navigates to the Search page.
 */
export function goSearch(render: RenderFunction): void {
  render(ROUTES.SEARCH);
}

/**
 * Navigates to the Settings page.
 */
export function goSettings(render: RenderFunction): void {
  render(ROUTES.SETTINGS);
}

/**
 * Navigates to the Player page.
 */
export function goPlayer(render: RenderFunction): void {
  render(ROUTES.PLAYER);
}