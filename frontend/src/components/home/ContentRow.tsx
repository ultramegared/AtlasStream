/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: ContentRow.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Premium content row component.
 * ===============================================================
 */

import { useRef } from "react";

import {

    FaChevronLeft,
    FaChevronRight

} from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import ContentCard from "./ContentCard";

import contentService from "../../services/content.service";

interface ContentRowProps
{

    title: string;

}

function ContentRow({

    title

}: ContentRowProps)
{

    const contentList = contentService.getTrending();

    const rowRef = useRef<HTMLDivElement>(null);

    function scrollLeft()
    {

        rowRef.current?.scrollBy({

            left: -800,

            behavior: "smooth"

        });

    }

    function scrollRight()
    {

        rowRef.current?.scrollBy({

            left: 800,

            behavior: "smooth"

        });

    }

    return (

        <section
            className="content-section"
        >

            <div
                className="content-section__header"
            >

                <SectionTitle

                    title={title}

                />

                <div
                    className="content-section__controls"
                >

                    <button

                        className="content-section__button"

                        onClick={scrollLeft}

                        aria-label="Previous"

                    >

                        <FaChevronLeft />

                    </button>

                    <button

                        className="content-section__button"

                        onClick={scrollRight}

                        aria-label="Next"

                    >

                        <FaChevronRight />

                    </button>

                </div>

            </div>

            <div

                ref={rowRef}

                className="content-row"

            >

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