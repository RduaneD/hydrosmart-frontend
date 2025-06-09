import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import logo from "../../assets/HydroSmartSmall.webp"; // path sudah disesuaikan

export default function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm("Yakin ingin keluar?");
    if (confirmed) {
      alert("Logout berhasil");
      navigate("/");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-green-100 to-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
        <ul className="hidden md:flex flex-1 justify-center space-x-8 font-medium text-green-900 items-center">
          <li>
            <Link to="/my-progress" className="hover:text-green-600 transition">
              My Progress
            </Link>
          </li>
          <li>
            <Link to="/input-progress" className="hover:text-green-600 transition">
              Progress
            </Link>
          </li>
          <li>
            <Link to="/diagnosis" className="hover:text-green-600 transition">
              Diagnosis Penyakit
            </Link>
          </li>
          <li>
            <Link to="/plant-recommendation" className="hover:text-green-600 transition">
              Rekomendasi Tanaman
            </Link>
          </li>
          <li>
            <Link to="/saved-articles" className="hover:text-green-600 transition">
              Artikel Disimpan
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="hidden md:flex flex-shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

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
          <Link to="/my-progress" onClick={() => setIsOpen(false)} className="block hover:text-green-600">
            My Progress
          </Link>
          <Link to="/input-progress" onClick={() => setIsOpen(false)} className="block hover:text-green-600">
            Progress
          </Link>
          <Link to="/diagnosis" onClick={() => setIsOpen(false)} className="block hover:text-green-600">
            Diagnosis Penyakit
          </Link>
          <Link to="/plant-recommendation" onClick={() => setIsOpen(false)} className="block hover:text-green-600">
            Rekomendasi Tanaman
          </Link>
          <Link to="/saved-articles" onClick={() => setIsOpen(false)} className="block hover:text-green-600">
            Artikel Disimpan
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="w-full text-left text-red-500 hover:text-red-600 flex items-center gap-1"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
