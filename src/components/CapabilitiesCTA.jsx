import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useQuote } from '../context/QuoteContext'
import './CapabilitiesCTA.css'

const CapabilitiesCTA = () => {
  const { openQuoteModal } = useQuote()

  return (
    <div className="capabilities-cta">
      <button 
        className="capabilities-cta__button"
        onClick={() => openQuoteModal('Multi-Layer Fabrication')}
      >
        Get a PCB Design Quote
        <ArrowRight className="capabilities-cta__icon" />
      </button>
    </div>
  )
}

export default CapabilitiesCTA
