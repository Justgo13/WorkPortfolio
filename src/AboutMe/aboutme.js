import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import {connect} from 'react-redux';
import { ABOUT_ME } from '../actions/action_types';
import Intro from '../Introduction/intro';
import Skills from './skills';

class AboutMe extends Component {
    state = {
        heading: ABOUT_ME,
        img_url: "AboutMe.jpg",
        sub_heading: "Carleton University Software Engineering Student",
        intro_text: "I am a software engineering student studying at Carleton University who is passionate about developing software applications. " + 
                    "Through my years of university and coop experiences, I have developed a strong grasp on programming paradigms, design patterns, and various development languages. "
    }

    
    render() {
        if (this.props.active_page === ABOUT_ME) {
            // active page is About Me, show it
            return (
                <div>
                    <Header {...this.state}></Header>
                    <Intro intro_text={this.state.intro_text}></Intro>
                    <Skills></Skills>
                    <Footer></Footer>
                </div>
            );
        } else {
            // hide page
            return (
                <div></div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        active_page: state.activePageReducer.activePageName.active_page_name
    }
}

export default connect(mapStateToProps, null)(AboutMe);