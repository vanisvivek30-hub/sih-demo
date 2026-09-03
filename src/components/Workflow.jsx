import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PlayCircle, Scan, Camera, Type, Search, CheckCircle,
  AlertOctagon, FileText, BarChart2
} from 'lucide-react';
import { projectData } from '../data/projectData';

const iconMap = {
  PlayCircle, Scan, Camera, Type, Search, CheckCircle,
  AlertOctagon, FileText, BarChart2,
};

const statusColors = [
  'bg-emerald-500',
  'bg-cyan-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-orange-500',
  'bg-blue-500',
  'bg-teal-500',
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(null);
  const steps = projectData.workflowSteps;

  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="sih-badge mb-4 inline-block">System Flow</span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            How the System <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto">
            An end-to-end automated inspection workflow — from scanning a product
            to generating a compliance report.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 10%, rgba(99,102,241,0.4) 90%, transparent)' }}>
            {/* Animated data pulse */}
            <motion.div
              className="absolute w-2 h-8 -left-0.5 rounded-full"
              style={{ background: 'linear-gradient(to bottom,transparent,#6366f1,transparent)' }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px md:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 10%, rgba(99,102,241,0.4) 90%, transparent)' }} />

          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] || CheckCircle;
              const isLeft = i % 2 === 0;
              const isActive = activeStep === step.id;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`relative flex items-center gap-4 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                    className={`flex-1 md:w-5/12 md:flex-none cursor-pointer ml-12 md:ml-0 ${
                      isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                    }`}
                  >
                    <div className={`p-5 rounded-2xl glass border transition-all duration-300 ${
                      isActive
                        ? 'border-indigo-500/60 glow-indigo'
                        : 'border-white/[0.08] hover:border-indigo-500/30'
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)' }}>
                          <Icon size={15} className="text-indigo-400" />
                        </div>
                        <span className="font-mono-code text-[10px] text-slate-600">
                          STEP {String(step.id).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-space font-semibold text-white mb-1.5">{step.title}</h3>
                      <p className="text-slate-400 font-inter text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className={`w-4 h-4 rounded-full border-2 border-slate-900 ${statusColors[i % statusColors.length]}`}
                      animate={isActive ? { scale: [1, 1.4, 1] } : {}}
                      transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <div className="px-6 py-3 rounded-2xl glass border border-emerald-500/30 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="font-space font-semibold text-emerald-400 text-sm">Inspection Complete — Dashboard Updated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
