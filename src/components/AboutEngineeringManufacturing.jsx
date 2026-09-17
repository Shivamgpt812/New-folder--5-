import React from 'react'
import { 
  Layers, 
  Factory, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  SearchCheck
} from 'lucide-react'
import './AboutEngineeringManufacturing.css'

function AboutEngineeringManufacturing() {
  const features = [
    {
      icon: Layers,
      title: 'Design for Manufacturability (DFM)',
      desc: 'Rigorous pre-fab checks for drill aspect ratios, annular rings, trace spacing, and thermal relief.'
    },
    {
      icon: Factory,
      title: 'Scalable Precision SMT Lines',
      desc: 'Seamless transition from 5-piece NPI prototypes to 100k+ monthly high-yield volume manufacturing.'
    },
    {
      icon: Cpu,
      title: 'Full BOM Sourcing & Verification',
      desc: '100% franchised component procurement with tamper-proof moisture barrier packaging and lot tracking.'
    },
    {
      icon: SearchCheck,
      title: '100% Quality & IPC Class 3 QA',
      desc: 'Comprehensive automated optical inspection (AOI), 3D X-Ray, flying probe, and functional test coverage.'
    }
  ]

  return (
    <section className="about-mfg-section" id="manufacturing">
      <div className="mfg-bg-pattern"></div>

      <div className="mfg-container">
        
        {/* Left: Text & 4 Architecture Feature Cards */}
        <div className="mfg-left-content">
          <div className="mfg-section-badge">
            <span className="mfg-badge-line"></span>
            <span className="mfg-badge-text">ENGINEERING + MANUFACTURING</span>
          </div>

          <h2 className="mfg-main-heading">
            Where <span className="mfg-heading-accent">Precision Design</span><br />
            Meets Production Excellence
          </h2>

          <div className="mfg-handwritten-note">
            <span>Zero-defect manufacturing from day one</span>
            <svg width="130" height="12" viewBox="0 0 130 12" fill="none">
              <path d="M2 9.5C35 2 95 2 128 9.5" stroke="#087BFF" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="mfg-lead-text">
            We eliminate the traditional friction between electronic design and the factory floor. By integrating DFM analysis directly into our layout and CAD workflows, we deliver reliable, high-yield boards with shorter cycle times.
          </p>

          <div className="mfg-features-grid">
            {features.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div key={idx} className="mfg-feature-card">
                  <div className="mfg-icon-box">
                    <Icon size={20} />
                  </div>
                  <div className="mfg-info">
                    <h3 className="mfg-title">{feat.title}</h3>
                    <p className="mfg-desc">{feat.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Modern Framed Visual with Floating Quality Badges */}
        <div className="mfg-right-visual">
          <div className="mfg-image-frame">
            <img 
              src="/images/pcb-stack.webp" 
              alt="ATRONICS Precision PCB Manufacturing" 
              className="mfg-main-img"
            />
            <div className="mfg-image-overlay"></div>

            {/* Floating Badge 1: Top Right */}
            <div className="mfg-float-badge mfg-badge-top">
              <div className="mfg-float-icon-wrap">
                <SearchCheck size={16} />
              </div>
              <div className="mfg-float-text">
                <span className="float-bold">AOI & 3D X-Ray</span>
                <span className="float-sub">100% Solder Inspection</span>
              </div>
            </div>

            {/* Floating Badge 2: Bottom Left */}
            <div className="mfg-float-badge mfg-badge-bottom">
              <div className="mfg-float-icon-wrap blue">
                <ShieldCheck size={16} />
              </div>
              <div className="mfg-float-text">
                <span className="float-bold">IPC Class 3</span>
                <span className="float-sub">High-Reliability Standard</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutEngineeringManufacturing
