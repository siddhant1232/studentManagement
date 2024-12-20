import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16 flex-grow">
        {/* Mission Statement Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-gray-200 p-8 rounded-lg shadow-2xl mb-16 transform transition-all hover:scale-105">
          <h2 className="text-4xl font-extrabold text-center animate__animated animate__fadeIn">
            Our Mission
          </h2>
          <p className="text-xl mt-4 max-w-3xl mx-auto text-center animate__animated animate__fadeIn animate__delay-1s">
            At Fine Track, we believe in revolutionizing personal finance management with intelligent tools and seamless integration. Our mission is to empower individuals with the right financial insights, making money management simple, efficient, and transparent.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* Team Member: Divyanshu */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600">
              <img src="Divyanshu.jpg" alt="Divyanshu" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 hover:border-indigo-500 transition-all duration-300" />
              <h3 className="text-xl font-semibold">Divyanshu</h3>
              <p className="text-gray-400">AI Developer</p>
              <p className="mt-2 text-gray-300">
                Divyanshu is passionate about building AI systems that optimize decision-making in real-time applications.
              </p>
            </div>
            {/* Team Member: Siddhant */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600">
              <img src="Siddhant.jpg" alt="Siddhant" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 hover:border-indigo-500 transition-all duration-300" />
              <h3 className="text-xl font-semibold">Siddhant</h3>
              <p className="text-gray-400">Backend Developer</p>
              <p className="mt-2 text-gray-300">
                Siddhant is an expert in server-side technologies and ensures our systems run smoothly at scale.
              </p>
            </div>
            {/* Team Member: Srijan */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600">
              <img src="Srijan.jpg" alt="Srijan" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 hover:border-indigo-500 transition-all duration-300" />
              <h3 className="text-xl font-semibold">Srijan</h3>
              <p className="text-gray-400">Database Developer</p>
              <p className="mt-2 text-gray-300">
                Srijan designs and maintains our robust database infrastructure, ensuring data is always secure and accessible.
              </p>
            </div>
            {/* Team Member: Rohit */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600">
              <img src="Rohit.jpg" alt="Rohit" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 hover:border-indigo-500 transition-all duration-300" />
              <h3 className="text-xl font-semibold">Rohit</h3>
              <p className="text-gray-400">UI/UX & Animations</p>
              <p className="mt-2 text-gray-300">
                Rohit brings our platform to life with stunning UI/UX and smooth animations that create an engaging user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-center text-white py-4 mt-auto">
        <p>&#169; 2024 Fine Track. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
