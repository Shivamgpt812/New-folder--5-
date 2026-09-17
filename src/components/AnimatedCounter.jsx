import React, { useState, useEffect, useRef } from 'react'

/**
 * AnimatedCounter component
 * Automatically counts up smoothly when scrolled into view
 */
const AnimatedCounter = ({ value, duration = 1800, className = '' }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  // Parse string value (e.g., "500+", "99.8%", "50k+", "Global", "ISO")
  const parseValue = (val) => {
    if (typeof val === 'number') return { num: val, prefix: '', suffix: '', isFloat: false, isText: false }
    const str = String(val).trim()
    const match = str.match(/^([^\d.]*)([\d.]+)(.*)$/)
    if (!match) {
      return { num: 0, prefix: '', suffix: str, isFloat: false, isText: true }
    }
    const prefix = match[1] || ''
    const numStr = match[2]
    const suffix = match[3] || ''
    const isFloat = numStr.includes('.')
    const num = isFloat ? parseFloat(numStr) : parseInt(numStr, 10)
    return { num, prefix, suffix, isFloat, isText: false }
  }

  const { num, prefix, suffix, isFloat, isText } = parseValue(value)

  useEffect(() => {
    if (isText) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.15 }
    )

    const currentElem = elementRef.current
    if (currentElem) {
      observer.observe(currentElem)
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem)
      }
    }
  }, [hasAnimated, isText])

  useEffect(() => {
    if (!hasAnimated || isText) return

    let startTime = null
    let animationFrame = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Quintic ease out for ultra smooth ending
      const easeOut = 1 - Math.pow(1 - progress, 4)
      const current = isFloat 
        ? (num * easeOut).toFixed(1)
        : Math.floor(num * easeOut)

      setDisplayValue(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setDisplayValue(num)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [hasAnimated, num, duration, isFloat, isText])

  if (isText) {
    return <span ref={elementRef} className={className}>{value}</span>
  }

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {hasAnimated ? displayValue : 0}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
