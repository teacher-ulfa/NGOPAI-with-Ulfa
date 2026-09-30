import React, { useState } from 'react';
import { Award, BookOpen, GraduationCap, Briefcase, Users, Phone, MapPin, Mail, CheckCircle2, BadgeCheck, Sparkles, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import { SPEAKER_DATA } from '../data/eventData';

interface ProfileSectionProps {
  onScrollToKarya: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onScrollToKarya }) => {
  const [activeTab, setActiveTab] = useState<'pendidikan' | 'pengalaman' | 'komunitas'>('pendidikan');

  return (
    <section id="profil" className="py-16 md:py-24 bg-slate-50/70 relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Curriculum Vitae (CV) Narasumber</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight text-balance">
            Profil Narasumber: {SPEAKER_DATA.name}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Pendidik berprestasi, pelopor inovasi digital, dan instruktur nasional yang berdedikasi mengabdi lebih dari 28 tahun untuk kemajuan Pendidikan Agama Islam.
          </p>
        </div>

        {/* Master Profile Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-emerald-100 shadow-xl shadow-slate-200/50 overflow-hidden">
          
          {/* Card Top Banner with Islamic Arch Theme */}
          <div className="h-32 sm:h-40 bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 relative px-6 sm:px-10 flex items-center justify-between">
            <div className="space-y-1 text-white z-10">
              <span className="text-xs font-medium text-emerald-200 uppercase tracking-widest block">
                Biodata & Rekam Jejak Pendidik
              </span>
              <p className="text-base sm:text-xl text-emerald-100 font-heading font-bold flex items-center gap-2">
                <span>{SPEAKER_DATA.tagline}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-600/80 text-emerald-100 font-medium">
                  SMAN 1 Krembung
                </span>
              </p>
            </div>
            
            {/* Islamic Geometric SVG Emblem */}
            <div className="opacity-15 text-white pointer-events-none hidden sm:block">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
          </div>

          <div className="px-6 sm:px-10 pb-10">
            
            {/* Avatar & Key Data Row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start -mt-16 sm:-mt-20 mb-8">
              
              {/* Photo Frame with Official Portrait of Narasumber */}
              <div className="relative group shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 p-1.5 shadow-xl shadow-emerald-950/20">
                  
                  {/* Photo Container */}
                  <div className="w-full h-full rounded-xl bg-slate-900 overflow-hidden relative flex flex-col items-center justify-end">
                    
                    {/* Real Photo of Narasumber */}
                    <img
                      src={SPEAKER_DATA.photoUrl}
                      alt={`Foto Narasumber: ${SPEAKER_DATA.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const img = e.target as HTMLElement;
                        img.style.display = 'none';
                        const fallback = document.getElementById('portrait-svg-fallback');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />

                    {/* SVG Fallback */}
                    <div id="portrait-svg-fallback" className="hidden w-full h-full bg-gradient-to-b from-teal-900 to-emerald-950 flex flex-col items-center justify-end relative">
                      <div className="absolute top-4 w-24 h-24 rounded-full bg-emerald-400/20 blur-md" />
                      <svg className="w-full h-full text-emerald-100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="50" r="32" fill="#065f46" opacity="0.6"/>
                        <path d="M60 20 C42 20 34 32 34 52 C34 76 42 98 60 98 C78 98 86 76 86 52 C86 32 78 20 60 20 Z" fill="#10b981"/>
                        <ellipse cx="60" cy="49" rx="16" ry="19" fill="#fde68a"/>
                        <path d="M46 40 C52 35 68 35 74 40 C70 33 50 33 46 40 Z" fill="#047857"/>
                        <path d="M53 47 C55 45 57 45 58 47" stroke="#374151" strokeWidth="1.8" strokeLinecap="round"/>
                        <path d="M62 47 C64 45 66 45 67 47" stroke="#374151" strokeWidth="1.8" strokeLinecap="round"/>
                        <path d="M55 58 C58 61 62 61 65 58" stroke="#b45309" strokeWidth="1.6" strokeLinecap="round"/>
                        <path d="M42 66 C42 75 50 82 60 82 C70 82 78 75 78 66 C82 78 88 94 92 110 L28 110 C32 94 38 78 42 66 Z" fill="#059669"/>
                        <path d="M22 110 L44 88 L52 110 Z" fill="#0f172a"/>
                        <path d="M98 110 L76 88 L68 110 Z" fill="#0f172a"/>
                        <path d="M52 92 L60 102 L68 92 L60 84 Z" fill="#f8fafc"/>
                      </svg>
                    </div>

                    {/* Official Verified Tag Overlay */}
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-emerald-950/90 backdrop-blur-xs py-0.5 px-1 rounded text-[10px] text-emerald-200 font-semibold text-center border border-emerald-500/30">
                      Guru Pejuang Digital
                    </div>
                  </div>
                </div>

                {/* Badge Icon Overlay */}
                <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-white shadow-md border-2 border-emerald-600 flex items-center justify-center text-emerald-700">
                  <BadgeCheck className="w-5 h-5 fill-emerald-100" />
                </div>
              </div>

              {/* Title & Official Civil Service & Contact Details */}
              <div className="space-y-3.5 flex-1 text-center md:text-left">
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                      {SPEAKER_DATA.name}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-emerald-700 mt-0.5">
                    {SPEAKER_DATA.tagline} · {SPEAKER_DATA.position} {SPEAKER_DATA.institution}
                  </p>
                </div>

                {/* Official Civil Service Data Grid (from CV) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-1 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      NIP
                    </span>
                    <span className="font-mono font-bold text-slate-800 text-xs tabular-nums mt-0.5 block truncate">
                      {SPEAKER_DATA.nip}
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      NUPTK
                    </span>
                    <span className="font-mono font-bold text-slate-800 text-xs tabular-nums mt-0.5 block truncate">
                      {SPEAKER_DATA.nuptk}
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      Pangkat / Gol.
                    </span>
                    <span className="font-semibold text-slate-800 text-xs mt-0.5 block truncate">
                      {SPEAKER_DATA.rank}
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      Jabatan
                    </span>
                    <span className="font-semibold text-slate-800 text-xs mt-0.5 block truncate">
                      {SPEAKER_DATA.position}
                    </span>
                  </div>

                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 col-span-2 sm:col-span-1">
                    <span className="block text-[10px] font-semibold text-emerald-800 uppercase tracking-wider">
                      Instansi
                    </span>
                    <span className="font-bold text-emerald-950 text-xs mt-0.5 block truncate">
                      {SPEAKER_DATA.institution}
                    </span>
                  </div>
                </div>

                {/* Direct Contact Bar (from CV) */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs text-slate-600">
                  <a
                    href={`https://wa.me/62${SPEAKER_DATA.phone.replace(/^0/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-emerald-700 transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-mono">{SPEAKER_DATA.phone}</span>
                  </a>

                  <a
                    href={`mailto:${SPEAKER_DATA.contactEmail}`}
                    className="inline-flex items-center gap-1.5 hover:text-emerald-700 transition-colors bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{SPEAKER_DATA.contactEmail}</span>
                  </a>

                  <div className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{SPEAKER_DATA.address}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Inspirational Quote Callout */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-50/70 via-teal-50/40 to-slate-50 rounded-2xl border-l-4 border-emerald-600 border-y border-r border-emerald-100/60 mb-8 relative">
              <Quote className="w-8 h-8 text-emerald-200 absolute top-4 right-4 pointer-events-none" />
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed max-w-3xl">
                "{SPEAKER_DATA.quote}"
              </p>
              <span className="block text-[11px] font-semibold text-emerald-800 mt-2">
                — {SPEAKER_DATA.name} ({SPEAKER_DATA.tagline})
              </span>
            </div>

            {/* Deep CV Exploration Tabs */}
            <div className="space-y-6">
              
              {/* Tabs Switcher */}
              <div className="flex border-b border-slate-200 overflow-x-auto gap-2 sm:gap-4 pb-1">
                <button
                  onClick={() => setActiveTab('pendidikan')}
                  className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
                    activeTab === 'pendidikan'
                      ? 'border-emerald-600 text-emerald-800'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Pendidikan & Pekerjaan</span>
                </button>

                <button
                  onClick={() => setActiveTab('pengalaman')}
                  className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
                    activeTab === 'pengalaman'
                      ? 'border-emerald-600 text-emerald-800'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>Penghargaan & Pengalaman Google/Kemdikbud</span>
                </button>

                <button
                  onClick={() => setActiveTab('komunitas')}
                  className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
                    activeTab === 'komunitas'
                      ? 'border-emerald-600 text-emerald-800'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Komunitas & Organisasi Profesi</span>
                </button>
              </div>

              {/* TAB 1: PENDIDIKAN & PEKERJAAN */}
              {activeTab === 'pendidikan' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-150">
                  
                  {/* Riwayat Pendidikan */}
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4">
                    <h4 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-emerald-700" />
                      <span>Riwayat Pendidikan</span>
                    </h4>

                    <div className="space-y-3">
                      {SPEAKER_DATA.education.map((edu, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-0.5">
                          <div className="flex items-center justify-between text-slate-500">
                            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                              {edu.period}
                            </span>
                            <span className="text-[11px] font-medium">{edu.level}</span>
                          </div>
                          <h5 className="font-heading font-bold text-slate-800 text-sm mt-1">
                            {edu.institution}
                          </h5>
                          {edu.major && (
                            <p className="text-slate-600 text-[11px]">
                              {edu.major}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Riwayat Pekerjaan */}
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4">
                    <h4 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-700" />
                      <span>Riwayat Pekerjaan</span>
                    </h4>

                    <div className="space-y-3">
                      {SPEAKER_DATA.workExperience.map((work, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-0.5">
                          <div className="flex items-center justify-between text-slate-500">
                            <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded text-[11px]">
                              {work.period}
                            </span>
                            <span className="text-[11px] font-medium text-emerald-800">{work.role}</span>
                          </div>
                          <h5 className="font-heading font-bold text-slate-800 text-sm mt-1">
                            {work.institution}
                          </h5>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Telah mengabdi sebagai Guru PAI di SMAN 1 Krembung sejak tahun 2006 hingga sekarang.</span>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: PENGHARGAAN & PENGALAMAN GOOGLE / KEMDIKBUD */}
              {activeTab === 'pengalaman' && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  
                  {/* Penghargaan Prestasi */}
                  <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200/80 space-y-3">
                    <h4 className="font-heading font-bold text-amber-950 text-sm flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-700" />
                      <span>Penghargaan Guru Prestasi & Inovatif</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SPEAKER_DATA.awards.map((award, idx) => (
                        <div key={idx} className="p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                            {award.year}
                          </div>
                          <span className="font-heading font-bold text-slate-800 text-xs sm:text-sm">
                            {award.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pengalaman & Sertifikasi Google / Kemendikbud */}
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4">
                    <h4 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-700" />
                      <span>Pengalaman & Sertifikasi Profesional (Google & Kemendikbudristek)</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      {SPEAKER_DATA.certifications.map((cert, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium text-slate-800 leading-snug">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 3: KOMUNITAS & ORGANISASI */}
              {activeTab === 'komunitas' && (
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-700" />
                      <span>Kiprah Kepemimpinan Komunitas & Organisasi Profesi Guru</span>
                    </h4>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      Aktif Menggerakkan
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {SPEAKER_DATA.communities.map((comm, idx) => (
                      <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-3 hover:border-emerald-300 transition-colors">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </div>
                        <span className="font-semibold text-slate-800 leading-snug">
                          {comm}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
                    <strong>Komitmen Pengabdian: </strong>
                    Ibu Ulfatul Husna dipercaya memimpin DPD AGPAII Sidoarjo masa khidmat 2025–2030 serta aktif sebagai Co-Kapten belajar.id dalam membimbing ribuan guru bertransformasi digital.
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={onScrollToKarya}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm"
              >
                <span>Lihat Karya Nyata & Website Pembelajaran</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/62${SPEAKER_DATA.phone.replace(/^0/, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Hubungi via WhatsApp</span>
                </a>

                <a
                  href={`mailto:${SPEAKER_DATA.contactEmail}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Kirim Surel</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
