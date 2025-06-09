### ydroSmart FEBE Monorepo 🌱
Monorepo resmi untuk tim Frontend & Backend aplikasi HydroSmart.
Proyek ini membangun sistem manajemen tanaman hidroponik berbasis web menggunakan React.js, Node.js (Hapi.js), dan MongoDB.

## 📁 Struktur Folder
```bash
/
├── frontend/      # Kode UI/Client (React + Tailwind)
├── backend/       # Kode API & Server (Node.js + Hapi.js + MongoDB)
├── docs/          # Dokumen proyek (wireframe, ERD, API spec)
├── .gitignore     # File yang diabaikan git (node_modules, .env, dll)
└── README.md      # Dokumentasi utama proyek
```

## 🚀 Tech Stack
Frontend: React.js + Vite + Tailwind CSS + React Router + Framer Motion + Axios
Backend: Node.js + Hapi.js + MongoDB Atlas + JWT
Dokumentasi: Figma (Wireframe), dbdiagram.io (ERD), Swagger/Postman (API Docs)

## 🧩 Fitur Frontend
Landing Page: Hero, Carousel, CTA
Autentikasi: Login & Register
Dashboard Pengguna: Navigasi, diagnosis, dan histori
Diagnosis Penyakit: Upload gambar → Hasil diagnosis + rekomendasi
Komponen Modular:
DiagnosisNavbar.jsx
DiagnosisResult.jsx
DiagnosisBrandInfo.jsx
dll.

## 🛠️ Cara Menjalankan Proyek
# 1. Clone Repo
```bash
git clone https://github.com/CC25-CF144/hydrosmart-febe.git
cd hydrosmart-febe
```

# 2. Jalankan Frontend
```bash
cd frontend
npm install
npm install swiper react-router-dom react-feather react-icons
npm install axios
npm install -D tailwindcss@3.4.1
npm run dev
```

# 3. Jalankan Backend
```bash
cd backend
npm install
node server.js
```
⚠️ Pastikan sudah menyiapkan file .env di folder backend/ untuk koneksi MongoDB Atlas.

---

## 📚 Dokumentasi Tambahan
Wireframe UI: docs/wireframe
ERD Database: docs/ERD
API Specs: docs/api-specs

## 👥 Tim FEBE
Frontend Developers
Backend Developers
Documentation & API Writers

## 🤝 Kontribusi
Fork repo (jika bukan bagian tim)
Clone dan buat branch fitur baru
```bash
git checkout -b feature/nama-fitur
Commit perubahan dan buat Pull Request ke branch main
```

## 🔄 Git Tips & Push
Menambahkan file baru:
```bash
git add src/components/FiturBaru.jsx
git commit -m "feat: tambah komponen FiturBaru"
git push origin main
```
Update beberapa file:
```bash
git add path/to/fileA.jsx path/to/fileB.css
git commit -m "fix: perbaiki layout Diagnosis"
git push origin main
```

## 🛰️ Deployment Target
Frontend 👉 Vercel
Backend 👉 Render
Database 👉 MongoDB Atlas

## 📅 Update Terakhir frontend
24 Mei 2025
Tambah halaman login & register
Navigasi ke dashboard
Validasi sederhana register
Struktur modularisasi komponen