import React from 'react'
import { Building2, Cpu, Factory, Globe2, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import './ContactFacilities.css'

function ContactFacilities() {
  const facilities = [
    {
      icon: Cpu,
      tag: 'GLOBAL R&D HUB',
      city: 'Bengaluru, India',
      title: 'Advanced Hardware Design & Signal Lab',
      desc: 'Dedicated to high-speed digital, RF/microwave design, HDI multi-layer stackups, and comprehensive electromagnetic compliance (EMI/EMC) simulation.',
      specs: ['Up to 32 Layer Stackups', 'Signal & Power Integrity Labs', 'Impedance Control & DFM Automation'],
      badgeColor: 'blue'
    },
    {
      icon: Factory,
      tag: 'PRECISION FABRICATION',
      city: 'Chennai / SIPCOT, India',
      title: 'High-Volume SMT & Production Plant',
      desc: 'State-of-the-art automated Pick & Place lines featuring multi-zone nitrogen reflow, 3D SPI, 3D AOI inspection, and X-ray BGA void analysis.',
      specs: ['01005 Chip Placement', 'Class 10,000 Cleanroom SMT', 'Automated Optical & X-Ray QA'],
      badgeColor: 'cyan'
    },
    {
      icon: Globe2,
      tag: 'CLIENT LIAISON DESK',
      city: 'San Jose, CA, USA',
      title: 'Americas Engineering & DFM Liaison',
      desc: 'Providing real-time technical triage, rapid prototyping consultations, and synchronized global supply chain management for North American innovators.',
      specs: ['Real-Time DFM Triage', 'Component Sourcing APIs', 'Rapid Turn Delivery Gateway'],
      badgeColor: 'orange'
    }
  ]

  return (
    <section className="contact-facilities-section">
      <div className="contact-facilities-container">
        
        {/* Header */}
        <div className="contact-facilities-header">
          <div className="contact-facilities-badge">
            <span className="contact-badge-line"></span>
            <span className="contact-badge-text">WORLD-CLASS INFRASTRUCTURE</span>
          </div>
          <h2 className="contact-facilities-title">
            Our Engineering & <span className="contact-title-accent">Manufacturing Facilities</span>
          </h2>
          <p className="contact-facilities-subtitle">
            Strategically located R&D centers and precision fabrication facilities engineered to deliver end-to-end reliability from first prototype to high-volume production.
          </p>
        </div>

        {/* 3 Facility Cards Grid */}
        <div className="facilities-grid">
          {facilities.map((fac, idx) => {
            const IconComp = fac.icon
            return (
              <div className="facility-card" key={idx}>
                <div className="facility-card-top">
                  <div className={`facility-icon-box ${fac.badgeColor}`}>
                    <IconComp size={22} />
                  </div>
                  <div className="facility-tag-group">
                    <span className={`facility-tag ${fac.badgeColor}`}>{fac.tag}</span>
                    <span className="facility-city">
                      <MapPin size={12} />
                      <span>{fac.city}</span>
                    </span>
                  </div>
                </div>

                <h3 className="facility-card-heading">{fac.title}</h3>
                <p className="facility-card-desc">{fac.desc}</p>

                <div className="facility-specs-list">
                  {fac.specs.map((spec, sIdx) => (
                    <div className="facility-spec-item" key={sIdx}>
                      <CheckCircle2 size={14} className="spec-check-icon" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ContactFacilities
