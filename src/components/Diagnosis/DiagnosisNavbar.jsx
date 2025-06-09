import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/HydroSmartSmall.webp";

export default function DiagnosisNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-100 to-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="HydroSmart Logo"
            className="w-10 h-10 rounded-full border border-white shadow-md"
          />
          <h1 className="text-2xl font-bold">
            <span className="text-yellow-400 group-hover:text-yellow-300">Hydro</span>
            <span className="text-green-700 group-hover:text-green-600">Smart</span>
          </h1>
        </Link>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/home"
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition"
          >
            Home
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-800 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white rounded-lg shadow-md py-3 px-4 text-green-900">
          <Link
            to="/home"
            onClick={() => setIsOpen(false)}
            className="block text-sm font-medium hover:text-green-600 transition"
          >
            Home
          </Link>
        </div>
      )}
    </nav>
  );
}
