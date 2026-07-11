import { MotionConfig } from 'framer-motion'
import './index.css'
import './hud.css'
import './App.css'
import GlobalFiberBackground from './components/GlobalFiberBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofBar from './components/ProofBar'
import Projects from './components/Projects'

import Skills from './components/Skills'
import ProductionPipeline from './components/Devops'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    // MotionConfig: caps transition duration and respects reduced-motion preference.
    // Prevents Framer Motion from doing expensive work during pointer interactions.
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="app-shell">
        <a href="#app-main" className="skip-to-content">Skip to Content</a>
        <GlobalFiberBackground />

        <Navbar />

        <main id="app-main" className="app-main">
          {/* Hero renders its own <section id="hero"> — no wrapper here */}
          <Hero />

          <ProofBar />

          <section id="about" className="hud-container">
            <div className="hud-corners" />
            <div className="scanline-overlay" />
            <div className="cinematic-viewport">
              <About />
            </div>
          </section>

          <section id="work" className="hud-container">
            <div className="hud-corners" />
            <div className="scanline-overlay" />
            <div className="cinematic-viewport">
              <Projects />
            </div>
          </section>

          <section id="octagram" className="hud-container">
            <div className="hud-corners" />
            <div className="scanline-overlay" />
            <div className="cinematic-viewport">

            </div>
          </section>

          <section id="stack" className="hud-container">
            <div className="hud-corners" />
            <div className="scanline-overlay" />
            <div className="cinematic-viewport">
              <Skills />
            </div>
          </section>

          <section id="pipeline" className="hud-container">
            <div className="hud-corners" />
            <div className="scanline-overlay" />
            <div className="cinematic-viewport">
              <ProductionPipeline />
            </div>
          </section>

          <section id="experience" className="hud-container">
            <div className="hud-corners" />
            <div className="scanline-overlay" />
            <div className="cinematic-viewport">
              <Experience />
            </div>
          </section>

          <section id="contact" className="hud-container">
            <div className="hud-corners" />
            <div className="scanline-overlay" />
            <div className="cinematic-viewport">
              <Contact />
            </div>
          </section>
        </main>
      </div>
    </MotionConfig>
  )
}