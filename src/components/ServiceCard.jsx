import React from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import './ServiceCard.css'

const ServiceCard = ({ icon, iconBg, iconColor, title, description, accentColor, delay = 0 }) => {
  return (
    <AnimateOnScroll animation="on-scroll" delay={delay}>
      <div className="service-card">
        <div className="service-card-icon-container" style={{ background: iconBg }}>
          <div className="service-card-icon" style={{ color: iconColor }}>
            {icon}
          </div>
        </div>
        
        <h3 className="service-card-title">{title}</h3>
        
        <p className="service-card-description">{description}</p>
        
        <div className="service-card-link" style={{ color: accentColor }}>
          Learn More <span className="service-card-arrow">→</span>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export default ServiceCard
