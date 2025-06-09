export default function Statistik() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">Statistik HydroSmart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-green-50 rounded-xl shadow-md">
          <img src="/assets/icon-tanaman.png" alt="Tanaman" className="mx-auto w-12 md:w-16 mb-4" />
          <h3 className="text-2xl font-bold text-primary">1.200+</h3>
          <p className="text-gray-600">Tanaman Terpantau</p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow-md">
          <img src="/assets/icon-panen.png" alt="Panen" className="mx-auto w-12 md:w-16 mb-4" />
          <h3 className="text-2xl font-bold text-primary">850+</h3>
          <p className="text-gray-600">Panen Sukses</p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow-md">
          <img src="/assets/icon-rekomendasi.png" alt="Rekomendasi" className="mx-auto w-12 md:w-16 mb-4" />
          <h3 className="text-2xl font-bold text-primary">95%</h3>
          <p className="text-gray-600">Rekomendasi Akurat</p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl shadow-md">
          <img src="/assets/icon-user.png" alt="Pengguna" className="mx-auto w-12 md:w-16 mb-4" />
          <h3 className="text-2xl font-bold text-primary">1.000+</h3>
          <p className="text-gray-600">Pengguna Aktif</p>
        </div>
      </div>
    </section>
  );
}