# Micro-Interactions Quick Reference Cheatsheet

Fast lookup for all micro-interactions in your Atronics website.

---

## 🎯 Quick Imports

```jsx
// Animations
import AnimateOnScroll from './components/AnimateOnScroll'

// Effects
import useRipple from '../hooks/useRipple'
import useCountUp from '../hooks/useCountUp'
import useMagneticEffect from '../hooks/useMagneticEffect'

// Visual
import ParticleEffect from './components/ParticleEffect'
import CursorGlow from './components/CursorGlow'
import ScrollToTop from './components/ScrollToTop'
```

---

## 📦 Components Quick Reference

### AnimateOnScroll
```jsx
<AnimateOnScroll animation="fadeInUp" delay={0.2}>
  <YourComponent />
</AnimateOnScroll>
```
**Animations**: `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`

---

### useRipple Hook
```jsx
const createRipple = useRipple()
<button className="ripple" onClick={createRipple}>Click</button>
```

---

### useCountUp Hook
```jsx
const { count, ref } = useCountUp(500, 2000)
<div ref={ref}>{count}+</div>
```
**Parameters**: `(targetValue, duration, startValue)`

---

### useMagneticEffect Hook
```jsx
const magneticRef = useMagneticEffect(0.3)
<button ref={magneticRef}>Hover me</button>
```
**Strength**: `0.2` (subtle) to `0.5` (strong)

---

### ParticleEffect
```jsx
<ParticleEffect particleCount={50} color="rgba(8,123,255,0.3)" />
```

---

### CursorGlow
```jsx
<CursorGlow /> // Add once in App.jsx
```

---

### ScrollToTop
```jsx
<ScrollToTop /> // Add once in App.jsx
```

---

## 🎨 CSS Classes Reference

### Automatic Hover Effects (Already Applied)

| Class | Effect |
|-------|--------|
| `.service-card` | Lift + shadow on hover |
| `.new-industry-card` | Lift + border glow |
| `.action-button` | Scale + shadow |
| `.glass-info-card` | Lift + backdrop blur |
| `.contact-form-field input` | Focus glow + lift |

---

### Add These Classes to Elements

| Class | What It Does |
|-------|--------------|
| `.ripple` | Enables ripple effect on click |
| `.animate-on-scroll` | Fade in when scrolled into view |
| `.animate-fade-left` | Slide in from left |
| `.animate-fade-right` | Slide in from right |
| `.animate-scale` | Scale in effect |

---

## ⚡ Quick Recipes

### Animated Card Grid
```jsx
{cards.map((card, i) => (
  <AnimateOnScroll key={i} animation="fadeInUp" delay={i * 0.1}>
    <div className="card">{card.title}</div>
  </AnimateOnScroll>
))}
```

---

### Button with Ripple
```jsx
const createRipple = useRipple()
<button className="btn ripple" onClick={createRipple}>
  Click Me
</button>
```

---

### Animated Counter
```jsx
const { count, ref } = useCountUp(500, 2000)
<div ref={ref}>{count}+</div>
```

---

### Magnetic CTA
```jsx
const magneticRef = useMagneticEffect(0.3)
<button ref={magneticRef}>Hover Me</button>
```

---

### Hero with Particles
```jsx
<div className="hero">
  <ParticleEffect particleCount={50} />
  <h1>Welcome</h1>
</div>
```

---

## 🎯 Animation Timing Guide

| Element Type | Recommended Delay |
|-------------|-------------------|
| Heading | 0.1s |
| Description | 0.2s |
| First card | 0.2s |
| Second card | 0.3s |
| Third card | 0.4s |
| CTA button | 0.5s |

---

## 📱 Mobile Optimization

```css
@media (max-width: 768px) {
  /* Reduce hover effects */
  .card:hover {
    transform: translateY(-4px); /* Instead of -8px */
  }
  
  /* Hide resource-heavy effects */
  .particle-canvas,
  .cursor-glow {
    display: none;
  }
}
```

---

## ♿ Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
**Already included in `microinteractions.css`**

---

## 🎨 Color Customization

### Change Ripple Color
```css
.my-button .ripple-effect {
  background: rgba(255, 100, 100, 0.6);
}
```

### Change Particle Color
```jsx
<ParticleEffect color="rgba(54, 229, 160, 0.3)" />
```

### Change Glow Color
```css
.cursor-glow {
  background: radial-gradient(
    circle,
    rgba(255, 0, 100, 0.15) 0%,
    transparent 70%
  );
}
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Animation not working | Check CSS import in App.jsx |
| Ripple not visible | Add `position: relative; overflow: hidden` |
| Counter not animating | Ensure element is scrolled into view |
| Magnetic effect jerky | Add `transition: transform 0.1s` to button |
| Particles lag | Reduce `particleCount` to 20-30 |

---

## 📊 Performance Tips

✅ **DO**
- Use CSS transforms (GPU accelerated)
- Limit particles to 30-50
- Stagger animations with delays
- Use `triggerOnce={true}` for scroll animations

❌ **DON'T**
- Animate `width`, `height`, or `top/left`
- Use 100+ particles
- Animate all elements simultaneously
- Animate on every scroll event

---

## 🚀 Quick Setup Checklist

- [ ] Import `microinteractions.css` in `App.jsx`
- [ ] Add `<ScrollToTop />` to `App.jsx`
- [ ] Optional: Add `<CursorGlow />` to `App.jsx`
- [ ] Wrap cards in `<AnimateOnScroll>`
- [ ] Add `ripple` class to buttons
- [ ] Add `useRipple` hook to button onClick
- [ ] Use `useCountUp` for stat numbers
- [ ] Add magnetic effect to primary CTAs

---

## 🎉 Most Popular Combinations

### Premium CTA Button
```jsx
const createRipple = useRipple()
const magneticRef = useMagneticEffect(0.3)

<button 
  ref={magneticRef}
  className="cta-button ripple"
  onClick={createRipple}
>
  Get Started
</button>
```

### Animated Stats Section
```jsx
const projects = useCountUp(500, 2000)
const clients = useCountUp(250, 2000)

<AnimateOnScroll animation="scaleIn">
  <div ref={projects.ref}>{projects.count}+</div>
  <div ref={clients.ref}>{clients.count}+</div>
</AnimateOnScroll>
```

### Hero with All Effects
```jsx
<div className="hero">
  <ParticleEffect particleCount={50} />
  <AnimateOnScroll animation="fadeInUp" delay={0.1}>
    <h1>Welcome</h1>
  </AnimateOnScroll>
  <AnimateOnScroll animation="fadeInUp" delay={0.3}>
    <button 
      ref={useMagneticEffect(0.3)}
      className="ripple"
      onClick={useRipple()}
    >
      Get Started
    </button>
  </AnimateOnScroll>
</div>
```

---

## 📞 Need Help?

Check these files:
- `MICROINTERACTIONS_GUIDE.md` - Complete documentation
- `IMPLEMENTATION_EXAMPLES.md` - Detailed examples
- `src/microinteractions.css` - All CSS animations

---

**Last Updated**: September 2026  
**Version**: 1.0.0
