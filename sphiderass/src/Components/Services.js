import React, { useRef, useEffect, useState } from "react";
import { useTheme } from '../Context/ThemeContext'
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion"
import "../CSS/IndexpageCss/indexpageservices.scss"

const Services = () => {
    const { theme } = useTheme();

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
        <section className={`index-page-services-section ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className={`page-width ${theme}`}>


                <section
                    ref={ref}
                    className="services">
                    <div className="service-description">
                        <p className={`sd-text ${theme}`}>
                            <h2>
                                BLOCKCHAIN DEVELOPMENT
                            </h2>
                            <p>
                                In the rapidly evolving landscape of blockchain
                                technology,sphiderass stands as a beacon of
                                expertise and innovation.
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
                            <img src="img1.webp" />
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
                            <img src="img2.webp" />
                        </div>
                    </div>
                    <div className="service-description">
                        <p className={`sd-text ${theme}`}>
                            <h2>
                                DASHBOARD ANALYTICS
                            </h2>
                            <p>
                                In the rapidly evolving landscape of blockchain
                                technology,sphiderass stands as a beacon of
                                expertise and innovation.
                            </p>
                        </p>
                        <p className={sect_two ? "sd-button-left-active" : "sd-button-left"}>
                            <button>Learn More</button>
                        </p>
                    </div>
                </section>
                <section className={`services-footer ${theme}`}>
                    <div className="svf-section">
                        <div className="svf" >
                            <p className="svf-image">
                                <img src="img5.webp" />
                            </p>
                            <p className={`svf-text ${theme}`}>
                                Increase you online visibility and reach your target with our expert
                                digital marketing services
                            </p>
                        </div>
                        <div className="svf">
                            <p className="svf-image">
                                <img src="img6.webp" />
                            </p>
                            <p className={`svf-text ${theme}`}>
                                Create virtually stunning designs that captivate your audience,
                                reach your target audience with unique design
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default Services