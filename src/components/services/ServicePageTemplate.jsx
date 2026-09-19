import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Layers, 
  FileText, 
  HelpCircle, 
  Sparkles,
  Award,
  Settings,
  ArrowUpRight
} from 'lucide-react'
import { useQuote } from '../../context/QuoteContext'
import { getAllServices } from '../../data/services'
import './ServicePageTemplate.css'

const iconMap = {
  Zap: Zap,
  Layers: Layers,
  CheckCircle2: CheckCircle2,
  FileText: FileText,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
}

function ServicePageTemplate({ service }) {
  const { openQuoteModal } = useQuote()
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  if (!service) return null

  const allServices = getAllServices()
  const otherServices = allServices.filter(s => s.slug !== service.slug)

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const scrollToSpecs = (e) => {
    e.preventDefault()
    const el = document.getElementById('technical-specs-table')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <article className="service-detail-view">
      <div className="service-bg-dot-pattern"></div>

      {/* ================= 1. HERO SECTION ================= */}
      <header className="service-hero-section">
        <div className="service-hero-container">
          
          {/* Breadcrumbs */}
          <nav className="service-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="service-crumb-link">Home</Link>
            <ChevronRight size={13} className="service-crumb-sep" />
            <span className="service-crumb-parent">Services</span>
            <ChevronRight size={13} className="service-crumb-sep" />
            <span className="service-crumb-current">{service.title}</span>
          </nav>

          {/* Eyebrow and Badges */}
          <div className="service-hero-meta-row">
            <span className="service-category-badge">{service.category}</span>
            <div className="service-cert-pill">
              <Award size={14} />
              <span>{service.badgeText}</span>
            </div>
          </div>

          {/* Titles */}
          <h1 className="service-main-heading">
            {service.title}
          </h1>

          <p className="service-tagline-text">
            {service.tagline}
          </p>

          <p className="service-hero-desc">
            {service.heroDescription}
          </p>

          {/* Quick Metrics Bar */}
          <div className="service-stats-grid">
            {service.stats.map((stat, idx) => (
              <div key={idx} className="service-stat-card">
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="service-hero-actions">
            <button 
              type="button" 
              className="service-btn-primary"
              onClick={() => openQuoteModal(service.quoteServiceKey)}
            >
              <span>GET AN INSTANT QUOTE</span>
              <ArrowRight size={16} />
            </button>
            
            <a 
              href="#technical-specs-table" 
              onClick={scrollToSpecs} 
              className="service-btn-secondary"
            >
              <span>VIEW CAPABILITY SPECS</span>
              <ChevronDown size={16} />
            </a>
          </div>

          {/* Main Hero Visual Frame */}
          <div className="service-hero-image-frame">
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="service-hero-img"
            />
            <div className="service-hero-img-gradient"></div>
            
            <div className="service-image-floating-badge">
              <Sparkles size={15} />
              <span>CERTIFIED ATRONICS PRODUCTION LINE</span>
            </div>
          </div>

        </div>
      </header>

      {/* ================= 2. VISUAL OVERVIEW SPLIT ================= */}
      <section className="service-overview-section">
        <div className="service-overview-container">
          
          <div className="overview-left-col">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">ENGINEERING CAPABILITIES</span>
            </div>

            <h2 className="overview-heading">
              Engineered for High-Reliability & Zero-Defect Manufacturing
            </h2>

            <p className="overview-lead-p">
              Every stage of our {service.title.toLowerCase()} process is governed by strict ISO 9001 and IPC quality frameworks, ensuring maximum yield, optimal signal integrity, and cost efficiency.
            </p>

            <ul className="overview-points-list">
              {service.overviewPoints.map((point, idx) => (
                <li key={idx} className="overview-point-item">
                  <div className="point-icon-wrap">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="point-text">{point}</span>
                </li>
              ))}
            </ul>

            <div className="overview-audit-callout">
              <div className="audit-icon-wrap">
                <ShieldCheck size={20} />
              </div>
              <div className="audit-text-block">
                <div className="audit-title">Complimentary DFM File Review</div>
                <div className="audit-desc">
                  Upload your Gerber, ODB++, or schematic files for an automated 24-hour design rule audit with our engineering team.
                </div>
              </div>
            </div>
          </div>

          <div className="overview-right-col">
            <div className="overview-secondary-image-wrapper">
              <img 
                src={service.secondaryImage} 
                alt={`${service.title} technical analysis`} 
                className="overview-secondary-img"
              />
              <div className="overview-secondary-overlay"></div>
              
              <div className="overview-image-spec-card">
                <div className="spec-card-title">Precision Inspection</div>
                <div className="spec-card-desc">100% Automated Optical, X-Ray & Electrical Verification</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. CORE CAPABILITIES CARDS ================= */}
      <section className="service-capabilities-section">
        <div className="service-capabilities-container">
          
          <div className="capabilities-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">TECHNICAL SPECIALTIES</span>
            </div>
            <h2 className="section-main-heading">
              Core Technical Deliverables
            </h2>
            <p className="section-sub-heading">
              Our advanced machinery and senior engineering desk support specialized requirements across aerospace, automotive, medical, and industrial automation.
            </p>
          </div>

          <div className="capabilities-grid">
            {service.coreCapabilities.map((cap) => {
              const IconComponent = iconMap[cap.icon] || Cpu
              return (
                <div key={cap.id} className="capability-card">
                  <div className="cap-card-top">
                    <div className="cap-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <span className="cap-card-number">SPEC</span>
                  </div>

                  <h3 className="cap-card-title">{cap.title}</h3>
                  <p className="cap-card-desc">{cap.description}</p>

                  <div className="cap-deliverables-wrap">
                    <div className="deliverables-label">KEY DELIVERABLES:</div>
                    <div className="deliverables-pills">
                      {cap.deliverables.map((item, dIdx) => (
                        <span key={dIdx} className="deliverable-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. TECHNICAL SPECIFICATIONS TABLE ================= */}
      <section id="technical-specs-table" className="service-specs-section">
        <div className="service-specs-container">
          
          <div className="specs-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">ENGINEERING TOLERANCES</span>
            </div>
            <h2 className="section-main-heading">
              Manufacturing & Design Specifications Matrix
            </h2>
            <p className="section-sub-heading">
              Standard vs. Advanced capability benchmarks for our {service.title.toLowerCase()} service lines.
            </p>
          </div>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th className="th-param">Parameter / Feature</th>
                  <th className="th-standard">Standard Commercial Level</th>
                  <th className="th-advanced">Advanced / Custom Engineering</th>
                </tr>
              </thead>
              <tbody>
                {service.technicalSpecs.map((spec, idx) => (
                  <tr key={idx}>
                    <td className="td-param">
                      <strong>{spec.parameter}</strong>
                    </td>
                    <td className="td-standard">
                      <span className="spec-badge-std">{spec.standard}</span>
                    </td>
                    <td className="td-advanced">
                      <span className="spec-badge-adv">{spec.advanced}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="specs-table-footer-note">
            <div className="note-icon"><HelpCircle size={15} /></div>
            <span>Need tighter tolerances or custom stackup configurations? Contact our senior engineering team for tailored production validation.</span>
          </div>

        </div>
      </section>

      {/* ================= 5. QUALITY GATES & WORKFLOW ================= */}
      <section className="service-workflow-section">
        <div className="service-workflow-container">
          
          <div className="workflow-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">PROCESS & VERIFICATION</span>
            </div>
            <h2 className="section-main-heading">
              Step-by-Step Quality Gate Pipeline
            </h2>
            <p className="section-sub-heading">
              From initial engineering ingestion to final quality release, every milestone is sealed by automated testing and certified sign-off.
            </p>
          </div>

          <div className="workflow-steps-grid">
            {service.workflowSteps.map((step, sIdx) => (
              <div key={sIdx} className="workflow-step-card">
                <div className="step-card-header">
                  <span className="step-num-badge">{step.stepNumber}</span>
                  <div className="step-gate-tag">
                    <CheckCircle2 size={13} />
                    <span>{step.qualityGate}</span>
                  </div>
                </div>

                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-desc">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. EQUIPMENT & STANDARDS ================= */}
      <section className="service-equipment-section">
        <div className="service-equipment-container">
          
          <div className="equipment-card-wrapper">
            <div className="equipment-col">
              <div className="equip-col-header">
                <Settings size={18} className="equip-col-icon" />
                <h3>Industrial Machinery & Systems</h3>
              </div>
              <ul className="equip-list">
                {service.equipmentAndStandards.tools.map((tool, tIdx) => (
                  <li key={tIdx} className="equip-list-item">
                    <span className="equip-dot"></span>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="equipment-col">
              <div className="equip-col-header">
                <Award size={18} className="equip-col-icon" />
                <h3>Quality & Compliance Certifications</h3>
              </div>
              <ul className="equip-list">
                {service.equipmentAndStandards.standards.map((std, sIdx) => (
                  <li key={sIdx} className="equip-list-item">
                    <CheckCircle2 size={16} className="std-check" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. TECHNICAL FAQS ================= */}
      <section className="service-faq-section">
        <div className="service-faq-container">
          
          <div className="faq-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">TECHNICAL FAQ</span>
            </div>
            <h2 className="section-main-heading">
              Frequently Asked Questions
            </h2>
            <p className="section-sub-heading">
              Detailed answers to common questions regarding engineering deliverables, file formats, lead times, and fabrication limits.
            </p>
          </div>

          <div className="faq-accordion-list">
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx
              return (
                <div key={fIdx} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-question-btn"
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= 8. ACTION CTA BANNER ================= */}
      <section className="service-cta-banner-section">
        <div className="service-cta-container">
          <div className="service-cta-card">
            <div className="cta-circuit-bg"></div>
            
            <div className="cta-badge">
              <Sparkles size={14} />
              <span>RAPID ESTIMATION & DFM REVIEW</span>
            </div>

            <h2 className="cta-title">
              Ready to Accelerate Your {service.title}?
            </h2>

            <p className="cta-desc">
              Submit your project files for an immediate engineering review, production timeline estimate, and competitive turnkey quote.
            </p>

            <div className="cta-actions">
              <button 
                type="button" 
                className="cta-primary-btn"
                onClick={() => openQuoteModal(service.quoteServiceKey)}
              >
                <span>REQUEST INSTANT QUOTE</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="cta-trust-row">
              <ShieldCheck size={16} />
              <span>100% NDA Protection • ISO 9001:2015 Registered • 24-Hour DFM Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. OTHER SERVICES EXPLORE ================= */}
      <section className="service-other-section">
        <div className="service-other-container">
          
          <div className="other-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">EXPLORE ATRONICS SERVICES</span>
            </div>
            <h2 className="other-main-heading">
              Complementary End-to-End Electronics Services
            </h2>
          </div>

          <div className="other-services-grid">
            {otherServices.map((other) => (
              <div key={other.slug} className="other-service-card">
                <Link to={`/services/${other.slug}`} className="other-card-link">
                  <div className="other-card-image-wrap">
                    <img src={other.heroImage} alt={other.title} className="other-card-img" />
                    <span className="other-category-tag">{other.category}</span>
                  </div>
                  <div className="other-card-body">
                    <h3 className="other-card-title">{other.title}</h3>
                    <p className="other-card-desc">{other.tagline}</p>
                    <div className="other-card-footer">
                      <span>EXPLORE SERVICE</span>
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </article>
  )
}

export default ServicePageTemplate
