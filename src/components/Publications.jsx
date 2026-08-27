import React, { useState } from 'react';
import { publicationsData } from '../data/publications';

export default function Publications() {
  const [filter, setFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [openBibtexId, setOpenBibtexId] = useState(null);

  const handleCopyBibtex = (item) => {
    navigator.clipboard.writeText(item.bibtex);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleBibtex = (id) => {
    setOpenBibtexId(openBibtexId === id ? null : id);
  };

  const filteredPubs = publicationsData.filter(pub => {
    if (filter === 'all') return true;
    if (filter === 'submitted') return pub.category === 'submitted';
    if (filter === 'in-print') return pub.category === 'in-print';
    if (filter === 'hot') return pub.isHotArticle;
    return true;
  });

  return (
    <section id="publications" className="section-wrapper">
      <div className="academic-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Publications & Manuscripts</h2>
            <p className="section-subtitle">Peer-Reviewed Articles, Preprints, and Computational Methodologies</p>
          </div>
        </div>

        {/* Clean Filter Pills */}
        <div className="pub-filters">
          <button 
            className={`pub-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Publications ({publicationsData.length})
          </button>
          <button 
            className={`pub-filter-btn ${filter === 'in-print' ? 'active' : ''}`}
            onClick={() => setFilter('in-print')}
          >
            In Print & Peer-Reviewed ({publicationsData.filter(p => p.category === 'in-print').length})
          </button>
          <button 
            className={`pub-filter-btn ${filter === 'submitted' ? 'active' : ''}`}
            onClick={() => setFilter('submitted')}
          >
            In Preparation & Preprints ({publicationsData.filter(p => p.category === 'submitted').length})
          </button>
          <button 
            className={`pub-filter-btn ${filter === 'hot' ? 'active' : ''}`}
            onClick={() => setFilter('hot')}
          >
            🔥 PCCP Hot Article
          </button>
        </div>

        {/* Publication Entries */}
        <div className="pub-list">
          {filteredPubs.map((pub) => {
            const authorParts = pub.authors.split(/(Chakraborty,\s*R\.?|Chakraborty\s*R\.?)/g);

            return (
              <div key={pub.id} className="pub-item">
                <div className="pub-meta">
                  <span className={`pub-category-badge ${pub.isHotArticle ? 'pub-hot-badge' : ''}`}>
                    {pub.isHotArticle ? '🔥 Hot Article' : (pub.category === 'submitted' ? 'Preprint / In Prep' : 'Peer-Reviewed')}
                  </span>
                  <span className="pub-year-tag">{pub.year}</span>
                </div>

                <h3 className="pub-title">
                  {pub.doi ? (
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="pub-title-link">
                      {pub.title} ↗
                    </a>
                  ) : pub.arxiv ? (
                    <a href={`https://arxiv.org/abs/${pub.arxiv}`} target="_blank" rel="noopener noreferrer" className="pub-title-link">
                      {pub.title} ↗
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>

                <div className="pub-authors">
                  {authorParts.map((part, i) => 
                    part.includes('Chakraborty') ? (
                      <span key={i} className="author-highlight">{part}</span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </div>

                <div className="pub-journal">{pub.journal}</div>

                {pub.abstract && (
                  <p className="pub-abstract">
                    {pub.abstract}
                  </p>
                )}

                <div className="pub-actions">
                  {pub.doi && (
                    <a 
                      href={`https://doi.org/${pub.doi}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pub-action-btn"
                    >
                      🔗 DOI: {pub.doi} ↗
                    </a>
                  )}

                  {pub.arxiv && (
                    <a 
                      href={`https://arxiv.org/abs/${pub.arxiv}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pub-action-btn"
                    >
                      📄 arXiv:{pub.arxiv} ↗
                    </a>
                  )}

                  <button 
                    onClick={() => toggleBibtex(pub.id)}
                    className="pub-action-btn"
                  >
                    {openBibtexId === pub.id ? '▲ Close BibTeX' : '▼ BibTeX'}
                  </button>

                  <button 
                    onClick={() => handleCopyBibtex(pub)}
                    className="pub-action-btn"
                  >
                    {copiedId === pub.id ? '✓ Copied!' : '📋 Copy Citation'}
                  </button>
                </div>

                {openBibtexId === pub.id && (
                  <pre className="bibtex-box">
                    <code>{pub.bibtex}</code>
                  </pre>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
