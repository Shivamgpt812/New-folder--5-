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
  Sparkles,
  Award,
  ArrowUpRight,
  Wifi,
  HelpCircle
} from 'lucide-react'
import { useQuote } from '../../context/QuoteContext'
import { getAllIndustries } from '../../data/industries'
import './IndustryPageTemplate.css'

const iconMap = {
  Zap: Zap,
  Layers: Layers,
  CheckCircle2: CheckCircle2,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Wifi: Wifi
}

function IndustryPageTemplate({ industry }) {
  const { openQuoteModal } = useQuote()
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  if (!industry) return null

  const allIndustries = getAllIndustries()
  const otherIndustries = allIndustries.filter(i => i.slug !== industry.slug)

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const scrollToApps = (e) => {
    e.preventDefault()
    const el = document.getElementById('industry-applications-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <article className="industry-detail-view">
      <div className="industry-bg-dot-pattern"></div>

      {/* ================= 1. HERO SECTION ================= */}
      <header className="industry-hero-section">
        <div className="industry-hero-container">
          
          {/* Breadcrumbs */}
          <nav className="industry-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="industry-crumb-link">Home</Link>
            <ChevronRight size={13} className="industry-crumb-sep" />
            <span className="industry-crumb-parent">Industries</span>
            <ChevronRight size={13} className="industry-crumb-sep" />
            <span className="industry-crumb-current">{industry.title}</span>
          </nav>

          {/* Sector Badge & Certifications */}
          <div className="industry-hero-meta-row">
            <span className="industry-sector-badge">{industry.sectorBadge || 'INDUSTRY HARDWARE SOLUTIONS'}</span>
            <div className="industry-cert-pill">
              <Award size={14} />
              <span>{industry.certifications ? industry.certifications[0] : 'ISO 9001:2015 CERTIFIED'}</span>
            </div>
          </div>

          {/* Titles */}
          <h1 className="industry-main-heading">
            {industry.title}
          </h1>

          <p className="industry-tagline-text">
            {industry.tagline}
          </p>

          <p className="industry-hero-desc">
            {industry.heroDescription}
          </p>

          {/* Quick Metrics Bar */}
          <div className="industry-metrics-grid">
            {industry.metrics.map((metric, idx) => (
              <div key={idx} className="industry-metric-card">
                <div className="metric-card-value">{metric.value}</div>
                <div className="metric-card-label">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="industry-hero-actions">
            <button 
              type="button" 
              className="industry-btn-primary"
              onClick={() => openQuoteModal(industry.quoteServiceKey)}
            >
              <span>DISCUSS YOUR INDUSTRY NEEDS</span>
              <ArrowRight size={16} />
            </button>
            
            <a 
              href="#industry-applications-section" 
              onClick={scrollToApps} 
              className="industry-btn-secondary"
            >
              <span>VIEW APPLICATION ARCHITECTURES</span>
              <ChevronDown size={16} />
            </a>
          </div>

          {/* Main Hero Visual Frame */}
          <div className="industry-hero-image-frame">
            <img 
              src={industry.heroImage} 
              alt={industry.title} 
              className="industry-hero-img"
            />
            <div className="industry-hero-img-gradient"></div>
            
            <div className="industry-image-floating-badge">
              <Sparkles size={15} />
              <span>ATRONICS CERTIFIED INDUSTRY HARDWARE</span>
            </div>
          </div>

        </div>
      </header>

      {/* ================= 2. CHALLENGES & SOLUTIONS ================= */}
      <section className="industry-challenges-section">
        <div className="industry-challenges-container">
          
          <div className="challenges-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">ENGINEERING DEMANDS</span>
            </div>
            <h2 className="section-main-heading">
              Key Technical Challenges Solved
            </h2>
            <p className="section-sub-heading">
              Our hardware engineering workflows solve the unique environmental, electrical, and regulatory hurdles of the {industry.title.toLowerCase()} sector.
            </p>
          </div>

          <div className="challenges-grid">
            {industry.challengesSolved.map((item, cIdx) => {
              const IconComp = iconMap[item.icon] || ShieldCheck
              return (
                <div key={cIdx} className="challenge-card">
                  <div className="challenge-icon-box">
                    <IconComp size={22} />
                  </div>
                  <h3 className="challenge-card-title">{item.title}</h3>
                  <p className="challenge-card-desc">{item.description}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= 3. APPLICATIONS & SUB-SYSTEMS ================= */}
      <section id="industry-applications-section" className="industry-apps-section">
        <div className="industry-apps-container">
          
          <div className="apps-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">HARDWARE ARCHITECTURES</span>
            </div>
            <h2 className="section-main-heading">
              Representative Application Sub-Systems
            </h2>
            <p className="section-sub-heading">
              Specialized multi-layer board assemblies, high-power controllers, and sensor interfaces engineered for production.
            </p>
          </div>

          <div className="apps-grid">
            {industry.applications.map((app, aIdx) => (
              <div key={aIdx} className="app-card">
                <div className="app-card-top">
                  <span className="app-num-tag">0{aIdx + 1}</span>
                  <div className="app-badge-pill">PRODUCTION READY</div>
                </div>

                <h3 className="app-card-title">{app.name}</h3>
                <p className="app-card-desc">{app.description}</p>

                <div className="app-deliverables-wrap">
                  <div className="app-deliverables-label">KEY DELIVERABLES:</div>
                  <div className="app-deliverables-pills">
                    {app.deliverables.map((deliv, dIdx) => (
                      <span key={dIdx} className="app-deliverable-chip">
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. REGULATORY & QUALITY STANDARDS ================= */}
      <section className="industry-standards-section">
        <div className="industry-standards-container">
          
          <div className="standards-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">COMPLIANCE & TESTING</span>
            </div>
            <h2 className="section-main-heading">
              Regulatory Standards & Verification Matrix
            </h2>
            <p className="section-sub-heading">
              Every assembly is engineered and certified against mandatory global standards for safety, immunity, and reliability.
            </p>
          </div>

          <div className="standards-table-wrapper">
            <table className="standards-table">
              <thead>
                <tr>
                  <th>Regulatory Standard</th>
                  <th>Scope & Application</th>
                  <th>Verification Level</th>
                </tr>
              </thead>
              <tbody>
                {industry.standardsMatrix.map((std, sIdx) => (
                  <tr key={sIdx}>
                    <td className="td-std-name">
                      <strong>{std.standard}</strong>
                    </td>
                    <td className="td-std-scope">{std.scope}</td>
                    <td className="td-std-status">
                      <span className="status-badge-verified">
                        <CheckCircle2 size={13} />
                        <span>{std.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ================= 5. TECHNICAL FAQS ================= */}
      <section className="industry-faq-section">
        <div className="industry-faq-container">
          
          <div className="faq-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">SECTOR FAQS</span>
            </div>
            <h2 className="section-main-heading">
              Frequently Asked Questions
            </h2>
            <p className="section-sub-heading">
              Engineering guidelines, component sourcing policies, and testing standards for {industry.title.toLowerCase()}.
            </p>
          </div>

          <div className="industry-faq-accordion">
            {industry.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx
              return (
                <div key={fIdx} className={`industry-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button 
                    type="button" 
                    className="industry-faq-btn"
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-btn-text">{faq.question}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="industry-faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ================= 6. ACTION CTA BANNER ================= */}
      <section className="industry-cta-banner-section">
        <div className="industry-cta-container">
          <div className="industry-cta-card">
            <div className="cta-circuit-bg"></div>
            
            <div className="cta-badge">
              <Sparkles size={14} />
              <span>DEDICATED INDUSTRY CONSULTATION</span>
            </div>

            <h2 className="cta-title">
              Let's Engineer Your {industry.title} Hardware
            </h2>

            <p className="cta-desc">
              Connect with our senior engineering desk for a confidential schematic review, DFM audit, and comprehensive turnkey quotation.
            </p>

            <div className="cta-actions">
              <button 
                type="button" 
                className="cta-primary-btn"
                onClick={() => openQuoteModal(industry.quoteServiceKey)}
              >
                <span>REQUEST INDUSTRY QUOTE</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="cta-trust-row">
              <ShieldCheck size={16} />
              <span>Full NDA Protection • ISO 9001:2015 Registered • 100% Traceable Components</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. EXPLORE OTHER INDUSTRIES ================= */}
      <section className="industry-other-section">
        <div className="industry-other-container">
          
          <div className="other-header">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">OTHER SECTORS SERVED</span>
            </div>
            <h2 className="other-main-heading">
              Explore Our Other Industry Capabilities
            </h2>
          </div>

          <div className="industry-other-grid">
            {otherIndustries.slice(0, 4).map((other) => (
              <div key={other.slug} className="industry-other-card">
                <Link to={`/industries/${other.slug}`} className="other-card-link">
                  <div className="other-card-image-wrap">
                    <img src={other.secondaryImage || other.heroImage} alt={other.title} className="other-card-img" />
                    <span className="other-category-tag">{other.sectorBadge || 'INDUSTRY'}</span>
                  </div>
                  <div className="other-card-body">
                    <h3 className="other-card-title">{other.title}</h3>
                    <p className="other-card-desc">{other.tagline}</p>
                    <div className="other-card-footer">
                      <span>VIEW SECTOR</span>
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

export default IndustryPageTemplate
