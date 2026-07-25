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

import Content, { ContentData } from "../models/Content";

class ContentService {
  /**
   * Obtiene todo el contenido disponible.
   */
  public getAll(): Content[] {
    const contents: ContentData[] = [
      {
        id: 1,
        title: "John Wick",
        description: "Película de acción",
        type: "movie",
        category: "Acción",
        poster: "/images/johnwick.jpg",
        video: "/videos/johnwick.mp4",
        year: 2023,
        duration: 169,
        rating: 9.2,
        isPremium: true,
      },
      {
        id: 2,
        title: "Tom y Jerry",
        description: "Serie clásica",
        type: "cartoon",
        category: "Infantil",
        poster: "/images/tomjerry.jpg",
        video: "/videos/tomjerry.mp4",
        year: 1998,
        duration: 25,
        rating: 9.8,
        isPremium: false,
      },
    ];

    return contents.map((item) => new Content(item));
  }
}

export default new ContentService();