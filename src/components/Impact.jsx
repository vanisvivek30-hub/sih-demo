import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Package, CheckCircle, TrendingUp, Clock, Shield } from 'lucide-react';
import { projectData } from '../data/projectData';

const iconMap = { Zap, Package, CheckCircle, TrendingUp, Clock, Shield };

const CountUp = ({ target, duration = 2 }) => {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    // Parse the numeric part
    const numMatch = target.match(/[\d.]+/);
    if (!numMatch) { setDisplay(target); return; }
    const num = parseFloat(numMatch[0]);
    const prefix = target.slice(0, numMatch.index);
    const suffix = target.slice(numMatch.index + numMatch[0].length);
    const isFloat = numMatch[0].includes('.');

    let start = 0;
    const steps = 60;
    const increment = num / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      start += increment;
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(target);
      } else {
        const val = isFloat ? start.toFixed(1) : Math.floor(start);
        setDisplay(`${prefix}${val}${suffix}`);
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{display}</span>;
};

const Impact = () => {
  const impacts = projectData.impact;

  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #6366f1, #06b6d4)' }} />
      </div>
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
          <span className="sih-badge mb-4 inline-block">Potential Impact</span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Beyond Scanning <span className="gradient-text">Products</span>
          </h2>
          <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto">
            The impact of making compliance inspection faster, smarter and more evidence-driven.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-14">
          {impacts.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', damping: 15 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="relative p-6 rounded-2xl glass text-center group overflow-hidden cursor-default"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ boxShadow: 'inset 0 0 40px rgba(99,102,241,0.1)' }} />

                <Icon size={22} className="text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-space font-bold text-3xl sm:text-4xl gradient-text mb-1.5">
                  <CountUp target={item.value} />
                </div>
                <p className="text-slate-400 font-inter text-sm">{item.label}</p>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(99,102,241,0.5),transparent)' }} />
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 text-sm font-inter max-w-lg mx-auto"
        >
          * Statistics are projected estimates for planning purposes. Update with real measured values after field deployment.
        </motion.p>
      </div>
    </section>
  );
};

export default Impact;
