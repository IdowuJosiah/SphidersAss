import React from "react";
import Navbar from "./Navbar";
import mouse from "../images/Mouse.png"
import { useTheme } from '../Context/ThemeContext'



const Banner = () => {
    const { theme } = useTheme();

    return (
        <section className={`banner-section ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className={`banner-image ${theme}`}>
                <div className="nav-placement">
                    <Navbar />
                </div>
                <div className={`index-page-banner-container ${theme}`}>
                    <div className="banner-text">
                        <p className={`banner-subhead-text ${theme}`}>
                            Transform Your Idea Into Digital <span className="index-page-banner-experience-span">Experiences.</span>
                        </p>
                        <p className={`banner-subhead-text ${theme}`}>
                            At Sphiderass, we are dedicated to helping businesses thrive in the ever-evolving digital landscape.
                        </p>
                        <p className={`banner-button ${theme}`}>
                            <button className="bn-one">
                                <span>Get Started</span>
                            </button>
                        </p>
                        <div className={`banner-trust ${theme}`}>
                            <div>
                                <img className="index-page-banner-mouse-icon" src={mouse} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner