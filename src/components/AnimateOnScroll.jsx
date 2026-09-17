import { useEffect, useRef } from 'react'

/**
 * AnimateOnScroll Component
 * Triggers animations when elements enter the viewport
 * 
 * Usage:
 * <AnimateOnScroll animation="fadeInUp" delay={0.2}>
 *   <YourComponent />
 * </AnimateOnScroll>
 */

const AnimateOnScroll = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  threshold = 0.1,
  triggerOnce = true 
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the visible class to trigger animation
            setTimeout(() => {
              entry.target.classList.add('is-visible')
            }, delay * 1000)

            // If triggerOnce is true, stop observing after animation
            if (triggerOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!triggerOnce) {
            // Remove class if element leaves viewport (when triggerOnce is false)
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay, threshold, triggerOnce])

  return (
    <div ref={ref} className={`animate-${animation}`}>
      {children}
    </div>
  )
}

export default AnimateOnScroll

/**
 * Available animations:
 * - fadeInUp: Fade in from bottom
 * - fadeInLeft: Fade in from left
 * - fadeInRight: Fade in from right
 * - scaleIn: Scale up while fading in
 * 
 * Example usage in components:
 * 
 * import AnimateOnScroll from './AnimateOnScroll'
 * 
 * <AnimateOnScroll animation="fadeInUp" delay={0.1}>
 *   <ServiceCard />
 * </AnimateOnScroll>
 * 
 * <AnimateOnScroll animation="fadeInLeft" delay={0.2}>
 *   <IndustryCard />
 * </AnimateOnScroll>
 */
