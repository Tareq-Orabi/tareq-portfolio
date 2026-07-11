import { useRef, useEffect, memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Target,
  Compass,
  CheckCircle2,
  Server,
  Database,
  Container,
  Building2,
  Sparkles,
  Cpu,
  ShieldCheck,
  Terminal,
  Activity,
  Briefcase
} from 'lucide-react'

import profileImg from '../assets/profile.jpg'
import SectionHeader from './SectionHeader'
import { DATA } from '../data'
import { createInputAwareFrameLoop } from '../utils/animationBudget'

const iconMap = {
  Target,
  Compass,
  CheckCircle2,
  Server,
  Database,
  Container,
  Building2,
  Sparkles,
  Cpu,
  ShieldCheck,
  Terminal,
  Activity,
  Briefcase
}

const profileTags = [
  {
    label: 'Spring Boot',
    icon: Server,
    position: 'tag-one',
    accent: 'var(--blue)',
    delay: 0,
  },
  {
    label: 'PostgreSQL',
    icon: Database,
    position: 'tag-two',
    accent: 'var(--sand)',
    delay: 0.35,
  },
  {
    label: 'Docker',
    icon: Container,
    position: 'tag-three',
    accent: 'var(--lavender)',
    delay: 0.7,
  },
  {
    label: 'Octagram',
    icon: Building2,
    position: 'tag-four',
    accent: 'var(--lavender)',
    delay: 1.05,
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
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

const FloatingProfileTag = memo(function FloatingProfileTag({ tag }) {
  const reduceMotion = useReducedMotion()
  const Icon = tag.icon

  return (
    <div className={`about-profile-tag-wrapper ${tag.position}`}>
      <motion.div
        className="about-profile-tag-inner"
        initial={{
          opacity: 0,
          y: 12,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          opacity: {
            duration: 0.45,
            delay: tag.delay,
          },
          scale: {
            duration: 0.45,
            delay: tag.delay,
          },
          y: {
            duration: 0.45,
            delay: tag.delay,
          },
        }}
      >
        <motion.div
          className="about-profile-tag"
          animate={
            reduceMotion
              ? undefined
              : {
                y: [0, -7, 0],
              }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: tag.delay,
              }
          }
          style={{
            '--tag-accent': tag.accent,
          }}
        >
          <Icon size={14} strokeWidth={2.35} />
          {tag.label}
        </motion.div>
      </motion.div>
    </div>
  )
})

const PrincipleCard = memo(function PrincipleCard({ principle, index }) {
  const Icon = iconMap[principle.icon] || CheckCircle2

  return (
    <motion.article
      className="about-principle-card"
      variants={itemVariants}
      whileHover={{
        y: -5,
        scale: 1.012,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 24,
      }}
      style={{
        '--principle-index': index,
      }}
    >
      <span className="about-principle-icon">
        <Icon size={18} strokeWidth={2.25} />
      </span>

      <div>
        <h3>{principle.title}</h3>
        <p>{principle.description}</p>
      </div>
    </motion.article>
  )
})

function AboutCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === 'undefined') return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const particles = []
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    // Desktop keeps the original visual density. Mobile gets a lighter version.
    const particleCount = isMobile ? 18 : 28
    const connectionDistance = isMobile ? 90 : 100
    const connectionDistanceSq = connectionDistance * connectionDistance

    let width = 0
    let height = 0
    let dpr = 1
    let isVisible = false
    let isReduced = motionQuery.matches
    let resizeFrame = 0

    const drawStatic = () => {
      if (!width || !height) return

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(200, 154, 24, 0.25)'

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const nextWidth = Math.max(1, Math.floor(rect.width))
      const nextHeight = Math.max(1, Math.floor(rect.height))

      if (nextWidth === width && nextHeight === height) return

      const previousWidth = width || nextWidth
      const previousHeight = height || nextHeight
      const ratioX = nextWidth / previousWidth
      const ratioY = nextHeight / previousHeight

      width = nextWidth
      height = nextHeight
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.35)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (particles.length) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].x *= ratioX
          particles[i].y *= ratioY
        }
      } else {
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            radius: Math.random() * 2 + 1,
          })
        }
      }

      if (isReduced || !isVisible) drawStatic()
    }

    const loop = createInputAwareFrameLoop(
      () => {
        if (!isVisible || isReduced || document.hidden) return

        ctx.clearRect(0, 0, width, height)

        // Batch line drawing into one stroke call instead of hundreds of stroke() calls.
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(200, 154, 24, 0.08)'
        ctx.lineWidth = 1

        for (let i = 0; i < particleCount; i++) {
          const a = particles[i]

          for (let j = i + 1; j < particleCount; j++) {
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const distSq = dx * dx + dy * dy

            // Same visual threshold, cheaper math: no Math.sqrt per pair.
            if (distSq < connectionDistanceSq) {
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
            }
          }
        }

        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = 'rgba(200, 154, 24, 0.35)'

        for (let i = 0; i < particleCount; i++) {
          const p = particles[i]
          ctx.moveTo(p.x + p.radius, p.y)
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)

          p.x += p.vx
          p.y += p.vy

          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }

        ctx.fill()
      },
      { fps: isMobile ? 14 : 18, yieldMs: 180 }
    )

    const unbindInput = loop.bind()

    resizeCanvas()

    const startOrStop = () => {
      if (isVisible && !isReduced && !document.hidden) {
        loop.reset()
        loop.start()
      } else {
        loop.stop()
        drawStatic()
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(() => {
        resizeCanvas()
        startOrStop()
      })
    })
    resizeObserver.observe(canvas)

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = Boolean(entries[0]?.isIntersecting)
        startOrStop()
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    const handleVisibility = () => {
      startOrStop()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    const handleMotionChange = (event) => {
      isReduced = event.matches
      startOrStop()
    }

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange)
    } else {
      motionQuery.addListener(handleMotionChange)
    }

    startOrStop()

    return () => {
      loop.stop()
      unbindInput()
      observer.disconnect()
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)

      if (resizeFrame) window.cancelAnimationFrame(resizeFrame)

      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange)
      } else {
        motionQuery.removeListener(handleMotionChange)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.65,
      }}
    />
  )
}

export default function About() {
  const { about } = DATA

  return (
    <section className="section readability-mask about-section" data-cosmic-scene="fibers">
      <div className="section-inner about-inner">
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
            overline={about.eyebrow}
            title={about.title}
            subtitle="How I blend technical execution with founder mindset to ship resilient systems."
            variant="lavender"
          />
        </motion.div>

        {/* ── Top Layout: Profile + Pillars Split ── */}
        <div className="about-layout">

          {/* Profile Card Column */}
          <motion.div
            className="about-profile-column"
            initial={{
              opacity: 0,
              scale: 0.94,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
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
            <div className="about-profile-shell">
              <div className="about-profile-ring" aria-hidden="true" />
              <div className="about-glow-wrapper" aria-hidden="true">
                <div className="about-profile-glow" />
              </div>

              <div className="about-profile-frame">
                <img src={profileImg} alt="Tareq Orabi" />
              </div>

              {profileTags.map((tag) => (
                <FloatingProfileTag key={tag.label} tag={tag} />
              ))}
            </div>

            <div className="about-mini-card">
              <span className="about-mini-icon">
                <Sparkles size={17} strokeWidth={2.25} />
              </span>

              <div>
                <strong>Founder Engineer</strong>
                <p>Translating business concepts into reliable, production-ready system architecture.</p>
              </div>
            </div>
          </motion.div>

          {/* Pillars Split Column */}
          <motion.div
            className="about-pillars-column"
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
              duration: 0.72,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Split Pillar Grid */}
            <div className="about-pillars-grid">

              {/* Pillar 1: The Systems Engineer */}
              <div className="about-pillar-card engineer-pillar">
                <div className="pillar-header">
                  <span className="pillar-icon">
                    <Terminal size={18} />
                  </span>
                  <h4>The Systems Engineer</h4>
                </div>
                <h5>Architecture, constraints, and runtime.</h5>
                <p>
                  I focus on writing backend logic that survives outside local tests. Whether modeling relations in PostgreSQL, building secure JWT schemes in Spring Boot / .NET, or staging Docker containers behind an Nginx proxy, I focus on the hard limits of networks and databases.
                </p>
                <div className="pillar-footer">
                  <span className="badge badge-blue">Spring Boot</span>
                  <span className="badge badge-blue">PostgreSQL</span>
                  <span className="badge badge-blue">Docker</span>
                </div>
              </div>

              {/* Pillar 2: The Founder */}
              <div className="about-pillar-card founder-pillar">
                <div className="pillar-header">
                  <span className="pillar-icon">
                    <Briefcase size={18} />
                  </span>
                  <h4>The Founder</h4>
                </div>
                <h5>Scope, validation, and delivery.</h5>
                <p>
                  As the founder of Octagram, I translate client needs into strict technical requirements. I write proposals, set realistic delivery boundaries, coordinate development tasks, and maintain a high standard of taste. I build platforms that solve business problems.
                </p>
                <div className="pillar-footer">
                  <span className="badge badge-lavender">Strategy</span>
                  <span className="badge badge-lavender">Client Work</span>
                  <span className="badge badge-lavender">SaaS Planning</span>
                </div>
              </div>

            </div>

            {/* Core Story Summary Box */}
            <article className="about-story-summary">
              <div className="about-story-shine" aria-hidden="true" />
              <div className="about-story-content">
                <Activity size={18} className="text-blue" />
                <p>
                  My engineering strategy is direct: <strong>own the entire lifecycle</strong>. I handle everything from database schema migrations to reverse proxies, container structures, and production-level VPS deployment.
                </p>
              </div>
            </article>

          </motion.div>
        </div>

        {/* ── Bottom Section: Engineering Philosophy Flowchart ── */}
        <div className="about-philosophy-section">
          <div className="about-philosophy-header">
            <span className="overline overline-lavender">My Philosophy</span>
            <h3>How I think about software building</h3>
          </div>

          <motion.div
            className="about-principles-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            {about.principles.map((principle, index) => (
              <PrincipleCard
                key={principle.title}
                principle={principle}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          background: transparent;
          isolation: isolate;
        }

        .about-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .about-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 7, 11, 1) 80%);
        }

        .about-inner {
          position: relative;
          z-index: 2;
        }

        .about-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .blue-blob-wrapper {
          width: 8rem;
          height: 8rem;
          left: -3rem;
          top: 5rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .lavender-blob-wrapper {
          width: 7.25rem;
          height: 7.25rem;
          right: -3rem;
          bottom: 4rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .about-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(18px);
          opacity: 0.64;
          animation: blob-float 15s ease-in-out infinite;
          transform: translateZ(0);
        }

        .about-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.15), transparent 68%);
        }

        .about-blob-lavender {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.12), transparent 68%);
          animation-delay: -5s;
        }

        .about-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          background-image:
            linear-gradient(rgba(200, 154, 24, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 154, 24, 0.05) 1px, transparent 1px);
          background-size: 4.25rem 4.25rem;
        }

        .about-orb {
          position: absolute;
          z-index: 1;
          border-radius: var(--radius-blob);
          background:
            radial-gradient(circle at 30% 24%, rgba(7, 7, 11, 0.1), transparent 26%),
            linear-gradient(135deg, rgba(200, 154, 24, 0.05), rgba(200, 154, 24, 0.04), rgba(200, 154, 24, 0.03));
          box-shadow:
            0 30px 80px rgba(200, 154, 24, 0.05);
          opacity: 0.52;
          animation: morph-blob 13s ease-in-out infinite, float-y 6s ease-in-out infinite;
        }

        .about-orb-one {
          width: 8.5rem;
          height: 8.5rem;
          right: 12%;
          top: 18%;
        }

        .about-orb-two {
          width: 6.5rem;
          height: 6.5rem;
          left: 8%;
          bottom: 14%;
          animation-delay: -3s;
        }

        .about-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: clamp(2rem, 6vw, 4.5rem);
          align-items: start;
        }

        .about-profile-column {
          position: sticky;
          top: calc(var(--nav-height) + 2rem);
          display: grid;
          gap: 1.2rem;
          align-self: start;
        }

        .about-profile-shell {
          position: relative;
          width: min(100%, 20rem);
          margin-inline: auto;
          aspect-ratio: 1 / 1;
        }

        .about-profile-ring {
          position: absolute;
          inset: -0.9rem;
          border-radius: 50%;
          background:
            conic-gradient(
              from 0deg,
              rgba(200, 154, 24, 0.85),
              rgba(200, 154, 24, 0.8),
              rgba(200, 154, 24, 0.75),
              rgba(200, 154, 24, 0.95)
            );
          opacity: 0.42;
          filter: blur(0.2px);
          animation: spin-slow 12s linear infinite;
        }

        .about-glow-wrapper {
          position: absolute;
          inset: -0.5rem;
          border-radius: 50%;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: scale(1) translate3d(0,0,0);
        }

        .about-profile-glow {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 50%, rgba(200, 154, 24, 0.20), transparent 62%),
            radial-gradient(circle at 70% 20%, rgba(200, 154, 24, 0.22), transparent 46%);
          filter: blur(6px);
          animation: blob-float 9s ease-in-out infinite;
          opacity: 0.72;
        }

        .about-profile-frame {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border: 5px solid rgba(7, 7, 11, 0.95);
          border-radius: var(--radius-blob);
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(7, 7, 11, 0.1) inset;
          animation: morph-blob 14s ease-in-out infinite;
          isolation: isolate;
        }

        .about-profile-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 12%, rgba(7, 7, 11, 0.1), transparent 34%),
            linear-gradient(135deg, rgba(200, 154, 24, 0.05), rgba(200, 154, 24, 0.04));
          pointer-events: none;
        }

        .about-profile-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.03);
          filter: brightness(0.9) contrast(1.1);
        }

        .about-profile-tag-wrapper {
          position: absolute;
          z-index: 4;
        }

        .about-profile-tag-wrapper.tag-one {
          top: 4%;
          right: -9%;
        }

        .about-profile-tag-wrapper.tag-two {
          right: -13%;
          bottom: 22%;
        }

        .about-profile-tag-wrapper.tag-three {
          left: -8%;
          bottom: 7%;
        }

        .about-profile-tag-wrapper.tag-four {
          left: -13%;
          top: 14%;
        }

        .about-profile-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.42rem;
          padding: 0.44rem 0.78rem;
          color: var(--tag-accent);
          background: rgba(7, 7, 11, 0.75);
          border: 1px solid color-mix(in srgb, var(--tag-accent) 28%, transparent);
          border-radius: var(--radius-pill);
          box-shadow:
            0 14px 38px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          font-size: 0.74rem;
          font-weight: 850;
          line-height: 1;
          white-space: nowrap;
          will-change: transform;
        }

        .about-mini-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem;
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.35rem;
          box-shadow:
            0 18px 54px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.02) inset;
          overflow: hidden;
        }

        .about-mini-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 12%, rgba(200, 154, 24, 0.1), transparent 38%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 44%);
          pointer-events: none;
        }

        .about-mini-icon {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          flex: 0 0 auto;
          color: var(--blue-strong);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
          border-radius: 0.9rem;
        }

        .about-mini-card div {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.22rem;
        }

        .about-mini-card strong {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.2;
        }

        .about-mini-card p {
          color: var(--text-muted);
          font-size: 0.8rem;
          line-height: 1.55;
        }

        .about-pillars-column {
          display: grid;
          gap: 1.5rem;
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .about-pillar-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.5rem;
          background: rgba(7, 7, 11, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.5rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          overflow: hidden;
          transition:
            transform 220ms var(--ease-out),
            box-shadow 220ms var(--ease-out),
            border-color 220ms var(--ease-out),
            background 220ms var(--ease-out);
        }

        .about-pillar-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 45%);
        }

        .engineer-pillar:hover {
          border-color: rgba(200, 154, 24, 0.30);
          box-shadow: 0 25px 60px rgba(200, 154, 24, 0.08);
        }

        .founder-pillar:hover {
          border-color: rgba(200, 154, 24, 0.3);
          box-shadow: 0 25px 60px rgba(200, 154, 24, 0.08);
        }

        .pillar-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .pillar-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 0.75rem;
        }

        .engineer-pillar .pillar-icon {
          color: var(--blue-strong);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
        }

        .founder-pillar .pillar-icon {
          color: var(--lavender-strong);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
        }

        .pillar-header h4 {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        .about-pillar-card h5 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .about-pillar-card p {
          font-size: 0.88rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .pillar-footer {
          margin-top: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .about-story-summary {
          position: relative;
          padding: 1.25rem 1.5rem;
          background: rgba(7, 7, 11, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 1.25rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        .about-story-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(125deg, rgba(255, 255, 255, 0.01), transparent 50%, rgba(200, 154, 24, 0.02));
        }

        .about-story-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .about-story-content svg {
          flex-shrink: 0;
          margin-top: 0.22rem;
        }

        .about-story-content p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .about-philosophy-section {
          margin-top: 4.5rem;
          display: grid;
          gap: 2rem;
        }

        .about-philosophy-header {
          display: grid;
          gap: 0.6rem;
        }

        .about-philosophy-header h3 {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .about-principles-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .about-principle-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.5rem;
          background: rgba(7, 7, 11, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.35rem;
          cursor: default;
          overflow: hidden;
          transition:
            transform 220ms var(--ease-out),
            box-shadow 220ms var(--ease-out),
            border-color 220ms var(--ease-out),
            background 220ms var(--ease-out);
        }

        .about-principle-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 12% 12%, rgba(200, 154, 24, 0.08), transparent 40%);
          opacity: 0;
          transition: opacity 240ms var(--ease-out);
        }

        .about-principle-card:hover {
          border-color: rgba(200, 154, 24, 0.30);
          box-shadow:
            0 20px 58px rgba(0, 0, 0, 0.4),
            0 14px 44px rgba(200, 154, 24, 0.08);
        }

        .about-principle-card:hover::before {
          opacity: 1;
        }

        .about-principle-icon {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          color: var(--blue-strong);
          background: rgba(200, 154, 24, 0.08);
          border: 1px solid rgba(200, 154, 24, 0.18);
          border-radius: 0.9rem;
        }

        .about-principle-card div {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.35rem;
        }

        .about-principle-card h3 {
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.96rem;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .about-principle-card p {
          color: var(--text-muted);
          font-size: 0.82rem;
          line-height: 1.62;
        }

        @media (max-width: 1020px) {
          .about-layout {
            grid-template-columns: 1fr;
          }

          .about-profile-column {
            position: relative;
            top: auto;
            width: min(100%, 26rem);
            margin-inline: auto;
          }
        }

        @media (max-width: 768px) {
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }

          .about-principles-grid {
            grid-template-columns: 1fr;
          }

          .about-profile-shell {
            width: min(100%, 19rem);
          }

          .about-profile-tag-wrapper.tag-one {
            right: -4%;
          }

          .about-profile-tag-wrapper.tag-two {
            right: -7%;
          }

          .about-profile-tag-wrapper.tag-three {
            left: -3%;
          }

          .about-profile-tag-wrapper.tag-four {
            left: -7%;
          }
        }

        @media (max-width: 480px) {
          .about-profile-shell {
            width: min(100%, 16.5rem);
          }

          .about-profile-tag {
            font-size: 0.68rem;
            padding: 0.38rem 0.64rem;
          }

          .about-profile-tag-wrapper.tag-one {
            top: 0;
            right: -1%;
          }

          .about-profile-tag-wrapper.tag-two {
            right: -2%;
            bottom: 17%;
          }

          .about-profile-tag-wrapper.tag-three {
            left: -1%;
            bottom: 4%;
          }

          .about-profile-tag-wrapper.tag-four {
            left: -2%;
            top: 16%;
          }
        }
      `}</style>
    </section>
  )
}
