import React from 'react'
import { 
  MessageSquare, 
  Users, 
  ShieldCheck, 
  Cpu, 
  ArrowRight 
} from 'lucide-react'
import './ContactHero.css'

function ContactHero() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Quick Response',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      subtitle: 'From concept to production'
    },
    {
      icon: ShieldCheck,
      title: 'Confidential & Secure',
      subtitle: 'Your ideas are safe with us'
    }
  ]

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="contact-hero">
      {/* Background blueprint subtle pattern */}
      <div className="contact-hero-bg-pattern"></div>

      <div className="contact-hero-layout-wrapper">
        <div className="contact-hero-container">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="contact-hero-left">
            
            {/* Top Badge */}
            <div className="contact-hero-badge">
              <span className="contact-badge-bar"></span>
              <span className="contact-badge-text">CONTACT US</span>
            </div>

            {/* Headline with Handwritten Annotation */}
            <div className="contact-headline-wrap">
              <h1 className="contact-hero-headline">
                Let’s Build<br />
                What’s <span className="contact-headline-accent">Next</span>
              </h1>

              {/* Handwritten Blue Annotation */}
              <div className="contact-handwritten-badge">
                <span className="contact-handwritten-text">Ideas<br />to Real<br />Products</span>
                <svg width="60" height="14" viewBox="0 0 60 14" fill="none" className="contact-handwritten-underline">
                  <path d="M2 11C18 3 42 4 58 10" stroke="#087BFF" strokeWidth="2.4" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Description Subtitle */}
            <p className="contact-hero-description">
              Have a project in mind or need expert advice? Our team is here to help you with PCB design, engineering, and manufacturing solutions.
            </p>

            {/* Three Feature Pill Cards */}
            <div className="contact-feature-pills">
              {features.map((item, idx) => {
                const IconComp = item.icon
                return (
                  <div className="contact-feature-pill" key={idx}>
                    <div className="contact-feature-icon">
                      <IconComp size={18} />
                    </div>
                    <div className="contact-feature-info">
                      <span className="contact-feature-title">{item.title}</span>
                      <span className="contact-feature-subtitle">{item.subtitle}</span>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

          {/* ================= RIGHT VISUAL COLUMN ================= */}
          <div className="contact-hero-right">
            <div className="contact-main-image-card">
              <img 
                src="/images/contact-hero.jpg" 
                alt="Precision automated SMT electronics manufacturing" 
                className="contact-main-image"
              />

              {/* Floating Pill Card at Bottom */}
              <div className="contact-floating-card" onClick={scrollToForm} role="button" tabIndex="0">
                <div className="contact-floating-icon">
                  <Cpu size={20} />
                </div>
                <div className="contact-floating-content">
                  <span className="contact-floating-label">Partner with</span>
                  <strong className="contact-floating-title">Electronics Experts</strong>
                </div>
                <div className="contact-floating-arrow-btn">
                  <ArrowRight size={17} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactHero
