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
                company_info: "Risk!, Ottawa, ON",
                experience_notes: [
                    "Re-created the Risk board game as a Java desktop application that followed the MVC design pattern allowing for modifications of each component to be independent of one another",
                    "Created human and AI player types using object-oriented inheritance concepts such as inheritance to minimize code repetition and improve execution speed",
                    "Resolved disputes quickly with team members that had a hard time keeping up with the workload by meeting with them and discussing alternative routes which lead to an increase in overall team productivity",
                    "Leaded team members in weekly discussions about project deliverables and made sure all deliverables were met for upcoming deadlines by following a tight but productive schedule"
                ],
                experience_date: "September 2020 - December 2020"
            },
            {
                position_name: "Java Developer",
                company_info: "School Management Application, Ottawa, ON",
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