import React from 'react';
import { motion } from 'framer-motion';
import { Play, Image, Users, Sparkles } from 'lucide-react';

const CTA = () => (
  <section id="cta" className="py-24 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.3) 0%, transparent 70%)',
        }} />
      <div className="absolute inset-0 grid-bg opacity-30" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex justify-center mb-6">
          <span className="sih-badge">
            <Sparkles size={14} className="text-amber-400" />
            Experience It Live
          </span>
        </div>

        <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Experience the{' '}
          <span className="gradient-text glow-text">Prototype</span>
        </h2>

        <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore our solution, watch the demonstrations and discover how technology
          can support faster and smarter compliance inspection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(99,102,241,0.6)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-space font-semibold text-white text-base"
            style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)', boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}
          >
            <Play size={18} fill="white" />
            Watch Full Demo
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-space font-semibold text-white text-base glass neon-border hover:bg-white/[0.06] transition-all"
          >
            <Image size={18} />
            Explore Gallery
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-space font-semibold text-slate-400 hover:text-white text-base transition-all"
          >
            <Users size={18} />
            Meet the Team
          </motion.button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
