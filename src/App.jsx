import React from 'react';
import AnimatedBackground from './components/ui/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import DemoSection from './components/DemoSection';
import Gallery from './components/Gallery';
import Workflow from './components/Workflow';
import Innovations from './components/Innovations';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Impact from './components/Impact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050510] text-white overflow-x-hidden">
      {/* Global animated particle background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        {/* Section 1 — Hero */}
        <Hero />

        {/* Section divider */}
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)' }} />

        {/* Section 2 — Problem */}
        <Problem />

        {/* Section 3 — Solution */}
        <Solution />

        {/* Section 4 — Demo Videos */}
        <DemoSection />

        {/* Section 5 — Gallery */}
        <Gallery />

        {/* Section 6 — How it Works */}
        <Workflow />

        {/* Section 7 — Innovations */}
        <Innovations />

        {/* Section 8 — Tech Stack */}
        <TechStack />

        {/* Section 9 — Project Journey */}
        <Timeline />

        {/* Section 10 — Team */}
        <Team />

        {/* Section 11 — Impact */}
        <Impact />

        {/* Section 12 — CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile floating quick-nav */}
      <MobileQuickNav />
    </div>
  );
}

// Floating mobile quick-navigation pill
const MobileQuickNav = () => {
  const [open, setOpen] = React.useState(false);
  const sections = [
    { label: '🏠', id: 'home', title: 'Home' },
    { label: '🎯', id: 'solution', title: 'Solution' },
    { label: '▶️', id: 'demo', title: 'Demo' },
    { label: '🖼️', id: 'gallery', title: 'Gallery' },
    { label: '⚙️', id: 'technology', title: 'Tech' },
    { label: '👥', id: 'team', title: 'Team' },
  ];

  return (
    <div className="md:hidden fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2">
      {/* Quick links */}
      {open && (
        <div className="flex flex-col items-end gap-2 mb-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl glass border border-white/10 text-sm font-space text-white hover:bg-white/10 transition-all"
            >
              <span className="text-base">{s.label}</span>
              <span className="text-xs text-slate-400">{s.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300"
        style={{
          background: open
            ? 'rgba(99,102,241,0.4)'
            : 'linear-gradient(135deg,#6366f1,#06b6d4)',
          boxShadow: '0 0 20px rgba(99,102,241,0.5)',
          backdropFilter: 'blur(10px)',
        }}
        aria-label="Quick navigation"
      >
        {open ? '✕' : '≡'}
      </button>
    </div>
  );
};

export default App;
