import React from "react";
import LightNavbar from "../Components/LightNavbar";
import AffiliationsComponent from "../Components/AffiliationsComponent";
import LightFooter from "../Components/LightFooter";

const AboutPage =() => {
    return(
        <div>
            <LightNavbar/>
            <header className="about-page-header">
                <div className="about-page-header-div">
                    <h1 >
                        Make your ideas your next big thing.
                    </h1>
                    <h2>
                        Make it happen with Sphiderass
                    </h2>
                </div>
            </header>
            <section className="about-page-company-image-section">
                <div>
                    <img src="/companypicture.jpg"/>
                </div>
            </section>
            <section className="about-page-innovation-section">
                <div className="about-page-innovation-section-div">
                    <div className="about-page-innovation-section-div-left">
                        <h5>
                            Sphiderass has  capabilities built for
                            all stages of innovation
                        </h5>
                        <p>
                            At Sphiderass, we are dedicated to helping
                            businesses thrive in the ever-evolving
                            digital landscape.
                        </p>
                    </div>
                    <div className="about-page-innovation-section-div-right">
                        <img src="/img8.webp" alt=""/>
                    </div>
                </div>
            </section>
            <section className="about-page-partners-section">
                <div className="about-page-partners-section-div">
                    <header>
                        <h3>
                            Partners
                        </h3>
                        <p>
                            Most calendars are designed for teams.
                            Slate is designed for freelancers
                        </p>
                    </header>
                    <main>
                        <AffiliationsComponent/>
                    </main>
                </div>
            </section>
            <section>
                <LightFooter/>
            </section>
        </div>
    )
}
export default AboutPage