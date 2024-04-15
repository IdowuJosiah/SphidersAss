import React from "react";
import { FaConfluence, FaBloggerB } from "react-icons/fa"
import { ImBlogger2 } from "react-icons/im"
import { SiUtorrent } from "react-icons/si";
import { FaCentercode } from "react-icons/fa";
import { useTheme } from '../Context/ThemeContext'

const AffiliationsComponent = () => {
    const { theme } = useTheme();

    return (
        <section className={`affiliate-section ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className="">
                {/*<div className="af-header">*/}
                {/*    <p>*/}
                {/*        Trusted by Leading Companies around the World*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="af-logos">
                    <ul>
                        <li>
                            <span><FaConfluence className={`confluence ${theme}`} /></span ><span className={`af-name ${theme}`}>Confluence</span>
                        </li>
                        <li>
                            <span><ImBlogger2 className={`blogger ${theme}`} /></span><span className={`af-name ${theme}`}>Blogger</span>
                        </li>
                        <li>
                            <span><FaCentercode className={`blogger ${theme}`} /></span><span className={`af-name ${theme}`}>Blogger</span>
                        </li>
                        <li>
                            <span><FaBloggerB className={`blogger ${theme}`} /></span ><span className={`af-name ${theme}`}>Zeeply</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default AffiliationsComponent