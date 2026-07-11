import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { createInputAwareFrameLoop } from '../utils/animationBudget'

// --- HELPER HOOK ---
// Automatically pauses canvas animation when out of view
function useCanvasAnimation(drawFn) {
  const canvasRef = useRef(null)
  const isInView = useInView(canvasRef, { margin: "200px 0px" })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isInView) return

    const ctx = canvas.getContext('2d', { alpha: true })
    let w, h
    const loop = createInputAwareFrameLoop(
      (time) => {
        drawFn.draw(ctx, w, h, time, state)
      },
      { fps: 24, yieldMs: 150 }
    )
    const unbindInput = loop.bind()

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25)
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      loop.reset()
    }

    resize()
    window.addEventListener('resize', resize)

    // Setup function can return a state object for the animation loop
    const state = drawFn.setup ? drawFn.setup(w, h) : {}
    loop.start()

    return () => {
      loop.stop()
      unbindInput()
      window.removeEventListener('resize', resize)
    }
  }, [isInView, drawFn])

  return canvasRef
}

// ==========================================
// 1. ABOUT: Neural Map Signature
// ==========================================
export function AboutCanvas() {
  const drawFn = {
    setup: (w, h) => {
      const nodes = Array.from({ length: 15 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1
      }))
      return { nodes }
    },
    draw: (ctx, w, h, time, { nodes }) => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(200, 154, 24, 0.4)'
        ctx.fill()
      })

      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(200, 154, 24, ${0.15 * (1 - dist / 200)})`
            ctx.stroke()
          }
        }
      }
    }
  }

  const canvasRef = useCanvasAnimation(drawFn)
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full opacity-60 z-0" />
}

// ==========================================
// 2. SKILLS: Glowing Skill Orbits
// ==========================================
export function SkillsCanvas() {
  const drawFn = {
    setup: (w, h) => {
      return {
        cx: w / 2,
        cy: h / 2,
        orbits: [
          { radius: Math.min(w, h) * 0.3,  speed:  0.0005, color: 'rgba(200, 154, 24, 0.10)' },
          { radius: Math.min(w, h) * 0.45, speed: -0.0003, color: 'rgba(200, 154, 24, 0.07)' },
          { radius: Math.min(w, h) * 0.6,  speed:  0.0002, color: 'rgba(200, 154, 24, 0.05)' }
        ]
      }
    },
    draw: (ctx, w, h, time, { cx, cy, orbits }) => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      orbits.forEach(orbit => {
        ctx.beginPath()
        ctx.arc(cx, cy, orbit.radius, 0, Math.PI * 2)
        ctx.strokeStyle = orbit.color
        ctx.lineWidth = 1
        ctx.stroke()

        // Orbiting particle
        const px = cx + Math.cos(time * orbit.speed) * orbit.radius
        const py = cy + Math.sin(time * orbit.speed) * orbit.radius
        ctx.beginPath()
        ctx.arc(px, py, 3, 0, Math.PI * 2)
        ctx.fillStyle = orbit.color.replace('0.1)', '0.8)').replace('0.08)', '0.8)').replace('0.05)', '0.8)')
        ctx.fill()
        
        // Glow
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 40)
        gradient.addColorStop(0, orbit.color.replace('0.1)', '0.5)').replace('0.08)', '0.5)').replace('0.05)', '0.5)'))
        gradient.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(px, py, 40, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }
  }

  const canvasRef = useCanvasAnimation(drawFn)
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full z-0" />
}

// ==========================================
// 3. CONTACT: Converging Lines
// ==========================================
export function ContactCanvas() {
  const drawFn = {
    setup: (w, h) => {
      const particles = Array.from({ length: 40 }, () => ({
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * Math.max(w, h),
        speed: Math.random() * 0.5 + 0.2,
        size: Math.random() * 2 + 0.5
      }))
      return { particles }
    },
    draw: (ctx, w, h, time, { particles }) => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      const cx = w / 2
      const cy = h / 2

      particles.forEach(p => {
        p.dist -= p.speed
        if (p.dist < 10) p.dist = Math.max(w, h)

        const x = cx + Math.cos(p.angle) * p.dist
        const y = cy + Math.sin(p.angle) * p.dist
        
        const alpha = Math.max(0, 1 - p.dist / (Math.max(w, h) * 0.8))

        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + Math.cos(p.angle) * 20, y + Math.sin(p.angle) * 20)
        ctx.strokeStyle = `rgba(200, 154, 24, ${alpha * 0.4})`
        ctx.lineWidth = p.size
        ctx.stroke()
      })
      
      // Central pulse glow
      const pulseRadius = 150 + Math.sin(time * 0.002) * 20
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseRadius)
      gradient.addColorStop(0, 'rgba(200, 154, 24, 0.15)')
      gradient.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }
  }

  const canvasRef = useCanvasAnimation(drawFn)
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full z-0" />
}

// ==========================================
// 4. EXPERIENCE: Data Trace
// ==========================================
export function ExperienceCanvas() {
  const drawFn = {
    setup: (w, h) => {
      const traces = Array.from({ length: 8 }, () => ({
        x: w * 0.2 + Math.random() * w * 0.6, // clustered near center
        y: Math.random() * h,
        speed: Math.random() * 2 + 1,
        length: Math.random() * 60 + 20,
        alpha: Math.random() * 0.4 + 0.1
      }))
      return { traces }
    },
    draw: (ctx, w, h, time, { traces }) => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      traces.forEach(t => {
        t.y += t.speed
        if (t.y - t.length > h) {
          t.y = -t.length
          t.x = w * 0.2 + Math.random() * w * 0.6
        }

        const gradient = ctx.createLinearGradient(t.x, t.y - t.length, t.x, t.y)
        gradient.addColorStop(0, 'transparent')
        gradient.addColorStop(1, `rgba(200, 154, 24, ${t.alpha})`)
        ctx.beginPath()
        ctx.moveTo(t.x, t.y - t.length)
        ctx.lineTo(t.x, t.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.stroke()
      })
    }
  }

  const canvasRef = useCanvasAnimation(drawFn)
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-40" />
}
