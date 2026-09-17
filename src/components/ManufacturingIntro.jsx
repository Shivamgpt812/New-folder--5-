import React from 'react'
import './ManufacturingIntro.css'

const ManufacturingIntro = () => {
  return (
    <div className="manufacturing-intro">
      <h2 className="manufacturing-intro__heading">
        <span className="manufacturing-intro__heading-line1">From Design</span>
        <span className="manufacturing-intro__heading-line2">to <span className="manufacturing-intro__heading-highlight">Real Products</span></span>
      </h2>
      <p className="manufacturing-intro__description">
        State-of-the-art manufacturing capabilities that turn complex designs into high-quality, reliable PCBs — on time and at scale.
      </p>
    </div>
  )
}

export default ManufacturingIntro
