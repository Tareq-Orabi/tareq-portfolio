/**
 * Lightfall — unified gold version
 *
 * Matches GlobalFiberBackground.jsx:
 *   background: #0C0C0D
 *   accent:     #C89A18
 *
 * The shader uses one hue only. Brightness and opacity may vary, but it never
 * introduces another gold, blue, violet, or multicolored highlight.
 */

import { useEffect, useRef } from 'react'
import { Mesh, Program, Renderer, Triangle } from 'ogl'

export const COSMIC_BACKGROUND_COLOR = '#0C0C0D'
export const COSMIC_GOLD_COLOR = '#C89A18'

function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value))
}

function hexToRGB(hex) {
  const cleaned = String(hex || '')
    .replace('#', '')
    .trim()
  const normalized =
    cleaned.length === 3
      ? cleaned
        .split('')
        .map(character => character + character)
        .join('')
      : cleaned.padEnd(6, '0').slice(0, 6)

  const red = Number.parseInt(normalized.slice(0, 2), 16)
  const green = Number.parseInt(normalized.slice(2, 4), 16)
  const blue = Number.parseInt(normalized.slice(4, 6), 16)

  return [
    Number.isFinite(red) ? red / 255 : 0,
    Number.isFinite(green) ? green / 255 : 0,
    Number.isFinite(blue) ? blue / 255 : 0,
  ]
}

function getQualityProfile(width) {
  const lowCoreCount =
    navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4
  const lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4
  const constrained = Boolean(
    lowCoreCount || lowMemory || navigator.connection?.saveData,
  )

  if (width <= 640) {
    return {
      fps: constrained ? 20 : 26,
      dprCap: 1,
      maxPixels: 1_050_000,
      mouse: false,
      iterations: constrained ? 18 : 22,
    }
  }

  if (width <= 1080) {
    return {
      fps: constrained ? 24 : 32,
      dprCap: constrained ? 1 : 1.15,
      maxPixels: constrained ? 1_400_000 : 1_900_000,
      mouse: !constrained,
      iterations: constrained ? 22 : 26,
    }
  }

  return {
    fps: constrained ? 28 : 40,
    dprCap: constrained ? 1 : 1.35,
    maxPixels: constrained ? 2_000_000 : 3_000_000,
    mouse: true,
    iterations: 28,
  }
}

function getRenderDpr(width, height, requestedDpr, quality) {
  const nativeDpr = requestedDpr ?? window.devicePixelRatio ?? 1
  const cappedDpr = Math.min(nativeDpr, quality.dprCap)
  const pixelLimitScale = Math.sqrt(
    quality.maxPixels / Math.max(1, width * height),
  )

  return Math.max(0.75, Math.min(cappedDpr, pixelLimitScale))
}

const vertex = /* glsl */ `
attribute vec2 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = /* glsl */ `
precision highp float;

#define TAU 6.283185307179586

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;

uniform vec3 uGoldColor;
uniform vec3 uBackgroundColor;
uniform float uSpeed;
uniform int uStreakCount;
uniform float uStreakWidth;
uniform float uStreakLength;
uniform float uGlow;
uniform float uDensity;
uniform float uTwinkle;
uniform float uZoom;
uniform float uBackgroundGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;
uniform int uIterations;

varying vec2 vUv;

float tanhScalar(float value) {
  float exponential = exp(-2.0 * value);
  return (1.0 - exponential) / (1.0 + exponential);
}

vec2 sceneCoordinate(vec2 fragmentCoordinate, vec2 resolution) {
  vec2 point = (
    fragmentCoordinate + fragmentCoordinate - resolution
  ) / resolution.x;
  float travel = 0.0;
  float distanceToSurface = 1e3;
  vec4 orbit = vec4(0.0);

  for (int iteration = 0; iteration < 28; iteration++) {
    if (iteration >= uIterations || distanceToSurface <= 1e-4) break;

    orbit = travel * normalize(vec4(point, uZoom, 0.0))
      - vec4(0.0, 4.0, 1.0, 0.0) / 4.5;
    distanceToSurface = 1.0 - sqrt(length(orbit * orbit));
    travel += distanceToSurface;
  }

  return vec2(orbit.x, atan(orbit.z, orbit.y));
}

void mainImage(out vec4 outputColor, vec2 fragmentCoordinate) {
  vec2 resolution = iResolution.xy;
  vec2 normalizedPoint = (
    fragmentCoordinate + fragmentCoordinate - resolution
  ) / resolution.x;
  float time = 0.1 * iTime * uSpeed + 9.0;
  float angularRings = max(
    1.0,
    floor(TAU * max(uDensity, 0.05) + 0.5)
  );
  vec2 cellSize = vec2(5e-3, TAU / angularRings);

  vec2 coordinate = sceneCoordinate(fragmentCoordinate, resolution);
  vec2 coordinateX = sceneCoordinate(
    fragmentCoordinate + vec2(1.0, 0.0),
    resolution
  );
  vec2 coordinateY = sceneCoordinate(
    fragmentCoordinate + vec2(0.0, 1.0),
    resolution
  );
  vec2 derivativeX = coordinateX - coordinate;
  vec2 derivativeY = coordinateY - coordinate;
  derivativeX.y -= TAU * floor(derivativeX.y / TAU + 0.5);
  derivativeY.y -= TAU * floor(derivativeY.y / TAU + 0.5);
  vec2 filterWidth = abs(derivativeX) + abs(derivativeY);

  float mouseGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 normalizedMouse = (iMouse + iMouse - resolution) / resolution.x;
    float mouseDistance = length(normalizedPoint - normalizedMouse);
    mouseGlow = exp(
      -mouseDistance * mouseDistance /
      max(uMouseRadius * uMouseRadius, 1e-4)
    ) * uMouseStrength;
  }

  float streakRadius = 5e-4 * uStreakWidth;
  vec2 antialiasWidth = vec2(max(length(filterWidth), 1e-5));
  float tail = 19.0 / max(uStreakLength, 0.05);
  float lightEnergy = 0.0;

  for (int streak = 0; streak < 16; streak++) {
    if (streak >= uStreakCount) break;

    float streakIndex = float(streak) + 1.0;
    float identity = fract(
      sin(
        dot(
          vec2(streakIndex, floor(coordinate.x / cellSize.x + 0.5)),
          vec2(7.0, 11.0)
        ) * 73.0
      )
    );
    vec2 local = coordinate
      - (time + time * identity) * vec2(0.0, 1.0);
    local -= floor(local / cellSize + 0.5) * cellSize;

    float phase = fract(8663.0 * identity);
    float weight = mix(
      1.5,
      1.0 + sin(time + 7.0 * phase + 4.0),
      uTwinkle
    );
    weight *= 1.0 + mouseGlow * 2.0;

    vec2 inner = vec2(
      length(max(local, vec2(-1.0, 0.0))),
      length(local) - streakRadius
    ) - streakRadius;
    vec2 shape = vec2(1.0) - smoothstep(
      -antialiasWidth,
      antialiasWidth,
      inner
    );

    lightEnergy += dot(shape, vec2(exp(tail * local.y), 3.0)) * weight;
    coordinate.x += cellSize.x / 8.0;
  }

  float mappedLight = sqrt(
    max(tanhScalar(max(lightEnergy * uGlow - 0.035, 0.0)), 0.0)
  );
  float backgroundHalo = uBackgroundGlow
    / (360.0 * dot(normalizedPoint, normalizedPoint) + 6.0);

  // Exact hue unification: every luminous pixel is derived from uGoldColor.
  vec3 color = uBackgroundColor;
  color += uGoldColor * backgroundHalo;
  color += uGoldColor * mappedLight;
  color += uGoldColor * mouseGlow * 0.075;

  outputColor = vec4(color, uOpacity);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`

export default function Lightfall({
  className = '',
  dpr,
  paused = false,
  goldColor = COSMIC_GOLD_COLOR,
  backgroundColor = COSMIC_BACKGROUND_COLOR,
  speed = 0.5,
  streakCount = 2,
  streakWidth = 1,
  streakLength = 1,
  glow = 1,
  density = 0.6,
  twinkle = 1,
  zoom = 3,
  backgroundGlow = 0.3,
  opacity = 1,
  mouseInteraction = true,
  mouseStrength = 0.5,
  mouseRadius = 1,
  mouseDampening = 0.16,
  mixBlendMode,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    let reducedMotion = reducedMotionQuery.matches
    let disposed = false
    let resizeTimer = null
    let lastFrameTime = 0

    const initialQuality = getQualityProfile(window.innerWidth)
    let renderer

    try {
      renderer = new Renderer({
        dpr: getRenderDpr(
          window.innerWidth,
          window.innerHeight,
          dpr,
          initialQuality,
        ),
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
    } catch (error) {
      console.error('Lightfall: WebGL is unavailable.', error)
      return undefined
    }

    const gl = renderer.gl
    const canvas = gl.canvas
    const state = {
      width: 1,
      height: 1,
      quality: initialQuality,
      time: 0,
      rafId: null,
      mouseX: 0.5,
      mouseY: 0.5,
      targetMouseX: 0.5,
      targetMouseY: 0.5,
    }

    canvas.setAttribute('aria-hidden', 'true')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    canvas.style.pointerEvents = 'none'
    container.appendChild(canvas)

    const uniforms = {
      iResolution: { value: [1, 1, 1] },
      iMouse: { value: [0, 0] },
      iTime: { value: 0 },
      uGoldColor: { value: hexToRGB(goldColor) },
      uBackgroundColor: { value: hexToRGB(backgroundColor) },
      uSpeed: { value: Math.max(0, speed) },
      uStreakCount: {
        value: Math.max(1, Math.min(16, Math.round(streakCount))),
      },
      uStreakWidth: { value: Math.max(0.05, streakWidth) },
      uStreakLength: { value: Math.max(0.05, streakLength) },
      uGlow: { value: Math.max(0, glow) },
      uDensity: { value: Math.max(0.05, density) },
      uTwinkle: { value: clamp(twinkle) },
      uZoom: { value: Math.max(0.2, zoom) },
      uBackgroundGlow: { value: Math.max(0, backgroundGlow) },
      uOpacity: { value: clamp(opacity) },
      uMouseEnabled: { value: mouseInteraction ? 1 : 0 },
      uMouseStrength: { value: Math.max(0, mouseStrength) },
      uMouseRadius: { value: Math.max(0.01, mouseRadius) },
      uIterations: { value: initialQuality.iterations },
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms,
      depthTest: false,
      depthWrite: false,
      cullFace: null,
    })
    const geometry = new Triangle(gl)
    const mesh = new Mesh(gl, {
      geometry,
      program,
      frustumCulled: false,
    })

    function updatePointerUniform() {
      uniforms.iMouse.value = [
        state.mouseX * gl.drawingBufferWidth,
        (1 - state.mouseY) * gl.drawingBufferHeight,
      ]
    }

    function resize() {
      const rect = container.getBoundingClientRect()
      state.width = Math.max(1, rect.width)
      state.height = Math.max(1, rect.height)
      state.quality = getQualityProfile(state.width)
      renderer.dpr = getRenderDpr(
        state.width,
        state.height,
        dpr,
        state.quality,
      )
      renderer.setSize(state.width, state.height)
      uniforms.iResolution.value = [
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        1,
      ]
      uniforms.uIterations.value = state.quality.iterations
      updatePointerUniform()
    }

    function render() {
      uniforms.iTime.value = state.time
      updatePointerUniform()
      renderer.render({ scene: mesh })
    }

    function animationLoop(timestamp) {
      if (document.visibilityState === 'hidden' || disposed) {
        state.rafId = null
        return
      }

      const frameInterval = 1000 / state.quality.fps
      if (lastFrameTime && timestamp - lastFrameTime < frameInterval) {
        state.rafId = window.requestAnimationFrame(animationLoop)
        return
      }

      const deltaSeconds = lastFrameTime
        ? Math.min((timestamp - lastFrameTime) / 1000, 0.1)
        : 1 / state.quality.fps
      lastFrameTime = timestamp
      state.time += deltaSeconds

      const pointerResponse = mouseDampening > 0 ? 1 / mouseDampening : 1000
      const pointerBlend = 1 - Math.exp(-pointerResponse * deltaSeconds)
      state.mouseX += (state.targetMouseX - state.mouseX) * pointerBlend
      state.mouseY += (state.targetMouseY - state.mouseY) * pointerBlend

      render()
      state.rafId = window.requestAnimationFrame(animationLoop)
    }

    function startLoop() {
      if (
        paused ||
        reducedMotion ||
        state.rafId ||
        document.visibilityState === 'hidden'
      ) {
        return
      }

      lastFrameTime = 0
      state.rafId = window.requestAnimationFrame(animationLoop)
    }

    function stopLoop() {
      if (!state.rafId) return
      window.cancelAnimationFrame(state.rafId)
      state.rafId = null
    }

    function onPointerMove(event) {
      if (!mouseInteraction || !state.quality.mouse) return

      const rect = container.getBoundingClientRect()
      state.targetMouseX = clamp((event.clientX - rect.left) / state.width)
      state.targetMouseY = clamp((event.clientY - rect.top) / state.height)
    }

    function onResize() {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        if (disposed) return
        resize()
        render()
      }, 150)
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'visible') {
        if (paused || reducedMotion) render()
        else startLoop()
      } else {
        stopLoop()
      }
    }

    function onReducedMotionChange(event) {
      reducedMotion = event.matches

      if (reducedMotion) {
        stopLoop()
        render()
      } else {
        startLoop()
      }
    }

    resize()
    render()
    startLoop()

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(container)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
    reducedMotionQuery.addEventListener('change', onReducedMotionChange)

    return () => {
      disposed = true
      stopLoop()
      window.clearTimeout(resizeTimer)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      reducedMotionQuery.removeEventListener('change', onReducedMotionChange)

      program.remove?.()
      geometry.remove?.()

      if (canvas.parentElement === container) {
        container.removeChild(canvas)
      }
    }
  }, [
    backgroundColor,
    backgroundGlow,
    density,
    dpr,
    glow,
    goldColor,
    mouseDampening,
    mouseInteraction,
    mouseRadius,
    mouseStrength,
    opacity,
    paused,
    speed,
    streakCount,
    streakLength,
    streakWidth,
    twinkle,
    zoom,
  ])

  return (
    <div
      ref={containerRef}
      className={`lightfall-container ${className}`.trim()}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        background: backgroundColor,
        ...(mixBlendMode ? { mixBlendMode } : {}),
      }}
    />
  )
}