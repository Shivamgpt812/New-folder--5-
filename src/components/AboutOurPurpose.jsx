import React from 'react'
import { 
  Target, 
  Eye, 
  Gem, 
  CheckCircle2, 
  Leaf, 
  Users, 
  Settings, 
  Globe 
} from 'lucide-react'
import './AboutOurPurpose.css'

function AboutOurPurpose() {
  const valuesList = [
    'Innovation in Everything We Do',
    'Integrity & Transparency',
    'Customer Success',
    'Quality Without Compromise',
    'Long-Term Partnerships'
  ]

  const philosophies = [
    {
      icon: Leaf,
      title: 'Sustainable Innovation',
      desc: 'Engineering solutions for a cleaner, smarter planet.'
    },
    {
      icon: Users,
      title: 'People Centric',
      desc: 'Our people drive our progress.'
    },
    {
      icon: Settings,
      title: 'Engineering Excellence',
      desc: 'Precision, reliability, real-world results.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      desc: 'Supporting innovators across the world.'
    }
  ]

  return (
    <section className="about-purpose-section" id="purpose">
      {/* Subtle blueprint dots pattern */}
      <div className="purpose-bg-pattern"></div>

      <div className="purpose-container">
        
        {/* ================= TOP AREA ================= */}
        <div className="purpose-top-grid">
          
          {/* Top Left Content */}
          <div className="purpose-intro-column">
            <div className="purpose-section-badge">
              <span className="purpose-badge-line"></span>
              <span className="purpose-badge-text">OUR PURPOSE</span>
            </div>

            <h2 className="purpose-main-heading">
              Building a<br />
              Smarter, More<br />
              <span className="purpose-heading-accent">Connected Tomorrow</span>
            </h2>

            <p className="purpose-intro-description">
              At ATRONICS, our mission is to empower innovators with reliable electronics engineering and manufacturing solutions, creating real-world impact through technology, precision, and partnership.
            </p>
          </div>

          {/* Top Right Decorative Technical Area */}
          <div className="purpose-technical-column">
            
            {/* Upper Microtext */}
            <div className="purpose-microtext">
              <span>IDEAS</span>
              <span className="micro-arrow">→</span>
              <span>CIRCUITS</span>
              <span className="micro-arrow">→</span>
              <span>REAL IMPACT</span>
            </div>

            {/* Abstract Decorative PCB Circuit Lines Visual */}
            <div className="purpose-circuit-card">
              <svg width="100%" height="100%" viewBox="0 0 340 180" fill="none" className="purpose-circuit-svg">
                {/* Circuit Grid & Traces */}
                <path d="M20 90H90L130 50H220L250 80H320" stroke="rgba(8, 123, 255, 0.18)" strokeWidth="1.5" strokeDasharray="3 3"/>
                <path d="M40 140H110L140 110H200L230 140H300" stroke="rgba(8, 123, 255, 0.22)" strokeWidth="1.5"/>
                <path d="M60 40H120L150 70H240L270 40H310" stroke="rgba(8, 123, 255, 0.25)" strokeWidth="1.5"/>
                <path d="M130 50V130" stroke="rgba(8, 123, 255, 0.15)" strokeWidth="1.2"/>
                <path d="M220 50V140" stroke="rgba(8, 123, 255, 0.15)" strokeWidth="1.2"/>
                
                {/* Circuit Nodes */}
                <circle cx="20" cy="90" r="3.5" fill="#087BFF" fillOpacity="0.4"/>
                <circle cx="90" cy="90" r="3" fill="#087BFF"/>
                <circle cx="130" cy="50" r="3.5" stroke="#087BFF" strokeWidth="1.5" fill="#FFFFFF"/>
                <circle cx="220" cy="50" r="3.5" stroke="#087BFF" strokeWidth="1.5" fill="#FFFFFF"/>
                <circle cx="250" cy="80" r="3" fill="#087BFF"/>
                <circle cx="320" cy="80" r="3.5" fill="#087BFF" fillOpacity="0.4"/>

                <circle cx="40" cy="140" r="3" fill="#087BFF"/>
                <circle cx="140" cy="110" r="3.5" stroke="#087BFF" strokeWidth="1.5" fill="#FFFFFF"/>
                <circle cx="200" cy="110" r="3" fill="#087BFF"/>
                <circle cx="300" cy="140" r="3.5" fill="#087BFF" fillOpacity="0.5"/>

                <circle cx="60" cy="40" r="3" fill="#087BFF"/>
                <circle cx="150" cy="70" r="3.5" stroke="#087BFF" strokeWidth="1.5" fill="#FFFFFF"/>
                <circle cx="270" cy="40" r="3.5" stroke="#087BFF" strokeWidth="1.5" fill="#FFFFFF"/>

                {/* Central Microchip Outline */}
                <rect x="155" y="75" width="30" height="30" rx="4" stroke="#087BFF" strokeWidth="1.5" fill="rgba(8, 123, 255, 0.05)"/>
                <rect x="163" y="83" width="14" height="14" rx="2" fill="#087BFF" fillOpacity="0.3"/>
              </svg>

              {/* Vertical Editorial Text */}
              <div className="purpose-editorial-badge">
                <span className="purpose-editorial-dash"></span>
                <span className="purpose-editorial-text">
                  TECHNOLOGY<br />THAT POWERS<br />A BRIGHTER<br />TOMORROW
                </span>
                <span className="purpose-editorial-dash"></span>
              </div>
            </div>

            {/* Bottom Right Wordmark & Handwritten Annotation */}
            <div className="purpose-branding-row">
              <img 
                src="/images/logo-light.png" 
                alt="ATRONICS Logo" 
                className="purpose-logo-wordmark"
              />

              <div className="purpose-handwritten-note">
                <span className="purpose-handwritten-text">From Possibilities<br />to Progress</span>
                <svg width="48" height="12" viewBox="0 0 48 12" fill="none" className="purpose-handwritten-underline">
                  <path d="M2 9C14 3 32 4 46 8" stroke="#087BFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

          </div>

        </div>

        {/* ================= 3 PURPOSE CARDS ROW ================= */}
        <div className="purpose-cards-grid">
          
          {/* Card 1: Our Mission */}
          <div className="purpose-card">
            <div className="purpose-card-header">
              <div className="purpose-card-icon-box">
                <Target size={20} />
              </div>
              <div className="purpose-card-header-titles">
                <span className="purpose-card-tag">OUR MISSION</span>
                <h3 className="purpose-card-heading">Turn Ideas into Impact</h3>
              </div>
            </div>
            <p className="purpose-card-desc">
              To deliver high-performance electronics solutions through innovation, engineering excellence, and manufacturing reliability, helping our customers bring their ideas to life.
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="purpose-card">
            <div className="purpose-card-header">
              <div className="purpose-card-icon-box">
                <Eye size={20} />
              </div>
              <div className="purpose-card-header-titles">
                <span className="purpose-card-tag">OUR VISION</span>
                <h3 className="purpose-card-heading">A More Connected World</h3>
              </div>
            </div>
            <p className="purpose-card-desc">
              To be a global leader in electronics engineering and manufacturing, enabling a smarter, safer, and more connected future for every industry.
            </p>
          </div>

          {/* Card 3: Our Values */}
          <div className="purpose-card purpose-card-values">
            <div className="purpose-card-header">
              <div className="purpose-card-icon-box">
                <Gem size={20} />
              </div>
              <div className="purpose-card-header-titles">
                <span className="purpose-card-tag">OUR VALUES</span>
                <h3 className="purpose-card-heading">What Drives Us</h3>
              </div>
            </div>
            <ul className="purpose-values-checklist">
              {valuesList.map((item, i) => (
                <li key={i} className="purpose-checklist-item">
                  <CheckCircle2 size={16} className="purpose-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM PHILOSOPHY STRIP ================= */}
        <div className="purpose-philosophy-strip">
          
          <div className="purpose-philosophy-grid">
            {philosophies.map((item, index) => {
              const IconComp = item.icon
              return (
                <div className="purpose-philosophy-item" key={index}>
                  <div className="philosophy-icon-box">
                    <IconComp size={19} />
                  </div>
                  <div className="philosophy-text-group">
                    <h4 className="philosophy-item-title">{item.title}</h4>
                    <p className="philosophy-item-desc">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quote Block on Far Right */}
          <div className="purpose-strip-quote">
            <div className="purpose-quote-icon">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                <path d="M0 10.5C0 4.7 3.6 1.2 8.5 0L9.8 2.2C6.8 3.1 5.2 4.9 4.8 7.5H9.5V18H0V10.5ZM12.5 10.5C12.5 4.7 16.1 1.2 21 0L22.3 2.2C19.3 3.1 17.7 4.9 17.3 7.5H22V18H12.5V10.5Z" fill="#087BFF"/>
              </svg>
            </div>
            <div className="purpose-quote-text-wrap">
              <p className="purpose-quote-phrase">
                “We don't just build electronics, we build possibilities.”
              </p>
              <span className="purpose-quote-signer">— Team ATRONICS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutOurPurpose
