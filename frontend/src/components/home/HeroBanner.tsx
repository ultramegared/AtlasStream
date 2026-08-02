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

import heroBackground from "../../assets/images/hero-background.jpg";

function HeroBanner()
{

    return (

        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroBackground})`
            }}
        >

            <div className="hero__overlay">

                <div className="hero__content">

                    <span className="hero__badge">

                        FEATURED

                    </span>

                    <h1 className="hero__title">

                        Nebula Rising

                    </h1>

                    <div className="hero__meta">

                        <span>

                            ⭐ 8.9 IMDb

                        </span>

                        <span>

                            2026

                        </span>

                        <span>

                            2h 18m

                        </span>

                        <span>

                            HDR

                        </span>

                        <span>

                            4K

                        </span>

                    </div>

                    <p className="hero__description">

                        Humanity's last hope travels beyond the stars to uncover the origin of an ancient signal while fighting for the survival of civilization.

                    </p>

                    <div className="hero__genres">

                        <span>

                            Science Fiction

                        </span>

                        <span>

                            Adventure

                        </span>

                        <span>

                            Action

                        </span>

                    </div>

                    <div className="hero__actions">

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

    );

}

export default HeroBanner;