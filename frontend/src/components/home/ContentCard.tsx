/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: ContentCard.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Premium content card component.
 * ===============================================================
 */

import {

    FaHeart,
    FaInfoCircle,
    FaPlay

} from "react-icons/fa";

import Content from "../../types/Content";

import "./ContentCard.css";

interface ContentCardProps
{

    content: Content;

}

function ContentCard({

    content

}: ContentCardProps)
{

    return (

        <article
            className="content-card"
        >

            <div
                className="content-card__image"
            >

                <img

                    className="content-card__poster"

                    src={content.poster}

                    alt={content.title}

                />

                <div
                    className="content-card__overlay"
                >

                    <div
                        className="content-card__buttons"
                    >

                        <button
                            className="content-card__action content-card__action--play"
                            aria-label="Play"
                        >

                            <FaPlay />

                        </button>

                        <button
                            className="content-card__action"
                            aria-label="Favorite"
                        >

                            <FaHeart />

                        </button>

                        <button
                            className="content-card__action"
                            aria-label="More Information"
                        >

                            <FaInfoCircle />

                        </button>

                    </div>

                    <div
                        className="content-card__details"
                    >

                        <h3
                            className="content-card__title"
                        >

                            {content.title}

                        </h3>

                        <div
                            className="content-card__meta"
                        >

                            <span>

                                ⭐ {content.rating}

                            </span>

                            <span>

                                {content.year}

                            </span>

                            <span>

                                {content.duration}

                            </span>

                        </div>

                        <div
                            className="content-card__badges"
                        >

                            <span>

                                {content.type}

                            </span>

                            <span>

                                {content.quality}

                            </span>

                            <span>

                                {content.language}

                            </span>

                        </div>

                        <p
                            className="content-card__description"
                        >

                            {content.description}

                        </p>

                        <div
                            className="content-card__genres"
                        >

                            {

                                content.genres.map(

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

                    </div>

                </div>

            </div>

        </article>

    );

}

export default ContentCard;