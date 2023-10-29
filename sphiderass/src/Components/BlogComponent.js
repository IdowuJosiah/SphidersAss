import React, {useState} from "react"
import {TiThumbsUp} from 'react-icons/ti'
import {FaRegCommentDots} from 'react-icons/fa'
import {BiCalendarWeek} from 'react-icons/bi'
import {AiOutlineArrowRight} from "react-icons/ai"
const BlogComponent = () => {
    return(
        <section>
            <div className="blog-header page-width">
                <h1>
                    See Our Blog
                </h1>
                <h3>
                    Stay current with all the latest trends, software, industry expectation and more
                </h3>
            </div>
            <div className="page-width">
                <section className="blog-post">
                    <div className="blog-post-image">
                        <p>
                            <img src="kanchanara-rhm7H8X5J98-unsplash.jpg"/>
                        </p>
                    </div>
                    <div className="blog-details">
                        <p className="blog-details-header">
                            <p>
                                <span className="blog-icons"><BiCalendarWeek/></span><span>20 Oct 2023,</span>
                            </p>
                            <p>
                                <span className="blog-icons"><TiThumbsUp/></span><span>2,233 <span className="blog-light">Like</span></span>
                            </p>
                            <p>
                                <span className="blog-icons"><FaRegCommentDots/></span><span>200 <span className="blog-light">comments</span></span>
                            </p>
                        </p>
                        <p className="blog-topic">
                            Bitcoin's Meteoric Rise: Unraveling the Current Surge in Cryptocurrency Markets
                        </p>
                        <p className="blog-content">
                            Bitcoin is back in the spotlight with an incredible surge, leaving the crypto
                            community in awe. Join us as we dive into the reasons behind this phenomenon,
                            shedding light on the current crypto craze and its implications. Whether you're
                            an experienced trader or a crypto novice, we'll explore the driving forces behind
                            Bitcoin's rise and what it means for the financial world.
                        </p>
                        <footer className="blog-footer">
                            <div className="blog-footer-button">
                                <button>
                                    <span>Read More</span>  <span className="blog-icon"><AiOutlineArrowRight/></span>
                                </button>
                            </div>
                            <div className="blog-footer-line">

                            </div>
                            <div className="blog-footer-details">
                                <p className="blog-footer-details-image">
                                    <img src="photo2.png"/>
                                </p>
                                <p>
                                    <p className="blog-footer-details-name">
                                        <span className="bfd-name">Simon Shodipo</span>   <span className="bfd-duration">5 min Read</span>
                                    </p>
                                </p>
                            </div>
                        </footer>
                    </div>
                </section>
                <section className="blog-post">
                    <div className="blog-post-image">
                        <p>
                            <img src="nicolas-arnold-e_xLO2vmiQI-unsplash.jpg"/>
                        </p>
                    </div>
                    <div className="blog-details">
                        <p className="blog-details-header">
                            <p>
                                <span className="blog-icons"><BiCalendarWeek/></span><span>15 Oct 2023,</span>
                            </p>
                            <p>
                                <span className="blog-icons"><TiThumbsUp/></span><span>2,200 <span className="blog-light">Like</span></span>
                            </p>
                            <p>
                                <span className="blog-icons"><FaRegCommentDots/></span><span>28 <span className="blog-light">comments</span></span>
                            </p>
                        </p>
                        <p className="blog-topic">
                            The Future of Quantum Computing: A Quantum Leap in Technology
                        </p>
                        <p className="blog-content">
                            Quantum computing is on the horizon, promising to revolutionize
                            technology as we know it. In this blog, we'll explore what quantum
                            computing is, its current state, and its potential to transform
                            industries. Get ready to leap into the future of technology!
                        </p>
                        <footer className="blog-footer">
                            <div className="blog-footer-button">
                                <button>
                                    <span>Read More</span>  <span className="blog-icon"><AiOutlineArrowRight/></span>
                                </button>
                            </div>
                            <div className="blog-footer-line">

                            </div>
                            <div className="blog-footer-details">
                                <p className="blog-footer-details-image">
                                    <img src="photo2.png"/>
                                </p>
                                <p>
                                    <p className="blog-footer-details-name">
                                        <span className="bfd-name">Simon Shodipo</span>   <span className="bfd-duration">5 min Read</span>
                                    </p>
                                </p>
                            </div>
                        </footer>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default BlogComponent