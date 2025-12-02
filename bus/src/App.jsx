import React, { useEffect, useState } from "react";
import Hero from './Components/Hero';
import SafarniSection from './Components/SafarniSection';
import AboutSection from './Components/AboutSection';
import ServicesSection from './Components/ServicesSection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  

  return (
    <>
      <Hero currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
      <SafarniSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;


