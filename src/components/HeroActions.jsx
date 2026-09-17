import React from 'react'
import { ArrowRight, Upload } from 'lucide-react'
import useRipple from '../hooks/useRipple'
import { useQuote } from '../context/QuoteContext'
import './HeroActions.css'

const HeroActions = () => {
  const createRipple = useRipple()
  const { openQuoteModal } = useQuote()

  const handleQuoteClick = (e, service) => {
    createRipple(e)
    openQuoteModal(service)
  }

  return (
    <div className="hero-actions">
      <button 
        className="action-button primary ripple" 
        onClick={(e) => handleQuoteClick(e, 'Turnkey PCB Assembly')}
      >
        GET PCB DESIGN QUOTE
        <ArrowRight size={20} />
      </button>
      <button 
        className="action-button secondary ripple" 
        onClick={(e) => handleQuoteClick(e, 'Multi-Layer Fabrication')}
      >
        <Upload size={18} />
        UPLOAD GERBER (FABRICATION)
      </button>
    </div>
  )
}

export default HeroActions
