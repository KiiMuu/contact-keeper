import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className="about uk-text-center uk-padding uk-margin-medium-top">
            <h3 className="uk-text-uppercase">About this application</h3>
            <p>This is a MERN stack web application to track contacts</p>
            <span>Version: <span className="uk-label">1.0.0</span></span>
            <span className="uk-display-block">Author: <a href="https://github.com/KiiMuu">Karim MuHamad</a></span>
        </div>
    )
}

export default About;
