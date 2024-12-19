import React from 'react'

const Work = () => {
  return (
    <div>
  <section className="bg-black text-white">
  <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
    {/* Centered Heading */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold">My Work</h2>
    </div>

    {/* Grid Layout for Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
      <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
        <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <img 
            src="https://i.ibb.co/jMGBRXx/Screenshot-2024-12-20-023904.png" 
            alt="" 
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-gray-600 absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"> Digiminnion.com</h3>
        </a>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
        <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
          <img 
            src="https://i.ibb.co/cTyWypz/Screenshot-2024-12-20-024350.png" 
            alt="" 
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-gray-600 absolute top-0 left-0 p-1 xs:text-xl md:text-3xl"> Diztoversity</h3>
        </a>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
          <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
            <img 
              src="https://i.ibb.co/sRC009m/Screenshot-2024-12-20-042648.png" 
              alt="" 
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-gray-600 absolute top-0 left-0 p-10 xs:text-xl md:text-3xl">Techmaez</h3>
          </a>
          <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
            <img 
              src="https://cdn.pixabay.com/photo/2014/09/21/00/29/google-images-454541_960_720.jpg" 
              alt="" 
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-gray-600 absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Google analytic</h3>
          </a>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
        <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <img 
            src="https://cdn.pixabay.com/photo/2013/01/29/00/47/google-76517_1280.png" 
            alt="" 
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
          <h3 className="z-10 text-2xl font-medium text-gray-600 absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Google Search</h3>
        </a>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Work;
