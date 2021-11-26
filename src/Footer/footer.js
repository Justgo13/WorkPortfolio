import React, {Component} from 'react';
import "./footer.css";

class Footer extends Component {
    state = {
        github_url: "https://github.com/Justgo13",
        linkedin_url: "https://www.linkedin.com/in/justgo13/"
    }

    render() {
        return (
            <div className="footer">
                <a href={this.state.github_url} target="_blank" rel="noreferrer">
                    <i className="fab fa-github icon" id="github"></i>
                </a>
                <a href={this.state.linkedin_url} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin icon" id="linkedin"></i>
                </a>
            </div>
        );
    }
}

export default Footer;
