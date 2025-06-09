export default function Testimoni() {
  return (
    <section className="bg-green-50 px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">Apa Kata Mereka</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700 italic mb-4">"HydroSmart membuat saya merasa seperti ahli hidroponik. Semuanya jadi lebih mudah dan terkontrol!"</p>
          <div className="flex items-center space-x-4">
            <img src="/assets/user-1.jpg" alt="Pengguna" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="text-md font-semibold text-gray-800">Andi Setiawan</h4>
              <p className="text-sm text-gray-500">Petani Urban</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700 italic mb-4">"Platform ini sangat membantu. Saya bisa tahu kapan harus menyiram dan memberikan nutrisi!"</p>
          <div className="flex items-center space-x-4">
            <img src="/assets/user-2.jpg" alt="Pengguna" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="text-md font-semibold text-gray-800">Dewi Lestari</h4>
              <p className="text-sm text-gray-500">Hobiis Hidroponik</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700 italic mb-4">"Visualisasi datanya sangat intuitif, saya bisa memantau progres tanaman dengan sangat nyaman."</p>
          <div className="flex items-center space-x-4">
            <img src="/assets/user-3.jpg" alt="Pengguna" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="text-md font-semibold text-gray-800">Raka Pratama</h4>
              <p className="text-sm text-gray-500">Pengusaha Sayur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}