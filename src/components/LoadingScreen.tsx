import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [step, setStep] = useState<number>(1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Sequence:
    // Step 1: Logo A&Z (0ms - 1800ms)
    // Step 2: Save The Date (1800ms - 3400ms)
    // Step 3: Fade Out (3400ms+)

    const timer1 = setTimeout(() => {
      setStep(2);
    }, 1800);

    const timer2 = setTimeout(() => {
      setStep(3);
    }, 3400);

    const timer3 = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden"
      >
        {/* Soft Animated Halos in background */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl animate-pulse-halo" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl animate-pulse-halo delay-1000" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-lg">
          {step === 1 && (
            <motion.div
              key="step-logo"
              initial={{ scale: 0.8, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.05, opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-400 p-0.5 shadow-2xl shadow-blue-500/20 mb-6 animate-float">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center border border-blue-100">
                  <span className="font-serif-luxury text-3xl font-bold tracking-widest text-gradient-royal">
                    A&Z
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-blue-600/70 text-xs font-medium tracking-[0.3em] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Mariage Princier</span>
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <h2 className="font-serif-luxury text-2xl md:text-3xl text-slate-800 font-light tracking-wide">
                Aboubakar & Zenab
              </h2>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="step-std"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-[0.25em] uppercase mb-6 shadow-sm">
                Save The Date
              </span>

              <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
                28 & 29 Août 2026
              </h1>

              <div className="flex items-center space-x-3 text-slate-500 text-sm italic font-serif">
                <span className="w-8 h-px bg-blue-200" />
                <Heart className="w-4 h-4 text-blue-600 fill-blue-600/30 animate-pulse" />
                <span>Deux cœurs. Une promesse.</span>
                <span className="w-8 h-px bg-blue-200" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Subtle Progress Bar */}
        <div className="absolute bottom-12 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3.8, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-blue-600 to-sky-400"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
