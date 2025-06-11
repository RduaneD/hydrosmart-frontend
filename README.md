### 🌱 HydroSmart FEBE Monorepo

Monorepo resmi untuk tim Frontend & Backend aplikasi **HydroSmart**.  
Proyek ini membangun sistem manajemen tanaman hidroponik berbasis web dengan fitur diagnosis dan rekomendasi tanaman secara cerdas.

---

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
Backend: Node.js + Hapi.js + MongoDB Atlas + JWT Auth + REST API
Machine Learning:
Diagnosis Penyakit → mobilenetv2_best_model.h5 via Flask
Rekomendasi Tanaman → model .pkl via Flask

## 🌐 Link Deployment
Komponen	URL
🌱 Frontend (React)	hydrosmart-frontend.vercel.app
🧠 Backend (Node.js + MongoDB)	hydro-backend-production.up.railway.app
🧪 Diagnosis Flask API (.h5)	diagnosis-flask-production.up.railway.app
🌿 Rekomendasi Flask API (.pkl)	plant-recommendation-production-fc59.up.railway.app
```
🔗 Semua endpoint API sudah terintegrasi secara otomatis ke frontend.
```

## 🧩 Fitur Utama
# 👨‍🌾 Fitur Frontend
```
Landing Page: Hero, Carousel, CTA
Autentikasi: Login, Register
Dashboard Pengguna:
Diagnosis penyakit tanaman berbasis gambar
Rekomendasi tanaman berdasarkan kondisi lingkungan
Riwayat progres dan penyimpanan artikel
Komponen Modular:
DiagnosisNavbar.jsx, DiagnosisResult.jsx, MyProgressUser.jsx, dll.
```

# 🧪 Fitur Backend
```
API RESTful (Hapi.js)
CRUD progres pengguna (MongoDB)
Integrasi diagnosis & rekomendasi via Flask API
```

# 🤖 Diagnosis Penyakit (Flask)
```
Menggunakan model MobileNetV2 (mobilenetv2_best_model.h5)
Input: Gambar tanaman → Output: Label penyakit + confidence + saran
```

# 🌿 Rekomendasi Tanaman (Flask)
```
Model .pkl untuk klasifikasi tanaman
Input: pH, suhu, intensitas cahaya → Output: Nama tanaman optimal
```

## 🛠️ Cara Menjalankan Proyek Secara Lokal
# 1️⃣ Clone Repository
```bash
git clone https://github.com/CC25-CF144/hydrosmart-febe.git
cd hydrosmart-febe
```
# 2️⃣ Menjalankan Frontend (React)
```bash
cd frontend
npm install
npm install swiper react-router-dom react-feather react-icons axios
npm install -D tailwindcss@3.4.1
npm run dev
```
# 3️⃣ Menjalankan Backend (Hapi.js)
```bash
cd backend
npm install
node server.js
```


### ⚠️ Pastikan sudah menyiapkan file .env di folder backend/ berisi:
```bash
PORT=3001
MONGODB_URI=your_mongodb_uri
```
