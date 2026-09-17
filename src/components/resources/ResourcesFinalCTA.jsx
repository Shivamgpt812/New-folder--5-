import React from 'react'
import { ArrowRight, Cpu, ShieldCheck } from 'lucide-react'
import { useQuote } from '../../context/QuoteContext'
import './ResourcesFinalCTA.css'

function ResourcesFinalCTA() {
  const { openQuoteModal } = useQuote()

  return (
    <section className="resources-final-cta-section">
      <div className="final-cta-circuit-bg"></div>

      <div className="resources-final-cta-container">
        
        <div className="final-cta-card">
          <div className="final-cta-badge">
            <Cpu size={14} />
            <span>ELECTRONICS MANUFACTURING & DFM</span>
          </div>

          <h2 className="final-cta-heading">
            Build with Confidence.
          </h2>

          <p className="final-cta-subheading">
            Better engineering decisions start with better information. Leverage ATRONICS design, fabrication, and SMT assembly expertise for your next hardware build.
          </p>

          <div className="final-cta-actions">
            <button 
              type="button" 
              className="final-cta-btn"
              onClick={() => openQuoteModal('Turnkey PCB Assembly')}
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="final-cta-trust">
            <ShieldCheck size={16} />
            <span>Guaranteed 24-Hour Engineering DFM Review • Mutual NDA Protected</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ResourcesFinalCTA
