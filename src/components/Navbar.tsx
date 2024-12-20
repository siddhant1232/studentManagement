import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md mt-4 mx-8 rounded-full fixed top-0 left-0 right-0 z-50 border-2 border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide hover:text-blue-400 transition duration-300">FineTrack</h1>
        <ul className="flex space-x-6">
          <li>
            <a 
              href="#features" 
              className="hover:text-blue-400 transition duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="#profile" 
              className="hover:text-blue-400 transition duration-300"
            >
              Profile
            </a>
          </li>
          <li>
            <a 
              href="#support" 
              className="hover:text-blue-400 transition duration-300"
            >
              Help & Support
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
