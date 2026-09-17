import React from 'react'
import Navbar from './Navbar'
import HeroBadge from './HeroBadge'
import FeatureHighlights from './FeatureHighlights'
import HeroActions from './HeroActions'
import HeroStats from './HeroStats'
import GlassInfoCard from './GlassInfoCard'
import StoryCTA from './StoryCTA'
import TrustedBrands from './TrustedBrands'
import TypewriterText from './TypewriterText'
import { Cpu, TrendingUp } from 'lucide-react'
import './AtronicsHero.css'

const AtronicsHero = () => {
  return (
    <div className="atronics-hero">
      {/* Background Layer */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-glow"></div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Content Container */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Column */}
          <div className="hero-left">
            <HeroBadge />
            
            <h1 className="hero-heading">
              <span className="hero-heading-line1">From Ideas to</span>
              <span className="hero-heading-line2">
                <TypewriterText 
                  words={['Intelligent', 'High-Speed', 'Reliable', 'Next-Gen', 'Scalable']} 
                  typingSpeed={90}
                  deletingSpeed={45}
                  pauseTime={2200}
                />{' '}
                Hardware
              </span>
            </h1>
            
            <p className="hero-subheading">
              High-performance PCB design, engineering, and manufacturing
              solutions for a smarter, connected tomorrow.
            </p>
            
            <FeatureHighlights />
            
            <HeroActions />
            
            <HeroStats />
          </div>
          
          {/* Right Column - Glass Cards & Annotations */}
          <div className="hero-right">
            <GlassInfoCard
              icon={<Cpu size={24} />}
              title="HIGH PERFORMANCE"
              subtitle="PCB SOLUTIONS"
              description={
                <>
                  Reliable. Scalable.<br />
                  Future-ready.
                </>
              }
              className="card-position-1"
            />
            
            <GlassInfoCard
              icon={<TrendingUp size={24} />}
              title="FASTER"
              subtitle="TIME TO MARKET"
              description={
                <>
                  Turn ideas into real<br />
                  products, faster.
                </>
              }
              className="card-position-2"
            />
            
            {/* Handwritten Annotation */}
            <div className="handwritten-annotation">
              <div className="handwritten-text">
                Smarter<br />
                Circuits.<br />
                Brighter<br />
                Possibilities.
              </div>
              <svg className="handwritten-arrow" width="70" height="58" viewBox="0 0 70 58">
                <path 
                  d="M 6 6 Q 22 18, 36 28 Q 50 38, 58 50" 
                  stroke="#2196FF" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M 47 42 L 58 50 L 61 39" 
                  stroke="#2196FF" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Product Platform Label */}
            <div className="platform-label">
              PRECISION ENGINEERING | REAL IMPACT
            </div>
            
            {/* Story CTA */}
            <StoryCTA />
          </div>
        </div>
      </div>
      
      {/* Trusted Brands Bar */}
      <TrustedBrands />
    </div>
  )
}

export default AtronicsHero
