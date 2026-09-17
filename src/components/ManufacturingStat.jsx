import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import './ManufacturingStat.css'

const ManufacturingStat = ({ icon: Icon, value, label }) => {
  return (
    <div className="manufacturing-stat">
      <div className="manufacturing-stat__icon-box">
        <Icon className="manufacturing-stat__icon" size={32} />
      </div>
      <div className="manufacturing-stat__content">
        <div className="manufacturing-stat__value">
          <AnimatedCounter value={value} />
        </div>
        <div className="manufacturing-stat__label">{label}</div>
      </div>
    </div>
  )
}

export default ManufacturingStat
