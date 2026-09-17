import React from 'react'
import './GlassInfoCard.css'

const GlassInfoCard = ({ icon, title, subtitle, description, className = '' }) => {
  return (
    <div className={`glass-info-card ${className}`}>
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        {subtitle && <div className="card-subtitle">{subtitle}</div>}
        <div className="card-divider"></div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  )
}

export default GlassInfoCard
