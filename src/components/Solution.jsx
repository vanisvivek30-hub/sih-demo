import React from 'react';
import { motion } from 'framer-motion';
import {
  Scan, Eye, CheckCircle, FileText, Tag, BarChart2
} from 'lucide-react';

const features = [
  {
    icon: Scan,
    title: 'Smart Product Scanning',
    desc: 'Capture product packaging with camera and automatically identify relevant label regions for inspection.',
    gradient: 'from-indigo-500/20 to-blue-500/10',
    border: 'border-indigo-500/30',
    iconBg: 'rgba(99,102,241,0.2)',
    iconColor: '#818cf8',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    icon: Eye,
    title: 'OCR & Field Extraction',
    desc: 'Advanced optical character recognition extracts all mandatory declaration fields from product labels.',
    gradient: 'from-cyan-500/20 to-teal-500/10',
    border: 'border-cyan-500/30',
    iconBg: 'rgba(6,182,212,0.2)',
    iconColor: '#22d3ee',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Validation',
    desc: 'Automatically validate extracted information against Legal Metrology rules and identify missing or invalid declarations.',
    gradient: 'from-emerald-500/20 to-green-500/10',
    border: 'border-emerald-500/30',
    iconBg: 'rgba(16,185,129,0.2)',
    iconColor: '#34d399',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    icon: FileText,
    title: 'Evidence-Based Reporting',
    desc: 'Generate inspection reports with direct links to supporting image evidence from the product label.',
    gradient: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/30',
    iconBg: 'rgba(139,92,246,0.2)',
    iconColor: '#a78bfa',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    icon: Tag,
    title: 'Batch-Level Tracking',
    desc: 'Track inspected products using SKU and Batch Number for precise, audit-ready enforcement records.',
    gradient: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
    iconBg: 'rgba(245,158,11,0.2)',
    iconColor: '#fbbf24',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    icon: BarChart2,
    title: 'Enforcement Dashboard',
    desc: 'Visualize compliance patterns, violation trends and inspection coverage across product categories.',
    gradient: 'from-rose-500/20 to-pink-500/10',
    border: 'border-rose-500/30',
    iconBg: 'rgba(244,63,94,0.2)',
    iconColor: '#fb7185',
    glow: 'rgba(244,63,94,0.3)',
  },
];

const Solution = () => (
  <section id="solution" className="py-24 relative">
    {/* Background gradient bar */}
    <div className="absolute left-0 right-0 top-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="sih-badge mb-4 inline-block">Our Solution</span>
        <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          From Manual Inspection to{' '}
          <span className="gradient-text">Intelligent Assistance</span>
        </h2>
        <p className="text-slate-400 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
          Our system automates the repetitive parts of compliance inspection while keeping
          the enforcement officer as the final authority and decision-maker.
        </p>
      </motion.div>

      {/* Feature cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${feat.gradient} border ${feat.border} group cursor-default overflow-hidden transition-all duration-300`}
              style={{ '--glow': feat.glow }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 30px ${feat.glow}` }} />

              {/* Icon */}
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: feat.iconBg, border: `1px solid ${feat.iconColor}40` }}
              >
                <Icon size={22} style={{ color: feat.iconColor }} />
              </motion.div>

              {/* Content */}
              <h3 className="font-space font-semibold text-white text-lg mb-2.5">{feat.title}</h3>
              <p className="text-slate-400 font-inter text-sm leading-relaxed">{feat.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${feat.iconColor}, transparent)` }} />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-slate-500 font-inter text-sm max-w-lg mx-auto">
          Designed to <span className="text-slate-300 font-medium">assist enforcement officers</span>, not replace them.
          The officer makes the final inspection decision with confidence.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Solution;
