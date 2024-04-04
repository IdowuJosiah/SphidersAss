import LightNavbar from "../Components/LightNavbar";
import profile from "../images/blogprofileimage.svg"
import "../CSS/ArticleCss/Articlecss.scss"
import articleImage from "../images/bunfd.png"

const ArticleOnePage = () => {
    return(
        <div className="individual-article-opened-container">
          <section className="article-section-navbar">
            <LightNavbar/>
          </section>
          <div className="individual-article-opened">
            <section className="individual-article-opened-header">
              <div className="individual-article-opened-header-box">
                <div className="individual-article-opened-header-category-text">
                  <p>
                    Tech
                  </p>
                </div>
                <div className="individual-article-opened-header-topic-text">
                  <h1>
                    STAY CURRENT WITH ALL THE LATEST TRENDS, SOFTWARE, INDUSTRY EXPECTATION AND MORE.
                  </h1>
                  <p>
                    12th January 2024
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
                            Web development is the process of creating,
                            building, and coding websites with an array of tools
                            and programming languages. It includes both front-end
                            and back-end development, ensuring visually appealing,
                            useful performance and user-experience-optimized websites
                            that enable worldwide internet accessibility. There are some
                            exciting web development trends to keep an eye on in 2024.
                            Here are some trends that you could watch out for which are
                            Artificial Intelligence Powered Development, Progressive Web Apps,
                            Voice Search Optimization, Blockchain Integration, Augmented Reality
                            (AR) and Virtual Reality (VR) amongst many others.

                        </p>
                    </div>
                    <div className="main-article-second-paragraph">
                        <p>
                            Increased integration of Artificial Intelligence (AI)
                            in web development should be expected in automating tasks,
                            enhancing user experiences, and providing intelligent insights.
                            Chatbots with artificial intelligence (AI) skills, customized user
                            interfaces, and auto-generated content will keep reshaping th
                            e web development industry.
                        </p>
                    </div>
                </section>
                  <section className="main-article-first-and-second-paragraph">
                      <div className="main-article-first-paragraph">
                          <p>
                              Progressive Web Apps combine the best of
                              web and mobile experiences, they offer fast
                              and reliable performance. PWAs are likely to grow
                              more popular since they give users a smooth, app-like
                              experience and make it easier for developers to create
                              applications that work across platforms.


                          </p>
                      </div>
                      <div className="main-article-second-paragraph">
                          <p>
                              With the increase of voice-activated devices, web developers
                              will focus on optimizing websites for voice search,
                              changing the landscape of SEO strategies. The rise of
                              voice assistants, integration of voice commands and
                              interactions into websites will become more widespread.
                          </p>
                      </div>
                  </section>

                  <section className="main-article-first-and-second-paragraph">
                      <div className="main-article-first-paragraph">
                          <p>
                              Blockchain integration in web development
                              is currently driven by increased security and
                              transparency, especially for safe transactions
                              and decentralized apps (DApps). Blockchain technology
                              improves traceability, accuracy, decentralization,
                              security, and transparency of transactions when it
                              is integrated into web development.
                          </p>
                      </div>
                      <div className="main-article-second-paragraph">
                          <p>
                              The incorporation of Augmented Reality (AR)
                              and Virtual Reality (VR) technologies will
                              continue to expand, creating immersive web experiences for users,
                              especially in e-commerce, education, and the entertainment sector.
                              Addition of Motion UI like animations, transitions,
                              and micro-interactions to websites can enhance user
                              engagement and create a more immersive experience.
                              These trends will  shape the future of web development and influence
                              how we interact with and experience the digital world.
                          </p>
                      </div>
                  </section>
              </section>
          </div>
        </div>
    )
  }
  export default ArticleOnePage