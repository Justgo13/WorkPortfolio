import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import {connect} from 'react-redux';
import { PROJECTS } from '../actions/action_types';

class Projects extends Component {
    state = {
        heading: PROJECTS,
        img_url: "projects.png",
        sub_heading: "Where skills were applied"
    }

    
    render() {
        if (this.props.active_page === PROJECTS) {
            // active page is projects, show it
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

export default connect(mapStateToProps, null)(Projects);