import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Clock, Video, User, Building, Phone, Mail, Award, Printer, Copy, Check, QrCode, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export interface RegisteredUser {
  registrationId: string;
  name: string;
  nip: string;
  school: string;
  city: string;
  whatsapp: string;
  email: string;
  registeredAt: string;
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  registeredUser: RegisteredUser | null;
  onRegisterSuccess: (user: RegisteredUser) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  registeredUser,
  onRegisterSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    nip: '',
    school: '',
    city: '',
    whatsapp: '',
    email: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (registeredUser) {
      setFormData({
        name: registeredUser.name,
        nip: registeredUser.nip,
        school: registeredUser.school,
        city: registeredUser.city,
        whatsapp: registeredUser.whatsapp,
        email: registeredUser.email,
      });
    }
  }, [registeredUser]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap beserta gelar wajib diisi';
    if (!formData.nip.trim()) newErrors.nip = 'NIP atau NUPTK wajib diisi (ketik - jika belum memiliki)';
    if (!formData.school.trim()) newErrors.school = 'Nama sekolah atau instansi wajib diisi';
    if (!formData.city.trim()) newErrors.city = 'Kabupaten / Kota wajib diisi';
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp aktif wajib diisi';
    } else if (!/^[0-9+ -]{8,18}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Format nomor WhatsApp tidak valid';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email aktif wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const regId = registeredUser?.registrationId || `GPAI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const newUser: RegisteredUser = {
        registrationId: regId,
        name: formData.name,
        nip: formData.nip,
        school: formData.school,
        city: formData.city,
        whatsapp: formData.whatsapp,
        email: formData.email,
        registeredAt: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      };

      localStorage.setItem('ngopi_gpai_registration', JSON.stringify(newUser));
      onRegisterSuccess(newUser);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrintTicket = () => {
    window.print();
  };

  const handleCopyRegId = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Tutup form"
        >
          <X className="w-5 h-5" />
        </button>

        {registeredUser ? (
          /* ================= ALREADY REGISTERED: DISPLAY E-TICKET ================= */
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Pendaftaran Anda Telah Berhasil Terverifikasi</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                E-Tiket Resmi Peserta NGOPI GPAI
              </h3>
              <p className="text-xs text-slate-500">
                Simpan atau cetak tiket ini sebagai bukti keikutsertaan dan presensi kegiatan pada 30 September 2026.
              </p>
            </div>

            {/* Printable Ticket Container */}
            <div
              id="printable-ticket"
              className="bg-gradient-to-b from-emerald-900 via-teal-950 to-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-emerald-500/40 relative overflow-hidden"
            >
              {/* Islamic Decorative Corner Watermark */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

              {/* Ticket Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/30 text-xs">
                <div>
                  <span className="font-heading font-extrabold text-sm sm:text-base text-emerald-300 block">
                    NGOPI : LEVEL UP GPAI
                  </span>
                  <span className="text-[11px] text-emerald-200/80">
                    SMAN 1 Krembung Sidoarjo
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">No. Registrasi</span>
                  <div className="flex items-center gap-1.5 font-mono font-bold text-emerald-300 text-xs sm:text-sm">
                    <span>{registeredUser.registrationId}</span>
                    <button
                      onClick={() => handleCopyRegId(registeredUser.registrationId)}
                      className="p-1 hover:bg-white/10 rounded text-emerald-400"
                      title="Salin ID Registrasi"
                    >
                      {copiedCode ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Ticket Body Grid */}
              <div className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[11px] text-emerald-200/70 block uppercase">Nama Peserta:</span>
                  <span className="font-bold text-slate-100 text-sm block mt-0.5">
                    {registeredUser.name}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-emerald-200/70 block uppercase">NIP / NUPTK:</span>
                  <span className="font-mono text-slate-100 text-xs block mt-0.5">
                    {registeredUser.nip}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-emerald-200/70 block uppercase">Asal Sekolah / Instansi:</span>
                  <span className="text-slate-100 text-xs block mt-0.5">
                    {registeredUser.school}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] text-emerald-200/70 block uppercase">Kabupaten / Kota:</span>
                  <span className="text-slate-100 text-xs block mt-0.5">
                    {registeredUser.city}
                  </span>
                </div>
              </div>

              {/* Event Time & Schedule Stripe */}
              <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-200 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{EVENT_DETAILS.dateFormatted}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>{EVENT_DETAILS.timeFormatted}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                  <Video className="w-3.5 h-3.5 text-blue-400" />
                  <span>Tautan Google Meet dikirimkan via WhatsApp {registeredUser.whatsapp}</span>
                </div>
              </div>

              {/* Ticket Bottom QR Mockup */}
              <div className="pt-4 mt-4 border-t border-emerald-500/30 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 block">Narasumber:</span>
                  <span className="text-xs font-semibold text-emerald-200">
                    Ulfatul Husna, S.Ag., M.Pd.
                  </span>
                </div>

                {/* Stylized QR Code SVG */}
                <div className="w-12 h-12 bg-white p-1 rounded-lg flex items-center justify-center">
                  <QrCode className="w-full h-full text-slate-900" />
                </div>
              </div>

            </div>

            {/* Ticket Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handlePrintTicket}
                className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Unduh PDF E-Tiket</span>
              </button>

              <button
                onClick={() => {
                  if (confirm('Apakah Anda ingin memperbarui data profil pendaftaran Anda?')) {
                    localStorage.removeItem('ngopi_gpai_registration');
                    onRegisterSuccess(null as any);
                  }
                }}
                className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium rounded-xl transition-colors"
              >
                Ubah Data Peserta
              </button>
            </div>
          </div>
        ) : (
          /* ================= REGISTRATION FORM ================= */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                Formulir Pendaftaran Gratis
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                Daftar Kegiatan NGOPI GPAI 2026
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Lengkapi formulir berikut untuk mendapatkan akses ruang virtual workshop dan penerbitan E-Sertifikat 32 JP resmi.
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              {/* Nama Lengkap */}
              <div>
                <label htmlFor="reg-name" className="block font-semibold text-slate-700 mb-1">
                  Nama Lengkap Peserta (beserta Gelar) <span className="text-rose-500">*</span>:
                </label>
                <div className="relative">
                  <input
                    id="reg-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Drs. H. Ahmad Fauzi, M.Pd.I"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
                {errors.name && <p className="text-rose-600 text-xs mt-1">{errors.name}</p>}
                <p className="text-[11px] text-slate-400 mt-0.5">Nama ini akan dicetak persis pada E-Sertifikat resmi.</p>
              </div>

              {/* NIP / NUPTK */}
              <div>
                <label htmlFor="reg-nip" className="block font-semibold text-slate-700 mb-1">
                  NIP / NUPTK / PegID <span className="text-rose-500">*</span>:
                </label>
                <input
                  id="reg-nip"
                  type="text"
                  value={formData.nip}
                  onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
                  placeholder="Contoh: 198205122005011003 (atau ketik tanda - jika belum memiliki)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                />
                {errors.nip && <p className="text-rose-600 text-xs mt-1">{errors.nip}</p>}
              </div>

              {/* Instansi / Sekolah & Kota */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-school" className="block font-semibold text-slate-700 mb-1">
                    Asal Sekolah / Instansi <span className="text-rose-500">*</span>:
                  </label>
                  <div className="relative">
                    <input
                      id="reg-school"
                      type="text"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      placeholder="Contoh: SMAN 1 Krembung"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                  {errors.school && <p className="text-rose-600 text-xs mt-1">{errors.school}</p>}
                </div>

                <div>
                  <label htmlFor="reg-city" className="block font-semibold text-slate-700 mb-1">
                    Kabupaten / Kota <span className="text-rose-500">*</span>:
                  </label>
                  <input
                    id="reg-city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Contoh: Sidoarjo, Jawa Timur"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                  {errors.city && <p className="text-rose-600 text-xs mt-1">{errors.city}</p>}
                </div>
              </div>

              {/* No WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-wa" className="block font-semibold text-slate-700 mb-1">
                    No. WhatsApp Aktif <span className="text-rose-500">*</span>:
                  </label>
                  <div className="relative">
                    <input
                      id="reg-wa"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="Contoh: 081234567890"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                  {errors.whatsapp && <p className="text-rose-600 text-xs mt-1">{errors.whatsapp}</p>}
                </div>

                <div>
                  <label htmlFor="reg-email" className="block font-semibold text-slate-700 mb-1">
                    Alamat Email Aktif <span className="text-rose-500">*</span>:
                  </label>
                  <div className="relative">
                    <input
                      id="reg-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@guru.sma.belajar.id"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                  {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Mendaftarkan...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Konfirmasi & Terbitkan E-Tiket</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
