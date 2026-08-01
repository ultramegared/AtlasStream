/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: ContentRow.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Content row component.
 * ===============================================================
 */

import SectionTitle from "./SectionTitle";
import ContentCard from "./ContentCard";

import contentService from "../../services/content.service";

interface ContentRowProps {

    title: string;

}

function ContentRow({

    title

}: ContentRowProps) {

    const contentList = contentService.getTrending();

    return (

        <section>

            <SectionTitle

                title={title}

            />

            <div className="content-row">

                {

                    contentList.map(

                        (

                            content

                        ) => (

                            <ContentCard

                                key={content.id}

                                content={content}

                            />

                        )

                    )

                }

            </div>

        </section>

    );

}

export default ContentRow;