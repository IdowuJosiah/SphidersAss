import React from "react"
import LightNavbar from "../Components/LightNavbar";
import LightFooter from "../Components/LightFooter";

const ErrorPage = () =>{
    return(
        <div>
            <LightNavbar/>
            <section className="error-page-section">
                <div className="error-page-header">
                    <h5>
                        404
                    </h5>
                    <h1>
                        Page Not Found
                    </h1>
                    <p>
                        Sorry, the page you are looking for might be in another universe.
                    </p>
                </div>
                <section className="error-page-image-section">
                    <div className="error-pageimage">
                        <img className="alien-spaceship" src="/Spaceship.png"/>
                    </div>
                </section>
            </section>
            <LightFooter/>
        </div>
    )
}
export default ErrorPage