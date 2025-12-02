import React from "react";

const SafarniSection = () => {
  return (
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

     
     
      <img
        src="/src/assets/bus.png"
        className="relative z-20 w-[300px] sm:w-[450px] md:w-[900px] max-w-[95%] -mt-2 sm:-mt-4 md:-mt-1 drop-shadow-2xl"
        alt="bus"
      />

    
    
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
  );
};

export default SafarniSection;