/**
 * ----------------------------------------------------------------
 * AtlasStream Frontend
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * File: home.page.ts
 * Module: Pages
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Renders the AtlasStream home page including
 * the featured carousel and content sections.
 * ----------------------------------------------------------------
 */

import Header from "../components/header.component";
import Footer from "../components/footer.component";
import HeroCarousel from "../components/hero-carousel.component";
import ContentSection from "../components/content-section.component";

import { homeController } from "../controllers/home.controller";

import { CONFIG } from "../constants/config.constants";
import { TRANSLATIONS } from "../constants/translations.constants";

import { getLanguage } from "../utils/storage.utils";

/**
 * Renders the Home page.
 *
 * @returns HTML string.
 */
export default async function Home(): Promise<string> {
  const language =
    getLanguage() ??
    CONFIG.DEFAULT_LANGUAGE;

  const t = TRANSLATIONS[language];

  const home =
    await homeController.getHomeData();

  return `
    <main class="home">

      ${Header()}

      ${HeroCarousel(home.hero)}

      ${ContentSection({
        title: t.trending,
        items: home.trending
      })}

      ${ContentSection({
        title: t.movies,
        items: home.movies
      })}

      ${ContentSection({
        title: t.series,
        items: home.series
      })}

      ${ContentSection({
        title: t.continueWatching,
        items: home.continueWatching
      })}

      ${Footer()}

    </main>
  `;
}