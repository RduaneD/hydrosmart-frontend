import React, { useState } from "react";
import DiagnosisNavbar from "./components/Diagnosis/DiagnosisNavbar";
import DiagnosisFooter from "./components/Diagnosis/DiagnosisFooter";
import DiagnosisResult from "./components/Diagnosis/DiagnosisResult";
import DiagnosisBrandInfo from "./components/Diagnosis/DiagnosisBrandInfo";

export default function DiagnosisPage() {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDiagnosis = async () => {
    if (!imageFile) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch("https://hydrosmart-backend-production.up.railway.app/diagnosis", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Gagal mendapatkan hasil diagnosis");
      }

      const json = await response.json();

      if (!json || !json.data) {
        throw new Error("Respons dari server tidak valid");
      }

      const { label, confidence, advice } = json.data;

      setResult([
        {
          nama: label || "Tidak dikenali",
          gejala: "-",
          umum_pada: "-",
          penanganan: advice || "Silakan cek manual.",
          confidence: confidence?.toFixed(2) || "0.00",
        },
      ]);
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat mengirim gambar. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      <DiagnosisNavbar />

      <main className="flex-grow py-10 px-4 md:px-8">
        <h1 className="text-3xl font-extrabold text-center text-green-900 mb-8">
          Deteksi Penyakit Tanaman
        </h1>

        <div className="max-w-3xl mx-auto bg-green-200/50 border border-green-300 shadow-xl p-6 sm:p-8 rounded-3xl space-y-6 transition-all duration-300">
          <label
            htmlFor="imageInput"
            className="block text-lg font-semibold text-green-900"
          >
            Unggah Gambar Tanaman
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-3 border border-green-400 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-500 transition bg-green-50 text-green-800"
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="mx-auto max-h-64 w-full object-contain rounded-xl shadow-md border border-green-300"
            />
          )}

          <button
            onClick={handleDiagnosis}
            disabled={loading || !imageFile}
            className={`w-full py-3 px-6 text-lg rounded-xl font-semibold transition-all duration-200 text-white shadow-md focus:outline-none focus:ring-4 ${
              loading || !imageFile
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 focus:ring-green-400"
            }`}
          >
            {loading ? "Mendiagnosa..." : "Diagnosa Sekarang"}
          </button>

          {error && (
            <p className="text-red-600 text-sm text-center mt-2">{error}</p>
          )}
        </div>

        {result && (
          <div className="mt-10 px-2">
            <DiagnosisResult diagnosisList={result} />
          </div>
        )}
      </main>

      <DiagnosisBrandInfo />
      <DiagnosisFooter />
    </div>
  );
}
