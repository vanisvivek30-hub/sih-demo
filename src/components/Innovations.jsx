import React from 'react';
import { motion } from 'framer-motion';
import {
  Scan, Zap, Tag, CheckSquare, Shield, Layers, TrendingUp
} from 'lucide-react';
import { projectData } from '../data/projectData';

const iconMap = { Scan, Zap, Tag, CheckSquare, Shield, Layers, TrendingUp };

const Innovations = () => {
  const items = projectData.innovations;

  return (
    <section id="innovations" className="py-24 relative">
      <div className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="sih-badge mb-4 inline-block">Key Innovations</span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            What Makes Our Solution{' '}
            <span className="gradient-text">Different?</span>
          </h2>
          <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto">
            Beyond OCR — these are the innovations that make our prototype effective for
            real-world enforcement inspection.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-6 rounded-2xl glass group cursor-default overflow-hidden transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient} rounded-2xl`}
                  style={{ opacity: 0 }} />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.08 }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl`}
                />

                {/* Number */}
                <div className="absolute top-4 right-4 font-mono-code text-[10px] text-slate-700 font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-300`}
                  style={{ opacity: 0.9 }}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="font-space font-semibold text-white text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-400 font-inter text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r ${item.gradient}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Innovations;
