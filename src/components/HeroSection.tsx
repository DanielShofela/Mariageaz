import { motion } from 'motion/react';
import { Sparkles, ChevronDown, Calendar, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById('invitation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top Floating Monogram & Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center mb-6"
        >
          {/* Logo A&Z */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-blue-500 p-0.5 shadow-xl shadow-blue-500/20 mb-4 animate-float">
            <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-100">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-widest text-gradient-royal">
                {WEDDING_DATA.couple.monogram}
              </span>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/60 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-semibold tracking-[0.25em] text-blue-700 uppercase">
              SAVE THE DATE
            </span>
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-2 mb-6"
        >
          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-tight">
            {WEDDING_DATA.couple.groom}
          </h1>
          
          <div className="flex items-center justify-center space-x-4 my-2">
            <span className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-blue-300" />
            <span className="font-serif-luxury text-2xl sm:text-4xl italic text-blue-600 font-normal">
              &
            </span>
            <span className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-blue-300" />
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-tight">
            {WEDDING_DATA.couple.bride}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl mx-auto mb-8 px-4"
        >
          <p className="font-serif-luxury text-lg sm:text-2xl text-slate-600 italic leading-relaxed">
            "{WEDDING_DATA.couple.subtitle}"
          </p>
        </motion.div>

        {/* Couple Portrait Card Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden p-2 bg-white/70 backdrop-blur-md shadow-2xl shadow-blue-500/15 border border-white/80 mb-10 group"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <img
              src={WEDDING_DATA.couple.heroImage}
              alt="Aboubakar-Sidik & Akadi Zenab"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
              <div className="text-left">
                <span className="text-xs uppercase tracking-widest text-blue-200 block font-medium">
                  Célébration à Abidjan
                </span>
                <span className="font-serif-luxury text-lg sm:text-xl font-medium">
                  28 & 29 Août 2026
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                <Heart className="w-4 h-4 text-white fill-white/50" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Button ("Découvrir notre mariage") */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={scrollToNext}
            className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white font-semibold text-base sm:text-lg shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 focus:outline-none overflow-hidden"
          >
            {/* Internal Shimmer overlay */}
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span>Découvrir notre mariage</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Scroll Down Indicator */}
          <div className="mt-8 flex flex-col items-center text-slate-400 text-xs font-medium tracking-widest uppercase animate-bounce cursor-pointer" onClick={scrollToNext}>
            <span className="mb-1">Défiler</span>
            <ChevronDown className="w-4 h-4 text-blue-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
