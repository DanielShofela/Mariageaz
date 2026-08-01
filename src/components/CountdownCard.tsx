import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CountdownCardProps {
  targetDate: string; // ISO String format (e.g., '2026-08-28T11:00:00')
  title?: string;
  compact?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export default function CountdownCard({ targetDate, compact = false }: CountdownCardProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isPast) {
    return (
      <div className="py-2 px-4 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold text-center border border-blue-100">
        ✨ Cérémonie en cours ou accomplie
      </div>
    );
  }

  const timeUnits = [
    { label: 'Jours', value: timeLeft.days },
    { label: 'Heures', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.seconds },
  ];

  return (
    <div className={`w-full ${compact ? 'py-1' : 'py-2'}`}>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
        {timeUnits.map((unit) => {
          const formattedVal = String(unit.value).padStart(2, '0');
          return (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-2xl bg-gradient-to-b from-blue-50/90 to-blue-100/50 border border-blue-200/50 shadow-inner"
            >
              <div className="relative overflow-hidden h-7 sm:h-9 flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={formattedVal}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="font-mono text-lg sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    {formattedVal}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-blue-700/80 mt-0.5">
                {unit.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
