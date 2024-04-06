import LightNavbar from "../Components/LightNavbar";
import profile from "../images/blogprofileimage.svg";
import articleImage from "../images/bunfd.png";
import "../CSS/ArticleCss/Articlecss.scss";
import blogImage from "../images/techblog-four.jpeg";



const ArticleTwoPage = () => {
    return(
        <div>
            <div className="individual-article-opened-container">
                <section className="article-section-navbar">
                    <LightNavbar/>
                </section>
                <div className="individual-article-opened">
                    <section className="individual-article-opened-header">
                        <div className="individual-article-opened-header-box">
                            <div className="individual-article-opened-header-category-text">
                                <p>
                                    Business
                                </p>
                            </div>
                            <div className="individual-article-opened-header-topic-text">
                                <h1>
                                    Tech Trends Shaping the Future of Business.
                                </h1>
                                <p>
                                    12 JANUARY 2024
                                </p>
                            </div>
                            <div className="individual-article-opened-header-writer-details">
                                <div>
                                    <img src={profile} alt="profile"/>
                                </div>
                                <div className="individual-article-opened-header-writer">
                                    <p className="individual-article-opened-header-writer-name">
                                        Timilehin Shogaolu
                                    </p>
                                    <p>
                                        Content Writer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="main-article-text-container">
                    <section className="main-article-text">
                        <section className="main-article-text-header">
                            <div className="main-article-text-header-h1">
                                <p>
                                    Intro to article
                                </p>
                            </div>
                            <div className="main-article-text-header-image">
                                <img src={blogImage} alt="articleimage"/>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    1.THE INTRODUCTION OF ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
                                </h1>
                                <p>

                                    Organizations are using AI and machine learning on a daily
                                    basis for automation, data analysis, and decision-making.
                                    Creative thinking has been inspired by personalized consumer
                                    experiences and statistical analysis in a wide range of industries.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    2.GROWTH AND DEVELOPMENT OF TECHNOLOGY FOR REMOTE WORK
                                </h1>
                                <p>
                                    The swift adoption of remote work has led to the creation
                                    of advanced cybersecurity structures, online communication
                                    platforms, and tools for teamwork. Digital partnership and
                                    hybrid work styles are changing the traditional office setting.
                                </p>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    3. NETWORK FOR TRANSPARENT TRANSACTIONS
                                </h1>
                                <p>
                                    The secure and transparent transactions
                                    offered by blockchain technology are changing business procedures.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    4.⁠ ⁠THE USE OF EDGE COMPUTING WITH 5G CONNECTIVITY

                                </h1>
                                <p>
                                    The introduction of 5G technology is improving network reliability and speed, allowing for quicker data transfer. Applications that operate instantly are made possible by edge computing, which also reduces delay and simplifies data processing.

                                </p>
                            </div>
                        </section>

                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    5.⁠ ⁠SUSTAINABILITY AND GREEN TECHNOLOGY INITIATIVES

                                </h1>
                                <p>
                                    Companies are placing an emphasis on eco-friendly practices, encouraging environmentally friendly technologies, and durability.
                                    Reduction of  carbon emissions, using sustainable energy sources, and adopting sustainable economic ideas are becoming more and more popular.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <p>
                                    Collectively, these technological developments will influence how businesses operate in the future by encouraging sustainability, flexibility, and creativity. Being aware of the latest developments in technology and utilizing them strategically can help firms succeed in the fast-paced, competitive business sector.
                                </p>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default ArticleTwoPage