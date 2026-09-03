import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const image = images[currentIndex];

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  // Gradient placeholder colors for images without src
  const gradients = [
    'from-indigo-900 to-blue-900',
    'from-violet-900 to-purple-900',
    'from-cyan-900 to-teal-900',
    'from-slate-800 to-slate-900',
    'from-indigo-900 to-violet-900',
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ background: 'rgba(5,5,16,0.97)', backdropFilter: 'blur(30px)' }}
        onClick={onClose}
      >
        {/* Nav buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:bg-white/10 transition-all text-white z-10"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:bg-white/10 transition-all text-white z-10"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <ChevronRight size={24} />
        </button>
        <button
          className="absolute top-4 right-4 p-2 glass rounded-xl hover:bg-white/10 transition-all text-slate-400 hover:text-white z-10"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
        >
          <X size={22} />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="max-w-5xl w-full mx-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="rounded-2xl overflow-hidden neon-border aspect-video">
            {image?.src ? (
              <img src={image.src} alt={image.title} className="w-full h-full object-contain bg-slate-900" />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${gradients[currentIndex % gradients.length]} flex flex-col items-center justify-center gap-4`}>
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5" className="w-8 h-8">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-space font-semibold text-white text-lg">{image?.title}</p>
                  <p className="text-slate-500 text-sm mt-1">Add image path in galleryData.js</p>
                </div>
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="mt-4 flex items-center justify-between px-1">
            <div>
              <h3 className="font-space font-semibold text-white">{image?.title}</h3>
              <span className="sih-badge text-xs mt-1 inline-block">{image?.category}</span>
            </div>
            <span className="text-slate-500 text-sm font-mono-code">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
