import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Copy, ExternalLink, HelpCircle, RefreshCw, Terminal, Wrench, XCircle, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

interface TroubleItem {
  id: string;
  problem: string;
  symptom: string;
  cause: string;
  solutionSteps: string[];
  codeFix?: string;
  quickTip: string;
}

export const TroubleshootSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'github' | 'vercel'>('github');
  const [expandedTroubleId, setExpandedTroubleId] = useState<string>('gh-blank');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const githubTroubles: TroubleItem[] = [
    {
      id: 'gh-blank',
      problem: 'Layar Masih Putih Polos (Blank Screen) Meski GitHub Status Sudah "Active" / Berhasil',
      symptom: 'GitHub Actions sudah centang hijau dan status bertuliskan "Deployed", namun saat alamat web dibuka yang muncul hanya halaman putih kosong tanpa teks dan gambar.',
      cause: 'Ini adalah masalah nomor 1 paling sering terjadi, penyebab utamanya adalah: (1) Path absolut pada link file JS/CSS (tertulis "/assets/..." dengan garis miring di depan sehingga browser salah mencari folder), (2) Error "process is not defined" karena kode memanggil API key lewat process.env, atau (3) Kontainer elemen <div id="root"> atau <div id="app"> hilang.',
      solutionSteps: [
        'Solusi Cepat 1 (Periksa Path Garis Miring): Buka file index.html di GitHub. Jika ada baris seperti <script src="/assets/index-xxx.js"> atau <link href="/style.css">, UBAH tanda garis miring di depannya menjadi titik-garis-miring: <script src="./assets/index-xxx.js"> atau <link href="./style.css">. Titik (.) penting agar browser mencari file di dalam subfolder repositori Anda!',
        'Solusi Cepat 2 (Jika Menggunakan Vite / React): Buka file "vite.config.js" atau "vite.config.ts" di repositori Anda, tambahkan baris: base: "./" di dalam export default defineConfig({ base: "./", plugins: [...] }). Lalu simpan (commit) dan build ulang.',
        'Solusi Cepat 3 (Buka Layar Diagnosis F12): Di browser laptop Anda saat membuka web yang blank, tekan tombol keyboard "F12" (atau klik kanan > Inspect), lalu klik tab "Console". Perhatikan tulisan berwarna MERAH. Di sana akan tertulis nama error yang sebenarnya (misal: "Failed to load resource: 404" atau "ReferenceError: process is not defined").',
        'Solusi Cepat 4 (Gunakan Template Single-File Anti-Blank): Salin kode utuh template Jurnal PAI yang sudah kami sediakan di bawah ini, lalu timpa seluruh isi file index.html Anda di GitHub. Template ini sudah menyatukan HTML + CSS Tailwind + JavaScript dalam 1 file tunggal sehingga DIJAMIN 100% tidak akan pernah blank!'
      ],
      codeFix: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jurnal Refleksi Pembelajaran PAI</title>
  <!-- Tailwind CSS CDN Mandiri (Bebas Error Path) -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans">
  <div class="max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100">
    <div class="text-center mb-6">
      <span class="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
        Jurnal Pembelajaran Siswa PAI
      </span>
      <h1 class="text-2xl font-bold text-slate-800">Refleksi Harian Peserta Didik</h1>
      <p class="text-xs text-slate-500 mt-1">Isi jurnal pembelajaran setelah mengikuti materi hari ini</p>
    </div>

    <form id="jurnalForm" class="space-y-4">
      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap Siswa:</label>
        <input type="text" id="nama" required placeholder="Contoh: Muhammad Rizki" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Kelas & Jurusan:</label>
        <input type="text" id="kelas" required placeholder="Contoh: XI-IPA 2" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Materi / Topik yang Dipelajari:</label>
        <input type="text" id="materi" required placeholder="Contoh: Iman Kepada Hari Akhir" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none">
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Apa Hikmah & Refleksi yang Kamu Dapatkan?</label>
        <textarea id="refleksi" required rows="3" placeholder="Tuliskan hikmah yang kamu petik..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"></textarea>
      </div>

      <button type="submit" id="btnSubmit" class="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm transition-all shadow-md">
        Kirim Refleksi ke Spreadsheet
      </button>
    </form>

    <div id="statusMsg" class="mt-4 p-3 rounded-xl text-xs text-center hidden"></div>
  </div>

  <script>
    // Ganti URL ini dengan URL Web App dari Google Apps Script Anda (berakhiran /exec)
    const SCRIPT_URL = "PASTE_URL_WEB_APP_APPS_SCRIPT_ANDA_DI_SINI";

    document.getElementById("jurnalForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const btn = document.getElementById("btnSubmit");
      const msg = document.getElementById("statusMsg");
      
      btn.disabled = true;
      btn.innerText = "Sedang Mengirim...";

      const data = new URLSearchParams();
      data.append("nama", document.getElementById("nama").value);
      data.append("kelas", document.getElementById("kelas").value);
      data.append("materi", document.getElementById("materi").value);
      data.append("refleksi", document.getElementById("refleksi").value);

      if (SCRIPT_URL.includes("PASTE_URL")) {
        msg.className = "mt-4 p-3 rounded-xl text-xs text-center bg-amber-100 text-amber-900 block";
        msg.innerText = "Peringatan: URL Apps Script belum diganti, namun aplikasi web berhasil tampil normal 100%!";
        btn.disabled = false;
        btn.innerText = "Kirim Refleksi ke Spreadsheet";
        return;
      }

      fetch(SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors"
      }).then(() => {
        msg.className = "mt-4 p-3 rounded-xl text-xs text-center bg-emerald-100 text-emerald-900 block";
        msg.innerText = "Alhamdulillah! Refleksi kamu berhasil tersimpan di Google Spreadsheet guru.";
        document.getElementById("jurnalForm").reset();
        btn.disabled = false;
        btn.innerText = "Kirim Refleksi ke Spreadsheet";
      }).catch(err => {
        msg.className = "mt-4 p-3 rounded-xl text-xs text-center bg-rose-100 text-rose-900 block";
        msg.innerText = "Terjadi kendala pengiriman: " + err.message;
        btn.disabled = false;
        btn.innerText = "Kirim Ulang";
      });
    });
  </script>
</body>
</html>`,
      quickTip: 'Kunci anti-blank: Gunakan CDN online dan jangan gunakan path lokal yang diawali "/" tanpa titik di depannya.'
    },
    {
      id: 'gh-1',
      problem: 'Error 404: "There isn\'t a GitHub Pages site here"',
      symptom: 'Saat link https://username.github.io/jurnal-pembelajaran dibuka, muncul halaman 404 Not Found berwarna abu-abu.',
      cause: 'Ada 3 kemungkinan utama: (1) Nama file bukan persis "index.html" (misal "Index.html", "jurnal.html"), (2) Pengaturan Branch di Settings > Pages belum diaktifkan, atau (3) GitHub Actions masih dalam proses build (butuh waktu 1-3 menit).',
      solutionSteps: [
        'Pastikan nama file di repositori GitHub Anda persis huruf kecil: "index.html" (bukan "Index.html" atau "index.html.txt").',
        'Pastikan file "index.html" terletak langsung di luar (root), BUKAN di dalam subfolder.',
        'Buka repositori GitHub > Klik tab "Settings" (di bagian atas) > Klik menu "Pages" (di menu kiri).',
        'Pada bagian "Build and deployment", pastikan Source: "Deploy from a branch", lalu ubah Branch dari "None" menjadi "main" (atau "master"), folder "/ (root)", lalu klik tombol "Save".',
        'Buka tab "Actions" di repositori Anda. Tunggu sekitar 1-2 menit hingga ikon kuning berputar berubah menjadi centang hijau ("pages build and deployment"). Setelah centang hijau, barulah buka link Anda!'
      ],
      quickTip: 'Jangan panik jika langsung 404 setelah klik Save! GitHub membutuhkan waktu antrean sekitar 90 detik untuk memproses halaman pertama kali.'
    },
    {
      id: 'gh-2',
      problem: 'Menu GitHub Pages Tidak Bisa Diklik / Repositori Berstatus Private',
      symptom: 'Ada peringatan "GitHub Pages is currently only available for public repositories" atau fitur Pages terkunci.',
      cause: 'Akun GitHub gratis (Free Tier) hanya mengizinkan publikasi GitHub Pages pada repositori yang disetel "Public".',
      solutionSteps: [
        'Buka repositori GitHub Anda > Klik tab "Settings".',
        'Scroll ke bagian paling bawah ke area "Danger Zone".',
        'Klik tombol "Change repository visibility" > Pilih "Change to public".',
        'Ketikkan nama repositori Anda untuk konfirmasi, lalu klik tombol "I understand, make this repository public".',
        'Kembali ke menu "Pages" di sebelah kiri dan ikuti langkah deploy branch main.'
      ],
      quickTip: 'Repositori publik aman untuk dibagikan ke siswa karena hanya berisi tampilan jurnal pembelajaran tanpa kata sandi rahasia.'
    },
    {
      id: 'gh-3',
      problem: 'Formulir Jurnal Gagal Mengirim Data ke Google Spreadsheet',
      symptom: 'Muncul pesan error "Failed to fetch" atau status submit berputar terus dan baris data tidak bertambah di Google Sheets.',
      cause: 'Pengaturan izin akses pada Google Apps Script belum diubah ke "Anyone" (Siapa saja), atau URL Web App yang dimasukkan salah format (bukan yang berakhiran /exec).',
      solutionSteps: [
        'Buka Google Spreadsheet Anda > Klik menu Ekstensi > Apps Script.',
        'Klik tombol biru "Terapkan" (Deploy) di kanan atas > Pilih "Deployment Baru".',
        'Pada bagian "Akses" (Who has access), PASTIKAN DIUBAH MENJADI: "Siapa saja" (Anyone), BUKAN "Hanya saya". Ini wajib agar siswa bisa kirim data tanpa login akun Google Anda.',
        'Klik "Terapkan". Jika diminta izin otorisasi, klik "Beri Akses" > pilih akun Anda > klik "Lanjutan" (Advanced) > klik "Buka proyek (tidak aman)" > klik "Izinkan".',
        'Salin URL Web App yang berakhiran ".../exec".',
        'Buka file index.html di GitHub, pastikan URL tersebut telah dipaste menggantikan teks [PASTE_URL_WEB_APP_ANDA_DI_SINI].'
      ],
      codeFix: `// Pastikan kode di Apps Script memiliki izin POST publik:
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var timestamp = new Date();
  var nama = e.parameter.nama;
  var mapel = e.parameter.mapel;
  var refleksi = e.parameter.refleksi;
  sheet.appendRow([timestamp, nama, mapel, refleksi]);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}`,
      quickTip: 'Setiap kali Anda mengedit kode di Apps Script, Anda harus membuat "Deployment Baru" versi terbaru agar perubahannya aktif!'
    },
    {
      id: 'gh-4',
      problem: 'Halaman Hanya Menampilkan Teks Putih Polos atau Kode Mentah',
      symptom: 'Saat dibuka, yang muncul justru baris-baris kode HTML mentah atau tampilan hancur tanpa desain warna.',
      cause: 'Kode dipaste bukan sebagai file index.html atau terpotong saat proses salin dari Gemini Canvas.',
      solutionSteps: [
        'Buka file index.html di GitHub Anda dan klik ikon pensil (Edit file).',
        'Pastikan baris paling atas diawali dengan: <!DOCTYPE html> dan baris paling bawah diakhiri dengan: </html>.',
        'Pastikan link Tailwind CSS atau style CSS ada di dalam tag <head>. Contoh: <script src="https://cdn.tailwindcss.com"></script>.',
        'Klik tombol "Commit changes" untuk menyimpan perbaikan.'
      ],
      quickTip: 'Gunakan fitur prompt Gemini Canvas satu file (Single File HTML) yang menggabungkan HTML + CSS + JS agar tidak ada file eksternal yang tercecer.'
    }
  ];

  const vercelTroubles: TroubleItem[] = [
    {
      id: 'ver-1',
      problem: 'Error: Command "npm run build" exited with 1 atau No Output Directory "dist"',
      symptom: 'Build status di Vercel berwarna merah dengan pesan: "Error: No Output Directory named "dist" found after the Build completed".',
      cause: 'Vercel secara otomatis menduga proyek Anda adalah React/Vite/Next.js karena ada file tertentu, padahal proyek Anda hanyalah file HTML statis biasa (Single Page HTML).',
      solutionSteps: [
        'Buka dashboard Vercel Anda di vercel.com > Klik proyek yang error.',
        'Masuk ke tab "Settings" di menu atas > Klik menu "General" di sebelah kiri.',
        'Cari bagian "Build & Development Settings".',
        'Pada pilihan "Framework Preset", ubah dari "Vite" atau "Next.js" menjadi: "Other".',
        'Pastikan tombol toggle "Build Command" dalam posisi MATI (OFF) atau kosongkan.',
        'Pastikan tombol toggle "Output Directory" dalam posisi MATI (OFF) atau kosongkan.',
        'Klik tombol "Save" di bagian bawah.',
        'Masuk ke tab "Deployments" > Klik titik tiga (...) di samping deployment terakhir > Pilih "Redeploy". Dalam 10 detik website akan sukses centang hijau!'
      ],
      quickTip: 'Jika hanya menggunakan file index.html statis, Framework Preset di Vercel HARUS disetel ke "Other". Ini solusi paling ampuh untuk 95% error Vercel guru!'
    },
    {
      id: 'ver-2',
      problem: 'Repositori GitHub Tidak Muncul Saat Ingin Di-Import ke Vercel',
      symptom: 'Saat klik "Add New... > Project", daftar repositori GitHub kosong atau repositori portal AI Anda tidak ada di daftar.',
      cause: 'Aplikasi Vercel di akun GitHub Anda belum diberi izin akses ke repositori yang baru Anda buat.',
      solutionSteps: [
        'Di halaman "Import Git Repository" pada Vercel, perhatikan dropdown nama akun GitHub Anda.',
        'Klik dropdown tersebut, lalu klik tombol "Configure GitHub App" atau "Adjust GitHub Permissions".',
        'Anda akan diarahkan ke halaman pengaturan GitHub. Masukkan kata sandi jika diminta.',
        'Pada bagian "Repository access", pilih opsi "All repositories" (semua repositori) atau pilih "Only select repositories" lalu centang nama repo portal AI Anda.',
        'Klik tombol hijau "Save".',
        'Kembali ke tab Vercel, refresh halaman, dan repositori Anda akan langsung muncul siap klik "Import"!'
      ],
      quickTip: 'Memilih "All repositories" akan memudahkan Anda di masa depan karena repositori baru akan langsung otomatis terdeteksi Vercel.'
    },
    {
      id: 'ver-3',
      problem: 'Chatbot "Tanya Guru AI" Tidak Menjawab / Loading Berputar Terus',
      symptom: 'Website sudah online di Vercel, tetapi saat siswa mengetikkan pertanyaan materi di chatbox, tidak muncul jawaban atau ada notifikasi error API.',
      cause: 'API Key Google AI Studio belum dimasukkan ke dalam kode JavaScript (masih tertulis teks dummy "KODE_API_SAYA"), atau API Key belum diaktifkan kuotanya.',
      solutionSteps: [
        'Buka aistudio.google.com > Klik "Get API Key" > Buat API Key baru lalu salin kunci yang diawali huruf "AIzaSy...".',
        'Buka file index.html (atau script.js) di repositori GitHub Anda.',
        'Cari baris kode: const API_KEY = "KODE_API_SAYA";',
        'Ganti dengan kunci asli Anda: const API_KEY = "AIzaSyXXXXXXXXXXXXXXXXXX";',
        'Klik tombol "Commit changes". Vercel akan otomatis melakukan auto-redeploy dalam 10 detik!',
        'Uji coba kembali chatbox dengan mengetik: "Jelaskan rukun iman dengan bahasa sederhana". Jawaban AI akan langsung keluar.'
      ],
      codeFix: `// Contoh pemanggilan Gemini API di JavaScript:
const API_KEY = "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX"; // Masukkan kunci asli dari aistudio.google.com
const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY;

async function tanyaAI(pertanyaan) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: pertanyaan }] }]
    })
  });
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}`,
      quickTip: 'Model gemini-1.5-flash sangat cepat dan memiliki kuota gratis yang sangat cukup untuk ribuan pertanyaan siswa setiap bulannya!'
    },
    {
      id: 'ver-4',
      problem: 'Error 404: "DEPLOYMENT_NOT_FOUND" atau "PAGE_NOT_FOUND" di Vercel',
      symptom: 'Deploy berhasil di Vercel, namun saat mengklik URL website muncul layar 404 dari Vercel.',
      cause: 'File utama diletakkan di dalam sub-folder (misalnya di dalam folder `src/` atau `public/`) tanpa Root Directory yang diatur di Vercel.',
      solutionSteps: [
        'Jika file Anda berada di dalam folder (misal: "my-web/index.html"), pindahkan file "index.html" ke direktori terluar repositori GitHub.',
        'Atau, buka Vercel Project > Settings > General > Pada opsi "Root Directory", klik Edit lalu ketikkan nama folder Anda (misal: "my-web").',
        'Klik Save dan lakukan Redeploy.'
      ],
      quickTip: 'Struktur paling mudah dan bebas error: Letakkan semua file (index.html, style.css) langsung di halaman depan repositori GitHub Anda!'
    }
  ];

  const currentTroubles = activeTab === 'github' ? githubTroubles : vercelTroubles;

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="troubleshoot" className="py-16 md:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-800 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            <Wrench className="w-3.5 h-3.5 text-rose-600" />
            <span>Pusat Solusi Kendala Teknis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight text-balance">
            Solusi Gagal Publish GitHub & Error Deploy Vercel
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Menemui pesan error saat mempublikasikan aplikasi jurnal atau website AI Anda? Jangan khawatir, berikut adalah panduan perbaikan cepat langkah-demi-langkah yang dirancang khusus untuk pendidik.
          </p>
        </div>

        {/* Tab Selector: GitHub Pages vs Vercel */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 max-w-xl w-full">
            <button
              onClick={() => {
                setActiveTab('github');
                setExpandedTroubleId('gh-1');
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'github'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${activeTab === 'github' ? 'bg-emerald-600' : 'bg-slate-400'}`} />
              <span>Kendala GitHub Pages (Proyek 1)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('vercel');
                setExpandedTroubleId('ver-1');
              }}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'vercel'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${activeTab === 'vercel' ? 'bg-emerald-600' : 'bg-slate-400'}`} />
              <span>Kendala Vercel Deploy (Proyek 2)</span>
            </button>
          </div>
        </div>

        {/* Interactive Accordion of Common Errors */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {currentTroubles.map((item) => {
            const isExpanded = expandedTroubleId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-emerald-500/80 bg-white shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setExpandedTroubleId(isExpanded ? '' : item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isExpanded ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg leading-snug">
                        {item.problem}
                      </h3>
                      <p className="text-xs text-rose-600 font-medium mt-1">
                        Gejala: {item.symptom}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 p-1 rounded-lg bg-slate-50 text-slate-500 mt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Body */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-5 animate-in fade-in duration-150">
                    
                    {/* Cause Box */}
                    <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs sm:text-sm text-amber-950 space-y-1">
                      <span className="font-bold flex items-center gap-1.5 text-amber-900">
                        <HelpCircle className="w-4 h-4 text-amber-700" />
                        Akar Penyebab:
                      </span>
                      <p className="leading-relaxed pl-5 text-amber-900/90">
                        {item.cause}
                      </p>
                    </div>

                    {/* Step-by-Step Solution */}
                    <div className="space-y-3">
                      <h4 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Langkah Perbaikan Pasti:</span>
                      </h4>

                      <div className="space-y-2.5">
                        {item.solutionSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed border border-slate-200/60">
                            <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="flex-1">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Code Fix Snippet if Available */}
                    {item.codeFix && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-emerald-700" />
                            Kode Solusi Siap Salin:
                          </span>
                          <button
                            onClick={() => handleCopyCode(item.codeFix!, item.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-200 transition-colors"
                          >
                            {copiedIndex === item.id ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Tersalin!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Salin Kode</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-4 bg-slate-950 text-emerald-300 text-xs font-mono rounded-xl overflow-x-auto whitespace-pre-wrap leading-relaxed border border-slate-800">
                          {item.codeFix}
                        </pre>
                      </div>
                    )}

                    {/* Quick Golden Tip */}
                    <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong>Kiat Sukses: </strong>
                        <span>{item.quickTip}</span>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3-Minute Quick Diagnostic Checklist */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Lembar Periksa Mandiri (Checklist)
              </span>
              <h3 className="font-heading font-bold text-white text-lg sm:text-xl mt-0.5">
                Ceklis 30 Detik Sebelum Bertanya ke Narasumber
              </h3>
            </div>
            <span className="text-xs px-3 py-1 bg-white/10 text-emerald-200 rounded-full border border-white/10 self-start sm:self-auto">
              Garansi Berhasil 100%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-200">
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Nama file di repositori GitHub wajib huruf kecil semua: <code className="text-amber-300 bg-black/40 px-1.5 py-0.5 rounded font-mono">index.html</code> (bukan huruf besar).</span>
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Repositori GitHub berstatus <strong className="text-emerald-300">Public</strong>, bukan Private.</span>
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Di Vercel, jika proyek berupa Single HTML, Framework Preset WAJIB disetel ke <strong className="text-emerald-300">Other</strong>.</span>
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Di Google Apps Script, akses deploy harus diubah ke <strong className="text-emerald-300">"Anyone" (Siapa saja)</strong>.</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <span>Masih menemui kendala spesifik di layar Anda?</span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="#panduan"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-semibold flex items-center justify-center gap-1.5 w-full sm:w-auto"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Baca Ulang Panduan</span>
              </a>
              <a
                href="https://wa.me/6282232754232"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors font-semibold flex items-center justify-center gap-1.5 w-full sm:w-auto shadow-sm"
              >
                <span>Konsultasi via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
