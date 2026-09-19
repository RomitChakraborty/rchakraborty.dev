import React, { useState, useEffect } from 'react';
import { publishedPapers } from '../data/publishedPapers';

export default function Publications({ selectedDomain, onDomainChange }) {
  const [filter, setFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [openBibtexId, setOpenBibtexId] = useState(null);

  useEffect(() => {
    if (selectedDomain) {
      setFilter(selectedDomain);
    }
  }, [selectedDomain]);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.__scite && typeof window.__scite.insertBadges === 'function') {
        window.__scite.insertBadges();
      }
    } catch {
      // Graceful fallback if scite is offline or blocked
    }
  }, [filter]);

  const handleFilterSelect = (newFilter) => {
    setFilter(newFilter);
    if (onDomainChange) {
      onDomainChange(newFilter);
    }
  };

  const handleCopyBibtex = (item) => {
    navigator.clipboard.writeText(item.bibtex);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleBibtex = (id) => {
    setOpenBibtexId(openBibtexId === id ? null : id);
  };

  const filteredPubs = publishedPapers.filter(pub => {
    if (filter === 'all') return true;
    if (filter === 'qbe') return pub.domain === 'qbe';
    if (filter === 'mof') return pub.domain === 'mof';
    if (filter === 'pauli') return pub.domain === 'pauli';
    return true;
  });

  return (
    <section id="publications" className="section-wrapper">
      <div className="academic-container">
        <div className="section-header">
          <h2 className="section-title">Published Articles & Preprints</h2>
          <p className="section-subtitle">
            Peer-Reviewed Literature and Indexed Scholarly Works
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="pub-domain-filters">
          <button 
            className={`pub-domain-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterSelect('all')}
          >
            All Papers ({publishedPapers.length})
          </button>
          <button 
            className={`pub-domain-btn ${filter === 'qbe' ? 'active' : ''}`}
            onClick={() => handleFilterSelect('qbe')}
          >
            Quantum Boltzmann Solvers ({publishedPapers.filter(p => p.domain === 'qbe').length})
          </button>
          <button 
            className={`pub-domain-btn ${filter === 'mof' ? 'active' : ''}`}
            onClick={() => handleFilterSelect('mof')}
          >
            MOF Chemistry & EDA ({publishedPapers.filter(p => p.domain === 'mof').length})
          </button>
          <button 
            className={`pub-domain-btn ${filter === 'pauli' ? 'active' : ''}`}
            onClick={() => handleFilterSelect('pauli')}
          >
            Generalized Pauli Conditions ({publishedPapers.filter(p => p.domain === 'pauli').length})
          </button>
        </div>

        {/* Publications List */}
        <div className="paper-list">
          {filteredPubs.map((paper, index) => {
            const authorParts = paper.authors.split(/(Chakraborty,\s*R\.?|Chakraborty\s*R\.?)/g);

            return (
              <article key={paper.id} className="paper-item">
                <div className="paper-number">[{index + 1}]</div>

                <div className="paper-body">
                  <h3 className="paper-title">
                    <a 
                      href={paper.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="paper-link"
                    >
                      {paper.title} <span className="ext-arrow">↗</span>
                    </a>
                  </h3>

                  <div className="paper-authors">
                    {authorParts.map((part, i) => 
                      part.includes('Chakraborty') ? (
                        <span key={i} className="author-highlight">{part}</span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </div>

                  <div className="paper-journal">
                    <em>{paper.journal}</em> ({paper.year})
                    {paper.isHotArticle && <span className="hot-tag">Hot Article</span>}
                    {paper.domain === 'qbe' && <span className="domain-tag qbe-tag">Quantum Boltzmann</span>}
                    {paper.domain === 'mof' && <span className="domain-tag mof-tag">MOF & ALMO-EDA</span>}
                    {paper.domain === 'pauli' && <span className="domain-tag pauli-tag">Pauli Constraints</span>}
                  </div>

                  <p className="paper-summary">
                    {paper.summary}
                  </p>

                  <div className="paper-actions">
                    <a 
                      href={paper.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="paper-action-link"
                    >
                      {paper.url.includes('arxiv.org') ? 'arXiv:2608.14979' : `DOI: ${paper.doi}`} <span className="ext-arrow">↗</span>
                    </a>

                    {paper.url.includes('arxiv.org') && (
                      <a 
                        href={`https://doi.org/${paper.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="paper-action-link doi-badge-link"
                        title="Official Registered DOI via DataCite/arXiv"
                      >
                        DOI: {paper.doi} <span className="ext-arrow">↗</span>
                      </a>
                    )}

                    {paper.doi && (
                      <a 
                        href={`https://scite.ai/reports/${paper.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="paper-action-link scite-badge-link"
                        title="View Smart Citations on scite.ai"
                      >
                        scite Smart Citations <span className="ext-arrow">↗</span>
                      </a>
                    )}

                    <div 
                      className="scite-badge" 
                      data-doi={paper.doi} 
                      data-layout="horizontal" 
                      data-show-zero="false" 
                      data-small="true"
                    />

                    <button 
                      onClick={() => toggleBibtex(paper.id)}
                      className={`paper-action-btn ${openBibtexId === paper.id ? 'active' : ''}`}
                    >
                      {openBibtexId === paper.id ? 'Hide BibTeX' : 'BibTeX'}
                    </button>

                    <button 
                      onClick={() => handleCopyBibtex(paper)}
                      className={`paper-action-btn copy-btn ${copiedId === paper.id ? 'copied' : ''}`}
                    >
                      {copiedId === paper.id ? (
                        <span className="copied-label">
                          <svg className="action-check-icon" viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                          </svg>
                          Copied Citation
                        </span>
                      ) : (
                        'Copy Citation'
                      )}
                    </button>
                  </div>

                  {openBibtexId === paper.id && (
                    <pre className="bibtex-drawer">
                      <code>{paper.bibtex}</code>
                    </pre>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
