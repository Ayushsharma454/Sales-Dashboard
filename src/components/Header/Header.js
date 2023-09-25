import React from "react"
import "./Header.css"
import searchicon from '../Header/search-icon.png';

const Header = () => {


    return (

        <div className="header-wrapper">
            <div className="header-wrapper-inner">

                <div className="search-bar-wrapper">
                    <input class="search-bar" type="search" placeholder="Search..." />
                    <img src={searchicon} className="search-bar-icon" alt="search-icon" />
                </div>

                <div className="details">

                    <div className="personal-details">
                        <p>Fletch Skinner</p>
                        <p>Product Manager</p>
                    </div>
                    <span className="profile-picture">

                    </span>
                </div>
            </div>

        </div>

    )
}

export default Header;
