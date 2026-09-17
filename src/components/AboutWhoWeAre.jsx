import React from 'react'
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  ArrowUpRight 
} from 'lucide-react'
import './AboutWhoWeAre.css'

function AboutWhoWeAre() {
  const capabilities = [
    {
      icon: Cpu,
      title: 'Electronics & Embedded Hardware',
      desc: 'High-speed digital, RF, mixed-signal & embedded system architecture.'
    },
    {
      icon: Layers,
      title: 'Multi-Layer PCB Fabrication',
      desc: 'Precision manufacturing from 2 to 16+ layers with controlled impedance.'
    },
    {
      icon: Sparkles,
      title: 'Turnkey SMT & Box Assembly',
      desc: 'Automated pick-and-place lines, BGA placement & complete system integration.'
    },
    {
      icon: ShieldCheck,
      title: 'Testing & ISO/IPC Certification',
      desc: 'Rigorous AOI, X-Ray, flying probe & IPC-A-610 Class 3 build compliance.'
    }
  ]

  return (
    <section className="about-who-section" id="who-we-are">
      <div className="who-bg-pattern"></div>
      
      <div className="who-container">
        
        {/* Left: Text & Capability Cards */}
        <div className="who-left-content">
          <div className="who-section-badge">
            <span className="who-badge-line"></span>
            <span className="who-badge-text">WHO WE ARE</span>
          </div>

          <h2 className="who-main-heading">
            Engineering Ideas Into<br />
            <span className="who-heading-accent">Real-World Hardware</span>
          </h2>

          <div className="who-handwritten-note">
            <span>From concept to volume production</span>
            <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
              <path d="M2 9.5C35 2 85 2 118 9.5" stroke="#087BFF" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="who-lead-text">
            ATRONICS is a full-stack electronics engineering and manufacturing partner. 
            We bridge the gap between initial hardware concepts and robust, production-ready devices — delivering unmatched speed, technical precision, and ISO-grade reliability.
          </p>

          <div className="who-capabilities-grid">
            {capabilities.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="who-cap-card">
                  <div className="who-cap-icon-box">
                    <Icon size={20} />
                  </div>
                  <div className="who-cap-info">
                    <h3 className="who-cap-title">{item.title}</h3>
                    <p className="who-cap-desc">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Modern Framed Image with Floating Badges */}
        <div className="who-right-visual">
          <div className="who-image-frame">
            <img 
              src="/images/process-engineer.webp" 
              alt="ATRONICS Engineering Team" 
              className="who-main-img"
            />
            <div className="who-image-overlay"></div>

            {/* Floating Pill Card 1: Top Right */}
            <div className="who-float-badge who-badge-top">
              <div className="who-float-icon-wrap">
                <CheckCircle2 size={16} />
              </div>
              <div className="who-float-text">
                <span className="float-bold">100% Traceable</span>
                <span className="float-sub">Component Sourcing</span>
              </div>
            </div>

            {/* Floating Pill Card 2: Bottom Left */}
            <div className="who-float-badge who-badge-bottom">
              <div className="who-float-icon-wrap blue">
                <Activity size={16} />
              </div>
              <div className="who-float-text">
                <span className="float-bold">24–48h Rapid Turn</span>
                <span className="float-sub">Prototype Turnaround</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutWhoWeAre
