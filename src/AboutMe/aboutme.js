import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import {connect} from 'react-redux';
import { ABOUT_ME } from '../actions/action_types';

class AboutMe extends Component {
    state = {
        heading: "About Me",
        img_url: "AboutMe.jpg",
        sub_heading: "Carleton University Software Engineering Student"
    }

    
    render() {
        if (this.props.active_page === ABOUT_ME) {
            // active page is About Me, show it
            return (
                <div>
                    <Header {...this.state}></Header>
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