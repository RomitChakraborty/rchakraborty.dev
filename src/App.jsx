import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedPillarId, setSelectedPillarId] = useState(null);

  return (
    <div className="site-wrapper">
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      <main>
        <Hero onSelectPillar={(pillarId) => setSelectedPillarId(pillarId)} />
        <Research 
          selectedPillarId={selectedPillarId}
          onSelectDomain={(domain) => setSelectedDomain(domain)} 
        />
        <Publications 
          selectedDomain={selectedDomain} 
          onDomainChange={(domain) => setSelectedDomain(domain)} 
        />
      </main>

      <Footer onOpenCV={() => setIsCVOpen(true)} />

      <CVModal 
        isOpen={isCVOpen} 
        onClose={() => setIsCVOpen(false)} 
      />
    </div>
  );
}
