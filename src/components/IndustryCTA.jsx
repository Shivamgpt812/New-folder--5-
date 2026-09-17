import React from 'react'
import { ArrowRight, Play } from 'lucide-react'
import './IndustryCTA.css'

const IndustryCTA = () => {
  return (
    <div className="industry-cta">
      <button className="industry-cta__primary">
        <span>Discuss Your Industry Needs</span>
        <ArrowRight size={20} strokeWidth={2.5} />
      </button>
      <button className="industry-cta__secondary">
        <div className="industry-cta__play-icon">
          <Play size={18} strokeWidth={2.5} fill="#149AFF" />
        </div>
        <div className="industry-cta__secondary-text">
          <span className="industry-cta__secondary-title">Watch</span>
          <span className="industry-cta__secondary-subtitle">Our Industries</span>
        </div>
      </button>
    </div>
  )
}

export default IndustryCTA
