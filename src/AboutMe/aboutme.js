import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

class AboutMe extends Component {
    state = {
        heading: "About Me",
        img_url: "AboutMe.jpg",
        sub_heading: "Carleton University Software Engineering Student"
    }
    render() {
        return (
            <div>
                <Header {...this.state}></Header>
                <Footer></Footer>
            </div>
        );
    }
}

export default AboutMe;
