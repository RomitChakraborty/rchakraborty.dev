import React, { useState } from 'react';
import { publishedPapers } from '../data/publishedPapers';

export default function Research() {
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

  return (
    <section id="research" className="section-wrapper">
      <div className="academic-container">
        <div className="section-header">
          <h2 className="section-title">Research & Publications</h2>
          <p className="section-subtitle">
            Published Articles & Theoretical Methodologies (Indexed on Google Scholar)
          </p>
        </div>

        <div className="paper-list">
          {publishedPapers.map((paper, index) => {
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
                      {paper.title} ↗
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
                      DOI: {paper.doi} ↗
                    </a>

                    <button 
                      onClick={() => toggleBibtex(paper.id)}
                      className="paper-action-btn"
                    >
                      {openBibtexId === paper.id ? 'Hide BibTeX' : 'BibTeX'}
                    </button>

                    <button 
                      onClick={() => handleCopyBibtex(paper)}
                      className="paper-action-btn"
                    >
                      {copiedId === paper.id ? '✓ Copied Citation' : 'Copy Citation'}
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
