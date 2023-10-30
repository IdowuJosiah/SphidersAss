import React from "react";
import {FaFacebookF, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa"
const Footer = () => {
    const Links= [
          /*}    Header: "USE CASES",
            Links:[
                {
                    LinkTitle: "AngularJS Development"

                },
                {
                    LinkTitle: "Laravel Development Flutter"

                },

            ]
        },
        {
            Header: "ABOUT US",
            Links:[
                {
                    LinkTitle: "AR & VR Solutions"
                },
                {
                    LinkTitle: "Blockchain Development"
                },
                {
                    LinkTitle: "Cloud Computing"
                },
            ]
        },
        {
            Header: "RESOURCES",
            Links:[
                {
                    LinkTitle: "Application Development"
                },
                {
                    LinkTitle: "Game Development"
                },
                {
                    LinkTitle: "MVP Development Software"
                },
                {
                    LinkTitle: "Web Development"
                },
            ]
        */
        {
        Header: "QUICK LINKS",
        Portfolio: "- Portfolio",
        Links:[
        {
            LinkTitle: "About"

        },
        {
            LinkTitle: "Services"

        },
            {
                LinkTitle: "Pricing PLans"

            },
            {
                LinkTitle: "Contact"

            }]
        },
        {
            Header: "SERVICES",
            Links:[
                {
                    LinkTitle: "UI/UX Design"

                },
                {
                    LinkTitle: "Branding"

                },
                {
                    LinkTitle: "Illustration"

                },
                {
                    LinkTitle: "Design Concept"

                },
                {
                    LinkTitle: "App Design"

                },

            ]
        },
        {
            Header: "PRODUCT",
            Links:[
                {
                    LinkTitle: "Figma"

                },
                {
                    LinkTitle: "Adobe"

                },
                {
                    LinkTitle: "Dribble"

                },
                {
                    LinkTitle: "Behance"

                },{
                    LinkTitle: "Thermoforest"

                },
            ]
        },
    ]
    const AddressDetails =[
        {
            Title: "LOCATION",
            Address: "3-5 Faith In Christ Street Off Demurin, Ile-eja Ketu, Lagos, Nigeria."
        },
    ]
    return(
        <section className="footer">

            <div className="page-width">
                <div className="footer-nav">
                    <div className="footer-logo">
                        <p>
                            <img src="logofooter.png"/>
                        </p>

                        <p className="footer-logo-text">
                            We build readymade websites, mobile
                            applications, and elaborate online
                            business services.
                        </p>
                    </div>
                    <div className="footer-link-comp">
                        {Links.map((link, index)=>{
                            return(
                                <div className="footer-links-sect">
                                    <h2>
                                        {link.Header}
                                    </h2>
                                    <h3>
                                         {link.Portfolio}
                                    </h3>
                                    <div className="footer-link-list">
                                        {link.Links.map((subLink, index) => {
                                            return(
                                                <ul>
                                                    <li>
                                                        {subLink.LinkTitle}
                                                    </li>

                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="footer-address-comp">
                        <div>
                            {/*{AddressDetails.map((Ads, index)=>{*/}
                            {/*    return(*/}
                            {/*        <div className="footer-address">*/}
                            {/*            <div>*/}
                            {/*                <h2>*/}
                            {/*                    {Ads.Title}*/}
                            {/*                </h2>*/}
                            {/*                <p>*/}
                            {/*                    {Ads.Address}*/}
                            {/*                </p>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    )*/}
                            {/*})}*/}
                        </div>
                        <div className="footer-socials">

                                <button>
                                        <span className="social-icons"><FaFacebookF/></span> <span className="ff">Facebook</span>
                                </button>
                                <button className="linkedin">
                                        <span className="social-icons"><FaLinkedin/></span> <span className="ff" >LinkedIn</span>
                                </button>
                                <button>
                                        <span className="social-icons"><FaTwitter/></span> <span className="ff">Twitter</span>
                                </button>
                                <button>
                                        <span className="social-icons"><FaInstagram/></span> <span className="ff">Instagram </span>
                                </button>


                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Footer