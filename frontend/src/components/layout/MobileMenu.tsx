/**
 * ===============================================================
 * Mobile Menu
 * ===============================================================
 */

interface Props {

    open: boolean;

    onClose: () => void;

}

function MobileMenu({

    open,

    onClose

}: Props) {

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

                    <h2>AtlasStream</h2>

                </div>

                <nav>

                    <ul>

                        <li>🏠 Home</li>

                        <li>🎬 Movies</li>

                        <li>📺 Series</li>

                        <li>📡 TV Live</li>

                        <li>❤️ My List</li>

                        <li>🌐 Language</li>

                        <li>⚙ Settings</li>

                        <li>👤 Profile</li>

                    </ul>

                </nav>

            </aside>

        </>

    );

}

export default MobileMenu;