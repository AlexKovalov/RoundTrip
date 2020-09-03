import React from "react";
import "./SocialFollowComponent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faGooglePlus
} from "@fortawesome/free-brands-svg-icons";

import {
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";

const SOCIAL_LINK = 'https;//www.youtube.com';
const SOCIAL_ICONS = [
    {name: faFacebook, link: {SOCIAL_LINK}, classes: "socialBtn"},
    {name: faInstagram, link: {SOCIAL_LINK}, classes: "socialBtn myIconBorder"},
    {name: faTwitter, link: {SOCIAL_LINK}, classes: "socialBtn myIconBorder"},
    {name: faGooglePlus, link: {SOCIAL_LINK}, classes: "socialBtn"},
];

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};



export default function SocialFollowComponent() {
    return(
        <div>
            <a href={SOCIAL_LINK} className="socialLink">
                <FontAwesomeIcon icon={faArrowUp} className="socialBtn myIconBorder" onClick={scrollTop}></FontAwesomeIcon>
            </a>

            {SOCIAL_ICONS.map((el, index)=>{
                return <a href={el.link} className="socialLink" key={index}>
                    <FontAwesomeIcon icon={el.name} className={el.classes}></FontAwesomeIcon>
                </a>
            })}
        </div>
    )
}
