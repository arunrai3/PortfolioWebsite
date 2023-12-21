"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FullSizePortrait from '../public/images/full_size_portrait.jpg';

const About = () => {
    const [sliderTransform, setSliderTransform] = useState('translateX(0)');

    useEffect(() => {
        // Additional setup if required
    }, []);

    const handleNavigationClick = (translateValue: string) => {
        setSliderTransform(translateValue);
    };

    return (
        <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center pt-12">
            <div className="grid grid-cols-2 gap-6 p-4 lg:p-12 bg-slate-950 w-full">
                <div className="bg-slate-950 rounded-xl p-4 flex flex-col justify-center items-center">
                    <Image src={FullSizePortrait} alt="Portrait" width={500} height={300} className="rounded-xl" />
                </div>

                <div className="bg-slate-950 rounded-xl p-4 flex flex-col justify-start">
                    
                    <div className="mt-4">
                        <h1 className="tracking-wider text-white text-4xl font-bold mb-2">About Me</h1>
                        <p className="tracking-wider text-gray-300 font-light mb-4">
                        I am a computer science graduate from Roseville, California, with a passion for developing innovative projects and a constant enthusiasm for learning in the ever-evolving field of computer science. Beyond the realm of coding, I have a background in playing basketball, which instilled in me the values of teamwork and perseverance. When I'm not immersed in the world of technology, I enjoy spending quality time with friends, exploring new places, and embracing the joy that comes with creating lasting memories together.
                        </p>
                    </div>
                    <div className="slider-section">
                        <h2 className="text-white text-2xl font-bold">Experience</h2>
                        <p className="text-gray-300 mb-2">Details about work experience and past projects...</p>
                    </div>
                    <div className="slider-section">
                        <h2 className="text-white text-2xl font-bold">Skills</h2>
                        <p className="text-gray-300 mb-2">List of skills, perhaps in bullet points...</p>
                    </div>
                    <div className="slider-section">
                        <h2 className="text-white text-2xl font-bold">Education</h2>
                        <p className="text-gray-300 mb-2">Information about academic background...</p>
                    </div>
                    <div className="slider-section">
                        <h2 className="text-white text-2xl font-bold">Services</h2>
                        <p className="text-gray-300 mb-2">Description of services offered, areas of expertise...</p>
                    </div>                    
                </div>

            </div>
        </div>
    );
};

export default About;