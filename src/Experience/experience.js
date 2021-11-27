import React from 'react';
import "./experience.css";

const create_experience_notes = (experience_notes) => {
    let experience_note_li = [];
    experience_notes.forEach(note => experience_note_li.push(<li>{note}</li>))
    return experience_note_li;
}

const Experience = ({position_name, company_info, experience_notes, experience_date}) => {
    return (
        <div>
            <div className="row experience">
                <div className="col-md-8">
                    <h3>{position_name}</h3>
                    <p>{company_info}</p>
                    <ul>
                        {create_experience_notes([...experience_notes])}
                    </ul>
                </div>
                <div className="col-md-4 experience_date">
                    <h3>{experience_date}</h3>
                </div>
            </div>
        </div>
    );
}

export default Experience;
