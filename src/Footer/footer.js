import React, {Component} from 'react';
import "./footer.css";
import Logo from '../Logo/logo';

class Footer extends Component {
    state = {
        github_url: "https://github.com/Justgo13",
        linkedin_url: "https://www.linkedin.com/in/justgo13/"
    }

    render() {
        return (
            <div className="footer">
                <a href={this.state.github_url} target="_blank" rel="noreferrer">
                    <Logo logo_name="github"></Logo>
                </a>
                <a href={this.state.linkedin_url} target="_blank" rel="noreferrer">
                    <Logo logo_name="linkedin"></Logo>
                </a>
            </div>
        );
    }
}

export default Footer;
