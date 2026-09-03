import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Eye, Shield, Server, Database, BarChart2, FileText } from 'lucide-react';
import { techStackData } from '../data/techStackData';

const iconMap = { Monitor, Smartphone, Eye, Shield, Server, Database, BarChart2, FileText };

const TechStack = () => (
  <section id="technology" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
    <div className="absolute left-0 right-0 top-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)' }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="sih-badge mb-4 inline-block">Tech Stack</span>
        <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Built With <span className="gradient-text">Technology</span>
        </h2>
        <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto">
          A modern, purpose-built technology stack designed for field inspection use.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {techStackData.map((category, i) => {
          const Icon = iconMap[category.icon] || Monitor;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-5 rounded-2xl glass group cursor-default overflow-hidden relative"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={20} className="text-white" />
              </div>

              <h3 className="font-space font-bold text-white text-sm mb-3">{category.category}</h3>

              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <span className="text-xs font-medium text-slate-300 font-space">{item.name}</span>
                    <span className="text-[10px] text-slate-600 font-inter mt-0.5">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TechStack;
