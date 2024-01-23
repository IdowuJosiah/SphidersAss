import React from "react"
import LightNavbar from "../Components/LightNavbar";
import LightFooter from "../Components/LightFooter";
import {FaFacebookF, FaLinkedin, FaTwitter} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const ContactUsPage = () => {
    return(
        <div>
            <LightNavbar/>
            <section>
                <header className="about-page-header">
                    <div className="about-page-header-div">
                        <h1 >
                            Get in touch
                        </h1>
                        <h2>
                            Lets transform that idea into a digital experience
                        </h2>
                    </div>
                </header>
            </section>
            <section className="contact-us-page-socials">
                <div className="contact-us-page-socials-div">
                    <a className="contact-us-social-icons"  href="google.com">
                        <span className="social-icons"><FaFacebookF/></span>

                    </a>

                    <a className="contact-us-social-icons" href="google.com">
                        <span className="social-icons"><FaLinkedin/></span>
                    </a>

                    <a className="contact-us-social-icons" href="google.com">
                        <span className="social-icons"><FaTwitter/></span>
                    </a>
                </div>
            </section>
            <section className="contact-us-page-map-section">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1491.473506618801!2d3.392291782257455!3d6.5971867367650745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92ef27af391b%3A0xdd6c425585f32872!2sFaith%20in%20Christ%20Bible%20Church%20international!5e0!3m2!1sen!2sng!4v1704823861365!5m2!1sen!2sng"
                            width="700"
                            height="250"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ border: 'none' }}>

                    </iframe>
                </div>
            </section>
            <section className="contact-us-page-contact-details-section">
                <div className="contact-us-page-contact-details-section-div">
                    <div>


                            <a  className="contact-us-page-icon-circle"
                                href="https://maps.app.goo.gl/KW1DYxYzZWRFWyucA"
                            >
                                <p>
                                    <IoLocationOutline />
                                </p>
                            </a>


                            <h5>
                                3-5 Faith In Christ Street
                                Off Demurin, Ile-eja
                                Ketu, Lagos, Nigeria.
                            </h5>

                    </div>
                    <div>


                            <a  className="contact-us-page-icon-circle"
                                href=" tel:+2348141826234">
                                <p>
                                    <MdPhoneIphone />
                                </p>
                            </a>


                            <h5>
                                (234) 814-182-6234
                            </h5>
                    </div>
                    <div>

                        <a  className="contact-us-page-icon-circle"
                            href="google.com">
                            <p>
                                <IoMailOutline />
                            </p>
                        </a>

                        <h5>
                            support@sphiderassweb.org
                        </h5>
                    </div>
                </div>
            </section>
            <section className="contact-us-page-form-section">
                <form>
                    <div>
                        <h1>
                            Contact Us
                        </h1>
                        <input
                                placeholder="Your Name"
                                type="text"/>
                        <input
                                type="email"
                                placeholder="Your Email"/>
                        <input
                                type="text"
                                className="contact-us-page-form-your-message"
                                placeholder="Your Message"
                        />
                        <button>
                            Send
                        </button>
                    </div>
                </form>
            </section>
            <LightFooter/>
        </div>
    )
}
export default ContactUsPage