import React from "react";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;