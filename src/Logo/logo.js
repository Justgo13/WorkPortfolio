import React from 'react';
import "./logo.css";

const Logo = ({logo_name}) => {
    return (
        <div>
            <i className={`fab fa-${logo_name} icon`} id={logo_name}></i>
        </div>
    );
}

export default Logo;
