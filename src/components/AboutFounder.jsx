import React from 'react'
import { 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Globe 
} from 'lucide-react'
import './AboutFounder.css'

function AboutFounder() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Engineering First',
      description: 'Solving real problems with practical innovation.'
    },
    {
      icon: Users,
      title: 'People Driven',
      description: 'A skilled team passionate about hardware.'
    },
    {
      icon: TrendingUp,
      title: 'Impact Focused',
      description: 'Creating reliable electronics for a smarter tomorrow.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Supporting innovators across industries worldwide.'
    }
  ]

  const philosophies = [
    {
      title: 'INNOVATION',
      desc: 'Turn ideas into meaningful solutions'
    },
    {
      title: 'INTEGRITY',
      desc: "Do what's right, always"
    },
    {
      title: 'COLLABORATION',
      desc: 'Grow together with our clients'
    },
    {
      title: 'LONG-TERM IMPACT',
      desc: 'Build technology that matters'
    }
  ]

  return (
    <section className="about-founder-section" id="founder">
      {/* Subtle circuit/dot background pattern */}
      <div className="founder-bg-pattern"></div>

      <div className="founder-container">
        {/* ================= TOP 3-COLUMN MAIN ROW ================= */}
        <div className="founder-main-grid">
          
          {/* ========== LEFT COLUMN: FOUNDER PORTRAIT & OVERLAYS ========== */}
          <div className="founder-image-column">
            <div className="founder-portrait-wrapper">
              
              {/* Main Portrait Image */}
              <div className="founder-image-card">
                <img 
                  src="/images/about/founder.webp" 
                  alt="Atul - Founder & CEO, ATRONICS" 
                  className="founder-portrait-img"
                  onError={(e) => {
                    e.currentTarget.src = '/images/about/founder.png'
                  }}
                />
              </div>

              {/* Floating Left Information Panel */}
              <div className="founder-floating-info-panel">
                <div className="founder-info-block founder-info-header">
                  <span className="info-sub-label">BUILT ON</span>
                  <span className="info-sub-label">PASSION FOR</span>
                  <span className="info-sub-label">ELECTRONICS</span>
                  <div className="info-accent-bar"></div>
                </div>

                <div className="founder-info-block">
                  <span className="info-stat-num">10+</span>
                  <span className="info-stat-text">Years of<br />Experience</span>
                </div>

                <div className="founder-info-block">
                  <span className="info-stat-num">500+</span>
                  <span className="info-stat-text">Projects<br />Guided</span>
                </div>

                <div className="founder-info-block founder-info-block-last">
                  <span className="info-expert-title">End-to-End<br />Expertise</span>
                  <span className="info-stat-text">Design to<br />Production</span>
                </div>
              </div>

              {/* Handwritten Blue Annotation */}
              <div className="founder-handwritten-badge">
                <span>Electronics<br />for a Better<br />Tomorrow</span>
              </div>

              {/* Dark Navy Floating Quote Card */}
              <div className="founder-quote-card">
                <div className="founder-quote-icon">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M0 11.6667C0 5.22222 4.07407 1.33333 9.62963 0L11.1111 2.44444C7.7037 3.44444 5.88889 5.44444 5.44444 8.33333H10.7407V20H0V11.6667ZM13.2593 11.6667C13.2593 5.22222 17.3333 1.33333 22.8889 0L24.3704 2.44444C20.963 3.44444 19.1481 5.44444 18.7037 8.33333H24V20H13.2593V11.6667Z" fill="#087BFF"/>
                  </svg>
                </div>
                <div className="founder-quote-text-group">
                  <p className="founder-quote-content">
                    “My mission is to make advanced electronics engineering accessible, reliable, and impactful for innovators across the world.”
                  </p>
                  <span className="founder-quote-author">— Founder & CEO, ATRONICS</span>
                </div>
              </div>

            </div>
          </div>

          {/* ========== CENTER COLUMN: FOUNDER STORY & SIGNATURE ========== */}
          <div className="founder-content-column">
            
            {/* Section Badge */}
            <div className="founder-section-badge">
              <span className="founder-badge-line"></span>
              <span className="founder-badge-text">OUR FOUNDER</span>
            </div>

            {/* Heading */}
            <h2 className="founder-main-heading">
              Driven by Curiosity.<br />
              <span className="founder-heading-accent">Built for Impact.</span>
            </h2>

            {/* Story Paragraphs */}
            <div className="founder-story-body">
              <p>
                ATRONICS was founded with a simple belief — great hardware can change industries. What started as a passion for electronics design has grown into a full-fledged engineering and manufacturing partner, helping companies turn innovative ideas into real-world products.
              </p>
              <p>
                With a deep focus on technical excellence, manufacturability and real-world impact, I lead a talented team that is committed to solving complex hardware challenges and building a more connected, intelligent future.
              </p>
            </div>

            {/* Founder Info & Signature */}
            <div className="founder-signature-section">
              <div className="founder-info-titles">
                <h3 className="founder-person-name">Atul</h3>
                <span className="founder-person-role">Founder & CEO, ATRONICS</span>
              </div>

              {/* Styled Clean SVG Signature for Atul */}
              <div className="founder-signature-svg-wrapper" aria-label="Signature of Atul">
                <svg width="200" height="60" viewBox="0 0 200 60" fill="none" className="founder-signature-svg">
                  {/* Fluid cursive signature of Atul with underline flourish */}
                  <path 
                    d="M16 44C14 36 20 14 26 8C31 3 35 6 34 14C32 26 24 44 22 48M18 32C24 30 34 29 40 28M42 28C46 27 50 36 54 39C56 40 59 38 60 34C62 28 64 18 64 16M64 16C64 22 64 36 70 38C74 40 79 37 82 31C85 25 86 15 86 12M86 12C86 22 86 38 92 38C96 38 101 35 105 28C108 22 110 12 108 8C106 5 103 8 102 16C101 28 104 42 114 36C122 30 132 22 144 16M12 52C38 48 82 45 128 46C150 46.5 172 49 188 52" 
                    stroke="#0A1E3D" 
                    strokeWidth="2.4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

          {/* ========== RIGHT COLUMN: 4 VERTICAL VALUE BLOCKS ========== */}
          <div className="founder-values-column">
            {values.map((val, idx) => {
              const IconComponent = val.icon
              return (
                <div className="founder-value-card" key={idx}>
                  <div className="founder-value-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div className="founder-value-text-group">
                    <h4 className="founder-value-title">{val.title}</h4>
                    <p className="founder-value-desc">{val.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* ================= BOTTOM LEADERSHIP PHILOSOPHY STRIP ================= */}
        <div className="founder-philosophy-strip">
          <div className="philosophy-header-block">
            <span className="philosophy-badge-line"></span>
            <div className="philosophy-header-text">
              <span>OUR LEADERSHIP</span>
              <strong>PHILOSOPHY</strong>
            </div>
          </div>

          <div className="philosophy-items-grid">
            {philosophies.map((item, index) => (
              <div className="philosophy-item" key={index}>
                <h5 className="philosophy-title">{item.title}</h5>
                <p className="philosophy-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutFounder
