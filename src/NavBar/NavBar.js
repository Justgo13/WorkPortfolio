import React, { Component } from 'react';
import NavbarList from './NavBarList.js';
import './NavBar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="index.html">
                    <i className="fas fa-laptop-code nav-icon"></i>
                    Software Portfolio
                </a>
                <NavbarList></NavbarList>
            </nav>
        );
    }
}

export default Navbar;
