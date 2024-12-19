import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center py-6 px-4 md:px-12">
      {/* Main Container */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center bg-black p-10 rounded-lg shadow-lg text-white">
        
        {/* Left Side - Heading */}
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0 flex flex-col items-start justify-center text-left">
          <h1 className="text-5xl font-bold text-gray-200 mb-4">START PROJECTS?</h1>
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-2/3 w-full">
          <h2 className="text-3xl font-bold mb-8">Let's Get In Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-teal-400 focus:outline-none"
                  placeholder="Enter your name here"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-teal-400 focus:outline-none"
                  placeholder="Add email"
                  required
                />
                <small className="text-gray-400 mt-2">Example: user@website.com</small>
              </div>

              {/* Telephone */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2" htmlFor="telephone">
                  Telephone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-teal-400 focus:outline-none"
                  placeholder="+91 12345 67890"
                  required
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-teal-400 focus:outline-none"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            {/* Comments/Questions */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2" htmlFor="message">
                Comments / Questions
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-teal-400 focus:outline-none"
                rows="4"
                placeholder="Add text"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-left">
            <button type='submit' className="mt-6 px-14 py-3 border border-gray-400 hover:bg-gray-700 text-sm tracking-widest uppercase">
         Sumbit
        </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
