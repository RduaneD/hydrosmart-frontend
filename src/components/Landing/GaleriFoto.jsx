import kebun1 from '../../assets/gallery/kebun1.jpg';
import kebun2 from '../../assets/gallery/kebun2.jpg';
import kebun3 from '../../assets/gallery/kebun3.jpg';
import kebun4 from '../../assets/gallery/kebun4.jpeg';

const photos = [kebun1, kebun2, kebun3, kebun4];

export default function GaleriFoto() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-800">
        Galeri Kegiatan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Galeri ${idx + 1}`}
            className="rounded-xl shadow-md object-cover w-full h-52 hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
