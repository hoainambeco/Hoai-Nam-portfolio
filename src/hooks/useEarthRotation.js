import { useEffect, useRef } from 'react'

export function useEarthRotation(speed = 0.03) {
  const ref = useRef(null)
  useEffect(() => {
    let angle = 0, rafId
    const tick = () => {
      angle += speed
      if (ref.current) ref.current.style.transform = `translateX(-50%) rotate(${angle}deg)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [speed])
  return ref
}
