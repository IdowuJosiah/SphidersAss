import React from "react";
import {useState} from "react";

const FeedbackComponent = () => {
    const [slideIndex, setSlideIndex] = useState(0)


    const reviews=[
        {
            clientImage: "./aiony-haust-3TLl_97HNJo-unsplash.jpg",
            clientReview:"Honeyrock Academy has exceeded my expectations in every way. From the nurturing environment to the dedicated staff, my child's educational journey here has been nothing short of exceptional. The emphasis on fostering a love for learning and promoting individual growth is truly commendable. The warm and welcoming.",
            clientName:" Mrs Pail Sodipo"
        },
        {
            clientImage: "./albert-dera-ILip77SbmOE-unsplash.jpg",
            clientReview:"I am so grateful to have found Honeyrock Academy for my child's early education. The personalized attention each student receives is truly remarkable. The teachers' genuine care for their students' success is evident in every interaction. The well-rounded curriculum, encompassing academics, arts, and character development",
            clientName:"Mr James Ibitoye"
        },
        {
            clientImage: "./alyona-grishina-JQGxnrGOkEI-unsplash.jpg",
            clientReview:"Honeyrock Academy has set the bar high when it comes to creating a supportive and enriching learning environment. The teachers' dedication to igniting curiosity and fostering critical thinking skills has made a significant impact on my child's educational journey. The school's commitment to maintaining a strong partnership",
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
            <div className="white-ball">

            </div>
            <div className="black-ball-outline">

            </div>
            <div className="white-ball-bottom"></div>
            <div className="client-review-header">
                <h2>
                    Client Feedback
                </h2>
                <p>
                    Please read what our clients have to say
                </p>
            </div>
            <div className="client-review-container">
                {reviews.map((review, index)=>{
                    return <div
                        className={slideIndex === index  ? "slide-active slider-container" : "client-review-slide"}
                        key={index}>

                        <p className="client-review-text">
                            <p> {review.clientReview} </p>
                        </p>
                        <div className="client-details">
                            <p className="client-image"><img alt="clientimages" src={review.clientImage}/></p>
                            <div className="client-name"><h4>{review.clientName}</h4>  </div>
                        </div>


                    </div>
                })
                }
            </div>
            {/*<div*/}
            {/*    className="buttonslider">*/}
            {/*    <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>*/}
            {/*    <ButtonSlider moveSlide={nextSlide} direction={"next"}/>*/}
            {/*</div>*/}

            <div
                className="container-dots">
                {Array.from({length:3}).map((item, index)=>(
                    <div onClick={() => dotClick(index)}
                         className={slideIndex === index  ? "dot dot-active": "dot"}>
                    </div>
                ))

                }
            </div>
        </div>
    )
}
export default FeedbackComponent