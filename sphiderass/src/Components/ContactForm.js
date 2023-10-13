import React, {useState} from "react";
import axios, {Axios} from "axios";

const ContactForm = () =>{
    const url = ""

    const [data, setData] = useState(
        {
            full_name: "",
            business_mail: "",
            company_name: "",
            motive: "",
            message: "",
            id_user:""
        }
    )
    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    function submit(e){
        e.preventDefault()
        axios.post(url,{
            full_name: data.full_name,
            business_mail: data.business_mail,
            company_name: data.company_name,
            motive: data.motive,
            message: data.message,
            id_user: data.iduser,
        })
            .then(res=>{
                console.log(res.data)
            })
    }
    return(
        <section className="contact-form-section">
            <div className="page-width contact-form-container">
                <div className="cf-text">
                    <p>
                        WANT TO WORK WITH/
                    </p>
                    <p>
                        HIRE US:
                    </p>
                </div>
                <div className="cf-form">
                    <form onSubmit={(e)=>submit(e)}>
                        <input onChange={(e)=>handle(e)} value={data.full_name} id="full_name" placeholder="Full Name" type="text"/>
                        <input onChange={(e)=>handle(e)} value={data.business_mail} id="business_mail" placeholder="Business Email" type="email"/>
                        <input onChange={(e)=>handle(e)} value={data.company_name} id="company_name" placeholder="Company Name" type='text' />
                        <input onChange={(e)=>handle(e)} value={data.motive}  id="motive" placeholder="How Can we Help"  type="text"/>
                        <input onChange={(e)=>handle(e)} value={data.message}  id='message' placeholder="Message" type="text"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactForm