import React from "react";
import "../CSS/IndexpageCss/porfoliocover.scss"

const PortfolioCover = () =>{
    return(
        <section className=" portfolio-cover page-wdith">

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