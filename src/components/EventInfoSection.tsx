import React, { useState } from 'react';
import { Calendar, Clock, Award, Users, CheckCircle, FileText, Image as ImageIcon, ZoomIn, X, BookOpen, ArrowRight } from 'lucide-react';
import { EVENT_DETAILS, EVENT_SCHEDULE } from '../data/eventData';

export const EventInfoSection: React.FC = () => {
  const [showFlyerModal, setShowFlyerModal] = useState(false);

  return (
    <section id="info-acara" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Agenda & Detail Pelaksanaan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight text-balance">
            Informasi Kegiatan NGOPAI 2026
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Kegiatan Ngobrol Pendidikan Agama Islam (NGOPAI) yang diinisiasi bersama Kementerian Agama dan SMAN 1 Krembung Sidoarjo telah berlangsung sukses pada 30 September 2026. Rangkuman agenda dan materi tetap dapat diakses di bawah ini.
          </p>
        </div>

        {/* 4 Key Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {EVENT_DETAILS.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-200 space-y-2.5"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-700 shadow-xs font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Breakdown: Rundown Acara & Sasaran Peserta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Susunan Rundown Acara (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/60 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <div>
                <h3 className="text-lg font-heading font-bold text-slate-900">
                  Susunan Acara (Rundown)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Rabu, 30 September 2026 · 12.30 - 14.40 WIB
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md">
                Telah Terlaksana (Pukul 12.30 - 14.40 WIB)
              </span>
            </div>

            <div className="space-y-4">
              {EVENT_SCHEDULE.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70 hover:border-emerald-200 transition-colors"
                >
                  <div className="flex items-center sm:block shrink-0">
                    <span className="inline-block text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md sm:w-28 text-center tabular-nums">
                      {item.time} WIB
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-800">
                      {item.activity}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-medium text-emerald-800">{item.speaker}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.room}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sasaran Peserta & Flyer Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Target Peserta Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base">
                    Peserta yang Mengikuti
                  </h4>
                  <p className="text-xs text-slate-500">Terbuka untuk seluruh pendidik agama Islam</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Guru PAI jenjang SMA, SMK, dan MA se-Indonesia</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Guru PAI jenjang SD dan SMP / MTs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pengawas Pendidikan Agama Islam (PPAI) Kemenag & Dinas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mahasiswa Fakultas Tarbiyah & Calon Guru Agama Islam</span>
                </li>
              </ul>
            </div>

            {/* Flyer Quick Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-emerald-700" />
                  <span>Flyer Resmi Publikasi</span>
                </h4>
                <button
                  onClick={() => setShowFlyerModal(true)}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Perbesar</span>
                </button>
              </div>

              <div
                onClick={() => setShowFlyerModal(true)}
                className="relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 group aspect-[16/10] bg-slate-900"
              >
                <img
                  src={EVENT_DETAILS.flyerUrl}
                  alt="Poster NGOPAI 2026"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <span className="px-3 py-1 bg-white/90 text-slate-900 text-xs font-semibold rounded-lg shadow-sm">
                    Klik untuk melihat poster penuh
                  </span>
                </div>
              </div>

              <div className="pt-1 flex gap-2">
                <a
                  href="#materi"
                  className="flex-1 py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Pelajari Materi</span>
                </a>
                <a
                  href="#panduan"
                  className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition-colors text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>Panduan Canvas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Flyer Modal Viewer */}
      {showFlyerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col relative border border-slate-200">
            <div className="p-4 sm:px-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                  Flyer Resmi NGOPAI
                </h3>
                <p className="text-xs text-slate-500">
                  Rabu, 30 September 2026 · Bersama Ulfatul Husna, S.Ag., M.Pd.
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
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900 flex items-center justify-center">
              <img
                src={EVENT_DETAILS.flyerUrl}
                alt="Flyer Lengkap NGOPAI Level Up GPAI"
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
            <div className="p-3.5 sm:px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => setShowFlyerModal(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors"
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
