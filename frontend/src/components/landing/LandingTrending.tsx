/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingTrending.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Trending content section.
 * ===============================================================
 */

function LandingTrending() {

    return (

        <section className="landing-trending">

            <div className="landing-section__header">

                <h2>

                    Tendencias de hoy

                </h2>

                <p>

                    Descubre lo más visto por nuestros usuarios.

                </p>

            </div>

            <div className="landing-trending__grid">

                <article className="trending-card">

                    <img
                        src="/images/demo/movie1.jpg"
                        alt="Movie 1"
                    />

                    <div className="trending-card__info">

                        <h3>

                            Dune

                        </h3>

                        <span>

                            Ciencia ficción

                        </span>

                    </div>

                </article>

                <article className="trending-card">

                    <img
                        src="/images/demo/movie2.jpg"
                        alt="Movie 2"
                    />

                    <div className="trending-card__info">

                        <h3>

                            The Batman

                        </h3>

                        <span>

                            Acción

                        </span>

                    </div>

                </article>

                <article className="trending-card">

                    <img
                        src="/images/demo/movie3.jpg"
                        alt="Movie 3"
                    />

                    <div className="trending-card__info">

                        <h3>

                            Wednesday

                        </h3>

                        <span>

                            Serie

                        </span>

                    </div>

                </article>

                <article className="trending-card">

                    <img
                        src="/images/demo/movie4.jpg"
                        alt="Movie 4"
                    />

                    <div className="trending-card__info">

                        <h3>

                            Interstellar

                        </h3>

                        <span>

                            Drama

                        </span>

                    </div>

                </article>

            </div>

        </section>

    );

}

export default LandingTrending;