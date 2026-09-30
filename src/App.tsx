import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RefleksiSection } from './components/RefleksiSection';
import { EventInfoSection } from './components/EventInfoSection';
import { ProfileSection } from './components/ProfileSection';
import { MateriSection } from './components/MateriSection';
import { PanduanSection } from './components/PanduanSection';
import { KaryaSection } from './components/KaryaSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToKarya = () => {
    const el = document.getElementById('karya');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* 1. STICKY TOP NAVBAR (With Official Kemenag Logo & NGOPAI : Bidang PAIS Kanwil Kemenag Jawa Timur) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. HERO SECTION (With Official Flyer NGOPAI) */}
        <HeroSection />

        {/* 3. BAHAN TAYANG & REFLEKSI GURU (Polling Interaktif & Refleksi Kalbu Pendidik) */}
        <RefleksiSection />

        {/* 4. EVENT INFO & RUNDOWN */}
        <EventInfoSection />

        {/* 5. PROFIL NARASUMBER (With Official Photo of Ulfatul Husna, S.Ag., M.Pd.) */}
        <ProfileSection
          onScrollToKarya={scrollToKarya}
        />

        {/* 6. SECTION MATERI */}
        <MateriSection />

        {/* 7. PANDUAN PRAKTIS & PROMPT GENERATOR (Proyek Jurnal Spreadsheet & Website AI Vercel) */}
        <PanduanSection />

        {/* 8. CONTOH KARYA / PORTOFOLIO (With Live Website Pembelajaran Ulfa di Vercel) */}
        <KaryaSection />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* FLOATING QUICK ARSIP BADGE */}
      <div className="fixed bottom-6 left-6 z-30 hidden sm:block">
        <a
          href="#bahan-tayang"
          className="flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-2xl border border-emerald-200/80 shadow-lg shadow-emerald-950/5 text-slate-800 text-xs font-semibold hover:border-emerald-400 transition-all hover:-translate-y-0.5"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Bahan Tayang & Refleksi</span>
          <span className="text-emerald-700 font-bold">· Buka</span>
        </a>
      </div>

    </div>
  );
}
