import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Sparkles, Check, MessageSquare } from 'lucide-react';
import { WEDDING_DATA, Scarf } from '../config/weddingData';

export default function ScarvesShop() {
  const [selectedScarf, setSelectedScarf] = useState<Scarf | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleOrderScarf = (scarf: Scarf) => {
    const message = encodeURIComponent(
      `Bonjour,\n\nJe souhaite commander le *${scarf.title}* (${scarf.category}) au tarif de *${scarf.price}*.\nQuantité : ${quantity}\n\nMerci de me donner la procédure de confirmation.`
    );
    const whatsappUrl = `https://wa.me/${WEDDING_DATA.whatsappMain.replace('+', '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="foulards" className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accessoires De Célébration</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
            Foulards Officiels
          </h2>
          <p className="font-serif-luxury text-lg text-slate-600 italic">
            Soyez élégants pour célébrer cette journée avec nous.
          </p>
        </div>

        {/* 2 Glassmorphism Scarf Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {WEDDING_DATA.scarves.map((scarf, index) => (
            <motion.div
              key={scarf.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-200/40 transition-colors" />

              <div>
                {/* Photo Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md border border-white">
                  <img
                    src={scarf.image}
                    alt={scarf.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-blue-700 border border-blue-100 shadow-sm">
                    {scarf.category}
                  </div>
                </div>

                {/* Scarf Details */}
                <div className="space-y-2 mb-6 text-left">
                  <h3 className="font-serif-luxury text-2xl font-semibold text-slate-900">
                    {scarf.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {scarf.description}
                  </p>
                  
                  {/* Price Tag */}
                  <div className="pt-2 flex items-baseline space-x-2">
                    <span className="font-serif-luxury text-3xl font-bold text-gradient-royal">
                      {scarf.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ unité</span>
                  </div>
                </div>
              </div>

              {/* Commander Button */}
              <div className="pt-4 border-t border-blue-100/60">
                <button
                  onClick={() => handleOrderScarf(scarf)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Commander via WhatsApp</span>
                  <MessageSquare className="w-3.5 h-3.5 ml-1 opacity-80" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on scarf pickup / delivery */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-md mx-auto italic font-serif">
          ✨ Les foulards sont disponibles sur commande préalable. La livraison ou le retrait sera coordonné directement avec l'équipe d'organisation via WhatsApp.
        </div>
      </div>
    </section>
  );
}
