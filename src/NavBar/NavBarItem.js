import React from 'react';
import { connect } from 'react-redux';
import { ABOUT_ME, PROJECTS, WORK_EXPERIENCE } from '../actions/action_types';
import {aboutMeActivePage, workExpActivePage, projectsActivePage} from '../actions/active_page_actions';

let invokeActivePageReducer = (page_name, mapDispatchToProps) => {
    if (page_name === ABOUT_ME) {
        mapDispatchToProps.aboutMeActivePage();
    } else if (page_name === WORK_EXPERIENCE) {
        mapDispatchToProps.workExpActivePage();
    } else if (page_name === PROJECTS) {
        mapDispatchToProps.projectsActivePage();
    }
}

const  mapDispatchToProps = {aboutMeActivePage, workExpActivePage, projectsActivePage};

const NavbarItem = ({name, url, ...mapDispatchToProps}) => {
    mapDispatchToProps.aboutMeActivePage();
    return (
        <div className="nav-item">
            <li>
                <a className="nav-link" onClick={() => {invokeActivePageReducer(name, mapDispatchToProps)}} href={url}>{name}</a>
            </li>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(NavbarItem);
