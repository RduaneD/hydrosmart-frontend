import React, { useEffect, useState } from "react";
import DiagnosisNavbar from "./components/Diagnosis/DiagnosisNavbar";
import DiagnosisFooter from "./components/Diagnosis/DiagnosisFooter";
import { Link } from "react-router-dom";

function formatDate(dateStr) {
  try {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString("id-ID", options);
  } catch {
    return dateStr;
  }
}

export default function MyProgressUser() {
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    fetch("https://hydrosmart-backend-production.up.railway.app/progress")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data progres");
        return res.json();
      })
      .then((data) => setProgressList(data))
      .catch((error) => {
        console.error("Error fetching progress:", error);
        alert("Gagal memuat data progres.");
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus progres ini?")) return;

    try {
      const response = await fetch(`https://hydrosmart-backend-production.up.railway.app/progress/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProgressList(progressList.filter((item) => item._id !== id));
        alert("Progres berhasil dihapus.");
      } else {
        alert("Gagal menghapus progres.");
      }
    } catch (error) {
      console.error("Error deleting progress:", error);
      alert("Terjadi kesalahan saat menghapus progres.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col">
      <DiagnosisNavbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex-grow">
        <h1 className="text-4xl font-extrabold text-center text-green-900 mb-12 tracking-wide">
          Daftar Progres Saya
        </h1>

        {progressList.length === 0 ? (
          <p className="text-center text-gray-600 text-lg select-none">
            Belum ada data progres.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {progressList.map((item) => (
              <article
                key={item._id}
                className="bg-emerald-50 border border-green-200 rounded-3xl shadow-md hover:shadow-xl hover:shadow-green-200 transition-all duration-300 transform hover:scale-[1.015] flex flex-col"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-3xl object-cover w-full h-52 sm:h-48 lg:h-44"
                    loading="lazy"
                    draggable={false}
                  />
                ) : (
                  <div className="rounded-t-3xl bg-green-100 flex items-center justify-center h-52 sm:h-48 lg:h-44 text-green-400 font-semibold select-none">
                    Tidak ada gambar
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h2
                    className="text-xl font-semibold mb-3 text-emerald-900 truncate"
                    title={item.title}
                  >
                    {item.title}
                  </h2>

                  <p className="text-green-800 mb-4 flex-grow whitespace-pre-line line-clamp-4">
                    {item.description}
                  </p>

                  <p className="text-sm text-green-600 mb-6">
                    Tanggal: {formatDate(item.date)}
                  </p>

                  <div className="flex space-x-4">
                    <Link
                      to={`/edit-progress?id=${item._id}`}
                      className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 text-white font-semibold py-2 rounded-xl transition"
                      aria-label={`Edit progres ${item.title}`}
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 text-center bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 text-white font-semibold py-2 rounded-xl transition"
                      aria-label={`Hapus progres ${item.title}`}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <DiagnosisFooter />
    </div>
  );
}
