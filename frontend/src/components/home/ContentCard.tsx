/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: ContentCard.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Content card component.
 * ===============================================================
 */

import Content from "../../types/Content";
import "./ContentCard.css";

interface ContentCardProps {

    content: Content;

}

function ContentCard({

    content

}: ContentCardProps) {

    return (

        <article className="content-card">

            <img

                className="content-card__poster"

                src={content.poster}

                alt={content.title}

            />

            <div className="content-card__info">

                <h3 className="content-card__title">

                    {content.title}

                </h3>

                <div className="content-card__meta">

                    <span>

                        {content.year}

                    </span>

                    <span>

                        ⭐ {content.rating}

                    </span>

                </div>

            </div>

        </article>

    );

}

export default ContentCard;