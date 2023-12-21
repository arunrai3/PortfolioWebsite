// Footer.tsx

import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
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
          <span className="inline-block tracking-wider"> arunrai202@gmail.com</span>
          
        </div>
        <div className="flex items-center">
        <FaPhone className="ml-2 md:ml-4" /> &nbsp;
          <span className="inline-block tracking-wider"> +1 530-713-4629</span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
