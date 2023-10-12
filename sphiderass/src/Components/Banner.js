import React from "react";
import Navbar from "./Navbar";
const Banner =() => {
    return(
        <section className="banner-section" >
            <div style={{backgroundImage: `url(quPm77XPccPKTpd9OlV7KXk1YBM.webp)`}} className="banner-image">
                <div className="nav-placement">
                    <Navbar/>
                </div>
                <div className="banner-text">
                    <p>
                        <button>
                           <p></p> work with us
                        </button>
                    </p>
                    <p className="banner-head-text">
                        Transform Your Idea Into Digital Experiences
                    </p>
                    <p className="banner-subhead-text">
                        At Sphiderass, we are dedicated to helping businesses thrive in the ever evolving digital landscape
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Banner