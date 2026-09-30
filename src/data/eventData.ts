export interface SpeakerProfile {
  name: string;
  tagline: string;
  nip: string;
  nuptk: string;
  rank: string;
  position: string;
  institution: string;
  role: string;
  phone: string;
  address: string;
  contactEmail: string;
  photoUrl: string;
  bio: string;
  quote: string;
  education: Array<{
    period: string;
    level: string;
    institution: string;
    major?: string;
  }>;
  workExperience: Array<{
    period: string;
    role: string;
    institution: string;
  }>;
  awards: Array<{
    year: string;
    title: string;
  }>;
  certifications: string[];
  communities: string[];
  specialties: string[];
  achievements: string[];
}

export interface MaterialItem {
  id: string;
  number: string;
  title: string;
  category: 'administrasi' | 'media' | 'pedagogik' | 'etika';
  categoryLabel: string;
  description: string;
  duration: string;
  deliverables: string[];
  syllabus: {
    objectives: string[];
    aiTools: string[];
    practicalExercise: string;
  };
}

export interface GuideStep {
  step: number;
  title: string;
  description: string;
  tips: string;
  codeSnippet?: string;
  codeLanguage?: string;
  promptExample?: string;
  badge?: string;
}

export interface PracticalGuide {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  steps: GuideStep[];
  outcome: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Aplikasi Web' | 'Kuis Interaktif' | 'Modul Digital' | 'Tool AI';
  schoolContext: string;
  description: string;
  features: string[];
  techStack: string[];
  impactMetric: string;
  demoType: 'quiz' | 'portal' | 'calculator' | 'modul';
  liveUrl?: string;
}

export interface PromptTemplate {
  id: string;
  title: string;
  category: string;
  targetUser: string;
  defaultTopic: string;
  template: (topic: string, grade: string) => string;
}

export const SPEAKER_DATA: SpeakerProfile = {
  name: "Ulfatul Husna, S.Ag., M.Pd.",
  tagline: "Guru Pejuang Digital",
  nip: "197410101998022001",
  nuptk: "342752653300033",
  rank: "Pembina Utama Muda / IVc",
  position: "Guru PAIBP",
  institution: "SMA Negeri 1 Krembung",
  role: "Narasumber & Guru Pejuang Digital",
  phone: "082232754232",
  address: "Ploso - Krembung - Sidoarjo - JATIM",
  contactEmail: "ulfatulhusna00@guru.sma.belajar.id",
  photoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsLCOg4qZSUwGV5tS7hWfHuOXhO3lPOjvcoK-liVXfydR7d6gdihB1O5bA2N1iOu_0wy8Qk0sroPNA19SW2MSC9RkV9khmihcU0EEU_mawyZkhvT_7m9iE3GC4fjOGsiILwwDyY1-sSf-7YPdn7vwnkWuB9lUjHFxIWB2smSsibHZThKz6CHP5qyvMD66J/s1600/ulfa_MAS.jpeg",
  bio: "Pendidik berdedikasi tinggi dengan pengalaman pengabdian lebih dari seperempat abad di dunia pendidikan Islam. Dikenal luas sebagai 'Guru Pejuang Digital' yang memadukan kedalaman nilai-nilai spiritualitas akhlak dengan akselerasi teknologi modern Google Workspace for Education, Generative AI, dan Gemini Canvas demi mewujudkan pembelajaran PAI yang bermakna, interaktif, dan membebaskan guru dari beban administrasi konvensional.",
  quote: "Mengajar adalah panggilan hati untuk menanamkan akhlak dan ketauhidan. AI bukan untuk menggantikan peran ruhaniyah guru, melainkan membebaskan guru dari belenggu beban administratif agar seutuhnya hadir membersamai murid.",
  education: [
    {
      period: "1980 - 1986",
      level: "Sekolah Dasar",
      institution: "Sekolah Dasar"
    },
    {
      period: "1986 - 1992",
      level: "Sekolah Menengah",
      institution: "Sekolah Menengah"
    },
    {
      period: "1992 - 1996",
      level: "Sarjana (S1)",
      institution: "IAIN Sunan Ampel Surabaya",
      major: "Fakultas Tarbiyah Jurusan PAI"
    },
    {
      period: "2018 - 2020",
      level: "Magister (S2)",
      institution: "UIN Sunan Ampel Surabaya",
      major: "Prodi Magister Pendidikan Agama Islam"
    }
  ],
  workExperience: [
    {
      period: "1996 - 1998",
      role: "Guru",
      institution: "SD Al Ishlah Rejeni"
    },
    {
      period: "1998 - 2006",
      role: "Guru PAI",
      institution: "SMPN 1 Candi"
    },
    {
      period: "2006 - Sekarang",
      role: "Guru PAIBP",
      institution: "SMA Negeri 1 Krembung"
    }
  ],
  awards: [
    {
      year: "2014",
      title: "Juara 3 Guru Prestasi tingkat Provinsi"
    },
    {
      year: "2024",
      title: "Juara 1 Guru Inovatif Tk. Jawa Timur"
    }
  ],
  certifications: [
    "Google Certified Educator Level 1 / GCE L1 (2020)",
    "Google Certified Educator Level 2 / GCE L2 (2021)",
    "Google Certified Educator Level 3 / GCE L3 (2021)",
    "Google Certified Trainer (2021)",
    "Pelatih Nasional PPKB GPAI (2022)",
    "Reviewer Standar Isi BSKAP Kemendikbudristek (2021)",
    "Pengajar Praktik PGP (2021)",
    "Fasilitator PGP (2023)",
    "Guru Penggerak Rekognisi (2023)",
    "Narasumber Kemendikbudristek",
    "Narasumber Pengelolaan Kinerja Guru & KS",
    "Instruktur PGP"
  ],
  communities: [
    "Co-Kapten belajar.id (2022 - sekarang)",
    "Ketua MGMP PAI SMA Kab. Sidoarjo (2018 - 2024)",
    "Dep. Infokom DPP AGPAII (2022 - sekarang)",
    "Pengurus DPW AGPAII JATIM",
    "Bendahara MGMP PAI SMA Prov. JATIM (2022 - sekarang)",
    "Wakil Ketua PC PERGUNU Sidoarjo (2024 - sekarang)",
    "Pengurus IGI Kab. Sidoarjo (2022 - sekarang)",
    "Ketua DPD AGPAII Sidoarjo (2025 - 2030)",
    "Guru Pejuang Digital (2025 - sekarang)"
  ],
  specialties: [
    "Google Certified Trainer & Google Workspace for Education",
    "Pemanfaatan AI untuk Kurikulum Merdeka & Pengelolaan Kinerja",
    "Pengembangan Media Interaktif & Aplikasi Web PAI",
    "Fasilitator Guru Penggerak & Instruktur PGP",
    "Kepemimpinan Komunitas Guru (AGPAII, MGMP, IGI, PERGUNU)"
  ],
  achievements: [
    "Juara 1 Guru Inovatif Tk. Jawa Timur (2024)",
    "Juara 3 Guru Prestasi tingkat Provinsi (2014)",
    "Ketua DPD AGPAII Sidoarjo (2025 - 2030)",
    "Co-Kapten belajar.id (2022 - sekarang)",
    "Reviewer Standar Isi BSKAP Kemendikbudristek"
  ]
};

export const EVENT_DETAILS = {
  name: "NGOPAI",
  fullName: "NGOPAI : Level Up GPAI",
  subHeader: "Bidang PAIS Kanwil Kemenag Jawa Timur",
  tagline: "Mengajar dengan Hati, Hack Administrasi dengan AI",
  shortDescription: "Kegiatan NGOPAI (Ngobrol Pendidikan Agama Islam) telah sukses diselenggarakan pada tanggal 30 September 2026 bersama Bidang PAIS Kanwil Kemenag Jawa Timur dan SMAN 1 Krembung Sidoarjo. Akses seluruh bahan tayang, refleksi interaktif, panduan teknis Gemini Canvas, serta website contoh di bawah ini.",
  targetDate: "2026-09-30T12:30:00+07:00",
  dateFormatted: "Rabu, 30 September 2026",
  timeFormatted: "12.30 - 14.40 WIB (Selesai Diselenggarakan)",
  status: "completed",
  kemenagLogoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxOOktWOqEBBQa1zolQ65LTM0L_6JufqyB4diA9Gaka1BgIjoyWPDIfZwkTcXM-1oRemsDxV1e6ps2n_EpWiyH5CINdB0UBy3zFV52h1AiZtobJvnaeKGagMqOXEnE1nnxO2Su3YNcFprFqUJH3YXa2rKGvikJuo4nue_ta09etZGiPrxzks2V0hLd0cOJ/s800/Logo%20kemenag.png",
  flyerUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeqQwFMbBy9IIhLH_xIY6-l7-c9LcrgSo5zBc6E4KgePOlgGF8H2nZGY0lzJOFNuNX4xWvARM9LpFH7sPJ2CdWdze7a7hDlT5hnsDHXtupIqRVQISi3R373YtarVAAQbubdisE7ekRrOxmMKW6liSeOmpc3ty20Ch-XdJ1wnWRe_Kfs9i6iCrb61NcJjAA/s1600/WhatsApp%20Image%202026-09-28%20at%2014.39.52.jpeg",
  reflectionUrl: "https://husna-pai.github.io/NGOPAI/",
  featuredWebsiteUrl: "https://website-pembelajaran-ulfa-ux1e.vercel.app/",
  venue: "Virtual Live via Google Meet & Dedicated Stream Channel",
  organizer: "Bidang PAIS Kanwil Kemenag Jawa Timur & SMAN 1 Krembung Sidoarjo",
  investment: "Gratis (Telah Diikuti Guru PAI se-Indonesia)",
  quota: "500+ Peserta Telah Tergabung",
  benefits: [
    {
      title: "Sertifikat Resmi 32 JP",
      desc: "E-Sertifikat terverifikasi untuk kelengkapan pengelolaan kinerja PMM / SKP."
    },
    {
      title: "Template Modul Ajar AI",
      desc: "50+ paket prompt administrasi Kurikulum Merdeka siap salin & pakai."
    },
    {
      title: "Source Code Aplikasi Siap Pakai",
      desc: "Akses template Gemini Canvas & AI Studio untuk langsung diadopsi di kelas."
    },
    {
      title: "Komunitas & Mentoring",
      desc: "Grup pendampingan eksklusif bersama narasumber untuk tanya jawab lanjutan."
    }
  ]
};

export const REFLEKSI_DATA = {
  title: "Bahan Tayang & Refleksi Pendidik",
  subtitle: "Mari kita jujur pada diri sendiri sejenak. Silakan Bapak/Ibu renungkan dua pertanyaan ini:",
  externalUrl: "https://husna-pai.github.io/NGOPAI/",
  questions: [
    {
      id: "q1",
      question: "Pernahkah Bapak/Ibu merasa lebih lelah menyusun Modul Ajar, rubrik penilaian, dan laporan e-rapor dibandingkan mendengarkan curhat dan membimbing siswa di kelas?",
      type: "poll",
      options: [
        { key: "A", label: "YA", defaultPct: 28 },
        { key: "B", label: "SERING", defaultPct: 42 },
        { key: "C", label: "SELALU", defaultPct: 30 }
      ]
    },
    {
      id: "q2",
      question: "Di era di mana siswa bisa bertanya hukum Fiqih atau sejarah Nabi kepada ChatGPT dan mendapat jawaban dalam 2 detik, apa yang membuat kehadiran kita di kelas tidak bisa digantikan oleh mesin?",
      type: "reflection",
      reflectionKeyPoints: [
        "Keteladanan adab, tatakrama, dan akhlakul karimah yang hidup secara nyata di depan mata murid.",
        "Sentuhan kasih sayang, empati mendengarkan kegelisahan jiwa remaja muslim.",
        "Doa tulus seorang guru di sepertiga malam untuk keberkahan ilmu dan masa depan murid-muridnya.",
        "Transformasi hati ke hati (Tarbiyatul Qalb) yang mustahil dilakukan oleh algoritma kecerdasan buatan."
      ]
    }
  ]
};

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "materi-1",
    number: "01",
    title: "Hack Administrasi PAI: RPP & Modul Ajar Berdiferensiasi",
    category: "administrasi",
    categoryLabel: "Administrasi & RPP",
    description: "Strategi menyusun Alur Tujuan Pembelajaran (ATP), Modul Ajar 1 lembar berbasis Kurikulum Merdeka, dan asesmen diagnostik dalam hitungan menit menggunakan model AI terkini.",
    duration: "45 Menit",
    deliverables: [
      "Dokumen Modul Ajar Berdiferensiasi lengkap 3 profil belajar (Auditori, Visual, Kinestetik)",
      "Panduan breakdown Capaian Pembelajaran (CP) ke Tujuan Pembelajaran (TP)"
    ],
    syllabus: {
      objectives: [
        "Memahami teknik prompting struktural untuk format standar Kemendikbudristek",
        "Menyusun skenario pembelajaran berbasis Inquiry & Problem-Based Learning Islami",
        "Mengotomasi pembuatan rubrik penilaian analitik dan holistik"
      ],
      aiTools: ["Google Gemini 2.5", "Gemini Workspace", "Google Docs AI Extension"],
      practicalExercise: "Membuat 1 unit Modul Ajar lengkap dengan tema 'Meneladani Sifat Amanah & Kejujuran' dalam waktu 10 menit."
    }
  },
  {
    id: "materi-2",
    number: "02",
    title: "Kreasi Media Pembelajaran Interaktif & Gamifikasi PAI",
    category: "media",
    categoryLabel: "Media Interaktif",
    description: "Membangun media kuis tajwid interaktif, teka-teki silang hukum fikih, dan visualisasi manasik haji tanpa perlu menguasai bahasa pemrograman yang rumit.",
    duration: "45 Menit",
    deliverables: [
      "1 Aplikasi web mini kuis interaktif yang dapat dibagikan via link ke ponsel siswa",
      "Kumpulan aset visual grafis Islami yang bebas hak cipta"
    ],
    syllabus: {
      objectives: [
        "Merancang game edukatif berbasis browser untuk meningkatkan antusiasme siswa",
        "Mengintegrasikan audio tilawah dan ayat Al-Qur'an ke dalam media interaktif",
        "Mempersiapkan link kuis cepat untuk asesmen formatif harian"
      ],
      aiTools: ["Gemini Canvas", "Web Preview Prototyper", "HTML5 Audio Engine"],
      practicalExercise: "Merancang mini aplikasi tebak hukum tajwid (Ikhfa, Idgham, Iqlab) dengan feedback langsung skor siswa."
    }
  },
  {
    id: "materi-3",
    number: "03",
    title: "Prompt Engineering Pedagogik Khusus Guru Pendidikan Agama Islam",
    category: "pedagogik",
    categoryLabel: "Pedagogik & Prompt",
    description: "Seni merumuskan instruksi presisi agar AI menghasilkan dalil Al-Qur'an (lengkap teks Arab, transliterasi, dan tafsir sahih) serta studi kasus fiqih kontemporer yang relevan dengan remaja.",
    duration: "30 Menit",
    deliverables: [
      "Cheat Sheet Formula Prompt Pedagogik GPAI (Format ROLE + TASK + CONTEXT + CONSTRAINT)",
      "Bank Prompt 20 Topik Esensial PAI SMA/SMK"
    ],
    syllabus: {
      objectives: [
        "Menguasai formula prompt anti-halusinasi untuk teks keagamaan dan sanad hadits",
        "Membuat studi kasus akhlak kontekstual (etika bermedia sosial, bahaya judi online, dll.)",
        "Menyusun dialog interaktif antara siswa dan skenario kasus kehidupan nyata"
      ],
      aiTools: ["Gemini Advanced", "Tafsir Web Grounding", "Pustaka Hadits Sahih"],
      practicalExercise: "Membuat 3 variasi skenario diskusi kelas untuk materi Bab Munakahat & Pembinaan Keluarga Sakinah."
    }
  },
  {
    id: "materi-4",
    number: "04",
    title: "Otomasi Asesmen Formatif & Bank Soal HOTS PAI",
    category: "administrasi",
    categoryLabel: "Administrasi & RPP",
    description: "Memproduksi instrumen evaluasi berstandar Higher Order Thinking Skills (HOTS), kisi-kisi soal, kunci jawaban, dan pembahasan mendalam berlandaskan nilai-nilai Rahmatan Lil 'Alamin.",
    duration: "30 Menit",
    deliverables: [
      "Paket 20 Soal HOTS PAI pilihan ganda kompleks & essay beserta rubrik penskoran",
      "Format impor instan ke Google Forms & Quizizz"
    ],
    syllabus: {
      objectives: [
        "Mengubah soal C1-C2 konvensional menjadi stimulus soal penalaran C4-C6",
        "Membuat stimulus berbasis fenomena sosial kekinian dan sains dalam perspektif Islam",
        "Mengolah hasil asesmen menjadi rekomendasi remidi dan pengayaan secara personal"
      ],
      aiTools: ["Gemini Structured Output", "Google Forms Script Generator"],
      practicalExercise: "Mengonversi 5 soal hafalan rukun iman menjadi soal studi kasus literasi dan numerasi Islami."
    }
  },
  {
    id: "materi-5",
    number: "05",
    title: "Gemini Canvas & AI Studio untuk Pembuatan Website Edukasi",
    category: "media",
    categoryLabel: "Media Interaktif",
    description: "Langkah taktis memanfaatkan Google AI Studio dan Gemini Canvas untuk membangun website materi atau portal pembelajaran mandiri siswa tanpa keahlian coding mendalam.",
    duration: "40 Menit",
    deliverables: [
      "Website SPA ringkas materi PAI kelas X/XI/XII yang siap online diakses publik",
      "Pengetahuan fundamental mendeploy web statis ke platform gratis"
    ],
    syllabus: {
      objectives: [
        "Mengenal lingkungan kerja Gemini Canvas untuk editing kode visual secara berdampingan",
        "Menggunakan prompt natural language untuk mengubah warna, tombol, dan isi halaman web",
        "Memahami prinsip hosting ringan, keamanan link, dan kemudahan akses di smartphone siswa"
      ],
      aiTools: ["Gemini Canvas", "Google AI Studio", "Cloud Hosting / GitHub Pages"],
      practicalExercise: "Membuat halaman e-learning modul 'Zakat, Infak, dan Sedekah' dengan kalkulator zakat terpasang."
    }
  },
  {
    id: "materi-6",
    number: "06",
    title: "Etika Syar'i, Fikih Digital & Keamanan Data Siswa dalam Pemanfaatan AI",
    category: "etika",
    categoryLabel: "Fikih Digital & Etika",
    description: "Menjaga koridor syariat Islam dan etika akademik: batasan keorisinilan karya guru, validasi kebenaran nash syar'i, serta perlindungan privasi data murid dari risiko kebocoran digital.",
    duration: "20 Menit",
    deliverables: [
      "Pedoman Kode Etik Pemanfaatan AI dalam Pembelajaran Agama Islam di Sekolah",
      "Checklist Validasi Keabsahan Dalil & Narasi Keislaman dari Output AI"
    ],
    syllabus: {
      objectives: [
        "Memahami fatwa dan pandangan ulama kontemporer tentang kecerdasan buatan",
        "Melakukan tabayyun (verifikasi) terhadap setiap dalil Al-Qur'an dan derajat hadits",
        "Mendidik siswa tentang kejujuran akademik saat menggunakan generative AI"
      ],
      aiTools: ["Kemenag Quran API", "Lidwa Pusaka Hadits", "Verification Framework"],
      practicalExercise: "Melakukan audit dan koreksi terhadap teks hasil AI yang memiliki kekeliruan harakat atau terjemahan."
    }
  }
];

export const PRACTICAL_GUIDES: PracticalGuide[] = [
  {
    id: "guide-gemini-canvas",
    title: "Proyek 1: Aplikasi Jurnal Pembelajaran (Gemini + GitHub + Spreadsheet)",
    subtitle: "Siswa mengisi jurnal harian via web, dan data otomatis masuk ke Google Spreadsheet Anda.",
    intro: "Assalamu’alaikum sahabat NGOPAI! Panduan ini dirancang agar mudah diikuti tanpa harus memiliki latar belakang programming tingkat lanjut. Pada proyek pertama ini, kita akan membangun aplikasi jurnal refleksi siswa yang terhubung langsung ke Google Sheets.",
    outcome: "Aplikasi web responsif yang live di GitHub Pages, menyimpan data refleksi siswa secara otomatis ke Google Spreadsheet Anda secara real-time.",
    steps: [
      {
        step: 1,
        title: "Langkah 1: Siapkan Database di Google Spreadsheet",
        description: "1. Buka Google Sheets dan buat spreadsheet baru dengan nama 'Data Jurnal Pembelajaran'.\n2. Buat header di baris pertama: Kolom A (Waktu), Kolom B (Nama Siswa), Kolom C (Mata Pelajaran), Kolom D (Refleksi Belajar).\n3. Klik menu Ekstensi > Apps Script.\n4. Hapus kode yang ada, lalu paste kode API Apps Script di bawah ini.\n5. Klik Terapkan (Deploy) > Deployment Baru > Pilih jenis 'Aplikasi Web' (Web App).\n6. Akses: Ubah menjadi 'Siapa saja' (Anyone).\n7. Klik Terapkan, lalu salin URL Web App yang muncul.",
        tips: "Pastikan opsi akses diatur ke 'Siapa saja' (Anyone) agar siswa dapat mengirim data tanpa kendala izin login.",
        badge: "Database & Backend API",
        codeLanguage: "javascript",
        codeSnippet: `function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var timestamp = new Date();
  
  var nama = e.parameter.nama;
  var mapel = e.parameter.mapel;
  var refleksi = e.parameter.refleksi;
  
  sheet.appendRow([timestamp, nama, mapel, refleksi]);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}`
      },
      {
        step: 2,
        title: "Langkah 2: Buat Aplikasi Frontend dengan Gemini Canvas",
        description: "Buka Google Gemini (aktifkan fitur Canvas atau mode coding) dan gunakan prompt khusus di bawah ini untuk menghasilkan kode HTML, CSS, dan JavaScript lengkap dalam satu file index.html.",
        tips: "Jangan lupa mengganti teks [PASTE_URL_WEB_APP_ANDA_DI_SINI] dengan URL Web App dari langkah 1!",
        badge: "Frontend Generator",
        promptExample: `Saya seorang pendidik. Tolong buatkan kode HTML, CSS, dan JavaScript dalam satu file index.html untuk sebuah 'Aplikasi Jurnal Pembelajaran'.

Syarat:
1. Desain harus modern, mobile-friendly, dan menarik bagi siswa dengan tema warna hijau tosca Islami dan putih.
2. Memiliki form input: Nama Siswa, Dropdown Mata Pelajaran (Pendidikan Agama Islam, Bahasa, dll), dan Textarea untuk Refleksi Belajar.
3. Memiliki tombol 'Kirim Jurnal'.
4. Gunakan JavaScript fetch() dengan method POST untuk mengirim data form (URL-encoded) ke URL ini: [PASTE_URL_WEB_APP_ANDA_DI_SINI].
5. Berikan notifikasi pop-up (alert) 'Jurnal berhasil dikirim!' setelah submit, lalu kosongkan form kembali.`
      },
      {
        step: 3,
        title: "Langkah 3: Publikasi via GitHub Pages",
        description: "1. Buat akun dan login ke GitHub (github.com).\n2. Klik tombol 'New' untuk membuat Repository baru. Beri nama 'jurnal-pembelajaran'. Pastikan diset Public.\n3. Klik 'creating a new file' di halaman repository tersebut, beri nama file: index.html.\n4. Paste seluruh kode yang dihasilkan oleh Gemini Canvas tadi ke dalam file ini.\n5. Klik tombol 'Commit changes'.\n6. Masuk ke menu 'Settings' di repository tersebut, lalu cari menu 'Pages' di sebelah kiri.\n7. Pada bagian 'Build and deployment', pilih Source: Deploy from a branch.\n8. Pada bagian Branch, ubah dari None menjadi main, lalu klik Save.\n9. Tunggu sekitar 1-2 menit, lalu refresh halaman. Anda akan mendapatkan URL live aplikasi Anda (contoh: https://username-anda.github.io/jurnal-pembelajaran). Bagikan link ini ke siswa!",
        tips: "Setelah link live aktif, buatlah QR Code link tersebut untuk ditempelkan di sudut kelas atau lembar kerja siswa.",
        badge: "Live Deployment"
      }
    ]
  },
  {
    id: "guide-ai-studio",
    title: "Proyek 2: Website Pembelajaran dengan AI (Google AI Studio + Vercel)",
    subtitle: "Materi interaktif di mana siswa bisa belajar dan bertanya langsung kepada AI Tutor.",
    intro: "Proyek kedua ini akan menghasilkan website materi interaktif di mana siswa bisa membaca materi dan bertanya langsung kepada AI Tutor pintar yang ditenagai oleh model Gemini dari Google AI Studio.",
    outcome: "Website interaktif modern yang dideploy di Vercel dengan fitur AI Tutor yang mampu menjawab pertanyaan materi siswa 24 jam.",
    steps: [
      {
        step: 1,
        title: "Langkah 1: Dapatkan API Key & Generate Kode di AI Studio",
        description: "1. Buka aistudio.google.com dan login dengan akun Google Anda.\n2. Klik tombol 'Get API Key' dan buat kunci API Anda. Simpan kunci ini dengan aman.\n3. Di dalam AI Studio atau Gemini, minta AI untuk membuatkan struktur kode website lengkap dengan prompt terstruktur di bawah ini.",
        tips: "Gunakan model gemini-1.5-flash atau gemini-2.5-flash untuk respons tanya jawab instan dan hemat kuota.",
        badge: "Google AI Studio",
        promptExample: `Buatkan saya struktur website HTML, CSS, dan JavaScript lengkap dalam satu file untuk 'Portal Belajar Interaktif PAI & Budi Pekerti'.

Fitur yang dibutuhkan:
1. Sidebar navigasi berisi materi pokok: Meneladani Asmaul Husna, Fiqih Ibadah & Zakat, dan Adab Pergaulan Remaja.
2. Area konten utama yang menampilkan ringkasan materi tersebut secara rapi dan menyejukkan.
3. Di bagian bawah konten, sediakan fitur 'Tanya Guru AI' berupa chatbox (input text pertanyaan dan tombol kirim).
4. Tuliskan script JavaScript untuk memanggil Google Gemini API (model gemini-1.5-flash) agar chatbox tersebut bisa menjawab pertanyaan siswa seputar materi PAI. Sediakan variabel const API_KEY = 'KODE_API_SAYA'; agar saya mudah memasukkan API Key dari AI Studio.
5. Berikan desain UI/UX yang modern, bersih, bernuansa hijau tosca Islami, dan menggunakan animasi transisi yang lembut.`
      },
      {
        step: 2,
        title: "Langkah 2: Simpan Kode ke GitHub Repository",
        description: "1. Buka GitHub dan buat repository baru, misalnya dengan nama 'portal-belajar-ai'.\n2. Buat file index.html dan paste seluruh kode yang dihasilkan dari prompt di atas.\n3. Masukkan API Key Google AI Studio Anda ke dalam baris variabel const API_KEY = '...' sesuai petunjuk kode.\n4. Klik 'Commit changes' untuk menyimpan file.",
        tips: "Pastikan kode API Key tidak dibagikan sembarangan jika proyek bersifat sensitif.",
        badge: "Version Control"
      },
      {
        step: 3,
        title: "Langkah 3: Deploy Cepat dengan Vercel",
        description: "1. Kunjungi vercel.com dan login menggunakan akun GitHub Anda.\n2. Di dashboard Vercel, klik tombol 'Add New...' > Project.\n3. Vercel akan menampilkan daftar repository GitHub Anda. Cari 'portal-belajar-ai' dan klik tombol 'Import'.\n4. Biarkan semua pengaturan dalam kondisi default (Project Name akan otomatis terisi).\n5. Klik tombol 'Deploy'.\n6. Vercel akan memproses file Anda dalam beberapa detik. Setelah muncul animasi konfeti, website Anda resmi online!\n7. Klik tombol 'Visit' untuk melihat hasilnya. Anda akan mendapatkan URL live (contoh: https://website-pembelajaran-ulfa-ux1e.vercel.app/) yang siap dibagikan ke siswa.",
        tips: "Kelebihan Vercel: Setiap kali Anda mengedit file di GitHub, website di Vercel akan otomatis terupdate secara instan!",
        badge: "Vercel Instant Cloud"
      }
    ]
  }
];

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: "prompt-modul-ajar",
    title: "Generator Modul Ajar Kurikulum Merdeka PAI",
    category: "Administrasi",
    targetUser: "Guru PAI SMA/SMK",
    defaultTopic: "Kewajiban Menuntut Ilmu dan Mengamalkannya (QS. At-Taubah: 122)",
    template: (topic, grade) => `Bertindaklah sebagai Guru Ahli Pendidikan Agama Islam dan Konsultan Kurikulum Merdeka di SMA. Buatkan saya rancangan Modul Ajar PAI dan Budi Pekerti yang lengkap, mendalam, dan berdiferensiasi untuk siswa ${grade || "Kelas XI SMA"}.

Topik Materi: "${topic}"

Mohon susun Modul Ajar dengan format berikut:
1. INFORMASI UMUM:
   - Capaian Pembelajaran (CP) Elemen Akidah / Akhlak / Fiqih
   - Alur Tujuan Pembelajaran (ATP) terukur (ABCD: Audience, Behavior, Condition, Degree)
   - Profil Pelajar Pancasila & Rahmatan Lil 'Alamin yang disasar
   - Target Peserta Didik (Reguler, Kesulitan Belajar, Tipikal Tinggi)
   - Alokasi Waktu: 3 JP (3 x 45 menit)

2. KOMPONEN INTI:
   - Pemahaman Bermakna (Deep Understanding bagi kehidupan remaja)
   - Pertanyaan Pemantik yang merangsang nalar kritis (3 butir)
   - Skenario Pembelajaran Berdiferensiasi:
     * Kegiatan Awal (15 menit): Apersepsi Islami & Asesmen Diagnostik Non-Kognitif
     * Kegiatan Inti (105 menit): Sintaks Discovery Learning / Problem-Based Learning dengan diferensiasi proses (Kelompok Visual, Auditori, Kinestetik)
     * Kegiatan Penutup (15 menit): Refleksi hati, kesimpulan hikmah, dan doa kafaratul majelis

3. ASESMEN & EVALUASI:
   - Asesmen Formatif (Rubrik observasi sikap tawadhu dan kerja sama)
   - Asesmen Sumatif (5 butir soal pilihan ganda HOTS lengkap stimulus kasus dan kunci)
   - Lembar Kerja Peserta Didik (LKPD) ringkas siap cetak.`
  },
  {
    id: "prompt-soal-hots",
    title: "Penyusun Soal HOTS PAI Berbasis Dalil & Fenomena",
    category: "Asesmen",
    targetUser: "Guru PAI SD/SMP/SMA",
    defaultTopic: "Bahaya Judi Online, Pinjol Ilegal, dan Transaksi Riba dalam Fiqih Muamalah",
    template: (topic, grade) => `Sebagai Pengembang Instrumen Evaluasi Pembelajaran PAI tingkat nasional, buatkan paket 3 Butir Soal HOTS (Level Kognitif C4-Menganalisis, C5-Mengevaluasi, C6-Mencipta) untuk peserta didik ${grade || "Kelas XII SMA"} pada materi: "${topic}".

Setiap butir soal WAJIB memenuhi kriteria:
1. Memiliki STIMULUS FENOMENAL (kutipan berita terkini, studi kasus dilema etika remaja, atau kutipan ayat Al-Qur'an beserta artinya).
2. Pilihan Ganda Kompleks (A, B, C, D, E) dengan distraktor (pengecoh) yang logis dan mendalam.
3. KUNCI JAWABAN yang tepat.
4. PEMBAHASAN LENGKAP: Analisis dalil Al-Qur'an / Hadits yang relevan, kaidah fiqih ushuliyah, serta hikmah edukatifnya bagi pembentukan karakter siswa.`
  },
  {
    id: "prompt-ice-breaking",
    title: "Ice Breaking & Apersepsi Islami Menggugah Hati",
    category: "Pedagogik",
    targetUser: "Semua Tingkat Guru PAI",
    defaultTopic: "Menjaga Kehormatan Diri dan Etika Pergaulan Islami",
    template: (topic, grade) => `Rancanglah 2 ide kegiatan Apersepsi & Ice Breaking Islami berdurasi 7-10 menit di awal pembelajaran PAI untuk peserta didik ${grade || "Kelas X SMA/SMK"} dengan tema: "${topic}".

Kriteria kegiatan:
1. Kegiatan 1: Gamifikasi Cepat / Tebak Kata / Quiz Tanpa Gawai yang membangkitkan tawa positif dan fokus siswa.
2. Kegiatan 2: 'Sentuhan Kalbu' (Storytelling inspiratif 3 menit tentang kisah sahabat nabi atau pemuda masa kini yang teguh pendirian).
3. Buatkan naskah instruksi kalimat yang diucapkan guru saat membuka kelas dengan hangat, antusias, dan penuh kasih sayang.`
  },
  {
    id: "prompt-kalkulator-zakat",
    title: "Rancangan Kuis / Interaktif Web Gemini Canvas",
    category: "Media Interaktif",
    targetUser: "Guru & Siswa PAI",
    defaultTopic: "Kalkulator Zakat Maal & Zakat Profesi Berdasarkan Nisab Emas Terkini",
    template: (topic) => `Buatkan satu halaman web interaktif lengkap (Single File HTML5 + Tailwind CSS CDN + JavaScript) dengan tema: "${topic}".

Fitur yang harus ada:
1. Tampilan antarmuka bernuansa hijau tosca Islami modern dan bersih.
2. Formulir input:
   - Pilihan Jenis Zakat (Zakat Harta Simpanan / Zakat Penghasilan Bulanan)
   - Input harga emas murni per gram hari ini (default Rp1.500.000)
   - Input jumlah harta yang tersimpan selama 1 tahun (haul)
3. Tombol 'Hitung Zakat' dengan animasi halus.
4. Panel Hasil:
   - Status: Apakah sudah mencapai nisab (85 gram emas)?
   - Jumlah zakat yang wajib dikeluarkan (2.5%)
   - Kutipan ayat Al-Qur'an tentang keberkahan zakat (QS. At-Taubah: 103)
   - Tombol 'Salin Hasil' dan 'Reset Perhitungan'.`
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "karya-website-ulfa",
    title: "Website Pembelajaran Ulfa (Live di Vercel)",
    category: "Aplikasi Web",
    schoolContext: "Karya Nyata Hasil Deploy Google AI Studio & Vercel",
    description: "Contoh nyata website pembelajaran interaktif modern yang dideploy di Vercel. Memuat modul materi pembelajaran PAI, antarmuka responsif, dan asisten cerdas untuk memandu siswa belajar secara mandiri kapan pun dan di mana pun.",
    features: [
      "Live deployment di Vercel (https://website-pembelajaran-ulfa-ux1e.vercel.app/)",
      "Navigasi materi terstruktur dengan tampilan bersih dan nyaman diakses ponsel",
      "Dilengkapi integrasi kecerdasan buatan untuk bantuan belajar siswa",
      "Model percontohan implementasi Proyek 2 workshop NGOPAI"
    ],
    techStack: ["Next.js / React", "Tailwind CSS", "Google AI Studio", "Vercel Cloud"],
    impactMetric: "Dijadikan rujukan proyek percontohan pembuatan website pembelajaran guru PAI Jawa Timur",
    demoType: "portal",
    liveUrl: "https://website-pembelajaran-ulfa-ux1e.vercel.app/"
  },
  {
    id: "karya-portal-pai",
    title: "Portal Asesmen Mandiri PAI SMAN 1 Krembung",
    category: "Aplikasi Web",
    schoolContext: "Diimplementasikan di SMAN 1 Krembung Sidoarjo untuk 850+ Siswa",
    description: "Platform evaluasi formatif mandiri berbasis web yang memungkinkan siswa SMA menguji pemahaman bab PAI secara interaktif, mendapatkan diagnosis kelemahan materi secara real-time, dan menerima rekomendasi bacaan ayat Al-Qur'an yang relevan.",
    features: [
      "Bank soal terintegrasi Kurikulum Merdeka Fase E dan Fase F",
      "Analitik radar kompetensi siswa (Al-Qur'an, Akidah, Akhlak, Fiqih, Sejarah)",
      "Mode offline-ready untuk smartphone berspesifikasi hemat",
      "Unduh rapor mandiri siswa dalam format PDF instan"
    ],
    techStack: ["React", "Tailwind CSS", "Gemini 2.5 API", "LocalStorage Cache"],
    impactMetric: "Meningkatkan ketuntasan belajar PAI dari 72% menjadi 94% di semester ganjil",
    demoType: "portal"
  },
  {
    id: "karya-kuis-tajwid",
    title: "Game Cerdas Fiqih & Tajwid Digital 'Al-Haqq'",
    category: "Kuis Interaktif",
    schoolContext: "Media Pembelajaran Unggulan Kelas X & XI SMAN 1 Krembung",
    description: "Aplikasi gamifikasi interaktif berdurasi singkat untuk apersepsi dan penutup kelas. Dilengkapi efek suara Islami, tingkatan level dari Nun Sukun hingga Mad Far'i, serta visual kartu ayat yang tajam dan nyaman dibaca.",
    features: [
      "30 level tantangan hukum bacaan Al-Qur'an dengan waktu mundur",
      "Sistem predikat Bintang Tajwid (Mumtaz, Jayyid, Maqbul)",
      "Papan peringkat kelas (Classroom Leaderboard) tanpa kompetisi destruktif",
      "Dilengkapi penjelasan kaidah dari kitab Tuhfatul Athfal"
    ],
    techStack: ["HTML5 Canvas", "Tailwind CSS", "Web Audio API", "Mobile Responsive"],
    impactMetric: "Dimainkan lebih dari 12.000 kali oleh siswa dan guru sejawat se-Kabupaten Sidoarjo",
    demoType: "quiz"
  },
  {
    id: "karya-emodul-akhlak",
    title: "E-Modul Interaktif: Akhlak Remaja di Era Kecerdasan Buatan",
    category: "Modul Digital",
    schoolContext: "Karya Inovasi Pembelajaran PAI & Budi Pekerti SMAN 1 Krembung",
    description: "Buku ajar digital interaktif yang membahas isu-isu kontemporer remaja muslim: etika bermedia sosial, bahaya cyberbullying, adab berinteraksi dengan AI, serta kiat menjaga pergaulan sesuai tuntunan syariat.",
    features: [
      "Infografis modern bergaya visual ramah Gen Z",
      "Player audio tilawah ayat-ayat pilihan dengan suara jernih",
      "Lembar refleksi kalbu interaktif yang tersimpan di perangkat siswa",
      "Studi kasus interaktif dengan pilihan keputusan moral"
    ],
    techStack: ["Next.js / Vite SPA", "Tailwind CSS", "PDF Export Engine"],
    impactMetric: "Mendapat penghargaan Inovasi Media Ajar Terbaik Disdikbud Jawa Timur",
    demoType: "modul"
  },
  {
    id: "karya-smart-assistant",
    title: "Smart Asisten Administrasi Guru PAI (GPAI Bot Tools)",
    category: "Tool AI",
    schoolContext: "Prototipe AI Studio untuk MGMP PAI SMA Kabupaten Sidoarjo",
    description: "Alat bantu otomatisasi penyusunan administrasi guru: cukup ketikkan satu topik materi pokok, aplikasi akan menghasilkan Kisi-kisi Soal, Rubrik P5, Skenario Pembelajaran Berdiferensiasi, dan Lembar Penilaian Teman Sejawat.",
    features: [
      "Generator 1-Klik Modul Ajar Standar Kemendikbudristek",
      "Fitur koreksi mandiri kebenaran sanad dan dalil Al-Qur'an",
      "Ekspor dokumen langsung ke format Microsoft Word (.docx)",
      "Penghematan waktu administrasi hingga 80% bagi guru PAI"
    ],
    techStack: ["Google AI Studio", "Gemini 2.5 Flash", "Docx Generator", "Tailwind"],
    impactMetric: "Memangkas rata-rata waktu penyusunan administrasi guru dari 6 jam menjadi 25 menit",
    demoType: "calculator"
  }
];

export const EVENT_SCHEDULE = [
  {
    time: "12.30 - 12.40",
    activity: "Pembukaan Acara oleh MC & Pembacaan Tata Tertib",
    speaker: "Dahlia El Hiyaroh, S.Pd. (MC)",
    room: "Virtual Room"
  },
  {
    time: "12.40 - 13.00",
    activity: "Sambutan & Pembukaan Resmi Kegiatan NGOPAI",
    speaker: "Dr. Amak Burhanuddin, M.Pd. (Kabid PAIS Kanwil Kemenag Jawa Timur)",
    room: "Main Room"
  },
  {
    time: "13.00 - 14.10",
    activity: "Paparan Materi Inti: Mengajar dengan Hati, Hack Administrasi dengan AI",
    speaker: "Ulfatul Husna, S.Ag., M.Pd. (Narasumber / Guru PAI SMAN 1 Krembung)",
    room: "Plenary Session"
  },
  {
    time: "14.10 - 14.35",
    activity: "Sesi Diskusi & Tanya Jawab Interaktif Bersama Peserta",
    speaker: "Ulfatul Husna, S.Ag., M.Pd. dipandu MC Dahlia El Hiyaroh, S.Pd.",
    room: "Interactive Q&A"
  },
  {
    time: "14.35 - 14.40",
    activity: "Doa Bersama, Penutupan Acara & Arahan Tindak Lanjut Komunitas",
    speaker: "Dahlia El Hiyaroh, S.Pd. & Tim Bidang PAIS Kemenag Jatim",
    room: "Closing Room (Pukul 14.40 WIB)"
  }
];
