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

            description:
                "Humanity's last hope travels beyond the stars to uncover the origin of an ancient signal while fighting for the survival of civilization.",

            poster:
                "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",

            backdrop:
                "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80",

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