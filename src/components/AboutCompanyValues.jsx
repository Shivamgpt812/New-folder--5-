import React from 'react'
import { 
  Award, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react'
import './AboutCompanyValues.css'

function AboutCompanyValues() {
  const values = [
    {
      num: '01',
      icon: Award,
      title: 'Engineering Precision',
      tag: 'RIGOR',
      description: 'We push the boundaries of high-speed, RF, and multi-layer PCB design with uncompromising physics-based modeling and DFM rigor.'
    },
    {
      num: '02',
      icon: Users,
      title: 'Deep Engineering Partnership',
      tag: 'COLLABORATION',
      description: 'We act as an integrated extension of your hardware engineering team, delivering transparent updates and proactive DFM feedback.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Quality Without Compromise',
      tag: 'STANDARDS',
      description: 'Every board, solder joint, and test routine complies strictly with ISO 9001:2015 and IPC-A-610 Class 3 reliability standards.'
    },
    {
      num: '04',
      icon: Sparkles,
      title: 'Continuous Innovation',
      tag: 'EVOLUTION',
      description: 'We continuously upgrade our automated pick-and-place precision, AOI / 3D X-Ray optical inspection, and advanced flex substrates.'
    },
    {
      num: '05',
      icon: TrendingUp,
      title: 'On-Time Delivery Guarantee',
      tag: 'EXECUTION',
      description: 'Predictable quick-turn schedules (24–48h NPI turnaround) and seamless mass production logistics you can depend on.'
    }
  ]

  return (
    <section className="about-values-section" id="values">
      <div className="values-bg-pattern"></div>

      <div className="values-container">
        
        {/* Header Block */}
        <div className="values-header">
          <div className="values-section-badge">
            <span className="values-badge-line"></span>
            <span className="values-badge-text">OUR VALUES</span>
          </div>

          <h2 className="values-main-heading">
            Principles That <span className="values-heading-accent">Guide Us</span>
          </h2>

          <div className="values-handwritten-note">
            <span>Engineering integrity in every solder joint and layout</span>
            <svg width="150" height="12" viewBox="0 0 150 12" fill="none">
              <path d="M2 9.5C45 2 110 2 148 9.5" stroke="#087BFF" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="values-header-desc">
            Our core values define how we engineer, fabricate, inspect, and partner with forward-thinking hardware teams around the globe.
          </p>
        </div>

        {/* 5-Card Modern Values Grid */}
        <div className="values-cards-grid">
          {values.map((val, idx) => {
            const Icon = val.icon
            return (
              <div key={idx} className="value-modern-card">
                <div className="value-card-top">
                  <span className="value-number">{val.num}</span>
                  <span className="value-tag-pill">{val.tag}</span>
                </div>

                <div className="value-icon-box">
                  <Icon size={24} />
                </div>

                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-desc">{val.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default AboutCompanyValues
