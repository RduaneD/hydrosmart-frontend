import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecommendationSection() {
  const navigate = useNavigate();

  const handleRecommendationClick = () => {
    navigate("/plant-recommendation");
  };

  const handleDiagnosisClick = () => {
    navigate("/diagnosis");
  };

  return (
    <section className="relative px-4 sm:px-6 py-20 bg-gradient-to-br from-white to-green-50 overflow-hidden">
      {/* Dekorasi latar SVG */}
      <svg
        className="absolute -bottom-12 -right-12 w-64 opacity-10 -z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#22c55e"
          d="M41.4,-66.3C55.4,-55.1,69.2,-44.6,76.3,-30.5C83.3,-16.3,83.6,1.4,76.3,14.4C69,27.4,54.1,35.8,40.1,45.7C26.1,55.5,13,66.8,-2.4,70.5C-17.8,74.2,-35.7,70.3,-51.2,61.2C-66.7,52.2,-79.8,37.9,-83.2,22.1C-86.6,6.3,-80.3,-11.1,-71.4,-25.6C-62.6,-40.1,-51.3,-51.6,-38.3,-62C-25.4,-72.4,-12.7,-81.6,1.5,-84.1C15.7,-86.6,31.4,-82.5,41.4,-66.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-6">
          Bingung Mau Menanam Apa?
        </h2>

        <button
          onClick={handleRecommendationClick}
          className="bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm md:text-base transition hover:bg-green-700 active:scale-95 shadow-lg"
        >
          🌱 Temukan Rekomendasi Tanaman
        </button>

        <div className="mt-10 sm:mt-12">
          <p className="text-gray-700 max-w-md mx-auto mb-4 text-sm sm:text-base">
            Ingin tahu kenapa tanamanmu terlihat tidak sehat? Gunakan fitur pengecekan tanaman untuk bantu identifikasi masalahnya.
          </p>
          <button
            onClick={handleDiagnosisClick}
            className="bg-emerald-500 text-white px-5 sm:px-6 py-2.5 rounded-full font-medium text-sm sm:text-base transition hover:bg-emerald-600 active:scale-95 shadow-md"
          >
            🔍 Cek Kondisi Tanaman
          </button>
        </div>
      </div>
    </section>
  );
}
