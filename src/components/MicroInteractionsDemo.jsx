import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import useRipple from '../hooks/useRipple'
import useCountUp from '../hooks/useCountUp'
import useMagneticEffect from '../hooks/useMagneticEffect'
import ParticleEffect from './ParticleEffect'
import { Zap, ArrowRight, Star, Heart } from 'lucide-react'
import './MicroInteractionsDemo.css'

/**
 * MicroInteractionsDemo Component
 * Showcases all available micro-interactions
 * This is a demo/testing component - remove from production
 */

function MicroInteractionsDemo() {
  const createRipple = useRipple()
  const magneticRef = useMagneticEffect(0.3)
  const projectCount = useCountUp(500, 2000)
  const clientCount = useCountUp(250, 2000)
  const satisfactionCount = useCountUp(99, 2000)

  return (
    <div className="demo-container">
      <div className="demo-hero">
        <ParticleEffect particleCount={30} color="rgba(8, 123, 255, 0.3)" />
        
        <AnimateOnScroll animation="fadeInUp" delay={0.1}>
          <h1 className="demo-title">Micro-Interactions Showcase</h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay={0.2}>
          <p className="demo-subtitle">
            All the modern animations and effects in one place
          </p>
        </AnimateOnScroll>
      </div>

      {/* Buttons Section */}
      <section className="demo-section">
        <AnimateOnScroll animation="fadeInUp">
          <h2>1. Button Micro-Interactions</h2>
        </AnimateOnScroll>

        <div className="demo-buttons">
          <AnimateOnScroll animation="scaleIn" delay={0.1}>
            <button 
              className="demo-btn primary ripple"
              onClick={createRipple}
            >
              Ripple Effect
              <ArrowRight size={18} />
            </button>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scaleIn" delay={0.2}>
            <button 
              ref={magneticRef}
              className="demo-btn magnetic"
            >
              <Star size={18} />
              Magnetic Effect
            </button>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scaleIn" delay={0.3}>
            <button className="demo-btn secondary">
              <Heart size={18} />
              Hover Effect
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="demo-section demo-stats">
        <AnimateOnScroll animation="fadeInUp">
          <h2>2. Animated Counters</h2>
        </AnimateOnScroll>

        <div className="demo-stats-grid">
          <AnimateOnScroll animation="scaleIn" delay={0.1}>
            <div className="demo-stat" ref={projectCount.ref}>
              <div className="demo-stat-number">{projectCount.count}+</div>
              <div className="demo-stat-label">Projects</div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scaleIn" delay={0.2}>
            <div className="demo-stat" ref={clientCount.ref}>
              <div className="demo-stat-number">{clientCount.count}+</div>
              <div className="demo-stat-label">Clients</div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scaleIn" delay={0.3}>
            <div className="demo-stat" ref={satisfactionCount.ref}>
              <div className="demo-stat-number">{satisfactionCount.count}%</div>
              <div className="demo-stat-label">Satisfaction</div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Card Animations */}
      <section className="demo-section">
        <AnimateOnScroll animation="fadeInUp">
          <h2>3. Card Hover Effects</h2>
        </AnimateOnScroll>

        <div className="demo-cards">
          {[1, 2, 3].map((item, index) => (
            <AnimateOnScroll 
              key={item} 
              animation="fadeInUp" 
              delay={index * 0.1}
            >
              <div className="demo-card">
                <div className="demo-card-icon">
                  <Zap size={24} />
                </div>
                <h3>Feature {item}</h3>
                <p>Hover over this card to see the lift and shadow effect.</p>
                <div className="demo-card-link">
                  Learn More <span className="demo-arrow">→</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Scroll Animations */}
      <section className="demo-section">
        <AnimateOnScroll animation="fadeInUp">
          <h2>4. Scroll-Triggered Animations</h2>
        </AnimateOnScroll>

        <div className="demo-scroll-examples">
          <AnimateOnScroll animation="fadeInLeft" delay={0.1}>
            <div className="demo-box">
              <p>Fade In Left</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div className="demo-box">
              <p>Fade In Up</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInRight" delay={0.3}>
            <div className="demo-box">
              <p>Fade In Right</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="scaleIn" delay={0.4}>
            <div className="demo-box">
              <p>Scale In</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Form Inputs */}
      <section className="demo-section">
        <AnimateOnScroll animation="fadeInUp">
          <h2>5. Form Input Enhancements</h2>
        </AnimateOnScroll>

        <div className="demo-form">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className="demo-input-group">
              <label>Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="demo-input"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div className="demo-input-group">
              <label>Your Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="demo-input"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.3}>
            <div className="demo-input-group">
              <label>Message</label>
              <textarea 
                placeholder="Type your message..."
                className="demo-input"
                rows="3"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.4}>
            <button 
              className="demo-btn primary ripple"
              onClick={createRipple}
            >
              Submit with Ripple
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Info Box */}
      <section className="demo-section">
        <AnimateOnScroll animation="scaleIn">
          <div className="demo-info-box">
            <h3>✨ All Micro-Interactions Active!</h3>
            <p>
              This demo showcases all available micro-interactions.
              Scroll, hover, click, and interact to see them in action.
            </p>
            <ul>
              <li>✅ Scroll-triggered animations</li>
              <li>✅ Ripple effects on buttons</li>
              <li>✅ Animated number counters</li>
              <li>✅ Magnetic button effect</li>
              <li>✅ Card hover animations</li>
              <li>✅ Form input focus effects</li>
              <li>✅ Particle background</li>
            </ul>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  )
}

export default MicroInteractionsDemo
