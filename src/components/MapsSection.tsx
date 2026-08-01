import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, ExternalLink, Sparkles, Building2, Landmark, PartyPopper } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function MapsSection() {
  const [selectedLoc, setSelectedLoc] = useState<string>('all');

  // Locations setup
  const locations = [
    {
      id: 'mairie',
      title: 'Mairie du Plateau',
      subtitle: 'Mariage Civil (28 août, 11h00)',
      icon: '🏛️',
      query: 'Mairie+du+Plateau+Abidjan',
      url: 'https://maps.google.com/?q=Mairie+du+Plateau+Abidjan',
      address: 'Le Plateau, Abidjan'
    },
    {
      id: 'mosquee',
      title: 'Mosquée Aghien',
      subtitle: 'Mariage Religieux (29 août, 09h30)',
      icon: '🕌',
      query: 'Mosquee+Aghien+Deux+Plateaux+Abidjan',
      url: 'https://maps.google.com/?q=Mosquee+Aghien+Deux+Plateaux+Abidjan',
      address: 'Les 2 Plateaux, Abidjan'
    },
    {
      id: 'reception',
      title: 'Eden Event',
      subtitle: 'Réception & Dîner (29 août, 14h00)',
      icon: '🎉',
      query: 'Eden+Event+Abidjan',
      url: 'https://maps.google.com/?q=Eden+Event+Abidjan',
      address: 'Près du Collège André Malraux, Abidjan'
    }
  ];

  const activeLocObj = locations.find((l) => l.id === selectedLoc) || locations[0];

  const mapEmbedUrl = `https://maps.google.com/maps?q=${activeLocObj.query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localisation" className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guide D'Accès</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
            Localisation Des Lieux
          </h2>
          <p className="font-serif-luxury text-lg text-slate-600 italic">
            Trouvez facilement tous les lieux de célébration à Abidjan.
          </p>
        </div>

        {/* 4 Big Action Buttons (Mairie, Mosquée, Réception, Ouvrir Google Maps) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <button
            onClick={() => setSelectedLoc('mairie')}
            className={`p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all ${
              selectedLoc === 'mairie'
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-[1.02]'
                : 'bg-blue-50/70 text-slate-800 hover:bg-blue-100/70 border border-blue-100'
            }`}
          >
            <span className="text-3xl mb-2">🏛️</span>
            <span className="font-serif-luxury font-semibold text-lg">Mairie</span>
            <span className={`text-[11px] mt-0.5 ${selectedLoc === 'mairie' ? 'text-blue-100' : 'text-slate-500'}`}>
              Plateau • 28 Août
            </span>
          </button>

          <button
            onClick={() => setSelectedLoc('mosquee')}
            className={`p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all ${
              selectedLoc === 'mosquee'
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-[1.02]'
                : 'bg-blue-50/70 text-slate-800 hover:bg-blue-100/70 border border-blue-100'
            }`}
          >
            <span className="text-3xl mb-2">🕌</span>
            <span className="font-serif-luxury font-semibold text-lg">Mosquée</span>
            <span className={`text-[11px] mt-0.5 ${selectedLoc === 'mosquee' ? 'text-blue-100' : 'text-slate-500'}`}>
              2 Plateaux • 29 Août
            </span>
          </button>

          <button
            onClick={() => setSelectedLoc('reception')}
            className={`p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all ${
              selectedLoc === 'reception'
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-[1.02]'
                : 'bg-blue-50/70 text-slate-800 hover:bg-blue-100/70 border border-blue-100'
            }`}
          >
            <span className="text-3xl mb-2">🎉</span>
            <span className="font-serif-luxury font-semibold text-lg">Réception</span>
            <span className={`text-[11px] mt-0.5 ${selectedLoc === 'reception' ? 'text-blue-100' : 'text-slate-500'}`}>
              Eden Event • 29 Août
            </span>
          </button>

          <a
            href={activeLocObj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white flex flex-col items-center justify-center text-center shadow-lg shadow-blue-500/20 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            <span className="text-3xl mb-2">📍</span>
            <span className="font-serif-luxury font-semibold text-lg flex items-center space-x-1">
              <span>Google Maps</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </span>
            <span className="text-[11px] text-sky-100 mt-0.5">Ouvrir l'itinéraire</span>
          </a>
        </div>

        {/* Embedded Interactive Map Container */}
        <motion.div
          key={activeLocObj.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-blue-500/10 p-2 bg-slate-50"
        >
          <iframe
            title={`Carte ${activeLocObj.title}`}
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '1.25rem' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Location Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">
                {activeLocObj.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">
                  {activeLocObj.title}
                </h4>
                <p className="text-xs text-slate-500">
                  {activeLocObj.subtitle}
                </p>
              </div>
            </div>
            
            <a
              href={activeLocObj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shrink-0 ml-3"
              title="Naviguer"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
