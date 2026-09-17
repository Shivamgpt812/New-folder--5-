import { useRef, useEffect } from 'react'

/**
 * useMagneticEffect Hook
 * Creates a magnetic effect where element follows cursor on hover
 * 
 * Usage:
 * const magneticRef = useMagneticEffect()
 * <button ref={magneticRef}>Hover me</button>
 */

const useMagneticEffect = (strength = 0.3) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let rafId = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from center
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      targetX = deltaX
      targetY = deltaY
    }

    const handleMouseLeave = () => {
      targetX = 0
      targetY = 0
    }

    const animate = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15

      element.style.transform = `translate(${currentX}px, ${currentY}px)`

      rafId = requestAnimationFrame(animate)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
    animate()

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      element.style.transform = ''
    }
  }, [strength])

  return ref
}

export default useMagneticEffect

/**
 * Example usage:
 * 
 * import useMagneticEffect from '../hooks/useMagneticEffect'
 * 
 * function MyButton() {
 *   const magneticRef = useMagneticEffect(0.4) // 0.4 = strength
 * 
 *   return (
 *     <button ref={magneticRef} className="magnetic-button">
 *       Hover me!
 *     </button>
 *   )
 * }
 */
