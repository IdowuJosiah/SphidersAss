import React from "react";
import LightNavbar from "../Components/LightNavbar";
import AffiliationsComponent from "../Components/AffiliationsComponent";
import LightFooter from "../Components/LightFooter";
import "../CSS/AboutPage/Aboutpage.scss"
import "../CSS/ArticleCss/Articlecss.scss"
import image from "../images/executive-picture.png"
import personalizedlearning from "../images/personalized-learning.svg"
import trustedtools from "../images/trusted-tools.svg"
import trustedcontent from "../images/trusted-content.svg"

const AboutPage = () => {
    return (
        <div>
            <section className="article-section-navbar">
                <LightNavbar />
            </section>
            <header className="about-page-header">
                <div className="about-page-header-div">
                    <h1 >
                        Who We Are
                    </h1>
                    <p>
                        From preschool to pre-tertiary, our students enjoy fun,
                        interactive and relevant lessons and
                        are empowered to think beyond the confines
                        of the classroom.
                    </p>
                </div>
            </header>
            {/*<section className="about-page-company-image-section">*/}
            {/*    <div>*/}
            {/*        <img src="/companypicture.jpg"/>*/}
            {/*    </div>*/}
            {/*/!*</section>*!/*/}
            {/*<section className="about-page-innovation-section">*/}
            {/*    <div className="about-page-innovation-section-div">*/}
            {/*        <div className="about-page-innovation-section-div-left">*/}
            {/*            <h5>*/}
            {/*                Sphiderass has  capabilities built for*/}
            {/*                all stages of innovation*/}
            {/*            </h5>*/}
            {/*            <p>*/}
            {/*                At Sphiderass, we are dedicated to helping*/}
            {/*                businesses thrive in the ever-evolving*/}
            {/*                digital landscape.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="about-page-innovation-section-div-right">*/}
            {/*            <img src="/img8.webp" alt=""/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className="about-page-meet-the-team-section">
                <div className="about-page-meet-the-team-section-div">
                    <div className="about-page-meet-the-team-section-header">
                        <h1>
                            Meet the Team
                        </h1>
                    </div>
                    <div className="about-page-meet-the-team-section-images">
                        <div className="about-page-meet-the-team-section-executive-images-section">
                            <div className="about-page-meet-the-team-section-executive-images">
                                <img src={image} />
                            </div>
                            <div className="about-page-meet-the-team-section-executive-images-positions">
                                <h2>
                                    Jesse Ali
                                </h2>
                                <p>
                                    CHief Executive Officer
                                </p>
                            </div>
                        </div  >
                        <div className="about-page-meet-the-team-section-executive-images-section">
                            <div className="about-page-meet-the-team-section-executive-images">
                                <img src={image} />
                            </div>
                            <div className="about-page-meet-the-team-section-executive-images-positions">
                                <h2>
                                    Jesse Ali
                                </h2>
                                <p>
                                    CHief Executive Officer
                                </p>
                            </div>
                        </div>
                        <div className="about-page-meet-the-team-section-executive-images-section">
                            <div className="about-page-meet-the-team-section-executive-images">
                                <img src={image} />
                            </div>
                            <div className="about-page-meet-the-team-section-executive-images-positions">
                                <h2>
                                    Jesse Ali
                                </h2>
                                <p>
                                    CHief Executive Officer
                                </p>
                            </div>
                        </div>
                        <div className="about-page-meet-the-team-section-executive-images-section">
                            <div className="about-page-meet-the-team-section-executive-images">
                                <img src={image} />
                            </div>
                            <div className="about-page-meet-the-team-section-executive-images-positions">
                                <h2>
                                    Jesse Ali
                                </h2>
                                <p>
                                    CHief Executive Officer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-page-work-with-us-section">
                <div className="about-page-work-with-us-section-div">
                    <div className="about-page-work-with-us-section-header">
                        <h2>
                            Why work with us?
                        </h2>
                    </div>
                    <div className="about-page-work-with-us-section-details">
                        <div className="about-page-work-with-us-section-details-div">
                            <div className="about-page-work-with-us-section-details-icon">
                                <img src={personalizedlearning} />
                            </div>
                            <div className="about-page-work-with-us-section-details-div-text">
                                <h4>
                                    Personalised Learning
                                </h4>
                                <p>
                                    Created by experts, library of trusted
                                    practice and lessons covers math, science,
                                    and more. Always free for learners and teachers.
                                </p>
                            </div>
                        </div>
                        <div className="about-page-work-with-us-section-details-div">
                            <div className="about-page-work-with-us-section-details-icon">
                                <img src={trustedcontent} />
                            </div>
                            <div className="about-page-work-with-us-section-details-div-text">
                                <h4>
                                    Trusted Content
                                </h4>
                                <p>
                                    Created by experts,
                                    library of trusted practice and
                                    lessons covers math, science, and more.
                                    Always free for learners and teachers.
                                </p>

                            </div>
                        </div>
                        <div className="about-page-work-with-us-section-details-div">
                            <div className="about-page-work-with-us-section-details-icon">
                                <img src={trustedtools} />
                            </div>
                            <div className="about-page-work-with-us-section-details-div-text">
                                <h4>
                                    Tools to empower teachers
                                </h4>
                                <p>
                                    Teachers can identify gaps in
                                    their students’ understanding, tailor
                                    instruction, and meet the needs of
                                    every student.
                                </p>
                            </div>
                        </div>
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
                        <AffiliationsComponent />
                    </main>
                </div>
            </section>
            <section>
                <LightFooter />
            </section>
        </div>
    )
}
export default AboutPage