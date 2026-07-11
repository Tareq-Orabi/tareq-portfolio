import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Home,
  User,
  FolderKanban,
  Cpu,
  Briefcase,
  Send,
} from 'lucide-react'

const ICON_MAP = {
  Home,
  User,
  FolderKanban,
  Cpu,
  Briefcase,
  Send,
}

const NAV_ITEMS = [
  { label: 'Home', href: '#hero', icon: 'Home' },
  { label: 'About', href: '#about', icon: 'User' },
  { label: 'Work', href: '#work', icon: 'FolderKanban' },
  { label: 'Skills', href: '#stack', icon: 'Cpu' },
  { label: 'Experience', href: '#experience', icon: 'Briefcase' },
  { label: 'Contact', href: '#contact', icon: 'Send' },
]

function scrollToTarget(href) {
  if (!href?.startsWith('#')) return

  const target = document.querySelector(href)
  if (!target) return

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export default function Navbar() {
  const [active, setActive] = useState('#hero')
  const reduceMotion = useReducedMotion()

  // Highlight links based on scroll intersection
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visibleEntry) return
        setActive(`#${visibleEntry.target.id}`)
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setActive(href)
    scrollToTarget(href)
  }

  return (
    <>
      {/* Premium Floating HUD Navbar (Top Center) */}
      <motion.nav
        className="floating-top-nav"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Floating Top Navigation Console"
      >
        <div className="nav-inner">
          {NAV_ITEMS.map((item) => {
            const IconComponent = ICON_MAP[item.icon]
            const isActive = active === item.href

            return (
              <button
                key={item.href}
                type="button"
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNav(item.href)}
                aria-label={`Scroll to ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active Indicator Capsule */}
                {isActive && (
                  <motion.span
                    className="active-tab-capsule"
                    layoutId="activeTopTab"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 28 }
                    }
                  />
                )}

                <span className="nav-item-icon-wrapper">
                  <IconComponent size={19} strokeWidth={isActive ? 2.35 : 1.9} />
                </span>
                
                <span className="nav-item-label">{item.label}</span>
              </button>
            )
          })}
        </div>
      </motion.nav>

      <style>{`
        /* ═══════════════════════════════════════════
           FLOATING TOP GLASS NAVIGATION BAR
           ─────────────────────────────────────────── */
        .floating-top-nav {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          z-index: 995;
          width: calc(100% - 2.5rem);
          max-width: 480px;
          background: rgba(6, 6, 9, 0.75);
          border: 1px solid rgba(200, 154, 24, 0.13);
          border-radius: 30px;
          box-shadow:
            0 16px 45px rgba(0, 0, 0, 0.65),
            0 0 20px rgba(200, 154, 24, 0.04),
            inset 0 0 0 1px rgba(255, 255, 255, 0.02);
          padding: 0.45rem;
          box-sizing: border-box;
          overflow: visible;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          position: relative;
          overflow: visible;
        }

        .nav-item {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          height: 3.1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-muted);
          outline: none;
          transition: color 240ms var(--ease-out);
          -webkit-tap-highlight-color: transparent;
        }

        .nav-item:hover {
          color: var(--text-primary);
        }

        .nav-item.active {
          color: #C89A18;
        }

        .nav-item-icon-wrapper {
          position: relative;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 260ms var(--ease-spring);
        }

        .nav-item:hover .nav-item-icon-wrapper {
          transform: scale(1.12);
        }

        .nav-item.active .nav-item-icon-wrapper {
          transform: translateY(-1px);
        }

        .nav-item-label {
          position: relative;
          z-index: 3;
          font-family: var(--font-mono);
          font-size: 0.54rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        /* sliding background capsule */
        .active-tab-capsule {
          position: absolute;
          inset: 0.15rem 0.25rem;
          z-index: 1;
          border-radius: 18px;
          background: rgba(200, 154, 24, 0.06);
          border: 1px solid rgba(200, 154, 24, 0.16);
          box-shadow: 0 0 15px rgba(200, 154, 24, 0.06);
          pointer-events: none;
        }

        @media (max-width: 480px) {
          .floating-top-nav {
            top: 1rem;
            width: calc(100% - 1.5rem);
            border-radius: 24px;
          }

          .nav-item {
            height: 2.85rem;
            gap: 0.15rem;
          }

          .nav-item-label {
            font-size: 0.48rem;
          }

          .active-tab-capsule {
            border-radius: 14px;
            inset: 0.12rem 0.16rem;
          }
        }
      `}</style>
    </>
  )
}