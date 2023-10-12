import React from "react";
import {BsArrowRight} from "react-icons/bs"

const PortfolioCover = () =>{
    return(
        <section className="portfolio-cover-section">
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
        </section>
    )
}
export default PortfolioCover