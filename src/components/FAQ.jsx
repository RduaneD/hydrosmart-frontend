import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const data = [
    {
      question: "Apa itu hidroponik?",
      answer:
        "Hidroponik adalah metode menanam tanpa tanah, menggunakan air dan nutrisi untuk pertumbuhan tanaman yang optimal.",
    },
    {
      question: "Apakah saya perlu pengalaman khusus?",
      answer:
        "Tidak. HydroSmart dirancang untuk pemula sekalipun. Aplikasi kami memandu Anda langkah demi langkah.",
    },
    {
      question: "Bagaimana saya memulai dengan HydroSmart?",
      answer:
        "Anda hanya perlu mendaftar akun dan mulai menambahkan data tanaman Anda. Kami akan bantu monitoring dan memberikan rekomendasi.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-12">
        Pertanyaan Umum
      </h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-green-200 rounded-xl bg-green-50 transition-all duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <span className="text-lg font-semibold text-green-800">
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-green-700" />
              ) : (
                <ChevronDown className="w-5 h-5 text-green-700" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-700 text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
