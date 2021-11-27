import React from 'react';
import "./logo.css";

const Logo = ({logo_name, caption_title, caption_text}) => {
    let font_awesome_class = "fab";
    if (logo_name === "database") {
        font_awesome_class = "fas";
    }
    return (
        <div>
            <i className={`${font_awesome_class} fa-${logo_name} icon`} id={logo_name}></i>
            <h3>{caption_title}</h3>
            <p>{caption_text}</p>
        </div>
    );
}

export default Logo;
