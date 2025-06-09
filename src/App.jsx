import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import RagamTanaman from "./components/Landing/RagamTanaman";
import AboutHydroSmart from "./components/Landing/AboutHydroSmart";
import GaleriFoto from "./components/Landing/GaleriFoto";
import ArtikelEdukasi from "./components/Landing/ArtikelEdukasi";
import hidroponikImg from "./assets/hidroponik.jpg";

function App() {
  return (
    <div className="font-poppins bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800">
      <Navbar />
      <Hero />

      {/* Section: Tentang */}
      <section
        id="tentang"
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28 transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-12 text-center leading-snug tracking-tight">
            Apa Itu <span className="text-yellow-400">Hidroponik</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Deskripsi */}
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Hidroponik adalah metode menanam tanpa menggunakan tanah,
                melainkan memanfaatkan air dan nutrisi terlarut.
              </p>
              <p>
                Metode ini memungkinkan pertumbuhan tanaman yang lebih cepat,
                sehat, dan efisien, sangat cocok untuk pertanian urban dan
                skala rumahan.
              </p>
              <p>
                Dengan platform <strong>HydroSmart</strong>, Anda dapat
                mengelola sistem hidroponik secara digital dan terintegrasi,
                dengan dukungan komunitas dan edukasi berbasis teknologi.
              </p>
            </div>

            {/* Gambar Hidroponik */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img
                src={hidroponikImg}
                alt="Ilustrasi Hidroponik"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Ragam Tanaman */}
      <section id="ragam">
        <RagamTanaman />
      </section>

      {/* Section: Tentang Kami */}
      <section id="about">
        <AboutHydroSmart />
      </section>

      {/* Section: Galeri */}
      <section id="galeri">
        <GaleriFoto />
      </section>

      {/* Section: Edukasi */}
      <section id="edukasi">
        <ArtikelEdukasi />
      </section>

      {/* CTA & FAQ */}
      <CTA />
      <FAQ />
    </div>
  );
}

export default App;