import React from 'react';
import { motion } from 'framer-motion';
import { Link2, GitBranch, Mail, Crown, User } from 'lucide-react';
import { teamData } from '../data/teamData';
import { projectData } from '../data/projectData';

const avatarGradients = [
  'from-indigo-500 to-violet-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-rose-500 to-pink-600',
  'from-violet-500 to-purple-600',
];

const TeamCard = ({ member, index }) => {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative p-6 rounded-2xl glass group cursor-default overflow-hidden transition-all duration-300 ${
        member.isLead
          ? 'border border-amber-500/40'
          : 'border border-white/[0.07] hover:border-indigo-500/30'
      }`}
    >
      {/* Lead glow */}
      {member.isLead && (
        <div className="absolute inset-0 opacity-5 rounded-2xl"
          style={{ background: 'linear-gradient(135deg,#f59e0b,#6366f1)' }} />
      )}

      {/* Top badge */}
      {member.isLead && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-amber-300"
          style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)' }}>
          <Crown size={11} fill="#fbbf24" />
          Team Lead
        </div>
      )}

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-16 h-16 rounded-2xl object-cover"
            />
          ) : (
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} group-hover:scale-105 transition-transform duration-300`}>
              <span className="font-space font-bold text-xl text-white">{initials}</span>
            </div>
          )}
          {member.isLead && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#f59e0b,#ef4444)' }}>
              <Crown size={10} fill="white" className="text-white" />
            </div>
          )}
        </div>
        <div>
          <h3 className="font-space font-bold text-white leading-tight">{member.name}</h3>
          <p className="text-sm text-indigo-300 font-inter mt-0.5">{member.role}</p>
        </div>
      </div>

      {/* Contribution */}
      <p className="text-slate-400 font-inter text-sm leading-relaxed mb-4">
        {member.contribution}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {member.skills.map((skill) => (
          <span key={skill} className="px-2.5 py-1 rounded-full text-[10px] font-medium text-slate-400 glass border border-white/[0.08] font-inter">
            {skill}
          </span>
        ))}
      </div>

      {/* Social links */}
      <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
        <a href={member.linkedin} target="_blank" rel="noreferrer"
          className="p-2 rounded-lg glass border border-white/[0.06] text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all">
          <Link2 size={15} />
        </a>
        <a href={member.github} target="_blank" rel="noreferrer"
          className="p-2 rounded-lg glass border border-white/[0.06] text-slate-500 hover:text-white hover:border-white/20 transition-all">
          <GitBranch size={15} />
        </a>
        <a href={`mailto:${member.email}`}
          className="p-2 rounded-lg glass border border-white/[0.06] text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
          <Mail size={15} />
        </a>
      </div>
    </motion.div>
  );
};

const Team = () => (
  <section id="team" className="py-24 relative">
    <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
    <div className="absolute left-0 right-0 top-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)' }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="sih-badge mb-4 inline-block">The Builders</span>
        <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Meet <span className="gradient-text">{projectData.teamName}</span>
        </h2>
        <p className="text-slate-400 font-inter text-lg max-w-xl mx-auto">
          Six passionate engineers and researchers building technology that matters.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((member, i) => (
          <TeamCard key={member.id} member={member} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
