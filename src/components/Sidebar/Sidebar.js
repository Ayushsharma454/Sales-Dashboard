import React from "react"
import "./sidebar.css"
import logo from '../Sidebar/HeaderLogo.png';
import menu from '../Sidebar/Menu.png';
import logout from '../Sidebar/Logout.png'

const Sidebar = () => {


    return (
        <div className="sidebar-wrapper">
            <img src={logo} className="logo" alt="logo" />

            <div className="menu-wrapper">
                <img src={menu} alt="Menu" />
            </div>

            <img src={logout} alt="Logout" className="logout-icon" />
        </div>
    )
}

export default Sidebar;
