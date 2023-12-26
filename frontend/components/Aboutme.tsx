"use client";

import React, { useState } from 'react';
import Image from 'next/image';


const About = () => {
    
    return (
        <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-12 bg-slate-950 w-full">
                <div className="bg-slate-950 rounded-xl p-4 flex flex-col justify-center items-center">
                    <Image src="/static/images/full_size_portrait.jpg" alt="Portrait" width={500} height={625} className="rounded-xl" />
                </div>

                <div className="bg-slate-950 rounded-xl p-4 flex flex-col justify-start">
                    
                    <div className="mt-4">
                        <h1 className="tracking-wider text-white text-4xl font-bold mb-2">About Me</h1>
                        <p className="tracking-wider text-gray-300 font-light mb-4">
                        I am a computer science graduate from Roseville, California, with a passion for developing innovative projects and a constant enthusiasm for learning in the ever-evolving field of computer science. Beyond the realm of coding, I have a background in playing basketball, which instilled in me the values of teamwork and perseverance. When I&apos;m not immersed in the world of technology, I enjoy spending quality time with friends, exploring new places, and embracing the joy that comes with creating lasting memories together.
                        </p>
                    </div>
                    <div className="slider-section">
                        <h2 className="text-white text-2xl font-bold">Education</h2>
                        <p className="text-gray-300 mb-2"><strong>B.S Computer Science |</strong> Western Governors University | Salt Lake City, UT | 2020-2023</p>
                    </div>
                    <div className="slider-section">
                        <h2 className="text-white text-2xl font-bold">Experience</h2>
                        <p className="text-gray-300 mb-0"><strong>Upwork | Software Developer</strong></p>
                        <p className="text-gray-300 mb-2">During my second year of college I took up a project for a client that wanted to switch from manual trading which specifcally relied on the sentiment of the trading community to automated trading. I accomplished this by automating the transformation of English Discord messages into trade tickets through the use of Python NLTK, while also conducting web scraping using Selenium from social media platforms and performing sentiment analysis on the gathered data. Additionally, I implemented robust version control practices using Git, conducted thorough unit testing, and carried out regression testing to ensure the reliability and quality of our software. Moreover, I prioritized security measures to safeguard our systems and data. As a result of these efforts, I enabled the client to achieve remarkable efficiency gains, saving 6 hours each day, while also eliminating trade misses.</p>
                    </div>
                    <div className="slider-section">
                        <h2 className="text-white text-2xl font-bold">Skills</h2>
                        <p className="text-gray-300 mb-0"><strong>Languages |</strong> Java, JavaScript, TypeScript Python, C++, C#, HTML/CSS, SQL</p>
                        <p className="text-gray-300 mb-0"><strong>Cloud Platforms |</strong> AWS, GCP, Microsoft Azure</p>
                        <p className="text-gray-300 mb-0"><strong>Databases |</strong> MySQL, PostgreSQL, MongoDB</p>
                        <p className="text-gray-300 mb-0"><strong>Front-end Frameworks and Tools |</strong> React.js, Next.js, Bootsrap, Tailwind CSS</p>
                        <p className="text-gray-300 mb-0"><strong>Back-end Frameworks and Tools |</strong> Flask, Django, Express.js, Pandas, NumPy</p>
                        <p className="text-gray-300 mb-0"><strong>API and Web Services  |</strong> WebSockets, RESTful API Calls, HTTP Requests</p>
                        <p className="text-gray-300 mb-0"><strong>IDEs and Code Editors |</strong> Microsoft VSCode, Eclipse, NetBeans, Intellij, PyCharm</p>
                        <p className="text-gray-300 mb-2"><strong>AI/ML Tools and Methodologies |</strong>  Python NLTK, OpenAI API, sickit-learn, Decision Trees, Bayes Theorem, Probability Theory</p>
                    </div>

                    <div className="slider-section">
                        <h2 className="text-white text-2xl font-bold">Awards</h2>
                        <p className="text-gray-300 mb-0"><strong>Capstone Excellence Award | Stock Market Predicition Model</strong></p>
                        <p className="text-gray-300 mb-2">I developed a project and research paper that earned a Capstone Excellence Award during my final year of university. The project comprises an algorithm with a command-line interface, offering quantitative stock analysis and a machine learning model for predicting whether the selected stock will close green or red the next day. In addition to outlining the practical application of this technology for financial institutions, the research paper delves into the model's performance in relation to stocks with higher volatility, discovering its enhanced effectiveness on data with a smaller standard deviation.</p>
                        <div className='mt-4 flex space-x-4'>
                            <a
                                href="https://google.com"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='tracking-wider bg-blue-700 text-white py-1 px-2 rounded-md text-sm transition duration-300 hover:bg-blue-600'>
                                GitHub
                            </a>
                            <a
                                href="https://google.com"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='tracking-wider border-blue-800 border-2 text-white py-1 px-2 rounded-md text-sm transition duration-300 hover:bg-blue-600 hover:border-blue-800'>
                                View Paper
                            </a>
                        </div>
                    </div>                    
                </div>

            </div>
        </div>
    );
};

export default About;