/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: content.service.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * Mock content service.
 * ===============================================================
 */

import Content from "../types/Content";

class ContentService
{

    private readonly contents: Content[] = [

        {

            id: "1",

            title: "Nebula Rising",

            description: "Humanity's last hope travels beyond the stars to uncover the origin of an ancient signal while fighting for the survival of civilization.",

            poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",

            backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80",

            year: 2026,

            duration: "2h 18m",

            rating: 8.9,

            quality: "HDR",

            format: "4K",

            genres: [

                "Science Fiction",

                "Adventure",

                "Action"

            ],

            director: "James Carter",

            cast: [

                "Emma Stone",

                "Chris Evans",

                "Oscar Isaac"

            ],

            languages: [

                "English",

                "Spanish"

            ],

            subtitles: [

                "English",

                "Spanish",

                "Portuguese"

            ]

        },

        {

            id: "2",

            title: "Dark Origin",

            description: "A secret buried beneath the ocean awakens an ancient force capable of changing the future of mankind.",

            poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",

            backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1920&q=80",

            year: 2025,

            duration: "2h 05m",

            rating: 8.7,

            quality: "HDR",

            format: "4K",

            genres: [

                "Mystery",

                "Sci-Fi",

                "Thriller"

            ],

            director: "Sophia Wilson",

            cast: [

                "Scarlett Johansson",

                "Ryan Gosling",

                "Pedro Pascal"

            ],

            languages: [

                "English",

                "Spanish"

            ],

            subtitles: [

                "English",

                "Spanish",

                "Portuguese"

            ]

        },

        {

            id: "3",

            title: "Last Horizon",

            description: "The final colony on Mars fights to survive after losing all communication with Earth.",

            poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",

            backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",

            year: 2024,

            duration: "2h 11m",

            rating: 9.0,

            quality: "HDR",

            format: "4K",

            genres: [

                "Adventure",

                "Drama",

                "Sci-Fi"

            ],

            director: "Michael Brooks",

            cast: [

                "Tom Holland",

                "Zendaya",

                "Oscar Isaac"

            ],

            languages: [

                "English",

                "Spanish"

            ],

            subtitles: [

                "English",

                "Spanish",

                "Portuguese"

            ]

        },
        
                {

            id: "4",

            title: "Code Alpha",

            description: "A legendary hacker discovers an artificial intelligence hidden inside the world's largest network.",

            poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",

            backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",

            year: 2026,

            duration: "2h 02m",

            rating: 8.8,

            quality: "HDR",

            format: "4K",

            genres: [

                "Technology",

                "Action",

                "Thriller"

            ],

            director: "David Miller",

            cast: [

                "Keanu Reeves",

                "Ana de Armas",

                "John Boyega"

            ],

            languages: [

                "English",

                "Spanish"

            ],

            subtitles: [

                "English",

                "Spanish",

                "Portuguese"

            ]

        },

        {

            id: "5",

            title: "Eclipse Tomorrow",

            description: "An unexpected solar eclipse reveals a parallel world where history took a different path.",

            poster: "https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",

            backdrop: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",

            year: 2025,

            duration: "2h 15m",

            rating: 8.6,

            quality: "HDR",

            format: "4K",

            genres: [

                "Fantasy",

                "Adventure",

                "Sci-Fi"

            ],

            director: "Emily Johnson",

            cast: [

                "Florence Pugh",

                "Timothée Chalamet",

                "Pedro Pascal"

            ],

            languages: [

                "English",

                "Spanish"

            ],

            subtitles: [

                "English",

                "Spanish",

                "Portuguese"

            ]

        }

    ];

    public getTrending(): Content[]
    {

        return this.contents;

    }

    public getById(
        id: string
    ): Content | undefined
    {

        return this.contents.find(

            (

                content

            ) => content.id === id

        );

    }

}

export default new ContentService();