import React, {useRef, useEffect, useState} from "react";
import {motion, useInView, useAnimation, useIsPresent} from "framer-motion"


const Services = () =>{
    const ref = useRef(null)
    const [sect_one, setSect_one]  = useState(false)
    const [sect_two,setSect_two] = useState(false)
    const [sect_three, setSect_three] = useState(false)
    const [sect_four,setSect_four] = useState(false)

    const isInView = useInView(ref, )

    useEffect(() =>{

        if (isInView){
            setSect_one(true)
        }
        else {
            setSect_one(false)
        }
    },[isInView]);

    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, )

    useEffect(() =>{
        if (isInView2){
            setSect_two(true)
        }
        else {
            setSect_two(false)
        }
    },[isInView2]);


    const ref3 = useRef(null)
    const isInView3 = useInView(ref3, )

    useEffect(() =>{
        if (isInView3){
            setSect_three(true)
        }
        else{
            setSect_three(false)
        }
    },[isInView3]);


    const ref4 = useRef(null)
    const isInView4 = useInView(ref4 )

    useEffect(() =>{
        if (isInView4){
            setSect_four(true)
        }
        else {
            setSect_four(false)
        }
    },[isInView4]);
     return(
         <section
                >
            <div className="page-width">
                <section
                    ref={ref}
                    className="services">
                    <div className="service-description">
                        <p className="sd-text">
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
                            <img src="img1.webp"/>
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
                            <img src="img2.webp"/>
                        </div>
                    </div>
                    <div className="service-description">
                        <p className="sd-text">
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
                {/*
                <section
                    ref={ref3}
                    className="services">
                    <div className="service-description">
                        <p className="sd-text">
                            <h2>
                                E-LEARNING & INTERNSHIP
                            </h2>
                            <p>
                                In the realm of education and professional
                                development, sphiderass offers a comprehensive
                                i suite of e-learning solutions.
                            </p>
                        </p>
                        <p className={sect_three ? "sd-button-active" : "sd-button"}>
                            <button>Learn More</button>
                        </p>
                    </div>
                    <div className="service-banner">
                        <div className="sb-base">

                        </div>
                        <div className={sect_three ? "sb-image-active" : "sb-image"}>
                            <img src="img3.webp"/>
                        </div>
                    </div>
                </section>
                <section
                    ref={ref4}
                    className="services">
                    <div className="service-banner">
                        <div className="sb-base-left">

                        </div>
                        <div className={sect_four ? "sb-image-left-active" : "sb-image-left"}>
                            <img src="img4.webp"/>
                        </div>
                    </div>
                    <div className="service-description">
                        <p className="sd-text">
                            <h2>
                                AR & VR SOLUTIONS
                            </h2>
                            <p>
                                At sphiderass, we believe in understanding organisations and their visions
                                . our ar/vr solutions are tailor made to help our clients breath lives into
                                their dreams and present their ideas to the world
                            </p>
                        </p>
                        <p className={sect_four ? "sd-button-left-active" : "sd-button-left"}>
                            <button>Learn More</button>
                        </p>
                    </div>
                </section>
                */}
                <section className="services-footer">
                    <div className="svf-section">
                        <div className="svf" >
                            <p className="svf-image">
                                <img src="img5.webp"/>
                            </p>
                            <p className="svf-text">
                                Increase you online visibility and reach your target with our expert
                                digital marketing services
                            </p>
                        </div>
                        <div className="svf">
                            <p className="svf-image">
                                <img src="img6.webp"/>
                            </p>
                            <p className="svf-text">
                                Create virtually stunning designs that captivate your audience,
                                reach your target audience with unique design
                            </p>
                        </div>
                    </div>
                    <div className="see-more">
                        <p>
                            See More
                        </p>
                    </div>
                </section>
            </div>
         </section>
     )
}
export default Services