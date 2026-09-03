import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock, UserX, AlertTriangle, BarChart2, FileX, BookOpen,
  Scan, Brain, CheckCircle, FileText, ArrowRight, XCircle
} from 'lucide-react';
import { projectData } from '../data/projectData';

const iconMap = {
  Clock, UserX, AlertTriangle, BarChart2, FileX, BookOpen,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  }),
};

const TraditionalStep = ({ label, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-3 py-2.5 px-4 rounded-xl glass border border-red-500/20 hover:border-red-500/40 transition-colors"
  >
    <XCircle size={16} className="text-red-400 flex-shrink-0" />
    <span className="text-sm text-slate-300 font-inter">{label}</span>
    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500/50" />
  </motion.div>
);

const SmartStep = ({ icon: Icon, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-3 py-2.5 px-4 rounded-xl glass border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
  >
    <Icon size={16} className="text-emerald-400 flex-shrink-0" />
    <span className="text-sm text-slate-300 font-inter">{label}</span>
    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500/50 pulse-dot" />
  </motion.div>
);

const Problem = () => {
  return (
    <section id="problem" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="sih-badge mb-4 inline-block">The Challenge</span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            The Inspection <span className="gradient-text">Challenge</span>
          </h2>
          <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto">
            Traditional packaged commodity inspection is slow, inconsistent and evidence-poor.
            Here's why it needs to change.
          </p>
        </motion.div>

        {/* Challenge cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {projectData.problems.map((prob, i) => {
            const Icon = iconMap[prob.icon] || AlertTriangle;
            return (
              <motion.div
                key={prob.title}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl glass neon-border group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}>
                  <Icon size={18} className="text-red-400" />
                </div>
                <h3 className="font-space font-semibold text-white mb-1.5">{prob.title}</h3>
                <p className="text-slate-400 font-inter text-sm leading-relaxed">{prob.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-10"
        >
          {/* Traditional side */}
          <div className="p-6 rounded-2xl" style={{
            background: 'rgba(239,68,68,0.05)',
            border: '1px solid rgba(239,68,68,0.2)',
          }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <h3 className="font-space font-bold text-white text-lg">Traditional Inspection</h3>
              <span className="ml-auto text-xs text-red-400 font-mono-code glass px-2 py-1 rounded-full border border-red-500/30">SLOW</span>
            </div>
            <div className="space-y-2">
              {[
                'Inspect product manually',
                'Read label by hand',
                'Check each field individually',
                'Note findings on paper',
                'Prepare written report',
                'File physical evidence separately',
              ].map((step, i) => (
                <TraditionalStep key={step} label={step} delay={i * 0.08} />
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2">
              <Clock size={14} className="text-red-400" />
              <span className="text-xs text-slate-500 font-inter">~15–30 min per product</span>
            </div>
          </div>

          {/* Smart Inspection side */}
          <div className="p-6 rounded-2xl relative overflow-hidden" style={{
            background: 'rgba(16,185,129,0.05)',
            border: '1px solid rgba(16,185,129,0.25)',
          }}>
            {/* glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ background: '#10b981' }} />
            <div className="flex items-center gap-3 mb-5 relative">
              <div className="w-3 h-3 rounded-full bg-emerald-400 pulse-dot" />
              <h3 className="font-space font-bold text-white text-lg">Smart Inspection</h3>
              <span className="ml-auto text-xs text-emerald-400 font-mono-code glass px-2 py-1 rounded-full border border-emerald-500/30">FAST</span>
            </div>
            <div className="space-y-2 relative">
              {[
                { icon: Scan, label: 'Scan product barcode' },
                { icon: Brain, label: 'OCR detects label text' },
                { icon: CheckCircle, label: 'Auto-validate all fields' },
                { icon: AlertTriangle, label: 'Flag missing declarations' },
                { icon: FileText, label: 'Generate evidence report' },
              ].map(({ icon, label }, i) => (
                <SmartStep key={label} icon={icon} label={label} delay={i * 0.08} />
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2 relative">
              <Clock size={14} className="text-emerald-400" />
              <span className="text-xs text-slate-500 font-inter">Minutes per product</span>
              <ArrowRight size={12} className="text-emerald-400 ml-auto" />
              <span className="text-xs text-emerald-400 font-semibold">70%+ faster</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
