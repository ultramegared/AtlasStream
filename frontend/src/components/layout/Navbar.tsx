/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: Navbar.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Premium responsive navigation bar.
 * ===============================================================
 */

import {

    useEffect,
    useState

} from "react";

import {

    FaBars,
    FaBell,
    FaSearch

} from "react-icons/fa";

import Logo from "../common/Logo";
import MobileMenu from "./MobileMenu";

function Navbar()
{

    const [

        menuOpen,

        setMenuOpen

    ] = useState(false);

    const [

        scrolled,

        setScrolled

    ] = useState(false);

    const [

        profile,

        setProfile

    ] = useState("U");

    useEffect(

        () =>

        {

            function handleScroll()
            {

                setScrolled(

                    window.scrollY > 40

                );

            }

            window.addEventListener(

                "scroll",

                handleScroll

            );

            return () =>

                window.removeEventListener(

                    "scroll",

                    handleScroll

                );

        },

        []

    );

    useEffect(

        () =>

        {

            const activeProfile =

                localStorage.getItem("activeProfile");

            if (

                activeProfile &&

                activeProfile.trim() !== ""

            ) {

                setProfile(

                    activeProfile.charAt(0).toUpperCase()

                );

            }

        },

        []

    );

    return (

        <>

            <header

                className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}

            >

                <div

                    className="navbar__left"

                >

                    <Logo />

                    <nav>

                        <ul

                            className="navbar__menu"

                        >

                            <li className="active">

                                Home

                            </li>

                            <li>

                                Movies

                            </li>

                            <li>

                                Series

                            </li>

                            <li>

                                TV Live

                            </li>

                            <li>

                                My List

                            </li>

                        </ul>

                    </nav>

                </div>

                <div

                    className="navbar__right"

                >

                    <button

                        className="navbar__icon"

                        aria-label="Search"

                    >

                        <FaSearch />

                    </button>

                    <button

                        className="navbar__icon notification"

                        aria-label="Notifications"

                    >

                        <FaBell />

                        <span

                            className="notification__badge"

                        >

                            3

                        </span>

                    </button>

                    <button

                        className="navbar__profile"

                        aria-label="Profile"

                    >

                        {profile}

                    </button>

                    <button

                        className="navbar__hamburger"

                        aria-label="Open menu"

                        onClick={() => setMenuOpen(true)}

                    >

                        <FaBars />

                    </button>

                </div>

            </header>

            <MobileMenu

                open={menuOpen}

                onClose={() => setMenuOpen(false)}

            />

        </>

    );

}

export default Navbar;