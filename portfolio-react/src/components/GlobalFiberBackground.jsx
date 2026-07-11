'use client'

/**
 * GlobalFiberBackground — Gold Lorenz field
 *
 * One mathematical Lorenz trajectory is generated once and kept intact.
 * Sections 1–4 only rotate/reframe that same geometry. Section 5 morphs the
 * trajectory into the previous vertical, spinning, glowing vortex.
 *
 * Section attributes:
 *   data-cosmic-scene="pose-1"
 *   data-cosmic-scene="pose-2"
 *   data-cosmic-scene="pose-3"
 *   data-cosmic-scene="pose-4"
 *   data-cosmic-scene="vortex"
 */

import { useEffect, useRef } from 'react'
import { Geometry, Mesh, Program, Renderer, Transform, Triangle } from 'ogl'

const TAU = Math.PI * 2

// Sampled from the supplied Axiom reference.
const REFERENCE_BACKGROUND = '#0C0C0D'
const REFERENCE_GOLD = '#C98A2B'

const SCENE_INDEX = {
  'pose-1': 0,
  pose1: 0,
  state1: 0,
  hero: 0,
  lightfall: 0,
  fibers: 0,

  'pose-2': 1,
  pose2: 1,
  state2: 1,
  portal: 1,
  'black-hole': 1,

  'pose-3': 2,
  pose3: 2,
  state3: 2,
  betelgeuse: 2,
  starfield: 2,

  'pose-4': 3,
  pose4: 3,
  state4: 3,
  constellation: 3,

  vortex: 4,
  horizon: 4,
}

const TRANSITION = {
  scrollStart: 0.08,
  scrollEnd: 0.92,
  stageResponse: 1.8,
}

function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value))
}

function lerp(a, b, amount) {
  return a + (b - a) * amount
}

function smootherstep(value) {
  const t = clamp(value)
  return t * t * t * (t * (t * 6 - 15) + 10)
}

function focusedTransition(
  progress,
  start = TRANSITION.scrollStart,
  end = TRANSITION.scrollEnd,
) {
  return smootherstep((progress - start) / Math.max(0.001, end - start))
}

function dampFactor(response, deltaSeconds) {
  return 1 - Math.exp(-response * deltaSeconds)
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

function lorenzDerivative(x, y, z) {
  const sigma = 10
  const rho = 28
  const beta = 8 / 3

  return [sigma * (y - x), x * (rho - z) - y, x * y - beta * z]
}

function integrateLorenz(point, deltaTime) {
  const [x, y, z] = point
  const first = lorenzDerivative(x, y, z)
  const second = lorenzDerivative(
    x + first[0] * deltaTime * 0.5,
    y + first[1] * deltaTime * 0.5,
    z + first[2] * deltaTime * 0.5,
  )
  const third = lorenzDerivative(
    x + second[0] * deltaTime * 0.5,
    y + second[1] * deltaTime * 0.5,
    z + second[2] * deltaTime * 0.5,
  )
  const fourth = lorenzDerivative(
    x + third[0] * deltaTime,
    y + third[1] * deltaTime,
    z + third[2] * deltaTime,
  )

  return [
    x +
    ((first[0] + 2 * second[0] + 2 * third[0] + fourth[0]) *
      deltaTime) /
    6,
    y +
    ((first[1] + 2 * second[1] + 2 * third[1] + fourth[1]) *
      deltaTime) /
    6,
    z +
    ((first[2] + 2 * second[2] + 2 * third[2] + fourth[2]) *
      deltaTime) /
    6,
  ]
}

function buildLorenzGeometry(pointCount) {
  const burnInSteps = 2200
  const deltaTime = 0.0049
  const raw = new Float64Array(pointCount * 3)
  const position = new Float32Array(pointCount * 3)
  const vortexPosition = new Float32Array(pointCount * 3)
  const progress = new Float32Array(pointCount)
  const energy = new Float32Array(pointCount)
  const speeds = new Float64Array(pointCount)

  let point = [0.12, 0.07, 0.03]
  let minX = Infinity
  let minY = Infinity
  let minZ = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  let maxZ = -Infinity

  for (let step = 0; step < burnInSteps; step += 1) {
    point = integrateLorenz(point, deltaTime)
  }

  for (let index = 0; index < pointCount; index += 1) {
    point = integrateLorenz(point, deltaTime)
    const offset = index * 3

    raw[offset] = point[0]
    raw[offset + 1] = point[2]
    raw[offset + 2] = point[1]

    minX = Math.min(minX, raw[offset])
    minY = Math.min(minY, raw[offset + 1])
    minZ = Math.min(minZ, raw[offset + 2])
    maxX = Math.max(maxX, raw[offset])
    maxY = Math.max(maxY, raw[offset + 1])
    maxZ = Math.max(maxZ, raw[offset + 2])
  }

  const centerX = (minX + maxX) * 0.5
  const centerY = (minY + maxY) * 0.5
  const centerZ = (minZ + maxZ) * 0.5
  const rangeX = Math.max(0.001, (maxX - minX) * 0.5)
  const rangeY = Math.max(0.001, (maxY - minY) * 0.5)
  const rangeZ = Math.max(0.001, (maxZ - minZ) * 0.5)
  let maximumSpeed = 0

  for (let index = 0; index < pointCount; index += 1) {
    const offset = index * 3
    const normalizedX = (raw[offset] - centerX) / rangeX
    const normalizedY = (raw[offset + 1] - centerY) / rangeY
    const normalizedZ = (raw[offset + 2] - centerZ) / rangeZ

    position[offset] = normalizedX
    position[offset + 1] = normalizedY
    position[offset + 2] = normalizedZ

    const localProgress = index / Math.max(1, pointCount - 1)
    progress[index] = localProgress

    const vertical = lerp(-1.18, 1.18, localProgress)
    const envelope =
      0.095 + 0.35 * Math.pow(Math.sin(localProgress * Math.PI), 0.72)
    const angle =
      localProgress * TAU * 46 +
      Math.sin(localProgress * TAU * 3) * 0.42

    vortexPosition[offset] = Math.cos(angle) * envelope
    vortexPosition[offset + 1] = vertical
    vortexPosition[offset + 2] = Math.sin(angle) * envelope

    if (index > 0) {
      const previousOffset = offset - 3
      const deltaX = position[offset] - position[previousOffset]
      const deltaY = position[offset + 1] - position[previousOffset + 1]
      const deltaZ = position[offset + 2] - position[previousOffset + 2]
      const speed = Math.hypot(deltaX, deltaY, deltaZ)
      speeds[index] = speed
      maximumSpeed = Math.max(maximumSpeed, speed)
    }
  }

  for (let index = 0; index < pointCount; index += 1) {
    const normalizedSpeed = speeds[index] / Math.max(0.00001, maximumSpeed)
    energy[index] = 0.34 + Math.pow(normalizedSpeed, 0.45) * 0.66
  }

  return { position, vortexPosition, progress, energy }
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
      pointCount: constrained ? 8500 : 11000,
      dprCap: 1,
      maxPixels: 1_050_000,
      mouse: false,
    }
  }

  if (width <= 1080) {
    return {
      fps: constrained ? 24 : 32,
      pointCount: constrained ? 11000 : 14500,
      dprCap: constrained ? 1 : 1.15,
      maxPixels: constrained ? 1_400_000 : 1_900_000,
      mouse: !constrained,
    }
  }

  return {
    fps: constrained ? 28 : 40,
    pointCount: constrained ? 14500 : 19000,
    dprCap: constrained ? 1 : 1.35,
    maxPixels: constrained ? 2_000_000 : 3_000_000,
    mouse: true,
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

const backgroundVertex = /* glsl */ `
attribute vec2 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const backgroundFragment = /* glsl */ `
precision highp float;

#define PI 3.141592653589793
#define TAU 6.283185307179586

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float uStage;
uniform vec3 uBackgroundColor;
uniform vec3 uGoldColor;
uniform float uGlowStrength;
uniform float uMouseEnabled;

varying vec2 vUv;

float saturate(float value) {
  return clamp(value, 0.0, 1.0);
}

float ease(float value) {
  float t = saturate(value);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float hash21(vec2 point) {
  return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
}

vec3 renderGoldVortex(vec2 point) {
  float verticalFade = 1.0 - smoothstep(0.76, 1.35, abs(point.y));
  float bodyWidth =
    0.085 + 0.265 * (1.0 - smoothstep(0.0, 1.2, abs(point.y)));
  vec3 result = vec3(0.0);

  for (int ribbonIndex = 0; ribbonIndex < 6; ribbonIndex++) {
    float ribbon = float(ribbonIndex);
    float phase = ribbon * TAU / 6.0;
    float spin = point.y * (8.0 + ribbon * 0.2)
      - iTime * (2.0 + ribbon * 0.075);
    float depth = 0.5 + 0.5 * cos(spin + phase);
    float path = sin(spin + phase)
      * bodyWidth
      * (0.55 + 0.45 * depth);
    float distanceToRibbon = abs(point.x - path);
    float core = exp(-distanceToRibbon * (88.0 + depth * 62.0));
    float bloom = exp(-distanceToRibbon * 18.0);

    result += uGoldColor * core * verticalFade * (0.85 + depth * 1.45);
    result += uGoldColor * bloom * verticalFade * 0.075;
  }

  float column = exp(-abs(point.x) * 13.0) * verticalFade;
  float columnCore = exp(-abs(point.x) * 78.0) * verticalFade;
  float ringCoordinate = fract(point.y * 4.75 - iTime * 0.86);
  float movingRings = exp(-abs(ringCoordinate - 0.5) * 25.0);
  movingRings *= exp(-abs(point.x) / max(bodyWidth, 0.02));

  result += uGoldColor * column * 0.12;
  result += mix(uGoldColor, vec3(1.0, 0.86, 0.36), 0.32)
    * columnCore
    * 0.24;
  result += uGoldColor * movingRings * 0.28;

  float heart = exp(
    -(point.x * point.x * 34.0 + point.y * point.y * 4.5)
  );
  result += mix(uGoldColor, vec3(1.0, 0.9, 0.46), 0.28)
    * heart
    * 0.28;

  return result * uGlowStrength;
}

void main() {
  vec2 resolution = iResolution.xy;
  vec2 point = (vUv * resolution * 2.0 - resolution) / resolution.y;
  vec2 normalizedMouse = (iMouse * 2.0 - resolution) / resolution.y;
  float toVortex = ease(uStage - 3.0);

  vec3 color = uBackgroundColor;

  // The reference is almost perfectly flat black, with only a restrained warm
  // haze behind the mathematical field.
  float centralHaze = exp(-dot(point, point) * 0.72);
  color += uGoldColor * centralHaze * 0.008;

  if (toVortex > 0.001) {
    vec2 vortexPoint = point - normalizedMouse * (0.018 * uMouseEnabled);
    color += renderGoldVortex(vortexPoint) * toVortex;
  }

  float grain = hash21(gl_FragCoord.xy + floor(iTime * 3.0));
  color += (grain - 0.5) * 0.0045;

  gl_FragColor = vec4(max(color, 0.0), 1.0);
}
`

const lineVertex = /* glsl */ `
precision highp float;

attribute vec3 position;
attribute vec3 aVortexPosition;
attribute float aProgress;
attribute float aEnergy;

uniform vec3 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float uStage;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uPassScale;
uniform vec2 uPassOffset;

varying float vDepth;
varying float vEnergy;
varying float vProgress;
varying float vVortex;

float saturate(float value) {
  return clamp(value, 0.0, 1.0);
}

float ease(float value) {
  float t = saturate(value);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

mat3 rotateX(float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat3(
    1.0, 0.0, 0.0,
    0.0, cosine, -sine,
    0.0, sine, cosine
  );
}

mat3 rotateY(float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat3(
    cosine, 0.0, sine,
    0.0, 1.0, 0.0,
    -sine, 0.0, cosine
  );
}

mat3 rotateZ(float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat3(
    cosine, -sine, 0.0,
    sine, cosine, 0.0,
    0.0, 0.0, 1.0
  );
}

void main() {
  float transitionOne = ease(uStage);
  float transitionTwo = ease(uStage - 1.0);
  float transitionThree = ease(uStage - 2.0);
  float toVortex = ease(uStage - 3.0);

  // Four camera poses. Only the camera angles, framing and placement change;
  // every point remains part of the exact same Lorenz trajectory.
  vec3 angles = mix(
    vec3(-0.055, 0.0, -0.055),
    vec3(0.38, 0.68, -0.26),
    transitionOne
  );
  angles = mix(angles, vec3(-0.58, -0.56, 0.52), transitionTwo);
  angles = mix(angles, vec3(0.12, 1.14, 1.36), transitionThree);

  float framing = mix(1.0, 0.92, transitionOne);
  framing = mix(framing, 0.96, transitionTwo);
  framing = mix(framing, 0.87, transitionThree);

  vec2 placement = mix(vec2(0.0), vec2(0.075, -0.025), transitionOne);
  placement = mix(placement, vec2(-0.07, 0.035), transitionTwo);
  placement = mix(placement, vec2(0.045, 0.0), transitionThree);

  vec2 normalizedMouse = (iMouse * 2.0 - iResolution.xy) / iResolution.y;
  angles.x += normalizedMouse.y * uMouseStrength * 0.055 * uMouseEnabled;
  angles.y += normalizedMouse.x * uMouseStrength * 0.075 * uMouseEnabled;

  vec3 lorenz = rotateZ(angles.z)
    * rotateY(angles.y)
    * rotateX(angles.x)
    * position;

  float vortexRotation = iTime * 0.62;
  vec3 vortex = rotateY(vortexRotation) * aVortexPosition;

  float aspect = iResolution.x / max(1.0, iResolution.y);
  float portraitFit = min(1.0, aspect / 1.45);

  vec2 lorenzClip = vec2(
    lorenz.x * 1.47 / aspect,
    lorenz.y * 1.03
  ) * framing;
  lorenzClip += placement;

  vec2 vortexClip = vec2(
    vortex.x * 1.42 / aspect,
    vortex.y * 0.82
  );

  vec2 clipPosition = mix(lorenzClip, vortexClip, toVortex);
  clipPosition *= portraitFit * uPassScale;
  clipPosition += (uPassOffset * 2.0) / iResolution.xy;

  gl_Position = vec4(clipPosition, 0.0, 1.0);

  float lorenzDepth = 0.5 + 0.5 * lorenz.z;
  float vortexDepth = 0.5 + 0.5 * vortex.z / 0.45;
  vDepth = mix(lorenzDepth, vortexDepth, toVortex);
  vEnergy = aEnergy;
  vProgress = aProgress;
  vVortex = toVortex;
}
`

const lineFragment = /* glsl */ `
precision highp float;

uniform vec3 uGoldColor;
uniform float uLineOpacity;
uniform float uPassAlpha;
uniform float iTime;

varying float vDepth;
varying float vEnergy;
varying float vProgress;
varying float vVortex;

void main() {
  float depthLight = mix(0.46, 1.0, clamp(vDepth, 0.0, 1.0));
  float energyLight = mix(0.72, 1.0, vEnergy);

  // A very faint continuous guide keeps the Lorenz silhouette readable.
  float basePath = 0.055;

  // Several long light streams move along the exact trajectory and visually
  // construct the shape instead of making the whole object pulse.
  float direction = mix(1.0, 1.35, vVortex);
  float streamA = fract(vProgress * 34.0 - iTime * 0.72 * direction);
  float streamB = fract(vProgress * 34.0 - iTime * 0.72 * direction + 0.33);
  float streamC = fract(vProgress * 34.0 - iTime * 0.72 * direction + 0.66);

  float bandA = smoothstep(0.00, 0.10, streamA)
    * (1.0 - smoothstep(0.42, 0.72, streamA));
  float bandB = smoothstep(0.00, 0.10, streamB)
    * (1.0 - smoothstep(0.42, 0.72, streamB));
  float bandC = smoothstep(0.00, 0.10, streamC)
    * (1.0 - smoothstep(0.42, 0.72, streamC));

  float movingStreams = max(bandA, max(bandB, bandC));
  float leadingEdge = pow(movingStreams, 0.55);
  float combinedEnergy = basePath + movingStreams * 1.55 + leadingEdge * 0.55;

  float alpha = uLineOpacity
    * uPassAlpha
    * depthLight
    * energyLight
    * combinedEnergy;

  vec3 color = uGoldColor * mix(
    0.50,
    1.55,
    clamp(depthLight * energyLight * combinedEnergy, 0.0, 1.0)
  );
  gl_FragColor = vec4(color, alpha);
}
`

export default function GlobalFiberBackground({
  className = '',
  dpr,
  paused = false,
  goldColor = REFERENCE_GOLD,
  backgroundColor = REFERENCE_BACKGROUND,
  lineOpacity = 0.64,
  glowStrength = 0.72,
  mouseInteraction = true,
  mouseStrength = 0.52,
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
    let sceneTimer = null
    let scrollFrame = null
    let pointerFrame = null
    let bodyResizeObserver = null
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
        alpha: false,
        antialias: true,
        powerPreference: 'high-performance',
      })
    } catch (error) {
      console.error('GlobalFiberBackground: WebGL is unavailable.', error)
      return undefined
    }

    const gl = renderer.gl
    const canvas = gl.canvas
    const scene = new Transform()

    canvas.setAttribute('aria-hidden', 'true')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    canvas.style.pointerEvents = 'none'
    container.appendChild(canvas)

    const sharedUniforms = {
      iResolution: { value: [1, 1, 1] },
      iMouse: { value: [0, 0] },
      iTime: { value: 0 },
      uStage: { value: 0 },
      uBackgroundColor: { value: hexToRGB(backgroundColor) },
      uGoldColor: { value: hexToRGB(goldColor) },
      uGlowStrength: { value: Math.max(0, glowStrength) },
      uLineOpacity: { value: clamp(lineOpacity) },
      uMouseEnabled: { value: mouseInteraction ? 1 : 0 },
      uMouseStrength: { value: Math.max(0, mouseStrength) },
    }

    const backgroundProgram = new Program(gl, {
      vertex: backgroundVertex,
      fragment: backgroundFragment,
      uniforms: sharedUniforms,
      depthTest: false,
      depthWrite: false,
      cullFace: null,
    })
    const backgroundGeometry = new Triangle(gl)
    const backgroundMesh = new Mesh(gl, {
      geometry: backgroundGeometry,
      program: backgroundProgram,
      frustumCulled: false,
      renderOrder: 0,
    })
    backgroundMesh.setParent(scene)

    const lineData = buildLorenzGeometry(initialQuality.pointCount)
    const lineGeometry = new Geometry(gl, {
      position: { size: 3, data: lineData.position },
      aVortexPosition: { size: 3, data: lineData.vortexPosition },
      aProgress: { size: 1, data: lineData.progress },
      aEnergy: { size: 1, data: lineData.energy },
    })

    const linePasses = [
      { offset: [-0.85, 0], scale: 1.0015, alpha: 0.045 },
      { offset: [0.85, 0], scale: 0.9985, alpha: 0.045 },
      { offset: [0, -0.85], scale: 1.0008, alpha: 0.04 },
      { offset: [0, 0.85], scale: 0.9992, alpha: 0.04 },
      { offset: [0, 0], scale: 1, alpha: 0.84 },
    ]
    const linePrograms = []
    const lineMeshes = []

    for (let index = 0; index < linePasses.length; index += 1) {
      const pass = linePasses[index]
      const program = new Program(gl, {
        vertex: lineVertex,
        fragment: lineFragment,
        uniforms: {
          ...sharedUniforms,
          uPassScale: { value: pass.scale },
          uPassOffset: { value: pass.offset },
          uPassAlpha: { value: pass.alpha },
        },
        transparent: true,
        depthTest: false,
        depthWrite: false,
        cullFace: null,
      })
      program.setBlendFunc(gl.SRC_ALPHA, gl.ONE)

      const mesh = new Mesh(gl, {
        mode: gl.LINE_STRIP,
        geometry: lineGeometry,
        program,
        frustumCulled: false,
        renderOrder: index + 1,
      })
      mesh.setParent(scene)
      linePrograms.push(program)
      lineMeshes.push(mesh)
    }

    const state = {
      width: window.innerWidth,
      height: window.innerHeight,
      quality: initialQuality,
      stage: 0,
      targetStage: 0,
      time: 0,
      rafId: null,
      sceneStops: [],
      mouseX: 0.5,
      mouseY: 0.5,
      targetMouseX: 0.5,
      targetMouseY: 0.5,
    }

    function updateResolutionUniforms() {
      sharedUniforms.iResolution.value = [
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        1,
      ]
      sharedUniforms.iMouse.value = [
        state.mouseX * gl.drawingBufferWidth,
        (1 - state.mouseY) * gl.drawingBufferHeight,
      ]
    }

    function resize() {
      state.width = window.innerWidth
      state.height = window.innerHeight
      state.quality = getQualityProfile(state.width)
      renderer.dpr = getRenderDpr(
        state.width,
        state.height,
        dpr,
        state.quality,
      )
      renderer.setSize(state.width, state.height)
      updateResolutionUniforms()
    }

    function calculateStage(viewportCenter) {
      const stops = state.sceneStops
      if (!stops.length) return 0
      if (viewportCenter <= stops[0].center) return stops[0].sceneIndex

      const lastStop = stops[stops.length - 1]
      if (viewportCenter >= lastStop.center) return lastStop.sceneIndex

      for (let index = 0; index < stops.length - 1; index += 1) {
        const current = stops[index]
        const next = stops[index + 1]

        if (viewportCenter >= current.center && viewportCenter <= next.center) {
          const span = Math.max(1, next.center - current.center)
          const localProgress = (viewportCenter - current.center) / span
          return lerp(
            current.sceneIndex,
            next.sceneIndex,
            focusedTransition(localProgress),
          )
        }
      }

      return lastStop.sceneIndex
    }

    function updateScrollState() {
      state.targetStage = calculateStage(
        window.scrollY + window.innerHeight * 0.5,
      )

      if (reducedMotion || paused) {
        state.stage = state.targetStage
        sharedUniforms.uStage.value = state.stage
      }
    }

    function cacheSceneStops() {
      if (disposed) return

      const elements = Array.from(
        document.querySelectorAll('[data-cosmic-scene]'),
      )
      const stops = []

      for (let index = 0; index < elements.length; index += 1) {
        const element = elements[index]
        const name = element.getAttribute('data-cosmic-scene')
        const sceneIndex = SCENE_INDEX[name]
        if (sceneIndex === undefined) continue

        const rect = element.getBoundingClientRect()
        stops.push({
          sceneIndex,
          center: window.scrollY + rect.top + rect.height * 0.5,
        })
      }

      if (!stops.length) {
        const totalScrollable = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight,
        )
        state.sceneStops = [0, 1, 2, 3, 4].map(sceneIndex => ({
          sceneIndex,
          center:
            (totalScrollable * sceneIndex) / 4 + window.innerHeight * 0.5,
        }))
      } else {
        state.sceneStops = stops.sort((a, b) => a.center - b.center)
      }

      updateScrollState()
    }

    function render() {
      sharedUniforms.iTime.value = state.time
      sharedUniforms.uStage.value = state.stage
      updateResolutionUniforms()
      renderer.render({ scene })
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
      state.stage +=
        (state.targetStage - state.stage) *
        dampFactor(TRANSITION.stageResponse, deltaSeconds)

      const pointerResponse = mouseDampening > 0 ? 1 / mouseDampening : 1000
      const pointerBlend = dampFactor(pointerResponse, deltaSeconds)
      state.mouseX += (state.targetMouseX - state.mouseX) * pointerBlend
      state.mouseY += (state.targetMouseY - state.mouseY) * pointerBlend

      if (Math.abs(state.targetStage - state.stage) < 0.0001) {
        state.stage = state.targetStage
      }

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

    function onScroll() {
      if (scrollFrame) return

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = null
        if (disposed) return
        updateScrollState()
        if (reducedMotion || paused) render()
      })
    }

    function onPointerMove(event) {
      if (!mouseInteraction || !state.quality.mouse || pointerFrame) return

      const clientX = event.clientX
      const clientY = event.clientY
      pointerFrame = window.requestAnimationFrame(() => {
        pointerFrame = null
        if (disposed) return
        state.targetMouseX = clientX / Math.max(1, state.width)
        state.targetMouseY = clientY / Math.max(1, state.height)
      })
    }

    function scheduleSceneCache() {
      window.clearTimeout(sceneTimer)
      sceneTimer = window.setTimeout(cacheSceneStops, 140)
    }

    function onResize() {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        if (disposed) return
        resize()
        cacheSceneStops()
        if (reducedMotion || paused) render()
      }, 150)
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'visible') {
        if (reducedMotion || paused) render()
        else startLoop()
      } else {
        stopLoop()
      }
    }

    function onReducedMotionChange(event) {
      reducedMotion = event.matches

      if (reducedMotion) {
        stopLoop()
        state.stage = state.targetStage
        render()
      } else {
        startLoop()
      }
    }

    resize()
    cacheSceneStops()
    state.stage = state.targetStage
    render()
    startLoop()

    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('load', scheduleSceneCache, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)
    reducedMotionQuery.addEventListener('change', onReducedMotionChange)

    if ('ResizeObserver' in window && document.body) {
      bodyResizeObserver = new ResizeObserver(scheduleSceneCache)
      bodyResizeObserver.observe(document.body)
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleSceneCache).catch(() => { })
    }

    return () => {
      disposed = true
      stopLoop()
      window.clearTimeout(resizeTimer)
      window.clearTimeout(sceneTimer)
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame)
      bodyResizeObserver?.disconnect()

      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('load', scheduleSceneCache)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      reducedMotionQuery.removeEventListener('change', onReducedMotionChange)

      backgroundMesh.setParent(null)
      for (let index = 0; index < lineMeshes.length; index += 1) {
        lineMeshes[index].setParent(null)
      }
      backgroundProgram.remove?.()
      for (let index = 0; index < linePrograms.length; index += 1) {
        linePrograms[index].remove?.()
      }
      backgroundGeometry.remove?.()
      lineGeometry.remove?.()

      if (canvas.parentElement === container) {
        container.removeChild(canvas)
      }
    }
  }, [
    backgroundColor,
    dpr,
    glowStrength,
    goldColor,
    lineOpacity,
    mouseDampening,
    mouseInteraction,
    mouseStrength,
    paused,
  ])

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        contain: 'strict',
        transform: 'translateZ(0)',
        background: backgroundColor,
        ...(mixBlendMode ? { mixBlendMode } : {}),
      }}
    />
  )
}
