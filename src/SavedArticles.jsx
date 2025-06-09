import React, { useEffect, useState } from "react";
import axios from "axios";
import DiagnosisNavbar from "./components/Diagnosis/DiagnosisNavbar";
import DiagnosisFooter from "./components/Diagnosis/DiagnosisFooter";

export default function SavedArticles() {
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedArticles = async () => {
      try {
        const response = await axios.get("https://hydrosmart-backend-production.up.railway.app/api/saved-articles");
        const data = Array.isArray(response.data) ? response.data : [];
        setSavedArticles(data);
      } catch (error) {
        console.error("Gagal memuat artikel tersimpan:", error);
        setSavedArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedArticles();
  }, []);

  const removeArticle = async (_id) => {
    try {
      await axios.delete("https://hydrosmart-backend-production.up.railway.app/api/saved-articles", {
        data: { id: _id },
      });

      setSavedArticles((prev) => prev.filter((item) => item._id !== _id));
    } catch (error) {
      console.error("Gagal menghapus artikel:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      <DiagnosisNavbar />
      <main className="flex-grow w-full px-4 sm:px-6 md:px-8 py-10">
        <section className="max-w-6xl mx-auto py-10">
          <h2 className="text-3xl font-extrabold text-center text-green-800 mb-8">
            Artikel Disimpan
          </h2>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-600 border-opacity-50"></div>
            </div>
          ) : !Array.isArray(savedArticles) || savedArticles.length === 0 ? (
            <p className="text-center text-gray-600">Belum ada artikel yang disimpan.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedArticles.map((article) => (
                <div
                  key={article._id}
                  className="bg-white/90 backdrop-blur-sm border border-green-200 shadow-lg rounded-2xl overflow-hidden relative group transition-transform duration-300 hover:-translate-y-1"
                >
                  <button
                    onClick={() => removeArticle(article._id)}
                    className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-md hover:bg-red-100 transition"
                    aria-label="Hapus"
                  >
                    <svg fill="#ef4444" viewBox="0 0 24 24" width="20" height="20">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                               4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                               19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                               6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>

                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-700 line-clamp-3">{article.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <DiagnosisFooter />
    </div>
  );
}
