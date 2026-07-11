import { useRef, useState, memo } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import {
  Mail,
  ArrowUpRight,
  Code2,
  Layers,
  Server,
  Cpu,
  Handshake,
  Compass,
  Building2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi'
import { ArrowRight, MapPin, Send } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { ContactCanvas } from './SectionCanvas'
import { DATA } from '../data'

const ICON_MAP = {
  Code2,
  Layers,
  Server,
  Cpu,
  Handshake,
  Compass,
}

function useMagnetic(strength = 0.28) {
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 260,
    damping: 22,
    mass: 0.4,
  })

  const springY = useSpring(y, {
    stiffness: 260,
    damping: 22,
    mass: 0.4,
  })

  const handlers = reduceMotion
    ? {}
    : {
      onMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        x.set((event.clientX - centerX) * strength)
        y.set((event.clientY - centerY) * strength)
      },
      onMouseLeave() {
        x.set(0)
        y.set(0)
      },
    }

  return {
    x: springX,
    y: springY,
    handlers,
  }
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
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const SocialLink = memo(function SocialLink({ label, href, Icon }) {
  return (
    <motion.a
      className="contact-social-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 24,
      }}
    >
      <span className="contact-social-icon">
        <Icon size={18} strokeWidth={1.9} />
      </span>

      <span>{label}</span>

      <ArrowUpRight size={14} strokeWidth={2.45} />
    </motion.a>
  )
})

const OpenToPill = memo(function OpenToPill({ item }) {
  const Icon = ICON_MAP[item.icon] || Code2

  return (
    <motion.span
      className="contact-open-pill"
      variants={itemVariants}
      whileHover={{
        y: -3,
        scale: 1.025,
      }}
      transition={{
        type: 'spring',
        stiffness: 320,
        damping: 24,
      }}
    >
      <Icon size={14} strokeWidth={2.25} />
      {item.label}
    </motion.span>
  )
})

export default function Contact() {
  const { contact } = DATA
  const magnetic = useMagnetic(0.24)

  return (
    <section className="section readability-mask contact-section" data-cosmic-scene="horizon">


      <div className="section-inner contact-inner">
        <motion.div
          className="contact-card"
          initial={{
            opacity: 0,
            y: 32,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.72,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="contact-card-shine" aria-hidden="true" />

          <div className="contact-layout">
            <div className="contact-main">
              <motion.div
                className="contact-heading"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
              >
                <motion.span className="overline" variants={itemVariants}>
                  {contact.eyebrow || 'Contact'}
                </motion.span>

                <motion.h2 className="display-lg" variants={itemVariants}>
                  {contact.title || 'Get in touch.'}
                </motion.h2>

                <motion.p className="body-lg" variants={itemVariants}>
                  {contact.description}
                </motion.p>
              </motion.div>

              <motion.div
                className="contact-status-card"
                variants={itemVariants}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="status-glow-dot" />
                <p>
                  <strong>Current Availability:</strong> Software work, projects, and technical collaborations.
                </p>
              </motion.div>

              <motion.div
                className="contact-actions"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.a
                  className="contact-email-btn"
                  href={`mailto:${contact.email}`}
                  style={{
                    x: magnetic.x,
                    y: magnetic.y,
                  }}
                  {...magnetic.handlers}
                >
                  <Mail size={19} strokeWidth={2.25} />
                  <span>{contact.email}</span>
                  <Send size={17} strokeWidth={2.35} />
                </motion.a>

                <div className="contact-socials">
                  <SocialLink
                    label="GitHub"
                    href={contact.github}
                    Icon={Github}
                  />

                  <SocialLink
                    label="LinkedIn"
                    href={contact.linkedin}
                    Icon={Linkedin}
                  />
                </div>
              </motion.div>
            </div>

            <motion.aside
              className="contact-side-panel"
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
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="contact-side-visual" aria-hidden="true">
                <div className="contact-side-ring ring-one" />
                <div className="contact-side-ring ring-two" />

                <div className="contact-side-core">
                  <Building2 size={30} strokeWidth={2.1} />
                </div>

                <span className="contact-side-node node-one" />
                <span className="contact-side-node node-two" />
                <span className="contact-side-node node-three" />
              </div>

              <div className="contact-side-copy">
                <span className="contact-side-kicker">
                  <Sparkles size={15} strokeWidth={2.35} />
                  Open to collaboration
                </span>

                <h3>Looking for engineering work.</h3>

                <p>
                  Best fit: backend systems, APIs, database modeling,
                  product execution, and technical partnerships.
                </p>
              </div>

              <div className="contact-checks">
                <span>
                  <CheckCircle2 size={15} strokeWidth={2.35} />
                  Client-facing systems
                </span>

                <span>
                  <CheckCircle2 size={15} strokeWidth={2.35} />
                  Product thinking
                </span>

                <span>
                  <CheckCircle2 size={15} strokeWidth={2.35} />
                  Delivery ownership
                </span>
              </div>
            </motion.aside>
          </div>

          <motion.div
            className="contact-open-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <div className="contact-open-heading">
              <p className="label text-muted">Open to</p>
              <span />
            </div>

            <div className="contact-open-list">
              {contact.openTo.map((item) => (
                <OpenToPill key={item.label} item={item} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          isolation: isolate;
        }

        .contact-status-card {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.68rem 1.1rem;
          background: rgba(200, 154, 24, 0.04);
          border: 1px solid rgba(200, 154, 24, 0.15);
          border-radius: var(--radius-lg);
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          max-width: 100%;
        }

        .status-glow-dot {
          width: 8px;
          height: 8px;
          background-color: var(--mint-strong);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--mint-strong), 0 0 20px rgba(45, 212, 191, 0.4);
          animation: statusPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes statusPulse {
          0%, 100% { opacity: 0.7; box-shadow: 0 0 8px var(--mint-strong); }
          50% { opacity: 1; box-shadow: 0 0 14px var(--mint-strong); }
        }

        .contact-status-card p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .contact-status-card strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        .contact-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .contact-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 7, 11, 1) 80%);
        }

        .contact-inner {
          position: relative;
          z-index: 2;
        }

        .contact-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .blue-blob-wrapper {
          width: 8.5rem;
          height: 8.5rem;
          top: -2rem;
          right: -2.5rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .lavender-blob-wrapper {
          width: 7.5rem;
          height: 7.5rem;
          left: -2.5rem;
          bottom: -1.75rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .contact-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(18.5px);
          opacity: 0.66;
          animation: blob-float 15s ease-in-out infinite;
          transform: translateZ(0);
        }

        .contact-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.18), transparent 68%);
        }

        .contact-blob-lavender {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.12), transparent 68%);
          animation-delay: -5s;
        }

        .contact-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-image:
            linear-gradient(rgba(200, 154, 24, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 154, 24, 0.05) 1px, transparent 1px);
          background-size: 4.25rem 4.25rem;
        }

        .contact-orb {
          position: absolute;
          z-index: 1;
          border-radius: var(--radius-blob);
          background:
            radial-gradient(circle at 30% 24%, rgba(7, 7, 11, 0.1), transparent 26%),
            linear-gradient(135deg, rgba(200, 154, 24, 0.05), rgba(200, 154, 24, 0.04), rgba(200, 154, 24, 0.03));
          box-shadow:
            0 30px 80px rgba(200, 154, 24, 0.05);
          opacity: 0.5;
          animation: morph-blob 13s ease-in-out infinite, float-y 6s ease-in-out infinite;
        }

        .contact-orb-one {
          width: 8.5rem;
          height: 8.5rem;
          right: 16%;
          top: 18%;
        }

        .contact-orb-two {
          width: 6.5rem;
          height: 6.5rem;
          left: 8%;
          bottom: 14%;
          animation-delay: -3s;
        }

        .contact-card {
          position: relative;
          overflow: hidden;
          padding: clamp(1.2rem, 3vw, 2rem);
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-2xl);
          box-shadow:
            0 28px 90px rgba(0, 0, 0, 0.5),
            0 18px 70px rgba(200, 154, 24, 0.05),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 12% 10%, rgba(200, 154, 24, 0.08), transparent 34%),
            radial-gradient(circle at 90% 82%, rgba(200, 154, 24, 0.06), transparent 36%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.05), transparent 42%);
        }

        .contact-card-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              115deg,
              transparent 0%,
              rgba(255, 255, 255, 0.03) 34%,
              transparent 55%
            );
          opacity: 0.6;
        }

        .contact-layout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: stretch;
        }

        .contact-main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          min-height: 28rem;
        }

        .contact-heading {
          display: grid;
          justify-items: start;
          gap: 1.15rem;
          text-align: left;
        }

        .contact-heading h2 {
          max-width: 10ch;
        }

        .contact-heading p {
          max-width: 48rem;
          color: var(--text-secondary);
          font-weight: 540;
          line-height: 1.78;
        }

        .contact-actions {
          display: grid;
          gap: 1rem;
          justify-items: start;
        }

        .contact-email-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          max-width: 100%;
          padding: 1rem 1.35rem;
          color: var(--text-inverse);
          background:
            radial-gradient(circle at 18% 12%, rgba(7, 7, 11, 0.1), transparent 35%),
            linear-gradient(135deg, var(--text-primary), rgba(7, 7, 11, 0.8));
          border-radius: var(--radius-pill);
          box-shadow:
            0 18px 46px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(7, 7, 11, 0.1) inset;
          font-size: 0.96rem;
          font-weight: 850;
          letter-spacing: -0.015em;
          white-space: nowrap;
          transition:
            box-shadow 240ms var(--ease-out),
            transform 240ms var(--ease-spring);
        }

        .contact-email-btn:hover {
          box-shadow:
            0 26px 62px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(7, 7, 11, 0.15) inset;
        }

        .contact-email-btn svg:last-child {
          transition: transform 240ms var(--ease-spring);
        }

        .contact-email-btn:hover svg:last-child {
          transform: translate(3px, -2px);
        }

        .contact-email-btn span {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .contact-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .contact-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.72rem 1rem;
          color: var(--text-primary);
          background: rgba(7, 7, 11, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-pill);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          font-size: 0.86rem;
          font-weight: 800;
          transition:
            border-color 240ms var(--ease-out),
            box-shadow 240ms var(--ease-out);
        }

        .contact-social-link:hover {
          border-color: rgba(200, 154, 24, 0.30);
          box-shadow:
            0 18px 46px rgba(0, 0, 0, 0.4),
            0 12px 38px rgba(200, 154, 24, 0.08);
        }

        .contact-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          color: var(--gold);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
          border-radius: 0.78rem;
        }

        .contact-social-link > svg:last-child {
          color: var(--text-muted);
          transition: transform 240ms var(--ease-spring);
        }

        .contact-social-link:hover > svg:last-child {
          color: var(--gold);
          transform: translate(3px, -3px);
        }

        .contact-side-panel {
          position: relative;
          display: grid;
          align-content: space-between;
          gap: 1.35rem;
          min-height: 100%;
          padding: clamp(1.15rem, 2.5vw, 1.55rem);
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-xl);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
        }

        .contact-side-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 12%, rgba(200, 154, 24, 0.06), transparent 36%),
            radial-gradient(circle at 86% 80%, rgba(200, 154, 24, 0.06), transparent 38%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 44%);
        }

        .contact-side-copy {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.9rem;
        }

        .contact-side-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          width: fit-content;
          color: var(--lavender-strong);
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.09em;
          line-height: 1;
          text-transform: uppercase;
        }

        .contact-side-copy h3 {
          max-width: 9.5ch;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.6vw, 3rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .contact-side-copy p {
          color: var(--text-secondary);
          font-size: 0.94rem;
          font-weight: 540;
          line-height: 1.75;
        }

        .contact-checks {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.55rem;
        }

        .contact-checks span {
          display: inline-flex;
          align-items: center;
          gap: 0.48rem;
          width: fit-content;
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 750;
        }

        .contact-checks svg {
          color: var(--gold);
        }

        .contact-side-visual {
          position: absolute;
          z-index: 1;
          right: 1rem;
          bottom: 1rem;
          width: 13rem;
          height: 13rem;
          opacity: 0.46;
          pointer-events: none;
        }

        .contact-side-ring {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(200, 154, 24, 0.20);
          border-radius: 50%;
          animation: spin-slow 20s linear infinite;
        }

        .contact-side-ring.ring-two {
          inset: 2.1rem;
          border-color: rgba(200, 154, 24, 0.20);
          animation-duration: 28s;
          animation-direction: reverse;
        }

        .contact-side-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 4.6rem;
          height: 4.6rem;
          color: var(--lavender-strong);
          background:
            radial-gradient(circle at 28% 22%, rgba(7, 7, 11, 0.1), transparent 32%),
            rgba(200, 154, 24, 0.10);
          border: 1px solid rgba(200, 154, 24, 0.20);
          border-radius: var(--radius-blob);
          transform: translate(-50%, -50%);
          box-shadow:
            inset 0 0 24px rgba(255, 255, 255, 0.05),
            0 20px 58px rgba(200, 154, 24, 0.10);
          animation: morph-blob 10s ease-in-out infinite, float-y 5.5s ease-in-out infinite;
        }

        .contact-side-node {
          position: absolute;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background: var(--lavender);
          box-shadow: 0 0 0 6px rgba(200, 154, 24, 0.10);
        }

        .contact-side-node.node-one {
          top: 0.7rem;
          left: 50%;
        }

        .contact-side-node.node-two {
          right: 1rem;
          top: 46%;
          background: var(--gold);
          box-shadow: 0 0 0 6px rgba(200, 154, 24, 0.10);
        }

        .contact-side-node.node-three {
          bottom: 1rem;
          left: 36%;
        }

        .contact-open-section {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.85rem;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-open-heading {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-open-heading span {
          flex: 1;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              rgba(200, 154, 24, 0.15),
              rgba(200, 154, 24, 0.08),
              transparent
            );
        }

        .contact-open-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.58rem;
        }

        .contact-open-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.52rem 0.78rem;
          color: var(--text-secondary);
          background: rgba(7, 7, 11, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-pill);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          font-size: 0.8rem;
          font-weight: 750;
          cursor: default;
        }

        .contact-open-pill svg {
          color: var(--blue-strong);
        }

        @media (max-width: 980px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }

          .contact-main {
            min-height: auto;
          }

          .contact-side-copy h3 {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .contact-card {
            border-radius: 1.65rem;
            padding: 1.1rem;
          }

          .contact-heading h2 {
            max-width: 100%;
          }

          .contact-email-btn {
            width: 100%;
            padding-inline: 1rem;
          }

          .contact-socials {
            width: 100%;
          }

          .contact-social-link {
            flex: 1 1 100%;
            justify-content: center;
          }

          .contact-side-panel {
            border-radius: 1.35rem;
          }

          .contact-side-visual {
            display: none;
          }

          .contact-open-list {
            display: grid;
            grid-template-columns: 1fr;
          }

          .contact-open-pill {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}