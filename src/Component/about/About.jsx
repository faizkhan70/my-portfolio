import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row items-center justify-center lg:justify-between py-16 px-6 lg:px-32 gap-12">
      {/* Left Section - Profile Image and Vertical Text */}
      <div className="flex items-center lg:space-x-8 relative">
        {/* Vertical Text (Rotated) */}
        <div className="hidden lg:block absolute -left-32 top-1/2 transform -translate-y-1/2 rotate-90 text-lg font-bold tracking-widest">
          ABOUT FAIZ KHAN
        </div>

        <div className="relative">
          {/* Image with rounded arch-like styling */}
          <img
            src="https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_1280.jpg" // Replace with your image URL
            alt="Profile"
            className="rounded-[40px] object-cover w-[320px] h-[440px] shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-[40px] border-4 border-blue-500 opacity-25"></div>
        </div>

        {/* For smaller screens - Vertical Text below the image */}
        <p className="lg:hidden text-center text-lg font-bold tracking-widest mt-6">
          ABOUT FAIZ KHAN
        </p>
      </div>

      {/* Right Section - Experience & Description */}
      <div className="flex flex-col items-center lg:items-start mt-12 lg:mt-0 lg:ml-12">
        {/* Circular Years of Experience */}
        <div className="relative flex animate-pulse items-center justify-center w-[220px] h-[220px] bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 rounded-full shadow-lg">
          <div className="absolute text-6xl font-bold text-white">1+</div>
          <p className="absolute bottom-12 text-xs text-gray-400">YEARS OF EXPERIENCE</p>
        </div>

        {/* Text Description */}
        <p className="mt-8 text-center lg:text-left text-gray-400 text-lg max-w-lg leading-relaxed">
          Hey there! I’m Faiz khan, a UI Developer who geeks out over clean code and pixel-perfect designs.
        </p>

        {/* Read More Button */}
        <button className="mt-6 px-6 py-2 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
