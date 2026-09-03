import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown, Scan, Eye, CheckCircle, FileText, Award } from 'lucide-react';
import { projectData } from '../data/projectData';

const ScanningAnimation = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square select-none">
    {/* Outer glow ring */}
    <div className="absolute inset-0 rounded-3xl" style={{
      background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
    }} />

    {/* Product box */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute inset-8 rounded-2xl glass neon-border flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Scan line overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <motion.div
          className="absolute left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.8), transparent)' }}
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Product label mockup */}
      <div className="relative z-10 w-full px-6 py-4 space-y-2">
        {/* Product name bar */}
        <div className="h-3 rounded-full bg-white/20 w-3/4" />
        <div className="h-2 rounded-full bg-white/10 w-1/2" />

        {/* Field rows */}
        <div className="space-y-1.5 mt-4">
          {['MRP: ₹120', 'Net Qty: 500g', 'Batch: B2026-09', 'Mfg: Jan 2026'].map((label, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.4 + 0.5, duration: 0.4 }}
            >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#06b6d4' }} />
              <div className="text-[10px] font-mono-code text-cyan-300">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Status badge */}
        <motion.div
          className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
          style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)', color: '#6ee7b7' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <CheckCircle size={10} />
          COMPLIANT
        </motion.div>
      </div>
    </motion.div>

    {/* Corner scanning brackets */}
    {[
      'top-4 left-4 border-t-2 border-l-2 rounded-tl-xl',
      'top-4 right-4 border-t-2 border-r-2 rounded-tr-xl',
      'bottom-4 left-4 border-b-2 border-l-2 rounded-bl-xl',
      'bottom-4 right-4 border-b-2 border-r-2 rounded-br-xl',
    ].map((cls, i) => (
      <motion.div
        key={i}
        className={`absolute w-8 h-8 border-cyan-400 ${cls}`}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}

    {/* Flow steps around the card */}
    {[
      { icon: Scan, label: 'Scan', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full' },
      { icon: Eye, label: 'OCR', pos: 'top-1/2 -right-4 translate-x-full -translate-y-1/2' },
      { icon: CheckCircle, label: 'Validate', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full' },
      { icon: FileText, label: 'Report', pos: 'top-1/2 -left-4 -translate-x-full -translate-y-1/2' },
    ].map(({ icon: Icon, label, pos }, i) => (
      <motion.div
        key={label}
        className={`absolute ${pos} flex flex-col items-center gap-1`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.3 + 0.8 }}
      >
        <div className="w-10 h-10 rounded-xl glass neon-border flex items-center justify-center">
          <Icon size={16} className="text-indigo-400" />
        </div>
        <span className="text-[9px] font-space font-medium text-slate-400 whitespace-nowrap">{label}</span>
      </motion.div>
    ))}

    {/* Connecting lines (SVG) */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
      <motion.path
        d="M200,32 L368,200 L200,368 L32,200 Z"
        fill="none"
        stroke="rgba(99,102,241,0.2)"
        strokeWidth="1"
        strokeDasharray="6 4"
        animate={{ strokeDashoffset: [0, -40] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  </div>
);

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSolution = () => {
    document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTeam = () => {
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left column — text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* SIH Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="sih-badge">
                <Award size={14} className="text-amber-400" />
                Smart India Hackathon {projectData.sihYear}
              </span>
              <span className="text-xs text-slate-500 font-mono-code border border-white/10 rounded-full px-3 py-1">
                PS #{projectData.problemStatementId}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-space font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] mb-4"
            >
              <span className="text-white">Legal Metrology</span>{' '}
              <br />
              <span className="gradient-text glow-text">Compliance</span>{' '}
              <span className="text-white">Scanner</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-space text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 tracking-wide"
            >
              {projectData.tagline}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-inter text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {projectData.subtitle}
            </motion.p>

            {/* Mandatory fields pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {projectData.mandatoryFields.map((field, i) => (
                <motion.span
                  key={field}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="px-3 py-1 text-xs font-mono-code rounded-full glass border border-white/[0.08] text-slate-400"
                >
                  {field}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToDemo}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-space font-semibold text-white text-sm"
                style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)' }}
              >
                <Play size={16} fill="white" />
                Watch Prototype Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToSolution}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-space font-semibold text-white text-sm glass neon-border hover:bg-white/[0.06] transition-all"
              >
                Explore Solution
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToTeam}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-space font-semibold text-slate-400 hover:text-white text-sm transition-all"
              >
                Meet Our Team
              </motion.button>
            </motion.div>
          </div>

          {/* Right column — animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', damping: 20 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <ScanningAnimation />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-8 lg:-mt-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-slate-600 cursor-pointer"
            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs font-inter">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
