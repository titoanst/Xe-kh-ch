import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SocTrangPage from './components/SocTrangPage';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Destination Routes */}
            <Route path="/diem-den/soc-trang" element={<SocTrangPage />} />
            {/* Placeholders for other provinces - reusing generic structure for now or redirecting */}
            <Route path="/diem-den/can-tho" element={<div className="pt-32 text-center h-screen"><h1 className="text-2xl font-serif">Đang cập nhật nội dung Cần Thơ...</h1></div>} />
            
            {/* Utility Routes */}
            <Route path="/lien-he" element={<div className="pt-20"><MapSection /></div>} />
            <Route path="/blog" element={<div className="pt-32 text-center h-screen"><h1 className="text-2xl font-serif">Chuyên mục Blog đang được xây dựng...</h1></div>} />
          </Routes>
        </main>
        <Footer />
        <StickyContact />
      </div>
    </HashRouter>
  );
}