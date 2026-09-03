import React from 'react';
import { motion } from 'framer-motion';
import { Scan, GitBranch, Link2, Mail, ExternalLink } from 'lucide-react';
import { projectData } from '../data/projectData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solution', href: '#solution' },
  { label: 'Demo', href: '#demo' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Technology', href: '#technology' },
  { label: 'Team', href: '#team' },
];

const Footer = () => {
  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/[0.06]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(99,102,241,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#6366f1,#06b6d4)' }}>
                <Scan size={20} className="text-white" />
              </div>
              <div>
                <p className="font-space font-bold text-white leading-tight">
                  Legal Metrology<br />Compliance Scanner
                </p>
              </div>
            </div>
            <p className="text-slate-500 font-inter text-sm leading-relaxed mb-4">
              A technology-based inspection support system for enforcement officers.
              Built for Smart India Hackathon 2026.
            </p>
            <div className="flex items-center gap-3">
              <span className="sih-badge text-xs">SIH {projectData.sihYear}</span>
              <span className="text-xs text-slate-600 font-mono-code">PS #{projectData.problemStatementId}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 hover:text-white font-inter text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-space font-semibold text-white mb-5">Connect</h4>
            <div className="space-y-3">
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-500 hover:text-white font-inter text-sm transition-colors group"
              >
                <GitBranch size={16} className="group-hover:scale-110 transition-transform" />
                GitHub Repository
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={projectData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-500 hover:text-blue-400 font-inter text-sm transition-colors group"
              >
                <Link2 size={16} className="group-hover:scale-110 transition-transform" />
                LinkedIn
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`mailto:${projectData.contactEmail}`}
                className="flex items-center gap-3 text-slate-500 hover:text-emerald-400 font-inter text-sm transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                {projectData.contactEmail}
              </a>
            </div>

            {/* Team name */}
            <div className="mt-6 p-4 rounded-xl glass border border-white/[0.07]">
              <p className="text-xs text-slate-600 font-inter mb-1">Built by</p>
              <p className="font-space font-bold text-white">{projectData.teamName}</p>
              <p className="text-xs text-slate-600 font-inter mt-0.5">Smart India Hackathon {projectData.sihYear}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 font-inter text-sm text-center sm:text-left">
            Built with innovation for Smart India Hackathon {projectData.sihYear}.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
            <span className="text-xs text-slate-600 font-inter">Live Prototype Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
