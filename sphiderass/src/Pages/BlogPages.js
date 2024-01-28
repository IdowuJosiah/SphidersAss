import React from "react";
import LightNavbar from "../Components/LightNavbar";
import LightFooter from "../Components/LightFooter";

const BlogPages = () => {
    const BlogPreviewDetails= [
        {
            date: "12th January 2024",
            blogHeader: "Stay current with all the latest trends, software, industry expectation and more.",
            blogPreviewText:"Ensuring our online presence is protected is important in the electronic age we live in today since digital connections are essentialto our daily lives. The following looks at some basic safety tips for operating on the internet",
            blogLink : "/article-one",
            blogImage:"/bunfd.png",
        },
        {
            date: " 11th January 2024",
            blogHeader: "Web Development A Beginners Guide to Web Development",
            blogPreviewText: "Ensuring our online presence is protected is important in the electronic age we live in today since digital connections are essential to our daily lives. The following looks at some basic safety tips for operating on the internet",
            blogLink: "/article-two",
            blogImage: "/techblog-four.jpeg"
        },
        {
            date: "17th January 2024.",
            blogHeader: "Tech Trends Shaping the Future of Business.",
            blogPreviewText: "                               Organizations are using AI and machine learning on a daily basis for automation, data analysis, and decision-making.",
            blogLink: "/article-three",
            blogImage: "/techblog-five.jpeg",
        },
        {
            date: "14th January 2024.",
            blogHeader: "Web Development: A Beginners Guide to Web Development",
            blogPreviewText: "Starting a web development career as a beginner can be thrilling and challenging as well.  Here is a guide to support you in knowing the foundations...",
            blogLink: "/article-four",
            blogImage: "/techblog-one.jpeg"
        },
        {
            date: "16th January 2024.",
            blogHeader: "THE INTRODUCTION OF ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
            blogPreviewText: "Organizations are using AI and machine learnin g on a daily basis for automation, data analysis, and decision-making.",
            blogLink: "/article-five",
            blogImage: "/techblog-three.jpeg",
        },
        {
            date: "13th January 2024",
            blogHeader: "Web Development Trends in Web Development to Look Out for in 2024",
            blogPreviewText: "Web development is the process of creating, building, and coding websites with an array of tools and programming languages.",
            blogLink: "article-six",
            blogImage: "/techblog-three.jpeg",
        },
    ]
    return(

        <section>
            <LightNavbar/>
            <section className="blog-page-header">
                <div>
                    <h1>
                        Get Insights.
                    </h1>
                    <p>
                        Stay current with all the latest trends, software, industry expectation and more.
                    </p>
                </div>
            </section>
            <section className="blog-page-blogs">
               <div className="bpb-box">
                   {BlogPreviewDetails.map((previewDetails,index) =>{
                       return(
                           <div className="bpb-box-div">
                               <p className="bpb-box-preview-image">
                                   <img className="blog-page-blogs-image" src={previewDetails.blogImage}/>
                               </p>
                               <div>
                                   <p className="bpb-time-stamp">
                                       {previewDetails.date}
                                   </p>
                                   <h5>
                                       {previewDetails.blogHeader}
                                   </h5>
                                   <p className="bpb-preview-text">
                                       {previewDetails.blogPreviewText}
                                   </p>
                                   <a href={previewDetails.blogLink}>
                                        read more
                                   </a>
                               </div>

                           </div>
                       )
                   })}
               </div>
            </section>
            <LightFooter/>
        </section>
    )
}
export default BlogPages