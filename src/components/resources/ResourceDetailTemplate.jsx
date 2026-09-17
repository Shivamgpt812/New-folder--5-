import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Lightbulb, 
  ShieldAlert, 
  FileCheck, 
  ChevronRight,
  List,
  ChevronDown,
  Sparkles
} from 'lucide-react'
import { getResourceBySlug, getRelatedResources, RESOURCES_DATA } from '../../data/resources'
import { useQuote } from '../../context/QuoteContext'
import './ResourceDetailTemplate.css'

function ResourceDetailTemplate() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { openQuoteModal } = useQuote()
  
  const [activeSectionId, setActiveSectionId] = useState('')
  const [mobileTocOpen, setMobileTocOpen] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  const resource = getResourceBySlug(slug)

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0)
    setCopiedLink(false)
  }, [slug])

  // Scroll spy for sticky table of contents
  useEffect(() => {
    if (!resource || !resource.tableOfContents) return

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180
      for (const item of resource.tableOfContents) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height + 60) {
            setActiveSectionId(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [resource])

  if (!resource) {
    return (
      <div className="resource-not-found-container">
        <div className="not-found-card">
          <AlertCircle size={48} className="not-found-icon" />
          <h1 className="not-found-title">Engineering Resource Not Found</h1>
          <p className="not-found-desc">
            The requested technical document or guide (slug: <code>{slug}</code>) could not be located.
          </p>
          <div className="not-found-actions">
            <Link to="/resources" className="not-found-btn-primary">
              <ArrowLeft size={16} />
              <span>Back to Resources Hub</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const related = getRelatedResources(resource.relatedSlugs)

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSectionId(id)
      setMobileTocOpen(false)
    }
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    }
  }

  return (
    <article className="resource-detail-page">
      <div className="detail-bg-pattern"></div>

      {/* ================= 1. BREADCRUMBS & HERO ================= */}
      <header className="detail-hero-section">
        <div className="detail-hero-container">
          
          {/* Breadcrumbs */}
          <nav className="detail-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={13} className="breadcrumb-separator" />
            <Link to="/resources" className="breadcrumb-link">Resources</Link>
            <ChevronRight size={13} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{resource.category}</span>
          </nav>

          {/* Category Tag & Metadata */}
          <div className="detail-header-meta-row">
            <span className="detail-category-pill">{resource.category}</span>
            <div className="detail-meta-group">
              <span className="meta-pill">
                <Clock size={13} />
                <span>{resource.readTime}</span>
              </span>
              <span className="meta-divider">•</span>
              <span className="meta-pill">
                <Calendar size={13} />
                <span>Updated {resource.updatedAt}</span>
              </span>
            </div>
          </div>

          <h1 className="detail-main-title">
            {resource.title}
          </h1>

          <p className="detail-lead-description">
            {resource.description}
          </p>

          {/* Author Block & Share */}
          <div className="detail-author-share-bar">
            <div className="detail-author-info">
              <div className="author-avatar-wrap">
                <img 
                  src={resource.author.avatar} 
                  alt={resource.author.name} 
                  className="author-avatar-img" 
                />
              </div>
              <div className="author-text-details">
                <span className="author-name">{resource.author.name}</span>
                <span className="author-role">{resource.author.role}</span>
              </div>
            </div>

            <div className="detail-share-actions">
              <button 
                type="button" 
                className="detail-share-btn" 
                onClick={handleShare}
                aria-label="Share article"
              >
                <Share2 size={15} />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="detail-hero-image-wrap">
            <img 
              src={resource.image} 
              alt={resource.title} 
              className="detail-hero-img"
            />
            <div className="detail-hero-img-overlay"></div>
            
            <div className="detail-image-badge">
              <Sparkles size={14} />
              <span>ATRONICS PEER-REVIEWED TECHNICAL SPECIFICATION</span>
            </div>
          </div>

        </div>
      </header>

      {/* ================= 2. CONTENT & TOC SIDEBAR ================= */}
      <main className="detail-body-section">
        <div className="detail-body-container">
          
          {/* Mobile Collapsible TOC */}
          {resource.tableOfContents && resource.tableOfContents.length > 0 && (
            <div className="mobile-toc-container">
              <button 
                type="button" 
                className="mobile-toc-toggle"
                onClick={() => setMobileTocOpen(!mobileTocOpen)}
              >
                <div className="mobile-toc-toggle-left">
                  <List size={16} />
                  <span>On This Page ({resource.tableOfContents.length} Sections)</span>
                </div>
                <ChevronDown size={16} className={`mobile-toc-chevron ${mobileTocOpen ? 'rotated' : ''}`} />
              </button>

              {mobileTocOpen && (
                <ul className="mobile-toc-list">
                  {resource.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`} 
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`mobile-toc-link ${activeSectionId === item.id ? 'active' : ''}`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Left / Center: Article Content Column */}
          <div className="detail-content-column">
            
            {resource.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="article-section-block">
                <h2 className="article-section-h2">{sec.title}</h2>

                {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="article-p">{p}</p>
                ))}

                {sec.bullets && (
                  <ul className="article-bullet-list">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}

                {/* Callout Box */}
                {sec.callout && (
                  <div className={`article-callout callout-${sec.callout.type}`}>
                    <div className="callout-header">
                      {sec.callout.type === 'engineering-note' && <Info size={16} />}
                      {sec.callout.type === 'design-tip' && <Lightbulb size={16} />}
                      {sec.callout.type === 'manufacturing-note' && <FileCheck size={16} />}
                      {sec.callout.type === 'important' && <ShieldAlert size={16} />}
                      <span className="callout-title">{sec.callout.title}</span>
                    </div>
                    <p className="callout-text">{sec.callout.text}</p>
                  </div>
                )}

                {/* Responsive Table */}
                {sec.table && (
                  <div className="article-table-wrapper">
                    <table className="article-table">
                      <thead>
                        <tr>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Article Tags */}
            <div className="article-tags-row">
              <span className="tags-label">TOPIC TAGS:</span>
              <div className="tags-list">
                {resource.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="article-tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* In-Article DFM Quote Banner */}
            <div className="article-dfm-banner">
              <div className="dfm-banner-content">
                <div className="dfm-banner-badge">
                  <CheckCircle2 size={14} />
                  <span>24-HOUR DFM AUDIT</span>
                </div>
                <h3 className="dfm-banner-title">Need DFM Review for Your Design?</h3>
                <p className="dfm-banner-desc">
                  Submit your Gerber files or schematic package to our senior engineering desk for a comprehensive manufacturability and stackup report.
                </p>
                <button 
                  type="button" 
                  className="dfm-banner-btn"
                  onClick={() => openQuoteModal('Turnkey PCB Assembly')}
                >
                  <span>REQUEST DFM REVIEW</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Right: Sticky Desktop Table of Contents */}
          <aside className="detail-sidebar-column">
            <div className="sticky-toc-card">
              <div className="toc-header">
                <List size={16} />
                <span>ON THIS PAGE</span>
              </div>

              {resource.tableOfContents && (
                <ul className="toc-list">
                  {resource.tableOfContents.map((item) => {
                    const isActive = activeSectionId === item.id
                    return (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`toc-link ${isActive ? 'active' : ''}`}
                        >
                          <span className="toc-bullet"></span>
                          <span className="toc-text">{item.title}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              )}

              {/* Sidebar Quick Action */}
              <div className="sidebar-quote-box">
                <div className="sidebar-quote-title">Have Questions?</div>
                <p className="sidebar-quote-text">
                  Our engineering team is available for real-time stackup consultation.
                </p>
                <Link to="/contact" className="sidebar-contact-link">
                  <span>Contact Engineering Desk</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* ================= 3. RELATED RESOURCES ================= */}
      <section className="detail-related-section">
        <div className="detail-related-container">
          
          <div className="related-header">
            <div className="related-eyebrow">
              <span className="related-eyebrow-line"></span>
              <span className="related-eyebrow-text">CONTINUE EXPLORING</span>
            </div>
            <h2 className="related-main-heading">
              Related Engineering Resources
            </h2>
          </div>

          <div className="related-cards-grid">
            {related.map((item) => (
              <article key={item.slug} className="related-card">
                <Link to={`/resources/${item.slug}`} className="related-link">
                  <div className="related-image-wrap">
                    <img src={item.image} alt={item.title} className="related-img" />
                    <span className="related-category">{item.category}</span>
                  </div>
                  <div className="related-body">
                    <div className="related-meta">
                      <Clock size={12} />
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="related-title">{item.title}</h3>
                    <p className="related-desc">{item.description}</p>
                    <div className="related-footer">
                      <span>READ MORE</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>
    </article>
  )
}

export default ResourceDetailTemplate
