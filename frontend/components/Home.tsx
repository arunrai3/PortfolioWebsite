"use client";

import GLOBE from "vanta/src/vanta.globe";
import Link from "next/link";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link as ScrollLink } from 'react-scroll'; // react-scroll Link
export default function Landing() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0x2f2fe3,
					backgroundColor: 0x0,
				})
			);
		}
	}, [vantaEffect]);
	return (
		<div
			className='bg-slate-950 min-h-screen w-full flex flex-col items-start text-gray-200 pt-60'
			ref={vantaRef}>
			<div className=' mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32'>
				<h1 className='tracking-wider font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
					Arun Rai
				</h1>
				<h2 className='tracking-wider text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mt-4 font-semilight'>
					Software Engineer | Northern California
				</h2>
				<div className='flex space-x-6 my-4'>
					<Link
						href='https://github.com/arunrai3'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<FaGithub />
						</p>
					</Link>
					<Link
						href='https://twitter.com/arunrai32'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<BsTwitterX />
						</p>
					</Link>
					<Link
						href='https://www.linkedin.com/in/arunrai32/'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<FaLinkedinIn />
						</p>
					</Link>
				</div>
				
				<div>
                    <ScrollLink to="about" smooth={true} duration={500}>
                        <button className='tracking-wider border-blue-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out bg-blue-800 hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-900'>
                            About Me
                        </button>
                    </ScrollLink>
                </div>
                <div>
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        <button className='tracking-wider border-blue-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out bg-blue-800 hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-900'>
                            Projects
                        </button>
                    </ScrollLink>
                </div>
				
				<div>
				<a
					href='https://google.com'
					target='_blank' //
					download='arunrairesume.pdf'>
					<button className='tracking-wider border-blue-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out bg-blue-800 hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-900'>
					Download Resume
					</button>
					
				</a>
				</div>


			</div>
		</div>
	);
}
