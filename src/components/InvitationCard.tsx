import { motion } from 'motion/react';
import { Sparkles, Heart, Flower2 } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function InvitationCard() {
  return (
    <section id="invitation" className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-100 shadow-2xl shadow-blue-600/10 text-center overflow-hidden"
        >
          {/* Subtle Decorative Golden/Royal Ornaments in corners */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 border-t-2 border-l-2 border-blue-200/60 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 border-t-2 border-r-2 border-blue-200/60 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-12 h-12 border-b-2 border-l-2 border-blue-200/60 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 border-b-2 border-r-2 border-blue-200/60 rounded-br-xl pointer-events-none" />

          {/* Top Decorative Flower / Heart */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-blue-600 mb-8 border border-blue-100 shadow-sm">
            <Heart className="w-6 h-6 fill-blue-600/20 text-blue-600 animate-pulse" />
          </div>

          {/* Header text */}
          <span className="block text-xs sm:text-sm font-semibold tracking-[0.3em] text-blue-600 uppercase mb-6">
            {WEDDING_DATA.couple.invitationHeader}
          </span>

          {/* Names */}
          <div className="space-y-4 mb-8">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Fofana Aboubakar-Sidik
            </h2>
            
            <div className="flex items-center justify-center space-x-3 text-slate-400">
              <span className="w-10 h-px bg-slate-200" />
              <span className="font-serif-luxury text-2xl italic text-blue-600 font-normal">et</span>
              <span className="w-10 h-px bg-slate-200" />
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              AKADI Zenab
            </h2>
          </div>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-300 via-sky-400 to-blue-300 mx-auto my-8 rounded-full" />

          {/* Body Text */}
          <p className="font-serif-luxury text-lg sm:text-2xl text-slate-700 font-normal leading-relaxed max-w-xl mx-auto">
            {WEDDING_DATA.couple.invitationBody}
          </p>

          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs sm:text-sm font-medium">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Abidjan, Côte d'Ivoire</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>28 & 29 Août 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
