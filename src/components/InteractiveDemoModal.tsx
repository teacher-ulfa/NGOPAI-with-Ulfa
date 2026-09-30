import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, RefreshCw, Sparkles, Award } from 'lucide-react';
import { PortfolioItem } from '../data/eventData';

interface InteractiveDemoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  // State for Mini Quiz Demo
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // State for Zakat Calculator Demo
  const [goldPrice, setGoldPrice] = useState<number>(1500000);
  const [wealthAmount, setWealthAmount] = useState<number>(150000000);
  const [zakatResult, setZakatResult] = useState<{
    nisab: number;
    isWajib: boolean;
    amount: number;
  } | null>(null);

  // State for Portal / Module simulation
  const [activeTab, setActiveTab] = useState<'soal' | 'analisis'>('soal');

  const quizQuestions = [
    {
      verseArabic: "مِن بَعْدِ",
      verseLatin: "Min ba'di",
      question: "Hukum bacaan apakah yang terjadi ketika Nun Sukun bertemu dengan huruf Ba (ب)?",
      options: [
        { label: "Idzhar Halqi", isCorrect: false },
        { label: "Iqlab", isCorrect: true, explanation: "Iqlab terjadi saat Nun mati/tanwin bertemu Ba. Suara nun dilebur menjadi mim disertai dengung." },
        { label: "Idgham Bighunnah", isCorrect: false },
        { label: "Ikhfa Haqiqi", isCorrect: false },
      ]
    },
    {
      verseArabic: "مَن يَقُولُ",
      verseLatin: "May yaquulu",
      question: "Hukum bacaan apakah yang terjadi ketika Nun Sukun bertemu dengan huruf Ya (ي)?",
      options: [
        { label: "Idgham Bighunnah", isCorrect: true, explanation: "Idgham Bighunnah terjadi saat Nun mati/tanwin bertemu salah satu huruf Yanmu (ي, ن, م, و) dengan dengung." },
        { label: "Idgham Bilaghunnah", isCorrect: false },
        { label: "Idzhar Syafawi", isCorrect: false },
        { label: "Iqlab", isCorrect: false },
      ]
    },
    {
      verseArabic: "أَنْعَمْتَ",
      verseLatin: "An'amta",
      question: "Hukum bacaan apakah yang terjadi ketika Nun Sukun bertemu huruf 'Ain (ع)?",
      options: [
        { label: "Ikhfa Syafawi", isCorrect: false },
        { label: "Idzhar Halqi", isCorrect: true, explanation: "Idzhar Halqi terjadi saat Nun mati/tanwin bertemu salah satu dari 6 huruf tenggorokan (ء, هـ, ع, ح, غ, خ) dibaca jelas tanpa dengung." },
        { label: "Iqlab", isCorrect: false },
        { label: "Idgham", isCorrect: false },
      ]
    }
  ];

  const handleSelectQuizAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (quizQuestions[currentQuestion].options[index].isCorrect) {
      setScore(prev => prev + 33.34);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleCalculateZakat = () => {
    const nisab = 85 * goldPrice;
    const isWajib = wealthAmount >= nisab;
    const amount = isWajib ? wealthAmount * 0.025 : 0;
    setZakatResult({ nisab, isWajib, amount });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Tutup demo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            <span>Simulasi Langsung Karya</span>
            <span aria-hidden="true">·</span>
            <span>{item.category}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
            {item.title}
          </h3>
          <p className="text-xs text-slate-500">
            {item.schoolContext}
          </p>
        </div>

        {/* Dynamic Interactive Body based on demoType */}
        <div className="p-4 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200/80 mb-6">
          
          {/* DEMO 1: Kuis Interaktif Tajwid */}
          {item.demoType === 'quiz' && (
            <div className="space-y-6">
              {!quizFinished ? (
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-2 border-b border-slate-200">
                    <span className="font-semibold text-emerald-800">
                      Soal {currentQuestion + 1} dari {quizQuestions.length}
                    </span>
                    <span className="font-mono">
                      Skor Sementara: {Math.round(score)}
                    </span>
                  </div>

                  {/* Arabic Verse Card */}
                  <div className="p-6 bg-emerald-900 text-center rounded-2xl text-white shadow-inner mb-5">
                    <span className="text-3xl sm:text-4xl font-serif tracking-wider text-emerald-100 block mb-2">
                      {quizQuestions[currentQuestion].verseArabic}
                    </span>
                    <span className="text-xs text-emerald-300 italic">
                      "{quizQuestions[currentQuestion].verseLatin}"
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-4">
                    {quizQuestions[currentQuestion].question}
                  </p>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {quizQuestions[currentQuestion].options.map((opt, idx) => {
                      const isSelected = selectedAnswer === idx;
                      let btnStyle = "bg-white hover:bg-slate-100 border-slate-200 text-slate-800";
                      
                      if (isAnswered) {
                        if (opt.isCorrect) {
                          btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-900 font-semibold";
                        } else if (isSelected && !opt.isCorrect) {
                          btnStyle = "bg-rose-100 border-rose-500 text-rose-900";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => handleSelectQuizAnswer(idx)}
                          className={`p-3.5 text-xs text-left rounded-xl border transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt.label}</span>
                          {isAnswered && opt.isCorrect && (
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {isAnswered && isSelected && !opt.isCorrect && (
                            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Explanation */}
                  {isAnswered && (
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1 mb-4">
                      <strong className="block font-semibold text-emerald-800">
                        {quizQuestions[currentQuestion].options[selectedAnswer!].isCorrect
                          ? 'Maa Syaa Allah, Benar!'
                          : 'Afwan, Masih Kurang Tepat.'}
                      </strong>
                      <p>
                        {quizQuestions[currentQuestion].options.find(o => o.isCorrect)?.explanation}
                      </p>
                    </div>
                  )}

                  {isAnswered && (
                    <button
                      onClick={handleNextQuiz}
                      className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl transition-colors"
                    >
                      {currentQuestion < quizQuestions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}
                    </button>
                  )}
                </div>
              ) : (
                /* Quiz Finished Result */
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-slate-900">
                      Alhamdulillah! Kuis Selesai
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Hasil latihan hukum tajwid Anda:
                    </p>
                    <span className="text-4xl font-extrabold text-emerald-700 font-mono block mt-2">
                      {Math.round(score)} / 100
                    </span>
                    <span className="inline-block mt-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                      {score >= 90 ? 'Predikat: Mumtaz (Istimewa)' : 'Predikat: Jayyid (Baik)'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Aplikasi ini dapat disematkan ke portal sekolah atau dibagikan ke gawai murid untuk evaluasi formatif 5 menit sebelum kelas berakhir.
                  </p>

                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Ulangi Simulasi Kuis</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* DEMO 2: Zakat Calculator / Tool Simulation */}
          {item.demoType === 'calculator' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600 mb-2">
                Simulasi kalkulator zakat otomatis berbasis nisab emas:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label htmlFor="modal-gold-price" className="block font-semibold text-slate-700 mb-1">
                    Harga Emas per Gram (Rp):
                  </label>
                  <input
                    id="modal-gold-price"
                    type="number"
                    value={goldPrice}
                    onChange={(e) => setGoldPrice(Number(e.target.value))}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">
                    Nisab 85 gr = Rp {(85 * goldPrice).toLocaleString('id-ID')}
                  </span>
                </div>

                <div>
                  <label htmlFor="modal-wealth-amount" className="block font-semibold text-slate-700 mb-1">
                    Total Harta Tersimpan 1 Tahun (Rp):
                  </label>
                  <input
                    id="modal-wealth-amount"
                    type="number"
                    value={wealthAmount}
                    onChange={(e) => setWealthAmount(Number(e.target.value))}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">
                    Rp {wealthAmount.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCalculateZakat}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Hitung Kewajiban Zakat
              </button>

              {zakatResult && (
                <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2 text-xs">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-500">Batas Nisab (85 gram):</span>
                    <span className="font-semibold text-slate-800">
                      Rp {zakatResult.nisab.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-500">Status Kewajiban:</span>
                    <span className={`font-bold ${zakatResult.isWajib ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {zakatResult.isWajib ? 'Wajib Mengeluarkan Zakat Maal' : 'Belum Mencapai Nisab'}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="font-bold text-slate-800">Jumlah Zakat (2.5%):</span>
                    <span className="font-mono font-bold text-emerald-800 text-sm">
                      Rp {Math.round(zakatResult.amount).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DEMO 3: Portal & E-Modul Showcase Screen */}
          {(item.demoType === 'portal' || item.demoType === 'modul') && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <span className="font-bold text-slate-800">Dashboard Siswa SMAN 1 Krembung</span>
                  <span className="text-emerald-700 font-semibold">Tahun Pelajaran 2026/2027</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3 text-center">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <span className="block text-[10px] text-emerald-800">Al-Qur'an</span>
                    <span className="text-xs font-bold text-emerald-950">96% Tuntas</span>
                  </div>
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <span className="block text-[10px] text-emerald-800">Akidah Akhlak</span>
                    <span className="text-xs font-bold text-emerald-950">92% Tuntas</span>
                  </div>
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <span className="block text-[10px] text-emerald-800">Fiqih Ibadah</span>
                    <span className="text-xs font-bold text-emerald-950">98% Tuntas</span>
                  </div>
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <span className="block text-[10px] text-emerald-800">Sejarah Islam</span>
                    <span className="text-xs font-bold text-emerald-950">90% Tuntas</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600">
                  <strong className="block text-slate-800 font-semibold mb-1">Rekomendasi AI Guru:</strong>
                  "Ananda telah menguasai kaidah hukum nun sukun dengan sangat baik. Disarankan membaca QS. Al-Baqarah: 183-185 untuk penguatan materi Fiqih Puasa."
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Feature List & Tech Stack */}
        <div className="space-y-4 text-xs sm:text-sm">
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
              Fitur Utama yang Dibangun:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {item.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Teknologi & Framework:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {item.techStack.map((tech, i) => (
                <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Tutup Simulasi
          </button>
        </div>

      </div>
    </div>
  );
};
