import LightNavbar from "../Components/LightNavbar";
import profile from "../images/blogprofileimage.svg";
import articleImage from "../images/techblog-five.jpeg";
import "../CSS/ArticleCss/Articlecss.scss"



const ArticleThreePage = () => {
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
                                    Web Development
                                </p>
                            </div>
                            <div className="individual-article-opened-header-topic-text">
                                <h1>
                                    A Beginners Guide to Web Development
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
                                    Starting a web development career as a beginner
                                    can be thrilling and challenging as well.  Here
                                    is a guide to support you in knowing the foundations:
                                </p>
                            </div>
                            <div className="main-article-first-paragraph">
                                <h1>
                                    1.⁠ ⁠KNOW THE BASICS
                                </h1>
                                <p>

                                    Get familiar with Cascading Style Sheets (CSS) for web page styling and HTML (Hypertext Markup Language) for organizing content.
                                    Acquire a basic knowledge of JavaScript to build dynamic elements and interaction into your websites.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    2.⁠ ⁠BECOME COMFORTABLE WITH CODING TOOLS.
                                </h1>
                                <p>

                                    Choose a code editor that you like, such as Atom, Sublime Text, or Visual Studio Code. Learn version control by tracking changes to your code using Git.

                                </p>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    3.⁠ ⁠RESPONSIVE WEB DESIGN
                                </h1>
                                <p>
                                    Gain knowledge of responsive design concepts to ensure
                                    that your websites appear properly on a range of screens
                                    and devices. Identify applications that make use of flexible
                                    grid layouts and query languages.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    4.⁠ ⁠LEARN ABOUT FRONT END DEVELOPMENT
                                </h1>
                                <p>

                                    To speed up your styling and layout work,
                                    go into front-end development frameworks like Tailwind CSS or Bootstrap.
                                    To create flexible user interfaces, become conversant with JavaScript
                                    libraries and frameworks like as Vue.js, Angular, and React.
                                </p>
                            </div>
                        </section>

                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    5.⁠ ⁠INTRODUCTION TO BACK END DEVELOPMENT
                                </h1>
                                <p>

                                    Acquire skills in a back-end programming language,
                                    such as PHP, Python, Ruby, or Node.js (JavaScript).
                                    Understand server-side scripting, handling databases, and
                                    server-side frameworks like Express.js, Django, or Flask.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    6.⁠ ⁠DATABASES AND SQL
                                </h1>
                                <p>

                                    Learn the basics of managing and analyzing data
                                    using databases and SQL (Structured Query Language).
                                    Learn the process of using a database—such as MySQL, PostgreSQL,
                                    or MongoDB—with your web application.

                                </p>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    7.⁠ ⁠VERSION CONTROL WITH GIT
                                </h1>
                                <p>
                                    Learn the basics of Git for version control,
                                    allowing you to track changes and communicate efficiently with others.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    8.⁠ ⁠BASIC COMMAND LINE USAGE
                                </h1>
                                <p>
                                    Gain experience with basic command line
                                    functions; web development requires this knowledge.
                                    Acquire the knowledge to operate basic commands, create files, and explore files.

                                </p>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <h1>
                                    9.⁠ ⁠SETTING UP YOUR WEBSITE
                                </h1>
                                <p>
                                    To launch your webpages, examine other hosting solutions such as Vercel,
                                    Netlify, or GitHub Pages. Find out how to use AWS or Heroku for server deployment of flexible web apps.
                                </p>
                            </div>
                            <div className="main-article-second-paragraph">
                                <h1>
                                    10. ONGOING EDUCATION AND TRAINING
                                </h1>
                                <p>
                                    The field of web development is constantly
                                    changing so it is important to keep up with industry
                                    blogs, forums, and courses to keep your skills up to date. Practicing
                                    and developing projects to apply your skills and gain hands-on experience is also helpful.
                                </p>
                            </div>
                        </section>
                        <section className="main-article-first-and-second-paragraph">
                            <div className="main-article-first-paragraph">
                                <p>
                                    Developing a website is a journey, and taking
                                    things a step at a time is absolutely necessary
                                    . As you progress in your learning process, don't
                                    hesitate to ask for assistance from online forums,
                                    tutorials, mentors and documentations.
                                </p>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default ArticleThreePage