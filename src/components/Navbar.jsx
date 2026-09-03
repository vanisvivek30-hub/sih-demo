import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scan, GitBranch, Link2 } from 'lucide-react';
import { projectData } from '../data/projectData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solution', href: '#solution' },
  { label: 'Demo', href: '#demo' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Technology', href: '#technology' },
  { label: 'Team', href: '#team' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass border-b border-white/[0.06]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)' }}>
              <Scan size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-space font-bold text-sm text-white block leading-none">
                LM<span className="text-cyan-400">CS</span>
              </span>
              <span className="text-[10px] text-slate-500 font-inter leading-none block">SIH 2026</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200 font-inter"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={projectData.githubUrl} target="_blank" rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all">
              <GitBranch size={18} />
            </a>
            <button
              onClick={() => handleNav('#demo')}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all font-space"
              style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)' }}
            >
              Watch Demo
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl glass text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[65px] left-0 right-0 z-40 glass border-b border-white/[0.06] px-4 py-4"
          >
            <div className="flex flex-col gap-1 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all font-inter text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-white/[0.06] mt-2 pt-3 flex gap-3">
                <a href={projectData.githubUrl} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-slate-300 text-sm font-medium">
                  <GitBranch size={16} /> GitHub
                </a>
                <button
                  onClick={() => handleNav('#demo')}
                  className="flex-1 py-2 rounded-xl text-sm font-semibold text-white font-space text-center"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)' }}
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
