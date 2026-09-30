import React from 'react';
import { ArrowUp, BookOpen, Heart, Mail, MapPin, School, Sparkles, Phone } from 'lucide-react';
import { SPEAKER_DATA, EVENT_DETAILS } from '../data/eventData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Vision (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Logo Kemenag RI Image */}
              <div
                className="w-11 h-11 rounded-lg bg-emerald-950/80 p-1 flex items-center justify-center border border-emerald-700/60 shrink-0"
                title="Kementerian Agama RI"
              >
                <img
                  src={EVENT_DETAILS.kemenagLogoUrl}
                  alt="Logo Kementerian Agama RI"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-xs"
                  onError={(e) => {
                    const img = e.target as HTMLElement;
                    img.style.display = 'none';
                  }}
                />
              </div>

              <div>
                <span className="text-xl font-heading font-extrabold text-white tracking-tight block">
                  {EVENT_DETAILS.name}
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  {EVENT_DETAILS.subHeader}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              "NGOPAI : Level Up GPAI : Mengajar dengan hati, hack administrasi dengan AI" — Inisiatif kolaboratif Kementerian Agama dan SMAN 1 Krembung Sidoarjo untuk mempercepat transformasi pedagogik guru Pendidikan Agama Islam menuju era kecerdasan buatan yang berakhlakul karimah.
            </p>

            {/* Hadits / Ayat Callout */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs text-emerald-300/90 italic leading-relaxed">
              "Allah akan meninggikan orang-orang yang beriman di antaramu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat."
              <span className="block text-[11px] text-slate-400 not-italic mt-1 font-semibold">
                — QS. Al-Mujadilah [58]: 11
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#beranda" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Beranda Acara
                </a>
              </li>
              <li>
                <a href="#info-acara" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Jadwal & Rundown 30 Sept 2026
                </a>
              </li>
              <li>
                <a href="#profil" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Profil Narasumber (Ulfatul Husna, S.Ag., M.Pd.)
                </a>
              </li>
              <li>
                <a href="#materi" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Materi & Silabus Pelatihan
                </a>
              </li>
              <li>
                <a href="#panduan" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Panduan Gemini Canvas & AI Studio
                </a>
              </li>
              <li>
                <a href="#karya" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contoh Portofolio & Demo Aplikasi
                </a>
              </li>
            </ul>
          </div>

          {/* Institution & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Instansi Penyelenggara
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <School className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>SMAN 1 Krembung Sidoarjo, Jawa Timur</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jl. Raya Buncitan - Krembung, Kabupaten Sidoarjo, Jawa Timur</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{SPEAKER_DATA.contactEmail}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`https://wa.me/62${SPEAKER_DATA.phone.replace(/^0/, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                  WhatsApp: {SPEAKER_DATA.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="block text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                Sasaran Komunitas:
              </span>
              <p className="text-xs text-slate-400">
                Musyawarah Guru Mata Pelajaran (MGMP) PAI SMA/SMK/SMP/SD se-Indonesia.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 NGOPAI - Ulfatul Husna. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 flex items-center gap-1">
              <span>Mengajar dengan Hati</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Ke Atas</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
