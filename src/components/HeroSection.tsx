import React, { useState } from 'react';
import { Calendar, Clock, Award, Video, ArrowRight, CheckCircle2, BookOpen, Image as ImageIcon, ZoomIn, X, Download, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface HeroSectionProps {
  onOpenFlyerModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [showFlyerModal, setShowFlyerModal] = useState(false);

  return (
    <section id="beranda" className="relative pt-6 pb-16 md:pt-10 md:pb-20 overflow-hidden bg-islamic-pattern">
      {/* Decorative gradient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/40 via-teal-50/20 to-transparent pointer-events-none rounded-b-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Column (Left / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Kicker: Kegiatan Telah Terlaksana */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-emerald-900 bg-emerald-100/80 border border-emerald-300/80 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span className="font-semibold">Kegiatan Telah Sukses Terlaksana</span>
              <span aria-hidden="true" className="text-emerald-400">·</span>
              <span>30 September 2026</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
                <span className="block text-emerald-800">NGOPAI : Level Up GPAI</span>
                <span className="block text-slate-900 text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                  Mengajar dengan Hati, Hack Administrasi dengan AI
                </span>
              </h1>
              
              {/* Event Information Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {EVENT_DETAILS.shortDescription} Temukan kumpulan silabus, panduan langkah demi langkah Gemini Canvas, formula prompt administrasi Kurikulum Merdeka, serta contoh website dan aplikasi pembelajaran interaktif karya narasumber.
              </p>
            </div>

            {/* CTAs (Including direct link to Refleksi NGOPAI) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={EVENT_DETAILS.reflectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl shadow-lg shadow-emerald-700/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka Refleksi NGOPAI</span>
              </a>

              <a
                href="#materi"
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-200 transition-colors text-center inline-flex items-center justify-center gap-2 hover:border-emerald-300 shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Pelajari Silabus & Materi</span>
              </a>

              <button
                onClick={() => setShowFlyerModal(true)}
                className="w-full sm:w-auto px-5 py-3.5 text-emerald-800 hover:text-emerald-950 font-medium text-xs sm:text-sm text-center inline-flex items-center justify-center gap-1.5 hover:underline"
              >
                <ImageIcon className="w-4 h-4 text-emerald-700" />
                <span>Lihat Flyer Resmi</span>
              </button>
            </div>

            {/* Event Output Checks */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dokumentasi 32 JP Lengkap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>50+ Template Prompt AI</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Source Code Siap Pakai</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Official Flyer Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-emerald-100 p-4 sm:p-5 overflow-hidden group">
              
              {/* Flyer Top Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                    Flyer Resmi NGOPAI
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  30 September 2026
                </span>
              </div>

              {/* Flyer Image Container */}
              <div
                onClick={() => setShowFlyerModal(true)}
                className="relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-900 group-hover:border-emerald-400 transition-all duration-300 shadow-inner aspect-[3/4] max-h-[460px] mx-auto"
              >
                <img
                  src={EVENT_DETAILS.flyerUrl}
                  alt="Flyer Resmi Kegiatan NGOPAI - Level Up GPAI"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  onError={(e) => {
                    // Fallback to high quality styled container if network blocks blogger image
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-white">
                    Klik untuk memperbesar flyer
                  </span>
                  <div className="p-2 bg-emerald-700/90 text-white rounded-lg backdrop-blur-xs flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Event Specs Quick Ribbon */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 text-xs">
                <div className="p-2 bg-slate-50 rounded-xl">
                  <span className="text-[10px] text-slate-500 block uppercase">Narasumber</span>
                  <span className="font-semibold text-slate-800 text-xs truncate block">
                    Ulfatul Husna, S.Ag., M.Pd.
                  </span>
                </div>
                <div className="p-2 bg-emerald-50/70 rounded-xl">
                  <span className="text-[10px] text-emerald-800 block uppercase">Instansi</span>
                  <span className="font-semibold text-emerald-950 text-xs truncate block">
                    SMAN 1 Krembung Sidoarjo
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full Flyer Modal Viewer */}
      {showFlyerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col relative border border-slate-200">
            
            {/* Modal Header */}
            <div className="p-4 sm:px-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                  Poster Resmi Kegiatan NGOPAI 2026
                </h3>
                <p className="text-xs text-slate-500">
                  Pelaksanaan: Rabu, 30 September 2026 · Kementerian Agama & SMAN 1 Krembung
                </p>
              </div>

              <button
                onClick={() => setShowFlyerModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Tutup flyer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Flyer Image View */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900 flex items-center justify-center">
              <img
                src={EVENT_DETAILS.flyerUrl}
                alt="Flyer Lengkap NGOPAI Level Up GPAI"
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-slate-800"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Penyelenggara: Kemenag & SMAN 1 Krembung Sidoarjo
              </span>
              <button
                onClick={() => setShowFlyerModal(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors"
              >
                Tutup Tampilan
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
