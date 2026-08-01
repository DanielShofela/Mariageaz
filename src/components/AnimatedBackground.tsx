import { useMemo } from 'react';

export default function AnimatedBackground() {
  // Generate random particles and petals positions
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      left: Math.random() * 100,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.2,
    }));
  }, []);

  const petals = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 14 + 12,
      delay: Math.random() * 10,
      size: Math.random() * 14 + 10,
      rotate: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Primary Light Halos & Gradients */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(212, 235, 255, 0.75) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
      <div 
        className="absolute top-[25%] -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl animate-pulse-halo"
        style={{
          background: 'radial-gradient(circle, rgba(21, 101, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
      <div 
        className="absolute top-[60%] -left-40 w-[700px] h-[700px] rounded-full opacity-40 blur-3xl animate-pulse-halo"
        style={{
          background: 'radial-gradient(circle, rgba(108, 184, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
          animationDelay: '4s',
        }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[800px] h-[500px] rounded-full opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(234, 245, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Floating Light Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={`p-${p.id}`}
            className="absolute rounded-full bg-blue-300/40 blur-[1px] animate-float-slow"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${(p.id * 5) % 90}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Falling White Petals */}
      <div className="absolute inset-0">
        {petals.map((petal) => (
          <div
            key={`petal-${petal.id}`}
            className="absolute pointer-events-none"
            style={{
              left: `${petal.left}%`,
              top: '-5%',
              animation: `petal-fall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
            }}
          >
            {/* White/Soft Blue Petal SVG */}
            <svg
              width={petal.size}
              height={petal.size * 1.3}
              viewBox="0 0 24 32"
              fill="none"
              style={{ transform: `rotate(${petal.rotate}deg)` }}
              className="opacity-70 drop-shadow-[0_4px_6px_rgba(21,101,255,0.08)]"
            >
              <path
                d="M12 0C12 0 24 10 24 20C24 26.6274 18.6274 32 12 32C5.37258 32 0 26.6274 0 20C0 10 12 0 12 0Z"
                fill="url(#petal-grad)"
              />
              <defs>
                <linearGradient id="petal-grad" x1="12" y1="0" x2="12" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFFFF" />
                  <stop offset="0.7" stopColor="#EAF5FF" />
                  <stop offset="1" stopColor="#D4EBFD" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>

      {/* Decorative Tropical Leaves (Top Corners - Subtle Sway) */}
      <div className="absolute top-12 -left-12 w-48 sm:w-64 h-auto opacity-20 pointer-events-none animate-sway text-blue-900/30">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M40,10 Q80,90 180,110 Q100,120 40,10 Z" />
          <path d="M30,30 Q90,70 190,40 Q110,90 30,30 Z" />
          <path d="M50,80 Q110,130 170,160 Q100,160 50,80 Z" />
        </svg>
      </div>
      <div className="absolute top-20 -right-12 w-48 sm:w-64 h-auto opacity-20 pointer-events-none animate-sway text-blue-900/30 style={{ animationDelay: '3s' }}">
        <svg viewBox="0 0 200 200" fill="currentColor" className="transform scale-x-[-1]">
          <path d="M40,10 Q80,90 180,110 Q100,120 40,10 Z" />
          <path d="M30,30 Q90,70 190,40 Q110,90 30,30 Z" />
          <path d="M50,80 Q110,130 170,160 Q100,160 50,80 Z" />
        </svg>
      </div>
    </div>
  );
}
