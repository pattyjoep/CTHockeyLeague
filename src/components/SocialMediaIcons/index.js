import React from 'react'
import "./style.css"

function SocialMediaIcons() {
    return (
        <div>
           <a href="https://www.instagram.com/cthockeyleague/?hl=en" target="_blank">
                <i className="fa fa-instagram social-media-icon"></i>
            </a>
            <a href="https://twitter.com/CTHockeyLeague?lang=en" target="_blank">
                <i className="fa fa-twitter social-media-icon"></i>
            </a>
            <a href="https://www.facebook.com/chl.hockey" target="_blank">
                <i className="fa fa-facebook-square social-media-icon"></i>
            </a>
        </div>
    )
}
export default SocialMediaIcons;