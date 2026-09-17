import React from 'react'
import './PCBInfoCard.css'

const PCBInfoCard = ({ icon, title, description, position }) => {
  const card1Style = position === '1' ? {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)'
  } : {};
  
  return (
    <div className={`pcb-info-card pcb-info-card-${position}`} style={card1Style}>
      <div className="pcb-info-card-icon">
        {icon}
      </div>
      <div className="pcb-info-card-content">
        <h4 className="pcb-info-card-title">{title}</h4>
        <p className="pcb-info-card-description">{description}</p>
      </div>
    </div>
  )
}

export default PCBInfoCard
