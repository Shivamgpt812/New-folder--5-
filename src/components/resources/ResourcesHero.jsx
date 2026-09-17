import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, MessageSquare, Cpu, CheckCircle2 } from 'lucide-react'
import { useQuote } from '../../context/QuoteContext'
import './ResourcesHero.css'

function ResourcesHero() {
  const { openQuoteModal } = useQuote()

  const scrollToLibrary = (e) => {
    e.preventDefault()
    const target = document.getElementById('resource-library')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="resources-hero">
      <div className="resources-hero-bg-pattern"></div>

      <div className="resources-hero-container">
        
        {/* Left Column: Eyebrow, Headings, CTAs */}
        <div className="resources-hero-left">
          <div className="resources-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">ATRONICS RESOURCES</span>
          </div>

          <h1 className="resources-hero-heading">
            Engineering Knowledge<br />
            for <span className="resources-heading-accent">Better Hardware</span>
          </h1>

          <div className="resources-handwritten-note">
            <span>Practical guides & technical whitepapers</span>
            <svg width="150" height="12" viewBox="0 0 150 12" fill="none">
              <path d="M2 9.5C45 2 110 2 148 9.5" stroke="#087BFF" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="resources-hero-subheading">
            Practical guides, engineering insights and technical resources to help you design, manufacture and bring reliable electronics to production.
          </p>

          <div className="resources-hero-actions">
            <a href="#resource-library" onClick={scrollToLibrary} className="resources-btn-primary">
              <span>EXPLORE RESOURCES</span>
              <ArrowRight size={18} />
            </a>

            <Link to="/contact" className="resources-btn-secondary">
              <MessageSquare size={17} />
              <span>TALK TO AN ENGINEER</span>
            </Link>
          </div>

          {/* Micro Engineering Trust Points */}
          <div className="resources-trust-row">
            <div className="resources-trust-item">
              <CheckCircle2 size={15} />
              <span>Peer-Reviewed by Senior DFM Engineers</span>
            </div>
            <div className="resources-trust-item">
              <CheckCircle2 size={15} />
              <span>IPC-2221B & IPC-A-610 Aligned</span>
            </div>
          </div>
        </div>

        {/* Right Column: CAD Workstation Photo with Technical Annotations */}
        <div className="resources-hero-right">
          <div className="resources-image-wrapper">
            <img 
              src="/images/resources-hero-cad.jpg" 
              alt="ATRONICS Senior Electronics Engineer CAD Workstation" 
              className="resources-hero-image"
            />
            <div className="resources-image-overlay"></div>

            {/* Floating Technical Annotation Badge */}
            <div className="resources-float-tag">
              <div className="float-tag-dot"></div>
              <div className="float-tag-content">
                <span className="float-tag-label">ENGINEERING KNOWLEDGE</span>
                <span className="float-tag-sub">DESIGN → BUILD → DELIVER</span>
              </div>
            </div>

            {/* Micro Coordinate Specs */}
            <div className="resources-spec-badge">
              <Cpu size={14} />
              <span>ALT-CAD • 16-LAYER STACKUP</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ResourcesHero
