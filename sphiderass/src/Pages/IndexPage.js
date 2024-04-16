import React, { useState, useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";
import Banner from "../Components/Banner";
import AffiliationsComponent from "../Components/AffiliationsComponent";
import IntroComponent from "../Components/IntroComponent";
import PortfolioCover from "../Components/PortfolioCover";
import FeedbackComponent from "../Components/FeedbackComponent";
import FaqComponent from "../Components/FaqComponent";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import Servicestwo from "../Components/Servicetwo";
import BlogComponent from "../Components/BlogComponent";
import SkewdLIne from "../Components/SkewdLIne";
import MeetTheteam from "../Components/MeetTheteam";
import IndexPageNewsletter from "../Components/IndexPageNewsletter";


const IndexPage = () => {

    const { theme } = useTheme();

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#333333'; 
    }, [theme])

    return (
        <div className="index-page-container">
            <Banner />
            <AffiliationsComponent />
            <IntroComponent />
            <Services />
            <PortfolioCover />
            <FeedbackComponent />
            <Servicestwo />
            {/* <FaqComponent/> */}
            <BlogComponent />
            <MeetTheteam />
            <ContactForm />
            <IndexPageNewsletter />
            <Footer />
        </div>
    )


}
export default IndexPage