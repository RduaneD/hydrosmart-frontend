import React from "react";

export default function DiagnosisResult({ diagnosisList }) {
  return (
    <div className="mt-10 max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow-lg border border-green-200">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">
        Hasil Diagnosis Tanaman
      </h2>

      {diagnosisList.map((item, i) => (
        <div key={i} className="border-t pt-4 mt-4 space-y-2">
          <p>
            <strong className="text-green-700">Penyakit:</strong>{" "}
            {item.nama || "-"}
          </p>
          <p>
            <strong className="text-green-700">Gejala:</strong>{" "}
            {item.gejala || "-"}
          </p>
          <p>
            <strong className="text-green-700">Umum Pada:</strong>{" "}
            {item.umum_pada || "-"}
          </p>
          <p>
            <strong className="text-green-700">Penanganan:</strong>{" "}
            {item.penanganan || "-"}
          </p>

          {/* Rekomendasi Obat / Produk */}
          {item.rekomendasi && item.rekomendasi.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Rekomendasi Produk Terkait:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {item.rekomendasi.map((produk, idx) => (
                  <div
                    key={idx}
                    className="bg-green-50 p-3 rounded-xl shadow hover:shadow-md transition"
                  >
                    <img
                      src={produk.image || "https://via.placeholder.com/150"}
                      alt={produk.nama}
                      className="w-full h-28 object-contain rounded"
                    />
                    <p className="mt-2 text-sm text-center text-green-900 font-medium">
                      {produk.nama}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
