import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import UserNavbar from "./components/UserDashboard/UserNavbar";
import SearchBar from "./components/UserDashboard/SearchBar";
import RecommendationSection from "./components/UserDashboard/RecommendationSection";
import DiagnosisSection from "./components/UserDashboard/DiagnosisSection";
import Footer from "./components/UserDashboard/Footer";
import ArticleCard from "./components/UserDashboard/ArticleCard"; // pastikan path benar

export default function Home() {
  const navigate = useNavigate();

  const articles = [
    {
      id: 3,
      title: "Tips Mendeteksi Penyakit Tanaman Sejak Dini",
      excerpt:
        "Deteksi penyakit sejak awal dengan gejala umum yang bisa kamu kenali pada daun dan akar.",
      image:
        "https://plus.unsplash.com/premium_photo-1664476484425-79b8ce32c009?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Cara Memilih Media Tanam yang Tepat",
      excerpt:
        "Kenali berbagai media seperti rockwool, cocopeat, dan hidroton untuk sistem hidroponikmu.",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Menjaga Kualitas Air dalam Sistem Hidroponik",
      excerpt:
        "Pelajari pentingnya pH, EC, dan bagaimana menjaga air tetap ideal bagi pertumbuhan tanaman.",
      image:
        "https://plus.unsplash.com/premium_photo-1664197864632-6fa22cc8c0f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <UserNavbar />

      {/* Welcome Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-green-50 via-white to-green-50">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
          Selamat Datang
        </h1>
        <p className="text-green-600 mb-6 max-w-xl mx-auto text-base md:text-lg">
          Temukan informasi dan fitur yang mendukung perawatan tanaman hidroponikmu.
        </p>
        <SearchBar />
      </section>

      <section className="px-4 sm:px-6 md:px-20 py-16 bg-gradient-to-b from-white via-green-50 to-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-3">
          🌱 Rawat Tanamanmu
        </h2>
        <p className="text-center text-green-600 mb-10 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Jelajahi berbagai artikel seputar urban farming, perawatan tanaman hidroponik, dan tips menjaga kesuburan secara alami.
        </p>

        {/* Mobile: Carousel */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            className="pb-6"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <ArticleCard
                  {...article}
                  onClick={() => navigate(`/artikel/${article.id}`)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet & Desktop: Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              {...article}
              onClick={() => navigate(`/artikel/${article.id}`)}
            />
          ))}
        </div>
      </section>

      {/* Rekomendasi Tanaman */}
      <RecommendationSection />

      {/* Diagnosis Penyakit */}
      <DiagnosisSection />

      <Footer />
    </div>
  );
}
