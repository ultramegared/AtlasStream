/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Servicio para gestionar el contenido multimedia.
 * ----------------------------------------------------------------
 */

import Content, { ContentData } from "../models/content.model";

class ContentService {
  /**
   * Obtiene todo el contenido disponible.
   *
   * @returns Lista de contenido multimedia.
   */
  public getAll(): Content[] {
    const contents: ContentData[] = [
      {
        id: 1,
        title: "John Wick",
        description: "Película de acción",
        type: "movie",
        category: "Acción",
        year: 2023,
        duration: 169,
        rating: 9.2,
        poster: "/images/johnwick.jpg",
        video: "/videos/johnwick.mp4",
        isPremium: true,
      },
      {
        id: 2,
        title: "Tom y Jerry",
        description: "Serie clásica",
        type: "cartoon",
        category: "Infantil",
        year: 1998,
        duration: 25,
        rating: 9.8,
        poster: "/images/tomjerry.jpg",
        video: "/videos/tomjerry.mp4",
        isPremium: false,
      },
    ];

    return contents.map((item) => new Content(item));
  }
}

export default new ContentService();