// Footer.tsx

import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4 w-full ">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-2xl mx-auto">
        <div className="flex items-center">
          <span className="font-bold text-lg tracking-wider text-blue-500">Arun Rai</span>
        </div>
        <div className="flex items-center">
        <FaEnvelope className="ml-2 md:ml-4" /> &nbsp;
          <span className="inline-block tracking-wider"> arai12@wgu.edu</span>
          
        </div>
        <a href="https://www.linkedin.com/in/arunrai32" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
              <FaLinkedin className="ml-2 md:ml-4" /> &nbsp;
              <span className="inline-block tracking-wider">arunrai32</span>
          </div>
        </a>




      </div>
    </footer>
  );
};

export default Footer;
