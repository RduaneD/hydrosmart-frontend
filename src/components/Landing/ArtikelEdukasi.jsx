import artikel1 from '../../assets/articles/artikel1.jpg';
import artikel2 from '../../assets/articles/artikel2.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ArtikelEdukasi() {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: 'Tips Merawat Hidroponik di Rumah',
      image: artikel1,
      content: 'Berbagai tips merawat tanaman hidroponik agar tumbuh optimal meskipun di lahan terbatas.'
    },
    {
      id: 2,
      title: 'Jenis Nutrisi Penting untuk Tanaman',
      image: artikel2,
      content: 'Pelajari nutrisi utama dan cara memberikan nutrisi yang tepat bagi tanaman hidroponik Anda.'
    }
  ];

  const handleReadMore = (id) => {
    navigate(`/artikel/${id}`);
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-800">
        Edukasi & Artikel
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {articles.map((a) => (
          <div
            key={a.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-gray-50"
          >
            <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col justify-between h-52 sm:h-48">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{a.title}</h3>
                <p className="text-sm text-gray-600">{a.content.slice(0, 70)}...</p>
              </div>

              {/* Responsive Button */}
              <div className="mt-4">
                {/* Desktop: full text */}
                <button
                  onClick={() => handleReadMore(a.id)}
                  className="hidden lg:inline-block text-green-700 text-sm hover:underline"
                >
                  Baca selengkapnya →
                </button>

                {/* Tablet: icon only */}
                <button
                  onClick={() => handleReadMore(a.id)}
                  className="hidden md:inline-block lg:hidden text-green-700"
                  aria-label="Baca selengkapnya"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Mobile: small button */}
                <button
                  onClick={() => handleReadMore(a.id)}
                  className="inline-block md:hidden bg-green-600 text-white text-xs px-3 py-1 rounded-full hover:bg-green-700 transition"
                >
                  Baca →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-gray-600">
        Untuk membaca lebih banyak artikel dan materi edukasi lengkap, silakan{' '}
        <Link
          to="/login"
          className="text-green-700 font-medium underline hover:text-green-600 transition"
        >
          masuk ke akun Anda
        </Link>.
      </div>
    </section>
  );
}
