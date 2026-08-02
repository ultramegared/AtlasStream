/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: featuredMovies.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * Featured movies mock data for Hero Banner.
 * ===============================================================
 */

export interface FeaturedMovie
{

    id: number;

    title: string;

    description: string;

    image: string;

    year: string;

    duration: string;

    rating: string;

    quality: string;

    format: string;

    genres: string[];

}

export const featuredMovies: FeaturedMovie[] = [

    {

        id: 1,

        title: "Nebula Rising",

        description: "Humanity's last hope travels beyond the stars to uncover the origin of an ancient signal while fighting for the survival of civilization.",

        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80",

        year: "2026",

        duration: "2h 18m",

        rating: "8.9 IMDb",

        quality: "HDR",

        format: "4K",

        genres: [

            "Science Fiction",

            "Adventure",

            "Action"

        ]

    },

    {

        id: 2,

        title: "Dark Origin",

        description: "A secret buried beneath the ocean awakens an ancient force capable of changing the future of mankind.",

        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1920&q=80",

        year: "2025",

        duration: "2h 05m",

        rating: "8.7 IMDb",

        quality: "HDR",

        format: "4K",

        genres: [

            "Mystery",

            "Sci-Fi",

            "Thriller"

        ]

    },

    {

        id: 3,

        title: "Last Horizon",

        description: "The final colony on Mars fights to survive after losing all communication with Earth.",

        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",

        year: "2024",

        duration: "2h 11m",

        rating: "9.0 IMDb",

        quality: "HDR",

        format: "4K",

        genres: [

            "Adventure",

            "Drama",

            "Sci-Fi"

        ]

    },

    {

        id: 4,

        title: "Code Alpha",

        description: "A legendary hacker discovers an artificial intelligence hidden inside the world's largest network.",

        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80",

        year: "2026",

        duration: "2h 02m",

        rating: "8.8 IMDb",

        quality: "HDR",

        format: "4K",

        genres: [

            "Technology",

            "Action",

            "Thriller"

        ]

    },

    {

        id: 5,

        title: "Eclipse Tomorrow",

        description: "An unexpected solar eclipse reveals a parallel world where history took a different path.",

        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1920&q=80",

        year: "2025",

        duration: "2h 15m",

        rating: "8.6 IMDb",

        quality: "HDR",

        format: "4K",

        genres: [

            "Fantasy",

            "Adventure",

            "Sci-Fi"

        ]

    }

];