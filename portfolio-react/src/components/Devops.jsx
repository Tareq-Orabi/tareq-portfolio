import { memo, useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Code2,
  Waypoints,
  Container,
  Server,
  ArrowLeftRight,
  Database,
  ShieldCheck,
  CheckCircle,
  Terminal,
  Activity,
  Sparkles,
} from 'lucide-react'

import { DATA } from '../data'
import SectionHeader from './SectionHeader'

const ICON_MAP = {
  Code2,
  Waypoints,
  Container,
  Server,
  ArrowLeftRight,
  Database,
  ShieldCheck,
  CheckCircle,
  Terminal,
  Activity,
  Sparkles,
}

const LOG_COLORS = {
  INFO: 'var(--text-muted)',
  SUCCESS: 'var(--mint-strong)',
  WARN: 'var(--sand-strong)',
  ERROR: '#B42318',
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
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}


const getContainerVariants = (reducedMotion) => (
  reducedMotion
    ? { hidden: {}, show: {} }
    : containerVariants
)

const getItemVariants = (reducedMotion) => (
  reducedMotion
    ? {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0, transition: { duration: 0 } },
    }
    : itemVariants
)

const revealViewport = {
  once: true,
  amount: 0.22,
  margin: '0px 0px -80px 0px',
}

const PipelineStep = memo(function PipelineStep({ step, index, isLast, variants }) {
  const Icon = ICON_MAP[step.icon] || Code2

  return (
    <div className="pipeline-step-wrap">
      <motion.div
        className="pipeline-step"
        variants={variants}
        style={{
          '--step-color': step.color,
        }}
      >
        <span className="pipeline-step-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="pipeline-step-icon">
          <Icon size={21} strokeWidth={2.15} />
        </span>

        <span className="pipeline-step-copy">
          <strong>{step.label}</strong>
          <small>{step.desc}</small>
        </span>
      </motion.div>

      {!isLast && (
        <span
          className="pipeline-connector"
          style={{ '--connector-delay': `${index * 60 + 150}ms` }}
          aria-hidden="true"
        />
      )}
    </div>
  )
})

const DeployLogPanel = memo(function DeployLogPanel({ reducedMotion }) {
  return (
    <motion.article
      className="deploy-panel"
      initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={revealViewport}
      transition={{
        duration: 0.58,
        delay: 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="deploy-panel-glow" aria-hidden="true" />

      <div className="deploy-panel-header">
        <div className="deploy-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="deploy-title">
          <Terminal size={15} strokeWidth={2.25} />
          <span>deploy.sh — production</span>
        </div>

        <span className="deploy-badge">
          <span className="badge-dot" />
          verified
        </span>
      </div>

      <div className="deploy-log-lines">
        {DATA.deployLogs.map(({ time, level, msg }) => (
          <div className="deploy-log-line" key={`${time}-${msg}`}>
            <span className="deploy-time">{time}</span>

            <span
              className="deploy-level"
              style={{
                '--log-color': LOG_COLORS[level] || 'var(--text-muted)',
              }}
            >
              [{level}]
            </span>

            <span className="deploy-message">{msg}</span>
          </div>
        ))}
      </div>
    </motion.article>
  )
})

const SystemStatusPills = memo(function SystemStatusPills({ containerMotionVariants }) {
  return (
    <motion.div
      className="system-status-list"
      variants={containerMotionVariants}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {DATA.systemStatus.map(({ label }) => (
        <span className="system-status-pill" key={label}>
          <span className="system-status-dot" />
          {label}
        </span>
      ))}
    </motion.div>
  )
})

const PipelineVisual = memo(function PipelineVisual() {
  return (
    <div className="pipeline-visual" aria-hidden="true">
      <div className="pipeline-visual-ring ring-one" />
      <div className="pipeline-visual-ring ring-two" />

      <div className="pipeline-visual-core">
        <Activity size={32} strokeWidth={2.1} />
      </div>

      <span className="pipeline-node node-one" />
      <span className="pipeline-node node-two" />
      <span className="pipeline-node node-three" />
      <span className="pipeline-node node-four" />
    </div>
  )
})

export default function Devops() {
  const pipeline = DATA.pipeline || {
    eyebrow: 'Production Experience',
    title: 'From backend code to a live client system.',
    description:
      'My production experience focuses on practical deployment: backend APIs, Docker, Linux VPS environments, Nginx reverse proxy, PostgreSQL, SSL, health checks, and operational troubleshooting.',
  }

  const reducedMotion = useReducedMotion()
  const containerMotionVariants = useMemo(
    () => getContainerVariants(reducedMotion),
    [reducedMotion]
  )
  const itemMotionVariants = useMemo(
    () => getItemVariants(reducedMotion),
    [reducedMotion]
  )

  return (
    <section className="section readability-mask pipeline-section" data-cosmic-scene="black-hole">


      <div className="section-inner pipeline-inner">
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
            overline={pipeline.eyebrow}
            title={pipeline.title}
            subtitle={pipeline.description}
            variant="sand"
          />
        </motion.div>

        <div className="pipeline-content">
          <motion.div
            className="pipeline-track"
            variants={containerMotionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {DATA.pipelineSteps.map((step, index) => (
              <PipelineStep
                key={step.label}
                step={step}
                index={index}
                isLast={index === DATA.pipelineSteps.length - 1}
                variants={itemMotionVariants}
              />
            ))}
          </motion.div>

          <div className="pipeline-bottom-layout">
            <DeployLogPanel reducedMotion={reducedMotion} />

            <motion.aside
              className="pipeline-summary-card"
              initial={{
                opacity: 0,
                x: 28,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.68,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <PipelineVisual />

              <div className="pipeline-summary-copy">
                <span className="overline overline-sand">
                  Practical deployment
                </span>

                <h3>Production-minded, not overclaimed.</h3>

                <p>
                  This section focuses on the deployment workflow I have actually
                  worked with: backend APIs, containers, Linux servers, reverse
                  proxy setup, database operation, SSL, and real client support.
                </p>
              </div>

              <SystemStatusPills containerMotionVariants={containerMotionVariants} />
            </motion.aside>
          </div>
        </div>
      </div>

      <style>{`
        .pipeline-section {
          position: relative;
          overflow: hidden;
          contain: layout paint style;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: transparent;
          isolation: isolate;
        }

        .pipeline-bg {
          position: absolute;
          contain: paint;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .pipeline-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 7, 11, 1) 80%);
        }

        .pipeline-inner {
          position: relative;
          z-index: 2;
        }

        .pipeline-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .pipeline-blob-blue-wrapper {
          width: 8rem;
          height: 8rem;
          top: 2rem;
          right: -3rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .pipeline-blob-sand-wrapper {
          width: 7.5rem;
          height: 7.5rem;
          left: -3rem;
          bottom: 0.75rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .pipeline-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(16px);
          opacity: 0.62;
          animation: blob-float 24s ease-in-out infinite;
          transform: translateZ(0);
        }

        .pipeline-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.15), transparent 68%);
        }

        .pipeline-blob-sand {
          background: radial-gradient(circle, rgba(232, 201, 143, 0.15), transparent 68%);
          animation-delay: -5s;
        }

        .pipeline-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-image:
            linear-gradient(rgba(232, 201, 143, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 201, 143, 0.1) 1px, transparent 1px);
          background-size: 4.25rem 4.25rem;
        }

        .pipeline-orb {
          position: absolute;
          z-index: 1;
          border-radius: var(--radius-blob);
          background:
            radial-gradient(circle at 30% 24%, rgba(7, 7, 11, 0.1), transparent 26%),
            linear-gradient(135deg, rgba(200, 154, 24, 0.05), rgba(200, 154, 24, 0.04));
          box-shadow:
            inset 0 0 34px rgba(255, 255, 255, 0.05),
            0 30px 80px rgba(232, 201, 143, 0.05);
          opacity: 0.55;
          animation: morph-blob 24s ease-in-out infinite, float-y 12s ease-in-out infinite;
        }

        .pipeline-orb-one {
          width: 9rem;
          height: 9rem;
          right: 11%;
          top: 17%;
        }

        .pipeline-orb-two {
          width: 6.5rem;
          height: 6.5rem;
          left: 10%;
          bottom: 14%;
          animation-delay: -3s;
        }

        .pipeline-content {
          display: grid;
          gap: 2.25rem;
        }

        .pipeline-track {
          position: relative;
          display: flex;
          align-items: stretch;
          gap: 0;
          width: 100%;
          padding: 0.65rem 0.3rem 0.9rem;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x proximity;
          scrollbar-width: thin;
        }

        .pipeline-track::-webkit-scrollbar {
          height: 7px;
        }

        .pipeline-track::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: var(--radius-pill);
        }

        .pipeline-step-wrap {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          scroll-snap-align: start;
        }

        .pipeline-step {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 0.62rem;
          width: 8.15rem;
          min-height: 9.7rem;
          padding: 1.25rem 0.85rem 1rem;
          text-align: center;
          color: var(--text-primary);
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.25rem;
          box-shadow:
            0 15px 44px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
          cursor: default;
          contain: layout paint style;
          transition:
            transform 220ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 220ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 220ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pipeline-step:hover {
          transform: translateY(-4px) scale(1.01);
        }

        .pipeline-step::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 18% 12%,
              color-mix(in srgb, var(--step-color) 15%, transparent),
              transparent 34%
            ),
            linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 38%);
          opacity: 0;
          transition: opacity 240ms var(--ease-out);
          pointer-events: none;
        }

        .pipeline-step:hover::before {
          opacity: 1;
        }

        .pipeline-step-number {
          position: absolute;
          top: 0.62rem;
          right: 0.68rem;
          z-index: 2;
          color: color-mix(in srgb, var(--step-color) 72%, var(--text-primary));
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 800;
          opacity: 0.78;
        }

        .pipeline-step-icon {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.25rem;
          height: 3.25rem;
          color: var(--step-color);
          background: color-mix(in srgb, var(--step-color) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--step-color) 28%, transparent);
          border-radius: 1rem;
          box-shadow: 0 12px 32px color-mix(in srgb, var(--step-color) 14%, transparent);
        }

        .pipeline-step-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.2rem;
        }

        .pipeline-step-copy strong {
          color: var(--text-primary);
          font-size: 0.84rem;
          line-height: 1.15;
        }

        .pipeline-step-copy small {
          color: var(--text-muted);
          font-size: 0.68rem;
          font-weight: 650;
          line-height: 1.3;
        }

        .pipeline-connector {
          position: relative;
          display: block;
          width: 2.15rem;
          height: 2px;
          flex: 0 0 auto;
          background:
            linear-gradient(
              90deg,
              rgba(200, 154, 24, 0.35),
              rgba(200, 154, 24, 0.30)
            );
          transform-origin: left;
        }

        .pipeline-connector::after {
          content: '';
          position: absolute;
          right: -1px;
          top: 50%;
          width: 7px;
          height: 7px;
          border-top: 2px solid rgba(232, 201, 143, 0.45);
          border-right: 2px solid rgba(232, 201, 143, 0.45);
          transform: translateY(-50%) rotate(45deg);
        }

        .pipeline-bottom-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 1.25rem;
          align-items: stretch;
        }

        .deploy-panel,
        .pipeline-summary-card {
          position: relative;
          overflow: hidden;
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-2xl);
          contain: layout paint style;
          box-shadow:
            0 20px 58px rgba(0, 0, 0, 0.36),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
        }

        .deploy-panel-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 8% 10%, rgba(200, 154, 24, 0.08), transparent 34%),
            radial-gradient(circle at 92% 76%, rgba(232, 201, 143, 0.1), transparent 34%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 42%);
        }

        .deploy-panel-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.95rem 1.15rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
        }

        .deploy-window-dots {
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          flex: 0 0 auto;
        }

        .deploy-window-dots span {
          width: 0.62rem;
          height: 0.62rem;
          border-radius: 50%;
        }

        .deploy-window-dots span:nth-child(1) {
          background: #f87171;
        }

        .deploy-window-dots span:nth-child(2) {
          background: #fbbf24;
        }

        .deploy-window-dots span:nth-child(3) {
          background: #34d399;
        }

        .deploy-title {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          min-width: 0;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 650;
        }

        .deploy-title svg {
          color: var(--sand-strong);
        }

        .deploy-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-left: auto;
          padding: 0.3rem 0.68rem;
          color: var(--mint-strong);
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: var(--radius-pill);
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
        }

        .deploy-log-lines {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.42rem;
          padding: 1.15rem;
        }

        .deploy-log-line {
          display: grid;
          grid-template-columns: 5.2rem 5.3rem minmax(0, 1fr);
          align-items: baseline;
          gap: 0.72rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.76rem;
          line-height: 1.55;
        }

        .deploy-time {
          color: var(--text-faint);
          white-space: nowrap;
        }

        .deploy-level {
          color: var(--log-color);
          font-weight: 800;
          white-space: nowrap;
        }

        .deploy-message {
          color: var(--text-primary);
          min-width: 0;
        }

        .pipeline-summary-card {
          display: grid;
          align-content: space-between;
          gap: 1.35rem;
          min-height: 100%;
          padding: clamp(1.25rem, 2.5vw, 1.7rem);
        }

        .pipeline-summary-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 18% 12%, rgba(232, 201, 143, 0.08), transparent 36%),
            radial-gradient(circle at 88% 80%, rgba(200, 154, 24, 0.06), transparent 38%);
        }

        .pipeline-summary-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 1rem;
        }

        .pipeline-summary-copy h3 {
          max-width: 11ch;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.4vw, 3.1rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .pipeline-summary-copy p {
          max-width: 36rem;
          color: var(--text-secondary);
          font-size: 0.96rem;
          font-weight: 540;
          line-height: 1.78;
        }

        .system-status-list {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .system-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.42rem;
          padding: 0.42rem 0.72rem;
          color: var(--mint-strong);
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: var(--radius-pill);
          box-shadow: 0 8px 22px rgba(52, 211, 153, 0.05);
          font-size: 0.72rem;
          font-weight: 800;
          cursor: default;
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .system-status-pill:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .system-status-dot {
          width: 0.42rem;
          height: 0.42rem;
          flex: 0 0 auto;
          border-radius: 50%;
          background: currentColor;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .pipeline-visual {
          position: absolute;
          z-index: 1;
          right: 1.2rem;
          bottom: 1.2rem;
          width: 13rem;
          height: 13rem;
          opacity: 0.48;
          pointer-events: none;
        }

        .pipeline-visual-ring {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(232, 201, 143, 0.2);
          border-radius: 50%;
          animation: spin-slow 34s linear infinite;
        }

        .pipeline-visual-ring.ring-two {
          inset: 2.1rem;
          border-color: rgba(200, 154, 24, 0.20);
          animation-duration: 44s;
          animation-direction: reverse;
        }

        .pipeline-visual-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 4.6rem;
          height: 4.6rem;
          color: var(--sand-strong);
          background:
            radial-gradient(circle at 28% 22%, rgba(7, 7, 11, 0.15), transparent 32%),
            rgba(232, 201, 143, 0.1);
          border: 1px solid rgba(232, 201, 143, 0.25);
          border-radius: var(--radius-blob);
          transform: translate(-50%, -50%);
          box-shadow:
            inset 0 0 24px rgba(255, 255, 255, 0.05),
            0 20px 58px rgba(232, 201, 143, 0.1);
          animation: morph-blob 20s ease-in-out infinite, float-y 11s ease-in-out infinite;
        }

        .pipeline-node {
          position: absolute;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background: var(--sand);
          box-shadow: 0 0 0 6px rgba(232, 201, 143, 0.1);
        }

        .pipeline-node.node-one {
          top: 0.7rem;
          left: 50%;
        }

        .pipeline-node.node-two {
          right: 1rem;
          top: 46%;
          background: var(--gold);
          box-shadow: 0 0 0 6px rgba(200, 154, 24, 0.10);
        }

        .pipeline-node.node-three {
          bottom: 1rem;
          left: 36%;
        }

        .pipeline-node.node-four {
          left: 1rem;
          top: 34%;
          background: var(--gold);
          box-shadow: 0 0 0 6px rgba(200, 154, 24, 0.10);
        }

        .pipeline-connector {
          transform: scaleX(1);
          opacity: 1;
          animation: pipelineConnectorReveal 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: var(--connector-delay, 150ms);
        }

        @keyframes pipelineConnectorReveal {
          from {
            opacity: 0;
            transform: scaleX(0);
          }

          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @media (hover: none) {
          .pipeline-step:hover,
          .system-status-pill:hover {
            transform: none;
          }

          .pipeline-step:hover::before {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pipeline-blob,
          .pipeline-orb,
          .pipeline-connector,
          .system-status-dot,
          .pipeline-visual-ring,
          .pipeline-visual-core {
            animation: none !important;
          }

          .pipeline-step,
          .system-status-pill {
            transition: none !important;
          }
        }

        @media (max-width: 1050px) {
          .pipeline-bottom-layout {
            grid-template-columns: 1fr;
          }

          .pipeline-summary-copy h3 {
            max-width: 100%;
          }
        }

        @media (max-width: 720px) {
          .pipeline-track {
            margin-inline: calc(var(--section-px) * -1);
            padding-inline: var(--section-px);
          }

          .pipeline-step {
            width: 7.6rem;
            min-height: 9.3rem;
          }

          .pipeline-connector {
            width: 1.35rem;
          }

          .deploy-panel,
          .pipeline-summary-card {
            border-radius: 1.65rem;
          }

          .deploy-panel-header {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .deploy-badge {
            margin-left: 0;
          }

          .deploy-log-line {
            grid-template-columns: 1fr;
            gap: 0.12rem;
            padding-bottom: 0.42rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .deploy-log-line:last-child {
            border-bottom: 0;
            padding-bottom: 0;
          }

          .pipeline-visual {
            display: none;
          }

          .pipeline-blob,
          .pipeline-orb,
          .system-status-dot {
            animation: none !important;
          }

          .pipeline-blob {
            filter: blur(14px);
            opacity: 0.42;
          }

          .pipeline-orb {
            opacity: 0.36;
          }
        }

        @media (max-width: 480px) {
          .pipeline-step {
            width: 7.1rem;
          }

          .pipeline-summary-card,
          .deploy-log-lines {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  )
}