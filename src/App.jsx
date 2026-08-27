import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchPillars from './components/ResearchPillars';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Awards from './components/Awards';
import MediaTalks from './components/MediaTalks';
import CVModal from './components/CVModal';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('about');
  const [isCVOpen, setIsCVOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="site-wrapper">
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        onToggleTheme={toggleTheme}
        onOpenCV={() => setIsCVOpen(true)}
      />

      <main>
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <ResearchPillars />
        <Publications />
        <Experience />
        <Awards />
        <MediaTalks />
      </main>

      <Footer onOpenCV={() => setIsCVOpen(true)} />

      <CVModal 
        isOpen={isCVOpen} 
        onClose={() => setIsCVOpen(false)} 
      />
    </div>
  );
}
