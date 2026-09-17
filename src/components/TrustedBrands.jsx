import React from 'react'
import { ArrowRight } from 'lucide-react'
import LogoMarquee from './LogoMarquee'
import './TrustedBrands.css'

const TrustedBrands = () => {
  return (
    <div className="trusted-brands-wrapper">
      <div className="trusted-brands">
        <div className="brands-container">
          <div className="brands-header">
            <div className="brands-title">TRUSTED BY</div>
            <div className="brands-subtitle">INNOVATORS WORLDWIDE</div>
          </div>
          
          <div className="brands-divider"></div>
          
          <div className="brands-marquee-container">
            <LogoMarquee speed={26} />
          </div>
          
          <button className="brands-more" aria-label="View more partners">
            <span>AND MANY MORE</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrustedBrands
