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

                description: "Humanity's last hope travels beyond the stars to uncover the origin of an ancient signal.",

                poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",

                backdrop: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",

                year: 2025,

                duration: "2h 18m",

                rating: 9.4,

                quality: "4K HDR",

                language: "EN",

                type: "Movie",

                genres: [

                    "Science Fiction",

                    "Adventure",

                    "Action"

                ]

            },

            {

                id: "2",

                title: "The Last Kingdom",

                description: "A legendary warrior fights to unite kingdoms during the Viking invasion.",

                poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",

                backdrop: "https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",

                year: 2024,

                duration: "1h 58m",

                rating: 8.9,

                quality: "4K",

                language: "EN",

                type: "Series",

                genres: [

                    "Drama",

                    "Action",

                    "History"

                ]

            },

            {

                id: "3",

                title: "Dark Horizon",

                description: "A mysterious object appears beyond the solar system threatening mankind.",

                poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",

                backdrop: "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",

                year: 2025,

                duration: "2h 05m",

                rating: 9.1,

                quality: "4K HDR",

                language: "EN",

                type: "Movie",

                genres: [

                    "Sci-Fi",

                    "Thriller",

                    "Adventure"

                ]

            },

            {

                id: "4",

                title: "Cyber City",

                description: "A cyber detective uncovers the biggest conspiracy in a futuristic metropolis.",

                poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",

                backdrop: "https://image.tmdb.org/t/p/original/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",

                year: 2025,

                duration: "2h 09m",

                rating: 8.8,

                quality: "Dolby Vision",

                language: "EN",

                type: "Movie",

                genres: [

                    "Cyberpunk",

                    "Action",

                    "Thriller"

                ]

            }

        ];

    }

}

export default new ContentService();