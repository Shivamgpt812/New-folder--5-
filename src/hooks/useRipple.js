import { useCallback } from 'react'

/**
 * useRipple Hook
 * Adds Material Design-style ripple effect to buttons
 * 
 * Usage:
 * const createRipple = useRipple()
 * <button onClick={createRipple}>Click me</button>
 */

const useRipple = () => {
  const createRipple = useCallback((event) => {
    const button = event.currentTarget
    const ripple = document.createElement('span')
    
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
    
    // Position the ripple at click location
    const rect = button.getBoundingClientRect()
    ripple.style.width = ripple.style.height = `${diameter}px`
    ripple.style.left = `${event.clientX - rect.left - radius}px`
    ripple.style.top = `${event.clientY - rect.top - radius}px`
    ripple.classList.add('ripple-effect')
    
    // Remove any existing ripples
    const existingRipple = button.getElementsByClassName('ripple-effect')[0]
    if (existingRipple) {
      existingRipple.remove()
    }
    
    button.appendChild(ripple)
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove()
    }, 600)
  }, [])
  
  return createRipple
}

export default useRipple

/**
 * Add this CSS for the ripple effect:
 * 
 * .ripple-effect {
 *   position: absolute;
 *   border-radius: 50%;
 *   background: rgba(255, 255, 255, 0.6);
 *   transform: scale(0);
 *   animation: ripple-animation 0.6s ease-out;
 *   pointer-events: none;
 * }
 * 
 * @keyframes ripple-animation {
 *   to {
 *     transform: scale(4);
 *     opacity: 0;
 *   }
 * }
 */
