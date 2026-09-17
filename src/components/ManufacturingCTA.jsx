import React from 'react'
import { Play, ArrowRight } from 'lucide-react'
import './ManufacturingCTA.css'

const ManufacturingCTA = () => {
  return (
    <div className="manufacturing-cta">
      <button className="manufacturing-cta__primary">
        Explore Our Manufacturing
        <ArrowRight size={18} />
      </button>
      
      <div className="manufacturing-cta__watch">
        <button className="manufacturing-cta__play-button">
          <Play size={20} fill="white" />
        </button>
        <div className="manufacturing-cta__watch-content">
          <span className="manufacturing-cta__watch-text">Watch Our Process</span>
          <div className="manufacturing-cta__watch-line"></div>
        </div>
      </div>
    </div>
  )
}

export default ManufacturingCTA
