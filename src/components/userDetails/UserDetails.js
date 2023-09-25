import React from "react"
import '../userDetails/UserDetails.css'
import DetailTemplate from "./DetailTemplate";

const UserDetails = () => {


    return (
        <div className="user-details-wrapper">
            <p>USERS</p>
            <DetailTemplate name={"Giles Posture"} emailid={"giles@email.com"} date={"Nov 18 ,2021"}/>
            <DetailTemplate name={"Piff jenkins"} emailid={"piff@email.com"} date={"Nov 18 ,2021"}/>
            <DetailTemplate name={"Barry Tone"} emailid={"Barrytone@email.com"} date={"Nov 17 ,2021"}/>
            <DetailTemplate name={"Jackson Pot"} emailid={"jpod@email.com"} date={"Nov 15 ,2021"}/>
            <DetailTemplate name={"Brian Cuin"} emailid={"biran@email.com"} date={"Nov 14 ,2021"}/>
        </div>
    )
}

export default UserDetails;
