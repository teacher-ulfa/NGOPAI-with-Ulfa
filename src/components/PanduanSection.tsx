import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Check, Sparkles, BookOpen, Terminal, Code2, Globe, Lightbulb } from 'lucide-react';
import { PRACTICAL_GUIDES, PROMPT_TEMPLATES } from '../data/eventData';

export const PanduanSection: React.FC = () => {
  const [activeGuideTab, setActiveGuideTab] = useState<'canvas' | 'aistudio'>('canvas');
  const [openStepIndices, setOpenStepIndices] = useState<Record<string, number>>({
    'guide-gemini-canvas': 0, // open first step by default
    'guide-ai-studio': 0
  });

  // Prompt Generator Interactive State
  const [selectedPromptId, setSelectedPromptId] = useState<string>(PROMPT_TEMPLATES[0].id);
  const [customTopic, setCustomTopic] = useState<string>(PROMPT_TEMPLATES[0].defaultTopic);
  const [customGrade, setCustomGrade] = useState<string>('Kelas XI SMA');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCodeSnippet, setCopiedCodeSnippet] = useState<string | null>(null);

  const currentGuide = activeGuideTab === 'canvas' ? PRACTICAL_GUIDES[0] : PRACTICAL_GUIDES[1];
  const selectedTemplate = PROMPT_TEMPLATES.find(p => p.id === selectedPromptId) || PROMPT_TEMPLATES[0];

  const handleToggleStep = (guideId: string, index: number) => {
    setOpenStepIndices(prev => ({
      ...prev,
      [guideId]: prev[guideId] === index ? -1 : index
    }));
  };

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopySnippet = (snippet: string, key: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedCodeSnippet(key);
    setTimeout(() => setCopiedCodeSnippet(null), 2000);
  };

  const generatedPromptText = selectedTemplate.template(customTopic, customGrade);

  return (
    <section id="panduan" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Tutorial & Alur Kerja Mandiri
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight text-balance">
            Panduan Praktis Integrasi AI untuk GPAI
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Petunjuk langkah-demi-langkah (Step-by-Step) berbasis studi kasus nyata untuk mewujudkan media interaktif di Gemini Canvas serta peluncuran website di Google AI Studio.
          </p>
        </div>

        {/* Guide Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-2xl w-full">
            <button
              onClick={() => setActiveGuideTab('canvas')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeGuideTab === 'canvas'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Proyek 1: Jurnal Siswa (Gemini + Sheets)</span>
            </button>
            <button
              onClick={() => setActiveGuideTab('aistudio')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeGuideTab === 'aistudio'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Proyek 2: Website AI (AI Studio + Vercel)</span>
            </button>
          </div>
        </div>

        {/* Active Guide Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Guide Summary & Outcome (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-sm space-y-5">
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                Ikhtisar Alur Kerja
              </span>
              <h3 className="font-heading font-bold text-slate-900 text-lg leading-snug">
                {currentGuide.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {currentGuide.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              {currentGuide.intro}
            </p>

            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/70 space-y-1.5">
              <span className="text-xs font-bold text-emerald-900 block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                Target Akhir yang Dicapai:
              </span>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {currentGuide.outcome}
              </p>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Dapat dipraktikkan tanpa perlu menginstall software rumit.</span>
            </div>
          </div>

          {/* Right: Step-by-Step Accordion List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {currentGuide.steps.map((step, idx) => {
              const isOpen = openStepIndices[currentGuide.id] === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-300 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-200/50'
                      : 'border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  {/* Step Accordion Header */}
                  <button
                    onClick={() => handleToggleStep(currentGuide.id, idx)}
                    className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-colors shrink-0 ${
                          isOpen
                            ? 'bg-emerald-700 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        0{step.step}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-slate-400 block sm:hidden">
                          {step.badge}
                        </span>
                        <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <span className="hidden sm:inline-block text-xs font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                        {step.badge}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-emerald-700" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Step Accordion Body */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700 animate-in fade-in duration-150">
                      <p className="leading-relaxed">
                        {step.description}
                      </p>

                      {/* Tips Box */}
                      <div className="p-3.5 bg-amber-50/60 border border-amber-200/70 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold">Tips Praktis Narasumber: </strong>
                          <span>{step.tips}</span>
                        </div>
                      </div>

                      {/* Code Snippet Box if provided (e.g. Google Apps Script) */}
                      {step.codeSnippet && (
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                              <Code2 className="w-3.5 h-3.5 text-emerald-700" />
                              Kode Script Google Apps Script (doPost API):
                            </span>
                            <button
                              onClick={() => handleCopySnippet(step.codeSnippet!, `code-${idx}`)}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors"
                            >
                              {copiedCodeSnippet === `code-${idx}` ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span>Tersalin!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Salin Kode Script</span>
                                </>
                              )}
                            </button>
                          </div>

                          <pre className="p-4 bg-slate-950 text-amber-200 text-xs rounded-xl overflow-x-auto font-mono whitespace-pre-wrap leading-relaxed border border-slate-800">
                            {step.codeSnippet}
                          </pre>
                        </div>
                      )}

                      {/* Example Prompt Box if provided */}
                      {step.promptExample && (
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                              <Terminal className="w-3.5 h-3.5 text-emerald-700" />
                              Contoh Prompt Siap Pakai di Canvas:
                            </span>
                            <button
                              onClick={() => handleCopySnippet(step.promptExample!, `step-${idx}`)}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors"
                            >
                              {copiedCodeSnippet === `step-${idx}` ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span>Tersalin!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>Salin Prompt</span>
                                </>
                              )}
                            </button>
                          </div>

                          <pre className="p-4 bg-slate-900 text-emerald-200 text-xs rounded-xl overflow-x-auto font-mono whitespace-pre-wrap leading-relaxed border border-slate-800">
                            {step.promptExample}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* BONUS SECTION: Interactive Prompt Generator for GPAI */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl shadow-slate-200/40">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Fitur Praktik Interaktif</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
              Simulator Prompt Guru PAI (Siap Salin & Pakai)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pilih jenis template administrasi di bawah ini, sesuaikan topik materi Anda, lalu klik salin untuk langsung ditempelkan ke Google Gemini atau Gemini Canvas.
            </p>
          </div>

          {/* Template Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {PROMPT_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => {
                  setSelectedPromptId(tmpl.id);
                  setCustomTopic(tmpl.defaultTopic);
                }}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  selectedPromptId === tmpl.id
                    ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-1 ring-emerald-500'
                    : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                <span className="text-[11px] font-semibold text-emerald-700 block uppercase">
                  {tmpl.category}
                </span>
                <span className="text-xs sm:text-sm font-heading font-bold text-slate-900 block mt-1 leading-snug">
                  {tmpl.title}
                </span>
              </button>
            ))}
          </div>

          {/* Inputs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-6">
            <div className="sm:col-span-8">
              <label htmlFor="topic-input" className="block text-xs font-semibold text-slate-700 mb-1">
                Topik / Materi Pokok Pembelajaran PAI:
              </label>
              <input
                id="topic-input"
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="Contoh: Zakat Maal & Faraidh..."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="grade-select" className="block text-xs font-semibold text-slate-700 mb-1">
                Jenjang & Kelas Target:
              </label>
              <select
                id="grade-select"
                value={customGrade}
                onChange={(e) => setCustomGrade(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="Kelas X SMA/SMK (Fase E)">Kelas X SMA/SMK (Fase E)</option>
                <option value="Kelas XI SMA/SMK (Fase F)">Kelas XI SMA/SMK (Fase F)</option>
                <option value="Kelas XII SMA/SMK (Fase F)">Kelas XII SMA/SMK (Fase F)</option>
                <option value="Kelas VII-IX SMP (Fase D)">Kelas VII-IX SMP (Fase D)</option>
                <option value="Kelas IV-VI SD (Fase B/C)">Kelas IV-VI SD (Fase B/C)</option>
              </select>
            </div>
          </div>

          {/* Result Output Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Output Prompt Terstruktur:
              </span>
              <button
                onClick={() => handleCopyPrompt(generatedPromptText)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin ke Clipboard</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative">
              <pre className="p-4 sm:p-5 bg-slate-900 text-slate-100 text-xs rounded-2xl overflow-x-auto font-mono whitespace-pre-wrap leading-relaxed max-h-72 border border-slate-800">
                {generatedPromptText}
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
