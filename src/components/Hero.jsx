import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import card1Img from '../assets/cards/card1.png';
import card2Img from '../assets/cards/card2.jpg';
import card3Img from '../assets/cards/card3.jpg';
import card4Img from '../assets/cards/card4.jpg';
import heroImg from '../assets/HydroSmart.webp';

export default function Hero() {
  const cards = [
    {
      title: 'Hidup Hijau Di Kota',
      description: 'Tanaman hidroponik kini bisa dilakukan bahkan di tengah kota dengan efisien.',
      image: card1Img,
    },
    {
      title: 'Teknologi Cerdas',
      description: 'Pantau pertumbuhan tanaman dengan sensor pintar langsung dari aplikasi.',
      image: card2Img,
    },
    {
      title: 'Solusi Berkelanjutan',
      description: 'Kurangi jejak karbon dengan hidroponik modern yang hemat air dan lahan.',
      image: card3Img,
    },
    {
      title: 'Untuk Semua Orang',
      description: 'Mulai dari pemula hingga ahli, sistem kami dirancang untuk kemudahan semua kalangan.',
      image: card4Img,
    },
  ];

  return (
    <>
      {/* === Carousel Atas (hanya tampil di mobile) === */}
      <section className="block sm:hidden px-4 pt-10 pb-6 bg-white order-first">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={2500}
          pagination={{ clickable: true }}
          className="max-w-md mx-auto"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md h-[250px] transition-all duration-1000 ease-in-out">
                <div
                  className="w-full h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>

      {/* === Hero Section (hanya tampil di tablet & desktop) === */}
      <section className="hidden sm:flex relative flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 py-20 bg-gradient-to-r from-green-200 via-white to-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-green-100 opacity-40 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-xl text-center md:text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 transition-all duration-700 leading-tight">
            Kelola Tanaman Hidroponik Anda <br className="hidden md:block" /> dengan Mudah & Cerdas
          </h1>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            Pantau, rawat, dan dapatkan rekomendasi terbaik untuk tanaman hidroponik Anda — semua dalam satu platform.
          </p>
          <Link
            to="/login"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
          >
            Mulai Sekarang
          </Link>
        </div>

        {/* Hero Image */}
        <img
          src={heroImg}
          alt="Logo HydroSmart"
          className="hidden lg:block relative z-10 w-1/2 mb-10 md:mb-0 animate-fade-in-up transition-transform duration-700 hover:scale-105"
        />
      </section>

      {/* === Carousel Bawah (hanya tampil di desktop & tablet) === */}
      <section className="hidden md:block px-6 md:px-10 py-16 bg-white">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          speed={2500}
          pagination={{ clickable: true }}
          navigation={true}
          className="max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md h-[300px] md:h-[280px] transition-all duration-1000 ease-in-out">
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
                <div
                  className="w-full md:w-1/2 h-48 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
