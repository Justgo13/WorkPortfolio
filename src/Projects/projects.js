import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import {connect} from 'react-redux';
import { PROJECTS } from '../actions/action_types';
import Experience from '../Experience/experience';

class Projects extends Component {
    state = {
        heading: PROJECTS,
        img_url: "projects.png",
        sub_heading: "Where skills were applied",
        experiences: [
            {
                position_name: "Java Developer",
                company_info: "Irdeto, Ottawa, ON",
                experience_notes: [
                    "Established a client-server platform to retain user data upon application closure by connecting the Java GUI to a NoSQL database",
                    "Developed Java functions to select, update, and delete information in NoSQL MongoDB documents",
                    "Performed end to end testing of the application by performing user simulation to verify that the application was functioning as intended",
                    "Designed the application using Java Swing components and layout managers to improve user experience",
                    "Wrote detailed commit message when pushing to remote GitHub branch to help future interested developers understand the project and all its changes"
                ],
                experience_date: "Deceomber 2019 - June 2020"
            }
        ]
    }

    create_experiences = () => {
        let experiences = [...this.state.experiences];
        let experience_objs = [];
        experiences.forEach(experience => experience_objs.push(<Experience position_name={experience.position_name}
                                                                            company_info={experience.company_info}
                                                                            experience_notes={experience.experience_notes}
                                                                            experience_date={experience.experience_date}
                                                                ></Experience>));
        return experience_objs;                    
    }

    
    render() {
        if (this.props.active_page === PROJECTS) {
            // active page is projects, show it
            return (
                <div>
                    <Header {...this.state}></Header>
                    {this.create_experiences()}
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