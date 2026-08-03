/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: DetailsPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Movie details page.
 * ===============================================================
 */

import {

    useParams

} from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import contentService from "../../services/content.service";

import "../../styles/details.css";

function DetailsPage()
{

    const {

        id

    } = useParams();

    const movie = contentService.getById(

        id ?? "1"

    );

    if (

        !movie

    )

    {

        return (

            <>

                <Navbar />

                <main
                    className="details"
                >

                    <h1>

                        Content not found

                    </h1>

                </main>

                <Footer />

            </>

        );

    }

    return (

        <>

            <Navbar />

            <main
                className="details"
            >

                <section

                    className="details__hero"

                    style={{

                        backgroundImage: `url(${movie.backdrop})`

                    }}

                >

                    <div
                        className="details__overlay"
                    >

                        <div
                            className="details__content"
                        >

                            <span
                                className="details__badge"
                            >

                                FEATURED

                            </span>

                            <h1
                                className="details__title"
                            >

                                {movie.title}

                            </h1>

                            <div
                                className="details__meta"
                            >

                                <span>

                                    ⭐ {movie.rating} IMDb

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
                                className="details__description"
                            >

                                {movie.description}

                            </p>

                            <div
                                className="details__genres"
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
                                className="details__actions"
                            >

                                <button
                                    className="details__button details__button--primary"
                                >

                                    ▶ Watch Now

                                </button>

                                <button
                                    className="details__button details__button--secondary"
                                >

                                    ❤ My List

                                </button>

                                <button
                                    className="details__button details__button--secondary"
                                >

                                    🎬 Trailer

                                </button>

                            </div>
                                                        <div
                                className="details__information"
                            >

                                <h2>

                                    Synopsis

                                </h2>

                                <p>

                                    {movie.description}

                                </p>

                            </div>

                            <div
                                className="details__specifications"
                            >

                                <div>

                                    <strong>

                                        Director

                                    </strong>

                                    <span>

                                        {movie.director}

                                    </span>

                                </div>

                                <div>

                                    <strong>

                                        Cast

                                    </strong>

                                    <span>

                                        {movie.cast.join(", ")}

                                    </span>

                                </div>

                                <div>

                                    <strong>

                                        Languages

                                    </strong>

                                    <span>

                                        {movie.languages.join(", ")}

                                    </span>

                                </div>

                                <div>

                                    <strong>

                                        Subtitles

                                    </strong>

                                    <span>

                                        {movie.subtitles.join(", ")}

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </>

    );

}

export default DetailsPage;
                            