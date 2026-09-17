import { useState, useEffect, useRef } from 'react'

/**
 * useCountUp Hook
 * Animates numbers counting up from 0 to target value
 * 
 * Usage:
 * const count = useCountUp(500, 2000) // Count to 500 over 2 seconds
 * <div>{count}</div>
 */

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(start + (end - start) * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration, start])

  return { count, ref }
}

export default useCountUp

/**
 * Example usage in component:
 * 
 * import useCountUp from '../hooks/useCountUp'
 * 
 * function StatsSection() {
 *   const { count: projectCount, ref: projectRef } = useCountUp(500, 2000)
 *   const { count: satisfactionCount, ref: satisfactionRef } = useCountUp(99, 2000)
 * 
 *   return (
 *     <div>
 *       <div ref={projectRef}>{projectCount}+</div>
 *       <div ref={satisfactionRef}>{satisfactionCount}%</div>
 *     </div>
 *   )
 * }
 */
