const DEFAULT_INPUT_EVENTS = ['pointerdown', 'touchstart', 'wheel', 'keydown']

export function createInputAwareFrameLoop(
  drawFrame,
  {
    fps = 30,
    yieldMs = 180,
    inputEvents = DEFAULT_INPUT_EVENTS,
  } = {}
) {
  const frameDuration = 1000 / fps
  const hasInputPendingCheck =
    typeof navigator !== 'undefined' &&
    typeof navigator.scheduling?.isInputPending === 'function'

  let rafId = 0
  let running = false
  let lastFrameTime = Number.NEGATIVE_INFINITY
  let blockedUntil = 0

  const markInput = () => {
    blockedUntil = performance.now() + yieldMs
  }

  const step = (time) => {
    if (!running) return

    if (
      (hasInputPendingCheck && navigator.scheduling.isInputPending()) ||
      time < blockedUntil ||
      time - lastFrameTime < frameDuration
    ) {
      rafId = window.requestAnimationFrame(step)
      return
    }

    lastFrameTime = time
    drawFrame(time)
    rafId = window.requestAnimationFrame(step)
  }

  return {
    bind(target = window) {
      inputEvents.forEach((eventName) => {
        target.addEventListener(eventName, markInput, { passive: true })
      })

      return () => {
        inputEvents.forEach((eventName) => {
          target.removeEventListener(eventName, markInput)
        })
      }
    },
    markInput,
    reset() {
      lastFrameTime = Number.NEGATIVE_INFINITY
    },
    start() {
      if (running) return
      running = true
      rafId = window.requestAnimationFrame(step)
    },
    stop() {
      running = false

      if (rafId) {
        window.cancelAnimationFrame(rafId)
        rafId = 0
      }
    },
  }
}
