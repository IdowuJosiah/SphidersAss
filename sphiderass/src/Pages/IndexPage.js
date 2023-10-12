import React from "react";
import Banner from "../Components/Banner";
import AffiliationsComponent from "../Components/AffiliationsComponent";
import IntroComponent from "../Components/IntroComponent";
import PortfolioCover from "../Components/PortfolioCover";
import FeedbackComponent from "../Components/FeedbackComponent";

const IndexPage = () => {
    return(
        <div>
            <Banner/>
            <AffiliationsComponent/>
            <IntroComponent/>
            <PortfolioCover/>
            <FeedbackComponent/>
        </div>
    )
}
 export default IndexPage