import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { useQuote } from '../context/QuoteContext'
import './AboutFinalCTA.css'

function AboutFinalCTA() {
  const { openQuoteModal } = useQuote()

  return (
    <section className="about-final-cta">
      <div className="about-cta-container">
        <div className="about-cta-content">
          <h2 className="about-cta-headline">
            Have a Hardware Project in Mind?
          </h2>
          <p className="about-cta-description">
            Let's turn your idea into a reliable, production-ready product.
          </p>
          <div className="about-cta-buttons">
            <button className="about-cta-btn-primary" onClick={() => openQuoteModal()}>
              GET A QUOTE
              <ArrowRight size={18} />
            </button>
            <Link to="/contact" className="about-cta-btn-secondary">
              <Mail size={18} />
              CONTACT OUR TEAM
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutFinalCTA
