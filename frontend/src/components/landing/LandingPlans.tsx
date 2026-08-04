/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingPlans.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Subscription plans preview section.
 * ===============================================================
 */

function LandingPlans() {

    return (

        <section className="landing-plans">

            <div className="landing-section__header">

                <h2>

                    Elige el plan ideal para ti

                </h2>

                <p>

                    Todos los planes incluyen acceso ilimitado al catálogo de AtlasStream.

                </p>

            </div>

            <div className="landing-plans__table">

                <table>

                    <thead>

                        <tr>

                            <th>Características</th>

                            <th>Basic</th>

                            <th>Platino ⭐</th>

                            <th>Premium 👑</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>Perfiles</td>

                            <td>2</td>

                            <td>3</td>

                            <td>4</td>

                        </tr>

                        <tr>

                            <td>Reproducciones</td>

                            <td>1</td>

                            <td>2</td>

                            <td>3</td>

                        </tr>

                        <tr>

                            <td>Calidad</td>

                            <td>Full HD</td>

                            <td>4K HDR</td>

                            <td>4K HDR</td>

                        </tr>

                        <tr>

                            <td>Dolby Vision</td>

                            <td>--</td>

                            <td>✔</td>

                            <td>✔</td>

                        </tr>

                        <tr>

                            <td>Dolby Atmos</td>

                            <td>--</td>

                            <td>--</td>

                            <td>✔</td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <div className="landing-plans__buttons">

                <button className="btn-primary">

                    Crear cuenta

                </button>

            </div>

        </section>

    );

}

export default LandingPlans;