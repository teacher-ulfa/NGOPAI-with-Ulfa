import React, { useState } from 'react';
import { ExternalLink, Sparkles, CheckCircle2, Play, LayoutGrid, Monitor, Award, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, PortfolioItem } from '../data/eventData';
import { InteractiveDemoModal } from './InteractiveDemoModal';

export const KaryaSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeDemoItem, setActiveDemoItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { id: 'all', label: 'Semua Karya' },
    { id: 'Aplikasi Web', label: 'Aplikasi Web' },
    { id: 'Kuis Interaktif', label: 'Kuis Interaktif' },
    { id: 'Modul Digital', label: 'Modul Digital' },
    { id: 'Tool AI', label: 'Tool AI Guru' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === selectedFilter);

  return (
    <section id="karya" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Showcase & Portofolio Inovasi
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight text-balance">
            Contoh Aplikasi & Website Karya Narasumber
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Karya nyata yang telah diuji dan diimplementasikan di SMAN 1 Krembung Sidoarjo. Membuktikan bahwa guru PAI dapat merancang produk teknologi modern yang bermakna bagi peserta didik.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200/70">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedFilter === f.id
                    ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((karya) => (
            <div
              key={karya.id}
              className="bg-slate-50/70 rounded-3xl border border-slate-200/80 overflow-hidden hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Visual Placeholder / Mockup Screen Banner with Fallback Architecture */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 p-6 flex flex-col justify-between overflow-hidden">
                  
                  {/* Decorative Geometric Vector Backdrop */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id={`pattern-${karya.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 0 15 L 15 0 L 30 15 L 15 30 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-300"/>
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#pattern-${karya.id})`} />
                    </svg>
                  </div>

                  {/* Top Bar of Mockup */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 text-[11px] text-emerald-200 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{karya.category}</span>
                    </div>

                    <span className="text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      SMAN 1 Krembung
                    </span>
                  </div>

                  {/* Mock Interface Preview Inside Screen */}
                  <div className="z-10 bg-slate-950/70 backdrop-blur-md rounded-xl p-3.5 border border-emerald-500/20 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-emerald-300 font-mono mb-1.5">
                      <span className="truncate max-w-[200px]">{karya.title}</span>
                      <span className="text-[10px] text-emerald-400">Ver. 2.4</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 w-4/5 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-emerald-700 block mb-1">
                      {karya.schoolContext}
                    </span>
                    <h3 className="font-heading font-bold text-slate-900 text-xl leading-snug">
                      {karya.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {karya.description}
                  </p>

                  {/* Impact Metric Callout */}
                  <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/70 text-xs text-emerald-900 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Dampak Pembelajaran: </strong>
                      <span>{karya.impactMetric}</span>
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Fitur & Keunggulan:
                    </span>
                    {karya.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-200/60 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {karya.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 bg-slate-200/70 text-slate-700 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {karya.liveUrl && (
                    <a
                      href={karya.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-xl border border-emerald-300 transition-colors shadow-xs flex-1 sm:flex-initial"
                    >
                      <span>Buka Web Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveDemoItem(karya)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors shrink-0 flex-1 sm:flex-initial"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Uji Coba Demo</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal Simulator */}
      {activeDemoItem && (
        <InteractiveDemoModal
          item={activeDemoItem}
          onClose={() => setActiveDemoItem(null)}
        />
      )}
    </section>
  );
};
