import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion"
import "../CSS/IndexpageCss/indexpageservicetwo.scss"


const Servicestwo = () => {

    const { theme } = useTheme()

    const ref = useRef(null)
    const [sect_one, setSect_one] = useState(false)
    const [sect_two, setSect_two] = useState(false)
    const [sect_three, setSect_three] = useState(false)
    const [sect_four, setSect_four] = useState(false)

    const isInView = useInView(ref, { once: true })

    useEffect(() => {

        if (isInView) {
            setSect_one(true)
        }
        else {
            setSect_one(false)
        }
    }, [isInView]);

    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, { once: true })

    useEffect(() => {
        if (isInView2) {
            setSect_two(true)
        }
        else {
            setSect_two(false)
        }
    }, [isInView2]);


    const ref3 = useRef(null)
    const isInView3 = useInView(ref3, { once: true })

    useEffect(() => {
        if (isInView3) {
            setSect_three(true)
        }
        else {
            setSect_three(false)
        }
    }, [isInView3]);


    const ref4 = useRef(null)
    const isInView4 = useInView(ref4, { once: true })

    useEffect(() => {
        if (isInView4) {
            setSect_four(true)
        }
        else {
            setSect_four(false)
        }
    }, [isInView4]);
    return (
        <section
            className={`index-page-services-two-section ${theme}`}
        >
            <div className={`page-width  ${theme}`}>
                <div className={`learn index-page-services-two-section-header ${theme}`}>
                    <h1>
                        LEARN WITH SPHIDERASS
                    </h1>
                </div>
                <section
                    ref={ref}
                    className="services">
                    <div className={`service-description ${theme}`}>
                        <p className={`sd-text ${theme}`}>
                            <h2>
                                UI/UX DESIGN
                            </h2>
                            <p>
                                In the realm of e-learning, where the digital experience
                                is paramount, SphiderAss excels in crafting exceptional
                                UI/UX solutions tailored specifically for educational platforms.
                            </p>
                        </p>
                        <p className={sect_one ? "sd-button-active" : "sd-button"}>
                            <button>Learn More</button>
                        </p>
                    </div>
                    <div className="service-banner">
                        <div className="sb-base">

                        </div>
                        <div className={sect_one ? "sb-image-active" : "sb-image"}>
                            <img src="img7.webp" />
                        </div>
                    </div>
                </section>
                <section
                    ref={ref2}
                    className="services">

                    <div className="service-banner">
                        <div className="sb-base-left">

                        </div>
                        <div className={sect_two ? "sb-image-left-active" : "sb-image-left"}>
                            <img src="img8.webp" />
                        </div>
                    </div>
                    <div className={`service-description ${theme}`}>
                        <p className={`sd-text ${theme}`}>
                            <h2>
                                FRONT END DEV
                            </h2>
                            <p>
                                We are dedicated to presenting your educational ideas
                                to the world in the most captivating and appealing fashion
                                possible through our front-end development expertise.
                            </p>
                        </p>
                        <p className={sect_two ? "sd-button-left-active" : "sd-button-left"}>
                            <button>Learn More</button>
                        </p>
                    </div>
                </section>

            </div>
        </section>
    )
}
export default Servicestwo