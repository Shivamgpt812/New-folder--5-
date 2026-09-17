import React from 'react'
import { Play } from 'lucide-react'
import './ProcessCTA.css'

const ProcessCTA = () => {
  return (
    <div className="process-cta">
      <div className="process-cta-play">
        <Play size={20} />
      </div>
      <div className="process-cta-text">
        <div className="process-cta-watch">Watch</div>
        <div className="process-cta-label">Our Process</div>
      </div>
    </div>
  )
}

export default ProcessCTA
