import React, {useState} from "react"


const FaqComponent = () =>{

    const [slideIndex, setSlideIndex] = useState(0)


    const reviews=[
        {
            clientReview:"Honeyrock Academy has exceeded my expectations in every way. From the nurturing environment to the dedicated staff, my child's educational journey here has been nothing short of exceptional. The emphasis on fostering a love for learning and promoting individual growth is truly commendable. The warm and welcoming atmosphere makes it clear that Honeyrock is more than just a school; it's a place where children thrive and create lasting memories.",
            question:"What Services does SphiderAss offer",
            bg_colour:"#003700"
        },
        {
            clientReview:"I am so grateful to have found Honeyrock Academy for my child's early education. The personalized attention each student receives is truly remarkable. The teachers' genuine care for their students' success is evident in every interaction. The well-rounded curriculum, encompassing academics, arts, and character development, ensures that my child is not only excelling academically but also growing into a well-rounded individual. Honeyrock Academy is undoubtedly a gem in the realm of education.",
            question:"When do SphiderAss work",
            bg_colour: "#f8cf3d",
        },
        {
            clientReview:"Honeyrock Academy has set the bar high when it comes to creating a supportive and enriching learning environment. The teachers' dedication to igniting curiosity and fostering critical thinking skills has made a significant impact on my child's educational journey. The school's commitment to maintaining a strong partnership with parents further enhances the sense of community. Honeyrock Academy is where my child's academic foundation is being built with care, creativity, and excellence.",
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
                            <q> {review.clientReview} </q>
                        </p>
                    </div>
                })
                }
            </div>
        </section>
    )
}
export default FaqComponent