# Atronics Homepage Hero Section

A pixel-perfect recreation of the Atronics PCB design company homepage hero section built with React and Vite.

## Features

- **Premium glassmorphism design** with frosted glass effects
- **Responsive layout** optimized for desktop, tablet, and mobile
- **Smooth animations** with reduced-motion support
- **Modular component architecture** for easy maintenance
- **Easy-to-replace background image** configuration

## Tech Stack

- React 18
- Vite
- Lucide React (icons)
- CSS Modules
- Google Fonts (Inter, Caveat)

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Adding Images

### Required Images

Place the following images in `public/images/`:

1. **atronics-logo.png** - Company logo (recommended width: 190px)
2. **atronics-hero-bg.jpg** - Hero background image (high resolution recommended)

### Replacing the Background Image

The hero background is configured via CSS variable for easy replacement:

1. Place your background image at `public/images/atronics-hero-bg.jpg`
2. Or update the path in `src/index.css`:

```css
:root {
  --hero-background-image: url('/images/your-custom-background.jpg');
}
```

## Component Structure

```
src/
├── components/
│   ├── AtronicsHero.jsx       # Main hero container
│   ├── Navbar.jsx             # Transparent navigation bar
│   ├── HeroBadge.jsx          # "PCB Design & Manufacturing Partner" pill
│   ├── FeatureHighlights.jsx  # Four feature icons (speed, multilayer, etc.)
│   ├── HeroActions.jsx        # CTA buttons (Quote, Upload Gerber)
│   ├── HeroStats.jsx          # Statistics section (500+ projects, etc.)
│   ├── GlassInfoCard.jsx      # Glass information cards
│   ├── StoryCTA.jsx           # "Watch Our Story" play button
│   └── TrustedBrands.jsx      # Bottom brands trust bar
```

## Design System

### Colors

```css
--bg-dark-1: #020B16
--bg-dark-2: #031426
--bg-dark-3: #061A2C

--primary-blue: #087BFF
--primary-blue-light: #168BFF
--primary-blue-bright: #2DA8FF

--cyan: #35D6FF
--green-accent: #36E5A0

--text-white: #FFFFFF
--text-light: #E9F1F8
--text-gray: #A8B7C8
```

### Typography

- Primary font: Inter (400, 500, 600, 700, 800)
- Accent font: Caveat (600) - for handwritten annotation

### Glass Effects

All glass components use:
- `backdrop-filter: blur()`
- Subtle rgba backgrounds
- Luminous borders with low opacity
- Soft blue glows

## Responsive Breakpoints

- Desktop: 1440px+ (optimal viewing)
- Tablet: 768px - 1439px
- Mobile: < 768px

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

Glassmorphism effects require modern browsers with backdrop-filter support.

## Customization

### Changing Statistics

Edit `src/components/HeroStats.jsx`:

```javascript
const stats = [
  { value: '500+', label: 'Projects Delivered' },
  // Add more stats...
]
```

### Changing Feature Icons

Edit `src/components/FeatureHighlights.jsx` and update the features array.

### Changing Brand Logos

Edit `src/components/TrustedBrands.jsx` and update the brands array.

## Performance

- Uses CSS transforms for smooth animations
- Respects `prefers-reduced-motion` for accessibility
- Optimized for 60fps animations
- Lazy loading ready (can be added if needed)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion support
- Sufficient color contrast ratios

## License

This is a demonstration project recreating a reference design.

## Notes

- Background image layer is separate from content for easy replacement
- All spacing and proportions match the reference screenshot
- Glass cards position dynamically on different screen sizes
- No horizontal scrolling on any viewport
