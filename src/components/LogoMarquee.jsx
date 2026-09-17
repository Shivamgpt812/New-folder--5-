import React from 'react'
import { brandLogosList } from './BrandLogos'
import './LogoMarquee.css'

const LogoMarquee = ({ speed = 25, logos = brandLogosList, className = "" }) => {
  return (
    <div className={`logo-marquee-wrapper ${className}`.trim()}>
      <div className="logo-marquee-track" style={{ animationDuration: `${speed}s` }}>
        {/* First track */}
        <div className="logo-marquee-group">
          {logos.map((brand, index) => {
            const LogoComponent = brand.component
            return (
              <div key={`logo-1-${index}`} className="logo-marquee-item" title={brand.name}>
                <LogoComponent className="brand-vector-logo" />
              </div>
            )
          })}
        </div>
        
        {/* Duplicate track for seamless infinite scroll */}
        <div className="logo-marquee-group" aria-hidden="true">
          {logos.map((brand, index) => {
            const LogoComponent = brand.component
            return (
              <div key={`logo-2-${index}`} className="logo-marquee-item" title={brand.name}>
                <LogoComponent className="brand-vector-logo" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LogoMarquee
