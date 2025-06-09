import artikel1 from '../../assets/articles/artikel1.jpg';
import artikel2 from '../../assets/articles/artikel2.jpg';
import { useNavigate } from 'react-router-dom';

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
    // Simulasi redirect ke halaman detail artikel
    navigate(`/artikel/${id}`);
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-800">Edukasi & Artikel</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {articles.map((a) => (
          <div
            key={a.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-gray-50"
          >
            <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col justify-between h-48">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{a.title}</h3>
                <p className="text-sm text-gray-600">{a.content.slice(0, 70)}...</p>
              </div>
              <button
                onClick={() => handleReadMore(a.id)}
                className="text-primary text-sm mt-4 hover:underline self-start"
              >
                Baca selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-gray-600">
        Untuk membaca lebih banyak artikel dan materi edukasi lengkap, silakan{' '}
        <a
          href="/login"
          className="text-primary font-medium underline hover:text-green-600 transition"
        >
          masuk ke akun Anda
        </a>.
      </div>
    </section>
  );
}
