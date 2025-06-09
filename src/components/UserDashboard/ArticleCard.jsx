import React, { useEffect, useState } from "react";
import axios from "axios";

// Komponen ArticleCard menampilkan 1 kartu artikel + fitur simpan/hapus dari database
export default function ArticleCard({ id, title, image, excerpt, onClick }) {
  const [saved, setSaved] = useState(false); // status apakah artikel disimpan user
  const [loading, setLoading] = useState(true); // status loading saat cek awal

  // 🔍 Cek apakah artikel ini sudah disimpan sebelumnya saat komponen pertama kali dimount
  useEffect(() => {
    const checkIfSaved = async () => {
      try {
        const response = await axios.get(
          `https://hydrosmart-backend-production.up.railway.app/api/saved-articles/${id}`
        );
        setSaved(response.data.isSaved); // respons berisi boolean isSaved
      } catch (error) {
        console.error("❌ Gagal cek status artikel:", error);
      } finally {
        setLoading(false); // selesai loading
      }
    };

    checkIfSaved();
  }, [id]);

  // 💾 Fungsi untuk toggle simpan / hapus artikel
  const toggleSave = async () => {
    try {
      if (saved) {
        // Jika artikel sudah disimpan, maka hapus dari database
        await axios.delete("https://hydrosmart-backend-production.up.railway.app/api/saved-articles", {
          data: { id },
        });
      } else {
        // Jika belum disimpan, maka simpan ke database
        await axios.post("https://hydrosmart-backend-production.up.railway.app/api/saved-articles", {
          id,
          title,
          image,
          excerpt,
        });
      }
      setSaved(!saved); // toggle status
    } catch (error) {
      console.error("❌ Gagal menyimpan/menghapus artikel:", error);
    }
  };

  return (
    <div
      onClick={onClick}
      className="relative bg-green-50 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group cursor-pointer flex flex-col"
    >
      {/* ❤️ Tombol Simpan */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // cegah event click merambat ke card (buka detail)
          toggleSave();
        }}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md"
        aria-label="Simpan artikel"
        disabled={loading}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={saved ? "#ef4444" : "#e5e7eb"} // warna merah jika sudah disimpan
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={saved ? "#ef4444" : "#e5e7eb"}
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
              4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
              14.76 3 16.5 3 19.58 3 22 5.42 
              22 8.5c0 3.78-3.4 6.86-8.55 
              11.54L12 21.35z"
          />
        </svg>
      </button>

      {/* Gambar Artikel */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Konten Artikel */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-800 group-hover:text-green-700 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <span className="text-sm font-medium text-green-600 hover:text-green-800 transition">
          Baca Selengkapnya →
        </span>
      </div>
    </div>
  );
}
