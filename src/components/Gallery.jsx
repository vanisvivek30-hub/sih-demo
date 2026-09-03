import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import Lightbox from './ui/Lightbox';
import { galleryData, galleryCategories } from '../data/galleryData';

const gradients = [
  'from-indigo-900/80 to-blue-900/80',
  'from-violet-900/80 to-purple-900/80',
  'from-cyan-900/80 to-teal-900/80',
  'from-slate-800/80 to-slate-900/80',
  'from-indigo-900/80 to-violet-900/80',
  'from-amber-900/80 to-orange-900/80',
  'from-rose-900/80 to-pink-900/80',
  'from-emerald-900/80 to-teal-900/80',
  'from-sky-900/80 to-blue-900/80',
  'from-fuchsia-900/80 to-purple-900/80',
];

const GalleryItem = ({ item, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ delay: index * 0.06 }}
    whileHover={{ scale: 1.02, zIndex: 10 }}
    onClick={() => onClick(index)}
    className={`relative cursor-pointer rounded-2xl overflow-hidden group ${
      item.span || 'col-span-1'
    }`}
    style={{ aspectRatio: item.span === 'col-span-2' ? '2/1' : '1/1' }}
  >
    {/* Image or placeholder */}
    {item.src ? (
      <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    ) : (
      <div className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex flex-col items-center justify-center gap-3`}>
        <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center">
          <Image size={22} className="text-white/40" />
        </div>
        <p className="text-white/50 text-xs font-inter text-center px-4">{item.title}</p>
      </div>
    )}

    {/* Overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <p className="font-space font-semibold text-white text-sm">{item.title}</p>
      <span className="sih-badge text-[10px] mt-1 inline-block w-fit">{item.category}</span>
    </div>

    {/* Border glow on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
      style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.5)' }} />
  </motion.div>
);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  const handlePrev = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const handleNext = () => setLightboxIndex(i => (i + 1) % filtered.length);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="sih-badge mb-4 inline-block">Prototype Gallery</span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Inside the <span className="gradient-text">Prototype</span>
          </h2>
          <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto">
            Screenshots, UI captures and development photos from our prototype journey.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {galleryCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium font-space transition-all duration-200 ${
                activeCategory === cat
                  ? 'text-white'
                  : 'glass text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
              style={activeCategory === cat ? {
                background: 'linear-gradient(135deg,#6366f1,#06b6d4)',
                boxShadow: '0 0 20px rgba(99,102,241,0.4)',
              } : {}}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto"
          style={{ gridAutoFlow: 'dense' }}
        >
          {filtered.map((item, i) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={i}
              onClick={(idx) => setLightboxIndex(idx)}
            />
          ))}
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-sm mt-8 font-inter"
        >
          Replace image paths in{' '}
          <code className="text-indigo-400 font-mono-code text-xs bg-indigo-500/10 px-2 py-0.5 rounded">
            src/data/galleryData.js
          </code>{' '}
          with your real prototype screenshots.
        </motion.p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};

export default Gallery;
