/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: HeroBanner.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Home hero banner component.
 * ===============================================================
 */

import {

    Autoplay,
    EffectFade,
    Pagination

} from "swiper/modules";

import {

    Swiper,
    SwiperSlide

} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import {

    featuredMovies

} from "../../data/featuredMovies";

function HeroBanner()
{

    return (

        <Swiper

            className="hero"

            modules={[

                Autoplay,

                EffectFade,

                Pagination

            ]}

            slidesPerView={1}

            spaceBetween={0}

            effect="fade"

            loop={true}

            autoplay={{

                delay: 8000,

                disableOnInteraction: false

            }}

            pagination={{

                clickable: true

            }}

        >

            {

                featuredMovies.map(

                    (

                        movie

                    ) => (

                        <SwiperSlide

                            key={movie.id}

                        >

                            <section

                                className="hero"

                                style={{

                                    backgroundImage: `url(${movie.image})`

                                }}

                            >

                                <div

                                    className="hero__overlay"

                                >

                                    <div

                                        className="hero__content"

                                    >

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

                                                ▶ Watch Now

                                            </button>

                                            <button

                                                className="hero__button hero__button--secondary"

                                            >

                                                ℹ More Info

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </section>

                        </SwiperSlide>

                    )

                )

            }

        </Swiper>

    );

}

export default HeroBanner;