import React from 'react'
import './ManufacturingFeature.css'

const ManufacturingFeature = ({ icon: Icon, title, description }) => {
  return (
    <div className="manufacturing-feature">
      <div className="manufacturing-feature__icon-box">
        <Icon className="manufacturing-feature__icon" size={28} />
      </div>
      <div className="manufacturing-feature__content">
        <h3 className="manufacturing-feature__title">{title}</h3>
        <p className="manufacturing-feature__description">{description}</p>
      </div>
    </div>
  )
}

export default ManufacturingFeature
