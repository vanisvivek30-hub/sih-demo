import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ video, onClose }) => {
  const overlayRef = useRef();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        style={{ background: 'rgba(5,5,16,0.95)', backdropFilter: 'blur(20px)' }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 20 }}
          className="w-full max-w-5xl relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 px-1">
            <div>
              <h3 className="font-space font-semibold text-white text-xl">{video.title}</h3>
              <p className="text-slate-400 text-sm mt-0.5">{video.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl glass hover:bg-white/10 transition-colors text-slate-400 hover:text-white ml-4 flex-shrink-0"
            >
              <X size={22} />
            </button>
          </div>

          {/* Video Frame */}
          <div className="relative rounded-2xl overflow-hidden neon-border" style={{ paddingTop: '56.25%' }}>
            {/* Placeholder shown when no real video is set */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)' }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 ml-1">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-slate-300 font-space text-lg font-medium">{video.title}</p>
              <p className="text-slate-500 text-sm mt-2">Replace embedUrl in videosData.js to connect your video</p>
              {/* Actual iframe — hidden when embedUrl is placeholder */}
            </div>
            {video.embedUrl && video.embedUrl !== 'https://www.youtube.com/embed/dQw4w9WgXcQ' && (
              <iframe
                src={video.embedUrl + '?autoplay=1&rel=0'}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={video.title}
              />
            )}
          </div>

          {/* Footer tags */}
          <div className="flex items-center gap-3 mt-4 px-1">
            <span className="sih-badge text-xs">{video.category}</span>
            <span className="text-slate-500 text-sm">{video.duration}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
