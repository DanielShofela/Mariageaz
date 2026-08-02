import { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function AudioPlayer({ isPlaying }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const attemptPlay = () => {
        audio.play().catch(() => {
          // Autoplay blocked by browser policy until user interaction
        });
      };

      attemptPlay();

      const handleUserInteraction = () => {
        if (audio.paused) {
          audio.play().catch(() => {});
        }
      };

      window.addEventListener('pointerdown', handleUserInteraction, { passive: true });
      window.addEventListener('click', handleUserInteraction, { passive: true });
      window.addEventListener('touchstart', handleUserInteraction, { passive: true });
      window.addEventListener('scroll', handleUserInteraction, { passive: true });

      return () => {
        window.removeEventListener('pointerdown', handleUserInteraction);
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
        window.removeEventListener('scroll', handleUserInteraction);
      };
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      loop
      src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wedding-piano-113271.mp3"
      preload="auto"
    />
  );
}
