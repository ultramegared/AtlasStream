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

import Content from "../types/Content";

class ContentService
{

    public getTrending(): Content[]
    {

        return [

            {

                id: "1",

                title: "Nebula Rising",

                poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",

                year: 2025,

                rating: 9.4

            },

            {

                id: "2",

                title: "The Last Kingdom",

                poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",

                year: 2024,

                rating: 8.9

            },

            {

                id: "3",

                title: "Dark Horizon",

                poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",

                year: 2025,

                rating: 9.1

            },

            {

                id: "4",

                title: "Cyber City",

                poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",

                year: 2025,

                rating: 8.8

            }

        ];

    }

}

export default new ContentService();