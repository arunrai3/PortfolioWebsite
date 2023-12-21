"use client";

import React, { useState, useEffect } from 'react';

const About = () => {
    const [sliderTransform, setSliderTransform] = useState('translateX(0)');

    useEffect(() => {
        // This effect is used for any additional setup if required
    }, []);

    const handleNavigationClick = (translateValue: string) => {
        setSliderTransform(translateValue);
    };

    return (
        <div className="about-page">
            <div className="about-row">
                <div className="about-column-left">
                    <img src="full_size_portrait.jpg" alt="Portrait" />
                </div>
                <div className="about-column-right">
                    <div className="about-column-right-title">
                        <h1 id="about-title">About Me</h1>
                    </div>
                    <div className="about-column-right-summary">
                        <p id="about-summary">I am a computer science graduate from Roseville, California, with a passion for developing innovative projects and a constant enthusiasm for learning in the ever-evolving field of computer science. Beyond the realm of coding, I have a background in playing basketball, which instilled in me the values of teamwork and perseverance. When I'm not immersed in the world of technology, I enjoy spending quality time with friends, exploring new places, and embracing the joy that comes with creating lasting memories together.</p>
                    </div>
                    <div className="about-column-right-navbar">
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <button onClick={() => handleNavigationClick('translateX(0)')} className="nav-link">Experience</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => handleNavigationClick('translateX(-25%)')} className="nav-link">Skills</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => handleNavigationClick('translateX(-50%)')} className="nav-link">Education</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => handleNavigationClick('translateX(-75%)')} className="nav-link">Services</button>
                            </li>
                        </ul>
                    </div>
                    <div className="about-column-right-navbarinfo">
                        <div id="slider" style={{ transform: sliderTransform }}>
                            {/* Repeat the msg-col divs as needed */}
                            <div className="msg-col">
                                <p>-1Experienced Software Developer: With 3 years of experience in Software development...</p>
                                {/* Other content */}
                            </div>
                            {/* Additional msg-col divs */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;