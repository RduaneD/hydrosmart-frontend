import React, { useState } from "react";
import DiagnosisNavbar from "./components/Diagnosis/DiagnosisNavbar";
import DiagnosisFooter from "./components/Diagnosis/DiagnosisFooter";

// Mapping Nama Produk → Path Gambar
const productImageMap = {
  // Bayam
  "GP-Ferrous-EDTA (EC 1.4-1.8)": "/images/products/Bayam/GP-Ferrous-EDTA - vegetatif.jpg",
  "NPK-20-20-20 (EC 1.4-1.8)": "/images/products/Bayam/NPK-20-20-20 - vegetatif.png",
  "CalMag Professional": "/images/products/Bayam/calmag - panen.jpg",
  "Fe-EDTA": "/images/products/Bayam/fEDTA - vegetatif.jpg",
  "HydroTJ": "/images/products/Bayam/hydroTJ - semai.png",
  "Magnesium Supplement": "/images/products/Bayam/merokeMAG-s - vegetatif.jpg",
  "Root Stimulator": "/images/products/Bayam/rootstimuatortransparent - semai.png",

  // Kangkung
  "AB Mix Tropical (EC 1.0-1.5)": "/images/products/Kangkung/agrifam - semai.jpg",
  "FinalK 8-32-32 (EC 1.8-2.5)": "/images/products/Kangkung/finalK - panen.jpg",
  "GrowMore 32-10-10 (EC 1.5-2.0)": "/images/products/Kangkung/growmore - vegetatif.jpg",
  "Rootex": "/images/products/Kangkung/rootex - semai.jpg",

  // Pakcoy
  "NPK-14-14-14": "/images/products/Pakcoy/NPK-14-14-14-fertilizer - vegetatif.png",
  "Calcium": "/images/products/Pakcoy/calcium - vegetatif.jpg",
  "Enhancer": "/images/products/Pakcoy/enhancer - panen.webp",
  "Forbest Calcium": "/images/products/Pakcoy/forbest calcium - vegetatif.webp",
  "Masta": "/images/products/Pakcoy/masta - semai.jpg",
  "NPK 4 12 38": "/images/products/Pakcoy/npk 4 12 38 - panen.png",
  "Phosporus": "/images/products/Pakcoy/phosporus - semai.jpg",
  "Profit NPK 4 12 38": "/images/products/Pakcoy/profit npk 4 12 38 - panen.jpg",

  // Sawi
  "16-16-16 Merah": "/images/products/Sawi/16-16-16-Merah - vegetatif.webp",
  "CalMagXtra": "/images/products/Sawi/calmagXtra - vegetatif.webp",
  "Harvest Booster": "/images/products/Sawi/harvest booster - panen.jpg",
  "Masta Sawi": "/images/products/Sawi/masta - semai.jpg",
  "NPK1616": "/images/products/Sawi/npk1616 - vegetatif.jpg",
  "Root Developer": "/images/products/Sawi/rootdeveloper - semai.jpg",
  "Uni Chem 12-12-36": "/images/products/Sawi/uni chem 121236 - panen.jpg",

  // Selada
  "Fe-DTPA": "/images/products/Selada/Fe DTPA - vegetatif.png",
  "AB Mix Sayuran Daun (EC 0.8-1.2)": "/images/products/Selada/ab mix - semai.jpg",
  "AB Mix Sayuran Daun (EC 1.2-1.6)": "/images/products/Selada/ab mix - vegetatif.jpg",
  "AB Mix Low Nitrogen (EC 1.4-1.8)": "/images/products/Selada/aqua pro - panen.png",
  "Root Booster": "/images/products/Selada/root booster - semai.png",
};

// Produk berdasarkan tanaman dan fase
const productList = {
  Selada: {
    Semai: ["AB Mix Sayuran Daun (EC 0.8-1.2)", "Root Booster", "CalMag Plus"],
    Vegetatif: ["AB Mix Sayuran Daun (EC 1.2-1.6)", "CalMag Plus", "Fe-DTPA"],
    Panen: ["AB Mix Low Nitrogen (EC 1.4-1.8)", "CalMag Boost", "Potassium Booster"],
  },
  Kangkung: {
    Semai: ["AB Mix Tropical (EC 1.0-1.5)", "Rootex"],
    Vegetatif: ["GrowMore 32-10-10 (EC 1.5-2.0)", "Tropical Boost"],
    Panen: ["FinalK 8-32-32 (EC 1.8-2.5)", "Green Max"],
  },
  Bayam: {
    Semai: ["HydroTJ", "Root Stimulator"],
    Vegetatif: ["NPK-20-20-20 (EC 1.4-1.8)", "Fe-EDTA", "Magnesium Supplement"],
    Panen: ["GP-Ferrous-EDTA (EC 1.4-1.8)", "CalMag Professional"],
  },
  Pakcoy: {
    Semai: ["Masta", "Phosporus"],
    Vegetatif: ["NPK-14-14-14", "Forbest Calcium", "Calcium"],
    Panen: ["NPK 4 12 38", "Profit NPK 4 12 38", "Enhancer"],
  },
  Sawi: {
    Semai: ["Masta Sawi", "Root Developer"],
    Vegetatif: ["16-16-16 Merah", "NPK1616", "CalMagXtra"],
    Panen: ["Uni Chem 12-12-36", "Harvest Booster"],
  },
};

const PlantRecommendationPage = () => {
  const [form, setForm] = useState({
    ph: "",
    temperature: "",
    light: "sedang",
    fase: "Semai",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("https://hydro-backend-production.up.railway.app/api/recommendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!data || !data.result) {
        throw new Error("Data tidak valid");
      }

      setResult(data.result);
    } catch (err) {
      console.error("Error:", err);
      setError("Gagal mendapatkan rekomendasi. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      <DiagnosisNavbar />

      <main className="flex-grow py-10 px-4 md:px-8">
        <h1 className="text-3xl font-extrabold text-center text-green-900 mb-8">
          Rekomendasi Tanaman
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-green-200/50 border border-green-300 shadow-xl p-6 sm:p-8 rounded-3xl space-y-6"
        >
          <div>
            <label className="block text-lg font-semibold text-green-900 mb-1">
              pH Air
            </label>
            <input
              type="number"
              name="ph"
              value={form.ph}
              onChange={handleChange}
              placeholder="Contoh: 6.5"
              step="0.1"
              className="w-full px-4 py-3 border border-green-400 rounded-xl shadow-sm bg-green-50 text-green-800"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-green-900 mb-1">
              Suhu (°C)
            </label>
            <input
              type="number"
              name="temperature"
              value={form.temperature}
              onChange={handleChange}
              placeholder="Contoh: 25"
              className="w-full px-4 py-3 border border-green-400 rounded-xl shadow-sm bg-green-50 text-green-800"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-green-900 mb-1">
              Intensitas Cahaya
            </label>
            <select
              name="light"
              value={form.light}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-green-400 rounded-xl shadow-sm bg-green-50 text-green-800"
              required
            >
              <option value="rendah">Rendah</option>
              <option value="sedang">Sedang</option>
              <option value="tinggi">Tinggi</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold text-green-900 mb-1">
              Fase Pertumbuhan
            </label>
            <select
              name="fase"
              value={form.fase}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-green-400 rounded-xl shadow-sm bg-green-50 text-green-800"
              required
            >
              <option value="Semai">Semai</option>
              <option value="Vegetatif">Vegetatif</option>
              <option value="Panen">Panen</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-6 text-lg rounded-xl font-semibold text-white shadow-md ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Menganalisis..." : "Dapatkan Rekomendasi"}
          </button>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        </form>

        {result && (
          <div className="mt-10 max-w-2xl mx-auto bg-white/80 p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Tanaman yang Direkomendasikan
            </h2>
            <img
              src={
                result.image
                  ? `/images/plants/${result.image}`
                  : "https://via.placeholder.com/250"
              }
              alt={result.name}
              className="w-64 mx-auto rounded-xl shadow border"
            />
            <p className="mt-4 text-gray-700 leading-relaxed">
              Tanaman <strong>{result.name}</strong> cocok untuk kondisi lingkungan ini.{" "}
              {result.description}
            </p>

            {/* Rekomendasi Produk */}
            {productList[result.name] && productList[result.name][form.fase] && (
              <div className="mt-8 text-left">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Rekomendasi Produk untuk Fase {form.fase}:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {productList[result.name][form.fase].map((namaProduk, i) => (
                    <div
                      key={i}
                      className="bg-green-50 p-3 rounded-xl shadow hover:shadow-md transition"
                    >
                      <img
                        src={productImageMap[namaProduk] || "https://via.placeholder.com/150"}
                        alt={namaProduk}
                        className="w-full h-28 object-contain rounded"
                      />
                      <p className="mt-2 text-sm text-center text-green-900 font-medium">
                        {namaProduk}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <DiagnosisFooter />
    </div>
  );
};

export default PlantRecommendationPage;
