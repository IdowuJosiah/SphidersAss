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
        {
            title: "Services",
            path: "/count-down-page",
        },
        {
            title: "Blog",
            path: "/count-down-page",
        },
        {
            title: "About",
            path: "/about",
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
                                    <NavLink
                                        exact
                                        className="light-nav-list"
                                        activeClassName="active-link"
                                        to={link.path}>{link.title}

                                    </NavLink>
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
                            <span>Contact Us</span><span className="nvb-arrow"><BsArrowUpRight/></span>
                        </button>
                    </p>
                </div>
            </div>

        </section>
    )
}
export default LightNavbar