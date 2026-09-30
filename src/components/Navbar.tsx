import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Image as ImageIcon, ExternalLink, HelpCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['beranda', 'refleksi', 'profil', 'materi', 'panduan', 'karya'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'refleksi', label: 'Refleksi NGOPAI' },
    { id: 'profil', label: 'Profil Narasumber' },
    { id: 'materi', label: 'Materi' },
    { id: 'panduan', label: 'Panduan Praktis' },
    { id: 'karya', label: 'Contoh Karya' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Logo Kemenag + NGOPAI + Subtext: Bidang PAIS Kanwil Kemenag Jawa Timur */}
          <a
            href="#beranda"
            className="flex items-center gap-3 group text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-0.5"
            aria-label="NGOPAI Beranda"
          >
            {/* Logo Kemenag RI Image */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 relative flex items-center justify-center">
              <img
                src={EVENT_DETAILS.kemenagLogoUrl}
                alt="Logo Kementerian Agama RI"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-xs"
                onError={(e) => {
                  // Fallback to SVG if image host fails
                  const img = e.target as HTMLElement;
                  img.style.display = 'none';
                  const fb = document.getElementById('kemenag-nav-svg-fallback');
                  if (fb) fb.style.display = 'block';
                }}
              />
              <div id="kemenag-nav-svg-fallback" className="hidden w-full h-full bg-emerald-900 rounded-lg p-1">
                <span className="text-[10px] font-bold text-amber-300 flex items-center justify-center h-full">KEMENAG</span>
              </div>
            </div>

            {/* Brand Text: NGOPAI and Subtext: Bidang PAIS kanwil kemenag Jawa Timur */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-heading font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors leading-none">
                  {EVENT_DETAILS.name}
                </span>
                <span className="hidden md:inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Level Up GPAI
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-emerald-900 tracking-tight mt-0.5">
                {EVENT_DETAILS.subHeader}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs xl:text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative py-1 transition-colors hover:text-emerald-700 whitespace-nowrap ${
                    isActive ? 'text-emerald-800 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Direct link to Refleksi NGOPAI & Live Vercel web) */}
          <div className="flex items-center gap-2.5">
            <a
              href={EVENT_DETAILS.reflectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <span>Refleksi NGOPAI</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
            </a>

            <a
              href="#refleksi"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white transition-colors shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Bahan Refleksi</span>
            </a>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Buka navigasi menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            <div className="p-2.5 bg-emerald-50 rounded-lg text-xs text-emerald-900 font-medium mb-1">
              <span>{EVENT_DETAILS.subHeader}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={EVENT_DETAILS.featuredWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg text-emerald-900 bg-emerald-50 border border-emerald-200"
              >
                <span>Buka Contoh Website Pembelajaran Ulfa (Vercel)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
