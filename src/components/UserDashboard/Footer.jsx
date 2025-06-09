import React from "react";
import { FaLeaf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-50 text-green-700 text-xs py-4 px-4 md:px-6 border-t border-green-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-1 text-center">
        <div className="flex items-center gap-1 text-green-600 font-medium text-sm">
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
    </footer>
  );
}
