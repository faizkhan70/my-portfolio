import React from 'react'

const Page2 = () => {
  return (
    <div>
<section className="w-full bg-black px-8 py-24 mx-auto max-w-screen flex flex-col lg:h-auto justify-center md:px-12 lg:px-32">
  <div className="flex flex-col">
    <div className="prose text-white prose-sm prose-headings:font-normal prose-headings:text-xl">
      <div>
        <h1 className='text-6xl'>My Portfolio</h1>
        <p className="text-balance mt-6">
        Explore my portfolio of innovative web design and Front End Developer projects, featuring creative solutions and high-performance designs tailored to the needs
        </p>
      </div>
    </div>
    {/* Features Section */}
    <div className="mt-6 border-t border-gray-700 pt-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
        {/* Left Content */}
        <div>
          <span className="text-gray-400 uppercase text-xs font-medium">UI Desing / Development</span>
          <p className="text-4xl mt-8 tracking-tighter font-semibold text-white text-balance">
          Digiminnion.com
          </p>
          <p className="text-sm mt-4 text-gray-300 text-balance">
           Technologies I used For
          </p>
          <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-300">
            {[
              { icon: "icon-tabler-360", label: "React Js" },
              { icon: "icon-tabler-antenna-bars-3", label: "Tailwind css" },
              { icon: "icon-tabler-load-balancer", label: "Gsap" },
              { icon: "icon-tabler-brand-speedtest", label: "Deploy url : https://digiminnio.netlify.app/ " },
            ].map(({ icon, label }, index) => (
              <div key={index} className="inline-flex items-center gap-2 text-xs">
                <svg className={`icon text-gray-300 size-4 ${icon}`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {/* SVG Path here */}
                </svg>
                <span className="text-white font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right Image */}
        <div className="h-full md:order-first">
          <img
            src="https://i.ibb.co/jMGBRXx/Screenshot-2024-12-20-023904.png"
            alt="Financial Solutions"
            className="bg-white overflow-hidden aspect-square w-full h-full object-cover object-center"
          />
        </div>
      </div>
      {/* Second Grid Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse mt-12">
        <div>
          <span className="text-gray-400 uppercase text-xs font-medium">UI Desing / Development</span>
          <p className="text-4xl mt-8 tracking-tighter font-semibold text-white text-balance">
          Diztoversity
          </p>
          <p className="text-sm mt-4 text-gray-300 text-balance">
          Technologies I used For
          </p>
          <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-300">
            {[
              { icon: "icon-tabler-database", label: "React js" },
              { icon: "icon-tabler-building", label: "Swiper Js" },
              { icon: "icon-tabler-augmented-reality-2", label: "Aos Effects" },
              { icon: "icon-tabler-speed", label: "Deploy Url : https://diztoversity.netlify.app/" },
            ].map(({ icon, label }, index) => (
              <div key={index} className="inline-flex items-center gap-2 text-xs">
                <svg className={`icon text-gray-300 size-4 ${icon}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {/* SVG Path here */}
                </svg>
                <span className="text-white font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="h-full">
          <img
            src="https://i.ibb.co/cTyWypz/Screenshot-2024-12-20-024350.png"
            alt="Financial Solutions"
            className="bg-white overflow-hidden aspect-square w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  )
}

export default Page2;
