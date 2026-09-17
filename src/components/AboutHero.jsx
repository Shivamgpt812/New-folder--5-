import React from 'react'
import { 
  Lightbulb, 
  Settings, 
  Box, 
  ArrowRight, 
  Users, 
  ArrowUpRight,
  Cpu
} from 'lucide-react'
import './AboutHero.css'

function AboutHero() {
  return (
    <section className="about-hero">
      {/* Background blueprint subtle pattern */}
      <div className="about-hero-bg-pattern"></div>

      <div className="about-hero-layout-wrapper">
        <div className="about-hero-container">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="about-hero-left">
            
            {/* Top row: Badge on left + Keywords stack on right */}
            <div className="about-top-row">
              <div className="about-hero-badge">
                <span className="about-badge-bar"></span>
                <span className="about-badge-text">ABOUT ATRONICS</span>
              </div>

              <div className="about-keywords-stack">
                <span>IDEAS</span>
                <span>CIRCUITS</span>
                <span>PEOPLE</span>
                <span>REAL IMPACT</span>
                <span className="about-keywords-bar"></span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="about-hero-headline">
              Engineering<br />
              A Smarter <span className="about-headline-accent">Tomorrow</span>
            </h1>

            {/* Subtitle Description */}
            <p className="about-hero-description">
              We are an electronics engineering and manufacturing partner helping 
              businesses turn innovative ideas into reliable, high-performance hardware.
            </p>

            {/* Three Core Value Cards */}
            <div className="about-core-values">
              <div className="about-value-pill">
                <div className="about-value-icon">
                  <Lightbulb size={18} />
                </div>
                <div className="about-value-info">
                  <span className="about-value-title">Design</span>
                  <span className="about-value-subtitle">with purpose</span>
                </div>
              </div>

              <div className="about-value-pill">
                <div className="about-value-icon">
                  <Settings size={18} />
                </div>
                <div className="about-value-info">
                  <span className="about-value-title">Engineer</span>
                  <span className="about-value-subtitle">for impact</span>
                </div>
              </div>

              <div className="about-value-pill">
                <div className="about-value-icon">
                  <Box size={18} />
                </div>
                <div className="about-value-info">
                  <span className="about-value-title">Deliver</span>
                  <span className="about-value-subtitle">with trust</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="about-hero-cta">
              <button className="about-btn-primary">
                <span>Our Story</span>
                <ArrowRight size={16} />
              </button>
              <button className="about-btn-secondary">
                <Users size={16} />
                <span>Meet Our Team</span>
              </button>
            </div>

            {/* Key Statistics Bar */}
            <div className="about-hero-stats">
              <div className="about-stat-item">
                <div className="about-stat-number">500+</div>
                <div className="about-stat-label">Projects Delivered</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">10+</div>
                <div className="about-stat-label">Industries Served</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">99%</div>
                <div className="about-stat-label">On-Time Delivery</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">50+</div>
                <div className="about-stat-label">Engineering Capabilities</div>
              </div>
            </div>

            {/* Bottom Quote Box */}
            <div className="about-hero-quote">
              <div className="about-quote-icon-box">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                  <path d="M0 10.5C0 4.7 3.6 1.2 8.5 0L9.8 2.2C6.8 3.1 5.2 4.9 4.8 7.5H9.5V18H0V10.5ZM12.5 10.5C12.5 4.7 16.1 1.2 21 0L22.3 2.2C19.3 3.1 17.7 4.9 17.3 7.5H22V18H12.5V10.5Z" fill="#087BFF"/>
                </svg>
              </div>
              <div className="about-quote-content">
                <p className="about-quote-text">
                  “We believe electronics can create a better, more connected and sustainable world.”
                </p>
                <span className="about-quote-author">— The ATRONICS Team</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT VISUAL COLUMN ================= */}
          <div className="about-hero-right">
            
            {/* Top Main Image Card */}
            <div className="about-main-image-card">
              <img 
                src="/images/about/about-hero-engineer-pcb.webp" 
                alt="ATRONICS Engineer designing high-performance PCB" 
                className="about-main-image"
              />

              {/* Floating Glassmorphic Card (Bottom Left of Main Image) */}
              <div className="about-floating-card">
                <div className="about-floating-icon">
                  <Cpu size={18} />
                </div>
                <div className="about-floating-content">
                  <div className="about-floating-title">
                    From Concept<br />to Production
                  </div>
                  <div className="about-floating-subtitle">
                    Complete electronics<br />development lifecycle.
                  </div>
                </div>
                <ArrowUpRight size={15} className="about-floating-arrow" />
              </div>
            </div>

            {/* Bottom Two Image Cards */}
            <div className="about-bottom-cards-grid">
              
              {/* Card 1: Precision Engineering */}
              <div className="about-bottom-card">
                <img 
                  src="/images/about/about-precision-engineering.webp" 
                  alt="Precision PCB Engineering" 
                  className="about-bottom-card-img"
                />
                <div className="about-bottom-card-overlay">
                  <h3 className="about-bottom-card-title">
                    PRECISION<br />ENGINEERING
                  </h3>
                  <p className="about-bottom-card-desc">Built for reliability.</p>
                </div>
              </div>

              {/* Card 2: Advanced Manufacturing */}
              <div className="about-bottom-card">
                <img 
                  src="/images/about/about-advanced-manufacturing.webp" 
                  alt="Advanced SMT Manufacturing" 
                  className="about-bottom-card-img"
                />
                <div className="about-bottom-card-overlay">
                  <h3 className="about-bottom-card-title">
                    ADVANCED<br />MANUFACTURING
                  </h3>
                  <p className="about-bottom-card-desc">From prototype to scale.</p>
                </div>
              </div>

            </div>

          </div>

          {/* ================= EDITORIAL RIGHT SIDEBAR ================= */}
          <div className="about-editorial-sidebar">
            <div className="about-editorial-top">
              <span className="about-editorial-num">01</span>
              <span className="about-editorial-heading">ABOUT<br />ATRONICS</span>
            </div>
            <div className="about-editorial-divider"></div>
            <div className="about-editorial-bottom">
              <span className="about-editorial-sub">BUILDING<br />A SMARTER<br />TOMORROW</span>
              <span className="about-editorial-dash"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHero
