import React from "react";
import {FaConfluence, FaBloggerB} from "react-icons/fa"
import {ImBlogger2} from "react-icons/im"

const AffiliationsComponent = () =>{
    return(
        <section>
            <div className="page-width ">
                <div className="af-header">
                    <p>
                        Trusted by Leading Companies around the World
                    </p>
                </div>
                <div className="af-logos">
                    <ul>
                        <li>
                            <span><FaConfluence className="confluence"/></span><span>Confluence</span>
                        </li>
                        <li>
                            <span><ImBlogger2 className="blogger"/></span><span>Blogger</span>
                        </li>
                        <li>
                            <span><img src="utorrent-icon.svg"/></span><span>Utorrent</span>
                        </li>
                        <li>
                            <span><FaBloggerB className="blogger"/></span><span>Zeeply</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default AffiliationsComponent