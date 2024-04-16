import React from "react";
import {Link, NavLink} from "react-router-dom"
import "../App.scss"
import {BsSearch, BsArrowUpRight} from "react-icons/bs"
import {RiSearchLine,} from "react-icons/ri"
const LightNavbar = () =>{
    const navLink = [
        {
            title: "Home",
            path: "/",
        },
        // {
        //     title: "Services",
        //     path: "/courses",
        // },
        {
            title: "Blog",
            path: "/blogs",
        },
        {
            title: "About",
            path: "/about",
        },
        // {
        //     title: "Portfolio",
        //     path: "/portfolio",
        // },
        {
            title: "Contact Us",
            path: "/contact-us",
        },
    ]
    return(
        <section className="navbar">
            <div className="light-nav-con">
                <div className="logo">
                    <img src="Frame170.png" alt="sphiderasslogo"/>
                </div>
                <div className="nav-list-con">
                    {navLink.map((link, index)=>{
                        return(
                            <ul>
                                <li>
                                    <Link className="nav-list" to={link.path}>{link.title}</Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="nav-buttons">
                    {/*<p className="nvs">*/}
                    {/*    <RiSearchLine className="search-icon"/>*/}
                    {/*</p>*/}
                    <p className="nvp">
                        <button>
                            <span>Work With Us</span><span className="nvb-arrow"><BsArrowUpRight/></span>
                        </button>
                    </p>
                </div>
            </div>

        </section>
    )
}
export default LightNavbar