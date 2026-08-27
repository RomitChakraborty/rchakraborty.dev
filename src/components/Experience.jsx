import React from 'react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="academic-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Professional Experience & Appointments</h2>
            <p className="section-subtitle">Venture Leadership, Industrial R&D, and Academic Appointments</p>
          </div>
        </div>

        <div className="timeline-list">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <div className="timeline-org">{exp.organization} &bull; {exp.location}</div>

              <ul className="timeline-highlights">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
