import React from 'react';
import "./intro.css";

const Intro = ({intro_text}) => {
    return (
        <div className="col-sm-4 col-md-6 col-lg-12 card border-success mt-4 mb-4 introduction">
            <div className="card-header">
                <h3>Introduction</h3>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p>{intro_text}</p>
                </div>
            </div>
           
        </div>
    );
}

export default Intro;
