import React from 'react';
import Hero from '../components/sections/Hero';
import WhyUs from '../components/sections/WhyUs';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs preview />
      <Services preview />
      <Projects preview />
      <Process />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
