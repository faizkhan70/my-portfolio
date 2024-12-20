import React from "react";

const Page4 = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
      {/* Left Side - Grid Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-1/2">
        <div className="flex flex-col items-center px-6 py-4 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase">
          <div className="text-4xl mb-4">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-lg mt-2">+91 7054856378</p>
        </div>
        <div className="flex flex-col items-center px-6 py-4 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest">
          <div className="text-4xl mb-4">
            <i className="fas fa-envelope"></i>
          </div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-lg mt-2">fkuser67@gmail.com</p>
        </div>
      </div>
  
      {/* Right Side - Contact Form */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center lg:text-left">
          Let's Get In Touch
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="full-name">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter your name here"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="email-address">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email-address"
              placeholder="Example: user@website.com"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="telephone">
              Telephone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              placeholder="+91 12345 67890"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="How can we help you?"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2" htmlFor="comments">
              Comments / Questions
            </label>
            <textarea
              id="comments"
              rows="4"
              placeholder="Add text"
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  

  );
};

export default Page4;
