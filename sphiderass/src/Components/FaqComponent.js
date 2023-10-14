import React, {useState} from "react"


const FaqComponent = () =>{

    const [slideIndex, setSlideIndex] = useState(0)


    const reviews=[
        {
            clientReview:"Honeyrock Academy has exceeded my expectations in every way. From the nurturing environment to the dedicated staff, my child's educational journey here has been nothing short of exceptional. The emphasis on fostering a love for learning and promoting individual growth is truly commendable. The warm and welcoming atmosphere",
            question:"What Services does SphiderAss offer",
            bg_colour:"#003700"
        },
        {
            clientReview:"I am so grateful to have found Honeyrock Academy for my child's early education. The personalized attention each student receives is truly remarkable. The teachers' genuine care for their students' success is evident in every interaction. The well-rounded curriculum, encompassing academics, arts, and character development,",
            question:"When do SphiderAss work",
            bg_colour: "#f8cf3d",
        },
        {
            clientReview:"Honeyrock Academy has set the bar high when it comes to creating a supportive and enriching learning environment. The teachers' dedication to igniting curiosity and fostering critical thinking skills has made a significant impact on my child's educational journey. The school's commitment to maintaining a strong partnership",
            question:" How many Years has SpiderAss been in Existence",
            bg_colour:"#0ce30c"
        },

    ]


    function dotClick (index) {
        setSlideIndex(index)
    }
    return(
        <section className="page-width faq-section">
            <div className="faq-header">
                <h2>
                    FAQ
                </h2>
            </div>
            <div className="faqcontainer">
                {reviews.map((review, index)=>{
                    return <div
                        onClick={() => dotClick(index)}
                        style={{background:review.bg_colour}}
                        className={slideIndex === index  ? "faq-active" : "faq-slide"}
                        key={index}>
                        <div className="">
                            <div className="question"><h4>{review.question}</h4>  </div>
                        </div>
                        <p className="answer">
                            <p> {review.clientReview} </p>
                        </p>
                    </div>
                })
                }
            </div>
        </section>
    )
}
export default FaqComponent