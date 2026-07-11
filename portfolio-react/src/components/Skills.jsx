import { memo, useDeferredValue, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Server,
  Database,
  Cloud,
  Monitor,
  Compass,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
} from 'lucide-react'

import { DATA } from '../data'
import SectionHeader from './SectionHeader'
import { SkillsCanvas } from './SectionCanvas'

const ICON_MAP = {
  Server,
  Database,
  Cloud,
  Monitor,
  Compass,
  Layers,
  Cpu,
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
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

const StackCategoryCard = memo(function StackCategoryCard({
  skill,
  index,
  isActive,
  setSelectedIndex,
}) {
  const Icon = ICON_MAP[skill.icon] || Server

  return (
    <motion.button
      type="button"
      className={`stack-category-card ${isActive ? 'active' : ''}`}
      onClick={() => setSelectedIndex(index)}
      variants={itemVariants}
      style={{
        '--stack-accent': skill.accent,
        '--stack-index': index,
      }}
    >
      <span className="stack-category-icon">
        <Icon size={20} strokeWidth={2.2} />
      </span>

      <span className="stack-category-copy">
        <strong>{skill.category}</strong>
        <small>{skill.items.length} focused skills</small>
      </span>

      <span className="stack-category-arrow">
        <ArrowRight size={15} strokeWidth={2.4} />
      </span>
    </motion.button>
  )
})

const StackDetailPanel = memo(function StackDetailPanel({ skill }) {
  const Icon = ICON_MAP[skill.icon] || Server

  return (
    <motion.article
      key={skill.category}
      className="stack-detail-panel"
      initial={{
        opacity: 0,
        x: 16,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        '--stack-accent': skill.accent,
      }}
    >
      <div className="stack-detail-bg" aria-hidden="true" />

      <div className="stack-detail-header">
        <span className="stack-detail-icon">
          <Icon size={28} strokeWidth={2.1} />
        </span>

        <div>
          <p className="label text-muted">Selected Stack</p>
          <h3>{skill.category}</h3>
        </div>
      </div>

      <div className="stack-detail-description">
        <p>
          This category represents the practical tools and concepts I use to
          build, structure, deploy, and manage real software products.
        </p>
      </div>

      <div className="stack-skill-grid">
        {skill.items.map((item) => (
          <span
            key={item}
            className="stack-skill-pill"
          >
            <CheckCircle2 size={14} strokeWidth={2.35} />
            {item}
          </span>
        ))}
      </div>

      <div className="stack-detail-footer">
        <span className="code-block">focus::{skill.category.toLowerCase().replaceAll(' ', '_')}</span>
        <span className="stack-detail-line" />
      </div>
    </motion.article>
  )
})

const StackOrbit = memo(function StackOrbit({ selectedSkill }) {
  const Icon = ICON_MAP[selectedSkill.icon] || Server

  return (
    <div
      className="stack-orbit"
      style={{
        '--stack-accent': selectedSkill.accent,
      }}
      aria-hidden="true"
    >
      <div className="stack-orbit-ring stack-orbit-ring-one" />
      <div className="stack-orbit-ring stack-orbit-ring-two" />
      <div className="stack-orbit-core">
        <Icon size={34} strokeWidth={2} />
      </div>

      <span className="stack-orbit-node node-one" />
      <span className="stack-orbit-node node-two" />
      <span className="stack-orbit-node node-three" />
      <span className="stack-orbit-node node-four" />
    </div>
  )
})

export default function Skills() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const deferredSelectedIndex = useDeferredValue(selectedIndex)
  const selectedSkill = DATA.skills[deferredSelectedIndex] || DATA.skills[0]

  return (
    <section className="section readability-mask skills-section" data-cosmic-scene="starfield">


      <div className="section-inner skills-inner">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SectionHeader
            overline="Skills"
            title="Technologies I use across my work"
            subtitle="A practical stack I use for backend development, databases, deployment, and product-oriented engineering."
          />
        </motion.div>

        <div className="skills-layout">
          <motion.div
            className="stack-categories"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            {DATA.skills.map((skill, index) => (
              <StackCategoryCard
                key={skill.category}
                skill={skill}
                index={index}
                isActive={selectedIndex === index}
                setSelectedIndex={setSelectedIndex}
              />
            ))}
          </motion.div>

          <div className="stack-showcase">
            <StackOrbit selectedSkill={selectedSkill} />
            <StackDetailPanel skill={selectedSkill} />
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .skills-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .skills-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 7, 11, 1) 80%);
        }

        .skills-inner {
          position: relative;
          z-index: 2;
        }

        .skills-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .skills-blob-blue-wrapper {
          width: 7.5rem;
          height: 7.5rem;
          top: 1.75rem;
          left: -2.75rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .skills-blob-lavender-wrapper {
          width: 7rem;
          height: 7rem;
          right: -2.5rem;
          bottom: 0.75rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .skills-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(17.5px);
          opacity: 0.6;
          animation: blob-float 15s ease-in-out infinite;
          transform: translateZ(0);
        }

        .skills-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.15), transparent 68%);
        }

        .skills-blob-lavender {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.12), transparent 68%);
          animation-delay: -5s;
        }

        .skills-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(rgba(200, 154, 24, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 154, 24, 0.08) 1px, transparent 1px);
          background-size: 4.25rem 4.25rem;
        }

        .skills-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(360px, 1.05fr);
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: stretch;
        }

        .stack-categories {
          display: grid;
          gap: 0.85rem;
          align-content: start;
        }

        .stack-category-card {
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 0.85rem;
          width: 100%;
          min-height: 5.2rem;
          padding: 0.95rem 1rem;
          text-align: left;
          color: var(--text-primary);
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.25rem;
          box-shadow:
            0 12px 38px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
          cursor: pointer;
          transition:
            border-color 200ms ease-out,
            box-shadow 200ms ease-out,
            transform 200ms ease-out;
          will-change: transform;
        }

        .stack-category-card:hover {
          transform: translateY(-4px);
        }

        .stack-category-card:active {
          transform: translateY(-1px);
        }

        .stack-category-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 8% 12%,
              color-mix(in srgb, var(--stack-accent) 15%, transparent),
              transparent 34%
            );
          opacity: 0;
          transition: opacity 240ms var(--ease-out);
          pointer-events: none;
        }

        .stack-category-card::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0.85rem;
          bottom: 0.85rem;
          width: 3px;
          border-radius: var(--radius-pill);
          background: var(--stack-accent);
          opacity: 0;
          transition: opacity 240ms var(--ease-out);
        }

        .stack-category-card:hover,
        .stack-category-card.active {
          border-color: color-mix(in srgb, var(--stack-accent) 44%, transparent);
          box-shadow:
            0 20px 58px rgba(0, 0, 0, 0.4),
            0 14px 44px color-mix(in srgb, var(--stack-accent) 15%, transparent);
        }

        .stack-category-card:hover::before,
        .stack-category-card.active::before,
        .stack-category-card.active::after {
          opacity: 1;
        }

        .stack-category-icon {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.85rem;
          height: 2.85rem;
          flex: 0 0 auto;
          color: var(--stack-accent);
          background: color-mix(in srgb, var(--stack-accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 26%, transparent);
          border-radius: 1rem;
          box-shadow: 0 10px 28px color-mix(in srgb, var(--stack-accent) 12%, transparent);
        }

        .stack-category-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.18rem;
          min-width: 0;
        }

        .stack-category-copy strong {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.2;
        }

        .stack-category-copy small {
          color: var(--text-muted);
          font-size: 0.74rem;
          font-weight: 650;
          line-height: 1.25;
        }

        .stack-category-arrow {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          color: var(--stack-accent);
          background: color-mix(in srgb, var(--stack-accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 22%, transparent);
          border-radius: 0.8rem;
          opacity: 0.75;
          transition:
            transform 240ms var(--ease-spring),
            opacity 240ms var(--ease-out);
        }

        .stack-category-card:hover .stack-category-arrow,
        .stack-category-card.active .stack-category-arrow {
          transform: translateX(4px);
          opacity: 1;
        }

        .stack-showcase {
          position: relative;
          display: grid;
          min-height: 35rem;
          align-items: stretch;
        }

        .stack-detail-panel {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
          min-height: 35rem;
          padding: clamp(1.3rem, 3vw, 2rem);
          background: rgba(7, 7, 11, 0.85);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 28%, transparent);
          border-radius: var(--radius-2xl);
          box-shadow:
            0 26px 78px rgba(0, 0, 0, 0.5),
            0 18px 60px color-mix(in srgb, var(--stack-accent) 14%, transparent),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          overflow: hidden;
        }

        .stack-detail-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 18% 12%,
              color-mix(in srgb, var(--stack-accent) 15%, transparent),
              transparent 34%
            ),
            radial-gradient(
              circle at 92% 72%,
              color-mix(in srgb, var(--stack-accent) 10%, transparent),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.03),
              transparent 38%
            );
          opacity: 0.88;
        }

        .stack-detail-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stack-detail-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 4.25rem;
          height: 4.25rem;
          flex: 0 0 auto;
          color: var(--stack-accent);
          background: color-mix(in srgb, var(--stack-accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 28%, transparent);
          border-radius: 1.35rem;
          box-shadow: 0 16px 42px color-mix(in srgb, var(--stack-accent) 16%, transparent);
        }

        .stack-detail-header h3 {
          margin-top: 0.35rem;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.15rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .stack-detail-description {
          position: relative;
          z-index: 2;
          max-width: 38rem;
        }

        .stack-detail-description p {
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 540;
          line-height: 1.78;
        }

        .stack-skill-grid {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 0.58rem;
          margin-top: 0.2rem;
        }

        .stack-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 0.78rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-pill);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          font-size: 0.8rem;
          font-weight: 750;
          cursor: default;
        }

        .stack-skill-pill svg {
          color: var(--stack-accent);
          flex: 0 0 auto;
        }

        .stack-detail-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1.1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stack-detail-line {
          flex: 1;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              color-mix(in srgb, var(--stack-accent) 45%, transparent),
              transparent
            );
        }

        .stack-orbit {
          position: absolute;
          z-index: 1;
          right: 1.5rem;
          bottom: 1.5rem;
          width: 17rem;
          height: 17rem;
          opacity: 0.78;
          pointer-events: none;
        }

        .stack-orbit-ring {
          position: absolute;
          inset: 0;
          border: 1px solid color-mix(in srgb, var(--stack-accent) 38%, transparent);
          border-radius: 50%;
          animation: spin-slow 18s linear infinite;
        }

        .stack-orbit-ring-two {
          inset: 2.4rem;
          border-style: dashed;
          animation-duration: 26s;
          animation-direction: reverse;
        }

        .stack-orbit-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 5.3rem;
          height: 5.3rem;
          color: var(--stack-accent);
          background:
            radial-gradient(circle at 28% 22%, rgba(7, 7, 11, 0.1), transparent 32%),
            color-mix(in srgb, var(--stack-accent) 16%, transparent);
          border: 1px solid color-mix(in srgb, var(--stack-accent) 34%, transparent);
          border-radius: var(--radius-blob);
          box-shadow:
            inset 0 0 24px rgba(255, 255, 255, 0.05),
            0 22px 64px color-mix(in srgb, var(--stack-accent) 22%, transparent);
          transform: translate(-50%, -50%);
          animation: morph-blob 10s ease-in-out infinite, float-y 5.5s ease-in-out infinite;
        }

        .stack-orbit-node {
          position: absolute;
          width: 0.78rem;
          height: 0.78rem;
          border-radius: 50%;
          background: var(--stack-accent);
          box-shadow: 0 0 0 6px color-mix(in srgb, var(--stack-accent) 16%, transparent);
        }

        .node-one {
          top: 0.7rem;
          left: 50%;
        }

        .node-two {
          right: 1rem;
          top: 48%;
        }

        .node-three {
          bottom: 1rem;
          left: 38%;
        }

        .node-four {
          left: 1.1rem;
          top: 34%;
        }

        @media (max-width: 980px) {
          .skills-layout {
            grid-template-columns: 1fr;
          }

          .stack-showcase,
          .stack-detail-panel {
            min-height: auto;
          }

          .stack-orbit {
            width: 13rem;
            height: 13rem;
            opacity: 0.55;
          }
        }

        @media (max-width: 620px) {
          .stack-category-card {
            grid-template-columns: auto minmax(0, 1fr);
          }

          .stack-category-arrow {
            display: none;
          }

          .stack-detail-panel {
            border-radius: 1.65rem;
            padding: 1.1rem;
          }

          .stack-detail-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .stack-detail-icon {
            width: 3.7rem;
            height: 3.7rem;
          }

          .stack-orbit {
            display: none;
          }

          .stack-detail-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .stack-detail-line {
            width: 100%;
            flex: none;
          }
        }
      `}</style>
    </section>
  )
}
