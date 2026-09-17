import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen, Sparkles, CheckCircle2, Shield } from 'lucide-react'
import { getFeaturedResource } from '../../data/resources'
import './ResourcesFeatured.css'

function ResourcesFeatured() {
  const featured = getFeaturedResource()

  if (!featured) return null

  return (
    <section className="resources-featured-section">
      <div className="resources-featured-container">
        
        {/* Section Header */}
        <div className="featured-top-bar">
          <div className="featured-eyebrow">
            <span className="featured-eyebrow-line"></span>
            <span className="featured-eyebrow-text">FEATURED RESOURCE</span>
          </div>
          <div className="featured-tag-badge">
            <Sparkles size={14} />
            <span>TOP RECOMMENDED READ</span>
          </div>
        </div>

        {/* Large Editorial Composition Card */}
        <div className="featured-editorial-card">
          
          {/* Visual Side */}
          <div className="featured-visual-col">
            <div className="featured-image-frame">
              <img 
                src={featured.image} 
                alt={featured.title} 
                className="featured-main-image"
              />
              <div className="featured-image-gradient"></div>
              
              <div className="featured-overlay-badge">
                <Shield size={14} />
                <span>DFM & FABRICATION SPEC</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="featured-content-col">
            <div className="featured-cat-row">
              <span className="featured-category-pill">{featured.category}</span>
              <div className="featured-meta-group">
                <span className="meta-item">
                  <Clock size={13} />
                  <span>{featured.readTime}</span>
                </span>
                <span className="meta-divider">•</span>
                <span className="meta-item">
                  <BookOpen size={13} />
                  <span>{featured.badge}</span>
                </span>
              </div>
            </div>

            <h2 className="featured-headline">
              Design Better.<br />
              <span className="featured-headline-blue">Build Smarter.</span>
            </h2>

            <h3 className="featured-article-title">
              {featured.title}
            </h3>

            <p className="featured-description">
              {featured.description}
            </p>

            {/* Quick Highlights */}
            <div className="featured-key-points">
              <div className="key-point-item">
                <CheckCircle2 size={15} />
                <span>Trace width, annular rings & drill aspect ratios</span>
              </div>
              <div className="key-point-item">
                <CheckCircle2 size={15} />
                <span>Solder mask dams & BGA pad geometry</span>
              </div>
            </div>

            {/* Read CTA Link */}
            <div className="featured-cta-row">
              <Link to={`/resources/${featured.slug}`} className="featured-read-btn">
                <span>READ COMPLETE GUIDE</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ResourcesFeatured
