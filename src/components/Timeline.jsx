import React from 'react';
import { motion } from 'framer-motion';
import {
  Target, BookOpen, Scale, AlertTriangle, Layers, Code2, TestTube, Trophy
} from 'lucide-react';
import { projectData } from '../data/projectData';

const iconMap = { Target, BookOpen, Scale, AlertTriangle, Layers, Code2, TestTube, Trophy };

const Timeline = () => {
  const steps = projectData.journey;

  return (
    <section id="journey" className="py-24 relative">
      <div className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="sih-badge mb-4 inline-block">Project Journey</span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto">
            From identifying the problem to presenting at SIH 2026 — here's how we got here.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-0.5 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 5%, rgba(99,102,241,0.4) 95%, transparent)' }}>
            <motion.div
              className="absolute w-3 h-12 -left-1 rounded-full"
              style={{ background: 'linear-gradient(to bottom,transparent,rgba(99,102,241,0.8),transparent)' }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] || Target;
              const isLeft = i % 2 === 0;
              const isLast = i === steps.length - 1;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`ml-12 sm:ml-0 flex-1 sm:w-5/12 sm:flex-none ${
                      isLeft ? 'sm:mr-auto sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                    }`}
                  >
                    <div className={`p-5 rounded-2xl glass group cursor-default transition-all duration-300 hover:border-indigo-500/30 ${
                      isLast ? 'border border-amber-500/40 glow-indigo' : 'border border-white/[0.07]'
                    }`}>
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                        <span className="font-mono-code text-[10px] text-slate-600 border border-white/10 rounded px-2 py-0.5">
                          {step.date}
                        </span>
                        {isLast && (
                          <span className="text-[10px] font-semibold text-amber-400 font-space px-2 py-0.5 rounded"
                            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}>
                            NOW
                          </span>
                        )}
                      </div>
                      <h3 className="font-space font-bold text-white mb-1.5">{step.title}</h3>
                      <p className="text-slate-400 font-inter text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Center icon */}
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 flex-shrink-0 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isLast
                          ? 'shadow-lg'
                          : ''
                      }`}
                      style={{
                        background: isLast
                          ? 'linear-gradient(135deg,#f59e0b,#ef4444)'
                          : 'linear-gradient(135deg,#6366f1,#06b6d4)',
                        boxShadow: isLast
                          ? '0 0 20px rgba(245,158,11,0.5)'
                          : '0 0 15px rgba(99,102,241,0.4)',
                      }}
                    >
                      <Icon size={16} className="text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
