import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Counter from './Counter';

const Hero = ({ currentSlide, setCurrentSlide, isMenuOpen, setIsMenuOpen, scrolled }) => {
  const slides = [
    "/src/assets/hero11.jpg",
    "/src/assets/hero2.jpg",
    "/src/assets/hero3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      className="relative h-screen overflow-hidden flex items-center text-white"
    >
      {/* Slider Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navbar with Framer Motion */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-24 transition-all duration-400 ${
          scrolled ? " backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          <img
            src="/src/assets/logo.png"
            alt="Saferni Logo"
            className="h-10 md:h-12 object-contain"
          />




          <nav className={`hidden md:flex gap-10 text-lg font-medium ml-auto ${
            scrolled ? "text-[#0d2a30]" : "text-white"
          }`}>
            {["Home", "About", "Services", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="relative hover:text-yellow-400 transition"
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

       
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-4xl transition-colors duration-300 ${
                scrolled ? "text-[#0d2a30]" : "text-white"
              }`}
            >
              ☰
            </button>

       
       
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 right-0 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  {["Home", "About", "Services", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-8 py-4 text-[#0d2a30] hover:bg-yellow-50 hover:text-yellow-600 font-medium transition"
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="text-3xl md:text-5xl text-yellow-400 drop-shadow-2xl"
            >
              ★
            </span>
          ))}
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
          follow your destination
        </h2>
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 mb-12">
          App number 1 in <span className="text-yellow-400">Syria</span>
        </p>
        <button className="bg-[#243D42] hover:bg-[#0d2a30] text-white font-bold py-2 sm:py-3 md:py-5 px-6 sm:px-8 md:px-16 rounded-3xl text-base sm:text-lg md:text-xl transition transform hover:scale-105 shadow-2xl border border-white/20">
          Book Now
        </button>
      </div>

      {/* Stats Counter */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#243D42] py-8 md:py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Counter end={100} label="Customer" />
          <Counter end={50} label="Bus" />
          <Counter end={10} label="City" />
          <Counter end={70} label="Success" />
        </div>
      </div>
    </section>
  );
};

export default Hero;