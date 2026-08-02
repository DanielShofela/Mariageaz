/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import InvitationCard from './components/InvitationCard';
import TimelineSection from './components/TimelineSection';
import DressCodeSection from './components/DressCodeSection';
import ScarvesShop from './components/ScarvesShop';
import MapsSection from './components/MapsSection';
import RSVPSection from './components/RSVPSection';
import ContactSection from './components/ContactSection';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* 1. Loading Splash Screen */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* 2. Living Ambient Background (Halos, Petals, Leaves, Particles) */}
      <AnimatedBackground />

      {/* 3. Audio Music Player Controller */}
      <AudioPlayer isPlaying={isPlayingAudio} onToggle={toggleAudio} />

      {/* 4. Main Site Layout */}
      {loadingComplete && (
        <div className="relative z-10 flex flex-col min-h-screen animate-fade-in">
          {/* Header Navigation */}
          <HeaderNav isPlayingAudio={isPlayingAudio} onToggleAudio={toggleAudio} />

          {/* Main Sections */}
          <main className="flex-grow">
            {/* HERO */}
            <HeroSection />

            {/* INVITATION */}
            <InvitationCard />

            {/* CÉRÉMONIES & COMPTEURS INDIVIDUELS */}
            <TimelineSection />

            {/* DRESS CODE */}
            <DressCodeSection />

            {/* FOULARDS OFFICIELS */}
            <ScarvesShop />

            {/* LOCALISATION & CARTES */}
            <MapsSection />

            {/* FORMULAIRE RSVP & WHATSAPP */}
            <RSVPSection />

            {/* CONTACTS */}
            <ContactSection />
          </main>

          {/* FOOTER */}
          <Footer />
        </div>
      )}
    </div>
  );
}
