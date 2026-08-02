/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: content.service.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * Content service.
 * ===============================================================
 */

import placeholderPoster from "../assets/images/placeholder-poster.jpg";

import Content from "../types/Content";

class ContentService {

    public getTrending(): Content[] {

        return [

            {
                id: "1",
                title: "Nebula Rising",
                poster: placeholderPoster,
                year: 2025,
                rating: 9.4
            },
            {
                id: "2",
                title: "The Last Kingdom",
                poster: placeholderPoster,
                year: 2024,
                rating: 8.9
            },
            {
                id: "3",
                title: "Dark Horizon",
                poster: placeholderPoster,
                year: 2025,
                rating: 9.1
            },
            {
                id: "4",
                title: "Cyber City",
                poster: placeholderPoster,
                year: 2025,
                rating: 8.8
            }

        ];

    }

}

export default new ContentService();