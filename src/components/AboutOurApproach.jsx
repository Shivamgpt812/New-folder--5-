import React from 'react'
import { 
  Compass, 
  Layers, 
  Sliders, 
  TestTube2, 
  Boxes, 
  ArrowRight,
  Check 
} from 'lucide-react'
import './AboutOurApproach.css'

function AboutOurApproach() {
  const phases = [
    {
      step: '01',
      icon: Compass,
      title: 'Discover & Architect',
      tag: 'PHASE 1',
      description: 'Requirements analysis, BOM risk scoring, component lead time audits, and electrical specifications.',
      deliverable: 'Hardware Spec & BOM Audit'
    },
    {
      step: '02',
      icon: Layers,
      title: 'Schematic & PCB Layout',
      tag: 'PHASE 2',
      description: 'Controlled impedance routing, high-speed differential pairs, rigid/flex stackups, and 3D mechanical clearance.',
      deliverable: 'Gerber & CAD Packages'
    },
    {
      step: '03',
      icon: Sliders,
      title: 'DFM & DFA Engineering',
      tag: 'PHASE 3',
      description: 'Pre-fabrication rule checks, panelization optimization, automated stencil aperture design & testability.',
      deliverable: 'DFM Greenlight Report'
    },
    {
      step: '04',
      icon: TestTube2,
      title: 'Rapid Prototype & Test',
      tag: 'PHASE 4',
      description: 'Quick-turn SMT placement (24–48h), board bring-up, flying probe test, and firmware verification.',
      deliverable: 'Functional Working Samples'
    },
    {
      step: '05',
      icon: Boxes,
      title: 'Scaled Mass Delivery',
      tag: 'PHASE 5',
      description: 'Automated mass-run assembly, AOI/X-Ray 100% inspection, conformal coating, box builds, and logistics.',
      deliverable: 'Production-Ready Hardware'
    }
  ]

  return (
    <section className="about-approach-section" id="methodology">
      <div className="approach-bg-pattern"></div>

      <div className="approach-container">
        
        {/* Header Block */}
        <div className="approach-header">
          <div className="approach-section-badge">
            <span className="approach-badge-line"></span>
            <span className="approach-badge-text">OUR METHODOLOGY</span>
          </div>

          <h2 className="approach-main-heading">
            <span className="approach-heading-accent">Design.</span>{' '}
            <span className="approach-heading-accent">Engineer.</span>{' '}
            <span className="approach-heading-accent">Deliver.</span>
          </h2>

          <div className="approach-handwritten-note">
            <span>Disciplined 5-stage product development lifecycle</span>
            <svg width="150" height="12" viewBox="0 0 150 12" fill="none">
              <path d="M2 9.5C45 2 110 2 148 9.5" stroke="#087BFF" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="approach-header-desc">
            A proven, structured engineering framework engineered to eliminate redesign cycles, guarantee high manufacturing yields, and compress time-to-market.
          </p>
        </div>

        {/* 5-Phase Process Ribbon Grid */}
        <div className="approach-steps-container">
          {phases.map((phase, idx) => {
            const IconComponent = phase.icon
            return (
              <div key={idx} className="approach-step-card">
                <div className="step-card-header">
                  <span className="step-number">{phase.step}</span>
                  <span className="step-phase-tag">{phase.tag}</span>
                </div>

                <div className="step-icon-wrap">
                  <IconComponent size={24} />
                </div>

                <h3 className="step-card-title">{phase.title}</h3>
                <p className="step-card-desc">{phase.description}</p>

                <div className="step-deliverable-box">
                  <Check size={14} className="deliverable-check" />
                  <span>{phase.deliverable}</span>
                </div>

                {idx < phases.length - 1 && (
                  <div className="step-connector-arrow">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default AboutOurApproach
