import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;