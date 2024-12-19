import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaCircle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Suraj Joshi',
    role: 'Musician',
    text: 'Outstanding work on my musician portfolio! The custom development perfectly captured my style, making it easy for fans to connect.',
    image: 'https://via.placeholder.com/40', // replace with actual image
  },
  {
    name: 'Jane Doe',
    role: 'Artist',
    text: 'My new website is amazing, and the design really showcases my work. Thank you for the fantastic job!',
    image: 'https://via.placeholder.com/40', // replace with actual image
  },
  {
    name: 'John Smith',
    role: 'Entrepreneur',
    text: 'Great experience! The team was very professional and delivered everything on time.',
    image: 'https://via.placeholder.com/40', // replace with actual image
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialRef = useRef(null);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // GSAP animation
  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    );
  }, [currentSlide]);

  return (
    <div className="w-full flex justify-center items-start bg-black py-36 text-white">
      <div className="max-w-7xl w-full px-6 md:px-12 flex">
        {/* Left Side (Heading Section) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-3xl text-teal-400 mb-2">Testimonial</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">PROUD STORIES</h2>
        </div>

        {/* Right Side (Testimonial Card Section) */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <div className="w-full lg:w-4/5">
            <div
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
              ref={testimonialRef}
            >
              <p className="text-lg mb-4">{testimonials[currentSlide].text}</p>

              <div className="flex items-center">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonials[currentSlide].name}</p>
                  <p className="text-gray-400">{testimonials[currentSlide].role}</p>
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <FaCircle
                  key={index}
                  aria-label={`Slide ${index + 1}`}
                  className={`cursor-pointer mx-1 ${index === currentSlide ? 'text-teal-400' : 'text-gray-600'}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
