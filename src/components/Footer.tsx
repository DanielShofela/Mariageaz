import { Heart, Share2, MessageCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { WEDDING_DATA } from '../config/weddingData';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`Invitation au Mariage d'Aboubakar Sidik Fofana & Zenab Sylviane Akadi (28 & 29 Août 2026) : ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <footer className="relative bg-slate-950 text-white pt-20 pb-12 px-4 overflow-hidden border-t border-slate-900">
      {/* Background Radial Halos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Logo A&Z */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-blue-500 p-0.5 shadow-xl shadow-blue-500/20 mb-6">
          <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
            <span className="font-serif-luxury text-2xl font-bold tracking-widest text-gradient-sky">
              {WEDDING_DATA.couple.monogram}
            </span>
          </div>
        </div>

        {/* Names */}
        <h3 className="font-serif-luxury text-2xl sm:text-4xl font-light tracking-wide text-white mb-3">
          Aboubakar Sidik Fofana & Zenab Sylviane Akadi
        </h3>

        {/* Thank You Message */}
        <p className="font-serif-luxury text-lg sm:text-xl text-slate-300 italic max-w-xl mx-auto mb-8">
          "Merci d'avoir partagé ce moment d'exception avec nous. Votre présence est le plus précieux des cadeaux."
        </p>

        {/* Social & Share Links */}
        <div className="flex items-center space-x-4 mb-12">
          <button
            onClick={shareWhatsApp}
            className="p-3 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-colors"
            title="Partager sur WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </button>

          <button
            onClick={handleCopyLink}
            className="p-3 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-colors"
            title="Copier le lien"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-slate-800 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-slate-500 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-1">
            <span>Fait avec</span>
            <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500 inline" />
            <span>pour Aboubakar & Zenab</span>
          </div>
          <span>© 2026 Tous droits réservés • Abidjan, Côte d'Ivoire</span>
        </div>
      </div>
    </footer>
  );
}
