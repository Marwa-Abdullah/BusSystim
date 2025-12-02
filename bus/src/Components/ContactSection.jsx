import React from "react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;