/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: HeroBanner.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Premium hero banner component.
 * ===============================================================
 */

import {

    useEffect,
    useState

} from "react";

import {

    FaInfoCircle,
    FaPlay

} from "react-icons/fa";

import { featuredMovies } from "../../data/featuredMovies";

function HeroBanner()
{

    const [

        currentMovie,

        setCurrentMovie

    ] = useState(0);

    useEffect(

        () =>

        {

            const interval = setInterval(

                () =>

                    setCurrentMovie(

                        (

                            previous

                        ) =>

                            (

                                previous + 1

                            ) % featuredMovies.length

                    ),

                7000

            );

            return () => clearInterval(interval);

        },

        []

    );

    const movie = featuredMovies[currentMovie];

    return (

        <section

            className="hero"

            style={{

                backgroundImage: `url(${movie.image})`

            }}

        >

            <div className="hero__overlay">

                <div className="hero__content">

                    <span

                        className="hero__badge"

                    >

                        FEATURED

                    </span>

                    <h1

                        className="hero__title"

                    >

                        {movie.title}

                    </h1>

                    <div

                        className="hero__meta"

                    >

                        <span>

                            ⭐ {movie.rating}

                        </span>

                        <span>

                            {movie.year}

                        </span>

                        <span>

                            {movie.duration}

                        </span>

                        <span>

                            {movie.quality}

                        </span>

                        <span>

                            {movie.format}

                        </span>

                    </div>

                    <p

                        className="hero__description"

                    >

                        {movie.description}

                    </p>

                    <div

                        className="hero__genres"

                    >

                        {

                            movie.genres.map(

                                (

                                    genre

                                ) => (

                                    <span

                                        key={genre}

                                    >

                                        {genre}

                                    </span>

                                )

                            )

                        }

                    </div>

                    <div

                        className="hero__actions"

                    >

                        <button

                            className="hero__button hero__button--primary"

                        >

                            <FaPlay />

                            <span>

                                Watch Now

                            </span>

                        </button>

                        <button

                            className="hero__button hero__button--secondary"

                        >

                            <FaInfoCircle />

                            <span>

                                More Info

                            </span>

                        </button>

                    </div>
                                        <div

                        className="hero__slider"

                    >

                        {

                            featuredMovies.map(

                                (

                                    _,

                                    index

                                ) => (

                                    <button

                                        key={index}

                                        className={`hero__dot ${currentMovie === index ? "hero__dot--active" : ""}`}

                                        onClick={() => setCurrentMovie(index)}

                                        aria-label={`Go to slide ${index + 1}`}

                                    />

                                )

                            )

                        }

                    </div>

                    <div

                        className="hero__progress"

                    >

                        <div

                            key={currentMovie}

                            className="hero__progress-bar"

                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default HeroBanner;