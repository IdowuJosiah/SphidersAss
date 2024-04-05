import React from "react";
import {useState} from "react";
import "../CSS/IndexpageCss/FeedbackComponent.scss"

const FeedbackComponent = () => {
    const [slideIndex, setSlideIndex] = useState(0)


    const reviews=[
        {
            clientImage: "IMG_6200.JPG",
            clientReview:"SphiderAss Web and I have developed an excellent relationship despite our geographical differences. SphiderAss Web has done excellent work helping my company create custom software through many complicated revisions. My company is constantly evolving and I have full faith in SphiderAss Web to take us where we need to go.",
            clientName:" Mr Femi",
            clientTitle: "CEO, Libretto Furniture",
        },
        {
            clientImage: "Olamide.jpg",
            clientReview:"I would say SphiderAss Web has the best web development team. My both complex projects were developed to my satisfaction and the final outcome of the project was what I had initially in mind when staring these projects. They advise/suggest you wherever necessary during the development process which is really great. I would not hesitate recommend SphiderAss Web.",
            clientName:"Mrs Olamide",
            clientTitle: "Co-Founder, Phaseworks consults"

        },
        {
            clientImage: "./alyona-grishina-JQGxnrGOkEI-unsplash.jpg",
            clientReview:"SphiderAss Web's web development team is exceptional. They turned my vision into reality, and their valuable advice made all the difference. I highly recommend them for their dedication and top-notch results.",
            clientName:" Mr Samuel Ejiofor"
        },
        /*
        {
            parentImage: "./panitan-punpuang-OuxJHYeUYpk-unsplash.jpg",
            parentReview:"Choosing Honeyrock Academy for my child's education was undoubtedly one of the best decisions I've made. The school's holistic approach to education, combined with its modern facilities, creates an ideal setting for learning and growth. I've watched my child flourish not only academically but also in terms of character development. The values instilled here are shaping my child into a responsible and empathetic individual. Honeyrock Academy is truly a beacon of educational excellence.",
            parentName:"Mrs Nkechi Blessing"
        },
        {
            parentImage: "./vinicius-amnx-amano-0NCjjD0zGnw-unsplash.jpg",
            parentReview:" Honeyrock Academy has captured my heart with its exceptional dedication to nurturing young minds. The passion the educators bring to their classrooms is inspiring, and it's clear that they genuinely care about each student's well-being and success. The school's commitment to maintaining a vibrant and engaging curriculum keeps my child excited about learning. Honeyrock Academy provides an environment where children are valued, encouraged, and empowered to reach their full potential.",
            parentName:"Mrs Salimat"
        }, */
    ]
    /*
    const prevSlide = ()=>{
        if(slideIndex > 0){
            setSlideIndex(slideIndex - 1)
        }
        //     else if(slideIndex < 0){
        //         setSlideIndex(1)
        //    }
        console.log(slideIndex)
    }

    const nextSlide = ()=>{
        if(slideIndex < 4){
            setSlideIndex(slideIndex + 1)
        }
        //    else if(slideIndex === reviews.length){
        //         setSlideIndex(1)
        //    }
        console.log(slideIndex)

        // console.log(reviews)
    }
    */

    function dotClick (index) {
        setSlideIndex(index)
    }
    return(
        <div className="client-review">

            <div className="white-ball-bottom"></div>
            <div className="client-review-header">
                <h2>
                    Testiomnial
                </h2>
            </div>
            <div className="client-review-container">
                {reviews.map((review, index)=>{
                    return <div
                        className={ "slider-container" }
                        key={index}>
                        <div className="client-details">
                            <p className="client-image"><img alt="clientimages" src={review.clientImage}/></p>
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
    )
}
export default FeedbackComponent