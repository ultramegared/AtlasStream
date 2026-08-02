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

function HeroBanner() {

    return (

        <section

            className="hero"

            style={{

                backgroundImage: `url(${heroBackground})`

            }}

        >

            <div className="hero__content">

                <span className="hero__badge">

                    Featured

                </span>

                <h1 className="hero__title">

                    Nebula Rising

                </h1>

                <p className="hero__description">

                    Humanity's last hope travels beyond the stars
                    to uncover the origin of an ancient signal.

                </p>

                <div className="hero__actions">

                    <button className="hero__button hero__button--primary">

                        ▶ Watch Now

                    </button>

                    <button className="hero__button hero__button--secondary">

                        + My List

                    </button>

                </div>

            </div>

        </section>

    );

}

export default HeroBanner;