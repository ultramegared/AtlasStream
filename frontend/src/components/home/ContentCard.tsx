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

import {

    useNavigate

} from "react-router-dom";

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

    const navigate = useNavigate();

    function openDetails()
    {

        navigate(

            `/movies/${content.id}`

        );

    }

    return (

        <article

            className="content-card"

            onClick={openDetails}

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

                            onClick={(event) => {

                                event.stopPropagation();

                                navigate(`/movies/${content.id}`);

                            }}

                        >

                            <FaPlay />

                        </button>

                        <button

                            className="content-card__action"

                            aria-label="Favorite"

                            onClick={(event) => {

                                event.stopPropagation();

                            }}

                        >

                            <FaHeart />

                        </button>

                        <button

                            className="content-card__action"

                            aria-label="More Information"

                            onClick={(event) => {

                                event.stopPropagation();

                                openDetails();

                            }}

                        >

                            <FaInfoCircle />

                        </button>

                    </div>

                    <div
                        className="content-card__details"
                    >
                    
                    