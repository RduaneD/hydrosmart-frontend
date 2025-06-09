import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Home from './home.jsx';
import DiagnosisPage from './DiagnosisPage.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import MyProgressUser from './MyProgressUser';
import EditProgressUser from './EditProgressUser';
import InputProgressUser from './InputProgressUser';
import ArtikelDetail from './components/Artikel/ArtikelDetail';
import PlantRecommendationPage from './PlantRecommendationPage';
import SavedArticles from './SavedArticles.jsx'; // ✅ ganti nama komponen

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diagnosis" element={<DiagnosisPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-progress" element={<MyProgressUser />} />
        <Route path="/edit-progress" element={<EditProgressUser />} />
        <Route path="/input-progress" element={<InputProgressUser />} />
        <Route path="/artikel/:id" element={<ArtikelDetail />} />
        <Route path="/plant-recommendation" element={<PlantRecommendationPage />} />
        <Route path="/saved-articles" element={<SavedArticles />} /> {/* ✅ perbaikan path */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
