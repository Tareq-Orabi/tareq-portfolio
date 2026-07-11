import { useRef, useEffect, memo } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import {
  Server,
  Database,
  ShieldCheck,
  Layers,
  ArrowUpRight,
  Code2,
  Cloud,
  HeartPulse,
  Brain,
  Stethoscope,
  Building2,
  CheckCircle2,
  Sparkles,
  Terminal,
  Activity
} from 'lucide-react'

import { DATA } from '../data'
import SectionHeader from './SectionHeader'
import { createInputAwareFrameLoop } from '../utils/animationBudget'

const ICON_MAP = {
  Server,
  Database,
  ShieldCheck,
  Layers,
  Code2,
  Cloud,
  HeartPulse,
  Brain,
  Stethoscope,
  Building2,
  CheckCircle2,
  Sparkles,
  Terminal,
  Activity
}

function useTilt() {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rectRef = useRef(null)

  const rotateX = useTransform(y, [-0.5, 0.5], [5.5, -5.5])
  const rotateY = useTransform(x, [-0.5, 0.5], [-5.5, 5.5])

  const handlers = reduceMotion
    ? {}
    : {
      onMouseEnter(event) {
        rectRef.current = event.currentTarget.getBoundingClientRect()
      },
      onMouseMove(event) {
        if (!rectRef.current) return
        const rect = rectRef.current
        x.set((event.clientX - rect.left) / rect.width - 0.5)
        y.set((event.clientY - rect.top) / rect.height - 0.5)
      },
      onMouseLeave() {
        x.set(0)
        y.set(0)
        rectRef.current = null
      },
    }

  return {
    rotateX,
    rotateY,
    handlers,
  }
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

function ProjectVisual({ project, featured }) {
  const Icon = ICON_MAP[project.icon] || Layers
  const isLive = project.badge === 'live'

  return (
    <div className={featured ? 'project-visual featured' : 'project-visual'}>
      {project.image ? (
        <img src={project.image} alt={project.title} className="project-visual-image" />
      ) : (
        <>
          <div className="project-visual-orb" aria-hidden="true" />
          <div className="project-visual-main">
            <span className="project-visual-icon">
              <Icon size={featured ? 30 : 24} strokeWidth={2.1} />
            </span>
            <div className="project-visual-copy">
              <strong>{project.title}</strong>
              <small>{project.role}</small>
            </div>
          </div>
          <div className="project-visual-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </>
      )}

      <div className="project-visual-status">
        <span className={`badge ${isLive ? 'badge-live' : 'badge-building'}`}>
          {isLive && <span className="badge-dot" />}
          {project.badgeLabel}
        </span>

        <span className="project-visual-arrow">
          <ArrowUpRight size={15} strokeWidth={2.35} />
        </span>
      </div>
    </div>
  )
}

const ProjectTechTags = memo(function ProjectTechTags({ tech = [], limit }) {
  const visibleTech = limit ? tech.slice(0, limit) : tech
  const remaining = limit && tech.length > limit ? tech.length - limit : 0

  return (
    <div className="project-tech-list">
      {visibleTech.map((item) => (
        <span key={item} className="tech-tag">
          {item}
        </span>
      ))}

      {remaining > 0 && (
        <span className="tech-tag project-tech-more">
          +{remaining} more
        </span>
      )}
    </div>
  )
})

const FeaturedProjectCard = memo(function FeaturedProjectCard({ project }) {
  const tilt = useTilt()
  const Icon = ICON_MAP[project.icon] || Layers
  const Component = project.link ? motion.a : motion.article

  return (
    <Component
      href={project.link}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      className={`project-card project-card-featured inner-glow-container ${project.link ? 'cursor-pointer' : ''}`}
      variants={itemVariants}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        '--project-accent': project.accent,
        '--project-accent-secondary': project.accentSecondary || project.accent,
      }}
      {...tilt.handlers}
    >
      <div className="hud-corners" />
      <div className="hud-grid" />
      <div className="project-card-shine" aria-hidden="true" />

      <div className="project-featured-content">
        <div className="project-featured-main">
          <div className="project-card-top">
            <span className={`badge ${project.badge === 'live' ? 'badge-live' : 'badge-building'}`}>
              {project.badge === 'live' && <span className="badge-dot" />}
              {project.badgeLabel}
            </span>
            <span className="hud-label ml-3 hidden sm:inline-block">SYS.ACTIVE</span>

            <span className="project-card-role">
              <Icon size={15} strokeWidth={2.25} className="text-blue" />
              {project.role}
            </span>
          </div>

          <div className="project-title-block">
            <h3>{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>

          {/* Project Story / Overview */}
          <div className="project-story-panel">
            <p>{project.story}</p>
          </div>

          {project.built?.length > 0 && (
            <div className="project-built">
              <p className="project-mini-heading">Implementation Scope</p>
              <div className="project-built-grid">
                {project.built.map((item) => (
                  <div className="project-built-item" key={item}>
                    <CheckCircle2 size={15} strokeWidth={2.25} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <ProjectTechTags tech={project.tech} />

          {project.metrics?.length > 0 && (
            <div className="project-metrics">
              {project.metrics.map(({ value, label }) => (
                <div className="project-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <ProjectVisual project={project} featured />
      </div>
    </Component>
  )
})

const ProjectCard = memo(function ProjectCard({ project }) {
  const tilt = useTilt()
  const Icon = ICON_MAP[project.icon] || Layers
  const isLive = project.badge === 'live'
  const Component = project.link ? motion.a : motion.article

  return (
    <Component
      href={project.link}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      className={`project-card project-card-compact inner-glow-container ${project.link ? 'cursor-pointer' : ''}`}
      variants={itemVariants}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        '--project-accent': project.accent,
        '--project-accent-secondary': project.accentSecondary || project.accent,
      }}
      {...tilt.handlers}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.28,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="hud-corners" />
      <div className="hud-grid" />
      <div className="project-card-shine" aria-hidden="true" />

      <div className="project-card-header">
        <span className="project-icon">
          <Icon size={21} strokeWidth={2.15} />
        </span>

        <span className={`badge ${isLive ? 'badge-live' : 'badge-building'}`}>
          {isLive && <span className="badge-dot" />}
          {project.badgeLabel}
        </span>
      </div>

      <div className="project-card-body">
        <p className="project-card-role">{project.role}</p>
        <h3>{project.title}</h3>
        <p className="project-card-tagline">{project.tagline}</p>
      </div>

      <div className="project-tech-tags-wrapper">
        <ProjectTechTags tech={project.tech} limit={4} />
      </div>

      <div className="project-card-footer">
        <span>Case study summary</span>
        <ArrowUpRight size={16} strokeWidth={2.35} />
      </div>
    </Component>
  )
})

function ProjectsCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let isPaused = false
    let phase = 0
    const loop = createInputAwareFrameLoop(
      () => {
        if (isPaused) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const cols = 22
        const rows = 6
        const spacingX = canvas.width / (cols - 1)
        const spacingY = canvas.height / (rows - 1 || 1)

        ctx.fillStyle = 'rgba(200, 154, 24, 0.18)'

        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const x = c * spacingX
            const wave = Math.sin((c / cols) * Math.PI * 2.5 + phase) * 16
            const y = r * spacingY + wave

            ctx.beginPath()
            ctx.arc(x, y, 1.5, 0, Math.PI * 2)
            ctx.fill()
          }
        }

        phase += 0.015
      },
      { fps: 20, yieldMs: 160 }
    )
    const unbindInput = loop.bind()

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    const resizeObserver = new ResizeObserver(() => resizeCanvas())
    resizeObserver.observe(canvas)

    // IntersectionObserver to pause when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        isPaused = !entry.isIntersecting
        if (entry.isIntersecting) {
          loop.reset()
          loop.start()
        } else {
          loop.stop()
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    // VisibilityChange to pause when tab backgrounded
    const handleVisibility = () => {
      isPaused = document.hidden
      if (!document.hidden) {
        loop.reset()
        loop.start()
      } else {
        loop.stop()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)

    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) {
      isPaused = true
      loop.stop()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Draw static grid once
      const cols = 22
      const rows = 6
      const spacingX = canvas.width / (cols - 1)
      const spacingY = canvas.height / (rows - 1 || 1)
      ctx.fillStyle = 'rgba(200, 154, 24, 0.08)'
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * spacingX
          const y = r * spacingY
          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    } else if (!document.hidden) {
      loop.start()
    }

    return () => {
      loop.stop()
      unbindInput()
      observer.disconnect()
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
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
        opacity: 0.5,
      }}
    />
  )
}

export default function Projects() {
  const featuredProject = DATA.projects.find((project) => project.featured)
  const secondaryProjects = DATA.projects.filter((project) => !project.featured)

  return (
    <section className="section readability-mask projects-section" data-cosmic-scene="black-hole">

      <div className="section-inner">
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
            overline="My Work"
            title="Projects and engineering execution."
            subtitle="A record of the systems I worked on, my role, and the technical decisions behind them."
          />
        </motion.div>

        <motion.div
          className="projects-layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-80px',
          }}
        >
          {featuredProject && <FeaturedProjectCard project={featuredProject} />}

          <div className="projects-grid">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          overflow: hidden;
        }

        .proj-blob-wrapper {
          position: absolute;
          will-change: transform;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .proj-blob-blue-wrapper {
          width: 7.5rem;
          height: 7.5rem;
          top: 1.5rem;
          right: -2.25rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .proj-blob-lavender-wrapper {
          width: 6rem;
          height: 6rem;
          left: -2rem;
          bottom: 1.5rem;
          transform: scale(4) translate3d(0, 0, 0);
        }

        .proj-blob {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(10px);
          opacity: 0.72;
          transform: translateZ(0);
        }

        .proj-blob-blue {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.08), transparent 68%);
        }

        .proj-blob-lavender {
          background: radial-gradient(circle, rgba(200, 154, 24, 0.07), transparent 68%);
        }

        .projects-layout {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 1.5rem;
        }

        .project-card {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
          background: rgba(7, 7, 11, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          will-change: transform;
          overflow: hidden;
          transition:
            border-color 260ms var(--ease-out),
            box-shadow 260ms var(--ease-out);
        }

        .project-card:hover {
          border-color: color-mix(in srgb, var(--project-accent) 48%, transparent);
          box-shadow:
            0 30px 86px rgba(0, 0, 0, 0.5),
            0 0 30px color-mix(in srgb, var(--project-accent) 15%, transparent);
        }

        .project-card-shine {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 12% 8%, color-mix(in srgb, var(--project-accent) 10%, transparent), transparent 28%),
            radial-gradient(circle at 88% 16%, color-mix(in srgb, var(--project-accent-secondary) 8%, transparent), transparent 32%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.03), transparent 36%);
          opacity: 0.86;
        }

        .project-card-featured {
          border-radius: var(--radius-2xl);
          padding: clamp(1.5rem, 4vw, 2.7rem);
        }

        .project-featured-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: stretch;
        }

        .project-featured-main {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }

        .project-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .project-card-role {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 750;
        }

        .project-card-role svg {
          color: var(--project-accent);
        }

        .project-title-block {
          display: grid;
          gap: 0.5rem;
        }

        .project-title-block h3,
        .project-card-body h3 {
          color: var(--text-primary);
          font-family: var(--font-display);
          letter-spacing: -0.045em;
        }

        .project-title-block h3 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          line-height: 1.05;
        }

        .project-tagline {
          color: var(--text-secondary);
          font-size: 1.05rem;
          font-weight: 550;
        }

        .project-story-panel {
          padding: 1.25rem;
          background: rgba(7, 7, 11, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 1.15rem;
        }

        .project-story-panel p {
          font-size: 0.94rem;
          line-height: 1.62;
          color: var(--text-secondary);
          margin: 0;
        }

        .project-built {
          display: grid;
          gap: 0.85rem;
        }

        .project-mini-heading {
          color: var(--text-secondary);
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.13em;
          line-height: 1;
          text-transform: uppercase;
        }

        .project-built-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.62rem;
        }

        .project-built-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          min-width: 0;
          padding: 0.72rem 0.78rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 0.95rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          font-size: 0.82rem;
          font-weight: 620;
          line-height: 1.45;
        }

        .project-built-item svg {
          flex: 0 0 auto;
          margin-top: 0.08rem;
          color: var(--project-accent);
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .project-tech-more {
          color: var(--project-accent);
          background: color-mix(in srgb, var(--project-accent) 12%, transparent);
          border-color: color-mix(in srgb, var(--project-accent) 26%, transparent);
        }

        .project-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          padding-top: 1.1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .project-metric {
          display: grid;
          gap: 0.15rem;
        }

        .project-metric strong {
          color: var(--text-primary);
          font-family: var(--font-display);
          font-size: 1.28rem;
          line-height: 1;
          letter-spacing: -0.035em;
        }

        .project-metric span {
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 650;
        }

        .project-visual {
          position: relative;
          min-height: 100%;
          padding: 1.2rem;
          border-radius: 2rem;
          background:
            radial-gradient(circle at 18% 14%, color-mix(in srgb, var(--project-accent) 10%, transparent), transparent 34%),
            radial-gradient(circle at 88% 84%, color-mix(in srgb, var(--project-accent-secondary) 8%, transparent), transparent 36%),
            rgba(3, 3, 5, 0.58);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.05),
            0 18px 54px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          isolation: isolate;
        }

        .project-visual.featured {
          min-height: 28rem;
        }

        .project-visual-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
          transition: opacity 0.4s ease, transform 0.6s ease;
        }

        .project-card:hover .project-visual-image {
          opacity: 1;
          transform: scale(1.03);
        }

        .project-visual-orb {
          position: absolute;
          width: 16rem;
          height: 16rem;
          top: 50%;
          left: 50%;
          border-radius: var(--radius-blob);
          background:
            radial-gradient(circle at 30% 24%, rgba(7, 7, 11, 0.1), transparent 28%),
            linear-gradient(135deg, color-mix(in srgb, var(--project-accent) 15%, transparent), color-mix(in srgb, var(--project-accent-secondary) 10%, transparent));
          box-shadow:
            inset 0 0 38px rgba(255, 255, 255, 0.05),
            0 24px 70px color-mix(in srgb, var(--project-accent) 15%, transparent);
          transform: translate(-50%, -50%);
          animation: morph-blob 12s ease-in-out infinite, float-y 6s ease-in-out infinite;
          z-index: 1;
        }

        .project-visual-main {
          position: absolute;
          z-index: 3;
          left: 1.2rem;
          right: 1.2rem;
          top: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.95rem;
          background: rgba(7, 7, 11, 0.72);
          border: 1px solid rgba(7, 7, 11, 0.1);
          border-radius: 1.15rem;
          box-shadow: var(--shadow-sm);
          will-change: transform;
        }

        .project-visual-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          flex: 0 0 auto;
          color: var(--project-accent);
          background: color-mix(in srgb, var(--project-accent) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--project-accent) 28%, transparent);
          border-radius: 1rem;
        }

        .project-visual-copy {
          display: grid;
          gap: 0.15rem;
          min-width: 0;
        }

        .project-visual-copy strong {
          color: var(--text-primary);
          font-size: 0.88rem;
          line-height: 1.2;
        }

        .project-visual-copy small {
          color: var(--text-muted);
          font-size: 0.72rem;
          font-weight: 650;
          line-height: 1.25;
        }

        .project-visual-grid {
          position: absolute;
          z-index: 2;
          left: 1.2rem;
          right: 1.2rem;
          bottom: 5.3rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
        }

        .project-visual-grid span {
          height: 4.8rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: var(--shadow-xs);
          will-change: transform;
        }

        .project-visual-grid span:nth-child(2) {
          transform: translateY(1.2rem);
        }

        .project-visual-grid span:nth-child(3) {
          transform: translateY(-0.8rem);
        }

        .project-visual-status {
          position: absolute;
          z-index: 4;
          left: 1.2rem;
          right: 1.2rem;
          bottom: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.85rem;
          background: rgba(7, 7, 11, 0.76);
          border: 1px solid rgba(7, 7, 11, 0.1);
          border-radius: 1.15rem;
          box-shadow: var(--shadow-sm);
          will-change: transform;
        }

        .project-visual-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          color: var(--project-accent);
          background: color-mix(in srgb, var(--project-accent) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--project-accent) 25%, transparent);
          border-radius: 0.8rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .project-card-compact {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          padding: 1.5rem;
          border-radius: 1.7rem;
        }

        .project-card-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .project-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          color: var(--project-accent);
          background: color-mix(in srgb, var(--project-accent) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--project-accent) 28%, transparent);
          border-radius: 1rem;
          box-shadow: 0 12px 28px color-mix(in srgb, var(--project-accent) 14%, transparent);
        }

        .project-card-body {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          flex-grow: 1;
        }

        .project-card-body h3 {
          font-size: clamp(1.35rem, 2.1vw, 1.78rem);
          line-height: 1.08;
        }

        .project-card-role {
          font-size: 0.74rem;
          font-weight: 750;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-card-tagline {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }



        .project-tech-tags-wrapper {
          position: relative;
          z-index: 2;
          margin-top: auto;
        }

        .project-card-footer {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-weight: 800;
        }

        .project-card-footer svg {
          color: var(--project-accent);
          transition: transform 240ms var(--ease-spring);
        }

        .project-card-compact:hover .project-card-footer svg {
          transform: translate(3px, -3px);
        }

        @media (max-width: 1100px) {
          .project-featured-content {
            grid-template-columns: 1fr;
          }

          .project-visual.featured {
            min-height: 24rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .project-card-featured {
            border-radius: 1.8rem;
            padding: 1.2rem;
          }

          .project-built-grid {
            grid-template-columns: 1fr;
          }

          .project-metrics {
            grid-template-columns: 1fr;
          }

          .project-visual.featured {
            min-height: 21rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-visual-grid {
            display: none;
          }
        }

        @media (max-width: 520px) {
          .project-card-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .project-visual-main,
          .project-visual-status {
            left: 0.8rem;
            right: 0.8rem;
          }

          .project-visual-main {
            top: 0.8rem;
          }

          .project-visual-status {
            bottom: 0.8rem;
            align-items: flex-start;
            flex-direction: column;
          }

          .project-card-compact {
            padding: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
