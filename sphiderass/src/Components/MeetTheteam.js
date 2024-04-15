import "../CSS/IndexpageCss/MeetTheTeam.scss"
import profile from "../images/teammemberimage.png"
import { useTheme } from "../Context/ThemeContext"

const MeetTheteam = () => {

    const { theme } = useTheme()

    const TeamDetails = [
        {
            MemberName: "Richard Sunday",
            MemberPosition: "C.E.O",
            MemberImage: profile,
        },
        {
            MemberName: "Richard Sunday",
            MemberPosition: "C.E.O",
            MemberImage: profile,
        },
        {
            MemberName: "Richard Sunday",
            MemberPosition: "C.E.O",
            MemberImage: profile,
        },
    ]
    return (
        <section className={`Index-page-Team-Section ${theme}`}>
            <div className={`page-width Index-page-Team-Section-div  ${theme}`}>
                <div className={`Index-page-Team-Section-header ${theme}`} >
                    <h1>
                        Meet The Team
                    </h1>
                </div>
                <div className={`Index-page-Team-Section-team-profile-con ${theme}`}>
                    {TeamDetails.map((Member, index) => {
                        return <div className={`Index-Page-Team-profile-box ${theme}`}>
                            <p className={`Index-Page-Team-profile-box-image ${theme}`}>
                                <img src={Member.MemberImage} />
                            </p>
                            <div className={`Index-Page-Team-profile-box-details ${theme}`}>
                                <p>
                                    {Member.MemberName}
                                </p>
                                <p>
                                    {Member.MemberPosition}
                                </p>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
        </section>
    )
}
export default MeetTheteam