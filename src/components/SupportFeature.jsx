import React from 'react'
import './SupportFeature.css'

const SupportFeature = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="support-feature">
      <div className="support-feature__icon-container">
        <Icon className="support-feature__icon" />
      </div>
      <div className="support-feature__content">
        <h4 className="support-feature__title">{title}</h4>
        <p className="support-feature__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default SupportFeature
