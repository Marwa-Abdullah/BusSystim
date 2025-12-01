import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
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

 
  
  const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [inView, end]);

    return (
      <div ref={ref}>
        <h3 className="text-5xl md:text-6xl font-black text-white">
          {count === end ? end : count}+
        </h3>
        <p className="text-lg mt-2">{label}</p>
      </div>
    );
  };

  return (
    <>
      {/* ===== HERO SECTION WITH SLIDER ===== */}
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
          className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-24"
        >
          <div className="flex justify-between items-center">
            <img
              src="/src/assets/logo.png"
              alt="Saferni Logo"
              className="h-10 md:h-12 object-contain"
            />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-auto text-white text-3xl"
            >
              ☰
            </button>

            <nav className="hidden md:flex gap-10 text-white text-lg font-medium ml-auto">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="relative hover:text-yellow-400 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
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
          </div>
          <div className="w-full h-px bg-white/40 mt-4" />
        </motion.header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-lg fixed top-20 left-0 right-0 z-40 px-6 py-6"
            >
              <div className="flex flex-col gap-6 text-white text-lg font-medium">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="hover:text-yellow-400 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="flex justify-center gap-2 mb-8">
  {[...Array(5)].map((_, i) => (
    <span
      key={i}
      className="text-4xl md:text-6xl text-yellow-400 drop-shadow-2xl"
    >
      ★
    </span>
  ))}
</div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            follow your destination
          </h2>
          <p className="text-4xl md:text-6xl font-bold mt-6 mb-12">
            App number 1 in <span className="text-yellow-400">Syria</span>
          </p>
          <button className="bg-[#243D42] hover:bg-[#0d2a30] text-white font-bold py-3 sm:py-5 px-8 sm:px-16 rounded-3xl text-lg sm:text-xl transition transform hover:scale-105 shadow-2xl border border-white/20">
            Book Now
          </button>
        </div>

        {/* Stats Counter */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#243D42] py-12">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Counter end={100} label="Customer" />
            <Counter end={50} label="Bus" />
            <Counter end={10} label="City" />
            <Counter end={70} label="Success" />
          </div>
        </div>
      </section>


   {/* ===== SECOND SECTION - SAFERNI ===== */}
   <section className="relative min-h-screen bg-[#f5f1e9] flex flex-col items-center justify-center overflow-hidden pt-40 pb-20">

  
   <img src="/src/assets/p2.png"
     className="absolute top-32 sm:top-20 md:top-30 left-1/2 -translate-x-1/2 w-24 sm:w-64 md:w-[500px] lg:w-[600px] opacity-70 " />

   <img src="/src/assets/p1.png"
     className="absolute top-16 sm:top-32 left-2 sm:left-20 w-20 sm:w-40 md:w-60" />

   <img src="/src/assets/bus-sketch.png"
     className="absolute top-12 sm:top-24 right-2 sm:right-10 w-24 sm:w-44 md:w-60" />


  <p className="text-black text-lg sm:text-xl font-light tracking-wide z-20 text-center mb-4">
    Follow the Destination
  </p>

  {/* SAFERNI */}
  <div className="relative text-center z-30">
    <h1 className="text-[52px] sm:text-[90px] md:text-[150px] font-black text-[#0d403d] leading-none">
      SAFERNI
    </h1>

    <div className="absolute -top-9 sm:-top-9 right-[-55px]  md:right-[-100px] rotate-[-310deg]">
      <span className="text-sm sm:text-xl md:text-3xl font-extrabold text-black">
        Black Friday <span className="text-red-500">offers</span>
      </span>
    </div>
  </div>

  {/* الباص */}
  <img
    src="/src/assets/bus.png"
    className="relative z-20 w-[300px] sm:w-[450px] md:w-[900px] max-w-[95%] -mt-2 sm:-mt-4 md:-mt-1 drop-shadow-2xl"
    alt="bus"
  />

  {/* Scroll على اليسار */}
  {/* <div className="absolute left-6 sm:left-10 top-[60%] md:top-[58%] -translate-y-1/2 flex flex-col items-center gap-2">
    <div className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center"></div>
    <p className="text-gray-700 font-medium text-sm">Scroll</p>
  </div> */}

  {/* الأسفل */}
  <div className="w-full text-center mt-10 relative px-6">

    <img src="/src/assets/map.png"
      className="absolute left-2 sm:left-10 -top-4 w-16 sm:w-24 md:w-32 opacity-70" />

    <svg className="w-full max-w-xl h-20 mx-auto" viewBox="0 0 400 80">
      <path d="M 10 50 Q 200 10, 390 50"
        stroke="#aaa" strokeWidth="2.5"
        fill="none" strokeDasharray="10,10" />
    </svg>

    <p className="text-base sm:text-lg md:text-xl text-gray-800 mt-4">
      One <span className="text-yellow-500">App</span> thousands roads
    </p>

    <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 flex-wrap">
      <div className="h-px flex-1 min-w-20 border-t-2 border-dashed border-gray-300"></div>

      <button className="bg-yellow-400 hover:bg-yellow-500 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-gray-900 text-sm sm:text-lg shadow-lg transition transform hover:scale-105">
        Book Now
      </button>

      <div className="h-px flex-1 min-w-20 border-t-2 border-dashed border-gray-300"></div>
    </div>

  </div>

</section>


      {/* ===== ABOUT US ===== */}
      <section id="About" className="relative bg-[#f5f1e9] px-6 py-24 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#0d403d] leading-none">
              ABOUT US
            </h2>
            <img
              src="/src/assets/bus-front.png"
              alt="bus"
              className="relative -mt-12 md:-mt-20 w-full max-w-md mx-auto drop-shadow-2xl"
            />
            <p className="mt-6 md:mt-8 text-gray-600 text-base md:text-lg leading-relaxed">
              At Safarni, we make traveling across Syria simple, reliable, and stress-free.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At Safarni, we make traveling across Syria simple, reliable, and stress-free.
              Our mission is to connect people with every destination through an easy-to-use
              platform that brings comfort and convenience to every trip.
              <br /><br />
              Wherever you’re going — Safarni takes you there, safely and smoothly.
            </p>

            <div className=" relative">
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-yellow-500 opacity-20 absolute -top-90 md:-top-22 -left-6 md:-left-2 ">
                Since 1940
              </h3>
              <img
                src="/src/assets/people-bus.png"
                alt="people"
                className="w-full max-w-lg rounded-3xl shadow-2xl mt-60  "
              />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 mt-24" />
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section id="Services" className="py-24 md:py-32 bg-[#f5f1e9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-black text-[#0d403d] mb-20">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              "Fast Online Booking\nBook your seat anytime, anywhere — no calls, no waiting.",
              "Real-Time Trip Tracking\nStay updated with live trip status and arrival times.",
              "Seat Selection\nChoose your preferred seat easily during booking.",
              "Smart Notifications\nGet instant alerts about trip updates and delays.",
              "24/7 Support\nOur team is always here to help you."
            ].map((text, i) => {
              const [title, desc] = text.split("\n");
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -16, scale: 1.05 }}
                  className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#519CAB]"
                >
                  <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-6 sm:mb-8 border-4 border-dotted border-[#519CAB] rounded-full flex items-center justify-center text-3xl sm:text-4xl font-black text-[#519CAB]">
                    {i + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT US ===== */}
      <section id="Contact" className="py-24 md:py-32 bg-[#f5f1e9]">
        <div className="container mx-auto px-6 text-center text-">
          <h2 className="text-6xl md:text-7xl font-black mb-12 text-[#0d403d]">Contact Us</h2>
          <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto">
            Have a question or complaint? We’re here 24/7
          </p>

          <form className="max-w-3xl mx-auto bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <input type="text" placeholder="Your Name" className="px-6 py-4 rounded-xl border border-gray-300 focus:border-[#519CAB] outline-none transition" />
              <input type="email" placeholder="Your Email" className="px-6 py-4 rounded-xl border border-gray-300 focus:border-[#519CAB] outline-none transition" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-xl border border-gray-300 mb-8 focus:border-[#519CAB] outline-none transition" />
            <textarea placeholder="Your Message or Complaint" rows="6" className="w-full px-6 py-4 rounded-xl border border-gray-300 mb-8 focus:border-[#519CAB] outline-none resize-none transition"></textarea>
            <button className="w-full bg-[#20373B] text-white font-bold py-6 rounded-xl text-xl transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== FOOTER WITH CONTACT INFO ===== */}
      <footer className="bg-[#0d2a30] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">SAFERNI</h2>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20 text-lg mb-10">
            <div className="flex items-center gap-3">
              <span>Call:</span>
              <a href="tel:+963987654321" className="hover:text-yellow-400 transition">+963 987 654 321</a>
            </div>
            <div className="flex items-center gap-3">
              <span>Email:</span>
              <a href="mailto:support@saferni.com" className="hover:text-yellow-400 transition">support@saferni.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span>WhatsApp:</span>
              <a href="https://wa.me/963987654321" className="hover:text-yellow-400 transition">+963 987 654 321</a>
            </div>
          </div>

          <p className="text-gray-400 text-lg">
            © 2025 Saferni – The #1 Bus Booking App in Syria
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

