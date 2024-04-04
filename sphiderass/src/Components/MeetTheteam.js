import "../CSS/IndexpageCss/MeetTheTeam.scss"
import profile from "../images/teammemberimage.png"
const MeetTheteam = () => {

    const TeamDetails = [
        {
            MemberName : "Richard Sunday",
            MemberPosition : "C.E.O",
            MemberImage: profile,
        },
        {
            MemberName : "Richard Sunday",
            MemberPosition : "C.E.O",
            MemberImage: profile,
        },
        {
            MemberName : "Richard Sunday",
            MemberPosition : "C.E.O",
            MemberImage: profile,
        },
    ]
    return(
        <section className="Index-page-Team-Section ">
            <div className="page-width Index-page-Team-Section-div ">
                <div className="Index-page-Team-Section-header" >
                    <h1>
                        Meet The Team
                    </h1>
                </div>
                <div className='Index-page-Team-Section-team-profile-con'>
                    {TeamDetails.map((Member,index)=>{
                        return<div className="Index-Page-Team-profile-box">
                                <p className="Index-Page-Team-profile-box-image">
                                    <img src={Member.MemberImage}/>
                                </p>
                                <div className="Index-Page-Team-profile-box-details">
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