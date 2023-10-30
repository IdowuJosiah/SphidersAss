import React from "react";
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

const IndexPage = () => {
    return(
        <div>
            <Banner/>
            <AffiliationsComponent/>
            <IntroComponent/>
            <Services/>
        </div>
    )


}
 export default IndexPage