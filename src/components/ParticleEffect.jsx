import { useEffect, useRef } from 'react'
import './ParticleEffect.css'

/**
 * ParticleEffect Component
 * Creates animated floating particles in the background
 */

const ParticleEffect = ({ particleCount = 50, color = 'rgba(8, 123, 255, 0.3)' }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.opacity = Math.random() * 0.5 + 0.2
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = -10
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = Math.random() * 0.5 + 0.3
        this.radius = Math.random() * 2 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Fade in/out based on position
        if (this.y < 50) {
          this.opacity = this.y / 50 * 0.5
        } else if (this.y > canvas.height - 50) {
          this.opacity = (canvas.height - this.y) / 50 * 0.5
        }

        // Reset if out of bounds
        if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
          this.reset()
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(/[\d.]+\)$/, `${this.opacity})`)
        ctx.fill()
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections between nearby particles
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.strokeStyle = color.replace(/[\d.]+\)$/, `${(1 - distance / 100) * 0.1})`)
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [particleCount, color])

  return <canvas ref={canvasRef} className="particle-canvas" />
}

export default ParticleEffect
