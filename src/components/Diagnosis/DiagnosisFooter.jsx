import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";

export default function DiagnosisFooter() {
  return (
    <footer className="bg-green-50 text-green-700 text-xs py-6 px-4 md:px-8 border-t border-green-200 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Branding & Deskripsi */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 font-medium text-sm text-green-600 mb-1">
            <FaLeaf className="text-green-500" />
            HydroSmart
          </div>
          <p>
            &copy; {new Date().getFullYear()} HydroSmart. Dibuat oleh Tim <strong>CC25-CF144</strong> 🌿
          </p>
          <p className="text-[10px] text-green-500 mt-1">
            Urban Farming • Edukasi Mudah • Ramah Semua Usia
          </p>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex gap-4 text-xl text-green-600">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-800 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-800 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-800 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
