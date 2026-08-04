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

import { Link, useNavigate } from "react-router-dom";

import {
    FaTimes,
    FaHome,
    FaFilm,
    FaTv,
    FaHeart,
    FaGlobe,
    FaCog,
    FaUser,
    FaUsers,
    FaSignOutAlt
} from "react-icons/fa";

import Logo from "../common/Logo";

interface MobileMenuProps {

    open: boolean;

    onClose: () => void;

}

function MobileMenu({

    open,

    onClose

}: MobileMenuProps) {

    const navigate = useNavigate();

    const profileName =

        localStorage.getItem("activeProfile") ||

        "User";

    function handleLogout() {

        localStorage.removeItem("activeProfile");

        onClose();

        navigate("/login");

    }

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

                    <Logo />

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

                        {profileName.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h3>

                            {profileName}

                        </h3>

                        <span>

                            Premium Member

                        </span>

                    </div>

                </div>

                <nav>

                    <ul className="mobile-menu__list">

                        <li>

                            <Link to="/home" onClick={onClose}>

                                <FaHome />

                                <span>

                                    Home

                                </span>

                            </Link>

                        </li>

                        <li>

                            <Link to="/movies" onClick={onClose}>

                                <FaFilm />

                                <span>

                                    Movies

                                </span>

                            </Link>

                        </li>

                        <li>

                            <Link to="/series" onClick={onClose}>

                                <FaTv />

                                <span>

                                    Series

                                </span>

                            </Link>

                        </li>

                        <li>

                            <Link to="/live" onClick={onClose}>

                                <FaTv />

                                <span>

                                    TV Live

                                </span>

                            </Link>

                        </li>

                        <li>

                            <Link to="/my-list" onClick={onClose}>

                                <FaHeart />

                                <span>

                                    My List

                                </span>

                            </Link>

                        </li>

                        <li>

                            <Link to="/profiles" onClick={onClose}>

                                <FaUsers />

                                <span>

                                    Cambiar perfil

                                </span>

                            </Link>

                        </li>

                        <li>

                            <Link to="/profiles/manage" onClick={onClose}>

                                <FaUser />

                                <span>

                                    Administrar perfiles

                                </span>

                            </Link>

                        </li>

                        <li>

                            <Link to="/settings" onClick={onClose}>

                                <FaCog />

                                <span>

                                    Configuración

                                </span>

                            </Link>

                        </li>

                        <li>

                            <Link to="/language" onClick={onClose}>

                                <FaGlobe />

                                <span>

                                    Idioma

                                </span>

                            </Link>

                        </li>

                        <li

                            onClick={handleLogout}

                        >

                            <FaSignOutAlt />

                            <span>

                                Cerrar sesión

                            </span>

                        </li>

                    </ul>

                </nav>

            </aside>

        </>

    );

}

export default MobileMenu;