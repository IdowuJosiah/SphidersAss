import React from "react";
import { FaConfluence, FaBloggerB } from "react-icons/fa"
import { ImBlogger2 } from "react-icons/im"
import { SiUtorrent } from "react-icons/si";
import { FaCentercode } from "react-icons/fa";
const AffiliationsComponent = () => {
    return (
        <section className="affiliate-section">
            <div className="">
                {/*<div className="af-header">*/}
                {/*    <p>*/}
                {/*        Trusted by Leading Companies around the World*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="af-logos">
                    <ul>
                        <li>
                            <span><FaConfluence className="confluence" /></span ><span className="af-name">Confluence</span>
                        </li>
                        <li>
                            <span><ImBlogger2 className="blogger" /></span><span className="af-name">Blogger</span>
                        </li>
                        <li>
                            <span><FaCentercode className="blogger" /></span><span className="af-name">Blogger</span>
                        </li>
                        <li>
                            <span><FaBloggerB className="blogger" /></span ><span className="af-name">Zeeply</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default AffiliationsComponent