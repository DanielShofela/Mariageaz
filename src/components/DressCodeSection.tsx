import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function DressCodeSection() {
  return (
    <section id="dress-code" className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-white via-blue-50/40 to-sky-50/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border border-white shadow-2xl shadow-blue-500/10 overflow-hidden"
        >
          {/* Subtle Background Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-[0.25em] uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Thème & Harmonie Visual</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
                {WEDDING_DATA.couple.dressCodeTitle}
              </h2>

              <div className="inline-block px-6 py-3 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20 font-serif-luxury text-2xl sm:text-3xl font-normal tracking-wide">
                {WEDDING_DATA.couple.dressCodeText}
              </div>

              <p className="font-serif-luxury text-lg sm:text-xl text-slate-600 italic leading-relaxed pt-2">
                "{WEDDING_DATA.couple.dressCodeDescription}"
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-white/80 border border-blue-100/80 shadow-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Blanc Éclatant</h4>
                    <p className="text-xs text-slate-500">Costumes blancs, boubous immaculés, robes de gala blanches.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-blue-100/80 shadow-sm flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Touches Dorées & Azur</h4>
                    <p className="text-xs text-slate-500">Accessoires et foulards officiels pour relever votre tenue.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Large Illustration / Photo */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden p-2.5 bg-white shadow-2xl shadow-blue-500/15 border border-slate-100 group"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/1.jpg"
                    alt="Dress code Tenue Blanche"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                    <span className="font-serif-luxury text-2xl font-light block italic mb-1">
                      Élégance Pure
                    </span>
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-200">
                      Tenue Blanche Obligatoire
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
