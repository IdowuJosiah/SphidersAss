import React, {useState} from "react"
import "../CSS/IndexpageCss/inputdropdown.scss"

function InputDropdown({selected, setSelected} ) {
    const  [isActive , setIsActive] = useState(false)
    const services =["UI/UX Design", "Branding", "Illustration", "Design Concept", "App Design"]
    return(
            <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>{selected}</div>
                {isActive && (
                    <div className="dropdown-content">
                        <div >
                            <ul>
                                    {services.map(service => (
                                        <li className="dropdown-items"
                                            onClick=
                                                {e =>  {
                                                    setSelected(service)
                                                    setIsActive(false) }}>
                                            {service}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                )}
                </div>
    )
}
export default InputDropdown