# Micro-Interactions Implementation Examples

Complete examples showing how to implement all micro-interactions in your components.

---

## 📦 Table of Contents

1. [Scroll-Triggered Animations](#1-scroll-triggered-animations)
2. [Ripple Effects on Buttons](#2-ripple-effects-on-buttons)
3. [Animated Counter Stats](#3-animated-counter-stats)
4. [Magnetic Button Effect](#4-magnetic-button-effect)
5. [Particle Background](#5-particle-background)
6. [Cursor Glow Effect](#6-cursor-glow-effect)
7. [Form Input Enhancements](#7-form-input-enhancements)
8. [Card Hover Effects](#8-card-hover-effects)

---

## 1. Scroll-Triggered Animations

### Basic Usage
```jsx
import AnimateOnScroll from './components/AnimateOnScroll'

function MySection() {
  return (
    <div className="section">
      <AnimateOnScroll animation="fadeInUp" delay={0.1}>
        <h2>This heading fades in from bottom</h2>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeInLeft" delay={0.2}>
        <p>This text slides in from left</p>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scaleIn" delay={0.3}>
        <button>This button scales in</button>
      </AnimateOnScroll>
    </div>
  )
}
```

### Staggered Cards Animation
```jsx
import AnimateOnScroll from './components/AnimateOnScroll'

function CardGrid() {
  const cards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
  ]

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <AnimateOnScroll 
          key={card.id} 
          animation="fadeInUp" 
          delay={index * 0.1}
        >
          <div className="card">
            <h3>{card.title}</h3>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  )
}
```

### Advanced Options
```jsx
<AnimateOnScroll 
  animation="fadeInUp"
  delay={0.2}               // Delay in seconds
  threshold={0.1}           // How much of element must be visible
  triggerOnce={true}        // Animate only once (default)
>
  <YourComponent />
</AnimateOnScroll>
```

---

## 2. Ripple Effects on Buttons

### Primary Button with Ripple
```jsx
import useRipple from '../hooks/useRipple'

function ActionButton() {
  const createRipple = useRipple()

  return (
    <button 
      className="action-button primary ripple"
      onClick={createRipple}
    >
      Get Started
    </button>
  )
}
```

### Multiple Buttons
```jsx
import useRipple from '../hooks/useRipple'

function ButtonGroup() {
  const createRipple = useRipple()

  return (
    <div className="button-group">
      <button 
        className="btn-primary ripple"
        onClick={createRipple}
      >
        Primary Action
      </button>
      
      <button 
        className="btn-secondary ripple"
        onClick={createRipple}
      >
        Secondary Action
      </button>
    </div>
  )
}
```

### Custom Ripple Color (CSS)
```css
/* Add to your component's CSS */
.my-button.ripple .ripple-effect {
  background: rgba(255, 100, 100, 0.6); /* Red ripple */
}

.my-button-green.ripple .ripple-effect {
  background: rgba(34, 197, 94, 0.6); /* Green ripple */
}
```

---

## 3. Animated Counter Stats

### Basic Counter
```jsx
import useCountUp from '../hooks/useCountUp'

function ProjectStats() {
  const { count, ref } = useCountUp(500, 2000) // Count to 500 in 2 seconds

  return (
    <div className="stat" ref={ref}>
      <div className="stat-number">{count}+</div>
      <div className="stat-label">Projects</div>
    </div>
  )
}
```

### Multiple Stats
```jsx
import useCountUp from '../hooks/useCountUp'

function StatsSection() {
  const projects = useCountUp(500, 2000)
  const satisfaction = useCountUp(99, 2000)
  const industries = useCountUp(10, 1500)

  return (
    <div className="stats-grid">
      <div className="stat" ref={projects.ref}>
        <span className="stat-number">{projects.count}+</span>
        <span className="stat-label">Projects</span>
      </div>

      <div className="stat" ref={satisfaction.ref}>
        <span className="stat-number">{satisfaction.count}%</span>
        <span className="stat-label">Satisfaction</span>
      </div>

      <div className="stat" ref={industries.ref}>
        <span className="stat-number">{industries.count}+</span>
        <span className="stat-label">Industries</span>
      </div>
    </div>
  )
}
```

### Custom Start Value
```jsx
// Count from 50 to 100 in 1.5 seconds
const { count, ref } = useCountUp(100, 1500, 50)

return <div ref={ref}>{count}%</div>
```

---

## 4. Magnetic Button Effect

### Basic Magnetic Button
```jsx
import useMagneticEffect from '../hooks/useMagneticEffect'

function MagneticCTA() {
  const magneticRef = useMagneticEffect(0.3) // 0.3 = strength

  return (
    <button ref={magneticRef} className="magnetic-btn">
      Hover me - I'll follow your cursor!
    </button>
  )
}
```

### Hero CTA with Magnetic Effect
```jsx
import useMagneticEffect from '../hooks/useMagneticEffect'
import { ArrowRight } from 'lucide-react'

function HeroCTA() {
  const magneticRef = useMagneticEffect(0.4)

  return (
    <button 
      ref={magneticRef} 
      className="hero-cta-button"
      style={{
        transition: 'transform 0.1s ease-out' // Required for smooth effect
      }}
    >
      Get Started
      <ArrowRight size={20} />
    </button>
  )
}
```

### Adjusting Magnetic Strength
```jsx
// Subtle effect
const subtleRef = useMagneticEffect(0.2)

// Medium effect (recommended)
const mediumRef = useMagneticEffect(0.3)

// Strong effect
const strongRef = useMagneticEffect(0.5)
```

---

## 5. Particle Background

### Hero Section with Particles
```jsx
import ParticleEffect from './components/ParticleEffect'

function HeroSection() {
  return (
    <div className="hero-section" style={{ position: 'relative' }}>
      <ParticleEffect 
        particleCount={50} 
        color="rgba(8, 123, 255, 0.3)" 
      />
      
      <div className="hero-content">
        <h1>Welcome to Atronics</h1>
        <p>PCB Solutions for Tomorrow</p>
      </div>
    </div>
  )
}
```

### Different Color Themes
```jsx
// Blue theme (default)
<ParticleEffect color="rgba(8, 123, 255, 0.3)" />

// Cyan theme
<ParticleEffect color="rgba(53, 214, 255, 0.3)" />

// Green theme
<ParticleEffect color="rgba(54, 229, 160, 0.3)" />

// Purple theme
<ParticleEffect color="rgba(123, 53, 232, 0.3)" />
```

### Performance Optimization
```jsx
// Fewer particles for better performance
<ParticleEffect particleCount={30} />

// More particles for premium effect
<ParticleEffect particleCount={80} />

// Mobile detection
import { useState, useEffect } from 'react'

function ResponsiveParticles() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <ParticleEffect 
      particleCount={isMobile ? 20 : 50} 
    />
  )
}
```

---

## 6. Cursor Glow Effect

### Add to Your App
```jsx
// In App.jsx
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="App">
      <CursorGlow />
      {/* Rest of your app */}
    </div>
  )
}
```

### Custom Glow Size (CSS)
```css
/* Add to CursorGlow.css or your custom CSS */
.cursor-glow {
  width: 300px;  /* Default: 400px */
  height: 300px;
}

/* Stronger glow */
.cursor-glow {
  background: radial-gradient(
    circle,
    rgba(8, 123, 255, 0.25) 0%,    /* Increased opacity */
    rgba(8, 123, 255, 0.15) 25%,
    rgba(53, 214, 255, 0.1) 50%,
    transparent 70%
  );
}
```

---

## 7. Form Input Enhancements

### Enhanced Input Field
```jsx
function EnhancedInput({ label, ...props }) {
  return (
    <div className="contact-form-field">
      <label>{label}</label>
      <input 
        {...props}
        className="enhanced-input"
      />
    </div>
  )
}

// CSS is already in microinteractions.css
```

### Custom Focus Effect
```css
/* Add to your component CSS */
.custom-input:focus {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(8, 123, 255, 0.15);
  border-color: var(--primary-blue);
}
```

---

## 8. Card Hover Effects

### Enhanced Service Card
```jsx
import AnimateOnScroll from './AnimateOnScroll'

function ServiceCard({ title, description, icon, delay }) {
  return (
    <AnimateOnScroll animation="fadeInUp" delay={delay}>
      <div className="service-card">
        <div className="service-card-icon">
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-card-link">
          Learn More <span className="arrow">→</span>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

// Hover effects are already in microinteractions.css
```

### Custom Card Hover
```css
/* Add custom card effects */
.my-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.my-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(8, 123, 255, 0.2);
}

.my-card:hover .card-icon {
  transform: scale(1.15) rotate(5deg);
}
```

---

## 🎯 Complete Component Example

Here's a complete component using multiple micro-interactions:

```jsx
import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import useRipple from '../hooks/useRipple'
import useCountUp from '../hooks/useCountUp'
import useMagneticEffect from '../hooks/useMagneticEffect'
import { ArrowRight, Zap } from 'lucide-react'

function FeatureSection() {
  const createRipple = useRipple()
  const magneticRef = useMagneticEffect(0.3)
  const projectCount = useCountUp(500, 2000)
  const clientCount = useCountUp(250, 2000)

  return (
    <section className="feature-section">
      {/* Animated Heading */}
      <AnimateOnScroll animation="fadeInUp" delay={0.1}>
        <h2>Why Choose Us</h2>
      </AnimateOnScroll>

      {/* Animated Stats */}
      <div className="stats-row">
        <AnimateOnScroll animation="scaleIn" delay={0.2}>
          <div className="stat" ref={projectCount.ref}>
            <span className="stat-number">{projectCount.count}+</span>
            <span className="stat-label">Projects</span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleIn" delay={0.3}>
          <div className="stat" ref={clientCount.ref}>
            <span className="stat-number">{clientCount.count}+</span>
            <span className="stat-label">Clients</span>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Feature Cards with Hover Effects */}
      <div className="feature-grid">
        {[1, 2, 3].map((item, index) => (
          <AnimateOnScroll 
            key={item} 
            animation="fadeInUp" 
            delay={0.2 + index * 0.1}
          >
            <div className="feature-card">
              <Zap className="feature-icon" />
              <h3>Feature {item}</h3>
              <p>Amazing feature description</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Magnetic CTA with Ripple */}
      <AnimateOnScroll animation="fadeInUp" delay={0.6}>
        <button
          ref={magneticRef}
          className="cta-button ripple"
          onClick={createRipple}
        >
          Get Started <ArrowRight size={20} />
        </button>
      </AnimateOnScroll>
    </section>
  )
}

export default FeatureSection
```

---

## 🎨 Tips for Best Results

1. **Don't Overdo It**: Use 2-3 types of micro-interactions per section
2. **Stagger Delays**: Increment delays by 0.1s for sequential animations
3. **Test Performance**: Monitor frame rates with many animated elements
4. **Mobile First**: Test all interactions on mobile devices
5. **Accessibility**: Always include `prefers-reduced-motion` support
6. **Subtle is Better**: Keep animations under 0.5s duration
7. **Combine Effects**: Mix ripple + magnetic for premium buttons
8. **Loading States**: Show feedback during async operations

---

## 🐛 Common Issues & Solutions

### Issue: Animations not triggering
**Solution**: Ensure element has proper CSS class and imports

### Issue: Ripple not visible
**Solution**: Add `position: relative` and `overflow: hidden` to button

### Issue: Scroll animations fire too early
**Solution**: Adjust `threshold` value in AnimateOnScroll

### Issue: Performance lag
**Solution**: Reduce particle count or disable on mobile

---

## 📚 Additional Resources

- [CSS Transitions MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Animations Performance](https://web.dev/animations/)

Happy animating! 🎉
