import React from "react";
import Navbar from "./Navbar";
import mouse from "../images/Mouse.png"
const Banner =() => {
    return(
        <section className="banner-section" >
            <div  className="banner-image">
                <div className="nav-placement">
                    <Navbar/>
                </div>
                <div className="index-page-banner-container">
                    <div className="banner-text">
                        <p className="banner-head-text">
                            Transform Your Idea Into Digital <span className="index-page-banner-experience-span">Experiences.</span>
                        </p>
                        <p className="banner-subhead-text">
                            At Sphiderass, we are dedicated to helping businesses thrive in the ever evolving digital landscape.
                        </p>
                        <p className="banner-button">
                            <button className="bn-one">
                                <span>Get Started</span>
                            </button>
                        </p>
                        <div className="banner-trust">
                            <div>
                                <img className="index-page-banner-mouse-icon" src={mouse} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner