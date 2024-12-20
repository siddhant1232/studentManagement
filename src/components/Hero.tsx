import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');  // Navigate to the login page when the button is clicked
  };

  return (
    <section className="bg-black py-20 mt-40 text-white mb-[10px]">
      <div className="container mx-auto text-center">
        <h1 className="text-[40px] font-bold mb-0" style={{ color: '#223D69' }}>
          AI-driven finance assistant
        </h1>
        <p className="text-[42px] mt-[-10px]" style={{ color: '#3265AE' }}>
          for your Transaction Tracking
        </p>
        <button
          onClick={handleGetStarted} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mt-[50px]"
          style={{ width: '150px' }} 
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
