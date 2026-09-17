import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, ShieldCheck, Clock, FileCheck } from 'lucide-react'
import { useQuote } from '../../context/QuoteContext'
import './ResourcesExpertHelp.css'

function ResourcesExpertHelp() {
  const { openQuoteModal } = useQuote()

  return (
    <section className="resources-expert-section">
      <div className="resources-expert-container">
        
        {/* Left: Text & Dual Actions */}
        <div className="expert-left-col">
          <div className="expert-eyebrow">
            <span className="expert-eyebrow-line"></span>
            <span className="expert-eyebrow-text">ENGINEERING DESK SUPPORT</span>
          </div>

          <h2 className="expert-main-heading">
            Still Have Questions?
          </h2>

          <p className="expert-description">
            Not sure which design approach, manufacturing process or PCB capability is right for your project? Talk directly with our senior engineering and DFM team.
          </p>

          <div className="expert-guarantees-list">
            <div className="expert-guarantee-item">
              <Clock size={16} />
              <span>Direct access to Senior DFM & SMT Process Engineers</span>
            </div>
            <div className="expert-guarantee-item">
              <ShieldCheck size={16} />
              <span>Free 24-hour preliminary Gerber review & stackup advice</span>
            </div>
          </div>

          <div className="expert-actions-row">
            <Link to="/contact" className="expert-btn-primary">
              <MessageSquare size={17} />
              <span>TALK TO AN ENGINEER</span>
              <ArrowRight size={17} />
            </Link>

            <button 
              type="button" 
              className="expert-btn-secondary"
              onClick={() => openQuoteModal()}
            >
              <FileCheck size={17} />
              <span>REQUEST A QUOTE</span>
            </button>
          </div>
        </div>

        {/* Right: Realistic Engineer Visual */}
        <div className="expert-right-col">
          <div className="expert-image-card">
            <img 
              src="/images/process-engineer.webp" 
              alt="ATRONICS Lead Hardware Engineer" 
              className="expert-image"
            />
            <div className="expert-image-overlay"></div>

            <div className="expert-floating-card">
              <div className="expert-card-avatar">
                <span className="online-indicator"></span>
              </div>
              <div className="expert-card-text">
                <span className="card-name">Engineering Hotline Active</span>
                <span className="card-role">Typical response time: &lt; 2 hours</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ResourcesExpertHelp
