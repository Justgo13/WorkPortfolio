import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import NavBarItem from "./NavBarItem.js";

const ABOUT_ME = "About Me";
const WORK_EXP = "Work Experience";
const PROJECTS = "Projects";

class NavbarList extends Component {
    state = {
        navItems: [
            {
                name: ABOUT_ME,
                url: "#"
            },
            {
                name: WORK_EXP,
                url: "#"
            },
            {
                name: PROJECTS,
                url: "#"
            }
        ]
    }

    getNavEntry = (navEntryName) => {
        let navItemIndex = this.state.navItems.findIndex(navItem => navItem.name === navEntryName);
        let navItem = this.state.navItems[navItemIndex];
        return navItem;
    }
    
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavBarItem {...this.getNavEntry(ABOUT_ME)}></NavBarItem>
                    <NavBarItem {...this.getNavEntry(WORK_EXP)}></NavBarItem>
                    <NavBarItem {...this.getNavEntry(PROJECTS)}></NavBarItem>
                </ul>
            </div>
        );
    }
}

export default NavbarList;
