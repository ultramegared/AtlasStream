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
    FaPlay,
    FaInfoCircle

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
                            aria-label="More Info"
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

                        </div>

                    </div>

                </div>

            </div>

        </article>

    );

}

export default ContentCard;