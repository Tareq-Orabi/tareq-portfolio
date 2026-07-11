import { motion } from 'framer-motion'
import { Building2, HeartPulse, Shield, Brain, Stethoscope } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { ExperienceCanvas } from './SectionCanvas'
import { DATA } from '../data'

const iconMap = {
  Building2,
  HeartPulse,
  Shield,
  Brain,
  Stethoscope,
}

export default function Experience() {
  return (
    <section className="section experience-section readability-mask" style={{ position: 'relative', overflow: 'hidden' }} data-cosmic-scene="constellation">

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            overline="Experience"
            title="My engineering timeline"
          />
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-track" aria-hidden="true" />

          <div className="timeline-items">
            {DATA.experience.map((item, index) => {
              const Icon = iconMap[item.icon] || Building2

              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="timeline-item"
                >
                  <div
                    className="timeline-marker"
                    style={{ '--marker-accent': item.accent, '--node-index': index }}
                  >
                    <div className="marker-core">
                      <Icon size={16} strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-role">{item.role}</h3>
                        <p className="timeline-company">{item.company}</p>
                      </div>
                      <div className="timeline-period">
                        {item.period}
                      </div>
                    </div>

                    <ul className="timeline-points">
                      {item.points.map((point, i) => (
                        <li key={`${item.company}-${i}`}>
                          <strong>{point.label}:</strong>{' '}{point.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding-top: 1rem;
        }

        .timeline-track {
          position: absolute;
          top: 1rem;
          bottom: 2rem;
          left: 23px;
          width: 2px;
          background: linear-gradient(to bottom, rgba(200, 154, 24, 0.30), rgba(200, 154, 24, 0.12), transparent);
          z-index: 0;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .timeline-item {
          position: relative;
          display: flex;
          gap: 2rem;
          z-index: 1;
        }

        .timeline-marker {
          position: relative;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(3, 3, 5, 0.95);
          border: 1px solid rgba(7, 7, 11, 0.1);
          display: grid;
          place-items: center;
          color: var(--marker-accent);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .timeline-marker::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: var(--marker-accent);
          opacity: 0.15;
          filter: blur(8px);
        }

        .marker-core {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
          border: 1px solid rgba(7, 7, 11, 0.1);
        }

        .timeline-content {
          flex-grow: 1;
          padding-top: 0.5rem;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .timeline-role {
          margin: 0 0 0.25rem 0;
          font-family: var(--font-display, inherit);
          font-size: clamp(1.15rem, 1.8vw, 1.35rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .timeline-company {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--blue-strong);
        }

        .timeline-period {
          flex-shrink: 0;
          font-size: 0.75rem;
          font-weight: 750;
          color: var(--text-muted);
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(7, 7, 11, 0.1);
          letter-spacing: 0.02em;
        }

        .timeline-points {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .timeline-points li {
          position: relative;
          padding-left: 1.25rem;
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .timeline-points li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--blue-strong);
          opacity: 0.5;
        }

        .timeline-points li strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .timeline-track {
            left: 20px;
          }

          .timeline-item {
            gap: 1.25rem;
          }

          .timeline-marker {
            width: 42px;
            height: 42px;
          }
          
          .marker-core {
            width: 30px;
            height: 30px;
          }
          
          .marker-core svg {
            width: 14px;
            height: 14px;
          }

          .timeline-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .timeline-period {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  )
}