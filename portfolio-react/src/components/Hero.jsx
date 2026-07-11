import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import {
  Server,
  Database,
  Cloud,
  Code2,
  Building2,
  Sparkles
} from 'lucide-react'

import './hero/Hero.css'

const Lightfall = lazy(() => import('./Lightfall'))

const focusAreas = [
  { icon: Server, label: 'Backend Architect' },
  { icon: Database, label: 'Database Modeler' },
  { icon: Cloud, label: 'VPS Deployer' },
  { icon: Code2, label: 'Spring / .NET' },
  { icon: Building2, label: 'Octagram Founder' }
]

const principles = [
  ['01', 'Think in systems'],
  ['02', 'Build under pressure'],
  ['03', 'Ship with discipline']
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const shouldReduceMotion = reduceMotion === true
  const [allowHeavyBg, setAllowHeavyBg] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion || typeof window === 'undefined') return

    const isSmallScreen = window.matchMedia('(max-width: 760px)').matches
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection

    const saveData = Boolean(connection?.saveData)
    const lowCores =
      typeof navigator.hardwareConcurrency === 'number' &&
      navigator.hardwareConcurrency <= 4

    const lowMemory =
      typeof navigator.deviceMemory === 'number' &&
      navigator.deviceMemory <= 4

    /**
     * أهم قرار أداء:
     * لا تشغل Lightfall على الموبايل أو الأجهزة الضعيفة.
     */
    if (isSmallScreen || saveData || lowCores || lowMemory) {
      setAllowHeavyBg(false)
      return
    }

    let cancelled = false
    let idleId = null
    let timeoutId = null

    const enableEffects = () => {
      if (!cancelled) setAllowHeavyBg(true)
    }

    /**
     * نشغل الخلفية الثقيلة بعد أول render،
     * عشان ما تضرب LCP/INP أول ما الصفحة تفتح.
     */
    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(enableEffects, { timeout: 900 })
    } else {
      timeoutId = window.setTimeout(enableEffects, 700)
    }

    return () => {
      cancelled = true

      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [shouldReduceMotion])

  const containerVariant = useMemo(
    () => ({
      hidden: { opacity: shouldReduceMotion ? 1 : 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.08,
          delayChildren: shouldReduceMotion ? 0 : 0.12
        }
      }
    }),
    [shouldReduceMotion]
  )

  const itemVariant = useMemo(
    () => ({
      hidden: {
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : 18
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.65,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    }),
    [shouldReduceMotion]
  )

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="hero"
        className="cosmic-hero"
        aria-label="Tareq Orabi Introduction"
      >
        <div className="cosmic-hero-frame">
          {allowHeavyBg ? (
            <Suspense fallback={<div className="cosmic-bg-static" aria-hidden="true" />}>
              <Lightfall
                className="cosmic-bg-video"
                colors={['#C89A18', '#A07812', '#E8B830']}
                backgroundColor="#0C0C0D"
                backgroundGlow={0.3}
                glow={1.1}
                speed={0.5}
                density={0.6}
                streakCount={2}
                twinkle={0.8}
              />
            </Suspense>
          ) : (
            <div className="cosmic-bg-static" aria-hidden="true" />
          )}

          <div className="cosmic-color-grade" aria-hidden="true" />
          <div className="cosmic-depth-mask" aria-hidden="true" />
          <div className="cosmic-vignette" aria-hidden="true" />

          {!shouldReduceMotion && (
            <svg
              className="cosmic-architecture"
              viewBox="0 0 1200 700"
              aria-hidden="true"
            >
              <path
                className="arch-path path-a"
                d="M80 420 C260 210, 470 620, 680 330 S1010 170, 1130 390"
              />
              <path
                className="arch-path path-b"
                d="M120 250 C340 390, 455 130, 655 260 S900 520, 1090 220"
              />
              <path
                className="arch-path path-c"
                d="M240 610 C420 450, 680 520, 840 330 S980 180, 1160 120"
              />

              <circle className="arch-node node-a" cx="220" cy="310" r="4" />
              <circle className="arch-node node-b" cx="510" cy="488" r="4" />
              <circle className="arch-node node-c" cx="728" cy="286" r="4" />
              <circle className="arch-node node-d" cx="984" cy="244" r="4" />
            </svg>
          )}

          <div className="cosmic-content">
            <main className="cosmic-stage">
              <m.div
                className="cosmic-thesis"
                variants={containerVariant}
                initial="hidden"
                animate="show"
              >
                <m.div className="cosmic-overline" variants={itemVariant}>
                  <Sparkles size={14} />
                  <span>Building systems with depth, not noise.</span>
                </m.div>

                <m.p className="cosmic-kicker" variants={itemVariant}>
                  SOFTWARE ENGINEER · FOUNDER · SYSTEMS BUILDER
                </m.p>

                <h1 className="cosmic-title">
                  <span className="title-word title-first">Tareq</span>
                  <span className="title-word title-last">Orabi</span>
                </h1>

                <m.h2 className="cosmic-role" variants={itemVariant}>
                  Software Engineer <span>&</span> Founder of Octagram
                </m.h2>

                <m.p className="cosmic-description" variants={itemVariant}>
                  I work on turning ideas into working systems — through backend
                  development, product thinking, deployment, and real client
                  projects. This portfolio is not a sales page; it is a record of
                  what I’ve built, what I’m building, and how I approach technical
                  work.
                </m.p>

                <m.div
                  className="cosmic-focus-inline"
                  aria-label="Technical focus areas"
                  variants={itemVariant}
                >
                  {focusAreas.map(({ icon: Icon, label }) => (
                    <div className="cosmic-focus-chip" key={label}>
                      <Icon size={15} />
                      <span>{label}</span>
                    </div>
                  ))}
                </m.div>
              </m.div>
            </main>

            <m.footer
              className="cosmic-bottom"
              initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.65,
                delay: shouldReduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="cosmic-principles">
                {principles.map(([number, text]) => (
                  <div className="cosmic-principle" key={number}>
                    <span>{number}</span>
                    <strong>{text}</strong>
                  </div>
                ))}
              </div>

              <div className="cosmic-footer-meta">
                <div className="cosmic-brand">
                  <span className="cosmic-brand-dot" />
                  <span>TAREQ ORABI</span>
                </div>

                <div className="cosmic-top-meta">
                  <span>Software Engineer</span>
                  <span>Founder of Octagram</span>
                  <span>Amman · Jordan</span>
                </div>
              </div>

              <p className="cosmic-bottom-note">
                Open to serious technical collaboration, software projects, and
                engineering roles.
              </p>
            </m.footer>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}