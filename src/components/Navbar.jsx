import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/HydroSmartSmall.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAnchorClick = () => {
    setIsOpen(false); // Tutup mobile menu setelah klik
  };

  return (
    <nav className="bg-gradient-to-r from-green-100 to-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full border-2 border-white shadow-md hidden md:block"
          />
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <h1 className="text-2xl font-bold">
              <span className="text-yellow-400 group-hover:text-yellow-300">Hydro</span>
              <span className="text-green-700 group-hover:text-green-600">Smart</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-green-900 items-center">
          <li><a href="#ragam" className="hover:text-green-600 transition">Ragam Tanaman</a></li>
          <li><a href="#about" className="hover:text-green-600 transition">Tentang Kami</a></li>
          <li><a href="#galeri" className="hover:text-green-600 transition">Galeri</a></li>
          <li><a href="#edukasi" className="hover:text-green-600 transition">Edukasi</a></li>
        </ul>

        {/* Desktop Button */}
        <Link
          to="/login"
          className="hidden md:inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Masuk
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-800 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-md py-4 px-4 space-y-3 text-green-900 font-medium">
          <a href="#ragam" onClick={handleAnchorClick} className="block hover:text-green-600">Ragam Tanaman</a>
          <a href="#about" onClick={handleAnchorClick} className="block hover:text-green-600">Tentang Kami</a>
          <a href="#galeri" onClick={handleAnchorClick} className="block hover:text-green-600">Galeri</a>
          <a href="#edukasi" onClick={handleAnchorClick} className="block hover:text-green-600">Edukasi</a>
          <Link
            to="/login"
            onClick={handleAnchorClick}
            className="block bg-green-600 text-white px-5 py-2 rounded-lg text-center hover:bg-green-700 transition"
          >
            Masuk
          </Link>
        </div>
      )}
    </nav>
  );
}
