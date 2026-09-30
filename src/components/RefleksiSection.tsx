import React, { useState } from 'react';
import { ExternalLink, QrCode, CheckCircle2, MessageSquare, Sparkles, HeartHandshake, Eye, EyeOff, Copy, Check, Globe } from 'lucide-react';
import { REFLEKSI_DATA, EVENT_DETAILS } from '../data/eventData';

export const RefleksiSection: React.FC = () => {
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);
  const [pollVotes, setPollVotes] = useState<Record<string, number>>({
    A: 48,
    B: 85,
    C: 67,
  });
  const [hasVoted, setHasVoted] = useState(false);
  const [showEmbedPreview, setShowEmbedPreview] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleVote = (key: string) => {
    if (hasVoted) return;
    setSelectedPoll(key);
    setPollVotes(prev => ({
      ...prev,
      [key]: prev[key] + 1
    }));
    setHasVoted(true);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(EVENT_DETAILS.reflectionUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const totalVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0);

  return (
    <section id="refleksi" className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>Refleksi NGOPAI & Bahan Tayang</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight text-balance">
            Refleksi NGOPAI: Mengajar dengan Hati
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {REFLEKSI_DATA.subtitle}
          </p>
        </div>

        {/* Master Showcase Banner: Portal Refleksi NGOPAI */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 mb-12 relative overflow-hidden">
          
          {/* Subtle Islamic Motif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            
            {/* Left Content */}
            <div className="space-y-3 text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Web App Resmi: Refleksi NGOPAI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                https://husna-pai.github.io/NGOPAI/
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
                Aplikasi web refleksi interaktif mandiri yang disiapkan oleh Ibu Ulfatul Husna, S.Ag., M.Pd. untuk seluruh peserta NGOPAI se-Indonesia.
              </p>

              {/* Link copy & specs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
                <span className="font-mono bg-black/40 px-3 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-300 select-all">
                  https://husna-pai.github.io/NGOPAI/
                </span>
                <button
                  onClick={handleCopyUrl}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1.5 font-medium"
                >
                  {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedUrl ? 'Tersalin' : 'Salin Tautan'}</span>
                </button>
              </div>
            </div>

            {/* Right: QR Code & Launch Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              
              {/* QR Code Container */}
              <div className="p-3 bg-white rounded-2xl shadow-lg border-2 border-emerald-400/40 text-center space-y-1">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                  <QrCode className="w-full h-full text-slate-900" />
                </div>
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-emerald-900">
                  SCAN : REFLEKSI
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 w-full sm:w-auto">
                <a
                  href={EVENT_DETAILS.reflectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-950/20 flex items-center justify-center gap-2"
                >
                  <span>Buka Refleksi NGOPAI</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setShowEmbedPreview(!showEmbedPreview)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-slate-100 font-semibold text-xs rounded-xl border border-white/15 transition-colors flex items-center justify-center gap-2"
                >
                  {showEmbedPreview ? (
                    <>
                      <EyeOff className="w-4 h-4" />
                      <span>Tutup Pratinjau Web</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 text-emerald-400" />
                      <span>Pratinjau di Halaman Ini</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* Optional Live Iframe Embed Preview */}
          {showEmbedPreview && (
            <div className="mt-6 pt-6 border-t border-emerald-500/30 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 text-xs text-emerald-200">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Pratinjau Langsung: husna-pai.github.io/NGOPAI/
                </span>
                <a
                  href={EVENT_DETAILS.reflectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:underline flex items-center gap-1"
                >
                  <span>Buka di Tab Baru</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-[520px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-inner">
                <iframe
                  src={EVENT_DETAILS.reflectionUrl}
                  title="Web App Refleksi NGOPAI"
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          )}

        </div>

        {/* Two Column Grid: Interactive Polling & Heartfelt Reflection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Card 1: Interactive Polling (Pear Deck / Slido Style) (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
              <span className="font-semibold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Pertanyaan Refleksi 1 (Pear Deck / Slido Poll)
              </span>
              <span className="text-slate-500 font-mono text-[11px]">
                {totalVotes} Pendidik Telah Menjawab
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg leading-relaxed">
                "{REFLEKSI_DATA.questions[0].question}"
              </h3>
              <p className="text-xs text-slate-500 italic">
                Silakan pilih opsi yang paling menggambarkan pengalaman batin Bapak/Ibu:
              </p>
            </div>

            {/* Poll Options (A: YA, B: SERING, C: SELALU) */}
            <div className="space-y-3">
              {REFLEKSI_DATA.questions[0].options?.map((opt) => {
                const votes = pollVotes[opt.key];
                const pct = Math.round((votes / totalVotes) * 100);
                const isSelected = selectedPoll === opt.key;

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleVote(opt.key)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/90 ring-1 ring-emerald-500'
                        : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50/80'
                    }`}
                  >
                    {/* Animated Progress Bar behind text */}
                    {hasVoted && (
                      <div
                        className="absolute inset-0 bg-emerald-100/60 transition-all duration-700 pointer-events-none rounded-2xl"
                        style={{ width: `${pct}%` }}
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-emerald-700 text-white'
                              : 'bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <span className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                          {opt.label}
                        </span>
                      </div>

                      {hasVoted && (
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-900">
                          <span>{pct}%</span>
                          <span className="text-[11px] text-slate-500 font-normal">({votes} suara)</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {hasVoted && (
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Terima kasih atas kejujuran Bapak/Ibu! Fakta ini menunjukkan mengapa otomatisasi administrasi dengan AI sangat mendesak agar hati guru seutuhnya hadir mendidik.</span>
              </div>
            )}
          </div>

          {/* Card 2: Deep Reflection Question 2 (Makna Kehadiran Guru vs AI) (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/30 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/30 text-xs">
              <span className="font-semibold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Pertanyaan Refleksi 2 (Makna Kehadiran Guru)
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-bold text-white text-base sm:text-lg leading-relaxed">
                "{REFLEKSI_DATA.questions[1].question}"
              </h3>
              <p className="text-xs text-emerald-200/80 leading-relaxed">
                Jawaban atas pertanyaan ini adalah ruh sejati dari tema kita: <em className="text-emerald-300 font-semibold not-italic">"Mengajar dengan hati, hack administrasi dengan AI."</em>
              </p>
            </div>

            {/* Key Reflection Bullets */}
            <div className="space-y-3 pt-1">
              {REFLEKSI_DATA.questions[1].reflectionKeyPoints?.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white/10 rounded-xl border border-white/10 text-xs text-slate-100">
                  <HeartHandshake className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Direct Link to husna-pai.github.io/NGOPAI/ */}
            <div className="pt-4 border-t border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>husna-pai.github.io/NGOPAI/</span>
              </div>

              <a
                href={EVENT_DETAILS.reflectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Akses Refleksi Penuh</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Highlight Banner: Contoh Website Pembelajaran Ulfa (Live di Vercel) */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Contoh Website Nyata Karya Narasumber</span>
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
              Website Pembelajaran Ulfa (Live di Vercel)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Lihat langsung hasil nyata implementasi Proyek 2 workshop NGOPAI: website interaktif yang dibangun menggunakan prompt Google AI Studio dan dideploy live di Vercel.
            </p>
          </div>

          <a
            href={EVENT_DETAILS.featuredWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2 shrink-0 hover:-translate-y-0.5"
          >
            <span>Kunjungi Website Pembelajaran</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
