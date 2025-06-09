export default function AboutHydroSmart() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-yellow-400">Hydro</span>
          <span className="text-green-700">Smart</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          Platform pintar untuk pertanian hidroponik berkelanjutan di area urban. Dirancang untuk membantu Anda menanam lebih cerdas, efisien, dan terhubung dengan komunitas hidroponik di Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-gray-700">
        <div className="p-6 bg-green-50 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-green-800 mb-3">🌱 Fokus Kami</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Memberdayakan masyarakat untuk bercocok tanam hidroponik, bahkan di lahan terbatas. Kami percaya setiap orang bisa memulai kebun pintar di rumahnya sendiri.
          </p>
        </div>

        <div className="p-6 bg-green-50 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-green-800 mb-3">✨ Fitur Inti</h3>
          <ul className="list-disc list-inside text-sm md:text-base space-y-1">
            <li>Catat dan pantau progres pertumbuhan tanaman</li>
            <li>Tips dan rekomendasi otomatis dari sistem</li>
            <li>Tampilan dashboard yang mudah dipahami</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
