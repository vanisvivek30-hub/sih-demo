import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Star } from 'lucide-react';
import VideoModal from './ui/VideoModal';
import { videosData } from '../data/videosData';

const VideoCard = ({ video, onClick, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -6 }}
    onClick={onClick}
    className="group cursor-pointer"
  >
    <div className="relative rounded-2xl overflow-hidden glass neon-border"
      style={{ aspectRatio: '16/9' }}>
      {/* Thumbnail placeholder */}
      {video.thumbnail ? (
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center">
          {/* Animated scan lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-px opacity-20"
                style={{ top: `${20 * (i + 1)}%`, background: 'linear-gradient(90deg,transparent,#6366f1,transparent)' }}
                animate={{ opacity: [0.1, 0.4, 0.1], scaleX: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </div>
          {/* Play icon placeholder */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,rgba(99,102,241,0.4),rgba(6,182,212,0.4))', border: '1px solid rgba(99,102,241,0.5)' }}>
              <Play size={24} className="text-white ml-1" />
            </div>
            <p className="text-xs text-slate-500 font-inter text-center px-4">Add video thumbnail in videosData.js</p>
          </div>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(5,5,16,0.6)', backdropFilter: 'blur(4px)' }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)', boxShadow: '0 0 40px rgba(99,102,241,0.6)' }}
        >
          <Play size={28} fill="white" className="text-white ml-1" />
        </motion.div>
      </div>

      {/* Duration badge */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg glass border border-white/10">
        <Clock size={11} className="text-slate-400" />
        <span className="text-xs text-slate-300 font-mono-code">{video.duration}</span>
      </div>

      {/* Featured badge */}
      {video.featured && (
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-amber-300 font-space"
          style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)' }}>
          <Star size={10} fill="#fbbf24" />
          Featured
        </div>
      )}
    </div>

    {/* Card info */}
    <div className="mt-3 px-1">
      <h3 className="font-space font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
        {video.title}
      </h3>
      <p className="text-slate-500 font-inter text-xs mt-1 leading-relaxed">{video.description}</p>
      <span className="sih-badge text-[10px] mt-2 inline-block">{video.category}</span>
    </div>
  </motion.div>
);

const DemoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="demo" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="sih-badge mb-4 inline-block">Live Demos</span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            See Our Prototype{' '}
            <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto">
            Watch our prototype demonstrations and see how the system transforms
            the compliance inspection process.
          </p>
        </motion.div>

        {/* Featured video */}
        {videosData.filter(v => v.featured).map((video) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div
              className="relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '16/9', maxHeight: 520 }}
              onClick={() => setActiveVideo(video)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 to-slate-900 flex items-center justify-center">
                {/* Decorative elements */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: Math.random() * 300 + 100,
                        height: Math.random() * 300 + 100,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: i % 2 === 0
                          ? 'radial-gradient(circle, rgba(99,102,241,0.1), transparent)'
                          : 'radial-gradient(circle, rgba(6,182,212,0.08), transparent)',
                        transform: 'translate(-50%,-50%)',
                      }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 4 + i, repeat: Infinity }}
                    />
                  ))}
                </div>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center px-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)', boxShadow: '0 0 60px rgba(99,102,241,0.5)' }}
                  >
                    <Play size={40} fill="white" className="text-white ml-2" />
                  </motion.div>
                  <div>
                    <h3 className="font-space font-bold text-white text-2xl mb-2">{video.title}</h3>
                    <p className="text-slate-400 font-inter max-w-md">{video.description}</p>
                  </div>
                  <div className="sih-badge">Click to Watch</div>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg,rgba(99,102,241,0.1),rgba(6,182,212,0.1))', border: '2px solid rgba(99,102,241,0.4)', borderRadius: 'inherit' }} />
            </div>
          </motion.div>
        ))}

        {/* Other videos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videosData.filter(v => !v.featured).map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              onClick={() => setActiveVideo(video)}
            />
          ))}
        </div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-sm mt-8 font-inter"
        >
          Replace video URLs in{' '}
          <code className="text-indigo-400 font-mono-code text-xs bg-indigo-500/10 px-2 py-0.5 rounded">
            src/data/videosData.js
          </code>{' '}
          to connect your real demonstrations.
        </motion.p>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
};

export default DemoSection;
