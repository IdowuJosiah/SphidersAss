import React from "react";
import {BsArrowRight} from "react-icons/bs"

const PortfolioCover = () =>{
    return(
        <section className=" portfolio-cover page-wdith">
            {/*
                <div className="page-width portfolio-cover-comp">
                <div className="pc-head">
                    <p>
                        Our Portfolio
                    </p>
                </div>
                <div className="pc-content">
                    <div className="pc-text" >
                        <div className="pct-head">
                            <p>
                                Here  you find our most inspiring and curated projects for our clients.
                            </p>
                        </div>
                        <div className="pc-link">
                            <span>
                                Dive In
                            </span>
                            <span>
                                <BsArrowRight/>
                            </span>
                        </div>
                    </div>
                    <div className="pc-images">
                            <p>
                                <img src="ud2tFkwnnzxq6A5DlFXZvCtJPHA.webp"/>
                            </p>
                            <p>
                                <img src="3HbKVsphmyMrOV9WkzyIc0FhY.webp"/>
                            </p>
                            <p>
                                <img src="KY3wpt9Wzeu6qPhNX7nCa4qFsc.webp"/>
                            </p>
                    </div>
                </div>
            </div>
            */}
            <div>
                <div className="pc-head">
                    <p>
                        PORTFOLIO
                    </p>
                </div>
                <div className="pc-bar">
                    <div>
                        <p>
                            ALL
                        </p>
                        <ul>
                            <li>
                                Websites
                            </li>
                            <li>
                                Mobile apss
                            </li>
                            <li>
                                Social Media Branding
                            </li>
                            <li>
                                Graphics Design
                            </li>
                            <li>
                                SEO
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pc-laptop">
                    <p>
                        <img src="MacBookPro17.png"/>
                    </p>
                </div>
                <div className="pc-footer">
                    <p className="vn">
                        <span className="pc-ball"></span><span className="pc-footer-text">View All Projects</span><span className="pct-icon"> ></span>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default PortfolioCover