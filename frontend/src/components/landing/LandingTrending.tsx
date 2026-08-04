/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingTrending.tsx
 * Module: Frontend
 * ===============================================================
 */

import "../../styles/landing.css";

const movies = [

    {
        title: "Dune",
        genre: "Ciencia ficción",
        image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
    },

    {
        title: "The Batman",
        genre: "Acción",
        image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },

    {
        title: "Wednesday",
        genre: "Serie",
        image: "https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg"
    },

    {
        title: "Interstellar",
        genre: "Drama",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    }

];

function LandingTrending() {

    return (

        <section
            id="movies"
            className="landing-trending"
        >

            <h2>

                Tendencias de hoy

            </h2>

            <p>

                Descubre lo más visto por nuestros usuarios.

            </p>

            <div className="landing-trending__grid">

                {

                    movies.map((movie) => (

                        <article
                            key={movie.title}
                            className="landing-movie-card"
                        >

                            <img
                                src={movie.image}
                                alt={movie.title}
                            />

                            <div className="landing-movie-card__info">

                                <h3>

                                    {movie.title}

                                </h3>

                                <span>

                                    {movie.genre}

                                </span>

                            </div>

                        </article>

                    ))

                }

            </div>

        </section>

    );

}

export default LandingTrending;