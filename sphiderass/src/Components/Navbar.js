import React from "react";
import {Link} from "react-router-dom"
import "../App.css"
import {BsSearch} from "react-icons/bs"
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
                    <img src="logo.png" alt="sphiderasslogo"/>
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
                    <p>
                        <BsSearch className="search-icon"/>
                    </p>
                    <p className="nvp">
                        <button>
                            Work with us
                        </button>
                    </p>
                </div>
            </div>

        </section>
    )
}
export default Navbar