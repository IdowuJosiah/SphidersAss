import newsletterdummy from "../images/newslaterdummy.png"
import "../CSS/IndexpageCss/indexpagenewsletter.scss"
import { useTheme } from "../Context/ThemeContext"


const IndexPageNewsletter = () => {
    const { theme } = useTheme(); // Destructure theme from the useTheme hook

    return (
        <section className={`index-page-news-letter ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className="page-width index-page-news-letter-con">
                <div className="index-page-news-details">
                    <div className={`index-page-news-details-header ${theme}`}>
                        <h1 className={`${theme === 'light' ? 'light' : 'dark'}`}>
                            Subscribe to Our Newsletter
                        </h1>
                    </div>
                    <div className={`index-page-news-details-frist-paragraph ${theme === 'light' ? 'light' : 'dark'}`}>
                        <p>
                            Join our IT community and subscribe to our newsletter
                            for the latest tech insights, trends, and exclusive updates.
                        </p>
                    </div>
                    <div className="index-page-news-input-div">
                        <p className="index-page-news-input">
                            <input placeholder="Write Your Email" />
                        </p>
                        <p className="index-page-news-subscribe-button">
                            <button>Subscribe</button>
                        </p>
                    </div>
                    <div className={`index-page-news-terms-and-privacy-div ${theme}`}>
                        <p>
                            By signing Up, you agree to our{' '}
                            <span className="index-page-news-terms-span">Terms</span> and{' '}
                            <span className="index-page-news-terms-span">Conditions</span>
                        </p>
                    </div>
                </div>
                <div className="index-page-news-letter-image">
                    <img src={newsletterdummy} alt="Newsletter" />
                </div>
            </div>
        </section>
    );
};


export default IndexPageNewsletter