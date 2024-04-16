import React from "react";
import { useState } from "react";
import "../CSS/IndexpageCss/FeedbackComponent.scss"
import { useTheme } from "../Context/ThemeContext";



const FeedbackComponent = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const { theme } = useTheme()


    const reviews = [
        {
            clientImage: "IMG_6200.JPG",
            clientReview: "SphiderAss Web and I have developed an excellent relationship despite our geographical differences. SphiderAss Web has done excellent work helping my company create custom software through many complicated revisions. My company is constantly evolving and I have full faith in SphiderAss Web to take us where we need to go.",
            clientName: " Mr Femi",
            clientTitle: "CEO, Libretto Furniture",
        },
        {
            clientImage: "Olamide.jpg",
            clientReview: "I would say SphiderAss Web has the best web development team. My both complex projects were developed to my satisfaction and the final outcome of the project was what I had initially in mind when staring these projects. They advise/suggest you wherever necessary during the development process which is really great. I would not hesitate recommend SphiderAss Web.",
            clientName: "Mrs Olamide",
            clientTitle: "Co-Founder, Phaseworks consults"

        },
        {
            clientImage: "./alyona-grishina-JQGxnrGOkEI-unsplash.jpg",
            clientReview: "SphiderAss Web's web development team is exceptional. They turned my vision into reality, and their valuable advice made all the difference. I highly recommend them for their dedication and top-notch results.",
            clientName: " Mr Samuel Ejiofor"
        },
    ]

    function dotClick(index) {
        setSlideIndex(index)
    }
    return (
        <div className="indexpage-feedback-container">
            <div className={`client-review ${theme}`}>
                <div className={`client-review-header ${theme}`}>
                    <h2>
                        Testiomnial
                    </h2>
                </div>
                <div className={`client-review-container ${theme}`}>
                    {reviews.map((review, index) => {
                        return <div
                            className={`slider-container ${theme}`}
                            key={index}>
                            <div className="client-details">
                                <p className="client-image"><img alt="clientimages" src={review.clientImage} /></p>
                                <div className="client-name"><h4>{review.clientName}</h4>  </div>
                                <div className="client-name"><h5>{review.clientTitle}</h5></div>
                            </div>
                            <p className="client-review-text">
                                <p> {review.clientReview} </p>
                            </p>
                        </div>
                    })
                    }
                </div>
            </div>

        </div>
    )
}
export default FeedbackComponent