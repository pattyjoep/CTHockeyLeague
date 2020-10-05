import React from 'react'
import "./style.css"

import SocialMediaIcons from '../SocialMediaIcons'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a href="http://cthockeyleague.com/CHL_2014/">
                <img src="http://cthockeyleague.com/CHL_2014/media/img/chl_logo_complete_cs4 Revised.png" className="navbar-brand logo"></img>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fa fa-home"></i> Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-dollar"></i> Make Payment</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-list"></i> Tier Information
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Tier 1 - All Star</a>
                            <a className="dropdown-item" href="#">Tier 2</a>
                            <a className="dropdown-item" href="#">Tier 3</a>
                            <a className="dropdown-item" href="#">Tier 4 - North</a>
                            <a className="dropdown-item" href="#">Tier 4 - South</a>
                            <a className="dropdown-item" href="#">Tier 5</a>
                            <a className="dropdown-item" href="#">Tier 6 - North</a>
                            <a className="dropdown-item" href="#">Tier 6 - South</a>
                            <a className="dropdown-item" href="#">Tier 7</a>
                        </div>
                    </li>
                </ul>
 
            </div>
            <SocialMediaIcons></SocialMediaIcons>
        </nav>
    )
}
export default NavBar;