import React from "react"
import '../userDetails/DetailTemplate.css'

const DetailTemplate = ({ name, emailid, date }) => {


    return (
        <div className="details-card">
            <div>
                <div className="user-profile-picture">

                </div>
                <div className="name-wrapper">
                    <p>{name}</p>
                    <p>{emailid}</p>
                </div>
            </div>



            <div className="date">
                <p>{date}</p>
            </div>
        </div>
    )
}

export default DetailTemplate;
