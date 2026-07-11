import { useRef, memo } from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  CheckCircle2,
  Layers,
  Server,
} from 'lucide-react'

import { DATA } from '../data'

const proofIcons = {
  'Founder & CEO': Building2,
  'Production SaaS System': CheckCircle2,
  'Active Product Initiatives': Layers,
  'Primary Engineering Focus': Server,
  'Primary Focus': Server,
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.48,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const ProofItem = memo(function ProofItem({ value, label, index }) {
  const Icon = proofIcons[label] || CheckCircle2

  return (
    <motion.div
      className="proof-item"
      variants={itemVariants}
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      transition={{
        duration: 0.24,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        '--proof-delay': `${index * 0.08}s`,
      }}
    >
      <span className="proof-icon">
        <Icon size={17} strokeWidth={2.35} />
      </span>

      <span className="proof-copy">
        <strong>{value}</strong>
        <small>{label}</small>
      </span>
    </motion.div>
  )
})

export default function ProofBar() {
  return (
    <section className="proofbar-section" aria-label="Professional highlights">
      <motion.div
        className="proofbar-inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.35,
        }}
      >
        <div className="proofbar-label">
          <span className="proofbar-kicker">At a glance</span>
          <span className="proofbar-line" aria-hidden="true" />
        </div>

        <div className="proofbar-grid">
          {DATA.proofBar.map((item, index) => (
            <ProofItem
              key={`${item.value}-${item.label}`}
              value={item.value}
              label={item.label}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <style>{`
        .proofbar-section {
          position: relative;
          z-index: 10;
          padding: 4rem var(--section-px);
          isolation: isolate;
        }

        .proofbar-section::before {
          content: '';
          position: absolute;
          inset: 50% 0 auto;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(200, 154, 24, 0.20),
            rgba(200, 154, 24, 0.15),
            rgba(200, 154, 24, 0.10),
            transparent
          );
          z-index: -1;
        }

        .proofbar-inner {
          position: relative;
          width: min(100%, var(--container));
          margin: 0 auto;
          display: flex;
          align-items: stretch;
          background: rgba(7, 7, 11, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transform: translateZ(0);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 1.25rem;
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .proofbar-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(200, 154, 24, 0.03), transparent 40%);
        }

        .proofbar-inner::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--gold);
        }

        .proofbar-label {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          padding: 1.5rem 2.25rem;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.015);
        }

        .proofbar-kicker {
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 750;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .proofbar-line {
          display: none;
        }

        .proofbar-grid {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 1.5rem;
          padding: 1.25rem 2rem;
        }

        .proof-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.1rem;
          min-width: 0;
          padding: 0.5rem;
          border-radius: 0.85rem;
          cursor: default;
        }

        .proof-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.6rem;
          height: 2.6rem;
          flex: 0 0 auto;
          color: var(--gold);
          background: rgba(200, 154, 24, 0.06);
          border: 1px solid rgba(200, 154, 24, 0.15);
          border-radius: 0.65rem;
          box-shadow: 0 0 12px rgba(200, 154, 24, 0.08);
          transition: transform 250ms var(--ease-out), box-shadow 250ms var(--ease-out);
        }

        .proof-item:hover .proof-icon {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(200, 154, 24, 0.2);
          border-color: rgba(200, 154, 24, 0.3);
        }

        .proof-copy {
          display: grid;
          gap: 0.2rem;
          min-width: 0;
        }

        .proof-copy strong {
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .proof-copy small {
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 600;
          line-height: 1.2;
        }

        @media (max-width: 1100px) {
          .proofbar-inner {
            flex-direction: column;
            align-items: stretch;
          }

          .proofbar-label {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            justify-content: center;
            padding: 1.25rem;
          }

          .proofbar-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            padding: 1.75rem;
          }
        }

        @media (max-width: 600px) {
          .proofbar-section {
            padding: 3rem 1rem;
          }
          .proofbar-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding: 1.25rem;
          }
          .proof-copy strong {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}