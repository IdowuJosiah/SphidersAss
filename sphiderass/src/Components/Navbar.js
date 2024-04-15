import React, { useState } from "react";
import { Link } from "react-router-dom"
import "../App.scss"
import { BsSearch, BsArrowUpRight } from "react-icons/bs"
import { RiSearchLine, } from "react-icons/ri"
import { LuSunMoon } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import { useTheme } from '../Context/ThemeContext'


const Navbar = () => {
    const navLink = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Services",
            path: "/courses",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Portfolio",
            path: "/portfolio",
        },
        {
            title: "Contact Us",
            path: "/contact-us",
        },
    ]

    const { theme, toggleTheme } = useTheme()



    return (
        <section className={`navbar ${theme}`}>
            <div className="nav-con">
                <div className="logo">
                    <img src="Frame170.png" alt="sphiderasslogo" />
                </div>
                <div className="nav-list-con">
                    {navLink.map((link, index) => {
                        return (
                            <ul>
                                <li>
                                    <Link className="nav-list" to={link.path}>{link.title}</Link>
                                </li>
                            </ul>
                        )
                    })}
                </div>
                <div className="nav-buttons">
                    <div onClick={toggleTheme}>
                        {theme === 'light' ? <LuSunMoon className='sun' /> : <LuMoonStar className="moon" />}
                    </div>
                    <p className="nvp">
                        <button>
                            <span>Work With Us</span><span className="nvb-arrow"><BsArrowUpRight /></span>
                        </button>
                    </p>
                </div>
            </div>

        </section>
    )
}
export default Navbar