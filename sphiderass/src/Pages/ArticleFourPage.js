import LightNavbar from "../Components/LightNavbar";
import profile from "../images/blogprofileimage.svg";
import articleImage from "../images/bunfd.png";
import "../CSS/ArticleCss/Articlecss.scss"


const ArticleFourPage = () => {
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
                                    Artificial Intelligence
                                </p>
                            </div>
                            <div className="individual-article-opened-header-topic-text">
                                <h1>
                                    Artificial Intelligence's Progress and its Effects on Industries.
                                </h1>
                                <p>
                                    22th January 2024
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
                                <img src={articleImage} alt="articleimage"/>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <p>
                                    An innovative era in many industries started with the
                                    development of artificial intelligence (AI), which is
                                    changing how companies function and provide services.
                                    The improvement in technology or AI has an important effect
                                    on many different sectors. The following sectors have been impacted
                                    by Artificial Intelligence:
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    1.⁠ ⁠AUTOMATED SYSTEMS AND EFFICIENCY
                                </h1>
                                <p>

                                    Artificial Intelligence makes it easy to carry out routine tasks,
                                    which improves efficiency in operations and reduces human error
                                    .  It also helps with organizing methods that are helpful for industries
                                    like manufacturing, shipping, and dealing with clients.

                                </p>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    2.) IMPROVEMENTS IN HEALTHCARE
                                </h1>
                                <p>
                                    AI speeds up and upgrades the
                                    accuracy of analyzing medical
                                    images, discovering drugs, and diagnosis. Artificial Intelligence
                                    assists with the use of predictive analytics and personalised methods
                                    of treatment to improve patient care.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    3.) BANKING AND FINANCE
                                </h1>
                                <p>
                                    In finance and banking, AI systems analyze a great deal of data to assess credit risks and deliver more accurate lending decisions in the areas of fraud detection and risk assessment.
                                    Artificial intelligence systems are able to identify and stop fraudulent activity by recognizing trends and anomalies in financial transactions.
                                    Banks are making use of AI-powered chatbots to assist customers with basic transactions, answer questions, and offer immediate customer service. Customers receive quick, comfortable service as a result, and efficiency is increased.
                                </p>
                            </div>
                        </section>

                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    4.) E-COMMERCE AND RETAIL:
                                </h1>
                                <p>
                                    AI analyzes consumer data to offer personalized product recommendations, simplify online shopping, and pay attention to individual tastes.
                                    AI-powered chatbots are also used to give immediate customer service, response to inquiries, and assist in shopping selections.
                                    AI also aids entrepreneurs in pricing, demand estimation, and handling inventory efficiency, which increases productivity and customer satisfaction.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    5.) EDUCATION AND TRAINING:
                                </h1>
                                <p>
                                    Personalized learning experiences enabled by AI is reshaping the education sector.
                                    AI helps in creating Intelligent tutoring systems, adaptive educational platforms, and automated grading meets the demands of each individual student.

                                </p>
                            </div>
                        </section>

                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    6.) TELECOMMUNICATIONS:
                                </h1>
                                <p>
                                    By allowing chatbots and virtual assistants to answer
                                    questions from customers and offer assistance at all times,
                                    AI has improved customer service.
                                    AI is also helpful for improving networks, anticipating and
                                    preventing disruptions, and improving overall network performance.

                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    7.) AGRICULTURE AND PRECISION FARMING:
                                </h1>
                                <p>
                                    AI helps with targeted farming by using automated
                                    machines, predicting yield, and monitoring crops.
                                    Both agricultural yields and the effectiveness of resources
                                    are increased by effective farming techniques provided by AI.

                                </p>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    8.) ENERGY AND SUSTAINABILITY:
                                </h1>
                                <p>
                                    AI helps optimize energy grids, predict equipment breakdowns,
                                    and increase energy efficiency.
                                    It also promotes sustainability objectives by monitoring the environment
                                    and managing resources.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <p>
                                    Although AI has had an important impact on different
                                    industries but there are challenges including data protection,
                                    concerns about ethics, and displacement of workers which require
                                    careful investigation.  To fully utilize artificial intelligence
                                    for the good of society as industries continue to incorporate
                                    AI technologies, a careful and moral approach is necessary and effective

                                </p>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default ArticleFourPage