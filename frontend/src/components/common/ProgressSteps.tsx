/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: ProgressSteps.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Authentication progress steps component.
 * ===============================================================
 */

interface ProgressStepsProps {

    step: number;

    title: string;

}

function ProgressSteps({

    step,

    title

}: ProgressStepsProps) {

    return (

        <section className="progress-steps">

            <h2 className="progress-steps__title">

                {title}

            </h2>

            <div className="progress-steps__wrapper">

                {

                    [1, 2, 3, 4].map((item) => (

                        <div
                            key={item}
                            className={`
                                progress-steps__item
                                ${step >= item ? "active" : ""}
                            `}
                        />

                    ))

                }

            </div>

            <p className="progress-steps__counter">

                Paso {step} de 4

            </p>

            <div className="progress-steps__labels">

                <span className={step === 1 ? "active" : ""}>

                    Cuenta

                </span>

                <span className={step === 2 ? "active" : ""}>

                    Plan

                </span>

                <span className={step === 3 ? "active" : ""}>

                    Pago

                </span>

                <span className={step === 4 ? "active" : ""}>

                    Perfiles

                </span>

            </div>

        </section>

    );

}

export default ProgressSteps;