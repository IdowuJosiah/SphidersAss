import React from "react";
import {Link} from "react-router-dom"
import "../App.css"
import {BsSearch, BsArrowUpRight} from "react-icons/bs"
import {RiSearchLine,} from "react-icons/ri"
const Navbar = () =>{
    const navLink = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Services",
            path: "/",
        },
        {
            title: "Blog",
            path: "/",
        },
        {
            title: "About",
            path: "/",
        },
    ]
    return(
        <section className="navbar">
            <div className="nav-con">
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
                    <p className="nvs">
                        <RiSearchLine className="search-icon"/>
                    </p>
                    <p className="nvp">
                        <button>
                            <span>Work with us</span><span className="nvb-arrow"><BsArrowUpRight/></span>
                        </button>
                    </p>
                </div>
            </div>

        </section>
    )
}
export default Navbar