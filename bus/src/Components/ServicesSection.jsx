import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;