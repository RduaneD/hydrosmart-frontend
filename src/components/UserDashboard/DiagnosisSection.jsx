import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DiagnosisSection() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      navigate("/diagnosis");
    }, 300);
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-green-100 via-white to-green-50 py-24 sm:py-28 px-4 sm:px-6 md:px-12">
      {/* Ornamental Blobs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-green-200 opacity-30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-green-300 opacity-20 rounded-full blur-2xl z-0"></div>

      {/* SVG Decorative Leaf */}
      <svg
        className="absolute top-10 left-6 w-40 md:w-64 opacity-20 -z-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#22c55e"
          d="M51.6,-69.7C63.2,-61.6,66.3,-42.2,68.3,-25.3C70.3,-8.3,71.1,6.3,63.6,17.9C56,29.6,40,38.2,25.1,46.9C10.1,55.5,-3.9,64.2,-15.5,61C-27,57.8,-36.1,42.7,-45.3,28.9C-54.5,15.1,-63.7,2.6,-63.8,-10.4C-63.9,-23.4,-55.1,-36.9,-43.6,-46.4C-32.2,-55.9,-18.1,-61.3,0.4,-61.8C19,-62.3,38,-57.7,51.6,-69.7Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-green-700 mb-5 leading-snug drop-shadow-md">
          Diagnosis Tanaman 🌱
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Cek kesehatan tanamanmu hanya dengan sekali klik. Sistem kami akan
          menganalisis kondisi tanaman dan memberikan saran penanganan yang
          tepat. Cepat, akurat, dan mudah digunakan.
        </p>
        <button
          onClick={handleClick}
          className={`bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl transition-transform duration-300 transform hover:scale-105 active:scale-95 ${
            isClicked ? "animate-pingOnce" : ""
          }`}
        >
          Cek Tanaman
        </button>
      </div>

      {/* Animation */}
      <style>{`
        .animate-pingOnce {
          animation: pingOnce 0.4s ease-out;
        }

        @keyframes pingOnce {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
