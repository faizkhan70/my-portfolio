import React from 'react'
import Nav from './nav/Nav';
import Hero from './hero/Hero';
import Experience from './experience/Experience';
import About from './about/About';
import Work from './work/Work';
import Testimonial from './testimonial/Testimonial ';
import Contact from './contact/Contact';

const Main = () => {
  return (
    <div>
      <Hero/>
      <Experience/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default Main;
