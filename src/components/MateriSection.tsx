import React, { useState } from 'react';
import { BookOpen, Clock, FileCheck, ArrowRight, X, Sparkles, CheckCircle2, Laptop } from 'lucide-react';
import { MATERIALS_DATA, MaterialItem } from '../data/eventData';

export const MateriSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<MaterialItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Materi' },
    { id: 'administrasi', label: 'Administrasi & RPP' },
    { id: 'media', label: 'Media & Gamifikasi' },
    { id: 'pedagogik', label: 'Prompt Pedagogik' },
    { id: 'etika', label: 'Fikih & Etika Digital' },
  ];

  const filteredMaterials = selectedCategory === 'all'
    ? MATERIALS_DATA
    : MATERIALS_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="materi" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Kurikulum & Silabus Workshop
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight text-balance">
            Materi Pelatihan Praktis & Teruji
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Disusun bertahap dari pemahaman konsep, formulasi prompt kurikulum merdeka, kreasi media berbasis Gemini Canvas, hingga etika syar'i pemanfaatan AI.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs with functional buttons) */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-xl border border-slate-200/70">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Materials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Clean Unboxed Metadata Header (Zero-Pill Rule) */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-emerald-700">{item.number}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-slate-600">{item.categoryLabel}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{item.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-slate-900 text-lg group-hover:text-emerald-800 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Deliverable Point */}
                <div className="pt-2 border-t border-slate-200/60">
                  <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                    Hasil Luaran (Output):
                  </span>
                  <div className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <FileCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.deliverables[0]}</span>
                  </div>
                </div>

              </div>

              {/* Action */}
              <div className="pt-5 mt-4">
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-xl bg-white group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-800 border border-slate-200 group-hover:border-emerald-200 transition-colors"
                >
                  <span>Lihat Silabus & Praktik</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Syllabus Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Tutup detail materi"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold uppercase tracking-wider">
                <span>Materi {activeModalItem.number}</span>
                <span aria-hidden="true">·</span>
                <span>{activeModalItem.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{activeModalItem.duration}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                {activeModalItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeModalItem.description}
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 pt-6 mt-6 border-t border-slate-100 text-sm">
              
              {/* Target Kompetensi */}
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Target Kompetensi Peserta
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {activeModalItem.syllabus.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools yang Digunakan */}
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm mb-2.5 flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-emerald-700" />
                  Alat & Platform Praktik
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.syllabus.aiTools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-emerald-900 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skenario Praktik Langsung */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80">
                <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm mb-1 text-emerald-900">
                  Tugas Praktik Mandiri:
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeModalItem.syllabus.practicalExercise}
                </p>
              </div>

              {/* Luaran Dokumen */}
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-xs sm:text-sm mb-2">
                  Dokumen / Produk yang Dibawa Pulang:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeModalItem.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Tutup Ringkasan Silabus
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
