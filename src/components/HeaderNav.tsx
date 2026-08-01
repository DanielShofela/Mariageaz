import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, CalendarCheck, MapPin, PhoneCall, ShoppingBag, Volume2, VolumeX } from 'lucide-react';

interface HeaderNavProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export default function HeaderNav({ isPlayingAudio, onToggleAudio }: HeaderNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['hero', 'invitation', 'ceremonies', 'dress-code', 'foulards', 'galerie', 'localisation', 'rsvp', 'contacts'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#invitation', label: 'Invitation' },
    { href: '#ceremonies', label: 'Cérémonies' },
    { href: '#dress-code', label: 'Dress Code' },
    { href: '#foulards', label: 'Foulards' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#localisation', label: 'Accès & Carte' },
    { href: '#rsvp', label: 'RSVP' },
    { href: '#contacts', label: 'Contacts' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#hero');
          }}
          className="flex items-center space-x-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-400 p-0.5 shadow-md group-hover:shadow-blue-500/30 transition-shadow">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="font-serif-luxury font-bold text-lg text-blue-600 tracking-wider">
                A&Z
              </span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-serif-luxury text-base font-semibold text-slate-900 leading-none">
              Aboubakar & Zenab
            </span>
            <span className="text-[10px] text-blue-600 font-medium tracking-widest uppercase mt-0.5">
              28-29 Août 2026
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Ambient Music Toggle Button */}
          <button
            onClick={onToggleAudio}
            title={isPlayingAudio ? 'Mettre en pause l\'ambiance sonore' : 'Activer l\'ambiance sonore'}
            className="p-2.5 rounded-full bg-blue-50/80 text-blue-600 hover:bg-blue-100 border border-blue-200/50 transition-colors focus:outline-none"
          >
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 opacity-70" />
            )}
          </button>

          {/* Quick RSVP Button */}
          <a
            href="#rsvp"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#rsvp');
            }}
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>RSVP</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-blue-400 font-serif">→</span>
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#rsvp"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#rsvp');
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Confirmer ma présence (RSVP)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
