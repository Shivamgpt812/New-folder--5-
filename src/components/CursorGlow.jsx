import { useEffect, useRef } from 'react'
import './CursorGlow.css'

/**
 * CursorGlow Component
 * Creates a glowing cursor effect that follows the mouse
 * Optional - adds premium feel to the website
 */

const CursorGlow = () => {
  const glowRef = useRef(null)
  const rafRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const glowPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Smooth interpolation for trailing effect
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.15
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.15

      glow.style.left = `${glowPos.current.x}px`
      glow.style.top = `${glowPos.current.y}px`

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}

export default CursorGlow
