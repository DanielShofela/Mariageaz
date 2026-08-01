import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react';
import { WEDDING_DATA, GalleryImage } from '../config/weddingData';

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Tous');
  const [copied, setCopied] = useState(false);

  const filters = ['Tous', 'Complice', 'Pré-Mariage', 'Romantique', 'Décor'];

  const filteredImages = activeFilter === 'Tous'
    ? WEDDING_DATA.gallery
    : WEDDING_DATA.gallery.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Mariage Aboubakar & Zenab',
        text: 'Découvrez la galerie photo du mariage d\'Aboubakar & Zenab',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="galerie" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Album Souvenir</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
            Galerie De Moments Magiques
          </h2>
          <p className="font-serif-luxury text-lg text-slate-600 italic">
            Quelques instants précieux qui retracent notre histoire d'amour.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 cursor-pointer shadow-lg shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Gradient & Hover Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-blue-300 font-semibold mb-1">
                  {image.category}
                </span>
                <h4 className="font-serif-luxury text-lg font-medium leading-tight mb-2">
                  {image.alt}
                </h4>
                <div className="inline-flex items-center space-x-1.5 text-xs text-blue-200 font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Agrandir</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Modal Controls */}
            <div className="absolute top-5 right-5 flex items-center space-x-3 z-50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20"
                title="Partager"
              >
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Share2 className="w-5 h-5" />}
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20"
                title="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prev/Next Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 z-50 p-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 z-50 p-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image View */}
            <div
              className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={filteredImages[selectedImageIndex].src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              <div className="mt-4 text-center text-white space-y-1">
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-light">
                  {filteredImages[selectedImageIndex].alt}
                </h3>
                <p className="text-xs text-blue-300 font-medium">
                  Image {selectedImageIndex + 1} sur {filteredImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
