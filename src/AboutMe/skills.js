import React from 'react';
import Logo from '../Logo/logo';
import "./skills.css";

const Skills = () => {
    return (
        <div>
            <h1 className="display-5 header">Skills</h1>
            <div className="row">
                <div className="col-md-4 skills-row">
                    <Logo logo_name="html5" caption_title="HTML5" caption_text="Designing user-friendly webpages"></Logo>
                </div>
                <div className="col-md-4 skills-row">
                    <Logo logo_name="js-square" caption_title="JavaScript" caption_text="Modular design for dynamic websites"></Logo>
                </div>
                <div className="col-md-4 skills-row">
                    <Logo logo_name="css3-alt" caption_title="CSS3" caption_text="Styling HTML"></Logo>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 skills-row">
                    <Logo logo_name="react" caption_title="ReactJS" caption_text="Creating modular components and using redux to store data"></Logo>
                </div>
                <div className="col-md-4 skills-row">
                    <Logo logo_name="php" caption_title="PHP" caption_text="Creating websites that link to SQL backends"></Logo>
                </div>
                <div className="col-md-4 skills-row">
                    <Logo logo_name="linux" caption_title="Linux/Unix" caption_text="Utilizing the terminal to develop in a virutual machine"></Logo>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 skills-row">
                    <Logo logo_name="bootstrap" caption_title="Bootstrap" caption_text="Created responsive websites using CSS templates"></Logo>
                </div>
                <div className="col-md-4 skills-row">
                    <Logo logo_name="npm" caption_title="NPM" caption_text="Installed various modules from node js"></Logo>
                </div>
                <div className="col-md-4 skills-row">
                    <Logo logo_name="database" caption_title="MongoDB/MySQL" caption_text="Query databases and set up connections to external programs"></Logo>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 skills-row">
                    <Logo logo_name="python" caption_title="Python" caption_text="Designing modulues that communicate with external applications"></Logo>
                </div>
                <div className="col-md-4 skills-row">
                    <Logo logo_name="java" caption_title="Java" caption_text="Creating applications that follow an OOP design"></Logo>
                </div>
                <div className="col-md-4 skills-row">
                    <Logo logo_name="cuttlefish" caption_title="C Language" caption_text="Memory management"></Logo>
                </div>
            </div>
        </div>
    );
}

export default Skills;
