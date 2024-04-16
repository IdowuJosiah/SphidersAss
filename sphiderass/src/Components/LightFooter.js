import React from "react";
import {FaFacebookF, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa"
import {Link} from "react-router-dom"
const LightFooter = () => {
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
                    LinkTitle: "About",
                    linkTo:"/count-down-page"

                },
                {
                    LinkTitle: "Services",
                    linkTo:"/count-down-page"

                },
                {
                    LinkTitle: "Pricing PLans",
                    linkTo:"/count-down-page"

                },
                {
                    LinkTitle: "Contact",
                    linkTo:"/count-down-page"

                }]
        },
        {
            Header: "SERVICES",
            Links:[
                {
                    LinkTitle: "UI/UX Design",
                    linkTo:"/count-down-page"

                },
                {
                    LinkTitle: "Branding",
                    linkTo:"/count-down-page"

                },
                {
                    LinkTitle: "Illustration",
                    linkTo:"/count-down-page"

                },
                {
                    LinkTitle: "Design Concept",
                    linkTo:"/count-down-page"

                },
                {
                    LinkTitle: "App Design",
                    linkTo:"/count-down-page"

                },

            ]
        },
        // {
        //     Header: "PRODUCT",
        //     Links:[
        //         {
        //             LinkTitle: "Figma",
        //             linkTo:"/count-down-page"
        //
        //         },
        //         {
        //             LinkTitle: "Adobe",
        //             linkTo:"/count-down-page"
        //
        //         },
        //         {
        //             LinkTitle: "Dribble",
        //             linkTo:"/count-down-page"
        //
        //         },
        //         {
        //             LinkTitle: "Behance",
        //             linkTo:"/count-down-page"
        //
        //         },{
        //             LinkTitle: "Thermoforest",
        //             linkTo:"/count-down-page"
        //
        //         },
        //     ]
        // },
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
                                                <Link to={subLink.linkTo}><ul>
                                                    <li>
                                                        {subLink.LinkTitle}
                                                    </li>

                                                </ul></Link>

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
                                <a href="https://instagram.com/sphiderassweb?igshid=OGQ5ZDc2ODk2ZA==">
                                    <span className="social-icons"><FaInstagram/></span> <span className="ff">Instagram </span>
                                </a>
                            </button>




                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default LightFooter