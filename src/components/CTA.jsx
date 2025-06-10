import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ⬅️ Tambahkan ini

export default function CTA() {
  return (
    <section className="relative bg-green-100 text-green-800 py-20 px-6 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-green-200 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Siap Memulai Perjalanan Hidroponik Anda?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-8 text-green-700">
          Ambil langkah pertama menuju pertanian cerdas, sehat, dan berkelanjutan dari rumah Anda.
        </p>

        <Link
          to="/register"
          className="inline-flex items-center gap-3 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:bg-green-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
        >
          Daftar Sekarang
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
