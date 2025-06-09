import React from "react";
import logo from "../../assets/HydroSmartSmall.webp";

export default function DiagnosisBrandInfo() {
  return (
    <div className="bg-green-50 w-full border-t border-green-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-green-700">
        {/* Brand Logo & Nama */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="HydroSmart Logo"
            className="w-10 h-10 object-cover rounded-full border border-green-300 shadow-sm"
          />
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-yellow-400">Hydro</span>
            <span className="text-green-700">Smart</span>
          </h1>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-center md:text-left text-green-600 max-w-2xl leading-relaxed">
          HydroSmart adalah platform pintar untuk membantu Anda merawat tanaman hidroponik,
          mulai dari diagnosis penyakit, pemantauan pertumbuhan, hingga rekomendasi tanaman
          terbaik berdasarkan lingkungan Anda.
        </p>
      </div>
    </div>
  );
}
