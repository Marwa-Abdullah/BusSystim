import React from "react";

function App() {
  return (
    <>

      <section
        id="Home"
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center  text-white "
        style={{ backgroundImage: "url('/src/assets/hero-bg.png')", backgroundPosition: "center 100% "}}
      >
        <div className="absolute inset-0 "></div>

       
       <header className="fixed top-0 left-0 right-0 z-50 bg-transparent  px-6 py-6 md:px-12 lg:px-24 transition">
  <div className="flex justify-between items-center">
    <img 
  src="/src/assets/logo.png" 
  alt="Saferni Logo" 
  className="h-10 md:h-12 object-contain"
/>


    <nav className="hidden md:flex gap-10 text-[#FFC64F] text-lg font-medium">
      <a href="#Home" className="hover:text-yellow-400 transition">Home</a>
      <a href="#About" className="hover:text-yellow-400 transition">About</a>
      <a href="#Services" className="hover:text-yellow-400 transition">Services</a>
      <a href="#Contact" className="hover:text-yellow-400 transition">Contact</a>
    </nav>
  </div>

  <div className="w-full h-px bg-white/40 mt-4"></div>
</header>

        <div className="relative z-10 max-w-3xl ml-8 md:ml-20 lg:ml-32">
          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-4xl ${i === 4 ? "text-yellow-[#FFC64F]" : "text-yellow-400"}`}>★</span>
            ))}
          </div>
          <h2 className="text-5xl md:text-5xl font-black leading-tight">follow your destination</h2>
          <p className="text-4xl md:text-5xl font-bold mt-4 mb-10">
            App number 1 in <span className="text-yellow-400">Syria</span>
          </p>
          <button className="bg-[#243D42] hover:bg-[#0d2a30] text-white font-bold py-5 px-14 rounded-3xl text-xl transition transform hover:scale-105 shadow-2xl border border-white/20">
            Book Now
          </button>
        </div>

   
<div className="absolute bottom-0 left-0 right-0 bg-[#243D42] py-10">
  <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 justify-center items-center text-center text-white">
    
    <div>
      <h3 className="text-4xl md:text-3xl font-black text-yellow-400">+100</h3>
      <p className="text-lg">Customer</p>
    </div>

    <div>
      <h3 className="text-4xl md:text-3xl font-black text-yellow-400">+50</h3>
      <p className="text-lg">Bus</p>
    </div>

    <div>
      <h3 className="text-4xl md:text-3xl font-black text-yellow-400">+10</h3>
      <p className="text-lg">City</p>
    </div>

    <div>
      <h3 className="text-4xl md:text-3xl font-black text-yellow-400">+70</h3>
      <p className="text-lg">Success</p>
    </div>

  </div>
</div>

      </section>

    
    
<section  className="relative h-screen bg-[#f5f1e9] overflow-hidden flex items-center justify-center">

 
 
  <img src="/src/assets/p2.png"
    className="absolute top-10 w-[600px]" />

  
  
  <img src="/src/assets/p1.png"
    className="absolute top-20 left-10 w-60" />

  
  
  <img src="/src/assets/bus-sketch.png"
    className="absolute top-20 right-10 w-60" />

  
  
  <p className="absolute top-20 text-black text-2xl font-light tracking-wide z-20">
    Follow the Destination
  </p>



  <div className="absolute top-25 text-center z-30">
    <h1 className="text-[110px] md:text-[150px] font-black text-[#0d403d] leading-none">
      SAFERNI
    </h1>

   
   
    <div className="absolute -top-2 right-[-120px] rotate-[-330deg]">
      <span className="text-3xl font-extrabold text-black">
        Black Friday <span className="text-red-500">offers</span>
      </span>
    </div>
  </div>

  
  <img src="/src/assets/bus.png"
    className="relative z-20 w-[900px] max-w-[95%] drop-shadow-2xl"
    alt="bus" />

  
  <div className="absolute left-50 bottom-44 text-center z-30">
    <div className="w-14 h-14 border-2 border-dashed border-gray-800 rounded-full flex items-center justify-center">
      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeWidth="2" d="M12 5v14m0 0l-6-6m6 6l6-6" />
      </svg>
    </div>
    <p className="text-gray-700 text-sm mt-1">Scroll</p>
  </div>


  <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center z-30">

    
    <img src="/src/assets/map.png"
      className="absolute -left-40  w-28 " />


    <svg className="w-[450px] h-20 mx-auto" viewBox="0 0 400 80">
      <path d="M 10 50 Q 200 10, 390 50" stroke="#aaa" strokeWidth="2.5" fill="none"
        strokeDasharray="10,10" />
    </svg>

    <p className="text-lg text-gray-800 mt-3">
      One <span className="text-yellow-500">App</span> thousands roads
    </p>

    <div className="flex items-center justify-center gap-6 mt-6">
      <div className="h-px flex-1 border-t-2 border-dashed border-gray-300"></div>

      <button className="bg-yellow-400 px-8 py-3 rounded-full font-bold text-gray-900 text-lg shadow-md  hover:bg-yellow-600">
        Book Now
      </button>

      <div className="h-px flex-1 border-t-2 border-dashed border-gray-300"></div>
    </div>
  </div>

 
  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300" />
</section>

 
<section  id="About" className="relative w-full bg-[#f5f1e9] px-10 py-20">
  

  <div className="relative flex gap-10">

    <div className="relative">
      <h2 className="text-[100px] font-extrabold text-[#0d403d] leading-none tracking-tight">
        ABOUT US
      </h2>

   
      <img
        src="/src/assets/bus-front.png"
        alt="bus"
        className="relative -top-18 left-1/2 -translate-x-1/2 w-[350px] drop-shadow-xl z-20"
      />

   
      <p className="mt-64 text-gray-500 text-lg max-w-sm absolute top-40 left-20">
        At Safarni, we make traveling across Syria simple, reliable, and stress-free.
      </p>
    </div>

   
    <div className="flex-1 mt-14 relative -top-10 left-90 ">
      <p className="text-gray-500 text-lg max-w-md leading-relaxed">
        At Safarni, we make traveling across Syria simple, reliable, and stress-free.
        Our mission is to connect people with every destination through an easy-to-use
        platform that brings comfort and convenience to every trip.
        <br />
        Wherever you’re going — Safarni takes you there, safely and smoothly.
      </p>
    </div>
  </div>

  
  <div className="relative flex justify-end mt-20">
    
   
    <h3 className="relative -top-70  left-20  text-[80px] font-extrabold text-yellow-500 opacity-30 z-10">
      Since 1940
    </h3>

   
    <img
      src="/src/assets/people-bus.png"
      alt="people"
      className="w-[400px] rounded-3xl relative z-20 -mt-10 drop-shadow-xl  -top-38  right-80"
    />

  </div>

  <div className="w-full h-[1px] bg-gray-300 mt-24" />
  
</section>


      {/* ===== OUR SERVICES – مع أنيميشن على الأرقام ===== */}
      <section  id="Services" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-7xl md:text-5xl font-black text-[#243D42] mb-20">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              "Fast Online Booking\nBook your seat anytime, anywhere — no calls, no waiting, just a few easy taps.",
              "Real-Time Trip Tracking\nStay updated with live trip status, departure, and arrival times.",
              "Seat Selection\nChoose your preferred seat easily during booking.",
              "Smart Notifications\nGet instant alerts about trip schedules, updates, and delays.",
              "24/7 Support\nOur team is always here to help you, anytime you need assistance."
            ].map((text, i) => {
              const [title, desc] = text.split("\n");
              return (
                <div key={i} className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-4">
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-[#FFC64F] rounded-full animate-ping"></div>
                    <div className="relative w-24 h-24 bg-[#519CAB] rounded-full flex items-center justify-center text-4xl font-black text-white shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONTACT US – خلفية صفراء + فورم تواصل ===== */}
      <section    id="Contact" className="py-32 bg-gradient-to-br from-[#20373B] to-[#519CAB] text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-7xl md:text-5xl font-black mb-12">Contact Us</h2>
          <p className="text-2xl mb-16 max-w-2xl mx-auto">Have a question or complaint? We’re here 24/7</p>

          <form className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <input type="text" placeholder="Your Name" className="px-6 py-4 rounded-xl border border-gray-300 focus:border-yellow-500 outline-none" />
              <input type="email" placeholder="Your Email" className="px-6 py-4 rounded-xl border border-gray-300 focus:border-yellow-500 outline-none" />
            </div>
            <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-xl border border-gray-300 mb-8 focus:border-yellow-500 outline-none" />
            <textarea placeholder="Your Message or Complaint" rows="6" className="w-full px-6 py-4 rounded-xl border border-gray-300 mb-8 focus:border-yellow-500 outline-none resize-none"></textarea>
            <button className="w-full bg-[#20373B] hover:bg-teal-700 text-white font-bold py-6 rounded-xl text-xl transition transform hover:scale-105">
              Send Message
            </button>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
            <div className="bg-white/20 backdrop-blur p-8 rounded-2xl">Call: +963 987 654 321</div>
            <div className="bg-white/20 backdrop-blur p-8 rounded-2xl">Email: support@saferni.com</div>
            <div className="bg-white/20 backdrop-blur p-8 rounded-2xl">WhatsApp: +963 987 654 321</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-5xl font-black mb-4">SAFERNI</h2>
        <p className="text-gray-400">© 2025 Saferni – The #1 Bus Booking App in Syria</p>
      </footer>
    </>
  );
}

export default App;