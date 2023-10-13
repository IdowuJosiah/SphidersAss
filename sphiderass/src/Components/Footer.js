import React from "react";
const Footer = () => {
    const Links= [
        {
            Header: "USE CASES",
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
        },
    ]
    const AddressDetails =[
        {
            Title: "LOCATION",
            Address: "3-5 Faith In Christ Street Off Demurin, Ile-eja Ketu, Lagos, Nigeria."
        },
        {
            Title: "OTHER LOCATION",
            Address: "Office 5 Alade Complex University Of Abuja Abuja, Nigeria."
        }
    ]
    return(
        <section>

            <div className="page-width">
                <div className="agreement">

                </div>
                <div className="footer-nav">
                    <div className="footer-logo">
                        <img src="logo.png"/>
                    </div>
                    <div className="footer-link-comp">
                        {Links.map((link, index)=>{
                            return(
                                <div className="footer-links-sect">
                                    <h2>
                                        {link.Header}
                                    </h2>
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
                        {AddressDetails.map((Ads, index)=>{
                            return(
                                <div className="footer-address">
                                    <div>
                                        <h2>
                                            {Ads.Title}
                                        </h2>
                                        <p>
                                            {Ads.Address}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Footer