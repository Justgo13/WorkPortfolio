import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import {connect} from 'react-redux';
import { WORK_EXPERIENCE } from '../actions/action_types';
import Experience from '../Experience/experience';

class WorkExperience extends Component {
    state = {
        heading: WORK_EXPERIENCE,
        img_url: "work_experience.png",
        sub_heading: "Collaboration is key",
        experiences: [
            {
                position_name: "Junior Software Developer",
                company_info: "Irdeto, Ottawa, ON",
                experience_notes: [
                    "Developed Python modules to automate the process of running tests in Agent99 by making calls to external systems such as MySQL and Artifactory",
                    "Added a new feature using PHP and JS to the Agent99 website frontend that allowed users to specify a reference test run to trim non-passing test case when starting a new test run",
                    "Created a Python package that served as the SQL API for various modules in the Cider project which greatly increased code maintainability and code abstraction",
                    "Maintained Agent99 by thoroughly investigating and quickly resolving iOS and Android device failures related to the queue daemon application that the device listens to ",
                    "Automated the CI Jenkins pipeline process by writing Groovy code to set environment variables and call Python scripts at each stage of the Jenkinsfile",
                    "Participated in daily scrums and sprint planning to collaborate with co-workers and discuss daily achieved goals and plans for the next sprint",
                    "Authored multiple Confluence pages and created detailed and easy to follow documents for various tasks"
                ],
                experience_date: "Janurary 2021 - December 2021"
            },
            {
                position_name: "Java Software Developer",
                company_info: "Canada Revenue Agency, Ottawa, ON",
                experience_notes: [
                    "Added new tax types to the Integras Java based desktop application to provide auditors with a wider range of options when auditing tax cases",
                    "Created a help page for CRA MyAccount by writing well documented and efficient Struts2 action classes and action tags",
                    "Collaborated effectively with co-workers by discussing problems daily to understand which features are causing problems",
                    "Analyzed and thoroughly investigated software bugs by testing various success and failure paths to replicate the bug and determine its root cause",
                    "Engaged in bi-weekly scrum reviews to discuss the current scrum goal progress, which allowed the team to understand priorities for the upcoming sprint"
                ],
                experience_date: "June 2020 - August 2020"
            },
            {
                position_name: "Software Intern",
                company_info: "Carleton University, Ottawa, ON",
                experience_notes: [
                    "Developed Python functions that would parse through unstructured lidar data and output data categories such as distance and noise level to a Python GUI",
                    "Uploaded unstructured lidar data generated in a Linux environment to the data parser for testing, which revealed faulty functions in the source code",
                    "Collaborated effectively with co-workers by discussing problems daily to understand which features are causing problems",
                    "Analyzed a lidar software manual and learned how to read the unstructured data so that the Python functions knew which columns to extract data from",
                    "Authored technical documentation for the project to explain the different project features to the professor and DRDC scientist"
                ],
                experience_date: "June 2019 - July 2019"
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
        if (this.props.active_page === WORK_EXPERIENCE) {
            // active page is work experience, show it
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

export default connect(mapStateToProps, null)(WorkExperience);