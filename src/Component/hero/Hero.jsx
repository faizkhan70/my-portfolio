import { FaPinterest, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiMongodb  } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
const Hero = () => {
  return (
    <>
    <section className="relative bg-black text-white h-screen flex items-center justify-center">
      {/* Grid Layout */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 px-4 md:px-16">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h2 className="text-lg font-bold uppercase">Expertise</h2>
          <p className="text-sm">Front End Developer / Designer</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h2 className="text-lg font-bold uppercase">Backend</h2>
          <p className="text-sm">Node and MongoDb</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h2 className="text-lg font-bold uppercase">Browse My Projects</h2>
          <p className="text-sm">Portfolio</p>
        </div>

        {/* Center Image */}
        <div className="col-span-3 row-span-3 flex items-center justify-center relative">
          <div className="relative z-10">
            <img
              src="https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009_1280.jpg" // Replace with actual image
              alt="Hero Person"
              className="w-48 md:w-80 rounded-full object-cover shadow-lg animate-ping"
            />
          </div>
          <h1 className="absolute bottom-12 md:bottom-16 z-20 text-5xl md:text-9xl font-extrabold tracking-tight text-gray-100 uppercase text-center leading-tight">
            Hello <span className="block">World</span>
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h2 className="text-lg font-bold uppercase">Based In</h2>
          <p className="text-sm">Raebaerli | Uttarpardesh, India</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h2 className="text-lg font-bold uppercase">Experience</h2>
          <p className="text-sm">1+ Years</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h2 className="text-lg font-bold uppercase">Known Languages</h2>
          <p className="text-sm">Hindi, English</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-20 flex gap-6 z-30 text-gray-300">
        <a href="#" className="hover:text-gray-400 transition">
          <FaPinterest size={24} />
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <FaBehance size={24} />
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <FaLinkedin size={24} />
        </a>
      </div>
    </section>
    <section className="bg-black py-12">
      {/* Skills Container */}
      <div className="flex justify-center items-center gap-8 flex-wrap px-4">
        {/* Skill Items */}
        <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-gray-900 to-gray-800 w-24 h-36 md:w-32 md:h-48 shadow-md hover:scale-105 transition-transform duration-300">
          < SiTailwindcss size={48} className="text-gray-300" />
          <p className="text-white mt-2 text-xs md:text-sm tracking-wide uppercase">
           Tailwind css
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-gray-900 to-gray-800 w-24 h-36 md:w-32 md:h-48 shadow-md hover:scale-105 transition-transform duration-300">
          <FaJs size={48} className="text-gray-300" />
          <p className="text-white mt-2 text-xs md:text-sm tracking-wide uppercase">
            JavaScript
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-gray-900 to-gray-800 w-24 h-36 md:w-32 md:h-48 shadow-md hover:scale-105 transition-transform duration-300">
          < SiMongodb  size={48} className="text-gray-300" />
          <p className="text-white mt-2 text-xs md:text-sm tracking-wide uppercase">
           MongoDb
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-gray-900 to-gray-800 w-24 h-36 md:w-32 md:h-48 shadow-md hover:scale-105 transition-transform duration-300">
          <FaReact size={48} className="text-gray-300" />
          <p className="text-white mt-2 text-xs md:text-sm tracking-wide uppercase">
           React
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-gray-900 to-gray-800 w-24 h-36 md:w-32 md:h-48 shadow-md hover:scale-105 transition-transform duration-300">
          < FaNodeJs size={48} className="text-gray-300" />
          <p className="text-white mt-2 text-xs md:text-sm tracking-wide uppercase">
           Node js
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-gray-900 to-gray-800 w-24 h-36 md:w-32 md:h-48 shadow-md hover:scale-105 transition-transform duration-300">
          <SiExpress size={48} className="text-gray-300" />
          <p className="text-white mt-2 text-xs md:text-sm tracking-wide uppercase">
          Express js
          </p>
        </div>
      </div>
    </section>
   </>
  );
};

export default Hero;
