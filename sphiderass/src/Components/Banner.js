import React from "react";
import Navbar from "./Navbar";
const Banner =() => {
    return(
        <section className="banner-section" >
            <div style={{backgroundImage: `url(Rectangle.png)`}} className="banner-image">
                <div className="nav-placement">
                    <Navbar/>
                </div>
                <div className="banner-text">
                    <p className="banner-head-text">
                        Transform Your Idea Into Digital Experiences.
                    </p>
                    <p className="banner-subhead-text">
                        At Sphiderass, we are dedicated to helping businesses thrive in the ever evolving digital landscape.
                    </p>
                    <p className="banner-button">
                        <button className="bn-one">
                           <span>Get Started</span>
                        </button>
                        <button className="bn-two">
                            <span> Learn More</span>
                        </button>
                    </p>
                    <div className="banner-trust">
                        <p>Trusted by 1000+ Business </p>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner