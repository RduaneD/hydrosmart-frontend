import seladaImg from '../../assets/plants/selada.png';
import bayamImg from '../../assets/plants/bayam.png';
import sawiImg from '../../assets/plants/sawi.png';
import pakcoyImg from '../../assets/plants/pakcoy.png';
import kangkungImg from '../../assets/plants/kangkung.png';

const plantData = [
  { name: 'Selada', img: seladaImg },
  { name: 'Bayam', img: bayamImg },
  { name: 'Sawi', img: sawiImg },
  { name: 'Pakcoy', img: pakcoyImg },
  { name: 'Kangkung', img: kangkungImg },
];

export default function RagamTanaman() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#F4F7ED]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-green-800">
        Ragam Tanaman Hidroponik
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {plantData.map((plant, idx) => (
          <button
            key={idx}
            onClick={() => alert(`Info tentang ${plant.name}`)}
            className={`bg-white hover:bg-green-50 border border-green-100 rounded-xl shadow-sm p-5 flex flex-col items-center transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-300
              ${plantData.length % 2 !== 0 && idx === plantData.length - 1 ? 'col-span-2 justify-self-center sm:col-span-1 sm:justify-self-auto' : ''}
            `}
          >
            <img
              src={plant.img}
              alt={plant.name}
              className="w-28 h-28 object-contain mb-3 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-sm sm:text-base font-semibold text-green-800 text-center">
              {plant.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
