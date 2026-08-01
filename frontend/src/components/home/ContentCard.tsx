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

interface ContentCardProps {

    title: string;

}

function ContentCard({

    title

}: ContentCardProps) {

    return (

        <article className="content-card">

            <div className="content-card__poster">

                Poster

            </div>

            <h3 className="content-card__title">

                {title}

            </h3>

        </article>

    );

}

export default ContentCard;