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

import {

    Navigation

} from "swiper/modules";

import {

    Swiper,
    SwiperSlide

} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

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

            </div>

            <Swiper

                modules={[

                    Navigation

                ]}

                navigation

                spaceBetween={24}

                slidesPerView={2}

                breakpoints={{

                    640: {

                        slidesPerView: 3

                    },

                    900: {

                        slidesPerView: 4

                    },

                    1200: {

                        slidesPerView: 5

                    },

                    1600: {

                        slidesPerView: 6

                    }

                }}

                className="content-row"

            >

                {

                    contentList.map(

                        (

                            content

                        ) => (

                            <SwiperSlide

                                key={content.id}

                            >
                            
                                                            <ContentCard

                                    content={content}

                                />

                            </SwiperSlide>

                        )

                    )

                }

            </Swiper>

        </section>

    );

}

export default ContentRow;