import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import {connect} from 'react-redux';
import { WORK_EXPERIENCE } from '../actions/action_types';

class WorkExperience extends Component {
    state = {
        heading: WORK_EXPERIENCE,
        img_url: "AboutMe.jpg",
        sub_heading: "Where skills were applied"
    }

    
    render() {
        if (this.props.active_page === WORK_EXPERIENCE) {
            // active page is work experience, show it
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

export default connect(mapStateToProps, null)(WorkExperience);