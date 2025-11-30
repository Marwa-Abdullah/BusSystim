import React from "react";

function App() {
  return (
    <>
      {/* ===== Hero Section 1 – الباص الأزرق الكبير ===== */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-start text-white overflow-hidden w-100vw h-100vh"
        style={{ backgroundImage: "url('/src/assets/hero-bus.png')" }} // ضع صورة الباص الكبير هون
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <header className="absolute top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 lg:px-24">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">SAFERNI</h1>
            <nav className="hidden md:flex gap-10 text-white text-lg font-medium">
              <a href="#" className="hover:text-yellow-400 transition">Home</a>
              <a href="#" className="hover:text-yellow-400 transition">About</a>
              <a href="#" className="hover:text-yellow-400 transition">Companies</a>
              <a href="#" className="hover:text-yellow-400 transition">Contact</a>
            </nav>
          </div>
        </header>

        <div className="relative z-10 max-w-2xl ml-8 md:ml-16 lg:ml-32">
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-3xl">★</span>
            ))}
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            follow your destination
          </h2>
          <p className="text-3xl md:text-5xl font-bold mt-2 mb-8">
            App number 1 in Syria
          </p>
          <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold py-4 px-10 rounded-full text-xl border-2 border-white/50 transition transform hover:scale-105">
            Book Now
          </button>
        </div>
      </section>

      {/* ===== Hero Section 2 – الباص الأصفر (اللي كنا نعدله) ===== */}
      <section className="min-h-screen bg-gradient-to-b from-[#faf6f0] to-[#fff8f0] flex flex-col items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none select-none">
          <img src="/src/assets/luggage.png" alt="" className="absolute top-10 left-4 md:left-16 w-56 md:w-96 opacity-70" />
          <img src="/src/assets/bus-sketch.png" alt="" className="absolute top-10 right-0 md:right-12 w-64 md:w-96 opacity-60 rotate-12" />
        </div>

        <div className="relative z-10 text-center">
          <p className="text-gray-600 text-lg md:text-2xl tracking-widest mb-4">
            Follow the Destination
          </p>

          <div className="relative inline-block">
            <h2 className="text-7xl md:text-9xl lg:text-[180px] font-black text-gray-900 leading-none tracking-tighter">
              SAFERNI
            </h2>
            <div className="absolute -top-8 md:-top-12 lg:-top-16 right-[-14%] md:right-[-12%] lg:right-[-10%] rotate-[18deg] origin-left">
              <span className="inline-block  text-black font-black text-lg md:text-2xl lg:text-3xl px-8 py-2 rounded-tr-3xl rounded-bl-3xl shadow-2xl">
                Black Friday offers
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-12">
            <img src="/src/assets/bus.png" alt="Saferni Bus" className="w-full max-w-4xl lg:max-w-6xl drop-shadow-2xl" />
          </div>

          <div className="my-16">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 border-2 border-gray-500 rounded-full flex items-center justify-center animate-bounce">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <p className="text-gray-600 text-sm tracking-widest">Scroll</p>
            </div>
          </div>

          <div className="relative">
            <img src="/src/assets/map.svg" alt="Syria" className="w-40 md:w-56 mx-auto opacity-50" />
            <p className="text-gray-800 text-xl md:text-3xl font-semibold mt-8">
              One App, thousands roads
            </p>
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="flex-1 h-px border-t-2 border-dashed border-gray-400"></div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-5 px-16 rounded-full text-2xl shadow-2xl transition transform hover:scale-105">
                Book Now
              </button>
              <div className="flex-1 h-px border-t-2 border-dashed border-gray-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Us Section ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#fff8f0] to-white">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-16">ABOUT US</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-6xl mb-4">Fast</div>
              <h3 className="text-2xl font-bold text-gray-800">حجز فوري</h3>
              <p className="text-gray-600 mt-4">احجز تذكرتك خلال ثواني من أي مكان في سوريا</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-6xl mb-4">Safe</div>
              <h3 className="text-2xl font-bold text-gray-800">أمان مضمون</h3>
              <p className="text-gray-600 mt-4">جميع الشركات مرخصة وباصات حديثة وآمنة</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-6xl mb-4">Cheap</div>
              <h3 className="text-2xl font-bold text-gray-800">أسعار منافسة</h3>
              <p className="text-gray-600 mt-4">قارن الأسعار واحجز بأرخص سعر مضمون</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-16">لماذا SAFERNI؟</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {["جميع المحافظات", "دفع إلكتروني", "إلغاء مجاني", "دعم 24/7"].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Download App Section ===== */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">حمل التطبيق الآن!</h2>
          <p className="text-xl md:text-2xl mb-12">احجز رحلتك بسهولة من جوالك</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="#" className="bg-black text-white px-10 py-6 rounded-2xl text-xl font-bold flex items-center gap-4 hover:bg-gray-900 transition">
              <span>Download on</span> App Store
            </a>
            <a href="#" className="bg-black text-white px-10 py-6 rounded-2xl text-xl font-bold flex items-center gap-4 hover:bg-gray-900 transition">
              <span>Get it on</span> Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">SAFERNI</h2>
          <p className="text-gray-400 mb-8">تطبيق حجز الباصات الأول في سوريا © 2025</p>
          <div className="flex justify-center gap-8 text-3xl">
            <a href="#" className="hover:text-yellow-500 transition">Facebook</a>
            <a href="#" className="hover:text-yellow-500 transition">Instagram</a>
            <a href="#" className="hover:text-yellow-500 transition">WhatsApp</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;