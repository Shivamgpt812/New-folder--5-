import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Activity, Waves, ShieldCheck } from 'lucide-react'
import './ResourcesSpotlight.css'

function ResourcesSpotlight() {
  const specs = [
    { label: 'CONTROLLED IMPEDANCE', val: '50Ω / 100Ω ±5%' },
    { label: 'DIFFERENTIAL PAIRS', val: 'Phase Matched < 2ps' },
    { label: 'SIGNAL INTEGRITY', val: 'Stripline Shielded' },
    { label: 'LOW NOISE', val: '-110 dB Cross-Talk' }
  ]

  return (
    <section className="resources-spotlight-section">
      <div className="spotlight-bg-grid"></div>

      <div className="resources-spotlight-container">
        
        {/* Left: Technical Narrative */}
        <div className="spotlight-left">
          <div className="spotlight-eyebrow">
            <span className="spotlight-badge-dot"></span>
            <span className="spotlight-badge-text">ENGINEERING SPOTLIGHT</span>
          </div>

          <span className="spotlight-sub-tag">HIGH-SPEED PCB DESIGN</span>

          <h2 className="spotlight-main-heading">
            Designing for<br />
            <span className="spotlight-accent">Signal Integrity</span>
          </h2>

          <p className="spotlight-description">
            As bus frequencies scale into the multi-gigahertz realm, PCB traces cease behaving like simple conductors and turn into complex electromagnetic transmission lines. Discover our proven rules for dielectric selection, return-path continuity, and cross-talk mitigation.
          </p>

          {/* Technical Specs Tags Grid */}
          <div className="spotlight-specs-grid">
            {specs.map((item, idx) => (
              <div key={idx} className="spotlight-spec-card">
                <span className="spec-label">{item.label}</span>
                <span className="spec-val">{item.val}</span>
              </div>
            ))}
          </div>

          <div className="spotlight-cta-row">
            <Link to="/resources/controlled-impedance-high-speed-pcb" className="spotlight-cta-btn">
              <span>EXPLORE THE GUIDE</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right: Macro Image with Technical Overlay */}
        <div className="spotlight-right">
          <div className="spotlight-image-frame">
            <img 
              src="/images/resources-signal-integrity.jpg" 
              alt="High-Speed Impedance Controlled PCB Routing" 
              className="spotlight-img"
            />
            <div className="spotlight-img-overlay"></div>

            {/* Micro Callout Badge 1 */}
            <div className="spotlight-marker marker-top">
              <Waves size={14} />
              <span>100Ω Microstrip Pair</span>
            </div>

            {/* Micro Callout Badge 2 */}
            <div className="spotlight-marker marker-bottom">
              <Zap size={14} />
              <span>Gold ENIG Test Pads</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ResourcesSpotlight
