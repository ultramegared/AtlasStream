/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: MobileMenu.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Responsive mobile side navigation menu.
 * ===============================================================
 */

import {
    FaTimes,
    FaHome,
    FaFilm,
    FaTv,
    FaHeart,
    FaGlobe,
    FaCog,
    FaUser
} from "react-icons/fa";

interface MobileMenuProps {

    open: boolean;

    onClose: () => void;

}

function MobileMenu({

    open,

    onClose

}: MobileMenuProps) {

    return (

        <>

            <div
                className={`mobile-overlay ${open ? "show" : ""}`}
                onClick={onClose}
            />

            <aside
                className={`mobile-menu ${open ? "open" : ""}`}
            >

                <div className="mobile-menu__header">

                    <h2>

                        AtlasStream

                    </h2>

                    <button
                        className="mobile-menu__close"
                        onClick={onClose}
                        aria-label="Close menu"
                    >

                        <FaTimes />

                    </button>

                </div>

                <div className="mobile-menu__profile">

                    <div className="mobile-menu__avatar">

                        U

                    </div>

                    <div>

                        <h3>

                            User

                        </h3>

                        <span>

                            Premium Member

                        </span>

                    </div>

                </div>

                <nav>

                    <ul className="mobile-menu__list">

                        <li onClick={onClose}>

                            <FaHome />

                            <span>

                                Home

                            </span>

                        </li>

                        <li onClick={onClose}>

                            <FaFilm />

                            <span>

                                Movies

                            </span>

                        </li>

                        <li onClick={onClose}>

                            <FaTv />

                            <span>

                                Series

                            </span>

                        </li>

                        <li onClick={onClose}>

                            <FaTv />

                            <span>

                                TV Live

                            </span>

                        </li>

                        <li onClick={onClose}>

                            <FaHeart />

                            <span>

                                My List

                            </span>

                        </li>

                        <li onClick={onClose}>

                            <FaGlobe />

                            <span>

                                Language

                            </span>

                        </li>

                        <li onClick={onClose}>

                            <FaCog />

                            <span>

                                Settings

                            </span>

                        </li>

                        <li onClick={onClose}>

                            <FaUser />

                            <span>

                                Profile

                            </span>

                        </li>

                    </ul>

                </nav>

            </aside>

        </>

    );

}

export default MobileMenu;