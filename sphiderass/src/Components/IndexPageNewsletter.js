import newsletterdummy from "../images/newslaterdummy.png"
import "../CSS/IndexpageCss/indexpagenewsletter.scss"
import { useTheme } from "../Context/ThemeContext"



const IndexPageNewsletter = () => {

    const theme = useTheme()
    
    return (
        <section className="index-page-news-letter">
            <div className="page-width index-page-news-letter-con ">
                <div className="index-page-news-details">
                    <div className="index-page-news-details-header">
                        <h1>
                            Subscribe to Our Newsletter
                        </h1>
                    </div>
                    <div className="index-page-news-details-frist-paragraph">
                        <p>
                            Join our IT community and subscribe to our newsletter
                            for the latest tech insights, trends, and exclusive updates.
                        </p>
                    </div>
                    <div className="index-page-news-input-div">
                        <p className="index-page-news-input">
                            <input
                                placeholder="Write Your Email" />
                        </p>
                        <p className="index-page-news-subscribe-button">
                            <button>
                                Subscribe
                            </button>
                        </p>
                    </div>
                    <div className="index-page-news-terms-and-privacy-div">
                        <p>By signing Up, you agree to our <span className="index-page-news-terms-span" >Terms</span> and <span className="index-page-news-terms-span" >Conditions</span></p>
                    </div>
                </div>
                <div className="index-page-news-letter-image">
                    <img src={newsletterdummy} />
                </div>
            </div>
        </section>
    )
}
export default IndexPageNewsletter