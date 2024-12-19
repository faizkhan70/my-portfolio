import React from 'react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb  } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
const Page1 = () => {
  return (
    <>
    <div className="relative overflow-hidden bg-black">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Me
            </h1>
            <p className="mt-4 text-xl text-gray-300">
            Hi, I'm Faiz Khan, a passionate and dedicated Front-End Developer with a strong focus on creating clean, responsive, and user-friendly web interfaces. With a deep understanding of web technologies like HTML, CSS, JavaScript, and React, I specialize in building seamless and intuitive experiences for users across all devices.
            </p>
          </div>
          <div className="mt-10">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img
                        src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full object-cover object-center"
                        alt="placeholder"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full object-cover object-center"
                        alt="placeholder"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full object-cover object-center"
                        alt="placeholder"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full object-cover object-center"
                        alt="placeholder"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full object-cover object-center"
                        alt="placeholder"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full object-cover object-center"
                        alt="placeholder"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <img
                        src="https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="h-full w-full object-cover object-center"
                        alt="placeholder"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:my-10 my-6 p-4">
  <div className="flex flex-wrap items-center">
  
    <button type="button">
      <span className="bg-white inline-flex text-primary py-2 px-8 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
        <img
          alt="JavaScript"
          src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/javascript.svg"
          className="object-cover w-4 h-4 mr-1"
          loading="lazy"
          width="16"
          height="16"
        />
        <span className="capitalize lg:inline leading-5">JavaScript</span>
      </span>
    </button>
    <button type="button">
      <span className="bg-white inline-flex text-primary py-2 px-8 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
        <img
          alt="node js"
          src="https://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png"
          className="object-cover w-4 h-4 mr-1"
          loading="lazy"
          width="16"
          height="16"
        />
        <span className="capitalize lg:inline leading-5">Node js</span>
      </span>
    </button>
    <button type="button">
      <span className="bg-white inline-flex text-primary py-2 px-8 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
        <img
          alt="Mongodb"
          src="https://pluspng.com/img-png/logo-mongodb-png-mongo-db-badge-sticker-600.png"
          className="object-cover w-4 h-4 mr-1"
          loading="lazy"
          width="16"
          height="16"
        />
        <span className="capitalize lg:inline leading-5">MongoDb</span>
      </span>
    </button>
    <button type="button">
      <span className="bg-white inline-flex text-primary py-2 px-5 items-center justify-between text-xs capitalize border border-gray-400 rounded-full hover:bg-gray-gray1 mb-2 mr-2">
        <img
          alt="TailwindCSS"
          src="https://d26c7l40gvbbg2.cloudfront.net/tool_icons/tailwindcss.svg"
          className="object-cover w-4 h-4 mr-1"
          loading="lazy"
          width="16"
          height="16"
        />
        <span className="capitalize lg:inline leading-5">TailwindCSS</span>
      </span>
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Section - Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="px-8 py-28 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
            <FaReact className="text-5xl text-blue-500 mb-6" />
            <h3 className="text-lg font-semibold">React</h3>
          </div>
          <div className="px-8 py-28 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
            <FaNodeJs className="text-5xl text-green-500 mb-6" />
            <h3 className="text-lg font-semibold">Node</h3>
          </div>
          <div className="px-8 py-28 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
            <SiTailwindcss className="text-5xl text-teal-400 mb-6" />
            <h3 className="text-lg font-semibold">Tailwind CSS</h3>
          </div>
          <div className="px-8 py-28 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
            <SiMongodb className="text-5xl text-green-600 mb-6" />
            <h3 className="text-lg font-semibold">MongoDB</h3>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className='mt-20'>
          <h2 className="text-6xl font-medium text-gray-400 mb-2">My Skill</h2>
          <h1 className="text-4xl font-bold mb-5 mt-7">what I Do</h1>
          <p className="text-gray-300 leading-relaxed">
          As a Front-End Developer, I specialize in creating visually captivating and user-friendly web interfaces that bring ideas to life.
          Responsive Web Development
I build responsive websites and applications that look great and function flawlessly across all devices, from desktops to mobile screens.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* WordPress */}
        <div className="px-8 py-16 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase  shadow-md flex flex-col items-center">
          <FaReact className="text-5xl text-white mb-4" />
          <h3 className="text-lg font-semibold text-white">React</h3>
        </div>
        {/* Figma */}
        <div className="px-8 py-16 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
          <SiTailwindcss className="text-5xl text-white mb-4" />
          <h3 className="text-lg font-semibold text-white">Tailwind css</h3>
        </div>
        {/* Shopify */}
        <div className="px-8 py-16 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
          < SiMongodb className="text-5xl text-white mb-4" />
          <h3 className="text-lg font-semibold text-white">MongoDb</h3>
        </div>
        {/* Bootstrap */}
        <div className="px-8 py-16 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
          <FaBootstrap className="text-5xl text-white mb-4" />
          <h3 className="text-lg font-semibold text-white">Bootstrap</h3>
        </div>
        {/* Adobe XD */}
        <div className="px-8 py-16 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
          <FaNodeJs className="text-5xl text-white mb-4" />
          <h3 className="text-lg font-semibold text-white">Node js</h3>
        </div>
        {/* JavaScript */}
        <div className="px-8 py-16 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase shadow-md flex flex-col items-center">
          <FaJs className="text-5xl text-white mb-4" />
          <h3 className="text-lg font-semibold text-white">JavaScript</h3>
        </div>
      </div>
    </section>
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <p className="text-gray-400 leading-relaxed">
            With 1+ years of experience, Faiz khan specializes in crafting beautiful, high-performing websites using custom Frameworks and Gsap like React, Next, Node, and modern UI/UX principles.
          </p>
          <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition">
            BROWSE PORTFOLIO
          </button>
        </div>

        {/* Center Column */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="text-center">
            <h1 className="text-7xl font-bold text-white">1+</h1>
            <p className="text-gray-400 text-lg mt-2">YEARS OF EXPERIENCE</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-400">
          {/* Expertise */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-1">EXPERTISE</h3>
            <p>UI UX & Web Design/Dev</p>
          </div>
          {/* Backend */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-1">BACKEND</h3>
            <p>Node & MongoDb</p>
          </div>
          {/* Based In */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-1">BASED IN</h3>
            <p>Uttarpardesh, India</p>
          </div>
          {/* Languages */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-1">LANGUAGES</h3>
            <p>English, Hindi</p>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default Page1;
