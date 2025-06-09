import React, { useState } from "react";
import { Search } from "lucide-react"; // Feather icon dari lucide-react

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    alert(`Mencari: ${query}`);
  };

  return (
    <div className="w-full px-4 py-10 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center border border-green-300 rounded-full bg-white overflow-hidden shadow-lg focus-within:ring-2 ring-green-400 transition-all duration-200">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel, berita, atau resep..."
            className="flex-grow px-4 py-2 text-sm sm:text-base outline-none text-gray-800 placeholder-gray-400"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-r-full flex items-center gap-1 transition active:scale-95"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Cari</span>
          </button>
        </div>
      </div>
    </div>
  );
}