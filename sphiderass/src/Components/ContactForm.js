import React, {useState} from "react";
import axios, {Axios} from "axios";
import InputDropdown from "./InputDropdown";

const ContactForm = () =>{
    const [selected, setSelected] = useState("Services")

    const url = ""

    const [data, setData] = useState(
        {
            full_name: "",
            business_mail: "",
            price: "",
            service: {setSelected},
            message: "",
            file:"",
            id_user:"",
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
            price: data.price,
            service: data.service,
            message: data.message,
            file:data.file,
            id_user: data.id_user,
        })
            .then(res=>{
                console.log(res.data)
            })
    }
    return(
        <section className="contact-form-section" style={{backgroundImage:`url(BG.png)`}}>
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
                        <div className="form-header">
                            Request A Quote
                        </div>
                        <div className="form-name">
                            <input onChange={(e)=>handle(e)} value={data.full_name} id="full_name" placeholder="Full Name" type="text"/>
                            <input onChange={(e)=>handle(e)} value={data.business_mail} id="business_mail" placeholder="Business Email" type="email"/>
                        </div>
                        <div className="form-service">
                            <InputDropdown selected={selected} setSelected={setSelected}   id="service"/>
                            <input onChange={(e)=>handle(e)} value={data.price} id="price" placeholder="Your Budget (USD)" type="number"/>
                        </div>
                        <div>
                            <input onChange={(e)=>handle(e)} value={data.file} id="file" placeholder="Attach File" type="file"/>
                            <label htmlFor="file">
lkm
                            </label>
                        </div>
                        <input onChange={(e)=>handle(e)} value={data.message}  id='message' placeholder="Message" type="text"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactForm